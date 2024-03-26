"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function NavUtils() {

    const [isOpen,setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };

  return (
    <div>
        <button className="xl:hidden z-10" onClick={toggleNavbar} >
                   <Image quality={100} src="navLinkMobile.svg"  width={51} className="rounded-full mt-3 h-12 w-12 p-2 border " height={10} alt="image"></Image>
        </button>
         
        {isOpen&& <nav className={isOpen?` xl:hidden absolute w-[70%]  right-0  h-screen my-2`:" xl:hidden absolute right-0"}>
              <div className="h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 flex flex-col items-center justify-center ">
                <div className="gap-5 text-lg text-white flex flex-col justify-center items-center  w-full">
                        <Link className="hover:bg-[#222222] hover:py-2 hover:px-1 hover:rounded-3xl w-[70%] flex justify-center transition-all ease-in-out duration-500 h-10 items-center" href='/'>Home</Link>
                        <Link className="hover:bg-[#222222] hover:py-2 hover:px-1 hover:rounded-3xl w-[70%] flex justify-center transition-all ease-in-out duration-500 h-10 items-center" href='/about'>About Us</Link>
                        <Link className="hover:bg-[#222222] hover:py-2 hover:px-1 hover:rounded-3xl w-[70%] flex justify-center transition-all ease-in-out duration-500 h-10 items-center" href='/events'>Events</Link>
                        <Link className="hover:bg-[#222222] hover:py-2 hover:px-1 hover:rounded-3xl w-[70%] flex justify-center transition-all ease-in-out duration-500 h-10 items-center" href='/teams'>Teams</Link>
                        <Link className="hover:bg-[#222222] hover:py-2 hover:px-1 hover:rounded-3xl w-[70%] flex justify-center transition-all ease-in-out duration-500 h-10 items-center" href='/gallery'>Gallery</Link>
                </div>
                       
              </div>
        </nav>}
    </div>


  )
}
