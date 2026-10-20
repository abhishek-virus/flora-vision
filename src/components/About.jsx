import { motion } from "motion/react";

import plant9 from "../assets/plant9.jpg";

export default function Footer() {
  const benefits = [
    {
      number: "01",
      title: "Curated Plant Collection",
      description:
        "Discover beautiful plants selected to bring natural beauty into your space.",
    },
    {
      number: "02",
      title: "Nature-Inspired Living",
      description:
        "Create a calmer and more refreshing environment with greenery.",
    },
    {
      number: "03",
      title: "Find Your Perfect Plant",
      description:
        "Explore plants that complement your home, workspace, and lifestyle.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#142116] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center sm:mb-20"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-[#a5c99a]">
            Discover Our Story
          </p>

          <h2 className="font-['Quicksand'] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About FloraVision
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Bringing nature closer to you, one plant at a time.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#a5c99a]">
              A Little More About Us
            </p>

            <h3 className="mb-6 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Make Room for
              <span className="text-[#a5c99a]"> Nature.</span>
            </h3>

            <p className="mb-5 text-base leading-8 text-gray-300 sm:text-lg">
              At FloraVision, we believe every space deserves a touch of
              nature. Plants bring beauty, freshness, and a sense of calm
              to our everyday surroundings.
            </p>

            <p className="mb-10 text-base leading-8 text-gray-300 sm:text-lg">
              Our goal is to help you discover plants that complement
              your home, workspace, and lifestyle, making it easier to
              bring greenery into your daily life.
            </p>

            {/* Benefits */}
            <div className="space-y-5">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="flex gap-4 border-b border-white/10 pb-5 last:border-b-0"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#a5c99a]/40 text-sm font-semibold text-[#a5c99a]">
                    {benefit.number}
                  </span>

                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-white">
                      {benefit.title}
                    </h4>

                    <p className="text-sm leading-6 text-gray-400 sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Plant Image */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            {/* Decorative glow */}
            <div className="absolute inset-10 rounded-full bg-[#6d995c]/20 blur-[90px]" />

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl sm:rounded-[45px] sm:p-4">
              <img
                src={plant9}
                alt="Beautiful green plant representing FloraVision"
                className="h-[400px] w-full rounded-[28px] object-cover sm:h-[520px] sm:rounded-[35px]"
                loading="lazy"
              />

              {/* Image Overlay */}
              <div className="absolute inset-x-3 bottom-3 rounded-b-[28px] bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pt-20 sm:inset-x-4 sm:bottom-4 sm:rounded-b-[35px] sm:p-8 sm:pt-24">
                <p className="text-sm font-medium uppercase tracking-[3px] text-[#c3e2b5]">
                  Live Naturally
                </p>

                <h4 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  Grow Your Green Space
                </h4>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -right-2 top-8 rounded-2xl border border-white/15 bg-[#213625]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-5 sm:px-6 sm:py-4">
              <p className="text-sm font-medium text-white">
                A Touch of Nature
              </p>

              <p className="mt-1 text-xs text-[#a5c99a]">
                For Every Space
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Brand Line */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            FloraVision — Bringing Nature Closer to You.
          </p>
        </div>
      </div>
    </section>
  );
}