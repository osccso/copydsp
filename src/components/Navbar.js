import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <div className='navbarContent'>
      <Nav activeKey='/home'>
        <Nav.Item>
          <Nav.Link className='verde border-down'>ALL Session (980)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='verde border-down' eventKey='link-1'>
            Fecha
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='verde border-down' eventKey='link-2'>
            Fecha
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='verde border-down' eventKey='link-2'>
            Fecha
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
