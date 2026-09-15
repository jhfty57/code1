/* ===== LESSONS - Phần A: Chủ đề lớp 10 ===== */
const LESSONS_A = [
{
  id:"t-present", grade:10, icon:"⏰", level:"Cơ bản",
  title:"Các thì hiện tại (Present Tenses)",
  summary:"4 thì: hiện tại đơn, hiện tại tiếp diễn, hiện tại hoàn thành, hiện tại hoàn thành tiếp diễn — công thức, dấu hiệu nhận biết và cách phân biệt.",
  sections:[
    {t:"p", html:"Nhóm thì hiện tại là nền tảng quan trọng nhất của ngữ pháp THPT, xuất hiện trong hầu hết các câu hỏi của đề thi. Bạn cần nắm <b>công thức</b>, <b>dấu hiệu nhận biết</b> và <b>điểm khác nhau</b> giữa 4 thì dưới đây."},
    {t:"table", head:["Thì","Cấu trúc","Dấu hiệu nhận biết"], rows:[
      ["Hiện tại đơn","S + V(s/es) / S + do/does + not + V","always, usually, often, sometimes, rarely, never, every day/week..."],
      ["Hiện tại tiếp diễn","S + am/is/are + V-ing","now, right now, at present, at the moment, Look!, Listen!"],
      ["Hiện tại hoàn thành","S + have/has + V3/V-ed","already, just, ever, never, yet, since, for, recently, so far"],
      ["HT hoàn thành tiếp diễn","S + have/has + been + V-ing","all day, all week, for + khoảng thời gian, since + mốc thời gian"]
    ]},
    {t:"h", html:"1. Hiện tại đơn (Present Simple)"},
    {t:"formula", html:"(+) S + V(s/es) &nbsp;·&nbsp; (–) S + do/does + not + V &nbsp;·&nbsp; (?) Do/Does + S + V?"},
    {t:"p", html:"Dùng để diễn tả: (1) thói quen, sự lặp đi lặp lại; (2) chân lý, sự thật hiển nhiên; (3) lịch trình cố định (tàu, xe, phim)."},
    {t:"ex", items:[
      {en:"Water boils at 100 degrees Celsius.", vi:"Nước sôi ở 100 độ C."},
      {en:"She goes to school by bike every day.", vi:"Cô ấy đi học bằng xe đạp mỗi ngày."},
      {en:"The train leaves at 7 a.m.", vi:"Tàu rời đi lúc 7 giờ sáng."}
    ]},
    {t:"warn", html:"<b>Lỗi thường gặp:</b> Quên thêm <b>-s/-es</b> với ngôi thứ ba số ít (He, She, It). Ví dụ: <s>He play</s> → <b>He plays</b>. Với câu hỏi/phủ định đã có <b>does</b> thì động từ về nguyên mẫu: <s>Does she plays?</s> → <b>Does she play?</b>"},
    {t:"h", html:"2. Hiện tại tiếp diễn (Present Continuous)"},
    {t:"formula", html:"(+) S + am/is/are + V-ing &nbsp;·&nbsp; (–) S + am/is/are + not + V-ing &nbsp;·&nbsp; (?) Am/Is/Are + S + V-ing?"},
    {t:"p", html:"Dùng để diễn tả: (1) hành động đang xảy ra ngay lúc nói; (2) kế hoạch, sự sắp xếp có sẵn trong tương lai gần (I am meeting Lan tomorrow); (3) sự phàn nàn với <b>always</b> (He is always losing his keys!)."},
    {t:"ex", items:[
      {en:"Look! The children are playing football.", vi:"Nhìn kì! Bọn trẻ đang chơi đá bóng."},
      {en:"I am studying for my exam at the moment.", vi:"Tôi đang ôn thi vào lúc này."}
    ]},
    {t:"warn", html:"<b>Lỗi thường gặp:</b> Động từ chỉ <b>trạng thái, cảm xúc, nhận thức</b> (know, believe, love, hate, want, need, understand, own...) thường KHÔNG dùng ở dạng tiếp diễn. <s>I am knowing</s> → <b>I know</b>."},
    {t:"h", html:"3. Hiện tại hoàn thành (Present Perfect)"},
    {t:"formula", html:"(+) S + have/has + V3/V-ed &nbsp;·&nbsp; (–) S + have/has + not + V3 &nbsp;·&nbsp; (?) Have/Has + S + V3?"},
    {t:"p", html:"Dùng để diễn tả: (1) hành động xảy ra trong quá khứ nhưng còn liên quan/kết quả tới hiện tại; (2) kinh nghiệm cho đến hiện tại (ever/never); (3) hành động bắt đầu trong quá khứ và kéo dài tới hiện tại (since/for)."},
    {t:"ex", items:[
      {en:"I have just finished my homework.", vi:"Tôi vừa làm xong bài tập."},
      {en:"She has lived in Da Nang for ten years.", vi:"Cô ấy đã sống ở Đà Nẵng 10 năm (vẫn đang sống)."},
      {en:"Have you ever been to Japan?", vi:"Bạn đã từng đến Nhật Bản chưa?"}
    ]},
    {t:"tip", html:"<b>Mẹo phân biệt SINCE và FOR:</b> <b>since</b> + mốc thời gian (since 2010, since Monday, since I was a child) — <b>for</b> + khoảng thời gian (for 10 years, for two hours). Cặp câu hỏi kinh điển: <i>How long...?</i> luôn đi với thì hoàn thành."},
    {t:"h", html:"4. Hiện tại hoàn thành tiếp diễn (Present Perfect Continuous)"},
    {t:"formula", html:"S + have/has + been + V-ing"},
    {t:"p", html:"Nhấn mạnh <b>tính liên tục</b> của hành động bắt đầu trong quá khứ và vẫn đang tiếp diễn, thường thấy sự mệt mỏi, nỗ lực."},
    {t:"ex", items:[
      {en:"I have been waiting for you for two hours!", vi:"Tôi đã chờ bạn suốt 2 tiếng rồi!"},
      {en:"She has been studying all day, so she looks tired.", vi:"Cô ấy học cả ngày nên trông mệt."}
    ]},
    {t:"table", head:["Hiện tại hoàn thành vs. Quá khứ đơn"], rows:[
      ["Hiện tại hoàn thành","Quá khứ đơn"],
      ["Đi với since, for, already, yet, ever, so far","Đi với yesterday, last week, in 2010, ago"],
      ["Không nói rõ thời điểm xác định","Nêu rõ thời điểm xác định trong quá khứ"],
      ["Kết quả còn ở hiện tại","Sự việc đã chấm dứt"]
    ]},
    {t:"recall", html:"<b>🧠 Tự kiểm tra (phương pháp Feynman):</b> Hãy thử giải thích lại cho chính mình: <i>Tại sao câu 'I have seen that film last week' lại sai?</i> Nếu giải thích được bằng lời của bạn, bạn đã thực sự hiểu bài."}
  ]
},
{
  id:"t-past", grade:10, icon:"🕰️", level:"Cơ bản",
  title:"Các thì quá khứ (Past Tenses)",
  summary:"Quá khứ đơn, quá khứ tiếp diễn, quá khứ hoàn thành, quá khứ hoàn thành tiếp diễn — cách kết hợp khi kể chuyện.",
  sections:[
    {t:"table", head:["Thì","Cấu trúc","Dấu hiệu nhận biết"], rows:[
      ["Quá khứ đơn","S + V2/V-ed","yesterday, last night, ago, in 2015, when (một hành động xen vào)"],
      ["Quá khứ tiếp diễn","S + was/were + V-ing","at 8 p.m. yesterday, while, at this time yesterday"],
      ["Quá khứ hoàn thành","S + had + V3","before, after, by the time, when, as soon as (hai hành động trong quá khứ)"],
      ["QK hoàn thành tiếp diễn","S + had + been + V-ing","for + thời gian + before + quá khứ"]
    ]},
    {t:"h", html:"1. Quá khứ đơn (Past Simple)"},
    {t:"formula", html:"(+) S + V2/V-ed &nbsp;·&nbsp; (–) S + did + not + V &nbsp;·&nbsp; (?) Did + S + V?"},
    {t:"p", html:"Diễn tả hành động đã xảy ra và <b>chấm dứt hoàn toàn</b> tại một thời điểm xác định trong quá khứ. Chuỗi sự việc kế tiếp nhau trong chuyện kể cũng dùng QK đơn."},
    {t:"ex", items:[
      {en:"I visited my grandparents last weekend.", vi:"Tôi đã đi thăm ông bà cuối tuần trước."},
      {en:"She didn't go to the party because she was ill.", vi:"Cô ấy không đi dự tiệc vì bị ốm."}
    ]},
    {t:"h", html:"2. Quá khứ tiếp diễn (Past Continuous)"},
    {t:"formula", html:"S + was/were + V-ing"},
    {t:"p", html:"Diễn tả hành động <b>đang diễn ra</b> tại một thời điểm trong quá khứ, hoặc làm nền cho hành động khác xen vào. Công thức kết hợp kinh điển:"},
    {t:"formula", html:"While + S + was/were + V-ing, S + V2 (QK đơn) — hành động đang diễn ra thì hành động ngắn xen vào"},
    {t:"ex", items:[
      {en:"I was doing my homework when the phone rang.", vi:"Tôi đang làm bài thì điện thoại reo."},
      {en:"While we were having dinner, it started to rain.", vi:"Trong khi chúng tôi đang ăn tối thì trời bắt đầu mưa."}
    ]},
    {t:"h", html:"3. Quá khứ hoàn thành (Past Perfect)"},
    {t:"formula", html:"S + had + V3/V-ed"},
    {t:"p", html:"Diễn tả hành động xảy ra và hoàn thành <b>trước</b> một hành động khác cũng trong quá khứ (quá khứ của quá khứ)."},
    {t:"ex", items:[
      {en:"When I arrived, the train had already left.", vi:"Khi tôi đến, tàu đã rời đi rồi."},
      {en:"By the time we got to the cinema, the film had started.", vi:"Khi chúng tôi tới rạp thì phim đã bắt đầu rồi."}
    ]},
    {t:"tip", html:"<b>Mẹo ghi nhớ:</b> Trong 2 hành động quá khứ, hành động xảy ra <b>TRƯỚC</b> → QK hoàn thành (had + V3); hành động xảy ra <b>SAU</b> → QK đơn. Các từ hiệu lệnh: <b>by the time, before, after, when, as soon as</b>."},
    {t:"h", html:"4. QK hoàn thành tiếp diễn (Past Perfect Continuous)"},
    {t:"formula", html:"S + had + been + V-ing"},
    {t:"p", html:"Nhấn mạnh hành động đã diễn ra <b>liên tục trong một khoảng thời gian</b> trước một mốc quá khứ."},
    {t:"ex", items:[
      {en:"She had been working there for five years before she resigned.", vi:"Cô ấy đã làm việc đó 5 năm trước khi nghỉ việc."}
    ]},
    {t:"warn", html:"<b>Lỗi thường gặp:</b> Không lộn xộn thứ tự thời gian. Câu 'After he <s>has finished</s> his work, he went home' sai vì mốc là 'went home' (QK đơn) → phải dùng <b>had finished</b>."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Kể lại một chuyện đã xảy ra với bạn hôm qua trong 2–3 câu, dùng đúng 3 thì: QK đơn, QK tiếp diễn và QK hoàn thành. Đây là kỹ thuật <i>active recall</i> — nhớ lâu hơn gấp nhiều lần so với đọc lại."}
  ]
},
{
  id:"t-future", grade:10, icon:"🚀", level:"Cơ bản",
  title:"Các thì tương lai (Future Tenses)",
  summary:"Tương lai đơn (will), 'be going to', tương lai tiếp diễn, tương lai hoàn thành — khi nào dùng will, khi nào dùng going to.",
  sections:[
    {t:"table", head:["Thì","Cấu trúc","Nghĩa"], rows:[
      ["Tương lai đơn","S + will + V","Quyết định ngay lúc nói, dự đoán, lời hứa"],
      ["Be going to","S + am/is/are + going to + V","Kế hoạch đã định trước, dự đoán có dấu hiệu rõ"],
      ["Tương lai tiếp diễn","S + will + be + V-ing","Đang diễn ra tại mốc thời gian tương lai"],
      ["Tương lai hoàn thành","S + will + have + V3","Hoàn thành trước một mốc thời gian tương lai"]
    ]},
    {t:"h", html:"1. Tương lai đơn (will)"},
    {t:"formula", html:"(+) S + will + V &nbsp;·&nbsp; (–) S + will not (won't) + V &nbsp;·&nbsp; (?) Will + S + V?"},
    {t:"ex", items:[
      {en:"I think it will rain tonight.", vi:"Tôi nghĩ tối nay trời sẽ mưa. (dự đoán)"},
      {en:"Wait a minute — I'll help you with that bag!", vi:"Khoan đã — tôi sẽ giúp bạn xách cái túi! (quyết định ngay lúc nói)"},
      {en:"I promise I will call you tomorrow.", vi:"Tôi hứa sẽ gọi cho bạn ngày mai. (lời hứa)"}
    ]},
    {t:"h", html:"2. Be going to"},
    {t:"formula", html:"S + am/is/are + going to + V"},
    {t:"p", html:"Dùng khi kế hoạch đã <b>định sẵn trước khi nói</b>, hoặc dự đoán dựa trên <b>bằng chứng nhìn thấy được</b>."},
    {t:"ex", items:[
      {en:"We are going to visit Hue this summer. (đã lên kế hoạch)", vi:"Chúng tôi sẽ đi Huế mùa hè này."},
      {en:"Look at those black clouds — it's going to rain!", vi:"Nhìn những đám mây đen kìa — sắp mưa tới nơi rồi! (bằng chứng rõ)"}
    ]},
    {t:"tip", html:"<b>Mẹo chọn will hay going to:</b> Quyết định <b>ngay lúc nói</b> → will. Đã <b>chuẩn bị/định trước</b> → going to. Trong đề thi, gặp <i>'Look out!' 'Watch!' + bằng chứng</i> → chọn going to."},
    {t:"h", html:"3. Tương lai tiếp diễn"},
    {t:"formula", html:"S + will + be + V-ing (+ at 9 a.m. tomorrow / this time next week)"},
    {t:"ex", items:[
      {en:"At 8 o'clock tomorrow evening, I will be flying to Hanoi.", vi:"8 giờ tối mai, tôi sẽ đang trên chuyến bay tới Hà Nội."}
    ]},
    {t:"h", html:"4. Tương lai hoàn thành"},
    {t:"formula", html:"S + will + have + V3 (+ by 2030 / by the time... / by next month)"},
    {t:"p", html:"Từ hiệu lệnh quan trọng nhất là <b>BY + thời gian tương lai</b> (by 2030, by next year, by the time you arrive)."},
    {t:"ex", items:[
      {en:"By 2030, scientists will have found a cure for this disease.", vi:"Đến năm 2030, các nhà khoa học sẽ tìm ra thuốc chữa căn bệnh này."},
      {en:"She will have finished the report by Friday.", vi:"Cô ấy sẽ hoàn thành báo cáo trước thứ Sáu."}
    ]},
    {t:"warn", html:"<b>Lỗi thường gặp:</b> Mệnh đề thời gian (when, by the time, as soon as, until) ở tương lai KHÔNG dùng will. <s>When he will come</s> → <b>When he comes</b>, I will tell him."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Viết 1 câu kế hoạch cuối tuần của bạn bằng 'going to' và 1 câu dự đoán bằng 'will'. Bạn đang áp dụng ngay kỹ thuật học qua sản phẩm cá nhân (personalization) — kiến thức gắn với bản thân sẽ nhớ lâu hơn."}
  ]
},
{
  id:"nouns", grade:10, icon:"🧮", level:"Cơ bản",
  title:"Danh từ & Hạn định từ (Nouns & Quantifiers)",
  summary:"Danh từ đếm được/không đếm được, số nhiều bất quy tắc, some/any, much/many, a few/a little, số lượng từ.",
  sections:[
    {t:"p", html:"Trước khi dùng any hạn định từ, luôn tự hỏi: danh từ này <b>đếm được</b> hay <b>không đếm được</b>, ở dạng <b>số ít</b> hay <b>số nhiều</b>? Đây là chìa khóa giải quyết một lượng lớn câu hỏi đề thi."},
    {t:"h", html:"1. Số nhiều của danh từ"},
    {t:"table", head:["Quy tắc","Ví dụ"], rows:[
      ["Thông thường + s","book → books, pen → pens"],
      ["Kết thúc -s, -ss, -sh, -ch, -x, -z + es","bus → buses, box → boxes, watch → watches"],
      ["Phụ âm + y → đổi y thành ies","city → cities, baby → babies"],
      ["-f/-fe → ves (một số từ)","leaf → leaves, knife → knives"],
      ["Số nhiều bất quy tắc (học thuộc)","man → men, woman → women, child → children, foot → feet, tooth → teeth, mouse → mice, person → people"],
      ["Không đổi","sheep, deer, fish, aircraft, series, species"]
    ]},
    {t:"h", html:"2. Danh từ không đếm được thường gặp"},
    {t:"p", html:"<b>advice, information, news, furniture, luggage, equipment, homework, work (việc), money, traffic, weather, knowledge, progress, research</b> — luôn số ít, không thêm -s, không dùng a/an. Muốn đếm thì thêm cụm: a piece of advice / two pieces of information."},
    {t:"warn", html:"<b>Lỗi kinh điển trong đề thi:</b> <s>advices, informations, furnitures, homeworks</s> — tất cả đều SAI. These informations → <b>this information</b>."},
    {t:"h", html:"3. Bảng hạn định từ"},
    {t:"table", head:["","Đếm được (số nhiều)","Không đếm được"], rows:[
      ["Nhiều","many, a few, few, a large number of","much, a little, little, a great deal of"],
      ["Cả hai","a lot of / lots of, plenty of, some, any, most","a lot of / lots of, plenty of, some, any, most"]
    ]},
    {t:"p", html:"Phân biệt nghĩa: <b>a few/a little</b> = một ít, đủ dùng (nghĩa tích cực) — <b>few/little</b> = gần như không có (nghĩa tiêu cực). So sánh: 'I have a few close friends' (tôi có vài người bạn thân) vs 'I have few friends' (tôi gần như chẳng có bạn)."},
    {t:"h", html:"4. Some và Any"},
    {t:"p", html:"<b>some</b>: câu khẳng định, lời mời/đề nghị lịch sự (Would you like some tea?). <b>any</b>: câu phủ định, câu hỏi, và cả câu khẳng định với nghĩa <i>bất kỳ</i> (You can take any book you like)."},
    {t:"ex", items:[
      {en:"There are some eggs in the fridge.", vi:"Có vài quả trứng trong tủ lạnh."},
      {en:"Is there any milk left?", vi:"Còn lại sữa không?"},
      {en:"I don't have much time, just a little.", vi:"Tôi không có nhiều thời gian, chỉ một chút thôi."}
    ]},
    {t:"tip", html:"<b>Mẹo nhanh khi thi:</b> Gặp câu trống sau chỗ trống là danh từ, hãy đánh dấu: đếm được? số nhiều? → chọn ngay many/few/a few. Không đếm được → much/little/a little. Cả hai → a lot of/plenty of/some/any."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Liệt kê trong đầu 5 danh từ không đếm được hay gặp nhất mà không nhìn bài. Không nhớ nổi? Quay lại mục 2 và dùng flashcard ôn lại."}
  ]
},
{
  id:"pronouns", grade:10, icon:"🙋", level:"Cơ bản",
  title:"Đại từ (Pronouns)",
  summary:"Đại từ nhân xưng, sở hữu, phản thân, đại từ one/ones, another/other/others/the other(s) — dạng hay thi nhất.",
  sections:[
    {t:"table", head:["Chủ ngữ","Tân ngữ","Sở hữu (adj)","Đại từ sở hữu","Phản thân"], rows:[
      ["I","me","my","mine","myself"],
      ["you","you","your","yours","yourself"],
      ["he","him","his","his","himself"],
      ["she","her","her","hers","herself"],
      ["it","it","its","its","itself"],
      ["we","us","our","ours","ourselves"],
      ["they","them","their","theirs","themselves"]
    ]},
    {t:"p", html:"Vị trí cần nhớ: <b>đại từ chủ ngữ</b> đứng trước động từ (She works); <b>đại từ tân ngữ</b> đứng sau động từ/giới từ (give <b>me</b>, with <b>him</b>); <b>tính từ sở hữu</b> đứng trước danh từ (my book); <b>đại từ sở hữu</b> đứng một mình (this book is <b>mine</b>)."},
    {t:"h", html:"1. Đại từ phản thân (reflexive pronouns)"},
    {t:"p", html:"Dùng khi chủ ngữ và tân ngữ là cùng một người/vật, hoặc trong cụm: by myself = một mình, enjoy myself = vui vẻ, hurt myself = làm đau bản thân."},
    {t:"ex", items:[
      {en:"She looked at herself in the mirror.", vi:"Cô ấy nhìn chính mình trong gương."},
      {en:"I live by myself.", vi:"Tôi sống một mình."}
    ]},
    {t:"h", html:"2. Another / Other / Others / The other(s) — dạng cực kỳ hay thi"},
    {t:"table", head:["Từ","Nghĩa","Dùng"], rows:[
      ["another","một (cái) khác","+ danh từ số ít hoặc đứng một mình (mang nghĩa số ít)"],
      ["other + N","những... khác","danh từ số nhiều hoặc không đếm được"],
      ["others","những cái khác (không chỉ hết)","đứng một mình, thay cho other + N"],
      ["the other + N","cái còn lại (của một nhóm xác định)","khi còn lại một hoặc một số nhất định"],
      ["the others","những cái còn lại (tất cả)","đứng một mình"]
    ]},
    {t:"ex", items:[
      {en:"This shirt is too small. Can I try another one?", vi:"Áo này quá nhỏ. Tôi thử cái khác được không?"},
      {en:"Some students like maths; others prefer literature.", vi:"Vài bạn thích toán; những bạn khác thích văn hơn."},
      {en:"I have three pens. One is red, the others are blue.", vi:"Tôi có 3 cây bút. Một cây đỏ, những cây còn lại màu xanh."}
    ]},
    {t:"h", html:"3. One / Ones"},
    {t:"p", html:"<b>one</b> thay cho danh từ số ít đã nhắc tới; <b>ones</b> thay cho danh từ số nhiều. Ví dụ: I don't like this shirt. I want a bigger <b>one</b>."},
    {t:"tip", html:"<b>Mẹo:</b> Câu 'one... the other(s)' thường cho biết tổng số: <i>two pens → one... the other</i>; <i>many → some... others</i>. Đọc kỹ tổng số trong đề trước khi chọn đại từ."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Trong lớp bạn có 40 người. Hãy đặt một câu với 'some... others' miêu tả lớp bạn. Tự đặt câu là cách luyện sâu nhất!"}
  ]
},
{
  id:"articles", grade:10, icon:"🅰️", level:"Cơ bản",
  title:"Mạo từ (Articles: a, an, the)",
  summary:"Khi nào dùng a/an, khi nào dùng the, khi nào không dùng mạo từ — quy tắc trọn bộ cho đề thi.",
  sections:[
    {t:"h", html:"1. A / An"},
    {t:"p", html:"Dùng với danh từ <b>đếm được số ít</b> lần đầu nhắc đến hoặc mang nghĩa chung. Chọn a hay an dựa vào <b>ÂM đầu</b>, không phải chữ cái đầu:"},
    {t:"table", head:["Quy tắc","Ví dụ"], rows:[
      ["a + phụ âm","a book, a car, a university (/ju:/), a European"],
      ["an + nguyên âm (a,e,i,o,u)","an apple, an egg, an hour (/aʊə/, âm h câm), an MP3 file (/em/)"],
      ["an + âm /ʌ/, /aʊ/...","an umbrella, an honest man (h câm)"]
    ]},
    {t:"warn", html:"<b>Lỗi thường gặp:</b> <s>a university, an hour</s> là hai cái bẫy kinh điển — 'university' bắt đầu bằng âm /j/ nên dùng <b>a</b>; 'hour' có h câm nên dùng <b>an</b>. Nghe âm, đừng nhìn chữ!"},
    {t:"h", html:"2. THE"},
    {t:"p", html:"Dùng khi người nghe/đọc biết rõ đang nói về cái nào, hoặc vật xuất hiện lần thứ hai trở đi:"},
    {t:"list", items:[
      "Vật duy nhất, độc nhất: the sun, the moon, the earth, the sea",
      "Lần thứ hai nhắc tới: I saw a dog. The dog was very big.",
      "Trước danh từ có giới hạn bởi cụm từ/mệnh đề: the book (that) I bought yesterday",
      "Sông, dãy núi, đại dương, quần đảo: the Red River, the Himalayas, the Pacific",
      "Tòa nhà, khách sạn, rạp hát, bảo tàng: the Louvre, the Hilton",
      "Nhạc cụ: play the piano, the guitar",
      "Họ ở số nhiều chỉ cả gia đình: the Smiths",
      "Tính từ so sánh nhất, thứ tự: the best, the first",
      "Số tiền/đơn vị đo: by the kilo, 5 dollars a... (giá theo đơn vị)"
    ]},
    {t:"h", html:"3. Không dùng mạo từ (Ø)"},
    {t:"list", items:[
      "Tên riêng người, đất nước (phần lớn): Vietnam, Lan, Europe — nhưng the USA, the Philippines, the Netherlands",
      "Bữa ăn: have breakfast/lunch/dinner",
      "Thể thao: play football/tennis",
      "Danh từ trừu tượng, không đếm được nói chung: Love is important. / Water boils at 100°C.",
      "Trường học với nghĩa học tập: go to school, at school, in bed, at church, by car/bus/train",
      "Ngày, tháng, mùa (nói chung): in summer, on Monday"
    ]},
    {t:"ex", items:[
      {en:"She goes to school by bus every day.", vi:"Cô ấy đi học bằng xe buýt mỗi ngày."},
      {en:"The moon moves around the earth.", vi:"Mặt trăng quay quanh trái đất."}
    ]},
    {t:"tip", html:"<b>Mẹo hệ thống:</b> Nhớ theo 3 câu hỏi: (1) Đếm được số ít, lần đầu → a/an. (2) Cả hai đã biết rõ là cái nào → the. (3) Nghĩa chung chung, bữa ăn, thể thao, tên riêng → Ø. Gặp câu thi, đi qua 3 câu hỏi này trong 5 giây."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Điền mạo từ: '___ sun rises in ___ east and sets in ___ west.' (Đáp án: The / the / the — quy tắc thiên nhiên duy nhất + hướng địa lý)."}
  ]
},
{
  id:"gerund", grade:10, icon:"🔀", level:"Trung bình",
  title:"V-ing hay To-V (Gerund & Infinitive)",
  summary:"Động từ theo sau bởi V-ing hay to-V, các động từ đổi nghĩa khi đổi dạng — nhóm câu hỏi chiếm điểm lớn.",
  sections:[
    {t:"h", html:"1. Động từ + V-ing"},
    {t:"p", html:"<b>enjoy, avoid, mind, suggest, consider, practise, keep, finish, delay, admit, deny, imagine, miss, risk, involve, can't help, can't stand, be worth, look forward to, be used to, spend time, it's no use</b> + V-ing."},
    {t:"ex", items:[
      {en:"I enjoy reading books in my free time.", vi:"Tôi thích đọc sách lúc rảnh."},
      {en:"Would you mind opening the window?", vi:"Bạn vui lòng mở cửa sổ giúp nhé?"},
      {en:"She avoided answering my question.", vi:"Cô ấy né tránh việc trả lời câu hỏi của tôi."}
    ]},
    {t:"h", html:"2. Động từ + to-V"},
    {t:"p", html:"<b>want, decide, hope, plan, expect, promise, agree, offer, refuse, manage, fail, afford, learn, seem, would like, would rather, used to</b> + to-V. Sau tính từ cũng dùng to-V: <i>It is important to sleep early.</i>"},
    {t:"ex", items:[
      {en:"We decided to travel by train.", vi:"Chúng tôi quyết định đi bằng tàu hỏa."},
      {en:"He promised to help me with maths.", vi:"Cậu ấy hứa sẽ giúp tôi học toán."}
    ]},
    {t:"h", html:"3. Cả hai đều được (nghĩa không đổi)"},
    {t:"p", html:"<b>like, love, hate, prefer, start, begin, continue</b> + V-ing/to-V đều đúng: I like swimming = I like to swim."},
    {t:"h", html:"4. Đổi dạng thì ĐỔI NGHĨA — trọng tâm đề thi"},
    {t:"table", head:["Cụm","+ V-ing","+ to-V"], rows:[
      ["stop","ngừng hẳn làm gì (stop smoking = bỏ thuốc)","dừng lại ĐỂ làm việc khác (stop to smoke = dừng lại để hút thuốc)"],
      ["remember/forget","nhớ/quên việc ĐÃ làm (nhớ lại)","nhớ/quên việc PHẢI làm (chưa làm)"],
      ["regret","tiếc việc đã làm (I regret telling you)","tiếc phải báo tin xấu (I regret to tell you...)"],
      ["try","thử cách nào đó (try restarting the computer)","cố gắng hết sức (try to pass the exam)"],
      ["mean","có nghĩa là (= involve)","có ý định (intend)"],
      ["used to / be used to","be used to + V-ing = quen với việc","used to + V = đã từng (thói quen quá khứ)"]
    ]},
    {t:"ex", items:[
      {en:"Don't forget to lock the door! (chưa khóa)", vi:"Đừng quên khóa cửa nhé!"},
      {en:"I'll never forget visiting Ha Long Bay. (đã đi rồi)", vi:"Tôi sẽ không bao giờ quên chuyến đi Hạ Long."}
    ]},
    {t:"h", html:"5. Giới từ + V-ing"},
    {t:"p", html:"Sau MỌI giới từ (in, on, at, of, about, for, with, before, after, without...) phải dùng <b>V-ing</b>, không dùng to-V. Ví dụ: Thank you <b>for coming</b>. / He left <b>without saying</b> goodbye. / Are you interested <b>in joining</b> the club?"},
    {t:"warn", html:"<b>Bẫy hay gặp:</b> 'look forward to', 'be used to', 'object to', 'confess to' — chữ 'to' ở đây là GIỚI TỪ nên theo sau là V-ing: I look forward to <b>hearing</b> from you (không phải to hear)."},
    {t:"tip", html:"<b>Mẹo nhớ nhanh:</b> Nhóm V-ing có chữ MAGESK (Mind, Admit, Give up, Enjoy, Suggest, Keep) và các động từ 'cảm xúc – tránh né – trì hoãn'. Nhóm to-V là các động từ 'quyết định – mong muốn – hứa hẹn' (DHOPE: Decide, Hope, Offer, Plan, Expect)."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> 'She stopped ___ (talk) and started ___ (listen).' Hai chỗ trống phải khác nhau — nếu bạn tự điền đúng (talking / to listen), bạn đã nắm vững mục 4."}
  ]
},
{
  id:"adj-adv", grade:10, icon:"🎨", level:"Trung bình",
  title:"Tính từ & Trạng từ (Adjectives & Adverbs)",
  summary:"Phân biệt tính từ và trạng từ, -ed vs -ing, trật tự tính từ OSASCOMP — bộ ba dạng bài hay thi nhất.",
  sections:[
    {t:"h", html:"1. Tính từ vs Trạng từ"},
    {t:"table", head:["","Tính từ (Adjective)","Trạng từ (Adverb)"], rows:[
      ["Vị trí","trước danh từ; sau động từ liên kết (be, look, seem, feel, sound, taste, smell, become)","sau động từ thường; trước tính từ; đầu/cuối câu"],
      ["Nhiệm vụ","miêu tả DANH TỪ","miêu tả ĐỘNG TỪ, tính từ, cả câu"],
      ["Cách tạo","—","thường = tính từ + ly (quick → quickly, careful → carefully)"],
      ["Ngoại lệ","good → well, fast → fast, hard → hard, late → late, early → early"],
      ["Cặp dễ nhầm","hard (vất vả) / hardly (gần như không), late (muộn) / lately (gần đây), near (gần) / nearly (gần như), high (cao) / highly (rất, về mức độ)"]
    ]},
    {t:"ex", items:[
      {en:"She is a careful driver. (tính từ + danh từ)", vi:"Cô ấy là người lái xe cẩn thận."},
      {en:"She drives carefully. (trạng từ + động từ)", vi:"Cô ấy lái xe một cách cẩn thận."},
      {en:"The soup tastes delicious. (không phải deliciously!)", vi:"Món súp ngon miệng."}
    ]},
    {t:"h", html:"2. Trật tự tính từ OSASCOMP"},
    {t:"p", html:"Khi nhiều tính từ đứng trước danh từ, thứ tự là: <b>Ø Opinion – Size – Age – Shape – Color – Origin – Material – Purpose</b> (quan điểm → kích cỡ → tuổi → hình dáng → màu sắc → xuất xứ → chất liệu → mục đích)."},
    {t:"ex", items:[
      {en:"a beautiful big old round brown Vietnamese wooden dining table", vi:"một chiếc bàn ăn bằng gỗ Việt Nam, màu nâu, tròn, cũ, to, đẹp"},
      {en:"She wears a lovely small white cotton dress.", vi:"Cô ấy mặc chiếc váy cotton trắng nhỏ xinh xắn."}
    ]},
    {t:"tip", html:"<b>Mẹo ghi nhớ OSASCOMP:</b> Đọc như một từ: 'Ô-Sa-Sốp'. Không cần thuộc giải thích từng chữ — chỉ cần thuộc thứ tự 8 loại. Đề thi thường cho 2–3 tính từ kề nhau để kiểm tra."},
    {t:"h", html:"3. Tính từ -ED hay -ING"},
    {t:"table", head:["-ED (cảm nhận)","-ING (gây ra cảm xúc)"], rows:[
      ["bored = chán","boring = gây chán"],
      ["interested = thích thú","interesting = thú vị"],
      ["excited = phấn khích","exciting = thú vị, hồi hộp"],
      ["tired = mệt","tiring = gây mệt"],
      ["confused = bối rối","confusing = khó hiểu"],
      ["surprised = ngạc nhiên","surprising = gây ngạc nhiên"]
    ]},
    {t:"p", html:"Quy tắc: <b>-ed</b> miêu tả cảm xúc của <b>người/bạn</b> (I am bored), <b>-ing</b> miêu tả tính chất của <b>sự vật/hiện tượng</b> (The film is boring). Chỉ cần hỏi: ai cảm thấy? cái gì gây ra cảm xúc?"},
    {t:"warn", html:"<b>Lỗi thường gặp:</b> <s>I am interesting in music</s> → đúng phải là <b>I am interested in music</b> (người cảm thấy hứng thú)."},
    {t:"recall", html:"<b>🧠 Tự kiểm tra:</b> Sắp xếp: 'a / Chinese / nice / small / new / car' → thứ tự đúng là nice small new Chinese car? Kiểm tra bằng OSASCOMP (Opinion–Size–Age–Origin)."}
  ]
}
];
