import React from 'react';
import { motion } from 'framer-motion';
import './WasteMatching.css';

const WasteMatching = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="waste-matching-container"
        >
            <h1 className="title">Waste Matching Service</h1>
            <p className="description">Connecting waste producers with recyclers to minimize waste.</p>
            {/* Add statistics and process details here */}
        </motion.div>
    );
}

export default WasteMatching;
