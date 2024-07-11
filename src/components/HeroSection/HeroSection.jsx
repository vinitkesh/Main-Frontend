import React from 'react';
import Image from 'next/image';
import styles from './Home.module.css';
import Logo from './Logo/Logo';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
// import divider from '../../images/divider.svg';
const pretitle = "|  CREATIVITY UNLOCKED  |";
const title1 = "Google Developers";
const title2 = "Student Clubs";
// const title2b = "";
const title1Mob = 'Google';
const title2Mob = 'Developers';
const title3Mob = 'Student';
const title4Mob = "Clubs";
const subtitle = "National Institute of Technology Calicut";
const description = "GDSC NIT Calicut is a vibrant community where students come together to enhance their technical skills, collaborate on projects, and make a positive impact in the tech ecosystem.";
const buttonText = "Send";
const touch = "Get in touch";
const HeroSection = () => {
  return (
    <div className={styles.container}>
      {/* <Grid /> */}
      <div className={styles.content}>
        <p className={styles.pretitle}>{pretitle}</p>

        <div className={styles.mainHeading}>
          <h1 className={styles.title1}>{title1}</h1>
          {/* <div className={styles.wrap}> */}
          <div className={styles.outerwrapper}>
            <h1 className={styles.title2}>{title2}</h1>
            {/* <h1 className= {styles.title2b}>{title2b}</h1> */}
          </div>
          {/* </div> */}

          <h2 className={styles.subtitle}>{subtitle}</h2>
        </div>
        <div className={styles.mainHeadingMobile}>
          <h1 className={styles.title1Mobile}>{title1Mob}</h1>
          <h1 className={styles.title2Mobile}>{title2Mob}</h1>
          <h1 className={styles.title3Mobile}>{title3Mob} </h1>
          <h1 className={styles.title4Mobile}>{title4Mob}</h1>

          <h2 className={styles.subtitleMobile}>{subtitle}</h2>

        </div>
        <Logo />
        <div className={styles.socials}>
          <p className={styles.description}>{description}</p>
          <Image src="divider.svg" alt="divider" width={19.5} height={100} className='divider' />
          <div className={styles.rightBody}>
            <div className={styles.touch}>{touch}</div>
            <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Enter Your Email"
              className={styles.input}
            />
            <button className={styles.button}>{buttonText}</button>
          </div>
        </div>
          
        </div>
        <div className={styles.rightBodyMobile}>
          <div className={styles.touch}>{touch}</div>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Enter Your Email"
              className={styles.input}
            />
            <button className={styles.button}>{buttonText}</button>
          </div>
        </div>
        <p className={styles.descriptionMobile}>{description}</p>
      </div>
    </div>
      );
};

      export default HeroSection;
