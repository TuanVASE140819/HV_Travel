"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/comment.css";
import { firestore, getDocs, collection } from "../firebaseConfig";
import { QueryDocumentSnapshot } from "firebase/firestore";
import Image from "next/image";

interface Comment {
  id: string;
  rating: number;
  name: string;
  comment: string;
  date: string;
  avatar: string;
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
    <div className="flex flex-col justify-start rounded-lg shadow-lg m-4 px-6 py-8 bg-gray-300 h-64"></div>
  </div>
);

const CommentSlider = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      const querySnapshot = await getDocs(collection(firestore, "comments"));
      const commentsData = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => ({
        id: doc.id,
        ...doc.data()
      })) as Comment[];
      setComments(commentsData);
      setLoading(false);
    };

    fetchComments();
  }, []);

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
    <section id="feedback-section"  className="my-4 md:my-16 md:px-56 px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Feedback</h1>
      </div>
      <div className="w-full mt-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} />
            ))}
          </div>
        ) : (
          <Slider {...settings}>
            {comments.map((comment) => (
              <div key={comment.id}>
                <div className="bg-white flex flex-col justify-start rounded-lg shadow-lg m-4 px-6 py-8">
                  <div className="flex mt-4 justify-start">
                    <img
                      src={comment.avatar}
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
        )}
      </div>
    </section>
  );
};

export default CommentSlider;