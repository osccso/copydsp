import React from 'react';
import { Card } from 'react-bootstrap';

const Cards = () => {
  return (
    <div className='cardPaint'>
      <Card>
        <Card.Header>GTC 2022 Keynote [S42295]</Card.Header>
        <Card.Body>
          <Card.Title>Watch Keynote</Card.Title>
          <Card.Text>
            Don't miss this keynote from NVIDIA Founder and CEO, Jensen Huang,
            as he speaks on the future of computing.
          </Card.Text>
          <div>
            <p>
              Jensen Huang
              <span>, Founder and CEO, NVIDIA</span>
            </p>
            <p>
              Industry Segment:
              <span>All Industries</span>
            </p>
            <p>
              Primary Topic:
              <span>AI Strategy for Business Leaders</span>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
