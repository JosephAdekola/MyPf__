import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import HeroComponent from '../components/HeroComponent';
import FooterArea from '../components/FooterArea';

export default function MainLayout() {
  const headerRef = useRef(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Original Header */}
      <div
        ref={headerRef}
        className="w-full z-10 absolute" >
        <Header />
      </div>

      {/* Sticky Header that animates in */}
      {isStickyVisible && (
        <div className="sticky top-0 z-50 bg-gradient-to-tr from-[#4e2946] via-[#4e2946] to-[#f58634] animate-slide-down">
          <Header />
        </div>
      )}

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-tr from-[#4e2946] via-[#4e2946] to-[#f58634] pt-[100px]">
        <HeroComponent />
      </div>

      <main>
        <Outlet />
      </main>

      <footer className=' bg-[#4e2946] overflow-hidden '>
        <FooterArea />
      </footer>
    </>
  );
}
