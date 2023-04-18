const SugarAndDistillery = ( ) => {
  

  return (
    <section className=""> 
  
  <div  class="relative bg-[url(/images/f2.jpg)] bg-cover bg-center bg-no-repeat lg:h-[500px]">
    <div
      class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/60 sm:to-white/10"
    ></div>
  
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center sm:text-left">
      <img
          alt="Waste Water treatment"
          src= "/images/logo.png"
          className="inset-0 hidden lg:block h-20 w-50   rounded-md"
        />
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
   
    <div className="relative px-4 pt-8 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">  
            <h2 className="max-w-lg mb-6">
            Sugar and Distillery
             
            </h2>
            <p className="text-base">
            The distillation process begins with raw materials like Grains/ Molasses, which are grinded in order to make it a mash. During this process, the starch is converted into sugar. The fermentation of this mash is carried out in fermentation tanks.
                 </p>
          </div> 
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src="/images/Sugar.jpeg"
          className="object-cover object-top w-full h-60 max-w-xl   rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt=" Sugar and Distillery"
        />
      </div>
    </div>
  
   
    </section>
  );
};

export default SugarAndDistillery;