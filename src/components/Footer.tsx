'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-[#037244] text-white">
            <Image
                src="/ship.png"
                alt="Background"
                fill
                className="object-cover opacity-5"
                priority
            />
            <div className="relative z-10">
                <div className="container mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                         <div className="space-y-6">
                            <Image src="/footerlogo.png" alt="Anyload247" width={200} height={50} />
                            <p className="text-white/90 text-sm">
                                Anyload247 is a logistics company dedicated to simplifying shipping 
                                and delivery for both businesses and individuals.
                            </p>
                            <p className="text-sm">
                                Our comprehensive services, combined with an intuitive mobile 
                                app, empower customers to manage their logistics needs with 
                                ease, speed, and efficiency.
                            </p>
                            <div className="flex gap-4">
                                <Link href="https://instagram.com" className="hover:text-[#04C977]">
                                    <Instagram className="w-6 h-6" />
                                </Link>
                                <Link href="https://facebook.com" className="hover:text-[#04C977]">
                                    <Facebook className="w-6 h-6" />
                                </Link>
                                <Link href="https://linkedin.com" className="hover:text-[#04C977]">
                                    <Linkedin className="w-6 h-6" />
                                </Link>
                                <Link href="https://twitter.com" className="hover:text-[#04C977]">
                                    <Twitter className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>

                         <div>
                            <h3 className="text-lg font-semibold mb-6">GET IN TOUCH</h3>
                            <div className="space-y-4 text-sm">
                                <p>30N River Rd, Desplaines, IL 60016</p>
                                <p>United States</p>
                                <p>+1 224-477-2330</p>
                                <p>contact@anyload247.com</p>
                            </div>
                        </div>

                         <div>
                            <h3 className="text-lg font-semibold mb-6">OUR SERVICES</h3>
                            <div className="space-y-3 text-sm">
                                <p>{'>'} Fright Forwarding</p>
                                <p>{'>'} Sea Shipping</p>
                                <p>{'>'} Product Procurement</p>
                                <p>{'>'} Dispatch and Delivery</p>
                                <p>{'>'} VIP Vehicle Leasing with Security</p>
                                <p>{'>'} Consolidation & Warehousing</p>
                            </div>
                        </div>

                         <div>
                            <h3 className="text-lg font-semibold mb-6">QUICK LINKS</h3>
                            <div className="space-y-3 text-sm mb-8">
                                <p>{'>'} Home</p>
                                <p>{'>'} About Us</p>
                                <p>{'>'} Services</p>
                                <p>{'>'} Contact Us</p>
                            </div>
                            <button className="bg-[#04C977] text-white px-6 py-2 rounded hover:bg-[#037244] text-sm">
                                CLICK HERE TO BEGIN
                            </button>
                            <div className="mt-8">
                                <p className="mb-4 text-sm">Subscribe to our News and Updates</p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter email address"
                                        className="bg-white/10 px-4 py-2 rounded text-sm flex-1"
                                    />
                                    <button className="bg-[#04C977] px-4 py-2 rounded text-sm hover:bg-[#037244]">
                                        SUBSCRIBE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t bg-[#037244] border-white/10">
                    <div className="container mx-auto px-6 py-4 text-center text-sm">
                        © 2025 Anyload 247 All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;