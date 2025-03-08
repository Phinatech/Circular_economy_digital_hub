import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-green-700 sm:text-5xl md:text-6xl">
            Revolutionizing Sustainability Through
            <span className="block mt-2 text-green-600">Circular Economy</span>
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-600">
            Connecting businesses, individuals, and communities to create a waste-free future through innovative resource management and sustainable practices.
          </p>
        </div>
      </div>

      {/* Core Objectives Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Core Mission
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Transforming linear consumption patterns into circular sustainability through technology and community engagement
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Waste Reduction',
                desc: 'Convert 1M+ tons of waste into resources annually through our matching system',
                icon: '♻️'
              },
              {
                title: 'Sustainable Commerce',
                desc: 'Facilitate $100M+ in circular product transactions by 2025',
                icon: '🌱'
              },
              {
                title: 'Community Impact',
                desc: 'Educate 500K+ users on circular economy principles through our platform',
                icon: '👥'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-green-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white text-2xl">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Features Section */}
      <div className="relative py-16 bg-gradient-to-b from-green-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">
            Key Platform Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Circular Marketplace',
                features: ['Recycled Materials', 'Refurbished Tech', 'Sustainable Fashion', 'Eco Supplies'],
                icon: '🛒'
              },
              {
                title: 'Waste Matching',
                features: ['AI-Powered Matching', 'Blockchain Tracking', 'Pickup Coordination', 'Sustainability Credits'],
                icon: '🔗'
              },
              {
                title: 'Education Hub',
                features: ['Expert Webinars', 'Case Studies', 'Interactive Tutorials', 'Community Forums'],
                icon: '🎓'
              },
              {
                title: 'Carbon Tracker',
                features: ['Real-time Analytics', 'Circularity Scoring', 'Personalized Insights', 'Progress Dashboard'],
                icon: '📊'
              },
              {
                title: 'Business Directory',
                features: ['Green Certifications', 'Sustainability Scores', 'Peer Reviews', 'Partnership Network'],
                icon: '📇'
              },
              {
                title: 'Policy Support',
                features: ['Regulatory Guides', 'Compliance Tools', 'Funding Opportunities', 'Certification Assistance'],
                icon: '⚖️'
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{section.icon}</span>
                  <h3 className="text-xl font-semibold text-green-700">{section.title}</h3>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  {section.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Powered by Modern Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'React/Next.js', color: 'bg-blue-100' },
              { name: 'Node.js', color: 'bg-green-100' },
              { name: 'MongoDB', color: 'bg-yellow-100' },
              { name: 'TensorFlow', color: 'bg-orange-100' },
              { name: 'AWS', color: 'bg-purple-100' },
              { name: 'Blockchain', color: 'bg-pink-100' }
            ].map((tech, idx) => (
              <div key={idx} className={`p-4 rounded-lg ${tech.color} text-center`}>
                <span className="font-medium text-gray-800">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 text-white py-16 mt-12">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-6">
            Join the Sustainability Revolution
          </h2>
          <p className="text-xl mb-8">
            Be part of the movement transforming waste into worth
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/marketplace"
              className="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-700 transition-colors"
            >
              Explore Marketplace
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;