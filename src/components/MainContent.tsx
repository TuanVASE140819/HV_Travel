// src/components/MainContent.tsx
import React from 'react';
import Banner from './Banner';
import ListTour from './ListTour';
import About from './About';
import ListComment from './ListComment';
import Contact from './Contact';

interface MainContentProps {
  className?: string;
}

const MainContent: React.FC<MainContentProps> = ({ className }) => {
  return (
    <main className={`flex-1 ${className} container mx-auto`}>
     
      <ListTour />
      <ListComment />
      <About />
      
      <Contact />
    </main>
  );
};

export default MainContent;