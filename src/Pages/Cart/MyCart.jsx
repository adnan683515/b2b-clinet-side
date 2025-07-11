import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../Context/AuthContext';
import DisplayMycart from './DisplayMycart';
import { Link } from 'react-router';


const MyCart = () => {

    const [data, setData] = useState([])
    const { user,dark } = useContext(Authcontext)
    const [load, setLoad] = useState(true)

    const token = user?.accessToken
    useEffect(() => {
        fetch(`https://b2b-server-side.vercel.app/mycart/${user?.email}`, {
            headers: {
                Authorization: `Bearar ${token}`
            }
        })
            .then((res) => res.json())
            .then((result) => {
                setData(result)
                setLoad(false)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    let amount = 0

    useEffect(() => {
        document.getElementById('title').innerText = 'My cart page'
    }, [])



    return (
        <div className='flex justify-center items-center py-10'>
            <div className={`flex flex-col ${dark  ? 'bg-gray-900':'bg-neutral-200'}   max-w-3xl p-6 space-y-4 sm:p-10    rounded-sm w-[100%]`}>
                <h2 className="text-xl text-[#f9943b] font-semibold">Your cart</h2>
                <ul className="flex flex-col divide-y  ">

                    {
                        load ? <div className='flex justify-center items-center my-20'>
                            <span className="loading loading-spinner text-cyan-950"></span>
                        </div> : data?.length ? data?.map((item) => {
                            amount += item?.total
                            return <DisplayMycart dark={dark} data={data} setData={setData} key={item?._id} item={item}></DisplayMycart>
                        }) : <div className="h-[40vh] flex items-center justify-center  px-4">
                            <div className={`${dark ? 'bg-black': "bg-white"} rounded-2xl shadow-lg p-8 max-w-md w-full text-center`}>
                                <h2 className={`text-2xl font-bold ${dark ? 'text-[#f9943b]':' text-cyan-950'} mb-4`}>Your Cart is Empty 🛒</h2>
                                <p className={`${dark ? 'text-white':"text-gray-600"} mb-6`}>Looks like you haven't added anything yet.</p>
                                <Link to={'/all-products'}

                                    className="bg-[#f9943b]  text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition-all duration-300">
                                    Go to Shop
                                </Link>
                            </div>
                        </div>
                    }

                </ul>
                <div className={`space-y-1 text-right ${dark ? 'text-white':""}`}>
                    <p>Total amount:
                        <span className="font-semibold">{amount} tk</span>
                    </p>
                    <p className="text-sm  ">Not including taxes and shipping costs</p>
                </div>
                <div className="flex justify-end space-x-4">
                    <Link to={'/all-products'} type="button" className="px-6 py-2 border rounded-md  bg-amber-500 text-white ">Back
                        <span className="sr-only sm:not-sr-only">to shop</span>
                    </Link>
                    <button type="button" className="px-6 py-2 border rounded-md bg-[#08566e] text-white">
                        <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyCart;