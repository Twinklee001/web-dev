# Tách JSX → HTML + CSS + JS — Walkthrough

## Tổng quan
Đã tách file `agri_track_frontend_demo (3).jsx` (605 dòng) thành 3 file riêng biệt tại `E:\Agri_Track`, sẵn sàng chạy Live Server.

## Cấu trúc file

| File | Vai trò | Kích thước |
|------|---------|------------|
| [index.html](file:///E:/Agri_Track/index.html) | Cấu trúc HTML + liên kết CSS/JS | ~230 dòng |
| [style.css](file:///E:/Agri_Track/style.css) | Animation CSS (thay thế framer-motion) | ~40 dòng |
| [script.js](file:///E:/Agri_Track/script.js) | Toàn bộ data + render dynamic content | ~240 dòng |

## Đối chiếu JSX → HTML/JS

| Section trong JSX | Vị trí HTML | Render bởi |
|---|---|---|
| Header (logo, search, bell, login) | `index.html` — static | HTML |
| Top Navigation (9 tabs) | `#top-nav-container` | JS |
| Quản Lý Lô Trồng (6 shortcuts) | `#shortcuts-container` | JS |
| Tích Hợp Dữ Liệu Thời Tiết (5 rows) | `#plot-status-container` | JS |
| Dashboard Tổng Quan (3 metric cards) | `#quick-stats-container` | JS |
| Insight Lô Trồng (3 items) | `#plot-insights-container` | JS |
| Nhật Ký Canh Tác (compose area) | `index.html` — static | HTML |
| Timeline Actions (3 pills) | `#timeline-actions-container` | JS |
| Hoạt Động Gần Đây (3 timeline items) | `#activity-timeline-container` | JS |
| Posts (2 bài viết + AI insight) | `#posts-container` | JS |
| Gợi Ý Chăm Sóc (3 news cards) | `#news-container` | JS |
| AI Chatbox Hỗ Trợ | `index.html` — static | HTML |
| Nhận Diện Sơ Bộ Bệnh Cây | `index.html` — static | HTML |
| Chứng Nhận Sản Phẩm (2 certs) | `#certifications-container` | JS |
| Truy Xuất QR Code | `index.html` — static | HTML |

## Dependencies (CDN)
- **Tailwind CSS** — `cdn.tailwindcss.com` (giữ nguyên Tailwind classes từ JSX)
- **Lucide Icons** — `unpkg.com/lucide@latest` (thay thế lucide-react)

## Xác minh

Đã mở file trực tiếp bằng browser và xác nhận tất cả sections render chính xác:

![Full page render](full_page_render_1774608565514.png)

![Dashboard close-up](dashboard_view_check_1774608581320.png)

## Cách chạy

