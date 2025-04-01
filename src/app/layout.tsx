import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "HVtravel - Tour Du Lịch Chất Lượng Cao",
  description:
    "HVtravel cung cấp các tour du lịch hấp dẫn, khám phá những điểm đến mới lạ với giá cả hợp lý. Đặt tour trực tuyến, thanh toán an toàn, dịch vụ chất lượng cao.",
  keywords:
    "tour du lịch, du lịch việt nam, tour trong nước, tour quốc tế, đặt tour online, du lịch giá rẻ",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="vi">
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
        <link rel="canonical" href="https://www.hvtravel.vn/" />

        {/* Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="HVtravel" />
        <meta name="language" content="Vietnamese" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hvtravel.vn/" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/travel-123-48553.appspot.com/o/logos%2Flogo.png?alt=media&token=00d094a0-ee12-43f5-b478-deb6fc179b9d"
        />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.hvtravel.vn/" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/travel-123-48553.appspot.com/o/logos%2Flogo.png?alt=media&token=00d094a0-ee12-43f5-b478-deb6fc179b9d"
        />

        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "HVtravel",
            description: metadata.description,
            url: "https://www.hvtravel.vn/",
            logo: "https://firebasestorage.googleapis.com/v0/b/travel-123-48553.appspot.com/o/logos%2Flogo.png?alt=media&token=00d094a0-ee12-43f5-b478-deb6fc179b9d",
            address: {
              "@type": "PostalAddress",
              addressCountry: "VN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+84-xxx-xxx-xxx",
              contactType: "customer service",
            },
          })}
        </script>
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
