const PulpAndPaper  = ( ) => {
  

    return (
      <section className="">
 
    <div  class="relative bg-[url(/images/Pulp.jpeg)] bg-cover bg-center bg-no-repeat lg:h-[500px]">
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
          Pulp and paper industry
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
            Pulp and paper industry
             
            </h2>
            <p className="text-base">
            Pressing the sheet removes the water by force. Once the water is forced from the sheet, a special kind of felt, which is not to be confused with the traditional one, is used to collect the water. Whereas, when making paper by hand, a blotter sheet is used instead.
                   </p>
          </div> 
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src="/images/Pulp.jpeg"
          className="object-cover object-top w-full h-60 max-w-xl   rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt="Pulp and paper industry"
        />
      </div>
    </div>
  
     
      </section>
    );
  };
  
  export default PulpAndPaper;
  