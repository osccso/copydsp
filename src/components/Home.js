import React, { useState, useEffect } from 'react';
import ContentCards from './ContentCards';
import SideBar from './SideBar'; import { getData } from '../helpers/functions'
import { url } from '../helpers/url';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState({});
  const [fieldsUnique, setfieldsUnique] = useState({});

  let fieldsRequired = {};
  useEffect(() => {
    const fetchJson =async () =>{
    const response = await fetch(url)
    let json = await response.json()
    setData(json)
  }
  fetchJson()}, []);
  
  //get a set of unique fields
  const getAllfields = (fields, data) => {
    fields.forEach((field) => {
      fieldsRequired[field] = data.map((object) => object[field]);
    });
    fields.forEach((field) => {
      fieldsRequired[field] = [...new Set(fieldsRequired[field])];
    });
  };
  console.log(data);
  console.log(fieldsUnique);
  if (fieldsUnique !=={})
  {
    console.log("vacio");
    return (
      <div className='home'>
        <SideBar fieldsUnique={fieldsUnique} />
        <ContentCards />
      </div>
    );
  }
  else {
    return null
  }
};

export default Home;
