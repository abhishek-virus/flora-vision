import logo from '../assets/logo.jpg'

import { motion } from 'motion/react'

import {
  Search,
  ShoppingBag,
  Menu,
  ChevronDown
} from 'lucide-react'

export default function Navbar(){

  return (

    <motion.nav
      initial={{ y:-100 }}
      animate={{ y:0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-transparent"
    >

      <div className="flex items-center gap-2">

        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
        />

        <span className="text-xl font-bold tracking-tight">
          FloraVision.
        </span>

      </div>

      <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm lg:text-base font-medium text-gray-300">

        <a href="#" className="hover:text-white transition-colors">
          Home
        </a>

        <div className="relative group">

          <button className="flex items-center gap-1 hover:text-white transition-colors">

            <span>Plants Type</span>

            <ChevronDown className="w-4 h-4" />

          </button>

        </div>

        <a href="#" className="hover:text-white transition-colors">
          More
        </a>

        <a href="#" className="hover:text-white transition-colors">
          Contact
        </a>

      </div>

      <div className="flex items-center gap-4 md:gap-6">

        <button className="hover:text-green-400 transition-colors p-2">

          <Search className="w-5 h-5" />

        </button>

        <button className="hover:text-green-400 transition-colors p-2">

          <ShoppingBag className="w-5 h-5" />

        </button>

        <button className="md:hidden p-2">

          <Menu className="w-6 h-6" />

        </button>

      </div>

    </motion.nav>

  )

}