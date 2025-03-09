import React, { useEffect, useState } from 'react';
import { 
  FaRecycle, FaUsers, FaChartLine, FaDollarSign, FaBoxOpen, 
  FaPlusCircle, FaDownload, FaFilter, FaArrowUp, FaArrowDown 
} from 'react-icons/fa';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { motion } from 'framer-motion';
import './Dashboard.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-4 rounded-lg shadow-lg border border-gray-100">
        <p className="font-semibold text-gray-800 mb-2">{label}</p>
        <div className="space-y-1">
          <div className="flex items-center text-green-600">
            <FaChartLine className="mr-2" />
            <span>Transactions: {payload[0].value}</span>
          </div>
          <div className="flex items-center text-emerald-700">
            <FaRecycle className="mr-2" />
            <span>Carbon Saved: {payload[1].value}t</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const DashboardPage = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  const [statsData, setStatsData] = useState({
    monthlyStats: [
      { month: 'Jan', transactions: 45, carbonSaved: 12, returns: 8 },
      { month: 'Feb', transactions: 78, carbonSaved: 18, returns: 5 },
      { month: 'Mar', transactions: 56, carbonSaved: 15, returns: 7 },
      { month: 'Apr', transactions: 89, carbonSaved: 22, returns: 9 },
      { month: 'May', transactions: 67, carbonSaved: 19, returns: 6 },
    ],
    materialDistribution: [
      { name: 'Plastic', value: 35 },
      { name: 'Metal', value: 25 },
      { name: 'Glass', value: 20 },
      { name: 'Paper', value: 15 },
      { name: 'Other', value: 5 },
    ],
    recentActivities: [
      { id: 1, type: 'Recycling', user: 'EcoBiz Inc.', time: '2h ago', amount: '1.2t Plastic', status: 'completed' },
      { id: 2, type: 'Purchase', user: 'Green Retail', time: '4h ago', amount: '450kg Metal', status: 'pending' },
      { id: 3, type: 'Exchange', user: 'Circular Startups', time: '1d ago', amount: '320 Units', status: 'completed' },
    ]
  });

  const chartColors = {
    line: '#059669',
    bar: '#059669',
    axis: '#64748b',
    grid: '#e2e8f0',
    pie: ['#059669', '#10B981', '#34D399', '#6EE7B7', '#A7F3D0']
  };

  useEffect(() => {
    const handleResize = () => window.dispatchEvent(new Event('resize'));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDownloadReport = () => {
    // Implement report download logic
    console.log('Downloading report...');
  };

  const handleQuickAction = (action) => {
    // Implement quick action logic
    console.log('Performing action:', action);
  };

  return (
    <div className="dashboard-container min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Circular Economy Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, Administrator</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handleDownloadReport}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <FaDownload className="text-gray-600" />
            <span>Export Report</span>
          </button>
          <div className="relative">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="appearance-none pl-4 pr-8 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
            <FaFilter className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Transactions', value: '1,240', icon: FaRecycle, change: '+12.4%', color: 'green' },
          { title: 'Active Users', value: '4,892', icon: FaUsers, change: '+8.2%', color: 'blue' },
          { title: 'Waste Diverted', value: '58.2t', icon: FaBoxOpen, change: '+5.6%', color: 'purple' },
          { title: 'Economic Impact', value: '$2.4M', icon: FaDollarSign, change: '+18.7%', color: 'yellow' },
        ].map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="stats-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {stat.change.startsWith('+') ? (
                <FaArrowUp className={`text-${stat.color}-600 mr-2`} />
              ) : (
                <FaArrowDown className={`text-${stat.color}-600 mr-2`} />
              )}
              <span className={`text-${stat.color}-600`}>{stat.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Line Chart */}
        <div className="chart-container bg-white p-6 rounded-xl shadow-sm">
          <h3 className="chart-title text-xl font-semibold mb-4">Monthly Transactions & Carbon Saved</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={statsData.monthlyStats}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis 
                  dataKey="month" 
                  stroke={chartColors.axis}
                  tick={{ fill: chartColors.axis }}
                />
                <YAxis 
                  yAxisId="left"
                  stroke={chartColors.axis}
                  tick={{ fill: chartColors.axis }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  stroke={chartColors.axis}
                  tick={{ fill: chartColors.axis }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone"
                  dataKey="transactions"
                  stroke={chartColors.line}
                  strokeWidth={2}
                  dot={{ fill: chartColors.line, strokeWidth: 2 }}
                />
                <Line 
                  yAxisId="right"
                  type="monotone"
                  dataKey="carbonSaved"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ fill: '#3B82F6', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="chart-container bg-white p-6 rounded-xl shadow-sm">
          <h3 className="chart-title text-xl font-semibold mb-4">Material Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statsData.materialDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statsData.materialDistribution.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={chartColors.pie[index % chartColors.pie.length]} 
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend 
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                  formatter={(value, entry) => (
                    <span className="text-gray-600">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activities & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities List */}
        <div className="recent-activities lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {statsData.recentActivities.map(activity => (
              <motion.div 
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="activity-item flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${
                    activity.status === 'completed' ? 'bg-green-100' : 'bg-yellow-100'
                  }`}>
                    <FaRecycle className={`w-5 h-5 ${
                      activity.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                    }`} />
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions Panel */}
        <div className="quick-actions bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {[
              { label: 'Add New Listing', icon: FaPlusCircle, color: 'green' },
              { label: 'Generate Report', icon: FaChartLine, color: 'blue' },
              { label: 'Manage Users', icon: FaUsers, color: 'purple' },
              { label: 'System Settings', icon: FaDollarSign, color: 'yellow' },
            ].map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-3 flex items-center gap-2 rounded-lg transition-colors bg-${action.color}-100 text-${action.color}-700 hover:bg-${action.color}-200`}
                onClick={() => handleQuickAction(action.label)}
              >
                <action.icon className="w-5 h-5" />
                <span>{action.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;