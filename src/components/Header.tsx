import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full bg-white z-50 py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src={'/logo.png'} 
            alt='logo' 
            width={120} 
            height={35} 
            className="object-contain"
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-xs font-medium hover:text-[#01A460]">HOME</Link>
          <Link href="/about" className="text-xs font-medium hover:text-[#01A460]">ABOUT US</Link>
          <Link href="/services" className="text-xs font-medium hover:text-[#01A460]">SERVICES</Link>
          <Link href="/contacts" className="text-xs font-medium hover:text-[#01A460]">CONTACTS</Link>
          <button className="bg-[#01A460] text-white text-xs font-medium px-6 py-2.5 rounded-md hover:bg-green-700">
            CLICK HERE TO BEGIN
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;