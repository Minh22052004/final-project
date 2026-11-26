import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <Routes>
      {/* Đường dẫn "/" -> hiện trang chủ */}
      <Route path="/" element={<HomePage />} />
      {/* "*" nghĩa là MỌI đường dẫn còn lại -> trang 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;