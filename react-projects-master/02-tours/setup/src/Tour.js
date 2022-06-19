import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {

  const [readMore, setReadMore] = useState(false);

  const deleteTour = (id) => {
    removeTour(id)
  }

  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}>{readMore ? ' Read Less' : ' Read More'}</button></p>

      <button className="delete-btn" onClick={() => deleteTour(id)}>Not Intrested</button>
    </footer>
  </article >
};

export default Tour;
