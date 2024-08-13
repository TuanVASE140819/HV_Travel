"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import "../styles/slider.css";

const Banner: React.FC = () => {
  const slides = [
    {
      title: "Welcome to Our Tours",
      description: "Discover amazing places with us.",
      image: "/images/banner1.jpg",
    },
    {
      title: "Explore the World",
      description: "Join us for an unforgettable adventure.",
      image: "/images/banner1.jpg",
    },
    {
      title: "Adventure Awaits",
      description: "Find your next destination with us.",
      image: "/images/banner1.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const length = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + length) % length);
  }, [length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,  // Enable mouse dragging
  });

  return (
    <section className="slider mt-24"
     {...handlers}>
      <div
        className="slider-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <Image
              src={slide.image}
              alt={slide.title}
              width={1920}
              height={1080}
            />
          </div>
        ))}
      </div>
    
      <div className="dots-wrapper">
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
