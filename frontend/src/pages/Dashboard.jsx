import React, { useEffect } from 'react';
import { FaRecycle, FaUsers, FaChartLine, FaDollarSign, FaBoxOpen, FaPlusCircle } from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="font-medium">{label}</p>
                <p className="text-green-600">Transactions: {payload[0].value}</p>
                {payload[1] && <p className="text-green-800">Carbon Saved: {payload[1].value}t</p>}
            </div>
        );
    }
    return null;
};

const Dashboard = () => {
    const monthlyStats = [
        { month: 'Jan', transactions: 45, carbonSaved: 12 },
        { month: 'Feb', transactions: 78, carbonSaved: 18 },
        { month: 'Mar', transactions: 56, carbonSaved: 15 },
        { month: 'Apr', transactions: 89, carbonSaved: 22 },
        { month: 'May', transactions: 67, carbonSaved: 19 },
    ];

    const recentActivities = [
        { id: 1, type: 'Recycling', user: 'EcoBiz Inc.', time: '2h ago', amount: '1.2t Plastic' },
        { id: 2, type: 'Purchase', user: 'Green Retail', time: '4h ago', amount: '450kg Metal' },
        { id: 3, type: 'Exchange', user: 'Circular Startups', time: '1d ago', amount: '320 Units' },
    ];

    const chartColors = {
        line: '#059669',
        bar: '#059669',
        axis: '#64748b',
        grid: '#e2e8f0'
    };

    useEffect(() => {
        const handleResize = () => window.dispatchEvent(new Event('resize'));
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="dashboard-container min-h-screen bg-gray-50 p-6">
            {/* Dashboard Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Circular Economy Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome back, Administrator</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Stats Card 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500">Total Transactions</p>
                            <p className="text-3xl font-bold text-gray-900 mt-2">1,240</p>
                        </div>
                        <div className="p-3 bg-green-100 rounded-lg">
                            <FaRecycle className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-green-600">
                        <FaChartLine className="mr-2" />
                        <span>+12.4% from last month</span>
                    </div>
                </div>

                {/* Stats Card 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500">Active Users</p>
                            <p className="text-3xl font-bold text-gray-900 mt-2">4,892</p>
                        </div>
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <FaUsers className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-blue-600">
                        <FaChartLine className="mr-2" />
                        <span>+8.2% new registrations</span>
                    </div>
                </div>

                {/* Stats Card 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500">Waste Diverted</p>
                            <p className="text-3xl font-bold text-gray-900 mt-2">58.2t</p>
                        </div>
                        <div className="p-3 bg-purple-100 rounded-lg">
                            <FaBoxOpen className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-purple-600">
                        <FaChartLine className="mr-2" />
                        <span>Equivalent to 12,000 trees</span>
                    </div>
                </div>

                {/* Stats Card 4 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500">Economic Impact</p>
                            <p className="text-3xl font-bold text-gray-900 mt-2">$2.4M</p>
                        </div>
                        <div className="p-3 bg-yellow-100 rounded-lg">
                            <FaDollarSign className="w-6 h-6 text-yellow-600" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-yellow-600">
                        <FaChartLine className="mr-2" />
                        <span>+18.7% YTD growth</span>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Line Chart */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Monthly Transactions</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={monthlyStats}>
                                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                                <XAxis 
                                    dataKey="month" 
                                    stroke={chartColors.axis}
                                    tick={{ fill: chartColors.axis }}
                                />
                                <YAxis 
                                    stroke={chartColors.axis}
                                    tick={{ fill: chartColors.axis }}
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <Line 
                                    type="monotone" 
                                    dataKey="transactions" 
                                    stroke={chartColors.line}
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Bar Chart */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Carbon Saved (tons)</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={monthlyStats}>
                                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                                <XAxis 
                                    dataKey="month" 
                                    stroke={chartColors.axis}
                                    tick={{ fill: chartColors.axis }}
                                />
                                <YAxis 
                                    stroke={chartColors.axis}
                                    tick={{ fill: chartColors.axis }}
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar 
                                    dataKey="carbonSaved" 
                                    fill={chartColors.bar}
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Recent Activities & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activities */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
                    <div className="space-y-4">
                        {recentActivities.map(activity => (
                            <div key={activity.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="flex items-center space-x-4">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <FaRecycle className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{activity.type}</p>
                                        <p className="text-gray-600 text-sm">{activity.user}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">{activity.amount}</p>
                                    <p className="text-gray-500 text-sm">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        <button className="w-full p-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center gap-2">
                            <FaPlusCircle className="w-5 h-5" />
                            Add New Listing
                        </button>
                        <button className="w-full p-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center gap-2">
                            <FaChartLine className="w-5 h-5" />
                            Generate Report
                        </button>
                        <button className="w-full p-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors flex items-center justify-center gap-2">
                            <FaUsers className="w-5 h-5" />
                            Manage Users
                        </button>
                        <button className="w-full p-3 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors flex items-center justify-center gap-2">
                            <FaDollarSign className="w-5 h-5" />
                            System Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;