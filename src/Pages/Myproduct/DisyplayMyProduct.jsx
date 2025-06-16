import React, { useContext } from 'react';
import { Link } from 'react-router';
import { Authcontext } from './../../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const DisyplayMyProduct = ({ item, data, setData }) => {

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
                                const filter = data?.filter((product)=> product?._id !== id )
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
                    onClick={handleMyProductDelete}
                    className="flex-1 bg-orange-500 text-white py-2 rounded-md text-sm hover:bg-orange-600 transition"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DisyplayMyProduct;