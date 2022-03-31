import React from 'react';
import { Navbar } from 'react-bootstrap';
import ContentCards from './ContentCards';
import SideBar from './SideBar';

const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div>
        <Navbar />
        <ContentCards />
      </div>
    </div>
  );
};

export default Home;
