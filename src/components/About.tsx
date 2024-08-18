"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { fetchCompanyIntroduction } from '../firebaseConfig';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CompanyIntroduction {
  content: string;
  imageUrl: string;
}

const About: React.FC = () => {
  const [companyIntroduction, setCompanyIntroduction] = useState<CompanyIntroduction | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    const fetchIntroduction = async () => {
      const introduction = await fetchCompanyIntroduction();
      setCompanyIntroduction(introduction[0]);  // Set the entire object
    };

    fetchIntroduction();
  }, []);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } }
  };

  return (
    <section id="about-section" className="my-4 md:my-16 md:px-56 px-4">
      <div className="flex justify-between items-center mb-4">
        <motion.h1
          className="text-2xl font-bold"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          Về chúng tôi
        </motion.h1>
      </div>

      {/* Chia làm 2 phần bằng nhau và responsive */}
      <div className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Phần 1 */}
        <div className="w-full lg:w-1/2">
          {companyIntroduction && (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <Image
                src={companyIntroduction.imageUrl}
                alt="logo"
                width={600}
                height={600}
                className="rounded-3xl"
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div>
          )}
        </div>

        {/* Phần 2 */}
        <div className="w-full lg:w-1/2">
          <div>
            <motion.h1
              className="font-bold mt-3 text-xl bg-gradient-to-r from-[#f58a1f] to-[#fcc142] bg-clip-text text-transparent"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              Sứ mệnh
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              Sứ mệnh của chúng tôi là tạo ra những chuyến đi thú vị, an toàn và đầy kỷ niệm cho du khách. Với đội ngũ hướng dẫn viên nhiệt tình, chuyên nghiệp và am hiểu về Đà Lạt, chúng tôi cam kết mang đến cho bạn một hành trình khám phá thiên nhiên, văn hóa và ẩm thực đặc sắc của Đà Lạt.
            </motion.p>
            <motion.h1
              className="font-bold mt-3 text-xl bg-gradient-to-r from-[#f58a1f] to-[#fcc142] bg-clip-text text-transparent"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              Tại sao chọn chúng tôi ?
            </motion.h1>
            {/* Chia làm 2 phần */}
            <div className="flex flex-wrap mt-2">
              <motion.h4
                className="font-semibold w-full sm:w-1/3"
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                Dịch vụ chuyên nghiệp:
              </motion.h4>
              <div className="w-full sm:w-2/3 ml-auto">
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                >
                  Mỗi tour đều được thiết kế tỉ mỉ, đảm bảo bạn có những trải nghiệm tuyệt vời nhất.
                </motion.p>
              </div>
            </div>
            <div className="flex flex-wrap mt-4">
              <motion.h4
                className="font-semibold w-full sm:w-1/3"
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                Đội ngũ chuyên nghiệp:
              </motion.h4>
              <div className="w-full sm:w-2/3 ml-auto">
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                >
                  Hướng dẫn viên thân thiện, giàu kinh nghiệm, luôn sẵn sàng hỗ trợ bạn mọi lúc.
                </motion.p>
              </div>
            </div>
            <div className="flex flex-wrap mt-4">
              <motion.h4
                className="font-semibold w-full sm:w-1/3"
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                Dịch vụ đa dạng:
              </motion.h4>
              <div className="w-full sm:w-2/3 ml-auto">
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                >
                  Chúng tôi cung cấp nhiều lựa chọn tour phù hợp với nhu cầu và ngân sách của bạn.
                </motion.p>
              </div>
            </div>
            <div className="flex flex-wrap mt-4">
              <motion.h4
                className="font-semibold w-full sm:w-1/3"
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                Giá cả hợp lý:
              </motion.h4>
              <div className="w-full sm:w-2/3 ml-auto">
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                >
                  Chúng tôi cam kết mang lại dịch vụ chất lượng cao với mức giá cạnh tranh.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;