"use client"; // Add this directive at the top

import { useEffect } from 'react';
import styles from './Logo.module.css';

export default function Logo() {
  useEffect(() => {
    const text = document.querySelector('.text p');
    text.innerHTML = text.innerText.split("").map((char, i) =>
      `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`
    ).join("");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <div className={styles.logo}></div>
        <div className={`${styles.text} text`}>
          <p>AI/ML - Design - Web - App - CP - </p>
        </div>
      </div>
    </div>
  );
}
