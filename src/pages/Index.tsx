import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import CallToActionSection from '../components/CallToActionSection';
import WhyChooseUs from '../components/WhyChooseUs';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <HeroSection />
      
      {/* Separator placed within a container that matches HeroSection's content alignment */}
      <div className="container mx-auto max-w-screen-xl px-4">
        <Separator className="my-8" />
      </div>
      
      <WhyChooseUs /> {/* This component manages its own container and padding */}
      
      {/* Separator placed within a container that matches HeroSection's content alignment */}
      <div className="container mx-auto max-w-screen-xl px-4">
        <Separator className="my-8" />
      </div>

      <ProductGrid /> {/* This component manages its own container and padding */}
      
      <CallToActionSection /> {/* This component manages its own container and padding */}
    </div>
  );
};

export default Index;