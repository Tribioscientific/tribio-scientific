import { markdownify } from "@lib/utils/textConverter";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";
import VideoPopup from "./components/VideoPopup";
import Image from "next/image";
import Link from "next/link";

const About = ({ data,brands, }) => {
  const { frontmatter } = data;
  const {
    title,
    about_us,
    works,
    mission,
    video,
    clients,
    our_member,
    our_office,
  } = frontmatter;

  const features = [
    {
      icon: "/images/about/ts-vision.svg",
      alt:"Vision",
        title: "Our Vision",
        desc: "Driven by Research & Proven methodology to enhance the productivity & performance of our customers globally."
    },
    {
        icon: "/images/about/ts-mission.svg",
        alt:"mission",
        title: "Our Mission",
        desc: "We want to be the Number One company in specialized chemical solutions Globally."
    } 
]


  return (
    <>
     <div className="animate">

     <div className=" bg-gradient-to-b from-blue-300 to-[#eae8ee]">
        
          <div className="flex flex-col items-center justify-center px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:pt-16 md:px-0 ">
            <div className="flex flex-col items-center max-w-5xl md:px-8">
              <div className="max-w-5xl mb-1 md:mx-auto text-center lg:max-w-5xl md:mb-12">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-teal-accent-400">
                    About Us
                  </p>
                </div>
                <h1 className="py-2 text-2xl font-bold sm:text-5xl  lg:leading-tight md:mx-auto text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146] ">
                Hello, We’re Tribio Scientific Here For Your Help
                  {/* <br /> (Your No. 1 Destination for Cutting-Edge CPaaS Excellence) */}
                </h1>
                <p className="text-base text-gray-700 md:text-lg">
                We, Tribio Scientific is a team of young and dynamic professionals with a mission to serve industries with novel products and technologies to improve productivity and add value to manufacturing processes. We want our customers to experience the best by investing least.
                </p>
              </div>
            </div>
            <Image
              src="/images/about/ts-about.svg"
              width={650}
              height={600}
              alt="about tribio scientific"
              className="object-contain"
            />
          </div>
        
      </div>

      <div className="animate px-4 mx-auto container lg:px-20 lg:py-20 pt-14">
       
     

      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        <div className=" mt-5 sm:mx-auto sm:text-center"> 
        <h1 className="text-primary text-xl lg:text-2xl text-left">We are an accomplished leadership team </h1>
          <p className="text-md text-start text-gray-800 lg:mt-2">
          We have an experienced technical team which provides guidance and shoot out troubles of our customer on 24X7 basis. We have a group of professionals with domain expertise for different industrial manufacturing processes. In a very short span of time, Tribio with its domestic and international business partner companies have built up a network of a customers in industries such as Sugar & Distillery, Pharmaceuticals, Pulp & Paper, etc. </p>
         
         
           
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center"> 
         <Image className="" width={400} height={300} src="/images/about/team.svg" alt="team"/>
          
        </div> 
        
      </div>
      
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2 lg:mt-10">
      <div className="max-w-md sm:mx-auto sm:text-center"> 
         <Image className="" width={400} height={300} src="/images/about/infrastructure.svg" alt="infrastructure"/>
          
        </div> 
        <div className=" mt-5 sm:mx-auto sm:text-center lg:mt-20"> 
        <h1 className="text-primary text-xl lg:text-2xl text-left">We have innovative biotechnologies and infrastructure </h1> 
          <p className="text-start text-gray-800 pt-2">Our cutting-edge technology, methodology, and modern-day laboratory infrastructure enables Tribio to meet every customer supply demand and conquer traditional challenges. Our expert team of biochemists makes sure that our products’ catalytic powers are rightly used in its applications through vigorous R&D and testing. All our in-house products are manufactured under high surveillance and go through stringent quality checks procedure to ensure that our final bio product meets the set industry standards. </p>
          
           
        </div>
     
        
      </div>

      <div className="grid gap-8 row-gap-10 lg:grid-cols-2 lg:mt-14">
        <div className="mt-5 sm:mx-auto sm:text-center"> 
        <h1 className="text-primary text-xl lg:text-2xl text-left">We guarantee complete customer satisfaction </h1>
          <p className="text-md text-start text-gray-800 lg:mt-2">
          A customer-centric approach is a core of Tribio foundation. We thrive to achieve 100% customer satisfaction through excellent services, customer support. Our services guide individuals and enterprises to overcome traditional production challenges without compromising quality. Our fierce marketing and unmatched distribution network, help us effectively manage and deliver our customers’ needs within the country and around the globe. </p>
         
         
           
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center"> 
         <Image className="" width={400} height={300} src="/images/about/customers.svg" alt="customer"/>
          
        </div> 
        
      </div>



    </div> 


    <div className="animate py-24 bg-gradient-to-b from-blue-300 to-[#eae8ee]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
             
            <h1 className="text-2xl font-bold mb-6  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
            Our Company's Core Vision and Mission
        
        </h1>  
           
             
            <div className="mt-12">
                    <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-2 lg:gap-x-0">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}>
                                    <div className="  text-indigo-600 rounded-full flex items-center justify-center">
                                      <Image src={item.icon} alt={item.alt} height={100} width={300} />
                                        
                                    </div>
                                    <h4 className="text-2xl   text-primary font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="text-black">
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                
              
            </div>
        </div> 
     
      
    </div>
   
      <section className="section pt-0"> 

 {/* Certified By */}
 <div className="animate pt-24">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
            <h2 className="max-w-lg mb-6 text-primary ">
          
             
            </h2>
            <h1 className="text-2xl font-bold mb-6  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
            Certified By
        {/* We offer consistent goods and services to the industry */}
        </h1> 
             
            <p className="mt-4 text-gray-700">
            Our company is an ISO 9001:2008 & 22000:2005 certified formulator and manufacturing company having expertise in Nutrients, Enzymes & Bioproduct, Pharmacopeial impurities & Reference Standards. Our prestigious domestic clients are Dalmia Bharat Sugar & Industries Limited, Aristo Pharma, Alkem Pharma, Shri Venkatesh International Limited. If you are looking for the best nutrients, enzyme & pharmacopeial standards manufacturers and suppliers, look no further! Reach out to us today!
            </p>
            <div className="mt-14">
                    <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
                        {/* LOGO 1 */}
                        <li className="flex-none">
                            <Image 
                            src="/images/brands/iso15.jpg"
                            alt="client"
                            height={100}
                            width={100}
                            />
                        </li>

                        {/* LOGO 2 */}
                        <li className="flex-none">
                        <Image 
                            src="/images/brands/iso18.jpg"
                            alt="client"
                            height={100}
                            width={100}
                            />
                        </li>

                        {/* LOGO 3 */}
                        <li className="flex-none">
                        <Image 
                            src="/images/brands/gmp.jpg"
                            alt="client"
                            height={100}
                            width={100}
                            />
                        </li>

                        {/* LOGO 4 */}
                        <li className="flex-none">
                        <Image 
                            src="/images/brands/haccp.jpg"
                            alt="client"
                            height={100}
                            width={100}
                            />
                        </li>

                    </ul>
                </div>
                

                
              
            </div>
        </div>

 

        {/* Clients */}

        <div className="animate pt-24">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
            <h2 className="max-w-lg mb-6 text-primary ">
          
             
            </h2>
            <h1 className="text-2xl font-bold mb-6  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
            Our Clients
        {/* We offer consistent goods and services to the industry */}
        </h1> 
            <h2 className="mb-2 font-bold text-xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-[#131146]">
            Trusted by world-class brands and organizations of all sizes.
             
            </h2>
            <p className="mt-4 text-gray-700">
             Our prestigious domestic clients are Dalmia Bharat sugar industries ltd, Alkem Laboratories, Aristo Pharmaceutical Private Limited, Shree Venkatesh International Limited and many clients from Nepal.
            </p>
            <div className="mt-14">
                    <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
                        {/* LOGO 1 */}
                        <li className="flex-none">
                            <Image 
                            src="/images/client/c1.jpeg"
                            alt="client"
                            height={100}
                            width={150}
                            />
                        </li>

                        {/* LOGO 2 */}
                        <li className="flex-none">
                        <Image 
                            src="/images/client/c6.png"
                            alt="client"
                            height={100}
                            width={150}
                            />
                        </li>

                        {/* LOGO 3 */}
                        <li className="flex-none">
                        <Image 
                            src="/images/client/c7.png"
                            alt="client"
                            height={100}
                            width={150}
                            />
                        </li>

                        {/* LOGO 4 */}
                        <li className="flex-none">
                        <Image 
                            src="/images/client/c8.png"
                            alt="client"
                            height={100}
                            width={150}
                            />
                        </li>

                    </ul>
                </div>
                <div className="py-14">
                    <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
                        {/* LOGO 1 */}
                        <li className="flex-none">
                            <Image 
                            src="/images/client/c4.jpeg"
                            alt="client"
                            height={100}
                            width={150}
                            />
                        </li>

                        {/* LOGO 2 */}
                        <li className="flex-none">
                        <Image 
                            src="/images/client/c9.jpg"
                            alt="client"
                            height={100}
                            width={150}
                            />
                        </li>

                        {/* LOGO 3 */}
                        <li className="flex-none">
                        <Image 
                            src="/images/client/c3.jpeg"
                            alt="client"
                            height={100}
                            width={150}
                            />
                        </li>

                        {/* LOGO 4 */}
                        <li className="flex-none">
                        <Image 
                            src="/images/client/c2.jpeg"
                            alt="client"
                            height={100}
                            width={100}
                            />
                        </li>
                          {/* LOGO 4 */}
                          <li className="flex-none">
                        <Image 
                            src="/images/client/c10.png"
                            alt="client"
                            height={100}
                            width={100}
                            />
                        </li>

                    </ul>
                </div>

                
              
            </div>
        </div>


       
      </section>
 
      
    

    
    </>
  );
};

export default About;
