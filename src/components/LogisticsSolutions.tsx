import Image from 'next/image';
import { Truck, Ship, Package, Car, Building2 } from 'lucide-react';

const LogisticsSolutions = () => {
    return (
        <div className="relative bg-[#037244] py-20">
            <Image
                src="/bg.png"
                alt="Background Pattern"
                fill
                className="object-cover opacity-10"
                priority
            />
            
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-white text-4xl font-medium text-center mb-16">
                    Our Logistics Solutions<br />
                    at a Glance
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-2 rounded-full">
                                <Truck className="w-6 h-6 text-[#037244]" />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-medium mb-2">Fright Forwarding</h3>
                                <p className="text-white/90 text-sm">We help move goods safely and quickly using our trusted connections and experience.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white p-2 rounded-full">
                                <Ship className="w-6 h-6 text-[#037244]" />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-medium mb-2">Sea Shipping</h3>
                                <p className="text-white/90 text-sm">We transport goods across countries by ship in a reliable and affordable way.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white p-2 rounded-full">
                                <Package className="w-6 h-6 text-[#037244]" />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-medium mb-2">Product Procurement</h3>
                                <p className="text-white/90 text-sm">We help businesses find and buy products from suppliers worldwide, making it easier to get what they need.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-square">
                        <Image
                            src="/warehouse.png"
                            alt="Warehouse Workers"
                            fill
                            className="object-cover rounded-full"
                            priority
                        />
                    </div>

                    <div className="md:col-start-2 space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-2 rounded-full">
                                <Truck className="w-6 h-6 text-[#037244]" />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-medium mb-2">Dispatch and Delivery</h3>
                                <p className="text-white/90 text-sm">Our mobile app lets customers track their packages in real-time and manage deliveries easily.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white p-2 rounded-full">
                                <Car className="w-6 h-6 text-[#037244]" />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-medium mb-2">VIP Vehicle Leasing with Security</h3>
                                <p className="text-white/90 text-sm">We provide different vehicles for rent, complete with security escorts for safe and comfortable travel.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white p-2 rounded-full">
                                <Building2 className="w-6 h-6 text-[#037244]" />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-medium mb-2">Consolidation & Warehousing</h3>
                                <p className="text-white/90 text-sm">Safe and efficient storage solutions, with package consolidation to save shipping costs.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button className="border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-[#037244] transition-colors">
                        VIEW MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogisticsSolutions;