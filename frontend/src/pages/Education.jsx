import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="education-container"
        >
            <h1 className="title">Educational Resources</h1>
            <p className="description">Learn about sustainability and waste management.</p>
            {/* Add educational materials and interactive elements here */}
        </motion.div>
    );
}

export default Education;
