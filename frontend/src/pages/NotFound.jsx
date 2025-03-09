import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRecycle, FaArrowRight, FaSearch, FaLeaf } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-emerald-800 flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Animated Eco Graphic */}
        <div className="relative mx-auto w-64 h-64 mb-8">
          <div className="absolute inset-0 animate-orbite">
            <div className="w-12 h-12 bg-green-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-lg" />
          </div>
          <div className="absolute inset-0 animate-orbite-reverse">
            <div className="w-8 h-8 bg-yellow-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-lg" />
          </div>
          <div className="relative z-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#4ade80" strokeWidth="8" />
              <path 
                d="M70,70 L130,130 M130,70 L70,130" 
                stroke="#ff6b6b" 
                strokeWidth="10"
                strokeLinecap="round"
              />
              <text 
                x="100" 
                y="110" 
                textAnchor="middle" 
                fontSize="42" 
                fill="#fff"
                className="font-bold"
              >
                404
              </text>
              <FaRecycle 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                size="80"
                fill="rgba(74, 222, 128, 0.2)"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Resource Not Found
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-green-100 mb-8 max-w-md mx-auto"
        >
          <FaLeaf className="inline mr-2" />
          This page might have been recycled or upcycled! Let's find a sustainable alternative.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="relative max-w-md mx-auto mb-8"
        >
          <input
            type="text"
            placeholder="What were you looking for?"
            className="w-full p-4 pl-12 rounded-2xl bg-white/20 backdrop-blur-sm text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-green-200" />
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-2xl font-medium hover:bg-green-600 transition-colors"
          >
            <FaRecycle className="mr-3" />
            Return to Circular Hub
            <FaArrowRight className="ml-3" />
          </Link>
        </motion.div>

        {/* Alternative Paths */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          <Link
            to="/knowledge-center"
            className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
          >
            <div className="text-2xl mb-2">📚</div>
            <h3 className="text-green-300 font-medium">Knowledge Center</h3>
            <p className="text-sm text-green-200">Learn sustainable practices</p>
          </Link>

          <Link
            to="/marketplace"
            className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
          >
            <div className="text-2xl mb-2">🛒</div>
            <h3 className="text-green-300 font-medium">Marketplace</h3>
            <p className="text-sm text-green-200">Find eco-friendly products</p>
          </Link>

          <Link
            to="/contact"
            className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
          >
            <div className="text-2xl mb-2">💬</div>
            <h3 className="text-green-300 font-medium">Support</h3>
            <p className="text-sm text-green-200">Get personalized help</p>
          </Link>
        </motion.div>

        {/* Eco Message */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-green-300 text-sm"
        >
          ♻️ Every digital error saves 0.01g of CO₂ - Thanks for being eco-friendly!
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes orbite {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbite-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-orbite {
          animation: orbite 20s linear infinite;
        }

        .animate-orbite-reverse {
          animation: orbite-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;