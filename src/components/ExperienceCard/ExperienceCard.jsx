import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import './ExperienceCard.css'
import Difficulty from '../Difficulty/Difficulty'

const ExperienceCard = ({name, company,diff,CTC, Position1, Position2}) => {

  return (
    <div className='exp-card-container w-[560px] h-[326px] flex flex-col '>

      {/* Top container */}
      <div className="top-container w-max h-[158px] flex ">
          <div className="content w-[413px] flex h-max ml-[33px] mt-[31.5px] justify-between">
            <div className="img-container h-max w-max"><img className="h-[126px] w-[126px] rounded-full" src={"https://picsum.photos/id/241/300/300"} /></div>
            <div className="details-container gap-1 flex flex-col min-w-[255px]">
              <p className="name-tag txt-[16px]">Name</p>
              <h2 className="Name txt-[24px]">{name}</h2>
              <div className="company-container flex justify-between">
                <div className="company-col-text flex flex-col gap-1">
                  <p className="company-tag txt-[16px]">Company</p>
                  <h2 className="Company txt-[24px]">{company}</h2>
                </div>
                <img className="h-[48px] w-[48px] rounded-sm justify-end mt-3 " src={"https://picsum.photos/id/267/300/300"} />
              </div>
              
            </div>
          </div>

        {/* Top right circle button */}

        <div className="circle mr-[8px] mt-[8px] right-[22px] w-[90px] h-[90px] left-[473px] rounded-[32px] flex items-center justify-center">
          <a href="http://google.com">
            <div className="circle-in w-[64px] h-[64px] flex items-center justify-center ">
              <Image className={'arrow-img max-w-full max-h-full'} src="Arrow_experience.svg" alt="arrow"  width={25} height={25}></Image>
            </div>
          </a>
        </div>

      </div>

      {/* Bottom container */}
      <div className="bottom-container flex flex-col w-[414px] h-full ml-[33px] justify-between my-[32px] ">

          <div className="job-details flex flex-row justify-between gap-1">
            <div className="ctc flex flex-col ">
              <p className="ctc-tag txt-[16px]">CTC</p>
              <h2 className="ctc-val txt-[20px]">{CTC}</h2>
            </div>
            <div className="position1 flex flex-col gap-1">
              <p className="pos-tag txt-[16px]">Position</p>
              <h2 className="pos-val1 txt-[20px]">{Position1}</h2>
            </div>
            <div className="position2 flex flex-col gap-1 ">
              <p className="pos-tag txt-[16px]">Position</p>
              <h2 className="pos-val2 txt-[20px]">{Position2}</h2>
            </div>
          </div>

          <Difficulty diff={diff} />

      </div>
      
      
    </div>
  )
}

export default ExperienceCard
