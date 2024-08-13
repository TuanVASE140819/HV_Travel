import Image from 'next/image';
import React from 'react';
import Input from './Input';

const Contact: React.FC = () => {
  return (
    <section id="contact-section" className="my-36 px-4">
      <div className="flex flex-wrap lg:flex-nowrap space-y-8 lg:space-y-0">
        {/* Phần thông tin liên hệ */}
        <div className="w-full lg:w-1/2 text-xl pr-0 lg:pr-4">
          <h2 className="font-bold mb-4">Liên hệ</h2>
          <p>Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn!</p>
          <nav>
            <ul className="mt-4 flex items-center">
              <li>
                <img src="/images/icon_web.jpg" alt="phone" className="w-5 h-5 inline-block mr-2" /> 
              </li>
              <li>
                <a href="#" className="hover:underline">hvtravel.vn</a>
              </li>
            </ul>
            <ul className="mt-4 flex items-center">
              <li>
                <img src="/images/icon_phone.jpg" alt="phone" className="w-5 h-5 inline-block mr-2" /> 
              </li>
              <li>
                <a href="#" className="hover:underline">0931216879</a>
              </li>
            </ul>
            <ul className="mt-4 flex items-center">
              <li>
                <img src="/images/icon_email.jpg" alt="phone" className="w-5 h-5 inline-block mr-2" /> 
              </li>
              <li>
                <a href="#" className="hover:underline">hvtravel@gmail.com</a> 
              </li>
            </ul>
            <ul className="mt-4 flex items-center">
              <li>
                <img src="/images/icon_location.jpg" alt="phone" className="w-5 h-5 inline-block mr-2" /> 
              </li>
              <li>
                <a href="#" className="hover:underline">12A Ngô Huy Diễn, phường 5 Đà Lạt, Lâm Đồng</a> 
              </li>
            </ul>
          </nav>
          {/* Đường line */}
          <div className="border-b-2 border-gray-300 pt-6 w-full lg:w-1/2"></div>
          <h2 className="text-xl font-bold mt-4 mb-4">Theo dõi chúng tôi</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              <img src="/images/icon_facebook.jpg" alt="Facebook" className="w-8 h-8 inline-block" /> 
            </a>
            <a href="#" className="hover:underline">
              <img src="/images/icon_instagram.jpg" alt="Instagram" className="w-8 h-8 inline-block" /> 
            </a>
            <a href="#" className="hover:underline">
              <img src="/images/icon_zalo.jpg" alt="Zalo" className="w-8 h-8 inline-block" /> 
            </a>
          </div>
        </div>
        
        {/* Phần form gửi tin nhắn */}
        <div className="w-full lg:w-1/2 text-xl pl-0 lg:pl-4">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full">
            <h2 className="text-2xl font-semibold mb-6">Gửi tin nhắn</h2>
            <form>
              <Input label="Tên" name="name" />
              <Input label="Email" name="email" type="email" />
              <Input label="Tin nhắn" name="message" type="textarea" width="w-full" height="h-32" />
              <p className="text-gray-500 text-base mt-4">
                Hoặc điền vào form liên hệ và chúng tôi sẽ phản hồi bạn trong vòng 1-2 ngày kể từ ngày nhận được thông tin.
              </p>
              {/* Nút Gửi */}
              <div className="flex justify-end">
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gradient-to-l focus:outline-none"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
