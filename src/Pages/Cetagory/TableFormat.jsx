import React from 'react';
import DisplayTableTr from './DisplayTableTr';

const TableFormat = ({ data }) => {


    return (
        // <div>
        //     <div className="overflow-x-auto">
        //         <table className="table ">
        //             <thead>
        //                 <tr className='bg-neutral-200  '>
        //                     <th></th>
        //                     <th>Title</th>
        //                     <th>Cetagory</th>
        //                     <th>Price</th>
        //                     <th>Minimum quantity for buy</th>
        //                     <th>Last Login</th>
        //                     <th>Action</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                     data?.map((item, index) => <DisplayTableTr index={index} key={item?._id} item={item}></DisplayTableTr>)
        //                 }



        //             </tbody>

        //         </table>
        //     </div>
        // </div>
        <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4 border border-gray-200">
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
                <tbody className="divide-y divide-gray-200">
                    {data?.map((item, index) => (
                        <DisplayTableTr key={item?._id} index={index} item={item} />
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default TableFormat;