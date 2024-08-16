import Image from 'next/image';
import React from 'react';

const Skeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="container mx-auto my-4 mt-36 px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        <div className="w-full md:w-1/2 flex flex-row gap-4">
          <div className="w-[35rem] h-[35rem] bg-gray-300 rounded-3xl"></div>
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-28 h-28 bg-gray-300 rounded-3xl"></div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
        </div>
      </div>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about-section" className="my-4 md:my-36 px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Về chúng tôi</h1>
      </div>

      {/* Chia làm 2 phần bằng nhau và responsive */}
      <div className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Phần 1 */}
        <div className="w-full lg:w-1/2">
          <Image 
            src="/images/about.jpg" 
            alt="About us" 
            width={500} 
            height={500} 
            className="mx-auto"
          />
        </div>

        {/* Phần 2 */}
        <div className="w-full lg:w-1/2 text-lg">
          <h2 className="font-semibold mb-2 text-[#f58a1f]">Sứ mệnh</h2>
          <p>
            Sứ mệnh của chúng tôi là tạo ra những chuyến đi thú vị, an toàn và đầy kỷ niệm cho du khách. Với đội ngũ hướng dẫn viên nhiệt tình, chuyên nghiệp và am hiểu về Đà Lạt, chúng tôi cam kết mang đến cho bạn một hành trình khám phá thiên nhiên, văn hóa và ẩm thực đặc sắc của Đà Lạt.
          </p>
          <h2 className="font-semibold mt-2 text-[#f58a1f]">Tại sao chọn chúng tôi</h2>
          <div>
            {/* Chia làm 2 phần */}
            <div className="flex flex-wrap mt-2">
              <h4 className="font-semibold w-full sm:w-1/3">Dịch vụ chuyên nghiệp:</h4>
              <div className="w-full sm:w-2/3 ml-auto">
                <p>
                  Mỗi tour đều được thiết kế tỉ mỉ, đảm bảo bạn có những trải nghiệm tuyệt vời nhất. 
                </p>
              </div>
            </div>  
            <div className="flex flex-wrap mt-2">
              <h4 className="font-semibold w-full sm:w-1/3">Đội ngũ chuyên nghiệp:</h4>
              <div className="w-full sm:w-2/3 ml-auto">
                <p>
                  Hướng dẫn viên thân thiện, giàu kinh nghiệm, luôn sẵn sàng hỗ trợ bạn mọi lúc.
                </p>
              </div>
            </div>  
            <div className="flex flex-wrap mt-2">
              <h4 className="font-semibold w-full sm:w-1/3">Dịch vụ đa dạng:</h4>
              <div className="w-full sm:w-2/3 ml-auto">
                <p>
                  Chúng tôi cung cấp nhiều lựa chọn tour phù hợp với nhu cầu và ngân sách của bạn. 
                </p>
              </div>
            </div> 
            <div className="flex flex-wrap mt-2">
              
              <h4 className="font-semibold w-full sm:w-1/3">Giá cả hợp lý:</h4>
              <div className="w-full sm:w-2/3 ml-auto">
                <p>
                  Chúng tôi cam kết mang lại dịch vụ chất lượng cao với mức giá cạnh tranh.
                </p>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;