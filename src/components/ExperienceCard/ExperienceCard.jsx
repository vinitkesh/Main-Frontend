

import style from "./ExperienceCard.module.css";

import React from 'react'

export const ExperienceCard = () => {
  return (
    <div className={style.ExperienceCard}>

        <div className={style.box1}></div>
        <div className={style.box11}></div>
        <div className={style.box2}></div>
        <div className={style.circle}></div>
        <div className={style.circle2}>
        </div>

        <div className="name_company">
            <div className="name">
                <p>Name</p>
                <h2>Robert Downy Junior</h2>
            </div>
            
        </div>

    </div>
  )
}
