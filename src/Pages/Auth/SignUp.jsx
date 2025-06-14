import React, { useContext, useEffect, useState } from 'react';
import signup from '../../assets/signup.json'
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import { Authcontext } from '../../Context/AuthContext';


const SignUp = () => {

    const [show, setShow] = useState(false)
    const [error, setError] = useState("")
    const { register, updateUser, setUser, gooleLogin } = useContext(Authcontext)
    const navi = useNavigate()


    useEffect(() => {
        document.getElementById('title').innerText = 'Sign up page'
    }, [])



    const handleRegister = (e) => {
        e.preventDefault()
        setError("")
        const form = e.target
        const fromdata = new FormData(form)
        const informaiton = Object.fromEntries(fromdata.entries())
        const { email, password, name, pic } = informaiton

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!regex.test(password)) {
            setError('Password Must have an Uppercase letter, a lowercase letter, Length must be at least 6 character ')
            return
        }


        register(email, password)
            .then((data) => {

                updateUser({ displayName: name, photoURL: pic })
                    .then(() => {
                        setUser({ ...data, displayName: name, photoURL: pic })
                        toast.success('Registration successfully!', {
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
                        navi('/login')
                    })
                    .catch((er) => {
                        setError(er.message)
                    })


            })
            .catch((error) => {
                setError(error.message)
            })



    }

    const handleGoogleLogin = () => {
        gooleLogin()
            .then(() => {
                toast.success('Registration successfully!', {
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
                navi('/')
            })
            .catch((err) => {
                setError(err.message)
            })
    }



    return (
        // <div className='w-[100%] mx-auto '>
        //     <div className='flex justify-around flex-col sm:flex-row py-2'>

        //         <Lottie className='md:w-[30%]  sm:w-[70%] w-[100%]   ' animationData={signup}></Lottie>

        //         <div className="md:w-[30%] mt-4 md:mt-0 sm:w-[70%] w-[100%] md:p-7 px-5 py-2 space-y-1 '    bg-neutral-200">
        //             <h1 className="text-2xl font-bold text-center">Sign up</h1>
        //             <form onSubmit={handleRegister}
        //                 className="space-y-4">


        //                 <p className='text-red-600 py-1'>
        //                     {error ? error : ""}
        //                 </p>


        //                 <div className="text-sm">
        //                     <label htmlFor="name" className="block  pb-1 ">username</label>
        //                     <input required type="text" name="name" id="name" placeholder="Enter Your username" className="w-full px-4 py-3 rounded-md bg-white" />
        //                 </div>
        //                 <div className="text-sm">
        //                     <label htmlFor="email" className="block  pb-1 ">Email</label>
        //                     <input required type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full px-4 py-3 rounded-md bg-white" />
        //                 </div>




        //                 <div className="space-y-1 text-sm">
        //                     <label htmlFor="pic" className="block  pb-1 ">PhotoURL</label>
        //                     <input required type="text" name="pic" id="pic" placeholder="Your PhotoURL" className="w-full px-4 py-3 rounded-md bg-white" />

        //                 </div>
        //                 <div className="text-sm">
        //                     <label htmlFor="password" className="block pb-1  ">Password</label>
        //                     <input required type={show ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md bg-white" />
        //                     <div className="flex justify-between pt-1 text-xs  ">
        //                         <div className='flex '>
        //                             <input onClick={() => setShow(!show)} type="checkbox" name="" id="" />
        //                             <span className='ml-2'>show password</span>
        //                         </div>
        //                         <a rel="noopener noreferrer" href="#">Forgot Password?</a>
        //                     </div>
        //                 </div>



        //                 <button className="block w-full p-3 text-center rounded-sm bg-orange-500">Sign in</button>
        //             </form>

        //             <div className="flex justify-center space-x-4">
        //                 <button onClick={handleGoogleLogin} className="btn w-full bg-white text-black border-[#e5e5e5]">
        //                     <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
        //                     Login with Google
        //                 </button>

        //             </div>
        //             <p className="text-xs text-center sm:px-6  ">Don't have an account?
        //                 <Link to={'/login'} className="underline dark:text-gray-800">Login up</Link>
        //             </p>
        //         </div>
        //     </div>
        // </div>
        <div className="w-[98%] max-w-7xl mx-auto py-10 px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-xl shadow-lg p-6">

                {/* Lottie Animation */}
                <Lottie
                    animationData={signup}
                    className="w-full sm:w-1/2 md:w-1/3"
                />

                {/* Sign Up Form */}
                <div className="w-full sm:w-1/2 md:w-1/3 bg-neutral-100 rounded-lg p-6 space-y-5">
                    <h1 className="text-3xl font-bold text-center text-cyan-950">Sign Up</h1>

                    <form onSubmit={handleRegister} className="space-y-4">
                        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

                        <div className="space-y-1">
                            <label htmlFor="name" className="block text-sm font-medium">Username</label>
                            <input
                                required
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your username"
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="email" className="block text-sm font-medium">Email</label>
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="pic" className="block text-sm font-medium">Photo URL</label>
                            <input
                                required
                                type="text"
                                name="pic"
                                id="pic"
                                placeholder="Paste your photo URL"
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="password" className="block text-sm font-medium">Password</label>
                            <input
                                required
                                type={show ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <div className="flex justify-between items-center pt-1 text-xs text-gray-600">
                                <label className="flex items-center">
                                    <input type="checkbox" onClick={() => setShow(!show)} className="mr-1" />
                                    Show Password
                                </label>
                                <a href="#" className="text-orange-500 hover:underline">Forgot Password?</a>
                            </div>
                        </div>

                        <button type="submit" className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition">
                            Sign Up
                        </button>
                    </form>

                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <p className="text-sm text-gray-500">OR</p>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Google Login */}
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-2 py-2 bg-white border border-gray-300 rounded-md hover:shadow-md transition"
                    >
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Sign up with Google
                    </button>

                    <p className="text-sm text-center text-gray-700">
                        Already have an account?{" "}
                        <Link to="/login" className="text-orange-500 font-medium hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default SignUp;