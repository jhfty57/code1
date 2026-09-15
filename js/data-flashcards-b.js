/* ===== FLASHCARDS - Phần B: 8 chủ đề bổ sung ===== */
const FLASHCARDS_B = [
/* Giới từ */
{id:"g01", topic:"prepositions", front:"IN / ON / AT với THỜI GIAN?", back:"IN: tháng, năm, mùa, buổi (in May, in 2024, in the morning). ON: ngày, thứ (on Monday, on 5th May). AT: giờ, at night, at Christmas."},
{id:"g02", topic:"prepositions", front:"IN / ON / AT với NƠI CHỐN?", back:"IN: trong không gian, thành phố, quốc gia. ON: bề mặt, phương tiện công cộng (on the bus). AT: điểm cụ thể (at the door, at school)."},
{id:"g03", topic:"prepositions", front:"'___ Monday morning' — in hay on?", back:"ON Monday morning. Khi buổi (morning) có thứ/ngày kèm trước → ON. Còn riêng lẻ: in the morning."},
{id:"g04", topic:"prepositions", front:"between vs among?", back:"between: giữa 2 người/vật. among: giữa từ 3 trở lên hoặc trong đám đông (among friends)."},
{id:"g05", topic:"prepositions", front:"by + ___ và on foot nghĩa gì?", back:"by car/bus/plane = đi bằng phương tiện. on foot = đi bộ. Riêng xe riêng dùng in my car."},
{id:"g06", topic:"prepositions", front:"by + mốc thời gian nghĩa là gì?", back:"'muộn nhất là, trước khi tới mốc': Finish it by 5 p.m. = xong trước 5 giờ."},
/* Từ loại */
{id:"g07", topic:"word-forms", front:"6 hậu tố tạo DANH TỪ hay thi?", back:"-tion (education), -ment (development), -ness (happiness), -ity (ability), -er/-or (teacher, actor), -ance/-ence (performance)."},
{id:"g08", topic:"word-forms", front:"6 hậu tố tạo TÍNH TỪ hay thi?", back:"-ful (beautiful), -less (careless), -ous (dangerous), -y (rainy), -al (natural), -ive/-able (creative, comfortable)."},
{id:"g09", topic:"word-forms", front:"friendly, lovely là tính từ hay trạng từ?", back:"TÍNH TỪ! Dù có -ly. Trạng từ của friend là 'in a friendly way'. Cặp bẫy: careful ≠ careless (nghĩa ngược)."},
{id:"g10", topic:"word-forms", front:"Chỗ trống sau a/an/the hoặc tính từ cần từ loại gì?", back:"DANH TỪ. Ngược lại: sau chủ ngữ → động từ; bổ nghĩa động từ/câu → trạng từ; trước danh từ → tính từ."},
{id:"g11", topic:"word-forms", front:"3 hậu tố tạo ĐỘNG TỪ?", back:"-en (wide→widen), -ize/-ise (modern→modernize), -ify (simple→simplify)."},
{id:"g12", topic:"word-forms", front:"Đổi 'succeed' thành 4 dạng?", back:"succeed (v) → success (n) → successful (adj) → successfully (adv)."},
/* Hòa hợp chủ-vị */
{id:"g13", topic:"sva", front:"Everyone, each, nobody... + V số ít hay số nhiều?", back:"SỐ ÍT: Everyone is here. Each student has a book. Nothing was said."},
{id:"g14", topic:"sva", front:"either...or / neither...nor chia theo đâu?", back:"Theo chủ ngữ GẦN NHẤT: Neither Nam nor his friends are late. Neither the students nor the teacher is here."},
{id:"g15", topic:"sva", front:"the number of vs a number of?", back:"THE number of + N nhiều + V SỐ ÍT (con số). A number of + N nhiều + V SỐ NHIỀU (= many)."},
{id:"g16", topic:"sva", front:"'The teacher, along with 30 students, ___' chia sao?", back:"Theo chủ ngữ ĐẦU (the teacher): along with/as well as/together with không đổi chủ ngữ → is."},
{id:"g17", topic:"sva", front:"Ten years / Five dollars + V số gì?", back:"SỐ ÍT — khoảng thời gian, tiền, khoảng cách coi như một khối: Ten years is a long time."},
{id:"g18", topic:"sva", front:"Bẫy: 'The list of items ___' — vì sao?", back:"Chủ ngữ thật là THE LIST (of items chỉ bổ nghĩa) → is. Gạch cụm giới từ giữa câu để tìm chủ ngữ."},
/* Cầu khiến */
{id:"g19", topic:"causative", front:"have + người + ___ và get + người + ___?", back:"have + O(người) + V NGUYÊN MẪU (have him fix); get + O(người) + TO V (get him to fix) — cặp đối xứng ngược!"},
{id:"g20", topic:"causative", front:"have/get + vật + ___ ? Nghĩa gì?", back:"+ V3: I had my bike repaired. Vật không tự làm → luôn mang nghĩa bị động."},
{id:"g21", topic:"causative", front:"'I cut my hair' khác 'I had my hair cut' thế nào?", back:"Tự cắt mình VS đi cắt nhờ thợ. Causative = nhờ người khác làm."},
{id:"g22", topic:"causative", front:"'She had her wallet stolen' nghĩa gì?", back:"Cô ấy BỊ móc ví — cấu trúc causative mang nghĩa không may xảy ra với tài sản."},
{id:"g23", topic:"causative", front:"Đổi: 'The painter painted our house.'", back:"We HAD OUR HOUSE PAINTED (by the painter). Vật lên làm chủ ngữ + V3."},
{id:"g24", topic:"causative", front:"make + O + ___ còn get + O + ___?", back:"make + O + V nguyên mẫu (made us rewrite); get + O + TO V (got us to rewrite)."},
/* Cụm động từ */
{id:"g25", topic:"phrasal", front:"look after vs look for vs look forward to?", back:"look after = chăm sóc; look for = tìm kiếm; look forward to + V-ing = mong chờ."},
{id:"g26", topic:"phrasal", front:"put off vs take off vs put on?", back:"put off = trì hoãn; take off = cất cánh/cởi; put on = mặc vào."},
{id:"g27", topic:"phrasal", front:"turn down 2 nghĩa?", back:"Từ chối (lời mời/đề nghị) hoặc vặn nhỏ (âm lượng). Ngược lại turn up = xuất hiện/vặn to."},
{id:"g28", topic:"phrasal", front:"come across và break down nghĩa gì?", back:"come across = tình cờ gặp/thấy; break down = (máy móc) hỏng, bật khóc."},
{id:"g29", topic:"phrasal", front:"Đại từ (it/them) đứng đâu với cụm tách được?", back:"Ở GIỮA: turn it on, give it up. Nói 'turn on it' là SAI. Cụm không tách (look after) thì đại từ đứng sau."},
{id:"g30", topic:"phrasal", front:"Tiểu từ 'out' thường mang nghĩa gì?", back:"Lộ ra/phát hiện/phân phối: find out (phát hiện), hand out (phát), run out of (cạn kiệt)."},
/* Mệnh đề danh ngữ */
{id:"g31", topic:"noun-clauses", front:"Sau know/wonder/ask, mệnh đề wh- chia trật tự nào?", back:"TRẬT TỰ KHẲNG ĐỊNH, bỏ do/does/did: I don't know where he lives (không where does he live)."},
{id:"g32", topic:"noun-clauses", front:"WHAT + S + V làm chủ ngữ nghĩa gì?", back:"= the thing that: What he said surprised me = Những gì anh ấy nói khiến tôi ngạc nhiên."},
{id:"g33", topic:"noun-clauses", front:"if/whether — khi nào KHÔNG dùng if?", back:"Sau giới từ (depends on whether), trước to-V (whether to go), đầu câu làm chủ ngữ → chỉ dùng WHETHER."},
{id:"g34", topic:"noun-clauses", front:"'whether... or not' — đúng cặp không?", back:"Đúng — whether đi được với or not: I don't know whether he will come or not."},
{id:"g35", topic:"noun-clauses", front:"Cả mệnh đề that... làm chủ ngữ thì động từ số gì?", back:"SỐ ÍT: That he failed the exam was a big surprise."},
{id:"g36", topic:"noun-clauses", front:"Liên hệ câu tường thuật?", back:"Câu tường thuật = đưa câu hỏi/kể vào làm noun clause sau said/asked — cùng trật tự khẳng định."},
/* Collocations */
{id:"g37", topic:"collocations", front:"TAKE — 6 collocation hay thi?", back:"take a photo, take a shower, take a break, take an exam, take place, take part in."},
{id:"g38", topic:"collocations", front:"MAKE — 6 collocation hay thi?", back:"make a mistake, make a decision, make noise, make friends, make money, make progress."},
{id:"g39", topic:"collocations", front:"DO — 5 collocation hay thi?", back:"do homework, do housework, do one's best, do a favor, do business (with)."},
{id:"g40", topic:"collocations", front:"make vs do phân biệt?", back:"make = tạo ra sản phẩm mới (make a cake, make a plan); do = thực hiện việc có sẵn (do homework, do the dishes)."},
{id:"g41", topic:"collocations", front:"take place vs take part in?", back:"take place = diễn ra (không cần người! The festival takes place in May); take part in = tham gia (có người)."},
{id:"g42", topic:"collocations", front:"PAY và KEEP — các cụm hay thi?", back:"pay attention to, pay a visit, pay the bill; keep a promise, keep in touch, keep calm, keep a diary."},
/* Câu hỏi đuôi */
{id:"g43", topic:"question-tags", front:"Quy tắc vàng câu hỏi đuôi?", back:"Khẳng định → đuôi phủ định; phủ định → đuôi khẳng định. Đuôi = trợ động từ + đại từ chủ ngữ."},
{id:"g44", topic:"question-tags", front:"Câu hỏi đuôi của 'I am late'?", back:"aren't I? — duy nhất và đặc biệt (không có amn't I)."},
{id:"g45", topic:"question-tags", front:"Let's... và mệnh lệnh Don't... hỏi đuôi thế nào?", back:"Let's go, shall we? / Don't be late, will you? / Mệnh lệnh khẳng định: Open the door, will you?"},
{id:"g46", topic:"question-tags", front:"never, rarely, hardly, nothing ảnh hưởng đuôi sao?", back:"Mang nghĩa PHỦ ĐỊNH → đuôi KHẲNG ĐỊNH: He never smokes, does he? Nothing happened, did it?"},
{id:"g47", topic:"question-tags", front:"Everyone / Nobody → đại từ đuôi là gì?", back:"THEY: Everyone enjoyed it, didn't they? Nobody called, did they?"},
{id:"g48", topic:"question-tags", front:"'She has a car' vs 'She has finished' — đuôi khác nhau?", back:"have = sở hữu (động từ thường) → doesn't she? / have = trợ từ HTHT → hasn't she? Nhìn chức năng!"}
];
