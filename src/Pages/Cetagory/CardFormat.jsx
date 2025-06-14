import { Star } from 'lucide-react';
import React from 'react';
import { FaStar } from 'react-icons/fa6';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router';

const CardFormat = ({ data }) => {

    const star = []
    for (let i = 0; i < data?.rating; i++) {
        star.push(<FaStar className=''></FaStar>)
    }


    return (

        // <div className='p-3   space-y-1 relative border bg-neutral-100 shadow-md border-gray-300'>
        //     <div className='w-[50%]  mx-auto '>
        //         <img className='w-full' src={data?.image} alt="image" />
        //     </div>
        //     <p>Title: {data?.title.slice(0, 10)}.. </p>
        //     <p>cetagory :{data?.cetagory} </p>
        //     <p>Brand :{data?.brand} </p>
        //     <p>price: {data?.price} tk </p>
        //     <p>Minimum Quantity for buy :{data?.miniquantity} </p>
        //     <div className='flex items-center'>
        //         <p className='flex gap-2'>Rating: {star?.map((item) => item)} </p>
        //     </div>
        //     <p>Description: {data?.des.slice(0, 20)}... </p>

        //     <Link to={`/details/${data?._id}`} className='w-full '>
        //         <button   className='bg-orange-500  py-1 w-full text-center'>view more</button>
        //     </Link>




        // </div>
        <div className="max-w-sm mx-auto p-4 bg-neutral-100 border border-gray-300 shadow-lg rounded-xl space-y-2 hover:shadow-xl transition-shadow duration-300">
            {/* Image */}
            <div className="w-full h-48 overflow-hidden rounded-md">
                <img
                    src={data?.image}
                    alt="product"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="space-y-1 text-sm text-gray-800">
                <p className="font-semibold text-base text-cyan-950">
                    Title: {data?.title.slice(0, 10)}...
                </p>
                <p>Category: <span className="text-gray-600">{data?.cetagory}</span></p>
                <p>Brand: <span className="text-gray-600">{data?.brand}</span></p>
                <p>Price: <span className="text-orange-500 font-semibold">{data?.price} ৳</span></p>
                <p>Min. Quantity: <span className="text-gray-600">{data?.miniquantity}</span></p>

                {/* Rating */}
                <div className="flex items-center">
                    <p className="flex gap-1 text-yellow-500">Rating: {star?.map(item => item)}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600">Description: {data?.des.slice(0, 30)}...</p>
            </div>

            {/* Button */}
            <Link to={`/details/${data?._id}`} className="block">
                <button className="w-full py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md transition duration-200">
                    View More
                </button>
            </Link>
        </div>

    );
};

export default CardFormat;