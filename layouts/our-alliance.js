import { markdownify } from "@lib/utils/textConverter";

const  Our = ({ data }) => {
  const { frontmatter, content } = data;

  return (
<section >
    <div  class="relative bg-[url(/images/b1.png)] bg-cover bg-center bg-no-repeat lg:h-[500px]"
  >
    <div
      class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/10"
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
        <h1 class="text-3xl font-extrabold sm:text-5xl">
          {/* Let us find your */}
  
          <strong class="block font-extrabold text-primary">
          Our Alliance
          </strong>
        </h1>
  
        {/* <p class="mt-4 max-w-lg sm:text-xl text-black sm:leading-relaxed">
        Trust, Quality, and Commitment are three fundamental tenets that form the foundation of Tribio Scientific’s business philosophy and “To improve the quality of life innovatively by suppling high quality products for medicine manufacturing”.
        </p>
  */}
      </div>
    </div> 
    </div>







    <section class="bg-white dark:bg-gray-900">
    
   
    <div class="container px-6 py-16 mx-auto text-center">
        <div class="mx-auto">
            <h1 class="text-primary">The Power of Partnership</h1>

            <p class="mt-6 text-black">
         <b>   Tribio Scientific is work in alliance with Chromto Scientific Mumbai & Oxygen Lab . Chromato Scientific Have state of Art R& D at Taloja Mumbai .</b>  Chromato scientific& Tribio Scientific team consists youth & experience; qualified, experienced research professionals. The team has the capability to understand the science behind each project. The technical expertise and knowledge of the team spreads across Chemical Synthesis ,Biochemistry, Microbiology, Fermentation technology , Biotechnology, Animal Nutrition, Analytical Chemistry, Environmental Chemistry and Wastewater Management. 
            </p>

            
        </div>

      
    </div>
</section> 
 
    <section> 
  <div class="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-10 lg:px-8"> 

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"> 
      <div class="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <h3>Water Management Solutions </h3>
          <p>
          Tribio Scientific maintains a focus on keeping the environment clean by developing sustainable technologies. Our Team focus on developing 
            </p> 
            
        </article> 
        <div class="w-full"> 
                <div class="mt-8 space-y-5">
                    <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200"> 
                        <span class="mx-2">• COD removal using biological and chemical agents</span>
                    </p>

                    <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        

                        <span class="mx-2">• Induction/enhancement in biodegradation (anaerobic and aerobic)</span>
                    </p>

                    <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    

                        <span class="mx-2">• Resource Recovery</span>
                    </p>

                    <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        

                        <span class="mx-2">•	Recycle & Reuse</span>
                    </p>


                </div>
            
            </div>
        
       
        </div>
      

      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt="Waste Water treatment"
          src= "/images/waterwt.jpg"
          className="absolute inset-0 h-full w-full object-cover rounded-md"
        />
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-10 lg:px-8"> 

<div className=" my-10 grid grid-cols-1 gap-8 lg:grid-cols-2  lg:gap-16"> 
  <div class="lg:py-5">
    <article className="space-y-4 text-black">
      <h3 className="mb-10">Application Development </h3>
      <p>
      Tribio Scientific Continuous working along with Chromato Scientific and Oxygen Lab to Application development Protein digestibility improvement
        </p> 
        
    </article> 
    <div class="w-full"> 
            <div class=" mt-8">
                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	Process improvement in Sugar and Distilleries</span>
                </p>

                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    

                    <span class="mx-2">•	Urea and Sodium Hydroxide replacement</span>
                </p>

                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                    <span class="mx-2">•	Stability and activity enhancement of enzymes formulations</span>
                </p>  
            </div>
        
        </div>
    
   
    </div>
  

  <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
    <img
      alt="Waste Water treatment"
      src= "/images/laball.jpg"
      className="absolute inset-0 h-full w-[500px]  rounded-md"
    />
  </div> 
</div>
</div>
</section> 
{/* 
<section>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div class="max-w-3xl">
      <h2 class="text-3xl font-bold sm:text-4xl">
      1.Microbial culture  
      </h2>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
     

      <div class="lg:py-16">
        <article class="space-y-4 text-gray-600">
          <p>
          We are a recognized name and involved in offering an unmatched range of Composting Microbes. ACURO's microbial culture is a wonderful microbial product to resolve complex problems of sewage and solid waste treatment. Our multi-pronged sewage treatment solution refines the sewage and frees it from solid impurities to make it fit for industrial use thereby saving water required for composting. For sewage treatment, we use both anaerobic and aerobic methods
          </p>

          <p>
           
          </p>
        </article>
        
      </div>
      

    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt="Microbial culture"
          src="/images/Microbial.png"
          className="absolute inset-0 h-full w-full object-cover rounded-md"
        />
      </div>
 
    </div>
    <div
  class="bg-white border mt-5 border-gray-200 divide-y divide-gray-200 rounded-xl"
>
  <details class="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
    <summary class="flex items-center justify-between cursor-pointer">
      <h1 class="text-lg font-medium text-gray-900">
      Features of Microbial Culture:
      </h1>

      <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <ul class=" space-y-1 my-4 text-gray-900 list-disc list-inside dark:text-gray-900">
    <li>
    It degrades variety of complex organic matter that natural microbes unable to degrade
    </li>
    <li>
    They multiply faster in the solid waste.
    </li>
    <li>
  	Also, much effective in degrading fats, oil and grease.
    </li>
    <li>
    Nature friendly
    </li> 

</ul>
  </details>

  <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex items-center justify-between cursor-pointer">
      <h1 class="text-lg font-medium text-gray-900">
      Benefits of Microbial Culture:
      </h1>

      <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>
<ul class=" space-y-1 my-4 text-gray-900 list-disc list-inside dark:text-gray-900">
    <li>
    Boosts in Micro-Organisms cell growth and multiplication.
    </li>
    <li>
    	Reduce BOD, COD Load and SS in industrial waste water treatment effluent
    </li>
    <li>
      Improves floc setting formulation, thus prevent bulking sludge. 
    </li>
    <li>
    	Increase in MLSS , improve faster degradation of specific target compound. 
    </li>
    <li>
     Breakdown fat & Grease buildup and reduce sludge buildup. 
    </li>
    <li>
     Change in biomass dynamic. 
    </li>
    <li>
    	Improves rapid recovery time from upsets.  
    </li>
    <li>
    	Enhances odor control through natural organic acid oxidation. 
    </li>
    


</ul>

  </details>
</div>
  
  </div>

  
 
</section> */}



<section class="bg-white dark:bg-gray-900">
    
   
    <div class="container px-6 mx-auto text-center">
        <div class="mx-auto">
            <h1 class="underline text-primary">OXIGEN ANALYTICAL LABORATORIES</h1>

            <p class="mt-6 text-black">
            OXIGEN ANALYTICAL LABORATORIES is approved by Health and Family Welfare Department, ISO and NABL Accredited Testing Laboratory for the analysis of drug and cosmetic products. Oxygen Analytical lab is immersing company. We provide quality control testing for pharmaceutical and cosmetic products including method development and method validation. We have professional expertise and regulatory qualifications needed to accurately perform essential chemical and physiochemical tests on raw materials, APIs, finished products of pharmaceutical and cosmetic products. We are supported by excellent dedicated, well qualified, trained and experienced staff.We offer comprehensive testing services, in well equipped, state of the art laboratories, according to the pharmacopoeia (e.g. IP, EP, USP, BP, JP) and your specifications.
                </p>

            
        </div>

      
    </div>

   



 
</section> 

<div class="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-10 lg:px-8"> 

<div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-1  lg:gap-16"> 
  <div class="">
    <article className="space-y-4 text-black">
      <h3 className="text-primary mb-10">
 Our services for pharmaceuticals and cosmetics include:
</h3>
     
        
    </article> 
    <div class="w-full"> 
            <div class="grid gap-1 mt-8 sm:grid-cols-2">
                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Assays and chemical tests</span>
                </p>

                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    

                    <span class="mx-2">	•	 UV/Vis</span>
                </p>

                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                    <span class="mx-2">	•	 IR</span>
                </p> 

                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	•	 Chromatographic tests</span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">•	 HPLC</span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">•	 GC</span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	•	 Identification of active ingredients and impurities</span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">•	Physical and physico-chemical determinations</span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	•	 pH</span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	•	 Viscosity</span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	•	 Melting point</span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	 Loss on drying</span>
            </p> 
            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	•	 Limit tests</span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	•	 Elemental impurities  </span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	 •	 Ash  </span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	 • Residual solvents  </span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2"> •	 Volatile organic compounds (VOC)  </span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	 •	 Organic volatile impurities (OVI)  </span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	 •	 Organic volatile impurities (OVI)  </span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	 •	 Disintegration  </span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	 •	 Dissolution  </span>
            </p> 

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	 •	 Element Impurities  </span>
            </p> 
            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                

                <span class="mx-2">	 •	 Micro Biology  </span>
            </p>  

            </div> 
            
        </div>  
    </div>
  

  {/* <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
    <img
      alt="Waste Water treatment"
      src= "/images/waterwt.jpg"
      className="absolute inset-0 h-full w-full object-cover rounded-md"
    />
  </div> */}
</div>
</div>



<div class="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-10 lg:px-8"> 

<div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-1  lg:gap-16"> 
  <div class="">
    <article className="space-y-4 text-black">
      <h3 className="text-primary mb-10">
 We are well equipped with latest instruments :
</h3>
     
        
    </article> 
    <div class="w-full"> 
            <div class="grid gap-1 mt-8 sm:grid-cols-2">
                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	FTIR Spectrophotometer</span>
                </p>

                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 HPLC</span>
                </p>

                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Gas Chromatograph with Head space analyser</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 UV-Visible spectrophotometer</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">• Dissolution apparatus</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Potentiometer</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Conductivity meter</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Polarimeter</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 pH meter</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Analytical Balances</span>
                </p>



                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 HPLC water system</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 LOD Oven</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Furnace Oven</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Nitrogen assembly etc</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Disintegration Tester</span>
                </p>

                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Melting Point Apparatus</span>
                </p>

                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Flame photometer</span>
                </p>

                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Atomic Absorption Spectroscopy</span>
                </p>

                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Digital photo Fluorometer</span>
                </p>

                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Digital Polarimeter</span>
                </p>

                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Digital Refractometer</span>
                </p>

                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Digital Turbidity Meter</span>
                </p>
                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Bio Safety Cabinet</span>
                </p>
                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Laminar Air Flow</span>
                </p>
                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Autoclave Horizontal(Sterilization)</span>
                </p>

                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Colony Counter</span>
                </p>
 

                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Antibiotic Zone Reader</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Microscope</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 BOD Incubator</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Anaerobic Jar</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Particle Counter</span>
                </p>


                <p class="flex items-center  -mx-2 text-gray-700 dark:text-gray-200"> 
                    <span class="mx-2">•	 Air Sampler</span>
                </p>





                 

            </div> 
            
        </div>  
    </div>
  

  {/* <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
    <img
      alt="Waste Water treatment"
      src= "/images/waterwt.jpg"
      className="absolute inset-0 h-full w-full object-cover rounded-md"
    />
  </div> */}
</div>
</div>





















<section>






 {/* <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2"> 
      <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-2">
        <div className="flex flex-col sm:flex-row">
          {/* <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
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
          </div> 
          <div>
            <h3 className="mb-2 font-semibold leading-5 text-primary">Tribac-C</h3>
            <p className="my-4 text-sm text-gray-900">
            Ready to use Activated Microbial bio culture for aerobic process of water treatment used in biological process of water treatment. 
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <b>
                Application industry-
                </b>
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
               	Sugar and Distillery 
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Pulp & Paper 
              </li> 
                <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
              	Sewage treatment plant 
              </li>
              
            </ul>
            
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          {/* <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
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
          </div>  
          {/* <div>
            <h3 className="mb-2 font-semibold leading-5 text-primary">AnaBac-C</h3>
            <p className="my-4 text-sm text-gray-900">
            Ready to use Activated Microbial bio culture for anaerobic process of water treatment used in biological process of water treatment like biodigester, USAB and CPU, Septic tank and bio toilets.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
                <b>
                Application industry-
                </b>
                </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Sugar and Distillery 
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Pulp & Paper 
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Sewage treatment plant  
              </li>
            </ul>
            
          </div>
        </div>
        
      </div>  
    </div> */}


     {/* <div class="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-24 lg:px-8">
    <div class="max-w-3xl">
      <h2 class="text-3xl font-bold sm:text-4xl">
      Distillery Process Products
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      

      <div class="lg:py-16">
        <article className="space-y-4 text-gray-900">
          
          <p>
          The success of yeast fermentation is critical as it is extracted by fermenting sugars from grains and molasses for production of alcohol could not occur without sufficient supply of Nutrients like Urea and DAP during fermentation for grain and Molasses based distilleries.  Yeast cell can utilized ammonium and free amino acid for multiplication and metabolism process. Tribio Scientific develop a very multiple innovative product for Distillery processes.    </p>

        
        </article>
      </div>
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt="Waste Water treatment"
          src= "/images/f2.jpg"
          className="absolute inset-0 h-full w-full object-cover rounded-md"
        />
      </div>
    </div>
  </div>
   */}

</section>


  </section>
  
  
  
  );
};

export default Our;
