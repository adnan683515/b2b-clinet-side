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




const Cetagory = () => {

    const {user} = useContext(Authcontext)

    return (
        <div className='bg-orange-50 mb-10 py-10'>

            <h1 className='text-3xl text-center pb-2'>Our Products Cetagory</h1>

            <div className='grid  grid-cols-2 gap-3  sm:grid-cols-3 md:grid-cols-5 w-[98%] sm:w-[80%] mx-auto'>

                <Link to={`/cetagory/Office Supplies & Stationery`} className=" p-5  shadow-md bg-white   ">
                    <Lottie size={20} animationData={animation_1}></Lottie>
                    <h1 className='text-center'>Office Supplies & Stationery</h1>

                </Link>

                <Link to={`/cetagory/Health & Beaut`} className=" relative   shadow-md bg-white   ">
                    <Lottie size={20} animationData={animation_2}></Lottie>
                    <h1 className='absolute left-2bottom-5'>Health & Beauty</h1>
                </Link>
                <Link to={`/cetagory/Tech Gadgets`} className=" p-5   shadow-md bg-white  ">
                    <Lottie size={20} animationData={animation_3}></Lottie>
                    <h1>Health & Beauty</h1>
                </Link>
                <Link to={'/cetagory/Electronics & Gadgets'} className=" p-5  shadow-md bg-white   ">
                    <Lottie size={20} animationData={animation_4}></Lottie>
                    <h1>Electronics & Gadgets</h1>
                </Link>
                <Link to={`/cetagory/Shoes`} className="  p-5 shadow-md  bg-white   ">
                    <Lottie size={20} animationData={animation_5}></Lottie>
                    <h1>Shoes</h1>
                </Link>
                <Link to={`/cetagory/Watches`} className="  p-5 shadow-md  bg-white   ">
                    <Lottie size={20} animationData={watch}></Lottie>
                    <h1>Watches</h1>
                </Link>
                <Link to={`/cetagory/Home & Kitchen Appliances`} className=" relative  p-5 shadow-md  bg-white   ">
                    <Lottie size={20} animationData={animation_9}></Lottie>
                    <h1 className="absolute left-2 bottom-6">Home & Kitchen Appliances</h1>
                </Link>
                <Link to={`/cetagory/Womens Clothes`} className="relative  p-5 shadow-md  bg-white   ">
                    <Lottie size={20} animationData={animation_10}></Lottie>
                    <h1 className='absolute left-2 bottom-6'>Women's Clothes</h1>
                </Link>
                <Link to={`/cetagory/Mans Clothes`} className=" relative  shadow-md  bg-white   ">
                    <Lottie size={20} animationData={animation_6}></Lottie>
                    <h1 className='absolute left-2 bottom-6'>Man's Clothes</h1>
                </Link>
                <Link to={`/cetagory/Office Supplies & Stationery`} className="   shadow-md  bg-white   ">
                    <Lottie size={20} animationData={animation_11}></Lottie>
                    <h1>Stationery</h1>
                </Link>

            </div>
        </div>
    );
};

export default Cetagory;