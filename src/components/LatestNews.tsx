'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const LatestNews = () => {
    const news = [
        {
            image: "/news.png",
            date: "February 6, 2024",
            author: "ADMIN",
            title: "Anyload247 Expands to More Countries!",
            description: "We're growing! Our international shipping network now covers more destinations, ensuring faster and more reliable deliveries across the globe.",
        },
        {
            image: "/news.png",
            date: "February 6, 2024",
            author: "ADMIN",
            title: "New Feature: Real-Time Shipment Alerts!",
            description: "Stay updated every step of the way with instant notifications on your package's status—right from pickup to delivery.",
        },
        {
            image: "/news.png",
            date: "February 6, 2024",
            author: "ADMIN",
            title: "Introducing VIP Vehicle Leasing with Security!",
            description: "Need a secure and comfortable ride? Anyload247 now offers VIP vehicle leasing with professional security escorts for business trips, special events, and high-profile transportation. Travel with confidence and peace of mind!",
        }
    ];

    return (
        <div className="bg-[#04C97710] py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-semibold mb-4">Latest News & Updates</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Stay informed with the latest developments at Anyload247. From service expansions to new features
                        and exclusive offers, we keep you updated on everything that makes shipping easier and more
                        efficient. Check out what&apos;s new!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {news.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="relative h-48 m-4 rounded-lg overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="px-6 pb-4">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <span>{item.date}</span>
                                    <span>|</span>
                                    <span>{item.author}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                                <button className="text-[#04C977] font-medium hover:text-[#037244] text-sm">
                                    Read more...
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestNews;