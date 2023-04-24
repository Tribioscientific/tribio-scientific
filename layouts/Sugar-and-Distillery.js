import Link from "next/link";
const SugarAndDistillery = ( ) => {
  

  return (
    <section className=""> 
  
  <div  class="relative bg-[url(/images/chini-factory.jpg)] bg-cover bg-center bg-no-repeat lg:h-[500px]">
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
          Sugar and Distillery
          </strong>
        </h1>
  
        {/* <p class="mt-4 max-w-lg sm:text-xl text-black sm:leading-relaxed">
        Depending on the raw material, the conditions of fermentation….,organic load in effluents  and the spirits you want to craft, we have various formulations to assist you in your challenge.   </p>
  */}
      </div>
    </div> 
    </div> 
   
  

    

   <div class="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-10 lg:px-8"> 

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"> 
      <div class="lg:py-1">
        <article className="space-y-4 text-gray-600">
          <h3>-  Sugar and Distillery </h3>
          <p>
          The distillation process begins with raw materials like Grains/ Molasses, which are grinded in order to make it a mash. During this process, the starch is converted into sugar. The fermentation of this mash is carried out in fermentation tanks.
              </p> 
            
        </article> 
        <div class="w-full"> 
     
                <div class="mt-8 space-y-5 text-blue-500" >
                <h6>Products Link :-</h6>
                    <Link class="flex items-center -mx-2 hover:text-primary hover:underline"  href="/nutrients"> 
                        <span class="mx-2"> • Distillery Nutrient</span>
                    </Link>

                    <Link class="flex items-center -mx-2 hover:text-primary hover:underline"  href="/etp-cpu-nutrient"> 
                        <span class="mx-2"> •  ETP/CPU Nutrient</span>
                    </Link>
                    <Link class="flex items-center -mx-2 hover:text-primary hover:underline"  href="/digester-nutrient"> 
                        <span class="mx-2"> •  Digester Nutrient</span>
                    </Link>

                    <Link class="flex items-center -mx-2 hover:text-primary hover:underline"  href="/microbial-culture"> 
                        <span class="mx-2"> •   Microbial Culture</span>
                    </Link>


                </div>
            
            </div>
        
       
        </div>
      

      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=" Sugar and Distillery"
          src= "/images/Sugar.png"
          className="absolute inset-0 rounded-md"
        />
      </div>
    </div>
  </div>
   
    </section>



  );
};

export default SugarAndDistillery;
