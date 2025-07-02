import React from 'react';

export const Hero = () => {
    return (
        <div className="relative h-[50vh] sm:mt-20 sm:h-[80vh] w-full overflow-hidden">
            {/* Background image */}
            <img
                src="https://i.ibb.co/YF708cTv/Beige-and-Brown-Minimalist-New-Style-Collection-Banner-1.png"
                alt="Hero Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Right-side Button */}
            <div className="relative z-10 flex items-center justify-end h-full w-full px-6 sm:px-12">
                <button
                    className="text-white px-6 py-2 rounded text-base transition"
                    style={{
                        backgroundColor: '#f9943b',
                    }}
                    onMouseOver={e => (e.target.style.backgroundColor = '#08566e')}
                    onMouseOut={e => (e.target.style.backgroundColor = '#f9943b')}
                >
                    Show Now
                </button>
            </div>
        </div>
    );
};
