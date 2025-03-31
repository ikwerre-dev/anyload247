'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {  ChevronRight } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

    const faqs = [
        {
            question: "How do I book a delivery with Anyload247?",
            answer: "Booking a delivery is easy! Simply use our mobile app or website, enter your pickup and delivery details, select your preferred service, and confirm. Your delivery will be on its way in just three clicks!"
        },
        {
            question: "Does Anyload247 offer international delivery?",
            answer: "Yes, we offer comprehensive international delivery services across multiple countries, with competitive rates and reliable tracking systems."
        },
        {
            question: "How can I track my delivery in real time?",
            answer: "You can track your delivery through our mobile app or website using your tracking ID. Our real-time tracking system provides accurate updates on your package's location."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods including credit/debit cards, bank transfers, and digital wallets for your convenience."
        },
        {
            question: "Is there customer support available 24/7?",
            answer: "Yes, our dedicated customer support team is available 24/7 to assist you with any queries or concerns you may have."
        }
    ];

    return (
        <div className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-semibold mb-2">Frequently Asked</h2>
                            <h2 className="text-4xl font-semibold mb-12 text-[#01A460]">Questions</h2>
                        </motion.div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <button
                                        className={`w-full text-left p-4 rounded-lg flex items-center gap-4 ${activeQuestion === index ? 'bg-[#F5F5F5]' : 'bg-[#F5F5F5]'
                                            }`}
                                        onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                                    >
                                        <div className="bg-[#04C977] p-2 rounded-lg">
                                            <ChevronRight
                                                className={`w-6 h-6 text-white transition-transform ${activeQuestion === index ? 'rotate-90' : ''
                                                    }`}
                                            />
                                        </div>
                                        <span className="font-medium flex-1">{faq.question}</span>
                                    </button>
                                    <AnimatePresence>
                                        {activeQuestion === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden pl-16 bg-gray-50"
                                            >
                                                <p className="p-4 text-gray-600">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        className="relative h-[600px]"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/worker.png"
                            alt="Delivery Man"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;