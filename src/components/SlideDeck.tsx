
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideProps {
  title: string;
  content: React.ReactNode;
  background?: string;
}

const Slide: React.FC<SlideProps> = ({ title, content, background = "bg-card" }) => (
  <Card className={`w-full h-full ${background} border-0 rounded-md overflow-hidden shadow-lg`}>
    <CardContent className="p-10 flex flex-col h-full">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="flex-grow">{content}</div>
    </CardContent>
  </Card>
);

interface SlideNavProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

const SlideNav: React.FC<SlideNavProps> = ({ currentSlide, totalSlides, onPrevious, onNext }) => (
  <div className="flex items-center justify-between mt-4">
    <Button 
      variant="outline" 
      size="icon" 
      onClick={onPrevious} 
      disabled={currentSlide === 0}
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>
    <div className="text-sm text-muted-foreground">
      {currentSlide + 1} / {totalSlides}
    </div>
    <Button 
      variant="outline" 
      size="icon" 
      onClick={onNext} 
      disabled={currentSlide === totalSlides - 1}
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
  </div>
);

const SlideDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideProps[] = [
    {
      title: "Mu-Pipelines",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-6xl font-bold text-primary mb-6">μ-Pipelines</div>
          <p className="text-xl text-center">The Modern Data Integration Solution</p>
        </div>
      ),
      background: "bg-gradient-to-r from-primary/10 to-secondary/10"
    },
    {
      title: "The Problem",
      content: (
        <div className="space-y-4">
          <p className="text-lg">Legacy ETL tools are:</p>
          <ul className="space-y-2 list-disc pl-6">
            <li>Complex and difficult to maintain</li>
            <li>Expensive to license and operate</li>
            <li>Slow to adapt to changing requirements</li>
            <li>Not designed for modern cloud environments</li>
          </ul>
        </div>
      )
    },
    {
      title: "Our Solution",
      content: (
        <div className="space-y-4">
          <p className="text-lg">Mu-Pipelines offers:</p>
          <ul className="space-y-2 list-disc pl-6">
            <li>Configuration-driven approach with JSON</li>
            <li>LEGO-like modular components</li>
            <li>Cloud-agnostic deployment options</li>
            <li>Enterprise-grade security and performance</li>
          </ul>
        </div>
      )
    },
    {
      title: "Key Features",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded-md bg-primary/5">
            <h3 className="font-semibold text-lg mb-2">JSON Configuration</h3>
            <p className="text-sm">Simple, readable pipeline definitions</p>
          </div>
          <div className="border p-4 rounded-md bg-primary/5">
            <h3 className="font-semibold text-lg mb-2">Cloud Agnostic</h3>
            <p className="text-sm">Deploy anywhere - cloud or on-prem</p>
          </div>
          <div className="border p-4 rounded-md bg-primary/5">
            <h3 className="font-semibold text-lg mb-2">Workflow Automation</h3>
            <p className="text-sm">Powerful scheduling and event triggers</p>
          </div>
          <div className="border p-4 rounded-md bg-primary/5">
            <h3 className="font-semibold text-lg mb-2">Monitoring</h3>
            <p className="text-sm">Real-time visibility into pipeline health</p>
          </div>
        </div>
      )
    },
    {
      title: "Why Choose Us",
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-primary">10x</div>
            <div>Faster development time than traditional ETL tools</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-primary">70%</div>
            <div>Lower total cost of ownership</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-primary">24/7</div>
            <div>Enterprise-grade support and monitoring</div>
          </div>
        </div>
      )
    },
    {
      title: "Get Started Today",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <p className="text-xl text-center max-w-md">
            Ready to modernize your data integration strategy?
          </p>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity px-8 py-6 text-lg">
            Schedule a Demo
          </Button>
        </div>
      ),
      background: "bg-gradient-to-r from-primary/10 to-secondary/10"
    }
  ];

  const handlePrevious = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="aspect-[16/9] w-full">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute w-full h-full transition-opacity duration-300 ${currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <Slide {...slide} />
          </div>
        ))}
      </div>
      <SlideNav 
        currentSlide={currentSlide} 
        totalSlides={slides.length} 
        onPrevious={handlePrevious} 
        onNext={handleNext}
      />
    </div>
  );
};

export default SlideDeck;
