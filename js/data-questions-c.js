/* ===== QUESTION BANK - Phần C: 8 chủ đề bổ sung ===== */
const QUESTIONS_C = [
/* ---- Giới từ ---- */
{id:"gp1", topic:"prepositions", q:"The train to Hue leaves ______ 6:45 every morning.", opts:["on","in","at","by"], ans:2, exp:"Giờ đúng → dùng AT: at 6:45."},
{id:"gp2", topic:"prepositions", q:"We usually have a big family dinner ______ Christmas Day.", opts:["at","on","in","for"], ans:1, exp:"'Christmas Day' có Day = ngày cụ thể → ON. (Nếu chỉ 'at Christmas' thì dùng at)."},
{id:"gp3", topic:"prepositions", q:"She was born ______ May 1998 ______ Da Nang.", opts:["in / in","on / in","in / at","at / in"], ans:0, exp:"Tháng 5/1998 (tháng, năm) → in May 1998; thành phố Da Nang → in Da Nang."},
{id:"gp4", topic:"prepositions", q:"My house is ______ the bakery and the post office.", opts:["among","between","opposite","next"], ans:1, exp:"Giữa 2 điểm xác định (tiệm bánh + bưu điện) → between."},
{id:"gp5", topic:"prepositions", q:"He goes to work ______ bus, but today he came ______ foot.", opts:["on / by","by / on","by / by","in / on"], ans:1, exp:"by + phương tiện (by bus); on foot = đi bộ (cố định)."},
{id:"gp6", topic:"prepositions", q:"Please finish this report ______ Friday so we can submit it on time.", opts:["until","in","by","since"], ans:2, exp:"'muộn nhất là trước thứ Sáu' → by + mốc thời gian."},
{id:"gp7", topic:"prepositions", q:"The cat is hiding ______ the sofa, so we can't see it.", opts:["on","under","at","among"], ans:1, exp:"Con mèo trốn DƯỚI ghế → under."},
{id:"gp8", topic:"prepositions", q:"I love walking ______ the park ______ summer evenings.", opts:["in / in","on / in","in / on","at / in"], ans:0, exp:"trong công viên → in the park; 'summer evenings' là buổi (evening) có mùa kèm → in."},

/* ---- Từ loại ---- */
{id:"wf1", topic:"word-forms", q:"Her ______ to the problem surprised all of us.", opts:["approach","approachable","approachably","approaches"], ans:0, exp:"Sau tính từ sở hữu 'Her' cần DANH TỪ → approach (cách tiếp cận)."},
{id:"wf2", topic:"word-forms", q:"He made a quick ______ about the flight schedule.", opts:["decide","decisive","decision","decisively"], ans:2, exp:"Sau tính từ 'quick' cần danh từ → decision (make a decision)."},
{id:"wf3", topic:"word-forms", q:"She is very ______ in solving maths problems.", opts:["success","successful","successfully","succeed"], ans:1, exp:"Sau 'very' + trước 'in' cần TÍNH TỪ → successful."},
{id:"wf4", topic:"word-forms", q:"The children played ______ in the schoolyard all afternoon.", opts:["happy","happily","happiness","happier"], ans:1, exp:"Bổ nghĩa cho động từ 'played' → TRẠNG TỪ: happily."},
{id:"wf5", topic:"word-forms", q:"Smoking is extremely ______ to your health.", opts:["harm","harmful","harmlessly","harmed"], ans:1, exp:"Sau 'extremely' + trước 'to' cần tính từ → harmful (có hại)."},
{id:"wf6", topic:"word-forms", q:"My grandfather is a very ______ man; everyone in the village knows him.", opts:["friend","friendly","friendship","friendlily"], ans:1, exp:"Trước danh từ 'man' cần tính từ. 'Friendly' trông như trạng từ nhưng là TÍNH TỪ — bẫy kinh điển."},
{id:"wf7", topic:"word-forms", q:"We need to ______ the system to meet modern requirements.", opts:["modern","modernize","modernization","modernly"], ans:1, exp:"Sau 'need to' cần ĐỘNG TỪ nguyên mẫu → modernize (hiện đại hóa)."},
{id:"wf8", topic:"word-forms", q:"Her ______ made the whole family proud.", opts:["achieve","achievement","achievable","remarkably"], ans:1, exp:"Sau tính từ sở hữu 'Her' cần danh từ → achievement (thành tích)."},

/* ---- Hòa hợp chủ-vị ---- */
{id:"sv1", topic:"sva", q:"Everyone in my class ______ to join the English club.", opts:["want","wants","are wanting","have wanted"], ans:1, exp:"Everyone luôn số ít → wants. ('in my class' chỉ bổ nghĩa, không phải chủ ngữ)."},
{id:"sv2", topic:"sva", q:"Neither the students nor the teacher ______ ready for the test.", opts:["are","were","is","have been"], ans:2, exp:"neither...nor → động từ theo chủ ngữ GẦN NHẤT ('the teacher' số ít) → is."},
{id:"sv3", topic:"sva", q:"The number of students in this university ______ rapidly.", opts:["increase","is increasing","are increasing","have increased"], ans:1, exp:"THE number of + N số nhiều → V số ít → is increasing."},
{id:"sv4", topic:"sva", q:"A number of students ______ absent because of the storm.", opts:["is","was","are","has been"], ans:2, exp:"A number of + N = many → V số nhiều → are."},
{id:"sv5", topic:"sva", q:"The teacher, along with her 30 students, ______ the museum now.", opts:["are visiting","were visiting","is visiting","have visited"], ans:2, exp:"along with... → động từ theo chủ ngữ ĐẦU ('The teacher' số ít) → is visiting."},
{id:"sv6", topic:"sva", q:"Ten years ______ a long time to wait for anything.", opts:["are","is","were","have been"], ans:1, exp:"Khoảng thời gian coi như một khối lượng → số ít → is."},
{id:"sv7", topic:"sva", q:"There ______ two big windows and a beautiful door in this room.", opts:["is","was","are","has been"], ans:2, exp:"There be hòa hợp với danh từ SAU nó ('two big windows' số nhiều) → are."},
{id:"sv8", topic:"sva", q:"Each of the participants ______ a certificate at the end of the course.", opts:["receive","are receiving","receives","have received"], ans:2, exp:"Each of + N → V số ít → receives."},

/* ---- Câu cầu khiến ---- */
{id:"cs1", topic:"causative", q:"My mother ______ the dentist check her teeth twice a year.", opts:["gets","has","lets","makes to"], ans:1, exp:"have + O(người) + V nguyên mẫu → has the dentist check. ('let' cũng nguyên mẫu nhưng nghĩa 'cho phép', đề ngữ 'định kỳ' → have)."},
{id:"cs2", topic:"causative", q:"I ______ my hair ______ at that new salon yesterday.", opts:["had / cut","had / cutting","have / to cut","got / cutted"], ans:0, exp:"have + O(vật) + V3: had my hair cut (thợ cắt giúp — cut là V3 bất quy tắc)."},
{id:"cs3", topic:"causative", q:"She finally ______ her parents to let her go camping.", opts:["had","made","got","let"], ans:2, exp:"get + O(người) + TO V → got her parents to let her go."},
{id:"cs4", topic:"causative", q:"We are having our house ______ next week.", opts:["paint","painted","painting","to paint"], ans:1, exp:"have + O(vật) + V3 → house không tự sơn → painted."},
{id:"cs5", topic:"causative", q:"Poor Lan! She ______ her phone stolen on the bus this morning.", opts:["got","was got","has got to","getting"], ans:0, exp:"get/have + vật + V3 mang nghĩa KHÔNG MAY: bị mất điện thoại → got her phone stolen."},
{id:"cs6", topic:"causative", q:"'The technician repaired our air conditioner.' = We ______ .", opts:["had repaired our air conditioner","had our air conditioner repaired","had our air conditioner repair","have our air conditioner repairing"], ans:1, exp:"Đổi sang causative: vật (air conditioner) lên làm chủ ngữ + V3 → had our air conditioner repaired."},
{id:"cs7", topic:"causative", q:"You should ______ your eyes ______ regularly.", opts:["test / by doctor","have / tested","get / to test","have / testing"], ans:1, exp:"have + O(vật) + V3 → have your eyes tested (khám mắt)."},
{id:"cs8", topic:"causative", q:"The manager made us ______ the report again from the beginning.", opts:["to rewrite","rewriting","rewrite","rewritten"], ans:2, exp:"make + O + V nguyên mẫu (không to) → made us rewrite. (Chú ý make khác get: make sb DO, get sb TO do)."},

/* ---- Cụm động từ ---- */
{id:"pv9", topic:"phrasal", q:"Don't ______ ! You are making great progress with your English.", opts:["give up it","give it up","give up them","give it off"], ans:1, exp:"give up tách được; đại từ (it) phải đứng GIỮA → give it up."},
{id:"pv10", topic:"phrasal", q:"Could you please ______ my little cat while I am on holiday?", opts:["look for","look after","look up","look into"], ans:1, exp:"chăm sóc → look after. (look for = tìm kiếm)."},
{id:"pv11", topic:"phrasal", q:"The football match was ______ because of the heavy rain.", opts:["put on","put off","put up","put away"], ans:1, exp:"bị hoãn → put off."},
{id:"pv12", topic:"phrasal", q:"Our plane ______ at 9 a.m. and landed safely two hours later.", opts:["took off","took up","took after","took place"], ans:0, exp:"máy bay cất cánh → take off."},
{id:"pv13", topic:"phrasal", q:"While cleaning the bookshelf, Nam ______ his father's old diary.", opts:["came across","looked after","turned down","broke down"], ans:0, exp:"tình cờ tìm thấy → come across."},
{id:"pv14", topic:"phrasal", q:"She ______ the job offer because the salary was too low.", opts:["turned up","turned down","turned on","turned off"], ans:1, exp:"từ chối → turn down."},
{id:"pv15", topic:"phrasal", q:"I'm really looking forward to ______ from you soon.", opts:["hear","hearing","heard","be heard"], ans:1, exp:"look forward to có 'to' là giới từ → + V-ing: hearing."},
{id:"pv16", topic:"phrasal", q:"Our car ______ on the highway, so we arrived late.", opts:["broke up","broke down","broke into","broke out"], ans:1, exp:"xe bị hỏng → break down."},

/* ---- Mệnh đề danh ngữ ---- */
{id:"nc1", topic:"noun-clauses", q:"Do you know ______ ? I want to send her a gift.", opts:["where does Lan live","where Lan lives","where Lan does live","Lan lives where"], ans:1, exp:"Mệnh đề danh ngữ sau 'know' giữ TRẬT TỰ KHẲNG ĐỊNH, bỏ trợ động từ → where Lan lives."},
{id:"nc2", topic:"noun-clauses", q:"______ he said yesterday made everyone laugh.", opts:["That","Which","What","Whom"], ans:2, exp:"'What + S + V' = the thing that — làm chủ ngữ của câu: Những gì anh ấy nói..."},
{id:"nc3", topic:"noun-clauses", q:"I'm not sure ______ she will accept the invitation or not.", opts:["that","whether","what","which"], ans:1, exp:"có 'or not' → dùng WHETHER (whether... or not là cặp cố định)."},
{id:"nc4", topic:"noun-clauses", q:"It depends on ______ we can finish the project on time.", opts:["if","that","whether","what"], ans:2, exp:"Sau GIỚI TỪ (on) chỉ dùng whether, không dùng if."},
{id:"nc5", topic:"noun-clauses", q:"The teacher explained ______ the machine worked.", opts:["how does","how","what does","that how does"], ans:1, exp:"Sau 'explained' dùng how + trật tự khẳng định: how the machine worked."},
{id:"nc6", topic:"noun-clauses", q:"______ is still unknown to scientists.", opts:["Why did the birds disappear","Why the birds disappeared","Why do the birds disappear","Why disappearing the birds"], ans:1, exp:"Mệnh đề danh ngữ làm chủ ngữ: why + S + V (không đảo) → Why the birds disappeared."},
{id:"nc7", topic:"noun-clauses", q:"I believe ______ she is honest about her mistake.", opts:["what","whether","that","which"], ans:2, exp:"Sau believe dùng that + mệnh đề khẳng định (that thường được lược)."},
{id:"nc8", topic:"noun-clauses", q:"Nobody knows ______ he changed his mind at the last minute.", opts:["why did","that why","why","what why"], ans:2, exp:"why + S + V, không đảo, không trợ động từ → why he changed."},

/* ---- Collocations ---- */
{id:"cl1", topic:"collocations", q:"Visitors are not allowed to ______ photos inside the museum.", opts:["make","do","take","have"], ans:2, exp:"take a photo = chụp ảnh (collocation cố định)."},
{id:"cl2", topic:"collocations", q:"After working all day, she just wanted to ______ a shower and rest.", opts:["make","do","take","get"], ans:2, exp:"take a shower = tắm."},
{id:"cl3", topic:"collocations", q:"Try to ______ your best in the final exam, and don't panic.", opts:["make","do","give","take"], ans:1, exp:"do one's best = cố gắng hết mình."},
{id:"cl4", topic:"collocations", q:"The opening ceremony will ______ place next Sunday morning.", opts:["make","take","do","get"], ans:1, exp:"take place = diễn ra (KHÔNG cần người thực hiện — bẫy kinh điển)."},
{id:"cl5", topic:"collocations", q:"He ______ a serious mistake in the report, but the boss forgave him.", opts:["did","made","took","had"], ans:1, exp:"make a mistake = mắc lỗi."},
{id:"cl6", topic:"collocations", q:"Please ______ attention to the instructions before you start.", opts:["give","make","pay","take"], ans:2, exp:"pay attention to = chú ý."},
{id:"cl7", topic:"collocations", q:"We should ______ in touch even after leaving school.", opts:["keep","make","stay","get"], ans:0, exp:"keep in touch = giữ liên lạc."},
{id:"cl8", topic:"collocations", q:"She ______ part in the singing contest and won the first prize.", opts:["made","took","had","did"], ans:1, exp:"take part in = tham gia."},

/* ---- Câu hỏi đuôi ---- */
{id:"qt1", topic:"question-tags", q:"Your uncle works in a bank, ______ ?", opts:["does he","doesn't he","is he","won't he"], ans:1, exp:"Câu khẳng định (works — HTĐ đơn) → đuôi phủ định với does: doesn't he?"},
{id:"qt2", topic:"question-tags", q:"She rarely goes out at night, ______ ?", opts:["doesn't she","does she","isn't she","has she"], ans:1, exp:"rarely mang nghĩa PHỦ ĐỊNH → đuôi KHẲNG ĐỊNH: does she?"},
{id:"qt3", topic:"question-tags", q:"Let's go for a walk, ______ ?", opts:["will you","shall we","don't we","won't we"], ans:1, exp:"Let's → câu hỏi đuôi cố định: shall we?"},
{id:"qt4", topic:"question-tags", q:"I am late for the meeting, ______ ?", opts:["am not I","aren't I","amn't I","not am I"], ans:1, exp:"Duy nhất 'I am' có đuôi đặc biệt: aren't I? (không nói amn't I)."},
{id:"qt5", topic:"question-tags", q:"Don't forget to lock the door, ______ ?", opts:["do you","don't you","will you","won't you"], ans:2, exp:"Mệnh lệnh phủ định (Don't...) → đuôi will you?"},
{id:"qt6", topic:"question-tags", q:"There was a loud noise last night, ______ ?", opts:["wasn't it","wasn't there","didn't it","was there"], ans:1, exp:"Câu 'There be' → đuôi lặp lại there: wasn't there?"},
{id:"qt7", topic:"question-tags", q:"Everyone enjoyed the party, ______ ?", opts:["didn't he","didn't they","did they","doesn't he"], ans:1, exp:"Everyone → đại từ câu hỏi đuôi là THEY; câu khẳng định → đuôi phủ định: didn't they?"},
{id:"qt8", topic:"question-tags", q:"He has never been to Japan, ______ ?", opts:["hasn't he","has he","does he","is he"], ans:1, exp:"never = phủ định → đuôi khẳng định; 'has been' là trợ động từ HTHT → has he?"}
];
