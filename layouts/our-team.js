import Link from "next/link";
import Image from "next/image";
const OurTeam =  () => {
    const team2 = [
        {
            avatar: "/images/team.jpg",
            name: "Ravish Chandra",
            title: "Co-founder & Director",
            desc: "",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "/images/team.jpg",
             name: "Dileep Kashyap",
            title: "Co-founder & Director",
            desc: " ",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        } ,
    ]
    const team = [
        {
            avatar: "/images/team.jpg",
              name: "Sateesh Chandra",
            title: "Technical Support and R& D",
            desc: "15 Year Experience in various pharmaceuticals industry like Sun Pharma, Torrent Pharma, Alkem Laboratory in R&D and Quality.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "/images/team.jpg",
              name: "Durgesh Tiwari",
            title: "Manufacturing & Quality",
            desc: "Founder –Chromato scientific(a Quality standard synthesis company) Science Graduate & Master in Business from prestigious college.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "/images/team.jpg",
             name: "Brijesh Kashyap",
            title: "HR & administration",
            desc: "Ex –Co Founder of MOBexing (acquire by BICS) and a Science Graduate & Master in Business(MBA) from Prestigious college.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "/images/team.jpg",
             name: "Mr. S.N. Singh",
            title: "Technical consultant & Advisor",
            desc: "Master in Bio-chemical Engineering and 32-year experience in the field of Environment.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
         
    ]

  return (
    <section className="animate py-14">
           <section className="bg-gradient-to-b from-blue-300 to-[#eae8ee] -mt-16">
       
       <div className="animate container flex flex-col justify-center mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between">
         <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
           <h1 className="py-2 text-2xl font-bold sm:text-5xl md:text-left lg:leading-tight md:mx-auto text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]  ">
           Meet our team
           </h1> 
           <p className="text-gray-800 mt-3 text-md">
        We are a multi-disciplinary R&D team of biologists, chemists, lab specialists, and biostatisticians, all of whom are working hard to enhance productivity and add value to industrial processes.
            </p>  
         </div>

         <div className="flex items-center justify-center ">
           <Image
             src="/images/team-hero.svg"
             width={550}
             height={500}
             alt="team-tribio"
             className=" "
           />
         </div>
       </div>
     
   </section>
    <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8 py-12 ">
        
          <h3 className="block font-extrabold text-primary mt-6">
          Company Directors
            </h3>
       
    <div className="mt-12">
            <ul className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 ">
                {
                    team2.map((item, idx) => (
                        <li key={idx}>
                            <div className="w-60 h-60 mx-auto">
                                <img
                                    src={item.avatar}
                                    className="w-full h-full rounded-xl border-2"
                                    alt=""
                                />
                            </div>
                            <div className="mt-2">
                                <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]  font-semibold text-xl">{item.name}</h2>
                                <p className="text-indigo-600">{item.title}</p>
                                <p className="text-gray-600 mt-2">{item.desc}</p>
                                {/* <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                    <a href={item.twitter}>
                                        <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                    </a>
                                    <a href={item.linkedin}>
                                        <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                    </a>
                                </div> */}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
        <h3 className="block font-extrabold text-primary pt-20">
        Team Members
            </h3>
        <div className="mt-12 ">
            <ul className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                {
                    team.map((item, idx) => (
                        <li key={idx}>
                            <div className="w-24 h-24 mx-auto">
                                <img
                                    src={item.avatar}
                                    className="w-full h-full rounded-full border-2"
                                    alt=""
                                />
                            </div>
                            <div className="mt-2">
                                <h4 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-800 to-[#131146]   font-semibold sm:text-lg">{item.name}</h4>
                                <p className="text-indigo-600">{item.title}</p>
                                <p className="text-gray-600 mt-2 text-md">{item.desc}</p>
                                {/* <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                    <a href={item.twitter}>
                                        <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                    </a>
                                    <a href={item.linkedin}>
                                        <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                    </a>
                                </div> */}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
</section>
  );
};

export default OurTeam;
