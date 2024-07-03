// src/components/Home.jsx
import React from 'react';
import Grid from './Grid';
import styles from './Home.module.css';

const title = "Google Developers Student Club";
const subtitle = "National Institute of Technology Calicut";
const description = "GDSC NIT Calicut is a vibrant community where students come together to enhance their technical skills, collaborate on projects, and make a positive impact in the tech ecosystem.";
const buttonText = "Send";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <Grid />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.description}>{description}</p>
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
  );
};

export default HeroSection;
