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

   // const position = (banner.offsetHeight - bannerBg.offsetHeight) * 0.4;
    //  parallaxTl
    //    .fromTo(
    //      bannerBg,
    //      {
    //        y: 0,
    //      },
    //      {
    //        y: -position,
    //      }
    //    )
    //    .fromTo(
    //      bannerContent,
    //      {
    //        y: 0,
    //      },
    //      {
    //        y: position,
    //      },
    //      "<"
    //    )
    //    .fromTo(
    //      ".banner-bg .circle",
    //      {
    //        y: 0,
    //      },
    //      {
    //        y: position,
    //      },
    //      "<"
    //    );
    });

    return () => ctx.revert();
  }, []);
  

  return (
    <Base>
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
                alt="engagenest-Banner"
                className=" "
              />
            </div>
          </div>
        
      </section>

 

{/* 
    <section className="relative ">  
            <Swiper
            pagination
                  loop={true}
                  navigation={true}
                  slidesPerView={1}
                  breakpoints={{
                    992: {
                      slidesPerView: 1,
                    },
                  }}
                  spaceBetween={20}
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}

                >  
                   
                  <SwiperSlide>
                  <div  class="relative bg-[url(/images/b1.png)] bg-cover bg-center bg-no-repeat lg:h-[550px]"
  >
    <div
      class="absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/60 sm:to-white/10"
    ></div>
  
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-2xl text-center sm:text-left">
      
        <h1 class=""> 
          <strong class="block font-extrabold ">
          Various Scientific Solution for Industries !
          </strong>
        </h1>
  <h2>
         <strong class="mt-4 max-w-lg text-black sm:leading-relaxed">
         </strong>
         </h2>
{/* <div className="banner-btn mt-5 opacity-0">
                      <Link className="btn btn-primary" href={banner.link.href}>
                        {banner.link.label}
                      </Link>
                    </div>  
  
      </div>
    </div> 
    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div  class="relative bg-[url(/images/chini-factory.jpg)] bg-cover bg-center bg-no-repeat lg:h-[550px]"
  >
    <div
      class="absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/60 sm:to-white/10"
    ></div>
  
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center sm:text-left">
      {/* <img
          alt="Waste Water treatment"
          src= "/images/logo.png"
          className="hidden lg:block inset-0 lg:h-20 lg:w-50   rounded-md"
        /> 
        <h1 class="  font-extrabold  ">
          {/* Let us find your 
  
          <strong class="block font-extrabold">
          Products for Sugar and Distillery !
          </strong>
        </h1>
  <h2>
         <strong class="mt-4 max-w-lg text-black sm:leading-relaxed">
          </strong>
</h2>
<div className="banner-btn mt-5 opacity-0">
                      <Link className="btn btn-primary" href="/sugar-and-distillery">
                      Explore More
                      </Link> 
                      {/* <Link className="btn btn-primary mx-4" href= "/contact">
                        Contact Us
                      </Link>  
                    </div>
  
      </div>
    </div> 
    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div  class="relative bg-[url(/images/pulp.jpg)] bg-cover bg-center bg-no-repeat lg:h-[550px]"
  >
    <div
      class="absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/60 sm:to-white/10"
    ></div>
  
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center sm:text-left">
      {/* <img
          alt="Waste Water treatment"
          src= "/images/logo.png"
          className="hidden lg:block inset-0 lg:h-20 lg:w-50   rounded-md"
        />  
          <h1 class="  font-extrabold  ">
          {/* Let us find your  
  
          <strong class="block font-extrabold  ">
          Pulp & Paper Industry 
          </strong>
        </h1>
  <h2>
         <strong class="mt-4 max-w-lg text-black sm:leading-relaxed">
         </strong>
</h2> 
<div className="banner-btn mt-5 opacity-0">
                      <Link className="btn btn-primary" href="/pulp-and-paper">
                      Explore More
                      </Link> 
                      {/* <Link className="btn btn-primary mx-4" href= "/contact">
                        Contact Us
                      </Link> 
                    </div>
  
      </div> 
   
    </div> 

    </div>
    
                  </SwiperSlide>
                  <SwiperSlide>
                  <div  class="relative bg-[url(/images/Pharmaceuticals.jpg)] bg-cover bg-center bg-no-repeat lg:h-[550px]"
  >
    <div
      class="absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/60 sm:to-white/10"
    ></div>
  
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center sm:text-left">
      {/* <img
          alt="Waste Water treatment"
          src= "/images/logo.png"
          className="hidden lg:block inset-0 lg:h-20 lg:w-50   rounded-md"
        />  
          <h1 class="  font-extrabold  ">
          {/* Let us find your  
  
          <strong class="block font-extrabold">
          Pharmaceuticals
          </strong>
        </h1>
  <h2>
         <strong class="mt-4 max-w-lg text-black sm:leading-relaxed">
         </strong>
</h2>

<div className="banner-btn mt-5 opacity-0">
                      <Link className="btn btn-primary" href="/pharmaceuticals">
                      Explore More
                      </Link> 
                      {/* <Link className="btn btn-primary mx-4" href= "/contact">
                        Contact Us
                      </Link>  
  
      </div>
    </div> 
    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div  class="relative bg-[url(/images/Agriculture4.jpg)] bg-cover bg-center bg-no-repeat lg:h-[550px]"
  >
    <div
      class="absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/60 sm:to-white/10"
    ></div>
  
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center sm:text-left">
      {/* <img
          alt="Waste Water treatment"
          src= "/images/logo.png"
          className="hidden lg:block inset-0 lg:h-20 lg:w-50   rounded-md"
        />  
          <h1 class="  font-extrabold  ">
          {/* Let us find your  
  
          <strong class="block font-extrabold">
          Agriculture & animal feed
          </strong>
        </h1>
  <h2>
         <strong class="mt-4 max-w-lg text-black sm:leading-relaxed">
          </strong>
</h2>
<div className="banner-btn mt-5 opacity-0">
                      <Link className="btn btn-primary" href="/agriculture">
                      Explore More
                      </Link> 
                      {/* <Link className="btn btn-primary mx-4" href= "/contact">
                        Contact Us
                      </Link>  
                    </div>
  
      </div>
    </div> 
    </div>
                  </SwiperSlide>
                  
                 
                </Swiper>
  

    </section>  */}

      {/* Features */}

      <div className="animate px-4 mx-auto container lg:px-20 lg:py-20 pt-14">
      <div className="text-center md:mx-auto lg:max-w-2xl md:mb-12"> 
        <h2 className="text-2xl font-bold capitalize lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
        Nutrients & Ingredients manufacturer Exporter & Supplier
        </h2> 
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
         <Image className="" width={400} height={300} src="/images/home/nutrients.svg"/>
          
        </div> 
        
      </div>
      
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2 lg:mt-10">
      <div className="max-w-md sm:mx-auto sm:text-center"> 
         <Image className="" width={400} height={300} src="/images/home/equipped.svg"/>
          
        </div> 
        <div className=" mt-5 sm:mx-auto sm:text-center lg:mt-20">  
          <p className="text-start text-gray-800 pt-2">We are equipped with modern infrastructure & biotechnologies that allows us to uniquely tailor & manufacture various enzymes for various industries to supply and export globally, helping them to overcome traditional problems of upscaling quantity and enhancing the quality of their related products. Our expert team of biochemists enables Tribio scientific to manufacture customized products according to an individual’s needs.</p>
         
        
           
        </div>
     
        
      </div>



    </div>



      {/* <section className="section">
        <div className="container text-center">
          <div className="animate">
            <p className="uppercase">{features.sub_title}</p>
            
            {markdownify(features.title, "h2", "mt-0 ")}
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            {/* {markdownify(features.description, "p", "mt-10")}  
            <p className="mt-10">Tribio is a pioneer in robust development, manufacturing and distributor of the best quality of nutrients & Ingredients for various industries globally. We expertise in the art of manufacturing the best industrial enzymes & nutrients, uniquely tailored to meet our customers’ needs.  Our production caters to Sugar & Distillery, Pulp & Paper, Pharmaceuticals, Food & Beverage, Textile, Animal Feed, Sugar & Starch Processing & Detergent industries. Our extensive knowledge in the biotech domain, comprehensive research of bioscience & continuous development, enables us to manufacture enzymes & nutrients that catalyse production for our clients while enhancing the quality of life for all.</p>
            <p className="">We are equipped with modern infrastructure & biotechnologies that allows us to uniquely tailor & manufacture various enzymes for various industries to supply and export globally, helping them to overcome traditional problems of upscaling quantity and enhancing the quality of their related products. Our expert team of biochemists enables Tribio scientific to manufacture customized products according to an individual’s needs</p>
          </div>
          {/* <div className="animate from-right relative mt-10">
            <Swiper
              loop={true}
              slidesPerView={1}
              pagination={{
                type: "bullets",
                el: paginationRef.current,
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{ delay: 1000 }}
              onBeforeInit={(swiper) => {
                swiper.params.pagination.el = paginationRef.current;
              }}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {features.list.map((item, index) => (
                <SwiperSlide key={"feature-" + index}>
                  <div className="feature-card m-4 rounded-md border border-transparent py-16 px-7 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                    <div className="feature-card-icon inline-flex items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                      <Image src={item.icon} width={600} height={400} />
                    </div>
                    <h3 className="h4 mt-6 mb-5 text-primary">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="relative mt-9 flex justify-center">
              <div className="pagination " ref={paginationRef}></div>
            </div>
          </div> * 
        </div>
      </section> */}

      
{/*     */}
  
   




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
                  <h6 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
                  Creative Innovation
                  </h6>
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
                  <h6 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
                  Valuable Resources
                  </h6>
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
                  <h6 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
                  Quality Assurance
                  </h6>
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
                  <h6 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
                  Technical Suporrt
                  </h6>
                  <p className="mb-3 text-sm text-gray-700">
                 We have an experienced technical team which provides guidance and shoot out troubles of our customer on 24X7 basis.
                  </p>
                </div>
              
              </div>
      </div>



    </div>
</section>

 
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
      {/* <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14"> 
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-blue-800 sm:w-20 sm:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">Sugar & Distillery</h6>
          {/* <p className="max-w-md mb-3 text-md text-gray-900 sm:mx-auto">
            Cheese on toast airedale the big cheese. Danish fontina cheesy grin
            airedale danish
          </p> 
          <Link
            href="/"
            aria-label=""
            className="inline-flex items-center   transition-colors duration-200 text-blue-800  "
          >
            Learn more
          </Link>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-blue-800 sm:w-20 sm:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">Pulp and paper</h6>
          {/* <p className="max-w-md mb-3 text-md text-gray-900 sm:mx-auto">
          Pressing the sheet removes the water by force. Once the water is forced from the sheet, a special kind of felt
          </p>  
          <Link
            href="/"
            aria-label=""
            className="inline-flex items-center   transition-colors duration-200 text-blue-800  "
          >
            Learn more
          </Link>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Pick up truck</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
            mechad
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
    */}
     

    <div className="container grid gap-8 row-gap-10 lg:grid-cols-3">
        <div className="max-w-md mt-5 sm:mx-auto sm:text-center">
        
          <h6 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">Nutrient for Distillery</h6>
          <p className="mb-3 text-sm ">
           Our enhanced distillery processing enzymes & nutrients gives you better and non-contaminated yield of ethanol at a faster rate.
          </p>
        
          <h6 className="mb-2 mt-8 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">Pharmaceuticals Reference Standard and Impurities</h6>
          <p className="mb-3 text-sm ">
            Our team of scientist develope and synthesis very hign quality of inhouse reference Standard, working Standard and impurity for Pharmaceuticals quality control. 
            </p>

        
           
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
         
         <Image className="" width={700} height={500} src="/images/home/products.svg"/>
          
        </div>
        <div className="max-w-md mt-5 sm:mx-auto sm:text-center">
        
          <h6 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">Products for Water Treatment</h6>
          <p className="mb-3 text-sm ">
           Our enhanced distillery processing enzymes & nutrients gives you a better and non-contaminated yield of ethanol at a fasterrate.
          </p>
        
          <h6 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">Nutrient for Pulp & Paper</h6>
          <p className="mb-3 text-sm ">
            Tribio paper and Pulp nutrients reduce the dependency of harmful and toxic inorganic nutrients which damages the environment.
          </p>
           
        </div>
       
        
      </div>
      <div className="text-center">
      <h6 className="mb-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">Ingredients for Food, cattle feed and Pharmaceuticals</h6>
      <p className="mb-3 max-w-md text-sm ">
           
          </p>
          <p className="mb-3 text-sm ">
           We provoide various Ingredient used in Pharmaceuticals and food industry.
          </p>
          </div>
          {/* <div className="text-center">
          <Link className="mt-10 btn btn-primary" href="/nutrients">View All</Link>  
          </div>   */}
    </div>



   

 

      {/* Cta */}

      <section class="animate  bg-gradient-to-b from-blue-300 to-[#eae8ee]">
    <div class="flex flex-col  bg-white/20">
        <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                <div class="text-white lg:w-1/2 lg:mx-6">
                    <h1 class="text-2xl font-semibold lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">WHY YOU SHOULD CONTACT US!</h1>

                    <p class="max-w-xl text-bold text-black mt-6">
                    We want our customers to experience the best by investing least. We have an experienced technical team which provides guidance and shoot out troubles of our customer on 24X7 basis.
                    </p>

                   
                     
                </div>

                <div class="mt-8 lg:w-1/2 lg:mx-6">
                    <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                        <h1 class="text-xl font-medium text-gray-700 dark:text-gray-200">Contact Us</h1>

                        <p class="mt-2 text-gray-500 dark:text-gray-400">
                            Ask us everything and we would love
                            to hear from you..
                        </p>

                        <form class="mt-5">
                            <div class="grid gap-8 row-gap-10 lg:grid-cols-2">
                              <div>
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                <input type="text" placeholder=" " class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                <input type="email" placeholder="" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                            </div>

                            <div class="grid gap-8 row-gap-10 lg:grid-cols-2">
                              <div>
                                <label class="block m-2 text-sm text-gray-600 dark:text-gray-200">Phone Number</label>
                                <input type="text" placeholder=" " class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                <label class="block m-2 text-sm text-gray-600 dark:text-gray-200">Subject</label>
                                <input type="text" placeholder="" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                            </div>

                            <div class="flex-1 mt-6">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Message here</label>
                                <textarea type="text" placeholder="" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                              Send Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



      {/* <Cta />  */}

       {/*Clients  */}
 
       <div className=" animate px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          
          <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 text-primary">
          Our Clients
             
            </h2>
            <h2 className="mb-2 font-bold text-xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-[#131146]">
            Trusted by world-class brands and organizations of all sizes.
             
            </h2>
            <p className="mt-4 text-gray-700">
             Our prestigious domestic clients are Dalmia Bharat sugar industries ltd, Alkem Laboratories, Aristo Pharmaceutical Private Limited, Shree Venkatesh International Limited and many clients from Nepal.
            </p>
          </div>
       
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover w-60 mb-6 rounded shadow-lg "
              src="/images/c1.jpeg"
              alt=""
            />
            <img
              className="object-cover w-60  rounded shadow-lg "
              src="/images/c2.jpeg"
               alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-60  rounded shadow-lg "
              src="/images/c3.jpeg"
               alt=""
            />
             <img
              className="object-cover w-60  rounded shadow-lg  "
              src="/images/c4.jpeg"
               alt=""
            />
          </div>
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
