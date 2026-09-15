/* ===== QUESTION BANK - Phần D ===== */
const QUESTIONS_D = [
/* ---- Câu điều kiện (bổ sung) ---- */
{id:"cd9", topic:"conditionals", q:"If I had known you were in hospital, I ______ you.", opts:["would visit","would have visited","had visited","will visit"], ans:1, exp:"had known (loại 3) → mệnh đề chính: would have + V3 → would have visited."},
{id:"cd10", topic:"conditionals", q:"If the weather ______ nice yesterday, we would have gone to the beach.", opts:["is","was","had been","were"], ans:2, exp:"Ngược quá khứ (would have gone) → mệnh đề if: had + V3 → had been."},
{id:"cd11", topic:"conditionals", q:"I'd rather you ______ smoke in here.", opts:["don't","didn't","won't","not"], ans:1, exp:"would rather + S + V QKĐ (giả định cách) → didn't."},
{id:"cd12", topic:"conditionals", q:"It's high time you ______ harder for the entrance exam.", opts:["start","started","will start","are starting"], ans:1, exp:"It's (high) time + S + V QKĐ → started (đã đến lúc mà thực tế chưa làm)."},
{id:"cd13", topic:"conditionals", q:"If she ______ rich, she would travel around the world.", opts:["is","was","were","be"], ans:2, exp:"Loại 2: If + S + WERE (mọi ngôi) → were."},
{id:"cd14", topic:"conditionals", q:"Had you told me earlier, I ______ something for you.", opts:["will do","would do","would have done","had done"], ans:2, exp:"Đảo ngữ loại 3 (Had you told = If you had told) → would have done."},
{id:"cd15", topic:"conditionals", q:"If you mix blue and yellow, you ______ green.", opts:["get","will get","would get","got"], ans:0, exp:"Loại 0 — quy luật tất nhiên: If + HTĐ, HTĐ → get."},
{id:"cd16", topic:"conditionals", q:"I wish I ______ taller so that I could join the basketball team.", opts:["am","was","were","have been"], ans:2, exp:"Ước ngược hiện tại: wish + S + were (chuẩn mực giả định) → were."},

/* ---- Câu hỏi đuôi (bổ sung) ---- */
{id:"qt9", topic:"question-tags", q:"Nam seldom visits his grandparents, ______ ?", opts:["doesn't he","does he","isn't he","is he"], ans:1, exp:"seldom = nghĩa phủ định → đuôi khẳng định; visits là HTĐ thường → does he?"},
{id:"qt10", topic:"question-tags", q:"Open the window, ______ ? It's too hot in here.", opts:["do you","don't you","will you","shall we"], ans:2, exp:"Câu mệnh lệnh khẳng định → will you? (hoặc won't you?)."},
{id:"qt11", topic:"question-tags", q:"Your parents have just moved to Hue, ______ ?", opts:["haven't they","don't they","didn't they","have they"], ans:0, exp:"have just moved = HTHT, have là TRỢ ĐỘNG TỪ → haven't they?"},
{id:"qt12", topic:"question-tags", q:"Nobody called me last night, ______ ?", opts:["did he","didn't they","did they","does nobody"], ans:2, exp:"Nobody = phủ định → đuôi khẳng định; đại từ → they: did they?"},
{id:"qt13", topic:"question-tags", q:"The film was really boring, ______ ?", opts:["was it","wasn't it","isn't it","didn't it"], ans:1, exp:"Khẳng định QK với was → wasn't it?"},
{id:"qt14", topic:"question-tags", q:"Nothing was said about the accident, ______ ?", opts:["wasn't it","was it","did it","didn't it"], ans:1, exp:"Nothing = phủ định → đuôi khẳng định; was → was it?"},
{id:"qt15", topic:"question-tags", q:"You'd better see a doctor, ______ ?", opts:["hadn't you","didn't you","wouldn't you","haven't you"], ans:0, exp:"'d better = had better → trợ từ had → hadn't you? Bẫy kinh điển!"},
{id:"qt16", topic:"question-tags", q:"I don't think he will come on time, ______ ?", opts:["will he","won't he","do I","does he"], ans:0, exp:"'I don't think + mệnh đề' → nghĩa phủ định thuộc mệnh đề sau → đuôi khẳng định theo HE: will he?"},

/* ---- Bị động (bổ sung) ---- */
{id:"pv9b", topic:"passive", q:"This poem ______ by a famous poet in the 19th century.", opts:["wrote","was written","is writing","has written"], ans:1, exp:"'in the 19th century' + thơ ĐƯỢC viết → bị động QKĐ: was written."},
{id:"pv10b", topic:"passive", q:"The prisoners ______ last night and the police are looking for them.", opts:["escaped","were escaped","have escaped","was escaped"], ans:0, exp:"escape là NỘI ĐỘNG TỪ (tự bỏ trống được) → KHÔNG có bị động: escaped."},
{id:"pv11b", topic:"passive", q:"Look! The road ______ — we can't go this way.", opts:["is repairing","is being repaired","has repaired","was repaired"], ans:1, exp:"'Look!' + đường đang ĐƯỢC sửa → bị động hiện tại tiếp diễn: is being repaired."},
{id:"pv12b", topic:"passive", q:"She ______ to every party since she moved here.", opts:["has invited","has been invited","was invited","invites"], ans:1, exp:"Cô ấy ĐƯỢC mời (người khác mời) + since → bị động HTHT: has been invited."},
{id:"pv13b", topic:"passive", q:"'Who wrote this letter?' — Chọn dạng bị động đúng:", opts:["By whom this letter was written?","By whom was this letter written?","Whom was written this letter?","Who was written this letter?"], ans:1, exp:"Hỏi 'ai' trong bị động: By whom + was/were + S + V3? → By whom was this letter written?"},
{id:"pv14b", topic:"passive", q:"Don't worry — everything ______ carefully before the big day.", opts:["will arrange","will be arranged","is arranging","arranged"], ans:1, exp:"Mọi thứ SẼ ĐƯỢC sắp xếp → bị động tương lai: will be arranged."},
{id:"pv15b", topic:"passive", q:"The birthday cake ______ by my mother right now.", opts:["is making","is being made","has made","was making"], ans:1, exp:"'right now' + bánh ĐƯỢC làm → is being made."},
{id:"pv16b", topic:"passive", q:"People say that he is over 100 years old.", opts:["He is said to be over 100 years old.","He is said being over 100 years old.","He said to be over 100 years old.","He is said that he is over 100 years old."], ans:0, exp:"People say that S + V ↔ S + is said + TO V → He is said to be over 100."},

/* ---- Tường thuật (bổ sung) ---- */
{id:"rs9", topic:"reported", q:"'Are you leaving tomorrow morning?' she asked me.", opts:["She asked me if I was leaving the next morning.","She asked me was I leaving the next morning.","She asked me if you were leaving tomorrow morning.","She asked me that I was leaving the next morning."], ans:0, exp:"Câu hỏi Y/N → asked + if + trật tự khẳng định; tomorrow → the next morning."},
{id:"rs10", topic:"reported", q:"'Please don't make so much noise,' the neighbor said to us.", opts:["The neighbor told us don't make so much noise.","The neighbor asked us not to make so much noise.","The neighbor asked us to not make so much noise.","The neighbor said us not to make so much noise."], ans:1, exp:"Yêu cầu phủ định: asked + O + not + to V → asked us not to make."},
{id:"rs11", topic:"reported", q:"'I saw this film last week,' he said.", opts:["He said he had seen that film the week before.","He said he saw that film last week.","He said he has seen this film the week before.","He said he had seen this film last week."], ans:0, exp:"QKĐ → QKHT; this → that; last week → the week before."},
{id:"rs12", topic:"reported", q:"'How much does this dress cost?' she asked the shop assistant.", opts:["She asked the shop assistant how much did this dress cost.","She asked the shop assistant how much that dress cost.","She asked the shop assistant how much does that dress cost.","She asked the shop assistant how much that dress did cost."], ans:1, exp:"Wh-question tường thuật: từ hỏi + S + V (bỏ does), this → that → how much that dress cost."},
{id:"rs13", topic:"reported", q:"'Congratulations! You passed the exam,' my teacher said.", opts:["My teacher congratulated me on passing the exam.","My teacher said congratulations that I passed the exam.","My teacher congratulated me passing the exam.","My teacher congratulated me to pass the exam."], ans:0, exp:"Tường thuật lời chúc mừng: congratulate + O + on + V-ing (collocation cố định)."},
{id:"rs14", topic:"reported", q:"'Would you like to have dinner with us?' they invited me.", opts:["They invited me to have dinner with them.","They invited me having dinner with them.","They invited that I have dinner with them.","They invited me for having dinner with them."], ans:0, exp:"Mời ai: invite + O + to V → invited me to have dinner."},

/* ---- Giới từ (bổ sung) ---- */
{id:"gp9", topic:"prepositions", q:"The children are very fond ______ cartoon films.", opts:["with","of","about","in"], ans:1, exp:"be fond OF = thích (collocation cố định)."},
{id:"gp10", topic:"prepositions", q:"My brother is really good ______ fixing things.", opts:["in","on","at","with"], ans:2, exp:"be good AT = giỏi về."},
{id:"gp11", topic:"prepositions", q:"Ha Long Bay is famous ______ its beautiful caves and islands.", opts:["for","of","with","about"], ans:0, exp:"be famous FOR = nổi tiếng vì."},
{id:"gp12", topic:"prepositions", q:"Don't forget to turn ______ the lights before you leave.", opts:["on","off","in","up"], ans:1, exp:"Trước khi ra về → tắt đèn → turn off. (turn on = bật)."},
{id:"gp13", topic:"prepositions", q:"We are looking forward to ______ you again next summer.", opts:["see","seeing","be seen","saw"], ans:1, exp:"look forward to + V-ing (to là giới từ) → seeing."},
{id:"gp14", topic:"prepositions", q:"The office is ______ the second floor, next ______ the meeting room.", opts:["on / to","in / with","at / to","on / with"], ans:0, exp:"Tầng (bề mặt số thứ tự) → ON the second floor; next TO = cạnh."},

/* ---- 8 chủ đề mới: chuyển đổi câu ---- */
{id:"tr1", topic:"transform", q:"'I started learning English 4 years ago.' = I ______ English for 4 years.", opts:["learn","am learning","have learned","had learned"], ans:2, exp:"QKĐ + ago → HTHT + for: have learned."},
{id:"tr2", topic:"transform", q:"'Because of the heavy traffic, we were late.' = Because the traffic ______ , we were late.", opts:["was heavy","is heavy","heavy","being heavy"], ans:0, exp:"Because of + N ↔ Because + mệnh đề: the traffic was heavy."},
{id:"tr3", topic:"transform", q:"'She doesn't work here any longer.' = She ______ works here.", opts:["not any","no longer","never no","not longer"], ans:1, exp:"not... any longer = no longer + động từ khẳng định."},
{id:"tr4", topic:"transform", q:"'It's a pity I didn't bring my camera.' = I wish I ______ my camera.", opts:["brought","had brought","would bring","have brought"], ans:1, exp:"Tiếc việc ĐÃ/CHƯA làm trong quá khứ → wish + had + V3: had brought."},
{id:"tr5", topic:"transform", q:"'The box is too heavy for me to carry.' = The box is so heavy ______ carry it.", opts:["that I can't","that I couldn't","for me to","to"], ans:0, exp:"too... to ↔ so... that + not: so heavy that I can't carry it."},
{id:"tr6", topic:"transform", q:"'Although he is only 16, he runs a company.' = Despite ______ , he runs a company.", opts:["he is only 16","being only 16","his young age","only 16 years"], ans:1, exp:"Although + mệnh đề ↔ Despite + V-ing: despite being only 16. (Cũng đúng: despite his young age)."},
{id:"tr7", topic:"transform", q:"'Someone has broken the window.' = The window ______ broken.", opts:["is","was","has been","had been"], ans:2, exp:"HTHT chủ động (has broken) → bị động HTHT: has been broken."},
{id:"tr8", topic:"transform", q:"'She didn't arrive until 10 o'clock.' = Not until 10 o'clock ______ arrive.", opts:["she did","did she","she was","was she"], ans:1, exp:"Not until + mốc, đảo did + S + V nguyên mẫu → did she arrive."},

/* --- giả định cách --- */
{id:"sj1", topic:"subjunctive", q:"The professor recommended that every student ______ the reference book.", opts:["buys","buy","will buy","would buy"], ans:1, exp:"recommend that + S + (should) V NGUYÊN MẪU → buy (lược should)."},
{id:"sj2", topic:"subjunctive", q:"It is essential that she ______ on time for the interview.", opts:["is","be","will be","was"], ans:1, exp:"It is essential that + S + (should) BE → be nguyên mẫu."},
{id:"sj3", topic:"subjunctive", q:"I would rather you ______ that secret to anyone.", opts:["don't reveal","didn't reveal","won't reveal","not reveal"], ans:1, exp:"would rather + S + V QKĐ → didn't reveal."},
{id:"sj4", topic:"subjunctive", q:"The coach insisted that the player ______ the training camp.", opts:["attends","attended","attend","will attend"], ans:2, exp:"insist that + S + (should) V nguyên mẫu → attend."},

/* --- used to --- */
{id:"ut1", topic:"used-to", q:"My grandfather ______ smoke a lot, but he gave up ten years ago.", opts:["is used to","used to","uses to","was used to"], ans:1, exp:"Thói quen quá khứ (đã bỏ) → used to + V."},
{id:"ut2", topic:"used-to", q:"She is a nurse, so she ______ working night shifts.", opts:["used to","is used to","use to","was use to"], ans:1, exp:"ĐÃ QUEN với việc (nghề hiện tại) → be used to + V-ing: is used to working."},
{id:"ut3", topic:"used-to", q:"Living alone is strange at first, but you will soon ______ it.", opts:["used to","use to","get used to","be use to"], ans:2, exp:"DẦN QUEN (quá trình tương lai) → get used to + N: get used to it."},
{id:"ut4", topic:"used-to", q:"Did you ______ play on the street when you were a child?", opts:["used to","use to","used","be used to"], ans:1, exp:"Nghi vấn của used to: DID + S + USE TO + V (use mất 'd' sau did)."},

/* --- so/neither --- */
{id:"sn1", topic:"so-neither", q:"'I went to the cinema last night.' — '______.'", opts:["So did I","So I did","So do I","Neither did I"], ans:0, exp:"Đồng tình khẳng định QKĐ → So + did + S: So did I."},
{id:"sn2", topic:"so-neither", q:"'I can't swim.' — '______.'", opts:["So can I","Neither I can","Neither can I","I can't, too"], ans:2, exp:"Đồng tình phủ định → Neither + can + S: Neither can I."},
{id:"sn3", topic:"so-neither", q:"'She loves ice cream, and I do ______.'", opts:["either","neither","so","too"], ans:3, exp:"Khẳng định cuối câu → too (I do, too)."},
{id:"sn4", topic:"so-neither", q:"'He never eats meat, and I don't ______.'", opts:["too","either","neither","also"], ans:1, exp:"Phủ định cuối câu → either (I don't, either)."},

/* --- not until --- */
{id:"nu1", topic:"not-until", q:"It was not until the last minute ______ he changed his mind.", opts:["when","that","then","which"], ans:1, exp:"Cấu trúc It was not until... THAT + S + V (không đảo) → that."},
{id:"nu2", topic:"not-until", q:"Not until the following morning ______ the truth.", opts:["she told","did she tell","she did tell","told she"], ans:1, exp:"Not until ở đầu câu → đảo trợ từ QKĐ: did she tell."},
{id:"nu3", topic:"not-until", q:"Only after the film started ______ I left my phone at home.", opts:["did I realize","I realized","I did realize","realized I"], ans:0, exp:"Only after... ở đầu câu → đảo did I realize."},
{id:"nu4", topic:"not-until", q:"'He stopped crying only when his mother came.' = Not until his mother came ______ crying.", opts:["he stopped","did he stop","he did stop","stopped he"], ans:1, exp:"Đổi sang Not until + đảo: did he stop crying."},

/* --- linking words --- */
{id:"lw1", topic:"linking", q:"The experiment failed twice. ______ , the team decided to try once more.", opts:["Moreover","However","Therefore","For example"], ans:1, exp:"Tương phản (thất bại NHƯNG vẫn thử) → However."},
{id:"lw2", topic:"linking", q:"She didn't study for the test; ______ , she failed it.", opts:["however","nevertheless","therefore","in contrast"], ans:2, exp:"Kết quả → therefore (do đó)."},
{id:"lw3", topic:"linking", q:"______ it was cold, but they still went swimming.", opts:["Although","Because","Despite","However"], ans:0, exp:"Chọn từ hợp nghĩa; ghi nhớ: KHÔNG được dùng both although + but — đáp án chỉ nhận Although (bỏ 'but' phía sau khi viết chuẩn)."},
{id:"lw4", topic:"linking", q:"I enjoy outdoor activities ______ hiking, cycling and camping.", opts:["such as","however","therefore","in contrast"], ans:0, exp:"Liệt kê ví dụ → such as."},

/* --- errors --- */
{id:"er1", topic:"errors", q:"Tìm phần sai: 'One of the students (A) who were (B) chosen for the contest is (C) my close friend her (D).'", opts:["A","B","C","D"], ans:3, exp:"'my close friend her' thừa đại từ — phải là 'my close friend'. Phần D sai."},
{id:"er2", topic:"errors", q:"Tìm phần sai: 'Neither of the two candidates have (A) answered (B) the question correctly (C) so far (D).'", opts:["A","B","C","D"], ans:0, exp:"Neither of + N → động từ SỐ ÍT: has answered. Phần A sai."},
{id:"er3", topic:"errors", q:"Tìm phần sai: 'Despite of (A) the bad weather, the flight (B) departed (C) on time (D).'", opts:["A","B","C","D"], ans:0, exp:"Despite KHÔNG bao giờ đi với 'of' (In spite of mới có of). Phần A sai."},
{id:"er4", topic:"errors", q:"Tìm phần sai: 'She is (A) interested (B) in learn (C) foreign languages (D).'", opts:["A","B","C","D"], ans:2, exp:"Sau giới từ 'in' phải là V-ing → in learning. Phần C sai."},

/* --- signals --- */
{id:"sg1", topic:"signals", q:"My father ______ this car since 2015.", opts:["has had","had","have had","is having"], ans:0, exp:"'since 2015' → hiện tại hoàn thành; chủ ngữ My father → has had."},
{id:"sg2", topic:"signals", q:"While I ______ along the river, I saw an old friend.", opts:["walk","walked","was walking","had walked"], ans:2, exp:"'While' + hành động đang diễn ra làm nền cho 'saw' → QK tiếp diễn: was walking."},
{id:"sg3", topic:"signals", q:"By the time we reached the station, the train ______ .", opts:["left","has left","had left","leaves"], ans:2, exp:"'By the time' + QKĐ → hành động trước đó: QKHT had left."},
{id:"sg4", topic:"signals", q:"Listen! Someone ______ the violin upstairs.", opts:["plays","is playing","played","has played"], ans:1, exp:"'Listen!' → đang diễn ra → hiện tại tiếp diễn."},

/* ---- Bổ sung: mỗi chủ đề nâng cao đủ 8 câu ---- */
{id:"sj5", topic:"subjunctive", q:"Suppose you ______ the lottery, what would you do with the money?", opts:["win","won","will win","had won"], ans:1, exp:"Suppose + V QKĐ (như điều kiện loại 2): Suppose you won..."},
{id:"sj6", topic:"subjunctive", q:"It's time we ______ this meeting to an end.", opts:["bring","brought","will bring","have brought"], ans:1, exp:"It's time + S + V QKĐ → brought."},
{id:"sj7", topic:"subjunctive", q:"The director demanded that the report ______ rewritten immediately.", opts:["is","be","was","will be"], ans:1, exp:"demand that + S + (should) BE → be (bị động giả định cách)."},
{id:"sj8", topic:"subjunctive", q:"If only I ______ more time, I would learn another language.", opts:["have","had","will have","am having"], ans:1, exp:"If only (ước) ngược hiện tại → V QKĐ: had."},
{id:"ut5", topic:"used-to", q:"There ______ be a cinema on this street, but it closed long ago.", opts:["used to","is used to","was used to","use to"], ans:0, exp:"Sự việc từng tồn tại trong quá khứ → used to + V: used to be."},
{id:"ut6", topic:"used-to", q:"I didn't ______ like coffee, but now I drink it every day.", opts:["used to","use to","be used to","using to"], ans:1, exp:"Phủ định: didn't USE TO + V (sau didn't mất 'd')."},
{id:"ut7", topic:"used-to", q:"He has lived in Sapa for years, so he ______ the cold weather.", opts:["used to","gets used","is used to","was used"], ans:2, exp:"ĐÃ QUEN (hiện tại) → be used to + N: is used to the cold weather."},
{id:"ut8", topic:"used-to", q:"This machine ______ to test eyesight — it's just a decoration now.", opts:["used","was used","is used to","using"], ans:1, exp:"Bị động quá khứ của use: was used to + V = được dùng để (trước đây)."},
{id:"sn5", topic:"so-neither", q:"'I have finished my homework.' — '______.'", opts:["So have I","So I have","So did I","Neither have I"], ans:0, exp:"Đồng tình HTHT (have là trợ từ) → So have I."},
{id:"sn6", topic:"so-neither", q:"'My brother doesn't like horror films, and ______ do I.'", opts:["so","neither","either","too"], ans:1, exp:"Phủ định → Neither do I. (either chỉ đứng cuối câu)."},
{id:"sn7", topic:"so-neither", q:"'Lan was at the party, and ______ was Nam.'", opts:["so","neither","either","too"], ans:0, exp:"Đồng tình khẳng định QK với was → So was Nam."},
{id:"sn8", topic:"so-neither", q:"'I would love to visit Japan.' — '______.'", opts:["So would I","So I would","Neither would I","I would, either"], ans:0, exp:"would là trợ từ trong câu gốc khẳng định → So would I."},
{id:"nu5", topic:"not-until", q:"It was not until she took off her helmet ______ I recognized her.", opts:["when","that","then","did"], ans:1, exp:"It was not until... THAT + S + V (không đảo) → that."},
{id:"nu6", topic:"not-until", q:"Not until the teacher repeated the question ______ what she meant.", opts:["I understood","did I understand","I did understand","understood I"], ans:1, exp:"Not until... → đảo did + S + V nguyên mẫu: did I understand."},
{id:"nu7", topic:"not-until", q:"Only when the plane took off ______ how tired I was.", opts:["I felt","did I feel","I did feel","felt I"], ans:1, exp:"Only when... ở đầu câu → đảo did I feel."},
{id:"nu8", topic:"not-until", q:"'The meeting began only after the director arrived.' = Not until the director arrived ______ the meeting begin.", opts:["the meeting did","did the meeting","the meeting","was the meeting"], ans:1, exp:"Not until + mốc, đảo did + S + V nguyên mẫu → did the meeting begin."},
{id:"lw5", topic:"linking", q:"______ being the oldest player, he scored twice in the final.", opts:["Despite","Although","However","Because"], ans:0, exp:"Theo sau là V-ing (being) → Despite."},
{id:"lw6", topic:"linking", q:"He set the alarm; ______ , he still overslept.", opts:["therefore","moreover","nevertheless","for example"], ans:2, exp:"Kết quả ngược dự đoán (tương phản) → nevertheless (tuy vậy)."},
{id:"lw7", topic:"linking", q:"______ conclusion, regular exercise improves both body and mind.", opts:["On","In","At","By"], ans:1, exp:"In conclusion = kết luận (collocation cố định)."},
{id:"lw8", topic:"linking", q:"The hotel was full. ______ , we found a small guesthouse nearby.", opts:["Moreover","Therefore","Luckily","Because"], ans:2, exp:"Kết quả may mắn → Luckily (may thay)."},
{id:"er5", topic:"errors", q:"Tìm phần sai: 'My parents let (A) me to stay (B) up late (C) at weekends (D).'", opts:["A","B","C","D"], ans:1, exp:"let + O + V nguyên mẫu (không to) → let me stay. Phần B sai."},
{id:"er6", topic:"errors", q:"Tìm phần sai: 'The number of visitors (A) to the museum have (B) increased (C) since last year (D).'", opts:["A","B","C","D"], ans:1, exp:"THE number of + N → V số ÍT: has increased. Phần B sai."},
{id:"er7", topic:"errors", q:"Tìm phần sai: 'If (A) I had known (B) her address, I would (C) write (D) to her last week.'", opts:["A","B","C","D"], ans:3, exp:"Had known (loại 3) → would HAVE WRITTEN (would have + V3). Phần D sai."},
{id:"er8", topic:"errors", q:"Tìm phần sai: 'She told (A) that she (B) had finished (C) her homework (D).'", opts:["A","B","C","D"], ans:0, exp:"told phải có tân ngữ (told ME) hoặc đổi thành SAID that... Phần A sai."},
{id:"sg5", topic:"signals", q:"She ______ her homework yet, so she can't go out.", opts:["didn't finish","hasn't finished","doesn't finish","didn't finishes"], ans:1, exp:"'yet' → HTHT phủ định: hasn't finished."},
{id:"sg6", topic:"signals", q:"This time next month, we ______ our final exams.", opts:["take","will take","will be taking","took"], ans:2, exp:"'This time next month' → tương lai tiếp diễn: will be taking."},
{id:"sg7", topic:"signals", q:"By 2030, Viet Nam ______ a leading country in this field.", opts:["becomes","became","will have become","is becoming"], ans:2, exp:"'By 2030' → tương lai hoàn thành: will have become."},
{id:"sg8", topic:"signals", q:"When I got home, my sister ______ dinner in the kitchen.", opts:["cooked","cooks","was cooking","has cooked"], ans:2, exp:"Đang nấu khi tôi về (hành động nền QK) → QK tiếp diễn: was cooking."}
];
