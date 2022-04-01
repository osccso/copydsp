import Navbar from './Navbar';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

const ContentCards = ({ data, filterWord = [], searchInput = '' }) => {
  console.log(filterWord[0]);
  const [dataFiltered] = useState([]);
  let array = [];

  if (filterWord.length > 0) {
    filterWord?.forEach((word) =>
      data?.forEach((el) =>
        el.industry_segment === word ||
        el.primary_topic === word ||
        el.audience_level === word ||
        el.lenguage === word ||
        el.session_type === word ||
        el.title === word
          ? array.push(el)
          : console.log('chao')
      )
    );
  }

  array = [...new Set(array)];

  // useEffect(() => {

  // }, [filterWord]);

  console.log(dataFiltered);

  console.log(searchInput);
  const searchWords = searchInput.toString().toLowerCase().split(' ');

  if (searchWords.length > 0) {
    searchWords?.forEach((word) =>
      data?.forEach((el) =>
        el.industry_segment.toLowerCase() === word ||
        el.primary_topic.toLowerCase() === word ||
        el.audience_level.toLowerCase() === word ||
        el.lenguage.toLowerCase() === word ||
        el.session_type.toLowerCase() === word ||
        el.title.toLowerCase() === word
          ? array.push(el)
          : console.log('chao')
      )
    );
  }

  return (
    <div className='contentCards'>
      <div>
        <Navbar />
      </div>
      <div className='ContCards'>
        {array?.map(
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
