import React, { useState } from 'react';
import { Accordion, FormControl, InputGroup } from 'react-bootstrap';
// import SideBarItem from './SideBarItem';

const SideBar = ({ fieldsUnique }) => {
  const [filters, setFilters] = useState([]);
  const {
    industry_segment,
    audience_level,
    lenguage,
    primary_topic,
    session_type,
    title,
  } = fieldsUnique;
  const fieldsNew = {
    industry_segment,
    audience_level,
    lenguage,
    primary_topic,
    session_type,
    title,
  };
  const fields = Object.keys(fieldsNew);
  const handleOnChange = ({ target }) => {
    console.log(target.value);
    setFilters([...filters, target.value]);
  };
  console.log(filters);

  return (
    <div className='sideBar'>
      <div className='filterCont'>
        <h1>Filters</h1>
        <span>Clear</span>
      </div>
      {fields?.map((field, index) => (
        <div className='Acordion' key={index}>
          <Accordion>
            <Accordion.Item eventKey={index}>
              <Accordion.Header>{field.replace('_', ' ')}</Accordion.Header>
              <Accordion.Body>
                {fieldsUnique[field]?.map((item, index) => (
                  <div key={index}>
                    <label htmlFor={item}>{item}</label>
                    <input
                      value={item}
                      name={item}
                      type='checkbox'
                      onChange={handleOnChange}
                    />
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
