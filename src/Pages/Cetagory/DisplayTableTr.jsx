import React from 'react';
import { Link } from 'react-router';

const DisplayTableTr = ({ item, index }) => {
    return (
        // <tr className=''>
        //     <th>{index + 1} </th>
        //     <td>{item?.title.slice(0, 20)}..</td>
        //     <td>{item?.cetagory}</td>
        //     <td> {item?.price} tk </td>
        //     <td>{item?.miniquantity} </td>
        //     <td>{item?.brand} </td>
        //     <td>
        //         <Link to={`/details/${item?._id}`} className='bg-orange-500 text-center px-2 py-2 '>view more..</Link>
        //     </td>
        // </tr>
        <tr className="hover:bg-gray-100 transition-colors duration-200">
            <th className="px-4 py-2 font-medium text-gray-800">{index + 1}</th>
            <td className="px-4 py-2">{item?.title.slice(0, 20)}..</td>
            <td className="px-4 py-2">{item?.cetagory}</td>
            <td className="px-4 py-2">{item?.price} tk</td>
            <td className="px-4 py-2">{item?.miniquantity}</td>
            <td className="px-4 py-2">{item?.brand}</td>
            <td className="px-4 py-2 text-center">
                <Link
                    to={`/details/${item?._id}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded text-sm"
                >
                    View More
                </Link>
            </td>
        </tr>

    );
};

export default DisplayTableTr;