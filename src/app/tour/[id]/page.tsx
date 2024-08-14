'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Banner from '@/components/Banner';
import { FaPhone, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Link from 'next/link';

const tours = [
  { id: 1, name: "Khám Phá Cao Nguyên", image: "/images/tour1.jpg", rating: 4.5, time: "3 ngày 2 đêm", price: "3,500,000", khoihanh: "Thứ 6 hàng tuần" },
  { id: 2, name: "Hành Trình Sapa", image: "/images/tour2.jpg", rating: 4.8, time: "2 ngày 1 đêm", price: "2,500,000", khoihanh: "Thứ 7 hàng tuần" },
  { id: 3, name: "Đà Lạt Vào Mùa Hoa", image: "/images/tour3.jpg", rating: 4.7, time: "3 ngày 2 đêm", price: "3,000,000", khoihanh: "Thứ 2 hàng tuần" },
  { id: 4, name: "Miền Tây Bình Yên", image: "/images/tour1.jpg", rating: 4.6, time: "2 ngày 1 đêm", price: "2,000,000", khoihanh: "Thứ 3 hàng tuần" },
  { id: 5, name: "Hành Trình Phú Quốc", image: "/images/tour2.jpg", rating: 4.9, time: "3 ngày 2 đêm", price: "4,000,000", khoihanh: "Thứ 4 hàng tuần" },
  { id: 6, name: "Hành Trình Phan Thiết", image: "/images/tour3.jpg", rating: 4.4, time: "2 ngày 1 đêm", price: "2,500,000", khoihanh: "Thứ 5 hàng tuần" },
];

const TourDetailPage = () => {
  const { id } = useParams();
  const tour = tours.find((tour) => tour.id === Number(id));

  if (!tour) {
    return <div>Không tìm thấy tour.</div>;
  }

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
  return (
    <>
     {/* <Banner/> */}
     <div className="container mx-auto my-4 mt-36 px-4">
    {/* Tour Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
      <div className="w-full md:w-1/2 flex flex-row gap-4">
      <div className="relative w-[35rem] h-[35rem]">
  <img
    src={tour.image}
    alt={tour.name}
    className=" w-full h-[30rem] rounded-3xl"
  />
</div>
<div className="flex flex-col gap-2 ">
    {[1, 2, 3,4].map((i) => (
      
      <img
        key={i}
        src={`/images/tour${i}.jpg`}
        alt={`Thumbnail ${i}`}
        className="rounded-3xl object-cover w-28 h-28"
      />
    ))}
  </div>
  </div>
  
      <div className="w-full md:w-1/2 ">
      <div className="flex items-center">
          <span className="text-yellow-500 text-lg">{"★".repeat(Math.round(tour.rating))}</span>
        </div>
        <h1 className="text-3xl font-bold">{tour.name}</h1>
      <div className="flex text-2xl mt-2">
      <div className="flex justify-between">
                  <div className="mr-4">
                    <p className="text-gray-600 mb-1">
                      <span className="font-semibold">Thời gian:</span>
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-semibold">Giá:</span>
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-semibold">Khởi hành:</span>
                    </p>
                    <p className="text-gray-600 mb-4">
                      <span className="font-semibold">Địa chỉ:</span>
                    </p>
                    
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">{tour.time}</p>
                    <p className="text-gray-600 mb-1">{tour.price}</p>
                    <p className="text-gray-600 mb-4">{tour.khoihanh}</p>
                  </div>
                  
                </div>
              
      </div>
      <div className="w-50 h-[1px] bg-gray-300"></div>
      <div className="text-2xl mt-2">
      <div className="text-gray-600  mb-2">
                      <span className="font-semibold">Liên hệ:</span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="/images/icon_phone.jpg"
                        alt="Phone"
                        width={30}
                        height={30}
                      />
                      <span className="ml-2">0931216879</span>
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
      <h2 className="text-xl font-semibold">Điểm nổi bật</h2>
      <ul className="list-disc list-inside ml-4 mt-2">
        {/* chia là 2 phần */}
        <div className="grid grid-cols-2 gap-2 text-gray-600">
          <li>Tham quan các điểm nổi tiếng tại Los Angeles</li>
          <li>Đại lộ Hollywood</li>
          <li>Phim trường Universial</li>
          <li>Phố người việt (Little Sài Gòn)</li>
          <li>Thành phố ăn chơi Las Vegas</li>
          <li>Công viên đá bảy màu</li>
          <li>Thác nước Grand Canyon</li>
          <li>Chinh phục núi và hồ tại San Diego</li>
        </div>

      </ul>
    </div>
    <div className="w-50 h-[1px] bg-gray-300"></div>
    <div className="mt-8">
      <h2 className="text-xl font-semibold">Lịch trình chi tiết</h2>
      {[...Array(5)].map((_, i) => (
    // chia là 2 phần bên trái 1/3 bên phải 2/3
        <div key={i} className="mt-4 grid grid-cols-3 gap-4">
          <div className="col-span-1">
           
            <img
              src="/images/tour1.jpg"
              alt="Daily Image"
              className='rounded-3xl w-full object'
            />
          </div>
         
          <div className="col-span-2 text-gray-600 ">
            <h3 className="text-lg font-medium">Ngày {i + 1}: Điểm đến và lịch trình</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec eros ultrices lacinia. Nullam auctor, urna non tincidunt fermentum, dui libero volutpat nunc, a ultricies libero nunc non nunc. Donec vel purus nec sapien ultricies aliquet. Nullam euismod, turpis nec facilisis aliquet, libero turpis tincidunt turpis, nec ultricies purus elit nec lacus. Nullam auctor, urna non tincidunt fermentum, dui libero volutpat nunc, a ultricies libero nunc non nunc. Donec vel purus nec sapien ultricies aliquet. Nullam euismod, turpis nec facilisis aliquet, libero turpis tincidunt turpis, nec ultricies purus elit nec lacus.</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-8">
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
                    <p className="text-gray-600 mb-1">{tour.time}</p>
                    <p className="text-gray-600 mb-1">{tour.price}</p>
                    <p className="text-gray-600 mb-4">{tour.khoihanh}</p>
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
    </div>
  </div>
    </>
  
   
  );
};

export default TourDetailPage;
