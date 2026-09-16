(() => {
  'use strict';

  const canvas = document.getElementById('world');
  const DESIGN = { w: 1280, h: 720 };
  const state = {
    day: 7,
    weekday: 'SAT',
    energy: 68,
    coins: 24,
    wheat: 5,
    wood: 2,
    eggs: 0,
    tool: null,
    wheatCollected: false,
    coinCollected: false,
    eggCollected: false,
    stumpChopped: false,
    hovered: null,
    target: null,
    toastTimer: null,
    dragging: false,
    player: { x: -1.3, z: 1.8, targetX: -1.3, targetZ: 1.8 },
  };

  const weekdayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const toolNames = { harvest: 'HARVEST', chop: 'CHOP', plant: 'PLANT' };
  const toolTitles = { harvest: 'Thu hoạch', chop: 'Đốn gỗ', plant: 'Gieo hạt' };
  const entityList = [
    { id: 'house', x: 0.5, z: -9, y: 0, screenRadius: 100, action: 'Mở lịch', title: 'Cottage của Hana', description: 'Một căn nhà nhỏ, đủ ấm cho những ngày dài.', icon: '⌂' },
    { id: 'wheat', x: 7.6, z: 4.4, y: 0, screenRadius: 118, action: 'Làm vườn', title: 'Ruộng lúa vàng', description: 'Những bông lúa đang cúi đầu dưới nắng.', icon: '✦' },
    { id: 'stump', x: -4.7, z: 0.5, y: 0, screenRadius: 62, action: 'Đốn gỗ', title: 'Gốc cây già', description: 'Một ít gỗ thông sẽ rất hữu ích hôm nay.', icon: '↗' },
    { id: 'coin', x: -8, z: 3.2, y: 0, screenRadius: 46, action: 'Nhặt lên', title: 'Xu nắng', description: 'Có thứ gì đó lấp lánh trong đám cỏ.', icon: '✧' },
    { id: 'chicken', x: 3.8, z: -1.9, y: 0, screenRadius: 55, action: 'Xem thử', title: 'Gà Mận', description: 'Cục tác! Hình như có một quả trứng mới.', icon: '♧' },
    { id: 'lamp', x: -8.1, z: -2.6, y: 0, screenRadius: 42, action: 'Ngắm đèn', title: 'Đèn vườn', description: 'Tối nay ánh đèn sẽ soi lối về nhà.', icon: '◌' },
    { id: 'stairs', x: 0, z: -15.2, y: 0, screenRadius: 78, action: 'Đi lên', title: 'Lối lên đồi', description: 'Khu vườn mới sẽ mở vào ngày thứ mười.', icon: '↑' },
  ];

  const entities = new Map(entityList.map((item) => [item.id, item]));
  const world = new Valley3D(canvas);

  // ---------- Simple raw WebGL 3D renderer ----------

  function hexColor(hex) {
    const value = hex.replace('#', '');
    return [parseInt(value.slice(0, 2), 16) / 255, parseInt(value.slice(2, 4), 16) / 255, parseInt(value.slice(4, 6), 16) / 255];
  }

  function shade(color, amount) {
    return color.map((channel) => Math.max(0, Math.min(1, channel + amount)));
  }

  function add3(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
  function sub3(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function mul3(a, n) { return [a[0] * n, a[1] * n, a[2] * n]; }
  function dot3(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function cross3(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  function normalize3(a) { const length = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / length, a[1] / length, a[2] / length]; }

  function matrixIdentity() {
    return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }

  function matrixMultiply(a, b) {
    const out = new Float32Array(16);
    for (let column = 0; column < 4; column += 1) {
      for (let row = 0; row < 4; row += 1) {
        out[column * 4 + row] = a[row] * b[column * 4] + a[4 + row] * b[column * 4 + 1] + a[8 + row] * b[column * 4 + 2] + a[12 + row] * b[column * 4 + 3];
      }
    }
    return out;
  }

  function matrixPerspective(fov, aspect, near, far) {
    const f = 1 / Math.tan(fov / 2);
    const range = 1 / (near - far);
    const out = new Float32Array(16);
    out[0] = f / aspect;
    out[5] = f;
    out[10] = (far + near) * range;
    out[11] = -1;
    out[14] = far * near * 2 * range;
    return out;
  }

  function matrixLookAt(eye, target, up) {
    const zAxis = normalize3(sub3(eye, target));
    const xAxis = normalize3(cross3(up, zAxis));
    const yAxis = cross3(zAxis, xAxis);
    const out = matrixIdentity();
    out[0] = xAxis[0]; out[1] = yAxis[0]; out[2] = zAxis[0];
    out[4] = xAxis[1]; out[5] = yAxis[1]; out[6] = zAxis[1];
    out[8] = xAxis[2]; out[9] = yAxis[2]; out[10] = zAxis[2];
    out[12] = -dot3(xAxis, eye); out[13] = -dot3(yAxis, eye); out[14] = -dot3(zAxis, eye);
    return out;
  }

  function matrixInvert(matrix) {
    const a = matrix;
    const out = new Float32Array(16);
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    const b00 = a00 * a11 - a01 * a10;
    const b01 = a00 * a12 - a02 * a10;
    const b02 = a00 * a13 - a03 * a10;
    const b03 = a01 * a12 - a02 * a11;
    const b04 = a01 * a13 - a03 * a11;
    const b05 = a02 * a13 - a03 * a12;
    const b06 = a20 * a31 - a21 * a30;
    const b07 = a20 * a32 - a22 * a30;
    const b08 = a20 * a33 - a23 * a30;
    const b09 = a21 * a32 - a22 * a31;
    const b10 = a21 * a33 - a23 * a31;
    const b11 = a22 * a33 - a23 * a32;
    const determinant = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!determinant) return matrixIdentity();
    const inverse = 1 / determinant;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * inverse;
    out[1] = (-a01 * b11 + a02 * b10 - a03 * b09) * inverse;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * inverse;
    out[3] = (-a21 * b05 + a22 * b04 - a23 * b03) * inverse;
    out[4] = (-a10 * b11 + a12 * b08 - a13 * b07) * inverse;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * inverse;
    out[6] = (-a30 * b05 + a32 * b02 - a33 * b01) * inverse;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * inverse;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * inverse;
    out[9] = (-a00 * b10 + a01 * b08 - a03 * b06) * inverse;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * inverse;
    out[11] = (-a20 * b04 + a21 * b02 - a23 * b00) * inverse;
    out[12] = (-a10 * b09 + a11 * b07 - a12 * b06) * inverse;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * inverse;
    out[14] = (-a30 * b03 + a31 * b01 - a32 * b00) * inverse;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * inverse;
    return out;
  }

  function transformPoint(matrix, point) {
    const x = point[0], y = point[1], z = point[2];
    const w = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15];
    return [
      (matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12]) / w,
      (matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13]) / w,
      (matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14]) / w,
    ];
  }

  class GeometryBuilder {
    constructor() { this.positions = []; this.normals = []; this.colors = []; }
    vertex(position, normal, color) { this.positions.push(...position); this.normals.push(...normal); this.colors.push(...color); }
    triangle(a, b, c, normal, color) { this.vertex(a, normal, color); this.vertex(b, normal, color); this.vertex(c, normal, color); }
    quad(a, b, c, d, normal, color) { this.triangle(a, b, c, normal, color); this.triangle(a, c, d, normal, color); }
    clear() { this.positions.length = 0; this.normals.length = 0; this.colors.length = 0; }
  }

  function addCube(g, x, y, z, width, height, depth, color, topColor = color, sideColor = shade(color, -.045)) {
    const x0 = x - width / 2; const x1 = x + width / 2;
    const y0 = y; const y1 = y + height;
    const z0 = z - depth / 2; const z1 = z + depth / 2;
    g.quad([x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1], [0, 1, 0], topColor);
    g.quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1], sideColor);
    g.quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1], shade(sideColor, -.04));
    g.quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0], shade(sideColor, -.07));
    g.quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0], shade(sideColor, .03));
    g.quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [0, -1, 0], shade(sideColor, -.12));
  }

  function addCylinder(g, x, y, z, radius, height, color, segments = 8, topColor = shade(color, .08)) {
    const bottom = [x, y, z]; const top = [x, y + height, z];
    for (let i = 0; i < segments; i += 1) {
      const a0 = (i / segments) * Math.PI * 2; const a1 = ((i + 1) / segments) * Math.PI * 2;
      const p0 = [x + Math.cos(a0) * radius, y, z + Math.sin(a0) * radius];
      const p1 = [x + Math.cos(a1) * radius, y, z + Math.sin(a1) * radius];
      const q0 = [x + Math.cos(a0) * radius, y + height, z + Math.sin(a0) * radius];
      const q1 = [x + Math.cos(a1) * radius, y + height, z + Math.sin(a1) * radius];
      const normal = normalize3([Math.cos((a0 + a1) / 2), .15, Math.sin((a0 + a1) / 2)]);
      g.quad(p0, p1, q1, q0, normal, color);
      g.triangle(top, q1, q0, [0, 1, 0], topColor);
      g.triangle(bottom, p0, p1, [0, -1, 0], shade(color, -.1));
    }
  }

  function addLowPolySphere(g, x, y, z, radiusX, radiusY, radiusZ, color, rings = 5, segments = 8) {
    for (let ring = 0; ring < rings; ring += 1) {
      const phi0 = (ring / rings) * Math.PI; const phi1 = ((ring + 1) / rings) * Math.PI;
      for (let segment = 0; segment < segments; segment += 1) {
        const a0 = (segment / segments) * Math.PI * 2; const a1 = ((segment + 1) / segments) * Math.PI * 2;
        const points = [
          [x + Math.sin(phi0) * Math.cos(a0) * radiusX, y + Math.cos(phi0) * radiusY, z + Math.sin(phi0) * Math.sin(a0) * radiusZ],
          [x + Math.sin(phi0) * Math.cos(a1) * radiusX, y + Math.cos(phi0) * radiusY, z + Math.sin(phi0) * Math.sin(a1) * radiusZ],
          [x + Math.sin(phi1) * Math.cos(a1) * radiusX, y + Math.cos(phi1) * radiusY, z + Math.sin(phi1) * Math.sin(a1) * radiusZ],
          [x + Math.sin(phi1) * Math.cos(a0) * radiusX, y + Math.cos(phi1) * radiusY, z + Math.sin(phi1) * Math.sin(a0) * radiusZ],
        ];
        const normal = normalize3([Math.cos((a0 + a1) / 2), Math.cos((phi0 + phi1) / 2) * .7, Math.sin((a0 + a1) / 2)]);
        const tint = shade(color, Math.cos((phi0 + phi1) / 2) * .08);
        g.quad(points[0], points[1], points[2], points[3], normal, tint);
      }
    }
  }

  function addCone(g, x, y, z, radius, height, color, segments = 8, tipX = x, tipZ = z) {
    const tip = [tipX, y + height, tipZ];
    for (let i = 0; i < segments; i += 1) {
      const a0 = (i / segments) * Math.PI * 2; const a1 = ((i + 1) / segments) * Math.PI * 2;
      const p0 = [x + Math.cos(a0) * radius, y, z + Math.sin(a0) * radius];
      const p1 = [x + Math.cos(a1) * radius, y, z + Math.sin(a1) * radius];
      const normal = normalize3(cross3(sub3(p1, p0), sub3(tip, p0)));
      g.triangle(p0, p1, tip, normal, shade(color, (i % 2) * .035));
      g.triangle([x, y, z], p1, p0, [0, -1, 0], shade(color, -.12));
    }
  }

  function addRoof(g, x, y, z, width, depth, height, color) {
    const x0 = x - width / 2; const x1 = x + width / 2; const z0 = z - depth / 2; const z1 = z + depth / 2;
    const ridgeFront = [x, y + height, z1]; const ridgeBack = [x, y + height, z0];
    g.triangle([x0, y, z1], [x1, y, z1], ridgeFront, [0, .7, 1], shade(color, .03));
    g.triangle([x1, y, z0], [x0, y, z0], ridgeBack, [0, .7, -1], shade(color, -.02));
    g.quad([x0, y, z0], [x0, y, z1], ridgeFront, ridgeBack, normalize3([-height, width / 2, 0]), shade(color, -.08));
    g.quad([x1, y, z1], [x1, y, z0], ridgeBack, ridgeFront, normalize3([height, width / 2, 0]), color);
  }

  function addRing(g, x, y, z, radius, color) {
    const segments = 24; const inner = radius * .82;
    for (let i = 0; i < segments; i += 1) {
      const a0 = i / segments * Math.PI * 2; const a1 = (i + 1) / segments * Math.PI * 2;
      g.quad([x + Math.cos(a0) * inner, y, z + Math.sin(a0) * inner], [x + Math.cos(a0) * radius, y, z + Math.sin(a0) * radius], [x + Math.cos(a1) * radius, y, z + Math.sin(a1) * radius], [x + Math.cos(a1) * inner, y, z + Math.sin(a1) * inner], [0, 1, 0], color);
    }
  }

  function pseudoRandom(x, z, salt = 0) {
    const value = Math.sin(x * 127.1 + z * 311.7 + salt * 74.3) * 43758.5453;
    return value - Math.floor(value);
  }

  function smoothNoise(x, z) {
    const a = pseudoRandom(Math.floor(x), Math.floor(z), 4);
    const b = pseudoRandom(Math.floor(x) + 1, Math.floor(z), 4);
    const c = pseudoRandom(Math.floor(x), Math.floor(z) + 1, 4);
    const d = pseudoRandom(Math.floor(x) + 1, Math.floor(z) + 1, 4);
    const fx = x - Math.floor(x); const fz = z - Math.floor(z);
    const sx = fx * fx * (3 - 2 * fx); const sz = fz * fz * (3 - 2 * fz);
    return a * (1 - sx) * (1 - sz) + b * sx * (1 - sz) + c * (1 - sx) * sz + d * sx * sz;
  }

  function terrainHeight(cellX, cellZ) {
    if (Math.abs(cellX * 2.6) < 15 && cellZ * 2.6 > -20 && cellZ * 2.6 < 14) return .06;
    return -.06 + smoothNoise(cellX * .34, cellZ * .34) * .56 + Math.sin(cellX * .22 + cellZ * .18) * .08;
  }

  function addTree(g, x, y, z, scale, paletteIndex = 0) {
    const palettes = [hexColor('#416f4c'), hexColor('#568654'), hexColor('#739860')];
    const light = [hexColor('#83a66d'), hexColor('#a3b578'), hexColor('#6f9c69')];
    const trunk = hexColor('#765238');
    const base = palettes[paletteIndex % palettes.length];
    addCylinder(g, x, y, z, .24 * scale, 1.8 * scale, trunk, 6, shade(trunk, .12));
    addLowPolySphere(g, x - .45 * scale, y + 2.05 * scale, z, 1.15 * scale, 1.15 * scale, 1.1 * scale, base, 4, 7);
    addLowPolySphere(g, x + .48 * scale, y + 2.18 * scale, z + .08 * scale, 1.18 * scale, 1.25 * scale, 1.08 * scale, shade(base, .04), 4, 7);
    addLowPolySphere(g, x, y + 3.05 * scale, z - .02 * scale, 1.04 * scale, 1.1 * scale, .98 * scale, light[paletteIndex % light.length], 4, 7);
    addLowPolySphere(g, x - .1 * scale, y + 2.45 * scale, z + .54 * scale, .54 * scale, .47 * scale, .42 * scale, shade(light[paletteIndex % light.length], .05), 3, 6);
  }

  function addFlower(g, x, y, z, color, scale = 1) {
    const green = hexColor('#4f8053');
    addCylinder(g, x, y, z, .035 * scale, .38 * scale, green, 5);
    addLowPolySphere(g, x, y + .42 * scale, z, .14 * scale, .08 * scale, .14 * scale, color, 3, 5);
  }

  function addFence(g, x, y, z) {
    const wood = hexColor('#855b40');
    for (let i = 0; i < 5; i += 1) addCube(g, x + i * 1.2, y, z + i * .25, .18, 1.15, .18, wood, shade(wood, .08));
    addCube(g, x + 2.4, y + .65, z + .5, 5.2, .15, .18, wood, shade(wood, .08));
    addCube(g, x + 2.4, y + .28, z + .5, 5.2, .15, .18, wood, shade(wood, .08));
  }

  class Valley3D {
    constructor(targetCanvas) {
      this.canvas = targetCanvas;
      this.gl = targetCanvas.getContext('webgl', { antialias: true, alpha: false, preserveDrawingBuffer: false });
      this.camera = { panX: 0, panZ: 0, zoom: 1 };
      this.lastChunkKey = '';
      this.staticBuilder = new GeometryBuilder();
      this.dynamicBuilder = new GeometryBuilder();
      this.staticBuffer = null;
      this.dynamicBuffer = null;
      this.pointerRect = null;
      this.projection = matrixIdentity();
      this.view = matrixIdentity();
      this.viewProjection = matrixIdentity();
      this.inverseViewProjection = matrixIdentity();
      this.lastTime = 0;
      this.ready = Boolean(this.gl);
      if (!this.ready) return;
      this.initGL();
      this.resize();
      this.rebuildWorld();
      window.addEventListener('resize', () => this.resize(), { passive: true });
    }

    initGL() {
      const gl = this.gl;
      const vertexSource = `
        attribute vec3 aPosition;
        attribute vec3 aNormal;
        attribute vec3 aColor;
        uniform mat4 uViewProjection;
        uniform mat4 uView;
        varying vec3 vNormal;
        varying vec3 vColor;
        varying float vFog;
        void main() {
          vec4 viewPosition = uView * vec4(aPosition, 1.0);
          vNormal = vec3(uView * vec4(aNormal, 0.0));
          vColor = aColor;
          vFog = clamp((length(viewPosition.xyz) - 23.0) / 62.0, 0.0, 1.0);
          gl_Position = uViewProjection * vec4(aPosition, 1.0);
        }
      `;
      const fragmentSource = `
        precision mediump float;
        uniform vec3 uLightDirection;
        uniform vec3 uFogColor;
        varying vec3 vNormal;
        varying vec3 vColor;
        varying float vFog;
        void main() {
          float diffuse = max(dot(normalize(vNormal), normalize(-uLightDirection)), 0.0);
          float light = 0.57 + diffuse * 0.5;
          vec3 painted = vColor * light;
          gl_FragColor = vec4(mix(painted, uFogColor, vFog), 1.0);
        }
      `;
      const compile = (type, source) => {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
        return shader;
      };
      const program = gl.createProgram();
      gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
      gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
      this.program = program;
      this.attributes = {
        position: gl.getAttribLocation(program, 'aPosition'),
        normal: gl.getAttribLocation(program, 'aNormal'),
        color: gl.getAttribLocation(program, 'aColor'),
      };
      this.uniforms = {
        viewProjection: gl.getUniformLocation(program, 'uViewProjection'),
        view: gl.getUniformLocation(program, 'uView'),
        light: gl.getUniformLocation(program, 'uLightDirection'),
        fog: gl.getUniformLocation(program, 'uFogColor'),
      };
      this.staticBuffers = { position: gl.createBuffer(), normal: gl.createBuffer(), color: gl.createBuffer() };
      this.dynamicBuffers = { position: gl.createBuffer(), normal: gl.createBuffer(), color: gl.createBuffer() };
      gl.useProgram(program);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.disable(gl.CULL_FACE);
      gl.clearColor(.48, .62, .47, 1);
      gl.enable(gl.SCISSOR_TEST);
    }

    resize() {
      const rect = this.canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = Math.max(1, Math.round(rect.width * dpr));
      this.canvas.height = Math.max(1, Math.round(rect.height * dpr));
      this.pointerRect = rect;
      if (this.gl) this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    upload(builder, buffers = this.staticBuffers) {
      const gl = this.gl;
      const upload = (buffer, data, attribute) => {
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(attribute);
        gl.vertexAttribPointer(attribute, 3, gl.FLOAT, false, 0, 0);
      };
      upload(buffers.position, builder.positions, this.attributes.position);
      upload(buffers.normal, builder.normals, this.attributes.normal);
      upload(buffers.color, builder.colors, this.attributes.color);
      return builder.positions.length / 3;
    }

    rebuildWorld() {
      if (!this.ready) return;
      const g = new GeometryBuilder();
      const tile = 2.6;
      const chunkSize = 14;
      const radius = this.camera.zoom < .9 ? 2 : 1;
      const centerCellX = Math.floor(this.camera.panX / (tile * chunkSize));
      const centerCellZ = Math.floor(this.camera.panZ / (tile * chunkSize));
      const key = `${centerCellX}:${centerCellZ}:${radius}:${state.wheatCollected}:${state.coinCollected}:${state.eggCollected}:${state.stumpChopped}`;
      if (key === this.lastChunkKey) return;
      this.lastChunkKey = key;

      for (let chunkX = centerCellX - radius; chunkX <= centerCellX + radius; chunkX += 1) {
        for (let chunkZ = centerCellZ - radius; chunkZ <= centerCellZ + radius; chunkZ += 1) {
          const cellStartX = chunkX * chunkSize;
          const cellStartZ = chunkZ * chunkSize;
          for (let lx = 0; lx < chunkSize; lx += 1) {
            for (let lz = 0; lz < chunkSize; lz += 1) {
              const cellX = cellStartX + lx; const cellZ = cellStartZ + lz;
              const x = (cellX + .5) * tile; const z = (cellZ + .5) * tile;
              const height = terrainHeight(cellX, cellZ);
              const variation = pseudoRandom(cellX, cellZ, 9);
              const grass = hexColor(variation > .56 ? '#6f9560' : variation > .25 ? '#779c64' : '#668d5c');
              addCube(g, x, -.7, z, tile * 1.01, height + .7, tile * 1.01, grass, shade(grass, .06), shade(grass, -.08));

              const homeReserve = Math.abs(x) < 16 && z > -21 && z < 14;
              const edgeTree = Math.abs(lx - 6.5) > 5.4 || Math.abs(lz - 6.5) > 5.4;
              const shouldGrowTree = !homeReserve && ((edgeTree && pseudoRandom(cellX, cellZ, 14) > .28) || pseudoRandom(cellX, cellZ, 18) > .965);
              if (shouldGrowTree && pseudoRandom(cellX, cellZ, 22) > .22) {
                const scale = .68 + pseudoRandom(cellX, cellZ, 23) * .52;
                addTree(g, x, height, z, scale, Math.floor(pseudoRandom(cellX, cellZ, 24) * 3));
              } else if (!homeReserve && pseudoRandom(cellX, cellZ, 32) > .9) {
                addFlower(g, x + (pseudoRandom(cellX, cellZ, 33) - .5), height + .02, z + (pseudoRandom(cellX, cellZ, 34) - .5), hexColor(pseudoRandom(cellX, cellZ, 35) > .5 ? '#e5ad72' : '#d99383'), .8);
              }
            }
          }
        }
      }

      this.addHome(g);
      this.staticBuffer = this.upload(g);
      this.homeGeometry = g;
    }

    addHome(g) {
      const grass = hexColor('#789d63');
      const path = hexColor('#e8d6a3');
      const pathShade = hexColor('#c9b783');
      const soil = hexColor('#a8734b');
      const wood = hexColor('#80553d');
      const stone = hexColor('#aaa486');
      const red = hexColor('#b65d49');
      const teal = hexColor('#6f9e8f');
      const wheat = hexColor('#d9a344');
      const y = .2;

      // Cream path with individual raised stones.
      for (let i = 0; i < 15; i += 1) {
        const z = 13 - i * 1.75;
        const width = 4.8 - Math.min(i, 8) * .08;
        addCube(g, 0, terrainHeight(Math.floor(0 / 2.6), Math.floor(z / 2.6)) + .035, z, width, .10, 1.32, path, shade(path, .06), pathShade);
      }
      for (let i = 0; i < 7; i += 1) {
        addCube(g, 0, .44, -12.8 - i * 1.18, 5.4 - i * .22, .55, .78, i % 2 ? path : shade(path, -.02), shade(path, .07), pathShade);
      }

      // House walls and asymmetric roofs.
      addCube(g, .7, .24, -9.3, 10.2, 4.1, 6.2, stone, shade(stone, .1), shade(stone, -.08));
      addCube(g, .7, 4.34, -9.3, 10.5, .22, 6.5, shade(stone, -.04), shade(stone, .08));
      addRoof(g, 2.1, 4.42, -9.3, 7.9, 6.8, 2.25, red);
      addCone(g, -2.35, 4.15, -9.35, 3.35, 5.9, hexColor('#54463e'), 8, -3.7, -9.75);
      addCube(g, -2.34, 4.1, -6.18, 4.25, .17, .12, teal, teal, teal);

      // Door, round windows, timber braces and warm lantern.
      addCube(g, 1.3, .25, -6.18, 1.72, 3.18, .22, wood, shade(wood, .1), shade(wood, -.06));
      addCube(g, 1.3, 1.75, -6.31, 1.95, .18, .05, teal, teal, teal);
      addCube(g, 1.3, 3.08, -6.31, 1.95, .18, .05, teal, teal, teal);
      addCylinder(g, -2.1, 2.7, -6.2, .7, .12, teal, 10, shade(teal, .1));
      addCylinder(g, 4.0, 2.8, -6.2, .65, .12, teal, 10, shade(teal, .1));
      addCube(g, -2.1, 2.7, -6.34, .08, 1.3, .04, path, path, path);
      addCube(g, -2.1, 2.7, -6.34, 1.3, .08, .04, path, path, path);
      addCube(g, 4.0, 2.8, -6.34, .08, 1.2, .04, path, path, path);
      addCube(g, 4.0, 2.8, -6.34, 1.2, .08, .04, path, path, path);
      addCube(g, 4.95, 2.7, -6.05, .2, .9, .2, wood, shade(wood, .1));
      addLowPolySphere(g, 4.95, 3.2, -6.05, .22, .35, .22, hexColor('#f3c35e'), 4, 6);
      addCube(g, 4.95, 3.72, -6.05, .42, .10, .42, wood, wood, wood);
      // Terracotta jars and doormat.
      addCylinder(g, .1, .3, -6.2, .48, .72, hexColor('#ac6747'), 8, hexColor('#d27b50'));
      addCylinder(g, 3.05, .3, -6.22, .6, .56, hexColor('#b36547'), 8, hexColor('#d18350'));
      addLowPolySphere(g, .1, 1.03, -6.2, .35, .25, .35, hexColor('#5d8a5c'), 3, 6);
      addLowPolySphere(g, 3.05, .9, -6.22, .43, .3, .4, hexColor('#668f5e'), 3, 6);
      addCube(g, 1.35, .28, -5.78, 2.7, .06, .75, hexColor('#b99260'), shade(path, .05), pathShade);

      // Field, furrows and wheat rows.
      addCube(g, 7.6, .22, 4.5, 10.4, .22, 7.2, soil, shade(soil, .08), shade(soil, -.09));
      for (let row = 0; row < 6; row += 1) {
        const z = 2.0 + row * .98;
        addCube(g, 7.6, .36, z, 9.45, .06, .10, shade(soil, -.12), shade(soil, -.05), shade(soil, -.16));
        if (!state.wheatCollected) {
          for (let j = 0; j < 8; j += 1) {
            const x = 3.8 + j * 1.07 + (row % 2) * .18;
            const stalk = .95 + pseudoRandom(row, j, 60) * .45;
            addCube(g, x, .42, z - .28, .06, stalk, .06, wheat, shade(wheat, .07), shade(wheat, -.08));
            addLowPolySphere(g, x, .42 + stalk, z - .28, .15, .10, .12, shade(wheat, .06), 3, 5);
          }
        } else {
          for (let j = 0; j < 8; j += 1) addCube(g, 3.9 + j * 1.06, .42, z - .2, .05, .25, .05, hexColor('#6f9a58'), hexColor('#88aa64'));
        }
      }
      addCube(g, 2.25, .28, 1.4, .16, 1.45, .16, wood, shade(wood, .1));
      addCube(g, 2.25, 1.25, 1.4, 1.4, .6, .16, red, shade(red, .08), shade(red, -.08));
      addCube(g, 2.25, 1.25, 1.31, .75, .08, .03, path, path, path);

      // Stump with embedded axe.
      addCylinder(g, -4.7, .24, .5, 1.2, 1.15, wood, 9, shade(wood, .14));
      addCylinder(g, -4.7, 1.39, .5, 1.23, .10, hexColor('#b77c4d'), 9, hexColor('#d39a57'));
      addCube(g, -3.75, 1.3, .25, .16, 2.9, .16, wood, shade(wood, .1));
      addCube(g, -3.67, 2.42, .25, .85, .72, .18, hexColor('#9eaa9b'), hexColor('#c0cab4'), hexColor('#829486'));
      if (state.stumpChopped) addLowPolySphere(g, -6, .28, 1, .23, .10, .16, hexColor('#c58a55'), 3, 5);

      // Victorian lamp, table, fence and a little picnic corner.
      addCylinder(g, -8.1, .25, -2.6, .12, 3.3, hexColor('#3e4941'), 7);
      addCylinder(g, -8.1, 3.55, -2.6, .45, .18, hexColor('#414b40'), 6, hexColor('#596552'));
      addLowPolySphere(g, -8.1, 3.05, -2.6, .32, .48, .32, hexColor('#edb957'), 4, 7);
      addCylinder(g, -6.5, .3, -2.05, .16, 1.3, wood, 7);
      addCylinder(g, -6.5, 1.62, -2.05, 1.3, .18, wood, 8, hexColor('#ad714b'));
      addCube(g, -6.5, .35, -.2, 2.2, .55, .42, wood, shade(wood, .1));
      addFence(g, 5.9, .3, -1.2);
      addFlower(g, -7.1, .28, -.3, hexColor('#e6a77b'), 1.2);
      addFlower(g, -6.3, .28, 1.4, hexColor('#e4c173'), 1.1);
      addFlower(g, 4.4, .28, -1.2, hexColor('#da9287'), .9);

      // Gently scatter a few rocks around the home.
      for (let i = 0; i < 20; i += 1) {
        const angle = pseudoRandom(i, 2, 80) * Math.PI * 2;
        const radius = 15 + pseudoRandom(i, 3, 81) * 8;
        const rockX = Math.cos(angle) * radius;
        const rockZ = Math.sin(angle) * radius;
        addLowPolySphere(g, rockX, terrainHeight(Math.floor(rockX / 2.6), Math.floor(rockZ / 2.6)) + .12, rockZ, .25, .17, .22, hexColor('#9ba486'), 3, 6);
      }
    }

    uploadDynamic(builder) {
      this.dynamicBuffer = this.upload(builder, this.dynamicBuffers);
    }

    getCameraMatrices() {
      const rect = this.canvas.getBoundingClientRect();
      const aspect = Math.max(.5, rect.width / Math.max(rect.height, 1));
      const distance = 25 * this.camera.zoom;
      const target = [this.camera.panX, .8, this.camera.panZ];
      const eye = [this.camera.panX + distance * .78, distance * .92, this.camera.panZ + distance * .78];
      this.view = matrixLookAt(eye, target, [0, 1, 0]);
      this.projection = matrixPerspective(Math.PI / 4.1, aspect, .1, 180);
      this.viewProjection = matrixMultiply(this.projection, this.view);
      this.inverseViewProjection = matrixInvert(this.viewProjection);
      return { eye, target };
    }

    buildDynamic(time) {
      const g = new GeometryBuilder();
      const px = state.player.x; const pz = state.player.z;
      const ground = terrainHeight(Math.floor(px / 2.6), Math.floor(pz / 2.6));
      const bob = Math.sin(time * .005) * .035;
      const maroon = hexColor('#773e4d'); const apron = hexColor('#f7ecd2'); const skin = hexColor('#e8ad83'); const hair = hexColor('#743e40'); const hat = hexColor('#e0be76');
      addCube(g, px, ground + .2 + bob, pz, .8, 1.2, .62, maroon, shade(maroon, .08));
      addCube(g, px, ground + .54 + bob, pz - .34, .52, .6, apron, shade(apron, .05));
      addCube(g, px - .22, ground + .05, pz, .18, .5, hexColor('#5d4c41'), shade(hexColor('#5d4c41'), .08));
      addCube(g, px + .22, ground + .05, pz, .18, .5, hexColor('#5d4c41'), shade(hexColor('#5d4c41'), .08));
      addLowPolySphere(g, px, ground + 1.55 + bob, pz, .43, .48, .4, skin, 5, 8);
      addLowPolySphere(g, px - .47, ground + 1.55 + bob, pz, .16, .28, .16, hair, 4, 6);
      addLowPolySphere(g, px + .47, ground + 1.55 + bob, pz, .16, .28, .16, hair, 4, 6);
      addCylinder(g, px, ground + 1.94 + bob, pz, .62, .12, hat, 8, shade(hat, .08));
      addCone(g, px - .05, ground + 1.96 + bob, pz, .34, .45, shade(hat, -.05), 7, px - .16, pz - .03);
      addRing(g, px, ground + .03, pz, .8, hexColor('#f0c96b'));
      if (state.hovered) {
        const h = entities.get(state.hovered.id);
        if (h && !(h.id === 'coin' && state.coinCollected)) addRing(g, h.x, terrainHeight(Math.floor(h.x / 2.6), Math.floor(h.z / 2.6)) + .06, h.z, h.id === 'wheat' ? 5.2 : 1.6, hexColor('#f4ca68'));
      }
      this.uploadDynamic(g);
    }

    render(time) {
      if (!this.ready) return;
      this.getCameraMatrices();
      this.buildDynamic(time);
      const gl = this.gl;
      gl.viewport(0, 0, this.canvas.width, this.canvas.height);
      gl.scissor(0, 0, this.canvas.width, this.canvas.height);
      gl.clearColor(.49, .63, .48, 1);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.useProgram(this.program);
      gl.uniformMatrix4fv(this.uniforms.viewProjection, false, this.viewProjection);
      gl.uniformMatrix4fv(this.uniforms.view, false, this.view);
      gl.uniform3f(this.uniforms.light, -.4, -1, -.65);
      gl.uniform3fv(this.uniforms.fog, hexColor('#92ad79'));
      const bind = (buffers) => {
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(this.attributes.position, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
        gl.vertexAttribPointer(this.attributes.normal, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
        gl.vertexAttribPointer(this.attributes.color, 3, gl.FLOAT, false, 0, 0);
      };
      const draw = (count) => { if (count > 0) gl.drawArrays(gl.TRIANGLES, 0, count); };
      bind(this.staticBuffers); draw(this.staticBuffer);
      bind(this.dynamicBuffers); draw(this.dynamicBuffer);
    }

    project(worldPoint) {
      const rect = this.canvas.getBoundingClientRect();
      const ndc = transformPoint(this.viewProjection, worldPoint);
      return { x: rect.left + (ndc[0] * .5 + .5) * rect.width, y: rect.top + (-ndc[1] * .5 + .5) * rect.height, z: ndc[2] };
    }

    hitTest(clientX, clientY) {
      const candidates = [];
      for (const item of entityList) {
        if (item.id === 'coin' && state.coinCollected) continue;
        const projected = this.project([item.x, item.y + (item.id === 'house' ? 2.5 : .3), item.z]);
        const distance = Math.hypot(projected.x - clientX, projected.y - clientY);
        const depthBonus = item.id === 'house' ? 1.1 : 1;
        if (distance < item.screenRadius * this.camera.zoom * depthBonus) candidates.push({ item, distance, z: projected.z });
      }
      candidates.sort((a, b) => a.distance + a.z * 8 - (b.distance + b.z * 8));
      return candidates.length ? candidates[0].item : null;
    }

    groundPoint(clientX, clientY) {
      const rect = this.canvas.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width * 2 - 1;
      const y = 1 - (clientY - rect.top) / rect.height * 2;
      const near = transformPoint(this.inverseViewProjection, [x, y, -1]);
      const far = transformPoint(this.inverseViewProjection, [x, y, 1]);
      const direction = sub3(far, near);
      const divisor = direction[1] || -1;
      const t = -near[1] / divisor;
      return { x: near[0] + direction[0] * t, z: near[2] + direction[2] * t };
    }

    focusOn(item) {
      if (!item) return;
      this.camera.panX = item.x * .7;
      this.camera.panZ = item.z * .7;
    }

    panByPixels(dx, dy) {
      const amount = .035 * this.camera.zoom;
      this.camera.panX -= dx * amount;
      this.camera.panZ += dy * amount;
      this.rebuildWorld();
    }

    zoomBy(delta) {
      this.camera.zoom = Math.max(.72, Math.min(1.52, this.camera.zoom + delta));
      this.rebuildWorld();
    }
  }

  // ---------- Game state, HUD and interactions ----------

  function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }

  function updateUI() {
    document.getElementById('energyBar').style.width = `${clamp(state.energy, 0, 100)}%`;
    document.getElementById('wheatCount').textContent = state.wheat;
    document.getElementById('woodCount').textContent = state.wood;
    document.getElementById('eggCount').textContent = state.eggs;
    document.getElementById('coinCount').textContent = state.coins;
    const total = state.wheat + state.wood + state.eggs;
    document.getElementById('bagCount').textContent = String(total).padStart(2, '0');
    if (state.coinCollected) markQuestDone(document.getElementById('coinQuest'));
    const done = document.querySelectorAll('.quest-row.done').length;
    document.getElementById('questDone').textContent = done;
    document.getElementById('questProgress').style.width = `${done / 3 * 100}%`;
  }

  function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastText').textContent = message;
    toast.classList.add('show');
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function markQuestDone(row) {
    if (!row.classList.contains('done')) {
      row.classList.add('done');
      const check = row.querySelector('.quest-check');
      if (check) check.textContent = '✓';
    }
  }

  function updateQuest(completed) {
    if (completed === 'wheat') markQuestDone(document.getElementById('wheatQuest'));
    if (completed === 'coin') markQuestDone(document.getElementById('coinQuest'));
    updateUI();
  }

  function setTarget(item) {
    state.target = item;
    if (!item) return;
    world.focusOn(item);
    const point = { x: item.x, z: item.z };
    state.player.targetX = point.x;
    state.player.targetZ = point.z + .8;
    showInteraction(item);
  }

  function showInteraction(item) {
    const panel = document.getElementById('interactionPanel');
    document.getElementById('interactionTitle').textContent = item.title;
    document.getElementById('interactionDescription').textContent = item.description;
    document.getElementById('interactionIcon').textContent = item.icon;
    document.getElementById('interactionAction').textContent = item.action;
    panel.classList.add('visible');
    panel.setAttribute('aria-hidden', 'false');
    document.getElementById('worldTip').style.opacity = '0';
  }

  function hideInteraction() {
    const panel = document.getElementById('interactionPanel');
    panel.classList.remove('visible');
    panel.setAttribute('aria-hidden', 'true');
    document.getElementById('worldTip').style.opacity = '';
  }

  function setDescription(text) { document.getElementById('interactionDescription').textContent = text; }

  function perform(item) {
    if (!item) return;
    setTarget(item);
    if (item.id === 'coin') collectCoin();
    else if (item.id === 'wheat') interactWithWheat();
    else if (item.id === 'stump') chopStump();
    else if (item.id === 'chicken') collectEgg();
    else if (item.id === 'house') openModal('calendarModal');
    else if (item.id === 'stairs') showToast(state.day >= 10 ? 'Lối lên đồi đã mở!' : 'Lối lên đồi mở vào ngày thứ mười.');
    else if (item.id === 'lamp') setDescription('Một ánh đèn nhỏ cho buổi tối thật yên.');
  }

  function collectCoin() {
    if (state.coinCollected) { showToast('Bạn đã nhặt xu nắng này rồi.'); return; }
    state.coinCollected = true; state.coins += 8;
    showToast('Nhặt được 8 xu nắng!'); setDescription('Lấp lánh quá — thêm 8 xu vào túi.');
    updateQuest('coin'); world.rebuildWorld();
  }

  function interactWithWheat() {
    if (state.wheatCollected) {
      if (state.tool === 'plant') {
        if (state.wheat < 2 || state.energy < 6) { showToast('Cần 2 hạt giống và 6 năng lượng.'); return; }
        state.wheat -= 2; state.energy -= 6; state.wheatCollected = false;
        showToast('Gieo thêm một luống lúa nhỏ.'); setDescription('Mầm non sẽ lớn lên trong vài ngày nắng.'); updateUI(); world.rebuildWorld();
      } else { showToast('Luống lúa đã được thu hoạch.'); setDescription('Đất mềm đang chờ những hạt giống mới.'); }
      return;
    }
    if (state.tool && state.tool !== 'harvest' && state.tool !== 'plant') { showToast('Hãy chọn liềm để thu hoạch.'); return; }
    if (state.energy < 8) { showToast('Hana hơi mệt rồi — hãy nghỉ một chút.'); return; }
    state.wheatCollected = true; state.wheat += 3; state.energy -= 8;
    showToast('Thu hoạch được 3 bó lúa mì!'); setDescription('Vàng ươm và thơm nắng — thêm 3 bó vào túi.'); updateQuest('wheat'); world.rebuildWorld();
  }

  function chopStump() {
    if (state.stumpChopped) { showToast('Gốc cây đã được dọn sạch hôm nay.'); return; }
    if (state.tool && state.tool !== 'chop') { showToast('Hãy chọn rìu để đốn gỗ.'); return; }
    if (state.energy < 12) { showToast('Cần thêm năng lượng để vung rìu.'); return; }
    state.stumpChopped = true; state.wood += 2; state.energy -= 12;
    showToast('Đốn được 2 gỗ thông!'); setDescription('Hai khúc gỗ chắc chắn cho những món đồ mới.'); updateUI(); world.rebuildWorld();
  }

  function collectEgg() {
    if (state.eggCollected) { showToast('Gà Mận đang đi tìm hạt kê.'); return; }
    state.eggCollected = true; state.eggs += 1;
    showToast('Nhặt được một quả trứng mới!'); setDescription('Trứng gà tươi, vẫn còn ấm dưới nắng.'); updateUI(); world.rebuildWorld();
  }

  function selectTool(tool) {
    state.tool = tool;
    const menu = document.getElementById('toolMenu');
    menu.querySelectorAll('button').forEach((button) => button.classList.toggle('selected', button.dataset.tool === tool));
    document.getElementById('toolLabel').textContent = toolNames[tool];
    document.getElementById('toolButton').classList.add('active');
    menu.classList.remove('open'); menu.setAttribute('aria-hidden', 'true'); document.getElementById('toolButton').setAttribute('aria-expanded', 'false');
    showToast(`${toolTitles[tool]} đã sẵn sàng.`);
  }

  function toggleToolMenu() {
    const menu = document.getElementById('toolMenu');
    const open = !menu.classList.contains('open');
    menu.classList.toggle('open', open); menu.setAttribute('aria-hidden', String(!open)); document.getElementById('toolButton').setAttribute('aria-expanded', String(open));
  }

  function openModal(id) {
    document.querySelectorAll('.modal-backdrop').forEach((modal) => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); });
    const modal = document.getElementById(id);
    if (modal) { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); }
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
  }

  function advanceDay() {
    state.day += 1; state.weekday = weekdayNames[(state.day - 1) % 7]; state.energy = 100;
    state.wheatCollected = false; state.coinCollected = false; state.eggCollected = false; state.stumpChopped = false;
    document.getElementById('wheatQuest').classList.remove('done'); document.getElementById('coinQuest').classList.remove('done');
    document.getElementById('wheatQuest').querySelector('.quest-check').textContent = ''; document.getElementById('coinQuest').querySelector('.quest-check').textContent = '';
    document.querySelector('.calendar-copy b').textContent = state.weekday;
    document.querySelector('.calendar-copy small').textContent = `DAY ${String(state.day).padStart(2, '0')}`;
    document.getElementById('calendarTitle').textContent = `${state.weekday === 'SUN' ? 'Chủ nhật' : state.weekday === 'SAT' ? 'Thứ Bảy' : 'Một ngày mới'}, ngày ${state.day}`;
    closeModal('calendarModal'); updateUI(); world.rebuildWorld(); showToast(`Ngày ${String(state.day).padStart(2, '0')} bắt đầu thật dịu dàng.`);
  }

  function movePlayerTowardGround(clientX, clientY) {
    if (!world.ready) return;
    const point = world.groundPoint(clientX, clientY);
    state.player.targetX = point.x; state.player.targetZ = point.z;
  }

  function bindEvents() {
    canvas.addEventListener('pointermove', (event) => {
      if (state.dragging) {
        const dx = event.clientX - state.dragStartX; const dy = event.clientY - state.dragStartY;
        world.panByPixels(event.clientX - state.lastPointerX, event.clientY - state.lastPointerY);
        state.dragDistance += Math.hypot(dx, dy); state.lastPointerX = event.clientX; state.lastPointerY = event.clientY;
        return;
      }
      const item = world.hitTest(event.clientX, event.clientY);
      state.hovered = item;
      if (item && event.pointerType !== 'touch') showInteraction(item);
    });

    canvas.addEventListener('pointerdown', (event) => {
      state.dragging = true; state.dragDistance = 0; state.dragStartX = event.clientX; state.dragStartY = event.clientY; state.lastPointerX = event.clientX; state.lastPointerY = event.clientY;
      canvas.setPointerCapture?.(event.pointerId);
    });

    canvas.addEventListener('pointerup', (event) => {
      const wasDrag = state.dragDistance > 8;
      state.dragging = false;
      canvas.releasePointerCapture?.(event.pointerId);
      if (wasDrag) { showToast('Kéo bản đồ để khám phá thung lũng vô tận.'); return; }
      const item = world.hitTest(event.clientX, event.clientY);
      if (item) perform(item);
      else { movePlayerTowardGround(event.clientX, event.clientY); hideInteraction(); }
    });

    canvas.addEventListener('pointerleave', () => { state.hovered = null; });
    canvas.addEventListener('wheel', (event) => { event.preventDefault(); world.zoomBy(event.deltaY > 0 ? .08 : -.08); }, { passive: false });

    document.getElementById('profileButton').addEventListener('click', () => openModal('inventoryModal'));
    document.getElementById('bagButton').addEventListener('click', () => openModal('inventoryModal'));
    document.getElementById('calendarButton').addEventListener('click', () => openModal('calendarModal'));
    document.getElementById('lockButton').addEventListener('click', () => showToast('Thorny Grove mở vào ngày thứ mười.'));
    document.getElementById('toolButton').addEventListener('click', toggleToolMenu);
    document.querySelectorAll('#toolMenu button').forEach((button) => button.addEventListener('click', () => selectTool(button.dataset.tool)));
    document.getElementById('interactionAction').addEventListener('click', () => { if (state.target) perform(state.target); });
    document.querySelectorAll('[data-focus]').forEach((button) => button.addEventListener('click', () => { const item = entities.get(button.dataset.focus); if (item) { setTarget(item); showToast(`Đã đánh dấu: ${item.title}.`); } }));
    document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => closeModal(button.dataset.closeModal)));
    document.querySelectorAll('.modal-backdrop').forEach((modal) => modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(modal.id); }));
    document.getElementById('restButton').addEventListener('click', advanceDay);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { document.querySelectorAll('.modal-backdrop.open').forEach((modal) => closeModal(modal.id)); document.getElementById('toolMenu').classList.remove('open'); }
      if (event.key === 'b' || event.key === 'B') openModal('inventoryModal');
      if (event.key === '1') selectTool('harvest'); if (event.key === '2') selectTool('chop'); if (event.key === '3') selectTool('plant');
    });
  }

  function updatePlayer(dt) {
    const p = state.player; const dx = p.targetX - p.x; const dz = p.targetZ - p.z; const distance = Math.hypot(dx, dz);
    if (distance > .05) { const speed = Math.min(4.5 * dt, distance); p.x += dx / distance * speed; p.z += dz / distance * speed; }
  }

  function animate(time) {
    const dt = Math.min((time - (animate.last || time)) / 1000, .05); animate.last = time;
    updatePlayer(dt);
    world.render(time);
    requestAnimationFrame(animate);
  }

  if (!world.ready) {
    document.getElementById('toastText').textContent = 'Thiết bị này không hỗ trợ WebGL';
  } else {
    bindEvents(); updateUI(); showToast('Chào mừng đến thung lũng vô tận'); requestAnimationFrame(animate);
  }
})();
