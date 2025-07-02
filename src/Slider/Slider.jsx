import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const slides = [
    {
        img: "https://i.ibb.co/DPRLdp4B/mohilasale.jpg",
        text: "Massive sale on women's fashion now!",
        subtext: "Trendy, elegant, and budget-friendly styles.",
        subtext2: "Get your favorite look delivered fast.",
        buttonText: "Shop Now",
    },
    {
        img: "https://i.ibb.co/sd1dtcM5/mohil3.jpg",
        text: "Stylish outfits for every occasion.",
        subtext: "Party, office, or casual – all in one place.",
        subtext2: "Free delivery and easy returns.",
        buttonText: "View Collection",
    },
    {
        img: "https://i.ibb.co/whTDL9nS/mohila-2.jpg",
        text: "Support local sellers through smart shopping.",
        subtext: "Discover handmade & unique products.",
        subtext2: "Be part of a thriving community.",
        buttonText: "Shop Local",
    },
    {
        img: "https://i.ibb.co/Lz0HQkkJ/b2b.jpg",
        text: "B2B deals made easier for your business.",
        subtext: "Industry-wise sourcing and fast inquiries.",
        subtext2: "Ideal for wholesale and distributors.",
        buttonText: "Start Sourcing",
    },
    {
        img: "https://i.ibb.co/6Ry8F621/london-3794348-1280.jpg",
        text: "Lifestyle products under one smart platform.",
        subtext: "Decor, electronics & fashion curated for you.",
        subtext2: "Top quality, unbeatable prices.",
        buttonText: "Explore Now",
    },
];

const Slider = ({ onGetStartedClick }) => {
    return (
        <div className="w-[96%] mx-auto h-[40vh] sm:h-[80vh] max-h-[700px] overflow-hidden rounded-md">
            <AwesomeSlider bullets={false} organicArrows={true} className="h-full">
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full h-full">
                        <img
                            src={slide.img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
                            <h2 className="text-orange-400 sm:text-3xl lg:text-4xl font-bold mb-4 max-w-2xl leading-snug">
                                {slide.text}
                            </h2>
                            <p className="text-orange-300 text-sm sm:text-base md:text-lg mb-1">{slide.subtext}</p>
                            <p className="text-orange-200 text-sm sm:text-base md:text-lg mb-4">{slide.subtext2}</p>
                            <button
                                onClick={onGetStartedClick}
                                className="bg-[#f9943b] hover:bg-orange-600 text-white sm:px-6 px-3 sm:py-2 py-1 rounded text-base sm:text-lg transition"
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
