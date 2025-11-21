import Footer from '../components/Footer'
import Header from '../components/Header'
import Heading from '../components/Heading'
import TourCard from '../components/TourCard'
import Banner from '../components/banner'
import { useState } from 'react'

function Home() {
  const [tours, setTours] = useState([]);
  const [toursInternational, setToursInternational] = useState([]);

 const loadDomestic = () => {
  setTours([
    { id: 1, title: 'Tour Hà Nội', price: 3500000, image: 'https://picsum.photos/400/300?random=1' },
    { id: 2, title: 'Tour Sài Gòn', price: 4200000, image: 'https://picsum.photos/400/300?random=2' },
    { id: 3, title: 'Tour Đà Nẵng', price: 3900000, image: 'https://picsum.photos/400/300?random=3' },
  ]);
};

const loadInternational = () => {
  setToursInternational([
    { id: 101, title: 'Tour Thái Lan', price: 8900000, image: 'https://picsum.photos/400/300?random=11' },
    { id: 102, title: 'Tour Singapore – Malaysia', price: 12900000, image: 'https://picsum.photos/400/300?random=12' },
    { id: 103, title: 'Tour Hàn Quốc', price: 16800000, image: 'https://picsum.photos/400/300?random=13' },
    { id: 104, title: 'Tour Nhật Bản', price: 22500000, image: 'https://picsum.photos/400/300?random=14' },
  ]);
};

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Header />
      <Banner/>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={loadDomestic}
          className="px-6 py-2 bg-amber-400 font-semibold rounded-xl shadow-md hover:bg-amber-500 transition"
        >
          Load Tour Nội Địa
        </button>

        <button
          onClick={loadInternational}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition"
        >
          Load Tour Quốc Tế
        </button>
      </div>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 mt-6">
        <Heading title="Tour Nội Địa" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {tours.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 italic">
              Chưa có dữ liệu, nhấn Load Tour Nội Địa để xem
            </p>
          ) : (
            tours.map((tour) => (
              <TourCard key={tour.id} title={tour.title} image={tour.image} price={tour.price} />
            ))
          )}
        </div>
        <Heading title="Tour Quốc Tế" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 mb-10">
          {toursInternational.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 italic">
              Chưa có dữ liệu, nhấn Load Tour Quốc Tế để xem
            </p>
          ) : (
            toursInternational.map((tour) => (
              <TourCard key={tour.id} title={tour.title} image={tour.image} price={tour.price}  />
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
