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
        <meta name="description" content="Trang web cung cấp các tour du lịch hấp dẫn." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="HVtravel" />
        <meta property="og:description" content="Trang web cung cấp các tour du lịch hấp dẫn." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hvtravel.vn/" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/travel-123-48553.appspot.com/o/logos%2Flogo.png?alt=media&token=00d094a0-ee12-43f5-b478-deb6fc179b9d" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVtravel" />
        <meta name="twitter:description" content="Trang web cung cấp các tour du lịch hấp dẫn." />
        <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/travel-123-48553.appspot.com/o/logos%2Flogo.png?alt=media&token=00d094a0-ee12-43f5-b478-deb6fc179b9d" />
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