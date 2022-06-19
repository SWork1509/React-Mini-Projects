import React from 'react';

const List = (props) => {
  const { name, age, image } = props.person;
  return (
    <div className='person'>
      <img src={image} alt="image" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default List;
