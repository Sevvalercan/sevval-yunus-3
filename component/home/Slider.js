import React from "react";
import { Carousel } from "react-bootstrap";

const slides = [
  {
    id: 1,
    src: "https://picsum.photos/id/287/200/50",
    alt: "First slide",
    caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    id: 2,
    src: "https://picsum.photos/id/257/200/50",
    alt: "Second slide",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    src: "https://picsum.photos/id/27/200/50",
    alt: "Third slide",
    caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

export default function Slider() {
  return (
    <Carousel>
      {slides.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={item.src} alt={item.alt} />
          <Carousel.Caption>
            <h3>{item.alt}</h3>
            <p>{item.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
