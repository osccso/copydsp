import React,{useState,useEffect} from 'react';
import ContentCards from './ContentCards';
import SideBar from './SideBar';
// import { getData } from '../helpers/functions'
import { url } from '../helpers/url';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(undefined)
  const [fieldsUnique, setUnique] = useState(undefined)
  let fieldsRequired = {}
  useEffect(() => {if (data === undefined) getData()},[])
  //get a set of unique fields
  const getAllfields = (fields,data) => {
    fields.forEach(field => {
      fieldsRequired[field]=data.map(object=>object[field])
    })
    fields.forEach(field => {fieldsRequired[field]=[...new Set(fieldsRequired[field])]})
  } 
  const getData = () => {
      axios.get(url)
      .then(resp => {
        console.log(resp.data);
        getAllfields(Object.keys(resp.data[0]),resp.data)
        console.log("esto es asi");
        setUnique(fieldsRequired)
        setData(resp.data)
      })
      .catch(error => console.log(error))
  }
  console.log(data)
  console.log(fieldsUnique)
  return (
    <div className='home'>
      <SideBar props={fieldsUnique} />
      <ContentCards />
    </div>
  );
};

export default Home;
