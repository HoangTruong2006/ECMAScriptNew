import Footer from '../components/Footer'
import Header from '../components/Header'
import Heading from '../components/Heading'
import TourCard from '../components/TourCard'
import { useState } from 'react'
function Home() {
  const [tours, setTours] = useState([]);
  const loadData =() =>{
    setTours([
      {id:1, title:'Tour Ha Noi', image:'https://picsum.photos/400/300?random=1'},
      {id:2, title:'Tour Sai Gon', image:'https://picsum.photos/400/300?random=2'},
      {id:3, title:'Tour Da Nang', image:'https://picsum.photos/400/300?random=3'},
    ])
  }
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <button onClick={loadData} className='bg-amber-300'>
        Load Data
      </button>
      <main>
        {/* <h1 className="text-3xl text-blue-600 text-center font-bold border-b-2 border-b-orange-400 uppercase">
          Tour Nội Địa
        </h1> */}
        <Heading title="Tour Nội Địa" />
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
  {tours.map(tour => (
    <TourCard key={tour.id} title={tour.title} image={tour.image} />
  ))}
</div>

        <Heading title="Tour Quoc Te" />
      </main>

      <Footer />
    </div>
  )
}

export default Home
