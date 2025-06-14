import React from 'react';
import { useLoaderData } from 'react-router';
import { ShowProducts } from '../Cetagory/ShowProducts';

const Cetagory = () => {

    const data = useLoaderData()
    console.log("data", data)


    return (
        <div className=''>
            <div className='flex justify-center items-center py-3'>
                <div className='text-center scroll-py-3'>
                    <h1>Pick Your Vibe 😎: <span className='text-orange-500 text-2xl font-bold'>Table</span> or <span className='text-cyan-900 text-2xl font-bold'>Cards</span> </h1>
                    <p className=' w-[100%] mx-auto sm:w-[80%]'>Easily switch between table and card layouts to explore the data the way you prefer. Table view is great for scanning rows quickly, while card view gives you a more visual breakdown.</p>
                </div>
            </div>
            <div>
                {data?.length ? <ShowProducts data={data} ></ShowProducts> : <div className="flex flex-col items-center justify-center text-center px-4 py-10 space-y-4">
                    {/* Crying Image */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/742/742752.png"
                        alt="crying emoji"
                        className="w-24 h-24 sm:w-32 sm:h-32"
                    />

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-cyan-950">
                        Oops! <span className="text-orange-500">No Products Found</span>
                    </h2>

                    {/* Description */}
                    <p className="text-cyan-800 text-base sm:text-lg max-w-md">
                        Currently, there are no items available in this category. Please check back later or explore other categories!
                    </p>
                </div>}
            </div>



        </div>
    );
};

export default Cetagory;