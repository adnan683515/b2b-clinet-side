import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router';
import Navber from './Navber';
import Footer from './Footer';
import { useNavigation } from 'react-router';
import { Authcontext } from '../Context/AuthContext';


const MainLayout = () => {
    const load = useNavigation()
    const { dark } = useContext(Authcontext)

    return (
        <div>
            <Navber></Navber>


            <div className={`min-h-[calc(100vh-33vh)] ${dark ? 'bg-black': 'bg-white'}`}>
                {
                    load?.state === 'loading' ? <div className='flex justify-center items-center my-20'>
                        <span className="loading loading-spinner text-cyan-950"></span>
                    </div> : <Outlet></Outlet>
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;