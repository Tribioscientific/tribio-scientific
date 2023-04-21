import { markdownify } from "@lib/utils/textConverter";

const Pharmaceuticals = ({ data }) => {
  const { frontmatter, content } = data;

  return (
    <section className="">
    <div  class="relative bg-[url(/images/pharmaceuticals.png)] bg-cover bg-center bg-no-repeat lg:h-[500px]">
    <div
      class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/60 sm:to-white/10"
    ></div>
  
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center sm:text-left">
      {/* <img
          alt="Waste Water treatment"
          src= "/images/logo.png"
          className="inset-0 hidden lg:block h-20 w-50   rounded-md"
        /> */}
        <h1 class="text-3xl font-extrabold sm:text-5xl">
          {/* Let us find your */}
  
          <strong class="block font-extrabold text-primary">
          Pharmaceuticals
          </strong>
        </h1>
  
        {/* <p class="mt-4 max-w-lg sm:text-xl text-black sm:leading-relaxed">
        Depending on the raw material, the conditions of fermentation….,organic load in effluents  and the spirits you want to craft, we have various formulations to assist you in your challenge.   </p>
  */}
      </div>
    </div> 
    </div> 


    <div className="relative px-4 pt-8 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
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
  
  
    <div class="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-10 lg:px-8">
     

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt="Waste Water treatment"
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
