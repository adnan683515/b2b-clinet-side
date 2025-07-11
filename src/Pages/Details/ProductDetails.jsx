import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link, useParams } from 'react-router';
import OpenModal from './OpenModal';
import { Authcontext } from '../../Context/AuthContext';

const ProductDetails = () => {

    const params = useParams()
    const [details, setDetails] = useState({})
    const { dark,user } = useContext(Authcontext)
    const [load, setLoad] = useState(true)
    const star = []

    useEffect(() => {
        document.getElementById('title').innerText = 'Details page'
    }, [])


    useEffect(() => {
        fetch(`https://b2b-server-side.vercel.app/details/${params?.id}/${user?.email}`,{
            headers : {
                Authorization : `Bearar ${user?.accessToken}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setLoad(false)
                setDetails(data)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [params])


    for (let i = 0; i < details?.rating; i++) {
        star.push(<FaStar></FaStar>)
    }




    return (



        <div className={`px-6 pt-12 ${dark ? 'bg-black' : 'bg-white text-cyan-950'}`}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className={`text-3xl ${dark ? 'text-white' : ''} sm:text-4xl font-bold`}>
                        Know <span className="text-[#f9943b]">Before</span> You{" "}
                        <span className={` ${dark ? 'text-[#f9943b]' : 'text-cyan-950'}`}>Buy</span>
                    </h1>
                    <p className={`text-sm sm:text-base max-w-2xl mx-auto mt-4 ${dark ? 'text-[#f9943b]' : 'text-gray-600'}`}>
                        Everything you need to know before making your move. We got you covered with the specs, vibes, and details that matter.
                    </p>
                </div>


                ${
                    load ? <div className='flex justify-center items-center my-20'>
                        <span className="loading loading-spinner text-cyan-950"></span>
                    </div> : <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${dark ? 'bg-gray-900' : 'bg-gray-50'} p-6 rounded-xl shadow-lg`}>
                        {/* Left - Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { label: "Title", value: details?.title },
                                { label: "Category", value: details?.cetagory },
                                { label: "Brand", value: details?.brand },
                                { label: "Price", value: `${details?.price} tk` },
                                { label: "Quantity", value: details?.mquantity },
                                { label: "Minimum Quantity", value: details?.miniquantity },
                                { label: "Description", value: details?.des, full: true },
                                { label: "Rating", value: <div className="flex gap-1">{star?.map((item, i) => <span key={i}>{item}</span>)}</div> }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`flex gap-4 items-start ${item.full ? "sm:col-span-2" : ""}`}
                                >
                                    {/* SVG Icon */}
                                    <div className={`w-10 h-10 rounded-full ${dark ? '' : 'bg-orange-100'} flex items-center justify-center text-[#f9943b]`}>
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h6 className={`font-semibold text-sm ${dark ? 'text-[#f9943b]' : 'text-cyan-950'}`}>{item.label}</h6>
                                        <div className={`text-sm ${dark ? 'text-white' : 'text-gray-700'} mt-1`}>{item.value}</div> {/* <-- changed from <p> to <div> */}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right - Image and Modal */}
                        <div className="flex flex-col items-center">
                            <img
                                src={details?.image}
                                alt="Product"
                                className="w-full max-w-sm h-64 object-cover rounded-xl shadow"
                            />
                            <div className="mt-6 w-full">
                                <OpenModal dark={dark} item={details} />
                            </div>
                        </div>
                    </div>
                }
            </div>

            {/* Bottom Info Section */}
            <div className={`mt-16   ${dark ? 'text-white' : 'text-cyan-950'}  py-10 px-6 rounded-lg shadow-inner`}>
                <div className="max-w-4xl  mx-auto text-center space-y-6">
                    <h2 className="text-2xl text-[#f9943b] sm:text-3xl font-bold">
                        What You See is What You Get 🛍️
                    </h2>
                    <p className={`text-base sm:text-lg ${dark ? 'text-white' : 'text-gray-70'}`}>
                        All product images and specs are 100% accurate. We don’t play games here. Get full details,
                        real reviews, and a buying experience that’s chill and transparent.
                    </p>
                    <p className={`text-sm sm:text-base ${dark ? 'text-white' : 'text-gray-600'}`}>
                        ✔ Fast delivery options
                        &nbsp; | &nbsp;
                        🔒 Safe payment gateway
                        &nbsp; | &nbsp;
                        💬 Active support 24/7
                    </p>
                    <p className="text-xs text-gray-500">
                        Still confused? Tap that contact button — we’re here to help you decide, no stress.
                    </p>
                </div>
            </div>
        </div>



    );
};

export default ProductDetails;