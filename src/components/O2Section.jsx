
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ChevronLeft,
  ChevronRight,
  X,
  ShoppingBag,
} from 'lucide-react'

import { useCart } from '../context/CartContext'
import plant3 from '../assets/plant3.jpg'
import plant5 from '../assets/plant5.jpg'
import plant8 from '../assets/plant8.jpg'
import SectionTitle from './SectionTitle'

const plants = [
  {
    id: 1,
    image: plant3,
    name: 'Aglaonema Plant',
    title: 'We Have Small And Best O2 Plants Collection’s',
    description:
      'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',
    benefits:
      'Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.',
    care: 'Place in bright, indirect light. Water when the top layer of soil feels dry.',
    price: 599,
  },
  {
    id: 2,
    image: plant5,
    name: 'Plantain Lilies',
    title: 'Bring Natural Freshness Into Your Living Space',
    description:
      'Plantain lilies, also known as Hostas, are admired for their lush and decorative foliage. They bring a calming natural touch to indoor and outdoor spaces.',
    benefits:
      'Like other green plants, they perform photosynthesis in suitable light and contribute to a refreshing, nature-inspired environment.',
    care: 'Grow in partial shade and keep the soil consistently moist but not waterlogged.',
    price: 499,
  },
  {
    id: 3,
    image: plant8,
    name: 'Sansevieria Plant',
    title: 'A Perfect Green Companion For Your Home',
    description:
      'Sansevieria, commonly known as the Snake Plant, is loved for its upright leaves and elegant appearance. It fits beautifully into modern interiors.',
    benefits:
      'Its hardy nature and low-maintenance care requirements make it a popular choice for homes and offices.',
    care: 'Allow the soil to dry between waterings. It tolerates low light but grows best in indirect light.',
    price: 699,
  },
]

export default function O2Section() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [isImageZoomed, setIsImageZoomed] = useState(false)

  const { addToCart } = useCart()
  const currentPlant = plants[currentIndex]

  function nextPlant() {
    setCurrentIndex((prev) => (prev + 1) % plants.length)
  }

  function previousPlant() {
    setCurrentIndex((prev) => (prev - 1 + plants.length) % plants.length)
  }

  function selectPlant(index) {
    setCurrentIndex(index)
  }

  function handleCloseDetails() {
    setShowDetails(false)
    setIsImageZoomed(false)
  }

  function handleAddToCart() {
    addToCart({
      id: `o2-plant-${currentPlant.id}`,
      image: currentPlant.image,
      title: currentPlant.name,
      description: currentPlant.description,
      price: currentPlant.price,
    })

    handleCloseDetails()
  }

  return (
    <section id="best-o2" className="py-24 bg-flora-green/0">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center mb-16">
        <SectionTitle>Our Best O2</SectionTitle>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card bg-green backdrop-blur-xl border border-white/10 rounded-[60px] px-6 sm:px-10 lg:px-20 py-10 lg:py-14 flex flex-col lg:flex-row items-center justify-between overflow-visible gap-10 lg:gap-0"
        >
          {/* Plant Image */}
          <div className="w-full lg:w-[55%] h-[420px] lg:h-[500px] flex justify-center items-center relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPlant.id}
                src={currentPlant.image}
                alt={currentPlant.name}
                initial={{ opacity: 0, x: -35, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 35, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="max-w-none w-[340px] sm:w-[500px] lg:w-[750px] object-contain drop-shadow-2xl lg:-mt-[120px] lg:-ml-[100px] z-20 relative"
              />
            </AnimatePresence>
          </div>

          {/* Plant Information */}
          <div className="w-full lg:w-[48%] text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPlant.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-white text-[24px] sm:text-[28px] lg:text-[30px] leading-[1.05] font-semibold mb-8 lg:mb-10 max-w-[700px]">
                  {currentPlant.title}
                </h3>

                <p className="text-gray-300 text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.7] mb-8 max-w-[760px]">
                  {currentPlant.description}
                </p>

                <p className="text-gray-300 text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.7] mb-12 max-w-[760px]">
                  {currentPlant.benefits}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Explore and Slider Controls */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="border border-white/70 rounded-lg w-[130px] h-[46px] text-gray-400 text-[16px] font-normal bg-transparent transition-colors hover:bg-white/10"
              >
                Explore
              </button>

              <div className="flex items-center gap-8">
                <button
                  type="button"
                  onClick={previousPlant}
                  aria-label="Previous plant"
                  className="text-white/40 hover:text-white transition"
                >
                  <ChevronLeft size={38} strokeWidth={1.5} />
                </button>

                <span className="text-white font-semibold tracking-[3px]">
                  <span className="text-[22px]">
                    {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[14px] opacity-70">
                    /{String(plants.length).padStart(2, '0')}
                  </span>
                </span>

                <button
                  type="button"
                  onClick={nextPlant}
                  aria-label="Next plant"
                  className="text-white/40 hover:text-white transition"
                >
                  <ChevronRight size={38} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Slider Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {plants.map((plant, index) => (
            <button
              key={plant.id}
              type="button"
              onClick={() => selectPlant(index)}
              aria-label={`Show plant ${index + 1}`}
              aria-current={currentIndex === index ? 'true' : undefined}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index
                  ? 'bg-white'
                  : 'bg-white/20 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Plant Details Popup */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseDetails}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${currentPlant.name} details`}
              initial={{ opacity: 0, scale: 0.9, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#1A2818] text-white shadow-2xl"
            >
              {/* Close Details */}
              <button
                type="button"
                onClick={handleCloseDetails}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-white hover:text-black"
                aria-label="Close plant details"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Clickable Popup Image */}
                <div className="h-64 md:h-full md:min-h-[400px] overflow-hidden bg-black/20">
                  <img
                    src={currentPlant.image}
                    alt={currentPlant.name}
                    onClick={() => setIsImageZoomed(true)}
                    className="h-full w-full object-cover cursor-zoom-in transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Popup Content */}
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-green-300">
                    FloraVision Collection
                  </p>

                  <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                    {currentPlant.name}
                  </h2>

                  <p className="mb-5 leading-7 text-white/70">
                    {currentPlant.description}
                  </p>

                  <h4 className="mb-2 font-semibold">Benefits</h4>
                  <p className="mb-5 leading-7 text-white/70">
                    {currentPlant.benefits}
                  </p>

                  <h4 className="mb-2 font-semibold">Plant Care</h4>
                  <p className="mb-5 leading-7 text-white/70">
                    {currentPlant.care}
                  </p>

                  <p className="mb-6 text-2xl font-bold text-green-300">
                    Rs. {currentPlant.price}/-
                  </p>

                  {/* Add to Cart */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex items-center justify-center gap-3 rounded-full bg-green-400 px-6 py-3 font-semibold text-black transition hover:bg-green-300"
                  >
                    <ShoppingBag size={20} />
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    onClick={handleCloseDetails}
                    className="mt-3 rounded-full border border-white/30 px-6 py-3 transition hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Zoomed Image — same behavior as TrendingPlants */}
      <AnimatePresence>
        {showDetails && isImageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setIsImageZoomed(false)}
          >
            {/* Close Zoom Button */}
            <button
              type="button"
              onClick={() => setIsImageZoomed(false)}
              className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20"
              aria-label="Close zoomed image"
            >
              <X size={28} />
            </button>

            {/* Zoomed Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={currentPlant.image}
              alt={currentPlant.name}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] max-w-[95vw] cursor-zoom-out rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
