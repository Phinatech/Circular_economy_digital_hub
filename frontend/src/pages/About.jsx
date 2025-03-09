import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { 
  FaLinkedin, FaTwitter, FaInstagram, FaSeedling, 
  FaRecycle, FaChartLine, FaHandshake, FaAward
} from 'react-icons/fa';
import { SiTesla } from 'react-icons/si';

const About = () => {
  const stats = [
    { number: 12700, label: 'Tons Waste Recycled', icon: <FaRecycle className="inline mb-2" /> },
    { number: 4500, label: 'Business Partners', icon: <FaHandshake className="inline mb-2" /> },
    { number: 92, label: 'Countries Supported', icon: <FaSeedling className="inline mb-2" /> },
    { number: 98, label: 'Satisfaction Rate', suffix: '%', icon: <FaAward className="inline mb-2" /> },
  ];

  const team = [
    { 
      name: 'Sarah Green', 
      role: 'Chief Sustainability Officer',
      bio: 'Circular economy pioneer with 15+ years in waste management',
      img: 'team1.jpg',
      social: { linkedin: '#', twitter: '#' }
    },
    { 
      name: 'John Eco', 
      role: 'Tech Lead',
      bio: 'Blockchain & AI expert focused on green tech solutions',
      img: 'team2.jpg',
      social: { linkedin: '#', github: '#' }
    },
    { 
      name: 'Maria Cycle', 
      role: 'Community Director',
      bio: 'Building global networks for resource sharing',
      img: 'team3.jpg',
      social: { instagram: '#', twitter: '#' }
    },
  ];

  const partners = [
    { name: 'Tesla', icon: <SiTesla />, type: 'Battery Recycling' },
    { name: 'Patagonia', icon: '🏔️', type: 'Circular Fashion' },
    { name: 'TerraCycle', icon: '♻️', type: 'Global Recycling' },
    { name: 'Ellen MacArthur', icon: '🌍', type: 'Foundation' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Animated Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-24 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute w-96 h-96 bg-gradient-to-r from-green-200 to-emerald-200 blur-3xl rounded-full -top-48 -left-48"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="relative z-10"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Redefining
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
                Sustainability
              </span>
            </h1>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Link
                to="/impact"
                className="px-8 py-4 bg-green-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                <FaChartLine />
                See Our Impact Report
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Stats Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="text-4xl text-green-600 mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={3}
                  suffix={stat.suffix || ''}
                  className="text-gray-800"
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="text-emerald-600" />
                  )}
                </CountUp>
              </div>
              <p className="text-gray-600 text-lg">{stat.label}</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-green-400 to-emerald-400 w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Animated Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 w-1 bg-green-100 h-full transform -translate-x-1/2" />
            
            {[2018, 2020, 2022, 2024].map((year, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`mb-16 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                <div className="w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">Milestone {year}</h3>
                  <p className="text-gray-600">
                    {[
                      'Founded with a vision for zero-waste solutions',
                      'Launched global recycling network',
                      'Reached 1M ton recycling milestone',
                      'Pioneering AI-driven material matching'
                    ][index]}
                  </p>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Hover Cards */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64 bg-green-100">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-emerald-200">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex gap-4">
                    {Object.entries(member.social).map(([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
                      >
                        {{
                          linkedin: <FaLinkedin className="text-green-600" />,
                          twitter: <FaTwitter className="text-green-600" />,
                          github: <FaGithub className="text-green-600" />,
                          instagram: <FaInstagram className="text-green-600" />
                        }[platform]}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4 text-emerald-600">
                  {partner.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive CTA */}
      <section className="py-16 bg-gradient-to-br from-green-700 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Make an Impact?
            </h2>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="inline-block"
              >
                <Link
                  to="/join"
                  className="inline-block px-12 py-4 bg-white text-green-700 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                >
                  Join Our Ecosystem
                </Link>
              </motion.div>
              <p className="text-emerald-100 text-xl">
                Start your sustainability journey today
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;console.log('About component rendered');
console.log('Stats:', stats);
console.log('Team:', team);
console.log('Partners:', partners);