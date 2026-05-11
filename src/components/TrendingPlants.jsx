import { ShoppingBag } from 'lucide-react'
import { motion } from 'motion/react'

import SectionTitle from './SectionTitle'
import Button from './Button'

import plant4 from '../assets/plant4.jpg'
import plant5 from '../assets/plant5.jpg'

function FeatureCard(data){

  const image = data.image
  const title = data.title
  const description = data.description
  const price = data.price
  const reverse = data.reverse

  const direction = reverse
    ? 'md:flex-row-reverse'
    : 'md:flex-row'

  const wrap =
    'glass-card bg-black/10 backdrop-blur-xl border border-white/10'

  const actionBtn =
    'border border-white/70 rounded-[14px] bg-transparent backdrop-blur-sm'

  return (

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

      {/* plant image */}
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

      {/* content */}
      <div className="w-full md:w-1/2 text-center md:text-left pl-0 lg:pl-6">

        <h3 className="text-[24px] sm:text-[28px] lg:text-[34px] font-bold mb-5 leading-tight text-white">
          {title}
        </h3>

        <p className="text-gray-300 text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.7] mb-8 max-w-[650px]">
          {description}
        </p>

        <p className="text-3xl md:text-4xl font-bold mb-10">
          {price}
        </p>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6">

          <button
            className={`
              ${actionBtn}
              w-[160px] sm:w-[210px]
              h-[60px]
              text-white
              text-[28px]
              font-normal
            `}
          >
            Explore
          </button>

          <button
            className={`
              ${actionBtn}
              w-[82px]
              h-[60px]
              flex
              items-center
              justify-center
            `}
          >
            <ShoppingBag className="w-8 h-8 text-white stroke-[1.8]" />
          </button>

        </div>

      </div>

    </motion.div>
  )

}

export default function TrendingPlants(){

  const cards = [
    {
      image: plant5,
      title: 'For Your Desks Decorations',
      description:
        'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
      price: 'Rs. 599/-'
    },
    {
      image: plant4,
      title: 'For Your Desks Decorations',
      description:
        'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.',
      price: 'Rs. 399/-',
      reverse: true
    }
  ]

  return (

    <section className="pt-0 pb-24 -mt-1 relative overflow-visible">

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

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-24 lg:gap-32">

        {cards.map((item, i) => (
          <FeatureCard
            key={i}
            {...item}
          />
        ))}

      </div>

    </section>
  )

}