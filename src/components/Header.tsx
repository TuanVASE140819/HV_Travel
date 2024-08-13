"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10">
      <div className="flex justify-between items-center container mx-auto p-4">
        {/* Left Section - Logo */}
        <div className="left-section">
          <Image src="/images/logo.jpg" alt="logo" width={100} height={100} />
        </div>

        {/* Right Section - Info & Menu Button */}
        <div className="right-section">
          <div className="flex justify-end items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <Image src="/images/icon_web.jpg" alt="icon" width={20} height={20} />
              <span>hvtravel.vn</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <Image src="/images/icon_phone.jpg" alt="icon" width={20} height={20} />
              <span>0931216879</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <Image src="/images/icon_location.jpg" alt="icon" width={20} height={20} />
              <span>12A Ngô Huy Diễn, Phường 5, Đà Lạt, Lâm Đồng</span>
            </div>
          </div>
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 rounded-full hover:bg-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <nav className="hidden md:block mt-4">
            <ul className="flex justify-between space-x-4">
              <li>
                <a 
                  href="#tour-section" 
                  className={`hover:underline font-bold ${activeLink === '#tour-section' ? 'text-[#56c5d7]' : ''}`}
                  onClick={() => handleLinkClick('#tour-section')}
                >
                  TOUR
                </a>
              </li>
              <li>
                <a 
                  href="#feedback-section" 
                  className={`hover:underline font-bold ${activeLink === '#feedback-section' ? 'text-[#56c5d7]' : ''}`}
                  onClick={() => handleLinkClick('#feedback-section')}
                >
                  FEEDBACK
                </a>
              </li>
              <li>
                <a 
                  href="#about-section" 
                  className={`hover:underline font-bold ${activeLink === '#about-section' ? 'text-[#56c5d7]' : ''}`}
                  onClick={() => handleLinkClick('#about-section')}
                >
                  VỀ CHÚNG TÔI
                </a>
              </li>
              <li>
                <a 
                  href="#contact-section" 
                  className={`hover:underline font-bold ${activeLink === '#contact-section' ? 'text-[#56c5d7]' : ''}`}
                  onClick={() => handleLinkClick('#contact-section')}
                >
                  LIÊN HỆ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Full Menu for Larger Screens */}

      {/* Slide-in Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#56c5d7] text-white z-20 transform transition-transform md:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '250px' }}
      >
        <div className="flex flex-col p-6">
          <button
            onClick={toggleMenu}
            className="self-end mb-4 text-white focus:outline-none"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#tour-section" 
                  className={`hover:underline font-bold ${activeLink === '#tour-section' ? 'text-[#fff]' : ''}`}
                  onClick={() => handleLinkClick('#tour-section')}
                >
                  TOUR
                </a>
              </li>
              <li>
                <a 
                  href="#feedback-section" 
                  className={`hover:underline font-bold ${activeLink === '#feedback-section' ? 'text-[#fff]' : ''}`}
                  onClick={() => handleLinkClick('#feedback-section')}
                >
                  FEEDBACK
                </a>
              </li>
              <li>
                <a 
                  href="#about-section" 
                  className={`hover:underline font-bold ${activeLink === '#about-section' ? 'text-[#fff]' : ''}`}
                  onClick={() => handleLinkClick('#about-section')}
                >
                  VỀ CHÚNG TÔI
                </a>
              </li>
              <li>
                <a 
                  href="#contact-section" 
                  className={`hover:underline font-bold ${activeLink === '#contact-section' ? 'text-[#fff]' : ''}`}
                  onClick={() => handleLinkClick('#contact-section')}
                >
                  LIÊN HỆ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;