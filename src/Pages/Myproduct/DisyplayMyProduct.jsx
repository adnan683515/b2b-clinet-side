import React, { useContext } from 'react';
import { Link } from 'react-router';
import { Authcontext } from './../../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const DisyplayMyProduct = ({ item, data, setData, dark }) => {

    const { title, image, cetagory, brand, price } = item
    const { user } = useContext(Authcontext)



    const handleMyProductDelete = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                const id = item?._id
                const email = user?.email
                const token = user?.accessToken
                const info = { id, email }
                axios.delete('https://b2b-server-side.vercel.app/productDel', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    data: info
                })
                    .then(res => {
                        if (res?.data?.deletedCount) {
                            const filter = data?.filter((product) => product?._id !== id)
                            setData(filter)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })
                    .catch(err => {
                        console.error('Delete error:', err);
                    });

            }
        });



    }
    return (
        <div className={`${dark ? 'bg-gray-900' : 'bg-white'} border-2 border-orange-200 rounded-2xl shadow-md hover:shadow-lg transition-all  w-full max-w-sm mx-auto p-5 hover:scale-95 duration-1000`}>
            <img
                src={image}
                alt={title}
                className="w-full h-44 object-contain rounded-lg mb-4"
            />

            <div className="space-y-1">
                <h2 className={` font-semibold text-cyan-950 ${dark?'text-white':'text-cyan-950'}`}>{title}</h2>
                <p className={`text-sm text-gray-600 ${dark?'text-[#f9943b]':'text-cyan-950'}`}>Brand: {brand}</p>
                <p className={`text-sm text-gray-600 ${dark?'text-white':'text-cyan-950'}`}>Category: {cetagory}</p>
                <p className="text-base font-semibold text-[#f9943b]">৳ {price}</p>
            </div>

            <div className="flex justify-between gap-3 mt-4">
                <Link to={`/details/${item?._id}`}

                    className="flex-1 bg-[#08566e] text-center text-white py-2 rounded-md text-sm hover:bg-cyan-900 transition"
                >
                    View More
                </Link>
                <button
                    onClick={handleMyProductDelete}
                    className="flex-1 bg-[#f9943b] text-white py-2 rounded-md text-sm hover:bg-orange-600 transition"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DisyplayMyProduct;