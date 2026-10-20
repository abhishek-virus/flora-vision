import plant1 from './assets/plant1.jpg'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrendingPlants from './components/TrendingPlants'
import ProductGrid from './components/ProductGrid'
import Reviews from './components/Reviews'
import O2Section from './components/O2Section'
import About from './components/About'
import Contact from './components/Contact'

import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

import Cart from './pages/Cart';
import Checkout from './pages/Checkout'

// Homepage
function Home() {
  const bgStyle = {
    backgroundImage: `url(${plant1})`
  }
  return (
    <div className="min-h-screen w-full overflow-x-hidden">

      {/* Top Area */}
      <div
        id="home"
        className="bg-cover bg-center bg-no-repeat"
        style={bgStyle}
      >
        <Navbar />
        <Hero />

        <main>
          <TrendingPlants />
        </main>
      </div>

      {/* Other Sections */}
      <main>
        <div className="bg-[#1A2818]/70 w-full">

          <ProductGrid />
          <Reviews />
          <O2Section />
          <About />
          <Contact />

        </div>
      </main>
    </div>
  )
}
// Main App with Routing
export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/checkout" element={<Checkout />} />

    </Routes>
  )
}