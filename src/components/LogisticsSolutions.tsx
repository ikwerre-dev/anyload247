'use client';

import Image from 'next/image';
import { Truck, Ship, Package, Car, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const LogisticsSolutions = () => {
    const leftServices = [
        {
            Icon: Truck,
            title: "Fright Forwarding",
            description: "We help move goods safely and quickly using our trusted connections and experience."
        },
        {
            Icon: Ship,
            title: "Sea Shipping",
            description: "We transport goods across countries by ship in a reliable and affordable way."
        },
        {
            Icon: Package,
            title: "Product Procurement",
            description: "We help businesses find and buy products from suppliers worldwide, making it easier to get what they need."
        }
    ];

    const rightServices = [
        {
            Icon: Truck,
            title: "Dispatch and Delivery",
            description: "Our mobile app lets customers track their packages in real-time and manage deliveries easily."
        },
        {
            Icon: Car,
            title: "VIP Vehicle Leasing with Security",
            description: "We provide different vehicles for rent, complete with security escorts for safe and comfortable travel."
        },
        {
            Icon: Building2,
            title: "Consolidation & Warehousing",
            description: "Safe and efficient storage solutions, with package consolidation to save shipping costs."
        }
    ];

    return (
        <div className="relative bg-[#025432] py-20">
            <Image src="/bg.png" alt="Background Pattern" fill className="object-cover opacity-10" priority />
            
            <motion.div 
                className="container mx-auto px-6 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <motion.h2 
                    className="text-white text-4xl font-semibold text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Our Logistics Solutions<br />at a Glance
                </motion.h2>

                <div className="relative flex justify-center items-center">
                    <div className="flex flex-col gap-20 w-1/3">
                        {leftServices.map((service, index) => (
                            <motion.div 
                                key={service.title}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="bg-[#00FF9535] p-3 rounded-full">
                                    <service.Icon className="w-8 h-8 text-[#fff]" />
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-medium mb-2">{service.title}</h3>
                                    <p className="text-white/90 text-sm">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        className="w-1/3 px-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative aspect-square overflow-hidden">
                            <Image
                                src="/warehouse.png"
                                alt="Warehouse Workers"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-20 w-1/3">
                        {rightServices.map((service, index) => (
                            <motion.div 
                                key={service.title}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="bg-[#00FF9535] p-3 rounded-full">
                                    <service.Icon className="w-8 h-8 text-[#fff]" />
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-medium mb-2">{service.title}</h3>
                                    <p className="text-white/90 text-sm">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <button className="border border-white text-white px-8 py-2 rounded-md hover:bg-white hover:text-[#037244] transition-colors">
                        VIEW MORE
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default LogisticsSolutions;