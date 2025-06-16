import React, { useContext, useState } from 'react';
import { Authcontext } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { Bounce, Slide, toast } from 'react-toastify';
import axios from 'axios';
import Swal from 'sweetalert2';

const OpenModal = ({ item }) => {
    const { user } = useContext(Authcontext);
    const [count, setCount] = useState(1);
    const navi = useNavigate()


    const clickPositiveIcon = () => {
        setCount(prev => prev + 1);
    };

    const clickNegtiveIcon = () => {
        if (count > 1) {
            setCount(prev => prev - 1);
        }
    };

    const tk = count * (item?.price || 0);

    const handleBuy =  () => {
        if (count < item?.miniquantity) {
            toast.error(`You will be buy products at least ${item?.miniquantity}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return
        }
        const { _id, ...lastItemProperty } = item
        const productId = _id

        const info = { productId, ...lastItemProperty, name: user?.displayName, total: tk, count, email: user?.email }
        axios.post('https://b2b-server-side.vercel.app/buyproduct', info)
            .then((result) => {
                if (result?.data?.insertedId) {

                    toast("✅ Thank you! Your order has been placed successfully. ", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Slide,
                    });
                }
                axios.patch(`https://b2b-server-side.vercel.app/item/${item?._id}`, { Qnt: count })
                    .then(() => {
                        
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                    navi('/mycartt')

            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (


        <div>
            <button
                className="btn bg-cyan-950 text-white w-full border"
                onClick={() => document.getElementById('my_modal_2').showModal()}
            >
                Check Out
            </button>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-amber-50 border border-amber-200 max-w-2xl w-full">
                    <h3 className="font-bold text-xl text-center mb-4 text-cyan-950">
                        CheckOut Page
                    </h3>
                    <hr className="mb-4" />

                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex-1 space-y-2">
                            <h1 className="text-sm sm:text-base">👤 Name: {user?.displayName}</h1>
                            <h2 className="text-sm sm:text-base">📧 Email: {user?.email}</h2>

                            {item?.mquantity < item?.miniquantity ? (
                                <div className="inline-block px-4 py-1 text-sm font-semibold text-white bg-red-600 rounded-full shadow-md animate-pulse">
                                    ❌ Stock Out
                                </div>
                            ) : (
                                <div className="inline-block px-4 py-1 text-sm font-semibold text-white bg-green-600 rounded-full shadow-md">
                                    ✅ Available
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center items-center sm:w-1/3">
                            <img className="w-full max-h-40 object-contain rounded" src={item?.image} alt="Product" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
                        <div className="space-y-1 text-sm sm:text-base">
                            <p>📦 Product: {item?.title}</p>
                            <p>🗂 Category: {item?.cetagory}</p>
                            <p>💸 Price: {item?.price} tk</p>
                            <p>🔢 Min Qty: {item?.miniquantity}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex items-center gap-4">
                                <p className="text-sm sm:text-base">Quantity:</p>
                                <div className="flex gap-3 items-center text-xl font-semibold">
                                    <button
                                        onClick={clickNegtiveIcon}
                                        className="bg-orange-200 text-cyan-950 px-2 rounded hover:bg-orange-300"
                                    >
                                        -
                                    </button>
                                    <span>{count}</span>
                                    <button
                                        onClick={clickPositiveIcon}
                                        className="bg-orange-200 text-cyan-950 px-2 rounded hover:bg-orange-300"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div className="flex justify-between text-sm sm:text-base font-medium">
                        <p>💰 Total:</p>
                        <p>{tk} tk</p>
                    </div>

                    <div className="flex justify-end mt-4">


                        {count < item?.mquantity && item?.mquantity >= item?.miniquantity &&
                            <button
                                onClick={handleBuy}
                                className="bg-cyan-950 text-white px-6 py-2 rounded hover:bg-cyan-900"
                            >
                                Buy
                            </button>
                        }
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button className="text-white">close</button>
                </form>
            </dialog>
        </div>


    );
};

export default OpenModal;