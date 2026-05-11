import { Play } from 'lucide-react'
import { motion } from 'motion/react'
import Button from './Button'
import plant2 from '../assets/plant2.jpg'

export default function Hero() {

  return (

    <section className="relative min-h-screen pt-32 pb-0 overflow-hidden bg-transparent">

      <div className="absolute inset-0 bg-balck/40 z-0"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >

            <h1 className="text-[42px] sm:text-[56px] lg:text-[72px] lg:whitespace-nowrap leading-none font-bold text-white tracking-[-2px]">
              Earth’s Exhale
            </h1>

            <p className="text-gray-300 text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] max-w-[620px] font-medium mt-4 mb-12">
              “Earth Exhale” symbolizes the purity and vitality of the Earth’s natural environment and its essential role in sustaining life.
            </p>

            <div className="flex flex-wrap items-center gap-6">

              <button className="border border-white/70 rounded-lg w-[130px] h-[46px] text-gray-400 text-[16px] font-normal bg-transparent">
                Buy Now
              </button>

              <button className="flex items-center gap-4 group">

                <span className="w-20 h-20 flex items-center justify-center rounded-full border border-white/40">

                  <Play className="w-7 h-7 fill-white text-white ml-1" />

                </span>

                <span className="font-['Quicksand'] text-white text-[18px] font-medium tracking-normal">
                  Live Demo...
                </span>

              </button>

            </div>

            {/*Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 max-w-xs glass-card p-5 rounded-2xl shadow-2xl animate-bounce-slow"
            >

              <div className="flex items-center gap-4 mb-3">

                <img
                  alt="Ronnie Hamill"
                  className="rounded-full w-12 h-12 border-2 border-white/20"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgCkYIka_3Ewj8m0TJFuz6ZU9rIYWkk_mhiDqwIOVSURBUavQQCwNPqvdYwILoqvdq3yWinYqz35-Wy4Fbl6xrDbD4hxA5vCGnFp1Xg0jJOuQmKElRBuEFzg8ecvxk0bnONj2iAE_yBB3yEGqz9nALUzJrs0tk5HXRQJ0wB5L1Uhwi-TfK9QmkEef30uOHjY-7qUb7xG4rJ_iBDCEhTFzVkEFJ4CGWED20nrDXlyUVbpIRIzbfvO6GkUXa-PIKGHFO4tQE363W_Q"
                />

                <div>

                  <h4 className="text-sm font-bold">
                    Ronnie Hamill
                  </h4>

                  <div className="flex text-yellow-400 text-xs mt-0.5">
                    ★★★★★
                  </div>

                </div>

              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
              </p>

            </motion.div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:block hidden relative pt-[120px]"
          >

            {/*Image */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none">

              <img
                alt="Aglaonema plant"
                className="w-[260px] sm:w-[300px] lg:w-[340px] h-auto max-w-none object-contain drop-shadow-[0_45px_65px_rgba(0,0,0,0.9)]"
                src={plant2}
              />

            </div>

            {/* Card */}
            <div
              className="glass-card bg-green/0 backdrop-blur-xl border border-white/10 pt-[240px] px-6 pb-6 w-[380px] h-[450px] flex flex-col relative overflow-visible"
              style={{
                clipPath:
                  'path("M45 0 Q90 0 120 12 Q190 38 260 12 Q290 0 335 0 Q380 0 380 45 L380 405 Q380 450 335 450 L45 450 Q0 450 0 405 L0 45 Q0 0 45 0 Z")',
              }}
            >

              <p className="text-[15px] text-gray-300 mb-1 font-normal">
                Indoor Plant
              </p>

              <div className="flex items-center justify-between mb-4">

                <h3 className="text-[22px] font-light leading-tight">
                  Aglaonema plant
                </h3>

                <span className="text-gray-400 text-[34px] leading-none mr-2">
                  ›
                </span>

              </div>

              <div className="flex items-center justify-between mt-2 pr-2">

                <button className="border border-white/70 rounded-lg w-[130px] h-[46px] text-gray-400 text-[16px] font-normal bg-transparent">
                  Buy Now
                </button>

              </div>

              <div className="flex justify-center mt-5 gap-2">

                <span className="w-4 h-1 rounded-full bg-white"></span>

                <span className="w-1 h-1 rounded-full bg-white/40"></span>

                <span className="w-1 h-1 rounded-full bg-white/40"></span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  )

}