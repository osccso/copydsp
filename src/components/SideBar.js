import React, { useState } from 'react';
import { Accordion, FormControl, InputGroup } from 'react-bootstrap';

const SideBar = ({ fieldsUnique, setFilterWord, setSearchInput }) => {
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
    if (target.checked) {
      setFilters([...filters, target.value]);
      return null;
    }
    setFilters([...filters].filter((item) => item != target.value));
    setSearchInput(target.value);
  };
  console.log(filters);
  setFilterWord(filters);

  return (
    <div className='sideBar'>
      <div className='filterCont'>
        <h1 className='title'>Filters</h1>
        <span className='clear'>Clear</span>
      </div>
      <div>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Search'
            aria-label='Search'
            onChange={handleOnChange}
          />
        </InputGroup>
      </div>
      <div className='Acordion'>
        {fields?.map((field, index) => (
          <Accordion key={index}>
            <Accordion.Item eventKey={index}>
              <Accordion.Header>{field.replace('_', ' ')}</Accordion.Header>
              <Accordion.Body>
                {fieldsUnique[field]?.map((item, index) => (
                  <div className='inputChecbox' key={index}>
                    <input
                      className='checkbok'
                      value={item}
                      name={item}
                      type='checkbox'
                      onChange={handleOnChange}
                    />
                    <label className='labelIn' htmlFor={item}>
                      {item}
                    </label>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
