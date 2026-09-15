/* ===== LESSONS - Phần C: 8 chủ đề bổ sung ===== */
const LESSONS_C = [
{
  id:"prepositions", grade:10, icon:"🍄", level:"Cơ bản",
  title:"Giới từ IN, ON, AT & giới từ thông dụng",
  summary:"Giới từ chỉ thời gian và nơi chốn (in/on/at), between–among, by–with — nhóm câu hỏi 'ăn điểm' dễ nhất nếu nhớ đúng quy tắc.",
  sections:[
    {t:"p", html:"Giới từ là từ nhỏ nhưng quyết định điểm số của rất nhiều câu. Mẹo tổng quát: gặp chỗ trống, tự hỏi <b>điều đó nói về THỜI GIAN hay NƠI CHỐN</b>, rồi đi qua bảng dưới đây."},
    {t:"h", html:"1. IN / ON / AT — chỉ THỜI GIAN"},
    {t:"table", head:["Giới từ","Dùng với","Ví dụ"], rows:[
      ["IN","tháng, năm, mùa, buổi, khoảng thời gian","in May, in 2024, in summer, in the morning, in an hour"],
      ["ON","ngày, ngày lễ có 'Day', thứ + buổi","on Monday, on 5th May, on Christmas Day, on Monday morning"],
      ["AT","giờ đúng, nighttime, bữa ăn, lễ hội","at 7 p.m., at noon, at night, at lunch, at Christmas"]
    ]},
    {t:"warn", html:"<b>Bẫy kinh điển:</b> 'in the morning' nhưng phải là '<b>on</b> Monday morning' (khi có thứ); '<b>at</b> night' (không nói in night)."},
    {t:"h", html:"2. IN / ON / AT — chỉ NƠI CHỐN"},
    {t:"table", head:["Giới từ","Dùng với","Ví dụ"], rows:[
      ["IN","trong không gian khép kín, thành phố, quốc gia","in the box, in Hanoi, in Vietnam, in the kitchen"],
      ["ON","bề mặt, đường, phương tiện công cộng","on the table, on the wall, on the bus, on the 2nd floor"],
      ["AT","điểm cụ thể, địa chỉ, nơi hoạt động","at the door, at 25 Le Loi Street, at school, at the party"]
    ]},
    {t:"tip", html:"<b>Mẹo nhanh:</b> Phương tiện <b>by</b> car/bus/plane (ngồi trong to, không kể tên) nhưng <b>on</b> foot = đi bộ; <b>in</b> my car (xe riêng). Câu <i>She goes to school ___ bus</i> → <b>by</b>."},
    {t:"h", html:"3. Giới từ hay thi khác"},
    {t:"table", head:["Giới từ","Nghĩa","Ví dụ"], rows:[
      ["between","giữa (2 người/vật)","The bank is between the school and the park."],
      ["among","giữa (từ 3 trở lên, đám đông)","He felt comfortable among friends."],
      ["under / over","dưới / trên (thẳng)","The cat is under the table."],
      ["behind / in front of","sau / trước","Park your car in front of the house."],
      ["next to / beside","cạnh","Sit next to me, please."],
      ["opposite","đối diện","The cafe is opposite the bank."],
      ["from... to","từ... đến","from Monday to Friday"],
      ["by + mốc thời gian","trước, muộn nhất là","Finish it by 5 p.m."]
    ]},
    {t:"ex", items:[
      {en:"My birthday is on 12th June, and the party starts at 6 o'clock in the evening.", vi:"Sinh nhật tôi vào ngày 12 tháng 6, và bữa tiệc bắt đầu lúc 6 giờ tối."},
      {en:"There are many old temples in Hue, and one of them is right on the hill.", vi:"Có nhiều đền cổ ở Huế, và một trong số đó nằm ngay trên đồi."}
    ]},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Điền giới từ: 'The exam is ___ 8 a.m. ___ Monday ___ June.' (at / on / in) — nếu tự làm đúng trong 10 giây, bài này đã chắc."}
  ]
},
{
  id:"word-forms", grade:11, icon:"🧱", level:"Trung bình",
  title:"Từ loại & Hậu tố (Word Formation)",
  summary:"Nhận biết và tạo danh từ, tính từ, trạng từ, động từ bằng hậu tố — dạng bài chiếm 2-3 câu ở đề thi đọc và viết lại câu.",
  sections:[
    {t:"p", html:"Dạng bài word formation cho một từ gốc và yêu cầu đổi thành từ loại đúng. Chìa khóa: nhìn <b>vị trí chỗ trống</b> trong câu để biết cần DANH TỪ, ĐỘNG TỪ, TÍNH TỪ hay TRẠNG TỪ."},
    {t:"h", html:"1. Hậu tố tạo DANH TỪ"},
    {t:"table", head:["Hậu tố","Gốc → Danh từ","Nghĩa"], rows:[
      ["-tion / -sion","educate → education, decide → decision","sự..."],
      ["-ment","develop → development, agree → agreement","sự..."],
      ["-ness","happy → happiness, kind → kindness","tính..."],
      ["-ity","able → ability, similar → similarity","tính..."],
      ["-er / -or","teach → teacher, act → actor, invent → inventor","người..."],
      ["-ance / -ence","perform → performance, differ → difference","sự..."],
      ["-ship / -hood","friend → friendship, child → childhood","tình bạn / thời kỳ..."]
    ]},
    {t:"h", html:"2. Hậu tố tạo TÍNH TỪ"},
    {t:"table", head:["Hậu tố","Gốc → Tính từ","Nghĩa"], rows:[
      ["-ful","beauty → beautiful, help → helpful","nhiều..., có..."],
      ["-less","care → careless, hope → hopeless","thiếu..., không..."],
      ["-ous","danger → dangerous, fame → famous","có tính..."],
      ["-y / -ly","rain → rainy, friend → friendly, love → lovely","như..."],
      ["-al","nature → natural, music → musical","(thuộc)..."],
      ["-ive / -able","create → creative, comfort → comfortable","có thể..."]
    ]},
    {t:"h", html:"3. Hậu tố tạo TRẠNG TỪ & ĐỘNG TỪ"},
    {t:"p", html:"<b>Trạng từ:</b> hầu hết tính từ + LY (quick → quickly, extreme → extremely). Ngoại lệ: true → truly, simple → simply; good → well.<br><b>Động từ:</b> -en (wide → widen, short → shorten), -ize/-ise (modern → modernize), -ify (simple → simplify)."},
    {t:"tip", html:"<b>Thuật toán chọn từ loại 10 giây:</b> Chỗ trống đứng SAU a/an/the hoặc tính từ → DANH TỪ. Sau chủ ngữ, trước tân ngữ → ĐỘNG TỪ. Trước danh từ → TÍNH TỪ. Cuối câu/đầu câu bổ nghĩa cả câu, hoặc sau động từ thường → TRẠNG TỪ."},
    {t:"warn", html:"<b>Hai cái bẫy lớn:</b> (1) 'friendly, lovely, lively' trông như trạng từ nhưng là TÍNH TỪ. (2) -ful và -less nghĩa NGƯỢC nhau: careful ≠ careless."},
    {t:"ex", items:[
      {en:"Her sudden ___ (disappear) shocked everyone.", vi:"Việc cô ấy biến mất đột ngột khiến mọi người sốc. → disappearance"},
      {en:"He is a very ___ (care) driver; he never drives ___ (care).", vi:"Anh ấy lái xe cẩn thận, không bao giờ lái ẩu. → careful / carelessly"}
    ]},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Từ 'succeed' đổi thành: danh từ? tính từ? trạng từ? (success / successful / successfully) — đổi được cả 4 dạng là nắm chắc bài."}
  ]
},
{
  id:"sva", grade:11, icon:"🌸", level:"Trung bình",
  title:"Hòa hợp Chủ ngữ – Vị ngữ (Subject–Verb Agreement)",
  summary:"Động từ số ít hay số nhiều? Quy tắc either...or, the number of, everyone, danh từ tập thể — dạng 'bẫy' phổ biến nhất của đề thi.",
  sections:[
    {t:"p", html:"Nguyên tắc gốc: chủ ngữ SỐ ÍT → động từ thêm s/es; chủ ngữ SỐ NHIỀU → động từ nguyên mẫu. Nhưng đề thi chuyên đặt bẫy ở các trường hợp đặc biệt sau:"},
    {t:"table", head:["Trường hợp","Quy tắc","Ví dụ"], rows:[
      ["everyone, everybody, each, every, either, neither, someone, nobody","+ ĐỘNG TỪ SỐ ÍT","Everyone <b>is</b> here. Each student <b>has</b> a book."],
      ["either... or / neither... nor / not only... but also","theo chủ ngữ GẦN NHẤT","Neither Nam nor his friends <b>are</b> late. / Neither the students nor the teacher <b>is</b> here."],
      ["along with, as well as, together with, accompanied by","theo chủ ngữ ĐẦU CÂU","The teacher, along with 30 students, <b>is</b> going on a trip."],
      ["the number of + N số nhiều","+ V SỐ ÍT","The number of students <b>is</b> increasing."],
      ["a number of + N số nhiều (= many)","+ V SỐ NHIỀU","A number of students <b>are</b> absent today."],
      ["khoảng thời gian, số tiền, khoảng cách","một khối lượng → V SỐ ÍT","Ten years <b>is</b> a long time. Five dollars <b>is</b> enough."],
      ["danh từ tập thể (family, team, class, government)","thường + V SỐ ÍT (nghĩa một đơn vị)","My family <b>lives</b> in Da Nang."],
      ["There be...","be theo danh từ SAU nó","There <b>is</b> a book and two pens on the desk."]
    ]},
    {t:"ex", items:[
      {en:"Everybody in my class likes English.", vi:"Mọi người trong lớp tôi đều thích tiếng Anh."},
      {en:"Neither the manager nor the employees were informed about the change.", vi:"Cả giám đốc lẫn nhân viên đều không được thông báo về thay đổi."}
    ]},
    {t:"warn", html:"<b>Bẫy hay gặp nhất:</b> Gạch ngang cụm giới từ giữa chủ ngữ và động từ: <i>The list of items <s>are</s></i> → <b>is</b> (chủ ngữ thật là 'the list', 'of items' chỉ bổ nghĩa). Gạch bỏ cụm từ giới từ đi mà đọc, động từ đúng ngay."},
    {t:"tip", html:"<b>Mẹo làm nhanh:</b> Khoanh tròn chủ ngữ thật của câu (bỏ qua cụm of/with/along with...), quyết định số ít/số nhiều cho chủ ngữ đó, rồi chọn động từ."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> 'The quality of these products ___ (be) excellent.' Điền được 'is' và GIẢI THÍCH được vì sao là đạt."}
  ]
},
{
  id:"causative", grade:11, icon:"🦀", level:"Trung bình",
  title:"Câu cầu khiến (Causative: have / get)",
  summary:"have someone do / have something done / get — dạng bài nhận biết 'ai đó làm HỘ mình' xuất hiện cố định trong đề.",
  sections:[
    {t:"p", html:"Khi bạn <b>nhờ người khác</b> làm việc cho mình (không tự làm), tiếng Anh dùng cấu trúc causative. Đây là dạng câu đề thi rất ưa chuộng vì dễ ra bẫy chủ động/bị động."},
    {t:"table", head:["Cấu trúc","Nghĩa","Ví dụ"], rows:[
      ["S + have + O(người) + V nguyên mẫu","thuê/nhờ ai làm gì","I <b>had the mechanic repair</b> my bike."],
      ["S + have + O(vật) + V3 (+ by...)","nhờ ai đó làm việc gì CHO vật (bị động)","I <b>had my bike repaired</b> yesterday."],
      ["S + get + O(người) + to V","thuyết phục/nhờ ai làm gì (informal)","She <b>got her brother to help</b> her."],
      ["S + get + O(vật) + V3","nhờ làm việc gì cho vật (informal)","He <b>got his hair cut</b> this morning."]
    ]},
    {t:"p", html:"Phân biệt nhanh: <b>have/get + vật + V3</b> luôn mang nghĩa bị động — vật không tự làm được! 'I cut my hair' = tôi tự cắt; 'I <b>had my hair cut</b>' = tôi đi cắt (thợ cắt giúp)."},
    {t:"h", html:"Causative mang nghĩa KHÔNG MAY"},
    {t:"p", html:"have + vật + V3 còn diễn tả việc xấu xảy ra cho tài sản của bạn: <i>She <b>had her wallet stolen</b> on the bus</i> (Cô ấy bị móc ví trên xe buýt). <i>We <b>had our window broken</b> in the storm</i>."},
    {t:"ex", items:[
      {en:"We are having a new kitchen installed next week.", vi:"Tuần sau chúng tôi sẽ được lắp đặt bếp mới."},
      {en:"You should get that tooth filled before it gets worse.", vi:"Bạn nên trám cái răng đó trước khi nó tệ hơn."}
    ]},
    {t:"tip", html:"<b>Dạng hay thi:</b> đề cho 'The painter painted our house last week.' và hỏi đổi sang câu 'have' → <b>We had our house painted last week.</b> Nhớ: vật lên trước + V3."},
    {t:"warn", html:"<b>Lỗi thường gặp:</b> 'have someone TO do' là SAI (phải là V nguyên mẫu); 'get someone do' là SAI (phải là <b>to</b> V). Cặp này đối xứng ngược — học thuộc!"}
  ]
},
{
  id:"phrasal", grade:11, icon:"✈️", level:"Trung bình",
  title:"Cụm động từ (Phrasal Verbs)",
  summary:"give up, look after, put off, take off... 15 cụm hay thi nhất + quy tắc vị trí đại từ — phần từ vựng 'ăn điểm' của mọi đề.",
  sections:[
    {t:"p", html:"Phrasal verb = động từ + tiểu từ (up/down/off/on/out...), nghĩa thường <b>không đoán được</b> từ từng thành phần. Phải học cả cụm như một từ vựng mới."},
    {t:"table", head:["Cụm động từ","Nghĩa","Ví dụ"], rows:[
      ["give up","từ bỏ","Don't give up learning English!"],
      ["look after","chăm sóc","She looks after her younger sister."],
      ["look for","tìm kiếm","I'm looking for my keys."],
      ["look forward to + V-ing","mong chờ","I look forward to seeing you."],
      ["put off","trì hoãn","They put off the meeting until Friday."],
      ["turn on / turn off","bật / tắt","Please turn off the lights."],
      ["turn up / turn down","xuất hiện / từ chối, vặn nhỏ","He turned down the offer."],
      ["take off","cất cánh; cởi (quần áo)","The plane took off on time."],
      ["put on","mặc vào","Put on your coat; it's cold."],
      ["go on","tiếp tục","The show must go on."],
      ["come across","tình cờ gặp/thấy","I came across an old photo."],
      ["break down","hỏng (máy); bật khóc","Our car broke down on the highway."],
      ["find out","phát hiện, tìm ra","She found out the truth."],
      ["set up","thành lập","They set up a new club."],
      ["get up / wake up","thức dậy / đánh thức","I get up at 6 a.m."]
    ]},
    {t:"h", html:"Quy tắc vị trí TÂN NGỮ — bẫy đề kinh điển"},
    {t:"p", html:"Cụm <b>tách được</b> (turn on, put off, give up...): nếu tân ngữ là <b>ĐẠI TỪ</b> (it, him, them) thì đại từ PHẢI đứng ở GIỮA: <i>turn <b>it</b> on</i> ✓ — <s>turn on it</s> ✗. Nếu tân ngữ là danh từ dài thì đứng sau: <i>turn on the TV</i>.<br>Cụm <b>không tách</b> (look after, look for, come across, break down...): tân ngữ luôn đứng SAU: <i>look <b>after the baby</b></i>."},
    {t:"ex", items:[
      {en:"The concert was put off because of the heavy rain.", vi:"Buổi hòa nhạc bị hoãn vì mưa to."},
      {en:"While cleaning the attic, I came across my grandmother's diary.", vi:"Khi dọn gác xép, tôi tình cờ thấy nhật ký của bà."}
    ]},
    {t:"tip", html:"<b>Mẹo đoán nghĩa:</b> up thường = hoàn thành/lên/xuất hiện (finish up, show up); off = rời/hủy/cất (take off, call off); out = lộ ra/phân phối (find out, hand out); down = hỏng/xuống (break down, write down). Đoán được 60% là quý!"},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Điền đúng dạng: 'Please turn ___ (the radio / it).' — sắp được 'turn the radio on' nhưng bắt buộc 'turn it on'. Nếu bạn vừa tự sửa được, mục này xong!"}
  ]
},
{
  id:"noun-clauses", grade:12, icon:"🦉", level:"Nâng cao",
  title:"Mệnh đề danh ngữ (Noun Clauses)",
  summary:"that / whether / if / từ để hỏi làm chủ ngữ-tân ngữ — nền tảng của câu tường thuật và dạng trắc nghiệm khó phân loại học sinh giỏi.",
  sections:[
    {t:"p", html:"Mệnh đề danh ngữ là một <b>câu hoàn chỉnh đóng vai trò danh từ</b> (chủ ngữ, tân ngữ, bổ ngữ). Có 3 loại chính theo từ mở đầu: <b>that</b>, <b>whether/if</b>, và <b>từ để hỏi (wh-)</b>."},
    {t:"table", head:["Loại","Vai trò","Ví dụ"], rows:[
      ["that + S + V","tân ngữ của think, believe, say, know, hope...","I think <b>that she is right</b>."],
      ["whether/if + S + V","sau động từ nghi vấn: know, wonder, ask, doubt...","I don't know <b>whether he will come</b>."],
      ["wh- + S + V","khi nội dung là câu hỏi mở","Tell me <b>what you need</b>."],
      ["What + S + V","= the thing that — làm chủ ngữ hoặc tân ngữ","<b>What he said</b> surprised me."],
      ["cả mệnh đề làm chủ ngữ","động từ số ít","<b>That he failed the exam</b> was a big surprise."]
    ]},
    {t:"warn", html:"<b>Bẫy số 1 — KHÔNG đảo từ trong mệnh đề danh ngữ:</b> <s>I don't know where does he live</s> → <b>I don't know where he lives</b>. Mệnh đề sau where/what/why luôn giữ trật tự câu khẳng định (giống câu tường thuật)."},
    {t:"warn", html:"<b>Bẫy số 2 — if/whether:</b> Sau giới từ, trước 'to V' và ngay đầu câu làm chủ ngữ chỉ dùng WHETHER: <i>It depends on <b>whether</b> it rains</i>; <i><b>Whether</b> to go or not is her decision</i>."},
    {t:"ex", items:[
      {en:"Nobody knows why she left without saying goodbye.", vi:"Không ai biết tại sao cô ấy ra đi mà không chào."},
      {en:"What the children need most is love and attention.", vi:"Điều trẻ em cần nhất là tình yêu thương và sự quan tâm."}
    ]},
    {t:"tip", html:"<b>Kết nối bài cũ:</b> Câu tường thuật (bài 'Câu tường thuật') chính là việc đưa câu hỏi/câu kể vào làm mệnh đề danh ngữ sau said/asked. Nắm bài này thì bài kia tự nhẹ."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Đổi 'Where does she work?' thành tân ngữ của 'Do you know...?' — nếu bạn viết 'Do you know where she works?' không có 'does' là bạn đã thuần thục mệnh đề danh ngữ."}
  ]
},
{
  id:"collocations", grade:12, icon:"🫖", level:"Nâng cao",
  title:"Cụm từ kết hợp (Collocations: make/do/take...)",
  summary:"Tại sao là take a photo chứ không phải make a photo? Bộ collocations chuẩn nhất cho phần từ vựng đề thi.",
  sections:[
    {t:"p", html:"Collocation là cách <b>người bản xứ hay đi kèm các từ với nhau</b>. Chọn sai động từ (make a photo thay vì take a photo) vẫn 'hiểu được' nhưng bị mất điểm ngay. Thuộc các cặp dưới đây là đủ tự tin phần từ vựng."},
    {t:"table", head:["Động từ","Collocation hay thi"], rows:[
      ["TAKE","take a photo, take a shower/bath, take a break/rest, take an exam, take medicine, take a taxi/bus, take place, take care of, take part in, take notes"],
      ["MAKE","make a mistake, make a decision, make noise, make friends (with), make money, make an effort, make progress, make fun of, make sure"],
      ["DO","do homework, do housework, do the shopping, do one's best, do a favor, do business (with), do exercise, do damage (to)"],
      ["HAVE","have breakfast/lunch/dinner, have a rest, have fun, have a dream, have a headache, have an accident, have difficulty (in) V-ing"],
      ["GO","go shopping, go swimming/fishing, go sightseeing, go home, go abroad, go bankrupt, go crazy"],
      ["PAY / KEEP","pay attention (to), pay a visit, pay the bill; keep a promise, keep in touch, keep calm, keep a secret, keep a diary"]
    ]},
    {t:"h", html:"Phân biệt MAKE vs DO — bẫy lớn nhất"},
    {t:"p", html:"<b>MAKE</b> = tạo ra/sản xuất một thứ mới (kết quả nhìn thấy hoặc trừu tượng): make a cake, make a plan, make a suggestion. <b>DO</b> = thực hiện một hoạt động/việc đã có: do homework, do the dishes, do sports. Khi phân vân: việc có 'sản phẩm' → make; việc 'làm quanh nhà/hằng ngày' → do."},
    {t:"ex", items:[
      {en:"Please keep in touch after you move to Hue.", vi:"Sau khi chuyển đến Huế, hãy giữ liên lạc nhé."},
      {en:"He made great progress last semester and paid more attention in class.", vi:"Học kỳ trước cậu ấy tiến bộ vượt bậc và tập trung hơn trong lớp."}
    ]},
    {t:"tip", html:"<b>Mẹo ghi nhớ:</b> Học collocation theo KHỐI, không học từ đơn lẻ — ghi sổ 3 cột (make / do / take) và thêm từ mới mỗi tuần. Khi thi, đọc nguyên cụm trong đề: chỉ cần một chữ lệch (take/make) là đáp án sai."},
    {t:"warn", html:"<b>Cặp bẫy:</b> 'take part in' (tham gia) ≠ 'take place' (diễn ra — KHÔNG cần người!). <i>The festival takes place in May</i> — lễ hội diễn ra vào tháng 5."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Điền: '___ a decision', '___ your best', '___ a shower', '___ attention'. (make / do / take / pay) — đúng cả 4 trong 20 giây là đạt."}
  ]
},
{
  id:"question-tags", grade:11, icon:"🦜", level:"Trung bình",
  title:"Câu hỏi đuôi (Question Tags)",
  summary:"...isn't it? ...do you? Quy tắc phủ định-xuôi, các trường hợp đặc biệt (I am, Let's, there is, never) — câu hỏi 'lái' xuất hiện mỗi đề.",
  sections:[
    {t:"p", html:"Câu hỏi đuôi là câu hỏi nhỏ gắn cuối câu để xác nhận thông tin. Quy tắc vàng: <b>câu khẳng định → đuôi phủ định, câu phủ định → đuôi khẳng định</b>. Đuôi dùng trợ động từ của câu + đại từ chủ ngữ."},
    {t:"formula", html:"S + V(khẳng định)..., trợ động từ + n't + đại từ?<br>S + V(phủ định)..., trợ động từ (không n't) + đại từ?"},
    {t:"ex", items:[
      {en:"She is a doctor, isn't she?", vi:"Cô ấy là bác sĩ, phải không?"},
      {en:"You don't like coffee, do you?", vi:"Bạn không thích cà phê, đúng chứ?"},
      {en:"They went to Da Lat last summer, didn't they?", vi:"Hè ngoái họ đi Đà Lạt rồi, phải không? (QK đơn → did)"},
      {en:"Your brother can swim very well, can't he?", vi:"Anh trai bạn bơi giỏi lắm, đúng không?"}
    ]},
    {t:"h", html:"Các trường hợp ĐẶC BIỆT — chỗ ra đề"},
    {t:"table", head:["Câu","Câu hỏi đuôi","Ghi nhớ"], rows:[
      ["I am late, ...","aren't I?","duy nhất aren't I (không nói amn't I)"],
      ["Let's go out, ...","shall we?","Let's → shall we"],
      ["Don't be late, ...","will you?","mệnh lệnh phủ định → will you"],
      ["Open the door, ...","will you / won't you?","mệnh lệnh khẳng định → will/won't you"],
      ["There is a cafe nearby, ...","isn't there?","lặp lại 'there'"],
      ["Everyone/Nobody came, ...","didn't they?","đại từ bất định → they"],
      ["Nothing happened, ...","did it?","nothing = phủ định → đuôi khẳng định"],
      ["He never smokes, ...","does he?","never/hardly/rarely = nghĩa phủ định → đuôi KHẲNG ĐỊNH"],
      ["I don't think he is honest, ...","is he?","nghĩa phủ định ở mệnh đề sau → đuôi theo mệnh đề phụ, khẳng định"]
    ]},
    {t:"tip", html:"<b>3 bước chốt đáp án:</b> (1) tìm trợ động từ (be/do/can/will... — QK đơn và HTĐ đơn dùng did/do/does), (2) đảo dấu KHĐ↔PĐ (chú ý never, hardly, nothing), (3) lấy đại từ chủ ngữ thay cho chủ ngữ (everyone → they)."},
    {t:"warn", html:"<b>Bẫy hay gặp:</b> 'She has a car' (have = sở hữu, động từ thường) → <b>doesn't she?</b> — không phải hasn't she. Nhưng 'She has finished' (trợ động từ HTHT) → <b>hasn't she?</b> Nhìn CHỨC NĂNG của have!"},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Thêm câu hỏi đuôi: 'Your parents rarely argue, ___?' — nếu bạn điền 'do they' (rarely là nghĩa phủ định) thì hoàn hảo!"}
  ]
}
];
