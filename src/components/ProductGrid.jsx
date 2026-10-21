
import { ShoppingBag } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

import { useCart } from '../context/CartContext'
import SectionTitle from './SectionTitle'

import plant3 from '../assets/plant3.jpg'
import plant5 from '../assets/plant5.jpg'
import plant6 from '../assets/plant6.jpg'
import plant7 from '../assets/plant7.jpg'
import plant8 from '../assets/plant8.jpg'
import plant9 from '../assets/plant9.jpg'
import { html } from 'framer-motion/m'

function PlantCard(props) {
  const {
    id,
    image,
    title,
    description,
    price,
    index,
    imageWidth,
    imagePosition = '-85px'
  } = props

  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative w-full flex justify-center"
    >
      {/* Plant Image */}
      <div
        className="pointer-events-none absolute left-1/2 z-50 -translate-x-1/2"
        style={{
    top:
      typeof window !== 'undefined' && window.innerWidth < 640
        ? `calc(${imagePosition} - 25px)`
        : imagePosition
  }}
      >
        <img
          src={image}
          alt={title}
         
          style={{
            width: `${imageWidth}px`,
            minWidth: `${imageWidth}px`,
            maxWidth: 'none',
            height: 'auto',
            display: 'block',
            flexShrink: 0,
            
          }}
          className="object-contain drop-shadow-[0_45px_65px_rgba(0,0,0,0.9)]"
        />
      </div>

      {/* Plant Card */}
      <div
        className="glass-card bg-green/0 backdrop-blur-xl border border-white/10 pt-[180px] sm:pt-[200px] lg:pt-[220px] pb-[20px] w-[92vw] sm:w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[360px] h-[430px] sm:h-[450px] lg:h-[470px] flex flex-col relative overflow-visible"
        style={{
          clipPath:
            typeof window !== 'undefined' && window.innerWidth < 640
              ? 'none'
              : 'path("M40 0 Q80 0 100 10 Q155 35 210 10 Q230 0 270 0 Q360 0 360 40 L360 390 Q360 430 320 430 L40 430 Q0 430 0 390 L0 40 Q0 0 40 0 Z")',
          borderRadius:
            typeof window !== 'undefined' && window.innerWidth < 640
              ? '40px'
              : ''
        }}
      >
        <h3 className="text-white text-[22px] sm:text-[24px] lg:text-[26px] font-normal leading-tight mb-3 px-6 sm:px-10 text-left">
          {title}
        </h3>

        <p className="text-gray-300 text-[13px] sm:text-[14px] leading-[1.5] mb-16 px-6 sm:px-10 text-left max-w-[290px]">
          {description}
        </p>

        <div className="flex items-center justify-between absolute bottom-10 left-10 right-8">
          <span className="text-white text-[24px] sm:text-[26px] lg:text-[30px] font-light">
            ₹{price}
          </span>

          <button
            type="button"
            onClick={handleAddToCart}
            aria-label={`Add ${title} to cart`}
            title={added ? 'Added to cart' : 'Add to cart'}
            className="border border-white/40 rounded-[12px] w-[52px] h-[52px] flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            {added ? (
              <span className="text-xs text-green-300">
                Added!
              </span>
            ) : (
              <ShoppingBag className="w-6 h-6 text-white/80 stroke-[1.8]" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function TopSellingPlants() {
  const plants = [
    {
      id: 'top-plant-3',
      image: plant3,
      title: 'Aglaonema plant',
      description:
        'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care.',
      price: 300,
      imageWidth: 300,
      imagePosition: '-65px'
    },
    {
      id: 'top-plant-5',
      image: plant5,
      title: 'Plantain Lilies',
      description:
        'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.',
      price: 380,
      imageWidth: 300,
      imagePosition: '-65px'
    },
    {
      id: 'top-plant-6',
      image: plant6,
      title: 'Cactus',
      description:
        'It is known for their ability to thrive in arid environments and their unique, often prickly appearances.',
      price: 259,
      imageWidth: 250,
      imagePosition: '-105px'
    },
    {
      id: 'top-plant-7',
      image: plant7,
      title: 'Swiss cheese Plant',
      description:
        'It is a popular tropical houseplant known for its distinctive, perforated leaves.',
      price: 400,
      imageWidth: 250,
      imagePosition: '-120px'
    },
    {
      id: 'top-plant-8',
      image: plant8,
      title: 'Sansevieria plant',
      description:
        'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
      price: 450,
      imageWidth: 300,
      imagePosition: '-120px'
    },
    {
      id: 'top-plant-9',
      image: plant9,
      title: 'Agave plant',
      description:
        'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves.',
      price: 359,
      imageWidth: 250,
      imagePosition: '-130px'
    }
  ]

  return (
    <section
      id="top-selling"
      className="py-24 bg-flora-green/0"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center mb-24 sm:mb-32 lg:mb-45">
        <SectionTitle>
          Our Top Selling Plants
        </SectionTitle>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-24 sm:gap-y-28 gap-x-6 lg:gap-x-14 justify-items-center">
        {plants.map((plant, idx) => (
          <PlantCard
            key={plant.id}
            index={idx}
            {...plant}
          />
        ))}
      </div>
    </section>
  )
}
