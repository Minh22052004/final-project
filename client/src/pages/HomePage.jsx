import ApiStatus from '../components/ApiStatus.jsx';

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-900 to-blue-900 px-4 text-center text-white">
      <h1 className="text-4xl font-bold md:text-6xl">🚗 Car Showroom</h1>
      <p className="max-w-xl text-lg text-slate-300">
        Tìm hiểu xe trực tuyến, nhận tư vấn từ AI và đặt lịch lái thử tại showroom.
      </p>
      <ApiStatus />
    </main>
  );
}

export default HomePage;