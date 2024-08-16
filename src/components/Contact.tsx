'use client';

import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestore, fetchCompanyIntroductiondata } from '@/firebaseConfig';
import Input from './Input';

interface ContactInfo {
  name: string;
  email: string;
  message: string;
}

interface CompanyIntroductionData {
  address: string;
  gmail: string;
  phone: string;
  website: string;
}

const Contact: React.FC = () => {
  const [contact, setContact] = useState<ContactInfo>({ name: '', email: '', message: '' });
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [companyInfo, setCompanyInfo] = useState<CompanyIntroductionData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCompanyIntroductiondata();
      setCompanyInfo(data);
    };
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, 'contacts'), contact);
      setContact({ name: '', email: '', message: '' }); // Reset form
      setPopupMessage('Gửi tin nhắn thành công!');
    } catch (error) {
      setPopupMessage('Gửi tin nhắn thất bại. Vui lòng thử lại.');
    }
  };

  return (
    <section id="contact-section"  className="my-4 md:my-16 md:px-56 px-4">
      <div className="flex flex-wrap lg:flex-nowrap space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/2 text-xl pr-0 lg:pr-4">
          <h2 className="font-bold mb-4">Liên hệ</h2>
          <p>Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn!</p>
          {companyInfo.map((info, index) => (
            <div key={index}>
              <>
             
              <nav>
            <ul className="mt-4 flex items-center">
              <li>
                <img src="/images/icon_web.jpg" alt="phone" className="w-5 h-5 inline-block mr-2" /> 
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {info.website}
                </a>
              </li>
            </ul>
            <ul className="mt-4 flex items-center">
              <li>
                <img src="/images/icon_phone.jpg" alt="phone" className="w-5 h-5 inline-block mr-2" /> 
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {info.phone}
                </a>
              </li>
            </ul>
            <ul className="mt-4 flex items-center">
              <li>
                <img src="/images/icon_email.jpg" alt="phone" className="w-5 h-5 inline-block mr-2" /> 
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {info.gmail}
                  </a> 
              </li>
            </ul>
            <ul className="mt-4 flex items-center">
              <li>
                <img src="/images/icon_location.jpg" alt="phone" className="w-5 h-5 inline-block mr-2" /> 
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {info.address}
                  </a> 
              </li>
            </ul>
          </nav>
              </>
           
            </div>
          ))}
          
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
        
        <div className="w-full lg:w-1/2 text-xl pl-0 lg:pl-4">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full">
            <h2 className="text-2xl font-semibold mb-6">Gửi tin nhắn</h2>
            <form onSubmit={handleSubmit}>
              <Input label="Tên" name="name" type="text" value={contact.name} onChange={handleChange} />
              <Input label="Email" name="email" type="email" value={contact.email} onChange={handleChange} />
              <Input label="Tin nhắn" name="message" type="textarea" value={contact.message} onChange={handleChange} />
              <p className="text-gray-500 text-base mt-4">
                Hoặc điền vào form liên hệ và chúng tôi sẽ phản hồi bạn trong vòng 1-2 ngày kể từ ngày nhận được thông tin.
              </p>
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
      {popupMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            {popupMessage}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;