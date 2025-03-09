import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup'; // Changed to default import

const About = () => {
    const stats = [
        { number: 12700, label: 'Tons Waste Recycled' },
        { number: 4500, label: 'Active Businesses' },
        { number: 92, label: 'Countries Supported' },
        { number: 98, label: 'Satisfaction Rate', suffix: '%' },
    ];

    const team = [
        { name: 'Sarah Green', role: 'Sustainability Expert', img: 'team1.jpg' },
        { name: 'John Eco', role: 'Tech Lead', img: 'team2.jpg' },
        { name: 'Maria Cycle', role: 'Community Manager', img: 'team3.jpg' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            {/* Hero Section with Floating Animation */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute w-96 h-96 bg-green-200 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
                    <div className="absolute w-96 h-96 bg-emerald-200 rounded-full blur-3xl -top-48 -right-48 animate-float-delayed"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-8">
                            Building a Circular Future
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
                            Where every resource gets infinite life through innovation and community collaboration
                        </p>
                        
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="inline-block"
                        >
                            <Link
                                to="/signup"
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Join the Revolution
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Animated Stats Section - Updated CountUp usage */}
            <section className="py-16 bg-white/50 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500"
                            >
                                <div className="text-4xl font-bold text-green-600 mb-2">
                                    <CountUp
                                        start={0}
                                        end={stat.number}
                                        duration={2}
                                        suffix={stat.suffix || ''}
                                    >
                                        {({ countUpRef }) => (
                                            <span ref={countUpRef} />
                                        )}
                                    </CountUp>
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Grid with Hover Effects */}
            <section className="py-20 bg-emerald-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                        Our Ecosystem Features
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { 
                                title: 'Smart Waste Matching', 
                                icon: '🔄',
                                desc: 'AI-powered matching of waste streams to recyclers',
                                hoverClass: 'hover:bg-green-100'
                            },
                            { 
                                title: 'Circular Marketplace', 
                                icon: '🌍',
                                desc: 'Global platform for sustainable goods exchange',
                                hoverClass: 'hover:bg-emerald-100'
                            },
                            { 
                                title: 'Eco Analytics', 
                                icon: '📈',
                                desc: 'Real-time sustainability performance tracking',
                                hoverClass: 'hover:bg-teal-100'
                            },
                            { 
                                title: 'Green Certification', 
                                icon: '✅',
                                desc: 'Blockchain-verified sustainability credentials',
                                hoverClass: 'hover:bg-lime-100'
                            },
                            { 
                                title: 'Community Hub', 
                                icon: '👥',
                                desc: 'Collaborative space for eco-innovators',
                                hoverClass: 'hover:bg-cyan-100'
                            },
                            { 
                                title: 'Policy Engine', 
                                icon: '⚖️',
                                desc: 'Automated regulatory compliance tools',
                                hoverClass: 'hover:bg-sky-100'
                            },
                        ].map((feature, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ y: -10 }}
                                className={`p-8 bg-white rounded-3xl shadow-md transition-all duration-300 group ${feature.hoverClass}`}
                            >
                                <div className="flex items-center mb-6">
                                    <span className="text-4xl mr-4 transition-transform duration-300 group-hover:scale-110">
                                        {feature.icon}
                                    </span>
                                    <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
                                </div>
                                <p className="text-gray-600 text-lg">{feature.desc}</p>
                                <div className="mt-6 h-1 w-20 bg-green-500 transition-all duration-300 group-hover:w-full"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section with Hover Cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                        Meet Our Eco-Warriors
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-12">
                        {team.map((member, index) => (
                            <motion.div 
                                key={index}
                                whileHover="hover"
                                initial="rest"
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-emerald-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-full h-64 mb-6 rounded-2xl overflow-hidden">
                                        <img 
                                            src={member.img} 
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                                    <p className="text-lg text-green-600 mb-4">{member.role}</p>
                                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="p-2 rounded-full bg-green-100 hover:bg-green-200">
                                            <span className="text-green-600">LinkedIn</span>
                                        </button>
                                        <button className="p-2 rounded-full bg-green-100 hover:bg-green-200">
                                            <span className="text-green-600">Contact</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Animated CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-block"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Ready to Transform Waste into Value?
                        </h2>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Link
                                to="/signup"
                                className="inline-block bg-white text-green-700 px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                            >
                                Start Your Circular Journey
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;