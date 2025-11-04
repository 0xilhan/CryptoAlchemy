
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedThreadsSection from './components/FeaturedThreadsSection';
import VideoSection from './components/VideoSection';
import AnnouncementsSection from './components/AnnouncementsSection';
import AboutSection from './components/AboutSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import ProductsSection from './components/ProductsSection';
import CoursesSection from './components/CoursesSection';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-[#0D0D0D] text-gray-100 antialiased selection:bg-[#c7a94a] selection:text-[#0D0D0D]">
      <CustomCursor />
      <Header />
      <main>
        <HeroSection />
        <FeaturedThreadsSection />
        <VideoSection />
        <AnnouncementsSection />
        <AboutSection />
        <ProductsSection />
        <CoursesSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
}
