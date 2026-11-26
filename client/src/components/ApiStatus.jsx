import { useEffect, useState } from 'react';
import api from '../services/api.js';

function ApiStatus() {
  // useState: tạo "biến có trí nhớ". Khi giá trị thay đổi, React tự vẽ lại giao diện
  const [status, setStatus] = useState('loading'); // 'loading' | 'ok' | 'error'
  const [database, setDatabase] = useState('');

  // useEffect với [] ở cuối: chạy MỘT LẦN ngay sau khi component hiện lên màn hình
  useEffect(() => {
    api
      .get('/health') // Gửi yêu cầu GET tới /api/health
      .then((response) => {
        // Thành công: response.data chính là JSON server trả về
        setStatus('ok');
        setDatabase(response.data.data.database);
      })
      .catch(() => {
        // Thất bại: server tắt hoặc lỗi mạng
        setStatus('error');
      });
  }, []);

  // Hiển thị theo từng trạng thái
  if (status === 'loading') {
    return <p className="text-gray-500">Đang kiểm tra server...</p>;
  }

  if (status === 'error') {
    return (
      <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-700">
        <span className="h-3 w-3 rounded-full bg-red-500"></span>
        Không kết nối được server
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">
      <span className="h-3 w-3 animate-pulse rounded-full bg-green-500"></span>
      Server đang hoạt động · Database: {database}
    </div>
  );
}

export default ApiStatus;