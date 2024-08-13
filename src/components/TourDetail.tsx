'use client';

import { useParams } from 'next/navigation';
import React from 'react';

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{tour.name}</h1>
      <img src={tour.image} alt={tour.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-lg mb-2"><strong>Rating:</strong> {tour.rating} ⭐</p>
      <p className="text-lg mb-2"><strong>Thời gian:</strong> {tour.time}</p>
      <p className="text-lg mb-2"><strong>Giá:</strong> {tour.price} VND</p>
      <p className="text-lg mb-2"><strong>Khởi hành:</strong> {tour.khoihanh}</p>
    </div>
  );
};

export default TourDetailPage;