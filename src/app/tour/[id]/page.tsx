
'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { fetchTours, Tour } from '@/firebaseConfig';


const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
       <>
        <Image
          key={i}
              src="/images/star_full.png"
          alt="star"
          width={20}
          height={20}
          className="mr-2"
        /></>
      );
    } else if (i - rating < 1) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 mr-2" />);
    } else {
      stars.push(
        <>
        <Image
          key={i}
              src="/images/star_null.png"
          alt="star"
          width={20}
          height={20}
          className="mr-2"
        /></>
      );
    }
  }
  return stars;
};



const Skeleton = () => (
  <div className="animate-pulse">
    <div className="container mx-auto my-4 mt-36 px-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/2 flex flex-row gap-4">
          <div className="w-[35rem] h-[35rem] bg-gray-300 rounded-3xl"></div>
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-28 h-28 bg-gray-300 rounded-3xl"></div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="h-10 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
      {/* Thêm hiệu ứng mới */}
      <div className="flex justify-center mt-8">
        <div className="w-16 h-16 bg-gray-300 rounded-full animate-bounce"></div>
        <div className="w-16 h-16 bg-gray-300 rounded-full animate-spin ml-4"></div>
      </div>
    </div>
  </div>
);

const TourDetailPage = () => {
  const { id } = useParams();
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [tours, setTours] = useState<Tour[]>([]);


  useEffect(() => {
    const getTours = async () => {
      const toursData = await fetchTours();
      setTours(toursData);
      setLoading(false);
    };

    getTours();
  }, []);


  useEffect(() => {
    const getTourData = async () => {
      try {
        const tours = await fetchTours();
        const foundTour = tours.find((tour) => tour.id === id);
        if (foundTour) {
          setTour(foundTour);
        } else {
          setError('Không tìm thấy tour.');
        }
      } catch (err) {
        setError('Có lỗi xảy ra khi tải dữ liệu.');
      } finally {
        setLoading(false);
      }
    };

    getTourData();

  }, [id]);


  console.log(tour);
  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!tour) {
    return <div>Không tìm thấy tour.</div>;
  }
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
         <>
          <Image
            key={i}
                src="/images/star_full.png"
            alt="star"
            width={20}
            height={20}
            className="mr-2"
          /></>
        );
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 mr-2" />);
      } else {
        stars.push(
          <>
          <Image
            key={i}
                src="/images/star_null.png"
            alt="star"
            width={25}
            height={25}
            className="mr-2"
          /></>
        );
      }
    }
    return stars;
  };

  return (
    <>
      {/* Tour Details */}
      <div className="container mx-auto my-4 mt-36 md:px-56 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-24">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4">
  <div className="relative w-full  ">
    <img
      src={tour.image}
      alt={tour.name}
      className="w-[26rem] h-[26rem] rounded-3xl"
    />
  </div>
  <div className="flex flex-row md:flex-col gap-2 justify-center">
  {tour.images?.map((image: string, index: number) => (
               <img
                key={index} 
                src={image}
                alt={`Thumbnail ${index}`} 

               className="rounded-3xl object-cover w-24 h-24 sm:w-28   "
             />
            ))}
</div>
</div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-2">
          
                
                  <div className="flex items-center">
                    {renderStars(tour.rating)}
                  
                
              </div>
            </div>
            <h1 className="text-3xl font-bold">{tour.name}</h1>
            <div className="flex text-2xl mt-2">
              <div className="flex justify-between">
                <div className="mr-4">
                  <p className="text-xl text-gray-600 mb-1">
                    <span className="font-semibold">Thời gian:</span>
                  </p>
                  <p className="text-xl text-gray-600 mb-1">
                    <span className="font-semibold">Giá:</span>
                  </p>
                  <p className=" text-xl text-gray-600 mb-1">
                    <span className="font-semibold">Khởi hành:</span>
                  </p>
                  <p className=" text-xl text-gray-600 mb-1">
                    <span className="font-semibold">Phương tiện:</span>
                  </p>
                  <p className=" text-xl text-gray-600 mb-4">
                    <span className="font-semibold">Địa chỉ:</span>
                  </p>
                </div>
                <div className='text-xl'>
                  <p className="text-gray-600 mb-1">{tour.duration}</p>
                  <p className="text-gray-600 mb-1">{tour.price}</p>
                  <p className="text-gray-600 mb-1">{tour.departure}</p>     
                 
                  <p className='text-gray-600 mb-1'>{tour.vehicle}</p>
                  <p className="text-gray-600 mb-4">{tour.address}</p>
                  </div>
              </div>
            </div>
            <div className="w-50 h-[1px] bg-gray-300"></div>
            <div className="text-2xl mt-2">
              <div className="text-lg text-gray-600 mb-2">
                <span className="font-semibold">Liên hệ:</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/icon_phone.jpg"
                  alt="Phone"
                  width={30}
                  height={30}
                />
                <span className="text-lg ml-2">{tour.phone}</span>
              </div>
            </div>
            <div className="flex mt-4 items-center justify-end">
              <button className="rounded-full flex items-center shadow-xl bg-[#56c5d7] text-white">
                <span className="ml-4 text-2xl font-bold">ĐẶT NGAY</span>
                <span className="ml-2 bg-orange-400 text-white p-4 rounded-full">
                  <FaPhone />
                </span>
              </button>
            </div>
          </div>

        </div>
        <div className="w-50 h-[1px] bg-gray-300"></div>
    {/* Itinerary */}
    <div className="my-8">
      <h2 className="text-xl font-semibold">Điểm nổi bật :</h2>
      <ul className="list-disc list-inside ml-4 mt-2">
        {/* chia là 2 phần */}
        <div className="grid grid-cols-2 gap-2 text-gray-600">
        {tour.highlights?.map((highlight, i) => (
          <li key={i}>{highlight}</li>
        ))}
        </div>

      </ul>
    </div>
    <div className="w-50 h-[1px] bg-gray-300"></div>
      <div className="mt-8 ">
  <h2 className="text-xl font-semibold">Lịch trình chi tiết</h2>
  <ul className="list-disc list-inside ml-4 mt-2 flex flex-col justify-center ">
  {(() => {
    try {
      const itinerary = JSON.parse(tour.itinerary);
      return itinerary.map((item: { title: string; content: string }, i: number) => (
        <React.Fragment key={i}>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <img
                src={`/images/tour${i + 1}.jpg`}
                alt="Daily Image"
                className="rounded-3xl w-full object"
              />
            </div>
            <div className="col-span-2 text-gray-600">
              <h3 className="text-lg font-medium">
                Ngày {i + 1}: {item.title}
              </h3>
              <p className="text-gray-600">
                {item.content}
              </p>
            </div>
          </div>
        </React.Fragment>
      ));
    } catch (e) {
      console.error("Invalid JSON in tour.itinerary", e);
      return <li>Invalid itinerary data</li>;
    }
  })()}
</ul>
</div>
   
<div className="mt-8">
    <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="text-xl font-bold mb-4">Tours</h1>
        <button className="rounded-full flex items-center shadow-xl">
          <span className="ml-4 font-bold">ĐẶT NGAY</span>
          <span className="ml-2 bg-gradient-to-r from-[#f58a1f] to-[#fcc142]  font-bold shadow-lg hover:bg-gradient-to-l text-white p-2 rounded-full">
            <FaPhone />
          </span>
        </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.slice(0, 3).map((tour) => (
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
                    <p className="text-gray-600 text-sm  mb-4">
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
          </div>
        ))}
    </div>
</div>
      </div>
    </>
  );
};

export default TourDetailPage;
