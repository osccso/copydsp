import React,{useState,useEffect} from 'react';
import ContentCards from './ContentCards';
import SideBar from './SideBar';
// import { getData } from '../helpers/functions'
import { url } from '../helpers/url';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(undefined)
  
  useEffect(() => {getData()},[])
  const getData = () => {
    axios.get(url)
    .then(resp => {
      console.log(resp.data)
      setData(resp.data)
    })
    .catch(error => console.log(error))
  }
  console.log(data)
  return (
    <div className='home'>
      <SideBar />
      <ContentCards />
    </div>
  );
};

export default Home;
