
import React, { useContext } from 'react';
import { Authcontext } from './../Context/AuthContext';

const Footer = () => {

    const { dark } = useContext(Authcontext)
    return (

        <footer className={`${dark ? 'bg-gray-900' : 'bg-cyan-950 text-white'} px-6 py-10`}>
            <div className="container mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">
                {/* Company Info */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-orange-400">B2B Mart</h2>
                    <p className="text-sm text-gray-200">
                        Your trusted global B2B wholesale marketplace. From electronics to apparel, we connect verified businesses across the world.
                    </p>
                </div>

                {/* Buyer Resources */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-orange-400">Buyers</h2>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#">Browse Products</a></li>
                        <li><a href="#">Request for Quote</a></li>
                        <li><a href="#">How to Order</a></li>
                        <li><a href="#">Payment & Shipping</a></li>
                    </ul>
                </div>

                {/* Seller Resources */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-orange-400">Sellers</h2>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#">Sell on B2B Mart</a></li>
                        <li><a href="#">Supplier Support</a></li>
                        <li><a href="#">Pricing Plans</a></li>
                        <li><a href="#">Logistics & Warehousing</a></li>
                    </ul>
                </div>

                {/* Community & Help */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-orange-400">Community</h2>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#">Blog & Articles</a></li>
                        <li><a href="#">Customer Support</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                <p>© {new Date().getFullYear()} B2B Mart. All rights reserved.</p>
                <p>Made with 💙 from Bangladesh 🇧🇩</p>
            </div>
        </footer>

    );
};

export default Footer;