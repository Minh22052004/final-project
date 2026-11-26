import { Outlet } from 'react-router';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function MainLayout() {
  return (
    // flex-col + min-h-screen + flex-1: Footer luôn nằm dưới đáy kể cả khi trang ít nội dung
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <Outlet /> {/* Trang con được lắp vào đây */}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;