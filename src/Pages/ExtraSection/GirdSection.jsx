import React from "react";
import { motion } from "framer-motion";
import shoesShop from '../../assets/shoesSHop.jpg'
import shop from '../../assets/shop.jpg'
import electronics from '../../assets/electronics.jpg'
import laptops from '../../assets/laptops.jpg'
import bigsale from '../../assets/bigsaleBackrounRemove.png'

export const GirdSection = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
                <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
                    Grow faster with our
                    <span className="text-slate-400"> all in one solution</span>
                </h2>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
                >
                    Learn more
                </motion.button>
            </div>
            <div className="mb-4 grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12 md:col-span-4">
                    <CardTitle>
                        {laptops}
                    </CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-26 sm:top-70 md:top-40 translate-y-8 rounded-t-2xl bg-[#f9943b]  p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-indigo-50">
                            FEATURE DEMO HERE
                        </span>
                        <h1 className="text-white">
                            Boost your business or upgrade your inventory with 100% authentic, brand new laptops at wholesale prices. We offer the latest models from top brands like HP, Dell, Lenovo, ASUS, Acer, and more — directly sourced and ready for resale or bulk purchase.
                        </h1>
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12  md:col-span-8 ">
                    {/* <CardTitle>
                        {shoesShop}
                    </CardTitle> */}
                    <div className="relative">
                        <img className="rounded-md" src={shoesShop} alt="" />
                        <img className="absolute top-0 right-0 w-[25%]" src={bigsale} alt="" />
                    </div>
                    <div className="absolute bottom-0 left-4 right-4 top-32  sm:top-50 translate-y-8 rounded-t-2xl  bg-black  p-4 transition-transform duration-[250ms]  text-white group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-orange-50">

                            🥿 StepKart Wholesale – Premium Footwear at Factory Prices
                        </span>
                        <div className="flex justify-center items-center">
                            <h1 className="mt-10">
                                Welcome to StepKart Wholesale, your trusted B2B destination for high-quality, affordable footwear. Whether you’re a retailer, distributor, or reseller, we provide bulk quantities of stylish, durable shoes at unbeatable wholesale rates. From trendy sneakers to formal shoes, our catalog is designed to meet the demands of your growing business. No middlemen, no compromises — just direct factory supply and guaranteed profit margins.
                            </h1>
                        </div>

                    </div>
                </BounceCard>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12 md:col-span-8">
                    <CardTitle>

                        {shop}
                    </CardTitle>

                    <div className="absolute bottom-0 left-4 right-4 top-25 sm:top-50 translate-y-8 rounded-t-2xl bg-[#08566e]  p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-emerald-50">
                            🛍️ DeshiBazar Wholesale – One Stop for All Your Product Needs
                        </span>
                        <div>
                            <h1 className="mt-10 text-white"> your trusted B2B wholesale marketplace for all kinds of products under one roof. From fashion and electronics to household goods, shoes, bags, and more — we supply everything in bulk at competitive prices. Whether you're a retailer, online seller, or store owner, we’re here to power your business with quality products, fast delivery, and dependable service. Partner with us for a profitable wholesale journey!

                            </h1>
                        </div>
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12 md:col-span-4 ">
                    <CardTitle>
                        {electronics}
                    </CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-25 sm:top-80 md:top-60 translate-y-8 rounded-t-2xl  bg-gray-900 p-3 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        {/* <span className="block text-center font-semibold text-red-50">
                            FEATURE DEMO HERE
                        </span> */}
                        <h1 className="text-white">Looking for authentic, brand new cameras at unbeatable wholesale prices? At DeshiBazar Wholesale, we offer a wide range of the latest DSLR, mirrorless, and digital cameras from trusted brands. Whether you're a shop owner, studio operator, or online seller . </h1>

                    </div>
                </BounceCard>
            </div>
        </section>
    );
};

const BounceCard = ({ className, children }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: "-1deg" }}
            className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
        >
            {children}
        </motion.div>
    );
};

const CardTitle = ({ children }) => {
    return (
        <div className="">
            <img className="sm:w-[90%] rounded-md mx-auto" src={children} alt="" />
        </div>
        // <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
    );
};