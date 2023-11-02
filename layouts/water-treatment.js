import Link from "next/link";
import Image from "next/image";
const WaterTreatment =  () => {   
    
    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
            title: "NutriE-WT",
            desc: "A Symbiotic blend of Bio-Nutrients for replacing inorganic nitrogen & phosphorus sources like Urea & DAP and other essential micronutrients.",
            href: "/etp-cpu-nutrient"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>,
            title: "Tribio Powermix",
            desc: "A blend of Micro & Marco nutrient for conversion of VFA into methane gas generation of all type of anaerobic process.",
            href: "/digester-nutrient"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "Microbial culture",
            desc: "Tribio microbial culture is a wonderful microbial product to resolve complex problems of sewage and solid waste treatment.",
            href: "/microbial-culture"
        },
        
    ]
  return (
     <>
         <section className=" bg-gradient-to-b from-blue-300 to-[#eae8ee] -mt-16">
       
       <div className="animate container flex flex-col justify-center mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between">
         <div className="flex py-14 flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
           <h1 className="py-2 text-2xl font-bold sm:text-5xl  lg:leading-tight md:mx-auto text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]  ">
          Water Treatment Industry
           </h1> 
           <p className="mb-8 sm:text-2xl lg:text-xl sm:mb-12 text-neutral-800">
           We have been offering state-of-the-art and green solutions for diverse water treatment applications and processes. 
           </p>
           
         </div>

         <div className="flex items-center justify-center py-14 ">
           <Image
             src="/images/wt.png"
             width={750}
             height={500}
             alt="Water Treatment Industry"
             className=" "
           />
         </div>
       </div>

       
     
   </section>

   <div className=" animate py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
            <h2 className="max-w-lg mb-6 text-primary ">
          
             
            </h2>
            <h2 className="text-2xl font-bold mb-6  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
          Water Treatment Products and Services
        {/* We offer consistent goods and services to the industry */}
        </h2> 
            
            <p className="mt-4 text-gray-700">
            Tribio Scientific Water Treatment solutions is a design and manufacturing company serving numerous industries.we’ve been delivering innovative and sustainable solutions for several applications and processes of water treatment, wastewater reuse and membrane separation.Our wide range of technologies and extended know-how in all water-related sectors will guarantee you a cost-efficient solution meeting your water quality requirements.  </p>
             
            <div className="mt-14">

            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    {/* <div className="flex-none w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div> */}
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]">
                                            {item.title}
                                        </h4>
                                        <p className="text-[15px]">
                                            {item.desc}
                                        </p>
                                        <Link href={item.href} className="text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1">
                                            View Product
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                   
                </div>
            
                
              
            </div>
        </div>
   

     </>
  );
};

export default WaterTreatment;
