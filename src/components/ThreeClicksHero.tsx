'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ThreeClicksHero = () => {
    // const [trackingId, setTrackingId] = useState('');

    return (
        <div className="relative py-[10rem] flex items-center">
            <Image
                src="/ship.png"
                alt="Logistics Ship"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-[#04492C]/80" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        3Clicks Logistics<br />
                        <span className="text-4xl md:text-5xl">Fast, Simple & Reliable!</span>
                    </h1>

                    <p className="text-white/90 max-w-3xl mx-auto mb-12 text-lg">
                        With just three clicks, you can ship, track, and receive your packages effortlessly.
                        Whether it&apos;s local dispatch, international deliveries, or warehousing, we deliver
                        fast, secure, and cost-effective logistics solutions.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                        <button className="w-full md:w-auto bg-[#04C977] text-white px-6 py-4 rounded-md hover:bg-[#04B870] text-xs font-medium uppercase tracking-wide whitespace-nowrap">
                            Click here to begin
                        </button>
                        <div className="relative flex flex-col w-full flex-1 bg-white rounded-md">
                            <input
                                type="text"
                                placeholder="INPUT TRACKING ID"
                                className="w-full px-4 py-4 text-xs text-gray-600 focus:outline-none rounded-md"
                            />
                            <button className="absolute right-1 top-1 bottom-1 bg-[#04C977] text-white px-6 rounded-md hover:bg-[#04B870] text-xs font-medium uppercase tracking-wide">
                                Track Delivery
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ThreeClicksHero;