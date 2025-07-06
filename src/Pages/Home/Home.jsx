import React, { useContext, useEffect } from 'react';
import { Hero } from './Hero';
import Cetagory from '../Cetagory/Cetagory';
import { motion } from "framer-motion"
import Marquee from "react-fast-marquee";
import OurTeam from '../ExtraSection/OurTeam';
import Anothersection from '../ExtraSection/Anothersection';
import Focus from '../ExtraSection/Focus';
import { Authcontext } from '../../Context/AuthContext';
import Bannar from './Bannar';
import { GirdSection } from '../ExtraSection/GirdSection';
import Slider from '../../Slider/Slider';



const Home = () => {

    const { dark } = useContext(Authcontext)

    useEffect(() => {
        document.getElementById('title').innerText = 'Home page'
    }, [])




    return (
        <div>
            {/* <Hero></Hero> */}
                <Slider></Slider>
            {/* <Bannar></Bannar> */}



            <Marquee className='my-2' direction='left" | "right"'>

                <div className={`text-center px-4 py-6 ${dark ? 'text-white' : 'bg-neutral-100'} rounded-md max-w-md mx-auto shadow-md`}>
                    <h1 className={`text-4xl font-extrabold ${dark ? 'text-white' : ""} mb-2`}>
                        50% <span className="text-[#f9943b]">Discount</span> Choltese!
                    </h1>
                    <p className={`text-lg ${dark ? 'text-white' : ''}text-cyan-900 font-medium`}>
                        Fatafati offer, miss korle hobe na! 🚀
                    </p>
                </div>

            </Marquee>


            <motion.div
                initial={{ opacity: 0, x: -100 }} // translateX → x
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className={`${dark ? 'bg-black text-white' : 'bg-orange-50'}  py-10 px-4 sm:px-6 md:px-10 lg:px-16`}
            >
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#f9943b]`}>
                        Category Based Products
                    </h2>
                    <p className={`${dark ? 'text-white' : 'text-gray-700'} text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto`}>
                        Easily explore and filter products by categories. From Electronics and Apparel to Furniture and Industrial Tools — our B2B marketplace helps you find exactly what your business needs, faster and smarter.
                    </p>
                </div>
            </motion.div>

            <Focus></Focus>
            <Cetagory ></Cetagory>


           
            <Anothersection></Anothersection>
            <OurTeam></OurTeam>

        </div>
    );
};

export default Home;