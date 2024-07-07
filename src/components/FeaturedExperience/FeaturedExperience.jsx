import React from 'react'
import { BsArrowRight, BsHeartArrow } from "react-icons/bs";

import { GeistSans } from 'geist/font';

import './FeaturedExperience.css'


const FeaturedExperience = () => {
  return (
    <div className='FeaturedExperience w-11/12 my-4'>
        <h1 className="fet-exp-tag text-[50px] my-4 text-clip mx-5">Featured Experience</h1>
        <p className="fet-exp-p mx-5">Get the inside scoop from industry Experts in our exclusive experience</p>
        <div className="line h-[2px]  bg-slate-400 mt-10"></div>

        <div className="fet-exp my-6 flex justify-between flex-wrap-reverse ">
            <div className="left flex flex-col items-center justify-center gap-4 ml-5">
                <h1 className="fet-company text-[50px]">J.P. Morgan</h1>
                <a href="" className='exp-btn h-[60px] w-[136px] bg-[#FAD869] flex justify-center items-center rounded-[30px] '><BsArrowRight fill='black' size={40}/></a>

            </div>
            <div className="flex flex-col mid items-center justify-center">
                <p className='bio max-w-[414px] ml-6 mr-6 txt-[15px]'>A Bio, short for biography, is a brief description or introduction of an individual. In an online context, it is often used in user profi-bg-slate-400 to provide information about the person, their interests, or profession. In the context of the Dummy Type, it serves as a placeholder for generating bio.</p>
            </div>
            <div className="right flex flex-col items-center justify-center ">
                <img className="w-[220px]" src="https://picsum.photos/300/300" alt="" />
            </div>
        </div>
        <div className="line h-[2px] w-full bg-slate-400 "></div>
        <div className="fet-exp my-6 flex justify-between flex-wrap-reverse ">
            <div className="left flex flex-col items-center justify-center gap-4 ml-5">
                <h1 className="fet-company text-[50px]">J.P. Morgan</h1>
                <a href="" className='exp-btn h-[60px] w-[136px] bg-[#FAD869] flex justify-center items-center rounded-[30px] '><BsArrowRight fill='black' size={40}/></a>

            </div>
            <div className="flex flex-col mid items-center justify-center">
                <p className='bio max-w-[414px] ml-6 mr-6 txt-[15px]'>A Bio, short for biography, is a brief description or introduction of an individual. In an online context, it is often used in user profi-bg-slate-400 to provide information about the person, their interests, or profession. In the context of the Dummy Type, it serves as a placeholder for generating bio.</p>
            </div>
            <div className="right flex flex-col items-center justify-center ">
                <img className="w-[220px]" src="https://picsum.photos/300/300" alt="" />
            </div>
        </div>
        
        <div className="line h-[2px] w-full bg-slate-50 "></div>
      
    </div>
  )
}

export default FeaturedExperience
