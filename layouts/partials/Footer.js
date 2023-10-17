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
    // <footer className=" bg-[#1e40af] text-white">
    //   <div className="container">
    //     <div className="row border-y border-border py-12">
    //       <div className="md:col-6 lg:col-4">
    //         {/* <Logo /> */}
    //         <img src="/images/logo-png.png" className="h-[75px] w-[200px]" />
    //        {markdownify(footer_content, "h6", "mt-3 font-semibold text-white")}  
    //       </div>
    //       <div className="mt-8 md:col-6 lg:col-2 lg:mt-0">
    //         {/* <h3 className="h5">Socials</h3> */}
    //         <div className="mt-5">
    //           {/* {email && <Link href={`mailto:${email}`}>{email}</Link>} */}
    //           {/* social icons */}
    //           {/* <Social source={social} className="social-icons mt-5" /> */}
    //         </div>
    //       </div>
    //       <div className="mt-8 md:col-6 lg:col-3 lg:mt-0">
    //         <h3 className="h5  text-white ">Quick Links</h3>
    //         {/* footer menu */}
    //         <ul className="mt-5 leading-10">
    //           {menu.footer.map((menu) => (
    //             <li key={menu.name}>
    //               <Link
    //                 href={menu.url}
    //                 className="  hover:underline"
    //               >
    //                 {menu.name}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div className="mt-8 md:col-6 lg:col-3 lg:mt-0">
    //         <h3 className="h5 text-white ">Location & Contact</h3>
    //         <ul className="mt-5 leading-10">
    //           <li>{markdownify(location)}</li>
    //           {phone && (
    //             <li>
    //               <Link href={`tel:${phone}`}>{phone}</Link>
    //             </li>
                
    //           )}
    //           <li>Email : info@tribioscientific.com</li>
    //         </ul>
    //       </div>
    //     </div>
    //     {/* copyright */}
    //     <div className=" py-6 text-center">
    //       {markdownify(copyright, "p", "footer-copy-write")}
    //     </div>
    //   </div>
    // </footer>
    <footer className="px-4 pt-10 pb-18 bg-[#0a083b] text-white">
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
           <p className="text-gray-300 text-[16px]">Our aim is to generate opportunities using biotechnology, thereby paving the way for progress and growth.</p>
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
            >Digester Nutrient


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
            Pulp and paper industry
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
      <div className="mt-12 py-8 flex flex-col space-x-0 space-y-4 text-sm font-medium sm:flex-row sm:space-y-0 sm:space-x-6 text-gray-500">
        <span>Copyright &copy; 2023-24 - Tribio Scientific</span>
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
