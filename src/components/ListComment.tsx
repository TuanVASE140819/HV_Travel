"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchLogoURL, fetchCompanyIntroductiondata } from '../firebaseConfig';


interface CompanyIntroductionData {
  website: string;
  phone: string;
  address: string;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [logoURL, setLogoURL] = useState<string | null>(null);
  const [companyInfo, setCompanyInfo] = useState<CompanyIntroductionData[]>([]);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loadLogo = async () => {
        const url = await fetchLogoURL();
        setLogoURL(url);
      };
      loadLogo();
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCompanyIntroductiondata();
      setCompanyInfo(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10">
      <div className="flex justify-between items-center container mx-auto p-4">
        {/* Left Section - Logo */}
        <div className="left-section">
          {logoURL ? (
            <Image src={logoURL} alt="logo" width={100} height={100} />
          ) : (
            <div className="animate-pulse"> 
              <div className="bg-gray-200 h-8 w-8 rounded-full animate-pulse" />
            </div>
          )}
        </div>

        {/* Right Section - Info & Menu Button */}
        <div className="right-section">
          <div className="flex justify-end items-center space-x-4">
            {loading ? (
              <>
                <div className="animate-pulse">
                  <div className="bg-gray-200 h-4 w-20 rounded animate-pulse" />
                </div>
                <div className="animate-pulse">
                  <div className="bg-gray-200 h-4 w-20 rounded animate-pulse" />
                </div>
                <div className="animate-pulse">
                  <div className="bg-gray-200 h-4 w-20 rounded animate-pulse" />
                </div>
              </>
            ) : (
              companyInfo.length > 0 && (
                <>
                  <div className="hidden md:flex items-center space-x-2 text-sm">
                    <Image src="/images/icon_web.jpg" alt="icon" width={20} height={20} />
                    <span>{companyInfo[0].website}</span>
                  </div>
                  <div className="hidden md:flex items-center space-x-2 text-sm">
                    <Image src="/images/icon_phone.jpg" alt="icon" width={20} height={20} />
                    <span>{companyInfo[0].phone}</span>
                  </div>
                  <div className="hidden md:flex items-center space-x-2 text-sm">
                    <Image src="/images/icon_location.jpg" alt="icon" width={20} height={20} />
                    <span>{companyInfo[0].address}</span>
                  </div>
                </>
              )
            )}
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