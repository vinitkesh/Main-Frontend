// src/components/Grid.jsx
import React from 'react';
import styles from './Grid.module.css';

const Grid = () => {
  return (
    <div className={styles.gridBackground}>
      {[...Array(12)].map((_, index) => (
        <div key={index} className={styles.gridItem} />
      ))}
    </div>
  );
};

export default Grid;
