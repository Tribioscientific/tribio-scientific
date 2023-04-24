const PharmaceuticalsStandards= () =>{
    return (

<section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
      Pharmaceuticals Standards
      </h2>

      {/* <p className="max-w-md mx-auto mt-4 text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p> */}
    </header>

    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <a href="/working-standard" className="block overflow-hidden group">
          <img
            src="/images/workings.jpg"
            alt="Working Standard"
            className=" h-[300px] w-[300px] object-cover transition duration-500 group-hover:scale-105 rounded-md"
            />

          <div className="relative pt-3 bg-white">
            <h5
              className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
         	1. Working Standard
            </h5>

            <p className="mt-2">
              {/* <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> £24.00 GBP </span> */}
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="/pharmacopieal-reference-standards" className="block overflow-hidden group">
          <img
             src="/images/pharmacopieal.jpg"
             alt="Pharmacopieal Reference Standards"
            className=" h-[300px] w-[300px] object-cover transition duration-500 group-hover:scale-105 rounded-md"
          />

          <div className="relative pt-3 bg-white">
            <h5
              className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
        2. Pharmacopieal Reference Standards
            </h5>

            <p className="mt-2">
              {/* <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> £24.00 GBP </span> */}
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="/food-and-beverage-reference-materials" className="block overflow-hidden group">
          <img
           src="/images/food.jpg"
           alt="Food and Beverage Reference Materials"
           className=" h-[300px] w-[300px] object-cover transition duration-500 group-hover:scale-105 rounded-md"
           />

          <div className="relative pt-3 bg-white">
            <h5
              className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
             3.	Food and Beverage Reference Materials
            </h5>

            <p className="mt-2">
            
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="/dyes-and-color-reference-standards" className="block overflow-hidden group">
          <img
            src="/images/dyes.jpg"
            alt="Dyes and Color Reference Standards"
            className=" h-[300px] w-[300px] object-cover transition duration-500 group-hover:scale-105 rounded-md"
          />

          <div className="relative pt-3 bg-white">
            <h5
              className=" text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
            4.	Dyes and Color Reference Standards
            </h5>

            <p className="mt-2">
            
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>


    )


}
export default PharmaceuticalsStandards;