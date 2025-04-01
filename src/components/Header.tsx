"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchLogoURL, fetchCompanyIntroductiondata } from "@/firebaseConfig";

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
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
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
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-10 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      role="banner"
      aria-label="Header chính"
      itemScope
      itemType="http://schema.org/WPHeader"
    >
      <div className="flex justify-between items-center container mx-auto px-4 py-2 md:px-4">
        <div className="left-section block md:hidden"></div>
        {/* Left Section - Logo */}
        <div className="left-section md:ml-0">
          {logoURL ? (
            <a href="/" aria-label="Trang chủ" itemProp="url">
              <Image
                src={logoURL}
                alt="Logo HV Travel - Công ty du lịch hàng đầu Việt Nam"
                width={100}
                height={100}
                className="w-20 md:w-32"
                priority
                itemProp="logo"
              />
            </a>
          ) : (
            <div className="animate-pulse">
              <div className="bg-gray-200 h-10 w-16 animate-pulse" />
            </div>
          )}
        </div>

        {/* Right Section - Info & Menu Button */}
        <div className="right-section">
          <div className="flex justify-center w-full md:w-auto">
            {companyInfo.length > 0 && (
              <>
                <div
                  className="hidden md:flex items-center space-x-2 text-sm mr-2"
                  itemProp="contactPoint"
                  itemScope
                  itemType="http://schema.org/ContactPoint"
                >
                  <Image
                    src="/images/icon_web.jpg"
                    alt="Icon website"
                    width={20}
                    height={20}
                    aria-hidden="true"
                  />
                  <span itemProp="url">{companyInfo[0].website}</span>
                </div>
                <div
                  className="hidden md:flex items-center space-x-2 text-sm mr-2"
                  itemProp="contactPoint"
                  itemScope
                  itemType="http://schema.org/ContactPoint"
                >
                  <Image
                    src="/images/icon_phone.jpg"
                    alt="Icon điện thoại"
                    width={20}
                    height={20}
                    aria-hidden="true"
                  />
                  <span itemProp="telephone">{companyInfo[0].phone}</span>
                </div>
                <div
                  className="hidden md:flex items-center space-x-2 text-sm"
                  itemProp="address"
                  itemScope
                  itemType="http://schema.org/PostalAddress"
                >
                  <Image
                    src="/images/icon_location.jpg"
                    alt="Icon địa chỉ"
                    width={20}
                    height={20}
                    aria-hidden="true"
                  />
                  <span itemProp="streetAddress">{companyInfo[0].address}</span>
                </div>
              </>
            )}
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-300 focus:outline-none"
            aria-label="Mở menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <nav
            className="hidden md:block mt-4"
            role="navigation"
            aria-label="Menu chính"
            itemScope
            itemType="http://schema.org/SiteNavigationElement"
          >
            <ul className="flex justify-between space-x-4">
              <li itemProp="name">
                <a
                  href="#tour-section"
                  className={`hover:no-underline hover:text-[#e6d279] font-bold ${
                    activeLink === "#tour-section" ? "text-[#56c5d7]" : ""
                  }`}
                  onClick={() => handleLinkClick("#tour-section")}
                  aria-current={
                    activeLink === "#tour-section" ? "page" : undefined
                  }
                  itemProp="url"
                >
                  TOUR
                </a>
              </li>
              <li itemProp="name">
                <a
                  href="#feedback-section"
                  className={`hover:no-underline hover:text-[#e6d279] font-bold ${
                    activeLink === "#feedback-section" ? "text-[#56c5d7]" : ""
                  }`}
                  onClick={() => handleLinkClick("#feedback-section")}
                  aria-current={
                    activeLink === "#feedback-section" ? "page" : undefined
                  }
                  itemProp="url"
                >
                  FEEDBACK
                </a>
              </li>
              <li itemProp="name">
                <a
                  href="#about-section"
                  className={`hover:no-underline hover:text-[#e6d279] font-bold ${
                    activeLink === "#about-section" ? "text-[#56c5d7]" : ""
                  }`}
                  onClick={() => handleLinkClick("#about-section")}
                  aria-current={
                    activeLink === "#about-section" ? "page" : undefined
                  }
                  itemProp="url"
                >
                  VỀ CHÚNG TÔI
                </a>
              </li>
              <li itemProp="name">
                <a
                  href="#contact-section"
                  className={`hover:no-underline hover:text-[#e6d279] font-bold ${
                    activeLink === "#contact-section" ? "text-[#56c5d7]" : ""
                  }`}
                  onClick={() => handleLinkClick("#contact-section")}
                  aria-current={
                    activeLink === "#contact-section" ? "page" : undefined
                  }
                  itemProp="url"
                >
                  LIÊN HỆ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Slide-in Menu for Mobile */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full bg-[#56c5d7] text-white z-20 transform transition-transform md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
        role="navigation"
        aria-label="Menu di động"
        itemScope
        itemType="http://schema.org/SiteNavigationElement"
      >
        <div className="flex flex-col p-6">
          <button
            onClick={toggleMenu}
            className="self-end mb-4 text-white focus:outline-none"
            aria-label="Đóng menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav>
            <ul className="space-y-4">
              <li itemProp="name">
                <a
                  href="#tour-section"
                  className={`hover:no-underline font-bold ${
                    activeLink === "#tour-section" ? "text-[#fff]" : ""
                  }`}
                  onClick={() => handleLinkClick("#tour-section")}
                  aria-current={
                    activeLink === "#tour-section" ? "page" : undefined
                  }
                  itemProp="url"
                >
                  TOUR
                </a>
              </li>
              <li itemProp="name">
                <a
                  href="#feedback-section"
                  className={`hover:no-underline font-bold ${
                    activeLink === "#feedback-section" ? "text-[#fff]" : ""
                  }`}
                  onClick={() => handleLinkClick("#feedback-section")}
                  aria-current={
                    activeLink === "#feedback-section" ? "page" : undefined
                  }
                  itemProp="url"
                >
                  FEEDBACK
                </a>
              </li>
              <li itemProp="name">
                <a
                  href="#about-section"
                  className={`hover:no-underline font-bold ${
                    activeLink === "#about-section" ? "text-[#fff]" : ""
                  }`}
                  onClick={() => handleLinkClick("#about-section")}
                  aria-current={
                    activeLink === "#about-section" ? "page" : undefined
                  }
                  itemProp="url"
                >
                  VỀ CHÚNG TÔI
                </a>
              </li>
              <li itemProp="name">
                <a
                  href="#contact-section"
                  className={`hover:no-underline font-bold ${
                    activeLink === "#contact-section" ? "text-[#fff]" : ""
                  }`}
                  onClick={() => handleLinkClick("#contact-section")}
                  aria-current={
                    activeLink === "#contact-section" ? "page" : undefined
                  }
                  itemProp="url"
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
