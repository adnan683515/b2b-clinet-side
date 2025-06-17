import React from 'react';
import { Link } from 'react-router';

const DisplayTableTr = ({ item, index ,dark }) => {
    return (
    
        <tr className={`hover:bg-gray-100 transition-colors duration-200`}>
            <th className="px-4 py-2 font-medium text-gray-800">{index + 1}</th>
            <td className="px-4 py-2">{item?.title.slice(0, 20)}..</td>
            <td className="px-4 py-2">{item?.cetagory}</td>
            <td className="px-4 py-2">{item?.price} tk</td>
            <td className="px-4 py-2">{item?.miniquantity}</td>
            <td className="px-4 py-2">{item?.brand}</td>
            <td className="sm:px-4 py-2 text-start sm:text-center">
                <Link
                    to={`/details/${item?._id}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white py-2 sm:px-4 px-1  rounded text-sm"
                >
                    View More
                </Link>
            </td>
        </tr>

    );
};

export default DisplayTableTr;