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
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel,caption } from 'react-responsive-carousel';


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
                    </div> */}
  
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
        /> */}
        <h1 class="  font-extrabold  ">
          {/* Let us find your */}
  
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
                      </Link> */}
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
        /> */}
          <h1 class="  font-extrabold  ">
          {/* Let us find your */}
  
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
                      </Link> */}
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
        /> */}
          <h1 class="  font-extrabold  ">
          {/* Let us find your */}
  
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
                      </Link> */}
                    </div>
  
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
        /> */}
          <h1 class="  font-extrabold  ">
          {/* Let us find your */}
  
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
                      </Link> */}
                    </div>
  
      </div>
    </div> 
    </div>
                  </SwiperSlide>
                  
                 
                </Swiper>
  

    </section> 

      {/* Features */}

      <div className="animate px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl  md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"> 
        <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        Nutrients & Ingredients manufacturer , Exporter & Supplier
        </h2> 
        <div class="mt-2 mb-10 text-center">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>
     

      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        <div className=" mt-5 sm:mx-auto sm:text-center">
        
          <h6 className="mb-3 text-xl  selection: leading-5"> </h6>
          <p className="text-md text-start ">
          Tribio is a pioneer in robust development, manufacturing and distributor of the best quality of nutrients & Ingredients for various industries globally. We expertise in the art of manufacturing the best industrial enzymes & nutrients, uniquely tailored to meet our customers’ needs.  Our production caters to Sugar & Distillery, Pulp & Paper, Pharmaceuticals, Food & Beverage, Textile, Animal Feed, Sugar & Starch Processing & Detergent industries. Our extensive knowledge in the biotech domain, comprehensive research of bioscience & continuous development, enables us to manufacture enzymes & nutrients that catalyse production for our clients while enhancing the quality of life for all  </p>
         
          <p className="text-start">We are equipped with modern infrastructure & biotechnologies that allows us to uniquely tailor & manufacture various enzymes for various industries to supply and export globally, helping them to overcome traditional problems of upscaling quantity and enhancing the quality of their related products. Our expert team of biochemists enables Tribio scientific to manufacture customized products according to an individual’s needs.</p>
         
        
           
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
         
         <img className="mt-[100px]" src="/images/logo.png"/>
          
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

  <section class="animate relative bg-[url(/images/webbg.jpg)] bg-cover bg-center bg-no-repeat py-10">
    <div class="container px-6 py-10 mx-auto text-center ">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Why Choose Us</h1>

        <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
        <p class="mb-10 text-gray-500 dark:text-gray-800">
        We provide our customers with unbeatable service, while providing top quality products at competitive prices. </p>
  
        <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
             src="/images/creativity.png" className=" w-[100px] m-10 ml-[110px] rounded"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold  text-gray-700 capitalize dark:text-white">Creative innovation</div>
              <p className="text-sm text-gray-900">
             We always power talent cultivation and promote inventive innovation, We always put people's interest first before our own.
               </p>
               
            </div>
            
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-lg hover:shadow">
          <div className="relative w-full">
            <img
              src="/images/user-experience.png"  className=" w-[100px] m-10 ml-[105px] rounded"
              alt="Vision"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold  text-gray-700 capitalize dark:text-white">Valuable Resources</div>
              <p className="text-sm text-gray-900">
              Our resources are the most Valuable asset. Our combined teamwork and effort help us grow better, improve faster,as individuals and also as a company.
               </p>
              
            </div>
           
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="/images/authorization.png"
              className=" w-[100px] m-10 ml-[105px] rounded" 
              alt="Values"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold  text-gray-700 capitalize dark:text-white">Quality Assurance</div>
              <p className="text-sm text-gray-900">
              Our quality assurance process assures that our customer's gets the best quality. Our high-quality products set us apart, ahead of the competition.
                 </p> 
            </div>
            
          </div>
        </div>
      </div>



    </div>
</section>


      {/* Short Into */}
      {/* <section className="section pt-0">
        <div className="container-xl">
          <div className="relative px-4 py-[70px]">
            <div className="text-center">
              <div className="animate">
                <p>{intro.subtitle}</p>
                {markdownify(intro.title, "h2", "mt-4 section-title")}
                {markdownify(intro.description, "p", "mt-10")}
              </div>
              <div className="mx-auto mt-10 h-full max-h-[394px] w-full max-w-[716px]">
                <VideoPopup id={intro.video_id} thumbnail={intro.thumbnail} />
              </div>
            </div>
            <div className="absolute top-0 left-0 w-fullbg-scroll h-[500px] w-[auto]" style={{
        backgroundImage: `url(${banner.bgimg})`,
      }}>
           
             <Circle
                className="left-[10%] top-12"
                width={32}
                height={32}
                fill={false}
              />
              <Circle className="left-[3%] top-[30%]" width={85} height={85} />
              <Circle
                className="left-[22%] bottom-[52%]"
                width={20}
                height={20}
              />
              <Circle
                className="left-[15%] bottom-[35%]"
                width={47}
                height={47}
                fill={false}
              />
              <Circle
                className="left-[6%] bottom-[6%]"
                width={62}
                height={62}
                fill={false}
              />
              <Circle
                className="right-[12%] top-[12%]"
                width={20}
                height={20}
              />
              <Circle
                className="right-[2%] top-[30%]"
                width={73}
                height={73}
                fill={false}
              />
              <Circle
                className="right-[19%] top-[50%]"
                width={37}
                height={37}
                fill={false}
              />
              <Circle
                // className="right-[33%] top-[52%]"
                width={20}
                height={20}
              />
              <Circle
                className="right-[5%] bottom-[18%]"
                width={65}
                height={65}
              />  
            </div>
          </div>
        </div>
      </section> */}

      {/* Special Features */}
      {/* <section className="">
        <div className="container  mb-11 animate">
          <div className="row items-center justify-center">
            <div className="animate lg:col-6 lg:order-2">
              <ImageFallback
                className="mx-auto"
                src={speciality.primary.image}
                width={575}
                height={511}
                alt="primary speciality"
              />
            </div>
            <div className="animate lg:col-5 lg:order-1">
              <p>{speciality.primary.subtitle}</p>
              {markdownify(
                speciality.primary.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(speciality.primary.description, "p", "mt-10")}
            </div>
          </div>
          <div className="row items-center mt-[100px] animate">
            <div className="lg:col-6">
              <ImageFallback
                className="mx-auto rounded-md"
                src={speciality.secondary.image}
                width={575}
                height={511}
                alt="secondary speciality"
              />
            </div>
            <div className="lg:col-5">
              <p>{speciality.secondary.subtitle}</p>
              {markdownify(
                speciality.secondary.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(speciality.secondary.description, "p", "mt-10")}
            </div>
          </div>
          <div className="row items-center justify-center mt-[100px] ">
            <div className="lg:col-6 lg:order-2">
              <ImageFallback
                className="mx-auto rounded-md"
                src={speciality.secondary3.image}
                width={575}
                height={511}
                alt="primary speciality"
              />
            </div>
            <div className="lg:col-5 lg:order-1">
              <p>{speciality.secondary3.subtitle}</p>
              {markdownify(
                speciality.secondary3.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(speciality.secondary3.description, "p", "mt-10")}
            </div>
          </div>
          <div className="row items-center mt-[100px]">
            <div className="lg:col-6">
              <ImageFallback
                className="mx-auto rounded-md"
                src={speciality.secondary4.image}
                width={575}
                height={511}
                alt="secondary speciality"
              />
            </div>
            <div className="lg:col-5">
              <p>{speciality.secondary4.subtitle}</p>
              {markdownify(
                speciality.secondary4.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(speciality.secondary4.description, "p", "mt-10")}
            </div>
          </div>
          <div className="row items-center justify-center mt-[100px]">
            <div className="lg:col-6 lg:order-2">
              <ImageFallback
                className="mx-auto rounded-md"
                src={speciality.secondary5.image}
                width={575}
                height={511}
                alt="primary speciality"
              />
            </div>
            <div className="lg:col-5 lg:order-1">
              <p>{speciality.secondary5.subtitle}</p>
              {markdownify(
                speciality.secondary5.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(speciality.secondary5.description, "p", "mt-10")}
            </div>
          </div>
          <div className="row items-center mt-[100px]">
            <div className="lg:col-6">
              <ImageFallback
                className="mx-auto rounded-md"
                src={speciality.secondary6.image}
                width={575}
                height={511}
                alt="secondary speciality"
              />
            </div>
            <div className="lg:col-5">
              <p>{speciality.secondary6.subtitle}</p>
              {markdownify(
                speciality.secondary6.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(speciality.secondary6.description, "p", "mt-10")}
            </div>
          </div>
          <div className="row items-center justify-center mt-[100px] mb-[100px]">
            <div className=" lg:col-6 lg:order-2">
              <ImageFallback
                className="mx-auto rounded-md"
                src={speciality.secondary7.image}
                width={575}
                height={511}
                alt="primary speciality"
              />
            </div>
            <div className="lg:col-5 lg:order-1">
              <p>{speciality.secondary7.subtitle}</p>
              {markdownify(
                speciality.secondary7.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(speciality.secondary7.description, "p", "mt-10")}
            </div>
          </div>
        </div>
      </section> */}
{/* 
Product and services  */}
 
 
    <div className="animate px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl  md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"> 
        <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our Product Application
        </h2> 
        <div class="mt-2 mb-10 text-center">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>
     

      <div className="grid gap-8 row-gap-10 lg:grid-cols-3">
        <div className="max-w-md mt-5 sm:mx-auto sm:text-center">
        
          <h6 className="mb-3 text-xl  selection: leading-5">Nutrient for Distillery</h6>
          <p className="mb-3 text-sm ">
           Our enhanced distillery processing enzymes & nutrients gives you better and non-contaminated yield of ethanol at a faster rate.
          </p>
        
          <h6 className="mb-3 mt-10 text-xl  first-letter: leading-5">Pharmaceuticals Reference Standard and Impurities</h6>
          <p className="mb-3 text-sm ">
            Our team of scientist develope and synthesis very hign quality of inhouse reference Standard, working Standard and impurity for Pharmaceuticals quality control. 
            </p>

        
           
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
         
         <img className="w-[200px] mt-[100px] " src="/images/logo.png"/>
          
        </div>
        <div className="max-w-md mt-5 sm:mx-auto sm:text-center">
        
          <h6 className="mb-3 text-xl  selection: leading-5">Products for Water Treatment</h6>
          <p className="mb-3 text-sm ">
           Our enhanced distillery processing enzymes & nutrients gives you a better and non-contaminated yield of ethanol at a fasterrate.
          </p>
        
          <h6 className="mb-3 mt-10 text-xl  first-letter: leading-5">Nutrient for Pulp & Paper</h6>
          <p className="mb-3 text-sm ">
            Tribio paper and Pulp nutrients reduce the dependency of harmful and toxic inorganic nutrients which damages the environment.
          </p>
           
        </div>
       
        
      </div>
      <div className="text-center">
      <h6 className="mb-3 mt-10 text-xl first-letter: leading-5">Ingredients for Food, cattle feed and Pharmaceuticals</h6>
      <p className="mb-3 max-w-md text-sm ">
           
          </p>
          <p className="mb-3 text-sm ">
           We provoide various Ingredient used in Pharmaceuticals and food industry.
          </p>
          </div>
          <div className="text-center">
          <Link className="mt-10 btn btn-primary" href="/nutrients">View All</Link>  
          </div>
    </div>


    {/* Certified by */}


{/* 
      <section className="animate section banner pt-0">
        <div className="container-xl">
          <div className="relative"> 
           <div className="row border-y border-border py-5">
              <div className="animate from-right col-12">
              <h2 className="text-center mb-6">Certified by </h2>
                <Swiper
                  loop={true}
                  slidesPerView={3}
                  breakpoints={{
                    992: {
                      slidesPerView: 5,
                    },
                  }}
                  spaceBetween={20}
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                >  
                  {brands.map((brand, index) => (
                    <SwiperSlide
                      className=" h-[150px] cursor-pointer py-6 px-6 transition hover:grayscale-0 lg:px-10"
                      key={"brand-" + index}
                    >
                      <div className="relative h-full">
                      
                        <ImageFallback
                          className="object-contain"
                          src={brand}
                          sizes="100vw"
                          alt=""
                          fill={true}
                          priority={true}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>  
          </div>
        </div>
      </section>  */}

      {/* Testimonial */}
        {/* <section className="section pt-0">
        <div className="container">
          <div className="animate text-center">
            <p>{testimonial.subtitle}</p>
            {markdownify(testimonial.title, "h2", "mt-4 section-title")}
            {markdownify(testimonial.description, "p", "mt-10")}
          </div>
          <div className="animate row mt-10 items-center justify-center">
            <div className="xl:col-11">
              <div className="row items-center justify-center">
                <div className="hidden lg:col-3 xl:col-4 lg:block">
                  <ImageFallback
                    src="/images/testimonials-01.png"
                    width={455}
                    height={522}
                    alt="testimonials"
                  />
                </div>
                <div className="md:col-7 lg:col-6 xl:col-4">
                  {
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      pagination={{
                        el: testimonialPaginationRef.current,
                        type: "bullets",
                        dynamicBullets: true,
                        clickable: true,
                      }}
                      autoplay={{ delay: 3000 }}
                      onBeforeInit={(swiper) => {
                        swiper.params.pagination.el =
                          testimonialPaginationRef.current;
                      }}
                      className="testimonial-slider mx-auto max-w-[420px] cursor-pointer lg:max-w-[480px]"
                    >
                      {testimonial.list.map((item, index) => (
                        <SwiperSlide
                          className="text-center"
                          key={"testimonial-" + index}
                        >
                          <div className="py-6 px-8 sm:py-12 md:px-10 lg:px-20 xl:px-12">
                            <TbQuote className="mx-auto rotate-180 text-5xl text-body sm:text-6xl lg:text-8xl" />
                            {markdownify(
                              item.content,
                              "p",
                              "text-[17px] lg:text-lg text-body mt-4 md:mt-5 xl:mt-8"
                            )}
                            <div className="mt-7 inline-block rounded-md bg-body p-7 shadow-[0_10px_50px_rgba(0,0,0,.08)] md:mt-5 lg:mt-8 xl:mt-5">
                              <ImageFallback
                                className="mx-auto rounded-full"
                                src={item.avatar}
                                width={90}
                                height={90}
                                priority={true}
                                alt={item.author}
                              />
                              <h6>{item.author}</h6>
                              <p>{item.profession}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  }
                  <div className="relative h-8">
                    <div
                      className="pagination absolute left-1/2 -translate-x-1/2"
                      ref={testimonialPaginationRef}
                    ></div>
                  </div>
                </div>
                <div className="hidden lg:col-3 xl:col-4 lg:block">
                  <ImageFallback
                    src="/images/testimonials-02.png"
                    width={455}
                    height={522}
                    alt="testimonials"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   */}

      {/* Cta */}

      <section class="animate relative bg-[url(/images/contbg.png)] bg-cover bg-center bg-no-repeat  ">
    <div class="flex flex-col  bg-white/20">
        <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                <div class="text-white lg:w-1/2 lg:mx-6">
                    <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">WHY YOU SHOULD CONTACT US!</h1>

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

                            <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
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
            <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Trusted by world-class brands and organizations of all sizes.
             
            </h2>
            <p className="mt-4">
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
