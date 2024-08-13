import React from "react";
import { FaPhone, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Link from "next/link";

const tours = [
  {
    id: 1,
    name: "Khám Phá Cao Nguyên",
    image: "/images/tour1.jpg",
    rating: 4.5,
    time: "3 ngày 2 đêm",
    price: "3,500,000",
    khoihanh: "Thứ 6 hàng tuần",
  },
  {
    id: 2,
    image: "/images/tour2.jpg",
    name: "Hành Trình Sapa",
    rating: 4.8,
    time: "2 ngày 1 đêm",
    price: "2,500,000",
    khoihanh: "Thứ 7 hàng tuần",
  },
  {
    id: 3,
    name: "Đà Lạt Vào Mùa Hoa",
    image: "/images/tour3.jpg",
    rating: 4.7,
    time: "3 ngày 2 đêm",
    price: "3,000,000",
    khoihanh: "Thứ 2 hàng tuần",
  },
  {
    id: 4,
    name: "Miền Tây Bình Yên",
    image: "/images/tour1.jpg",
    rating: 4.6,
    time: "2 ngày 1 đêm",
    price: "2,000,000",
    khoihanh: "Thứ 3 hàng tuần",
  },
  {
    id: 5,
    name: "Hành Trình Phú Quốc",
    image: "/images/tour2.jpg",
    rating: 4.9,
    time: "3 ngày 2 đêm",
    price: "4,000,000",
    khoihanh: "Thứ 4 hàng tuần",
  },
  {
    id: 6,
    name: "Hành Trình Phan Thiết",
    image: "/images/tour3.jpg",
    rating: 4.4,
    time: "2 ngày 1 đêm",
    price: "2,500,000",
    khoihanh: "Thứ 5 hàng tuần",
  },
];

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

const ListTour = () => {
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
    </section>
  );
};

export default ListTour;
