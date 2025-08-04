import React, { useState } from "react";
import { column_1, column_2, column_3 } from "../JS/Generator";
import "../data/data.json";

const BuzzwordGen = () => {
  let data = [];
  const buzzwordGen = () => {
    const buzzword_1 = column_1[Math.floor(Math.random() * column_1.length)];
    const buzzword_2 = column_2[Math.floor(Math.random() * column_2.length)];
    const buzzword_3 = column_3[Math.floor(Math.random() * column_3.length)];
    const space = "-> ";
    const buzzword = `${buzzword_1}  ${space}  ${buzzword_2} ${space}   ${buzzword_3}`;

    return buzzword;
  };

  const [buzzwords, setBuzzwords] = useState([]);

  //
  const handleClick = () => {
    let buzz_words = buzzwordGen();
    setBuzzwords(buzz_words);
    data.push(buzz_words);
    console.log(data);
    console.log(data.length);
  };

  const handleSave = () => {
    data.push(buzzwordGen());
    console.log(data);
    console.log(data.length);
  };

  return (
    <div>
      <h1 className='text' value='value'>
        <div>{buzzwords}</div>
      </h1>
      <button className='btn' onClick={handleClick}>
        Generate
      </button>
      <button className='btn' onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default BuzzwordGen;
