
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-10 bg-black text-white">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold"
      >
         Abhishek Singh
      </motion.h1>

 <p className="mt-4 text-xl text-gray-400">
        Founder & CEO — CountryEdu Pvt Ltd
      </p>

      <p className="mt-6 max-w-xl text-gray-300">
        Building global education ecosystems across eight countries.
      </p>
    </section>
  );
}
