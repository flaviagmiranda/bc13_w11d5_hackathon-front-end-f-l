import React, { useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './CatCarousel.css'
import { ThemeContext } from '../../Custom Hooks/ThemeContext';

export default function CatCarousel({ cats, facts }) {
    const theme = useContext(ThemeContext);
    return (
      <Carousel variant={theme}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://cataas.com/cat/${cats[0]?.id}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Cat Fact!</h3>
            <p>{facts[0]}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://cataas.com/cat/${cats[1]?.id}`}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Cat Fact!</h3>
            <p>{facts[1]}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://cataas.com/cat/${cats[2]?.id}`}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Cat Fact!</h3>
            <p>{facts[2]}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://cataas.com/cat/${cats[3]?.id}`}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Cat Fact!</h3>
            <p>{facts[3]}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://cataas.com/cat/${cats[4]?.id}`}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Cat Fact!</h3>
            <p>{facts[4]}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }