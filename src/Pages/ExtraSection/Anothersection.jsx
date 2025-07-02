import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { Authcontext } from './../../Context/AuthContext';
const Anothersection = () => {

    const { dark } = useContext(Authcontext)
    return (
        <div className=' w-[96%] mx-auto'>
            <div

            >
                {/* Header section */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-950 uppercase rounded-full bg-[#f9943b]">
                        For Business Owners
                    </p>
                    <h2 className="text-3xl font-bold sm:text-4xl text-[#f9943b]">
                        Powering B2B Wholesale With Speed & Trust
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-cyan-900">
                        Connect with verified suppliers, place bulk orders, and streamline your wholesale operations all in one platform.
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid relative overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[
                        {
                            title: "✅ Verified Suppliers Only",
                            desc: "We partner with trusted businesses only — no scams, no low-quality products.",
                        },
                        {
                            title: "📦 Bulk Orders, Better Deals",
                            desc: "Enjoy wholesale pricing that saves you more as your order size grows.",
                        },
                        {
                            title: "🚚 Fast Logistics Support",
                            desc: "Get your products delivered quickly with real-time tracking and smooth coordination.",
                        },
                        {
                            title: "🔍 Easy Product Discovery",
                            desc: "Advanced filters and search to help you find the right products faster.",
                        },
                        {
                            title: "💳 Secure B2B Payments",
                            desc: "Flexible payments with full escrow protection — peace of mind for buyers and sellers.",
                        },
                        {
                            title: "🤝 Dedicated Support Team",
                            desc: "Always here to help — from product inquiries to order disputes.",
                        },
                    ].map((feature, index) => (
                        <motion.div

                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .2, amount: 0.4, delay: index * 0.2 }}
                            viewport={{ once: false }}


                            key={index}
                            className={`${dark ? 'bg-gray-900' : 'bg-white'} p-4 shadow-sm rounded-lg hover:shadow-md transition-all duration-300`}
                        >
                            <h6 className="mb-2 text-lg font-semibold text-[#f9943b]">{feature.title}</h6>
                            <p className={` text-sm ${dark ? 'text-white' : 'text-cyan-950'} `}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Anothersection;
