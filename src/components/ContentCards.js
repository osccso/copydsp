import React from 'react';
import Cards from './Cards';
import Navbar from './Navbar';

const ContentCards = () => {
  return (
    <div className='contentCards'>
      <div>
        <Navbar />
      </div>
      <div className='ContCards'>
        <Cards />
      </div>
    </div>
  );
};

export default ContentCards;
