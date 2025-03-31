'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        {
            src: "/ship.png",
            alt: "Warehouse Workers Checking Inventory"
        },
        {
            src: "/ship.png",
            alt: "Cargo Ship with Containers"
        },
        {
            src: "/ship.png",
            alt: "Port Operations with Containers"
        }
    ];
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-semibold mb-4">Our Gallery</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-base">
                        Experience Anyload247 in action! Browse through snapshots of our seamless logistics operations,
                        satisfied customers, and dedicated team working hard to deliver excellence—every mile, every time.
                    </p>
                </motion.div>

                <motion.div 
                    className="flex flex-col md:flex-row gap-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={image.alt}
                            className="flex-1 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Gallery;