# 🚗 AI-Powered Car Showroom Website

Đồ án tốt nghiệp: Website showroom ô tô tích hợp AI chatbot gợi ý xe,
công cụ tính giá lăn bánh / trả góp và đặt lịch lái thử.

> Mô hình O2O (Online-to-Offline): khách tìm hiểu và được tư vấn trên website,
> sau đó đặt lịch đến showroom để lái thử và mua xe trực tiếp.

## 🛠️ Công nghệ
- **Frontend:** React (Vite), Tailwind CSS, React Router
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **AI:** Gemini API (Function Calling)
- **Khác:** JWT, Cloudinary, Nodemailer, Leaflet, Chart.js

## 📁 Cấu trúc thư mục
- `client/` – Giao diện người dùng (React)
- `server/` – API backend (Express)
- `docs/` – Tài liệu, sơ đồ, báo cáo tiến độ hàng tuần

## 📅 Tiến độ
| Tuần | Nội dung | Trạng thái |
|---|---|---|
| 1 | Khởi tạo dự án, thiết kế, giao diện tĩnh | 🔄 Đang làm (server + client đã chạy)|

## 👤 Tác giả
- Sinh viên: (Nguyễn Quang Minh) – (MSSV: GCH221127)
- Giảng viên hướng dẫn: (Tên thầy/cô)

🚀 Hướng dẫn chạy dự án

Server

cd server
npm install
# Tạo file .env theo mẫu .env.example
npm run dev

Client

cd client
npm install
npm run dev
Mở http://localhost:5173