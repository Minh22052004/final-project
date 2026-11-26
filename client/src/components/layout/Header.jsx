import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { CarFront, Menu, X } from 'lucide-react';

// Danh sách menu: muốn thêm mục mới chỉ cần thêm 1 dòng ở đây
const navItems = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Danh sách xe', to: '/vehicles' },
  { label: 'So sánh', to: '/compare' },
  { label: 'Tính giá lăn bánh', to: '/calculator' },
  { label: 'Hệ thống showroom', to: '/showrooms' },
];

// Hàm trả về class cho link: link của trang đang mở sẽ có màu xanh
const navLinkClass = ({ isActive }) =>
  `font-medium transition hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-slate-700'}`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu trên điện thoại: mở hay đóng

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <CarFront className="text-blue-600" size={28} />
          Car<span className="text-blue-600">Showroom</span>
        </Link>

        {/* Menu trên máy tính: ẩn trên điện thoại (hidden), hiện từ màn hình lớn (lg:flex) */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/login" className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
            Đăng nhập
          </Link>
        </div>

        {/* Nút mở menu trên điện thoại */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
          aria-label="Mở menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu trên điện thoại: chỉ hiện khi isMenuOpen = true */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-4 border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-lg bg-blue-600 px-5 py-2 text-center font-medium text-white"
          >
            Đăng nhập
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;