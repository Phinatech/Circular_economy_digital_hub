import React, { useState, useEffect } from 'react';
import { FaSearch, FaComments, FaUserCircle, FaRegClock, FaTags, FaPlus, FaFire, FaBars, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const categories = [
    "Recycling",
    "Sustainable Products",
    "Eco-Friendly Policies",
    "Waste Management",
    "Renewable Energy",
    "Circular Design",
];

const Forum = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [forumDiscussions, setForumDiscussions] = useState([]);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(categories[0]);
    const [user, setUser] = useState("Guest");

    useEffect(() => {
        // Simulate fetching data
        setForumDiscussions([
            { id: 1, title: "How to properly recycle plastic?", category: "Recycling", author: "Alice" },
            { id: 2, title: "Best eco-friendly household items", category: "Sustainable Products", author: "Bob" },
        ]);
    }, []);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const toggleModal = () => setModalOpen(!isModalOpen);

    const addDiscussion = () => {
        if (title.trim() !== "") {
            setForumDiscussions([...forumDiscussions, { id: Date.now(), title, category, author: user }]);
            setTitle("");
            setCategory(categories[0]);
            toggleModal();
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50 p-6 lg:p-12">
            <motion.aside 
                className={`bg-white p-4 shadow-md w-64 fixed inset-y-0 ${isSidebarOpen ? "left-0" : "-left-64"} transition-all duration-300`}
            >
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <ul>
                    {categories.map((category) => (
                        <li key={category} className="p-2 hover:bg-gray-200 rounded cursor-pointer">
                            {category}
                        </li>
                    ))}
                </ul>
            </motion.aside>

            <div className="flex-1 p-6">
                <div className="flex justify-between items-center">
                    <button className="p-2 bg-blue-600 text-white rounded mb-4" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                    <div className="flex items-center gap-2">
                        <FaUser className="text-gray-600" />
                        <span className="font-bold">{user}</span>
                    </div>
                </div>
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
                            <button className="mt-4 md:mt-0 flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors" onClick={toggleModal}>
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
                                {categories.map((category, index) => (
                                    <div 
                                        key={index}
                                        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-green-100 relative"
                                    >
                                        <div className="absolute top-4 right-4 flex items-center text-sm text-green-600">
                                            <FaFire className="mr-1" />
                                            {Math.round((index / 1000) * 100)}% Active
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <div className="p-3 bg-green-100 rounded-xl mr-4">
                                                <FaComments className="w-6 h-6 text-green-600" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl lg:text-2xl font-bold mb-2">{category}</h3>
                                                <p className="text-gray-600 mb-4">Discuss various topics related to {category}</p>
                                                
                                                <div className="flex items-center justify-between text-sm">
                                                    <div className="space-y-2">
                                                        <div className="flex items-center">
                                                            <span className="w-24 text-gray-500">Engagement:</span>
                                                            <div className="h-2 bg-gray-100 rounded-full flex-1 ml-2">
                                                                <div 
                                                                    className="h-full bg-green-500 rounded-full transition-all duration-500"
                                                                    style={{ width: `${Math.min((index / 2000) * 100, 100)}%` }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center text-gray-500">
                                                            <FaUserCircle className="mr-2" />
                                                            Latest contributor: User{index + 1}
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
                                    {forumDiscussions.map(discussion => (
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
                                                    style={{ width: `${Math.min((discussion.id / 50) * 100, 100)}%` }}
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
                                                        <span className="font-medium">{discussion.id}</span>
                                                    </div>
                                                    <div className="text-xs text-gray-500 mt-1">
                                                        {discussion.id * 10} views
                                                    </div>
                                                    <div className="text-xs text-gray-400 mt-1">
                                                        {discussion.id * 5}m ago
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

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-bold">Create Discussion</h2>
                        <input 
                            type="text" 
                            placeholder="Discussion Title" 
                            className="w-full p-2 border rounded mt-2" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <select 
                            className="w-full p-2 border rounded mt-2"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <div className="flex justify-end space-x-2 mt-4">
                            <button className="p-2 bg-gray-400 text-white rounded" onClick={toggleModal}>Cancel</button>
                            <button 
                                className="p-2 bg-blue-600 text-white rounded"
                                onClick={addDiscussion}
                            >Post</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Forum;