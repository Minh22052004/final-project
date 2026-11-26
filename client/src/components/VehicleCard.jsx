import { useState } from 'react';
import { Link } from 'react-router';
import { Car, Fuel, Users, Settings2 } from 'lucide-react';
import { formatPrice } from '../utils/format.js';

// "Props" = dữ liệu truyền từ bên ngoài vào component, giống tham số của hàm
function VehicleCard({ vehicle }) {
  // Ghi nhớ ảnh có tải lỗi không, để hiện ô thay thế
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Ảnh xe */}
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        {imageError ? (
          <div className="flex h-full items-center justify-center text-slate-400">
            <Car size={64} strokeWidth={1.2} />
          </div>
        ) : (
          <img
            src={vehicle.image}
            alt={vehicle.name}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        )}
      </div>

      {/* Thông tin */}
      <div className="p-5">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">{vehicle.brand}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
            {vehicle.bodyType}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900">{vehicle.name}</h3>
        <p className="mt-1 text-slate-600">
          Giá từ <span className="text-xl font-bold text-red-600">{formatPrice(vehicle.priceFrom)}</span>
        </p>

        <ul className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
          <li className="flex items-center gap-1"><Users size={16} /> {vehicle.seats} chỗ</li>
          <li className="flex items-center gap-1"><Fuel size={16} /> {vehicle.fuelType}</li>
          <li className="flex items-center gap-1"><Settings2 size={16} /> {vehicle.transmission}</li>
        </ul>

        <Link
          to={`/vehicles/${vehicle.id}`}
          className="mt-5 block rounded-lg bg-slate-900 py-2.5 text-center font-medium text-white transition hover:bg-blue-600"
        >
          Xem chi tiết
        </Link>
      </div>
    </article>
  );
}

export default VehicleCard;