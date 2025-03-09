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
        <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
            <div className="max-w-7xl mx-auto">
                {/* Forum Header */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                                Circular Economy Forum
                            </h1>
                            <p className="text-gray-600 mt-2 lg:text-lg">Connect, share, and learn with sustainability experts</p>
                        </div>
                        <button className="mt-4 md:mt-0 flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                            <FaPlus className="mr-2" />
                            New Discussion
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-8">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Search discussions..."
                                    className="w-full p-4 pl-12 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all pr-32"
                                />
                                <FaSearch className="absolute left-4 top-5 text-gray-400" />
                                <div className="absolute right-2 top-2 flex gap-2">
                                    <button className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm hover:bg-green-200 transition-colors">
                                        Recent
                                    </button>
                                    <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors">
                                        Popular
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-white border border-gray-200 rounded-2xl hover:border-green-500 transition-colors flex items-center">
                                    <FaTags className="mr-2" />
                                    Filter
                                </button>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-colors flex items-center">
                                    <FaPlus className="mr-2" />
                                    New Topic
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Categories Section */}
                    <div className="lg:col-span-3">
                        <div className="flex items-center mb-6">
                            <h2 className="text-2xl lg:text-3xl font-bold mr-4">Discussion Categories</h2>
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm lg:text-base">
                                {categories.length} Active Categories
                            </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {categories.map(category => (
                                <div 
                                    key={category.id}
                                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-green-100 relative"
                                >
                                    <div className="absolute top-4 right-4 flex items-center text-sm text-green-600">
                                        <FaFire className="mr-1" />
                                        {Math.round((category.posts / 1000) * 100)}% Active
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="p-3 bg-green-100 rounded-xl mr-4">
                                            <FaComments className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl lg:text-2xl font-bold mb-2">{category.title}</h3>
                                            <p className="text-gray-600 mb-4">{category.description}</p>
                                            
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="space-y-2">
                                                    <div className="flex items-center">
                                                        <span className="w-24 text-gray-500">Engagement:</span>
                                                        <div className="h-2 bg-gray-100 rounded-full flex-1 ml-2">
                                                            <div 
                                                                className="h-full bg-green-500 rounded-full transition-all duration-500"
                                                                style={{ width: `${Math.min((category.posts / 2000) * 100, 100)}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center text-gray-500">
                                                        <FaUserCircle className="mr-2" />
                                                        Latest contributor: {category.latestPost.user}
                                                    </div>
                                                </div>
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
                                <h2 className="text-xl lg:text-2xl font-bold mr-3">Trending Now</h2>
                                <FaFire className="text-orange-500" />
                            </div>

                            <div className="space-y-6">
                                {recentDiscussions.map(discussion => (
                                    <div 
                                        key={discussion.id}
                                        className="group p-4 rounded-xl border border-gray-100 hover:border-green-100 transition-all relative overflow-hidden"
                                    >
                                        <div 
                                            className="absolute bottom-0 left-0 h-1 bg-green-100 w-full"
                                            aria-hidden="true"
                                        >
                                            <div 
                                                className="h-full bg-green-500 transition-all duration-500"
                                                style={{ width: `${Math.min((discussion.replies / 50) * 100, 100)}%` }}
                                            />
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <div className="pr-4">
                                                <h3 className="font-semibold mb-2 group-hover:text-green-600 transition-colors">
                                                    {discussion.title}
                                                </h3>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <span className="flex items-center mr-3">
                                                        <FaUserCircle className="mr-1 text-green-600" />
                                                        {discussion.author}
                                                    </span>
                                                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs flex items-center">
                                                        <FaTags className="mr-1 text-gray-500" />
                                                        {discussion.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right min-w-[90px]">
                                                <div className="flex items-center justify-end text-green-600">
                                                    <FaComments className="mr-2" />
                                                    <span className="font-medium">{discussion.replies}</span>
                                                </div>
                                                <div className="text-xs text-gray-500 mt-1">
                                                    {discussion.views} views
                                                </div>
                                                <div className="text-xs text-gray-400 mt-1">
                                                    {discussion.lastActivity}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Popular Tags */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <h3 className="text-lg lg:text-xl font-semibold mb-4">Popular Tags</h3>
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
                            <p className="font-semibold lg:text-lg">Start New Discussion</p>
                            <p className="text-sm text-gray-500">Share your ideas with the community</p>
                        </div>
                    </button>
                    
                    <button className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center group">
                        <div className="p-3 bg-blue-100 rounded-xl mr-4 group-hover:bg-blue-200 transition-colors">
                            <FaTags className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-left">
                            <p className="font-semibold lg:text-lg">Browse Popular Topics</p>
                            <p className="text-sm text-gray-500">Explore trending discussions</p>
                        </div>
                    </button>

                    <button className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center group">
                        <div className="p-3 bg-purple-100 rounded-xl mr-4 group-hover:bg-purple-200 transition-colors">
                            <FaRegClock className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="text-left">
                            <p className="font-semibold lg:text-lg">Your Activity</p>
                            <p className="text-sm text-gray-500">Review your contributions</p>
                        </div>
                    </button>
                </div>

                {/* Profile Section */}
                <div className="bg-white p-6 rounded-2xl shadow-sm my-8">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                            <FaUserCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold lg:text-lg">Your Profile</h3>
                            <p className="text-sm text-gray-500">Community Member</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-2 bg-gray-50 rounded-lg">
                            <div className="text-green-600 font-bold">12</div>
                            <div className="text-xs text-gray-500">Posts</div>
                        </div>
                        <div className="p-2 bg-gray-50 rounded-lg">
                            <div className="text-green-600 font-bold">34</div>
                            <div className="text-xs text-gray-500">Replies</div>
                        </div>
                        <div className="p-2 bg-gray-50 rounded-lg">
                            <div className="text-green-600 font-bold">567</div>
                            <div className="text-xs text-gray-500">Views</div>
                        </div>
                    </div>
                </div>

                {/* Topic Cloud */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="text-lg lg:text-xl font-semibold mb-4 flex items-center">
                        <FaTags className="mr-2 text-green-600" />
                        Topic Cloud
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {['Plastic Recycling', 'Circular Fashion', 'Sustainable Packaging', 'E-Waste Management', 'BioMaterials', 'Renewable Energy', 'Green Tech'].map(tag => (
                            <span
                                key={tag}
                                className={`px-3 py-1.5 rounded-full text-sm transition-all cursor-pointer
                                    ${Math.random() > 0.5 ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                                    ${Math.random() > 0.8 && 'bg-orange-100 text-orange-700 hover:bg-orange-200'}`}
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forum;