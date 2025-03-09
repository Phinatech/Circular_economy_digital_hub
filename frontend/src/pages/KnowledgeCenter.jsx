import React from 'react';
import { FaSearch, FaBookOpen, FaVideo, FaChartBar, FaDownload, FaRegCalendarAlt, FaUserGraduate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const KnowledgeCenter = () => {
  // Sample data
  const categories = [
    {
      title: "Circular Economy Basics",
      icon: <FaBookOpen className="w-6 h-6" />,
      resources: 45,
      color: "bg-green-100 text-green-700"
    },
    {
      title: "Case Studies",
      icon: <FaChartBar className="w-6 h-6" />,
      resources: 28,
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Video Tutorials",
      icon: <FaVideo className="w-6 h-6" />,
      resources: 32,
      color: "bg-purple-100 text-purple-700"
    },
    {
      title: "Policy Guides",
      icon: <FaDownload className="w-6 h-6" />,
      resources: 19,
      color: "bg-yellow-100 text-yellow-700"
    }
  ];

  const featuredResources = [
    {
      title: "Zero Waste Manufacturing Guide",
      type: "PDF Guide",
      category: "Industrial Recycling",
      date: "2024-03-15",
      author: "Green Manufacturing Institute"
    },
    {
      title: "Urban Composting Masterclass",
      type: "Video Course",
      category: "Community Solutions",
      date: "2024-03-10",
      author: "Eco Cities Network"
    },
    {
      title: "Circular Fashion Case Studies",
      type: "Research Paper",
      category: "Sustainable Fashion",
      date: "2024-03-12",
      author: "Fashion Revolution"
    }
  ];

  const learningPaths = [
    {
      title: "Circular Economy Fundamentals",
      progress: 65,
      courses: 8,
      duration: "6 hours"
    },
    {
      title: "Waste-to-Resource Strategies",
      progress: 30,
      courses: 5,
      duration: "4 hours"
    },
    {
      title: "Sustainable Packaging Mastery",
      progress: 45,
      courses: 6,
      duration: "5 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-green-700 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Knowledge Center
          </motion.h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Your hub for circular economy insights, research, and learning resources
          </p>
          <div className="relative max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search resources, articles, and courses..."
              className="w-full p-4 pl-12 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-green-500"
            />
            <FaSearch className="absolute left-4 top-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl ${category.color} transition-all shadow-sm hover:shadow-md`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-white">{category.icon}</div>
                <span className="text-2xl font-bold">{category.resources}+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">Educational resources</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{resource.type}</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{resource.author}</span>
                  <span>{resource.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Learning Paths</h2>
          <div className="space-y-6">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{path.title}</h3>
                    <p className="text-gray-600">{path.courses} courses • {path.duration}</p>
                  </div>
                  <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                    Continue
                  </button>
                </div>
                <div className="relative pt-2">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-green-600">
                        Progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-green-600">
                        {path.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
                    <div
                      style={{ width: `${path.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-green-100 rounded-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <FaUserGraduate className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Insights</h3>
            <p className="text-gray-600 mb-6">Subscribe to our monthly circular economy digest</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
              />
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCenter;