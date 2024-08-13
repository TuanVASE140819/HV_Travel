import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#56c5d7] text-white text-center p-4 py-5">
      <div className="flex justify-center">
        <Image src="/images/footer.png" alt="logo" width={200} height={200} className='mx-auto' />
      </div>
      <nav className="mt-4">
        <ul className="flex flex-wrap justify-center space-x-6 md:space-x-16 mx-4 md:mx-24 my-8">
          <li><a href="#" className="hover:underline font-bold">TOUR</a></li>
          <li><a href="#" className="hover:underline font-bold">FEEDBACK</a></li>
          <li><a href="#" className="hover:underline font-bold">VỀ CHÚNG TÔI</a></li>
          <li><a href="#" className="hover:underline font-bold">LIÊN HỆ</a></li>
        </ul>
        <div className="border-b-2 border-white border-opacity-50 mt-6" />
      </nav>
      <p className="mt-4">&copy; 2023 Công ty ABC. Bảo lưu mọi quyền.</p>
    </footer>
  );
}

export default Footer;
