import Layout from '../components/Layout';
import Head from 'next/head';
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src: "follykayak.jpg",
    altText: "Kayaking",
    caption: "Kayaking",
    desc: "Exploring the Lowcountry waterways."
  },
  {
    src: "Canva - Red Tomatoes and Garlics in Cooking Pot.jpg",
    altText: "Cooking",
    caption: "Cooking",
    desc: "Mostly vegetarian...mostly"
  },
  {
    src: "chiefshelmet.jpeg",
    altText: "Chiefs Football",
    caption: "Chiefs Football",
    desc: "Champs!!!"
  }
];

const Hobbies = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {

    return (
      <CarouselItem
        className="testing"
        tag="div"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.desc}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Head>
        <title>Tyler's Resume Site</title>
      </Head>
      <Layout>
        <style>
          {
            `.testing {
              justify-content: center;
              align-items: center;
              overflow: hidden;
              color: white;
            }
            .testing img{
              flex-shrink: 0;
              min-width: 100%;
              min-height: 50%
            }`
          }
        </style>
        <Carousel activeIndex={activeIndex} next={next} previous={previous} pause="hover">
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Layout>
    </div>
  );
};

export default Hobbies;