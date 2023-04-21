import { useState } from 'react';
const WasteToEnergy  = ( ) => {

   
        const [date, setDate] = useState('');

        function formatTimestamp(timestamp) {
            const date = new Date(timestamp);
            return date.toLocaleString();
          }
      
        const handleSubmit = (event) => {
          event.preventDefault();
          const timestamp = new Date(date).getTime(); // Convert the input date to a timestamp
          // Send the timestamp to your API or backend server
          console.log(timestamp,"time ");
          const formattedDateTime = formatTimestamp(timestamp);
          console.log(formattedDateTime,"time change");
        };
  

    return (
      <section className="section "> 

<form onSubmit={handleSubmit}>
      <label>
        Enter a date:
        <input type="datetime-local" value={date} onChange={(event) => setDate(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
    <div  class="relative bg-[url(/images/f6.jpg)] bg-cover bg-center bg-no-repeat lg:h-[500px]">
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
              Waste To Energy
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
            Waste to energy
             
            </h2>
            <p className="text-base">
            Waste-to-Energy takes non-hazardous waste – otherwise destined for landfill – and combusts it, generating steam for electricity production. Ash is processed to recover metal for recycling while all gases are collected, filtered and cleaned to minimize environmental impact.
               </p>
          </div> 
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src="/images/Waste.png"
          className="object-cover object-top w-full h-60 max-w-xl   rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt="Waste To Energy"
        />
      </div>
    </div>
  
     
      </section>
    );
  };
  
  export default WasteToEnergy;
  