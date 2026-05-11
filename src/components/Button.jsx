import { motion } from "motion/react"
export default function Button(p){

  let cls =
    "px-10 py-4 rounded-full font-bold transition-all duration-300 "

  cls +=
    "active:scale-95 text-sm uppercase tracking-widest "

  if(p.variant === "glass"){
    cls += "glass-btn text-white "
  }

  else{
    cls +=
      "bg-white text-black hover:bg-green-100 shadow-lg shadow-white/5 "
  }

  if(p.className){
    cls += p.className
  }

  return (

    <motion.button

      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}

      className={cls}

      {...p}
    >

      {p.children}

    </motion.button>

  )
}