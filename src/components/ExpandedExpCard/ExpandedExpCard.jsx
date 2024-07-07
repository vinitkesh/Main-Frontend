import React from 'react'
import './ExpExpCard.css'
import Image from 'next/image'

import Difficulty from '../Difficulty/Difficulty'
import  "./ExpExpCard.css"

import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

const ExpandedExpCard = ({Name,CTC,Position1,Position2,diff,insta,twitter,Linkedin,email}) => {
  return (
    <div className='ExpandedExpCard w-5/6 min-h-[831px] px-[40px] py-[60px] relative '>

      <div className="top-container flex flex-col">

        <div className="top-top flex">

            <div className="top-left  max-w-[180px] gap-3 flex flex-col">
                <div className="img-container w-[180px] customShadow">
                    <img src="https://picsum.photos/id/241/300/300" alt="profile" />
                </div>
                <div className="name-container flex align-center justify-center min-w-max ">
                    <h2 className="name text-[24px] rounded-full px-2 text-center ">{Name}</h2>
                </div>
                <div className="social-links flex flex-wrap gap-1 ">
                    <a href={insta} className='rounded-full bg-[grey] w-max h-max p-2 customShadow' >
                        <FaInstagram size={24} />
                    </a>
                    <a href={twitter} className='rounded-full bg-[grey] w-max h-max p-2 customShadow'>
                        <FaTwitter size={24} />
                    </a>
                    <a href={Linkedin} className='rounded-full bg-[grey] w-max h-max p-2 customShadow'>
                        <FaLinkedin size={24} />
                    </a>
                    <a href={email} className='rounded-full bg-[grey] w-max h-max p-2 customShadow'>
                        <FaEnvelope size={24} />
                    </a>
                </div>
                
            </div>

            <div className="top-right flex flex-col">
                <div className="top-right-top flex gap-4 mx-[30px] flex-wrap justify-around items-end h-min">
                    
                    <div className="position1 flex flex-col gap-1 h-min">
                        <p className="pos-tag txt-[16px]">Position</p>
                        <h2 className="pos-val1 txt-[20px]">{Position1}</h2>
                    </div>
                    <div className="ctc flex flex-col gap-1 h-min ">
                        <p className="ctc-tag txt-[16px]">CTC</p>
                        <h2 className="ctc-val txt-[20px]">{CTC}</h2>
                    </div>
                    <div className="position2 flex flex-col gap-1 h-min ">
                        <p className="pos-tag txt-[16px]">Position</p>
                        <h2 className="pos-val2 txt-[20px]">{Position2}</h2>
                    </div>               
                    <Difficulty diff="Easy" className='justify-self-end align-bottom ' /> 
                    <img className="h-[48px] w-[48px] rounded-sm mt-3 align self-end  " src={"https://picsum.photos/id/267/300/300"} />
                </div>  
                <div className="top-right-bottom flex flex-col gap-4 p-8 mt-4">
                    <h1 className="biography text-[24px]">Biography</h1>
                    <p className="bio w-full text-[20px]">A Bio, short for biography, is a brief description or introduction of an individual. In an online context, it is often used in user profiles to provide information about the person, their interests, or profession. In the context of the Dummy Type, it serves as a placeholder for generating bio text used for testing and development purposes.</p>
                </div>
            </div>
        </div>

        

      </div>

      <div className="bottom">
        <div className="hidden-bottom flex flex-col gap-4 mt-4">
            <h1 className="biography text-[24px]">Biography</h1>
            <p className="bio w-full text-[20px]">A Bio, short for biography, is a brief description or introduction of an individual. In an online context, it is often used in user profiles to provide information about the person, their interests, or profession. In the context of the Dummy Type, it serves as a placeholder for generating bio text used for testing and development purposes.</p>
        </div>
            <h1 className="experience text-[24px] mt-6">Experiences</h1>
            <p className="bio w-full text-[20px] mt-4">A Bio, short for biography, is a brief description or introduction of an individual. In an online context, it is often used in user profiles to provide information about the person, their interests, or profession. In the context of the Dummy Type, it serves as a placeholder for generating bio text used for testing and development purposes. A Bio, short for biography, is a brief description or introduction of an individual. In an online context, it is often used in user profiles to provide information about the person, their interests, or profession. In the context of the Dummy Type, it serves as a placeholder for generating bio text used for testing and development purposes.
            A Bio, short for biography, is a brief description or introduction of an individual. In an online context, it is often used in user profiles to provide information about the person, their interests, or profession. In the context of the Dummy Type, it serves as a placeholder for generating bio text used for testing and development purposes.</p>
        </div>

        <div className="circle absolute bottom-2 right-0 mr-[8px] mt-[8px] w-[100px] h-[100px] rounded-[32px] flex items-center justify-center">
            <a href="http://google.com">
                <div className="circle-in w-[80px] h-[80px] flex items-center justify-center ">
                <p className="next text-[20px] ">Next</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default ExpandedExpCard
