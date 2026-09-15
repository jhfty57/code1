/* ===== LESSONS - Phần D: 8 chủ đề nâng cao ===== */
const LESSONS_D = [
{
  id:"transform", grade:12, icon:"🦎", level:"Nâng cao",
  title:"Sự chuyển đổi câu (Sentence Transformation)",
  summary:"Viết lại câu không đổi nghĩa — dạng 100% xuất hiện trong đề: quá khứ đơn → HTHT, because → because of, chủ động → bị động...",
  sections:[
    {t:"p", html:"Đề cho câu gốc và câu bắt đầu bằng từ gợi ý — bạn phải viết lại <b>đúng nghĩa, đúng ngữ pháp, không thừa không thiếu</b>. Nắm các cặp chuyển đổi cố định dưới đây là chiếm trọn dạng bài này."},
    {t:"table", head:["Câu gốc","Câu viết lại","Ví dụ"], rows:[
      ["QK đơn + ago","HTHT + for","I moved here 5 years ago. → I <b>have lived</b> here <b>for</b> 5 years."],
      ["QK đơn + when HTĐ","HTHT + since","She left in 2020. → She <b>has been</b> away <b>since</b> 2020."],
      ["because + mệnh đề","because of / due to + danh từ","Because it rained, we stayed in. → <b>Because of</b> the rain, we stayed in."],
      ["although + mệnh đề","despite / in spite of + N/V-ing","Although he is rich, he is modest. → <b>Despite</b> being rich... / <b>Despite</b> his wealth..."],
      ["Chủ động","Bị động","They built the bridge in 2001. → The bridge <b>was built</b> in 2001."],
      ["so... that","such... that","The box is so heavy that I can't lift it. → It is <b>such a</b> heavy <b>box that</b>..."],
      ["too + adj + to V","so... that + not","He is too young to drive. → He is <b>so young that he can't</b> drive."],
      ["Câu chủ động 2 tân ngữ","Bị động (người làm chủ ngữ)","He gave me a book. → I <b>was given</b> a book."],
      ["not... any longer","no longer","She doesn't work here any longer. → She <b>no longer</b> works here."],
      ["It's a pity + QKĐ","I wish + QKHT","It's a pity I missed the show. → I <b>wish I hadn't missed</b> the show."]
    ]},
    {t:"h", html:"Các bước làm chuẩn"},
    {t:"list", items:[
      "Bước 1: Đọc câu gốc, gạch chân từ gợi ý trong câu viết lại.",
      "Bước 2: Xác định cấu trúc phải chuyển (thì? chủ/bị? mệnh đề → cụm?).",
      "Bước 3: Viết phần còn thiếu — giữ nguyên những từ đã cho, KHÔNG đổi dạng của chúng.",
      "Bước 4: Đọc lại cả 2 câu, so nghĩa — có thêm/bớt thông tin nào không?"
    ]},
    {t:"warn", html:"<b>Bẫy lớn nhất:</b> Từ gợi ý cho sẵn thường phải giữ NGUYÊN DẠNG. Nếu đề cho 'It is...' thì câu của bạn phải bắt đầu bằng 'It is...'. Viết lại từ cho sẵn là mất điểm oan!"},
    {t:"tip", html:"<b>Mẹo thì:</b> Chuyển QKĐ → HTHT nhớ đổi NGHĨA thời gian: ago → for (khoảng), when/in + năm → since (mốc). Động từ đổi V2 → have/has + V3."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Viết lại: 'Although she was tired, she finished the work.' (Despite...) → Despite being tired / Despite her tiredness, she finished the work. Làm được 2 cách là giỏi!"}
  ]
},
{
  id:"subjunctive", grade:12, icon:"🕯️", level:"Nâng cao",
  title:"Giả định cách (Subjunctive & I wish)",
  summary:"would rather, It's time, suppose, if I were you, wish — nhóm 'tưởng như điều kiện nhưng không phải' khiến học sinh mất điểm nhiều nhất.",
  sections:[
    {t:"p", html:"Giả định cách là khi động từ <b>không chia theo thời gian thực</b> mà theo cấu trúc cố định. Nhìn như câu điều kiện nhưng quy tắc khác — phải học thuộc từng mẫu."},
    {t:"table", head:["Cấu trúc","Công thức","Ví dụ"], rows:[
      ["S + would rather + S + V","V QKĐ (ngược hiện tại)","I <b>would rather you didn't smoke</b> here."],
      ["S + would rather + V","would rather + V nguyên mẫu (cùng chủ ngữ)","I <b>would rather stay</b> at home tonight."],
      ["It's (high) time + S + V","V QKĐ (đã đến lúc phải làm — thực tế chưa làm)","<b>It's time you went</b> to bed!"],
      ["It's time + to V","cùng chủ ngữ","<b>It's time to go</b> home."],
      ["If I were you, ...","were + would + V","<b>If I were you, I would apologize</b>."],
      ["Suppose / Imagine + S + V","như điều kiện loại 2","<b>Suppose you won</b> the lottery, what would you do?"],
      ["wish/if only","ngược hiện tại (V2), ngược quá khứ (had V3)","I <b>wish I knew</b> the answer. / <b>If only I had studied</b> harder!"]
    ]},
    {t:"h", html:"Giả định cách SAU ĐỘNG TỪ (dạng thuốc thử)"},
    {t:"p", html:"Sau các động từ <b>suggest, demand, insist, require, recommend, request, propose</b> (và các danh/tính từ tương ứng: suggestion, demand, essential, important...), mệnh đề that dùng cấu trúc: <b>S + (should) + V nguyên mẫu</b> — should có thể lược, V LUÔN nguyên mẫu bất kể chủ ngữ."},
    {t:"ex", items:[
      {en:"The doctor suggested that he (should) drink more water.", vi:"Bác sĩ khuyên anh ấy nên uống nhiều nước hơn."},
      {en:"It is essential that every student (should) be on time.", vi:"Điều thiết yếu là mọi học sinh phải đúng giờ."}
    ]},
    {t:"warn", html:"<b>Bẫy hay gặp nhất:</b> 'The teacher suggested that she <s>studies</s> harder' → phải là <b>(should) study</b> nguyên mẫu. Gặp suggest/demand/insist là phải tỉnh táo!"},
    {t:"tip", html:"<b>Phân biệt 3 'giả định':</b> (1) wish → ước viển vông; (2) It's time → đến lúc phải làm mà chưa; (3) suggest that → đề nghị người khác làm. Cả ba đều dùng V2/QKĐ nhưng sắc thái khác nhau."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Điền: 'It's high time you ___ (start) saving money.' → started! Đến lúc rồi đấy — bài này xong thì chuyển sang luyện câu nhé."}
  ]
},
{
  id:"used-to", grade:11, icon:"🚲", level:"Trung bình",
  title:"Used to / Be used to / Get used to",
  summary:"Ba cụm giống nhau 90% nhưng nghĩa khác hẳn — 'đã từng', 'quen với', 'dần quen' — bẫy phân biệt kinh điển của đề thi.",
  sections:[
    {t:"table", head:["Cấu trúc","Nghĩa","Ví dụ"], rows:[
      ["S + used to + V nguyên mẫu","thói quen/sự thật trong QUÁ KHỨ, giờ không còn","I <b>used to play</b> marbles when I was small."],
      ["S + be used to + V-ing / danh từ","ĐÃ QUEN với việc gì (hiện tại)","She <b>is used to getting up</b> early."],
      ["S + get used to + V-ing / danh từ","DẦN QUEN (quá trình)","You will <b>get used to the weather</b> here."],
      ["S + be/get used to + V nguyên mẫu","bị động của 'use' — được dùng để","This knife <b>is used to cut</b> bread."]
    ]},
    {t:"warn", html:"<b>Bẫy kinh điển số 1:</b> 'used to + V-ing' một mình là SAI — phải có be/get: <s>I used to living here</s> ✗ → I <b>am used to living</b> here hoặc I <b>used to live</b> here."},
    {t:"h", html:"Dạng phủ định & nghi vấn của used to"},
    {t:"formula", html:"Phủ định: S + didn't use to + V (hoặc usedn't to)<br>Nghi vấn: Did + S + use to + V?"},
    {t:"ex", items:[
      {en:"There didn't use to be so many motorbikes in this city.", vi:"Ngày xưa thành phố này đâu có nhiều xe máy như vậy."},
      {en:"Did you use to cry a lot when you were little?", vi:"Hồi bé bạn có hay khóc không?"}
    ]},
    {t:"h", html:"Hàng họ nhà 'use'"},
    {t:"table", head:["Từ","Loại - Nghĩa","Ví dụ"], rows:[
      ["use (v/n)","dùng / sự sử dụng","Can I use your pen?"],
      ["useful / useless","hữu ích / vô dụng","This book is very useful."],
      ["used (adj)","cũ, đã qua sử dụng","a used car = xe cũ"],
      ["user","người dùng","App users are increasing."],
      ["usage","cách dùng (ngôn ngữ)","grammar usage"]
    ]},
    {t:"tip", html:"<b>Mẹo không bao giờ nhầm:</b> Đọc kỹ chữ đứng SAU 'used to': nếu là <b>V nguyên mẫu</b> → quá khứ 'từng'. Nếu là <b>V-ing</b> → trước đó PHẢI có be/get → 'quen với'. Chỉ 2 bước!"},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Sửa lỗi: 'He used to playing tennis every weekend.' → used to PLAY (thói quen quá khứ) hoặc is used to PLAYING (đã quen). Hai đường, chọn theo nghĩa!"}
  ]
},
{
  id:"so-neither", grade:10, icon:"🐦", level:"Cơ bản",
  title:"So / Neither / Too / Either (Đồng tình)",
  summary:"'Tôi cũng vậy' nói thế nào cho chuẩn? So do I, neither do I, too, either — câu ngắn điểm cao, sai thì mất điểm oan.",
  sections:[
    {t:"table", head:["Câu gốc","Đồng tình KHĐ","Đồng tình PĐ"], rows:[
      ["I like coffee.","So do I. / I do, too.","—"],
      ["I don't like coffee.","—","Neither do I. / I don't, either."]
    ]},
    {t:"formula", html:"So + trợ động từ + S (khẳng định)<br>Neither/Nor + trợ động từ + S (phủ định)<br>S + trợ động từ + too (cuối câu, khẳng định)<br>S + trợ động từ + n't + either (cuối câu, phủ định)"},
    {t:"p", html:"<b>Chọn trợ động từ theo CÂU GỐC:</b> be → am/is/are/was/were; có can/will/have... → dùng lại chính nó; động từ thường HTĐ → do/does; QKĐ → did. Nghĩa câu đồng tình phải cùng khẳng định/phủ định với câu gốc."},
    {t:"ex", items:[
      {en:"Lan can swim very well. — So can my brother.", vi:"Lan bơi giỏi. — Anh trai tôi cũng vậy."},
      {en:"He wasn't at school yesterday. — Neither was I.", vi:"Hôm qua cậu ấy không đến trường. — Tôi cũng không."},
      {en:"She loves K-pop and I do, too.", vi:"Cô ấy mê K-pop và tôi cũng vậy."}
    ]},
    {t:"warn", html:"<b>Bẫy:</b> Sau So/Neither đảo TRỢ ĐỘNG TỪ lên trước chủ ngữ: <s>So I do</s> ✗ → <b>So do I</b>. 'So I do' có nghĩa khác (vậy tôi có làm thật) — không phải đồng tình."},
    {t:"h", html:"Dạng 'ngược' — phản đối đồng tình"},
    {t:"table", head:["Câu gốc","Phản đối (ngược dấu)"], rows:[
      ["I like tea.","But I don't. (Oh, I don't)"],
      ["I can't drive.","But I can!"]
    ]},
    {t:"tip", html:"<b>Trong hội thoại đề thi:</b> 'Me too' (khẳng định) và 'Me neither' (phủ định) là dạng nói tắt thông dụng — nhưng câu viết lại trong đề thường yêu cầu So/Neither + trợ từ đầy đủ."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Trả lời đồng tình: 'I have never eaten sushi.' → Neither have I! (never = phủ định, have = trợ từ HTHT). Đúng ngay là xong bài!"}
  ]
},
{
  id:"not-until", grade:12, icon:"🚩", level:"Nâng cao",
  title:"Not until / It was not until... that / Only when",
  summary:"Ba cấu trúc nhấn mạnh thời điểm — gắn liền với đảo ngữ — dạng 'phân loại' giữa học sinh khá và giỏi.",
  sections:[
    {t:"table", head:["Cấu trúc","Ví dụ"], rows:[
      ["Not until + mốc thời gian/S + V, trợ từ + S + V","<b>Not until midnight did</b> the baby stop crying."],
      ["It was not until + mốc/S + V + that + S + V (KHÔNG đảo)","<b>It was not until midnight that</b> the baby stopped crying."],
      ["Only when + S + V, trợ từ + S + V","<b>Only when he apologized did she</b> talk to him again."]
    ]},
    {t:"p", html:"Ba mẫu này đều nhấn 'MÃI ĐẾN KHI... mới...'. Chú ý: mẫu <b>It was not until... that</b> KHÔNG bao giờ đảo ngữ ở mệnh đề that; còn Not until/Only when ở đầu câu thì mệnh đề sau <b>phải đảo</b> trợ động từ."},
    {t:"ex", items:[
      {en:"It was not until she arrived that we started dinner.", vi:"Mãi đến khi cô ấy đến, chúng tôi mới bắt đầu bữa tối."},
      {en:"Only after finishing his homework did he watch TV.", vi:"Chỉ sau khi làm xong bài tập, cậu ấy mới được xem TV."}
    ]},
    {t:"h", html:"Đề hay chuyển qua lại giữa 3 mẫu"},
    {t:"p", html:"Câu gốc: <i>She didn't realize the truth until many years later.</i><br>→ <b>Not until</b> many years later <b>did she realize</b> the truth.<br>→ <b>It was not until</b> many years later <b>that she realized</b> the truth.<br>→ <b>Only when</b> many years passed <b>did she realize</b> the truth."},
    {t:"warn", html:"<b>Bẫy thường gặp:</b> (1) Dùng 'It was not until... that' nhưng vẫn đảo: <s>that did she realize</s> ✗. (2) Sau Not until đảo thiếu did: <s>Not until midnight the baby stopped</s> ✗ → <b>did the baby stop</b>."},
    {t:"tip", html:"<b>Mẹo tra nhanh:</b> Đầu câu có Not until / Only when / Only after → mắt tìm ngay trợ động từ đứng TRƯỚC chủ ngữ ở vế sau. Không thấy trợ từ trước S là câu sai."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Viết lại 2 cách: 'He didn't smile until the end of the party.' → Not until the end of the party did he smile. / It was not until the end of the party that he smiled."}
  ]
},
{
  id:"linking", grade:12, icon:"🔗", level:"Nâng cao",
  title:"Từ nối & Từ chuyển tiếp (Linking Words)",
  summary:"however, moreover, therefore, in addition... — bộ từ nối giúp câu viết mạch lạc, xuất hiện trong cả ngữ pháp lẫn bài viết.",
  sections:[
    {t:"table", head:["Chức năng","Từ nối + mệnh đề","Từ chuyển tiếp + dấu chấm/phẩy"], rows:[
      ["Thêm ý","and, not only... but also","moreover, in addition, furthermore, besides"],
      ["Tương phản","but, although, whereas","however, nevertheless, on the other hand, in contrast"],
      ["Lý do","because, since, as","therefore? không — because of + N; due to + N"],
      ["Kết quả","so","therefore, as a result, consequently, thus"],
      ["Ví dụ","such as, like","for example, for instance"],
      ["Kết luận","—","in conclusion, to sum up, in short"]
    ]},
    {t:"p", html:"Phân biệt 2 hàng: <b>liên từ</b> (but, so, although) nối 2 mệnh đề trong 1 câu; <b>từ chuyển tiếp</b> (however, therefore) bắt đầu câu mới và thường sau nó có dấu phẩy."},
    {t:"ex", items:[
      {en:"The plan was expensive. However, everyone supported it.", vi:"Kế hoạch đắt. Tuy nhiên, mọi người đều ủng hộ."},
      {en:"He missed the deadline; therefore, he lost the contract.", vi:"Cậu ấy trễ hạn; do đó mất hợp đồng."}
    ]},
    {t:"h", html:"Các cặp dễ nhầm"},
    {t:"table", head:["Cặp","Phân biệt"], rows:[
      ["however vs how ever","however = tuy nhiên; how ever = làm sao mà (câu hỏi cảm thán)"],
      ["because + mệnh đề vs because of + N","Because it rained ≠ Because of the rain"],
      ["although... but","KHÔNG được dùng cả hai trong cùng 1 câu (lỗi Việt-glish!)"],
      ["despite + N/V-ing vs although + mệnh đề","Despite the delay ≠ Although it was delayed"],
      ["so vs therefore","so nối trong câu; therefore đứng đầu câu mới, sau có dấu phẩy"]
    ]},
    {t:"warn", html:"<b>Lỗi kinh điển trong bài viết:</b> <s>Although it was cold, but we went out.</s> — chọn MỘT trong hai: 'Although it was cold, we went out.' hoặc 'It was cold, but we went out.'"},
    {t:"tip", html:"<b>Cho bài viết:</b> Mở đoạn bằng In conclusion, ý thêm bằng Moreover, đối lập bằng However, kết quả bằng As a result — chỉ 4 từ này đã nâng hẳn tính mạch lạc."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Điền từ chuyển tiếp: 'The traffic was terrible. ___, we arrived on time.' → However/Nevertheless (tương phản)."}
  ]
},
{
  id:"errors", grade:12, icon:"🐞", level:"Nâng cao",
  title:"Sửa lỗi sai thường gặp (Error Identification)",
  summary:"10 loại lỗi đề hay 'gài' trong dạng tìm lỗi sai: hòa hợp, thì, đại từ, giới từ, từ loại... kèm chiến lược quét lỗi 30 giây.",
  sections:[
    {t:"table", head:["Loại lỗi","Ví dụ sai → đúng"], rows:[
      ["Hòa hợp chủ-vị","The list of names <s>were</s> long → was"],
      ["Sai thì","When I <s>have arrived</s>, he left → arrived"],
      ["Sai dạng động từ","She avoided <s>to answer</s> → answering"],
      ["Sai đại từ (dạng)","Between you and <s>I</s> → me"],
      ["Sai giới từ","<s>Discuss about</s> the plan → discuss the plan"],
      ["Sai từ loại","She sings <s>beautiful</s> → beautifully"],
      ["Sai so sánh","<s>more better</s> → better"],
      ["Trùng lặp","<s>return back</s> → return"],
      ["Sai từ đồng âm","<s>advice</s> (động từ) → advise"],
      ["Sai mạo từ","<s>a</s> hour → an hour"]
    ]},
    {t:"h", html:"Chiến lược quét lỗi 30 giây/câu"},
    {t:"list", items:[
      "Quét 1 — Tìm ĐỘNG TỪ chia: đủ chủ ngữ không? thì khớp dấu hiệu thời gian không? hòa hợp số ít/nhiều không?",
      "Quét 2 — Tìm CẶP: giới từ đi kèm động từ/tính từ (depend ON, interested IN, good AT...).",
      "Quét 3 — Tìm DẠNG: sau giới từ là V-ing? sau to là nguyên mẫu? trước danh từ là tính từ?",
      "Quét 4 — Tìm TRÙNG: repeat again, return back, collaborate together... (thừa nghĩa)."
    ]},
    {t:"ex", items:[
      {en:"One of my friends <b>who live</b> in Hanoi <b>is</b> a doctor. (live→lives: 'who' thay cho 'one' số ít)", vi:"Một người bạn của tôi sống ở Hà Nội là bác sĩ."},
      {en:"Despite of <b>the rain</b>, we enjoyed the picnic. (bỏ 'of' — despite không bao giờ có of)", vi:"Dù mưa, chúng tôi vẫn vui buổi dã ngoại."}
    ]},
    {t:"warn", html:"<b>Đừng 'sửa cho đẹp':</b> Chỉ chọn phần THỰC SAI về ngữ pháp. Nhiều câu trông 'lạ' nhưng đúng — ví dụ 'The number of students is increasing' nghe kỳ nhưng hoàn toàn chuẩn."},
    {t:"tip", html:"<b>Ưu tiên thứ tự loại lỗi:</b> Thống kê đề: hòa hợp & thì chiếm nhiều nhất → luôn quét động từ trước, từ loại sau cùng."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Tìm lỗi: 'Neither of the answers are correct.' → are → IS (neither of + N số nhiều vẫn chia số ít)."}
  ]
},
{
  id:"signals", grade:12, icon:"🚦", level:"Cơ bản",
  title:"Dấu hiệu nhận biết thì (Signal Words)",
  summary:"Bảng toàn tập từ hiệu lệnh → thì: gặp từ nào là biết ngay chia thì nào — kỹ năng 'cứu điểm' cho mọi câu trắc nghiệm.",
  sections:[
    {t:"table", head:["Từ hiệu lệnh","Thì phải dùng"], rows:[
      ["every day, always, usually, often, sometimes, never","Hiện tại đơn"],
      ["now, right now, at the moment, Look!, Listen!","Hiện tại tiếp diễn"],
      ["yesterday, last week, in 2010, ago, when (QK)","Quá khứ đơn"],
      ["at 8 p.m. yesterday, while, at this time last...","Quá khứ tiếp diễn"],
      ["already, just, ever, never, yet, so far, recently","Hiện tại hoàn thành"],
      ["since, for + khoảng","Hiện tại (hoàn thành) tiếp diễn"],
      ["by the time + QKĐ, before, after (2 hành động QK)","Quá khứ hoàn thành"],
      ["tomorrow, next week, soon, in the future","Tương lai đơn"],
      ["by + mốc tương lai (by 2030)","Tương lai hoàn thành"],
      ["at this time tomorrow, this time next week","Tương lai tiếp diễn"],
      ["always (phàn nàn), Look! + plan đặt trước","Hiện tại tiếp diễn / going to"]
    ]},
    {t:"p", html:"Quy trình 3 bước khi gặp câu trống: (1) Gạch chân các từ hiệu lệnh trong câu; (2) xác định mốc thời gian — quá khứ, hiện tại hay tương lai, hoàn thành hay đang diễn ra; (3) chỉ nhìn các đáp án đúng thì đó để loại."},
    {t:"warn", html:"<b>Bẫy kết hợp:</b> 'I <b>have seen</b> that film yesterday' — vừa have seen vừa yesterday = xung đột thì! Chọn đáp án tôn trọng dấu hiệu MẠNH hơn (mốc xác định yesterday → QK đơn)."},
    {t:"tip", html:"<b>Mẹo nhớ nhanh nhóm hoàn thành:</b> just/already/yet là 'bộ ba nhà hoàn thành'; since/for là 'cặp cửa' mở từ quá khứ sang hiện tại; so far/recently/lately = 'tính tới giờ'."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> 'By the time you read this letter, I ___ (leave) the country.' — dấu hiệu nào điều khiển? (by the time + tương lai → will have left). Nếu tự tìm ra từ điều khiển là bạn đã nắm vận bài này."}
  ]
}
];
