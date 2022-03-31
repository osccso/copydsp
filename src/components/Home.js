import React from 'react';
import ContentCards from './ContentCards';
import SideBar from './SideBar';

const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <ContentCards />
    </div>
  );
};

export default Home;
