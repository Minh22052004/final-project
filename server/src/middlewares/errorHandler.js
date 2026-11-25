// Chạy khi không có route nào khớp với đường dẫn (ví dụ /api/abcxyz)
export const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error); // Chuyển lỗi xuống errorHandler bên dưới
};

// Middleware xử lý lỗi: Express nhận ra nó nhờ có ĐỦ 4 tham số (err, req, res, next)
// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  // Ưu tiên mã lỗi gắn sẵn trên err; nếu không có thì dùng mã đã đặt, mặc định 500 (lỗi server)
  const statusCode = err.statusCode || (res.statusCode !== 200 ? res.statusCode : 500);

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    // Chỉ hiện chi tiết lỗi (stack) khi đang lập trình, không lộ ra khi đã deploy
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};