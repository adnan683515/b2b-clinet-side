import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const slides = [
    {
        img: "https://i.ibb.co/KzXQSPj2/shop-4527402-1280.jpg",
        text: "Your Trusted B2B Wholesale Marketplace",
        subtext: "Source products directly from verified suppliers.",
        subtext2: "Bulk deals, low prices, and fast fulfillment.",
        buttonText: "Start Sourcing",
    },
    {
        img: "https://i.ibb.co/ZzD1yMt1/pexels-shattha-pilabut-38930-135620.jpg",
        text: "Elegant Styles for Modern Women",
        subtext: "From office chic to party glam – all in one place.",
        subtext2: "Exclusive deals with free delivery & easy returns.",
        buttonText: "View Collection",
    },
    {
        img: "https://i.ibb.co/8nNsWkx4/pexels-mnzoutfits-1598505.jpg",
        text: "Step into style with every pair.",
        subtext: "Explore premium, handmade shoes for every occasion.",
        subtext2: "Support local craftsmanship with every purchase.",
        buttonText: "Shop Shoes",
    },
    {
        img: "https://i.ibb.co/ZRKFBDCT/pexels-cup-of-couple-7656031.jpg",
        text: "Upgrade Your Kitchen with Smart Essentials.",
        subtext: "Cookware, tools & appliances curated for every home.",
        subtext2: "Perfect for home chefs and bulk buyers alike.",
        buttonText: "Shop Kitchen",
    },
    {
        img: "https://i.ibb.co/7Ndm53zH/pexels-shkrabaanthony-4348404.jpg",
        text: "All Laptops. One Sale. Unmatched Deals.",
        subtext: "Top brands, high performance, and unbeatable prices.",
        subtext2: "Upgrade your tech with confidence today.",
        buttonText: "Shop Laptops",
    },
];

const Slider = ({ onGetStartedClick }) => {
    return (
        <div className="w-[100%] mx-auto h-[50vh]  sm:h-[85vh] max-h-[700px] overflow-hidden ">
            <AwesomeSlider 

                
                bullets={true}
                infinite={true}
                className="h-full ">
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full h-full">
                        <img
                            src={slide.img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
                            <h2 className="text-orange-400 sm:text-3xl lg:text-4xl font-bold sm:mb-4 max-w-2xl leading-snug">
                                {slide.text}
                            </h2>
                            <p className="text-white text-sm sm:text-base md:text-lg mb-1">{slide.subtext}</p>
                            <p className="text-white text-sm sm:text-base md:text-lg mb-4">{slide.subtext2}</p>
                            <button
                                onClick={onGetStartedClick}
                                className="bg-[#f9943b]  text-white sm:px-6 px-2 sm:py-2 py-1 rounded  sm:text-lg transition"
                            >
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </AwesomeSlider>
        </div>
    );
};

export default Slider;
