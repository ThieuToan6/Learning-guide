/* ---------- DATA: 10 câu hỏi (nội dung bám Buổi 1–15 của khóa) ---------- */
const DATA=[

/* ===== Q1 · Buổi 1 · Cấu trúc trang HTML ===== */
{
id:"q1", num:1, diff:"easy",
session:{vi:"Buổi 1",en:"Session 1"},
title:{vi:"Cấu trúc tối thiểu của trang HTML: DOCTYPE, head, body",en:"Minimal HTML page structure: DOCTYPE, head, body"},
question:{
  vi:"Em hãy mô tả cấu trúc tối thiểu của một file HTML. <code>&lt;!DOCTYPE html&gt;</code> để làm gì? Thẻ <code>head</code> và <code>body</code> khác nhau thế nào?",
  en:"Describe the minimal structure of an HTML file. What is <code>&lt;!DOCTYPE html&gt;</code> for? How do <code>head</code> and <code>body</code> differ?"
},
definition:{
  en:"HTML (HyperText Markup Language) is the standard markup language that describes the structure and meaning of web content; the browser parses it into a DOM tree and renders it.",
  vi:"HTML (HyperText Markup Language) là ngôn ngữ đánh dấu chuẩn mô tả cấu trúc và ý nghĩa của nội dung web; trình duyệt đọc nó thành cây DOM rồi hiển thị. HTML không phải ngôn ngữ lập trình — nó không có logic, chỉ khai báo 'cái gì ở đâu'."
},
theory:[
  {h:{vi:"HTML hoạt động thế nào?",en:"How does HTML work?"},
   p:{vi:"Em viết các <strong>tag</strong> (thẻ) như <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code> để đánh dấu nội dung. Trình duyệt đọc file từ trên xuống, dựng thành cây <strong>DOM</strong> (Document Object Model) rồi vẽ lên màn hình. Thẻ thường có cặp mở/đóng: <code>&lt;p&gt;nội dung&lt;/p&gt;</code>; một số thẻ rỗng tự đóng như <code>&lt;img&gt;</code>, <code>&lt;meta&gt;</code>.",
      en:"You write <strong>tags</strong> like <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code> to mark up content. The browser reads the file top-down, builds a <strong>DOM</strong> (Document Object Model) tree, then paints it. Most tags come in open/close pairs: <code>&lt;p&gt;content&lt;/p&gt;</code>; a few are void elements like <code>&lt;img&gt;</code>, <code>&lt;meta&gt;</code>."}},
  {h:{vi:"DOCTYPE — dòng đầu tiên bắt buộc",en:"DOCTYPE — the mandatory first line"},
   p:{vi:"<code>&lt;!DOCTYPE html&gt;</code> là <strong>khai báo</strong> cho trình duyệt biết tài liệu dùng HTML5. Nó bật <strong>standards mode</strong> — chế độ render theo chuẩn hiện đại. Thiếu nó, trình duyệt có thể rơi vào <strong>quirks mode</strong>, bắt chước cách render cũ (box model khác, layout khó lường). Nó không phải thẻ HTML nên không có thẻ đóng và phải đứng trước <code>&lt;html&gt;</code>.",
      en:"<code>&lt;!DOCTYPE html&gt;</code> is a <strong>declaration</strong> telling the browser the document is HTML5. It switches on <strong>standards mode</strong> — rendering by modern specs. Without it, browsers may fall into <strong>quirks mode</strong>, emulating legacy rendering (different box model, unpredictable layout). It is not an HTML tag, so it has no closing tag and must precede <code>&lt;html&gt;</code>."}},
  {h:{vi:"head vs body — hai nửa của một trang",en:"head vs body — two halves of a page"},
   p:{vi:"<code>&lt;head&gt;</code> chứa <strong>metadata</strong> — dữ liệu về trang, không hiển thị trực tiếp: <code>&lt;meta charset&gt;</code> (bảng mã, để tiếng Việt không lỗi font), <code>&lt;title&gt;</code> (chữ trên tab trình duyệt, rất quan trọng cho SEO), <code>&lt;link&gt;</code> nối file CSS. <code>&lt;body&gt;</code> chứa toàn bộ nội dung người dùng nhìn thấy. Thẻ gốc <code>&lt;html lang=\"vi\"&gt;</code> bọc cả hai; thuộc tính <code>lang</code> giúp screen reader đọc đúng giọng và công cụ dịch nhận diện ngôn ngữ.",
      en:"<code>&lt;head&gt;</code> holds <strong>metadata</strong> — data about the page, not directly visible: <code>&lt;meta charset&gt;</code> (encoding so Vietnamese renders correctly), <code>&lt;title&gt;</code> (browser-tab text, crucial for SEO), <code>&lt;link&gt;</code> to CSS files. <code>&lt;body&gt;</code> holds everything the user sees. The root <code>&lt;html lang=\"vi\"&gt;</code> wraps both; the <code>lang</code> attribute lets screen readers use the right voice and translation tools detect the language."}}
],
analogy:{
  vi:"Một trang web như một buổi diễn của Music Club: <strong>HTML</strong> là kịch bản — ai đứng đâu, nói gì; <strong>CSS</strong> là ánh sáng, trang phục; <strong>JavaScript</strong> là hiệu ứng sân khấu. Còn <code>head</code> giống tờ thông tin gửi ban tổ chức (không khán giả nào thấy), <code>body</code> là chính buổi diễn khán giả xem.",
  en:"A web page is like a Music Club gig: <strong>HTML</strong> is the script — who stands where, says what; <strong>CSS</strong> is lighting and costumes; <strong>JavaScript</strong> is stage effects. The <code>head</code> is the info sheet sent to organizers (no audience sees it); the <code>body</code> is the show itself."
},
compare:{
  caption:{vi:"head vs body — nhớ nhanh",en:"head vs body — quick memory"},
  head:[{vi:"Tiêu chí",en:"Criterion"},{vi:"&lt;head&gt;",en:"&lt;head&gt;"},{vi:"&lt;body&gt;",en:"&lt;body&gt;"}],
  rows:[
    [{vi:"Hiển thị trực tiếp?",en:"Directly visible?"},{vi:"Không (trừ title trên tab)",en:"No (except title on the tab)"},{vi:"Có — toàn bộ nội dung",en:"Yes — all content"}],
    [{vi:"Chứa gì?",en:"Contains?"},{vi:"<code>title, meta, link, style</code>",en:"<code>title, meta, link, style</code>"},{vi:"<code>h1, p, img, table, form...</code>",en:"<code>h1, p, img, table, form...</code>"}],
    [{vi:"Ví dụ Music Club",en:"Music Club example"},{vi:"<code>&lt;title&gt;Music Club&lt;/title&gt;</code>",en:"<code>&lt;title&gt;Music Club&lt;/title&gt;</code>"},{vi:"<code>&lt;h1&gt;Music Club&lt;/h1&gt;</code>",en:"<code>&lt;h1&gt;Music Club&lt;/h1&gt;</code>"}]
  ]
},
example:{file:"music-club / index.html",code:
`<!DOCTYPE html> <!-- HTML5 declaration: standards mode -->
<html lang="vi"> <!-- root element; lang = page language -->
<head>
  <meta charset="UTF-8"> <!-- Vietnamese text renders correctly -->
  <title>Music Club — Home</title> <!-- text on the browser tab -->
  <link rel="stylesheet" href="css/style.css"> <!-- our stylesheet -->
</head>
<body>
  <!-- Everything visible lives inside body -->
  <h1>Music Club</h1>
  <p>Welcome to the club — see you at practice!</p>
</body>
</html>`},
lecture:{
steps:[
  {code:
`<!DOCTYPE html> <!-- declare HTML5 first -->
<html lang="vi">
</html>`,
   say:{vi:"Bắt đầu như mọi buổi diễn: bật đèn sân khấu đã. Dòng <code>&lt;!DOCTYPE html&gt;</code> báo trình duyệt 'đây là HTML5, render theo chuẩn nhé'. Rồi mở thẻ gốc <code>&lt;html lang=\"vi\"&gt;</code> — nói luôn trang này tiếng Việt.",
        en:"Every show starts with the lights on. <code>&lt;!DOCTYPE html&gt;</code> tells the browser 'this is HTML5, render by the standards'. Then open the root <code>&lt;html lang=\"vi\"&gt;</code> — declaring the page language up front."},
   note:{vi:"Nếu bị hỏi 'DOCTYPE có phải thẻ không?' — trả lời dứt khoát: KHÔNG, là khai báo, không đóng. Đây là câu gặng kinh điển của buổi 1.",
         en:"If asked 'Is DOCTYPE a tag?' — answer firmly: NO, it is a declaration with no closing tag. A classic Session-1 follow-up."}},
  {code:
`<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8"> <!-- encoding for Vietnamese -->
  <title>Music Club — Home</title>
</head>
<body>
</body>
</html>`,
   say:{vi:"Giờ làm 'tờ thông tin hậu trường': <code>head</code>. Thêm <code>meta charset</code> để chữ 'Câu lạc bộ Âm nhạc' không biến thành ký tự lạ, và <code>title</code> — thứ duy nhất trong head mà người dùng thấy, trên tab trình duyệt.",
        en:"Now the backstage info sheet: the <code>head</code>. Add <code>meta charset</code> so Vietnamese text never turns into mojibake, and <code>title</code> — the only head item users see, on the browser tab."},
   note:{vi:"Gặng có thể gặp: 'title nằm trong head hay body?' → head. 'Thiếu charset thì sao?' → tiếng Việt có dấu có thể hiển thị sai.",
         en:"Possible follow-ups: 'Is title in head or body?' → head. 'What if charset is missing?' → accented Vietnamese may display incorrectly."}},
  {code:
`<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Music Club — Home</title>
</head>
<body>
  <h1>Music Club</h1> <!-- main heading of the page -->
  <p>Welcome to the club!</p>
</body>
</html>`,
   say:{vi:"Mở màn! Nội dung đầu tiên vào <code>body</code>: một <code>h1</code> làm tiêu đề chính và một <code>p</code> chào mừng. Nhìn preview bên phải — trang đã 'sống' dù chưa có CSS.",
        en:"Curtain up! First content goes into <code>body</code>: an <code>h1</code> as the main heading and a welcoming <code>p</code>. Check the preview — the page is alive even without CSS."},
   note:{vi:"Nhấn mạnh: mọi thứ hiển thị đều trong body. Nếu lỡ viết h1 trong head, trình duyệt sẽ tự 'dọn' nó xuống body — đừng dựa vào sự sửa sai đó.",
         en:"Emphasize: everything visible lives in body. If you put h1 in head, the browser silently moves it to body — never rely on that auto-correction."}},
  {code:
`<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Music Club — Home</title>
  <link rel="stylesheet" href="css/style.css"> <!-- relative path -->
</head>
<body>
  <h1>Music Club</h1>
  <p>Welcome to the club!</p>
  <p>Practice every <strong>Friday 6pm</strong>, Room B201.</p>
</body>
</html>`,
   say:{vi:"Bước cuối: nối trang điểm bằng <code>link</code> tới <code>css/style.css</code> — đúng cấu trúc project Music Club của em (index.html, about.html, contact.html, css/style.css). Đường dẫn tương đối, tính từ vị trí file index.html.",
        en:"Final step: connect the makeup kit with <code>link</code> to <code>css/style.css</code> — exactly your Music Club project layout (index.html, about.html, contact.html, css/style.css). A relative path, resolved from index.html's location."},
   note:{vi:"Câu gặng: 'link nằm ở đâu?' → trong head. 'Vì sao href là css/style.css chứ không phải /css/style.css?' → xem câu 5 về đường dẫn.",
         en:"Follow-ups: 'Where does link go?' → in head. 'Why css/style.css and not /css/style.css?' → see question 5 on paths."}}
],
errors:[
  {label:{vi:"Quên đóng thẻ h1",en:"Unclosed h1 tag"},
   code:
`<!DOCTYPE html>
<html lang="vi">
<head><meta charset="UTF-8"><title>Music Club</title></head>
<body>
  <h1>Music Club <!-- BUG: missing </h1> -->
  <p>Welcome to the club!</p>
  <p>Practice every Friday.</p>
</body>
</html>`,
   explain:{vi:"Thiếu <code>&lt;/h1&gt;</code> nên trình duyệt coi mọi thứ phía sau vẫn nằm trong h1 — cả hai đoạn văn bị phóng to thành tiêu đề. Một lỗi đóng thẻ nhỏ phá hỏng cả trang.",
            en:"Without <code>&lt;/h1&gt;</code>, the browser treats everything after it as still inside the h1 — both paragraphs get rendered as giant heading text. One missing closing tag wrecks the whole page."}},
  {label:{vi:"Bỏ thẻ title",en:"Missing title"},
   code:
`<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <!-- BUG: no <title> -->
</head>
<body>
  <h1>Music Club</h1>
  <p>Welcome to the club!</p>
</body>
</html>`,
   explain:{vi:"Trang vẫn chạy, nhưng tab trình duyệt trống/trơ trọi (hiện URL thay vì tên). Đây cũng là lỗi SEO: Google dùng title làm tiêu đề kết quả tìm kiếm. Lỗi 'im lặng' — không vỡ giao diện nhưng mất điểm chuyên nghiệp.",
            en:"The page still works, but the browser tab is blank/bare (shows the URL instead of a name). It is also an SEO mistake: Google uses title as the search-result headline. A 'silent' bug — no broken layout, but unprofessional."}}
]},
mistakes:[
  {title:{vi:"DOCTYPE sai vị trí hoặc dùng bản cũ dài dòng",en:"DOCTYPE misplaced or using a legacy version"},
   wrong:
`<html lang="vi">
<!DOCTYPE html>
...`,
   right:
`<!DOCTYPE html>
<html lang="vi">
...`,
   why:{vi:"DOCTYPE phải là dòng ĐẦU TIÊN, trước mọi thẻ. Đặt sau <code>&lt;html&gt;</code> thì trình duyệt có thể bỏ qua và rơi vào quirks mode. HTML5 chỉ cần đúng <code>&lt;!DOCTYPE html&gt;</code> — không cần dán chuỗi XHTML dài ngoằng của thời cũ.",
        en:"DOCTYPE must be the VERY FIRST line, before any tag. Placed after <code>&lt;html&gt;</code>, browsers may ignore it and drop into quirks mode. HTML5 needs only <code>&lt;!DOCTYPE html&gt;</code> — no long legacy XHTML strings."}},
  {title:{vi:"Viết nội dung hiển thị trong head",en:"Putting visible content in head"},
   wrong:
`<head>
  <title>Music Club</title>
  <h1>Music Club</h1>
</head>
<body></body>`,
   right:
`<head>
  <title>Music Club</title>
</head>
<body>
  <h1>Music Club</h1>
</body>`,
   why:{vi:"<code>head</code> chỉ dành cho metadata. Trình duyệt sẽ tự đẩy <code>h1</code> xuống body nên 'trông vẫn chạy', nhưng đó là code sai ngữ nghĩa — giảng viên đọc source sẽ bắt lỗi ngay, và các công cụ xử lý DOM có thể hành xử khác.",
        en:"<code>head</code> is metadata-only. The browser auto-moves the <code>h1</code> into body so it 'looks fine', but the source is semantically wrong — a lecturer reading the code spots it instantly, and DOM tools may behave differently."}},
  {title:{vi:"Quên thuộc tính lang trên thẻ html",en:"Forgetting the lang attribute on html"},
   wrong:`<html>`,
   right:`<html lang="vi">`,
   why:{vi:"Không có <code>lang</code>, screen reader có thể đọc tiếng Việt bằng giọng tiếng Anh (nghe như robot), công cụ dịch và search engine khó xác định ngôn ngữ trang. Một thuộc tính nhỏ, điểm accessibility lớn.",
        en:"Without <code>lang</code>, screen readers may read Vietnamese with an English voice, and translation tools/search engines struggle to detect the page language. A tiny attribute, a big accessibility win."}}
],
oral:{
good:{vi:"Một file HTML tối thiểu bắt đầu bằng <code>&lt;!DOCTYPE html&gt;</code> để khai báo HTML5, rồi đến thẻ gốc <code>&lt;html lang=\"vi\"&gt;</code> chứa hai phần: <code>head</code> đựng metadata như charset, title, link CSS — không hiển thị trực tiếp; và <code>body</code> đựng toàn bộ nội dung người dùng thấy. Trong project Music Club, file index.html của em theo đúng cấu trúc đó ạ.",
      en:"A minimal HTML file starts with <code>&lt;!DOCTYPE html&gt;</code> declaring HTML5, then the root <code>&lt;html lang=\"vi\"&gt;</code> with two children: <code>head</code> for metadata like charset, title and CSS links — not directly visible; and <code>body</code> for everything the user sees. My Music Club index.html follows exactly this structure."},
followQ:{vi:"DOCTYPE có phải là thẻ HTML không? Nếu bỏ nó đi thì chuyện gì xảy ra?",
         en:"Is DOCTYPE an HTML tag? What happens if you remove it?"},
followA:{vi:"Dạ không, đó là khai báo gửi trình duyệt, không phải phần tử nên không có thẻ đóng. Nếu thiếu, trình duyệt có thể chuyển sang quirks mode — mô phỏng cách render cũ, box model và layout xử lý khác chuẩn, trang dễ vỡ bố cục. Có <code>&lt;!DOCTYPE html&gt;</code> thì trình duyệt dùng standards mode ạ.",
         en:"No — it is a declaration to the browser, not an element, so it has no closing tag. Without it the browser may enter quirks mode, emulating legacy rendering with a different box model and unpredictable layout. With <code>&lt;!DOCTYPE html&gt;</code> the browser uses standards mode."},
weak:{vi:"HTML có head với body. Head ở trên, body ở dưới. DOCTYPE là khai báo đầu file ạ.",
      en:"HTML has head and body. Head is on top, body below. DOCTYPE is the declaration at the start."},
weakWhy:{vi:"Chỉ mô tả vị trí, không nói CHỨC NĂNG của từng phần, không nhắc standards/quirks mode. Giảng viên sẽ gặng ngay 'vậy head chứa gì?' và em dễ tắc.",
         en:"Describes positions only, not the ROLE of each part, and never mentions standards/quirks mode. The lecturer will immediately press 'so what goes in head?' and you may stall."},
goodWhy:{vi:"Gọi đúng tên từng thành phần, giải thích chức năng, nêu hệ quả khi thiếu DOCTYPE và liên hệ project thật — chứng tỏ hiểu bản chất chứ không học vẹt.",
         en:"Names each component, explains its role, states the consequence of a missing DOCTYPE, and ties it to a real project — proof of understanding, not memorization."},
checklist:[
  {vi:"Nêu đúng thứ tự: DOCTYPE → html (lang) → head + body",en:"Correct order: DOCTYPE → html (lang) → head + body"},
  {vi:"head = metadata (charset, title, link CSS), không hiển thị trực tiếp",en:"head = metadata (charset, title, CSS link), not directly visible"},
  {vi:"body = toàn bộ nội dung hiển thị",en:"body = all visible content"},
  {vi:"DOCTYPE khai báo HTML5, bật standards mode; thiếu → quirks mode",en:"DOCTYPE declares HTML5, enables standards mode; missing → quirks mode"},
  {vi:"DOCTYPE không phải thẻ, không đóng; lang giúp accessibility",en:"DOCTYPE is not a tag and never closed; lang helps accessibility"}
]},
cheat:{vi:"Thứ tự: DOCTYPE → html lang → head (metadata) + body (nội dung). Thiếu DOCTYPE = quirks mode.",
       en:"Order: DOCTYPE → html lang → head (metadata) + body (content). No DOCTYPE = quirks mode."},
cheatCode:
`<!DOCTYPE html>
<html lang="vi">
<head><meta charset="UTF-8"><title>Music Club</title></head>
<body><h1>Music Club</h1></body>
</html>`
},

/* ===== Q2 · Buổi 5–6 · Semantic HTML ===== */
{
id:"q2", num:2, diff:"medium",
session:{vi:"Buổi 5–6",en:"Sessions 5–6"},
title:{vi:"Semantic HTML: header, nav, main, footer — vì sao không chỉ dùng div?",en:"Semantic HTML: header, nav, main, footer — why not just div?"},
question:{
  vi:"Semantic HTML là gì? Khi dựng bố cục trang Music Club, vì sao nên dùng <code>header, nav, main, section, footer</code> thay vì chỉ dùng <code>div</code>?",
  en:"What is semantic HTML? When laying out the Music Club page, why use <code>header, nav, main, section, footer</code> instead of only <code>div</code>?"
},
definition:{
  en:"Semantic elements clearly describe their meaning and role to both the browser and the developer — <nav> means navigation, <main> means the dominant content of the page.",
  vi:"Phần tử semantic (ngữ nghĩa) là thẻ tự mô tả vai trò của nội dung bên trong — <code>&lt;nav&gt;</code> là điều hướng, <code>&lt;main&gt;</code> là nội dung chính. <code>&lt;div&gt;</code> thì 'trung tính', không nói lên điều gì."
},
theory:[
  {h:{vi:"Vì sao cần semantic?",en:"Why semantic?"},
   p:{vi:"Ba lý do chính: <strong>(1) Accessibility</strong> — screen reader dùng các thẻ này làm <strong>landmarks</strong> (mốc định hướng), người khiếm thị có thể nhảy thẳng tới nav hoặc main thay vì nghe đọc từ đầu. <strong>(2) SEO</strong> — search engine hiểu đâu là nội dung chính, đâu là menu, đâu là chân trang. <strong>(3) Dễ đọc, dễ bảo trì</strong> — nhìn source là biết bố cục, không phải đoán <code>div class=\"top-thing\"</code> là gì.",
      en:"Three main reasons: <strong>(1) Accessibility</strong> — screen readers use these tags as <strong>landmarks</strong>, so blind users can jump straight to nav or main instead of listening from the top. <strong>(2) SEO</strong> — search engines understand what is main content, menu, or footer. <strong>(3) Readability & maintenance</strong> — the source reveals the layout; no guessing what <code>div class=\"top-thing\"</code> means."}},
  {h:{vi:"Bản đồ semantic cho Music Club",en:"A semantic map for Music Club"},
   p:{vi:"<code>&lt;header&gt;</code> = logo + tên CLB; <code>&lt;nav&gt;</code> = menu index/about/contact; <code>&lt;main&gt;</code> = nội dung chính, <strong>chỉ MỘT thẻ main hiển thị mỗi trang</strong>; <code>&lt;section&gt;</code> = nhóm theo chủ đề, nên có heading riêng (vd 'Lịch hoạt động'); <code>&lt;article&gt;</code> = nội dung độc lập tự đứng được (vd một bài viết về buổi diễn); <code>&lt;footer&gt;</code> = bản quyền, liên hệ. <code>&lt;header&gt;/&lt;footer&gt;</code> cũng có thể nằm trong một article, không chỉ ở đầu/cuối trang.",
      en:"<code>&lt;header&gt;</code> = logo + club name; <code>&lt;nav&gt;</code> = the index/about/contact menu; <code>&lt;main&gt;</code> = dominant content, <strong>only ONE visible main per page</strong>; <code>&lt;section&gt;</code> = a thematic group that should have its own heading (e.g. 'Schedule'); <code>&lt;article&gt;</code> = self-contained content (e.g. a gig write-up); <code>&lt;footer&gt;</code> = copyright, contact. <code>&lt;header&gt;/&lt;footer&gt;</code> can also live inside an article, not only at page top/bottom."}},
  {h:{vi:"Vậy div còn dùng khi nào?",en:"So when is div still right?"},
   p:{vi:"Khi chỉ cần một <strong>container trung tính</strong> để styling hoặc gom nhóm bằng CSS (vd <code>div class=\"card\"</code>) mà không mang ý nghĩa nội dung. Semantic nói 'ĐÂY LÀ GÌ', div nói 'đây là một cái hộp'. Dùng section thay div chỉ để có hộp là lạm dụng semantic.",
      en:"When you just need a <strong>neutral container</strong> for styling or CSS grouping (e.g. <code>div class=\"card\"</code>) with no content meaning. Semantic says 'THIS IS WHAT IT IS'; div says 'this is a box'. Using section purely as a styling box is semantic abuse."}}
],
analogy:{
  vi:"Trường học không chỉ có các phòng trống giống hệt nhau (div) — mỗi phòng gắn biển: 'Phòng Hiệu trưởng', 'Thư viện', 'Căn tin' (semantic). Khách mới đến (screen reader, Google) nhìn biển là biết đi đâu, không cần mở từng cửa.",
  en:"A school is not identical empty rooms (div) — each room has a sign: 'Principal', 'Library', 'Canteen' (semantic). New visitors (screen readers, Google) read the signs and know where to go without opening every door."
},
compare:{
  caption:{vi:"div 'trung tính' vs thẻ semantic",en:"Neutral div vs semantic tags"},
  head:[{vi:"Cách viết",en:"Markup"},{vi:"Trình duyệt / screen reader hiểu",en:"Browser / screen reader understands"},{vi:"Khi nào dùng",en:"When to use"}],
  rows:[
    [{vi:"<code>&lt;div class=\"menu\"&gt;</code>",en:"<code>&lt;div class=\"menu\"&gt;</code>"},{vi:"Một hộp vô danh",en:"An anonymous box"},{vi:"Chỉ để styling",en:"Styling only"}],
    [{vi:"<code>&lt;nav&gt;</code>",en:"<code>&lt;nav&gt;</code>"},{vi:"Landmark điều hướng — nhảy tới được",en:"Navigation landmark — jumpable"},{vi:"Menu chính của trang",en:"The page's main menu"}],
    [{vi:"<code>&lt;div id=\"content\"&gt;</code>",en:"<code>&lt;div id=\"content\"&gt;</code>"},{vi:"Vẫn là hộp vô danh",en:"Still an anonymous box"},{vi:"Không nên thay cho main",en:"Should not replace main"}],
    [{vi:"<code>&lt;main&gt;</code>",en:"<code>&lt;main&gt;</code>"},{vi:"Nội dung chính, duy nhất 1 trang",en:"Dominant content, one per page"},{vi:"Bọc phần ruột của trang",en:"Wraps the page's core content"}]
  ]
},
example:{file:"music-club / index.html",code:
`<body>
  <header> <!-- club identity -->
    <h1>Music Club</h1>
    <p>International School — VNU</p>
  </header>

  <nav aria-label="Main menu"> <!-- navigation landmark -->
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  </nav>

  <main> <!-- ONE main per page -->
    <section> <!-- thematic group with its own heading -->
      <h2>Upcoming events</h2>
      <article> <!-- self-contained item -->
        <h3>Acoustic Night — Nov 28</h3>
        <p>Open stage, Room B201, 6pm.</p>
      </article>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Music Club, IS-VNU</p>
  </footer>
</body>`},
lecture:{
steps:[
  {code:
`<header>
  <h1>Music Club</h1>
  <p>International School — VNU</p>
</header>`,
   say:{vi:"Dựng khung nhà từ biển tên trước: <code>header</code> chứa danh tính CLB. Screen reader nghe 'banner landmark' là biết đây là phần đầu trang.",
        en:"Start the building with its nameplate: <code>header</code> holds the club identity. A screen reader announces 'banner landmark' — users know this is the page head."},
   note:{vi:"Gặng: 'header có bắt buộc ở đầu trang không?' → thường ở đầu, nhưng header còn dùng được trong article (đầu bài viết).",
         en:"Follow-up: 'Must header be at the page top?' → usually, but header also works inside an article (the article's own head)."}},
  {code:
`<header>
  <h1>Music Club</h1>
  <p>International School — VNU</p>
</header>
<nav aria-label="Main menu">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</nav>`,
   say:{vi:"Thêm <code>nav</code> — menu 3 trang của project. Người dùng screen reader bấm phím tắt là nhảy thẳng tới đây, không phải nghe đọc hết header. <code>aria-label</code> đặt tên cho vùng điều hướng.",
        en:"Add <code>nav</code> — the project's three-page menu. Screen-reader users jump straight here with a shortcut instead of listening through the header. <code>aria-label</code> names the navigation region."},
   note:{vi:"Không phải nhóm link nào cũng cần nav — chỉ các khối điều hướng chính. Dãy link nhỏ trong footer thường không cần.",
         en:"Not every link group needs nav — only major navigation blocks. A small footer link row usually does not."}},
  {code:
`<header>
  <h1>Music Club</h1>
</header>
<nav aria-label="Main menu">
  <a href="index.html">Home</a> <a href="about.html">About</a> <a href="contact.html">Contact</a>
</nav>
<main>
  <section>
    <h2>Upcoming events</h2>
    <article>
      <h3>Acoustic Night — Nov 28</h3>
      <p>Open stage, Room B201, 6pm.</p>
    </article>
  </section>
</main>`,
   say:{vi:"Phần ruột: <code>main</code> — chỉ một cái mỗi trang. Trong đó <code>section</code> 'Upcoming events' có heading riêng, và mỗi sự kiện là một <code>article</code> vì nó tự đứng được (copy ra chỗ khác vẫn có nghĩa).",
        en:"The core: <code>main</code> — only one per page. Inside, the 'Upcoming events' <code>section</code> has its own heading, and each event is an <code>article</code> because it stands alone (still meaningful if copied elsewhere)."},
   note:{vi:"Phân biệt section vs article là câu gặng hay gặp: article = độc lập (bài post, tin tức); section = nhóm theo chủ đề trong một chỉnh thể.",
         en:"section vs article is a frequent follow-up: article = independent (post, news item); section = thematic group within a whole."}},
  {code:
`<header>
  <h1>Music Club</h1>
</header>
<nav aria-label="Main menu">
  <a href="index.html">Home</a> <a href="about.html">About</a> <a href="contact.html">Contact</a>
</nav>
<main>
  <section>
    <h2>Upcoming events</h2>
    <article>
      <h3>Acoustic Night — Nov 28</h3>
      <p>Open stage, Room B201, 6pm.</p>
    </article>
  </section>
</main>
<footer>
  <p>&copy; 2026 Music Club, IS-VNU</p>
</footer>`,
   say:{vi:"Khép lại bằng <code>footer</code>. Nhìn preview: trông giống hệt trang toàn div — nhưng 'bản đồ' bên trong đã khác hoàn toàn. Đó chính là điểm của semantic: ý nghĩa, không phải hình thức.",
        en:"Close with <code>footer</code>. Look at the preview: it looks identical to an all-div page — but the internal 'map' is completely different. That is the point of semantic: meaning, not appearance."},
   note:{vi:"Nếu giảng viên hỏi 'khác gì div về hiển thị?' → mặc định KHÔNG khác gì về hình; khác ở accessibility tree, SEO và ngữ nghĩa source.",
         en:"If asked 'how does it differ from div visually?' → by default NOT at all; the difference is in the accessibility tree, SEO and source semantics."}}
],
errors:[
  {label:{vi:"Thay tất cả bằng div",en:"Replace everything with div"},
   code:
`<div class="header"><h1>Music Club</h1></div>
<div class="nav">
  <a href="index.html">Home</a> <a href="about.html">About</a>
</div>
<div class="main">
  <div class="section">
    <h2>Upcoming events</h2>
    <p>Acoustic Night — Nov 28</p>
  </div>
</div>
<div class="footer"><p>&copy; 2026 Music Club</p></div>`,
   explain:{vi:"Preview trông Y HỆT bản semantic — và đó là bài học: semantic không đổi hình thức, nó đổi ý nghĩa. Với bản div này, screen reader không có landmark nào để nhảy, Google khó nhận nội dung chính. 'Chạy được' không có nghĩa là 'đúng'.",
            en:"The preview looks IDENTICAL to the semantic version — and that is the lesson: semantic changes meaning, not appearance. With this div version, screen readers have no landmarks to jump to and Google struggles to find the main content. 'It works' does not mean 'it is right'."}},
  {label:{vi:"Hai thẻ main",en:"Two main elements"},
   code:
`<header><h1>Music Club</h1></header>
<main>
  <h2>Upcoming events</h2>
  <p>Acoustic Night — Nov 28.</p>
</main>
<main> <!-- BUG: a second main -->
  <h2>Members</h2>
  <p>12 active members.</p>
</main>
<footer><p>&copy; 2026 Music Club</p></footer>`,
   explain:{vi:"HTML chỉ cho phép MỘT thẻ <code>main</code> hiển thị mỗi trang. Hai main làm screen reader và công cụ SEO bối rối 'đâu mới là nội dung chính?'. Muốn hai khối? Dùng hai <code>section</code> bên trong một main.",
            en:"HTML allows only ONE visible <code>main</code> per page. Two mains confuse screen readers and SEO tools about 'which is the dominant content?'. Need two blocks? Use two <code>section</code>s inside a single main."}}
]},
mistakes:[
  {title:{vi:"Dùng section như một chiếc hộp styling",en:"Using section as a styling box"},
   wrong:
`<section class="blue-box">
  <img src="img/logo.png" alt="Music Club logo">
</section>`,
   right:
`<div class="blue-box">
  <img src="img/logo.png" alt="Music Club logo">
</div>`,
   why:{vi:"<code>section</code> dành cho nhóm nội dung THEO CHỦ ĐỀ và nên có heading. Ở đây chỉ cần hộp màu xanh để chứa logo → <code>div</code> mới đúng. Lạm dụng section làm loãng ý nghĩa ngữ nghĩa của trang.",
        en:"<code>section</code> is for THEMATIC content groups and should have a heading. Here you just need a blue box for a logo → <code>div</code> is correct. Overusing section dilutes the page's semantic meaning."}},
  {title:{vi:"Nghĩ rằng header/footer chỉ xuất hiện một lần",en:"Believing header/footer may appear only once"},
   wrong:
`<!-- "header only at page top, so inside article use div" -->
<article>
  <div class="article-head"><h3>Acoustic Night</h3></div>
  <p>Review of the show...</p>
</article>`,
   right:
`<article>
  <header><h3>Acoustic Night</h3></header>
  <p>Review of the show...</p>
  <footer>Posted by Linh — Nov 29</footer>
</article>`,
   why:{vi:"<code>header</code>/<code>footer</code> mô tả phần đầu/kết của NỘI DUNG GẦN NHẤT — có thể là cả trang hoặc một article. Bài viết có header (tiêu đề) và footer (tác giả, ngày) riêng là hoàn toàn chuẩn.",
        en:"<code>header</code>/<code>footer</code> describe the head/end of the NEAREST content — the whole page or one article. An article with its own header (title) and footer (author, date) is perfectly standard."}},
  {title:{vi:"Bọc main quanh cả header và nav",en:"Wrapping main around header and nav"},
   wrong:
`<main>
  <header><h1>Music Club</h1></header>
  <nav>...</nav>
  <section>...</section>
</main>`,
   right:
`<header><h1>Music Club</h1></header>
<nav>...</nav>
<main>
  <section>...</section>
</main>`,
   why:{vi:"<code>main</code> chỉ chứa nội dung CHÍNH, riêng biệt của trang — không chứa những phần lặp lại qua các trang như header, nav, footer. Bọc tất cả vào main khiến landmark mất tác dụng.",
        en:"<code>main</code> holds only the page's unique dominant content — not parts repeated across pages like header, nav, footer. Wrapping everything in main defeats the landmark's purpose."}}
],
oral:{
good:{vi:"Semantic HTML là dùng thẻ tự mô tả vai trò nội dung: header là phần đầu, nav là điều hướng, main là nội dung chính, footer là chân trang. Em dùng chúng thay vì div vì screen reader dựa vào đó làm landmarks để người khiếm thị nhảy nhanh giữa các vùng, search engine hiểu cấu trúc trang tốt hơn cho SEO, và chính em đọc lại source cũng dễ bảo trì. Trang Music Club của em có đúng bộ khung đó ạ.",
      en:"Semantic HTML means tags that describe their content's role: header is the page head, nav is navigation, main is the dominant content, footer is the page foot. I use them instead of div because screen readers turn them into landmarks so blind users jump between regions, search engines understand the structure better for SEO, and the source is easier for me to maintain. My Music Club page uses exactly that skeleton."},
followQ:{vi:"Vậy khi nào em vẫn dùng div? Và section khác article chỗ nào?",
         en:"So when do you still use div? And how does section differ from article?"},
followA:{vi:"Dạ em dùng div khi chỉ cần container trung tính để styling, không mang ý nghĩa nội dung — ví dụ div class='card'. Còn section là nhóm nội dung theo chủ đề trong một chỉnh thể và nên có heading; article là nội dung độc lập, tách ra đứng riêng vẫn có nghĩa, như một bài viết về đêm diễn Acoustic Night ạ.",
         en:"I use div when I only need a neutral styling container with no content meaning — like div class='card'. A section is a thematic group within a whole and should have a heading; an article is independent content that still makes sense on its own, like a write-up of the Acoustic Night gig."},
weak:{vi:"Semantic là mấy thẻ mới như header, footer. Dùng cho đẹp và hiện đại hơn div ạ.",
      en:"Semantic is the newer tags like header, footer. They look nicer and more modern than div."},
weakWhy:{vi:"Sai bản chất: semantic KHÔNG đổi giao diện mặc định. Trả lời 'cho đẹp' chứng tỏ chưa hiểu — giảng viên sẽ hỏi ngay 'đẹp chỗ nào, khác gì div khi render?' và em sẽ lộ.",
         en:"Misses the essence: semantic does NOT change default appearance. Answering 'for looks' proves no understanding — the lecturer will ask 'nicer how? any rendering difference from div?' and you are exposed."},
goodWhy:{vi:"Nêu đủ 3 lợi ích (accessibility, SEO, maintainability), giải thích cơ chế landmarks, phân biệt được section/article và biết khi nào div vẫn đúng — mức hiểu vững.",
         en:"Covers all three benefits (accessibility, SEO, maintainability), explains the landmark mechanism, distinguishes section/article, and knows when div is still right — solid understanding."},
checklist:[
  {vi:"Định nghĩa: thẻ tự mô tả vai trò nội dung",en:"Definition: tags describe their content's role"},
  {vi:"Accessibility: landmarks cho screen reader",en:"Accessibility: landmarks for screen readers"},
  {vi:"SEO + dễ đọc/bảo trì source",en:"SEO + readable, maintainable source"},
  {vi:"Chỉ MỘT main mỗi trang; section nên có heading",en:"Only ONE main per page; section should have a heading"},
  {vi:"div vẫn đúng khi chỉ cần container styling; article = độc lập",en:"div is right for pure styling containers; article = independent"}
]},
cheat:{vi:"Semantic = thẻ nói lên vai trò (landmarks). Lợi ích: a11y + SEO + dễ đọc. Một main duy nhất; div cho hộp styling.",
       en:"Semantic = tags state their role (landmarks). Wins: a11y + SEO + readability. One main only; div for styling boxes."},
cheatCode:
`<header>…</header>
<nav>…</nav>
<main><section><h2>…</h2></section></main>
<footer>…</footer>`
},

/* ===== Q3 · Buổi 3 · Block vs inline ===== */
{
id:"q3", num:3, diff:"easy",
session:{vi:"Buổi 3",en:"Session 3"},
title:{vi:"Block vs inline elements — div khác span thế nào?",en:"Block vs inline elements — how do div and span differ?"},
question:{
  vi:"Phân biệt block-level và inline elements. Cho ví dụ mỗi loại trong trang Music Club. <code>div</code> và <code>span</code> khác nhau ra sao?",
  en:"Distinguish block-level from inline elements. Give examples of each on the Music Club page. How do <code>div</code> and <code>span</code> differ?"
},
definition:{
  en:"Block-level elements start on a new line and stretch to the full available width; inline elements flow within a line and take only the width their content needs.",
  vi:"Phần tử block chiếm trọn một hàng ngang và tự xuống dòng mới; phần tử inline chảy trong dòng văn bản, chỉ chiếm chiều rộng vừa đủ nội dung. Đây là hành vi mặc định — CSS có thể thay đổi bằng thuộc tính <code>display</code>."
},
theory:[
  {h:{vi:"Hai 'tính cách' của phần tử",en:"Two element 'personalities'"},
   p:{vi:"<strong>Block</strong>: luôn bắt đầu hàng mới, rộng hết mức có thể, chấp nhận đặt <code>width/height</code> và <code>margin</code> cả 4 phía. Ví dụ: <code>p, div, h1–h6, ul, ol, table, section</code>. <strong>Inline</strong>: nằm chung hàng với chữ xung quanh, rộng vừa đủ nội dung, <code>width/height</code> KHÔNG có tác dụng, margin chỉ ăn theo chiều ngang. Ví dụ: <code>a, strong, em, span, code</code>.",
      en:"<strong>Block</strong>: always starts a new line, stretches to full available width, accepts <code>width/height</code> and margins on all four sides. Examples: <code>p, div, h1–h6, ul, ol, table, section</code>. <strong>Inline</strong>: sits in the same line as surrounding text, only as wide as its content, <code>width/height</code> has NO effect, margins only apply horizontally. Examples: <code>a, strong, em, span, code</code>."}},
  {h:{vi:"Trường hợp đặc biệt: img",en:"The special case: img"},
   p:{vi:"<code>&lt;img&gt;</code> là <strong>inline replaced element</strong> — về dòng chảy nó là inline (nằm chung hàng với chữ), nhưng vì là 'nội dung được thay thế' từ file ngoài nên vẫn đặt được <code>width/height</code>. Đây là câu gặng bẫy kinh điển: 'img là block hay inline?'",
      en:"<code>&lt;img&gt;</code> is an <strong>inline replaced element</strong> — in flow it is inline (sits beside text), but because its content is 'replaced' from an external file, you CAN set <code>width/height</code>. A classic trap follow-up: 'Is img block or inline?'"}},
  {h:{vi:"div vs span — cùng trung tính, khác dòng chảy",en:"div vs span — equally neutral, different flow"},
   p:{vi:"Cả hai đều không mang ngữ nghĩa, chỉ làm hộp chứa. <code>div</code> là hộp <strong>block</strong> — gom các khối lớn (một card thành viên, một khu vực). <code>span</code> là hộp <strong>inline</strong> — bọc một mẩu chữ giữa câu để tô màu, gắn class. Và nhớ: <code>display: block / inline / inline-block</code> trong CSS đổi được 'tính cách' mặc định bất cứ lúc nào.",
      en:"Both are non-semantic containers. <code>div</code> is a <strong>block</strong> box — groups large chunks (a member card, a page region). <code>span</code> is an <strong>inline</strong> box — wraps a fragment mid-sentence to color it or attach a class. And remember: CSS <code>display: block / inline / inline-block</code> can change the default 'personality' at any time."}}
],
analogy:{
  vi:"Block như những toa tàu — mỗi toa chiếm trọn đường ray, nối nhau thành hàng dọc. Inline như hành khách trong một toa — đứng cạnh nhau trên cùng một hàng. <code>img</code> là hành khách đặc biệt mang vali to: vẫn đứng chung hàng nhưng chiếm chỗ theo kích thước vali.",
  en:"Blocks are train cars — each takes the whole track, stacking one per line. Inlines are passengers inside a car — standing side by side on the same row. <code>img</code> is a passenger with a big suitcase: still in the row, but sized by the suitcase."
},
compare:{
  caption:{vi:"Block vs inline — bảng nhớ nhanh",en:"Block vs inline — quick memory table"},
  head:[{vi:"Tiêu chí",en:"Criterion"},{vi:"Block",en:"Block"},{vi:"Inline",en:"Inline"}],
  rows:[
    [{vi:"Xuống dòng mới?",en:"Starts a new line?"},{vi:"Có",en:"Yes"},{vi:"Không — chảy trong dòng",en:"No — flows in the line"}],
    [{vi:"Chiều rộng",en:"Width"},{vi:"Hết khổ ngang chứa nó",en:"Full width of its container"},{vi:"Vừa đủ nội dung",en:"Only as wide as content"}],
    [{vi:"width / height",en:"width / height"},{vi:"Có tác dụng",en:"Works"},{vi:"Không tác dụng (trừ replaced như img)",en:"No effect (except replaced like img)"}],
    [{vi:"margin dọc",en:"Vertical margin"},{vi:"Có tác dụng",en:"Works"},{vi:"Không đẩy dòng khác",en:"Does not push other lines"}],
    [{vi:"Ví dụ",en:"Examples"},{vi:"<code>p, div, h1, ul, table</code>",en:"<code>p, div, h1, ul, table</code>"},{vi:"<code>a, strong, em, span</code>",en:"<code>a, strong, em, span</code>"}]
  ]
},
example:{file:"music-club / about.html (fragment)",code:
`<style>
  /* visualize each element's box */
  .b{background:#e0dcff;border:1px solid #5b4ddb}
  .i{background:#ffe1f1;border:1px solid #e6399b}
</style>

<p class="b">Paragraph = block: takes the whole line.</p>
<p class="b">Another block: always starts on a new line.</p>

<p class="b">Inline elements live inside this block:
  <span class="i">span</span>
  <strong class="i">strong</strong>
  <em class="i">em</em>
  <a class="i" href="contact.html">a link</a>
  — all side by side in one line.
</p>

<div class="b">div = a block container
  <span class="i">span = an inline container inside it</span>
</div>`},
lecture:{
steps:[
  {code:
`<style>
  .b{background:#e0dcff;border:1px solid #5b4ddb}
</style>
<p class="b">First paragraph.</p>
<p class="b">Second paragraph.</p>`,
   say:{vi:"Thí nghiệm đầu tiên: hai thẻ <code>p</code> tô nền tím. Nhìn preview — dù viết liền nhau trong code, mỗi p vẫn chiếm TRỌN một hàng. Đó là block: luôn xuống dòng mới, rộng hết khổ.",
        en:"First experiment: two <code>p</code> tags with violet background. In the preview, even written back-to-back in code, each p takes a WHOLE line. That is block: always a new line, full width."},
   note:{vi:"Gặng: 'Muốn hai p nằm cạnh nhau?' → không đổi thẻ, dùng CSS display hoặc flex — bản chất HTML vẫn là block.",
         en:"Follow-up: 'Want two p side by side?' → keep the tags, use CSS display or flex — their HTML nature is still block."}},
  {code:
`<style>
  .b{background:#e0dcff;border:1px solid #5b4ddb}
  .i{background:#ffe1f1;border:1px solid #e6399b}
</style>
<p class="b">Inline inside a block:
  <span class="i">span</span>
  <strong class="i">strong</strong>
  <a class="i" href="#">link</a>
</p>`,
   say:{vi:"Giờ thả các phần tử inline (nền hồng) vào trong p: <code>span</code>, <code>strong</code>, <code>a</code>. Chúng nằm CẠNH NHAU trên cùng dòng, rộng vừa đủ chữ. Inline như chữ viết — chảy theo dòng.",
        en:"Now drop inline elements (pink) into the p: <code>span</code>, <code>strong</code>, <code>a</code>. They sit SIDE BY SIDE on one line, only as wide as their text. Inline behaves like writing — it flows."},
   note:{vi:"Để ý khoảng trắng giữa các thẻ inline trong code tạo ra khe hở nhỏ trên màn hình — đó là khoảng trắng text, không phải margin.",
         en:"Notice the whitespace between inline tags in code creates a small visible gap — that is text whitespace, not margin."}},
  {code:
`<style>
  .b{background:#e0dcff;border:1px solid #5b4ddb}
  .i{background:#ffe1f1;border:1px solid #e6399b}
  .try-width{width:300px;height:60px}
</style>
<p class="b">
  <span class="i try-width">span with width:300px — no effect!</span>
</p>
<div class="b try-width">div with width:300px — works.</div>`,
   say:{vi:"Thí nghiệm 'phá án': cùng đặt <code>width:300px; height:60px</code> cho span và div. Div nghe lời, span phớt lờ — vì inline không nhận width/height. Muốn span nhận? Đổi <code>display:inline-block</code> hoặc <code>block</code>.",
        en:"The detective experiment: give both span and div <code>width:300px; height:60px</code>. The div obeys; the span ignores it — inline does not accept width/height. Want the span to obey? Switch <code>display:inline-block</code> or <code>block</code>."},
   note:{vi:"Đây là lỗi sinh viên hay gặp nhất buổi 3: 'em đặt width cho span mà không ăn'. Giờ em đã tự mắt thấy vì sao.",
         en:"The most common Session-3 bug: 'I set width on span and nothing happens'. Now you have seen why with your own eyes."}},
  {code:
`<style>
  .b{background:#e0dcff;border:1px solid #5b4ddb}
  .i{background:#ffe1f1;border:1px solid #e6399b}
</style>
<div class="b">
  <h2>Members</h2>
  <p><span class="i">Linh</span> — vocals,
     <span class="i">Minh</span> — guitar.</p>
</div>`,
   say:{vi:"Ứng dụng thật vào Music Club: <code>div</code> block làm khung khu vực 'Members', bên trong <code>span</code> inline bọc từng tên để sau này tô màu theo nhạc cụ. Block gom khối — inline bọc mẩu chữ. Đúng việc, đúng thẻ.",
        en:"Real Music Club usage: a block <code>div</code> frames the 'Members' region; inside, inline <code>span</code>s wrap each name so we can later color them by instrument. Block groups chunks — inline wraps fragments. Right job, right tag."},
   note:{vi:"Câu gặng tổng hợp: 'img là block hay inline?' → inline replaced element: chảy inline nhưng đặt được width/height.",
         en:"Synthesis follow-up: 'Is img block or inline?' → inline replaced element: flows inline but accepts width/height."}}
],
errors:[
  {label:{vi:"Đặt width cho span",en:"Setting width on a span"},
   code:
`<style>
  .tag{background:#ffe1f1;width:250px;height:50px;border:1px solid #e6399b}
</style>
<p>Instrument: <span class="tag">Guitar</span> <span class="tag">Drums</span></p>
<p>(The spans ignore width:250px and height:50px — they stay content-sized.)</p>`,
   explain:{vi:"Hai span vẫn nhỏ xíu dù CSS ghi rõ 250×50px: phần tử inline thuần không nhận width/height. Cách sửa: thêm <code>display:inline-block</code> vào class .tag — thử tự sửa trong editor để thấy chúng 'phồng' ra đúng kích thước!",
            en:"Both spans stay tiny despite CSS saying 250×50px: pure inline elements ignore width/height. Fix: add <code>display:inline-block</code> to .tag — edit it yourself in the editor and watch them grow to size!"}},
  {label:{vi:"Lồng p trong p",en:"Nesting p inside p"},
   code:
`<p>First paragraph opens.
  <p>BUG: a second p inside the first!</p>
</p>
<p>Where did this text land?</p>`,
   explain:{vi:"<code>p</code> không được chứa block khác (kể cả p). Trình duyệt tự đóng p đầu tiên khi gặp p thứ hai, rồi các thẻ đóng thừa bị bỏ qua — cây DOM bị 'xé' khác hẳn ý đồ, text nhảy lung tung. Quy tắc: block lồng nhau phải đúng loài (div chứa p thì được).",
            en:"<code>p</code> cannot contain another block (including p). The browser auto-closes the first p at the second one and ignores stray closing tags — the DOM tree gets torn apart versus your intent, and text jumps around. Rule: nest blocks legally (div containing p is fine)."}}
]},
mistakes:[
  {title:{vi:"Kỳ vọng margin dọc đẩy được dòng khác trên inline",en:"Expecting vertical margins to push lines on inline"},
   wrong:
`<p>Line one
  <span style="margin-top:40px">pushed?</span>
</p>`,
   right:
`<p>Line one
  <span style="display:inline-block;margin-top:40px">pushed!</span>
</p>`,
   why:{vi:"Margin trên/dưới của inline thuần không đẩy các dòng xung quanh. Muốn có hiệu lực, chuyển sang <code>inline-block</code> (vẫn chảy trong dòng nhưng nhận đủ box properties) hoặc <code>block</code>.",
        en:"Top/bottom margins on pure inline do not push surrounding lines. To make them effective, switch to <code>inline-block</code> (still flows in-line but accepts full box properties) or <code>block</code>."}},
  {title:{vi:"Dùng div bọc một từ giữa câu",en:"Using div to wrap one word mid-sentence"},
   wrong:
`<p>Our <div class="hl">guitarist</div> Minh plays since 2024.</p>`,
   right:
`<p>Our <span class="hl">guitarist</span> Minh plays since 2024.</p>`,
   why:{vi:"<code>div</code> là block — nó xé câu làm ba hàng và còn không hợp lệ bên trong <code>p</code>. Bọc một mẩu chữ giữa câu phải dùng <code>span</code> (inline). Chọn hộp theo dòng chảy, không theo thói quen.",
        en:"<code>div</code> is block — it tears the sentence into three lines and is invalid inside <code>p</code>. Wrapping a mid-sentence fragment needs <code>span</code> (inline). Pick the box by flow, not habit."}},
  {title:{vi:"Nghĩ img là block vì đặt được width",en:"Assuming img is block because width works"},
   wrong:
`<!-- "img takes width, so it must be block" -->
<img src="img/band.jpg" alt="Band on stage" width="300">`,
   right:
`<!-- img is INLINE REPLACED: flows in a line,
     yet accepts width/height -->
<p>Poster: <img src="img/band.jpg" alt="Band on stage" width="120"> see you Friday!</p>`,
   why:{vi:"Đặt được width không biến img thành block. Nó là <strong>inline replaced element</strong>: vẫn nằm chung dòng với chữ (để ảnh cạnh chữ trong câu sẽ thấy), nhưng kích thước do nội dung thay thế quyết định nên width/height có hiệu lực.",
        en:"Accepting width does not make img block. It is an <strong>inline replaced element</strong>: it still sits in the text line (place it mid-sentence to see), but its size comes from the replaced content, so width/height apply."}}
],
oral:{
good:{vi:"Block elements như p, div, h1, ul luôn bắt đầu một hàng mới và chiếm hết chiều rộng khả dụng, đặt được width/height và margin mọi phía. Inline elements như a, strong, em, span chảy trong dòng, chỉ rộng vừa đủ nội dung và không nhận width/height. Trong trang about.html của Music Club, em dùng div làm khung khối giới thiệu, còn span bọc tên thành viên giữa câu để tô màu ạ.",
      en:"Block elements like p, div, h1, ul always start a new line and take the full available width; they accept width/height and margins on all sides. Inline elements like a, strong, em, span flow within a line, are only as wide as their content, and ignore width/height. On Music Club's about.html I use div to frame the intro block and span to wrap member names mid-sentence for coloring."},
followQ:{vi:"Thế img là block hay inline? Và làm sao biến một span thành block?",
         en:"So is img block or inline? And how do you turn a span into a block?"},
followA:{vi:"Dạ img là inline replaced element — về dòng chảy nó inline, nằm chung hàng với chữ, nhưng vì nội dung được thay thế từ file ảnh nên vẫn đặt được width/height. Còn muốn span thành block thì dùng CSS: <code>display:block</code>, hoặc <code>inline-block</code> nếu vẫn muốn nó nằm trong dòng ạ.",
         en:"img is an inline replaced element — in flow it is inline, sitting beside text, but since its content is replaced from an image file it still accepts width/height. To make a span block, use CSS: <code>display:block</code>, or <code>inline-block</code> if it should stay in the line."},
weak:{vi:"Block là to, inline là nhỏ. Div là block còn span là inline ạ.",
      en:"Block is big, inline is small. Div is block and span is inline."},
weakWhy:{vi:"'To/nhỏ' không phải bản chất — block rộng hết khổ dù nội dung một chữ, inline có thể rất dài. Không nêu hành vi xuống dòng, width/height, nên gặp câu gặng về img là tắc ngay.",
         en:"'Big/small' is not the essence — a block spans full width even with one word; an inline can be very long. No mention of line-breaking or width/height behavior, so the img follow-up will stall you."},
goodWhy:{vi:"Định nghĩa bằng HÀNH VI (xuống dòng, chiều rộng, box properties) chứ không bằng cảm giác, có ví dụ Music Club cụ thể, và xử lý gọn hai câu gặng khó nhất (img, display).",
         en:"Defines by BEHAVIOR (line breaks, width, box properties) not feelings, gives concrete Music Club examples, and cleanly handles the two hardest follow-ups (img, display)."},
checklist:[
  {vi:"Block: hàng mới + rộng hết khổ; inline: chảy trong dòng, rộng vừa đủ",en:"Block: new line + full width; inline: flows in line, content width"},
  {vi:"width/height: block nhận, inline thuần không nhận",en:"width/height: block accepts, pure inline does not"},
  {vi:"Ví dụ đúng mỗi loại (p/div/h1 vs a/strong/span)",en:"Correct examples of each (p/div/h1 vs a/strong/span)"},
  {vi:"img = inline replaced element",en:"img = inline replaced element"},
  {vi:"CSS display đổi được block ↔ inline",en:"CSS display can switch block ↔ inline"}
]},
cheat:{vi:"Block = hàng mới, full width, nhận width/height. Inline = trong dòng, không nhận width/height. img = inline replaced. CSS display đổi được.",
       en:"Block = new line, full width, accepts width/height. Inline = in-line, ignores width/height. img = inline replaced. CSS display switches them."},
cheatCode:
`<div>block box</div>
<p>text <span>inline box</span> text</p>
span{display:inline-block} /* now width works */`
},
/* ===== Q4 · Buổi 2+4 · id vs class ===== */
{
id:"q4", num:4, diff:"medium",
session:{vi:"Buổi 2 + 4",en:"Sessions 2 + 4"},
title:{vi:"id vs class: đặt tên, chọn đúng, và thứ tự ưu tiên CSS",en:"id vs class: naming, choosing right, and CSS priority"},
question:{
  vi:"Khi nào dùng <code>id</code>, khi nào dùng <code>class</code>? Một phần tử có được mang cả hai không? Quy tắc đặt tên và thứ tự ưu tiên trong CSS ra sao?",
  en:"When do you use <code>id</code> versus <code>class</code>? Can one element carry both? What are the naming rules and the CSS priority order?"
},
definition:{
  en:"An id identifies ONE unique element within a page; a class labels a GROUP of elements that share styling or behavior. One element may have one id and many classes.",
  vi:"<code>id</code> định danh DUY NHẤT một phần tử trong trang (như số căn cước); <code>class</code> gắn nhãn cho một NHÓM phần tử dùng chung style/hành vi (như thẻ thành viên CLB). Một phần tử có tối đa một id nhưng được nhiều class."
},
theory:[
  {h:{vi:"id — duy nhất, mạnh, làm mỏ neo",en:"id — unique, strong, an anchor"},
   p:{vi:"Mỗi giá trị id chỉ xuất hiện MỘT lần trong trang. Dùng cho: phần tử độc nhất (vd <code>id=\"schedule\"</code> cho bảng lịch), đích đến của anchor link (<code>href=\"#schedule\"</code> cuộn tới đó), và móc cho JavaScript (<code>getElementById</code>). Trong CSS chọn bằng dấu thăng: <code>#schedule { … }</code>.",
      en:"Each id value appears exactly ONCE per page. Use it for: a one-of-a-kind element (e.g. <code>id=\"schedule\"</code> on the schedule table), an anchor-link target (<code>href=\"#schedule\"</code> scrolls there), and a JavaScript hook (<code>getElementById</code>). CSS selects it with a hash: <code>#schedule { … }</code>."}},
  {h:{vi:"class — tái sử dụng, xếp nhóm",en:"class — reusable, groupable"},
   p:{vi:"Một class gắn được cho bao nhiêu phần tử cũng được, và một phần tử gắn được nhiều class (cách nhau bằng khoảng trắng): <code>class=\"member guitarist\"</code>. CSS chọn bằng dấu chấm: <code>.member { … }</code>. Đây là công cụ chính để style hàng loạt — 12 thành viên Music Club cùng một class, sửa một chỗ là đổi cả loạt.",
      en:"A class can label any number of elements, and one element can carry several classes (space-separated): <code>class=\"member guitarist\"</code>. CSS selects with a dot: <code>.member { … }</code>. This is the workhorse for bulk styling — 12 Music Club members share one class; edit once, update all."}},
  {h:{vi:"Quy tắc đặt tên + specificity",en:"Naming rules + specificity"},
   p:{vi:"Tên id/class: không khoảng trắng, không bắt đầu bằng chữ số, phân biệt hoa/thường, nên dùng chữ thường nối gạch (<code>lead-singer</code>). Về độ ưu tiên CSS (<strong>specificity</strong>): <code>#id</code> mạnh hơn <code>.class</code>, class mạnh hơn selector theo thẻ. Cùng phần tử vừa có id vừa có class, rule id sẽ thắng nếu hai bên đặt cùng thuộc tính — vì vậy đừng lạm dụng id để 'đè' style, sẽ khó bảo trì.",
      en:"id/class names: no spaces, must not start with a digit, case-sensitive; prefer lowercase-hyphen (<code>lead-singer</code>). CSS priority (<strong>specificity</strong>): <code>#id</code> beats <code>.class</code>, which beats tag selectors. If one element has both and both rules set the same property, the id rule wins — so do not abuse id to 'force' styles; it hurts maintainability."}}
],
analogy:{
  vi:"Trong Music Club: <code>class=\"member\"</code> như đồng phục — ai cũng mặc được, giống nhau. <code>id=\"lead-singer\"</code> như tên riêng trên micro — chỉ một người cầm. Một người vừa mặc đồng phục (class) vừa có tên riêng (id) — hoàn toàn bình thường.",
  en:"In Music Club: <code>class=\"member\"</code> is the uniform — anyone can wear it. <code>id=\"lead-singer\"</code> is the name on a microphone — only one person holds it. A person can wear the uniform (class) AND have a personal name (id) — perfectly normal."
},
compare:{
  caption:{vi:"id vs class",en:"id vs class"},
  head:[{vi:"Tiêu chí",en:"Criterion"},{vi:"id",en:"id"},{vi:"class",en:"class"}],
  rows:[
    [{vi:"Số lần dùng trong trang",en:"Occurrences per page"},{vi:"Duy nhất 1",en:"Exactly one"},{vi:"Không giới hạn",en:"Unlimited"}],
    [{vi:"Số lượng trên 1 phần tử",en:"Per element"},{vi:"Tối đa 1",en:"At most one"},{vi:"Nhiều, cách nhau khoảng trắng",en:"Many, space-separated"}],
    [{vi:"Selector CSS",en:"CSS selector"},{vi:"<code>#ten</code>",en:"<code>#name</code>"},{vi:"<code>.ten</code>",en:"<code>.name</code>"}],
    [{vi:"Specificity",en:"Specificity"},{vi:"Cao hơn",en:"Higher"},{vi:"Thấp hơn id",en:"Lower than id"}],
    [{vi:"Việc điển hình",en:"Typical job"},{vi:"Anchor #id, getElementById, phần tử độc nhất",en:"Anchor #id, getElementById, unique element"},{vi:"Style hàng loạt, nhóm hành vi",en:"Bulk styling, behavior groups"}]
  ]
},
example:{file:"music-club / about.html (fragment)",code:
`<style>
  .member{ /* class: shared look for ALL members */
    padding:6px 10px;border:1px solid #cfc8e8;
    border-radius:8px;margin:4px 0;
  }
  #lead-singer{ /* id: ONE special element, higher specificity */
    border-color:#e6399b;background:#ffe1f1;font-weight:700;
  }
</style>

<a href="#lead-singer">Jump to the lead singer ↓</a> <!-- anchor link -->

<h2>Members</h2>
<div class="member" id="lead-singer">Linh — vocals (lead)</div>
<div class="member guitarist">Minh — guitar</div>
<div class="member">An — drums</div>
<div class="member guitarist">Tuấn — bass</div>`},
lecture:{
steps:[
  {code:
`<style>
  .member{padding:6px 10px;border:1px solid #cfc8e8;border-radius:8px;margin:4px 0}
</style>
<h2>Members</h2>
<div class="member">Linh — vocals</div>
<div class="member">Minh — guitar</div>
<div class="member">An — drums</div>`,
   say:{vi:"Bắt đầu bằng class: cả ba thành viên cùng <code>class=\"member\"</code>, nên chỉ MỘT rule CSS là cả ba có khung đẹp. Đó là sức mạnh tái sử dụng của class.",
        en:"Start with class: all three members share <code>class=\"member\"</code>, so ONE CSS rule frames them all. That is the reuse power of class."},
   note:{vi:"Gặng: 'Muốn đổi màu khung cả 12 thành viên?' → sửa một rule .member. Nếu dùng id riêng từng người sẽ phải sửa 12 chỗ.",
         en:"Follow-up: 'Recolor all 12 members' borders?' → edit one .member rule. With per-person ids you would edit 12 places."}},
  {code:
`<style>
  .member{padding:6px 10px;border:1px solid #cfc8e8;border-radius:8px;margin:4px 0}
  .guitarist{color:#5b4ddb}
</style>
<h2>Members</h2>
<div class="member">Linh — vocals</div>
<div class="member guitarist">Minh — guitar</div>
<div class="member">An — drums</div>
<div class="member guitarist">Tuấn — bass</div>`,
   say:{vi:"Thêm class thứ hai: <code>class=\"member guitarist\"</code> — một phần tử mang NHIỀU class, cách nhau khoảng trắng. Minh và Tuấn nhận cả khung thành viên lẫn màu chữ của nhóm guitar.",
        en:"Add a second class: <code>class=\"member guitarist\"</code> — one element carries MANY classes, space-separated. Minh and Tuấn get both the member frame and the guitar-group text color."},
   note:{vi:"Nhớ: nhiều class cách nhau bằng khoảng trắng; KHÔNG dùng dấu chấm hay dấu phẩy trong giá trị class.",
         en:"Remember: multiple classes are space-separated; NO dots or commas inside the class attribute value."}},
  {code:
`<style>
  .member{padding:6px 10px;border:1px solid #cfc8e8;border-radius:8px;margin:4px 0}
  #lead-singer{border-color:#e6399b;background:#ffe1f1;font-weight:700}
</style>
<h2>Members</h2>
<div class="member" id="lead-singer">Linh — vocals (lead)</div>
<div class="member">Minh — guitar</div>
<div class="member">An — drums</div>`,
   say:{vi:"Giờ gắn id cho phần tử ĐỘC NHẤT: trưởng nhóm. <code>#lead-singer</code> tô hồng riêng Linh — và vì specificity của id cao hơn class, nó thắng .member ở các thuộc tính trùng nhau. Một phần tử mang cả id lẫn class là chuyện bình thường.",
        en:"Now give the ONE-OF-A-KIND element an id: the leader. <code>#lead-singer</code> paints Linh pink — and because id specificity beats class, it wins over .member on shared properties. Carrying both id and class is perfectly normal."},
   note:{vi:"Câu gặng specificity: 'Nếu .member đặt background xanh và #lead-singer đặt hồng, ô Linh màu gì?' → hồng, id mạnh hơn.",
         en:"Specificity follow-up: 'If .member sets a blue background and #lead-singer pink, what color is Linh's box?' → pink; id is stronger."}},
  {code:
`<style>
  .member{padding:6px 10px;border:1px solid #cfc8e8;border-radius:8px;margin:4px 0}
  #lead-singer{border-color:#e6399b;background:#ffe1f1;font-weight:700}
</style>
<a href="#lead-singer">Jump to the lead singer ↓</a>
<h2>Members</h2>
<div class="member">Minh — guitar</div>
<div class="member">An — drums</div>
<div class="member" id="lead-singer">Linh — vocals (lead)</div>`,
   say:{vi:"Ứng dụng thứ hai của id: mỏ neo. Bấm link <code>href=\"#lead-singer\"</code> trong preview — trang cuộn thẳng tới Linh. id còn là móc để JavaScript tìm đúng phần tử bằng getElementById.",
        en:"The second job of id: an anchor. Click <code>href=\"#lead-singer\"</code> in the preview — the page scrolls straight to Linh. id is also the hook for JavaScript to find exactly that element via getElementById."},
   note:{vi:"Nếu trang có hai id trùng nhau, anchor và getElementById chỉ tìm thấy cái ĐẦU TIÊN — đó là lỗi khó debug, xem phần minh họa lỗi.",
         en:"With duplicate ids, anchors and getElementById only find the FIRST one — a nasty debugging bug; see the error demo."}}
],
errors:[
  {label:{vi:"Trùng id hai lần",en:"Duplicate id"},
   code:
`<style>#lead-singer{background:#ffe1f1;font-weight:700}</style>
<a href="#lead-singer">Jump to lead singer</a>
<div class="member" id="lead-singer">Linh — vocals</div>
<div class="member">Minh — guitar</div>
<div class="member" id="lead-singer">BUG: same id again — Trang — vocals</div>`,
   explain:{vi:"HTML vẫn render, nhưng id 'lead-singer' giờ trỏ tới ai? Bấm link thử: chỉ nhảy tới Linh (phần tử ĐẦU), còn Trang bị lãng quên. JavaScript getElementById cũng chỉ lấy cái đầu. Id trùng là lỗi ngữ nghĩa âm thầm — hãy đổi phần tử thứ hai sang class.",
            en:"HTML still renders, but who does 'lead-singer' point to now? Click the link: it jumps only to Linh (the FIRST element); Trang is forgotten. JavaScript getElementById also returns only the first. Duplicate ids are a silent semantic bug — switch the second element to a class."}},
  {label:{vi:"Nhầm dấu # và . trong CSS",en:"Mixing up # and . in CSS"},
   code:
`<style>
  #member{border:2px solid #5b4ddb} /* BUG: # looks for an ID */
  .lead-singer{background:#ffe1f1} /* BUG: . looks for a CLASS */
</style>
<div class="member" id="lead-singer">Linh — vocals</div>
<div class="member">Minh — guitar</div>`,
   explain:{vi:"Không rule nào khớp: <code>#member</code> đi tìm id='member' (không tồn tại), <code>.lead-singer</code> đi tìm class='lead-singer' (cũng không). Kết quả: các ô trơ trọi không style. Nhớ thần chú: <strong># cho id, . cho class</strong>.",
            en:"No rule matches: <code>#member</code> hunts for id='member' (nonexistent), <code>.lead-singer</code> hunts for class='lead-singer' (also nonexistent). Result: unstyled boxes. Chant it: <strong># for id, . for class</strong>."}}
]},
mistakes:[
  {title:{vi:"Đặt tên id/class chứa khoảng trắng hoặc bắt đầu bằng số",en:"Names with spaces or starting with a digit"},
   wrong:
`<div id="lead singer">Linh</div>
<div class="2024-member">Minh</div>`,
   right:
`<div id="lead-singer">Linh</div>
<div class="member-2024">Minh</div>`,
   why:{vi:"Khoảng trắng trong id biến nó thành… không hợp lệ (và với class thì bị hiểu thành HAI class 'lead' và 'singer'). Tên bắt đầu bằng chữ số gây rắc rối khi viết selector CSS. Quy tắc an toàn: chữ thường, chữ số, gạch nối, bắt đầu bằng chữ.",
        en:"A space inside an id makes it invalid (in a class attribute it becomes TWO classes, 'lead' and 'singer'). Names starting with a digit cause trouble in CSS selectors. Safe rule: lowercase letters, digits, hyphens, starting with a letter."}},
  {title:{vi:"Dùng id cho nhiều phần tử lặp lại",en:"Using id for repeated elements"},
   wrong:
`<div id="member">Linh</div>
<div id="member">Minh</div>
<div id="member">An</div>`,
   right:
`<div class="member">Linh</div>
<div class="member">Minh</div>
<div class="member">An</div>`,
   why:{vi:"Ba thành viên là một NHÓM cùng kiểu → class. Id trùng nhau phá vỡ anchor, JavaScript và tính hợp lệ của HTML. Nguyên tắc: 'cái này có độc nhất không?' — không thì class.",
        en:"Three members are a GROUP of the same kind → class. Duplicate ids break anchors, JavaScript and HTML validity. Principle: 'Is this one-of-a-kind?' — if not, class."}},
  {title:{vi:"Lạm dụng id để đè style (specificity chiến tranh)",en:"Abusing id to force styles (specificity wars)"},
   wrong:
`<style>
  .member{color:#5b4ddb}
  #minh{color:#e6399b} /* id just to override */
</style>
<div class="member" id="minh">Minh</div>`,
   right:
`<style>
  .member{color:#5b4ddb}
  .member.featured{color:#e6399b} /* same-level, more specific */
</style>
<div class="member featured">Minh</div>`,
   why:{vi:"Dùng id chỉ để thắng class tạo ra 'specificity war' — sau này muốn đổi màu Minh phải dùng id khác mạnh hơn hoặc !important, code rối dần. Cách sạch: thêm class phụ (.member.featured) — vẫn thắng .member thường mà không leo thang độ ưu tiên.",
        en:"Using id just to beat a class starts a 'specificity war' — later recoloring Minh needs an even stronger id or !important, and the code rots. Clean way: add a modifier class (.member.featured) — it still beats plain .member without escalating priority."}}
],
oral:{
good:{vi:"Id định danh duy nhất một phần tử trong trang — em dùng cho phần tử độc nhất, làm đích anchor link như href='#schedule', và móc cho JavaScript. Class gắn cho nhóm phần tử dùng chung style, một phần tử mang được nhiều class. Trong about.html của Music Club, mọi thành viên mang class='member', riêng trưởng nhóm thêm id='lead-singer'. CSS chọn id bằng #, class bằng dấu chấm, và id có specificity cao hơn ạ.",
      en:"An id uniquely identifies one element per page — I use it for one-of-a-kind elements, as an anchor target like href='#schedule', and as a JavaScript hook. A class labels a group sharing styles, and one element can carry several classes. On Music Club's about.html every member has class='member', while the leader adds id='lead-singer'. CSS selects id with #, class with a dot, and id has higher specificity."},
followQ:{vi:"Một phần tử vừa có id vừa có class, hai rule cùng đặt color thì rule nào thắng? Vì sao?",
         en:"An element has both id and class, and both rules set color — which wins, and why?"},
followA:{vi:"Dạ rule id thắng, vì specificity của id cao hơn class — trình duyệt tính độ ưu tiên theo loại selector: id > class > thẻ. Nhưng em sẽ hạn chế dùng id để đè style, thay vào đó thêm class phụ như .member.featured để giữ CSS dễ bảo trì ạ.",
         en:"The id rule wins, because id specificity is higher than class — the browser ranks selectors: id > class > tag. But I avoid using id to force styles; instead I add a modifier class like .member.featured to keep the CSS maintainable."},
weak:{vi:"Id là tên riêng, class là tên chung. Id dùng dấu thăng, class dùng dấu chấm ạ.",
      en:"Id is a private name, class is a shared name. Id uses a hash, class uses a dot."},
weakWhy:{vi:"Đúng mẹo nhưng thiếu bản chất: không nói tính DUY NHẤT của id, không nói anchor/JS, không nói specificity. Giảng viên chỉ cần hỏi 'vì sao id phải duy nhất?' là lộ học vẹt.",
         en:"Right tricks, missing essence: no mention of id UNIQUENESS, anchors/JS, or specificity. One 'why must id be unique?' from the lecturer exposes rote learning."},
goodWhy:{vi:"Phân biệt bằng chức năng thật (anchor, JS hook, nhóm style), có ví dụ project, hiểu specificity và còn biết thực hành tốt (tránh specificity war) — câu trả lời mức điểm cao.",
         en:"Distinguishes by real function (anchor, JS hook, style groups), uses a project example, understands specificity AND good practice (avoiding specificity wars) — a top-grade answer."},
checklist:[
  {vi:"id duy nhất mỗi trang; class cho nhóm, nhiều class/phần tử",en:"id unique per page; class for groups, multiple classes per element"},
  {vi:"id làm anchor (#id) và móc JavaScript",en:"id as anchor target (#id) and JavaScript hook"},
  {vi:"CSS: #id vs .class; specificity id > class > tag",en:"CSS: #id vs .class; specificity id > class > tag"},
  {vi:"Quy tắc tên: không khoảng trắng, không mở đầu bằng số",en:"Naming: no spaces, no leading digit"},
  {vi:"Ví dụ Music Club: class member, id lead-singer",en:"Music Club example: member class, lead-singer id"}
]},
cheat:{vi:"id = duy nhất (anchor, JS, #selector, specificity cao). class = nhóm (.selector, nhiều class/phần tử). Tên: chữ-thường-gạch-nối.",
       en:"id = unique (anchor, JS, #selector, high specificity). class = group (.selector, many per element). Names: lowercase-hyphens."},
cheatCode:
`<div class="member" id="lead-singer">Linh</div>
.member{…}      /* all members */
#lead-singer{…} /* one element, wins */`
},

/* ===== Q5 · Buổi 2–3 · Link & đường dẫn ===== */
{
id:"q5", num:5, diff:"medium",
session:{vi:"Buổi 2–3",en:"Sessions 2–3"},
title:{vi:"Link & đường dẫn: tương đối vs tuyệt đối trong project Music Club",en:"Links & paths: relative vs absolute in the Music Club project"},
question:{
  vi:"Thẻ <code>a</code> hoạt động thế nào? Phân biệt đường dẫn tương đối và tuyệt đối. Từ file <code>contact.html</code>, muốn nối tới <code>css/style.css</code> và quay về <code>index.html</code> thì viết href ra sao?",
  en:"How does the <code>a</code> tag work? Distinguish relative from absolute paths. From <code>contact.html</code>, how do you write href to reach <code>css/style.css</code> and to get back to <code>index.html</code>?"
},
definition:{
  en:"A relative path is resolved starting from the current document's location; an absolute path spells out the full location (a complete URL, or a root-relative path starting with /).",
  vi:"Đường dẫn tương đối (relative path) được tính từ VỊ TRÍ FILE HIỆN TẠI; đường dẫn tuyệt đối (absolute path) ghi đầy đủ địa chỉ (URL đầy đủ, hoặc root-relative bắt đầu bằng / tính từ gốc website)."
},
theory:[
  {h:{vi:"Thẻ a và href",en:"The a tag and href"},
   p:{vi:"<code>&lt;a href=\"đích\"&gt;chữ hiển thị&lt;/a&gt;</code> tạo hyperlink. Đích có thể là: file khác (<code>about.html</code>), anchor trong trang (<code>#schedule</code>), email (<code>mailto:club@isvnu.edu.vn</code>), hoặc site ngoài (<code>https://…</code>). Mở tab mới: <code>target=\"_blank\"</code> — và nên kèm <code>rel=\"noopener\"</code> để trang mới không thao túng được trang cũ (bảo mật).",
      en:"<code>&lt;a href=\"target\"&gt;visible text&lt;/a&gt;</code> creates a hyperlink. Targets can be: another file (<code>about.html</code>), an in-page anchor (<code>#schedule</code>), email (<code>mailto:club@isvnu.edu.vn</code>), or an external site (<code>https://…</code>). Open in a new tab: <code>target=\"_blank\"</code> — and pair it with <code>rel=\"noopener\"</code> so the new page cannot manipulate the old one (security)."}},
  {h:{vi:"Giải mã đường dẫn tương đối",en:"Decoding relative paths"},
   p:{vi:"Quy tắc: trình duyệt lấy thư mục chứa file hiện tại làm gốc. <code>about.html</code> = cùng thư mục; <code>css/style.css</code> = đi xuống thư mục con css; <code>../img/logo.png</code> = <strong>../ nghĩa là 'lên một cấp'</strong> rồi rẽ vào img; <code>./</code> = chính thư mục hiện tại (viết hay không cũng vậy). Project Music Club: index.html, about.html, contact.html cùng cấp, css/style.css nằm trong thư mục con.",
      en:"Rule: the browser uses the current file's folder as the base. <code>about.html</code> = same folder; <code>css/style.css</code> = go down into the css subfolder; <code>../img/logo.png</code> = <strong>../ means 'up one level'</strong>, then into img; <code>./</code> = the current folder itself (optional). Music Club project: index.html, about.html, contact.html sit together; css/style.css lives in a subfolder."}},
  {h:{vi:"Tuyệt đối và root-relative",en:"Absolute and root-relative"},
   p:{vi:"Tuyệt đối đầy đủ: <code>https://example.com/css/style.css</code> — dùng cho tài nguyên ngoài site. Root-relative: <code>/css/style.css</code> — tính từ GỐC WEBSITE (domain), không phải từ file hiện tại; tiện khi site sâu nhiều cấp nhưng cần biết gốc site ở đâu. Tuyệt đối kiểu <code>file:///C:/Users/…</code> là đường dẫn MÁY CÁ NHÂN — lên server là gãy, lỗi kinh điển khi nộp bài.",
      en:"Full absolute: <code>https://example.com/css/style.css</code> — for off-site resources. Root-relative: <code>/css/style.css</code> — resolved from the WEBSITE ROOT (domain), not the current file; handy for deep sites but you must know where the root is. A <code>file:///C:/Users/…</code> path points at YOUR MACHINE — it breaks on any server, the classic submission bug."}}
],
analogy:{
  vi:"Đường dẫn tương đối như chỉ đường trong tòa nhà: 'từ phòng em, xuống tầng 1 rẽ phải' (css/style.css) hay 'lên tầng trên rồi sang trái' (../img/logo.png). Đường dẫn tuyệt đối là địa chỉ đầy đủ 'số 144 Xuân Thủy, Cầu Giấy, Hà Nội' — ai ở đâu cũng tìm được, nhưng dài và cứng.",
  en:"A relative path is directions inside a building: 'from your room, down to floor 1, turn right' (css/style.css) or 'up one floor, then left' (../img/logo.png). An absolute path is the full address '144 Xuan Thuy, Cau Giay, Hanoi' — findable from anywhere, but long and rigid."
},
compare:{
  caption:{vi:"Các loại đường dẫn — ví dụ từ index.html ở gốc project",en:"Path types — examples from index.html at the project root"},
  head:[{vi:"Loại",en:"Type"},{vi:"Ví dụ href",en:"Example href"},{vi:"Tính từ đâu?",en:"Resolved from?"}],
  rows:[
    [{vi:"Tương đối — cùng cấp",en:"Relative — same level"},{vi:"<code>about.html</code>",en:"<code>about.html</code>"},{vi:"Thư mục file hiện tại",en:"Current file's folder"}],
    [{vi:"Tương đối — xuống cấp",en:"Relative — down"},{vi:"<code>css/style.css</code>",en:"<code>css/style.css</code>"},{vi:"Thư mục file hiện tại",en:"Current file's folder"}],
    [{vi:"Tương đối — lên cấp",en:"Relative — up"},{vi:"<code>../img/logo.png</code>",en:"<code>../img/logo.png</code>"},{vi:"Lên 1 cấp rồi rẽ",en:"Up one level, then across"}],
    [{vi:"Root-relative",en:"Root-relative"},{vi:"<code>/css/style.css</code>",en:"<code>/css/style.css</code>"},{vi:"Gốc website (domain)",en:"Website root (domain)"}],
    [{vi:"Tuyệt đối đầy đủ",en:"Full absolute"},{vi:"<code>https://is.vnu.edu.vn/…</code>",en:"<code>https://is.vnu.edu.vn/…</code>"},{vi:"Không phụ thuộc vị trí",en:"Independent of location"}],
    [{vi:"Anchor / email",en:"Anchor / email"},{vi:"<code>#schedule</code> · <code>mailto:club@…</code>",en:"<code>#schedule</code> · <code>mailto:club@…</code>"},{vi:"Trong trang / ứng dụng mail",en:"In-page / mail app"}]
  ]
},
example:{file:"music-club / index.html (fragment)",code:
`<nav>
  <!-- same folder: just the file name -->
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>

  <!-- down into a subfolder -->
  <a href="css/style.css">View our stylesheet</a>

  <!-- in-page anchor: jumps to id="schedule" -->
  <a href="#schedule">Schedule ↓</a>

  <!-- external site: new tab + security -->
  <a href="https://is.vnu.edu.vn" target="_blank" rel="noopener">IS-VNU</a>

  <!-- email link -->
  <a href="mailto:musicclub@isvnu.edu.vn">Email us</a>
</nav>

<h2 id="schedule">Weekly schedule</h2>
<p>Friday 6pm — Room B201.</p>`},
lecture:{
steps:[
  {code:
`<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</nav>`,
   say:{vi:"Menu cơ bản của Music Club: ba file cùng thư mục nên href chỉ cần TÊN FILE. Đây là đường dẫn tương đối 'cùng cấp' — trình duyệt tìm ngay cạnh file hiện tại.",
        en:"Music Club's basic menu: three files in the same folder, so href needs only the FILE NAME. This is a 'same-level' relative path — the browser looks right next to the current file."},
   note:{vi:"Gặng: 'Vì sao không viết ./about.html?' → được, ./ là tường minh 'cùng thư mục', kết quả y hệt. Viết hay không đều đúng.",
         en:"Follow-up: 'Why not ./about.html?' → you can; ./ explicitly means 'this folder', identical result. Both are correct."}},
  {code:
`<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="css/style.css">Stylesheet (down one folder)</a>
</nav>
<p>Imagine the tree: index.html and css/ are siblings.</p>`,
   say:{vi:"Đi XUỐNG một cấp: <code>css/style.css</code> nghĩa là 'từ thư mục hiện tại, vào css, lấy style.css'. Dấu / trong đường dẫn là rẽ vào thư mục con — không phải dấu gạch chéo của Windows.",
        en:"Going DOWN one level: <code>css/style.css</code> means 'from here, enter css, take style.css'. The / in paths enters a subfolder — not a Windows backslash."},
   note:{vi:"Nếu contact.html nằm trong thư mục pages/ thì href phải là ../css/style.css — lên một cấp rồi mới xuống css. Đây là câu gặng chắc chắn gặp.",
         en:"If contact.html lived in pages/, the href would need ../css/style.css — up one level, then down into css. A guaranteed follow-up."}},
  {code:
`<nav>
  <a href="#schedule">Jump to schedule ↓</a>
  <a href="mailto:musicclub@isvnu.edu.vn">Email us</a>
  <a href="https://is.vnu.edu.vn" target="_blank" rel="noopener">IS-VNU ↗</a>
</nav>
<h2 id="schedule">Weekly schedule</h2>
<p>Friday 6pm — Room B201.</p>`,
   say:{vi:"Ba loại đích đặc biệt: <code>#schedule</code> là anchor — cuộn tới phần tử có id tương ứng NGAY TRONG TRANG (bấm thử trong preview!). <code>mailto:</code> mở ứng dụng email. Link ngoài dùng <code>target=\"_blank\"</code> mở tab mới, kèm <code>rel=\"noopener\"</code> vì an toàn.",
        en:"Three special targets: <code>#schedule</code> is an anchor — it scrolls to the element with that id IN THIS PAGE (click it in the preview!). <code>mailto:</code> opens the mail app. External links use <code>target=\"_blank\"</code> for a new tab, plus <code>rel=\"noopener\"</code> for safety."},
   note:{vi:"noopener chống gì? Trang mở bằng _blank từng có thể truy cập window.opener để điều khiển trang gốc (tabnabbing). rel=noopener cắt sợi dây đó.",
         en:"What does noopener prevent? A _blank page could access window.opener to control the original page (tabnabbing). rel=noopener cuts that cord."}},
  {code:
`<!-- Suppose this file is pages/contact.html -->
<nav>
  <a href="../index.html">← Back home (up one level)</a>
  <a href="../css/style.css">Stylesheet</a>
  <a href="about.html">About (same pages/ folder)</a>
</nav>
<p>../ = 'leave my folder, go to the parent'.</p>`,
   say:{vi:"Tình huống ngược: giả sử file này là <code>pages/contact.html</code>. Muốn về index.html ở gốc? Phải <strong>lên một cấp</strong>: <code>../index.html</code>. Muốn tới css? <code>../css/style.css</code>. Còn about.html nếu cũng trong pages/ thì chỉ cần tên file. Luôn tự hỏi: 'file hiện tại ĐỨNG Ở ĐÂU?'",
        en:"The reverse scenario: suppose this file is <code>pages/contact.html</code>. Back to index.html at the root? Go UP one level: <code>../index.html</code>. To css? <code>../css/style.css</code>. And about.html, if also in pages/, needs just the name. Always ask: 'WHERE does the current file stand?'"},
   note:{vi:"Mỗi ../ lên đúng MỘT cấp. Hai cấp sâu thì ../../. Đếm số cấp trước khi viết — đừng đoán.",
         en:"Each ../ climbs exactly ONE level. Two levels deep needs ../../. Count levels before writing — never guess."}}
],
errors:[
  {label:{vi:"Thừa ../ khi cùng cấp",en:"Extra ../ between siblings"},
   code:
`<!-- index.html sits NEXT TO about.html -->
<nav>
  <a href="../about.html">About — BUG: climbs out of the project!</a>
  <a href="contact.html">Contact — correct</a>
</nav>
<p>From index.html, ../about.html looks OUTSIDE the project folder.</p>`,
   explain:{vi:"index.html và about.html cùng thư mục, nhưng <code>../about.html</code> lại bảo trình duyệt 'lên thư mục CHA rồi tìm' — tức tìm ngoài project, kết quả 404. Bấm thử link trong preview sẽ thấy trang lỗi. Sửa: bỏ ../ đi.",
            en:"index.html and about.html share a folder, but <code>../about.html</code> tells the browser 'go to the PARENT folder and look' — outside the project, giving a 404. Click the link in the preview to see the error page. Fix: drop the ../."}},
  {label:{vi:"Đường dẫn máy cá nhân",en:"Local-machine absolute path"},
   code:
`<nav>
  <a href="file:///C:/Users/Me/Documents/music-club/about.html">About</a>
</nav>
<img src="C:\\Users\\Me\\Pictures\\band.jpg" alt="Band photo">
<p>These paths only exist on ONE computer.</p>`,
   explain:{vi:"<code>file:///C:/…</code> và <code>C:\\…</code> trỏ vào ổ cứng MÁY EM. Cô mở bài trên máy cô, up lên GitHub Pages — không có ổ C của em, mọi link và ảnh gãy hết. Bài nộp phải dùng đường dẫn tương đối trong project.",
            en:"<code>file:///C:/…</code> and <code>C:\\…</code> point at YOUR hard drive. When the lecturer opens the submission on her machine or it goes to GitHub Pages — your C: drive does not exist there, and every link and image breaks. Submissions must use project-relative paths."}}
]},
mistakes:[
  {title:{vi:"Dùng backslash kiểu Windows trong href/src",en:"Windows backslashes in href/src"},
   wrong:`<a href="pages\\contact.html">Contact</a>
<img src="img\\logo.png" alt="Logo">`,
   right:`<a href="pages/contact.html">Contact</a>
<img src="img/logo.png" alt="Logo">`,
   why:{vi:"URL trên web luôn dùng <strong>/</strong> (forward slash). Backslash <code>\\</code> là quy ước ổ đĩa Windows, trình duyệt/server không hiểu như dấu phân cách thư mục → gãy link dù file có thật.",
        en:"Web URLs always use <strong>/</strong> (forward slash). Backslash <code>\\</code> is a Windows drive convention; browsers/servers do not treat it as a folder separator → broken links even though the files exist."}},
  {title:{vi:"Nhầm / đầu là 'thư mục hiện tại'",en:"Mistaking a leading / for 'current folder'"},
   wrong:
`<!-- file: pages/contact.html -->
<link rel="stylesheet" href="/css/style.css">`,
   right:
`<!-- file: pages/contact.html -->
<link rel="stylesheet" href="../css/style.css">`,
   why:{vi:"<code>/css/style.css</code> là root-relative: tính từ GỐC DOMAIN. Trên GitHub Pages, site nằm ở <code>username.github.io/music-club/</code>, nên /css tìm tận <code>username.github.io/css</code> — sai. Từ pages/, muốn tới css cùng project phải <code>../css/style.css</code>.",
        en:"<code>/css/style.css</code> is root-relative: from the DOMAIN ROOT. On GitHub Pages the site lives at <code>username.github.io/music-club/</code>, so /css looks at <code>username.github.io/css</code> — wrong. From pages/, reaching the project's css needs <code>../css/style.css</code>."}},
  {title:{vi:"target=_blank không kèm rel=noopener",en:"target=_blank without rel=noopener"},
   wrong:`<a href="https://example.com" target="_blank">Partner site</a>`,
   right:`<a href="https://example.com" target="_blank" rel="noopener">Partner site</a>`,
   why:{vi:"Trang mở ở tab mới có thể dùng <code>window.opener</code> để chuyển hướng trang gốc sang trang giả mạo (tabnabbing). <code>rel=\"noopener\"</code> cắt quyền đó. Thói quen nhỏ, điểm bảo mật thật — giảng viên hỏi 'vì sao thêm noopener?' là có sẵn câu trả lời.",
        en:"The newly opened page can use <code>window.opener</code> to redirect your original page to a phishing clone (tabnabbing). <code>rel=\"noopener\"</code> removes that power. A small habit, real security points — when asked 'why noopener?', you have the answer ready."}}
],
oral:{
good:{vi:"Thẻ a tạo hyperlink qua thuộc tính href. Đường dẫn tương đối tính từ thư mục của file hiện tại: 'about.html' là cùng cấp, 'css/style.css' đi xuống thư mục con, '../' là lên một cấp. Đường dẫn tuyệt đối ghi đầy đủ URL, dùng cho site ngoài. Trong Music Club, từ contact.html cùng cấp với index.html em viết href='index.html'; nếu contact nằm trong thư mục pages/ thì phải là '../index.html', và tới stylesheet là '../css/style.css' ạ.",
      en:"The a tag creates a hyperlink via href. Relative paths resolve from the current file's folder: 'about.html' is same-level, 'css/style.css' goes down a subfolder, '../' climbs one level. Absolute paths spell out the full URL, for external sites. In Music Club, from contact.html beside index.html I write href='index.html'; if contact lived in pages/ it would be '../index.html', and the stylesheet '../css/style.css'."},
followQ:{vi:"Vì sao không nên dùng đường dẫn kiểu C:\\Users\\… khi nộp bài? Và / đứng đầu href nghĩa là gì?",
         en:"Why must you not submit paths like C:\\Users\\…? And what does a leading / in href mean?"},
followA:{vi:"Dạ vì đó là đường dẫn tuyệt đối tới máy cá nhân của em — máy giảng viên hay GitHub Pages không có ổ đĩa đó nên link và ảnh gãy hết; phải dùng đường dẫn tương đối trong project. Còn dấu / đầu là root-relative: tính từ gốc website chứ không phải thư mục hiện tại, nên trên GitHub Pages có thư mục con nó dễ trỏ sai ạ.",
         en:"Because that is an absolute path to my own machine — the lecturer's computer or GitHub Pages has no such drive, so links and images break; submissions must use project-relative paths. A leading / is root-relative: resolved from the website root, not the current folder, so on GitHub Pages with a subfolder it easily points wrong."},
weak:{vi:"Tương đối là đường dẫn ngắn, tuyệt đối là đường dẫn dài có https. Lên cấp thì dùng hai chấm ạ.",
      en:"Relative is a short path, absolute is a long one with https. To go up you use two dots."},
weakWhy:{vi:"'Ngắn/dài' không phải bản chất — bản chất là TÍNH TỪ ĐÂU. Không giải thích được ../ và không phân biệt root-relative, gặp tình huống pages/contact.html là sai ngay.",
         en:"'Short/long' is not the essence — the essence is RESOLVED FROM WHERE. Cannot explain ../ or distinguish root-relative, so the pages/contact.html scenario breaks you instantly."},
goodWhy:{vi:"Định nghĩa bằng cơ chế phân giải đường dẫn, giải đúng tình huống thư mục cụ thể, biết cả lỗi máy cá nhân và root-relative trên GitHub Pages — đúng thứ giảng viên muốn nghe.",
         en:"Defines by the resolution mechanism, solves the concrete folder scenario, and knows both the local-machine bug and root-relative on GitHub Pages — exactly what the lecturer wants to hear."},
checklist:[
  {vi:"a + href tạo link; đích: file, #anchor, mailto, URL ngoài",en:"a + href makes a link; targets: file, #anchor, mailto, external URL"},
  {vi:"Tương đối tính từ thư mục file hiện tại; ../ lên một cấp",en:"Relative resolves from the current file's folder; ../ climbs one level"},
  {vi:"Tuyệt đối = URL đầy đủ; / đầu = root-relative từ gốc site",en:"Absolute = full URL; leading / = root-relative from site root"},
  {vi:"Giải đúng tình huống pages/contact.html → ../index.html",en:"Solves pages/contact.html → ../index.html correctly"},
  {vi:"Không dùng đường dẫn ổ đĩa cá nhân; _blank nên kèm noopener",en:"No local-drive paths; _blank should pair with noopener"}
]},
cheat:{vi:"Tương đối tính từ file hiện tại: cùng cấp = tên file, xuống = css/x.css, lên = ../. / đầu = gốc site. Không dùng C:\\…",
       en:"Relative from the current file: same level = name, down = css/x.css, up = ../. Leading / = site root. Never C:\\…"},
cheatCode:
`<a href="about.html">same folder</a>
<a href="css/style.css">down</a>
<a href="../index.html">up one level</a>
<a href="#schedule">in-page anchor</a>`
},

/* ===== Q6 · Buổi 3 · img & alt ===== */
{
id:"q6", num:6, diff:"easy",
session:{vi:"Buổi 3",en:"Session 3"},
title:{vi:"Hình ảnh: img, src, alt — vì sao alt sống còn",en:"Images: img, src, alt — why alt is vital"},
question:{
  vi:"Chèn ảnh vào trang Music Club thế nào cho đúng? Thuộc tính <code>alt</code> để làm gì, khi nào được để <code>alt=\"\"</code>? Vì sao nên khai báo <code>width/height</code>?",
  en:"How do you correctly embed an image on the Music Club page? What is the <code>alt</code> attribute for, and when may it be <code>alt=\"\"</code>? Why declare <code>width/height</code>?"
},
definition:{
  en:"The alt attribute provides a text alternative for an image: it is read by screen readers, shown when the image fails to load, and used by search engines to understand the image.",
  vi:"<code>alt</code> (alternative text) là đoạn văn bản THAY THẾ cho ảnh: screen reader đọc nó cho người khiếm thị, trình duyệt hiện nó khi ảnh lỗi, và search engine dựa vào đó để hiểu nội dung ảnh."
},
theory:[
  {h:{vi:"img — thẻ rỗng, hai thuộc tính bắt buộc",en:"img — a void element with two required attributes"},
   p:{vi:"<code>&lt;img src=\"đường-dẫn\" alt=\"mô-tả\"&gt;</code> — không có thẻ đóng, không chứa nội dung. <code>src</code> là đường dẫn (thường tương đối: <code>img/band.jpg</code>), <code>alt</code> là mô tả ngắn gọn, đúng nội dung ảnh: 'Music Club biểu diễn tại Acoustic Night' tốt hơn 'ảnh' hay 'band.jpg'. Ảnh trang trí thuần túy (hoa văn, icon cạnh chữ đã nói cùng ý) thì dùng <code>alt=\"\"</code> để screen reader BỎ QUA, khỏi đọc nhiễu.",
      en:"<code>&lt;img src=\"path\" alt=\"description\"&gt;</code> — no closing tag, no content. <code>src</code> is the path (usually relative: <code>img/band.jpg</code>); <code>alt</code> is a concise, accurate description: 'Music Club performing at Acoustic Night' beats 'image' or 'band.jpg'. Purely decorative images (ornaments, icons beside text saying the same thing) use <code>alt=\"\"</code> so screen readers SKIP them instead of reading noise."}},
  {h:{vi:"alt phục vụ ba đối tượng",en:"alt serves three audiences"},
   p:{vi:"(1) <strong>Người dùng screen reader</strong>: không thấy ảnh, nghe alt. (2) <strong>Mọi người khi ảnh gãy</strong>: mạng chậm, sai src — alt hiện lên thay chỗ ảnh, trang vẫn truyền được thông tin. (3) <strong>Search engine</strong>: Google Images đọc alt để xếp hạng; alt tốt = SEO tốt. Nhưng alt nhồi keyword ('guitar guitar cheap guitar…') là spam, bị phạt và gây khó chịu cho screen reader.",
      en:"(1) <strong>Screen-reader users</strong>: they cannot see the image; they hear alt. (2) <strong>Everyone when the image breaks</strong>: slow network, wrong src — alt appears in its place and the page still communicates. (3) <strong>Search engines</strong>: Google Images reads alt for ranking; good alt = good SEO. But keyword-stuffed alt ('guitar guitar cheap guitar…') is spam — penalized, and painful for screen readers."}},
  {h:{vi:"width/height và định dạng ảnh",en:"width/height and image formats"},
   p:{vi:"Khai báo <code>width/height</code> (pixel, đúng tỉ lệ ảnh gốc) giúp trình duyệt GIỮ CHỖ trước khi ảnh tải xong — trang không bị 'nhảy' nội dung (layout shift), trải nghiệm và điểm Core Web Vitals tốt hơn. Định dạng: <strong>JPEG</strong> ảnh chụp nhiều màu; <strong>PNG</strong> cần nền trong suốt/đồ họa nét; <strong>GIF</strong> animation đơn giản; <strong>SVG</strong> logo/icon vector sắc mọi kích thước; <strong>WebP</strong> nén tốt hơn JPEG/PNG. Ảnh chụp CLB nên nén trước khi đưa vào project.",
      en:"Declaring <code>width/height</code> (pixels, matching the real ratio) lets the browser RESERVE SPACE before the image loads — no content 'jumping' (layout shift), better experience and Core Web Vitals. Formats: <strong>JPEG</strong> for colorful photos; <strong>PNG</strong> for transparency/crisp graphics; <strong>GIF</strong> for simple animation; <strong>SVG</strong> for vector logos/icons sharp at any size; <strong>WebP</strong> compresses better than JPEG/PNG. Compress club photos before adding them to the project."}}
],
analogy:{
  vi:"alt như dòng chú thích dưới ảnh trong bảo tàng: người không xem được ảnh vẫn hiểu tranh vẽ gì. Còn width/height như kẻ khung sẵn lên tường trước khi treo tranh — khách không bị xô lệch chỗ đứng khi tranh được mang tới.",
  en:"alt is the caption under a museum painting: someone who cannot view the painting still knows what it depicts. width/height is marking the frame on the wall before hanging — visitors do not get shoved around when the painting arrives."
},
compare:{
  caption:{vi:"alt đúng vs alt sai",en:"Good alt vs bad alt"},
  head:[{vi:"Tình huống",en:"Situation"},{vi:"alt nên viết",en:"Write alt as"},{vi:"Vì sao",en:"Why"}],
  rows:[
    [{vi:"Ảnh CLB biểu diễn",en:"Club performing photo"},{vi:"\"Music Club performs at Acoustic Night\"",en:"\"Music Club performs at Acoustic Night\""},{vi:"Mô tả đúng nội dung, ngắn gọn",en:"Accurate, concise description"}],
    [{vi:"Icon nốt nhạc cạnh chữ 'Events'",en:"Music-note icon beside 'Events' text"},{vi:"\"\" (rỗng)",en:"\"\" (empty)"},{vi:"Trang trí — chữ đã nói đủ ý",en:"Decorative — the text already says it"}],
    [{vi:"Ảnh poster có chữ",en:"Poster image containing text"},{vi:"Ghi lại chữ quan trọng trong poster",en:"Repeat the poster's key text"},{vi:"Screen reader không đọc được chữ trong ảnh",en:"Screen readers cannot read text inside images"}],
    [{vi:"Ảnh sản phẩm/buổi diễn",en:"Event photo"},{vi:"❌ \"image1.jpg\" / nhồi keyword",en:"❌ \"image1.jpg\" / keyword stuffing"},{vi:"Vô nghĩa với người nghe, spam với SEO",en:"Meaningless to listeners, spam to SEO"}]
  ]
},
example:{file:"music-club / index.html (fragment)",code:
`<h2>Latest gig</h2>

<!-- content image: descriptive alt, size reserved -->
<img src="img/acoustic-night.jpg"
     alt="Music Club members performing on the Acoustic Night stage"
     width="480" height="320">

<!-- decorative divider: empty alt so screen readers skip it -->
<img src="img/note-divider.png" alt="" width="200" height="20">

<!-- broken src on purpose: watch the alt text appear -->
<img src="img/does-not-exist.jpg"
     alt="Poster of the Spring Concert (image failed to load)"
     width="300" height="200">`},
lecture:{
steps:[
  {code:
`<h2>Latest gig</h2>
<img src="img/acoustic-night.jpg"
     alt="Music Club members performing on the Acoustic Night stage">`,
   say:{vi:"Chèn ảnh đầu tiên: <code>img</code> với <code>src</code> trỏ tới thư mục img và <code>alt</code> mô tả ĐÚNG cảnh trong ảnh. Ảnh này chưa tồn tại trong demo — và nhìn kìa: trình duyệt hiện chính dòng alt thay vào chỗ ảnh. Đó là 'lưới an toàn' của alt.",
        en:"First image: <code>img</code> with <code>src</code> pointing into the img folder and an <code>alt</code> describing the ACTUAL scene. The file does not exist in this demo — and look: the browser shows the alt text right where the image should be. That is alt's safety net."},
   note:{vi:"alt hiện khi ảnh gãy là cách DỄ NHẤT chứng minh alt hoạt động — giảng viên nào cũng thích sinh viên tự demo được điều này.",
         en:"Alt appearing on a broken image is the EASIEST proof that alt works — every lecturer loves a student who can demo this themselves."}},
  {code:
`<h2>Latest gig</h2>
<img src="img/acoustic-night.jpg"
     alt="Music Club members performing on the Acoustic Night stage"
     width="480" height="320">
<p>The paragraph below stays put while the image loads.</p>`,
   say:{vi:"Thêm <code>width/height</code> đúng tỉ lệ 480×320. Trình duyệt giữ sẵn một khung chừng đó chỗ — đoạn văn bên dưới không bị đẩy nhảy khi ảnh tải xong. Không có kích thước, trang sẽ 'giật' một cái (layout shift).",
        en:"Add <code>width/height</code> at the true 480×320 ratio. The browser reserves a box of that size — the paragraph below does not jump when the image finishes loading. Without dimensions the page 'jolts' (layout shift)."},
   note:{vi:"width/height ở đây là giữ chỗ theo tỉ lệ; CSS vẫn có thể co ảnh responsive (max-width:100%). Hai thứ không mâu thuẫn.",
         en:"These width/height reserve space by ratio; CSS can still scale responsively (max-width:100%). The two do not conflict."}},
  {code:
`<h2>Latest gig</h2>
<img src="img/acoustic-night.jpg"
     alt="Music Club members performing on the Acoustic Night stage"
     width="480" height="320">

<p>Upcoming events</p>
<img src="img/note-divider.png" alt="" width="200" height="20">
<p>Friday 6pm — Room B201.</p>`,
   say:{vi:"Ảnh thứ hai là dải trang trí hình nốt nhạc. Chữ 'Upcoming events' đã nói đủ ý, ảnh không thêm thông tin → <code>alt=\"\"</code> RỖNG có chủ đích, để screen reader lướt qua. Phân biệt: alt rỗng có chủ đích KHÁC với thiếu hẳn alt.",
        en:"The second image is a decorative music-note divider. The text 'Upcoming events' already says it all; the image adds no information → intentional EMPTY <code>alt=\"\"</code> so screen readers skip it. Note: intentional empty alt is DIFFERENT from missing alt entirely."},
   note:{vi:"Câu gặng: 'alt=\"\" và không viết alt khác gì?' → alt rỗng = 'bỏ qua tôi'; thiếu alt = screen reader có thể đọc tên file 'note-divider.png', vô nghĩa.",
         en:"Follow-up: 'How do alt=\"\" and no alt differ?' → empty = 'skip me'; missing = the screen reader may read the filename 'note-divider.png' — meaningless."}},
  {code:
`<h2>Latest gig</h2>
<img src="img/acoustic-night.jpg"
     alt="Music Club members performing on the Acoustic Night stage"
     width="480" height="320">

<!-- BUG demo: alt is the filename, not a description -->
<img src="img/poster.jpg" alt="IMG_2041.jpg" width="300" height="200">`,
   say:{vi:"So sánh tội lỗi: ảnh poster với <code>alt=\"IMG_2041.jpg\"</code>. Người dùng screen reader nghe 'IMG hai không bốn một chấm jpg' — hoàn toàn vô nghĩa. Alt phải là MÔ TẢ, không phải tên file. Sửa thành 'Poster of the Spring Concert, May 12, Hall A' mới đạt.",
        en:"A guilty comparison: the poster with <code>alt=\"IMG_2041.jpg\"</code>. A screen-reader user hears 'IMG twenty forty-one dot jpg' — utterly meaningless. Alt must be a DESCRIPTION, not a filename. 'Poster of the Spring Concert, May 12, Hall A' is the fix."},
   note:{vi:"Ba đối tượng của alt: screen reader, người dùng khi ảnh gãy, search engine. Kể đủ ba là câu trả lời trọn vẹn.",
         en:"Alt's three audiences: screen readers, users when images break, search engines. Naming all three makes the answer complete."}}
],
errors:[
  {label:{vi:"Thiếu alt hoàn toàn",en:"Missing alt entirely"},
   code:
`<h2>Latest gig</h2>
<img src="img/acoustic-night.jpg" width="480" height="320">
<img src="img/missing-photo.jpg" width="300" height="200">
<p>Both images above have NO alt attribute.</p>`,
   explain:{vi:"Ảnh gãy thứ hai chỉ còn ô trống/icon vỡ — KHÔNG có chữ nào thay thế, người dùng mất thông tin hoàn toàn. Screen reader với ảnh không alt thường đọc tên file hoặc bỏ qua tùy cấu hình. Đây là lỗi accessibility bị trừ điểm thẳng tay trong mọi rubric.",
            en:"The second broken image leaves only an empty box/broken icon — NO replacement text, the user loses the information entirely. For images without alt, screen readers often read the filename or skip unpredictably. This accessibility bug loses points outright in any rubric."}},
  {label:{vi:"alt nhồi keyword",en:"Keyword-stuffed alt"},
   code:
`<img src="img/guitar.jpg"
     alt="guitar music club guitar lessons cheap guitar buy guitar online guitar Hanoi"
     width="300" height="200">`,
   explain:{vi:"Alt dài lê thê toàn từ khóa lặp. Screen reader phải đọc HẾT đống spam đó mỗi lần gặp ảnh — tra tấn người nghe; search engine coi là keyword stuffing và có thể phạt. Alt tốt: một câu mô tả thật, dưới ~125 ký tự.",
            en:"A rambling alt full of repeated keywords. Screen readers must read ALL that spam every time they meet the image — torture for listeners; search engines see keyword stuffing and may penalize. Good alt: one honest descriptive sentence, under ~125 characters."}}
]},
mistakes:[
  {title:{vi:"alt là tên file hoặc chữ 'image'",en:"alt as a filename or the word 'image'"},
   wrong:`<img src="img/band.jpg" alt="band.jpg">`,
   right:`<img src="img/band.jpg" alt="Music Club band rehearsing in Room B201">`,
   why:{vi:"'band.jpg' không mô tả GÌ cả. Alt phải trả lời 'ảnh này cho thấy gì?' bằng một câu ngắn. Mẹo: tưởng tượng đọc alt qua điện thoại cho người không nhìn thấy màn hình.",
        en:"'band.jpg' describes NOTHING. Alt must answer 'what does this image show?' in one short sentence. Trick: imagine reading the alt over the phone to someone who cannot see the screen."}},
  {title:{vi:"Ảnh trang trí vẫn viết alt dài",en:"Long alt on decorative images"},
   wrong:`<p>Upcoming events</p>
<img src="img/note-divider.png" alt="A decorative divider with music notes">`,
   right:`<p>Upcoming events</p>
<img src="img/note-divider.png" alt="">`,
   why:{vi:"Ảnh không thêm thông tin thì mô tả nó chỉ gây NHIỄU cho screen reader — người nghe phải nghe 'một dải trang trí hình nốt nhạc' giữa các mục thật. <code>alt=\"\"</code> là cách nói chuẩn 'ảnh này trang trí, hãy bỏ qua'.",
        en:"If the image adds no information, describing it only adds NOISE for screen readers — listeners hear 'a decorative divider with music notes' between real items. <code>alt=\"\"</code> is the standard way to say 'decorative, skip me'."}},
  {title:{vi:"Không width/height, ảnh nặng nguyên bản",en:"No width/height, full-size heavy image"},
   wrong:`<img src="img/original-6000x4000.jpg" alt="Club photo">`,
   right:`<img src="img/club-photo-800.jpg" alt="Club photo" width="800" height="533">`,
   why:{vi:"Ảnh gốc 6000px nặng hàng MB: tải chậm, và không khai báo kích thước thì mỗi lần ảnh tải xong trang lại nhảy bố cục. Nén/resize ảnh về kích thước hiển thị thật và khai báo width/height để giữ chỗ.",
        en:"A 6000px original weighs megabytes: slow loads, and without declared dimensions the page jumps each time an image arrives. Compress/resize to the real display size and declare width/height to reserve space."}}
],
oral:{
good:{vi:"Em chèn ảnh bằng thẻ img — thẻ rỗng, không đóng — với src là đường dẫn tương đối như img/band.jpg và alt mô tả ngắn gọn đúng nội dung ảnh. Alt quan trọng vì ba đối tượng: screen reader đọc cho người khiếm thị, nó hiện thay khi ảnh lỗi, và search engine dùng để hiểu ảnh cho SEO. Ảnh trang trí thuần túy thì em để alt rỗng có chủ đích để screen reader bỏ qua. Em cũng khai báo width/height để giữ chỗ, tránh layout shift ạ.",
      en:"I embed images with img — a void element, never closed — with src as a relative path like img/band.jpg and alt as a concise, accurate description. Alt matters for three audiences: screen readers read it to blind users, it displays when the image fails, and search engines use it to understand the image for SEO. For purely decorative images I intentionally leave alt empty so screen readers skip them. I also declare width/height to reserve space and avoid layout shift."},
followQ:{vi:"alt rỗng và KHÔNG viết alt khác nhau thế nào? Còn alt khác title ra sao?",
         en:"How do an empty alt and NO alt differ? And how does alt differ from title?"},
followA:{vi:"Dạ alt='' là khai báo có chủ đích 'ảnh trang trí, bỏ qua', screen reader sẽ lướt qua. Còn thiếu alt thì screen reader có thể đọc tên file như 'band.jpg', rất vô nghĩa. Title thì khác: nó là tooltip hiện khi rê chuột, bổ sung thông tin phụ; alt là nội dung THAY THẾ bắt buộc cho ảnh, không phải tooltip ạ.",
         en:"alt='' is an intentional declaration 'decorative, skip me', so screen readers pass over it. Missing alt may make screen readers read the filename like 'band.jpg' — meaningless. title is different: it is a hover tooltip with supplementary info; alt is the required text ALTERNATIVE for the image, not a tooltip."},
weak:{vi:"Alt là chữ hiện khi ảnh lỗi. Ảnh nào cũng phải có alt ạ.",
      en:"Alt is the text shown when the image fails. Every image must have alt."},
weakWhy:{vi:"Mới đúng 1/3 công dụng (bỏ sót screen reader và SEO), và 'ảnh nào cũng phải có alt' dễ bị gặng bẫy: ảnh trang trí thì alt rỗng mới đúng. Thiếu chiều sâu là bị hỏi tiếp ngay.",
         en:"Only 1/3 of the purpose (misses screen readers and SEO), and 'every image must have alt' walks into the trap follow-up: decorative images need EMPTY alt. No depth means instant further questioning."},
goodWhy:{vi:"Kể đủ ba đối tượng của alt, phân biệt alt rỗng có chủ đích vs thiếu alt, biết width/height chống layout shift và alt vs title — bao phủ trọn kiến thức buổi 3 về ảnh.",
         en:"Names all three alt audiences, distinguishes intentional empty alt from missing alt, knows width/height against layout shift and alt vs title — full coverage of Session 3's image material."},
checklist:[
  {vi:"img là thẻ rỗng; src (đường dẫn) + alt (mô tả)",en:"img is void; src (path) + alt (description)"},
  {vi:"alt phục vụ: screen reader, ảnh lỗi, SEO",en:"alt serves: screen readers, broken images, SEO"},
  {vi:"Ảnh trang trí → alt='' có chủ đích; khác thiếu alt",en:"Decorative → intentional alt=''; different from missing alt"},
  {vi:"width/height giữ chỗ, chống layout shift",en:"width/height reserve space, prevent layout shift"},
  {vi:"alt mô tả thật, không tên file, không nhồi keyword",en:"alt is a real description, not a filename or keyword spam"}
]},
cheat:{vi:"img = thẻ rỗng: src + alt. alt cho screen reader / ảnh gãy / SEO. Trang trí → alt=''. width/height giữ chỗ.",
       en:"img = void: src + alt. alt for screen readers / broken images / SEO. Decorative → alt=''. width/height reserve space."},
cheatCode:
`<img src="img/band.jpg"
     alt="Music Club rehearsing in B201"
     width="480" height="320">
<img src="img/divider.png" alt=""> <!-- decorative -->`
},
/* ===== Q7 · Buổi 3 · Heading & text semantics ===== */
{
id:"q7", num:7, diff:"easy",
session:{vi:"Buổi 3",en:"Session 3"},
title:{vi:"Heading h1–h6, strong/em vs b/i, danh sách ul/ol",en:"Headings h1–h6, strong/em vs b/i, lists ul/ol"},
question:{
  vi:"Dùng <code>h1–h6</code> thế nào cho đúng thứ bậc? <code>strong</code> khác <code>b</code>, <code>em</code> khác <code>i</code> ra sao? Khi nào dùng <code>ul</code>, khi nào <code>ol</code>?",
  en:"How do you use <code>h1–h6</code> in a proper hierarchy? How do <code>strong</code> and <code>b</code>, <code>em</code> and <code>i</code> differ? When do you use <code>ul</code> versus <code>ol</code>?"
},
definition:{
  en:"Headings build a hierarchical outline of the page; <strong> marks strong importance and <em> marks emphasis — they carry meaning, while <b> and <i> are purely visual styling.",
  vi:"Heading dựng nên DÀN Ý phân cấp của trang; <code>&lt;strong&gt;</code> đánh dấu mức độ quan trọng, <code>&lt;em&gt;</code> đánh dấu nhấn mạnh — chúng mang ngữ nghĩa, còn <code>&lt;b&gt;</code>/<code>&lt;i&gt;</code> chỉ là kiểu chữ đậm/nghiêng thuần thị giác."
},
theory:[
  {h:{vi:"Heading là dàn ý, không phải cỡ chữ",en:"Headings are an outline, not font sizes"},
   p:{vi:"Mỗi trang nên có MỘT <code>h1</code> cho chủ đề chính, rồi <code>h2</code> cho các mục lớn, <code>h3</code> cho mục con — như mục lục sách. <strong>Không nhảy cấp</strong> (h1 xuống thẳng h3) và không chọn heading vì 'cỡ chữ vừa ý' — muốn chữ to/nhỏ hơn thì dùng CSS <code>font-size</code>. Screen reader cho người dùng liệt kê toàn bộ heading để nhảy mục; dàn ý đúng = điều hướng nhanh, và Google cũng dựa vào đó hiểu cấu trúc nội dung.",
      en:"Each page should have ONE <code>h1</code> for its main topic, then <code>h2</code> for major sections, <code>h3</code> for subsections — like a book's table of contents. <strong>Never skip levels</strong> (h1 straight to h3), and never pick a heading because 'the size looks right' — use CSS <code>font-size</code> for that. Screen readers let users list all headings and jump between them; a correct outline = fast navigation, and Google also uses it to understand content structure."}},
  {h:{vi:"strong/em có nghĩa, b/i chỉ có hình",en:"strong/em mean something; b/i only look it"},
   p:{vi:"Mặc định trình duyệt render <code>strong</code> đậm giống <code>b</code>, <code>em</code> nghiêng giống <code>i</code> — nhưng khác nhau ở tầng ngữ nghĩa: <code>strong</code> = 'nội dung này QUAN TRỌNG' (screen reader có thể đổi giọng nhấn), <code>em</code> = 'nhấn mạnh ngữ điệu, đổi nghĩa câu' (vd 'em thích <em>guitar</em>' khác 'em thích guitar <em>hôm nay</em>'). <code>b/i</code> chỉ in đậm/in nghiêng không gửi thông điệp gì. Quy tắc: chọn theo Ý NGHĨA, hình thức để CSS lo.",
      en:"By default browsers render <code>strong</code> bold like <code>b</code>, and <code>em</code> italic like <code>i</code> — but they differ semantically: <code>strong</code> = 'this content is IMPORTANT' (screen readers may add stress), <code>em</code> = 'spoken emphasis that changes meaning' (e.g. 'I like <em>guitar</em>' vs 'I like guitar <em>today</em>'). <code>b/i</code> just print bold/italic with no message. Rule: choose by MEANING; let CSS handle looks."}},
  {h:{vi:"ul vs ol — thứ tự có quan trọng không?",en:"ul vs ol — does order matter?"},
   p:{vi:"<code>ul</code> (unordered list) cho các mục KHÔNG cần thứ tự: danh sách nhạc cụ, thể loại CLB. <code>ol</code> (ordered list) khi thứ tự CÓ Ý NGHĨA: các bước gia nhập CLB, xếp hạng cuộc thi — đổi chỗ là sai nghĩa. Mỗi mục là <code>li</code>; danh sách lồng nhau đặt ul/ol con BÊN TRONG li của mục cha. Đừng dùng <code>br</code> liên tiếp hay dấu '-' tự gõ để giả danh sách — mất ngữ nghĩa và khó style.",
      en:"<code>ul</code> (unordered list) is for items where order does NOT matter: instruments, club genres. <code>ol</code> (ordered list) when order IS meaningful: steps to join the club, contest rankings — swapping items breaks the meaning. Each item is an <code>li</code>; nested lists go INSIDE the parent's li. Never fake lists with repeated <code>br</code> or typed dashes — you lose semantics and styling control."}}
],
analogy:{
  vi:"Heading như mục lục cuốn sách về CLB: chương (h1), mục (h2), tiểu mục (h3) — không ai viết mục 1.1.1 ngay dưới tên sách. strong như giọng nói nhấn 'ĐỪNG quên buổi tập', em như đổi trọng âm làm đổi nghĩa câu. ul là giỏ trái cây (quả nào trước cũng được), ol là công thức nấu ăn (bước 2 không thể trước bước 1).",
  en:"Headings are the club book's table of contents: chapter (h1), section (h2), subsection (h3) — nobody puts 1.1.1 right under the book title. strong is a stressed voice saying 'DON'T forget practice'; em shifts the stress that changes the sentence's meaning. ul is a fruit basket (any order works); ol is a recipe (step 2 cannot precede step 1)."
},
compare:{
  caption:{vi:"Cặp thẻ dễ nhầm",en:"Easily confused pairs"},
  head:[{vi:"Thẻ",en:"Tag"},{vi:"Hiển thị mặc định",en:"Default look"},{vi:"Ngữ nghĩa",en:"Semantics"},{vi:"Dùng khi",en:"Use when"}],
  rows:[
    [{vi:"<code>strong</code>",en:"<code>strong</code>"},{vi:"Đậm",en:"Bold"},{vi:"Quan trọng",en:"Importance"},{vi:"Cảnh báo, ý chính cần nhớ",en:"Warnings, key points"}],
    [{vi:"<code>b</code>",en:"<code>b</code>"},{vi:"Đậm",en:"Bold"},{vi:"Không",en:"None"},{vi:"Chỉ muốn in đậm thuần thị giác",en:"Purely visual bold"}],
    [{vi:"<code>em</code>",en:"<code>em</code>"},{vi:"Nghiêng",en:"Italic"},{vi:"Nhấn mạnh ngữ điệu",en:"Spoken emphasis"},{vi:"Đổi trọng âm → đổi nghĩa",en:"Stress changes meaning"}],
    [{vi:"<code>i</code>",en:"<code>i</code>"},{vi:"Nghiêng",en:"Italic"},{vi:"Không (thuật ngữ, tên nước ngoài…)",en:"None (terms, foreign words…)"},{vi:"Quy ước in nghiêng",en:"Italic by convention"}],
    [{vi:"<code>ul</code>",en:"<code>ul</code>"},{vi:"Bullet",en:"Bullets"},{vi:"Danh sách không thứ tự",en:"Unordered list"},{vi:"Thứ tự đổi được",en:"Order can change"}],
    [{vi:"<code>ol</code>",en:"<code>ol</code>"},{vi:"Số 1,2,3",en:"Numbers 1,2,3"},{vi:"Danh sách có thứ tự",en:"Ordered list"},{vi:"Thứ tự là một phần ý nghĩa",en:"Order is part of the meaning"}]
  ]
},
example:{file:"music-club / about.html (fragment)",code:
`<h1>About Music Club</h1> <!-- ONE h1: the page topic -->

<h2>Our story</h2> <!-- major section -->
<p>Founded in 2024, we play <em>acoustic</em> every Friday.
   <strong>Bring your own instrument!</strong></p>

<h3>Genres we play</h3> <!-- subsection of Our story -->
<ul> <!-- order does not matter -->
  <li>Acoustic pop</li>
  <li>Indie rock
    <ul> <!-- nested list INSIDE the parent li -->
      <li>Soft ballads</li>
      <li>Upbeat covers</li>
    </ul>
  </li>
</ul>

<h2>How to join</h2>
<ol> <!-- order IS the meaning -->
  <li>Fill the contact form</li>
  <li>Come to a Friday practice</li>
  <li>Play one song with us</li>
</ol>`},
lecture:{
steps:[
  {code:
`<h1>About Music Club</h1>
<h2>Our story</h2>
<p>Founded in 2024, we play acoustic every Friday.</p>
<h2>How to join</h2>
<p>Three easy steps below.</p>`,
   say:{vi:"Dựng dàn ý trước: một <code>h1</code> cho chủ đề trang, hai <code>h2</code> cho hai mục lớn. Nhìn preview: cỡ chữ giảm dần theo cấp — nhưng nhớ, cấp chọn theo VAI TRÒ trong dàn ý, không phải theo cỡ chữ mong muốn.",
        en:"Outline first: one <code>h1</code> for the page topic, two <code>h2</code> for major sections. In the preview the sizes shrink by level — but remember, levels are chosen by ROLE in the outline, not by desired size."},
   note:{vi:"Gặng: 'Muốn h2 nhỏ hơn nhưng vẫn là mục lớn?' → giữ h2, chỉnh font-size bằng CSS. Đừng đổi thành h4.",
         en:"Follow-up: 'Want a smaller-looking h2 that is still a major section?' → keep h2, set font-size in CSS. Do not switch to h4."}},
  {code:
`<h1>About Music Club</h1>
<h2>Our story</h2>
<p>Founded in 2024, we play acoustic every Friday.</p>
<h3>Genres we play</h3>
<p>Acoustic pop, indie rock, ballads.</p>
<h2>How to join</h2>
<p>Three easy steps below.</p>`,
   say:{vi:"Thêm <code>h3</code> 'Genres' — mục CON của 'Our story', nên đứng sau h2 và trước h2 tiếp theo. Thứ bậc h1 → h2 → h3 liền mạch, không nhảy cóc. Screen reader đọc dàn ý này như mục lục sách.",
        en:"Add an <code>h3</code> 'Genres' — a SUBsection of 'Our story', so it follows the h2 and precedes the next h2. The h1 → h2 → h3 chain is unbroken, no skipping. A screen reader reads this outline like a table of contents."},
   note:{vi:"Lỗi nhảy cấp (h1 → h3) không làm vỡ giao diện nhưng phá dàn ý accessibility — công cụ audit sẽ báo ngay.",
         en:"Skipping levels (h1 → h3) does not break the layout but wrecks the accessibility outline — audit tools flag it instantly."}},
  {code:
`<h1>About Music Club</h1>
<h2>Our story</h2>
<p>Founded in 2024, we play <em>acoustic</em> every Friday.
   <strong>Bring your own instrument!</strong></p>
<p>Compare: <b>bold without meaning</b> and <i>italic without meaning</i>.</p>`,
   say:{vi:"Ngữ nghĩa text: <code>em</code> nhấn 'acoustic' (đổi trọng âm câu), <code>strong</code> báo điều QUAN TRỌNG phải nhớ. Dòng dưới dùng <code>b/i</code> — nhìn giống hệt, nhưng không gửi thông điệp gì cho screen reader. Cùng hình, khác nghĩa.",
        en:"Text semantics: <code>em</code> stresses 'acoustic' (shifting the sentence's emphasis), <code>strong</code> flags something IMPORTANT to remember. The line below uses <code>b/i</code> — looks identical, but sends no message to screen readers. Same look, different meaning."},
   note:{vi:"Câu gặng: 'strong khác b chỗ nào khi nhìn giống nhau?' → khác ở tầng ngữ nghĩa/accessibility, không phải hiển thị mặc định.",
         en:"Follow-up: 'How does strong differ from b if they look the same?' → the difference is semantic/accessibility, not default rendering."}},
  {code:
`<h2>Genres we play</h2>
<ul>
  <li>Acoustic pop</li>
  <li>Indie rock
    <ul><li>Soft ballads</li><li>Upbeat covers</li></ul>
  </li>
</ul>
<h2>How to join</h2>
<ol>
  <li>Fill the contact form</li>
  <li>Come to a Friday practice</li>
  <li>Play one song with us</li>
</ol>`,
   say:{vi:"Danh sách: thể loại nhạc dùng <code>ul</code> vì đảo thứ tự vô hại; các bước gia nhập dùng <code>ol</code> vì bước 2 không thể đứng trước bước 1. Để ý danh sách con lồng TRONG li của 'Indie rock' — không phải giữa hai li.",
        en:"Lists: genres use <code>ul</code> because reordering is harmless; joining steps use <code>ol</code> because step 2 cannot precede step 1. Note the nested list INSIDE the 'Indie rock' li — not between two lis."},
   note:{vi:"Gặng: 'Đổi chỗ hai bước trong ol được không?' → không, thứ tự là một phần ý nghĩa; nếu đổi được thì ngay từ đầu nên dùng ul.",
         en:"Follow-up: 'Can you swap two ol steps?' → no, order is part of the meaning; if swapping were fine, it should have been a ul from the start."}}
],
errors:[
  {label:{vi:"Nhảy cấp heading",en:"Skipping heading levels"},
   code:
`<h1>About Music Club</h1>
<h3>Genres we play</h3> <!-- BUG: h1 -> h3, no h2 -->
<p>Acoustic pop, indie rock.</p>
<h5>Soft ballads</h5> <!-- BUG: h3 -> h5 -->
<p>Our specialty.</p>`,
   explain:{vi:"Nhìn vẫn 'ổn' về hình thức, nhưng dàn ý bị thủng: h1 → h3 → h5. Screen reader hiểu nhầm 'Genres' là mục con của một mục h2 KHÔNG TỒN TẠI. Công cụ accessibility audit báo lỗi ngay. Sửa: h2 cho mục lớn, h3 cho mục con — liền mạch.",
            en:"It looks 'fine' visually, but the outline has holes: h1 → h3 → h5. Screen readers misread 'Genres' as a subsection of a NONEXISTENT h2. Accessibility audits flag it immediately. Fix: h2 for major sections, h3 for subsections — unbroken."}},
  {label:{vi:"Giả danh sách bằng br",en:"Faking a list with br"},
   code:
`<h2>How to join</h2>
<p>
  1. Fill the contact form<br>
  2. Come to a Friday practice<br>
  3. Play one song with us<br>
</p>`,
   explain:{vi:"Trông giống danh sách nhưng chỉ là MỘT đoạn văn với các dấu xuống dòng: không có ngữ nghĩa list, screen reader không đếm được số mục, không style được từng mục, số thứ tự tự gõ dễ sai khi sửa. Dùng ol/li thật để trình duyệt quản lý thứ tự.",
            en:"It looks like a list but is just ONE paragraph with line breaks: no list semantics, screen readers cannot count items, items cannot be styled individually, and hand-typed numbers go stale when edited. Use real ol/li and let the browser manage numbering."}}
]},
mistakes:[
  {title:{vi:"Chọn heading theo cỡ chữ mong muốn",en:"Choosing headings by desired font size"},
   wrong:
`<h1>Music Club</h1>
<h4>Our story</h4> <!-- picked h4 because "the size fits" -->`,
   right:
`<h1>Music Club</h1>
<h2>Our story</h2>
<style>h2{font-size:1.05rem}</style>`,
   why:{vi:"'Our story' là mục lớn ngay dưới chủ đề trang → phải là h2 bất kể muốn chữ nhỏ. Cỡ chữ là việc của CSS. Chọn heading theo cỡ chữ phá dàn ý và bị audit accessibility bắt lỗi.",
        en:"'Our story' is a major section right under the page topic → it must be h2 regardless of desired size. Size is CSS's job. Picking headings by size breaks the outline and fails accessibility audits."}},
  {title:{vi:"Dùng b thay strong cho điều quan trọng",en:"Using b instead of strong for important content"},
   wrong:`<p><b>Warning:</b> practice moved to Room B201.</p>`,
   right:`<p><strong>Warning:</strong> practice moved to Room B201.</p>`,
   why:{vi:"Cảnh báo đổi phòng là thông tin QUAN TRỌNG — người dùng screen reader cần được nhấn giọng, công cụ tìm kiếm cần hiểu mức độ. <code>b</code> chỉ in đậm câm lặng; <code>strong</code> mang đúng thông điệp đó.",
        en:"A room-change warning is IMPORTANT information — screen-reader users need the stress, search engines need the weight. <code>b</code> is silently bold; <code>strong</code> carries exactly that message."}},
  {title:{vi:"Đặt danh sách lồng giữa hai li",en:"Placing a nested list between two lis"},
   wrong:
`<ul>
  <li>Indie rock</li>
  <ul><li>Soft ballads</li></ul>
</ul>`,
   right:
`<ul>
  <li>Indie rock
    <ul><li>Soft ballads</li></ul>
  </li>
</ul>`,
   why:{vi:"Con của ul phải là li. Danh sách con đặt giữa các li là HTML không hợp lệ — trình duyệt sửa tạm nhưng cây DOM lệch, style và screen reader hiểu sai quan hệ cha-con. Danh sách lồng phải nằm TRONG li cha.",
        en:"A ul's children must be li. A nested list between lis is invalid HTML — browsers patch it, but the DOM tree skews and styles/screen readers misread the parent-child relation. Nested lists belong INSIDE the parent li."}}
],
oral:{
good:{vi:"Heading tạo dàn ý phân cấp: mỗi trang một h1 cho chủ đề chính, h2 cho mục lớn, h3 cho mục con, không nhảy cấp; muốn đổi cỡ chữ thì dùng CSS chứ không đổi cấp. Strong đánh dấu nội dung quan trọng, em đánh dấu nhấn mạnh ngữ điệu — cả hai mang ngữ nghĩa cho screen reader và SEO, còn b/i chỉ đậm/nghiêng thuần thị giác. Ul cho danh sách không cần thứ tự như thể loại nhạc; ol cho danh sách mà thứ tự là ý nghĩa, như ba bước gia nhập CLB của em ạ.",
      en:"Headings build a hierarchical outline: one h1 per page for the main topic, h2 for major sections, h3 for subsections, no skipped levels; to change size use CSS, not a different level. Strong marks important content, em marks spoken emphasis — both carry semantics for screen readers and SEO, while b/i are purely visual bold/italic. Ul is for lists where order does not matter, like genres; ol for lists where order IS meaning, like my club's three joining steps."},
followQ:{vi:"Nhìn strong và b đều in đậm như nhau — vậy khác gì? Cho ví dụ câu mà em làm đổi nghĩa.",
         en:"Strong and b both render bold — so what is the difference? Give a sentence where em changes the meaning."},
followA:{vi:"Dạ khác ở ngữ nghĩa: strong báo 'quan trọng' để screen reader nhấn giọng và công cụ hiểu trọng tâm, b chỉ là kiểu chữ. Ví dụ em: 'Em thích <em>guitar</em>' nghĩa là thích guitar chứ không phải nhạc cụ khác; còn 'Em thích guitar <em>hôm nay</em>' nghĩa là hôm nay thích, mọi khi thì chưa chắc — cùng một câu, trọng âm khác, nghĩa khác ạ.",
         en:"The difference is semantic: strong says 'important' so screen readers add stress and tools grasp the focus; b is just typography. For em: 'I like <em>guitar</em>' means guitar rather than other instruments; 'I like guitar <em>today</em>' means today specifically, not necessarily always — same words, different stress, different meaning."},
weak:{vi:"h1 to nhất, h6 nhỏ nhất. strong in đậm, em in nghiêng. ul là gạch đầu dòng, ol là đánh số ạ.",
      en:"h1 is biggest, h6 smallest. strong is bold, em is italic. ul is bullets, ol is numbers."},
weakWhy:{vi:"Toàn mô tả HÌNH THỨC — chính cái bẫy giảng viên giăng: 'vậy chọn h4 vì cỡ chữ vừa được không?' Em sẽ gật và sai. Không có ngữ nghĩa, không có quy tắc thứ bậc, không có 'thứ tự có ý nghĩa'.",
         en:"Purely VISUAL descriptions — exactly the trap the lecturer sets: 'so can I pick h4 because the size fits?' You would nod and fail. No semantics, no hierarchy rule, no 'order is meaning'."},
goodWhy:{vi:"Trả lời bằng chức năng và quy tắc (dàn ý, không nhảy cấp, CSS lo cỡ chữ, ngữ nghĩa vs thị giác, thứ tự có nghĩa), kèm ví dụ em đổi nghĩa câu — mức hiểu sâu thật sự.",
         en:"Answers with function and rules (outline, no skipping, CSS handles size, semantic vs visual, meaningful order), plus an em example that changes sentence meaning — genuinely deep understanding."},
checklist:[
  {vi:"h1 duy nhất/chủ đề; h2 mục lớn, h3 mục con; không nhảy cấp",en:"One h1/topic; h2 major, h3 sub; never skip levels"},
  {vi:"Cỡ chữ dùng CSS, không chọn heading theo size",en:"Size via CSS, never pick headings by size"},
  {vi:"strong/em mang ngữ nghĩa; b/i thuần thị giác",en:"strong/em are semantic; b/i purely visual"},
  {vi:"ul: thứ tự không quan trọng; ol: thứ tự là ý nghĩa",en:"ul: order irrelevant; ol: order is meaning"},
  {vi:"Ví dụ Music Club + danh sách lồng trong li",en:"Music Club examples + nested list inside li"}
]},
cheat:{vi:"Heading = dàn ý (h1→h2→h3, không nhảy cấp, size để CSS). strong/em = nghĩa; b/i = hình. ul không thứ tự, ol có thứ tự.",
       en:"Headings = outline (h1→h2→h3, no skips, size via CSS). strong/em = meaning; b/i = looks. ul unordered, ol ordered."},
cheatCode:
`<h1>About</h1><h2>Story</h2><h3>Genres</h3>
<strong>Important!</strong> <em>emphasis</em>
<ol><li>Step 1</li><li>Step 2</li></ol>`
},

/* ===== Q8 · Buổi 9 · Table ===== */
{
id:"q8", num:8, diff:"medium",
session:{vi:"Buổi 9",en:"Session 9"},
title:{vi:"Bảng dữ liệu: tr/th/td, thead/tbody, colspan — và vì sao không dùng table làm layout",en:"Data tables: tr/th/td, thead/tbody, colspan — and why tables are not for layout"},
question:{
  vi:"Dựng bảng lịch hoạt động của Music Club bằng HTML thế nào? Phân biệt <code>th</code> và <code>td</code>, vai trò của <code>thead/tbody/caption</code>, và <code>colspan</code> hoạt động ra sao? Vì sao không nên dùng table để dựng bố cục trang?",
  en:"How do you build the Music Club schedule table in HTML? Distinguish <code>th</code> from <code>td</code>, explain <code>thead/tbody/caption</code>, and how <code>colspan</code> works. Why should tables not be used for page layout?"
},
definition:{
  en:"An HTML table presents DATA in rows and columns: <tr> is a row, <th> a header cell, <td> a data cell; colspan/rowspan let one cell span multiple columns/rows.",
  vi:"Bảng HTML trình bày DỮ LIỆU dạng hàng–cột: <code>&lt;tr&gt;</code> là một hàng, <code>&lt;th&gt;</code> là ô tiêu đề, <code>&lt;td&gt;</code> là ô dữ liệu; <code>colspan/rowspan</code> cho một ô trải rộng nhiều cột/hàng."
},
theory:[
  {h:{vi:"Bộ khung của bảng",en:"The table skeleton"},
   p:{vi:"<code>table</code> bọc tất cả → <code>caption</code> là tên bảng (hiện phía trên, giúp mọi người hiểu bảng nói gì) → <code>thead</code> chứa hàng tiêu đề với các <code>th</code> → <code>tbody</code> chứa các hàng dữ liệu <code>tr</code>, mỗi hàng gồm các <code>td</code>. Số ô mỗi hàng nên khớp số cột. <code>th</code> mặc định đậm/căn giữa, nhưng quan trọng hơn: nó khai báo 'tôi là TIÊU ĐỀ của cột/hàng này' — thêm <code>scope=\"col\"</code> hoặc <code>scope=\"row\"</code> để screen reader đọc 'Thứ Sáu: 18:00, Acoustic practice' thay vì đọc một dãy số vô nghĩa.",
      en:"<code>table</code> wraps everything → <code>caption</code> names the table (shown above, tells everyone what it is about) → <code>thead</code> holds the header row of <code>th</code> cells → <code>tbody</code> holds data rows <code>tr</code>, each made of <code>td</code> cells. Cell counts per row should match the column count. <code>th</code> defaults to bold/centered, but more importantly it declares 'I am the HEADER of this column/row' — add <code>scope=\"col\"</code> or <code>scope=\"row\"</code> so screen readers announce 'Friday: 6pm, Acoustic practice' instead of a meaningless string of values."}},
  {h:{vi:"colspan và rowspan",en:"colspan and rowspan"},
   p:{vi:"<code>colspan=\"2\"</code> trên một ô nghĩa là ô đó CHIẾM 2 CỘT — hàng đó sẽ có ít ô hơn các hàng khác (đếm tổng cột phải luôn bằng nhau). <code>rowspan=\"2\"</code> cho ô trải 2 HÀNG. Dùng cho ô ghi chú cuối bảng lịch ('Mọi buổi đều tại B201' trải suốt 4 cột), hoặc gộp ô 'Thứ' khi hai hoạt động cùng ngày. Lạm dụng gộp ô làm bảng khó đọc với screen reader — chỉ gộp khi thật sự cần.",
      en:"<code>colspan=\"2\"</code> on a cell means it SPANS 2 COLUMNS — that row has fewer cells than others (total column count must always match). <code>rowspan=\"2\"</code> spans 2 ROWS. Use it for a footer note cell in the schedule ('All sessions in B201' across all 4 columns), or merging a 'Day' cell for two same-day activities. Over-merging hurts screen-reader readability — merge only when truly needed."}},
  {h:{vi:"Table là dữ liệu, không phải bố cục",en:"Tables are for data, not layout"},
   p:{vi:"Thời trước người ta dùng table lồng nhau để chia cột cả trang — đó là <strong>table layout</strong>, nay là thực hành xấu: code nặng, khó bảo trì, khó responsive, và screen reader hiểu nhầm nội dung là dữ liệu bảng. Bố cục trang hiện đại dùng CSS (Flexbox, Grid — buổi 5–6). Table chỉ quay lại khi nội dung THẬT SỰ là dữ liệu hàng–cột: lịch hoạt động, bảng giá, danh sách điểm.",
      en:"People once nested tables to split whole pages into columns — that is <strong>table layout</strong>, now a bad practice: heavy code, hard maintenance, poor responsiveness, and screen readers misread content as tabular data. Modern page layout uses CSS (Flexbox, Grid — sessions 5–6). Tables return only when content IS genuinely row–column data: schedules, price lists, grade sheets."}}
],
analogy:{
  vi:"Bảng như thời khóa biểu dán tường: caption là tờ tiêu đề 'LỊCH TẬP MUSIC CLUB', thead là hàng chữ in đậm 'Thứ | Giờ | Môn', tbody là các ô ghi kín. colspan như một dòng ghi chú kẻ ngang cả bảng: 'NGHỈ TẾT' — một ô choán hết mọi cột. Còn dùng bảng để xây cả căn nhà (layout) là lấy thời khóa biểu làm khung bê tông — sai công cụ.",
  en:"A table is the wall-pinned timetable: caption is the heading sheet 'MUSIC CLUB SCHEDULE', thead is the bold header row 'Day | Time | Activity', tbody is the filled cells. colspan is a note ruled across the whole table: 'TET HOLIDAY' — one cell spanning every column. Using tables to build the whole house (layout) is using a timetable as concrete framing — wrong tool."
},
compare:{
  caption:{vi:"th vs td và các thẻ thành phần",en:"th vs td and the component tags"},
  head:[{vi:"Thẻ",en:"Tag"},{vi:"Vai trò",en:"Role"},{vi:"Ghi nhớ",en:"Memory hook"}],
  rows:[
    [{vi:"<code>caption</code>",en:"<code>caption</code>"},{vi:"Tên/mô tả bảng",en:"Table name/description"},{vi:"Đứa con ĐẦU của table",en:"FIRST child of table"}],
    [{vi:"<code>thead / tbody</code>",en:"<code>thead / tbody</code>"},{vi:"Nhóm hàng tiêu đề / dữ liệu",en:"Groups header / data rows"},{vi:"Giúp ngữ nghĩa + style + in ấn",en:"Semantics + styling + printing"}],
    [{vi:"<code>tr</code>",en:"<code>tr</code>"},{vi:"Một hàng (table row)",en:"One row"},{vi:"Chứa th hoặc td",en:"Contains th or td"}],
    [{vi:"<code>th scope</code>",en:"<code>th scope</code>"},{vi:"Ô TIÊU ĐỀ cột/hàng",en:"HEADER cell of a column/row"},{vi:"screen reader đọc kèm dữ liệu",en:"screen reader pairs it with data"}],
    [{vi:"<code>td</code>",en:"<code>td</code>"},{vi:"Ô DỮ LIỆU",en:"DATA cell"},{vi:"Nội dung thật của bảng",en:"The actual table content"}],
    [{vi:"<code>colspan / rowspan</code>",en:"<code>colspan / rowspan</code>"},{vi:"Ô trải nhiều cột / hàng",en:"Cell spans columns / rows"},{vi:"Tổng số cột mỗi hàng phải khớp",en:"Column totals per row must match"}]
  ]
},
example:{file:"music-club / index.html (fragment)",code:
`<table>
  <caption>Music Club — Weekly Schedule (Fall 2026)</caption>
  <thead>
    <tr>
      <th scope="col">Day</th>
      <th scope="col">Time</th>
      <th scope="col">Activity</th>
      <th scope="col">Room</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Friday</th> <!-- row header -->
      <td>18:00</td><td>Acoustic practice</td><td>B201</td>
    </tr>
    <tr>
      <th scope="row">Saturday</th>
      <td>15:00</td><td>Band rehearsal</td><td>Hall A</td>
    </tr>
    <tr>
      <td colspan="4">All sessions open to new members — bring your instrument!</td>
    </tr>
  </tbody>
</table>`},
lecture:{
steps:[
  {code:
`<table>
  <caption>Music Club — Weekly Schedule</caption>
  <tr>
    <td>Friday</td><td>18:00</td><td>Acoustic practice</td>
  </tr>
</table>`,
   say:{vi:"Khởi động: <code>table</code> + <code>caption</code> đặt tên bảng, rồi một hàng <code>tr</code> với ba ô <code>td</code>. Bảng đã hiện, nhưng chưa có HÀNG TIÊU ĐỀ — người đọc phải đoán '18:00' là giờ gì. Bước sau sửa điều đó.",
        en:"Warm-up: <code>table</code> + <code>caption</code> naming it, then one <code>tr</code> row with three <code>td</code> cells. The table shows, but there is no HEADER ROW — readers must guess what '18:00' means. The next step fixes that."},
   note:{vi:"caption phải là đứa con ĐẦU TIÊN của table — đặt sau tr là sai thứ tự khai báo.",
         en:"caption must be the FIRST child of table — placing it after tr is an ordering error."}},
  {code:
`<table>
  <caption>Music Club — Weekly Schedule</caption>
  <thead>
    <tr>
      <th scope="col">Day</th>
      <th scope="col">Time</th>
      <th scope="col">Activity</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Friday</td><td>18:00</td><td>Acoustic practice</td></tr>
  </tbody>
</table>`,
   say:{vi:"Thêm <code>thead</code> với hàng <code>th scope=\"col\"</code>: Day, Time, Activity. Chữ đậm lên tự động, nhưng giá trị thật là ngữ nghĩa — screen reader giờ đọc 'Time: 18:00' thay vì '18:00' trơ trọi. <code>tbody</code> gom phần dữ liệu.",
        en:"Add <code>thead</code> with a row of <code>th scope=\"col\"</code>: Day, Time, Activity. They bold automatically, but the real value is semantic — screen readers now announce 'Time: 18:00' instead of a bare '18:00'. <code>tbody</code> groups the data."},
   note:{vi:"Gặng: 'th khác td gì ngoài in đậm?' → th là ô tiêu đề, gắn ngữ nghĩa header cho screen reader qua scope; td là dữ liệu thuần.",
         en:"Follow-up: 'Beyond bold, how does th differ from td?' → th is a header cell giving screen readers header semantics via scope; td is plain data."}},
  {code:
`<table>
  <caption>Music Club — Weekly Schedule</caption>
  <thead>
    <tr><th scope="col">Day</th><th scope="col">Time</th><th scope="col">Activity</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Friday</th><td>18:00</td><td>Acoustic practice</td></tr>
    <tr><th scope="row">Saturday</th><td>15:00</td><td>Band rehearsal</td></tr>
  </tbody>
</table>`,
   say:{vi:"Thêm hàng thứ hai, và nâng cấp: ô đầu mỗi hàng là <code>th scope=\"row\"</code> — 'Friday' là TIÊU ĐỀ của hàng đó. Giờ screen reader đọc trọn ngữ cảnh: 'Friday, Time 18:00, Activity Acoustic practice'. Bảng dữ liệu tử tế là bảng đọc được bằng tai.",
        en:"Add the second row, and upgrade: each row's first cell is <code>th scope=\"row\"</code> — 'Friday' HEADS that row. Screen readers now announce full context: 'Friday, Time 18:00, Activity Acoustic practice'. A decent data table is readable by ear."},
   note:{vi:"scope='col' cho tiêu đề cột, scope='row' cho tiêu đề hàng. Đây là chi tiết ăn điểm accessibility của buổi 9.",
         en:"scope='col' for column headers, scope='row' for row headers. This is the accessibility point-scorer of Session 9."}},
  {code:
`<table>
  <caption>Music Club — Weekly Schedule</caption>
  <thead>
    <tr><th scope="col">Day</th><th scope="col">Time</th><th scope="col">Activity</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Friday</th><td>18:00</td><td>Acoustic practice</td></tr>
    <tr><th scope="row">Saturday</th><td>15:00</td><td>Band rehearsal</td></tr>
    <tr>
      <td colspan="3">All sessions open to new members!</td>
    </tr>
  </tbody>
</table>`,
   say:{vi:"Mảnh ghép cuối: hàng ghi chú với <code>colspan=\"3\"</code> — MỘT ô trải hết 3 cột. Hàng này chỉ có 1 ô nhưng tổng cột vẫn là 3, khớp các hàng trên. Đó là luật đếm cột khi gộp ô.",
        en:"Final piece: a note row with <code>colspan=\"3\"</code> — ONE cell spanning all 3 columns. This row has a single cell but its column total is still 3, matching the rows above. That is the column-counting law of merged cells."},
   note:{vi:"Gặng: 'colspan=2 nghĩa gì?' → ô chiếm ngang 2 cột; hàng đó bớt đi 1 ô thường. rowspan tương tự nhưng theo hàng dọc.",
         en:"Follow-up: 'What does colspan=2 mean?' → the cell spans 2 columns; that row has one fewer regular cell. rowspan is the same vertically."}}
],
errors:[
  {label:{vi:"colspan vượt số cột",en:"colspan exceeding the column count"},
   code:
`<table>
  <caption>Weekly Schedule</caption>
  <tr><th>Day</th><th>Time</th><th>Activity</th></tr>
  <tr><td>Friday</td><td>18:00</td><td>Acoustic practice</td></tr>
  <tr><td colspan="5">Note: bring your instrument!</td></tr>
</table>`,
   explain:{vi:"Bảng có 3 cột nhưng ô ghi chú khai <code>colspan=\"5\"</code> — nó thò ra ngoài lưới, tạo cột ma rộng hơn phần còn lại, bảng vỡ hình dạng. Sửa: colspan phải đúng bằng số cột còn lại của hàng (ở đây là 3).",
            en:"The table has 3 columns but the note declares <code>colspan=\"5\"</code> — it pokes past the grid, creating phantom columns wider than the rest, and the table's shape breaks. Fix: colspan must equal the row's remaining column count (3 here)."}},
  {label:{vi:"Tiêu đề viết bằng td",en:"Headers written as td"},
   code:
`<table>
  <caption>Weekly Schedule</caption>
  <tr><td>Day</td><td>Time</td><td>Activity</td></tr>
  <tr><td>Friday</td><td>18:00</td><td>Acoustic practice</td></tr>
  <tr><td>Saturday</td><td>15:00</td><td>Band rehearsal</td></tr>
</table>`,
   explain:{vi:"Trông gần giống, nhưng hàng 'Day/Time/Activity' là td thường: không đậm, không có ngữ nghĩa header. Screen reader đọc 'Friday 18:00 Acoustic practice' như một chuỗi rời — người nghe không biết 18:00 là gì. Đổi hàng đầu thành th scope='col' là bảng 'biết nói'.",
            en:"It looks similar, but the 'Day/Time/Activity' row is plain td: no bold, no header semantics. Screen readers read 'Friday 18:00 Acoustic practice' as a loose string — listeners cannot tell what 18:00 is. Switching the first row to th scope='col' makes the table 'speak'."}}
]},
mistakes:[
  {title:{vi:"Dùng table để chia bố cục trang",en:"Using a table for page layout"},
   wrong:
`<table> <!-- layout hack: sidebar + content -->
  <tr>
    <td width="200">Menu here</td>
    <td>Main content here</td>
  </tr>
</table>`,
   right:
`<div class="layout"> <!-- CSS handles layout -->
  <nav>Menu here</nav>
  <main>Main content here</main>
</div>
<style>.layout{display:flex;gap:20px}</style>`,
   why:{vi:"Nội dung không phải dữ liệu hàng–cột thì table chỉ gây hại: screen reader thông báo 'table with 2 cells' vô nghĩa, khó responsive, code lồng nặng nề. Bố cục là việc của CSS Flexbox/Grid (buổi 5–6); table dành cho lịch, bảng giá, điểm số.",
        en:"If the content is not row–column data, tables only hurt: screen readers announce a meaningless 'table with 2 cells', responsiveness suffers, nested code gets heavy. Layout belongs to CSS Flexbox/Grid (sessions 5–6); tables are for schedules, prices, grades."}},
  {title:{vi:"Quên caption và scope",en:"Forgetting caption and scope"},
   wrong:
`<table>
  <tr><th>Day</th><th>Time</th></tr>
  <tr><td>Friday</td><td>18:00</td></tr>
</table>`,
   right:
`<table>
  <caption>Music Club — Weekly Schedule</caption>
  <tr><th scope="col">Day</th><th scope="col">Time</th></tr>
  <tr><th scope="row">Friday</th><td>18:00</td></tr>
</table>`,
   why:{vi:"Không caption, người dùng không biết bảng nói gì trước khi đọc; không scope, screen reader không nối được ô dữ liệu với tiêu đề đúng. Hai chi tiết nhỏ quyết định bảng có accessible hay không.",
        en:"Without caption, users do not know what the table is about before reading; without scope, screen readers cannot pair data cells with the right headers. Two small details decide whether a table is accessible."}},
  {title:{vi:"Số ô các hàng không khớp (thiếu ô)",en:"Mismatched cell counts (missing cell)"},
   wrong:
`<table>
  <tr><th>Day</th><th>Time</th><th>Room</th></tr>
  <tr><td>Friday</td><td>18:00</td></tr>
</table>`,
   right:
`<table>
  <tr><th>Day</th><th>Time</th><th>Room</th></tr>
  <tr><td>Friday</td><td>18:00</td><td>B201</td></tr>
</table>`,
   why:{vi:"Hàng dữ liệu thiếu ô thứ ba → lưới lệch, cột Room trống lơ lửng và các hàng sau dễ dồn sai cột. Mỗi hàng phải đủ ô (tính cả colspan): đếm tổng cột trước khi viết.",
        en:"The data row lacks its third cell → the grid skews, the Room column hangs empty, and later cells can shift into wrong columns. Every row needs its full cell count (colspan included): count columns before writing."}}
],
oral:{
good:{vi:"Bảng lịch của Music Club gồm table bọc caption đặt tên bảng, thead chứa hàng tiêu đề với th scope='col' cho Day, Time, Activity, Room, rồi tbody chứa các hàng tr — mỗi hàng có th scope='row' cho thứ và các td dữ liệu. Th khác td ở chỗ nó là ô tiêu đề, screen reader nhờ scope mà đọc dữ liệu kèm ngữ cảnh. Colspan cho một ô trải nhiều cột, ví dụ hàng ghi chú colspan='4' chiếm trọn bảng, và tổng cột mỗi hàng vẫn phải khớp ạ.",
      en:"My Music Club schedule table has table wrapping a caption naming it, thead with a header row of th scope='col' for Day, Time, Activity, Room, then tbody with tr rows — each having th scope='row' for the day and td data cells. Th differs from td by being a header cell; thanks to scope, screen readers read data with context. Colspan lets one cell span columns, e.g. a note row with colspan='4' covering the table, while each row's column total must still match."},
followQ:{vi:"Vì sao không dùng table để dựng bố cục cả trang? Và colspan='2' nghĩa là gì chính xác?",
         en:"Why not use tables to lay out the whole page? And what exactly does colspan='2' mean?"},
followA:{vi:"Dạ vì bố cục không phải dữ liệu bảng: dùng table làm layout khiến screen reader hiểu nhầm nội dung là bảng, code nặng khó bảo trì và khó responsive — bố cục nên dùng CSS Flexbox/Grid như buổi 5–6 đã học. Colspan='2' nghĩa là ô đó chiếm ngang hai cột, nên hàng chứa nó sẽ có ít hơn một ô thường, miễn tổng số cột vẫn bằng các hàng khác ạ.",
         en:"Because layout is not tabular data: table layout makes screen readers misread content as a table, the code is heavy and hard to maintain or make responsive — layout should use CSS Flexbox/Grid as taught in sessions 5–6. Colspan='2' means the cell spans two columns horizontally, so its row has one fewer regular cell, as long as the column total still equals the other rows."},
weak:{vi:"Table là bảng, tr là hàng, td là ô. th thì in đậm. colspan là gộp ô ạ.",
      en:"Table is a table, tr is a row, td is a cell. th is bold. colspan merges cells."},
weakWhy:{vi:"Đúng từ vựng nhưng thiếu ngữ nghĩa: không caption/scope/thead, không giải thích vì sao th quan trọng với screen reader, không nêu luật đếm cột, và không biết table-layout là thực hành xấu — bốn câu gặng chờ sẵn.",
         en:"Right vocabulary, missing semantics: no caption/scope/thead, no explanation of why th matters to screen readers, no column-counting law, and no awareness that table-layout is bad practice — four follow-ups waiting."},
goodWhy:{vi:"Mô tả bảng như một hệ thống có ngữ nghĩa (caption, scope, thead/tbody), giải thích colspan bằng luật đếm cột, và phân biệt rõ dữ liệu vs bố cục — đúng trọng tâm buổi 9.",
         en:"Describes the table as a semantic system (caption, scope, thead/tbody), explains colspan via the counting law, and cleanly separates data from layout — exactly Session 9's focus."},
checklist:[
  {vi:"Cấu trúc: table > caption + thead(th) + tbody(tr > td)",en:"Structure: table > caption + thead(th) + tbody(tr > td)"},
  {vi:"th = ô tiêu đề + scope col/row cho screen reader; td = dữ liệu",en:"th = header cell + scope col/row for screen readers; td = data"},
  {vi:"colspan/rowspan: ô trải cột/hàng; tổng cột mỗi hàng phải khớp",en:"colspan/rowspan: cell spans columns/rows; row column totals must match"},
  {vi:"Không dùng table làm layout — CSS Flex/Grid",en:"No table layout — CSS Flex/Grid"},
  {vi:"Ví dụ lịch Music Club cụ thể",en:"Concrete Music Club schedule example"}
]},
cheat:{vi:"table > caption + thead(th scope=col) + tbody(tr > th scope=row / td). colspan trải cột, đếm tổng phải khớp. Layout dùng CSS, không table.",
       en:"table > caption + thead(th scope=col) + tbody(tr > th scope=row / td). colspan spans columns, totals must match. Layout via CSS, not tables."},
cheatCode:
`<table><caption>Schedule</caption>
<thead><tr><th scope="col">Day</th><th>Time</th></tr></thead>
<tbody><tr><th scope="row">Fri</th><td>18:00</td></tr>
<tr><td colspan="2">Note</td></tr></tbody></table>`
},
/* ===== Q9 · Buổi 13 · Form ===== */
{
id:"q9", num:9, diff:"hard",
session:{vi:"Buổi 13",en:"Session 13"},
title:{vi:"Form: action/method, GET vs POST, label, name — dữ liệu đi về đâu?",en:"Forms: action/method, GET vs POST, label, name — where does data go?"},
question:{
  vi:"Dựng form liên hệ/gia nhập Music Club cần những gì? <code>action</code> và <code>method</code> quyết định điều gì? GET khác POST ra sao? Vì sao mỗi input cần <code>name</code> và <code>label</code>?",
  en:"What does the Music Club contact/join form need? What do <code>action</code> and <code>method</code> decide? How do GET and POST differ? Why does every input need a <code>name</code> and a <code>label</code>?"
},
definition:{
  en:"A form collects user input and submits it to a server: action is the destination URL, method is HOW the data travels — GET appends it to the URL, POST sends it inside the request body.",
  vi:"Form (biểu mẫu) thu thập dữ liệu người dùng và gửi tới server: <code>action</code> là URL nhận dữ liệu, <code>method</code> là CÁCH dữ liệu đi — GET gắn dữ liệu lên URL, POST gửi trong phần thân (body) của request."
},
theory:[
  {h:{vi:"action + method — địa chỉ và cách gửi",en:"action + method — the address and the shipping mode"},
   p:{vi:"<code>&lt;form action=\"URL\" method=\"get|post\"&gt;</code>. Khi bấm submit, trình duyệt gom mọi input CÓ NAME thành các cặp <code>name=value</code> rồi gửi tới action. <strong>GET</strong>: dữ liệu hiện trên URL (<code>?name=Linh&amp;email=…</code>) — bookmark được, share được, nhưng ai nhìn URL cũng thấy, và độ dài bị giới hạn; hợp cho tìm kiếm, lọc. <strong>POST</strong>: dữ liệu nằm trong body request, không hiện URL — hợp cho đăng nhập, form liên hệ, dữ liệu nhạy cảm hoặc lớn. Không có server thật? Form vẫn demo được cấu trúc, nhưng muốn xử lý dữ liệu phải có backend hoặc dịch vụ form.",
      en:"<code>&lt;form action=\"URL\" method=\"get|post\"&gt;</code>. On submit, the browser collects every input WITH A NAME into <code>name=value</code> pairs and sends them to action. <strong>GET</strong>: data appears in the URL (<code>?name=Linh&amp;email=…</code>) — bookmarkable, shareable, but visible to anyone reading the URL, with length limits; good for search/filter. <strong>POST</strong>: data rides in the request body, invisible in the URL — good for login, contact forms, sensitive or large data. No real server? The form still demos its structure, but processing data needs a backend or a form service."}},
  {h:{vi:"name và label — hai thứ dễ quên nhất",en:"name and label — the two most-forgotten things"},
   p:{vi:"<code>name</code> là KEY của cặp name=value gửi server — input không name thì dữ liệu bị BỎ RƠI khi submit, dù người dùng gõ đầy đủ. <code>label</code> là nhãn hiển thị; nối với input bằng <code>for=\"id-của-input\"</code> (khớp chính xác <code>id</code>). Nhờ nối đúng: bấm vào chữ label cũng focus vào ô nhập (vùng bấm rộng hơn — tốt cho mobile), và screen reader đọc 'Your name, edit text' thay vì 'edit text' trống trơn. <code>placeholder</code> KHÔNG thay được label: nó biến mất khi gõ và tương phản kém.",
      en:"<code>name</code> is the KEY of the name=value pair sent to the server — an input without a name is DROPPED on submit, no matter what the user typed. <code>label</code> is the visible caption; bind it with <code>for=\"the-inputs-id\"</code> (matching the <code>id</code> exactly). Correct binding means: clicking the label text focuses the input (bigger tap target — great for mobile), and screen readers announce 'Your name, edit text' instead of a bare 'edit text'. <code>placeholder</code> cannot replace a label: it vanishes on typing and has poor contrast."}},
  {h:{vi:"Các loại input và nhóm trường",en:"Input types and field grouping"},
   p:{vi:"Buổi 13 cover: <code>type=\"text\"</code> chữ thường, <code>email</code> (tự kiểm tra có @), <code>password</code> (che ký tự), <code>tel</code>, <code>number</code>, <code>date</code>; <code>radio</code> chọn MỘT trong nhóm (cùng name), <code>checkbox</code> chọn nhiều; <code>select &gt; option</code> danh sách thả xuống; <code>textarea</code> văn bản dài; <code>fieldset + legend</code> gom nhóm trường liên quan (vd 'Trình độ'); <code>button type=\"submit\"</code> gửi form. Thuộc tính <code>required</code> chặn submit khi bỏ trống — validation phía trình duyệt, tiện nhưng không thay được kiểm tra phía server.",
      en:"Session 13 covers: <code>type=\"text\"</code> plain text, <code>email</code> (auto-checks for @), <code>password</code> (masked), <code>tel</code>, <code>number</code>, <code>date</code>; <code>radio</code> picks ONE of a group (same name), <code>checkbox</code> picks many; <code>select &gt; option</code> dropdowns; <code>textarea</code> long text; <code>fieldset + legend</code> groups related fields (e.g. 'Skill level'); <code>button type=\"submit\"</code> sends the form. The <code>required</code> attribute blocks submit when empty — browser-side validation, handy but no substitute for server-side checks."}}
],
analogy:{
  vi:"Form như tờ đơn gia nhập CLB gửi văn phòng: action là địa chỉ phòng nhận đơn, method là cách gửi — GET như viết nội dung đơn lên PHONG BÌ (ai cầm cũng đọc được), POST như bỏ vào phong bì dán kín. name là tên từng mục ('Họ tên:', 'Email:') — mục không tên thì phòng nhận không biết xử lý vào đâu; label là dòng chữ in cạnh ô trống giúp người điền biết điền gì.",
  en:"A form is the club application sent to the office: action is the receiving office's address; method is the shipping mode — GET writes the content on the ENVELOPE (anyone handling it reads it), POST seals it inside. name is each field's title ('Full name:', 'Email:') — an untitled field cannot be filed; label is the printed caption beside the blank telling people what to write."
},
compare:{
  caption:{vi:"GET vs POST",en:"GET vs POST"},
  head:[{vi:"Tiêu chí",en:"Criterion"},{vi:"GET",en:"GET"},{vi:"POST",en:"POST"}],
  rows:[
    [{vi:"Dữ liệu nằm ở",en:"Data travels in"},{vi:"URL (query string ?a=1&b=2)",en:"URL (query string ?a=1&b=2)"},{vi:"Body của request",en:"Request body"}],
    [{vi:"Ai thấy được?",en:"Who can see it?"},{vi:"URL, lịch sử, server log — lộ",en:"URL, history, server logs — exposed"},{vi:"Không hiện trên URL",en:"Not shown in the URL"}],
    [{vi:"Bookmark / share kết quả",en:"Bookmark / share results"},{vi:"Được",en:"Yes"},{vi:"Không",en:"No"}],
    [{vi:"Giới hạn độ dài",en:"Length limit"},{vi:"Có (theo URL)",en:"Yes (URL-bound)"},{vi:"Thực tế không giới hạn",en:"Practically unlimited"}],
    [{vi:"Hợp với",en:"Good for"},{vi:"Tìm kiếm, lọc, truy vấn",en:"Search, filters, queries"},{vi:"Đăng nhập, liên hệ, dữ liệu nhạy cảm",en:"Login, contact, sensitive data"}]
  ]
},
example:{file:"music-club / contact.html (fragment)",code:
`<form action="/submit-join" method="post"> <!-- POST: personal data -->
  <fieldset>
    <legend>Join Music Club</legend>

    <label for="fullname">Your name</label> <!-- for = input's id -->
    <input type="text" id="fullname" name="fullname" required>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>

    <label for="instrument">Main instrument</label>
    <select id="instrument" name="instrument">
      <option value="vocals">Vocals</option>
      <option value="guitar">Guitar</option>
      <option value="drums">Drums</option>
    </select>
  </fieldset>

  <fieldset>
    <legend>Skill level</legend> <!-- radio group shares ONE name -->
    <label><input type="radio" name="level" value="beginner"> Beginner</label>
    <label><input type="radio" name="level" value="intermediate"> Intermediate</label>
  </fieldset>

  <label for="message">Anything to tell us?</label>
  <textarea id="message" name="message" rows="4"></textarea>

  <button type="submit">Send application</button>
</form>`},
lecture:{
steps:[
  {code:
`<form action="/submit-join" method="post">
  <label for="fullname">Your name</label>
  <input type="text" id="fullname" name="fullname">
  <button type="submit">Send</button>
</form>`,
   say:{vi:"Form tối thiểu: <code>action</code>='/submit-join' là nơi nhận đơn, <code>method=\"post\"</code> vì đây là dữ liệu cá nhân. Một input text với đủ bộ ba: <code>id</code> để label nối vào, <code>name</code> để server nhận, <code>label for</code> khớp id. Bấm thử chữ 'Your name' trong preview — con trỏ nhảy vào ô luôn!",
        en:"The minimal form: <code>action</code>='/submit-join' is where applications go, <code>method=\"post\"</code> because this is personal data. One text input with the full trio: <code>id</code> for the label to bind, <code>name</code> for the server, <code>label for</code> matching the id. Click the 'Your name' text in the preview — the cursor jumps into the field!"},
   note:{vi:"Demo label-for là phép thử accessibility rẻ nhất: click chữ mà ô không focus → for/id lệch nhau. Giảng viên rất hay bắt thử tại chỗ.",
         en:"The label-for demo is the cheapest accessibility test: click the text, field does not focus → for/id mismatch. Lecturers love making you test this live."}},
  {code:
`<form action="/submit-join" method="post">
  <label for="fullname">Your name</label>
  <input type="text" id="fullname" name="fullname" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Send</button>
</form>`,
   say:{vi:"Thêm ô email: <code>type=\"email\"</code> tự kiểm tra định dạng có @ — thử gõ 'abc' rồi bấm Send, trình duyệt chặn lại. <code>required</code> chặn bỏ trống. Đây là validation phía client: tiện, nhưng server vẫn phải kiểm tra lại vì client có thể bị vượt qua.",
        en:"Add the email field: <code>type=\"email\"</code> auto-checks for an @ — type 'abc' and press Send; the browser blocks it. <code>required</code> blocks empties. This is client-side validation: handy, but the server must re-check because clients can be bypassed."},
   note:{vi:"Gặng: 'required có đủ an toàn không?' → không, chỉ là UX; validation thật nằm ở server. Và type=email không gửi mail — chỉ kiểm tra định dạng.",
         en:"Follow-up: 'Is required safe enough?' → no, it is UX only; real validation lives on the server. And type=email does not send mail — it only checks format."}},
  {code:
`<form action="/submit-join" method="post">
  <label for="fullname">Your name</label>
  <input type="text" id="fullname" name="fullname" required>
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <label for="instrument">Main instrument</label>
  <select id="instrument" name="instrument">
    <option value="vocals">Vocals</option>
    <option value="guitar">Guitar</option>
    <option value="drums">Drums</option>
  </select>

  <fieldset>
    <legend>Skill level</legend>
    <label><input type="radio" name="level" value="beginner"> Beginner</label>
    <label><input type="radio" name="level" value="intermediate"> Intermediate</label>
  </fieldset>

  <button type="submit">Send</button>
</form>`,
   say:{vi:"Select cho nhạc cụ — để ý <code>value</code> mới là thứ gửi server ('guitar'), còn chữ hiển thị có thể khác. Radio 'Skill level': hai nút CÙNG name='level' nên chỉ chọn được MỘT — cùng name là cơ chế nhóm của radio. <code>fieldset + legend</code> gom nhóm thành vùng có tên, screen reader đọc 'Skill level, grouping' rồi mới tới từng lựa chọn.",
        en:"A select for instruments — note the <code>value</code> is what gets sent ('guitar'), while the visible text may differ. The 'Skill level' radios: both share name='level', so only ONE can be chosen — a shared name IS the radio grouping mechanism. <code>fieldset + legend</code> wraps the group in a named region; screen readers announce 'Skill level, grouping' before the options."},
   note:{vi:"Bẫy: hai radio khác name thì chọn được cả hai — mất tính 'chọn một'. Câu gặng: 'vì sao radio cùng nhóm phải cùng name?' → vì name định nghĩa nhóm.",
         en:"Trap: radios with different names allow selecting both — losing the 'pick one' behavior. Follow-up: 'Why must grouped radios share a name?' → the name defines the group."}},
  {code:
`<form action="/submit-join" method="post">
  <fieldset>
    <legend>Join Music Club</legend>
    <label for="fullname">Your name</label>
    <input type="text" id="fullname" name="fullname" required>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
    <label for="instrument">Main instrument</label>
    <select id="instrument" name="instrument">
      <option value="vocals">Vocals</option>
      <option value="guitar">Guitar</option>
    </select>
  </fieldset>

  <label for="message">Anything to tell us?</label>
  <textarea id="message" name="message" rows="4"></textarea>

  <button type="submit">Send application</button>
</form>`,
   say:{vi:"Hoàn thiện: <code>textarea</code> cho lời nhắn dài (không dùng input text một dòng), và nút <code>type=\"submit\"</code>. Khi bấm Send, trình duyệt gom các cặp name=value — fullname=Linh, email=…, instrument=guitar, message=… — gửi trong body tới /submit-join. Form của contact.html trong project Music Club chính là bộ khung này.",
        en:"Complete it: a <code>textarea</code> for the long message (not a one-line text input), and a <code>type=\"submit\"</code> button. On Send, the browser gathers name=value pairs — fullname=Linh, email=…, instrument=guitar, message=… — and ships them in the body to /submit-join. This is exactly the skeleton of contact.html in the Music Club project."},
   note:{vi:"Gặng tổng hợp: 'input không name thì sao?' → bị bỏ rơi khi submit. 'GET cho form này được không?' → không nên: email lộ trên URL, lịch sử, log.",
         en:"Synthesis follow-ups: 'An input without name?' → dropped on submit. 'Could this form use GET?' → it should not: the email would leak into the URL, history, logs."}}
],
errors:[
  {label:{vi:"label không nối for/id",en:"label not bound via for/id"},
   code:
`<form action="/submit-join" method="post">
  <label>Your name</label> <!-- BUG: no for -->
  <input type="text" id="fullname" name="fullname">
  <label for="mail">Email</label> <!-- BUG: for="mail" but id="email" -->
  <input type="email" id="email" name="email">
  <button type="submit">Send</button>
</form>`,
   explain:{vi:"Bấm thử chữ 'Your name' và 'Email' trong preview: con trỏ KHÔNG nhảy vào ô — label và input là người dưng. Screen reader cũng chỉ đọc 'edit text' trống trơn. Sửa: for phải khớp CHÍNH XÁC id (chữ 'mail' ≠ 'email'). Đây là lỗi accessibility phổ biến nhất của form.",
            en:"Click 'Your name' and 'Email' in the preview: the cursor does NOT jump into the fields — labels and inputs are strangers. Screen readers also announce a bare 'edit text'. Fix: for must match the id EXACTLY ('mail' ≠ 'email'). The most common form accessibility bug."}},
  {label:{vi:"input thiếu name",en:"inputs missing name"},
   code:
`<form action="/submit-join" method="get">
  <label for="fullname">Your name</label>
  <input type="text" id="fullname"> <!-- BUG: no name -->
  <label for="email">Email</label>
  <input type="email" id="email" name="email">
  <button type="submit">Send (GET — watch the URL)</button>
</form>`,
   explain:{vi:"Form này cố tình dùng GET để 'nhìn thấy' dữ liệu trên URL. Điền tên rồi submit: URL chỉ có email — fullname biến mất vì input không có name thì trình duyệt KHÔNG gửi. Name là key của cặp name=value; không key thì dữ liệu bị bỏ rơi. (Trong iframe demo, submit có thể bị chặn — hãy hình dung URL thật sẽ là ?email=… mà thiếu fullname.)",
            en:"This form deliberately uses GET so data is 'visible' in the URL. Fill the name and submit: the URL carries only email — fullname vanished, because an input without a name is NOT sent. name is the key of the name=value pair; no key, data dropped. (Inside the demo iframe, submission may be blocked — picture the real URL as ?email=… with fullname missing.)"}}
]},
mistakes:[
  {title:{vi:"Dùng placeholder thay cho label",en:"Using placeholder instead of a label"},
   wrong:
`<input type="text" name="fullname" placeholder="Your name">`,
   right:
`<label for="fullname">Your name</label>
<input type="text" id="fullname" name="fullname" placeholder="e.g. Nguyen Van Linh">`,
   why:{vi:"Placeholder biến mất ngay khi gõ — người dùng quên ô này đòi gì; tương phản mờ khó đọc; screen reader hỗ trợ không đồng nhất. Label thật luôn hiển thị, click được, đọc được. Placeholder chỉ nên là ví dụ gợi ý, không phải nhãn.",
        en:"Placeholder vanishes on typing — users forget what the field wanted; it is low-contrast; screen-reader support is inconsistent. A real label stays visible, clickable, readable. Placeholder should be an example hint, never the label."}},
  {title:{vi:"Dùng GET cho dữ liệu nhạy cảm",en:"Using GET for sensitive data"},
   wrong:
`<form action="/login" method="get">
  <input type="password" name="pass">
  <button>Log in</button>
</form>`,
   right:
`<form action="/login" method="post">
  <label for="pass">Password</label>
  <input type="password" id="pass" name="pass">
  <button>Log in</button>
</form>`,
   why:{vi:"GET gắn password lên URL: lưu vào lịch sử trình duyệt, server log, người đứng sau nhìn thấy, share link là lộ mật khẩu. type='password' chỉ CHE hiển thị trên màn hình, không mã hóa đường truyền. Dữ liệu nhạy cảm bắt buộc POST (và HTTPS).",
        en:"GET puts the password in the URL: saved in browser history and server logs, visible over shoulders, leaked by sharing the link. type='password' only MASKS the screen — it does not encrypt transport. Sensitive data demands POST (and HTTPS)."}},
  {title:{vi:"Radio khác name trong cùng nhóm",en:"Radios with different names in one group"},
   wrong:
`<label><input type="radio" name="level1" value="beginner"> Beginner</label>
<label><input type="radio" name="level2" value="advanced"> Advanced</label>`,
   right:
`<label><input type="radio" name="level" value="beginner"> Beginner</label>
<label><input type="radio" name="level" value="advanced"> Advanced</label>`,
   why:{vi:"Khác name = hai nhóm độc lập → người dùng chọn được CẢ HAI, câu hỏi 'trình độ của bạn?' nhận hai đáp án mâu thuẫn. Cùng name='level' thì trình duyệt tự đảm bảo chỉ một được chọn, và server nhận đúng một giá trị level.",
        en:"Different names = two independent groups → users can select BOTH, and 'your level?' receives two contradictory answers. Sharing name='level' lets the browser guarantee exactly one selection, and the server receives a single level value."}}
],
oral:{
good:{vi:"Form cần thẻ form với action là URL nhận dữ liệu và method là cách gửi. GET gắn dữ liệu thành query string trên URL — hợp tìm kiếm vì bookmark được, nhưng lộ và giới hạn độ dài; POST gửi trong body — hợp form liên hệ, đăng nhập của Music Club vì có email cá nhân. Mỗi input cần name để tạo cặp name=value gửi server, và label nối qua for khớp id để click chữ cũng focus ô nhập và screen reader đọc đúng nhãn. Form contact.html của em dùng text, email có required, select nhạc cụ, radio cùng name cho trình độ, textarea lời nhắn và button submit ạ.",
      en:"A form needs the form tag with action as the receiving URL and method as the shipping mode. GET appends data as a query string in the URL — good for search since it is bookmarkable, but exposed and length-limited; POST sends it in the body — right for Music Club's contact/login forms with personal emails. Every input needs name to form the name=value pair sent to the server, and a label bound via for matching id so clicking the text focuses the field and screen readers announce the right caption. My contact.html uses text, email with required, an instrument select, same-name radios for level, a message textarea and a submit button."},
followQ:{vi:"Input không có name thì chuyện gì xảy ra khi submit? Và vì sao placeholder không thay được label?",
         en:"What happens on submit to an input without a name? And why can't placeholder replace a label?"},
followA:{vi:"Dạ input không name bị trình duyệt BỎ QUA khi gom dữ liệu — người dùng gõ bao nhiêu cũng không tới server, vì name chính là key của cặp name=value. Placeholder không thay được label vì nó biến mất khi bắt đầu gõ, độ tương phản thấp, và screen reader không đọc nó nhất quán; label for=id thì luôn hiển thị, mở rộng vùng click và được đọc như tên chính thức của ô ạ.",
         en:"An input without a name is SKIPPED when the browser gathers data — whatever the user typed never reaches the server, because name is the key of the name=value pair. Placeholder cannot replace a label: it disappears on typing, has low contrast, and screen readers read it inconsistently; a label with for=id stays visible, enlarges the click target, and is announced as the field's official name."},
weak:{vi:"Form để người dùng nhập liệu. Có input, nút submit. GET với POST là hai cách gửi ạ.",
      en:"Forms let users enter data. There are inputs and a submit button. GET and POST are two ways to send."},
weakWhy:{vi:"Không nói action/method quyết định gì, không phân biệt được GET/POST bằng vị trí dữ liệu, không nhắc name/label — ba thứ cốt lõi của buổi 13. Giảng viên hỏi 'vì sao input phải có name?' là câu trả lời cụt ngủn này sụp đổ.",
         en:"No word on what action/method decide, no GET/POST distinction by data location, no name/label — the three cores of Session 13. One 'why must inputs have a name?' and this stub collapses."},
goodWhy:{vi:"Giải thích cơ chế gửi dữ liệu (name=value, URL vs body), nêu tiêu chí chọn GET/POST, hiểu label-for cả về UX lẫn accessibility, và mô tả form project thật với đủ loại trường — câu trả lời của người đã làm chứ không chỉ đọc.",
         en:"Explains the submission mechanism (name=value, URL vs body), gives GET/POST selection criteria, understands label-for for both UX and accessibility, and describes a real project form with all field types — the answer of someone who has built, not just read."},
checklist:[
  {vi:"action = URL nhận; method = cách gửi (GET/POST)",en:"action = receiving URL; method = shipping mode (GET/POST)"},
  {vi:"GET: dữ liệu trên URL, bookmark được, lộ; POST: trong body",en:"GET: data in URL, bookmarkable, exposed; POST: in body"},
  {vi:"name tạo cặp name=value; không name = không gửi",en:"name forms name=value pairs; no name = not sent"},
  {vi:"label for khớp id: click focus + screen reader; placeholder không thay được",en:"label for matches id: click-focus + screen reader; placeholder cannot replace it"},
  {vi:"Kể đúng các loại trường: text/email/select/radio(cùng name)/textarea/submit",en:"Names the field types: text/email/select/radio(shared name)/textarea/submit"}
]},
cheat:{vi:"action=đích, method=GET(URL, lộ)/POST(body). name=key gửi server; label for=id. Radio cùng name. required chỉ là client validation.",
       en:"action=destination, method=GET(URL, exposed)/POST(body). name=server key; label for=id. Radios share name. required is client-side only."},
cheatCode:
`<form action="/join" method="post">
 <label for="em">Email</label>
 <input type="email" id="em" name="email" required>
 <button type="submit">Send</button>
</form>`
},

/* ===== Q10 · Buổi 5+15 · Accessibility & SEO ===== */
{
id:"q10", num:10, diff:"hard",
session:{vi:"Buổi 5 + 15",en:"Sessions 5 + 15"},
title:{vi:"Accessibility & SEO cơ bản: để ai cũng dùng được, máy nào cũng hiểu",en:"Basic accessibility & SEO: usable by everyone, understood by every machine"},
question:{
  vi:"Accessibility là gì? Kể những việc em đã làm trong project Music Club để trang accessible hơn. SEO cơ bản cần những thẻ nào trong head? <code>meta viewport</code> liên quan gì đến buổi 15?",
  en:"What is accessibility? Name what you did in the Music Club project to make pages more accessible. Which head tags does basic SEO need? How does <code>meta viewport</code> relate to Session 15?"
},
definition:{
  en:"Accessibility (a11y) means designing pages everyone can use, including people with disabilities; SEO (Search Engine Optimization) helps search engines understand, index and rank your content.",
  vi:"Accessibility (viết tắt a11y — 11 chữ giữa a và y) là thiết kế trang để AI CŨNG dùng được, kể cả người khuyết tật; SEO (Search Engine Optimization) giúp công cụ tìm kiếm hiểu, lập chỉ mục và xếp hạng nội dung của em."
},
theory:[
  {h:{vi:"Accessibility bắt đầu từ HTML đúng",en:"Accessibility starts with correct HTML"},
   p:{vi:"Phần lớn việc a11y là dùng HTML đúng ngữ nghĩa đã học: <code>alt</code> cho ảnh (câu 6), <code>label for</code> cho form (câu 9), heading đúng thứ bậc (câu 7), semantic landmarks (câu 2), <code>lang</code> trên thẻ html (câu 1), bảng có caption/scope (câu 8). Thêm: tương phản màu chữ–nền đủ đọc, mọi thao tác dùng được bằng phím Tab (focus nhìn thấy được), link text có nghĩa ('View schedule' thay vì 'click here'). <strong>Skip link</strong> 'Đến nội dung chính' cho người dùng keyboard/screen reader nhảy qua menu — chính site khóa học cũng có.",
      en:"Most a11y work is using the semantic HTML you already learned: <code>alt</code> for images (Q6), <code>label for</code> in forms (Q9), correct heading hierarchy (Q7), semantic landmarks (Q2), <code>lang</code> on html (Q1), tables with caption/scope (Q8). Plus: readable text–background contrast, everything operable via Tab (visible focus), meaningful link text ('View schedule' not 'click here'). A <strong>skip link</strong> 'Skip to main content' lets keyboard/screen-reader users jump past the menu — the course site itself has one."}},
  {h:{vi:"SEO cơ bản nằm ở head và cấu trúc",en:"Basic SEO lives in the head and structure"},
   p:{vi:"Bộ thẻ tối thiểu: <code>&lt;title&gt;</code> DUY NHẤT mỗi trang, mô tả đúng nội dung ('Music Club — Contact' tốt hơn 'Trang 3'); <code>&lt;meta name=\"description\"&gt;</code> đoạn tóm tắt ~150 ký tự hiện dưới tiêu đề kết quả tìm kiếm — không trực tiếp tăng rank nhưng tăng tỉ lệ click; heading đúng dàn ý và semantic giúp Google hiểu chủ đề; alt giúp Google Images; URL thân thiện (<code>about.html</code> hơn <code>page2.html</code>). SEO không phải phép màu nhồi keyword — nhồi là bị phạt.",
      en:"The minimal kit: a <code>&lt;title&gt;</code> UNIQUE per page, describing the real content ('Music Club — Contact' beats 'Page 3'); <code>&lt;meta name=\"description\"&gt;</code> — a ~150-character summary shown under search-result titles; it does not directly raise rank but raises click-through; a correct heading outline and semantics help Google grasp the topic; alt feeds Google Images; friendly URLs (<code>about.html</code> over <code>page2.html</code>). SEO is not keyword-stuffing magic — stuffing gets penalized."}},
  {h:{vi:"meta viewport — cầu nối tới buổi 15",en:"meta viewport — the bridge to Session 15"},
   p:{vi:"Buổi 15 dạy thiết kế giao diện di động. Trên mobile, không có <code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"&gt;</code> thì trình duyệt giả lập màn hình ~980px rồi thu nhỏ toàn trang — chữ bé xíu, người dùng phải zoom. Khai báo viewport bảo trình duyệt: 'bề rộng trang = bề rộng thiết bị, đừng tự thu phóng'. Nó là điều kiện CẦN của responsive design (media queries chỉ có tác dụng khi viewport đúng).",
      en:"Session 15 teaches mobile interface design. On mobile, without <code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"&gt;</code> the browser pretends the screen is ~980px wide and shrinks the whole page — tiny text, forced zooming. The viewport declaration says: 'page width = device width, do not auto-scale'. It is a NECESSARY condition for responsive design (media queries only work once the viewport is right)."}}
],
analogy:{
  vi:"Accessibility như thiết kế tòa nhà có đường dốc cho xe lăn, biển chữ nổi cho người khiếm thị — không phải 'thêm cho người khuyết tật' mà là cửa rộng hơn cho TẤT CẢ (người đẩy xe hàng, người xách đồ nặng cũng dùng đường dốc). SEO như tấm biển hiệu rõ ràng trước cửa hàng: Google là người đưa thư, biển ghi đúng 'Music Club — Guitar & Vocals' thì thư tìm đúng nhà; biển ghi 'CLICK HERE!!!' thì chịu.",
  en:"Accessibility is designing a building with wheelchair ramps and braille signs — not 'extras for disabled people' but wider doors for EVERYONE (delivery carts, heavy luggage also use ramps). SEO is a clear shop sign: Google is the mail carrier; a sign reading 'Music Club — Guitar & Vocals' delivers mail to the right house; a sign screaming 'CLICK HERE!!!' does not."
},
compare:{
  caption:{vi:"Việc nhỏ — lợi ích kép a11y + SEO",en:"Small actions — double wins for a11y + SEO"},
  head:[{vi:"Việc làm",en:"Action"},{vi:"Accessibility",en:"Accessibility"},{vi:"SEO",en:"SEO"}],
  rows:[
    [{vi:"alt đúng cho ảnh",en:"Proper image alt"},{vi:"Screen reader đọc được ảnh",en:"Screen readers read images"},{vi:"Google Images hiểu ảnh",en:"Google Images understands images"}],
    [{vi:"Semantic + heading đúng cấp",en:"Semantics + heading order"},{vi:"Landmarks, nhảy mục nhanh",en:"Landmarks, fast section jumps"},{vi:"Hiểu cấu trúc, chủ đề trang",en:"Understands structure and topic"}],
    [{vi:"title + description riêng mỗi trang",en:"Unique title + description"},{vi:"Tab/screen reader nhận diện trang",en:"Tab/screen reader identifies the page"},{vi:"Kết quả tìm kiếm rõ, tăng click",en:"Clear results, more clicks"}],
    [{vi:"label for + lang",en:"label for + lang"},{vi:"Form dùng được bằng tai, đọc đúng giọng",en:"Forms usable by ear, right voice"},{vi:"Nhận diện ngôn ngữ nội dung",en:"Content language detection"}],
    [{vi:"meta viewport",en:"meta viewport"},{vi:"Mobile đọc được, không zoom",en:"Readable on mobile, no zoom"},{vi:"Mobile-friendly là yếu tố xếp hạng",en:"Mobile-friendliness is a ranking factor"}]
  ]
},
example:{file:"music-club / contact.html (head + skeleton)",code:
`<!DOCTYPE html>
<html lang="vi"> <!-- screen readers use the right voice -->
<head>
  <meta charset="UTF-8">
  <!-- viewport: page width = device width (Session 15) -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contact — Music Club | IS-VNU</title> <!-- unique per page -->
  <meta name="description"
        content="Contact Music Club at International School, VNU: join form, practice schedule and room info.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <header><h1>Music Club</h1></header>
  <nav aria-label="Main menu">
    <a href="index.html">Home</a>
    <a href="contact.html">Contact</a> <!-- meaningful link text -->
  </nav>
  <main id="main">
    <h2>Join us</h2>
    <form action="/submit-join" method="post">
      <label for="fullname">Your name</label>
      <input type="text" id="fullname" name="fullname" required>
      <button type="submit">Send</button>
    </form>
    <img src="img/club.jpg" alt="Music Club members after the Spring Concert" width="400" height="260">
  </main>
  <footer><p>&copy; 2026 Music Club, IS-VNU</p></footer>
</body>
</html>`},
lecture:{
steps:[
  {code:
`<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Contact — Music Club | IS-VNU</title>
  <meta name="description"
        content="Contact Music Club at IS-VNU: join form, practice schedule and room info.">
</head>
<body>
  <h1>Contact Music Club</h1>
</body>
</html>`,
   say:{vi:"Bắt đầu từ head: <code>title</code> riêng cho trang Contact — không dùng chung 'Music Club' cho cả ba trang, vì tab và kết quả tìm kiếm cần phân biệt. <code>meta description</code> viết một câu thật mô tả trang, chừng 150 ký tự, có lời mời rõ ràng.",
        en:"Start in the head: a <code>title</code> unique to the Contact page — not a shared 'Music Club' across all three pages, because tabs and search results must tell them apart. The <code>meta description</code> is one honest sentence about the page, ~150 characters, with a clear invitation."},
   note:{vi:"Gặng: 'description có trực tiếp tăng rank không?' → không trực tiếp; nó tăng click-through từ kết quả tìm kiếm. Đừng hứa sai điều này.",
         en:"Follow-up: 'Does description directly raise rank?' → not directly; it raises click-through from results. Do not overclaim."}},
  {code:
`<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contact — Music Club | IS-VNU</title>
  <meta name="description" content="Contact Music Club at IS-VNU: join form, schedule and room info.">
</head>
<body>
  <h1>Contact Music Club</h1>
  <p>On a phone, this page now uses the real device width.</p>
</body>
</html>`,
   say:{vi:"Thêm <code>meta viewport</code> — bài học buổi 15. Không có nó, điện thoại giả lập màn hình 980px rồi thu nhỏ: chữ kiến tha. Có nó, bề rộng trang bằng bề rộng máy, media queries mới hoạt động đúng. Một dòng, quyết định cả trải nghiệm mobile.",
        en:"Add <code>meta viewport</code> — the Session 15 lesson. Without it, phones fake a 980px screen and shrink everything: ant-sized text. With it, page width equals device width and media queries work properly. One line decides the whole mobile experience."},
   note:{vi:'content="width=device-width, initial-scale=1" — học thuộc đúng chuỗi này; initial-scale=1 nghĩa là không tự phóng to/thu nhỏ lúc mở.',
         en:'content="width=device-width, initial-scale=1" — memorize this exact string; initial-scale=1 means no auto zoom on open.'}},
  {code:
`<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contact — Music Club | IS-VNU</title>
</head>
<body>
  <header><h1>Music Club</h1></header>
  <nav aria-label="Main menu">
    <a href="index.html">Home</a> <a href="contact.html">Contact</a>
  </nav>
  <main>
    <h2>Join us</h2>
    <form action="/submit-join" method="post">
      <label for="fullname">Your name</label>
      <input type="text" id="fullname" name="fullname" required>
      <button type="submit">Send</button>
    </form>
    <img src="img/club.jpg" alt="Music Club members after the Spring Concert" width="400" height="260">
  </main>
</body>
</html>`,
   say:{vi:"Giờ ráp toàn bộ kiến thức các câu trước vào một trang: semantic landmarks (câu 2), heading đúng cấp (câu 7), label for (câu 9), alt mô tả thật (câu 6). Accessibility không phải tính năng thêm sau — nó là HỆ QUẢ của việc viết HTML đúng ngay từ đầu.",
        en:"Now assemble everything from earlier questions into one page: semantic landmarks (Q2), correct headings (Q7), label for (Q9), honest alt (Q6). Accessibility is not a feature bolted on later — it is the CONSEQUENCE of writing correct HTML from the start."},
   note:{vi:"Đây là câu trả lời tổng hợp đẹp nhất: 'a11y của em = alt + label + heading + semantic + lang + contrast + keyboard'. Kể được 5–6 việc là vững.",
         en:"This is the best synthesis answer: 'my a11y = alt + label + headings + semantics + lang + contrast + keyboard'. Naming 5–6 actions is solid."}},
  {code:
`<style>
  /* CSS-only skip link: hidden until keyboard focus */
  .skip{position:absolute;left:-999px;top:8px;background:#5b4ddb;color:#fff;padding:6px 12px;border-radius:8px}
  .skip:focus{left:8px}
</style>
<a href="#main" class="skip">Skip to main content</a>
<header><h1>Music Club</h1></header>
<nav aria-label="Main menu">
  <a href="index.html">Home</a> <a href="contact.html">Contact</a>
</nav>
<main id="main">
  <h2>Join us</h2>
  <p>Click inside this preview, then press Tab: the skip link appears first.</p>
</main>`,
   say:{vi:"Mảnh ghép cuối: <strong>skip link</strong>. Nó ẩn ngoài màn hình, nhưng bấm Tab trong preview — nó hiện ra ĐẦU TIÊN, trước cả menu. Người dùng keyboard/screen reader bấm Enter là nhảy thẳng tới main, khỏi Tab qua 10 link menu mỗi trang. Site khóa học INS2053 cũng có đúng chi tiết này.",
        en:"Final piece: the <strong>skip link</strong>. It hides off-screen, but press Tab in the preview — it appears FIRST, before the menu. Keyboard/screen-reader users press Enter to jump straight to main instead of tabbing through ten menu links on every page. The INS2053 course site has this exact detail."},
   note:{vi:"Skip link là bằng chứng 'em hiểu người dùng keyboard'. Demo bằng Tab ngay tại chỗ là điểm cộng lớn khi vấn đáp.",
         en:"A skip link proves 'I understand keyboard users'. Demoing it with Tab on the spot is a big plus in the oral exam."}}
],
errors:[
  {label:{vi:"Link 'click here' vô nghĩa",en:"Meaningless 'click here' links"},
   code:
`<main>
  <h2>Our schedule</h2>
  <p>We practice every Friday. <a href="schedule.html">Click here</a> to see it.</p>
  <p>Want to join? <a href="contact.html">Click here</a>.</p>
  <p>Photos: <a href="gallery.html">Click here</a>.</p>
</main>`,
   explain:{vi:"Screen reader có chế độ liệt kê mọi link trên trang — người dùng nghe 'click here, click here, click here': ba link giống hệt, không biết cái nào đi đâu. Google cũng dùng link text để hiểu trang đích. Sửa: 'View the weekly schedule', 'Join the club', 'See gig photos'.",
            en:"Screen readers can list every link on a page — users hear 'click here, click here, click here': three identical links, no idea where any goes. Google also uses link text to understand target pages. Fix: 'View the weekly schedule', 'Join the club', 'See gig photos'."}},
  {label:{vi:"Title trùng nhau + thiếu lang",en:"Duplicate titles + missing lang"},
   code:
`<!DOCTYPE html>
<html> <!-- BUG: no lang -->
<head>
  <meta charset="UTF-8">
  <title>Music Club</title> <!-- BUG: same title on ALL pages -->
</head>
<body>
  <h1>Contact</h1>
  <p>This is the contact page, but the tab says just "Music Club".</p>
</body>
</html>`,
   explain:{vi:"Mở ba trang Music Club: tab nào cũng 'Music Club' — người dùng không phân biệt được, bookmark lẫn lộn, Google thấy ba trang trùng tiêu đề khó xếp hạng đúng. Thiếu lang thì screen reader có thể đọc tiếng Việt bằng giọng Anh. Sửa: title riêng mỗi trang ('Contact — Music Club') và lang='vi'.",
            en:"Open the three Music Club pages: every tab says 'Music Club' — users cannot tell them apart, bookmarks blur together, and Google sees duplicate titles it struggles to rank correctly. Missing lang may make screen readers read Vietnamese with an English voice. Fix: per-page titles ('Contact — Music Club') and lang='vi'."}}
]},
mistakes:[
  {title:{vi:"Nhồi keyword vào title/description/alt",en:"Keyword stuffing in title/description/alt"},
   wrong:
`<title>Music Club guitar club Hanoi guitar lessons cheap guitar IS VNU club</title>
<meta name="description" content="club music club guitar club Hanoi club best club">`,
   right:
`<title>Music Club — Guitar & Vocals | IS-VNU</title>
<meta name="description" content="Music Club at International School, VNU: Friday acoustic practices, open stage nights and how to join.">`,
   why:{vi:"Nhồi từ khóa là spam SEO cổ điển: công cụ phạt, người đọc thấy khó chịu, screen reader phải đọc đống lặp. Title/description tốt = một câu tự nhiên, đúng nội dung, chứa từ khóa CHÍNH một cách vừa phải.",
        en:"Keyword stuffing is classic SEO spam: engines penalize it, readers find it off-putting, screen readers must read the repetition. Good title/description = one natural, accurate sentence with the MAIN keyword used in moderation."}},
  {title:{vi:"Ẩn focus outline cho 'đẹp'",en:"Hiding the focus outline for 'looks'"},
   wrong:
`<style>
  :focus{outline:none} /* "cleaner" look */
</style>`,
   right:
`<style>
  :focus-visible{outline:3px solid #e6399b;outline-offset:2px}
</style>`,
   why:{vi:"Người dùng keyboard Tab tới đâu phải THẤY đang ở đó. Xóa outline mà không thay bằng style focus khác khiến họ mù đường — lỗi a11y nghiêm trọng. Muốn đẹp? Tự thiết kế focus style riêng (như chính trang guide này đang làm).",
        en:"Keyboard users must SEE where Tab has landed. Removing the outline without a replacement focus style leaves them lost — a serious a11y bug. Want beauty? Design your own focus style (as this very guide does)."}},
  {title:{vi:"Dùng ảnh chụp chữ thay vì text thật",en:"Images of text instead of real text"},
   wrong:
`<img src="img/schedule.png" alt="schedule">
<!-- the whole timetable is a picture -->`,
   right:
`<h2>Weekly schedule</h2>
<table>
  <caption>Music Club schedule</caption>
  <tr><th>Day</th><th>Time</th></tr>
  <tr><td>Friday</td><td>18:00</td></tr>
</table>`,
   why:{vi:"Chữ trong ảnh: screen reader không đọc được (alt 'schedule' không thay nổi cả bảng), không copy được, không scale sắc nét, Google không index nội dung. Nội dung chữ phải là TEXT thật + bảng thật; ảnh chỉ dành cho nội dung thị giác.",
        en:"Text inside images: screen readers cannot read it (alt 'schedule' cannot replace a whole table), it cannot be copied, does not scale sharply, and Google cannot index the content. Textual content must be real TEXT + real tables; images are for visual content only."}}
],
oral:{
good:{vi:"Accessibility là thiết kế để mọi người dùng được trang, kể cả người khuyết tật. Trong Music Club em đã làm: alt mô tả cho ảnh, label for nối input, heading đúng thứ bậc, semantic header/nav/main/footer, lang='vi', và giữ focus nhìn thấy được khi Tab. Về SEO, head mỗi trang có title duy nhất và meta description riêng, nội dung dùng heading và semantic đúng để Google hiểu chủ đề. Buổi 15 liên quan qua meta viewport width=device-width — không có nó thì mobile thu nhỏ cả trang và responsive không hoạt động ạ.",
      en:"Accessibility means designing so everyone can use the page, including people with disabilities. In Music Club I did: descriptive alt on images, label for bound to inputs, correct heading hierarchy, semantic header/nav/main/footer, lang='vi', and visible focus when tabbing. For SEO, each page's head has a unique title and its own meta description, and the content uses proper headings and semantics so Google understands the topic. Session 15 connects via meta viewport width=device-width — without it mobile shrinks the whole page and responsive design cannot work."},
followQ:{vi:"Kể ba việc em làm NGAY để trang accessible hơn mà không cần redesign. Meta description có trực tiếp tăng thứ hạng không?",
         en:"Name three things you would do RIGHT NOW to make a page more accessible without redesigning. Does meta description directly raise ranking?"},
followA:{vi:"Dạ ba việc ngay: thêm alt đúng cho mọi ảnh, nối label for=id cho mọi input, và sửa thứ tự heading cho liền cấp — toàn là sửa HTML, không đụng thiết kế. Còn meta description không trực tiếp tăng rank; nó là đoạn tóm tắt hiện dưới kết quả tìm kiếm, viết hấp dẫn thì tăng tỉ lệ người click, gián tiếp tốt cho SEO ạ.",
         en:"Three immediate actions: proper alt on every image, label for=id on every input, and fixing heading order to be unbroken — all HTML edits, no design changes. Meta description does not directly raise rank; it is the snippet under search results, and writing it well raises click-through, which indirectly helps SEO."},
weak:{vi:"Accessibility là cho người khuyết tật dùng được. SEO là làm trang lên top Google. Thêm meta là được ạ.",
      en:"Accessibility is so disabled people can use it. SEO is getting the page to the top of Google. Just add metas."},
weakWhy:{vi:"Định nghĩa đúng sơ sơ nhưng không có VIỆC CỤ THỂ đã làm, không kể được thẻ nào, và 'thêm meta là được' sai bản chất SEO. Câu hỏi 'em đã làm gì trong project?' sẽ để lộ ngay khoảng trống.",
         en:"Roughly right definitions but no CONCRETE actions taken, no tags named, and 'just add metas' misses SEO's essence. 'What did YOU do in your project?' instantly exposes the gap."},
goodWhy:{vi:"Liệt kê việc đã làm thật trong project (chứng minh thực hành), nối được a11y với các câu HTML trước, hiểu giới hạn của description, và giải thích viewport đúng cơ chế — câu trả lời tổng hợp cuối khóa.",
         en:"Lists real actions taken in the project (proof of practice), connects a11y to earlier HTML questions, understands description's limits, and explains viewport by mechanism — the end-of-course synthesis answer."},
checklist:[
  {vi:"Định nghĩa a11y: mọi người dùng được, kể cả khuyết tật",en:"a11y definition: everyone can use it, including disabilities"},
  {vi:"Kể ≥4 việc cụ thể: alt, label, heading, semantic, lang, focus",en:"Names ≥4 concrete actions: alt, label, headings, semantics, lang, focus"},
  {vi:"SEO: title duy nhất + meta description riêng mỗi trang",en:"SEO: unique title + per-page meta description"},
  {vi:"description không trực tiếp tăng rank — tăng click",en:"description does not directly raise rank — it raises clicks"},
  {vi:"viewport width=device-width: điều kiện cần của responsive (buổi 15)",en:"viewport width=device-width: necessary for responsive (Session 15)"}
]},
cheat:{vi:"a11y = alt + label + heading + semantic + lang + focus + contrast. SEO = title riêng + description + dàn ý đúng. viewport = điều kiện cần của mobile.",
       en:"a11y = alt + label + headings + semantics + lang + focus + contrast. SEO = unique title + description + correct outline. viewport = mobile prerequisite."},
cheatCode:
`<html lang="vi">
<title>Contact — Music Club</title>
<meta name="description" content="…">
<meta name="viewport" content="width=device-width, initial-scale=1">`
}
];
