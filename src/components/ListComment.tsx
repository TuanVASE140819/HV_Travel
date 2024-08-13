"use client";
import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/comment.css";

const comments = [
  {
    id: 1,
    rating: 5,
    name: "Trần thị Thanh",
    comment: "Chuyến đi tuyệt vời! Mọi thứ đều hoàn hảo từ dịch vụ đến hướng dẫn viên, Đà Lạt thật đẹp!",
    date: "12/7/2024",
    image: "/images/customer.jpg",
  },
  {
    id: 2,
    rating: 5,
    name: "Trần thị Thanh",
    comment: "Chuyến đi tuyệt vời! Mọi thứ đều hoàn hảo từ dịch vụ đến hướng dẫn viên, Đà Lạt thật đẹp!",
    date: "12/7/2024",
    image: "/images/customer.jpg",
  },
  {
    id: 3,
    rating: 5,
    name: "Trần thị Thanh",
    comment: "Chuyến đi tuyệt vời! Mọi thứ đều hoàn hảo từ dịch vụ đến hướng dẫn viên, Đà Lạt thật đẹp!",
    date: "12/7/2024",
    image: "/images/customer.jpg",
  },
  {
    id: 4,
    rating: 5,
    name: "Trần thị Thanh",
    comment: "Chuyến đi tuyệt vời! Mọi thứ đều hoàn hảo từ dịch vụ đến hướng dẫn viên, Đà Lạt thật đẹp!",
    date: "12/7/2024",
    image: "/images/customer.jpg",
  },
  {
    id: 5,
    rating: 5,
    name: "Trần thị Thanh",
    comment: "Chuyến đi tuyệt vời! Mọi thứ đều hoàn hảo từ dịch vụ đến hướng dẫn viên, Đà Lạt thật đẹp!",
    date: "12/7/2024",
    image: "/images/customer.jpg",
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500 mr-1" />);
    } else if (i - rating < 1) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 mr-1" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500 mr-1" />);
    }
  }
  return stars;
};

const CommentSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="feedback-section" className="my-4 md:my-36 px-4">
        <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Feedback</h1>
        </div>
         <div className="w-full mt-8">
      <Slider {...settings}>
        {comments.map((comment) => (
          <div key={comment.id} >
            <div className="bg-white   flex flex-col justify-start rounded-lg shadow-lg m-4 px-6 py-8">
              <div className="flex  mt-4 justify-start">
                <img
                  src={comment.image}
                  alt={comment.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <div className="ml-4">
                <div className="flex mt-2">{renderStars(comment.rating)}</div>
                  <h3 className="text-xl font-bold">{comment.name}</h3>
                  <p className="text-gray-600">{comment.date}</p>
              
                </div>
              </div>
              <p className="text-gray-600 mt-2 text-center">
                &quot;{comment.comment}&quot;
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </section>
 
  );
};

export default CommentSlider;