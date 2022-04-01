import React from 'react';
import { Card } from 'react-bootstrap';

const Cards = ({ item }) => {
  console.log(item);
  const { industry_segment, description, speakers, primary_topic, title } =
    item;
  return (
    <div className='cardPaint'>
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Title>Watch Keynote</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div>
            <p className='profe'>
              {speakers?.map((item) => (
                <span>{item}&emps;</span>
              ))}
              <span className='profeSpan'>, Founder and CEO, NVIDIA</span>
            </p>
            <p className='propiety'>
              Industry Segment:
              <span className='profeSpan2'>{industry_segment}</span>
            </p>
            <p className='propiety'>
              Primary Topic:
              <span className='profeSpan2'>{primary_topic}</span>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
