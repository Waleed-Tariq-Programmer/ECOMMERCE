import React from 'react';
import "./Heading.css"

const Heading = ({title}) => {
  
  return (
   <h1 className='text-center'>{title}</h1>
  );
};

export default Heading;