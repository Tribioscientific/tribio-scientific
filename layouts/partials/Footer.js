import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { email, phone, location } = config.contact_info;
  return (
   
    <footer className="px-4 pt-16 bg-[#1c274d] text-white">
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col items-start justify-between space-y-8 md:flex-row md:space-y-0">
        <div>
          <a href="#">
            {/* Logo */}
            <div className="text-heading">
             <Image
             src="/images/logo-png.png"
             className="w-60"
             alt="logo"
             width={800}
             height={100}
             />
            </div>
          </a>
          <div className="mt-6 flex space-x-4 text-text max-w-md">
           <p className="text-gray-300 text-[15px]">Tribio Scientific Private limited (Formerly known as Tribio Scientific ) is biotechnology company aim to  generate opportunities using biotechnology having Head office at Bangalore and CIN is U20119KA2023PTC178688 . Our branch offices are in Mumbai , Noida, and Gorakhpur.</p>
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold tracking-wide text-heading text-gray-300">
          Products & Services
          </div>
          <div className="mt-6 space-y-3 font-medium">
            <Link
              href="/nutrients"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
             Distillery Nutrient

            </Link>
            <Link
              href="/etp-cpu-nutrient"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
             ETP/CPU Nutrient


            </Link>
            
            <Link
              href="/digester-nutrient"
              className="block text-gray-300 text-[15px] hover:text-white"
            > Tribio Powermix


            </Link>
            
            <Link
              href="/microbial-culture"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
            Microbial Culture


            </Link>
            
            <Link
              href="/pharmaceuticals-standards"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
             Pharmaceuticals Standards


            </Link>
            
            <Link
              href="/pharmaceuticals-impurities"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
            Pharmaceuticals Impurities

            </Link>
            
            
          </div>
        </div>
        <div>
        <div className="text-xl font-semibold tracking-wide text-heading text-gray-300">
        Industry
          </div>
          <div className="mt-6 space-y-3 font-medium">
          <Link
              href="/sugar-and-distillery"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
          Sugar & Distillery


            </Link>
            <Link
              href="/pulp-and-paper"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
            Pulp and paper  
            </Link>
            <Link
              href="/pharmaceuticals"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
          Pharmaceuticals

            </Link>
            <Link
              href="/agriculture"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
         Agriculture
            </Link>
            
            <Link
              href="/animal-feed"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
           Animal feed
            </Link>
            <Link
              href="/waste-to-energy"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
          Waste to energy
            </Link>
          </div>
        </div>
        <div>
        <div className="text-xl font-semibold tracking-wide text-heading text-gray-300">
        Company
          </div>
          <div className="mt-6 space-y-3 font-medium">
          <Link
              href="/about"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
           About Us
            </Link>
            <Link
              href="/our-team"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
            Our Team
            </Link>
            <Link
              href="/our-alliance"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
            Our Alliance
            </Link>
            <Link
              href="/contact"
              className="block text-gray-300 text-[15px] hover:text-white"
            >
           Contact Us
            </Link>
             
          </div>
        </div>
      </div>
      <div className="py-8 pt-20 flex flex-col space-x-0 space-y-4 text-sm font-light  sm:flex-row sm:space-y-0 sm:space-x-6">
        <span>Copyright &copy; 2023-24 - Tribio Scientific Pvt ltd.</span>
        {/* <a href="#" className="text-text/50 hover:text-heading">
          Terms of Service
        </a>
        <a href="#" className="text-text/50 hover:text-heading">
          Privacy Policy
        </a>
        <a href="#" className="text-text/50 hover:text-heading">
          Cookies
        </a> */}
      </div>
    </div>
  </footer>
  );
};

export default Footer;
