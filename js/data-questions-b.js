/* ===== QUESTION BANK - Phần B ===== */
const QUESTIONS_B = [
/* ---- So sánh ---- */
{id:"c1", topic:"comparison", q:"This road is ______ than that one.", opts:["narrow","more narrow","narrower","narrowest"], ans:2, exp:"Tính từ ngắn (narrow) → so sánh hơn: narrower than."},
{id:"c2", topic:"comparison", q:"She is one of ______ students in her class.", opts:["the most hard-working","most hard-working","the more hard-working","harder-working"], ans:0, exp:"So sánh nhất với tính từ dài → the most + adj. Cụm 'one of the...' luôn đi với số nhiều (students)."},
{id:"c3", topic:"comparison", q:"My bag is not ______ yours, but it is ______ .", opts:["as heavy as / more convenient","so heavy than / convenienter","as heavy than / more convenient","as heavy as / convenienter"], ans:0, exp:"So sánh bằng phủ định: not as heavy as yours; so sánh hơn tính từ dài: more convenient."},
{id:"c4", topic:"comparison", q:"The more you practise speaking, ______ .", opts:["you become more confident","the more confident you become","more confident you become","the most confident you become"], ans:1, exp:"Cấu trúc so sánh kép: The + so sánh hơn..., the + so sánh hơn... → the more confident you become."},
{id:"c5", topic:"comparison", q:"Ha Long Bay is ______ beautiful than I expected.", opts:["much more","much","most","the most"], ans:0, exp:"'much' có thể đứng trước so sánh hơn để nhấn mạnh (much more beautiful)."},
{id:"c6", topic:"comparison", q:"The weather is getting ______ .", opts:["hot and hot","hotter and hotter","more and more hot","the hotter"], ans:1, exp:"So sánh kép 'càng ngày càng...': adj-er and adj-er → hotter and hotter."},
{id:"c7", topic:"comparison", q:"Of the two sisters, Lan is ______ .", opts:["the most intelligent","the more intelligent","intelligenter","as intelligent"], ans:1, exp:"So sánh giữa 2 người/vật → so sánh hơn; khi 'of the two' đứng đầu câu, so sánh hơn phải có THE: the more intelligent."},
{id:"c8", topic:"comparison", q:"Today's test was ______ difficult as yesterday's.", opts:["as","so","more","than"], ans:0, exp:"So sánh bằng: as + adj + as → as difficult as."},

/* ---- Câu bị động ---- */
{id:"pv1", topic:"passive", q:"Rice ______ in the fields every spring.", opts:["is grown","grows","is growing","has grown"], ans:0, exp:"Lúa ĐƯỢC người ta trồng → bị động hiện tại đơn: is grown."},
{id:"pv2", topic:"passive", q:"The new bridge ______ at the moment.", opts:["is built","is being built","has been built","was built"], ans:1, exp:"'at the moment' → bị động hiện tại tiếp diễn: is being built."},
{id:"pv3", topic:"passive", q:"This road ______ by the government last year.", opts:["is repaired","was repaired","repaired","has repaired"], ans:1, exp:"'last year' → bị động quá khứ đơn: was repaired."},
{id:"pv4", topic:"passive", q:"All the homework ______ before the deadline.", opts:["must submit","must be submitted","must submitted","must have submitted"], ans:1, exp:"Bị động với động từ khuyết thiếu: must + be + V3 → must be submitted."},
{id:"pv5", topic:"passive", q:"My car ______ yet. I am still waiting for the mechanic.", opts:["hasn't repaired","hasn't been repaired","didn't repair","isn't repairing"], ans:1, exp:"'yet' + xe chưa được sửa (xe không tự sửa) → bị động hiện tại hoàn thành: hasn't been repaired."},
{id:"pv6", topic:"passive", q:"The letters ______ by the secretary tomorrow morning.", opts:["will type","will be typed","will be typing","are typed"], ans:1, exp:"'tomorrow' → bị động tương lai đơn: will be typed."},
{id:"pv7", topic:"passive", q:"People believe that he is a talented musician.", opts:["He is believed to be a talented musician.","He believes to be a talented musician.","He is believing a talented musician.","A musician is believed he is talented."], ans:0, exp:"Dạng đặc biệt: People believe that S + V ↔ S + is believed + to V."},
{id:"pv8", topic:"passive", q:"She ______ a bouquet of flowers on her graduation day.", opts:["was given","gave","was giving","is given"], ans:0, exp:"Động từ 2 tân ngữ (give somebody something): đưa NGƯỜI lên làm chủ ngữ bị động → She was given..."},

/* ---- Câu tường thuật ---- */
{id:"rs1", topic:"reported", q:"'I am reading a novel now,' she said.", opts:["She said she is reading a novel now.","She said she was reading a novel then.","She said I was reading a novel then.","She said she was reading a novel now."], ans:1, exp:"Lùi thì: hiện tại tiếp diễn → quá khứ tiếp diễn; đổi 'now' → 'then'."},
{id:"rs2", topic:"reported", q:"'Did you finish your project?' he asked me.", opts:["He asked me did I finish my project.","He asked me if I had finished my project.","He asked me if did I finish my project.","He asked me that I had finished my project."], ans:1, exp:"Câu hỏi Yes/No → asked + if + trật tự khẳng định; lùi thì QK đơn → QK hoàn thành."},
{id:"rs3", topic:"reported", q:"'Where do you live?' the teacher asked the boy.", opts:["The teacher asked the boy where does he live.","The teacher asked the boy where he lived.","The teacher asked the boy where he did live.","The teacher asked the boy where did he lived."], ans:1, exp:"Câu hỏi Wh → asked + từ hỏi + S + V (trật tự câu khẳng định, bỏ do/does/did); lùi thì hiện tại → quá khứ."},
{id:"rs4", topic:"reported", q:"'Don't touch the paintings!' the guard said to the visitors.", opts:["The guard said the visitors don't touch the paintings.","The guard told the visitors not to touch the paintings.","The guard told to the visitors not touch the paintings.","The guard asked the visitors didn't touch the paintings."], ans:1, exp:"Câu mệnh lệnh phủ định → told + O + not + to V."},
{id:"rs5", topic:"reported", q:"'I will return the book tomorrow,' Nam said.", opts:["Nam said he will return the book tomorrow.","Nam said he would return the book the next day.","Nam said he would returned the book tomorrow.","Nam said I would return the book the next day."], ans:1, exp:"will → would; tomorrow → the next day; I → he."},
{id:"rs6", topic:"reported", q:"'I haven't seen her since last week,' he said.", opts:["He said he hasn't seen her since last week.","He said he hadn't seen her since the week before.","He said he didn't see her the week before.","He said he hadn't seen her since last week."], ans:1, exp:"Hiện tại hoàn thành → quá khứ hoàn thành; 'last week' → 'the week before'."},
{id:"rs7", topic:"reported", q:"'Let's have a party this weekend,' my friend said.", opts:["My friend suggested having a party that weekend.","My friend suggested to have a party this weekend.","My friend asked having a party that weekend.","My friend told having a party this weekend."], ans:0, exp:"'Let's...' → suggest + V-ing; this weekend → that weekend."},
{id:"rs8", topic:"reported", q:"'You should take more exercise,' the doctor said to me.", opts:["The doctor advised me taking more exercise.","The doctor advised me to take more exercise.","The doctor said I should taken more exercise.","The doctor advise me to take more exercise."], ans:1, exp:"Lời khuyên → advise + O + to V."},

/* ---- Câu điều kiện ---- */
{id:"cd1", topic:"conditionals", q:"If it ______ tomorrow, we will cancel the picnic.", opts:["rains","rained","will rain","would rain"], ans:0, exp:"Điều kiện loại 1: If + hiện tại đơn, S + will + V → rains."},
{id:"cd2", topic:"conditionals", q:"If I ______ you, I would study abroad.", opts:["am","was","were","had been"], ans:2, exp:"Điều kiện loại 2 dùng WERE cho mọi ngôi: If I were you..."},
{id:"cd3", topic:"conditionals", q:"She ______ the exam if she had revised the lessons.", opts:["would pass","would have passed","will pass","passed"], ans:1, exp:"If + had + V3 → loại 3; mệnh đề chính: would have + V3 → would have passed."},
{id:"cd4", topic:"conditionals", q:"______ harder, you would have got a better mark.", opts:["If you studied","Had you studied","Were you studying","Should you study"], ans:1, exp:"Đảo ngữ loại 3: Had + S + V3 = If S had V3 → Had you studied."},
{id:"cd5", topic:"conditionals", q:"I wish I ______ how to play the guitar.", opts:["know","knew","have known","will know"], ans:1, exp:"Ước ngược hiện tại: wish + S + V2 → knew (thực tế là đang không biết)."},
{id:"cd6", topic:"conditionals", q:"He wishes he ______ to the party last night.", opts:["went","had gone","would go","goes"], ans:1, exp:"'last night' → ước ngược quá khứ: wish + had + V3 → had gone."},
{id:"cd7", topic:"conditionals", q:"You will fail the test ______ you study hard.", opts:["if","unless","when","although"], ans:1, exp:"Nghĩa: 'Nếu KHÔNG học chăm bạn sẽ trượt' → unless = if...not."},
{id:"cd8", topic:"conditionals", q:"Water ______ if you cool it to 0°C.", opts:["freezes","will freeze","would freeze","froze"], ans:0, exp:"Điều kiện loại 0 (quy luật khoa học): If + hiện tại đơn, hiện tại đơn → freezes."},

/* ---- Mệnh đề quan hệ ---- */
{id:"rl1", topic:"relative", q:"The woman ______ lives next door is a famous singer.", opts:["which","who","whom","whose"], ans:1, exp:"Người + làm CHỦ NGỮ của mệnh đề (lives) → who."},
{id:"rl2", topic:"relative", q:"Da Nang, ______ is famous for its beaches, attracts millions of tourists.", opts:["that","which","who","where"], ans:1, exp:"Mệnh đề không xác định (có dấu phẩy) KHÔNG dùng that; vật + chủ ngữ → which."},
{id:"rl3", topic:"relative", q:"This is the school ______ I studied for six years.", opts:["which","that","where","when"], ans:2, exp:"Danh từ chỉ nơi chốn + trạng ngữ trong mệnh đề (I studied THERE) → where."},
{id:"rl4", topic:"relative", q:"The boy ______ father is a pilot wants to become a pilot too.", opts:["who","which","whose","whom"], ans:2, exp:"Nghĩa sở hữu ('bố của cậu bé') → whose."},
{id:"rl5", topic:"relative", q:"The students ______ for the exam were in the library.", opts:["preparing","prepared","who preparing","were preparing"], ans:0, exp:"Rút gọn: who were preparing → preparing (đại từ + be được lược bỏ)."},
{id:"rl6", topic:"relative", q:"I'll never forget the day ______ we first met each other.", opts:["which","when","where","that"], ans:1, exp:"Danh từ chỉ thời gian (the day) + trạng ngữ → when."},
{id:"rl7", topic:"relative", q:"The film ______ we watched last night was really moving.", opts:["who","whom","that","whose"], ans:2, exp:"Vật + tân ngữ → that/which (that được dùng trong mệnh đề xác định)."},
{id:"rl8", topic:"relative", q:"Mr. Brown is the teacher ______ .", opts:["we respect him","whom we respect","that we respect him","who we respect him"], ans:1, exp:"Trong mệnh đề quan hệ KHÔNG lặp lại tân ngữ; người + tân ngữ → whom we respect."},

/* ---- Động từ khuyết thiếu ---- */
{id:"md1", topic:"modals", q:"You ______ park here — it's forbidden!", opts:["mustn't","don't have to","needn't","couldn't"], ans:0, exp:"'Bị cấm' → mustn't. (don't have to / needn't = không cần thiết — sai nghĩa)"},
{id:"md2", topic:"modals", q:"The lights are on. He ______ be at home.", opts:["can't","mustn't","must","needn't"], ans:2, exp:"Suy luận chắc chắn (đèn đang bật) → must be."},
{id:"md3", topic:"modals", q:"The road is completely dry, so it ______ last night.", opts:["must rain","must have rained","can't have rained","should have rained"], ans:2, exp:"Đường khô → chắc chắn KHÔNG đã mưa → can't have + V3."},
{id:"md4", topic:"modals", q:"You look exhausted. You ______ rested before the trip.", opts:["should have","must have","can't have","needn't have"], ans:0, exp:"Lẽ ra NÊN nghỉ ngơi (mà không nghỉ) → should have + V3."},
{id:"md5", topic:"modals", q:"When she was five, she ______ already swim very well.", opts:["can","could","may","must"], ans:1, exp:"Khả năng trong quá khứ → could."},
{id:"md6", topic:"modals", q:"______ you mind opening the window?", opts:["Will","Should","Would","Must"], ans:2, exp:"Lời đề nghị lịch sự: Would you mind + V-ing?"},
{id:"md7", topic:"modals", q:"Visitors ______ take photos inside the museum — it's against the rules.", opts:["needn't","mustn't","don't have to","couldn't"], ans:1, exp:"Quy định cấm đoán → mustn't."},
{id:"md8", topic:"modals", q:"She isn't answering her phone. She ______ the lecture now.", opts:["may attend","may be attending","must attended","can attend"], ans:1, exp:"Suy đoán đang diễn ra ở hiện tại: may/might + be + V-ing → may be attending."},

/* ---- Mệnh đề trạng ngữ ---- */
{id:"av1", topic:"adverbial", q:"______ the heavy traffic, we arrived at the meeting on time.", opts:["Although","Because of","Despite of","In spite"], ans:1, exp:"Theo sau là CỤM DANH TỪ (the heavy traffic) chỉ lý do → Because of. (Despite = nhượng bộ, sai nghĩa; 'Despite of' không tồn tại)"},
{id:"av2", topic:"adverbial", q:"______ it was raining heavily, the match continued.", opts:["Because","Although","Because of","Despite"], ans:1, exp:"Theo sau là mệnh đề đủ S-V + nghĩa tương phản → Although."},
{id:"av3", topic:"adverbial", q:"He saved money ______ he could buy a new bike.", opts:["so that","because","although","despite"], ans:0, exp:"Chỉ mục đích + mệnh đề với can/could → so that."},
{id:"av4", topic:"adverbial", q:"The test was ______ difficult that half of the class couldn't finish it.", opts:["such","so","too","very"], ans:1, exp:"so + adj + that → so difficult that."},
{id:"av5", topic:"adverbial", q:"It was ______ boring lecture that many people fell asleep.", opts:["so","such a","so a","such"], ans:1, exp:"such + a + adj + N → such a boring lecture."},
{id:"av6", topic:"adverbial", q:"I will call you ______ I arrive at the airport.", opts:["as soon as","until","although","despite"], ans:0, exp:"'Ngay khi đến' → as soon as."},
{id:"av7", topic:"adverbial", q:"She works hard ______ support her family.", opts:["so as to","because","so that","although"], ans:0, exp:"Mục đích + động từ nguyên mẫu, 2 mệnh đề cùng chủ ngữ → so as to / in order to + V."},
{id:"av8", topic:"adverbial", q:"______ hard he tried, he couldn't solve the problem.", opts:["Although","However","Despite","Because"], ans:1, exp:"However + adj/adv + S + V = dù... đến đâu → However hard he tried..."},

/* ---- Đảo ngữ ---- */
{id:"iv1", topic:"inversion", q:"Never ______ such a magnificent view before.", opts:["I have seen","have I seen","I saw","did I see"], ans:1, exp:"Đầu câu là 'Never' (phủ định) → đảo trợ động từ lên trước chủ ngữ: have I seen."},
{id:"iv2", topic:"inversion", q:"Only when he apologised ______ speak to him again.", opts:["she would","would she","did she","she did"], ans:2, exp:"'Only when...' mở câu → đảo ngữ; mệnh đề sau là QK đơn → did she speak."},
{id:"iv3", topic:"inversion", q:"No sooner ______ home than it started to pour with rain.", opts:["had he arrived","he had arrived","did he arrive","he arrived"], ans:0, exp:"No sooner + had + S + V3 + THAN → had he arrived."},
{id:"iv4", topic:"inversion", q:"Hardly ______ when the teacher came in.", opts:["we had sat down","had we sat down","we sat down","did we sit down"], ans:1, exp:"Hardly + had + S + V3 + WHEN → had we sat down."},
{id:"iv5", topic:"inversion", q:"Not until midnight ______ the noise stop.", opts:["the noise did","did the noise","the noise","does the noise"], ans:1, exp:"Not until... → đảo did + S + V: did the noise stop."},
{id:"iv6", topic:"inversion", q:"So loud ______ that everyone in the building woke up.", opts:["the alarm was","was the alarm","the alarm did","did the alarm"], ans:1, exp:"So + adj + be + S → was the alarm (đảo ngữ với So)."},
{id:"iv7", topic:"inversion", q:"Under no circumstances ______ share your password with others.", opts:["you should","should you","you must not to","must you not"], ans:1, exp:"Cụm phủ định mở câu → đảo trợ động từ: should you share."},
{id:"iv8", topic:"inversion", q:"Were I in your position, I ______ the offer.", opts:["will accept","would accept","accepted","had accepted"], ans:1, exp:"Were + S = If S were (điều kiện loại 2 đảo ngữ); mệnh đề chính: would + V → would accept."}
];
