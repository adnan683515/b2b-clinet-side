import React from 'react';
import { Link } from 'react-router';

const DisplayAllComponents = ({ item,dark }) => {
    return (


        <div className={`card ${dark ? 'text-gray-900':'bg-white'} border-2 border-orange-300 shadow-md hover:shadow-lg transition duration-300 rounded-xl`}>
            <figure className="px-4 pt-4">
                <img
                    className="h-48 w-full object-cover rounded-md"
                    src={item?.image}
                    alt="product"
                />
            </figure>
            <div className="card-body space-y-2">
                <h2 className={`card-title text-lg ${dark ? 'text-white':'text-cyan-950 '} font-semibold flex justify-between items-center`}>
                    {item?.title.slice(0, 18)}..
                    <span className={`badge bg-orange-500 ${dark ? 'text-black':'text-white'} px-3 py-1 rounded-md shadow-sm`}>
                        {item?.price} tk
                    </span>
                </h2>
                <p className="text-sm text-gray-600">
                    {item?.des.slice(0, 100)}...
                </p>
                <div className="card-actions justify-between pt-2">
                    <Link
                        to={`/update/${item?._id}`}
                        className="border-2 border-orange-300 text-orange-500 font-medium px-4 py-1 rounded hover:bg-orange-100 transition"
                    >
                        Update
                    </Link>
                    <Link
                        to={`/details/${item?._id}`}
                        className="bg-cyan-950 text-white font-medium px-4 py-1 rounded hover:bg-cyan-900 transition"
                    >
                        View More
                    </Link>
                </div>
            </div>
        </div>




    );
};

export default DisplayAllComponents;