import plant1 from './assets/plant1.jpg'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrendingPlants from './components/TrendingPlants'

import ProductGrid from './components/ProductGrid'
import Reviews from './components/Reviews'
import O2Section from './components/O2Section'
import Footer from './components/Footer'

export default function App(){

  const bgStyle = {
    backgroundImage: `url(${plant1})`
  }

  return (

    <div className="min-h-screen w-full overflow-x-hidden">

      {/* top area */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={bgStyle}
      >

        <Navbar />

        <Hero />

        <main>
          <TrendingPlants />
        </main>

      </div>

      {/* other sections */}
      <main>

        <div className="bg-[#1A2818]/70 w-full">

          <ProductGrid />

          <Reviews />

          <O2Section />

          <Footer />

        </div>

      </main>

    </div>

  )

}