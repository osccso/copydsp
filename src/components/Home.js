import React, { useState, useEffect } from 'react';
import ContentCards from './ContentCards';

import SideBar from './SideBar';
// import { getData } from '../helpers/functions'
import { url } from '../helpers/url';
import axios from 'axios';

const Home = () => {
  // const {dataMain,setDataMain}= useContext(SessionContext)
  const [filterWord, setFilterWord] = useState();
  const [data, setData] = useState(undefined);
  const [fieldsUnique, setfieldsUnique] = useState({});
  const [searchInput, setSearchInput] = useState();

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

  console.log(searchInput);
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

  console.log(searchInput);
  return (
    <div className='home'>
      <SideBar
        fieldsUnique={fieldsUnique}
        setFilterWord={setFilterWord}
        setSearchInput={setSearchInput}
      />
      <ContentCards
        filterWord={filterWord}
        data={data}
        searchInput={searchInput}
      />
    </div>
  );
};

export default Home;
