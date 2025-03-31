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
        <div className="grid md:grid-cols-2 gap-12 items-center pt-[4rem]">
          <div className="text-white max-w-xl">
            <h1 className="text-[3.5rem] font-bold mb-3">Anyload247</h1>
            <h2 className="text-[2.75rem] font-bold leading-tight mb-10">
              Simplifying delivery for both businesses and individuals.
            </h2>

            <div className="flex items-center space-x-4 w-full">
              <button className="bg-[#04C977] text-white px-6 py-4 rounded-md hover:bg-[#04B870] text-xs font-medium uppercase tracking-wide whitespace-nowrap">
                Click here to begin
              </button>
              <div className="relative flex flex-1 max-w-[500px] bg-white rounded-md">
                <input
                  type="text"
                  placeholder="INPUT TRACKING ID"
                  className="w-full px-4 py-4 text-xs text-gray-600 focus:outline-none"
                />
                <button className="absolute right-1 top-1 bottom-1 bg-[#04C977] text-white px-6 rounded-md hover:bg-[#04B870] text-xs font-medium uppercase tracking-wide">
                  Track Delivery
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] z-10">
            <Image
              src="/person.png"
              alt="Delivery Person"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;