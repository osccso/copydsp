import Cards from './Cards';
import Navbar from './Navbar';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

const ContentCards = ({data}) => {
  // const {industry_segment, description,audience_level, speakers,lenguage, primary_topic, session_type,title}  = data?
  console.log(data)
  return (
    <div className='contentCards'>
      <div>
        <Navbar />
      </div>
      <div className='ContCards'>
        {data?.map(({industry_segment, description,audience_level, speakers,lenguage, primary_topic, session_type,title},index) => {return (<div key={index} className='cardPaint'>
          <Card>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
              <Card.Title>Watch Keynote</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <div>
                <p className='profe'>
                  {speakers?.map((item,index) => <span key={index}>{item}&emps;</span>)}
                  <span className='profeSpan'>, Founder and CEO, NVIDIA</span>
                </p>
                <p className='propiety'>
                  Industry Segment:
                  <span className='profeSpan2'>{industry_segment}</span>
                </p>
                <p className='propiety'>
                  Primary Topic:
                  <span className='profeSpan2'>
                    {primary_topic}
                  </span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>)
        })
        }
      </div>
    </div>
  );
};

export default ContentCards;
