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
import { productsPromise } from "../Utility/filterProductapi";
import ProductDetails from "../Pages/Details/ProductDetails";
import MyCart from "../Pages/Cart/MyCart";
import Update from "../Pages/Update/Update";
import { toast } from 'react-toastify';
import AllCetagory from "../Pages/Cetagory/AllCetagory";





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
                path: "/cetagory/:name/:email/:token",
                loader: ({ params }) => {
                    console.log(params)
                    return productsPromise(params?.name,params?.email,params?.token)
                },
                hydrateFallbackElement: <div className='flex justify-center items-center my-20'>
                    <span className="loading loading-spinner text-cyan-950"></span>
                </div>,
                Component: Cetagory
            }, {
                path: "/all-products",
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
                Component: AllCetagory

            }

        ]
    }, {
        path: "/*",
        element: <div className="min-h-screen flex flex-col items-center justify-center bg-cyan-950 text-white px-4 text-center">
            <h1 className="text-7xl font-extrabold mb-4 text-orange-500">404</h1>
            <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-lg mb-6 max-w-md">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to={'/'}

                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded transition"
            >
                Go to Home
            </Link>
        </div>
    }
])