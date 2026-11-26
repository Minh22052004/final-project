import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-32 text-center">
      <h1 className="text-7xl font-bold text-blue-600">404</h1>
      <p className="text-lg text-gray-600">Trang bạn tìm không tồn tại.</p>
      {/* Link chuyển trang KHÔNG tải lại toàn bộ trang, nhanh hơn thẻ <a> */}
      <Link to="/" className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        Về trang chủ
      </Link>
    </section>
  );
}

export default NotFoundPage;