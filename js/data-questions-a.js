/* ===== QUESTION BANK - Phần A ===== */
const QUESTIONS_A = [
/* ---- Các thì hiện tại ---- */
{id:"tp1", topic:"t-present", q:"Look! The baby ______ asleep.", opts:["is falling","falls","fell","has fallen"], ans:0, exp:"Có 'Look!' → hành động đang xảy ra ngay lúc nói → hiện tại tiếp diễn: is falling."},
{id:"tp2", topic:"t-present", q:"My sister ______ to the gym three times a week.", opts:["go","goes","is going","has gone"], ans:1, exp:"Dấu hiệu tần suất 'three times a week' → hiện tại đơn. Chủ ngữ 'My sister' ngôi 3 số ít → goes."},
{id:"tp3", topic:"t-present", q:"I ______ this film three times already.", opts:["saw","see","have seen","had seen"], ans:2, exp:"'already' là dấu hiệu hiện tại hoàn thành: have + V3 → have seen."},
{id:"tp4", topic:"t-present", q:"She ______ in Da Nang since 2018.", opts:["lives","lived","has lived","is living"], ans:2, exp:"'since 2018' → hành động bắt đầu trong quá khứ, kéo dài đến hiện tại → hiện tại hoàn thành: has lived."},
{id:"tp5", topic:"t-present", q:"Listen! Someone ______ the piano upstairs.", opts:["plays","played","is playing","has played"], ans:2, exp:"'Listen!' hiệu lệnh chú ý hành động đang diễn ra → hiện tại tiếp diễn: is playing."},
{id:"tp6", topic:"t-present", q:"How long ______ you ______ English?", opts:["do / study","have / studied","did / study","are / studying"], ans:1, exp:"'How long' hỏi khoảng thời gian kéo dài đến hiện tại → hiện tại hoàn thành: have you studied."},
{id:"tp7", topic:"t-present", q:"The water ______ at 100 degrees Celsius.", opts:["boil","boils","is boiling","has boiled"], ans:1, exp:"Chân lý khoa học → hiện tại đơn; chủ ngữ 'The water' ngôi 3 số ít → boils."},
{id:"tp8", topic:"t-present", q:"They ______ this bridge for two years, but it is still not finished.", opts:["build","built","have been building","had built"], ans:2, exp:"'for two years' + hành động vẫn đang tiếp tục (chưa xong) → hiện tại hoàn thành tiếp diễn: have been building."},

/* ---- Các thì quá khứ ---- */
{id:"tq1", topic:"t-past", q:"While I ______ dinner, the lights went out.", opts:["cooked","was cooking","had cooked","have cooked"], ans:1, exp:"Hành động 'cooking' đang diễn ra (nền) thì 'went out' xen vào → quá khứ tiếp diễn: was cooking."},
{id:"tq2", topic:"t-past", q:"When we arrived at the station, the train ______ .", opts:["left","has left","had left","leaves"], ans:2, exp:"Tàu rời đi TRƯỚC khi chúng tôi đến (hai việc trong quá khứ, việc trước dùng QK hoàn thành): had left."},
{id:"tq3", topic:"t-past", q:"She ______ her keys yesterday morning.", opts:["loses","lost","has lost","had lost"], ans:1, exp:"'yesterday morning' là mốc thời gian xác định trong quá khứ → quá khứ đơn: lost."},
{id:"tq4", topic:"t-past", q:"By the time the police came, the thief ______ .", opts:["escaped","had escaped","has escaped","was escaping"], ans:1, exp:"'By the time' + quá khứ đơn → hành động trước đó dùng quá khứ hoàn thành: had escaped."},
{id:"tq5", topic:"t-past", q:"At 8 p.m. last night, I ______ my essay.", opts:["wrote","was writing","had written","write"], ans:1, exp:"'At 8 p.m. last night' chỉ thời điểm đang diễn ra trong quá khứ → quá khứ tiếp diễn: was writing."},
{id:"tq6", topic:"t-past", q:"He told me he ______ that company two years before.", opts:["joined","had joined","has joined","was joining"], ans:1, exp:"'two years before' + mốc 'he told me' (quá khứ) → hành động trước đó: quá khứ hoàn thành had joined."},
{id:"tq7", topic:"t-past", q:"I ______ TV when my mother came home.", opts:["watched","was watching","have watched","had watched"], ans:1, exp:"Đang xem TV thì mẹ về (hành động ngắn xen vào) → quá khứ tiếp diễn: was watching."},
{id:"tq8", topic:"t-past", q:"She ______ for the company for ten years before she resigned.", opts:["works","worked","had been working","has been working"], ans:2, exp:"'for ten years before she resigned' → nhấn mạnh tính liên tục trước mốc quá khứ → QK hoàn thành tiếp diễn: had been working."},

/* ---- Các thì tương lai ---- */
{id:"tf1", topic:"t-future", q:"A: 'The phone is ringing.' B: 'Don't worry. I ______ answer it.'", opts:["am going to","will","am answering","answer"], ans:1, exp:"Quyết định đưa ra NGAY LÚC NÓI → dùng will."},
{id:"tf2", topic:"t-future", q:"We ______ our grandparents in Hue next weekend. We have already booked the tickets.", opts:["will visit","visit","are going to visit","visited"], ans:2, exp:"Kế hoạch đã định trước (đã đặt vé) → be going to: are going to visit."},
{id:"tf3", topic:"t-future", q:"By 2030, she ______ her university degree.", opts:["finishes","will finish","will have finished","is finishing"], ans:2, exp:"'By 2030' (mốc tương lai) → hành động hoàn thành trước mốc đó → tương lai hoàn thành: will have finished."},
{id:"tf4", topic:"t-future", q:"This time next Sunday, we ______ on the beach in Nha Trang.", opts:["will lie","will be lying","are lying","lie"], ans:1, exp:"'This time next Sunday' → đang diễn ra tại mốc tương lai → tương lai tiếp diễn: will be lying."},
{id:"tf5", topic:"t-future", q:"When she ______ here tomorrow, I will show her the photos.", opts:["will come","comes","is coming","came"], ans:1, exp:"Mệnh đề thời gian với when ở tương lai KHÔNG dùng will → dùng hiện tại đơn: comes."},
{id:"tf6", topic:"t-future", q:"Look at those dark clouds! It ______ rain.", opts:["will","is going to","shall","would"], ans:1, exp:"Dự đoán dựa trên bằng chứng nhìn thấy được (mây đen) → be going to."},
{id:"tf7", topic:"t-future", q:"I promise I ______ tell anyone your secret.", opts:["don't","won't","am not going to","not will"], ans:1, exp:"Lời hứa → will; phủ định lời hứa → won't."},
{id:"tf8", topic:"t-future", q:"The film ______ at 9 p.m. tonight, according to the schedule.", opts:["will start","starts","is starting to","would start"], ans:1, exp:"Lịch trình cố định (giờ chiếu phim) → hiện tại đơn: starts."},

/* ---- Danh từ & hạn định từ ---- */
{id:"n1", topic:"nouns", q:"She gave me several useful ______ about the course.", opts:["informations","information","pieces of information","piece of informations"], ans:2, exp:"'information' là danh từ không đếm được: không thêm -s, không dùng many/several trực tiếp → phải dùng 'pieces of information'."},
{id:"n2", topic:"nouns", q:"How ______ money do you need for the trip?", opts:["many","much","few","little of"], ans:1, exp:"'money' là danh từ không đếm được → dùng much."},
{id:"n3", topic:"nouns", q:"There are only ______ eggs left, so we can make an omelette.", opts:["a little","little","a few","few"], ans:2, exp:"'eggs' đếm được số nhiều → a few (một ít, đủ để làm món trứng ốp la — nghĩa tích cực)."},
{id:"n4", topic:"nouns", q:"The farmer keeps twenty ______ on his farm.", opts:["sheeps","sheep","sheepes","sheepies"], ans:1, exp:"'sheep' có số nhiều không đổi: one sheep, twenty sheep."},
{id:"n5", topic:"nouns", q:"We haven't got ______ furniture in our new flat yet.", opts:["many","a few","much","lots"], ans:2, exp:"'furniture' không đếm được → much. 'lots' phải đi với 'of'."},
{id:"n6", topic:"nouns", q:"Unfortunately, I have ______ close friends in this city, so I feel lonely.", opts:["a few","few","a little","little"], ans:1, exp:"'friends' đếm được + nghĩa tiêu cực (gần như không có bạn nên cô đơn) → few (không có 'a')."},
{id:"n7", topic:"nouns", q:"All the ______ in the hospital were cleaned twice a day.", opts:["woman nurse","women nurse","women nurses","woman nurses"], ans:2, exp:"Khi danh từ ghép có 2 phần đều cần số nhiều: women nurses (cả 'woman' và 'nurse' đều ở số nhiều)."},
{id:"n8", topic:"nouns", q:"Would you like ______ more tea?", opts:["some","any","many","few"], ans:0, exp:"Trong lời mời/đề nghị lịch sự (Would you like...?) dùng 'some', dù là câu hỏi."},

/* ---- Đại từ ---- */
{id:"pr1", topic:"pronouns", q:"My friends and ______ went to the cinema last night.", opts:["me","I","myself","mine"], ans:1, exp:"Đại từ làm CHỦ NGỮ của động từ 'went' → dạng chủ ngữ 'I' (My friends and I)."},
{id:"pr2", topic:"pronouns", q:"This laptop is not ______ — it belongs to Peter.", opts:["my","me","mine","myself"], ans:2, exp:"Đứng một mình, thay cho 'my laptop' → đại từ sở hữu: mine."},
{id:"pr3", topic:"pronouns", q:"She looked at ______ in the mirror before the interview.", opts:["her","hers","herself","she"], ans:2, exp:"Chủ ngữ và tân ngữ là cùng một người → đại từ phản thân: herself."},
{id:"pr4", topic:"pronouns", q:"Some people like pop music, while ______ prefer rock.", opts:["other","others","the other","another"], ans:1, exp:"Đứng một mình, nghĩa 'những người khác (một bộ phận)' → others."},
{id:"pr5", topic:"pronouns", q:"I don't like this shirt. Could you show me a bigger ______ ?", opts:["one","ones","other","it"], ans:0, exp:"Thay danh từ số ít đã nhắc ('this shirt') → one."},
{id:"pr6", topic:"pronouns", q:"He has two bikes. One is new and ______ is old.", opts:["other","the other","another","others"], ans:1, exp:"Hai vật: one... the other (cái còn lại duy nhất) → the other."},
{id:"pr7", topic:"pronouns", q:"The children decorated the classroom by ______ .", opts:["theyself","theirselves","themselves","them"], ans:2, exp:"'by + đại từ phản thân' = tự mình làm → themselves."},
{id:"pr8", topic:"pronouns", q:"Between you and ______ , this plan will never work.", opts:["I","me","myself","mine"], ans:1, exp:"Sau giới từ 'between' phải dùng đại từ tân ngữ: me."},

/* ---- Mạo từ ---- */
{id:"a1", topic:"articles", q:"My uncle is ______ engineer and my aunt is ______ artist.", opts:["an / an","a / a","an / a","a / an"], ans:0, exp:"'engineer' và 'artist' đều bắt đầu bằng âm nguyên âm /e/, /ɑ:/ → dùng an."},
{id:"a2", topic:"articles", q:"She spent ______ hour in ______ museum near her house.", opts:["a / the","an / the","an / a","the / the"], ans:1, exp:"'hour' có âm /h/ câm → an hour. 'the museum near her house' — được giới hạn bởi cụm 'near her house' → the."},
{id:"a3", topic:"articles", q:"______ earth moves around ______ sun.", opts:["The / the","An / a","The / a","Ø / Ø"], ans:0, exp:"Thiên thể duy nhất (earth, sun, moon) luôn đi với the."},
{id:"a4", topic:"articles", q:"We usually have ______ breakfast at 6:30 and go to ______ school by bus.", opts:["the / the","Ø / Ø","a / the","Ø / the"], ans:1, exp:"Bữa ăn (breakfast) và 'go to school' (nghĩa học tập) đều không dùng mạo từ."},
{id:"a5", topic:"articles", q:"He plays ______ guitar and ______ football very well.", opts:["the / Ø","Ø / the","the / the","a / a"], ans:0, exp:"Nhạc cụ → the guitar; thể thao → Ø football."},
{id:"a6", topic:"articles", q:"My family is going to visit ______ United States next summer.", opts:["the","a","an","Ø"], ans:0, exp:"Tên nước có dạng số nhiều/liên bang → the United States."},
{id:"a7", topic:"articles", q:"______ patience is ______ most important quality for a teacher.", opts:["The / the","Ø / the","A / a","Ø / a"], ans:1, exp:"Danh từ trừu tượng nói chung (patience) → Ø; so sánh nhất → the most."},
{id:"a8", topic:"articles", q:"I saw ______ old man and ______ dog. ______ dog was barking loudly.", opts:["an / a / The","a / a / A","an / a / A","the / a / The"], ans:0, exp:"Lần đầu nhắc → an old man, a dog; lần thứ hai nhắc (cả người nghe đã biết) → The dog."},

/* ---- V-ing / To-V ---- */
{id:"g1", topic:"gerund", q:"My parents don't allow me ______ out after 10 p.m.", opts:["going","to go","go","went"], ans:1, exp:"allow + O + TO V (allow somebody to do something) → to go."},
{id:"g2", topic:"gerund", q:"I look forward to ______ from you soon.", opts:["hear","hearing","heard","be heard"], ans:1, exp:"'look forward to' có 'to' là GIỚI TỪ → theo sau là V-ing: to hearing."},
{id:"g3", topic:"gerund", q:"Remember ______ the door when you leave. (nhớ phải làm)", opts:["locking","to lock","locked","lock"], ans:1, exp:"remember + to V = nhớ việc PHẢI làm (chưa làm) → to lock."},
{id:"g4", topic:"gerund", q:"She stopped ______ coffee because it was bad for her sleep.", opts:["to drink","drink","drinking","drank"], ans:2, exp:"stop + V-ing = ngừng hẳn thói quen nào đó → drinking."},
{id:"g5", topic:"gerund", q:"He was very tired, but he kept ______ until midnight.", opts:["to work","working","worked","work"], ans:1, exp:"keep + V-ing = tiếp tục làm → working."},
{id:"g6", topic:"gerund", q:"It was very kind of you ______ me with my homework.", opts:["helping","help","to help","helped"], ans:2, exp:"Sau tính từ (kind) dùng to-V: It was kind of you to help..."},
{id:"g7", topic:"gerund", q:"My brother suggested ______ a picnic this weekend.", opts:["to have","having","have","we having to"], ans:1, exp:"suggest + V-ing → having."},
{id:"g8", topic:"gerund", q:"I regret ______ you that the flight has been cancelled.", opts:["telling","to tell","tell","told"], ans:1, exp:"regret + to V = tiếc phải thông báo (tin xấu sắp nói) → to tell. (regret + V-ing = tiếc việc đã làm)"},

/* ---- Tính từ & Trạng từ ---- */
{id:"aa1", topic:"adj-adv", q:"She speaks English ______ than her brother.", opts:["fluent","more fluently","fluently","more fluent"], ans:1, exp:"Đứng sau động từ 'speaks' cần TRẠNG TỪ (miêu tả cách nói); so sánh hơn với trạng từ dài → more fluently than."},
{id:"aa2", topic:"adj-adv", q:"The movie was so ______ that I fell asleep.", opts:["bored","boring","bore","boringly"], ans:1, exp:"Miêu tả tính chất của sự vật (bộ phim gây chán) → -ing: boring."},
{id:"aa3", topic:"adj-adv", q:"She wore ______ dress to the party.", opts:["a cotton beautiful white","a beautiful white cotton","a white beautiful cotton","a cotton white beautiful"], ans:1, exp:"Trật tự OSASCOMP: Opinion (beautiful) → Color (white) → Material (cotton) → beautiful white cotton dress."},
{id:"aa4", topic:"adj-adv", q:"He tried ______ to pass the driving test, but he failed again.", opts:["hardly","hard","harder than","hardest"], ans:1, exp:"'cố gắng vất vả' = try hard (hard vừa là tính từ vừa là trạng từ). 'hardly' = gần như không — sai nghĩa."},
{id:"aa5", topic:"adj-adv", q:"The soup smells ______ . What are you cooking?", opts:["deliciously","delicious","more deliciously","deliciousness"], ans:1, exp:"Sau động từ liên kết (smell, taste, look, feel, sound) dùng TÍNH TỪ: smells delicious."},
{id:"aa6", topic:"adj-adv", q:"I was really ______ in the history of ancient Egypt.", opts:["interesting","interested","interest","interestingly"], ans:1, exp:"Người cảm thấy hứng thú → -ed: interested (be interested in)."},
{id:"aa7", topic:"adj-adv", q:"My grandmother is a ______ woman.", opts:["kindly","kind","kindness","more kindly"], ans:1, exp:"Đứng trước danh từ 'woman' cần tính từ: kind."},
{id:"aa8", topic:"adj-adv", q:"The children played ______ in the garden all afternoon.", opts:["happy","happiness","happily","happier"], ans:2, exp:"Miêu tả cách chơi (động từ played) → trạng từ: happily."}
];
