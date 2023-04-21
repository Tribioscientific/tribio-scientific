import { markdownify } from "@lib/utils/textConverter";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";
import VideoPopup from "./components/VideoPopup";

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

  return (
    <>
     <div className="animate">
   
     <img
          className="w-full h-auto "
          src="/images/laboratory.jpg"
          alt=""
        />
      <div className="section container">
        <div className=" text-center">
          <p className=" ">
          About Us
          </p>
          <h1 className="mb-5 font-bold tracking-tight text-primary">
          Hello, We’re Tribio Scientific Here For Your Help
          </h1>
          <p className="pr-5 mb-5 text-base ">
          We, Tribio Scientific is a team of young and dynamic professionals with a mission to serve industries with novel products and technologies to improve productivity and add value to manufacturing processes. We want our customers to experience the best by investing least. We have an experienced technical team which provides guidance and shoot out troubles of our customer on 24X7 basis. We have a group of professionals with domain expertise for different industrial manufacturing processes. In a very short span of time, Tribio with its domestic and international business partner companies have built up a network of a customers in industries such as Sugar & Distillery, Pharmaceuticals, Pulp & Paper, etc.
          </p> 
          <p>Our cutting-edge technology, methodology, and modern-day laboratory infrastructure enables Tribio to meet every customer supply demand and conquer traditional challenges. Our expert team of biochemists makes sure that our products’ catalytic powers are rightly used in its applications through vigorous R&D and testing. All our in-house products are manufactured under high surveillance and go through stringent quality checks procedure to ensure that our final bio product meets the set industry standards.
A customer-centric approach is a core of Tribio foundation. We thrive to achieve 100% customer satisfaction through excellent services, customer support. Our services guide individuals and enterprises to overcome traditional production challenges without compromising quality. Our fierce marketing and unmatched distribution network, help us effectively manage and deliver our customers’ needs within the country and around the globe. 
</p>
             <b className="justify-center">{works.subtitle}</b>
        </div>
      </div>
      
    </div>
   
      <section className="section pt-0">
       
        {/* <Banner title={title} /> */}
        {/* About */}
       

        {/* Works */}
         <div className="section container">
          <div className="animate text-center">
            {/* <p>Our cutting-edge technology, methodology, and modern-day laboratory infrastructure enables Tribio to meet every customer supply demand and conquer traditional challenges. Our expert team of biochemists makes sure that our products’ catalytic powers are rightly used in its applications through vigorous R&D and testing. All our in-house products are manufactured under high surveillance and go through stringent quality checks procedure to ensure that our final bio product meets the set industry standards.
A customer-centric approach is a core of Tribio foundation. We thrive to achieve 100% customer satisfaction through excellent services, customer support. Our services guide individuals and enterprises to overcome traditional production challenges without compromising quality. Our fierce marketing and unmatched distribution network, help us effectively manage and deliver our customers’ needs within the country and around the globe. 
</p>
             <b className="justify-center">{works.subtitle}</b> */}
            
          </div>
         
        </div> 

        {/* Mission */}
 
    <div className="animate relative bg-[url(/images/webbg.jpg)] bg-cover bg-center bg-no-repeat py-10">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
         	Mission, Vision and values
          </p>
        </div>
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="bc9273ce-29bb-4565-959b-714607d4d027"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Our </span>
          </span>{' '}
          Main Vision And Mission Of Our Company
        </h2>
       
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
             src="/images/leadership.png"   className=" w-[100px] m-10 ml-[90px] rounded"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold">Mission</div>
              <p className="text-sm text-gray-900">
               Our Mission is to exceed our customers expectations in quality, delivery, and cast through continuous improvement and customer interaction.
              </p>
               
            </div>
            
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-lg hover:shadow">
          <div className="relative w-full">
            <img
              src="/images/vision.png"  className=" w-[100px] m-10 ml-[90px] rounded"
              alt="Vision"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold">Vision</div>
              <p className="text-sm text-gray-900">
               Our Vision can be achieved through manufacturing of exceptionally best products at very cast effective wat through best avilable R&D personals and most customer centric policies.
              </p>
              
            </div>
           
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="/images/balance.png"
              className=" w-[100px] m-10 ml-[90px] rounded" 
              alt="Values"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold">Values</div>
              <p className="text-sm text-gray-900">
                Act with honesty and integrity treat people with respect conduct all business lawfully accept individual and corporate responsibility strive for customer satisfaction.
              </p> 
            </div>
            
          </div>
        </div>
      </div>
    </div>
  


       {/* <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={mission.image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="top-4 left-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="top-20 right-10 z-[-1]"
                />
                <Circle
                  className="top-1/2 right-12 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="top-1/2 left-12 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4">
              <p>{mission.subtitle}</p>
              {markdownify(mission.title, "h2", "section-title bar-left mt-4")}
              {markdownify(mission.content, "p", "mt-10")}
            </div>
          </div>
        </div>  */}

        {/* Video */}
        {/* <div className="container-xl relative">
          <div className="bg-theme absolute top-0 left-0 w-full">
            <Circle
              className="left-[7%] top-[21%]"
              width={32}
              height={32}
              fill={false}
            />
            <Circle
              className="left-[30%] top-[10%]"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="left-[4%] bottom-[35%]"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="left-[10%] bottom-[11%]"
              width={37}
              height={37}
              fill={false}
            />
            <Circle
              className="left-[44%] bottom-[48%]"
              width={37}
              height={37}
              fill={false}
            />
            <Circle
              className="left-[35%] bottom-[22%]"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="right-[32%] top-[2%]"
              width={47}
              height={47}
              fill={false}
            />
          </div>
          <div className="row items-center justify-center py-[90px]">
            <div className="md:col-6 xl:col-4">
              <div className="animate p-5">
                <p>{video.subtitle}</p>
                {markdownify(video.title, "h2", "mt-4 section-title bar-left")}
                {markdownify(video.description, "p", "mt-10")}
              </div>
            </div>
            <div className="md:col-6 xl:col-5">
              <div className="px-4 ">
                <VideoPopup
                  id={video.video_id}
                  thumbnail={video.thumbnail}
                  width={540}
                  height={585}
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* Clients */}

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
            <p className="text-base">
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

        <div className="animate relative bg-[url(/images/webbg.jpg)] bg-cover bg-center bg-no-repeat py-10">
          <div className="animate text-center">
            <p>{clients.subtitle}</p>
            {markdownify(clients.title, "h2", "section-title mt-4")}
          </div>
          <div className="animate from-right col-12 mt-16">
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
              {clients.brands.map((brand, index) => (
                <SwiperSlide
                  className=" h-[150px] cursor-pointer py-6 px-6   transition  lg:px-10"
                  key={"brand-" + index}
                >
                  <div className="relative h-full">
                    <ImageFallback
                      className="object-contain"
                      src={brand}
                      sizes="200vw"
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

        {/* Members */}
        {/* <div className="section container">
          <div className="animate text-center">
            <p>{our_member.subtitle}</p>
            {markdownify(our_member.title, "h2", "section-title mt-4")}
            {markdownify(our_member.content, "p", "mt-16")}
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row">
                {our_member.list.map((member, index) => (
                  <div
                    key={("member-", index)}
                    className="animate mt-10 text-center md:col-6 lg:col-4"
                  >
                    <ImageFallback
                      className="mx-auto rounded-full shadow-[10px_10px_0] shadow-primary/10"
                      src={member.image}
                      width={245}
                      height={245}
                      alt={member.name}
                    />
                    <h4 className="mt-8">{member.name}</h4>
                    <p className="mt-3">{member.field}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Office */}
        {/* <div className="section container">
          <div className="animate text-center">
            <p>{our_office.subtitle}</p>
            {markdownify(our_office.title, "h2", "section-title mt-4")}
            {markdownify(our_office.content, "p", "mt-16")}
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row  justify-center">
                {our_office.countries.map((country, index) => (
                  <div
                    key={("country-", index)}
                    className="animate mt-10 md:col-6 xl:col-3"
                  >
                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]">
                      <ImageFallback
                        // className="mx-auto"
                        src={country.flag}
                        width={80}
                        height={80}
                        alt={country.name}
                      />
                      <h5 className="h4 mt-2">{country.name}</h5>
                      <p className="mt-2">{country.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </section>
 
      
    

      {/* <Cta /> */}
      {/* <section class="animate relative bg-[url(/images/contbg.png)] bg-cover bg-center bg-no-repeat  ">
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
                                <input type="email" placeholder=" " class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                            </div> 
                            <div class="grid gap-8 row-gap-10 lg:grid-cols-2">
                              <div>
                                <label class="block m-2 text-sm text-gray-600 dark:text-gray-200">Phone Number</label>
                                <input type="text" placeholder=" " class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                <label class="block m-2 text-sm text-gray-600 dark:text-gray-200">Subject</label>
                                <input type="text" placeholder=" " class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
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
</section> */}
    </>
  );
};

export default About;
