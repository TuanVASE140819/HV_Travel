"use client";

import React, { useEffect, useState } from 'react';
import { fetchTours, Tour } from '@/firebaseConfig';
import { FaPhone, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import Image from 'next/image';
import useFadeInOnScroll from './useFadeInOnScroll';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <Image
          key={i}
          src="/images/star_full.png"
          alt="star"
          width={20}
          height={20}
          className="mr-2"
        />
      );
    } else if (i - rating < 1) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 mr-2" />);
    } else {
      stars.push(
        <Image
          key={i}
          src="/images/star_null.png"
          alt="star"
          width={20}
          height={20}
          className="mr-2"
        />
      );
    }
  }
  return stars;
};

const ListTour = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    const getTours = async () => {
      const toursData = await fetchTours();
      setTours(toursData);
      setLoading(false);
    };

    getTours();
  }, []);

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <section id="tour-section" className="my-4 md:my-16 md:px-32 px-4">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="text-xl font-bold mb-4">Tours</h1>
        <button className="rounded-full flex items-center shadow-xl">
          <span className="ml-4 font-bold">ĐẶT NGAY</span>
          <span className="ml-2 bg-gradient-to-r from-[#f58a1f] to-[#fcc142] font-bold shadow-lg hover:bg-gradient-to-l text-white p-2 rounded-full">
            <FaPhone />
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <motion.div 
            key={tour.id} 
            className="relative mb-8" 
            ref={ref}
            // initial="hidden"
            // animate={controls}
            // variants={variants}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Image Section */}
            <div className="relative flex justify-center items-center">
              <img
                className="object-cover rounded-3xl w-full"
                src={tour.image}
                alt={tour.name}
                onLoad={() => handleImageLoad(tour.id)}
              />
            </div>

            {/* Content Section */}
            <div className="flex justify-center items-center">
              <div className="relative p-8 bg-white rounded-3xl shadow-lg -mt-12 mx-2 z-6 w-full md:w-11/12">
                {/* Rating */}
                <div className="flex mb-2">{renderStars(tour.rating)}</div>
                <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">
                      <span className="font-semibold">Thời gian:</span>
                    </p>
                    <p className="text-gray-600 text-sm mb-1">
                      <span className="font-semibold">Giá:</span>
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      <span className="font-semibold">Khởi hành:</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{tour.duration}</p>
                    <p className="text-gray-600 text-sm mb-1">{tour.price}</p>
                    <p className="text-gray-600 text-sm mb-4">{tour.departure}</p>
                  </div>
                </div>
                <div className="flex justify-center md:mt-2 mt-4">
                  <Link
                    href={`/tour/${tour.id}`}
                    className="bg-[#56c5d7] text-white text-sm font-semibold py-2 px-10 rounded-full hover:bg-blue-400 hover:text-gray-100"
                  >
                    Chi tiết
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ListTour;