import { Link } from 'react-router';
import { Construction } from 'lucide-react';

function ComingSoonPage({ title }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-4 py-32 text-center">
      <Construction size={64} className="text-amber-500" />
      <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
      <p className="text-slate-600">Tính năng đang được phát triển, vui lòng quay lại sau.</p>
      <Link to="/" className="text-blue-600 hover:underline">← Về trang chủ</Link>
    </section>
  );
}

export default ComingSoonPage;