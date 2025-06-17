

import { motion } from "framer-motion"
import { useContext } from "react";
import { Authcontext } from './../../Context/AuthContext';

export const Hero = () => {

    const { dark } = useContext(Authcontext)
    return (
        <div className="relative sm:h-1/2 h-[50vh]">
            <img
                src="https://i.ibb.co/qYnTXgK6/b2b.jpg"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative  bg-opacity-75 bg-deep-purple-accent-700">
                <svg
                    className="absolute  inset-x-0 bottom-0 text-white"
                    viewBox="0 0 1160 163"
                >
                    {/* <path
                        fill="currentColor"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    /> */}


                </svg>



                <div className="relative px-4  sm:py-16 py-2 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full sm:max-w-xl sm:mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="sm:max-w-lg sm:mb-6 font-sans text-xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">

                                Worldwide Bulk Traders
                            </h2>
                            <p className="sm:max-w-xl   sm:mb-4 sm:text-base text-black  md:text-gray-200 md:text-lg">
                                <span className="text-orange-500 sm:text-2xl font-bold">"Empowering Businesses, Globally"</span>
                                We bring together suppliers and buyers from every corner of the world. Whether you're looking to scale
                            </p>
                            <a
                                className={`inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white sm:px-3 py-2  hover:text-teal-accent-700 ${dark ? 'bg-orange-600' : 'bg-orange-600'}`}
                            >
                                Get Started
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                        <div className="sm:w-full w-[90%] mt-5 sm:max-w-xl h-[20vh] sm:h-full  xl:px-8 xl:w-5/12">
                            <motion.div whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }} className={`${dark ? 'bg-cyan-950 text-white' : 'bg-cyan-950'} rounded-tl-4xl rounded-br-4xl  shadow-2xl  `}>
                                <div className="">
                                    <img className="  w-1/2  sm:w-1/2 md:w-full " src="https://i.ibb.co/hxChX8jH/off2.png" alt="" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </div>





    );
};