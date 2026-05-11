import plant3 from '../assets/plant3.jpg'

import { motion } from 'motion/react'

import {
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

import SectionTitle from './SectionTitle'
import Button from './Button'

export default function O2Section(){

  return (

    <section className="py-24 bg-flora-green/0">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center mb-16">

        <SectionTitle>
          Our Best o2
        </SectionTitle>

      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card bg-green backdrop-blur-xl border border-white/10 rounded-[60px] px-6 sm:px-10 lg:px-20 py-10 lg:py-14 flex flex-col lg:flex-row items-center justify-between overflow-visible gap-10 lg:gap-0"
        >

          <div className="w-full lg:w-[55%] flex justify-center items-center relative">

            <img
              src={plant3}
              alt="Plant"
              className="max-w-none w-[340px] sm:w-[500px] lg:w-[750px] object-contain drop-shadow-2xl lg:-mt-[120px] lg:-ml-[100px] z-20 relative"
            />

          </div>

          <div className="w-full lg:w-[48%] text-left">

            <h3 className="text-white text-[24px] sm:text-[28px] lg:text-[30px] leading-[1.05] font-semibold mb-8 lg:mb-10 max-w-[700px]">
              We Have Small And Best O2 Plants Collection’s
            </h3>

            <p className="text-gray-300 text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.7] mb-8 max-w-[760px]">
              Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
            </p>

            <p className="text-gray-300 text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.7] mb-12 max-w-[760px]">
              Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
            </p>

            <div className="flex items-center justify-between">

              <button className="border border-white/70 rounded-lg w-[130px] h-[46px] text-gray-400 text-[16px] font-normal bg-transparent">
                Explore
              </button>

              <div className="flex items-center gap-8">

                <button className="text-white/40 hover:text-white transition text-[42px] leading-none">
                  ‹
                </button>

                <span className="text-white font-semibold tracking-[3px]">

                  <span className="text-[22px]">
                    01
                  </span>

                  <span className="text-[14px] opacity-70">
                    /04
                  </span>

                </span>

                <button className="text-white/40 hover:text-white transition text-[42px] leading-none">
                  ›
                </button>

              </div>

            </div>

          </div>

        </motion.div>

        <div className="flex justify-center mt-12 gap-3">

          <span className="w-3 h-3 rounded-full bg-white"></span>

          <span className="w-3 h-3 rounded-full bg-white/20"></span>

          <span className="w-3 h-3 rounded-full bg-white/20"></span>

        </div>

      </div>

    </section>

  )

}