'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa';

const tours = [
  { id: "jCnvhUArwoADIcbKK5PO", name: "Khám Phá Cao Nguyên", image: "/images/tour1.jpg", rating: 4.5, time: "3 ngày 2 đêm", price: "3,500,000", khoihanh: "Thứ 6 hàng tuần" },
  { id: 2, name: "Hành Trình Sapa", image: "/images/tour2.jpg", rating: 4.8, time: "2 ngày 1 đêm", price: "2,500,000", khoihanh: "Thứ 7 hàng tuần" },
  { id: 3, name: "Đà Lạt Vào Mùa Hoa", image: "/images/tour3.jpg", rating: 4.7, time: "3 ngày 2 đêm", price: "3,000,000", khoihanh: "Thứ 2 hàng tuần" },
  { id: 4, name: "Miền Tây Bình Yên", image: "/images/tour1.jpg", rating: 4.6, time: "2 ngày 1 đêm", price: "2,000,000", khoihanh: "Thứ 3 hàng tuần" },
  { id: 5, name: "Hành Trình Phú Quốc", image: "/images/tour2.jpg", rating: 4.9, time: "3 ngày 2 đêm", price: "4,000,000", khoihanh: "Thứ 4 hàng tuần" },
  { id: 6, name: "Hành Trình Phan Thiết", image: "/images/tour3.jpg", rating: 4.4, time: "2 ngày 1 đêm", price: "2,500,000", khoihanh: "Thứ 5 hàng tuần" },
];

const TourDetailPage = () => {
  const { id } = useParams();
  const tour = tours.find((tour) => tour.id === id);

  if (!tour) {
    return <div>Không tìm thấy tour.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Tour Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        <div className="w-full md:w-1/3">
          <Image
            src={tour.image}
            alt={tour.name}
            className="rounded-lg w-full h-full object-cover"
            width={500}
            height={300}
          />
          <div className="flex gap-2 mt-2">
            {[1, 2, 3].map((i) => (
              <Image
                key={i}
                src={`/images/tour${i}.jpg`}
                alt={`Thumbnail ${i}`}
                className="rounded-lg w-1/3 object-cover"
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-bold">{tour.name}</h1>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-lg">{"★".repeat(Math.round(tour.rating))}</span>
            <span className="ml-2 text-gray-600">({tour.rating} đánh giá)</span>
          </div>
          <p className="mt-4">Thời gian: {tour.time}</p>
          <p>Giá: {tour.price} VND/người</p>
          <p>Khởi hành: {tour.khoihanh}</p>
          <div className="flex mt-4 items-center">
          <button className="rounded-full flex items-center shadow-xl">
          <span className="ml-4 font-bold">ĐẶT NGAY</span>
          <span className="ml-2 bg-orange-400 text-white p-2 rounded-full">
            <FaPhone />
          </span>
        </button>
          </div>
        </div>
      </div>

      {/* Itinerary */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Điểm nổi bật</h2>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Tham quan các điểm nổi tiếng tại Los Angeles</li>
          <li>Khám phá Las Vegas</li>
          <li>Chinh phục núi và hồ tại San Diego</li>
          <li>Và nhiều hơn nữa...</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Lịch trình chi tiết</h2>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="mt-4">
            <h3 className="text-lg font-medium">Ngày {i + 1}: Điểm đến và lịch trình</h3>
            <Image
              src="/images/tour1.jpg"
              alt="Daily Image"
              className="rounded-lg mt-2"
              width={800}
              height={400}
            />
            <p className="mt-2 text-gray-700">Chi tiết mô tả cho ngày {i + 1}...</p>
          </div>
        ))}
      </div>

      {/* Similar Tours */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Tour tương tự</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {tours.slice(0, 3).map((similarTour) => (
            <div key={similarTour.id} className="bg-white shadow rounded-lg p-4">
              <Image
                src={similarTour.image}
                alt={similarTour.name}
                className="rounded-lg w-full object-cover"
                width={300}
                height={200}
              />
              <h3 className="mt-4 font-medium">{similarTour.name}</h3>
              <p className="mt-2 text-gray-600">Chi tiết về tour...</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg w-full">Chi Tiết</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;
