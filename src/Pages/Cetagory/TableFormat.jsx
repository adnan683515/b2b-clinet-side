import React from 'react';
import DisplayTableTr from './DisplayTableTr';

const TableFormat = ({ data ,dark }) => {


    return (
       
        <div className={`overflow-x-auto ${dark ? 'bg-gray-900':'bg-white'} rounded-xl shadow-md p-4 border border-gray-200`}>
            <table className="min-w-full table-auto text-sm text-left text-gray-700">
                <thead className="text-xs uppercase bg-cyan-950 text-white">
                    <tr>
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">Title</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Price (৳)</th>
                        <th className="px-4 py-3">Min. Qty</th>
                        <th className="px-4 py-3">Last Login</th>
                        <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className={`divide-y  ${dark ? 'bg-gray-950 text-white':'bg-white text-black'}`}>
                    {data?.map((item, index) => (
                        <DisplayTableTr dark={dark} key={item?._id} index={index} item={item} />
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default TableFormat;