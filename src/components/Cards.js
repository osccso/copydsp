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
            <p className='profe'>
              Jensen Huang
              <span className='profeSpan'>, Founder and CEO, NVIDIA</span>
            </p>
            <p className='propiety'>
              Industry Segment:
              <span className='profeSpan2'>All Industries</span>
            </p>
            <p className='propiety'>
              Primary Topic:
              <span className='profeSpan2'>
                AI Strategy for Business Leaders
              </span>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
