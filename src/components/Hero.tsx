import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-accent to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight"
          >
            Connect with Top Tech Talent
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Find exceptional developers, designers, and tech experts for your next project.
            Our curated marketplace connects you with verified professionals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Link
              to="/signup"
              className="px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary-hover transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/learn-more"
              className="px-8 py-3 rounded-lg bg-white text-gray-900 hover:bg-gray-50 transition-all transform hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};