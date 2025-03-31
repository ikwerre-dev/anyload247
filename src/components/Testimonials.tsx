'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            rating: 4,
            comment: "Anyload247 has completely transformed how we handle logistics. The real-time tracking feature gives us peace of mind every step of the way.",
            author: "James Adewale",
            position: "Business Owner",
            image: "/james.png"
        },
        {
            rating: 4,
            comment: "I love how simple and efficient the app is. Just a few clicks and my package is on the way. Customer support is also excellent!",
            author: "David Momah",
            position: "E-commerce Seller",
            image: "/david.png"
        },
        {
            rating: 4,
            comment: "Fast, secure, and affordable! I've used Anyload247 multiple times, and they never disappoint. Highly recommended!",
            author: "Sandra Okenkwo",
            position: "Logistics Manager",
            image: "/sandra.png"
        }
    ];

    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-6">
                <motion.h2 
                    className="text-4xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    What Our Customers Say
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.author}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#037244] fill-[#037244]' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <div className="text-2xl text-[#037244] mb-4">&ldquo;</div>
                            <p className="text-gray-600 mb-6 text-sm">
                                {testimonial.comment}
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#464242]">{testimonial.author}</h4>
                                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;