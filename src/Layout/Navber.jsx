import React, { useContext, } from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router';
import { Authcontext } from './../Context/AuthContext';
import { Moon, ShoppingCart, SunMoon } from 'lucide-react';
import { Bounce, toast } from 'react-toastify';
import { CartContext } from '../Context/Cartprovider';

// import axios from 'axios';
const Navber = () => {

    const { user, logout, loading, dark, setDark } = useContext(Authcontext)
    const { cartItem } = useContext(CartContext)
    const navigate = useNavigate()



    const handleLogout = () => {
        logout()
            .then(() => {
                toast.error('Logout successfully!', {
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
                navigate('/login')
            })
            .catch((er) => {
                console.log(er)
            })
    }




    const links = <>

        <li className='text-black  md:text-white'><NavLink
            to={'/'} > Home  </NavLink></li>
        <li className='text-black md:text-white'><NavLink
            to={'/allCetagory'} > Categories  </NavLink></li>
        <li className='text-black md:text-white'><NavLink
            to={'/all-products'} > All Products  </NavLink></li>

        <li className='text-black md:text-white'><NavLink to={'/addproduct'}
        > Add Product  </NavLink></li>
        <li className='text-black md:text-white'><NavLink to={`/myproudcts/${user?.email}`}
        > My product  </NavLink></li>
        <li className='text-black md:text-white'><NavLink to={'/mycartt'}
        > My Cart  </NavLink></li>
    </>
    return (

        <div className={`navbar ${dark ? 'bg-gray-900' : 'bg-cyan-950'} text-white px-4 py-2 shadow-md`}>
            <div className="navbar-start">
                {/* Mobile dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white text-black rounded-box w-52">
                        {links}
                    </ul>
                </div>

                {/* Logo */}
                <Link to={'/'}>
                    <img className="w-16 hidden md:block" src={logo} alt="Logo" />
                </Link>
            </div>

            {/* Main Nav Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2 text-sm font-medium">
                    {links}
                </ul>
            </div>


            {/* User Controls */}
            <div className="navbar-end gap-2 cursor-pointer">
                <div className=''>
                    {
                        dark ? <SunMoon onClick={() => setDark(!dark)} size={20} color="#ff7b00" /> : <Moon onClick={() => setDark(!dark)} size={20} color="white" />
                    }
                </div>
                <div>
                    {loading ? (
                        <span className="loading loading-spinner text-white"></span>
                    ) : user ? (
                        <div className="flex items-center gap-3">
                            {/* Cart */}
                            <div className="relative">
                                <ShoppingCart size={28} color="#ffffff" />
                                <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs px-1 rounded-full"> {cartItem}</span>
                            </div>

                            {/* Avatar */}
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} alt="user" />
                                </div>
                            </div>

                            {/* Logout Button */}
                            <button onClick={handleLogout} className="bg-white text-cyan-950 px-3 py-1 rounded-md hover:bg-gray-200 transition">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-1 sm:gap-2 ">
                            <div>
                                <Link to={'/login'} className="bg-orange-500 sm:px-4 rounded-md px-2 py-2 text-white text-center hover:bg-orange-600 transition">
                                    Login
                                </Link>
                            </div>
                            <div className=''>
                                <Link to={'/signup'} className="bg-white text-cyan-950 px-2 sm:px-4 py-2 text-center  rounded-md hover:bg-gray-200 transition">
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>


    )
}


export default Navber;