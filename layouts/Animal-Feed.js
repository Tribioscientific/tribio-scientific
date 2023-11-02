import Image from "next/image";
const AnimalFeed  = ( ) => {
  

    return (
      <section className="">
       <>
         <section className=" bg-gradient-to-b from-blue-300 to-[#eae8ee] -mt-16">
       
       <div className="animate container flex flex-col justify-center mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between">
         <div className="flex flex-col  justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
           <h1 className="pt-20 text-2xl font-bold sm:text-5xl  lg:leading-tight md:mx-auto text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]  ">
           Animal Feed
           </h1> 
           <p className="mb-8 sm:text-2xl lg:text-xl sm:mb-12 text-neutral-800">
           Animal feeds play a leading role in the global food industry, enabling economic production of animal proteins throughout the world. Feed is the largest and most important component to ensuring safe, abundant and affordable animal proteins.
           </p>
           
         </div>

         <div className="flex items-center justify-center pt-20">
           <Image
             src="/images/industry/afood.png"
             width={850}
             height={600}
             alt="Animal Feed"
             className=" "
           />
         </div>
       </div>

       
     
   </section>

   
   

     </>

  
     
      </section>
    );
  };
  
  export default AnimalFeed;
  