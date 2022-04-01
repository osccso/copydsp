import React from 'react';
import { Accordion, FormControl, InputGroup } from 'react-bootstrap';
// import SideBarItem from './SideBarItem';

const SideBar = ({ fieldsUnique }) => {
  console.log(fieldsUnique.industry_segment);
  const { industry_segment } = fieldsUnique;

  console.log(industry_segment);
  return (
    <div className='sideBar'>
      <div className='filterCont'>
        <h1>Filters</h1>
        <span>Clear</span>
      </div>
      {/* <div>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
          />
          <InputGroup.Text id='basic-addon2'>@example.com</InputGroup.Text>
        </InputGroup>
      </div>
      <div className='Acordion'>
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Industry Segment</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Primary Topic</Accordion.Header>
            <Accordion.Body>
              <input type='checkbox' />
              <label>industry</label>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>Session Type</Accordion.Header>
            <Accordion.Body>
              <input type='checkbox' />
              <label>industry</label>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>Audience Type</Accordion.Header>
            <Accordion.Body>
              <input type='checkbox' />
              <label>industry</label>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4'>
            <Accordion.Header>Language</Accordion.Header>
            <Accordion.Body>
              <input type='checkbox' />
              <label>industry</label>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='5'>
            <Accordion.Header>Audience Level</Accordion.Header>
            <Accordion.Body>
              <input type='checkbox' />
              <label>industry</label>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div> */}
      {industry_segment.map((field) => (
        <div>
          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>{field}</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
