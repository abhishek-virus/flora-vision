import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#071d16] text-white px-6 md:px-16 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-3">
            Get in Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Contact Us
          </h2>

          <p className="text-gray-300 max-w-xl mb-12">
            Have questions about our plants or need help choosing the right
            plant for your space? We'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Mail className="text-green-400 mb-4" size={28} />

              <h3 className="text-xl font-semibold mb-2">Email</h3>

              <p className="text-gray-400">
                Contact us by email for any queries.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Phone className="text-green-400 mb-4" size={28} />

              <h3 className="text-xl font-semibold mb-2">Phone</h3>

              <p className="text-gray-400">
                Get in touch with our team for assistance.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <MapPin className="text-green-400 mb-4" size={28} />

              <h3 className="text-xl font-semibold mb-2">Location</h3>

              <p className="text-gray-400">
                We're here to help you grow your green space.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}