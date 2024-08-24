"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import "../styles/slider.css";
import { fetchBanners } from '../firebaseConfig';

interface Banner {
  image: string;
}

const Skeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="slider mt-24">
      <div className="slider-inner">
        <div className="slide">
          <div className="w-full h-[1080px] bg-gray-300"></div>
        </div>
      </div>
      <div className="dots-wrapper">
        <div className="dots">
          {[...Array(3)].map((_, index) => (
            <span key={index} className="dot bg-gray-300"></span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const BannerComponent: React.FC = () => {
  const [slides, setSlides] = useState<Banner[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const length = slides.length;
  const defaultImage = [
   {
     img: "/images/mobi-03.jpg"
   },
    {
      img: "/images/mobi-04.jpg"
    },
    {
      img: "/images/mobi-05.jpg"
   }
  ]
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

  useEffect(() => {
    const fetchSlides = async () => {
      const data: Banner[] = await fetchBanners();
      setSlides(data);
      setLoading(false);
    };
    fetchSlides();
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,  // Enable mouse dragging
  });

  if (loading) {
    return <Skeleton />;
  }

  return (
    <section className="slider mt-10 md:mt-24" {...handlers}>
      <div className="slider-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <Image src={slide.image} alt={`Slide ${index}`} width={1920} height={1080} />
          </div>
        ))}
      </div>
      
      <div 
        className="slider-inner-mobile "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {defaultImage.map((slide, index) => (
          <div key={index} className="slide">
            <Image src={slide.img} alt={`Slide ${index}`} width={1920} height={1080} /> 
          </div>
        ))}
      </div>

      <div className="dots-wrapper">
        <div className="dots">
          {[...Array(length)].map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "dot active" : "dot"}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;