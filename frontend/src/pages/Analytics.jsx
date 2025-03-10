import React from 'react';
import { motion } from 'framer-motion';
import './Analytics.css';

const Analytics = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="analytics-container"
        >
            <h1 className="title">Analytics Dashboard</h1>
            <p className="description">Insights and data to drive sustainability efforts.</p>
            {/* Add data visualizations and user testimonials here */}
        </motion.div>
    );
}

export default Analytics;
