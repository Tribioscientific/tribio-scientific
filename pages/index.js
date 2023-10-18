import Base from "@layouts/Baseof";
import Circle from "@layouts/components/Circle";
import Cta from "@layouts/components/Cta";
import ImageFallback from "@layouts/components/ImageFallback";
import VideoPopup from "@layouts/components/VideoPopup";
import { getListPage } from "@lib/contentParser";
import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { TbQuote } from "react-icons/tb";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel,caption } from 'react-responsive-carousel';
import Image from "next/image";


const Home = ({ banner, swipers, brands, features, intro, speciality, testimonial }) => {
  const paginationRef = useRef(null);
  const testimonialPaginationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const banner = document.querySelector(".banner");
      const bannerBg = document.querySelector(".banner-bg");
      const bannerContent = document.querySelector(".banner-content");
      const header = document.querySelector(".header");
      const tl = gsap.timeline();

       tl.fromTo(
         ".banner-title",
         { y: 20, opacity: 0 },
         { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
       )
         .fromTo(
           ".banner-btn",
           { y: 20, opacity: 0 },
           { y: 0, opacity: 1, duration: 0.5 },
           ">-0.4"
         )
         .fromTo(
           ".banner-img",
           {
             y: 20,
             opacity: 0,
           },
           {
             y: 0,
             opacity: 1,
             duration: 0.5,
           },
           ">-.5"
         );

      //parallax banner
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: () => `top ${header.clientHeight}`,
          scrub: true,
        },
      });

   
    });

    return () => ctx.revert();
  }, []);
  

  return (
    <Base>
    
      {/* Banner */}
      <section className=" bg-gradient-to-b from-blue-300 to-[#eae8ee]">
       
          <div className="animate container flex flex-col justify-center mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="py-2 text-2xl font-bold sm:text-5xl  lg:leading-tight md:mx-auto text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]  ">
              Making possible with biotechnology
              </h1>
              <p className="mb-8 sm:text-2xl lg:text-xl sm:mb-12 text-neutral-800">
              Mission to serve industries with innovative products and technologies to improve productivity and add value to manufacturing processes.
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link
                  href="/contact"
                  className="px-8 py-3 btn btn-primary"
                >
                  Get started
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <Image
                src="/images/home/hero-tribio.svg"
                width={550}
                height={500}
                alt="tribio-Banner"
                className=" "
              />
            </div>
          </div>
        
      </section>

 

 

      {/* Features */}

      <div className="animate px-4 mx-auto container lg:px-20 lg:py-20 pt-14">
      <div className="text-center md:mx-auto lg:max-w-2xl md:mb-12"> 
        <h1 className="text-2xl font-bold capitalize lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
        Nutrients & Ingredients manufacturer Exporter & Supplier
        </h1> 
        <div class="mt-2 mb-10">
            <span class="inline-block w-40 h-1 bg-blue-800 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-800 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-800 rounded-full"></span>
        </div>
 
      </div>
     

      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        <div className=" mt-5 sm:mx-auto sm:text-center"> 
          <p className="text-md text-start text-gray-800 lg:mt-20">
          We expertise in the art of manufacturing the best industrial enzymes & nutrients, uniquely tailored to meet our customers’ needs.  Our production caters to Sugar & Distillery, Pulp & Paper, Pharmaceuticals, Food & Beverage, Textile, Animal Feed, Sugar & Starch Processing & Detergent industries. Our extensive knowledge in the biotech domain, comprehensive research of bioscience & continuous development, enables us to manufacture enzymes & nutrients that catalyse production for our clients while enhancing the quality of life for all. </p>
         
         
           
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center"> 
         <Image className="" width={400} height={300} src="/images/home/nutrients.svg" alt="manufacturer"/>
          
        </div> 
        
      </div>
      
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2 lg:mt-10">
      <div className="max-w-md sm:mx-auto sm:text-center"> 
         <Image className="" width={400} height={300} src="/images/home/equipped.svg" alt="equipped"/>
          
        </div> 
        <div className=" mt-5 sm:mx-auto sm:text-center lg:mt-20">  
          <p className="text-start text-gray-800 pt-2">We are equipped with modern infrastructure & biotechnologies that allows us to uniquely tailor & manufacture various enzymes for various industries to supply and export globally, helping them to overcome traditional problems of upscaling quantity and enhancing the quality of their related products. Our expert team of biochemists enables Tribio scientific to manufacture customized products according to an individual’s needs.</p>
          
           
        </div>
     
        
      </div>



    </div> 



  {/* Why choose us */}

  <section class="animate bg-gradient-to-b from-blue-300 to-[#eae8ee] py-10">
    <div class="container px-6 lg:py-10  py-5 mx-auto text-center ">
        <h1 class="text-2xl font-bold capitalize lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">Why Choose Us</h1>

        <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-blue-800 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-800 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-800 rounded-full"></span>
        </div>
        <p class="mb-10 text-gray-800 text-lg mt-4" >
        We provide our customers with unbeatable service, while providing top quality products at competitive prices. </p>
  
        <div className="grid max-w-xl gap-2 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-4 xl:max-w-screen-xl sm:mx-auto">
       


        <div className="flex flex-col justify-between p-5 border-2 rounded border-blue-800 bg-white shadow-md hover:shadow-lg">
                <div>
                  <div className="flex items-center justify-center  mx-auto mb-4">
                    <Image
                      src="/images/home/innovation.svg"
                      alt="Creative Innovation"
                      height={200}
                      width={200}
                      className="items-center"
                    />
                  </div>
                  <h1 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
                  Creative Innovation
                  </h1>
                  <p className="mb-3 text-sm text-gray-700">
                  We always power talent cultivation and promote inventive innovation, We always put people's interest first before our own.
                  </p>
                </div>
              
              </div>
              
        <div className="flex flex-col justify-between p-5 border-2 rounded border-blue-800 bg-white shadow-md hover:shadow-lg">
                <div>
                  <div className="flex items-center justify-center  mx-auto mb-4">
                    <Image
                      src="/images/home/resources.svg"
                      alt="Valuable Resources"
                      height={200}
                      width={200}
                      className="items-center"
                    />
                  </div>
                  <h1 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
                  Valuable Resources
                  </h1>
                  <p className="mb-3 text-sm text-gray-700">
                  Our resources are the most Valuable asset. Our combined teamwork and effort help us grow better, improve faster,as individuals and also as a company.
                  </p>
                </div>
              
              </div>
              <div className="flex flex-col justify-between p-5 border-2 rounded border-blue-800 bg-white shadow-md hover:shadow-lg">
                <div>
                  <div className="flex items-center justify-center  mx-auto mb-4">
                    <Image
                      src="/images/home/assurance.svg"
                      alt=" Quality Assurance"
                      height={200}
                      width={200}
                      className="items-center"
                    />
                  </div>
                  <h1 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
                  Quality Assurance
                  </h1>
                  <p className="mb-3 text-sm text-gray-700">
                  Our quality assurance process assures that our customer's gets the best quality. Our high-quality products set us apart, ahead of the competition.
                  </p>
                </div>
              
              </div>
              <div className="flex flex-col justify-between p-5 border-2 rounded border-blue-800 bg-white shadow-md hover:shadow-lg">
                <div>
                  <div className="flex items-center justify-center  mx-auto mb-4">
                    <Image
                      src="/images/home/suporrt.svg"
                      alt="Technical Suporrt"
                      height={200}
                      width={200}
                      className="items-center"
                    />
                  </div>
                  <h1 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
                  Technical Suporrt
                  </h1>
                  <p className="mb-3 text-sm text-gray-700">
                 We have an experienced technical team which provides guidance and shoot out troubles of our customer on 24X7 basis.
                  </p>
                </div>
              
              </div>
      </div>



    </div>
</section>

  {/*Our Product Application */}
 
    <div className="animate px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-4xl md:px-24 lg:px-8 lg:py-20 py-14">
      <div className="max-w-xl  md:mx-auto sm:text-center lg:max-w-4xl md:mb-12"> 
        <h2 className="text-2xl font-bold capitalize lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
        Our Product Application
        {/* We offer consistent goods and services to the industry */}
        </h2> 
        <div class="mt-2 mb-10 text-center">
            <span class="inline-block w-40 h-1 bg-blue-800 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-800 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-800 rounded-full"></span>
        </div>
        {/* <p className="mb-3 text-lg text-gray-700"> Our industry has come to rely on our dependable goods and services. We consistently deliver high-quality products and services to meet their needs.</p>*/}
      </div> 
 
     

    <div className="animate container grid gap-8 row-gap-10 lg:grid-cols-3">
        <div className="max-w-md mt-5 sm:mx-auto sm:text-center">
        
          <h1 className="mb-2 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">Nutrient for Distillery</h1>
          <p className="mb-2  text-[15px] ">
           Our enhanced distillery processing enzymes & nutrients gives you better and non-contaminated yield of ethanol at a faster rate.
          </p>
          <Link
                    className="text-[14px] px-4 py-2  text-indigo-600  inline-flex items-center transition ease-in-out delay-150 hover:translate-x-1"
                    href="/sugar-and-distillery">
                    View Products
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 duration-150 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
        
          <h1 className="mb-2 mt-8 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">Pharmaceuticals Reference Standard and Impurities</h1>
          <p className="mb-3  text-[15px] ">
            Our team of scientist develope and synthesis very hign quality of inhouse reference Standard, working Standard and impurity for Pharmaceuticals quality control. 
            </p>
            <Link
                    className="text-[14px] px-4 py-2  text-indigo-600  inline-flex items-center transition ease-in-out delay-150 hover:translate-x-1"
                    href="/pharmaceuticals">
                    View Products
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 duration-150 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
        
           
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
         
         <Image width={700} height={500} src="/images/home/products.svg" alt="products"/>
          
        </div>
        <div className="max-w-md mt-5 sm:mx-auto sm:text-center">
        
          <h1 className="mb-2 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">Products for Water Treatment</h1>
          <p className="mb-3 text-[15px] ">
           Our enhanced distillery processing enzymes & nutrients gives you a better and non-contaminated yield of ethanol at a fasterrate.
          </p>
          <Link
                    className="text-[14px] px-4 py-2  text-indigo-600  inline-flex items-center transition ease-in-out delay-150 hover:translate-x-1"
                    href="/water-treatment">
                    View Products
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 duration-150 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
        
          <h1 className="mb-2  mt-8 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">Nutrient for Pulp & Paper</h1>
          <p className="mb-3 text-[15px]">
            Tribio paper and Pulp nutrients reduce the dependency of harmful and toxic inorganic nutrients which damages the environment.
          </p>  <Link
                    className="text-[14px] px-4 py-2  text-indigo-600  inline-flex items-center transition ease-in-out delay-150 hover:translate-x-1"
                    href="/pulp-and-paper">
                    View Products
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 duration-150 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
           
        </div>
       
        
      </div>
      <div className="text-center">
      <h1 className="mb-2 mt-8 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">Ingredients for Food, cattle feed and Pharmaceuticals</h1>
      
          <p className="mb-3 text-[15px] ">
           We provoide various Ingredient used in Pharmaceuticals and food industry.
          </p>
          <Link
                    className="text-[14px] px-4 py-2  text-indigo-600  inline-flex items-center transition ease-in-out delay-150 hover:translate-x-1"
                    href="/animal-feed">
                    View Products
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 duration-150 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
          </div>
            
    </div>



   

 

      {/* Cta */}

      <section className="animate  bg-gradient-to-b from-blue-300 to-[#eae8ee]">
    <div className="flex flex-col  bg-white/20">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                <div className="text-white lg:w-1/2 lg:mx-16">
                    <h1 className="text-2xl font-semibold lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">WHY YOU SHOULD CONTACT US!</h1>

                    <p className="max-w-xl text-bold text-black mt-6">
                    Driven by Research & Proven
methodology to enhance the
productivity & performance of our
customers globally.
                    </p> 
                    <div className="flex pt-8 flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link
                  href="/contact"
                  className="px-8 py-3 btn btn-primary text-center"
                >
                 Contact Now
                </Link>
              </div>
                     
                </div>

                <div className="mt-8 lg:w-1/2 lg:mx-6">
                    {/* <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                        <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Contact Us</h1>

                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Ask us everything and we would love
                            to hear from you..
                        </p>

                        <form className="mt-5">
                            <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
                              <div>
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                <input type="text"  className="form-box" />
                                </div>
                                <div>
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                <input type="email"  className="form-box" />
                                </div>
                            </div>

                            <div class="grid gap-8 row-gap-10 lg:grid-cols-2">
                              <div>
                                <label class="block mt-2 text-sm text-gray-600 dark:text-gray-200">Phone Number</label>
                                <input type="text"  className="form-box" />
                                </div>
                                <div>
                                <label class="block mt-2 text-sm text-gray-600 dark:text-gray-200">Subject</label>
                                <input type="text" className="form-box" />
                                </div>
                            </div>

                            <div className="flex-1 mt-6">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Message here</label>
                                <textarea type="text"   className="form-box" />
                            </div>

                            <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 rounded-md hover:bg-blue-500   focus:ring-blue-400 focus:ring-opacity-50">
                              Send Now
                            </button>
                        </form>
                    </div> */}
                    <Image
                src="/images/home/cta.svg"
                width={550}
                height={500}
                alt="contact us"
                className=" "
              />
                </div>
            </div>
        </div>
    </div>
</section>



      

       {/*Clients  */} 
   
    <div className=" animate py-14">
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
   


    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, brands, features, intro, speciality, testimonial } =
    frontmatter;

  return {
    props: {
      banner: banner,
      brands: brands,
      features: features,
      intro: intro,
      speciality: speciality,
      testimonial: testimonial,
    },
  };
};
