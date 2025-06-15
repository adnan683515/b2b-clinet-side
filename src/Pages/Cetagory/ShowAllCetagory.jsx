import React from 'react';
import Cetagory from './Cetagory';
import { motion } from "framer-motion";
import ShowAllCetagoryy from './ShowAllCetagory';




const ShowAllCetagory = () => {

    
    return (
        <div>
            <div className="text-center space-y-2 px-4 py-6">
                {/* Upper Title Animation */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-3xl sm:text-4xl font-bold text-cyan-950"
                >
                    Explore Our <span className="text-orange-500">Top Categories</span>
                </motion.h1>

                {/* Subtitle Animation */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-base sm:text-lg text-orange-500 font-medium"
                >
                    Find everything you need – well organized and easy to browse!
                </motion.p>
            </div>
            <Cetagory></Cetagory>
            
        </div >
    );
};

export default ShowAllCetagory;