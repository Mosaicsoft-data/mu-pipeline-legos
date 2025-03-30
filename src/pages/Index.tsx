
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PipelineBuilder from '@/components/PipelineBuilder';
import SolutionKits from '@/components/SolutionKits';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PipelineBuilder />
        <SolutionKits />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
