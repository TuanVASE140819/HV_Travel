import React from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: 'HVtravel',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="vi">
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
     
        <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="HVtravel">
    <meta name="twitter:description" content="Trang web cung cấp các tour du lịch hấp dẫn, giúp bạn khám phá những điểm đến mới lạ.">
    <meta name="twitter:image" content="https://hv-travel.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftravel-123-48553.appspot.com%2Fo%2Flogos%252Flogo.png%3Falt%3Dmedia%26token%3D00d094a0-ee12-43f5-b478-deb6fc179b9d&w=128&q=75">
    <meta name="twitter:url" content="https://hv-travel.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftravel-123-48553.appspot.com%2Fo%2Flogos%252Flogo.png%3Falt%3Dmedia%26token%3D00d094a0-ee12-43f5-b478-deb6fc179b9d&w=128&q=75">


        <meta name="description" content="Trang web cung cấp các tour du lịch hấp dẫn." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="HVtravel" />
        <meta property="og:description" content="Trang web cung cấp các tour du lịch hấp dẫn." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hvtravel.vn/" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/travel-123-48553.appspot.com/o/logos%2Flogo.png?alt=media&token=00d094a0-ee12-43f5-b478-deb6fc179b9d" />
            <meta property="og:image:width" content="200">
    <meta property="og:image:height" content="200">
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