import React from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import './globals.css';

export const metadata = {
  title: 'Trang Tour Du Lịch',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
