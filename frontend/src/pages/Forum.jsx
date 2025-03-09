import React from 'react';
import { FaSearch, FaComments, FaUserCircle, FaRegClock, FaTags } from 'react-icons/fa';

const Forum = () => {
  // Sample data
  const categories = [
    {
      id: 1,
      title: "Waste Recycling Solutions",
      description: "Discuss innovative recycling methods and technologies",
      threads: 245,
      posts: 1540,
      latestPost: { user: "EcoWarrior22", time: "45m ago" }
    },
    {
      id: 2,
      title: "Sustainable Business Models",
      description: "Share and discuss circular economy business strategies",
      threads: 189,
      posts: 982,
      latestPost: { user: "GreenCEO", time: "2h ago" }
    },
    {
      id: 3,
      title: "Upcycling Projects",
      description: "Showcase and discuss creative upcycling ideas",
      threads: 367,
      posts: 2145,
      latestPost: { user: "CraftyReuser", time: "1h ago" }
    },
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: "Best practices for plastic waste management?",
      category: "Waste Recycling",
      author: "RecyclePro",
      replies: 24,
      views: 345,
      lastActivity: "30m ago"
    },
    {
      id: 2,
      title: "Creating profitable circular fashion models",
      category: "Sustainable Fashion",
      author: "EcoDesigner",
      replies: 15,
      views: 198,
      lastActivity: "1h ago"
    },
    {
      id: 3,
      title: "Urban composting initiatives that work",
      category: "Community Solutions",
      author: "CityGardener",
      replies: 42,
      views: 567,
      lastActivity: "45m ago"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Forum Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Circular Economy Forum</h1>
          <p className="text-gray-600 mt-2">Connect, share, and learn with sustainability experts</p>
          
          {/* Search Bar */}
          <div className="mt-6 relative">
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <FaSearch className="absolute left-4 top-5 text-gray-400" />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Categories Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Discussion Categories</h2>
            <div className="space-y-6">
              {categories.map(category => (
                <div key={category.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-green-100 rounded-lg mr-4">
                          <FaComments className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{category.title}</h3>
                          <p className="text-gray-600 mt-1">{category.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                        <div>
                          <span className="mr-4">{category.threads} Threads</span>
                          <span>{category.posts} Posts</span>
                        </div>
                        <div className="text-right">
                          <p className="flex items-center">
                            <FaUserCircle className="mr-2" />
                            {category.latestPost.user}
                          </p>
                          <p className="flex items-center mt-1">
                            <FaRegClock className="mr-2" />
                            {category.latestPost.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Sidebar */}
          <div className="bg-white p-6 rounded-xl shadow-sm h-fit">
            <h2 className="text-2xl font-semibold mb-6">Recent Discussions</h2>
            <div className="space-y-6">
              {recentDiscussions.map(discussion => (
                <div key={discussion.id} className="group hover:bg-gray-50 p-4 rounded-lg transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold group-hover:text-green-600 transition-colors">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <span className="mr-4">by {discussion.author}</span>
                        <span className="flex items-center">
                          <FaTags className="mr-2" />
                          {discussion.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <p>{discussion.replies} replies</p>
                      <p>{discussion.views} views</p>
                      <p className="mt-1">{discussion.lastActivity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Popular Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Recycling', 'Upcycling', 'Sustainability', 'Circular Design', 'Zero Waste', 'Eco Innovation'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm hover:bg-green-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center">
            <FaUserCircle className="w-6 h-6 text-green-600 mr-3" />
            <span>Start New Discussion</span>
          </button>
          <button className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center">
            <FaTags className="w-6 h-6 text-blue-600 mr-3" />
            <span>Browse Popular Topics</span>
          </button>
          <button className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center">
            <FaRegClock className="w-6 h-6 text-purple-600 mr-3" />
            <span>Your Recent Activity</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forum;