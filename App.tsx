import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CryptoPriceRibbon from './components/CryptoPriceRibbon';
import FeaturedThreadsSection from './components/FeaturedThreadsSection';
import VideoSection from './components/VideoSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import CoursesSection from './components/CoursesSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { CartProvider } from './contexts/CartContext';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';

function App() {
  const [auraPosition, setAuraPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setAuraPosition({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <CartProvider>
      <CustomCursor />
      <div className="aura" />
      <div className="bg-[#0D0D0D] text-white selection:bg-[#c7a94a] selection:text-[#0D0D0D]">
        <Header />
        <main>
          <HeroSection />
          <CryptoPriceRibbon />
          <FeaturedThreadsSection />
          <VideoSection />
          <AboutSection />
          <ProductsSection />
          <CoursesSection />
          <ConnectSection />
        </main>
        <Footer />
      </div>
      <CartModal />
      <CheckoutModal />
    </CartProvider>
  );
}

export default App;