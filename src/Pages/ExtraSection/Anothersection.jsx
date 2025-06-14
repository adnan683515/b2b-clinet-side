import React from 'react';

const Anothersection = () => {
    return (
        <section className="px-4 py-16 mx-auto max-w-7xl md:px-8 text-black ">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-950 uppercase rounded-full bg-orange-500">
                    For Business Owners
                </p>
                <h2 className="text-3xl font-bold  sm:text-4xl">
                    Powering B2B Wholesale With Speed & Trust
                </h2>
                <p className="mt-4 text-base   md:text-lg">
                    Connect with verified suppliers, place bulk orders, and streamline your wholesale operations all in one platform.
                </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
                {/* Feature 1 */}
                <div>
                    <h6 className="mb-2 text-xl font-semibold text-orange-500">✅ Verified Suppliers Only</h6>
                    <p className="text-sm  ">
                        We partner with trusted businesses only — no scams, no low-quality products.
                    </p>
                </div>

                {/* Feature 2 */}
                <div>
                    <h6 className="mb-2 text-xl font-semibold text-orange-500">📦 Bulk Orders, Better Deals</h6>
                    <p className="text-sm  ">
                        Enjoy wholesale pricing that saves you more as your order size grows.
                    </p>
                </div>

                {/* Feature 3 */}
                <div>
                    <h6 className="mb-2 text-xl font-semibold text-orange-500">🚚 Fast Logistics Support</h6>
                    <p className="text-sm  ">
                        Get your products delivered quickly with real-time tracking and smooth coordination.
                    </p>
                </div>

                {/* Feature 4 */}
                <div>
                    <h6 className="mb-2 text-xl font-semibold text-orange-500">🔍 Easy Product Discovery</h6>
                    <p className="text-sm  ">
                        Advanced filters and search to help you find the right products faster.
                    </p>
                </div>

                {/* Feature 5 */}
                <div>
                    <h6 className="mb-2 text-xl font-semibold text-orange-500">💳 Secure B2B Payments</h6>
                    <p className="text-sm  ">
                        Flexible payments with full escrow protection — peace of mind for buyers and sellers.
                    </p>
                </div>

                {/* Feature 6 */}
                <div>
                    <h6 className="mb-2 text-xl font-semibold text-orange-500">🤝 Dedicated Support Team</h6>
                    <p className="text-sm  ">
                        Always here to help — from product inquiries to order disputes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Anothersection;
