import React from 'react';
import { useLoaderData } from 'react-router';
import { ShowProducts } from '../Cetagory/ShowProducts';

const Cetagory = () => {

    const data = useLoaderData()


    return (
        <div className=''>
            <div className='flex justify-center items-center py-3'>
                <div className='text-center scroll-py-3'>
                    <h1>Pick Your Vibe 😎: <span className='text-orange-500 text-2xl font-bold'>Table</span> or <span className='text-cyan-900 text-2xl font-bold'>Cards</span> </h1>
                    <p className=' w-[100%] mx-auto sm:w-[80%]'>Easily switch between table and card layouts to explore the data the way you prefer. Table view is great for scanning rows quickly, while card view gives you a more visual breakdown.</p>
                </div>
            </div>
            <ShowProducts data={data} ></ShowProducts>
        </div>
    );
};

export default Cetagory;