import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative bg-[#013F25] pt-[5rem]">
      <div className="absolute inset-0">
        <Image
          src="/banner.svg"
          alt="Shipping Container Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center pt-[5rem] md:pt-[4rem]">
          <div className="text-white w-full max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-[3.5rem] font-bold mb-2 md:mb-3">Anyload247</h1>
            <h2 className="text-2xl md:text-[2.75rem] font-bold leading-tight mb-8 md:mb-10">
              Simplifying delivery for<br className="hidden md:block" /> both businesses and<br className="hidden md:block" /> individuals.
            </h2>

            <div className="flex flex-col md:flex-row gap-4 md:gap-4 w-full">
              <button className="w-full md:w-auto bg-[#04C977] text-white px-6 py-4 rounded-md hover:bg-[#04B870] text-xs font-medium uppercase tracking-wide whitespace-nowrap">
                Click here to begin
              </button>
              <div className="relative flex flex-1 bg-white rounded-md">
                <input
                  type="text"
                  placeholder="INPUT TRACKING ID"
                  className="w-full px-4 py-4 text-xs text-gray-600 focus:outline-none rounded-md"
                />
                <button className="absolute right-1 top-1 bottom-1 bg-[#04C977] text-white px-6 rounded-md hover:bg-[#04B870] text-xs font-medium uppercase tracking-wide">
                  Track Delivery
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[600px] w-full z-10 mt-8 md:mt-0">
            <Image
              src="/person.png"
              alt="Delivery Person"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;