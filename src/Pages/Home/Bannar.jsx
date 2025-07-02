import React, { useContext } from 'react';
import bannar_1 from '../../assets/bannarImage_1.png'
import bannar_2 from '../../assets/bannarImage_2.png'
import { Authcontext } from '../../Context/AuthContext';

const Bannar = () => {


    const { dark } = useContext(Authcontext)
    return (
        <div className='flex sm:justify-around flex-col-reverse gap-3 sm:flex-row '>
            <div className=' flex items-end  w-[90%] sm:w-[50%]' >
                <div className="   space-y-5 ">
                    <div className='space-y-6 items-center '>
                        <h2 className={`text-center sm:text-start sm:mb-6 font-sans text-xl font-bold tracking-tight ${dark ? 'text-white' : 'text-black'} sm:text-4xl sm:leading-none`}>

                            Worldwide  <span className='text-[#f9943b]'>Bulk</span>   Traders 
                        </h2>
                        <p className={` text-center sm:text-start sm:mb-4 w-[100%] sm:w-[80%]  sm:text-base ${dark ? 'text-white' : 'text-black'}   md:text-lg`}>
                            <span className="text-[#f9943b] sm:text-2xl font-bold">"Empowering Businesses, Globally"</span>
                            We bring together suppliers and buyers from every corner of the world. Whether you're looking to scale
                        </p>
                        <div className='flex justify-center items-center sm:justify-start'>
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
                    </div>
                </div>
            </div>

            <div>
                <img src={bannar_1} alt="" />
            </div>
        </div>
    );
};

export default Bannar;