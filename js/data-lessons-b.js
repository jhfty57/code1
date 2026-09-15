/* ===== LESSONS - Phần B: Chủ đề lớp 11-12 ===== */
const LESSONS_B = [
{
  id:"comparison", grade:10, icon:"⚖️", level:"Cơ bản",
  title:"So sánh (Comparisons)",
  summary:"So sánh bằng, hơn, nhất với tính từ ngắn/dài, so sánh kép, 'the more... the more' và các dạng đặc biệt.",
  sections:[
    {t:"h", html:"1. So sánh bằng (as... as)"},
    {t:"formula", html:"S + V + as + adj/adv + as &nbsp;·&nbsp; phủ định: not as/so + adj/adv + as"},
    {t:"ex", items:[
      {en:"Lan is as tall as her sister.", vi:"Lan cao bằng chị của cô ấy."},
      {en:"He doesn't run as fast as his brother.", vi:"Anh ấy chạy không nhanh bằng anh trai."}
    ]},
    {t:"h", html:"2. So sánh hơn (Comparative)"},
    {t:"table", head:["Loại tính từ","Quy tắc","Ví dụ"], rows:[
      ["Ngắn (1 âm tiết)","adj + ER + than","tall → taller, fast → faster"],
      ["Kết thúc -e","+ r","large → larger, nice → nicer"],
      ["Phụ âm–nguyên âm–phụ âm","gấp đôi phụ âm + er","big → bigger, hot → hotter"],
      ["Kết thúc -y","y → ier","happy → happier, easy → easier"],
      ["Dài (2 âm tiết trở lên)","MORE + adj + than","beautiful → more beautiful, careful → more careful"],
      ["Bất quy tắc (học thuộc)","—","good → better; bad → worse; far → farther/further; little → less; many/much → more"]
    ]},
    {t:"h", html:"3. So sánh nhất (Superlative)"},
    {t:"formula", html:"S + V + THE + adj + EST / THE + MOST + adj (+ in/of...)"},
    {t:"ex", items:[
      {en:"Ha Long Bay is one of the most beautiful places in Vietnam.", vi:"Vịnh Hạ Long là một trong những nơi đẹp nhất Việt Nam."},
      {en:"He is the best student in my class.", vi:"Cậu ấy là học sinh giỏi nhất lớp tôi."}
    ]},
    {t:"h", html:"4. So sánh kép — dạng nâng cao hay thi"},
    {t:"formula", html:"(1) adj-ER and adj-ER → càng ngày càng...<br>(2) THE + adj-ER, THE + adj-ER → càng... càng..."},
    {t:"ex", items:[
      {en:"The weather is getting hotter and hotter.", vi:"Thời tiết ngày càng nóng."},
      {en:"The more you practise, the better you become.", vi:"Bạn càng luyện tập nhiều, bạn càng tiến bộ."}
    ]},
    {t:"tip", html:"<b>Mẹo:</b> Gặp cấu trúc 'The more..., the more...' hãy nhớ cả hai vế đều PHẢI có 'the'. Dạng thi khác: 'twice as... as' (gấp đôi), 'three times as long as' — so sánh bội số dùng as...as phía sau số lần."},
    {t:"warn", html:"<b>Lỗi thường gặp:</b> <s>more better</s> (SAI — better đã là so sánh hơn rồi), <s>the most easiest</s> (SAI — chỉ dùng một hình thức: the easiest)."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Viết 1 câu so sánh nhất về trường của bạn và 1 câu 'the more... the more' về việc học. Tự sinh câu giúp não xử lý quy tắc chủ động."}
  ]
},
{
  id:"passive", grade:11, icon:"🔄", level:"Trung bình",
  title:"Câu bị động (Passive Voice)",
  summary:"Công thức bị động theo mọi thì, với động từ khuyết thiếu, dạng 2 tân ngữ — chủ điểm chiếm 2-3 câu mỗi đề.",
  sections:[
    {t:"p", html:"Chủ động → Bị động khi ta quan tâm đến <b>đối tượng nhận hành động</b> hơn là người thực hiện. Quy tắc vàng, chỉ cần nhớ 3 bước:"},
    {t:"formula", html:"Bước 1: Lấy TÂN NGỮ của câu chủ động làm chủ ngữ mới<br>Bước 2: Chia BE theo thì của động từ chính (BE luôn ở V3/V-ed sau đó)<br>Bước 3: Động từ chính → V3/V-ed (+ by + người thực hiện nếu cần)"},
    {t:"table", head:["Thì / Dạng","Chủ động","Bị động"], rows:[
      ["Hiện tại đơn","S + V(s/es) + O","S + am/is/are + V3"],
      ["HT tiếp diễn","S + am/is/are + V-ing","S + am/is/are + being + V3"],
      ["Hiện tại hoàn thành","S + have/has + V3","S + have/has + been + V3"],
      ["QK đơn","S + V2 + O","S + was/were + V3"],
      ["QK hoàn thành","S + had + V3","S + had + been + V3"],
      ["Tương lai đơn","S + will + V","S + will + be + V3"],
      ["Động từ khuyết thiếu","S + must/can... + V","S + must/can... + be + V3"],
      ["To-V","S + want/has... + to V","S + want/has + to be + V3"]
    ]},
    {t:"ex", items:[
      {en:"Active: They build houses every year. → Passive: Houses are built every year.", vi:"Mỗi năm người ta xây nhiều ngôi nhà."},
      {en:"Active: Someone has stolen my bike. → Passive: My bike has been stolen.", vi:"Xe đạp của tôi đã bị đánh cắp."},
      {en:"Active: You must finish this report today. → Passive: This report must be finished today.", vi:"Báo cáo này phải được hoàn thành hôm nay."}
    ]},
    {t:"h", html:"Động từ có 2 tân ngữ (give, send, show, offer, lend...)"},
    {t:"p", html:"Có 2 cách bị động. Cách hay thi hơn là đưa <b>người</b> lên làm chủ ngữ: <i>Active: They gave her a scholarship. → Passive: <b>She was given</b> a scholarship.</i> hoặc A scholarship was given to her."},
    {t:"h", html:"Bị động với 'believe, think, say, report...' (dạng nâng cao lớp 12)"},
    {t:"formula", html:"It + is/was + said/thought/believed + that + S + V<br>↔ S + is/was + said + to + V (hiện tại) / to have + V3 (quá khứ)"},
    {t:"ex", items:[
      {en:"People believe that he is very rich. = He is believed to be very rich.", vi:"Người ta tin rằng anh ấy rất giàu."},
      {en:"They said that she left the city. = She was said to have left the city.", vi:"Người ta nói cô ấy đã rời thành phố."}
    ]},
    {t:"warn", html:"<b>Lỗi thường gặp:</b> Quên chia BE theo thì. <s>The letter will send tomorrow</s> SAI → <b>will be sent</b>. Cũng chú ý đại từ tân ngữ phải về dạng chủ ngữ: <s>him was invited</s> → <b>He was invited</b>."},
    {t:"tip", html:"<b>Chiêu ghi nhớ:</b> Luyện theo nhịp 'đổi thì — đổi BE': hiện tại đơn = am/is/are, QK đơn = was/were, hoàn thành = been, tiếp diễn = being, tương lai/khuyết thiếu = be. V3 đứng CUỐI CÙNG, không bao giờ đổi."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Đổi 'Someone cleaned the room yesterday' sang bị động trong đầu. Làm được dưới 10 giây là đạt."}
  ]
},
{
  id:"reported", grade:11, icon:"💬", level:"Trung bình",
  title:"Câu tường thuật (Reported Speech)",
  summary:"Lùi thì, đổi đại từ và trạng từ thời gian - nơi chốn, tường thuật câu hỏi và câu mệnh lệnh.",
  sections:[
    {t:"p", html:"Khi kể lại lời ai đó nói (không trích nguyên văn), động từ phải <b>lùi về quá khứ</b>, đại từ và trạng từ cũng thay đổi theo ngữ cảnh."},
    {t:"table", head:["Trực tiếp","Gián tiếp"], rows:[
      ["Hiện tại đơn","→ Quá khứ đơn"],
      ["Hiện tại tiếp diễn","→ Quá khứ tiếp diễn"],
      ["Hiện tại hoàn thành","→ Quá khứ hoàn thành"],
      ["Quá khứ đơn","→ Quá khứ hoàn thành"],
      ["will / can / may","→ would / could / might"],
      ["must / have to","→ had to"],
      ["this / these","→ that / those"],
      ["here / now / today","→ there / then / that day"],
      ["yesterday / tomorrow","→ the day before / the next day"],
      ["ago / next week","→ before / the following week"]
    ]},
    {t:"h", html:"1. Tường thuật câu kể (statements)"},
    {t:"formula", html:"S + said (that) + S + V(lùi thì) &nbsp;·&nbsp; S + told + O + (that) + S + V"},
    {t:"ex", items:[
      {en:"Direct: 'I am tired,' she said. → Reported: She said (that) she was tired.", vi:"Cô ấy nói cô ấy mệt."},
      {en:"Direct: 'I will call you tomorrow,' he said. → Reported: He said he would call me the next day.", vi:"Anh ấy nói sẽ gọi cho tôi ngày hôm sau."}
    ]},
    {t:"h", html:"2. Tường thuật câu hỏi"},
    {t:"formula", html:"Yes/No question: S + asked (+O) + if/whether + S + V (lùi thì, bỏ dấu ?)<br>Wh-question: S + asked (+O) + từ hỏi + S + V (giữ trật tự câu KHẲNG ĐỊNH)"},
    {t:"ex", items:[
      {en:"'Do you like coffee?' → He asked me if I liked coffee.", vi:"Anh ấy hỏi tôi có thích cà phê không."},
      {en:"'Where do you live?' → She asked me where I lived.", vi:"Cô ấy hỏi tôi sống ở đâu."}
    ]},
    {t:"warn", html:"<b>Bẫy kinh điển:</b> Câu tường thuật câu hỏi KHÔNG giữ trợ động từ do/does/did và KHÔNG đảo từ. <s>She asked where did I live</s> SAI → <b>She asked where I lived</b>."},
    {t:"h", html:"3. Tường thuật câu mệnh lệnh, yêu cầu"},
    {t:"formula", html:"Khẳng định: S + told/asked/ordered + O + to + V<br>Phủ định: S + told/asked + O + not + to + V"},
    {t:"ex", items:[
      {en:"'Please open the door.' → She asked me to open the door.", vi:"Cô ấy nhờ tôi mở cửa."},
      {en:"'Don't be late!' → The teacher told us not to be late.", vi:"Cô giáo bảo chúng tôi đừng đến muộn."}
    ]},
    {t:"h", html:"4. Các dạng đặc biệt lớp 12"},
    {t:"table", head:["Trực tiếp","Gián tiếp"], rows:[
      ["'Let's go out.'","→ He suggested going out."],
      ["'I'm sorry I'm late.'","→ She apologised for being late."],
      ["'Thank you for helping me.'","→ He thanked me for helping him."],
      ["'Would you like some tea?'","→ She offered me some tea / She invited me to have..."],
      ["'You should see a doctor.'","→ He advised me to see a doctor."]
    ]},
    {t:"tip", html:"<b>Mẹo làm nhanh:</b> 3 bước cố định: (1) chọn động từ tường thuật (said/told/asked), (2) lùi thì theo bảng, (3) đổi đại từ + trạng từ. Kiểm tra đại từ trước khi nộp bài — lỗi mất điểm nhiều nhất nằm ở đại từ!"},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> 'I have finished my homework,' Nam said. → Hãy tường thuật lại. (Nam said he had finished his homework.)"}
  ]
},
{
  id:"conditionals", grade:11, icon:"🧩", level:"Trung bình",
  title:"Câu điều kiện (Conditional Sentences)",
  summary:"4 loại câu điều kiện, dạng đảo ngữ với Should/Were/Had, unless, wish — chủ điểm phân loại học sinh khá giỏi.",
  sections:[
    {t:"table", head:["Loại","Mệnh đề If","Mệnh đề chính","Nghĩa"], rows:[
      ["Type 0 (luôn đúng)","S + V(hiện tại)","S + V(hiện tại)","Chân lý, quy luật"],
      ["Type 1 (có thể xảy ra)","S + V(hiện tại)","S + will/can + V","Điều kiện thật ở hiện tại/tương lai"],
      ["Type 2 (không thật hiện tại)","S + V2/were","S + would/could + V","Giả định ngược hiện tại"],
      ["Type 3 (không thật quá khứ)","S + had + V3","S + would/could + have + V3","Giả định ngược quá khứ"]
    ]},
    {t:"ex", items:[
      {en:"If you heat ice, it melts. (Type 0)", vi:"Nếu bạn làm nóng đá, nó tan ra."},
      {en:"If it rains tomorrow, we will stay at home. (Type 1)", vi:"Nếu mai trời mưa, chúng ta sẽ ở nhà."},
      {en:"If I were you, I would apologise to her. (Type 2)", vi:"Nếu tôi là bạn, tôi sẽ xin lỗi cô ấy."},
      {en:"If she had studied harder, she would have passed the exam. (Type 3)", vi:"Nếu cô ấy học chăm hơn, đã đỗ kỳ thi rồi."}
    ]},
    {t:"tip", html:"<b>Mẹo phân loại 5 giây:</b> Nhìn MỆNH ĐỀ IF trước: động từ hiện tại → Type 1; V2/had → Type 2 hay 3; if + had + V3 → chắc chắn Type 3. Nhớ câu thần chú: <b>1 – hiện tại, 2 – was/were + would, 3 – had + would have</b>."},
    {t:"h", html:"1. UNLESS = IF... NOT"},
    {t:"ex", items:[
      {en:"Unless you hurry, you will miss the bus. = If you don't hurry, you will miss the bus.", vi:"Nếu không nhanh lên, bạn sẽ lỡ xe buýt."}
    ]},
    {t:"warn", html:"<b>Bẫy thường gặp:</b> Sau unless KHÔNG dùng thêm not nữa (unless = if...not rồi). Cũng chú ý: Type 2 dùng <b>were</b> cho mọi ngôi (If I <b>were</b> rich...)."},
    {t:"h", html:"2. WISH / IF ONLY (câu ước)"},
    {t:"table", head:["Ước gì","Cấu trúc","Ví dụ"], rows:[
      ["Ước ngược hiện tại","S + wish + S + V2/were","I wish I knew her number. (thật ra không biết)"],
      ["Ước ngược quá khứ","S + wish + S + had + V3","I wish I hadn't said that. (đã nói rồi)"],
      ["Ước tương lai khó thành","S + wish + S + would/could + V","I wish it would stop raining."]
    ]},
    {t:"p", html:"Câu ước Type 2 về 'wish + would' còn diễn tả sự phàn nàn về thói quen: I wish you wouldn't smoke in here."},
    {t:"h", html:"3. Đảo ngữ câu điều kiện (nâng cao, lớp 12)"},
    {t:"formula", html:"Type 1: Should + S + V, ... (= If S should V)<br>Type 2: Were + S + ... , ... (= If S were...)<br>Type 3: Had + S + V3, ... (= If S had V3)"},
    {t:"ex", items:[
      {en:"Should you need any help, call me. = If you should need...", vi:"Nếu bạn cần giúp gì, hãy gọi tôi."},
      {en:"Were I rich, I would travel the world. = If I were rich...", vi:"Nếu tôi giàu, tôi sẽ đi vòng quanh thế giới."},
      {en:"Had he listened to me, he wouldn't have failed. = If he had listened...", vi:"Nếu hắn nghe tôi, đã không trượt rồi."}
    ]},
    {t:"tip", html:"<b>Chiến thuật thi:</b> Đề hay cho câu 'Had.../Were.../Should...' ở đầu câu và hỏi bạn chọn ý nghĩa tương đương. Nhận diện ngay: động từ nguyên mẫu hoặc V3 ngay sau Had/Were/Should ở đầu câu = điều kiện đã đảo ngữ."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Đặt 1 câu ước về quá khứ của chính bạn (I wish I had...) và đổi nó thành Type 3. Nếu làm mượt cả hai, chủ điểm này đã chắc."}
  ]
},
{
  id:"relative", grade:11, icon:"🔗", level:"Trung bình",
  title:"Mệnh đề quan hệ (Relative Clauses)",
  summary:"who, whom, whose, which, that, where, when, why + cách rút gọn mệnh đề — dạng bài 'ăn điểm' nếu nắm công thức chọn đại từ.",
  sections:[
    {t:"p", html:"Mệnh đề quan hệ bổ nghĩa cho danh từ đứng trước nó (antecedent). Bí quyết chọn đại từ quan hệ nằm ở <b>2 câu hỏi</b>: (1) danh từ trước là người hay vật? (2) đại từ đó đóng vai trò gì trong mệnh đề?"},
    {t:"table", head:["Đại từ","Thay cho","Vai trò trong mệnh đề","Ví dụ"], rows:[
      ["who","người","chủ ngữ","The man who lives next door is a doctor."],
      ["whom / who","người","tân ngữ","The girl (whom) I met is my classmate."],
      ["whose","của người/vật","sở hữu","The boy whose bike was stolen cried."],
      ["which","vật, con vật","chủ ngữ / tân ngữ","The book which I bought is interesting."],
      ["that","người + vật","chủ ngữ / tân ngữ (chỉ dùng trong xác định)","This is the best film that I have ever seen."],
      ["where","nơi chốn","trạng ngữ","This is the house where I was born."],
      ["when","thời gian","trạng ngữ","I remember the day when we first met."],
      ["why","lý do","trạng ngữ","Nobody knows the reason why he left."]
    ]},
    {t:"tip", html:"<b>Thuật toán chọn trong 10 giây:</b> Người + làm chủ ngữ → WHO. Người + tân ngữ → WHOM (có thể bỏ). Sở hữu → WHOSE. Vật → WHICH. Sau trạng từ: nơi chốn → WHERE, thời gian → WHEN, lý do → WHY. Gặp 'the reason ___ he failed' → WHY."},
    {t:"h", html:"1. Mệnh đề xác định vs Không xác định"},
    {t:"p", html:"<b>Xác định</b>: cần thiết để biết là ai/cái gì, không có dấu phẩy, có thể dùng that, đại từ tân ngữ có thể lược. <b>Không xác định</b>: chỉ thông tin thêm, LUÔN có dấu phẩy, KHÔNG dùng that, không được lược đại từ."},
    {t:"ex", items:[
      {en:"My brother, who lives in Hanoi, is an engineer. (bổ sung thông tin — có dấu phẩy)", vi:"Anh trai tôi, người sống ở Hà Nội, là kỹ sư."},
      {en:"The book that you gave me is great. (xác định — không dấu phẩy)", vi:"Cuốn sách bạn tặng tôi hay lắm."}
    ]},
    {t:"h", html:"2. Rút gọn mệnh đề quan hệ (lớp 12)"},
    {t:"table", head:["Trường hợp","Rút gọn thành","Ví dụ"], rows:[
      ["Đại từ + BE + V-ing","bỏ who/which + be → V-ing","The girl who is dancing... → The girl dancing..."],
      ["Đại từ + BE + V3 (bị động)","bỏ who/which + be → V3","The letter which was sent... → The letter sent..."],
      ["Đại từ + BE + tính từ/cụm danh từ","bỏ đại từ + be","students who are interested... → students interested..."],
      ["Đại từ + động từ thường (chủ động)","→ to-V (nghĩa mục đích) / V-ing","the first person who won → the first person to win"]
    ]},
    {t:"h", html:"3. Giới từ + đại từ quan hệ"},
    {t:"formula", html:"... N + in/on/at/about/for + which/whom + S + V &nbsp;(văn phong trang trọng, rất hay thi)"},
    {t:"ex", items:[
      {en:"The project about which we talked last week has started. = The project which we talked about...", vi:"Dự án mà chúng ta đã bàn tuần trước đã bắt đầu."},
      {en:"This is the man to whom I gave the money.", vi:"Đây là người tôi đã đưa tiền."}
    ]},
    {t:"warn", html:"<b>Lỗi thường gặp:</b> Dùng what thay cho which/that. <s>The book what I read</s> SAI — 'what' không phải đại từ quan hệ. Dùng that sau dấu phẩy cũng SAI."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Nối 2 câu: 'The man is my teacher. You met him yesterday.' → The man whom you met yesterday is my teacher. Làm được là nắm chắc whom."}
  ]
},
{
  id:"modals", grade:11, icon:"🔑", level:"Cơ bản",
  title:"Động từ khuyết thiếu (Modal Verbs)",
  summary:"can, could, may, might, must, have to, should, need... và dạng hoàn thành must have + V3 — từ vựng ngữ pháp xuất hiện mọi đề.",
  sections:[
    {t:"p", html:"Đặc điểm chung: sau động từ khuyết thiếu luôn là <b>động từ nguyên mẫu</b> (không chia, không to), không thêm -s/-ed. Mỗi từ mang một sắc thái nghĩa riêng:"},
    {t:"table", head:["Từ","Nghĩa chính","Ví dụ"], rows:[
      ["can / can't","khả năng; được phép","She can speak 3 languages. / You can't park here."],
      ["could","khả năng quá khứ; lời đề nghị lịch sự","Could you help me, please?"],
      ["may / might","có thể xảy ra (may chắc hơn)","It may rain later."],
      ["must","bắt buộc (từ chủ quan); suy luận chắc chắn","You must wear a helmet."],
      ["have to","bắt buộc (từ quy định bên ngoài)","I have to work on Saturdays."],
      ["mustn't","cấm (khác hẳn don't have to = không cần)","You mustn't smoke here."],
      ["should / ought to","lời khuyên","You should revise before the test."],
      ["needn't","không cần thiết","You needn't bring food — we have enough."],
      ["would","lời đề nghị, thói quen quá khứ","Would you like some coffee?"]
    ]},
    {t:"tip", html:"<b>Phân biệt must vs have to:</b> must = nghĩa vụ do CHÍNH MÌNH cảm thấy/quy định nội bộ; have to = do quy định bên ngoài. Nhưng khi thi, chú ý 'mustn't' (cấm) và 'don't have to' (không cần) là 2 nghĩa trái ngược — bẫy hay gặp."},
    {t:"h", html:"1. Suy luận: các mức độ chắc chắn"},
    {t:"p", html:"must (99% chắc) → may/might (có thể) → can't (chắc chắn không). Ví dụ: He <b>must be</b> tired (chắc chắn mệt); He <b>can't be</b> at home — the lights are off (chắc chắn không ở nhà)."},
    {t:"h", html:"2. Modal + HAVE + V3 — suy luận về quá khứ (nâng cao)"},
    {t:"table", head:["Cấu trúc","Nghĩa","Ví dụ"], rows:[
      ["must have + V3","chắc chắn đã...","The ground is wet. It must have rained."],
      ["can't/couldn't have + V3","chắc chắn KHÔNG đã...","He can't have finished so fast!"],
      ["should have + V3","lẽ ra nên... (mà không)","You should have revised the lesson."],
      ["needn't have + V3","lẽ ra không cần... (mà vẫn làm)","You needn't have cooked so much food."],
      ["may/might have + V3","có lẽ đã...","She might have missed the train."]
    ]},
    {t:"ex", items:[
      {en:"She should have studied harder. Now she regrets it.", vi:"Lẽ ra cô ấy nên học chăm hơn. Giờ thì tiếc rồi."},
      {en:"He isn't here — he must have gone out.", vi:"Anh ấy không ở đây — chắc đã ra ngoài rồi."}
    ]},
    {t:"warn", html:"<b>Lỗi thường gặp:</b> Thêm to hoặc -s sau modal. <s>She cans swim / must to go</s> SAI → <b>can swim / must go</b>. Duy nhất 'ought' đi với to: ought <b>to</b> go."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Đồng hồ đất ướt sũng buổi sáng — dùng 'must have + V3' để suy đoán chuyện gì đã xảy ra đêm qua. Tư duy suy luận này chính là cách đề thi ra bài."}
  ]
},
{
  id:"adverbial", grade:11, icon:"🧭", level:"Nâng cao",
  title:"Mệnh đề trạng ngữ (Adverbial Clauses)",
  summary:"Trạng ngữ chỉ thời gian, lý do, nhượng bộ, mục đích, kết quả — bộ liên từ đi với thì nào là chìa khóa.",
  sections:[
    {t:"h", html:"1. Trạng ngữ chỉ thời gian"},
    {t:"p", html:"Liên từ: <b>when, while, before, after, as soon as, until, by the time, as</b>. Quy tắc vàng: mệnh đề thời gian nói về tương lai phải dùng <b>thì hiện tại</b> (không dùng will)."},
    {t:"ex", items:[
      {en:"As soon as I finish my homework, I will call you.", vi:"Xong bài tập là tôi sẽ gọi cho bạn."},
      {en:"While I was cooking, my brother was watching TV.", vi:"Trong khi tôi nấu ăn thì anh trai xem TV."}
    ]},
    {t:"h", html:"2. Trạng ngữ chỉ lý do"},
    {t:"p", html:"<b>because, since, as, now that</b> + mệnh đề; <b>because of / due to / owing to</b> + DANH TỪ hoặc V-ing."},
    {t:"ex", items:[
      {en:"Because it rained heavily, we cancelled the trip. = Because of the heavy rain, we cancelled the trip.", vi:"Vì mưa to nên chúng tôi hủy chuyến đi."}
    ]},
    {t:"tip", html:"<b>Dạng bài kinh điển:</b> Đề cho câu vìBecause + ... và hỏi câu đổi tương đương với 'Because of'. Chỉ cần biến mệnh đề thành cụm danh từ: Because it rained heavily → Because of the heavy rain."},
    {t:"h", html:"3. Trạng ngữ chỉ nhượng bộ (dù... nhưng...)"},
    {t:"table", head:["Liên từ","Đi với","Ví dụ"], rows:[
      ["although / though / even though","+ mệnh đề","Although he is rich, he isn't happy."],
      ["in spite of / despite","+ danh từ / V-ing / the fact that + mệnh đề","Despite the rain, we went out."],
      ["however + adj/adv","however khó khăn vẫn...","However hard it is, never give up."],
      ["no matter how/what/who","dù thế nào/cái gì/ai","No matter what happens, stay calm."],
      ["while / whereas","trong khi đó (tương phản)","He likes tea while I prefer coffee."]
    ]},
    {t:"ex", items:[
      {en:"Although she was tired, she kept working. = In spite of being tired, she kept working.", vi:"Dù mệt, cô ấy vẫn làm việc."}
    ]},
    {t:"h", html:"4. Trạng ngữ chỉ mục đích"},
    {t:"formula", html:"so that / in order that + S + can/could/will/would + V<br>to / in order to / so as to + V (chủ ngữ 2 mệnh đề giống nhau)"},
    {t:"ex", items:[
      {en:"She spoke slowly so that the students could understand.", vi:"Cô ấy nói chậm để học sinh hiểu."},
      {en:"He got up early in order to catch the first bus.", vi:"Anh ấy dậy sớm để bắt chuyến xe đầu tiên."}
    ]},
    {t:"warn", html:"<b>Bẫy:</b> KHÔNG dùng 'for to V'. Phủ định mục đích là 'so as not to / in order not to', không phải 'not to' một mình."},
    {t:"h", html:"5. Trạng ngữ chỉ kết quả"},
    {t:"formula", html:"so + adj/adv + that + S + V &nbsp;·&nbsp; such + (a/an) + (adj) + N + that + S + V"},
    {t:"ex", items:[
      {en:"The box is so heavy that I can't lift it.", vi:"Cái hộp nặng đến nỗi tôi không nhấc nổi."},
      {en:"It was such a good film that we watched it twice.", vi:"Đó là bộ phim hay đến mức chúng tôi xem 2 lần."}
    ]},
    {t:"tip", html:"<b>Công thức đổi so ↔ such:</b> so + adj + a + N = such + a + adj + N (so beautiful a girl = such a beautiful girl). Đề thi cực thích dạng biến đổi này."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Viết lại 'Although it was cold, we went swimming' dùng 'Despite'. (Despite the cold weather / Despite being cold, we went swimming.)"}
  ]
},
{
  id:"inversion", grade:12, icon:"🌀", level:"Nâng cao",
  title:"Đảo ngữ & Nhấn mạnh (Inversion)",
  summary:"Đảo ngữ với trạng từ phủ định, Only, No sooner...than, Hardly...when, So/Such — điểm phân biệt học sinh giỏi.",
  sections:[
    {t:"p", html:"Đảo ngữ = đưa trợ động từ lên trước chủ ngữ (S) để nhấn mạnh, thường xuất hiện khi câu mở đầu bằng trạng từ <b>phủ định</b> hoặc giới hạn. Công thức chung:"},
    {t:"formula", html:"Trạng từ phủ định + trợ động từ + S + V chính<br>(Never have I seen / Not only does he... / Rarely do we...)"},
    {t:"table", head:["Cụm mở đầu","Ví dụ đảo ngữ"], rows:[
      ["Never / Rarely / Seldom","Never have I seen such a beautiful sunset."],
      ["Not only... (but also)","Not only does she sing well, but she also plays the piano."],
      ["No sooner... than (QKHT, QK đơn)","No sooner had he arrived than it started to rain."],
      ["Hardly / Scarcely... when","Hardly had I sat down when the phone rang."],
      ["At no time / Under no circumstances","Under no circumstances should you open this door."],
      ["Only when / Only after / Only by / Only then","Only when he came home did I feel safe."],
      ["Not until","Not until midnight did the noise stop."],
      ["Little (không ngờ)","Little did she know that he was lying."]
    ]},
    {t:"tip", html:"<b>Thuật toán nhận dạng:</b> Đầu câu có cụm phủ định/giới hạn → động từ chính lùi về nguyên mẫu, trợ động từ (do/does/did hoặc have/had, is/are/was/were) đứng TRƯỚC chủ ngữ. Nếu câu là QK đơn → trợ từ là DID."},
    {t:"h", html:"1. Đảo ngữ với SO và SUCH"},
    {t:"formula", html:"So + adj/adv + be/trợ từ + S + that...<br>Such + (a/an) + (adj) + N + be/trợ từ + S + that..."},
    {t:"ex", items:[
      {en:"So beautiful was the scenery that we took hundreds of photos.", vi:"Phong cảnh đẹp đến mức chúng tôi chụp hàng trăm tấm ảnh."},
      {en:"Such was his anger that nobody dared to speak.", vi:"Sự tức giận của anh ta lớn đến mức không ai dám lên tiếng."}
    ]},
    {t:"h", html:"2. Đảo ngữ câu điều kiện (xem lại bài Câu điều kiện)"},
    {t:"p", html:"Should you... / Were you... / Had you... — bỏ 'if' và đảo Should/Were/Had lên đầu. Ví dụ: <i>Had I known, I would have told you.</i>"},
    {t:"h", html:"3. Đảo ngữ sau trạng từ chỉ nơi chốn / hướng đi"},
    {t:"p", html:"Với động từ chỉ chuyển động (come, go, lie, stand...) khi mở đầu bằng cụm nơi chốn, đảo cả động từ: <i>Here comes the bus. / On the hill stood an old temple.</i>"},
    {t:"warn", html:"<b>Lỗi thường gặp:</b> Đảo sai loại động từ. Với cụm phủ định, chỉ đảo TRỢ ĐỘNG TỪ, giữ động từ thường nguyên mẫu: <s>Never I have seen</s> → <b>Never have I seen</b>; <s>Only then he realized</s> → <b>Only then did he realize</b>."},
    {t:"ex", items:[
      {en:"Only by working hard can you achieve your dream.", vi:"Chỉ bằng cách làm việc chăm chỉ bạn mới đạt được ước mơ."},
      {en:"Not until she left did I realize how much I missed her.", vi:"Mãi đến khi cô ấy đi rồi tôi mới nhận ra mình nhớ cô ấy nhiều đến thế."}
    ]},
    {t:"tip", html:"<b>Mẹo hay thi:</b> Cặp 'No sooner... THAN' và 'Hardly... WHEN' luôn đi kèm với nhau đúng vậy: No sooner + had + S + V3 + <b>than</b>...; Hardly + had + S + V3 + <b>when</b>... Đổi than/when là mất điểm oan!"},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Đảo ngữ: 'I have never eaten sushi before.' → Never have I eaten sushi before. Hãy thử với câu của chính bạn!"}
  ]
}
];
