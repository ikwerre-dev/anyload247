"use client"
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Stats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const [deliveredCount, setDeliveredCount] = useState(0);
    const [countryCount, setCountryCount] = useState(0);
    const [clientCount, setClientCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const deliveredTarget = 950;
            const countryTarget = 850;
            const clientTarget = 550;
            
            const deliveredInterval = setInterval(() => {
                setDeliveredCount(prev => {
                    const next = prev + 10;
                    return next >= deliveredTarget ? deliveredTarget : next;
                });
            }, duration / (deliveredTarget / 10));

            const countryInterval = setInterval(() => {
                setCountryCount(prev => {
                    const next = prev + 10;
                    return next >= countryTarget ? countryTarget : next;
                });
            }, duration / (countryTarget / 10));

            const clientInterval = setInterval(() => {
                setClientCount(prev => {
                    const next = prev + 10;
                    return next >= clientTarget ? clientTarget : next;
                });
            }, duration / (clientTarget / 10));

            return () => {
                clearInterval(deliveredInterval);
                clearInterval(countryInterval);
                clearInterval(clientInterval);
            };
        }
    }, [isInView]);

    return (
        <div className="relative bg-white py-[5rem]">
            <Image
                src="/counter.png"
                alt="Background Pattern"
                fill
                className="object-cover"
                priority
            />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4">
                        Excellent Company,<br />
                        Quality Service
                    </h2>
                    <p className="text-gray-600 max-w-3xl text-sm mx-auto">
                        At Anyload247, we take pride in delivering exceptional logistics solutions with efficiency,
                        reliability, and trust. Our numbers speak for themselves:
                    </p>
                </div>

                <div ref={ref} className="grid grid-cols-1 py-[2rem] md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-5xl font-extrabold mb-2 text-[#464242]">
                            {deliveredCount}+
                        </div>
                        <div className="text-gray-600">Delivered Packaged</div>
                    </div>

                    <div className="text-center">
                        <div className="text-5xl font-extrabold mb-2 text-[#464242]">
                            {countryCount}+
                        </div>
                        <div className="text-gray-600">Country Covered</div>
                    </div>

                    <div className="text-center">
                        <div className="text-5xl font-extrabold mb-2 text-[#464242]">
                            {clientCount}+
                        </div>
                        <div className="text-gray-600">Happy Clients</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;