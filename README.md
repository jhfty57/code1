# 📚 GrammarLab THPT — Website học ngữ pháp tiếng Anh cấp THPT

Website học ngữ pháp tiếng Anh dành cho học sinh Trung học Phổ thông (lớp 10–12), xây dựng bằng HTML/CSS/JavaScript thuần — không cần build, không cần cài đặt gì.

## ✨ Tính năng

| Trang | Mô tả |
|---|---|
| 🏠 Trang chủ | Kế hoạch học hôm nay, chuỗi ngày học 🔥, tiến độ theo chủ đề |
| 🧠 Phương pháp | 8 phương pháp học tập khoa học và cách website áp dụng từng phương pháp |
| 📖 Bài học | 16 chủ đề đầy đủ theo chương trình lớp 10–12, mỗi bài có công thức, bảng, ví dụ, mẹo ghi nhớ, lỗi thường gặp và mục tự kiểm tra (Feynman) |
| 🃏 Flashcards | 96 thẻ theo hệ thống Leitner — Spaced Repetition tự tính ngày ôn (1→2→4→8→16→30 ngày) |
| ✏️ Luyện tập | 128 câu trắc nghiệm có lời giải tức thì, chế độ đề tổng hợp xen kẽ chủ đề (Interleaving) |
| 📝 Đề thi thử | 20 câu / 20 phút, bấm giờ, bảng điều hướng câu, review chi tiết sau nộp bài |
| 📕 Sổ lỗi sai | Tự động ghi lại câu sai, xóa khi trả lời đúng (Mistake-driven learning) |
| 📊 Tiến độ | Độ vững từng chủ đề, lịch sử đề thi, độ chính xác |
| 🍅 Pomodoro | Đồng hồ tập trung 25/5/15 phút góc màn hình |

Giao diện phong cách "cute learning" lấy cảm hứng từ các nền tảng LMS hiện đại: mascot khủng long Grama, bảng màu pastel kem–xanh rêu, viền đậm và đổ bóng đặc (neo-brutalist), font Baloo 2. Hỗ trợ giao diện sáng/tối, lưu tiến độ tự động bằng `localStorage`, thiết kế responsive cho điện thoại.

## 🚀 Chạy

```bash
python3 -m http.server 8000
# mở http://localhost:8000
```

## 📂 Cấu trúc

```
index.html            — trang chính
css/style.css         — giao diện phong cách pastel "cute learning" (có dark mode)
js/app.js             — router, flashcards spaced repetition, luyện tập, đề thi, tiến độ, Pomodoro
js/data-lessons-*.js  — nội dung 16 bài học
js/data-questions-*.js— ngân hàng 128 câu hỏi + lời giải
js/data-flashcards.js — 96 thẻ ghi nhớ
img/                  — bộ ảnh minh họa (mascot khủng long Grama, hero banner, icon chủ đề) — tạo bằng AI
```
