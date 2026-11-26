import { Link } from 'react-router';
import { CarFront, MapPin, Phone, Mail } from 'lucide-react';
import ApiStatus from '../ApiStatus.jsx';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Link to="/" className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <CarFront className="text-blue-500" size={28} />
            CarShowroom
          </Link>
          <p className="text-sm leading-relaxed">
            Tìm hiểu xe trực tuyến, nhận tư vấn từ trợ lý AI và đặt lịch lái thử
            tại hệ thống showroom của chúng tôi.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Khám phá</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/vehicles" className="hover:text-white">Danh sách xe</Link></li>
            <li><Link to="/compare" className="hover:text-white">So sánh xe</Link></li>
            <li><Link to="/calculator" className="hover:text-white">Tính giá lăn bánh</Link></li>
            <li><Link to="/showrooms" className="hover:text-white">Hệ thống showroom</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Liên hệ</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16} /> 123 Đường ABC, Hà Nội</li>
            <li className="flex items-center gap-2"><Phone size={16} /> 1900 1234</li>
            <li className="flex items-center gap-2"><Mail size={16} /> contact@carshowroom.vn</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm md:flex-row">
          <p>© {currentYear} CarShowroom · Đồ án tốt nghiệp</p>
          <ApiStatus />
        </div>
      </div>
    </footer>
  );
}

export default Footer;