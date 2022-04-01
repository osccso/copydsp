import React, { useState, useEffect, useContext } from 'react';
import ContentCards from './ContentCards';
import { SessionContext } from '../useContext/SessionContext';
import SideBar from './SideBar';
// import { getData } from '../helpers/functions'
import { url } from '../helpers/url';
import axios from 'axios';

const Home = () => {
  // const {dataMain,setDataMain}= useContext(SessionContext)
  const [data, setData] = useState(undefined);
  const [fieldsUnique, setfieldsUnique] = useState({});

  let fieldsRequired = {};

  useEffect(() => {
    getData();
  }, []);

  //get a set of unique fields
  const getAllfields = (fields, data) => {
    fields.forEach((field) => {
      fieldsRequired[field] = data.map((object) => object[field]);
    });
    fields.forEach((field) => {
      fieldsRequired[field] = [...new Set(fieldsRequired[field])];
    });
  };

  //get data from the api
  console.log(data);
  const getData = () => {
    axios
      .get(url)
      .then((resp) => {
        getAllfields(Object.keys(resp.data[0]), resp.data);
        setfieldsUnique(fieldsRequired);
        setData(resp.data);
      })
      .catch((error) => console.log(error));
  };
  // setDataMain(data)
  return (
    <div className='home'>
      <SideBar fieldsUnique={fieldsUnique} />
      <ContentCards data={data} />
    </div>
  );
};

export default Home;
