import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { motion } from 'motion/react'

import { useCart } from '../context/CartContext'

import plant4 from '../assets/plant4.jpg'
import plant5 from '../assets/plant5.jpg'

function FeatureCard(data) {
  const image = data.image
  const title = data.title
  const description = data.description
  const price = data.price
  const reverse = data.reverse
  const id = data.id

  const { addToCart } = useCart()

  const [added, setAdded] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [isImageZoomed, setIsImageZoomed] = useState(false)

  const direction = reverse
    ? 'md:flex-row-reverse'
    : 'md:flex-row'

  const wrap =
    'glass-card bg-black/10 backdrop-blur-xl border border-white/10'

  const actionBtn =
    'border border-white/70 rounded-[14px] bg-transparent backdrop-blur-sm'

  function handleAddToCart() {
    addToCart({
      id,
      image,
      title,
      description,
      price
    })

    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 1500)
  }

  function handlePopupAddToCart() {
    handleAddToCart()
    setShowDetails(false)
  }

  function handleCloseDetails() {
    setShowDetails(false)
    setIsImageZoomed(false)
  }

  return (
    <>
      {/* Plant Feature Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`
          ${wrap}
          px-5
          py-0
          flex
          flex-col
          ${direction}
          items-center
          justify-between
          max-w-[1450px]
          mx-auto
          w-full
          gap-10 lg:gap-12
          overflow-visible
          rounded-[60px] lg:rounded-[120px]
        `}
      >
        {/* Plant Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative overflow-visible">
          <img
            src={image}
            alt={title}
            className="
              w-[280px] sm:w-[420px] lg:w-[550px]
              max-w-none
              object-contain
              relative
              z-20
              lg:-ml-[40px]
              -mt-[60px] lg:-mt-[120px]
              drop-shadow-[0_30px_40px_rgba(0,0,0,0.65)]
            "
          />
        </div>

        {/* Plant Details */}
        <div className="w-full md:w-1/2 text-center md:text-left pl-0 lg:pl-6">
          <h3 className="text-[24px] sm:text-[28px] lg:text-[34px] font-bold mb-5 leading-tight text-white">
            {title}
          </h3>

          <p className="text-gray-300 text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.7] mb-8 max-w-[650px]">
            {description}
          </p>

          <p className="text-3xl md:text-4xl font-bold mb-10">
            Rs. {price}/-
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6">
            {/* Explore Button */}
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className={`
                ${actionBtn}
                w-[160px] sm:w-[210px]
                h-[60px]
                text-white
                text-[28px]
                font-normal
                transition-colors
                hover:bg-white/10
              `}
            >
              Explore
            </button>

            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              aria-label={`Add ${title} to cart`}
              title={added ? 'Added to cart' : 'Add to cart'}
              className={`
                ${actionBtn}
                w-[82px]
                h-[60px]
                flex
                items-center
                justify-center
                hover:bg-white/10
                transition-colors
              `}
            >
              {added ? (
                <span className="text-sm text-green-300">
                  Added!
                </span>
              ) : (
                <ShoppingBag className="w-8 h-8 text-white stroke-[1.8]" />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Plant Details Popup */}
      {showDetails && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
          onClick={handleCloseDetails}
          role="presentation"
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#1A2818] text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`plant-title-${id}`}
          >
            {/* Close Icon */}
            <button
              type="button"
              onClick={handleCloseDetails}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-3xl text-white transition hover:bg-white hover:text-black"
              aria-label="Close plant details"
            >
              ×
            </button>

            <div className="grid md:grid-cols-2">
              {/* Popup Image */}
              <div className="h-64 md:h-full md:min-h-[400px] overflow-hidden bg-black/20">
                <img
                  src={image}
                  alt={title}
                  onClick={() => setIsImageZoomed(true)}
                  className="h-full w-full object-cover cursor-zoom-in transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Popup Content */}
              <div className="flex flex-col justify-center p-6 md:p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-green-300">
                  FloraVision Collection
                </p>

                <h2
                  id={`plant-title-${id}`}
                  className="mb-4 text-2xl font-semibold md:text-3xl"
                >
                  {title}
                </h2>

                <p className="mb-6 leading-7 text-white/70">
                  {description}
                </p>

                <p className="mb-6 text-2xl font-bold text-green-300">
                  Rs. {price}/-
                </p>

                {/* Popup Add to Cart */}
                <button
                  type="button"
                  onClick={handlePopupAddToCart}
                  className="flex items-center justify-center gap-3 rounded-full bg-green-400 px-6 py-3 font-semibold text-black transition hover:bg-green-300"
                >
                  <ShoppingBag size={20} />
                  Add to Cart
                </button>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={handleCloseDetails}
                  className="mt-3 rounded-full border border-white/30 px-6 py-3 transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Zoomed Image */}
      {showDetails && isImageZoomed && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setIsImageZoomed(false)}
          role="presentation"
        >
          {/* Close Zoom Button */}
          <button
            type="button"
            onClick={() => setIsImageZoomed(false)}
            className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20"
            aria-label="Close zoomed image"
          >
            ×
          </button>

          {/* Zoomed Image */}
          <img
            src={image}
            alt={title}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw] cursor-zoom-out rounded-xl object-contain"
          />
        </div>
      )}
    </>
  )
}

export default function TrendingPlants() {
  const cards = [
    {
      id: 'trending-plant-5',
      image: plant5,
      title: 'For Your Desks Decorations',
      description:
        'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
      price: 599
    },
    {
      id: 'trending-plant-4',
      image: plant4,
      title: 'For Your Desks Decorations',
      description:
        'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.',
      price: 399,
      reverse: true
    }
  ]

  return (
    <section
      id="trending"
      className="pt-0 pb-24 -mt-1 relative overflow-visible"
    >
      {/* Section Heading */}
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 text-center mb-10">
        <h2 className="relative inline-block font-['Quicksand'] text-white text-[30px] sm:text-[40px] lg:text-[52px] font-medium tracking-tight">
          <span
            className="
              absolute
              -left-10
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              border-l-[5px]
              border-t-[5px]
              border-[#8b7a2b]
              rounded-tl-2xl
            "
          />

          Our Trendy plants

          <span
            className="
              absolute
              -right-10
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              border-r-[5px]
              border-t-[5px]
              border-[#8b7a2b]
              rounded-tr-2xl
            "
          />
        </h2>
      </div>

      {/* Plant Cards */}
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-24 lg:gap-32">
        {cards.map((item) => (
          <FeatureCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  )
}