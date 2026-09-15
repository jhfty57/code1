/* ===== LESSONS - Phần E: 4 chủ đề "kiểu câu" ===== */
const LESSONS_E = [
{
  id:"sentences", grade:10, icon:"📗", level:"Cơ bản",
  title:"Câu đơn, câu ghép & câu phức",
  summary:"3 loại cấu trúc câu nền tảng của tiếng Anh: nhận biết bằng số mệnh đề và liên từ — chìa khóa của viết luận và dạng nối câu.",
  sections:[
    {t:"p", html:"Mọi câu tiếng Anh đều thuộc một trong 3 loại. Cách nhận biết nhanh: đếm <b>số mệnh đề (S + V)</b> và nhìn <b>liên từ nối</b>."},
    {t:"table", head:["Loại câu","Cấu trúc","Liên từ","Ví dụ"], rows:[
      ["Câu đơn (Simple)","1 mệnh đề chính","—","She <b>works</b> hard and <b>scores</b> high marks."],
      ["Câu ghép (Compound)","2+ mệnh đề ngang hàng","FANBOYS: for, and, nor, but, or, yet, so","I called her, <b>but</b> she didn't answer."],
      ["Câu phức (Complex)","mệnh đề chính + mệnh đề phụ","because, although, when, if, who, which...","<b>Although</b> she was tired, she kept working."]
    ]},
    {t:"tip", html:"<b>Phân biệt và với và:</b> Câu 'She works hard and scores high' vẫn là câu ĐƠN vì 2 động từ dùng chung 1 chủ ngữ. Chỉ khi có 2 chủ ngữ riêng ('She works and her brother plays') mới là câu ghép."},
    {t:"h", html:"Dấu phẩy với liên từ"},
    {t:"p", html:"Câu ghép với FANBOYS: đặt <b>dấu phẩy TRƯỚC</b> liên từ (I ran, <b>so</b> I was late). Câu phức: nếu mệnh đề phụ đứng TRƯỚC, cách 2 mệnh đề bằng dấu phẩy (<b>Although</b> he is rich<b>,</b> he is modest); nếu đứng sau thì không cần dấu phẩy."},
    {t:"ex", items:[
      {en:"Simple: The students in class 12A are preparing for the exam.", vi:"(1 mệnh đề — 'in class 12A' chỉ là cụm giới từ bổ nghĩa)"},
      {en:"Compound: The exam was difficult, so many students failed.", vi:"Câu thi khó nên nhiều học sinh trượt."},
      {en:"Complex: Students who practise daily improve quickly.", vi:"Học sinh luyện mỗi ngày thì tiến bộ nhanh. (who... = mệnh đề quan hệ)"}
    ]},
    {t:"warn", html:"<b>Lỗi comma splice:</b> Nối 2 mệnh đề chỉ bằng dấu phẩy: <s>I called her, she didn't answer</s> ✗ → phải có liên từ: 'I called her, <b>but</b> she didn't answer' hoặc dấu chấm."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Phân loại: 'Because it rained, we stayed home and watched a film.' → câu PHỨC (because = mệnh đề phụ + chính chứa and... đủ cả!). Nếu bạn nhận ra một câu có thể vừa phức vừa chứa câu ghép — xuất sắc."}
  ]
},
{
  id:"exclamations", grade:10, icon:"📣", level:"Cơ bản",
  title:"Câu cảm thán (Exclamations) & câu hỏi Yes/No",
  summary:"What a...! / How...! diễn tả cảm xúc mạnh, cấu trúc câu hỏi Yes/No và câu trả lời ngắn — nhóm câu 'dễ ghi điểm' của đề.",
  sections:[
    {t:"h", html:"1. WHAT vs HOW"},
    {t:"formula", html:"What + (a/an) + (adj) + N (+ S + V)! &nbsp;·&nbsp; How + adj/adv (+ S + V)!"},
    {t:"table", head:["Vế trước là...","Dùng","Ví dụ"], rows:[
      ["Danh từ (đếm được số ít)","What a/an + adj + N!","<b>What a beautiful day</b> (it is)!"],
      ["Danh từ số nhiều","What + adj + N(s)!","<b>What lovely flowers</b> (they are)!"],
      ["Danh từ không đếm được","What + adj + N!","<b>What terrible weather</b>!"],
      ["Chỉ tính từ/trạng từ","How + adj/adv!","<b>How fast</b> he runs! / <b>How kind</b> of you!"]
    ]},
    {t:"tip", html:"<b>Mẹo 5 giây:</b> Nhìn ngay sau chỗ trống — có 'a/an' hoặc danh từ → WHAT. Chỉ tính từ trơ trọi → HOW. Cặp bẫy kinh điển: <s>How a beautiful day!</s> ✗ → <b>What a beautiful day!</b>"},
    {t:"h", html:"2. Câu hỏi Yes/No & câu trả lời ngắn"},
    {t:"p", html:"Câu hỏi Yes/No mở đầu bằng trợ động từ (be/do/does/did/can/have...). Trả lời ngắn: <b>Yes/No + S + trợ động từ</b> — luôn dùng ĐẦY ĐỦ trợ từ, không dùng động từ chính: 'Do you like tea?' — '<b>Yes, I do</b>.' (không nói Yes, I like)."},
    {t:"table", head:["Câu hỏi","Trả lời"], rows:[
      ["Is she a nurse?","Yes, she is. / No, she isn't."],
      ["Did they win?","Yes, they did. / No, they didn't."],
      ["Can he swim?","Yes, he can. / No, he can't."],
      ["Have you finished?","Yes, I have. / No, I haven't."]
    ]},
    {t:"ex", items:[
      {en:"What an interesting book this is!", vi:"Quyển sách thú vị đến vậy!"},
      {en:"How delicious the soup smells!", vi:"Món súp thơm đến làm sao!"}
    ]},
    {t:"warn", html:"<b>Bẫy chuyển đổi:</b> 'The weather is very lovely.' → câu cảm thán: <b>What lovely weather (it is)!</b> — weather không đếm được, KHÔNG thêm a. Còn 'a lovely day' thì phải có a vì day đếm được."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Chuyển thành câu cảm thán: 'The flowers are beautiful.' → What beautiful flowers! Nếu bạn tự chọn đúng WHAT và bỏ mạo từ là nắm chắc bài."}
  ]
},
{
  id:"cleft", grade:12, icon:"🏅", level:"Nâng cao",
  title:"Câu nhấn mạnh (Cleft Sentences)",
  summary:"It is/was... that và Wh-cleft: tách câu để 'rọi đèn pha' vào phần cần nhấn — cấu trúc phân loại học sinh giỏi.",
  sections:[
    {t:"p", html:"Muốn nhấn mạnh AI hay CÁI GÌ gây ra hành động, tách câu thường thành 2 vế, đặt phần nhấn giữa <b>It is/was</b> và <b>that</b>. So sánh:"},
    {t:"formula", html:"Câu thường: My mother bought this dress.<br>Nhấn CHỦ NGỮ: <b>It was my mother that/who</b> bought this dress. (mẹ chứ không ai khác)"},
    {t:"table", head:["Muốn nhấn","Cấu trúc","Ví dụ"], rows:[
      ["Chủ ngữ (người)","It is/was + S(người) + who/that + V","It was <b>Nam who</b> broke the window."],
      ["Chủ ngữ (vật)","It is/was + S(vật) + that + V","It was <b>the storm that</b> knocked the tree down."],
      ["Tân ngữ","It is/was + O + that + S + V","It was <b>this dress that</b> my mother bought."],
      ["Trạng ngữ (thời gian/nơi)","It is/was + adv + that + S + V","It was <b>in 2020 that</b> we first met."],
      ["Wh-cleft (nhấn bằng what)","What + S + V + is/was + phần nhấn","What I need <b>is a holiday</b>. / What he did <b>was call the police</b>."]
    ]},
    {t:"tip", html:"<b>Thuật toán làm dạng viết lại:</b> Đề cho 'Nam broke the window. → It was...' → đưa Nam vào sau It was, phần còn lại giữ nguyên sau that: <b>It was Nam that broke the window.</b> Không đổi thì, không đổi vị trí từ khác!"},
    {t:"h", html:"Nhấn mạnh với đảo ngữ nhắm mục tiêu"},
    {t:"p", html:"Nhấn mạnh hành động nhờ đảo trợ từ: <i>He sold the car.</i> → <b>Sell the car he did</b>, but he kept the keys. (văn nói). Quan trọng hơn với thi: kết hợp It-cleft với NOT UNTIL: <i>It was not until midnight that she arrived.</i> (xem bài Not until)."},
    {t:"ex", items:[
      {en:"It was the noise that kept me awake all night, not the light.", vi:"Là tiếng ồn (chứ không phải ánh sáng) khiến tôi thức cả đêm."},
      {en:"What annoys me most is his laziness.", vi:"Điều làm tôi khó chịu nhất là sự lười biếng của hắn."}
    ]},
    {t:"warn", html:"<b>Bẫy:</b> Nhấn người dùng được cả who lẫn that, nhưng nhấn vật CHỈ dùng that (không which trong It-cleft): <s>It was the storm which...</s> ✗ → <b>that</b>."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Nhấn mạnh 'my sister' trong 'My sister sent me this gift.' → It was my sister who/that sent me this gift. Làm được dưới 10 giây là đạt!"}
  ]
},
{
  id:"parallel", grade:11, icon:"🤹", level:"Trung bình",
  title:"Cấu trúc song song (Parallel Structure)",
  summary:"Các phần nối bằng and/or/but phải cùng dạng: đều V-ing, đều to-V hay đều danh từ — lỗi 'vô hình' mất điểm trong đề tìm lỗi và viết luận.",
  sections:[
    {t:"p", html:"Khi nhiều thành phần nối bằng and, or, but, chúng phải <b>'cùng dáng' (song song)</b>: cùng thì, cùng dạng động từ, cùng loại từ. Đề thi rất thích gài lỗi này vào đáp án."},
    {t:"table", head:["Sai (không song song)","Đúng (song song)","Lý do"], rows:[
      ["She likes swimming, running <s>and to cycle</s>.","swimming, running and <b>cycling</b>","and nối 3 danh động từ phải đồng bộ"],
      ["He wants <s>learning</s> English and <s>finding</s> a job abroad.","wants <b>to learn</b> English and <b>to find</b>...","2 tân ngữ của want phải cùng to-V"],
      ["The job requires patience, skill <s>and being creative</s>.","patience, skill and <b>creativity</b>","danh từ nối danh từ"],
      ["She not only sings but <s>also dances</s> well ✓ (đúng)","not only V1 but also V2 — cùng dạng","not only... but also cần cân 2 vế"]
    ]},
    {t:"h", html:"Các cấu trúc BẮT BUỘC cân bằng 2 vế"},
    {t:"list", items:[
      "<b>not only ... but also</b>: He not only plays the guitar but also writes songs.",
      "<b>both ... and</b>: Both her parents and her teachers are proud of her.",
      "<b>either ... or / neither ... nor</b>: You can either stay here or come with us.",
      "<b>prefer V-ing to V-ing</b>: I prefer reading to watching TV. (2 vế đều V-ing!)",
      "<b>so sánh with/as</b>: Reading is as enjoyable as travelling. / Eating at home is cheaper than eating out."
    ]},
    {t:"ex", items:[
      {en:"My goals are passing the exam, getting a scholarship and studying abroad.", vi:"Mục tiêu của tôi là đỗ đại học, giành học bổng và du học. (3 V-ing song song)"},
      {en:"He is tall, intelligent and hard-working.", vi:"Cậu ấy cao, thông minh và chăm chỉ. (3 tính từ song song)"}
    ]},
    {t:"warn", html:"<b>Bẫy lớn nhất — prefer và so sánh:</b> <s>I prefer reading to watch TV</s> ✗ → <b>reading to watching</b>. <s>Driving is more dangerous than to walk</s> ✗ → <b>than walking</b>. Sau than/to của so sánh cũng phải song song!"},
    {t:"tip", html:"<b>Trick soát bài:</b> Gạch chân mọi phần sau and/or/but. Nếu gạch được 2+ phần mà dạng từ khác nhau (V-ing + to V, danh từ + động từ...) → 90% là lỗi song song."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Sửa: 'My hobbies are to read novels, watching films and play chess.' → reading novels, watching films and playing chess. Ba vế cùng V-ing mới chuẩn!"}
  ]
}
];
