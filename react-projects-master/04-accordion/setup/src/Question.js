import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [infoVisible, setInfoVisible] = useState(false);

  return <article className='question'>
    <header>
      <h4>{title}</h4>
      {<button className="btn" onClick={() => setInfoVisible(!infoVisible)}>{infoVisible ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>}
    </header>
    {infoVisible && <p>{info}</p>}
  </article >;
};

export default Question;
