import { Routes, Route } from 'react-router';
import MainLayout from './components/layout/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import ComingSoonPage from './pages/ComingSoonPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <Routes>
      {/* Mọi trang bên trong đều dùng chung MainLayout (Header + Footer) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="vehicles" element={<ComingSoonPage title="Danh sách xe" />} />
        <Route path="vehicles/:id" element={<ComingSoonPage title="Chi tiết xe" />} />
        <Route path="compare" element={<ComingSoonPage title="So sánh xe" />} />
        <Route path="calculator" element={<ComingSoonPage title="Tính giá lăn bánh" />} />
        <Route path="showrooms" element={<ComingSoonPage title="Hệ thống showroom" />} />
        <Route path="login" element={<ComingSoonPage title="Đăng nhập" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;