"use strict";
document.documentElement.classList.add("js");
/* ================================================================
   INS2112 · HTML ORAL EXAM — engine (HTML/CSS/JS thuần, 1 file, song ngữ VI/EN)
   ================================================================ */

/* ---------- lưu trữ an toàn (try/catch) ---------- */
const store={
  get(k){try{return localStorage.getItem("ins2112."+k);}catch(e){return null;}},
  set(k,v){try{localStorage.setItem("ins2112."+k,v);}catch(e){}},
  getJSON(k){try{return JSON.parse(localStorage.getItem("ins2112."+k));}catch(e){return null;}},
  setJSON(k,v){try{localStorage.setItem("ins2112."+k,JSON.stringify(v));}catch(e){}}
};
const state={
  lang:store.get("lang")||"vi",
  theme:store.get("theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),
  progress:store.getJSON("progress")||{},
  view:{name:"overview",qid:null},
  filters:{diff:"all",status:"all"},
  randomCount:0,lastRandom:null
};
let lec=null, toastTimer=null, timerInt=null;
let revealObs=null, spyObs=null;

/* ---------- helpers ---------- */
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
/* L: lấy chuỗi theo ngôn ngữ hiện tại từ object {vi,en}; T: cặp chuỗi UI */
const L=o=>o?(o[state.lang]??o.vi??o.en??""):"";
const T=(vi,en)=>state.lang==="vi"?vi:en;
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const qById=id=>DATA.find(q=>q.id===id);
const diffLabel=d=>d==="easy"?T("Dễ","Easy"):d==="medium"?T("Trung bình","Medium"):T("Khó","Hard");
const stLabel=st=>st==="known"?T("✓ Đã hiểu","✓ Mastered"):st==="review"?T("↻ Cần ôn lại","↻ Review"):T("Chưa học","Not started");
function toast(msg){
  const el=$("#toast");el.textContent=msg;el.classList.add("show");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2300);
}

/* ---------- syntax highlight (HTML + CSS, tự viết, không thư viện) ---------- */
function hlTag(s){
  const m=s.match(/^<(\/?)([a-zA-Z][\w-]*)/);
  if(!m)return esc(s);
  let out=`<span class="tk-punc">&lt;${esc(m[1])}</span><span class="tk-tag">${esc(m[2])}</span>`;
  let rest=s.slice(m[0].length);
  while(rest.length){
    let mm;
    if(mm=rest.match(/^\s+/)){out+=esc(mm[0]);rest=rest.slice(mm[0].length);}
    else if(mm=rest.match(/^[\w-]+/)){out+=`<span class="tk-attr">${esc(mm[0])}</span>`;rest=rest.slice(mm[0].length);}
    else if(mm=rest.match(/^=\s*("[^"]*"|'[^']*'|[^\s>]+)?/)){
      const eq=mm[0],val=mm[1];
      out+='<span class="tk-punc">=</span>';
      if(val!==undefined){out+=esc(eq.slice(1,eq.length-val.length))+`<span class="tk-str">${esc(val)}</span>`;}
      rest=rest.slice(eq.length);
    }
    else if(mm=rest.match(/^[\/?>]/)){out+=`<span class="tk-punc">${esc(mm[0])}</span>`;rest=rest.slice(1);}
    else{out+=esc(rest[0]);rest=rest.slice(1);}
  }
  return out;
}
function hlCSS(s){
  let e=esc(s);
  e=e.replace(/(\/\*[\s\S]*?\*\/)/g,'<span class="tk-cm">$1</span>');
  e=e.replace(/^([^\n{}]+)(?=\{)/gm,'<span class="tk-sel">$1</span>');
  e=e.replace(/([\w-]+)(\s*:)/g,'<span class="tk-prop">$1</span>$2');
  e=e.replace(/(#[0-9a-fA-F]{3,8}\b|\b\d+(?:\.\d+)?(?:px|rem|em|%|s|vh|vw)?\b)/g,'<span class="tk-num">$1</span>');
  e=e.replace(/([{};,])/g,'<span class="tk-punc">$1</span>');
  return e;
}
function highlight(src){
  if(!src.includes("<"))return hlCSS(src);
  let out="",i=0;
  while(i<src.length){
    const rest=src.slice(i);let m;
    if(m=rest.match(/^<!--[\s\S]*?-->/)){out+=`<span class="tk-cm">${esc(m[0])}</span>`;i+=m[0].length;continue;}
    if(m=rest.match(/^<!DOCTYPE[^>]*>/i)){out+=`<span class="tk-dt">${esc(m[0])}</span>`;i+=m[0].length;continue;}
    if(m=rest.match(/^<style[\s\S]*?<\/style>/i)){
      const open=m[0].match(/^<style[^>]*>/i)[0],close="</style>";
      const body=m[0].slice(open.length,m[0].length-close.length);
      out+=hlTag(open)+hlCSS(body)+hlTag(close);i+=m[0].length;continue;
    }
    if(m=rest.match(/^<\/?[a-zA-Z][^>]*>?/)){out+=hlTag(m[0]);i+=m[0].length;continue;}
    const nxt=rest.indexOf("<",1);
    const chunk=nxt===-1?rest:rest.slice(0,nxt);
    out+=esc(chunk);i+=chunk.length;
  }
  return out;
}

/* ---------- preview iframe (srcdoc) ---------- */
const PREVIEW_CSS=`
  body{font-family:"Be Vietnam Pro","Segoe UI",Arial,sans-serif;padding:18px;color:#122a33;line-height:1.6;font-size:15px}
  img{max-width:100%;height:auto}
  a{color:#0f8b8d}
  table{border-collapse:collapse;width:100%}
  th,td{border:1px solid #c5bfae;padding:7px 10px;text-align:left}
  th{background:#eae7dc}
  caption{font-weight:700;margin-bottom:6px}
  input,select,textarea,button{font:inherit;padding:6px 9px;border:1px solid #c5bfae;border-radius:7px;margin:2px 0}
  button{background:#0f8b8d;color:#fff;border:0;cursor:pointer;padding:8px 16px}
  label{font-weight:600}
  fieldset{border:1px solid #c5bfae;border-radius:8px;margin:8px 0}
  h1{color:#0b3c49}h2{color:#0f8b8d}
  .member{padding:6px 10px;border:1px solid #ddd8ca;border-radius:8px;margin:4px 0}
`;
function applyProjectAssets(code){
  const aliases={
    "acoustic-night.jpg":"images/night_concert.jpg",
    "band.jpg":"images/member.jpg",
    "club.jpg":"images/member.jpg",
    "concert.jpg":"images/night_concert.jpg",
    "divider.png":"images/bass.jpg",
    "guitar.jpg":"images/guitar.jpg",
    "note-divider.png":"images/bass.jpg",
    "poster.jpg":"images/poster.jpg"
  };
  return code
    .replace(/<link\b[^>]*href=["']css\/style\.css["'][^>]*>/i,`<style>${PROJECT.css}</style>`)
    .replace(/(\bsrc=["'])([^"']+)(["'])/gi,(match,before,src,after)=>{
      const path=src.replace(/\\/g,"/");
      if(REAL_IMAGES[path])return before+REAL_IMAGES[path]+after;
      if(PROJECT.images[path])return before+PROJECT.images[path]+after;
      if(!/^(?:\.\/)?img\//i.test(path))return match;
      const filename=path.split("/").pop().toLowerCase();
      const asset=aliases[filename];
      const image=REAL_IMAGES[asset]||PROJECT.images[asset];
      return image?before+image+after:match;
    });
}
function previewDoc(code){
  const lg=state.lang;
  const prepared=applyProjectAssets(code);
  if(/<html[\s>]/i.test(prepared)){
    if(/<head[^>]*>/i.test(prepared))return prepared.replace(/<head[^>]*>/i,m=>m+'<meta charset="utf-8"><style>'+PREVIEW_CSS+'</style>');
    return prepared.replace(/<html[^>]*>/i,m=>m+'<head><meta charset="utf-8"><style>'+PREVIEW_CSS+'</style></head>');
  }
  return '<!DOCTYPE html><html lang="'+lg+'"><head><meta charset="utf-8"><style>'+PREVIEW_CSS+'</style></head><body>'+prepared+'</body></html>';
}
function projectPreviewDoc(page){
  return applyProjectAssets(page.html);
}

/* ---------- theme / ngôn ngữ / header / drawer ---------- */
function applyTheme(){
  document.documentElement.dataset.theme=state.theme;
  $("#theme-ico").textContent=state.theme==="dark"?"☀️":"🌙";
}
function applyLang(){
  document.documentElement.lang=state.lang;
  document.title=T("INS2112 · Ôn vấn đáp HTML","INS2112 · HTML Oral Exam Prep");
  $("#skip-link").textContent=T("Đến nội dung chính","Skip to main content");
  $("#brand-sub").textContent=T("Ôn vấn đáp HTML","HTML Oral Exam Prep");
  $(".brand").setAttribute("aria-label",T("INS2112 — trang chủ","INS2112 — home"));
  $('[data-nav="overview"]').textContent=T("Tổng quan","Overview");
  $('[data-nav="random"]').textContent=T("🎙 Vấn đáp ngẫu nhiên","🎙 Random quiz");
  $('[data-nav="cheat"]').textContent=T("Cheat sheet","Cheat sheet");
  $('[data-nav="project"]').textContent=T("Ví dụ dự án","Project examples");
  $(".main-nav").setAttribute("aria-label",T("Điều hướng chính","Main navigation"));
  $("#ring-wrap").title=T("Tiến độ: số câu đã hiểu","Progress: questions mastered");
  $("#theme-btn").setAttribute("aria-label",T("Đổi giao diện sáng / tối","Toggle light / dark theme"));
  $("#drawer-btn").setAttribute("aria-label",T("Mở danh sách 10 câu hỏi","Open the 10-question list"));
  $("#drawer").setAttribute("aria-label",T("Danh sách câu hỏi","Question list"));
  $("#drawer-title").textContent=T("10 CÂU HỎI","10 QUESTIONS");
  $("#drawer-close").setAttribute("aria-label",T("Đóng danh sách","Close list"));
  $("#drawer-foot").innerHTML=T(
    "<kbd>j</kbd>/<kbd>k</kbd> bước demo · <kbd>n</kbd> ghi chú giảng viên · <kbd>Esc</kbd> đóng",
    "<kbd>j</kbd>/<kbd>k</kbd> demo step · <kbd>n</kbd> lecturer notes · <kbd>Esc</kbd> close");
  $("#foot-main").innerHTML=T(
    "<b>INS2112 — Web Authoring &amp; Web Management</b><br>International School, Vietnam National University, Hanoi<br>Learning Guide ôn vấn đáp chủ đề HTML · ví dụ trên project Music Club",
    "<b>INS2112 — Web Authoring &amp; Web Management</b><br>International School, Vietnam National University, Hanoi<br>HTML oral-exam learning guide · examples on the Music Club project");
  $("#foot-note").textContent=T(
    "Học liệu ôn tập cá nhân, biên soạn từ nội dung các buổi học công khai (Buổi 1–15) của khóa học. 10 câu hỏi là gợi ý ôn tập, không phải đề thi hay đáp án chính thức. Thuật ngữ chuyên ngành giữ tiếng Anh theo cách gọi của khóa.",
    "Personal study material compiled from the course's public sessions (Sessions 1–15). The 10 questions are study suggestions, not official exam items or answers. Technical terms are kept in English as used in the course.");
  $$(".lang-switch button").forEach(b=>{
    const on=b.dataset.lang===state.lang;
    b.classList.toggle("on",on);b.setAttribute("aria-pressed",on?"true":"false");
  });
  route();
}
function knownCount(){return DATA.filter(q=>state.progress[q.id]==="known").length;}
function renderProgress(){
  const n=knownCount(),C=75.4;
  $("#ring-fg").style.strokeDashoffset=C*(1-n/DATA.length);
  $("#ring-txt").textContent=n+"/10";
  $("#drawer-fill").style.width=(n/DATA.length*100)+"%";
  $("#drawer-label").textContent=T(n+"/10 câu đã hiểu",n+"/10 mastered");
}
function renderDrawer(){
  $("#drawer-list").innerHTML=DATA.map(q=>{
    const st=state.progress[q.id];
    const ico=st==="known"?`<span class="t-state known" title="${T("Đã hiểu","Mastered")}">✓</span>`:st==="review"?`<span class="t-state review" title="${T("Cần ôn lại","Needs review")}">↻</span>`:"";
    const act=state.view.name==="question"&&state.view.qid===q.id?" active":"";
    return `<li><a href="#/${q.id}" class="${act.trim()}">
      <span class="t-num">${String(q.num).padStart(2,"0")}</span><i class="led ${q.diff}"></i>
      <span>${esc(L(q.title))}</span>${ico}</a></li>`;
  }).join("");
}
function renderNav(){
  $$(".main-nav a").forEach(a=>{
    const n=a.dataset.nav;
    a.classList.toggle("active",n===state.view.name||(n==="overview"&&state.view.name==="question"));
  });
}

/* ---------- component builders ---------- */
function codeCard(code,fname,copyId){
  return `<div class="code-card">
    <div class="code-bar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
      <span>${esc(fname)}</span>
      <button class="btn sm" data-action="copy" data-copy-id="${copyId}">⧉ ${T("Copy code","Copy code")}</button>
    </div>
    <pre class="code" id="${copyId}">${highlight(code)}</pre>
  </div>`;
}
function secHead(no,title){
  return `<div class="sec-head"><span class="sec-no">${String(no).padStart(2,"0")}</span><h2>${title}</h2><span class="rule"></span></div>`;
}
function statusRow(q){
  const st=state.progress[q.id];
  return `<div class="status-row" data-status-row="${q.id}">
    <button class="btn sm known ${st==="known"?"on":""}" data-action="status" data-q="${q.id}" data-val="known">${T("✓ Đã hiểu","✓ Mastered")}</button>
    <button class="btn sm review ${st==="review"?"on":""}" data-action="status" data-q="${q.id}" data-val="review">${T("↻ Cần ôn lại","↻ Review")}</button>
  </div>`;
}
function compareTable(cmp){
  if(!cmp)return "";
  return `<div class="cmp-wrap rv"><table class="cmp">
    <caption>${esc(L(cmp.caption))}</caption>
    <thead><tr>${cmp.head.map(h=>`<th>${L(h)}</th>`).join("")}</tr></thead>
    <tbody>${cmp.rows.map(r=>`<tr>${r.map(c=>`<td>${L(c)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
}
function practiceHTML(q,uid){
  const o=q.oral;
  return `
  <div class="lec-toolbar">
    <button class="btn sm on" data-action="pmode" data-uid="${uid}" data-mode="dialogue">${T("📖 Hội thoại mẫu","📖 Sample dialogue")}</button>
    <button class="btn sm" data-action="pmode" data-uid="${uid}" data-mode="practice">${T("🎤 Luyện tập (ẩn đáp án)","🎤 Practice (hide answers)")}</button>
  </div>
  <div data-pane="dialogue" data-uid="${uid}">
    <div class="dialogue">
      <div class="bubble teacher rv"><div class="who">${T("Giảng viên · câu hỏi chính","Examiner · main question")}</div>${L(q.question)}</div>
      <div class="bubble student rv"><div class="who">${T("Sinh viên · trả lời tốt","Student · good answer")}</div>${L(o.good)}</div>
      <div class="bubble teacher rv"><div class="who">${T("Giảng viên · hỏi gặng","Examiner · follow-up")}</div>${L(o.followQ)}</div>
      <div class="bubble student rv"><div class="who">${T("Sinh viên · trả lời tiếp","Student · follow-up answer")}</div>${L(o.followA)}</div>
    </div>
    <div class="answer-compare">
      <div class="ans-card weak rv"><h4>${T("✗ Trả lời yếu","✗ Weak answer")}</h4><p>“${L(o.weak)}”</p>
        <div class="comment"><b>${T("Nhận xét:","Comment:")}</b> ${L(o.weakWhy)}</div></div>
      <div class="ans-card good rv"><h4>${T("✓ Trả lời tốt","✓ Good answer")}</h4><p>“${L(o.good)}”</p>
        <div class="comment"><b>${T("Nhận xét:","Comment:")}</b> ${L(o.goodWhy)}</div></div>
    </div>
  </div>
  <div data-pane="practice" data-uid="${uid}" class="hidden">
    <div class="practice-box">
      <p style="font-size:.9rem;color:var(--soft)">${T("Giảng viên đang hỏi EM. Trả lời bằng lời của mình (gõ ra hoặc nói to), rồi mới xem đáp án mẫu và tự chấm.","The examiner is asking YOU. Answer in your own words (type or say it aloud), then reveal the sample answer and self-grade.")}</p>
      <div class="bubble teacher" style="max-width:100%;margin-top:11px"><div class="who">${T("Giảng viên","Examiner")}</div>${L(q.question)}</div>
      <textarea data-answer="${uid}" placeholder="${T("Câu trả lời của em...","Your answer...")}"></textarea>
      <button class="btn hot" data-action="reveal" data-uid="${uid}">${T("👁 Xem đáp án mẫu","👁 Reveal sample answer")}</button>
      <div data-reveal="${uid}" class="hidden">
        <div class="bubble student" style="max-width:100%;margin-top:15px"><div class="who">${T("Sinh viên · trả lời tốt","Student · good answer")}</div>${L(o.good)}</div>
        <p style="font-size:.88rem;font-weight:800;margin-top:15px">${T("Checklist ý chính — tự chấm thật lòng:","Key-point checklist — grade yourself honestly:")}</p>
        <ul class="checklist" data-checklist="${uid}">
          ${o.checklist.map(c=>`<li><label><input type="checkbox" data-check="${uid}"><span>${L(c)}</span></label></li>`).join("")}
        </ul>
        <div class="score-meter"><i data-meter="${uid}"></i></div>
        <p class="score-line" data-score="${uid}"></p>
        <button class="btn ok hidden" data-action="mark-known" data-q="${q.id}" data-uid="${uid}" style="margin-top:10px">${T("✓ Đánh dấu Đã hiểu","✓ Mark as Mastered")}</button>
      </div>
    </div>
  </div>`;
}
function updateScore(uid){
  const boxes=$$(`[data-check="${uid}"]`);
  if(!boxes.length)return;
  const done=boxes.filter(b=>b.checked).length;
  boxes.forEach(b=>b.closest("label").classList.toggle("done",b.checked));
  const meter=$(`[data-meter="${uid}"]`);
  if(meter)meter.style.width=(done/boxes.length*100)+"%";
  const all=done===boxes.length;
  $(`[data-score="${uid}"]`).innerHTML=T(
    `Em đã nêu được <b>${done}/${boxes.length}</b> ý chính. `+(all?"<b>Đủ ý — tự tin đánh dấu Đã hiểu!</b>":"Chưa đủ ý, đọc lại Lý thuyết rồi thử lại nhé."),
    `You covered <b>${done}/${boxes.length}</b> key points. `+(all?"<b>Complete — confidently mark it Mastered!</b>":"Not complete yet — re-read the Theory and try again."));
  const mk=$(`[data-action="mark-known"][data-uid="${uid}"]`);
  if(mk)mk.classList.toggle("hidden",!all);
}

/* ---------- VIEW: overview ---------- */
const TERMS=["DOCTYPE","semantic HTML","block vs inline","id / class","relative path","alt text","h1–h6","strong / em","colspan","th scope","label for","method=POST","name=value","meta description","viewport","skip link","iframe srcdoc","standards mode"];
function renderOverview(){
  const firstUnfinished=(DATA.find(q=>state.progress[q.id]!=="known")||DATA[0]).id;
  const bars=Array.from({length:44},(_,i)=>{
    const h=22+Math.round(52*Math.abs(Math.sin(i*1.7)+0.4*Math.sin(i*0.6)));
    const cols=["var(--teal-b)","var(--coral)","var(--gold)","var(--pink)","var(--lime)"];
    return `<i style="height:${h}px;background:${cols[i%5]};animation-delay:${(i*0.07).toFixed(2)}s"></i>`;
  }).join("");
  const tick=TERMS.map(x=>`<span><b>·</b> ${esc(x)}</span>`).join("");
  $("#main").innerHTML=`
  <section class="hero rv in">
    <div class="orb o1" aria-hidden="true"></div><div class="orb o2" aria-hidden="true"></div><div class="orb o3" aria-hidden="true"></div>
    <div class="hero-grid">
      <div>
        <span class="kicker"><span class="rec" aria-hidden="true"></span>${T("INS2112 · International School, VNU · chủ đề HTML","INS2112 · International School, VNU · HTML topic")}</span>
        <h1>${T('Ôn vấn đáp HTML<br>tự tin như <span class="hl">thi thật</span>','HTML oral exam prep<br>confident as <span class="hl">the real thing</span>')}</h1>
        <p class="lede">${T("10 câu hỏi bám sát Buổi 1–15 của khóa học, ví dụ chạy được ngay trên project Music Club, demo giảng từng bước và phòng luyện ẩn đáp án. Xem chạy trước — hiểu bản chất — tự trả lời bằng lời của mình.","10 questions aligned with Sessions 1–15 of the course, runnable examples on the Music Club project, step-by-step lecture demos and a hide-the-answer practice room. See it run first — understand the essence — answer in your own words.")}</p>
        <div class="hero-cta">
          <a class="btn light big" href="#/${firstUnfinished}">${T("▶ Vào câu đầu tiên","▶ Start the first question")}</a>
          <a class="btn line big" href="#/random">${T("🎙 Vấn đáp ngẫu nhiên","🎙 Random quiz mode")}</a>
          <a class="btn line big" href="#/project">${T("🎸 Xem ví dụ dự án","🎸 Browse project examples")}</a>
        </div>
        <div class="hero-meta"><span>${T("10 câu hỏi","10 questions")}</span><span>${T("15 buổi học","15 sessions")}</span><span>${T("6 mục mỗi câu","6 sections each")}</span><span>${T("Ví dụ Music Club","Music Club examples")}</span></div>
      </div>
      <div class="deck" aria-hidden="true">
        <div class="vinyl"><div class="label"><span>INS2112<br>HTML</span></div></div>
        <div class="wave">${bars}</div>
      </div>
    </div>
  </section>

  <div class="ticker rv" aria-hidden="true"><div class="ticker-in">${tick}${tick}</div></div>

  <div class="stat-row">
    <div class="stat card rv"><b>10</b><span>${T("câu vấn đáp gợi ý","suggested oral questions")}</span></div>
    <div class="stat card rv"><b>40</b><span>${T("bước demo giảng bài","lecture demo steps")}</span></div>
    <div class="stat card rv"><b>30</b><span>${T("lỗi SAI ↔ ĐÚNG","WRONG ↔ RIGHT mistakes")}</span></div>
    <div class="stat card rv"><b>50</b><span>${T("ý chính tự chấm","self-grade key points")}</span></div>
  </div>

  <section class="sec rv" id="tracks">
    ${secHead(1,T("Danh sách câu hỏi — 10 câu vấn đáp","Question list — 10 oral questions"))}
    <div class="filters" role="group" aria-label="${T("Lọc câu hỏi","Filter questions")}">
      <span class="lbl">${T("Độ khó","Difficulty")}</span>
      <button class="fbtn on" data-action="filter" data-kind="diff" data-val="all">${T("Tất cả","All")}</button>
      <button class="fbtn" data-action="filter" data-kind="diff" data-val="easy">${T("Dễ","Easy")}</button>
      <button class="fbtn" data-action="filter" data-kind="diff" data-val="medium">${T("Trung bình","Medium")}</button>
      <button class="fbtn" data-action="filter" data-kind="diff" data-val="hard">${T("Khó","Hard")}</button>
      <span class="lbl" style="margin-left:.6rem">${T("Trạng thái","Status")}</span>
      <button class="fbtn on" data-action="filter" data-kind="status" data-val="all">${T("Tất cả","All")}</button>
      <button class="fbtn" data-action="filter" data-kind="status" data-val="none">${T("Chưa học","Not started")}</button>
      <button class="fbtn" data-action="filter" data-kind="status" data-val="known">${T("Đã hiểu","Mastered")}</button>
      <button class="fbtn" data-action="filter" data-kind="status" data-val="review">${T("Cần ôn lại","Needs review")}</button>
    </div>
    <ul class="tracklist" id="tracklist">
      ${DATA.map(q=>{
        const st=state.progress[q.id]||"none";
        return `<li><a class="trow ${q.diff} rv" href="#/${q.id}" data-diff="${q.diff}" data-status="${st}">
          <span class="no">${String(q.num).padStart(2,"0")}</span>
          <span class="tt"><h3>${esc(L(q.title))}</h3>
            <span class="sub"><span class="chip sess">📅 ${esc(L(q.session))}</span><span class="chip ${q.diff}">${diffLabel(q.diff)}</span></span>
          </span>
          <span class="st ${st}">${stLabel(st)}</span>
          <span class="play" aria-hidden="true">▶</span>
        </a></li>`;}).join("")}
    </ul>
    <p class="empty-note hidden" id="track-empty">${T("Không có câu nào khớp bộ lọc — thử chọn lại nhé.","No questions match the filters — try again.")}</p>
  </section>

  <section class="sec rv">
    ${secHead(2,T("Lộ trình 3 ngày","3-day study plan"))}
    <div class="setlist">
      <div class="set-card card d1 rv"><span class="day">${T("NGÀY 01","DAY 01")}</span><h3>${T("Nền tảng","Foundations")}</h3>
        <p>${T("Câu 1–4 · xem demo trước, đọc lý thuyết sau, gõ lại từng bước.","Questions 1–4 · watch the demo first, read the theory after, retype each step.")}</p>
        <ul><li>${T("Cấu trúc trang &amp; DOCTYPE","Page structure &amp; DOCTYPE")}</li><li>Semantic HTML</li><li>Block vs inline</li><li>id / class</li></ul></div>
      <div class="set-card card d2 rv"><span class="day">${T("NGÀY 02","DAY 02")}</span><h3>${T("Nội dung","Content")}</h3>
        <p>${T("Câu 5–8 · tự phá code trong demo rồi sửa lại cho đúng.","Questions 5–8 · break the code in the demo, then fix it.")}</p>
        <ul><li>${T("Link &amp; đường dẫn","Links &amp; paths")}</li><li>img / alt</li><li>${T("Heading &amp; text","Headings &amp; text")}</li><li>${T("Table dữ liệu","Data tables")}</li></ul></div>
      <div class="set-card card d3 rv"><span class="day">${T("NGÀY 03","DAY 03")}</span><h3>${T("Về đích","Final stretch")}</h3>
        <p>${T("Câu 9–10 · vấn đáp ngẫu nhiên 10 lượt, lướt cheat sheet trước giờ thi.","Questions 9–10 · 10 random quiz rounds, skim the cheat sheet before the exam.")}</p>
        <ul><li>Form &amp; GET/POST</li><li>Accessibility / SEO</li><li>${T("Vấn đáp ngẫu nhiên","Random oral quiz")}</li><li>${T("Cheat sheet 1 trang","One-page cheat sheet")}</li></ul></div>
    </div>
  </section>

  <section class="sec rv">
    ${secHead(3,T("Cách dùng hiệu quả","How to use it effectively"))}
    <div class="howto">
      <div class="card rv"><h3><span class="n">01</span>${T("Xem chạy trước","See it run first")}</h3><p>${T('Mỗi câu mở Demo giảng bài, bấm <b>Tiếp (j)</b> xem code xây dần như trên lớp — rồi mới đọc Lý thuyết. Giảng viên ảo dẫn từng bước, phím <kbd>n</kbd> mở ghi chú các câu gặng có thể gặp.','For each question open the lecture demo, press <b>Next (j)</b> to watch the code build up step by step — then read the Theory. A virtual lecturer guides each step; press <kbd>n</kbd> for notes on possible follow-ups.')}</p></div>
      <div class="card rv"><h3><span class="n">02</span>${T("Tự tay phá code","Break the code yourself")}</h3><p>${T("Sửa editor là preview đổi ngay, có syntax highlight trực tiếp. Bật nút ⚠ minh họa lỗi (quên đóng thẻ, thiếu alt, label lệch for…) để thấy hậu quả thật.","Edit the editor and the preview updates instantly, with live syntax highlighting. Toggle the ⚠ error buttons (unclosed tag, missing alt, mismatched label for…) to see the real consequences.")}</p></div>
      <div class="card rv"><h3><span class="n">03</span>${T("Luyện như thật","Practice for real")}</h3><p>${T("Bật chế độ ẩn đáp án, tự trả lời rồi tự chấm bằng checklist 5 ý chính. Câu nào yếu đánh dấu <b>Cần ôn lại</b> — tiến độ lưu tự động.","Turn on hide-the-answer mode, answer yourself, then self-grade with the 5-key-point checklist. Mark weak questions <b>Needs review</b> — progress saves automatically.")}</p></div>
    </div>
  </section>

  <section class="sec rv">
    ${secHead(4,T("Bản đồ buổi học — tra lại nhanh","Session map — quick lookup"))}
    <div class="sess-map">
      <a href="#/q1"><b>${T("Buổi 1","Session 1")}</b> ${T("nền tảng web","web foundations")} → Q1</a>
      <a href="#/q4"><b>${T("Buổi 2","Session 2")}</b> ${T("tổ chức site","site organization")} → Q4·Q5</a>
      <a href="#/q3"><b>${T("Buổi 3","Session 3")}</b> ${T("văn bản &amp; hình ảnh","text &amp; images")} → Q3·Q5·Q6·Q7</a>
      <a href="#/q4"><b>${T("Buổi 4","Session 4")}</b> CSS → specificity ${T("ở Q4","in Q4")}</a>
      <a href="#/q2"><b>${T("Buổi 5–6","Sessions 5–6")}</b> ${T("bố cục trang","page layout")} → Q2·Q10</a>
      <a href="#/q8"><b>${T("Buổi 9","Session 9")}</b> ${T("bảng","tables")} → Q8</a>
      <a href="#/q9"><b>${T("Buổi 13","Session 13")}</b> ${T("biểu mẫu","forms")} → Q9</a>
      <a href="#/q10"><b>${T("Buổi 15","Session 15")}</b> ${T("giao diện di động","mobile interface")} → Q10</a>
    </div>
    <p style="font-size:.8rem;color:var(--faint);margin-top:12px">${T("Ghi chú: CSS chuyên sâu (Buổi 4, 7), nhúng video/âm thanh (Buổi 10) và Spry (Buổi 14) nằm ngoài phạm vi 10 câu HTML này; guide chỉ nhắc khi liên quan trực tiếp (display, flex/grid, specificity). Đây là suy luận thêm của người biên soạn, không phải nội dung thi.","Note: advanced CSS (Sessions 4, 7), video/audio embedding (Session 10) and Spry (Session 14) are outside the scope of these 10 HTML questions; the guide mentions them only where directly relevant (display, flex/grid, specificity). This is the compiler's own inference, not exam content.")}</p>
  </section>`;
  applyFilters();
}
function applyFilters(){
  const rows=$$("#tracklist .trow");
  if(!rows.length)return;
  let shown=0;
  rows.forEach(r=>{
    const okD=state.filters.diff==="all"||r.dataset.diff===state.filters.diff;
    const okS=state.filters.status==="all"||r.dataset.status===state.filters.status;
    const show=okD&&okS;
    r.closest("li").classList.toggle("hidden",!show);
    if(show)shown++;
  });
  $("#track-empty").classList.toggle("hidden",shown>0);
}

/* ---------- VIEW: project examples ---------- */
function renderProject(pageId){
  const isCSS=pageId==="css";
  const page=PROJECT.pages.find(p=>p.id===pageId)||PROJECT.pages[0];
  const previewPage=isCSS?PROJECT.pages[0]:page;
  const source=isCSS?PROJECT.css:page.html;
  const file=isCSS?"css/style.css":page.file;
  const notes=isCSS?PROJECT.cssNotes:page.notes;
  const title=isCSS?T("CSS của Music Club","Music Club stylesheet"):page.name;
  const tabs=PROJECT.pages.map(p=>`
    <a class="project-tab ${!isCSS&&p.id===page.id?"active":""}" href="#/project/${p.id}" ${!isCSS&&p.id===page.id?'aria-current="page"':""}>
      ${esc(p.name)}<small>${esc(p.file)}</small>
    </a>`).join("");
  $("#main").innerHTML=`
    <section class="project-hero rv in">
      <span class="kicker"><span class="rec" aria-hidden="true"></span>${T("VÍ DỤ THỰC TẾ · MUSIC CLUB","REAL PROJECT · MUSIC CLUB")}</span>
      <h1>${T("Khám phá project Music Club","Explore the Music Club project")}</h1>
      <p>${T("Xem mã HTML/CSS thật, chạy thử từng trang và đọc ghi chú về semantic HTML, responsive, accessibility cùng các điểm có thể cải thiện.","Browse the real HTML/CSS, preview each page, and review notes on semantic HTML, responsive design, accessibility, and improvement opportunities.")}</p>
    </section>

    <nav class="project-tabs rv" aria-label="${T("Chọn trang ví dụ","Choose an example page")}">
      ${tabs}
      <a class="project-tab ${isCSS?"active":""}" href="#/project/css" ${isCSS?'aria-current="page"':""}>
        CSS<small>style.css</small>
      </a>
    </nav>

    <section class="sec">
      ${secHead(1,T("Mã nguồn và kết quả chạy","Source code and live preview"))}
      <div class="project-grid">
        <div>${codeCard(source,file,"project-code")}</div>
        <div>
          <div class="preview-label">${T("Xem trước trang","Page preview")}</div>
          <iframe class="preview-frame project-preview" title="${T("Bản xem trước Music Club","Music Club live preview")}" sandbox="allow-forms" srcdoc="${esc(projectPreviewDoc(previewPage))}"></iframe>
        </div>
      </div>
    </section>

    <section class="sec">
      ${secHead(2,isCSS?T("Ghi chú CSS","CSS notes"):T("Ghi chú trên trang","Page notes"))}
      <div class="project-notes">
        ${notes.map(note=>`
          <article class="project-note ${esc(note.k)}">
            <span class="project-note-tag">${note.k==="ask"?T("CÂU HỎI GỢI Ý","DISCUSSION"):note.k==="bug"?T("LỖI CẦN SỬA","BUG"):T("ĐIỂM TỐT","GOOD PRACTICE")}</span>
            <p>${esc(L(note))}</p>
          </article>`).join("")}
      </div>
    </section>`;
}

/* ---------- VIEW: question ---------- */
const SECTIONS=[["sec-question","Câu hỏi","Question"],["sec-theory","Lý thuyết","Theory"],["sec-example","Ví dụ code","Code example"],["sec-demo","Demo giảng bài","Lecture demo"],["sec-mistakes","Lỗi thường gặp","Common mistakes"],["sec-oral","Luyện vấn đáp","Oral practice"]];
function renderQuestion(q){
  const idx=DATA.indexOf(q),prev=DATA[idx-1],next=DATA[idx+1];
  const exId="ex-"+q.id,steps=q.lecture.steps;
  $("#main").innerHTML=`
  <div class="console">
    <div class="console-in">
      <div class="nav-btns">
        <button class="btn sm" data-action="drawer" aria-label="${T("Danh sách câu","Question list")}">☰</button>
        ${prev?`<a class="btn sm" href="#/${prev.id}" aria-label="${T("Câu trước","Previous question")}">←</a>`:`<a class="btn sm" href="#/" aria-label="${T("Tổng quan","Overview")}">⌂</a>`}
        ${next?`<a class="btn sm" href="#/${next.id}" aria-label="${T("Câu tiếp","Next question")}">→</a>`:`<a class="btn sm" href="#/cheat" aria-label="Cheat sheet">▤</a>`}
      </div>
      <div class="now"><span class="no">${String(q.num).padStart(2,"0")}</span><h1>${esc(L(q.title))}</h1></div>
      <div class="meta"><span class="chip sess">📅 ${esc(L(q.session))}</span><span class="chip ${q.diff}">${diffLabel(q.diff)}</span></div>
      ${statusRow(q)}
    </div>
    <div class="track bar"><i style="width:${knownCount()/DATA.length*100}%"></i></div>
  </div>

  <div class="q-layout">
    <div class="q-body">
      <section class="sec rv" id="sec-question" style="margin-top:8px">
        ${secHead(1,T("Câu hỏi giảng viên có thể hỏi","A question the examiner may ask"))}
        <div class="q-quote"><span class="mic">${T(`🎙 CÂU ${q.num}/10 · ${esc(L(q.session))}`,`🎙 Q${q.num}/10 · ${esc(L(q.session))}`)}</span>${L(q.question)}</div>
      </section>

      <section class="sec" id="sec-theory">
        ${secHead(2,T("Lý thuyết — hiểu bản chất","Theory — understand the essence"))}
        <div class="def-card rv"><span class="def-tag">Definition · EN → VI</span>
          <p class="def-en">${esc(q.definition.en)}</p>
          <p class="def-vi">${esc(q.definition.vi)}</p>
        </div>
        ${q.theory.map(b=>`<div class="theory-block rv"><h3>${L(b.h)}</h3><p>${L(b.p)}</p></div>`).join("")}
        <div class="analogy rv"><span class="ico" aria-hidden="true">💡</span><div><b>${T("Ví dụ đời thường:","Real-life analogy:")}</b> ${L(q.analogy)}</div></div>
        ${compareTable(q.compare)}
      </section>

      <section class="sec" id="sec-example">
        ${secHead(3,T("Ví dụ code — chạy được ngay","Code example — runnable now"))}
        <div class="example-grid rv" id="exgrid-${q.id}">
          <div>${codeCard(q.example.code,q.example.file||"music-club / example",exId)}</div>
          <div class="hidden" data-ex-preview="${q.id}">
            <div class="preview-label">Live preview</div>
            <iframe class="preview-frame" title="${T("Kết quả ví dụ","Example result")}" sandbox="allow-forms" srcdoc="${esc(previewDoc(q.example.code))}"></iframe>
          </div>
        </div>
        <button class="btn cool rv" data-action="toggle-example" data-q="${q.id}">${T("▶ Xem kết quả","▶ See result")}</button>
      </section>

      <section class="sec" id="sec-demo">
        ${secHead(4,T("Demo giảng bài — từng bước","Lecture demo — step by step"))}
        <div class="lec-toolbar rv">
          <span class="lec-step" id="lec-step"></span>
          <span class="lec-dots" id="lec-dots" aria-hidden="true">${steps.map(()=>"<i></i>").join("")}</span>
          <button class="btn sm" data-action="lec-prev" id="lec-prev">${T("← Trước (k)","← Prev (k)")}</button>
          <button class="btn sm hot" data-action="lec-next" id="lec-next">${T("Tiếp (j) →","Next (j) →")}</button>
          <button class="btn sm" data-action="lec-notes" id="lec-notes">${T("📋 Ghi chú (n)","📋 Notes (n)")}</button>
          <button class="btn sm ghost" data-action="lec-reset">↺ Reset</button>
        </div>
        <div class="lec-grid rv">
          <div>
            <div class="preview-label">${T("Code editor · sửa là preview đổi ngay","Code editor · edit to update the preview")}</div>
            <div class="editor-shell">
              <pre id="ed-hl" aria-hidden="true"></pre>
              <textarea id="lec-editor" spellcheck="false" aria-label="${T("Code editor — sửa code để xem preview thay đổi","Code editor — edit the code to see the preview change")}"></textarea>
            </div>
          </div>
          <div>
            <div class="preview-label">Live preview</div>
            <iframe class="preview-frame lec-preview" id="lec-preview" title="Live preview" sandbox="allow-forms"></iframe>
          </div>
        </div>
        <div class="lecturer rv">
          <div class="avatar" aria-hidden="true">🎤</div>
          <div><div class="who">${T("Giảng viên ảo","Virtual lecturer")}</div><div class="say" id="lec-say"></div></div>
        </div>
        <div class="notes-panel hidden" id="lec-notes-panel">
          <h4>${T("📋 Ghi chú giảng viên — câu gặng có thể gặp","📋 Lecturer notes — possible follow-ups")}</h4><p id="lec-note-text"></p>
        </div>
        <div class="error-banner hidden" id="lec-error-banner"></div>
        <div class="lec-errors rv">
          <span class="lbl">${T("Minh họa lỗi:","Error demos:")}</span>
          ${q.lecture.errors.map((e,i)=>`<button class="btn sm" data-action="lec-error" data-idx="${i}">⚠ ${esc(L(e.label))}</button>`).join("")}
        </div>
      </section>

      <section class="sec" id="sec-mistakes">
        ${secHead(5,T("Lỗi thường gặp — SAI ↔ ĐÚNG","Common mistakes — WRONG ↔ RIGHT"))}
        ${q.mistakes.map(m=>`
        <div class="mistake rv">
          <h3><span class="bad-ico">⚠</span> ${L(m.title)}</h3>
          <div class="vs-grid">
            <div class="vs-col wrong"><span class="tag">${T("✗ SAI","✗ WRONG")}</span><pre class="code">${highlight(m.wrong)}</pre></div>
            <div class="vs-col right"><span class="tag">${T("✓ ĐÚNG","✓ RIGHT")}</span><pre class="code">${highlight(m.right)}</pre></div>
          </div>
          <p class="why">${L(m.why)}</p>
        </div>`).join("")}
      </section>

      <section class="sec" id="sec-oral">
        ${secHead(6,T("Luyện vấn đáp — hỏi đáp như thật","Oral practice — realistic Q&A"))}
        ${practiceHTML(q,"prac-"+q.id)}
        <div style="margin-top:18px">${statusRow(q)}</div>
      </section>

      <div class="q-footer-nav">
        ${prev?`<a class="btn" href="#/${prev.id}">${T(`← Câu ${String(prev.num).padStart(2,"0")} · ${esc(L(prev.title))}`,`← Q${String(prev.num).padStart(2,"0")} · ${esc(L(prev.title))}`)}</a>`:`<a class="btn" href="#/">${T("← Về tổng quan","← Back to overview")}</a>`}
        ${next?`<a class="btn hot" href="#/${next.id}">${T(`Câu ${String(next.num).padStart(2,"0")} · ${esc(L(next.title))} →`,`Q${String(next.num).padStart(2,"0")} · ${esc(L(next.title))} →`)}</a>`:`<a class="btn hot" href="#/cheat">Cheat sheet →</a>`}
      </div>
    </div>

    <nav class="rail" aria-label="${T("Các mục trong câu hỏi","Sections in this question")}">
      ${SECTIONS.map(([id,vi,en],i)=>`<a href="#${id}" data-spy="${id}"><span class="dot"></span>${String(i+1).padStart(2,"0")} · ${T(vi,en)}</a>`).join("")}
    </nav>
  </div>`;
  initLecture(q);
  updateScore("prac-"+q.id);
  initSpy();
}

/* ---------- lecture mode + editor highlight overlay ---------- */
function paintEditor(){
  const ed=$("#lec-editor"),hl=$("#ed-hl");
  if(!ed||!hl)return;
  let html=highlight(ed.value);
  if(ed.value.endsWith("\n"))html+=" ";
  hl.innerHTML=html;
  hl.scrollTop=ed.scrollTop;hl.scrollLeft=ed.scrollLeft;
}
function initLecture(q){
  lec={q,step:0,notes:false,error:-1};
  const ed=$("#lec-editor");
  let deb=null;
  ed.addEventListener("input",()=>{
    paintEditor();
    clearTimeout(deb);
    deb=setTimeout(()=>{$("#lec-preview").srcdoc=previewDoc(ed.value);},180);
  });
  ed.addEventListener("scroll",()=>{
    const hl=$("#ed-hl");hl.scrollTop=ed.scrollTop;hl.scrollLeft=ed.scrollLeft;
  });
  ed.addEventListener("keydown",e=>{
    if(e.key==="Tab"){
      e.preventDefault();
      const s=ed.selectionStart,en=ed.selectionEnd;
      ed.value=ed.value.slice(0,s)+"  "+ed.value.slice(en);
      ed.selectionStart=ed.selectionEnd=s+2;
      ed.dispatchEvent(new Event("input",{bubbles:true}));
    }
  });
  updateLecture();
}
function updateLecture(){
  if(!lec||state.view.name!=="question")return;
  const q=lec.q,steps=q.lecture.steps,s=steps[lec.step];
  const code=lec.error>=0?q.lecture.errors[lec.error].code:s.code;
  const ed=$("#lec-editor");
  ed.value=code;paintEditor();
  ed.scrollTop=0;ed.scrollLeft=0;
  $("#lec-preview").srcdoc=previewDoc(code);
  $("#lec-step").textContent=T(`Bước ${lec.step+1}/${steps.length}`,`Step ${lec.step+1}/${steps.length}`);
  $$("#lec-dots i").forEach((d,i)=>{
    d.classList.toggle("done",i<lec.step);
    d.classList.toggle("cur",i===lec.step);
  });
  $("#lec-prev").disabled=lec.step===0&&lec.error<0;
  $("#lec-next").disabled=lec.step===steps.length-1&&lec.error<0;
  $("#lec-say").innerHTML=lec.error>=0?L(q.lecture.errors[lec.error].explain):L(s.say);
  $("#lec-note-text").innerHTML=L(s.note);
  $("#lec-notes-panel").classList.toggle("hidden",!lec.notes);
  $("#lec-notes").classList.toggle("on",lec.notes);
  const banner=$("#lec-error-banner");
  banner.classList.toggle("hidden",lec.error<0);
  if(lec.error>=0)banner.innerHTML=`<span aria-hidden="true">⚠</span><div><b>${T("Đang minh họa lỗi:","Demonstrating error:")}</b> ${esc(L(q.lecture.errors[lec.error].label))} — ${L(q.lecture.errors[lec.error].explain)}</div>`;
  $$("[data-action='lec-error']").forEach(b=>b.classList.toggle("on",+b.dataset.idx===lec.error));
}
function lecMove(d){
  if(!lec)return;
  const max=lec.q.lecture.steps.length-1;
  const next=Math.min(max,Math.max(0,lec.step+d));
  if(next===lec.step&&lec.error<0)return;
  lec.step=next;lec.error=-1;updateLecture();
}

/* ---------- scrollspy + reveal ---------- */
function initSpy(){
  if(spyObs){spyObs.disconnect();spyObs=null;}
  const links=$$(".rail a[data-spy]");
  if(!links.length)return;
  spyObs=new IntersectionObserver(es=>{
    es.forEach(e=>{
      if(e.isIntersecting){
        links.forEach(l=>l.classList.toggle("active",l.dataset.spy===e.target.id));
      }
    });
  },{rootMargin:"-25% 0px -65% 0px"});
  SECTIONS.forEach(([id])=>{const el=document.getElementById(id);if(el)spyObs.observe(el);});
}
function initReveal(){
  if(revealObs){revealObs.disconnect();revealObs=null;}
  revealObs=new IntersectionObserver(es=>{
    es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");revealObs.unobserve(e.target);}});
  },{threshold:.1});
  $$(".rv:not(.in)").forEach((el,i)=>{
    el.style.transitionDelay=Math.min(i%6*60,240)+"ms";
    revealObs.observe(el);
  });
}

/* ---------- VIEW: vấn đáp ngẫu nhiên (random) ---------- */
function pickRandom(){
  let q;
  do{q=DATA[Math.floor(Math.random()*DATA.length)];}while(DATA.length>1&&q.id===state.lastRandom);
  state.lastRandom=q.id;state.randomCount++;
  return q;
}
function stopTimer(){if(timerInt){clearInterval(timerInt);timerInt=null;}}
function renderRandom(){
  stopTimer();
  const q=qById(state.view.qid)||pickRandom();
  state.view.qid=q.id;
  $("#main").innerHTML=`
  <div class="onair rv in">
    <div class="orb o1" aria-hidden="true"></div><div class="orb o2" aria-hidden="true"></div>
    <div class="onair-in">
      <span class="onair-badge"><span class="rec" aria-hidden="true"></span>${T("VẤN ĐÁP NGẪU NHIÊN","RANDOM ORAL QUIZ")}</span>
      <h1>${T("🎙 Giảng viên gọi tên em — trả lời ngay!","🎙 The examiner calls on you — answer now!")}</h1>
      <p class="sub">${T("Như bốc thăm câu hỏi thật: không biết trước, không đáp án sẵn. Nghĩ có giờ, trả lời bằng lời của mình, rồi tự chấm bằng checklist.","Like drawing a real exam question: no preview, no ready answer. Think against the clock, answer in your own words, then self-grade with the checklist.")}</p>
      <div class="qtext">${L(q.question)}</div>
      <div class="onair-meta"><span class="chip">📅 ${esc(L(q.session))}</span><span class="chip">${diffLabel(q.diff)}</span><span class="chip">${T(`Câu ${String(q.num).padStart(2,"0")}/10`,`Q${String(q.num).padStart(2,"0")}/10`)}</span></div>
      <div class="timer-row">
        <svg class="timer-ring" width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
          <circle class="bgc" cx="26" cy="26" r="22"/>
          <circle class="fgc" id="timer-fg" cx="26" cy="26" r="22" stroke-dasharray="138.2" stroke-dashoffset="0"/>
        </svg>
        <span class="timer-txt" id="timer-txt">${T("90s nghĩ","90s to think")}</span>
        <button class="btn light" data-action="timer-start" id="timer-btn">${T("⏱ Bắt đầu tính giờ","⏱ Start timer")}</button>
        <span class="random-counter" style="background:rgba(255,255,255,.15);border-color:rgba(255,255,255,.35);color:#fff">${T(`Đã luyện ${state.randomCount} câu phiên này`,`Practiced ${state.randomCount} this session`)}</span>
      </div>
    </div>
  </div>
  <section class="sec" style="margin-top:26px">
    ${practiceHTML(q,"prac-rand")}
  </section>
  <div style="display:flex;gap:.7rem;margin-top:20px;flex-wrap:wrap">
    <button class="btn hot big" data-action="random-next">${T("🎲 Câu khác","🎲 Another question")}</button>
    <a class="btn big" href="#/${q.id}">${T(`📖 Học lại Câu ${String(q.num).padStart(2,"0")}`,`📖 Review Q${String(q.num).padStart(2,"0")}`)}</a>
  </div>`;
  updateScore("prac-rand");
  $$('[data-pane][data-uid="prac-rand"]').forEach(p=>p.classList.toggle("hidden",p.dataset.pane!=="practice"));
  $$('[data-action="pmode"][data-uid="prac-rand"]').forEach(b=>b.classList.toggle("on",b.dataset.mode==="practice"));
}
function startTimer(){
  stopTimer();
  let left=90;const C=138.2;
  const btn=$("#timer-btn"),txt=$("#timer-txt"),fg=$("#timer-fg");
  if(!btn)return;
  btn.disabled=true;btn.textContent=T("⏱ Đang nghĩ…","⏱ Thinking…");
  txt.textContent=left+"s";
  timerInt=setInterval(()=>{
    left--;
    if(txt)txt.textContent=left+"s";
    if(fg)fg.style.strokeDashoffset=C*(1-left/90);
    if(left<=0){
      stopTimer();
      if(btn){btn.disabled=false;btn.textContent=T("⏱ Tính giờ lại","⏱ Restart timer");}
      toast(T("Hết giờ nghĩ — xem đáp án mẫu và tự chấm nhé!","Time's up — reveal the sample answer and self-grade!"));
      const rv=$('[data-action="reveal"][data-uid="prac-rand"]');
      if(rv&&!rv.classList.contains("hidden"))rv.click();
    }
  },1000);
}

/* ---------- VIEW: cheat sheet ---------- */
const CHEAT_TAGS=[
["<!DOCTYPE html>",{vi:"Khai báo HTML5, bật standards mode. Không phải thẻ, không đóng.",en:"HTML5 declaration, enables standards mode. Not a tag, no closing."}],
["<html lang>",{vi:"Gốc tài liệu; lang giúp screen reader đọc đúng giọng.",en:"Document root; lang helps screen readers use the right voice."}],
["<head> / <body>",{vi:"head = metadata (title, meta, link); body = nội dung hiển thị.",en:"head = metadata (title, meta, link); body = visible content."}],
["<header> <nav> <main> <footer>",{vi:"Semantic landmarks; chỉ MỘT main mỗi trang.",en:"Semantic landmarks; only ONE main per page."}],
["<section> / <article>",{vi:"section = nhóm theo chủ đề (có heading); article = nội dung độc lập.",en:"section = thematic group (with heading); article = self-contained content."}],
["<div> / <span>",{vi:"Container trung tính: div block, span inline.",en:"Neutral containers: div is block, span is inline."}],
["<h1>–<h6>",{vi:"Outline phân cấp, không nhảy cấp, không chọn theo cỡ chữ.",en:"Hierarchical outline; don't skip levels, don't pick by font size."}],
["<strong> / <em>",{vi:"Quan trọng / nhấn mạnh — có ngữ nghĩa, khác <b>/<i> chỉ visual.",en:"Importance / emphasis — semantic, unlike visual-only <b>/<i>."}],
["<a href>",{vi:"Link; đường dẫn tương đối tính từ file hiện tại, ../ lên một cấp.",en:"Link; relative paths resolve from the current file, ../ goes up one level."}],
["<img src alt>",{vi:'Ảnh; alt mô tả thay thế, ảnh trang trí dùng alt="".',en:'Image; alt is the text alternative, decorative images use alt="".'}],
["<table> <tr> <th> <td>",{vi:"Bảng dữ liệu: hàng / ô header / ô dữ liệu; thêm caption, scope.",en:"Data table: row / header cell / data cell; add caption and scope."}],
["<form action method>",{vi:"action = URL nhận; method = GET (URL) hay POST (body).",en:"action = receiving URL; method = GET (in URL) or POST (in body)."}],
["<label for> + <input id name>",{vi:"label nối qua for=id; name là key gửi server.",en:"label links via for=id; name is the key sent to the server."}],
["<meta name=description>",{vi:"Mô tả trang cho search engine; mỗi trang một mô tả riêng.",en:"Page description for search engines; a unique one per page."}],
["<meta name=viewport>",{vi:"width=device-width, initial-scale=1 — bắt buộc cho mobile.",en:"width=device-width, initial-scale=1 — required for mobile."}]
];
function renderCheat(){
  $("#main").innerHTML=`
  <div class="page-head rv in"><h1>${T("📄 Cheat sheet — 1 trang trước giờ thi","📄 Cheat sheet — one page before the exam")}</h1>
    <button class="btn" data-action="print">${T("🖨 In cheat sheet","🖨 Print cheat sheet")}</button></div>
  <p class="page-sub rv">${T("Mỗi câu một thẻ: từ khóa phải nhớ + code tối thiểu. Đọc lướt 5 phút trước khi vào phòng vấn đáp.","One card per question: must-remember keywords + minimal code. Skim for 5 minutes before entering the oral exam.")}</p>
  <div class="cheat-grid">
    ${DATA.map(q=>`<div class="cheat-card card ${q.diff} rv">
      <div class="top"><span class="chip ${q.diff}">Q${q.num}</span><h3>${esc(L(q.title))}</h3></div>
      <p>${L(q.cheat)}</p>
      <pre class="code">${highlight(q.cheatCode)}</pre>
    </div>`).join("")}
  </div>
  <section class="sec rv">
    ${secHead(1,T("Bảng tra nhanh thẻ HTML","HTML tag quick reference"))}
    <div class="cmp-wrap"><table class="cmp">
      <thead><tr><th>Tag</th><th>${T("Ý nghĩa / ghi nhớ","Meaning / mnemonic")}</th></tr></thead>
      <tbody>${CHEAT_TAGS.map(r=>`<tr><td><code>${esc(r[0])}</code></td><td>${esc(L(r[1]))}</td></tr>`).join("")}</tbody>
    </table></div>
  </section>`;
}

/* ---------- router ---------- */
function route(){
  stopTimer();
  const h=location.hash.replace(/^#\/?/,"");
  document.body.classList.remove("drawer-open");
  const projectRoute=h.match(/^project(?:\/([^/]+))?$/);
  if(projectRoute){state.view={name:"project",qid:null};renderProject(projectRoute[1]||"index");}
  else if(h==="random"){state.view={name:"random",qid:null};renderRandom();}
  else if(h==="cheat"){state.view={name:"cheat",qid:null};renderCheat();}
  else if(qById(h)){state.view={name:"question",qid:h};renderQuestion(qById(h));}
  else{state.view={name:"overview",qid:null};renderOverview();}
  renderProgress();renderDrawer();renderNav();initReveal();
  window.scrollTo({top:0,behavior:"auto"});
}

/* ---------- hành động tập trung ---------- */
document.addEventListener("click",e=>{
  const el=e.target.closest("[data-action]");
  if(!el)return;
  const a=el.dataset.action;
  if(a==="theme"){state.theme=state.theme==="dark"?"light":"dark";store.set("theme",state.theme);applyTheme();}
  else if(a==="lang"){const lg=el.dataset.lang;if(lg!==state.lang){state.lang=lg;store.set("lang",lg);applyLang();}}
  else if(a==="drawer"){document.body.classList.toggle("drawer-open");}
  else if(a==="copy"){
    const pre=document.getElementById(el.dataset.copyId);
    const text=pre.textContent;
    const done=()=>toast(T("Đã copy code ✓","Code copied ✓"));
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(text).then(done).catch(()=>fallbackCopy(text,done));
    else fallbackCopy(text,done);
  }
  else if(a==="toggle-example"){
    const qid=el.dataset.q,pane=$(`[data-ex-preview="${qid}"]`),grid=$("#exgrid-"+qid);
    const show=pane.classList.contains("hidden");
    pane.classList.toggle("hidden",!show);grid.classList.toggle("split",show);
    el.textContent=show?T("Ẩn kết quả","Hide result"):T("▶ Xem kết quả","▶ See result");
  }
  else if(a==="status"){setStatus(el.dataset.q,el.dataset.val);}
  else if(a==="lec-next"){lecMove(1);}
  else if(a==="lec-prev"){lecMove(-1);}
  else if(a==="lec-notes"){if(lec){lec.notes=!lec.notes;updateLecture();}}
  else if(a==="lec-reset"){if(lec){lec.error=-1;updateLecture();toast(T("Đã khôi phục code bước hiện tại","Restored the current step's code"));}}
  else if(a==="lec-error"){if(lec){const i=+el.dataset.idx;lec.error=lec.error===i?-1:i;updateLecture();}}
  else if(a==="pmode"){
    const uid=el.dataset.uid,mode=el.dataset.mode;
    $$(`[data-action="pmode"][data-uid="${uid}"]`).forEach(b=>b.classList.toggle("on",b===el));
    $$(`[data-pane][data-uid="${uid}"]`).forEach(p=>p.classList.toggle("hidden",p.dataset.pane!==mode));
  }
  else if(a==="reveal"){$(`[data-reveal="${el.dataset.uid}"]`).classList.remove("hidden");el.classList.add("hidden");}
  else if(a==="mark-known"){setStatus(el.dataset.q,"known");}
  else if(a==="random-next"){state.view={name:"random",qid:null};renderRandom();renderNav();initReveal();}
  else if(a==="timer-start"){startTimer();}
  else if(a==="filter"){
    state.filters[el.dataset.kind]=el.dataset.val;
    $$(`[data-action="filter"][data-kind="${el.dataset.kind}"]`).forEach(b=>b.classList.toggle("on",b===el));
    applyFilters();
  }
  else if(a==="print"){window.print();}
});
function fallbackCopy(text,done){
  const ta=document.createElement("textarea");
  ta.value=text;ta.style.position="fixed";ta.style.opacity="0";
  document.body.appendChild(ta);ta.select();
  try{document.execCommand("copy");done();}catch(err){}
  ta.remove();
}
function setStatus(qid,val){
  if(state.progress[qid]===val)delete state.progress[qid];
  else state.progress[qid]=val;
  store.setJSON("progress",state.progress);
  renderProgress();renderDrawer();
  $$(`[data-status-row="${qid}"]`).forEach(row=>{
    const st=state.progress[qid];
    row.querySelector(".known").classList.toggle("on",st==="known");
    row.querySelector(".review").classList.toggle("on",st==="review");
  });
  const row=$(`#tracklist .trow[href="#/${qid}"]`);
  if(row){
    const st=state.progress[qid]||"none";
    row.dataset.status=st;
    const stEl=row.querySelector(".st");
    stEl.className="st "+st;
    stEl.textContent=stLabel(st);
    applyFilters();
  }
  const bar=$(".console .bar i");
  if(bar)bar.style.width=(knownCount()/DATA.length*100)+"%";
  toast(val==="known"?T("Đã lưu: Đã hiểu ✓","Saved: Mastered ✓"):T("Đã lưu: Cần ôn lại ↻","Saved: Needs review ↻"));
}
document.addEventListener("change",e=>{
  if(e.target.matches("[data-check]"))updateScore(e.target.dataset.check);
});
/* phím tắt: j/k/n trong lecture, Esc đóng drawer */
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){document.body.classList.remove("drawer-open");return;}
  const tag=e.target.tagName;
  if(tag==="TEXTAREA"||tag==="INPUT"||tag==="SELECT"||e.target.isContentEditable)return;
  if(e.metaKey||e.ctrlKey||e.altKey)return;
  if(state.view.name!=="question"||!lec)return;
  if(e.key==="j"){e.preventDefault();lecMove(1);}
  else if(e.key==="k"){e.preventDefault();lecMove(-1);}
  else if(e.key==="n"){e.preventDefault();lec.notes=!lec.notes;updateLecture();}
});
window.addEventListener("hashchange",route);/* ---------- khởi động ---------- */
applyTheme();
applyLang();
