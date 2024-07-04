import React from 'react';

import './Difficulty.css';

const Difficulty = ({ diff }) => {
  const diffCol = (diff) => {
    diff = diff.toLowerCase();
    if (diff === "easy") return { background: '#1BABA3' };
    else if (diff === "medium") return { background: '#FFB31B' };
    else return { background: '#FF2A2C' };
  };

  const diffTxtCol = (diff) => {
    diff = diff.toLowerCase();
    if (diff === "easy") return { color: '#1BABA3' };
    else if (diff === "medium") return { color: '#FFB31B' };
    else return { color: '#FF2A2C' };
  };

  return (
    <div className="diff-component flex gap-[10px] w-min h-[29px] justify-center align-middle ">
      <p className="diff-tag">Difficulty</p>
      <div className="dif-circle w-[20px] h-[20px] rounded-[20px]" style={diffCol(diff)}></div>
      <p className="dif-val txt-[12px]" style={diffTxtCol(diff)}>{diff.toUpperCase()}</p>
    </div>
  );
};

export default Difficulty;
