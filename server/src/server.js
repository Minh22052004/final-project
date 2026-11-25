// Dòng này PHẢI đứng đầu: nạp biến từ file .env trước khi các file khác dùng tới
import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT || 5000;

// Bắt đầu "lắng nghe" yêu cầu ở cổng PORT
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});