export default function Banner() {
  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] overflow-hidden rounded-2xl shadow-lg">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1500"
        alt="Travel Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Khám Phá Thế Giới Cùng Chúng Tôi
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mt-3 max-w-2xl drop-shadow-md">
          Hành trình tuyệt vời đang chờ bạn. Ưu đãi lên đến 40% cho tour Quốc Tế & Nội Địa.
        </p>
        <button className="mt-6 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-lg transition">
          Đặt Tour Ngay
        </button>
      </div>
    </div>
  );
}