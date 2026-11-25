// Nạp các thư viện cần dùng
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { notFound, errorHandler } from './middlewares/errorHandler.js';

// Tạo ứng dụng Express (giống như dựng lên một nhà bếp)
const app = express();

// ===== MIDDLEWARE: các "trạm kiểm tra" mọi yêu cầu đều đi qua theo thứ tự =====
// 1. Cho phép client (React) ở địa chỉ CLIENT_URL được gọi vào server
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
// 2. Đọc dữ liệu JSON mà client gửi lên (ví dụ form đăng ký)
app.use(express.json());
// 3. In ra Terminal mỗi yêu cầu gửi tới, để dễ theo dõi và gỡ lỗi
app.use(morgan('dev'));

// ===== ROUTE: "món ăn" đầu tiên trong thực đơn =====
// Khi ai đó truy cập GET /api/health -> trả về tình trạng server
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    data: {
      // readyState = 1 nghĩa là đã kết nối database thành công
      database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
      timestamp: new Date().toISOString(),
    },
  });
});

// ===== XỬ LÝ LỖI: luôn đặt ở CUỐI CÙNG =====
app.use(notFound);     // Không tìm thấy đường dẫn -> lỗi 404
app.use(errorHandler); // Bắt mọi lỗi và trả về JSON thống nhất

export default app;