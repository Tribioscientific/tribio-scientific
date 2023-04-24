import Link from "next/link";
const FoodAndBeverageReferenceMaterials   = () =>{

    return(
        <>
        <div  class="relative bg-[url(/images/food.jpg)] bg-cover bg-center bg-no-repeat lg:h-[500px]">
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
          Food and Beverage Reference Materials
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
           - Food and Beverage Reference Materials
                
                </h2>
      <i>Chromato Scientific has years of experience in designing reference materials to support all aspects of analytical testing in the food and beverage sector. Our portfolio has expanded to adapt to changing regulations and technology, and now encompasses pesticides, PFAS, pharmaceutical and veterinary residues, microbial contaminants, mycotoxins, food allergens and more.</i>
            <p class="text-gray-800 mb-6 mt-2">
            Our state-of-the-art range of multi-residue reference material mixtures are designed for optimal analyte elution and maximum stability, and reduce the need for complicated method development or dilution steps - helping your laboratory operate more efficiently.
</p>
<p class="text-gray-800 mb-6 mt-6">
Chromato Scientific offers such a comprehensive range of matrix materials for food and environmental testing, browse our range of food and beverage reference materials below.
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
  </section> 

    </>
    )

}
export default FoodAndBeverageReferenceMaterials;