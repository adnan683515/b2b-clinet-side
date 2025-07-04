import React, { useContext } from 'react';
import animation_1 from '../../assets/animation_1.json'
import animation_2 from '../../assets/animation_2.json'
import animation_3 from '../../assets/animation_3.json'
import animation_4 from '../../assets/animation_4.json'
import animation_5 from '../../assets/animaiton_5.json'
import animation_6 from '../../assets/animation_6.json'
import watch from '../../assets/watch.json'
import animation_9 from '../../assets/animaiton_9.json'
import animation_10 from '../../assets/animatinm_10.json'
import animation_11 from '../../assets/animaton_11.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import { Authcontext } from '../../Context/AuthContext';


import { motion } from "framer-motion";

const Cetagory = () => {
    const { dark } = useContext(Authcontext)


    return (
        <div className={`  py-10 ${dark ? 'bg-black' : 'bg-orange-50'}`}>


            <div

                className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-[95%] sm:w-[96%] mx-auto py-6'
            >
                {[
                    { name: 'Office Supplies & Stationery', animation: animation_1 },
                    { name: 'Health & Beauty', animation: animation_2 },
                    { name: 'Tech Gadgets', animation: animation_3 },
                    { name: 'Electronics & Gadgets', animation: animation_4 },
                    { name: 'Shoes', animation: animation_5 },
                    { name: 'Watches', animation: watch },
                    { name: 'Home & Kitchen Appliances', animation: animation_9 },
                    { name: "Womens Clothes", animation: animation_10 },
                    { name: "Mans Clothes", animation: animation_6 },
                    { name: 'Stationery', animation: animation_11 },
                ].map((item, index) => (
                    <Link
                        key={index}
                        to={`/cetagory/${encodeURIComponent(item.name)}`}
                        className={`relative p-4 ${dark ? 'bg-gray-900 ' : 'bg-white'} shadow-md rounded-lg flex flex-col items-center justify-center text-center space-y-2 hover:shadow-lg transition duration-300`}
                    >
                        <Lottie animationData={item.animation} style={{ width: 80, height: 80 }} />
                        <h1 className={`text-sm font-semibold ${dark ? 'text-white' : 'text-cyan-950'}`}>{item.name}</h1>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Cetagory;