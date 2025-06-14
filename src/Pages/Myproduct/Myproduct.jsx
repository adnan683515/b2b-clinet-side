import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { Authcontext } from '../../Context/AuthContext';
import DisyplayMyProduct from './DisyplayMyProduct';

const Myproduct = () => {

    const [data, setData] = useState([])
    const { user } = useContext(Authcontext)


    const params = useParams()

    useEffect(() => {
        document.getElementById('title').innerText = 'My product page'
    }, [])


    useEffect(() => {
        const token = user?.accessToken
        fetch(`https://b2b-server-side.vercel.app/filterProduct?email=${params?.email}`, {
            headers: {
                Authorization: `Bearar ${token}`
            }
        })
            .then((res) => res.json())
            .then((result) => setData(result))
            .catch((error) => {
                console.log(error)
            })
    }, [params, user?.accessToken])



    return (
        <div>


            <div className="bg-orange-50 text-orange-500 py-10 px-4 sm:px-8 lg:px-16 rounded-xl shadow-lg w-full">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        Your <span className="text-cyan-950">Products</span> Dashboard
                    </h1>
                    <p className="text-sm sm:text-base text-cyan-950">
                        Manage all your listings in one place. Edit, delete, or add new products anytime.
                    </p>

                    <div className="mt-6 bg-white text-cyan-950 px-6 py-4 rounded-lg border border-orange-300 shadow-sm">
                        <h2 className="text-lg sm:text-xl font-semibold mb-1">🚀 Ready to increase your sales?</h2>
                        <p className="text-sm sm:text-base">
                            Add more products, keep prices attractive, and stay updated with trends to get more buyers onboard.
                        </p>
                    </div>
                </div>
            </div>


            {
                data?.length ? <div className='grid grid-cols-1 my-3 sm:grid-cols-3 md:grid-cols-4 gap-2'>
                    {data?.map((item) => <DisyplayMyProduct key={item?._id} item={item}></DisyplayMyProduct>)}
                </div> : <div className='flex justify-center items-center'>
                    <div className="flex flex-col items-center justify-center text-center py-10 w-[90%] sm:w-[70%] md:w-[50%]  bg-orange-50 rounded-xl shadow-sm    my-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-950 mb-10">
                            You haven’t added any products yet!
                        </h2>
                        <p className="text-orange-600 mb-6 sm:text-base text-sm">
                            Start showcasing your awesome products and grow your sales today. 🚀
                        </p>
                        <Link to={'/addproduct'} className="bg-cyan-950 text-white px-6 py-3 rounded-md text-center hover:bg-cyan-900 transition-all duration-200">
                            Add Product
                        </Link>
                    </div>

                </div>
            }




        </div>
    );
};

export default Myproduct;