"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-[#0B0B0F] text-white flex items-center justify-center overflow-hidden px-6 py-24">

      {/* Animated Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-700/30 blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/30 blur-[180px] rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Let’s Build <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Your Global Future</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Partner with us to unlock international education pathways and strategic opportunities.
          </p>

          {/* Info Cards */}
          <div className="mt-10 space-y-6">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <MapPin className="text-purple-400" />
              <p className="text-gray-300">Gurugram · Sector 11 · India</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <Mail className="text-blue-400" />
              <p className="text-gray-300">contact@countryedu.com</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <Phone className="text-purple-400" />
              <p className="text-gray-300">+91 98765 43210</p>
            </motion.div>

          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative p-[2px] rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_0_60px_rgba(139,92,246,0.4)]"
        >
          <div className="bg-[#111118] p-10 rounded-3xl backdrop-blur-2xl">

            <h3 className="text-2xl font-semibold mb-6">Schedule a Consultation</h3>

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 transition"
              />

              <textarea
                rows="4"
                placeholder="Tell us about your goals..."
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition"
              />

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 20px 40px rgba(139,92,246,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-lg"
              >
                Book Strategy Call
              </motion.button>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}