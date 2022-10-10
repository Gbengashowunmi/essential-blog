import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles/Carousel.scss'

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
      <div className='overlay'>

      </div>
      <Carousel.Item className='carousel-image'>
        <img
          className="d-block w-100"
          src="https://img.youtube.com/vi/UxwscVIZ8Qg/hqdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className='carousel-image'>
        <img
          className="d-block w-100"
          src="https://4.bp.blogspot.com/-ryRH20iz2v0/VZFHplQaqJI/AAAAAAAAKu0/dQb85VCObms/w728-rw/slider_05.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-image'>
        <img
          className="d-block w-100"
          src="https://4.bp.blogspot.com/-34lXLPV46rI/VZFHO-9QHfI/AAAAAAAAKuc/kTxCHl-9C24/w728-rw/slider_02.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item className='carousel-image'>
        <img
          className="d-block w-100"
          src="https://4.bp.blogspot.com/-tBFyDVB5ugs/VZFHkkqla6I/AAAAAAAAKus/6RBJq1eZ33o/w728-rw/slider_04.webp"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item className='carousel-image'>
        <img
          className="d-block w-100"
          src="https://img.youtube.com/vi/UxwscVIZ8Qg/hqdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item > */}
    </Carousel>
  );
}
