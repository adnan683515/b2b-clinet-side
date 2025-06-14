import React from 'react';
import { Link } from 'react-router';

const DisyplayMyProduct = ({ item }) => {

    const { title, image, cetagory, brand, price } = item
    return (
        <div className="bg-white border-2 border-orange-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-sm mx-auto p-5">
            <img
                src={image}
                alt={title}
                className="w-full h-44 object-contain rounded-lg mb-4"
            />

            <div className="space-y-1">
                <h2 className="text-xl font-bold text-cyan-950">{title}</h2>
                <p className="text-sm text-gray-600">Brand: {brand}</p>
                <p className="text-sm text-gray-600">Category: {cetagory}</p>
                <p className="text-base font-semibold text-orange-500">৳ {price}</p>
            </div>

            <div className="flex justify-between gap-3 mt-4">
                <Link to={`/details/${item?._id}`}

                    className="flex-1 bg-cyan-950 text-center text-white py-2 rounded-md text-sm hover:bg-cyan-900 transition"
                >
                    View More
                </Link>
                <button

                    className="flex-1 bg-orange-500 text-white py-2 rounded-md text-sm hover:bg-orange-600 transition"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DisyplayMyProduct;