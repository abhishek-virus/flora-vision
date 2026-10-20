import { motion } from 'motion/react'

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
                  className="rounded-full w-14 h-14 border-2 border-white/20"
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



        </div>

      </div>

    </section>

  )

}