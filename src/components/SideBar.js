import React from 'react';
import { Accordion, FormControl, InputGroup } from 'react-bootstrap';

const SideBar = () => {

  return (
    <div className='sideBar'>
      <div className='filterCont'>
        <h1>Filters</h1>
        <span>Clear</span>
      </div>
      <div>
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
          
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <input type='checkbox' />
              <label htmlFor=''>industry</label>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <input type='checkbox' />
              <label htmlFor=''>industry</label>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4'>
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <input type='checkbox' />
              <label htmlFor=''>industry</label>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='5'>
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <input type='checkbox' />
              <label htmlFor=''>industry</label>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default SideBar;
