import { motion } from 'motion/react';
import SectionTitle from './SectionTitle';

function TestimonialCard({ avatar, name, review, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass-card bg-black/10 backdrop-blur-xl border border-white/10 p-5 sm:p-6 lg:p-8 w-full max-w-[92vw] sm:max-w-full min-h-[320px] sm:min-h-[340px] lg:min-h-[380px] hover:bg-white/[0.08] transition-colors duration-300 relative overflow-visible mx-auto"
        style={{
          clipPath:
            'path("M40 0 C90 0 120 18 200 18 C280 18 310 0 360 0 C385 0 400 15 400 40 L400 360 C400 385 385 400 360 400 L40 400 C15 400 0 385 0 360 L0 40 C0 15 15 0 40 0 Z")',
          borderRadius: '40px'
        }}
    >
      <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
        <img 
          alt={name} 
          className="rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border border-white/10" 
          src={avatar} 
        />
        <div>
          <h4 className="font-bold text-[16px] sm:text-[17px] lg:text-lg">{name}</h4>
          <div className="text-yellow-400 flex text-[15px] mt-1 tracking-[3px]">★★★★★</div>
        </div>
      </div>
      <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-gray-400 leading-[1.5] font-medium">
        "{review}"
      </p>
    </motion.div>
  );
}

export default function Reviews() {
  const reviews = [
    {
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqtKTv2d8JgJf87TF6NE3j96cMFE6Hg4gWUlHdRL7qX88H-0XyexMvF7h13hn8ZxxSCv4QlHmX857wnWo-lRnkHVMMYOEkr1B7yuM0qn1ncaqp76wfOwFpiTD4eqSop4YhgXBHCB4tcZafQEMOT0l0JbKNkvcxKFsIVnm_NsITJczH5tqp5tfOXE41ihA796TTLiwc11gisAx5f4teJ1vNYw9JiBir7t7AreYHkMf0syFgQWzBKmMSK5X2D7vc2MN_O3K8HJO-ZQ",
      name: "Shelly Russel",
      review: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!"
    },
    {
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsps1BTrlDsZIV51-TMhjJvol-1Q8hTsv0HvDOrQdmQR4ebqJY9un8hWNv0i0fhqBzV0ckhe7kl4nO7mgst5t7WOXqVJ1zRXqWSmsA6-LAbaZI3by4NsYGhWHGuhIPwM9WwRhoKwEpwUnZlIeJ0XYO-SHS7HQoKnjSITdFPz6kF-m4cBDbytdBInmX4hVxaf8okUaOpBJ73enbuOl9C6vS03rO-aXvrOLGSq6I3ZYRAvR9CmrlC8_jb-YR4zHCXeHNhKQAB8TAUw",
      name: "Lula Rolfson",
      review: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."
    },
    {
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm7h5uZIIJ6wMa7rw_fpUPNBeHcA06UUFABuA0JRtVQe9WBnQeHBGTv3oUwrArA-6MFbZlFBl11F0a8sQQD-biECl0z5woYaojhMrKCu4x3qiFgzpFWELytELBQLcGGyK6pwBrDNe4-02ZSGAmZA2Wqx-H0na5VfgS1RuaJukU4raR5Hil8JF4Jx8kQaifkzfCv_YmsNpO-TrM5HAjoK7ONdubJJn_bOBqAP99IgNXPhT5ZnvqzQggjghcJM-LTwNBQU9X1dt3dg",
      name: "Carol Huels",
      review: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-flora-green/0 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center mb-12 sm:mb-16 lg:mb-20">
        <SectionTitle>
          Customer Review
        </SectionTitle>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-10 justify-items-center">
        {reviews.map((review, idx) => (
          <TestimonialCard key={idx} index={idx} {...review} />
        ))}
      </div>
    </section>
  );
}
