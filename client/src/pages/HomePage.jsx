import { Link } from 'react-router';
import { Search, Bot, CalendarCheck, Calculator, ArrowRight } from 'lucide-react';
import VehicleCard from '../components/VehicleCard.jsx';
import { mockVehicles, bodyTypes } from '../data/mockVehicles.js';

// 3 bước của mô hình O2O: đây chính là "câu chuyện" của đồ án
const steps = [
  {
    icon: Search,
    title: '1. Tìm hiểu trực tuyến',
    description: 'Xem thông số, hình ảnh, so sánh các mẫu xe và tính giá lăn bánh ngay trên website.',
  },
  {
    icon: Bot,
    title: '2. Nhận tư vấn từ AI',
    description: 'Trợ lý AI phân tích nhu cầu, ngân sách và gợi ý mẫu xe phù hợp nhất với bạn.',
  },
  {
    icon: CalendarCheck,
    title: '3. Lái thử tại showroom',
    description: 'Đặt lịch lái thử trực tuyến, đến showroom và làm việc trực tiếp với tư vấn viên.',
  },
];

function HomePage() {
  return (
    <>
      {/* ===== HERO: phần đầu trang, gây ấn tượng ===== */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1 text-sm text-blue-200">
              <Bot size={16} /> Tích hợp trợ lý AI tư vấn chọn xe
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Tìm chiếc xe <span className="text-blue-400">phù hợp nhất</span> với bạn
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Khám phá các mẫu xe mới nhất, so sánh, tính chi phí lăn bánh và đặt lịch
              lái thử tại showroom chỉ trong vài phút.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/vehicles"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
              >
                Khám phá xe <ArrowRight size={18} />
              </Link>
              <Link
                to="/calculator"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold hover:bg-white/10"
              >
                <Calculator size={18} /> Tính giá lăn bánh
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TÌM THEO KIỂU DÁNG ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold text-slate-900">Tìm theo kiểu dáng</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {bodyTypes.map((type) => (
            <Link
              key={type.value}
              // Tuần 4: trang danh sách xe sẽ đọc ?bodyType=... để lọc sẵn
              to={`/vehicles?bodyType=${type.value}`}
              className="rounded-xl border border-slate-200 bg-white p-5 text-center transition hover:border-blue-500 hover:shadow-md"
            >
              <p className="text-lg font-bold text-slate-900">{type.label}</p>
              <p className="mt-1 text-sm text-slate-500">{type.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== XE NỔI BẬT ===== */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-slate-900">Xe nổi bật</h2>
          <Link to="/vehicles" className="flex items-center gap-1 font-medium text-blue-600 hover:underline">
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

      {/* ===== QUY TRÌNH 3 BƯỚC (O2O) ===== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Mua xe dễ dàng với 3 bước</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon; // Lấy component icon ra để dùng như một thẻ
              return (
                <div key={step.title} className="rounded-2xl bg-slate-50 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Icon size={32} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== KÊU GỌI HÀNH ĐỘNG (CTA) ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-blue-600 px-8 py-12 text-white md:flex-row">
          <div>
            <h2 className="text-3xl font-bold">Sẵn sàng trải nghiệm?</h2>
            <p className="mt-2 text-blue-100">Đặt lịch lái thử miễn phí tại showroom gần bạn nhất.</p>
          </div>
          <Link
            to="/showrooms"
            className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-blue-50"
          >
            Tìm showroom
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;