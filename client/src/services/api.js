import axios from 'axios';

// Tạo một "người phục vụ" axios với cấu hình dùng chung cho mọi lần gọi API
const api = axios.create({
  // Mọi đường dẫn sẽ tự động được nối thêm "/api" phía trước
  baseURL: import.meta.env.VITE_API_URL || '/api',
  // Cho phép gửi kèm cookie (sẽ cần cho đăng nhập ở tuần 2)
  withCredentials: true,
});

export default api;