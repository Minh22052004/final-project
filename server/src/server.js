// Dòng này PHẢI đứng đầu: nạp biến từ file .env trước khi các file khác dùng tới
import 'dotenv/config';
import app from './app.js';
import connectDB from './config/db.js';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB(); // 1. Kết nối database trước
  app.listen(PORT, () => {
    // 2. Kết nối xong mới mở cửa nhận yêu cầu
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
};

startServer();