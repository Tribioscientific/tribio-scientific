import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import Image from "next/image";

const Pharmaceuticals = ({ data }) => {
  const { frontmatter, content } = data;

  const features = [
    
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>,
        title: "Pharmaceuticals Standards",
        desc: "Tribio Scientific's pharmaceutical application standards cover process control, design, and performance, as well as quality acceptance/assurance tests for the pharmaceutical manufacturing industry.",
        href: "/pharmaceuticals-standards"
    },
    
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>,
        title: "Pharmaceuticals Impurities",
        desc: "An impurity in pharmaceuticals is classified as any component that is not the entity defined as the drug substance. In addition, for a drug product, any component that is not a formulation ingredient is considered an impurity. .",
        href: "/pharmaceuticals-impurities"
    } 
    
]
  return (
    <section className="">

<>
         <section className=" bg-gradient-to-b from-blue-300 to-[#eae8ee] -mt-16">
       
       <div className="animate container flex flex-col justify-center mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between">
         <div className="flex flex-col  justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
           <h1 className="pt-20 text-xl font-bold sm:text-5xl  lg:leading-tight md:mx-auto text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]  ">
           Pharmaceuticals Industry
           </h1> 
           <p className="mb-8 sm:text-2xl lg:text-xl sm:mb-12 text-neutral-800">
           High Quality reference standard , API Working Standards are used to help ensure the identity, potency, quality and purity of drug products and drug substances. This is accomplished by analyzing the substance against its qualified reference standard, so the accuracy of reference materials is essential to manufacture quality APIs.
           </p>
           
         </div>

         <div className="flex items-center justify-center pt-20">
           <Image
             src="/images/industry/pharma.svg"
             width={550}
             height={500}
             alt="Pharmaceuticals Industry"
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
          Products and Services
        {/* We offer consistent goods and services to the industry */}
        </h2> 
            
               
            <div className="mt-14">

            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-2">
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


   

    {/* <div className="relative px-4 pt-8 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">  
            <h2 className="max-w-lg mb-6">
            Pharmaceuticals
             
            </h2>
            <p className="text-base">
            High Quality reference standard , API Working Standards are used to help ensure the identity, potency, quality and purity of drug products and drug substances. This is accomplished by analyzing the substance against its qualified reference standard, so the accuracy of reference materials is essential to manufacture quality APIs.
                   </p>
          </div> 
          
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src="/images/pharmaceuticals.png"
          className="object-cover object-top w-full h-60 max-w-xl   rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt="Pharmaceuticals"
        />
      </div>
    </div>
   */}

    



  
    <div class="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-10 lg:px-8">
     

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=" "
          src= "/images/services/1.jpg"
          className="absolute inset-0 h-full w-full object-cover rounded-md"
        />
      </div>

      <div class="lg:py-16">
        <article className="space-y-4 text-black">
          <h3 className="text-primary">•	Reference standard  </h3>
          <p>
          High Quality reference standard, API Working Standards are used to help ensure the identity, potency, quality and purity of drug products and drug substances. This is accomplished by analyzing the substance against its qualified reference standard, so the accuracy of reference materials is essential to manufacture quality APIs.  </p>

          <p>
          Working Standards can be compendial, referred to as Primary Reference Standard, or a highly characterized in-house standard or a Secondary Reference Standard. Primary Working Standards can be obtained from the standards-setting Pharmacopeias, such as the USP or EP.   </p>
        </article>
        <p className="mt-4">We supply multiple pharmaceuticals reference standard and working standard:</p>

        <ul class=" space-y-1 my-4 text-gray-900 list-disc list-inside dark:text-gray-900">
    <li>
    	To quantitatively determine the product assay.
    </li>
    <li>
   	To detect impurities in the sample.
    </li>
    <li>
    	For releasing raw materials.
    </li>
    <li>
    	For in-process monitoring.
    </li>
    <li>
 As a retention time reference marker.
    </li>
    <li>
    	For stability studies.
    </li>
   


</ul>


      </div>
    </div>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-10 lg:px-8">
     

     <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
     
 
       <div class="lg:py-16">
         <article className="space-y-4 text-black">
           <h3 className="text-primary">•	Impurity standard  </h3>
           <p>
           Impurity Standards are highly characterized and are used to determine quantitative data (like purity or impurity etc.), qualitative data (identification data), and calibration (like melting point standard, UV-visible spectrum standard etc.). Consequently, the quality and purity of the Impurity Standards are crucial to achieve scientifically valid results.
           </p>
             </article> 
 
       </div>

       <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
         <img
           alt="Waste Water treatment"
           src= "/images/services/2.jpg"
           className="absolute inset-0 h-full w-full object-cover rounded-md"
         />
       </div>
     </div>
   </div>

   <div class="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-10 lg:px-8">
     

     <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
     
     <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
         <img
           alt="Waste Water treatment"
           src= "/images/services/3.jpg"
           className="absolute inset-0 h-full w-full object-cover rounded-md"
         />
       </div>
 
       <div class="lg:py-16">
         <article className="space-y-4 text-black">
           <h3 className="text-primary">•	Nitrosamine impurity  </h3>
           <p>
           Nitrosamines are chemical compounds classified as probable human carcinogens on the basis of animal studies. EU regulators first became aware of nitrosamines in medicines in mid-2018 when nitrosamine impurities, including N-nitroso dimethylamine (NDMA), were detected in blood pressure medicines known as 'sartans'. There is a very low risk that nitrosamine impurities at the levels found in medicines could cause cancer in humans.  </p>
             </article> 
 
       </div>

      
     </div>
   </div>

   <div class="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-10 lg:px-8">
     

     <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
     
 
       <div class="lg:py-16">
         <article className="space-y-4 text-black">
           <h3 className="text-primary">•	Probiotics Strains</h3>
           <p>
           Tribio Scientific is proud to be a Supplier with our alliance partner Silaris LLP of probiotics stains manufactured by UAS labs (The Probiotics Company) in State of the art GMP facility at Madison USA. UAS labs offer scientifically proven probiotics stains backed by tireless research and rigorous Clinical trials. Contact us to learn how our expertise team can work for you.   </p>
             </article> 
 
       </div>

       <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
         <img
           alt="Waste Water treatment"
           src= "/images/services/4.jpg"
           className="absolute inset-0 h-full w-full object-cover rounded-md"
         />
       </div>
     </div>
   </div>

   
    </section>
  );
};

export default Pharmaceuticals;
