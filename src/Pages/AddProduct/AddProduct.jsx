import axios from 'axios';
import { Star } from 'lucide-react';
import React, { useContext, useEffect } from 'react';
import { FaStar } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { Authcontext } from './../../Context/AuthContext';

const AddProduct = () => {

    const { user } = useContext(Authcontext)

    useEffect(() => {
        document.getElementById('title').innerText = 'Add Product page'
    }, [])

    const addProductFrom = (e) => {

        e.preventDefault()
        const from = e.target
        const fromdata = new FormData(from)
        const productInfo = Object.fromEntries(fromdata.entries())
        productInfo.email = user?.email
        productInfo.mquantity = parseInt(productInfo?.mquantity)


        if (Object.keys(productInfo).length != 10) {
            Swal.fire({
                icon: "error",
                title: "Please Fill Up All Information",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            return
        }
        if (parseInt(productInfo?.miniquantity) < 1) {
            Swal.fire({
                icon: "error",
                title: "Minimum quantity must be Greater then O ",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            return
        }


        axios.post('https://b2b-server-side.vercel.app/addproduct', productInfo)
            .then((response) => {

                if (response?.data?.insertedId) {
                    Swal.fire({
                        title: "Congress!..Your Post Successfully!",
                        icon: "success",
                        draggable: true
                    });
                    e.target.reset();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <section className="    ">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl  ">Connect With <span className='text-orange-500'>Verified</span> <span className='text-cyan-900'>Wholesale</span> Suppliers</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center    ">
                        When you need quality at scale, we connect you with verified and trusted suppliers across industries..</p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl  ">Negotiate  <span className='text-cyan-900'>Smarter</span> , Close Faster</h3>
                        <p className="mt-3 text-lg    ">Use built-in tools to communicate, negotiate, and close deals — all in one place.</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex text-white bg-orange-500 items-center justify-center w-12 h-12 rounded-md    ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6  ">Find The Right Products, Instantly</h4>
                                    <p className="mt-2    ">Explore thousands of wholesale products with intelligent search and curated categories.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex  text-white bg-orange-500 items-center justify-center w-12 h-12 rounded-md    ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6  ">On-Time Delivery, Every Time</h4>
                                    <p className="mt-2    ">We partner with top logistics providers to ensure your goods arrive safely and on time..</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex  text-white bg-orange-500 items-center justify-center w-12 h-12 rounded-md    ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6  ">Track Orders & Manage Inventory Like a Pro</h4>
                                    <p className="mt-2    ">Stay on top of your wholesale business with real-time order tracking and smart inventory tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src="https://source.unsplash.com/random/360x480" alt="" className="mx-auto rounded-lg shadow-lg  " />
                    </div>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl  ">Add <span className='text-orange-500'> & </span> Showcase <span className='text-orange-500'>Your</span> Product</h3>
                            <p className="mt-3 text-lg    ">Add, edit, and organize your product listings with ease. Whether you're uploading a single item or bulk inventory, our intuitive dashboard helps you stay in control. Tailored for wholesalers who value speed, accuracy, and flexibility.</p>
                            <form onSubmit={addProductFrom} className="flex  mt-4  flex-col p-1 rounded-sm space-y-6 md:py-0 bg-neutral-200 ">
                                <label className="block px-2 mt-2">
                                    <span className="mb-1"> Title of the Product.</span>
                                    <input required name='title' type="text" placeholder="Title of the Product." className="block bg-white w-full  focus:ring   px-2 py-3         " />
                                </label>
                                <label className="block px-2">
                                    <span className="mb-1">Upload Product cover image.</span>
                                    <input required name='image' type="text" placeholder="Your Product URL" className="block bg-white w-full  focus:ring   px-2 py-3         " />
                                </label>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div>
                                        <label className="block px-2">
                                            <span className="mb-1">Main Quantity</span>
                                            <input required name='mquantity' type="number" placeholder="Enter Your Product Quantity" className="block bg-white w-full  focus:ring   px-2 py-3         " />
                                        </label>
                                    </div>

                                    <div>
                                        <label className="block px-2">
                                            <span className="mb-1">Minimum selling quantity </span>
                                            <input required name='miniquantity' type="number" placeholder="Enter Your Minimum selling quantity" className="block bg-white w-full  focus:ring   px-2 py-3         " />
                                        </label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div>
                                        <label className="block px-2">
                                            <span className="mb-1">Name of the Brand.</span>
                                            <input required name='brand' type="text" placeholder="Enter Your Brand name " className="block bg-white w-full  focus:ring   px-2 py-3         " />
                                        </label>
                                    </div>

                                    <div>
                                        <label className="block px-2">
                                            <span className="mb-1">Category </span>
                                            <select name="cetagory" required defaultValue="Pick a Cetagory" className="select ">
                                                <option disabled={true}>Pick a Cetagory</option>
                                                <option value={"Electronics & Gadgets"} >Electronics & Gadgets</option>
                                                <option value={'Home & Kitchen Appliances'}>Home & Kitchen Appliances</option>
                                                <option value={"Fashion & Apparel"} >Fashion & Apparel</option>
                                                <option value={"Industrial Machinery & Tools"} >Industrial Machinery & Tools</option>
                                                <option value={"Health & Beauty"} >Health & Beauty</option>
                                                <option value={"Office Supplies & Stationery"} >Office Supplies & Stationery</option>
                                                <option value={"Mans Clothes"} >Man's clothes </option>
                                                <option value={"Watches"} >Watches </option>
                                                <option value={"Shoes"} >Shoes </option>
                                                <option value={"Womens Clothes"} >Women’s Clothes </option>
                                                <option value={"Tech Gadgets"} >Tech Gadgets</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div>
                                        <label className="block px-2">
                                            <span className="mb-1">Price </span>
                                            <input required name='price' type="number" placeholder=" product price for each single quantity . " className="block bg-white w-full  focus:ring   px-2 py-3         " />
                                        </label>
                                    </div>

                                    <div>
                                        <label className="block px-2">
                                            <span className="mb-1">Rating </span>
                                            <select name='rating' required defaultValue="Pick a Rating" className="select ">
                                                <option disabled={true}>Pick a Rating</option>
                                                <option value="1"> 1 </option>
                                                <option value="2" >2</option>
                                                <option value="3" >3</option>
                                                <option value="4" >4</option>
                                                <option value="5" >5</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>

                                <label className="block px-2">
                                    <span className="mb-1">Description Of Your Product</span>
                                    <textarea required name='des' placeholder='Your Product Description' rows="3" className="block bg-white w-full rounded-md focus:ring           "></textarea>
                                </label>
                                <button type="submit" className="self-center px-8 py-3 text-lg w-full   bg-orange-500   ">Submit</button>
                            </form>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src="https://source.unsplash.com/random/361x481" alt="" className="mx-auto rounded-lg shadow-lg  " />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddProduct;