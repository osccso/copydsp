import Cards from './Cards';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ContentCards = ({ data, filterWord = '' }) => {
  console.log(filterWord.toString());
  const [dataFiltered, setDataFiltered] = useState([]);
  const array = [];

  data?.forEach((el) =>
    el.industry_segment === filterWord.toString() ||
    el.primary_topic === filterWord.toString()
      ? array.push(el)
      : console.log('chao')
  );

  console.log(array);
  // useEffect(() => {

  // }, [filterWord]);

  console.log(dataFiltered);
  return (
    <div className='contentCards'>
      <div>
        <Navbar />
      </div>
      <div className='ContCards'>
        {data?.map(
          (
            {
              industry_segment,
              description,
              audience_level,
              speakers,
              lenguage,
              primary_topic,
              session_type,
              title,
            },
            index
          ) => {
            return (
              <div key={index} className='cardPaint'>
                <Card>
                  <Card.Header>{title}</Card.Header>
                  <Card.Body>
                    <Card.Title>Watch Keynote</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div>
                      <p className='profe'>
                        {speakers?.map((item, index) => (
                          <span key={index}>{item}&emps;</span>
                        ))}
                        <span className='profeSpan'>
                          , Founder and CEO, NVIDIA
                        </span>
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
          }
        )}
      </div>
    </div>
  );
};

export default ContentCards;
