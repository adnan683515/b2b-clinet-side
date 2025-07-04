import { createBrowserRouter, Link } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Cetagory from './../Pages/Home/Cetagory';
import Allproducts from "../Pages/Allproducts/Allproducts";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Myproduct from "../Pages/Myproduct/Myproduct";
import PrivetRouter from "./PrivetRouter";

import ProductDetails from "../Pages/Details/ProductDetails";
import MyCart from "../Pages/Cart/MyCart";
import Update from "../Pages/Update/Update";
import { toast } from 'react-toastify';
import ShowAllCetagory from "../Pages/Cetagory/ShowAllCetagory";






export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: Home
            }, {
                path: "/login",
                Component: Login
            },
            {
                path: "/signup",
                Component: SignUp
            }, {
                path: "/cetagory/:name",

                hydrateFallbackElement: <div className='flex justify-center items-center my-20'>
                    <span className="loading loading-spinner text-cyan-950"></span>
                </div>,
                element: <PrivetRouter>
                    <Cetagory></Cetagory>
                </PrivetRouter>
            }, {
                path: "/all-products",
                loader: (() => fetch('https://b2b-server-side.vercel.app/allProducts')),
                hydrateFallbackElement: <div className='flex justify-center items-center my-20'>
                    <span className="loading loading-spinner text-cyan-950"></span>
                </div>,
                element: <PrivetRouter>
                    <Allproducts></Allproducts>
                </PrivetRouter>
            }, {
                path: '/addproduct',
                hydrateFallbackElement: <div className='flex justify-center items-center my-20'>
                    <span className="loading loading-spinner text-cyan-950"></span>
                </div>,
                element: <PrivetRouter>
                    <AddProduct></AddProduct>
                </PrivetRouter>
            },
            {
                path: "/myproudcts/:email",
                hydrateFallbackElement: <div className='flex justify-center items-center my-20'>
                    <span className="loading loading-spinner text-cyan-950"></span>
                </div>,
                element: <PrivetRouter>
                    <Myproduct></Myproduct>
                </PrivetRouter>
            },
            {
                path: "/details/:id",
                hydrateFallbackElement: <div className='flex justify-center items-center my-20'>
                    <span className="loading loading-spinner text-cyan-950"></span>
                </div>,
                element: <PrivetRouter>
                    <ProductDetails></ProductDetails>
                </PrivetRouter>
            }
            , {
                path: "/mycartt",
                hydrateFallbackElement: <div className='flex justify-center items-center my-20'>
                    <span className="loading loading-spinner text-cyan-950"></span>
                </div>,
                element: <PrivetRouter>
                    <MyCart></MyCart>
                </PrivetRouter>
            }, {
                path: "/update/:id",
                hydrateFallbackElement: <div className='flex justify-center items-center my-20'>
                    <span className="loading loading-spinner text-cyan-950"></span>
                </div>,
                element: <PrivetRouter>
                    <Update></Update>
                </PrivetRouter>
            }, {
                path: "/allCetagory",
                hydrateFallbackElement: <div className='flex justify-center items-center my-20'>
                    <span className="loading loading-spinner text-cyan-950"></span>
                </div>,
                Component: ShowAllCetagory

            }

        ]
    }, {
        path: "/*",
        element: <div className="min-h-screen flex flex-col items-center justify-center bg-[#08566e] text-white px-4 text-center">
            <h1 className="text-7xl font-extrabold mb-4 text-[#f9943b]">404</h1>
            <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-lg mb-6 max-w-md">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to={'/'}

                className="bg-[#f9943b] hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded transition"
            >
                Go to Home
            </Link>
        </div>
    }
])