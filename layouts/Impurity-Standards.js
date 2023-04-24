import Link from "next/link";
const ImpurityStandards = () =>{

    return(
        <>
        <div  class="relative bg-[url(/images/impurity.jpg)] bg-cover bg-center bg-no-repeat lg:h-[500px]">
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
  
          <strong class="block font-extrabold ">
          Impurity Standards   
          </strong>
        </h1>
  
      
      </div>
    </div> 
    </div> 

    <section class="mb-10 text-gray-800">
    <div class="block rounded-lg shadow-lg bg-white">
      <div class="flex flex-wrap items-center">
   
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="text-3xl text-primary font-bold mb-6">
           - Impurity Standards
                
                </h2>
      
            <p class="text-gray-800 mb-6">
            Impurity Standards are highly characterized and are used to determine quantitative data (like purity or impurity etc.), qualitative data (identification data), and calibration (like melting point standard, UV-visible spectrum standard etc.). Consequently, the quality and purity of the Impurity Standards are crucial to achieve scientifically valid results.
</p>



        
            
          </div>
          <div class="flex flex-wrap items-center">
   
   <div class="grow-0 shrink-0 basis-auto w-full">
     <div class="px-6 md:px-12">
       <h2 class="text-3xl text-primary font-bold mb-6">
      - What are Drug impurities or API impurities ?
           
           </h2>
 <i>As defined by the United States Pharmacopeia (USP), impurity is “any component of a drug substance that is not the chemical entity defined as the drug substance and in addition, for a drug product, any component that is not a formulation ingredient” .
 </i>
       <p class="text-gray-800 mb-6 mt-2">
       Potential Toxic chemicals and carcinogens in drugs that are supposed to treat diseases are one of the biggest problems to plague Active Pharmaceutical Ingredient (API) manufacturing. Because of this, one of the most important tasks of any Contract Manufacturing Organization (CMO) is to identify impurities before they impact the quality, efficacy and safety of drugs, as well as cause costly project delays.
       </p>
<p class="text-gray-800 mb-6 mt-6">
The value of data gleaned from this type of analysis will depend on the specific tests that are carried out. However, the bottom line is that spending some time on properly identifying impurities before making potentially critical manufacturing decisions will more often than not save time and money further down the line and help prevent API waste or prevent failure during clinical trials. Analysing the levels of impurities and the physical, structural and behavioural attributes of these impurities in APIs helps to identify the potential cause of variations in the finished product during drug development and formulation. It’s also useful in spotting potential problems when evaluating new suppliers, changing or adding manufacturing sites, or scaling up production.
</p>
<p class="text-gray-800 mb-6 mt-6">
Chromato Scientific™ offers a wide range of high purity Impurity Standards for the analytical and testing applications on the milligram to gram scale at competitive price. Chromato Scientific™ has a technical capability to synthesize, isolate and purify the Impurity Standards to their purest form. Chromato Scientific™ offers the Impurity Standards from mg to gm scale.

</p>
        
   
       <div className=" mt-5">
                 <Link className="btn btn-primary" href="/moredetailspdf">
                 Request Quote Today !
                 </Link>  
               </div> 
     </div>
   </div>
 </div>
        </div>
      </div>
    </div>
  </section> 
  <section class="mb-10 text-gray-800">
    <div class="block rounded-lg shadow-lg bg-white">
     
    </div>
  </section> 

    </>
    )

}
export default ImpurityStandards;