import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import './About.css';
import { 
    FaLinkedin, FaTwitter, FaInstagram, FaSeedling, 
    FaRecycle, FaChartLine, FaHandshake, FaAward, FaGithub
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
        <div className="about-container min-h-screen">
            {/* Enhanced Hero Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="about-hero relative py-32 overflow-hidden"
            >
                <div className="hero-gradient absolute inset-0 opacity-15">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[800px] h-[800px] bg-gradient-to-r from-green-200/50 to-emerald-200/50 blur-[100px] rounded-full -top-64 -left-64"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div 
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 50 }}
                        className="relative z-10 space-y-8"
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
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
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Link
                                to="/impact"
                                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group"
                            >
                                <FaChartLine className="group-hover:rotate-12 transition-transform" />
                                See Our Impact Report
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Enhanced Stats Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.2, type: "spring" }}
                            className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="text-5xl text-green-600 mb-4 group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl font-bold mb-2">
                                    <CountUp
                                        start={0}
                                        end={stat.number}
                                        duration={3}
                                        suffix={stat.suffix || ''}
                                        className="text-gray-800"
                                    >
                                        {({ countUpRef }) => (
                                            <span ref={countUpRef} className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent" />
                                        )}
                                    </CountUp>
                                </div>
                                <p className="text-gray-600 text-lg font-medium">{stat.label}</p>
                                <div className="mt-4 h-1 bg-gradient-to-r from-green-400 to-emerald-400 w-0 group-hover:w-full transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Enhanced Timeline */}
            <section className="py-24 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-center mb-20"
                    >
                        Our Journey
                    </motion.h2>
                    <div className="relative">
                        <div className="absolute left-1/2 w-1 bg-gradient-to-b from-green-200 to-emerald-200 h-full transform -translate-x-1/2" />
                        
                        {[2018, 2020, 2022, 2024].map((year, index) => (
                            <motion.div
                                key={year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`mb-20 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                            >
                                <div className={`w-1/2 p-8 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                                    <motion.div
                                        whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                                        className="relative bg-white p-8 rounded-3xl shadow-lg border border-green-50"
                                    >
                                        <h3 className="text-2xl font-bold mb-4 text-emerald-600">Milestone {year}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {[
                                                'Founded with a vision for zero-waste solutions',
                                                'Launched global recycling network',
                                                'Reached 1M ton recycling milestone',
                                                'Pioneering AI-driven material matching'
                                            ][index]}
                                        </p>
                                        <div className="absolute top-4 right-4 text-emerald-100 text-3xl">
                                            {index % 2 === 0 ? '🌱' : '♻️'}
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    <motion.div 
                                        whileHover={{ scale: 1.1 }}
                                        className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl cursor-pointer hover:bg-emerald-500 transition-colors"
                                    >
                                        {year}
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Team Section */}
            <section className="py-24 bg-emerald-50/50">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl font-bold text-center mb-20"
                    >
                        Leadership Team
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {team.map((member, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-green-600/20 to-emerald-500/10 rounded-3xl transform group-hover:scale-105 transition-transform" />
                                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                                    <div className="relative h-80 bg-emerald-100">
                                        <img 
                                            src={member.img} 
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h3 className="text-2xl font-bold">{member.name}</h3>
                                            <p className="text-emerald-200 font-medium">{member.role}</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                                        <div className="flex gap-3">
                                            {Object.entries(member.social).map(([platform, link]) => (
                                                <motion.a
                                                    key={platform}
                                                    href={link}
                                                    whileHover={{ y: -3 }}
                                                    className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors"
                                                >
                                                    {{
                                                        linkedin: <FaLinkedin className="text-emerald-600 w-6 h-6" />,
                                                        twitter: <FaTwitter className="text-emerald-600 w-6 h-6" />,
                                                        github: <FaGithub className="text-emerald-600 w-6 h-6" />,
                                                        instagram: <FaInstagram className="text-emerald-600 w-6 h-6" />
                                                    }[platform]}
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Partners Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl font-bold text-center mb-20"
                    >
                        Trusted By
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center border border-emerald-50"
                            >
                                <div className="w-20 h-20 mb-6 bg-emerald-50 rounded-2xl flex items-center justify-center text-4xl">
                                    {partner.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{partner.name}</h3>
                                <p className="text-emerald-600 font-medium">{partner.type}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="py-24 bg-gradient-to-br from-green-700 to-emerald-600">
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
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block"
                            >
                                <Link
                                    to="/join"
                                    className="inline-block px-12 py-5 bg-white text-green-700 rounded-3xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1"
                                >
                                    Join Our Ecosystem
                                </Link>
                            </motion.div>
                            <p className="text-emerald-100 text-xl font-medium">
                                Start your sustainability journey today
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default About;