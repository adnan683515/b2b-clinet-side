import { Star } from 'lucide-react';
import React from 'react';
import { FaStar } from 'react-icons/fa6';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router';

const CardFormat = ({ data, dark }) => {

    const star = []
    for (let i = 0; i < data?.rating; i++) {
        star.push(<FaStar className=''></FaStar>)
    }


    return (



        <div className={`max-w-sm mx-auto p-4 ${dark ? ' bg-gray-950' : 'bg-white'} border border-[#e0f7fa] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[450px]`}>
            {/* Top part (Image + Info) */}
            <div>
                {/* Image */}
                <div className="w-full h-40 overflow-hidden rounded-xl shadow-sm">
                    <img
                        src={data?.image}
                        alt="product"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Content */}
                <div className={`mt-3 space-y-1   text-[13px] ${dark ? 'text-white' : "text-gray-800"}`}>
                    <h2 className="font-bold text-base text-[#045d75]">
                        {data?.title.slice(0, 10)}...
                    </h2>
                    <p>
                        <span className="font-medium text-gray-500">Category:</span>{" "}
                        {data?.cetagory}
                    </p>
                    <p>
                        <span className="font-medium text-gray-500">Brand:</span>{" "}
                        {data?.brand}
                    </p>
                    <p>
                        <span className="font-medium text-gray-500">Price:</span>{" "}
                        <span className="font-semibold text-[#ff6b35]">{data?.price} ৳</span>
                    </p>
                    <p>
                        <span className="font-medium text-gray-500">Min. Qty:</span>{" "}
                        {data?.miniquantity}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-[#00bcd4] mt-1">
                        <span className="font-semibold">Rating:</span>
                        {star?.map((item, index) => (
                            <span
                                key={index}
                                className="hover:scale-110 transition-transform duration-200"
                            >
                                ⭐
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <p className={`${dark ? 'text-white':'text-gray-600'}`}>
                        Description: {data?.des.slice(0, 30)}...
                    </p>
                </div>
            </div>

            {/* Bottom Button */}
            <Link to={`/details/${data?._id}`} className="block mt-4">
                <button className="w-full py-2 rounded-xl border border-cyan-300 text-cyan-700 font-semibold hover:bg-[#08566e] hover:text-white transition-all duration-700">
                    View More
                </button>
            </Link>
        </div>


    );
};

export default CardFormat;