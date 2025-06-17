import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../Context/AuthContext';
import { useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const Update = () => {

    const { user , dark } = useContext(Authcontext)
    const params = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`https://b2b-server-side.vercel.app/details/${params?.id}/${user?.email}`,{
            headers: {
                Authorization : `Bearar ${user?.accessToken}`
            }
        })
            .then((res) => {
                setData(res?.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [params?.id])

    const handleUpdate = (e) => {
        e.preventDefault()
        const from = e.target
        const fromdata = new FormData(from)
        let info = Object.fromEntries(fromdata.entries())
        info.mquantity = parseInt(info?.mquantity)
        info.miniquantity = parseInt(info?.miniquantity)
    

        axios.put(`https://b2b-server-side.vercel.app/products/${data?._id}/${user?.email}`, info,{
            headers : {
                Authorization : `Bearar ${user?.accessToken}`
            }
        })
            .then((res) => {
                if (res?.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "update successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (

        <div className={`${dark ? 'bg-black':'bg-neutral-100'} min-h-screen py-10 px-4 flex items-center justify-center`}>
            <div className={`${dark ? 'bg-gray-900':'bg-white'} rounded-2xl shadow-2xl w-full max-w-3xl p-8 md:p-12`}>

                {/* Header Title and Description */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-orange-500">Update Your Product</h1>
                    <p className="text-cyan-900 mt-2 text-sm md:text-base">
                        Make sure your product info is always fresh & accurate – update below 👇
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleUpdate} className="space-y-6">
                    {/* Product Title */}
                    <div>
                        <label className={`block mb-2 text-sm font-semibold ${dark ? 'text-orange-500':'text-cyan-900'}`}>Product Title</label>
                        <input
                            type="text"
                            name="title"
                            required
                            defaultValue={data?.title}
                            placeholder="Enter Your Product Title"
                            className={`w-full px-4 py-2 rounded-md ${dark ? 'bg-black text-white':'bg-gray-100 text-cyan-950 '} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className={`block mb-2 text-sm font-semibold ${dark ? 'text-orange-500':'text-cyan-900'}`}>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={user?.email}
                            readOnly
                            className={`w-full px-4 py-2 rounded-md ${dark ? 'bg-black text-white':'bg-gray-100 text-cyan-950 '} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className={`block mb-2 text-sm font-semibold ${dark ? 'text-orange-500':'text-cyan-900'}`}>Price</label>
                        <input
                            type="number"
                            name="price"
                            required
                            defaultValue={data?.price}
                            placeholder="Your Product Price"
                            className={`w-full px-4 py-2 rounded-md ${dark ? 'bg-black text-white':'bg-gray-100 text-cyan-950 '} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                        />
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className={`block mb-2 text-sm font-semibold ${dark ? 'text-orange-500':'text-cyan-900'}`}>Product Quantity</label>
                        <input
                            type="number"
                            name="mquantity"
                            required
                            defaultValue={data?.mquantity}
                            placeholder="Product Quantity"
                            className={`w-full px-4 py-2 rounded-md ${dark ? 'bg-black text-white':'bg-gray-100 text-cyan-950 '} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                        />
                    </div>
                    <div>
                        <label className={`block mb-2 text-sm font-semibold ${dark ? 'text-orange-500':'text-cyan-900'}`}>Minimum Quantity For buy</label>
                        <input
                            type="text"
                            name="miniquantity"
                            required
                            defaultValue={data?.miniquantity}
                            placeholder="Product Quantity"
                            className={`w-full px-4 py-2 rounded-md ${dark ? 'bg-black text-white':'bg-gray-100 text-cyan-950 '} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                        />
                    </div>

                    {/* Brand */}
                    <div>
                        <label className={`block mb-2 text-sm font-semibold ${dark ? 'text-orange-500':'text-cyan-900'}`}>Brand Name</label>
                        <input
                            type="text"
                            name="brand"
                            required
                            defaultValue={data?.brand}
                            placeholder="Brand Name"
                            className={`w-full px-4 py-2 rounded-md ${dark ? 'bg-black text-white':'bg-gray-100 text-cyan-950 '} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label className={`block mb-2 text-sm font-semibold ${dark ? 'text-orange-500':'text-cyan-900'}`}>Product Image</label>
                        <input
                            type="url"
                            name="image"
                            required
                            defaultValue={data?.image}
                            placeholder="https://yourproductlink.com/image.jpg"
                            className={`w-full px-4 py-2 rounded-md ${dark ? 'bg-black text-white':'bg-gray-100 text-cyan-950 '} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className={`block mb-2 text-sm font-semibold ${dark ? 'text-orange-500':'text-cyan-900'}`}>Category</label>
                        <select
                            name="cetagory"
                            required
                            defaultValue={data?.cetagory}
                            className={`w-full px-4 py-2 rounded-md ${dark ? 'bg-black text-white':'bg-gray-100 text-cyan-950 '} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                        >
                            <option defaultValue={data?.cetagory}>{data?.cetagory}</option>
                            <option value="Electronics & Gadgets">Electronics & Gadgets</option>
                            <option value="Home & Kitchen Appliances">Home & Kitchen Appliances</option>
                            <option value="Fashion & Apparel">Fashion & Apparel</option>
                            <option value="Industrial Machinery & Tools">Industrial Machinery & Tools</option>
                            <option value="Health & Beauty">Health & Beauty</option>
                            <option value="Office Supplies & Stationery">Office Supplies & Stationery</option>
                            <option value="Man's Clothes">Man's Clothes</option>
                            <option value="Watches">Watches</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Women’s Clothes">Women’s Clothes</option>
                        </select>
                    </div>

                    {/* Rating */}
                    <div>
                        <label className={`block mb-2 text-sm font-semibold ${dark ? 'text-orange-500':'text-cyan-900'}`}>Rating</label>
                        <select
                            name="rating"
                            required
                            defaultValue={data?.rating}
                            className={`w-full px-4 py-2 rounded-md ${dark ? 'bg-black text-white':'bg-gray-100 text-cyan-950 '} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                        >
                            <option value={data?.rating}>{data?.rating}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className={`block mb-2 text-sm font-semibold ${dark ? 'text-orange-500':'text-cyan-900'}`}>Product Description</label>
                        <textarea
                            name="des"
                            required
                            defaultValue={data?.des}
                            placeholder="Write a short description..."
                            className={`w-full px-4 py-2 rounded-md ${dark ? 'bg-black text-white':'bg-gray-100 text-cyan-950 '} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                            rows="4"
                        />
                    </div>

                    {/* Submit */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-orange-600 transition"
                        >
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Update;
