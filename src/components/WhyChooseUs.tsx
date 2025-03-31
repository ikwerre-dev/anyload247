'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarCheck, MapPin, DollarSign, Truck, Globe2, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: CalendarCheck,
            title: "Effortless Booking",
        },
        {
            icon: MapPin,
            title: "Real-time tracking",
        },
        {
            icon: DollarSign,
            title: "Cost-effective Delivery",
        },
        {
            icon: Truck,
            title: "Fast & Secure Deliveries",
        },
        {
            icon: Globe2,
            title: "Global Reach, Local Expertise",
        },
        {
            icon: HeadphonesIcon,
            title: "Dedicated Customer Support",
        },
    ];

    return (
        <div className="relative bg-[#037244]">
            <Image
                src="/rider.png"
                alt="Delivery Rider"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-[#04492C]/80" />

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                    <div></div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-white text-lg font-medium mb-4">Why Choose us?</h3>
                            <h2 className="text-white text-4xl font-bold mb-6">
                                Delivering Trust, Speed & Convenience - Every Mile, Every Time!
                            </h2>
                            <p className="text-white/90 text-base">
                                At Anyload247, we don&lsquo;t just move packages; we ensure a seamless, secure,
                                and transparent shipping experience. Here's why we stand out:
                            </p>
                        </motion.div>

                        <motion.div
                            className="mt-12 bg-white rounded-2xl p-8"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        className="flex flex-col items-center text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <div className="bg-[#037244] p-4 rounded-full mb-4">
                                            <feature.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-[#464242] font-medium text-sm">
                                            {feature.title}
                                        </h3>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;