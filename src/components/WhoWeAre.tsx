import Image from 'next/image';

const WhoWeAre = () => {
    return (
        <div className="bg-white pb-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="order-last md:order-first">
                        <div className="relative inline-block pt-[5rem]">
                            <h3 className="text-[#037244] text-xl font-medium">Who we are</h3>
                            <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-[#037244]"></div>
                        </div>

                        <p className="text-gray-700 mt-8 mb-6 text-base leading-relaxed">
                            Anyload247 is a logistics company dedicated to simplifying shipping
                            and delivery for both businesses and individuals.
                        </p>
                        <p className="text-gray-700  text-base leading-relaxed">
                            Our comprehensive services, combined with an intuitive mobile app,
                            empower customers to manage their logistics needs with ease, speed,
                            and efficiency.
                        </p>

                        <div className="py-[5rem] flex gap-6 items-start">
                            <Image
                                src="/target.png"
                                alt="Target Icon"
                                width={200}
                                height={200}
                                className="object-contain"
                            />
                            <div>
                                <div className="relative inline-block">
                                    <h4 className="text-[#037244] text-xl font-medium">Vision Statement</h4>
                                    <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-[#037244]"></div>
                                </div>
                                <p className="text-gray-700 mt-6 text-base leading-relaxed">
                                    To be the most trusted and convenient logistics solution, making shipping and
                                    delivery fast, simple, and affordable for everyone.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="relative inline-block">
                                <h4 className="text-[#037244] text-xl font-medium">Mission Statement</h4>
                                <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-[#037244]"></div>
                            </div>
                            <p className="text-gray-700 mt-6 text-base leading-relaxed">
                                At Anyload247, we harness the power of technology to make logistics easy. Our
                                goal is to provide a user-friendly, cost-effective, and efficient way for businesses
                                and individuals to ship, dispatch and receive goods with just three clicks.
                            </p>
                        </div>
                    </div>

                    <div className="relative h order-first md:order-last">
                        <Image
                            src="/container.png"
                            alt="Green Shipping Container"
                            width={1200}
                            height={2000}
                            className="object-contain object-top"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;