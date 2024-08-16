"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { fetchCompanyIntroduction } from '../firebaseConfig';

interface CompanyIntroduction {
  content: string;
  imageUrl: string;
}

const Skeleton: React.FC = () => (
  <div className="animate-pulse">
      <div className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="w-full lg:w-1/2">
        <div className="bg-gray-200 h-96 w-full rounded animate-pulse" />
       </div>
       <div className="w-full lg:w-1/2">
    <div className="bg-gray-200 h-4 w-3/4 mt-4 rounded" />
    <div className="bg-gray-200 h-4 w-1/2 mt-4 rounded" />
    <div className="bg-gray-200 h-4 w-3/4 mt-4 rounded" />
    <div className="bg-gray-200 h-4 w-1/2 mt-4 rounded" />
    <div className="bg-gray-200 h-4 w-3/4 mt-4 rounded" />
    <div className="bg-gray-200 h-4 w-1/2 mt-4 rounded" />
  </div>
      </div>
  </div>
);

const About: React.FC = () => {
  const [companyIntroduction, setCompanyIntroduction] = useState<CompanyIntroduction | null>(null);

  useEffect(() => {
    const fetchIntroduction = async () => {
      const introduction = await fetchCompanyIntroduction();
      setCompanyIntroduction(introduction[0]);  // Set the entire object
    };

    fetchIntroduction();
  }, []);

  return (
    <section id="about-section"  className="my-4 md:my-16 md:px-56 px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Về chúng tôi</h1>
      </div>

      {/* Chia làm 2 phần bằng nhau và responsive */}
      <div className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Phần 1 */}
        <div className="w-full lg:w-1/2">
          {companyIntroduction ? (
            <Image
              src={companyIntroduction.imageUrl}
              alt="logo"
              width={600}
              height={600}
              className="rounded-3xl"
            />
          ) : (
            <Skeleton />
          )}
        </div>

        {/* Phần 2 */}
        <div className="w-full lg:w-1/2">
          <div
            dangerouslySetInnerHTML={{
              __html: companyIntroduction?.content
                ? companyIntroduction.content
                    .replace(/<h1>/g, '<h1 class="text-2xl font-bold">')
                    .replace(/<h4>/g, '<h4 class="font-bold">')
                : '',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;