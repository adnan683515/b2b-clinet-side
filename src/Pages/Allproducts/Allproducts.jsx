import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DisplayAllComponents from './DisplayAllComponents';
import { Link, useLoaderData } from 'react-router';
import { Authcontext } from '../../Context/AuthContext';



const Allproducts = () => {

    const [data, setData] = useState([])
    const [format, setFormat] = useState(false)
    const { user, dark } = useContext(Authcontext)
    const [load, setLoad] = useState(true)

    const { count } = useLoaderData()
    const [productsPerPage, setProductsPerpPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        axios.get(`https://b2b-server-side.vercel.app/filterProduct?email=${user?.email}&currentPage=${currentPage}&lmt=${productsPerPage}`, {
            headers: {
                Authorization: `Bearar ${user?.accessToken}`
            }
        })
            .then((res) => {
                setData(res?.data)
                setLoad(false)

            })
            .catch((err) => {
                console.log(err)
            })

    }, [user?.accessToken, user?.email, currentPage, productsPerPage])



    useEffect(() => {
        document.getElementById('title').innerText = 'All Products page'

    }, [])

    //pegination create 
    const showProductsPerpage = Math.ceil(parseInt(count) / parseInt(productsPerPage))


    const numberOfPage = [...Array(showProductsPerpage).keys()]

    

    const handleAvailableProducts = () => {

        try {
            //
            const filtering = data?.filter((item) => item?.mquantity > 100)
            setData(filtering)
        }
        catch {
            //
            console.log("handle avila funciton")
        }
    }

    return (
        <div className='-mb-3'>


            <div className='flex justify-center items-center mb-3'>
                <div className='text-center space-y-2'>
                    <h1 className='text-orange-600 text-2xl font-bold'>Welcome to our full collection!</h1>
                    <div className='flex justify-center items-center'>
                        <p className={`md:w-[50%] ${dark ? 'text-white' : ''} sm:w-[90%] w-[100%]`}>Here you’ll find everything we offer — from bestsellers to the latest drops. Take your time, explore the variety, and discover something that fits your vibe.

                            Whether you're shopping for yourself or someone else, our products are crafted with quality, style, and purpose in mind. Happy browsing!</p>
                    </div>
                </div>
            </div>


            <div className='m-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                {/* Select Option Section */}
                <div className='space-y-2'>
                    <h1 className={`${dark ? 'text-orange-500' : ''} font-semibold`}>You Can Choose Any Options: </h1>
                    <select
                        onChange={() => setFormat(!format)}
                        defaultValue="Card Format"
                        className="select select-warning"
                    >
                        <option value={'Card Format'}>Card Format</option>
                        <option value={'Table Format'}>Table Format</option>
                    </select>
                </div>

                {/* Button Section */}
                <div className='text-center'>
                    <p className="text-orange-500 font-medium mb-2">Click to see all available products!</p>
                    <button onClick={handleAvailableProducts} className="px-5 py-2 bg-green-500 cursor-pointer  hover:bg-orange-500 duration-1000 rounded-xl">
                        Show Available Products
                    </button>
                </div>
            </div>



            <div>
                {
                    load ? (
                        <div className='flex justify-center items-center my-20'>
                            <span className="loading loading-spinner text-cyan-950"></span>
                        </div>
                    ) : format ? (
                        <div className={`p-4 my-3 ${dark ? 'bg-black' : 'bg-neutral-100'} rounded-xl shadow-sm`}>
                            <h2 className="text-2xl font-bold mb-4 text-orange-500 text-center">Product Inventory</h2>

                            <div className="overflow-x-auto rounded-lg border border-cyan-200 shadow-lg">
                                <table className="min-w-full divide-y divide-cyan-700 text-sm text-gray-800">
                                    <thead className="bg-cyan-950 text-white">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide">Image</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide">Title</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide">Category</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide">Brand</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide">Price</th>
                                            <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wide">Stock Status</th>
                                        </tr>
                                    </thead>

                                    <tbody className={`divide-y divide-cyan-100 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
                                        {data?.map((product) => (
                                            <tr key={product._id} className={` transition duration-300 ${dark ? 'text-white' : ''}`}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="avatar">
                                                        <div className="w-10 rounded-full ring-2 ring-offset-2 ring-cyan-500">
                                                            <img src={product?.image} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap font-medium">{product?.title}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{product?.cetagory}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{product?.brand}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-orange-500 font-semibold">{product?.price} Tk</td>
                                                <td className="px-6 py-4 whitespace-nowrap flex gap-2 justify-end">
                                                    <Link
                                                        to={`/update/${product?._id}`}
                                                        className="px-4 py-1 border border-orange-300 rounded-md text-orange-600 hover:bg-orange-50 transition duration-300"
                                                    >
                                                        Update
                                                    </Link>
                                                    <Link
                                                        to={`/details/${product?._id}`}
                                                        className="px-4 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
                                                    >
                                                        View More..
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2'>
                                {
                                    data?.map((item) => (
                                        <DisplayAllComponents dark={dark} key={item?._id} item={item} />
                                    ))
                                }
                            </div>

                        </div>
                    )
                }
            </div>
            <div className='py-4 flex justify-center  '>

                <div className='pb-5 ' >
                    <button onClick={() => {
                        if (currentPage  !== 1 ) {
                            setCurrentPage(currentPage - 1)
                        }
                    }} className='bg-cyan-950 mr-1 text-white border-orange-500 px-3 py-1'> prev </button>
                    {
                        numberOfPage?.map((page) => <button onClick={() => {
                            setCurrentPage((parseInt(page + 1)))
                        }} className={`sm:mx-3 rounded-full  border px-2  ${page + 1 === currentPage ? 'bg-orange-200 text-black' : dark ? 'bg-white text-black' : ''} border-orange-500 `} key={page}> {page + 1} </button>)
                    }
                    <button onClick={() => {
                        if (currentPage > 0  && currentPage < showProductsPerpage) {
                            setCurrentPage(currentPage + 1)
                        }
                    }} className='bg-cyan-950 text-white border-orange-500 px-3 py-1 ml-1'> Next </button>

                    <select defaultValue={productsPerPage} className='bg-cyan-950 py-1 sm:mx-3 text-white' onChange={(e) => {
                        setProductsPerpPage(parseInt(e.target.value))
                        setCurrentPage(1)
                    }}>

                        <option value={'5'}>5</option>
                        <option value={'10'}> 10 </option>
                        <option value={'20'}> 20 </option>
                        <option value={'30'}> 30 </option>

                    </select>
                </div>
            </div>






        </div>
    );
};

export default Allproducts;