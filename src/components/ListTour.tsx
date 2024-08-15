"use client";

import React, { useEffect, useState } from 'react';
import { fetchTours, Tour } from '@/firebaseConfig';
import { FaPhone, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Link from "next/link";

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500 mr-2" />);
    } else if (i - rating < 1) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 mr-2" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500 mr-2" />);
    }
  }
  return stars;
};

const Skeleton = () => (
  <div className="animate-pulse">
    <div className="flex flex-row justify-between items-center mb-4">
      <div className="h-8 bg-gray-300 rounded w-1/4"></div>
      <div className="h-8 bg-gray-300 rounded w-1/4"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="relative mb-8">
          <div className="relative flex justify-center items-center">
            <div className="object-cover rounded-3xl w-full h-64 bg-gray-300"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative p-8 bg-white rounded-3xl shadow-lg -mt-12 mx-4 z-6 w-full md:w-3/4">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((j) => (
                  <div key={j} className="h-4 bg-gray-300 rounded w-6 mr-2"></div>
                ))}
              </div>
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="flex justify-between">
                <div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                </div>
                <div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <div className="h-8 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ListTour = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTours = async () => {
      const toursData = await fetchTours();
      setTours(toursData);
      setLoading(false);
    };

    getTours();
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <section id="tour-section" className="my-4 md:my-36 px-4">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">Tours</h1>
        <button className="rounded-full flex items-center shadow-xl">
          <span className="ml-4 font-bold">ĐẶT NGAY</span>
          <span className="ml-2 bg-orange-400 text-white p-2 rounded-full">
            <FaPhone />
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <div key={tour.id} className="relative mb-8">
            {/* Image Section */}
            <div className="relative flex justify-center items-center">
              <img
                className="object-cover rounded-3xl w-full"
                src={tour.image}
                alt={tour.name}
              />
            </div>

            {/* Content Section */}
            <div className="flex justify-center items-center">
              <div className="relative p-8 bg-white rounded-3xl shadow-lg -mt-12 mx-4 z-6 w-full md:w-3/4">
                {/* Rating */}
                <div className="flex mb-2">{renderStars(tour.rating)}</div>
                <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">
                      <span className="font-semibold">Thời gian:</span>
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-semibold">Giá:</span>
                    </p>
                    <p className="text-gray-600 mb-4">
                      <span className="font-semibold">Khởi hành:</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">{tour.duration}</p>
                    <p className="text-gray-600 mb-1">{tour.price}</p>
                    <p className="text-gray-600 mb-4">{tour.departure}</p>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <Link
                    href={`/tour/${tour.id}`}
                    className="bg-blue-300 text-white text-sm font-semibold py-2 px-10 rounded-full"
                  >
                    Chi tiết
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListTour;