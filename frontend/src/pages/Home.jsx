import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaRecycle,
  FaHandshake,
  FaChartLine,
  FaLeaf,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import CountUp from 'react-countup';

const Home = () => {
  const stats = [
    { icon: <FaRecycle />, number: 12700, label: 'Tons Recycled' },
    { icon: <FaHandshake />, number: 4500, label: 'Business Partners' },
    { icon: <FaChartLine />, number: 92, label: 'Countries Supported' },
    { icon: <FaLeaf />, number: 98, label: 'Sustainability Score', suffix: '%' },
  ];

  const features = [
    {
      title: "Circular Marketplace",
      desc: "Buy, sell, and exchange sustainable products",
      icon: "🔄",
      link: "/marketplace"
    },
    {
      title: "Waste Matching",
      desc: "Connect waste producers with recyclers",
      icon: "♻️",
      link: "/waste-matching"
    },
    {
      title: "Eco Analytics",
      desc: "Track your sustainability impact",
      icon: "📈",
      link: "/analytics"
    },
    {
      title: "Learning Hub",
      desc: "Master circular economy practices",
      icon: "🎓",
      link: "/education"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Fixed background URL */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?recycling')] bg-cover bg-center opacity-90">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-800/80"></div>
        </div>
        
        {/* Motion.div animation fix */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Circular Economy
            </span>
            <br />
            Digital Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Transforming waste into worth through innovation and collaboration
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section - Add viewport trigger */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 bg-green-50 rounded-xl"
            >
              <div className="text-4xl text-green-600 mb-4">{stat.icon}</div>
              <CountUp
                start={0}
                end={stat.number}
                duration={2}
                suffix={stat.suffix || ''}
              >
                {({ countUpRef }) => (
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section - Add viewport trigger */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Add motion to heading */}
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Key Features
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.desc}</p>
                <Link
                  to={feature.link}
                  className="text-green-600 hover:text-green-700 font-medium flex items-center"
                >
                  Explore More
                  <span className="ml-2">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Add motion */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-16 bg-gradient-to-r from-green-700 to-emerald-600"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join the Circular Revolution?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Start your sustainability journey today and make a real impact
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-3 bg-white text-green-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Create Free Account
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-800 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Footer - Ensure social icons display */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <FaTwitter className="inline-block text-2xl hover:text-green-400 cursor-pointer" />
            <FaLinkedin className="inline-block text-2xl hover:text-green-400 cursor-pointer" />
            <FaInstagram className="inline-block text-2xl hover:text-green-400 cursor-pointer" />
          </div>
          <p className="text-sm text-gray-500">
            © 2024 Circular Economy Digital Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;