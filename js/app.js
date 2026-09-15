/* ================= GrammarLab THPT — app.js ================= */
"use strict";

/* ---------- Data merge ---------- */
const LESSONS = [...LESSONS_A, ...LESSONS_B];
const QUESTIONS = [...QUESTIONS_A, ...QUESTIONS_B];
const TOPIC = Object.fromEntries(LESSONS.map(l => [l.id, l]));
/* Icon minh họa vẽ tay cho từng chủ đề (crop từ sticker sheet) */
const TOPIC_IMG = {
  "t-present":"clock", "t-past":"hourglass", "t-future":"rocket",
  "nouns":"abacus", "pronouns":"blocks", "articles":"magnifier",
  "gerund":"puzzle", "adj-adv":"palette", "comparison":"scale",
  "passive":"gears", "reported":"envelope", "conditionals":"rainbow",
  "relative":"chain", "modals":"key", "adverbial":"signpost", "inversion":"spintop"
};
const topicIcon = (id) => TOPIC_IMG[id] ? `<img src="img/icons/${TOPIC_IMG[id]}.png" alt="" loading="lazy">` : (TOPIC[id]?.icon||"📘");

/* ---------- Helpers ---------- */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const shuffle = a => { const b=[...a]; for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b; };
const DAY = 86400000;
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
function toast(msg, type=""){ const t=document.createElement("div"); t.className="toast "+type; t.textContent=msg; $("#toast-wrap").appendChild(t); setTimeout(()=>{t.style.opacity="0"; t.style.transition="opacity .4s"; setTimeout(()=>t.remove(),400);}, 2600); }
const OPT_KEYS = ["A","B","C","D"];
const LEVEL_CLS = {"Cơ bản":"basic","Trung bình":"medium","Nâng cao":"advanced"};

/* ---------- State (localStorage) ---------- */
const KEY = "grammarlab_thpt_v1";
let state = load();
function load(){ try{ return Object.assign(defaultState(), JSON.parse(localStorage.getItem(KEY))||{}); }catch(e){ return defaultState(); } }
function defaultState(){ return {learned:{}, topicStats:{}, cards:{}, mistakes:{}, streak:{n:0,last:null}, total:{c:0,t:0}, tests:[], theme:"light"}; }
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(state)); }catch(e){} }
function markStudy(){
  const today = new Date().toDateString();
  if(state.streak.last === today) return;
  const yest = new Date(Date.now()-DAY).toDateString();
  state.streak.n = (state.streak.last === yest) ? state.streak.n+1 : 1;
  state.streak.last = today; save(); paintStreak();
}
function paintStreak(){ $("#streak-num").textContent = state.streak.n; }
function paintMistakeBadge(){
  const n = Object.keys(state.mistakes).length;
  const b = $("#mistake-badge");
  b.textContent = n; b.classList.toggle("hidden", n===0);
}
function topicMastery(t){
  const learned = state.learned[t] ? 30 : 0;
  const s = state.topicStats[t];
  const acc = (s && s.t>0) ? Math.round(s.c/s.t*70) : 0;
  return Math.min(100, learned+acc);
}
function recordAnswer(q, ok){
  const ts = state.topicStats[q.topic] || {c:0,t:0};
  ts.t++; if(ok) ts.c++; state.topicStats[q.topic]=ts;
  state.total.t++; if(ok) state.total.c++;
  if(ok) delete state.mistakes[q.id];
  else state.mistakes[q.id] = {n:(state.mistakes[q.id]?.n||0)+1, t:Date.now()};
  save(); paintMistakeBadge();
}

/* ---------- Theme ---------- */
function applyTheme(){ document.documentElement.dataset.theme = state.theme; $("#theme-toggle").textContent = state.theme==="dark" ? "☀️" : "🌙"; }
$("#theme-toggle").addEventListener("click", ()=>{ state.theme = state.theme==="dark"?"light":"dark"; save(); applyTheme(); });

/* ---------- Nav ---------- */
$("#nav-burger").addEventListener("click", ()=> $("#mainnav").classList.toggle("open"));
document.addEventListener("click", e=>{ if(!e.target.closest("#mainnav") && !e.target.closest("#nav-burger")) $("#mainnav").classList.remove("open"); });
function paintNav(path){
  $$(".mainnav a").forEach(a=>{
    const k = a.dataset.nav;
    a.classList.toggle("active", path===k || (k!=="/" && path.startsWith(k)));
  });
}

/* ================= VIEWS ================= */
const app = $("#app");
let testTimer = null;

function route(){
  if(testTimer){ clearInterval(testTimer); testTimer=null; }
  const hash = location.hash || "#/";
  const [_, page, arg] = hash.slice(1).split("/");
  paintNav("/"+(page||""));
  window.scrollTo(0,0);
  switch(page){
    case undefined: case "": renderHome(); break;
    case "methods": renderMethods(); break;
    case "lessons": arg ? renderLesson(arg) : renderLessons(); break;
    case "flashcards": renderFlashcards(); break;
    case "practice": renderPractice(arg); break;
    case "test": renderTest(); break;
    case "mistakes": renderMistakes(); break;
    case "progress": renderProgress(); break;
    default: renderHome();
  }
}
window.addEventListener("hashchange", route);

/* ---------- Home ---------- */
function dueCards(){ const now=Date.now(); return FLASHCARDS.filter(f=>{ const c=state.cards[f.id]; return !c || c.due<=now; }).length; }
function nextLesson(){ return LESSONS.find(l=>!state.learned[l.id]); }
function accuracy(){ return state.total.t ? Math.round(state.total.c/state.total.t*100) : 0; }

function renderHome(){
  const due = dueCards(), nl = nextLesson();
  const mastered = LESSONS.filter(l=>topicMastery(l.id)>=70).length;
  const feats = [
    ["cat-lessons.png","tint-mint","📖","Bài học","16 chủ đề đầy đủ lớp 10–12: công thức, ví dụ, mẹo nhớ, lỗi thường gặp.","#/lessons"],
    ["cat-flashcards.png","tint-butter","🃏","Flashcards","96 thẻ ôn tập ngắt quãng — hệ thống tự tính ngày ôn cho bạn.","#/flashcards"],
    ["cat-practice.png","tint-peach","✏️","Luyện tập","128 câu trắc nghiệm lời giải tức thì, trộn xen kẽ chủ đề.","#/practice"],
    ["cat-test.png","tint-lav","📝","Đề thi thử","20 câu / 20 phút có bấm giờ, chấm điểm thang 10.","#/test"],
    ["cat-mistakes.png","tint-pink","📕","Sổ lỗi sai","Tự ghi lại câu sai, luyện đến khi sửa hết lỗi mới thôi.","#/mistakes"],
    ["cat-progress.png","tint-green","📊","Tiến độ","Độ vững từng chủ đề, chuỗi ngày học, lịch sử đề thi.","#/progress"]
  ];
  app.innerHTML = `
  <section class="hero">
    <img class="hero-img" src="img/hero.jpg" alt="Grama — khủng long nhỏ ôn ngữ pháp">
    <div class="hero-copy">
      <span class="hero-eyebrow">🔥 ${state.streak.n} ngày học liên tiếp</span>
      <h1>Học Ngữ pháp<br><mark>tiếng Anh</mark> THPT</h1>
      <p>Đầy đủ bài học, phương pháp ghi nhớ khoa học và luyện tập mỗi ngày — cùng Grama chinh phục ngữ pháp thật dễ dàng!</p>
      <div class="btns">
        <a class="btn primary big" href="#/lessons">Bắt đầu học →</a>
        <a class="btn ghost big" href="#/flashcards">Ôn ${due} thẻ hôm nay ›</a>
      </div>
    </div>
  </section>

  <div class="grid c3">
    ${feats.map(f=>`<a class="card feature-card ${f[1]}" href="${f[5]}">
      <span class="fc-arrow">›</span>
      <div class="fc-chip">${f[2]}</div>
      <img src="img/${f[0]}" alt="${f[3]}" loading="lazy">
      <h3>${f[3]}</h3><p>${f[4]}</p>
    </a>`).join("")}
  </div>

  <div class="grid c4" style="margin-top:22px">
    <div class="card stat-card"><span class="num">${state.streak.n} 🔥</span><span class="lbl">Chuỗi ngày học liên tiếp</span></div>
    <div class="card stat-card"><span class="num">${state.total.t}</span><span class="lbl">Câu đã luyện</span></div>
    <div class="card stat-card"><span class="num">${accuracy()}%</span><span class="lbl">Độ chính xác</span></div>
    <div class="card stat-card"><span class="num">${mastered}/16</span><span class="lbl">Chủ đề đã vững (≥70%)</span></div>
  </div>

  <div class="sec-head"><h2>🎯 Kế hoạch hôm nay</h2><a href="#/methods">Phương pháp học →</a></div>
  <div class="grid c3">
    <div class="card">
      <h3 style="margin-bottom:6px">🃏 Ôn Flashcards</h3>
      <p class="muted" style="font-size:.88rem;margin-bottom:12px">Spaced Repetition: ${due} thẻ đến hạn hôm nay. Chỉ 5 phút mỗi ngày, nhớ lâu gấp 3 lần.</p>
      <a class="btn primary small" href="#/flashcards">Ôn ngay</a>
    </div>
    <div class="card">
      <h3 style="margin-bottom:6px">📖 Học bài mới</h3>
      <p class="muted" style="font-size:.88rem;margin-bottom:12px">${nl ? "Bài gợi ý: <b>"+esc(nl.title)+"</b> — đọc lý thuyết 7 phút rồi luyện 5 câu." : "Bạn đã học đủ 16 bài. Ôn lại flashcards và luyện đề nhé!"}</p>
      ${nl ? `<a class="btn primary small" href="#/lessons/${nl.id}">Vào bài học</a>` : `<a class="btn ghost small" href="#/test">Làm đề thi thử</a>`}
    </div>
    <div class="card">
      <h3 style="margin-bottom:6px">📕 Sửa lỗi sai</h3>
      <p class="muted" style="font-size:.88rem;margin-bottom:12px">${Object.keys(state.mistakes).length ? "Bạn có <b>"+Object.keys(state.mistakes).length+" lỗi sai</b> chưa được sửa. Giải quyết chúng ngay!" : "Tuyệt vời! Chưa có lỗi sai nào trong sổ."}</p>
      <a class="btn ${Object.keys(state.mistakes).length?"primary":"ghost"} small" href="#/mistakes">Mở sổ lỗi sai</a>
    </div>
  </div>

  <div class="sec-head"><h2>📈 Tiến độ theo chủ đề</h2><a class="muted" href="#/progress">Chi tiết →</a></div>
  <div class="card">
    ${LESSONS.map(l=>{
      const m = topicMastery(l.id);
      const cls = m<40?"low":(m<70?"mid":"");
      return `<div class="pb-row">
        <div class="pb-label"><span>${l.icon} ${esc(l.title)}</span><span class="muted">${m}%</span></div>
        <div class="pb-track"><div class="pb-fill ${cls}" style="width:${m}%"></div></div>
      </div>`;}).join("")}
  </div>`;
}

/* ---------- Methods ---------- */
function renderMethods(){
  const methods = [
    {i:"🔁", n:"Spaced Repetition (Ôn tập ngắt quãng)", d:"Não quên theo đường cong Ebbinghaus. Ôn lại đúng lúc sắp quên giúp chuyển kiến thức vào trí nhớ dài hạn.", h:"Hệ thống <b>Flashcards Leitner 6 hộp</b> tự tính ngày ôn: thẻ khó gặp thường xuyên, thẻ dễ giãn cách 2 → 4 → 8 → 16 → 30 ngày."},
    {i:"🧠", n:"Active Recall (Chủ động gợi nhớ)", d:"Đọc lại nhiều lần chỉ tạo 'ảo giác nhớ'. Tự trả lời câu hỏi trước khi xem đáp án giúp não truy xuất mạnh hơn gấp nhiều lần.", h:"Mỗi bài học có mục <b>🧠 Tự kiểm tra</b>; hệ thống luyện tập luôn buộc bạn chọn đáp án trước khi lộ lời giải."},
    {i:"👨‍🏫", n:"Phương pháp Feynman (Giải thích lại)", d:"Nếu bạn giải thích được một khái niệm cho 'cậu bé 12 tuổi', bạn thực sự hiểu nó. Giải thích bằng lời của mình = kiểm chứng hiểu sâu.", h:"Sau mỗi bài, hãy tự nói lại quy tắc thành 1–2 câu tiếng Việt theo gợi ý <b>🧠 recall</b> cuối bài."},
    {i:"🔀", n:"Interleaving (Học xen kẽ)", d:"Học dồn (blocked practice) khiến bạn 'quen mặt bài' nhưng quên nhanh. Xen kẽ nhiều chủ đề buộc não phân biệt và chọn đúng công thức.", h:"Chế độ <b>Đề tổng hợp</b> trộn ngẫu nhiên 16 chủ đề; <b>Đề thi thử</b> mô phỏng bài thi thật có bấm giờ."},
    {i:"📕", n:"Mistake-driven Learning (Học từ lỗi sai)", d:"Lỗi sai là 'bản đồ kho báu' chỉ đúng chỗ bạn yếu. Sửa triệt để từng lỗi tiết kiệm thời gian hơn học thêm bài mới.", h:"Mọi câu sai được tự động ghi vào <b>Sổ lỗi sai</b>; trả lời đúng thì lỗi mới được xóa. Ôn lại riêng phần mình yếu."},
    {i:"🍅", n:"Pomodoro (Tập trung theo phiên)", d:"Não tập trung tối đa khoảng 25 phút. Học theo phiên có nghỉ ngơi giúp giữ năng lượng và giảm xao nhãng.", h:"Góc phải màn hình có <b>Đồng hồ Pomodoro</b>: 25 phút tập trung → 5 phút nghỉ, lặp lại 4 phiên rồi nghỉ dài."},
    {i:"🔥", n:"Gamification & Streak (Chuỗi ngày học)", d:"Thói quen quan trọng hơn động lực. Chuỗi ngày liên tiếp tạo cảm giác không muốn 'gãy chuỗi', giúp duy trì học đều đặn mỗi ngày.", h:"Thanh <b>🔥 streak</b> trên đầu trang tự tăng khi bạn học mỗi ngày — chỉ cần 10 phút/ngày là đủ giữ chuỗi."},
    {i:"✅", n:"Immediate Feedback (Phản hồi tức thì)", d:"Phản hồi ngay sau mỗi câu trả lời giúp sửa hiểu nhầm tại chỗ, trước khi lỗi trở thành thói quen.", h:"Luyện tập hiện <b>đáp án + lời giải</b> tức thì sau mỗi câu; đề thi thử có phần review chi tiết sau khi nộp."}
  ];
  app.innerHTML = `
  <div class="sec-head"><h2>🧠 8 phương pháp học tập hiệu quả đang áp dụng</h2></div>
  <section class="hero" style="min-height:0;margin-top:6px">
    <div class="hero-copy" style="max-width:100%;padding:24px 28px">
      <span class="hero-eyebrow">✨ Học đúng cách, nhớ lâu gấp 3 lần</span>
      <h1 style="font-size:clamp(1.35rem,3vw,1.9rem)">Không học nhiều — học <mark>đúng phương pháp</mark></h1>
    </div>
  </section>
  <div style="text-align:center;margin:0 auto 26px">
    <img src="img/methods.png" class="framed" style="width:min(430px,88%)" alt="Sách mở nảy mầm bóng đèn" loading="lazy">
    <p class="muted" style="font-size:.9rem;margin-top:10px">Website không chỉ có nội dung — cách bạn học mới quyết định kết quả. Mỗi tính năng dưới đây dựa trên một nguyên lý khoa học về trí nhớ và học tập.</p>
  </div>
  <div class="grid c2">
    ${methods.map(m=>`<div class="card method-card">
      <div class="m-icon">${m.i}</div>
      <div><h3>${m.n}</h3><p>${m.d}</p><div class="m-how"><b>Trong website:</b> ${m.h}</div></div>
    </div>`).join("")}
  </div>
  <div class="card" style="margin-top:20px">
    <h3 style="margin-bottom:8px">🗓️ Lộ trình gợi ý cho 1 buổi học (30 phút)</h3>
    <div class="table-wrap"><table>
      <tr><th>Thời gian</th><th>Hoạt động</th><th>Phương pháp</th></tr>
      <tr><td>0–5'</td><td>Ôn flashcards đến hạn</td><td>Spaced Repetition</td></tr>
      <tr><td>5–15'</td><td>Đọc 1 bài học mới + tự kiểm tra cuối bài</td><td>Active Recall · Feynman</td></tr>
      <tr><td>15–25'</td><td>Luyện 10 câu (xen kẽ chủ đề)</td><td>Interleaving</td></tr>
      <tr><td>25–30'</td><td>Xem lại Sổ lỗi sai vừa phát sinh</td><td>Mistake-driven</td></tr>
    </table></div>
  </div>`;
}

/* ---------- Lessons list ---------- */
function renderLessons(){
  app.innerHTML = `
  <div class="sec-head"><h2>📖 Kho bài học ngữ pháp THPT</h2></div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px" id="lesson-filters">
    <button class="chip active" data-grade="all">Tất cả</button>
    <button class="chip" data-grade="10">Lớp 10</button>
    <button class="chip" data-grade="11">Lớp 11</button>
    <button class="chip" data-grade="12">Lớp 12</button>
    <input id="lesson-search" placeholder="🔍 Tìm chủ đề..." style="flex:1;min-width:160px;border:1px solid var(--border);border-radius:99px;padding:6px 16px;font-family:var(--font);background:var(--surface);color:var(--text);font-size:.88rem">
  </div>
  <div class="grid c3" id="lesson-grid"></div>`;

  function draw(grade, kw){
    const list = LESSONS.filter(l=>(grade==="all"||l.grade===+grade) && (!kw || (l.title+l.summary).toLowerCase().includes(kw)));
    $("#lesson-grid").innerHTML = list.length ? list.map(l=>`
      <a class="card lesson-card" href="#/lessons/${l.id}">
        ${state.learned[l.id]?'<span class="badge done lc-learned">✓ Đã học</span>':""}
        <div class="lc-top">
          <div class="lc-icon">${topicIcon(l.id)}</div>
          <div class="lc-meta"><span class="badge ${LEVEL_CLS[l.level]}">${l.level}</span><span class="badge grade">Lớp ${l.grade}</span></div>
        </div>
        <h3>${esc(l.title)}</h3>
        <p>${esc(l.summary)}</p>
        <div class="pb-track"><div class="pb-fill ${topicMastery(l.id)<40?"low":(topicMastery(l.id)<70?"mid":"")}" style="width:${topicMastery(l.id)}%"></div></div>
        <div class="muted" style="font-size:.78rem;font-weight:700">Vững chắc: ${topicMastery(l.id)}%</div>
      </a>`).join("") : `<p class="muted" style="grid-column:1/-1;text-align:center;padding:30px">Không tìm thấy chủ đề phù hợp 🤔</p>`;
  }
  let grade="all", kw="";
  $("#lesson-filters").addEventListener("click", e=>{
    const b=e.target.closest(".chip"); if(!b) return;
    $$("#lesson-filters .chip").forEach(c=>c.classList.remove("active")); b.classList.add("active");
    grade=b.dataset.grade; draw(grade,kw);
  });
  $("#lesson-search").addEventListener("input", e=>{ kw=e.target.value.toLowerCase().trim(); draw(grade,kw); });
  draw("all","");
}

/* ---------- Lesson detail ---------- */
function secHTML(s){
  switch(s.t){
    case "p": return `<p style="margin:10px 0">${s.html}</p>`;
    case "h": return `<h2 class="sec-title">${s.html}</h2>`;
    case "formula": return `<div class="formula">${s.html}</div>`;
    case "ex": return `<ul class="example-list">${s.items.map(i=>`<li><span class="en">${i.en}</span><span class="vi">${i.vi}</span></li>`).join("")}</ul>`;
    case "table": return `<div class="table-wrap"><table><tr>${s.head.map(h=>`<th>${h}</th>`).join("")}</tr>${s.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table></div>`;
    case "tip": return `<div class="tipbox">💡 <b>Mẹo ghi nhớ:</b> ${s.html}</div>`;
    case "warn": return `<div class="warnbox">⚠️ ${s.html}</div>`;
    case "recall": return `<div class="recall">${s.html}</div>`;
    case "list": return `<ul style="margin:10px 0 10px 22px;display:flex;flex-direction:column;gap:6px;font-size:.95rem">${s.items.map(i=>`<li>${i}</li>`).join("")}</ul>`;
    default: return "";
  }
}
function renderLesson(id){
  const idx = LESSONS.findIndex(l=>l.id===id);
  if(idx<0){ location.hash="#/lessons"; return; }
  const l = LESSONS[idx];
  const prev = LESSONS[idx-1], next = LESSONS[idx+1];
  const qCount = QUESTIONS.filter(q=>q.topic===id).length;
  app.innerHTML = `
  <div class="breadcrumb"><a href="#/lessons">📖 Bài học</a> / ${esc(l.title)}</div>
  <div class="lesson-header">
    <div class="lc-icon">${topicIcon(l.id)}</div>
    <h1>${esc(l.title)}</h1>
    <p>${esc(l.summary)}</p>
    <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">
      <span class="badge" style="background:rgba(255,255,255,.22);color:#fff">${l.level}</span>
      <span class="badge" style="background:rgba(255,255,255,.22);color:#fff">Lớp ${l.grade}</span>
      <span class="badge" style="background:rgba(255,255,255,.22);color:#fff">${qCount} câu luyện tập</span>
    </div>
    <img class="lh-mascot" src="img/mascot-wave.png" alt="" aria-hidden="true">
  </div>
  <div class="card">
    ${l.sections.map(secHTML).join("")}
  </div>
  <div class="card" style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;align-items:center;justify-content:space-between">
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn ${state.learned[l.id]?"ghost":"success"}" id="btn-learned">${state.learned[l.id]?"✓ Đã đánh dấu học":"✅ Đánh dấu đã học"}</button>
      <a class="btn primary" href="#/practice/${l.id}">✏️ Luyện tập ${qCount} câu</a>
      <a class="btn ghost" href="#/flashcards">🃏 Ôn thẻ chủ đề này</a>
    </div>
  </div>
  <div class="lesson-nav">
    ${prev?`<a class="btn ghost" href="#/lessons/${prev.id}">← ${esc(prev.title)}</a>`:"<span></span>"}
    ${next?`<a class="btn ghost" href="#/lessons/${next.id}">${esc(next.title)} →</a>`:""}
  </div>`;
  $("#btn-learned").addEventListener("click", ()=>{
    if(state.learned[l.id]) { delete state.learned[l.id]; toast("Đã bỏ đánh dấu.",""); }
    else { state.learned[l.id]=Date.now(); markStudy(); toast("Tuyệt vời! Đã học xong: "+l.title+" 🎉","success"); }
    save(); renderLesson(id);
  });
}

/* ---------- Flashcards (Leitner spaced repetition) ---------- */
const BOX_DAYS = [1,2,4,8,16,30];
let fcSession = null, fcIdx = 0, fcFlipped = false;
function cardState(id){ return state.cards[id]; }
function dueCardsList(){ const now=Date.now(); return FLASHCARDS.filter(f=>{const c=state.cards[f.id]; return !c||c.due<=now;}); }

function renderFlashcards(){
  const due = dueCardsList();
  const learned = FLASHCARDS.filter(f=>cardState(f.id)?.box>=5).length;
  const learning = FLASHCARDS.filter(f=>{const c=cardState(f.id); return c && c.box<5 && c.due>Date.now();}).length;
  app.innerHTML = `
  <div class="sec-head"><h2>🃏 Flashcards — Ôn tập ngắt quãng</h2></div>
  <div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap;margin-bottom:8px">
    <img src="img/mascot-read.png" class="framed" style="width:96px" alt="Grama đang đọc sách" loading="lazy">
    <p class="muted" style="flex:1;min-width:220px;font-size:.92rem;margin:0">Mỗi ngày 5 phút — hệ thống Leitner nhắc bạn ôn <b>đúng lúc sắp quên</b>. Hãy tự nhớ đáp án trong đầu trước khi lật thẻ nhé! 👀</p>
  </div>
  <div class="fc-stats">
    <div class="card stat-card" style="flex:1"><span class="num">${due.length}</span><span class="lbl">Thẻ đến hạn hôm nay</span></div>
    <div class="card stat-card" style="flex:1"><span class="num">${FLASHCARDS.length}</span><span class="lbl">Tổng số thẻ</span></div>
    <div class="card stat-card" style="flex:1"><span class="num">${learning}</span><span class="lbl">Đang học</span></div>
    <div class="card stat-card" style="flex:1"><span class="num">${learned}</span><span class="lbl">Đã thuộc (hộp ≥5)</span></div>
  </div>
  <div id="fc-zone"></div>
  <div class="card" style="margin-top:18px">
    <h3 style="margin-bottom:8px">🔁 Cách hệ thống hoạt động (Leitner System)</h3>
    <p class="muted" style="font-size:.9rem">Trả lời đúng → thẻ nhảy lên hộp cao hơn và giãn cách ôn xa hơn (1→2→4→8→16→30 ngày). Trả lời <i>Quên</i> → thẻ r về hộp 1, ngày mai gặp lại. Đánh giá trung thực để thẻ khó xuất hiện đúng lúc bạn cần ôn!</p>
    <div class="table-wrap"><table>
      <tr><th>Đánh giá</th><th>Tác động</th><th>Ngày ôn tiếp theo</th></tr>
      <tr><td>❌ Quên</td><td>Rơi về hộp 1</td><td>1 ngày</td></tr>
      <tr><td>😅 Khó</td><td>Ở nguyên hộp</td><td>Theo hộp hiện tại</td></tr>
      <tr><td>🙂 Được</td><td>Lên 1 hộp</td><td>Giãn cách x2</td></tr>
      <tr><td>😎 Dễ</td><td>Lên 2 hộp</td><td>Giãn cách x4</td></tr>
    </table></div>
  </div>`;
  if(!due.length){
    $("#fc-zone").innerHTML = `<div class="fc-empty card"><img src="img/mascot-wave.png" alt="Grama"><b>Không còn thẻ đến hạn!</b><p style="margin-top:6px">Bạn đã ôn hết hôm nay. Thẻ tiếp theo sẽ mở khóa theo lịch spaced repetition.</p></div>`;
    return;
  }
  startFcSession(due);
}
function startFcSession(due){
  fcSession = shuffle(due).slice(0,20);
  fcIdx = 0; fcFlipped = false;
  paintCard();
}
function paintCard(){
  const f = fcSession[fcIdx];
  $("#fc-zone").innerHTML = `
  <div class="quiz-meta"><span>Thẻ ${fcIdx+1}/${fcSession.length}</span><span>${esc(TOPIC[f.topic]?.title||"")}</span></div>
  <div class="quiz-progress"><div class="bar" style="width:${fcIdx/fcSession.length*100}%"></div></div>
  <div class="fc-scene">
    <div class="fc-card ${fcFlipped?"flipped":""}" id="fc-card">
      <div class="fc-face fc-front">
        <span class="fc-topic">${TOPIC[f.topic]?.icon||"📘"} ${esc(TOPIC[f.topic]?.title||"")}</span>
        <span class="fc-count">${fcIdx+1}/${fcSession.length}</span>
        <div class="fc-text">${esc(f.front)}</div>
        <span class="fc-hint">👆 Chạm để lật thẻ</span>
      </div>
      <div class="fc-face fc-back">
        <div class="fc-text">${esc(f.back)}</div>
        <span class="fc-hint">Hãy tự trả lời TRƯỚC khi lật — Active Recall!</span>
      </div>
    </div>
  </div>
  ${fcFlipped?`<div class="fc-ratings">
    <button class="fc-rating again" data-r="0">❌ Quên<small>hộp 1 · mai gặp lại</small></button>
    <button class="fc-rating hard" data-r="1">😅 Khó<small>ở nguyên hộp</small></button>
    <button class="fc-rating good" data-r="2">🙂 Được<small>lên 1 hộp</small></button>
    <button class="fc-rating easy" data-r="3">😎 Dễ<small>lên 2 hộp</small></button>
  </div>`:`<p class="muted" style="text-align:center;margin-top:12px">Thu hồi kiến thức trong đầu rồi mới lật thẻ nhé!</p>`}`;
  $("#fc-card").addEventListener("click", ()=>{ fcFlipped=true; paintCard(); });
  $$("#fc-zone .fc-rating").forEach(b=>b.addEventListener("click", e=>{
    e.stopPropagation();
    rateCard(f, +b.dataset.r);
  }));
}
function rateCard(f, r){
  const c = cardState(f.id) || {box:0, due:0};
  let box = c.box||1;
  if(r===0) box=1;
  else if(r===1) box=Math.max(1,box);
  else if(r===2) box=Math.min(6,box+1);
  else box=Math.min(6,box+2);
  state.cards[f.id] = {box, due: Date.now()+BOX_DAYS[box-1]*DAY};
  markStudy(); save();
  fcIdx++;
  if(fcIdx>=fcSession.length){
    $("#fc-zone").innerHTML = `<div class="fc-empty card"><img src="img/mascot-trophy.png" alt="Grama nâng cúp"><b>Hoàn thành ${fcSession.length} thẻ!</b><p style="margin-top:6px">Kiến thức đang được 'nặn' vào trí nhớ dài hạn. Quay lại mỗi ngày để giữ chuỗi 🔥</p>
    <a class="btn primary small" style="margin-top:14px" href="#/lessons">Tiếp tục học bài mới</a></div>`;
    renderFlashcards._refreshStats && renderFlashcards();
    return;
  }
  fcFlipped=false; paintCard();
}

/* ---------- Practice ---------- */
let pq = null; // practice session
function renderPractice(presetTopic){
  if(pq && pq.running){ paintPractice(); return; }
  const topics = [["mixed","🔀 Đề tổng hợp (xen kẽ)"], ...LESSONS.map(l=>[l.id, l.icon+" "+l.title])];
  app.innerHTML = `
  <div class="sec-head"><h2>✏️ Luyện tập — Active Recall</h2></div>
  <div class="card" style="max-width:640px;margin:0 auto">
    <div style="text-align:center;margin-bottom:14px"><img src="img/desk.png" class="framed" style="width:min(320px,80%)" alt="Góc bàn học ấm cúng" loading="lazy"></div>
    <p class="muted" style="font-size:.9rem;margin-bottom:14px">Chọn chủ đề và số câu. Mỗi câu trả lời xong sẽ hiện <b>đáp án + lời giải</b> ngay lập tức. Câu sai được tự động lưu vào Sổ lỗi sai.</p>
    <label style="font-weight:700;font-size:.9rem">Chủ đề</label>
    <select id="pq-topic" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--surface);color:var(--text);font-family:var(--font);margin:6px 0 14px;font-size:.95rem">
      ${topics.map(t=>`<option value="${t[0]}" ${presetTopic===t[0]?"selected":""}>${t[1]}</option>`).join("")}
    </select>
    <label style="font-weight:700;font-size:.9rem">Số câu</label>
    <div style="display:flex;gap:8px;margin:8px 0 18px" id="pq-count">
      <button class="chip" data-c="5">5 câu</button>
      <button class="chip active" data-c="10">10 câu</button>
      <button class="chip" data-c="15">15 câu</button>
    </div>
    <button class="btn primary big" id="pq-start" style="width:100%">🚀 Bắt đầu luyện tập</button>
  </div>`;
  let count=10;
  $("#pq-count").addEventListener("click", e=>{
    const b=e.target.closest(".chip"); if(!b) return;
    $$("#pq-count .chip").forEach(c=>c.classList.remove("active")); b.classList.add("active");
    count=+b.dataset.c;
  });
  $("#pq-start").addEventListener("click", ()=>{
    const t = $("#pq-topic").value;
    const pool = t==="mixed" ? QUESTIONS : QUESTIONS.filter(q=>q.topic===t);
    if(!pool.length){ toast("Chưa có câu hỏi cho chủ đề này.","error"); return; }
    pq = {running:true, qs:shuffle(pool).slice(0,Math.min(count,pool.length)), i:0, correct:0, answered:false, wrongList:[]};
    markStudy(); paintPractice();
  });
}
function paintPractice(){
  const q = pq.qs[pq.i];
  app.innerHTML = `
  <div class="card quiz-card">
    <div class="quiz-meta"><span>Câu ${pq.i+1}/${pq.qs.length}</span><span>✅ ${pq.correct} đúng</span></div>
    <div class="quiz-progress"><div class="bar" style="width:${pq.i/pq.qs.length*100}%"></div></div>
    <div class="quiz-q en-q">${esc(q.q)}</div>
    <div id="pq-opts">
      ${q.opts.map((o,i)=>`<button class="opt" data-i="${i}"><span class="opt-key">${OPT_KEYS[i]}</span><span>${esc(o)}</span></button>`).join("")}
    </div>
    <div id="pq-feedback"></div>
    <div class="quiz-actions">
      <span></span>
      <button class="btn primary hidden" id="pq-next">${pq.i===pq.qs.length-1?"🏁 Xem kết quả":"Câu tiếp theo →"}</button>
    </div>
  </div>`;
  $$("#pq-opts .opt").forEach(b=>b.addEventListener("click", ()=>answerPractice(q, +b.dataset.i)));
}
function answerPractice(q, pick){
  if(pq.answered) return;
  pq.answered = true;
  const ok = pick===q.ans;
  if(ok) pq.correct++; else pq.wrongList.push(q);
  recordAnswer(q, ok);
  $$("#pq-opts .opt").forEach(b=>{
    b.disabled = true;
    const i=+b.dataset.i;
    if(i===q.ans) b.classList.add("correct");
    else if(i===pick) b.classList.add("wrong");
  });
  $("#pq-feedback").innerHTML = `
    <div class="explain-box ${ok?"good":"bad"}">
      <b>${ok?"✅ Chính xác!":"❌ Chưa đúng — đáp án là "+OPT_KEYS[q.ans]+". "+esc(q.opts[q.ans])}</b><br>${esc(q.exp)}
    </div>`;
  $("#pq-next").classList.remove("hidden");
  $("#pq-next").addEventListener("click", ()=>{
    if(pq.i===pq.qs.length-1) return practiceResult();
    pq.i++; pq.answered=false; paintPractice();
  });
}
function scoreRing(pct, color, big, small){
  return `<div class="score-ring" style="--pct:${pct};--score-color:${color}"><div class="inner"><b>${big}</b><span>${small}</span></div></div>`;
}
function practiceResult(){
  pq.running=false;
  const pct = Math.round(pq.correct/pq.qs.length*100);
  const color = pct>=80?"var(--success)":(pct>=50?"var(--warning)":"var(--danger)");
  const msg = pct===100?"Hoàn hảo! 🌟":(pct>=80?"Rất tốt! Tiếp tục duy trì nhé 💪":(pct>=50?"Khá ổn — xem lại mấy câu sai nhé 📕":"Đừng nản! Quay lại bài học rồi luyện lại 💪"));
  app.innerHTML = `
  <div class="card result-hero" style="max-width:640px;margin:20px auto">
    <h2 style="margin-bottom:16px">Kết quả luyện tập</h2>
    ${scoreRing(pct, color, pq.correct+"/"+pq.qs.length, "câu đúng")}
    <div class="result-msg">${msg}</div>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button class="btn primary" id="pr-retry">🔄 Luyện lại</button>
      <a class="btn ghost" href="#/practice">Chọn chủ đề khác</a>
      ${pq.wrongList.length?`<a class="btn danger-soft" href="#/mistakes">📕 Xem sổ lỗi sai</a>`:""}
    </div>
  </div>
  ${pq.wrongList.length?`<div class="sec-head"><h2>📕 Các câu cần xem lại</h2></div>
  <div style="max-width:640px;margin:0 auto">${pq.wrongList.map(q=>reviewHTML(q,null)).join("")}</div>`:""}`;
  $("#pr-retry").addEventListener("click", ()=>{ pq=null; renderPractice(); });
}
function reviewHTML(q, picked){
  const ok = picked===q.ans;
  return `<div class="review-item">
    <div class="rv-q">${esc(q.q)}</div>
    <div class="rv-a">
      ${picked!==null?`<span class="${ok?"ok":"no"}">Bạn chọn: ${OPT_KEYS[picked]}. ${esc(q.opts[picked])} ${ok?"✓":"✗"}</span>`:""}
      <span class="${ok?"ok":"no"}">Đáp án: ${OPT_KEYS[q.ans]}. ${esc(q.opts[q.ans])}</span>
      <span class="muted">💡 ${esc(q.exp)}</span>
    </div>
  </div>`;
}

/* ---------- Mock test ---------- */
let mt = null;
function renderTest(){
  if(mt && mt.running){ paintTest(); return; }
  app.innerHTML = `
  <div class="sec-head"><h2>📝 Đề thi thử tổng hợp</h2></div>
  <div class="card" style="max-width:640px;margin:0 auto;text-align:center">
    <div style="font-size:3rem;margin-bottom:8px">📝</div>
    <h3>20 câu trắc nghiệm · 20 phút</h3>
    <p class="muted" style="margin:10px 0 18px;font-size:.92rem">Đề được trộn ngẫu nhiên từ 16 chủ đề theo cấu trúc đề thi THPT (khoảng 60% cơ bản, 40% nâng cao). Không hiện đáp án ngay — nộp bài mới xem review chi tiết.</p>
    <button class="btn primary big" id="mt-start">⏱️ Vào đề (bấm giờ)</button>
  </div>`;
  $("#mt-start").addEventListener("click", startTest);
}
function startTest(){
  mt = {running:true, qs:shuffle(QUESTIONS).slice(0,20), i:0, answers:Array(20).fill(null), remain:20*60};
  markStudy();
  paintTest();
  testTimer = setInterval(()=>{
    mt.remain--;
    const el = $("#mt-timer");
    if(el){ el.textContent = fmtTime(mt.remain); if(mt.remain<=60) el.classList.add("warn"); }
    if(mt.remain<=0){ toast("⏰ Hết giờ! Tự động nộp bài.","error"); submitTest(); }
  }, 1000);
}
function fmtTime(s){ return Math.floor(s/60)+":"+String(s%60).padStart(2,"0"); }
function paintTest(){
  const q = mt.qs[mt.i];
  app.innerHTML = `
  <div style="display:flex;justify-content:space-between;align-items:center;margin:18px 0 12px;flex-wrap:wrap;gap:10px">
    <span class="timer-pill" id="mt-timer">⏱️ ${fmtTime(mt.remain)}</span>
    <b>Câu ${mt.i+1}/${mt.qs.length}</b>
    <button class="btn danger small" id="mt-submit">Nộp bài</button>
  </div>
  <div class="card quiz-card">
    <div class="quiz-q en-q">${esc(q.q)}</div>
    <div id="mt-opts">
      ${q.opts.map((o,i)=>`<button class="opt ${mt.answers[mt.i]===i?"correct":""}" data-i="${i}"><span class="opt-key">${OPT_KEYS[i]}</span><span>${esc(o)}</span></button>`).join("")}
    </div>
    <div class="quiz-actions">
      <button class="btn ghost" id="mt-prev" ${mt.i===0?"disabled":""}>← Trước</button>
      <button class="btn ghost" id="mt-next" ${mt.i===mt.qs.length-1?"disabled":""}>Sau →</button>
    </div>
  </div>
  <div class="card quiz-card" style="margin-top:14px">
    <b style="font-size:.9rem">🗺️ Bảng câu hỏi (màu = đã trả lời)</b>
    <div class="qnav-grid">${mt.qs.map((_,i)=>`<button data-g="${i}" class="${i===mt.i?"current":(mt.answers[i]!==null?"answered":"")}">${i+1}</button>`).join("")}</div>
  </div>`;
  $$("#mt-opts .opt").forEach(b=>b.addEventListener("click", ()=>{ mt.answers[mt.i]=+b.dataset.i; paintTest(); }));
  $("#mt-prev").addEventListener("click", ()=>{ if(mt.i>0){mt.i--; paintTest();} });
  $("#mt-next").addEventListener("click", ()=>{ if(mt.i<mt.qs.length-1){mt.i++; paintTest();} });
  $("#mt-submit").addEventListener("click", ()=>{ if(confirm("Nộp bài ngay? Bạn còn "+fmtTime(mt.remain)+".")) submitTest(); });
  $$(".qnav-grid button").forEach(b=>b.addEventListener("click", ()=>{ mt.i=+b.dataset.g; paintTest(); }));
}
function submitTest(){
  if(testTimer){ clearInterval(testTimer); testTimer=null; }
  mt.running=false;
  let score=0;
  mt.qs.forEach((q,i)=>{ const ok = mt.answers[i]===q.ans; if(ok) score++; recordAnswer(q, ok); });
  state.tests.unshift({date:Date.now(), score, total:mt.qs.length}); save();
  markStudy();
  const pct = Math.round(score/mt.qs.length*100);
  const color = pct>=80?"var(--success)":(pct>=50?"var(--warning)":"var(--danger)");
  const msg = pct>=80?"Xuất sắc! Bạn sẵn sàng cho bài thi 🎓":(pct>=50?"Tốt — soát lại các câu sai để chốt kiến thức 📕":"Cần ôn thêm. Về phần Bài học rồi quay lại nhé 💪");
  app.innerHTML = `
  <div class="card result-hero" style="max-width:640px;margin:20px auto">
    <img src="img/mascot-trophy.png" alt="Grama chúc mừng" style="width:170px">
    <h2 style="margin-bottom:16px">Kết quả đề thi thử</h2>
    ${scoreRing(pct, color, score+"/"+mt.qs.length, "câu đúng")}
    <div class="result-msg">${msg}</div>
    <p class="muted" style="margin-bottom:16px;font-size:.9rem">Điểm quy đổi thang 10: <b>${(score/mt.qs.length*10).toFixed(1)}</b> · Đạt yêu cầu (≥5.0): ${pct>=50?"✅":"❌"}</p>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button class="btn primary" id="mt-again">🔄 Làm đề mới</button>
      <a class="btn ghost" href="#/progress">📊 Xem tiến độ</a>
    </div>
  </div>
  <div class="sec-head"><h2>🔍 Review chi tiết</h2></div>
  <div style="max-width:640px;margin:0 auto">
    ${mt.qs.map((q,i)=>reviewHTML(q, mt.answers[i])).join("")}
  </div>`;
  $("#mt-again").addEventListener("click", startTest);
}

/* ---------- Mistakes notebook ---------- */
function renderMistakes(){
  const ids = Object.keys(state.mistakes);
  const qs = ids.map(id=>QUESTIONS.find(q=>q.id===id)).filter(Boolean);
  app.innerHTML = `
  <div class="sec-head"><h2>📕 Sổ lỗi sai</h2></div>
  ${qs.length?`
  <div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:16px">
    <p class="muted" style="font-size:.9rem">Bạn có <b style="color:var(--danger)">${qs.length} câu</b> từng trả lời sai. Trả lời đúng ở bất kỳ buổi luyện nào sẽ tự động xóa khỏi sổ.</p>
    <button class="btn primary small" id="mk-practice">✏️ Luyện lại các câu sai (${qs.length})</button>
  </div>
  ${qs.map(q=>`<div class="card mistake-item" style="margin-bottom:12px">
    <div class="m-head"><span class="badge grade">${TOPIC[q.topic]?.icon||""} ${esc(TOPIC[q.topic]?.title||"")}</span><span class="muted" style="font-size:.8rem">Sai ${state.mistakes[q.id].n} lần</span></div>
    <div class="rv-q" style="font-weight:700">${esc(q.q)}</div>
    <div><span class="no">Đáp án đúng: ${OPT_KEYS[q.ans]}. ${esc(q.opts[q.ans])}</span></div>
    <div class="explain-box" style="margin:6px 0 0">💡 ${esc(q.exp)}</div>
  </div>`).join("")}`
  :`<div class="card empty-state"><span class="big">🌈</span><b>Sổ lỗi sai đang trống!</b><p style="margin-top:8px">Hãy vào luyện tập — câu nào sai sẽ tự động xuất hiện ở đây để bạn sửa đến khi thuộc.</p><a class="btn primary small" style="margin-top:14px" href="#/practice">Bắt đầu luyện tập</a></div>`}`;
  if(qs.length) $("#mk-practice").addEventListener("click", ()=>{
    pq = {running:true, qs:shuffle(qs), i:0, correct:0, answered:false, wrongList:[]};
    markStudy(); paintPractice();
  });
}

/* ---------- Progress ---------- */
function renderProgress(){
  const overall = Math.round(LESSONS.reduce((s,l)=>s+topicMastery(l.id),0)/LESSONS.length);
  const color = overall>=70?"var(--success)":(overall>=40?"var(--warning)":"var(--danger)");
  app.innerHTML = `
  <div class="sec-head"><h2>📊 Tiến độ học tập</h2></div>
  <div class="grid c4" style="margin-bottom:18px">
    <div class="card stat-card"><span class="num">${Object.keys(state.learned).length}/16</span><span class="lbl">Bài đã đánh dấu học</span></div>
    <div class="card stat-card"><span class="num">${state.total.c}/${state.total.t}</span><span class="lbl">Câu đúng / tổng câu</span></div>
    <div class="card stat-card"><span class="num">${accuracy()}%</span><span class="lbl">Độ chính xác</span></div>
    <div class="card stat-card"><span class="num">${state.streak.n} 🔥</span><span class="lbl">Chuỗi ngày học</span></div>
  </div>
  <div class="card result-hero" style="max-width:420px;margin:0 auto 20px">
    ${scoreRing(overall, color, overall+"%", "độ vững tổng thể")}
    <p class="muted" style="font-size:.85rem">Tính từ 30% đánh dấu bài học + 70% độ chính xác luyện tập theo từng chủ đề.</p>
  </div>
  <div class="card" style="margin-bottom:18px">
    <h3 style="margin-bottom:14px">📈 Độ vững theo từng chủ đề</h3>
    ${LESSONS.map(l=>{const m=topicMastery(l.id);const cls=m<40?"low":(m<70?"mid":"");
      return `<div class="pb-row"><div class="pb-label"><span>${l.icon} ${esc(l.title)} <span class="badge grade">Lớp ${l.grade}</span></span><span class="muted">${m}%</span></div>
      <div class="pb-track"><div class="pb-fill ${cls}" style="width:${m}%"></div></div></div>`;}).join("")}
  </div>
  <div class="card" style="margin-bottom:18px">
    <h3 style="margin-bottom:12px">📝 Lịch sử đề thi thử</h3>
    ${state.tests.length?`<div class="table-wrap"><table><tr><th>Thời gian</th><th>Kết quả</th><th>Điểm /10</th></tr>
      ${state.tests.slice(0,10).map(t=>`<tr><td>${new Date(t.date).toLocaleString("vi-VN")}</td><td>${t.score}/${t.total} (${Math.round(t.score/t.total*100)}%)</td><td><b>${(t.score/t.total*10).toFixed(1)}</b></td></tr>`).join("")}
    </table></div>`:`<p class="muted" style="font-size:.9rem">Chưa làm đề nào. <a href="#/test">Thử ngay →</a></p>`}
  </div>
  <div class="card" style="text-align:center">
    <h3 style="margin-bottom:8px">♻️ Xóa toàn bộ dữ liệu</h3>
    <p class="muted" style="font-size:.88rem;margin-bottom:12px">Đặt lại tiến độ, flashcards, sổ lỗi sai về trạng thái ban đầu.</p>
    <button class="btn danger small" id="reset-btn">Xóa dữ liệu học tập</button>
  </div>`;
  $("#reset-btn").addEventListener("click", ()=>{
    if(confirm("Chắc chắn xóa TOÀN BỘ tiến độ học tập? Không thể hoàn tác.")){
      state = defaultState(); save(); paintStreak(); paintMistakeBadge(); applyTheme(); renderProgress(); toast("Đã xóa toàn bộ dữ liệu.","success");
    }
  });
}

/* ---------- Pomodoro ---------- */
(function initPomodoro(){
  let pMode=25, pLeft=25*60, pInt=null, running=false;
  const timeEl=$("#pomo-time"), startBtn=$("#pomo-start");
  function paint(){ const m=Math.floor(pLeft/60), s=pLeft%60; timeEl.textContent=m+":"+String(s).padStart(2,"0"); }
  function setMode(min){ stop(); pMode=min; pLeft=min*60; paint(); $$(".pomo-modes .chip").forEach(c=>c.classList.toggle("active", +c.dataset.pmode===min)); }
  function tick(){ if(pLeft>0){ pLeft--; paint(); } else { stop(); toast(pMode===25?"🍅 Hết phiên tập trung! Nghỉ 5 phút nhé.":"⏰ Hết giờ nghỉ! Quay lại học thôi.","success"); } }
  function stop(){ clearInterval(pInt); pInt=null; running=false; startBtn.textContent="▶ Bắt đầu"; }
  startBtn.addEventListener("click", ()=>{
    if(running){ stop(); return; }
    running=true; startBtn.textContent="⏸ Tạm dừng";
    pInt=setInterval(tick,1000);
  });
  $("#pomo-reset").addEventListener("click", ()=>setMode(pMode));
  $("#pomo-fab").addEventListener("click", ()=>$("#pomo-panel").classList.toggle("hidden"));
  $("#pomo-close").addEventListener("click", ()=>$("#pomo-panel").classList.add("hidden"));
  $$(".pomo-modes .chip").forEach(c=>c.addEventListener("click", ()=>setMode(+c.dataset.pmode)));
})();

/* ---------- Init ---------- */
applyTheme(); paintStreak(); paintMistakeBadge(); route();
