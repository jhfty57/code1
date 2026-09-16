(() => {
  'use strict';

  const canvas = document.getElementById('world');
  const ctx = canvas.getContext('2d');
  const DESIGN_W = 1280;
  const DESIGN_H = 720;
  const view = { sx: 1, sy: 1, dpr: 1 };

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
    player: { x: 511, y: 391, targetX: 511, targetY: 391 },
  };

  const weekdayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const toolNames = { harvest: 'HARVEST', chop: 'CHOP', plant: 'PLANT' };
  const toolTitles = { harvest: 'Thu hoạch', chop: 'Đốn gỗ', plant: 'Gieo hạt' };

  const zones = [
    { id: 'house', x: 665, y: 247, r: 102, action: 'Mở lịch', title: 'Cottage của Hana', description: 'Một căn nhà nhỏ, đủ ấm cho những ngày dài.', icon: '⌂' },
    { id: 'wheat', x: 916, y: 514, r: 112, action: 'Làm vườn', title: 'Ruộng lúa vàng', description: 'Những bông lúa đang cúi đầu dưới nắng.', icon: '✦' },
    { id: 'stump', x: 485, y: 390, r: 58, action: 'Đốn gỗ', title: 'Gốc cây già', description: 'Một ít gỗ thông sẽ rất hữu ích hôm nay.', icon: '↗' },
    { id: 'coin', x: 286, y: 456, r: 33, action: 'Nhặt lên', title: 'Xu nắng', description: 'Có thứ gì đó lấp lánh trong đám cỏ.', icon: '✧' },
    { id: 'chicken', x: 768, y: 433, r: 42, action: 'Xem thử', title: 'Gà Mận', description: 'Cục tác! Hình như có một quả trứng mới.', icon: '♧' },
    { id: 'lamp', x: 332, y: 301, r: 31, action: 'Ngắm đèn', title: 'Đèn vườn', description: 'Tối nay ánh đèn sẽ soi lối về nhà.', icon: '◌' },
    { id: 'stairs', x: 651, y: 111, r: 82, action: 'Đi lên', title: 'Lối lên đồi', description: 'Khu vườn mới sẽ mở vào ngày thứ mười.', icon: '↑' },
  ];

  const flecks = [];
  for (let i = 0; i < 250; i += 1) {
    const n = (i * 9301 + 49297) % 233280 / 233280;
    const m = (i * 4217 + 17291) % 233280 / 233280;
    flecks.push({ x: 70 + n * 1110, y: 170 + m * 475, s: 0.5 + ((i * 17) % 9) / 10, a: 0.06 + (i % 5) * 0.018, type: i % 3 });
  }

  const grassStrokes = [];
  for (let i = 0; i < 135; i += 1) {
    const n = (i * 5911 + 2123) % 10000 / 10000;
    const m = (i * 8843 + 9157) % 10000 / 10000;
    grassStrokes.push({ x: 70 + n * 1110, y: 200 + m * 450, flip: i % 2 ? 1 : -1, len: 4 + i % 6 });
  }

  function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    view.dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(rect.width * view.dpr));
    canvas.height = Math.max(1, Math.round(rect.height * view.dpr));
    view.sx = rect.width / DESIGN_W;
    view.sy = rect.height / DESIGN_H;
  }

  function applyDesignTransform() {
    ctx.setTransform(view.dpr * view.sx, 0, 0, view.dpr * view.sy, 0, 0);
  }

  function polygon(points, fill, stroke, lineWidth = 1) {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i += 1) ctx.lineTo(points[i][0], points[i][1]);
    ctx.closePath();
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lineWidth; ctx.stroke(); }
  }

  function ellipse(x, y, rx, ry, fill, rotation = 0) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.restore();
  }

  function line(x1, y1, x2, y2, stroke, width = 1, cap = 'round') {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = stroke;
    ctx.lineWidth = width;
    ctx.lineCap = cap;
    ctx.stroke();
  }

  function roundedRect(x, y, w, h, r, fill, stroke, lineWidth = 1) {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lineWidth; ctx.stroke(); }
  }

  function drawScene(time) {
    applyDesignTransform();
    const t = time / 1000;
    ctx.clearRect(0, 0, DESIGN_W, DESIGN_H);

    // A pale storybook sky, kept deliberately quiet behind the village.
    const sky = ctx.createLinearGradient(0, 0, 0, DESIGN_H);
    sky.addColorStop(0, '#c4d39a');
    sky.addColorStop(.38, '#b2c98b');
    sky.addColorStop(1, '#719562');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, DESIGN_W, DESIGN_H);

    ellipse(1025, 128, 80, 80, 'rgba(255, 230, 158, .16)');
    ellipse(1025, 128, 52, 52, 'rgba(255, 224, 134, .3)');
    ellipse(1025, 128, 32, 32, 'rgba(255, 235, 164, .7)');

    // Distant hills and wispy clouds.
    polygon([[0, 252], [165, 178], [310, 225], [470, 151], [650, 217], [812, 152], [1018, 230], [1170, 164], [1280, 218], [1280, 390], [0, 390]], 'rgba(110, 147, 93, .38)');
    polygon([[0, 290], [142, 236], [310, 276], [462, 202], [626, 267], [825, 192], [1030, 280], [1196, 217], [1280, 258], [1280, 415], [0, 415]], 'rgba(76, 124, 84, .28)');
    ellipse(174, 119, 67, 11, 'rgba(255, 248, 205, .2)', -.12);
    ellipse(174, 111, 36, 10, 'rgba(255, 248, 205, .23)', -.12);
    ellipse(845, 82, 52, 9, 'rgba(255, 248, 205, .15)', .08);

    drawIsland();
    drawGroundTexture();
    drawBackTrees(t);
    drawPathAndStairs(t);
    drawHouse(t);
    drawSideObjects(t);
    drawField(t);
    drawForegroundTrees(t);
    drawPlayer(t);
    drawHoverTarget(t);
  }

  function drawIsland() {
    ellipse(654, 676, 535, 51, 'rgba(28, 69, 48, .22)');
    polygon([[63, 306], [130, 206], [282, 147], [470, 102], [681, 95], [873, 125], [1070, 197], [1192, 313], [1205, 480], [1125, 604], [952, 677], [691, 700], [407, 684], [183, 604], [79, 484]], '#789b63');
    polygon([[81, 314], [143, 219], [302, 164], [485, 123], [684, 119], [870, 148], [1054, 212], [1169, 319], [1183, 470], [1107, 585], [943, 650], [697, 675], [421, 663], [204, 583], [101, 470]], '#8daa6b');
    // Soft painted edge instead of a hard outline.
    polygon([[101, 470], [204, 583], [421, 663], [697, 675], [943, 650], [1107, 585], [1183, 470], [1205, 480], [1125, 604], [952, 677], [691, 700], [407, 684], [183, 604], [79, 484]], 'rgba(43, 88, 61, .23)');
  }

  function drawGroundTexture() {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(80, 300);
    ctx.lineTo(130, 206); ctx.lineTo(282, 147); ctx.lineTo(470, 102); ctx.lineTo(681, 95); ctx.lineTo(873, 125); ctx.lineTo(1070, 197); ctx.lineTo(1192, 313); ctx.lineTo(1205, 480); ctx.lineTo(1125, 604); ctx.lineTo(952, 677); ctx.lineTo(691, 700); ctx.lineTo(407, 684); ctx.lineTo(183, 604); ctx.lineTo(79, 484); ctx.closePath();
    ctx.clip();
    for (const f of flecks) {
      ctx.globalAlpha = f.a;
      if (f.type === 0) ellipse(f.x, f.y, f.s * 2.2, f.s, '#e1dc9c', -.35);
      else if (f.type === 1) ellipse(f.x, f.y, f.s * 1.2, f.s * .65, '#537d56', .35);
      else line(f.x, f.y, f.x + f.s * 3, f.y - f.s, '#d3c98b', .7);
    }
    ctx.globalAlpha = 1;
    for (const g of grassStrokes) {
      if ((g.x > 490 && g.x < 760 && g.y < 360) || (g.x > 780 && g.y > 450)) continue;
      line(g.x, g.y, g.x + g.flip * 2, g.y - g.len, 'rgba(48, 104, 69, .38)', 1);
      line(g.x + 1, g.y, g.x - g.flip * 2, g.y - g.len * .7, 'rgba(229, 214, 143, .22)', .8);
    }
    ctx.restore();
  }

  function drawBackTrees(t) {
    const trees = [
      [104, 266, 1.26, 0], [178, 192, .9, 1], [276, 143, .74, 0], [378, 126, .85, 2],
      [478, 91, .62, 1], [822, 92, .74, 1], [925, 120, .9, 0], [1038, 168, 1.08, 1],
      [1152, 239, 1.18, 2], [1203, 346, .98, 0], [63, 414, 1.05, 2],
    ];
    for (const [x, y, s, tone] of trees) drawTree(x, y, s, tone, t);
  }

  function drawForegroundTrees(t) {
    const trees = [
      [119, 520, 1.05, 0], [203, 613, .9, 1], [347, 668, .84, 2], [1066, 646, .87, 0], [1172, 566, 1.08, 2], [1240, 447, .95, 1],
    ];
    for (const [x, y, s, tone] of trees) drawTree(x, y, s, tone, t);
    // A few foreground leaves give the scene the hidden-garden frame described in the brief.
    ellipse(21, 585, 110, 91, 'rgba(40, 89, 61, .83)');
    ellipse(1260, 603, 105, 105, 'rgba(40, 89, 61, .83)');
    ellipse(15, 642, 104, 71, 'rgba(54, 103, 65, .65)');
    ellipse(1266, 672, 120, 75, 'rgba(54, 103, 65, .65)');
  }

  function drawTree(x, y, s, tone = 0, t = 0) {
    const palettes = [
      ['#3f7352', '#588b5b', '#79a667', '#a2b875'],
      ['#456f52', '#628f5b', '#87a568', '#b3bd7b'],
      ['#356b55', '#4d8159', '#6d9a60', '#9eb577'],
    ];
    const p = palettes[tone % palettes.length];
    ellipse(x + 2 * s, y + 55 * s, 44 * s, 13 * s, 'rgba(35, 74, 48, .24)');
    // chunky trunk, tucked below the foliage
    polygon([[x - 9 * s, y + 27 * s], [x + 9 * s, y + 25 * s], [x + 14 * s, y + 61 * s], [x - 10 * s, y + 61 * s]], '#725744');
    line(x - 1 * s, y + 32 * s, x - 2 * s, y + 57 * s, 'rgba(234, 187, 119, .3)', 2 * s);
    ellipse(x - 23 * s, y + 6 * s, 36 * s, 29 * s, p[0], -.1);
    ellipse(x + 18 * s, y - 4 * s, 39 * s, 35 * s, p[1], .12);
    ellipse(x - 5 * s, y - 29 * s, 42 * s, 33 * s, p[2], -.04);
    ellipse(x + 28 * s, y + 20 * s, 29 * s, 25 * s, p[1], .2);
    ellipse(x - 36 * s, y + 22 * s, 26 * s, 21 * s, p[1], -.17);
    ellipse(x - 7 * s, y - 50 * s, 22 * s, 16 * s, p[3], -.1);
    ellipse(x + 20 * s, y - 30 * s, 18 * s, 14 * s, p[3], .15);
    // hand-painted leaf marks
    ctx.globalAlpha = .23;
    line(x - 27 * s, y - 1 * s, x - 11 * s, y - 11 * s, '#d6d28f', 2 * s);
    line(x + 4 * s, y - 25 * s, x + 17 * s, y - 32 * s, '#e0d994', 1.8 * s);
    line(x + 15 * s, y + 12 * s, x + 29 * s, y + 5 * s, '#d6d28f', 1.5 * s);
    ctx.globalAlpha = 1;
    // Tiny motion on the tips makes the still illustration feel alive.
    if (s > .75) ellipse(x + 38 * s + Math.sin(t * .7 + x) * .7, y - 11 * s, 4 * s, 2 * s, 'rgba(240, 223, 153, .3)', -.3);
  }

  function drawPathAndStairs(t) {
    ctx.save();
    ctx.shadowColor = 'rgba(45, 76, 52, .2)';
    ctx.shadowBlur = 14;
    ctx.shadowOffsetY = 9;
    polygon([[514, 720], [726, 720], [699, 585], [684, 483], [666, 382], [704, 282], [666, 222], [616, 241], [595, 310], [611, 385], [577, 485], [553, 585]], '#d9c997');
    ctx.restore();
    polygon([[534, 720], [703, 720], [684, 592], [665, 483], [649, 386], [685, 288], [655, 242], [629, 261], [613, 317], [632, 389], [603, 490], [580, 590]], '#ebd9a5');

    // Stone slabs in a slightly uneven, illustrated rhythm.
    const stones = [
      [574, 660, 68, 27, -.07], [650, 620, 65, 25, .04], [590, 575, 59, 23, -.08], [655, 532, 57, 22, .04],
      [609, 487, 52, 20, -.08], [647, 447, 52, 19, .04], [628, 403, 47, 18, -.06], [642, 362, 44, 17, .04],
      [633, 320, 37, 15, -.08], [650, 279, 37, 15, .04], [642, 250, 32, 13, -.02],
    ];
    for (const [x, y, w, h, r] of stones) {
      ctx.save(); ctx.translate(x, y); ctx.rotate(r);
      roundedRect(-w / 2, -h / 2, w, h, 7, '#f2dfac');
      roundedRect(-w / 2 + 2, -h / 2 + 2, w - 4, h - 4, 5, 'rgba(255, 247, 200, .33)');
      ctx.restore();
    }

    // Steps disappearing behind the cottage and out to the high meadow.
    for (let i = 0; i < 7; i += 1) {
      const y = 215 - i * 22;
      const width = 84 - i * 4;
      polygon([[650 - width / 2, y], [650 + width / 2, y], [650 + width / 2 - 8, y - 10], [650 - width / 2 + 6, y - 10]], i % 2 ? '#d7c38d' : '#ead59e');
      line(650 - width / 2 + 8, y - 4, 650 + width / 2 - 8, y - 4, 'rgba(255,247,200,.38)', 1);
    }
    // Loose square stepping stones off the main path.
    polygon([[382, 513], [427, 501], [443, 517], [397, 531]], '#bfc59c');
    polygon([[347, 548], [384, 539], [400, 553], [360, 565]], '#d4c99f');
    polygon([[739, 377], [767, 367], [781, 379], [751, 391]], '#bdc19a');
    line(598, 693, 618, 690, 'rgba(147, 121, 76, .3)', 1);
    line(675, 646, 695, 643, 'rgba(147, 121, 76, .3)', 1);
  }

  function drawHouse(t) {
    ellipse(656, 343, 178, 31, 'rgba(39, 73, 53, .24)');
    // Stone walls: left wing and warm front plane.
    polygon([[506, 223], [635, 177], [635, 323], [522, 344], [506, 302]], '#9a9a7d');
    polygon([[635, 177], [790, 225], [794, 320], [635, 351]], '#a9a17d');
    // Hand laid blocks, intentionally irregular.
    const stones = [
      [523, 244, 41, 20], [568, 230, 38, 18], [609, 216, 23, 16], [522, 272, 30, 18], [556, 267, 44, 20], [603, 251, 31, 19],
      [647, 206, 46, 18], [696, 220, 31, 18], [730, 231, 47, 20], [649, 236, 32, 18], [686, 246, 45, 20], [738, 264, 42, 19],
      [649, 269, 45, 18], [698, 280, 36, 17], [741, 293, 44, 18], [648, 303, 30, 17], [682, 309, 44, 18],
    ];
    for (const [x, y, w, h] of stones) roundedRect(x, y, w, h, 5, `rgba(${x % 2 ? '224, 207, 155' : '128, 133, 112'}, .26)`);

    // Tall curved witch-hat roof.
    ctx.save();
    ctx.shadowColor = 'rgba(45, 51, 41, .26)'; ctx.shadowBlur = 12; ctx.shadowOffsetY = 8;
    ctx.beginPath();
    ctx.moveTo(493, 226);
    ctx.quadraticCurveTo(533, 173, 559, 126);
    ctx.quadraticCurveTo(586, 78, 616, 48);
    ctx.quadraticCurveTo(631, 84, 646, 132);
    ctx.quadraticCurveTo(657, 169, 690, 199);
    ctx.lineTo(635, 223); ctx.lineTo(569, 205); ctx.closePath();
    ctx.fillStyle = '#4d473e'; ctx.fill();
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(503, 222);
    ctx.quadraticCurveTo(538, 172, 565, 124);
    ctx.quadraticCurveTo(591, 79, 617, 52);
    ctx.quadraticCurveTo(634, 103, 643, 142);
    ctx.quadraticCurveTo(653, 173, 685, 198);
    ctx.lineTo(634, 218); ctx.lineTo(570, 200); ctx.closePath();
    const roofGrad = ctx.createLinearGradient(520, 70, 660, 225);
    roofGrad.addColorStop(0, '#6b5a49'); roofGrad.addColorStop(.55, '#51433e'); roofGrad.addColorStop(1, '#3d3e39');
    ctx.fillStyle = roofGrad; ctx.fill();
    // Roof brush marks and timber frame.
    ctx.globalAlpha = .32;
    for (let i = 0; i < 9; i += 1) {
      line(545 + i * 14, 176 - i * 11, 568 + i * 9, 121 - i * 8, '#9b8060', 2.2);
    }
    ctx.globalAlpha = 1;
    line(535, 190, 626, 143, '#b08b63', 5);
    line(626, 143, 639, 201, '#b08b63', 5);
    line(546, 150, 603, 208, '#a47b5a', 4);

    // Round porthole on the tall gable.
    ellipse(590, 144, 19, 19, '#c6b981');
    ellipse(590, 144, 14, 14, '#78a18a');
    line(577, 144, 603, 144, 'rgba(247,228,165,.63)', 1.5);
    line(590, 131, 590, 157, 'rgba(247,228,165,.63)', 1.5);

    // Red tiled roof section.
    ctx.save(); ctx.shadowColor = 'rgba(48, 61, 43, .23)'; ctx.shadowBlur = 10; ctx.shadowOffsetY = 7;
    polygon([[629, 181], [738, 132], [838, 188], [786, 239], [696, 215]], '#984c42'); ctx.restore();
    polygon([[638, 178], [740, 138], [828, 188], [781, 225], [698, 208]], '#b7604b');
    for (let i = 0; i < 5; i += 1) {
      const x = 681 + i * 28;
      line(x, 170 + i * 3, x + 70, 202 + i * 3, 'rgba(247,176,110,.4)', 2);
    }
    line(643, 181, 738, 145, 'rgba(245, 183, 111, .35)', 2);

    // Teal trim, little round window and arched front door.
    roundedRect(706, 225, 75, 10, 4, '#80a396');
    ellipse(752, 243, 17, 17, '#d9c58d');
    ellipse(752, 243, 12, 12, '#6c9889');
    line(741, 243, 763, 243, 'rgba(248,229,172,.7)', 1.2);
    line(752, 232, 752, 254, 'rgba(248,229,172,.7)', 1.2);
    // Door arch made as one warm shape.
    ctx.beginPath();
    ctx.moveTo(649, 349); ctx.lineTo(649, 282); ctx.arc(673, 282, 24, Math.PI, 0); ctx.lineTo(697, 338); ctx.closePath();
    ctx.fillStyle = '#704d3c'; ctx.fill();
    ctx.fillStyle = '#8c5b43'; ctx.fillRect(653, 283, 40, 62);
    line(673, 286, 673, 343, 'rgba(239, 199, 126, .36)', 2);
    line(657, 310, 689, 310, 'rgba(239, 199, 126, .25)', 1.5);
    ellipse(683, 318, 2.5, 2.5, '#efc978');
    // Turquoise arched frame.
    ctx.beginPath(); ctx.moveTo(646, 346); ctx.lineTo(646, 279); ctx.arc(673, 279, 27, Math.PI, 0); ctx.lineTo(700, 345); ctx.strokeStyle = '#83a794'; ctx.lineWidth = 5; ctx.stroke();

    // Hanging lantern and glow.
    line(809, 222, 809, 248, '#514d42', 2);
    line(802, 222, 816, 222, '#514d42', 2);
    roundedRect(801, 247, 16, 22, 3, '#765745');
    roundedRect(805, 250, 8, 15, 2, '#f2bd5c');
    ellipse(809, 258, 19, 25, 'rgba(255, 203, 101, .12)');

    // Pots and leaf mat by the doorway.
    polygon([[602, 341], [626, 341], [622, 362], [606, 362]], '#aa6248'); ellipse(614, 341, 13, 4, '#ce7751');
    ellipse(614, 337, 10, 10, '#5c8b60'); line(614, 338, 605, 325, '#4e7d57', 2); line(614, 338, 622, 325, '#4e7d57', 2);
    polygon([[704, 350], [735, 346], [729, 367], [709, 369]], '#ad644b'); ellipse(719, 347, 16, 4, '#d27c54');
    polygon([[628, 356], [696, 353], [709, 370], [641, 374]], '#b28b5f');
    for (let i = 0; i < 5; i += 1) line(638 + i * 13, 359, 645 + i * 13, 369, 'rgba(230,203,132,.65)', 1);
    // A tiny chimney puff.
    ellipse(720, 126 + Math.sin(t * .5) * 2, 12, 5, 'rgba(245, 235, 190, .22)');
    ellipse(735, 111 + Math.sin(t * .5 + 1) * 2, 17, 6, 'rgba(245, 235, 190, .16)');
  }

  function drawSideObjects(t) {
    drawLamp(330, 298);
    drawTable(254, 386);
    drawStump(483, 391);
    drawFence(856, 364);
    drawSign(1029, 344);
    drawChicken(768, 432, t);
    drawCoin(t);
    // Small flowers around the sitting place.
    flower(211, 420, '#e5a77a'); flower(229, 434, '#eac872'); flower(364, 407, '#cf8d7b'); flower(397, 448, '#f0c877');
  }

  function drawLamp(x, y) {
    ellipse(x, y + 65, 27, 8, 'rgba(37, 77, 53, .2)');
    line(x, y + 54, x, y - 4, '#3e4640', 5);
    line(x - 7, y + 54, x + 8, y + 54, '#3e4640', 3);
    line(x, y - 4, x - 8, y - 19, '#3e4640', 3);
    line(x, y - 4, x + 8, y - 19, '#3e4640', 3);
    roundedRect(x - 13, y - 40, 26, 24, 7, '#42473f');
    roundedRect(x - 8, y - 35, 16, 15, 4, '#efbc58');
    ellipse(x, y - 27, 22, 17, 'rgba(248, 198, 89, .16)');
    line(x - 17, y - 43, x + 17, y - 43, '#42473f', 3);
    ellipse(x, y - 44, 5, 4, '#42473f');
  }

  function drawTable(x, y) {
    ellipse(x, y + 40, 54, 15, 'rgba(39, 78, 52, .22)');
    polygon([[x - 5, y + 4], [x + 8, y + 4], [x + 5, y + 42], [x - 9, y + 42]], '#805640');
    ellipse(x, y, 38, 14, '#86593e');
    ellipse(x, y - 2, 32, 10, '#a96e4d');
    ellipse(x - 9, y - 4, 7, 2, 'rgba(232, 177, 105, .5)', -.2);
    // round log seat
    polygon([[x + 40, y + 19], [x + 73, y + 11], [x + 77, y + 25], [x + 45, y + 34]], '#79523e');
    ellipse(x + 40, y + 26, 9, 7, '#9b6548', -.25);
    ellipse(x + 61, y + 18, 8, 5, '#9b6548', -.25);
    // mug
    roundedRect(x - 7, y - 9, 12, 9, 2, '#d99a57');
    line(x + 5, y - 6, x + 10, y - 5, '#d99a57', 2);
  }

  function drawStump(x, y) {
    ellipse(x, y + 33, 47, 13, 'rgba(34, 73, 48, .21)');
    polygon([[x - 27, y - 3], [x + 27, y - 4], [x + 21, y + 30], [x - 22, y + 30]], '#8b5e42');
    ellipse(x, y - 4, 28, 12, '#b2794b');
    ellipse(x, y - 5, 20, 7, '#9d6846');
    ellipse(x - 6, y - 6, 7, 2, 'rgba(242, 189, 112, .55)', -.2);
    line(x - 20, y + 8, x - 16, y + 27, 'rgba(239, 181, 105, .28)', 2);
    // Axe embedded at a jaunty angle.
    line(x + 9, y - 12, x + 39, y - 62, '#6f503b', 6);
    line(x + 11, y - 14, x + 40, y - 63, '#bc8358', 2);
    ctx.save(); ctx.translate(x + 39, y - 64); ctx.rotate(.28);
    ctx.beginPath(); ctx.moveTo(-4, -4); ctx.quadraticCurveTo(20, -14, 24, 1); ctx.lineTo(7, 13); ctx.closePath(); ctx.fillStyle = '#9ba99b'; ctx.fill();
    ctx.restore();
    // Small fresh wood chips if it has been chopped.
    if (state.stumpChopped) {
      ellipse(x - 46, y + 20, 8, 3, '#c78b56', -.3);
      ellipse(x + 41, y + 27, 7, 3, '#c78b56', .4);
    }
  }

  function drawFence(x, y) {
    line(x, y + 33, x + 127, y - 8, '#76543f', 7);
    line(x, y + 21, x + 127, y - 20, '#9b6c4b', 6);
    for (let i = 0; i < 5; i += 1) {
      const px = x + i * 32;
      const py = y + 29 - i * 10;
      polygon([[px - 4, py - 20], [px + 5, py - 23], [px + 7, py + 18], [px - 4, py + 21]], '#855b43');
    }
    line(x + 2, y + 16, x + 123, y - 23, 'rgba(227, 171, 102, .42)', 1);
  }

  function drawSign(x, y) {
    ellipse(x, y + 50, 24, 7, 'rgba(38, 79, 50, .2)');
    line(x, y + 49, x, y - 1, '#73503d', 5);
    polygon([[x - 32, y - 18], [x + 18, y - 18], [x + 34, y - 5], [x + 18, y + 8], [x - 32, y + 8]], '#b85d48');
    polygon([[x - 29, y - 15], [x + 16, y - 15], [x + 28, y - 5], [x + 16, y + 3], [x - 29, y + 3]], '#c96c50');
    line(x - 7, y - 6, x + 13, y - 6, 'rgba(255, 226, 165, .75)', 2);
    line(x + 13, y - 6, x + 7, y - 11, 'rgba(255, 226, 165, .75)', 2);
    line(x + 13, y - 6, x + 7, y - 1, 'rgba(255, 226, 165, .75)', 2);
  }

  function drawChicken(x, y, t) {
    const bob = Math.sin(t * 3.5 + .4) * 1.4;
    ellipse(x + 3, y + 24, 30, 8, 'rgba(37, 75, 49, .2)');
    // tail feathers
    polygon([[x - 19, y - 4 + bob], [x - 40, y - 19 + bob], [x - 29, y + 1 + bob], [x - 43, y + 7 + bob], [x - 20, y + 10 + bob]], '#f5edcf');
    ellipse(x, y + bob, 25, 18, '#f8f1d9', -.1);
    ellipse(x + 12, y - 17 + bob, 15, 14, '#fcf2d3');
    ellipse(x + 18, y - 19 + bob, 4, 5, '#c85d4d');
    ellipse(x + 9, y - 24 + bob, 4, 5, '#c85d4d');
    ellipse(x + 13, y - 19 + bob, 3, 2, '#4f4a3e');
    polygon([[x + 26, y - 16 + bob], [x + 39, y - 12 + bob], [x + 27, y - 8 + bob]], '#d9984b');
    line(x - 6, y + 15 + bob, x - 8, y + 27 + bob, '#be8146', 2);
    line(x + 8, y + 15 + bob, x + 8, y + 27 + bob, '#be8146', 2);
    line(x - 12, y + 27 + bob, x - 5, y + 27 + bob, '#be8146', 2);
    line(x + 4, y + 27 + bob, x + 11, y + 27 + bob, '#be8146', 2);
    if (!state.eggCollected) {
      ellipse(x - 30, y + 25, 7, 9, '#fff4d8', -.16);
      ellipse(x - 31, y + 23, 3, 4, 'rgba(221, 190, 125, .28)');
    }
  }

  function drawCoin(t) {
    if (state.coinCollected) return;
    const bob = Math.sin(t * 2.4) * 3;
    ellipse(286, 468, 16, 5, 'rgba(41, 79, 46, .16)');
    ellipse(286, 455 + bob, 11, 6, '#d89b42', -.15);
    ellipse(286, 453 + bob, 8, 5, '#f4c863', -.15);
    line(283, 453 + bob, 288, 451 + bob, 'rgba(255,248,189,.7)', 1);
    ellipse(300, 439 + bob, 4, 2, 'rgba(255,246,176,.65)');
    ellipse(273, 442 + bob, 3, 1.5, 'rgba(255,246,176,.6)');
  }

  function flower(x, y, color) {
    line(x, y + 9, x + 1, y - 2, '#4e7d54', 1.2);
    ellipse(x, y - 4, 4, 3, color); ellipse(x + 4, y - 1, 3, 4, color); ellipse(x - 4, y - 1, 3, 4, color); ellipse(x, y - 1, 2, 2, '#e9cc78');
  }

  function drawField(t) {
    // rich soil plot
    polygon([[788, 487], [973, 422], [1114, 493], [939, 592], [800, 552]], 'rgba(99, 67, 47, .22)');
    polygon([[805, 473], [974, 414], [1110, 482], [937, 574], [813, 538]], '#9d704b');
    polygon([[816, 479], [973, 428], [1093, 486], [934, 563], [824, 531]], '#ae7a4d');
    // furrows
    for (let i = 0; i < 7; i += 1) {
      const ax = 827 + i * 24; const ay = 527 - i * 11;
      line(ax, ay, ax + 145, ay - 57, 'rgba(78, 61, 45, .31)', 4);
      line(ax + 4, ay - 2, ax + 149, ay - 59, 'rgba(221, 164, 92, .24)', 1);
    }
    if (!state.wheatCollected) {
      // golden rows lean gently with the breeze
      for (let row = 0; row < 6; row += 1) {
        const startX = 842 + row * 24; const startY = 518 - row * 10;
        for (let j = 0; j < 7; j += 1) {
          const x = startX + j * 19; const y = startY - j * 7;
          const sway = Math.sin(t * 1.4 + row * .7 + j) * 1.5;
          line(x, y, x + sway - 2, y - 25, '#d49a41', 2);
          line(x + sway - 2, y - 20, x + sway + 5, y - 23, '#e5b651', 2);
          line(x + sway - 2, y - 14, x + sway - 7, y - 17, '#e5b651', 1.5);
          line(x + sway - 2, y - 8, x + sway + 4, y - 11, '#e5b651', 1.5);
        }
      }
    } else {
      for (let row = 0; row < 7; row += 1) {
        line(832 + row * 21, 520 - row * 10, 977 + row * 21, 466 - row * 10, 'rgba(89, 122, 65, .75)', 2);
        line(839 + row * 21, 519 - row * 10, 978 + row * 21, 468 - row * 10, 'rgba(210, 181, 100, .28)', 1);
      }
      ellipse(1035, 463, 22, 8, 'rgba(240, 209, 131, .45)', -.2);
    }
    // little sign beside the plot
    line(792, 490, 792, 540, '#805741', 4);
    polygon([[792, 490], [831, 480], [831, 501], [792, 511]], '#d68c4c');
    line(801, 493, 823, 488, 'rgba(255,235,169,.65)', 1.4);
  }

  function drawPlayer(t) {
    const p = state.player;
    const bob = Math.sin(t * 5.2) * (Math.abs(p.targetX - p.x) + Math.abs(p.targetY - p.y) < 2 ? 1.3 : .45);
    const moving = Math.hypot(p.targetX - p.x, p.targetY - p.y) > 2;
    const step = moving ? Math.sin(t * 12) * 2 : 0;
    ellipse(p.x + 3, p.y + 42, 33, 10, 'rgba(36, 71, 48, .24)');
    // boots and white trousers/apron
    roundedRect(p.x - 15, p.y + 20 + bob + step, 11, 22, 5, '#5b4d43');
    roundedRect(p.x + 5, p.y + 20 + bob - step, 11, 22, 5, '#5b4d43');
    polygon([[p.x - 22, p.y - 3 + bob], [p.x + 21, p.y - 3 + bob], [p.x + 20, p.y + 25 + bob], [p.x - 18, p.y + 25 + bob]], '#f5ebd3');
    // maroon top
    roundedRect(p.x - 25, p.y - 23 + bob, 50, 37, 13, '#773e4a');
    ellipse(p.x - 24, p.y - 1 + bob, 9, 21, '#6b3946', -.18);
    ellipse(p.x + 24, p.y - 1 + bob, 9, 21, '#6b3946', .18);
    // apron bib and tie
    polygon([[p.x - 12, p.y - 9 + bob], [p.x + 12, p.y - 9 + bob], [p.x + 15, p.y + 25 + bob], [p.x - 15, p.y + 25 + bob]], '#fff1d5');
    line(p.x - 13, p.y - 11 + bob, p.x - 20, p.y - 24 + bob, '#f2e3c3', 2);
    line(p.x + 13, p.y - 11 + bob, p.x + 20, p.y - 24 + bob, '#f2e3c3', 2);
    // arms and hands
    ellipse(p.x - 27, p.y + 8 + bob, 7, 12, '#e7ad82', -.1); ellipse(p.x + 27, p.y + 8 + bob, 7, 12, '#e7ad82', .1);
    // red-brown hair, face, pigtails
    ellipse(p.x - 26, p.y - 41 + bob, 9, 16, '#703d3f'); ellipse(p.x + 26, p.y - 41 + bob, 9, 16, '#703d3f');
    ellipse(p.x, p.y - 42 + bob, 22, 23, '#f0bd8d');
    ellipse(p.x - 18, p.y - 48 + bob, 10, 15, '#7b4141', -.35); ellipse(p.x + 18, p.y - 48 + bob, 10, 15, '#7b4141', .35);
    ellipse(p.x - 7, p.y - 42 + bob, 2, 2, '#4f3835'); ellipse(p.x + 7, p.y - 42 + bob, 2, 2, '#4f3835');
    line(p.x - 3, p.y - 34 + bob, p.x + 4, p.y - 34 + bob, '#a05d58', 1.4);
    // wide straw hat
    ellipse(p.x, p.y - 57 + bob, 42, 10, '#dfc17d');
    ctx.beginPath(); ctx.moveTo(p.x - 19, p.y - 60 + bob); ctx.quadraticCurveTo(p.x - 12, p.y - 88 + bob, p.x + 7, p.y - 82 + bob); ctx.quadraticCurveTo(p.x + 18, p.y - 77 + bob, p.x + 20, p.y - 59 + bob); ctx.closePath(); ctx.fillStyle = '#d6b66e'; ctx.fill();
    ellipse(p.x, p.y - 61 + bob, 42, 8, '#ebcf8b');
    line(p.x - 20, p.y - 60 + bob, p.x + 20, p.y - 60 + bob, '#bd8a54', 2);
    // tool at her side when selected
    if (state.tool === 'chop') { line(p.x + 29, p.y - 1 + bob, p.x + 45, p.y - 27 + bob, '#77523d', 3); }
    else if (state.tool === 'harvest') { line(p.x + 29, p.y + 8 + bob, p.x + 39, p.y - 6 + bob, '#7a5940', 2); }
  }

  function drawHoverTarget(t) {
    const zone = state.hovered || state.target;
    if (!zone) return;
    const alpha = .15 + (Math.sin(t * 4) + 1) * .055;
    let x = zone.x; let y = zone.y;
    if (zone.id === 'wheat') { x = 916; y = 512; }
    if (zone.id === 'house') { y = 260; }
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = '#ffe19a';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 7]);
    ctx.beginPath();
    ctx.ellipse(x, y, Math.max(22, zone.r * .58), Math.max(12, zone.r * .25), 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  function eventPoint(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: (event.clientX - rect.left) / rect.width * DESIGN_W, y: (event.clientY - rect.top) / rect.height * DESIGN_H };
  }

  function zoneAt(point) {
    // objects further down are checked first, like their visual depth.
    for (let i = zones.length - 1; i >= 0; i -= 1) {
      const zone = zones[i];
      const dx = point.x - zone.x; const dy = point.y - zone.y;
      if (Math.hypot(dx, dy) <= zone.r) return zone;
    }
    return null;
  }

  function setTarget(zone) {
    state.target = zone;
    if (!zone) {
      hideInteraction();
      return;
    }
    const targetMap = { house: [665, 360], wheat: [850, 500], stump: [480, 421], coin: [286, 456], chicken: [768, 457], lamp: [335, 355], stairs: [650, 220] };
    const destination = targetMap[zone.id] || [zone.x, zone.y];
    state.player.targetX = destination[0]; state.player.targetY = destination[1];
    showInteraction(zone);
  }

  function showInteraction(zone) {
    const panel = document.getElementById('interactionPanel');
    const title = document.getElementById('interactionTitle');
    const description = document.getElementById('interactionDescription');
    const action = document.getElementById('interactionAction');
    const icon = document.getElementById('interactionIcon');
    title.textContent = zone.title;
    description.textContent = zone.description;
    icon.textContent = zone.icon;
    action.textContent = zone.action;
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

  function setDescription(text) {
    document.getElementById('interactionDescription').textContent = text;
  }

  function performZone(zone) {
    if (!zone) return;
    setTarget(zone);
    if (zone.id === 'coin') collectCoin();
    else if (zone.id === 'wheat') interactWithWheat();
    else if (zone.id === 'stump') chopStump();
    else if (zone.id === 'chicken') collectEgg();
    else if (zone.id === 'house') openModal('calendarModal');
    else if (zone.id === 'stairs') showToast(state.day >= 10 ? 'Lối lên đồi đã mở!' : 'Lối lên đồi mở vào ngày thứ mười.');
    else if (zone.id === 'lamp') setDescription('Một ánh đèn nhỏ cho buổi tối thật yên.');
  }

  function collectCoin() {
    if (state.coinCollected) { showToast('Bạn đã nhặt xu nắng này rồi.'); setDescription('Cỏ chỉ còn lại một vệt sáng nhỏ.'); return; }
    state.coinCollected = true;
    state.coins += 8;
    showToast('Nhặt được 8 xu nắng!');
    setDescription('Lấp lánh quá — thêm 8 xu vào túi.');
    updateUI();
  }

  function interactWithWheat() {
    if (state.wheatCollected) {
      if (state.tool === 'plant') {
        if (state.wheat < 2 || state.energy < 6) { showToast('Cần 2 hạt giống và 6 năng lượng.'); return; }
        state.wheat -= 2; state.energy -= 6; state.wheatCollected = false;
        showToast('Gieo thêm một luống lúa nhỏ.');
        setDescription('Mầm non sẽ lớn lên trong vài ngày nắng.');
        updateUI();
      } else {
        showToast('Luống lúa đã được thu hoạch.');
        setDescription('Đất mềm đang chờ những hạt giống mới.');
      }
      return;
    }
    if (state.tool && state.tool !== 'harvest' && state.tool !== 'plant') {
      showToast('Hãy chọn liềm để thu hoạch.');
      return;
    }
    if (state.energy < 8) { showToast('Hana hơi mệt rồi — hãy nghỉ một chút.'); return; }
    state.wheatCollected = true;
    state.wheat += 3;
    state.energy -= 8;
    showToast('Thu hoạch được 3 bó lúa mì!');
    setDescription('Vàng ươm và thơm nắng — thêm 3 bó vào túi.');
    updateQuest('wheat');
    updateUI();
  }

  function chopStump() {
    if (state.stumpChopped) { showToast('Gốc cây đã được dọn sạch hôm nay.'); setDescription('Mùn gỗ còn thơm mùi nhựa cây.'); return; }
    if (state.tool && state.tool !== 'chop') { showToast('Hãy chọn rìu để đốn gỗ.'); return; }
    if (state.energy < 12) { showToast('Cần thêm năng lượng để vung rìu.'); return; }
    state.stumpChopped = true;
    state.wood += 2;
    state.energy -= 12;
    showToast('Đốn được 2 gỗ thông!');
    setDescription('Hai khúc gỗ chắc chắn cho những món đồ mới.');
    updateUI();
  }

  function collectEgg() {
    if (state.eggCollected) { showToast('Gà Mận đang đi tìm hạt kê.'); setDescription('Cục tác — hẹn gặp lại sau nhé.'); return; }
    state.eggCollected = true;
    state.eggs += 1;
    showToast('Nhặt được một quả trứng mới!');
    setDescription('Trứng gà tươi, vẫn còn ấm dưới nắng.');
    updateUI();
  }

  function updateQuest(completed) {
    if (completed === 'wheat') markQuestDone(document.getElementById('wheatQuest'));
    if (completed === 'coin') markQuestDone(document.getElementById('coinQuest'));
    const done = document.querySelectorAll('.quest-row.done').length;
    document.getElementById('questDone').textContent = done;
    document.getElementById('questProgress').style.width = `${done / 3 * 100}%`;
  }

  function markQuestDone(row) {
    if (!row.classList.contains('done')) {
      row.classList.add('done');
      const check = row.querySelector('.quest-check');
      if (check) check.textContent = '✓';
    }
  }

  function updateUI() {
    document.getElementById('energyBar').style.width = `${clamp(state.energy, 0, 100)}%`;
    document.getElementById('wheatCount').textContent = state.wheat;
    document.getElementById('woodCount').textContent = state.wood;
    document.getElementById('eggCount').textContent = state.eggs;
    document.getElementById('coinCount').textContent = state.coins;
    const total = state.wheat + state.wood + state.eggs;
    document.getElementById('bagCount').textContent = String(total).padStart(2, '0');
    if (state.coinCollected) updateQuest('coin');
  }

  function selectTool(tool) {
    state.tool = tool;
    const menu = document.getElementById('toolMenu');
    menu.querySelectorAll('button').forEach((button) => button.classList.toggle('selected', button.dataset.tool === tool));
    document.getElementById('toolLabel').textContent = toolNames[tool];
    document.getElementById('toolButton').classList.add('active');
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    document.getElementById('toolButton').setAttribute('aria-expanded', 'false');
    showToast(`${toolTitles[tool]} đã sẵn sàng.`);
  }

  function toggleToolMenu() {
    const menu = document.getElementById('toolMenu');
    const open = !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.getElementById('toolButton').setAttribute('aria-expanded', String(open));
  }

  function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastText').textContent = message;
    toast.classList.add('show');
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function openModal(id) {
    document.querySelectorAll('.modal-backdrop').forEach((modal) => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    });
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  function advanceDay() {
    state.day += 1;
    state.weekday = weekdayNames[(state.day - 1) % 7];
    state.energy = 100;
    state.wheatCollected = false;
    state.coinCollected = false;
    state.eggCollected = false;
    state.stumpChopped = false;
    document.querySelectorAll('.quest-row:not(.done)').forEach((row) => { const check = row.querySelector('.quest-check'); if (check) check.textContent = ''; });
    // The first task is a gentle ritual every morning.
    document.getElementById('wheatQuest').classList.remove('done');
    document.getElementById('coinQuest').classList.remove('done');
    updateQuest();
    document.querySelector('.calendar-copy b').textContent = state.weekday;
    document.querySelector('.calendar-copy small').textContent = `DAY ${String(state.day).padStart(2, '0')}`;
    const calendarTitle = document.getElementById('calendarTitle');
    calendarTitle.textContent = `${state.weekday === 'SUN' ? 'Chủ nhật' : state.weekday === 'SAT' ? 'Thứ Bảy' : 'Một ngày mới'}, ngày ${state.day}`;
    closeModal('calendarModal');
    showToast(`Ngày ${String(state.day).padStart(2, '0')} bắt đầu thật dịu dàng.`);
    updateUI();
  }

  function bindEvents() {
    window.addEventListener('resize', resizeCanvas, { passive: true });

    canvas.addEventListener('pointermove', (event) => {
      const point = eventPoint(event);
      const zone = zoneAt(point);
      state.hovered = zone;
      canvas.style.cursor = zone ? 'pointer' : 'default';
      if (zone && event.pointerType !== 'touch') showInteraction(zone);
    });

    canvas.addEventListener('pointerleave', () => {
      state.hovered = null;
      canvas.style.cursor = 'default';
    });

    canvas.addEventListener('pointerdown', (event) => {
      const point = eventPoint(event);
      const zone = zoneAt(point);
      if (zone) {
        performZone(zone);
      } else {
        state.target = null;
        state.player.targetX = clamp(point.x, 180, 1100);
        state.player.targetY = clamp(point.y, 240, 630);
        hideInteraction();
      }
    });

    document.getElementById('profileButton').addEventListener('click', () => openModal('inventoryModal'));
    document.getElementById('bagButton').addEventListener('click', () => openModal('inventoryModal'));
    document.getElementById('calendarButton').addEventListener('click', () => openModal('calendarModal'));
    document.getElementById('lockButton').addEventListener('click', () => showToast('Thorny Grove mở vào ngày thứ mười.'));
    document.getElementById('toolButton').addEventListener('click', toggleToolMenu);
    document.querySelectorAll('#toolMenu button').forEach((button) => button.addEventListener('click', () => selectTool(button.dataset.tool)));
    document.getElementById('interactionAction').addEventListener('click', () => {
      if (state.target) performZone(state.target);
    });
    document.querySelectorAll('[data-focus]').forEach((button) => button.addEventListener('click', () => {
      const zone = zones.find((item) => item.id === button.dataset.focus);
      if (zone) { setTarget(zone); showToast(`Đã đánh dấu: ${zone.title}.`); }
    }));
    document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => closeModal(button.dataset.closeModal)));
    document.querySelectorAll('.modal-backdrop').forEach((modal) => modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(modal.id); }));
    document.getElementById('restButton').addEventListener('click', advanceDay);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop.open').forEach((modal) => closeModal(modal.id));
        document.getElementById('toolMenu').classList.remove('open');
      }
      if (event.key === 'b' || event.key === 'B') openModal('inventoryModal');
      if (event.key === '1') selectTool('harvest');
      if (event.key === '2') selectTool('chop');
      if (event.key === '3') selectTool('plant');
    });
  }

  function update(dt) {
    const p = state.player;
    const dx = p.targetX - p.x; const dy = p.targetY - p.y;
    const distance = Math.hypot(dx, dy);
    if (distance > 1) {
      const speed = Math.min(170 * dt, distance);
      p.x += dx / distance * speed;
      p.y += dy / distance * speed;
    }
  }

  let lastFrame = performance.now();
  function loop(now) {
    const dt = Math.min((now - lastFrame) / 1000, .05);
    lastFrame = now;
    update(dt);
    drawScene(now);
    window.requestAnimationFrame(loop);
  }

  resizeCanvas();
  bindEvents();
  updateUI();
  showToast('Chào mừng đến Mossgrove');
  window.requestAnimationFrame(loop);
})();
