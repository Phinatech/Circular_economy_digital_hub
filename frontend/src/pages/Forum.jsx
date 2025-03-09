import React from 'react';
import { FaSearch, FaComments, FaUserCircle, FaRegClock, FaTags, FaPlus, FaFire } from 'react-icons/fa';

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
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                                Circular Economy Forum
                            </h1>
                            <p className="text-gray-600 mt-2">Connect, share, and learn with sustainability experts</p>
                        </div>
                        <button className="mt-4 md:mt-0 flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                            <FaPlus className="mr-2" />
                            New Discussion
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search discussions..."
                            className="w-full p-4 pl-12 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all"
                        />
                        <FaSearch className="absolute left-4 top-5 text-gray-400" />
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Categories Section */}
                    <div className="lg:col-span-3">
                        <div className="flex items-center mb-6">
                            <h2 className="text-2xl font-bold mr-4">Discussion Categories</h2>
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                                {categories.length} Active Categories
                            </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {categories.map(category => (
                                <div 
                                    key={category.id}
                                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-green-100"
                                >
                                    <div className="flex items-start">
                                        <div className="p-3 bg-green-100 rounded-xl mr-4">
                                            <FaComments className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                                            <p className="text-gray-600 mb-4">{category.description}</p>
                                            
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="space-y-1">
                                                    <div className="flex items-center text-gray-500">
                                                        <FaTags className="mr-2" />
                                                        <span>{category.threads} Threads</span>
                                                        <span className="mx-2">•</span>
                                                        <span>{category.posts} Posts</span>
                                                    </div>
                                                    <div className="flex items-center text-gray-500">
                                                        <FaUserCircle className="mr-2" />
                                                        Latest: {category.latestPost.user}
                                                    </div>
                                                </div>
                                                <span className="flex items-center text-gray-500">
                                                    <FaRegClock className="mr-2" />
                                                    {category.latestPost.time}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-6">
                            <div className="flex items-center mb-6">
                                <h2 className="text-xl font-bold mr-3">Trending Now</h2>
                                <FaFire className="text-orange-500" />
                            </div>

                            <div className="space-y-6">
                                {recentDiscussions.map(discussion => (
                                    <div 
                                        key={discussion.id}
                                        className="group p-4 rounded-xl border border-gray-100 hover:border-green-100 transition-all"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-semibold mb-2 group-hover:text-green-600 transition-colors">
                                                    {discussion.title}
                                                </h3>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <span className="mr-3">by {discussion.author}</span>
                                                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                                        {discussion.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-gray-500">
                                                    <p className="text-green-600 font-medium">{discussion.replies} replies</p>
                                                    <p className="text-xs mt-1">{discussion.lastActivity}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Popular Tags */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Recycling', 'Upcycling', 'Sustainability', 'Circular Design', 'Zero Waste', 'Eco Innovation'].map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm hover:bg-emerald-100 transition-colors cursor-pointer flex items-center"
                                        >
                                            <FaTags className="mr-2 text-sm" /> #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center group">
                        <div className="p-3 bg-green-100 rounded-xl mr-4 group-hover:bg-green-200 transition-colors">
                            <FaUserCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="text-left">
                            <p className="font-semibold">Start New Discussion</p>
                            <p className="text-sm text-gray-500">Share your ideas with the community</p>
                        </div>
                    </button>
                    
                    <button className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center group">
                        <div className="p-3 bg-blue-100 rounded-xl mr-4 group-hover:bg-blue-200 transition-colors">
                            <FaTags className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-left">
                            <p className="font-semibold">Browse Popular Topics</p>
                            <p className="text-sm text-gray-500">Explore trending discussions</p>
                        </div>
                    </button>

                    <button className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center group">
                        <div className="p-3 bg-purple-100 rounded-xl mr-4 group-hover:bg-purple-200 transition-colors">
                            <FaRegClock className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="text-left">
                            <p className="font-semibold">Your Activity</p>
                            <p className="text-sm text-gray-500">Review your contributions</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Forum;