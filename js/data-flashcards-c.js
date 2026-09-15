/* ===== FLASHCARDS - Phần C: 8 chủ đề nâng cao ===== */
const FLASHCARDS_C = [
/* Chuyển đổi câu */
{id:"h01", topic:"transform", front:"QKĐ + ago → đổi sang HTHT thế nào?", back:"S + have/has + V3 + for + khoảng thời gian: I moved here 5 years ago → I have lived here for 5 years."},
{id:"h02", topic:"transform", front:"because + mệnh đề ↔ because of + ___ ?", back:"+ DANH TỪ/V-ing: Because it rained heavily = Because of the heavy rain."},
{id:"h03", topic:"transform", front:"too + adj + to V ↔ so... that thế nào?", back:"too young to drive = so young that he CAN'T drive — chú ý thêm NOT vào vế sau."},
{id:"h04", topic:"transform", front:"It's a pity + QKĐ → viết lại bằng wish?", back:"I wish + had + V3: It's a pity I missed the show = I wish I hadn't missed the show."},
{id:"h05", topic:"transform", front:"not... any longer = ?", back:"no longer + V khẳng định: She doesn't work here any longer = She no longer works here."},
{id:"h06", topic:"transform", front:"Quy tắc 'từ gợi ý cho sẵn' trong viết lại câu?", back:"Giữ NGUYÊN TỪ đã cho, không đổi dạng, không thêm trước nó — câu bắt đầu đúng bằng từ gợi ý."},
/* Giả định cách */
{id:"h07", topic:"subjunctive", front:"suggest/demand/insist that + S + ___ ?", back:"+ (should) V NGUYÊN MẪU — lược được should, V luôn nguyên mẫu: The doctor suggested that he (should) drink more water."},
{id:"h08", topic:"subjunctive", front:"It's (high) time + S + ___ ?", back:"+ V QKĐ: It's time you WENT to bed! (đến lúc phải làm — thực tế chưa làm)."},
{id:"h09", topic:"subjunctive", front:"would rather + S + ___ và would rather + ___ ?", back:"would rather + S + V QKĐ (would rather you didn't smoke); would rather + V nguyên mẫu nếu cùng chủ ngữ."},
{id:"h10", topic:"subjunctive", front:"If I were you dùng khi nào?", back:"Đưa lời khuyên: If I were you, I would apologize. — 'were' cho mọi ngôi."},
{id:"h11", topic:"subjunctive", front:"Các tính từ cũng gây giả định cách?", back:"It is essential/important/necessary that + S + (should) V nguyên mẫu."},
{id:"h12", topic:"subjunctive", front:"Phân biệt wish / It's time / suggest that?", back:"wish = ước viển vông; It's time = đến lúc phải làm mà chưa; suggest that = đề nghị NGƯỜI KHÁC làm. Cả 3 đều dùng V2/QKĐ."},
/* Used to */
{id:"h13", topic:"used-to", front:"used to + V vs be used to + V-ing?", back:"used to + V = thói quen quá khứ (giờ thôi); be used to + V-ing = ĐÃ QUEN (hiện tại)."},
{id:"h14", topic:"used-to", front:"get used to + ___ nghĩa gì?", back:"+ V-ing/N = DẦN QUEN (quá trình): You will get used to the weather here."},
{id:"h15", topic:"used-to", front:"Phủ định & nghi vấn của used to?", back:"didn't USE to + V / Did + S + USE to + V? (sau did mất chữ d)."},
{id:"h16", topic:"used-to", front:"'This knife is used to cut bread' nghĩa gì?", back:"Đây là BỊ ĐỘNG của use (được dùng để) — khác hẳn be used to V-ing (quen với)."},
{id:"h17", topic:"used-to", front:"Sửa: 'I used to living here.'", back:"SAI. Đúng: I USED TO LIVE here (từng sống) hoặc I AM USED TO LIVING here (quen với việc sống) — chọn theo nghĩa."},
{id:"h18", topic:"used-to", front:"Họ nhà use: useful, user, usage nghĩa gì?", back:"useful = hữu ích; useless = vô dụng; user = người dùng; usage = cách dùng (ngôn ngữ); a used car = xe cũ."},
/* So/Neither */
{id:"h19", topic:"so-neither", front:"Đồng tình khẳng định nói 2 cách?", back:"So + trợ từ + S / S + trợ từ + too: I like tea → So do I / I do, too."},
{id:"h20", topic:"so-neither", front:"Đồng tình phủ định nói 2 cách?", back:"Neither/Nor + trợ từ + S / S + trợ từ n't + either: I can't swim → Neither can I / I can't, either."},
{id:"h21", topic:"so-neither", front:"'I went to the cinema.' — đồng tình thế nào?", back:"So DID I (QKĐ → did). Chọn trợ từ theo câu gốc!"},
{id:"h22", topic:"so-neither", front:"So I do khác So do I thế nào?", back:"So DO I = tôi cũng vậy (đảo trợ từ). So I DO = (đúng vậy) tôi có làm thật — KHÔNG phải đồng tình."},
{id:"h23", topic:"so-neither", front:"too và either đứng ở đâu?", back:"Cuối câu: khẳng định + too; phủ định + either: I do, too / I don't, either."},
{id:"h24", topic:"so-neither", front:"Chọn trợ từ đồng tình theo nguyên tắc nào?", back:"Copy từ câu gốc: be → be; can/will/have → chính nó; động từ thường → do/does/did."},
/* Not until */
{id:"h25", topic:"not-until", front:"3 cấu trúc nhấn 'mãi đến khi'?", back:"Not until + mốc, DID + S + V (đảo) / It was not until + mốc + THAT + S + V (không đảo) / Only when + S + V, did + S + V."},
{id:"h26", topic:"not-until", front:"'It was not until... that' có đảo ngữ không?", back:"KHÔNG! Mệnh đề that giữ trật tự khẳng định: It was not until midnight that the baby stopped crying."},
{id:"h27", topic:"not-until", front:"Not until ở đầu câu thì vế sau thế nào?", back:"PHẢI đảo trợ động từ: Not until 10 o'clock DID SHE arrive."},
{id:"h28", topic:"not-until", front:"Only when/Only after ở đầu câu?", back:"Mệnh đề sau đảo trợ từ: Only after the film started DID I REALIZE..."},
{id:"h29", topic:"not-until", front:"Đổi: 'She didn't smile until the end.'", back:"Not until the end DID SHE SMILE / It was not until the end THAT SHE SMILED."},
{id:"h30", topic:"not-until", front:"Bẫy lớn của nhóm này?", back:"Đảo thiếu trợ từ (Not until... she arrived ✗) hoặc đảo nhầm ở mệnh đề that (that did she arrive ✗)."},
/* Linking */
{id:"h31", topic:"linking", front:"Nhóm THÊM Ý: liên từ và từ chuyển tiếp?", back:"and, not only... but also / moreover, in addition, furthermore, besides."},
{id:"h32", topic:"linking", front:"Nhóm TƯƠNG PHẢN?", back:"but, although, whereas / however, nevertheless, on the other hand, in contrast."},
{id:"h33", topic:"linking", front:"Nhóm KẾT QUẢ?", back:"so / therefore, as a result, consequently, thus."},
{id:"h34", topic:"linking", front:"Liên từ (but, so) khác từ chuyển tiếp (however) thế nào?", back:"Liên từ nối 2 mệnh đề trong 1 câu; từ chuyển tiếp bắt đầu câu mới, thường theo sau là dấu phẩy."},
{id:"h35", topic:"linking", front:"Lỗi Việt-glish: 'Although..., but...' đúng hay sai?", back:"SAI! Chỉ chọn 1: Although it was cold, we went out. / It was cold, but we went out."},
{id:"h36", topic:"linking", front:"however vs how ever?", back:"however = tuy nhiên (nối câu); how ever = làm sao mà (cảm thán: How ever did you find me?)."},
/* Errors */
{id:"h37", topic:"errors", front:"Lỗi hòa hợp hay gài nhất?", back:"Cụm giới từ che chủ ngữ: The list of items IS (chủ ngữ là the list). Neither of + N nhiều + V SÍT."},
{id:"h38", topic:"errors", front:"Những cặp TRÙNG LẶP hay gặp?", back:"return back, repeat again, collaborate together, enter into — nghĩa bị thừa, bỏ 1 từ."},
{id:"h39", topic:"errors", front:"advice vs advise?", back:"advice (danh từ - lời khuyên) / advise (động từ - khuyên). Đồng âm khác từ loại!"},
{id:"h40", topic:"errors", front:"Chiến lược quét lỗi 4 bước?", back:"1) Động từ chia (thì, hòa hợp) 2) Cặp giới từ (depend ON...) 3) Dạng từ (V-ing sau giới từ) 4) Từ trùng nghĩa."},
{id:"h41", topic:"errors", front:"despite of đúng hay sai?", back:"SAI — despite KHÔNG có of. In spite OF mới có of."},
{id:"h42", topic:"errors", front:"Thứ tự ưu tiên loại lỗi khi thi?", back:"Hòa hợp & thì chiếm nhiều nhất → quét động từ TRƯỚC, từ loại/mạo từ sau."},
/* Signals */
{id:"h43", topic:"signals", front:"Bộ hiệu lệnh HTHT?", back:"already, just, ever, never, yet, so far, recently, lately + since/for."},
{id:"h44", topic:"signals", front:"Bộ hiệu lệnh QKHT?", back:"by the time + QKĐ, before, after (2 hành động QK — việc trước chia QKHT)."},
{id:"h45", topic:"signals", front:"Bộ hiệu lệnh tương lai hoàn thành?", back:"BY + mốc tương lai: by 2030, by next month, by the time you arrive."},
{id:"h46", topic:"signals", front:"'at this time tomorrow' → thì nào?", back:"TƯƠNG LAI TIẾP DIỄN: will be V-ing."},
{id:"h47", topic:"signals", front:"Khi 2 dấu hiệu xung đột (have seen + yesterday)?", back:"Theo dấu hiệu MẠNH hơn — mốc xác định (yesterday, in 2010, ago) → QK đơn thắng."},
{id:"h48", topic:"signals", front:"always đứng giữa can/will... nghĩa gì?", back:"Phàn nàn (tiếp diễn): He is always losing his keys! — chứ không phải HTĐ."}
];
