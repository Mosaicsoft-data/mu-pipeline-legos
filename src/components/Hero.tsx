
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="container mx-auto py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Simplify</span> Your Data Pipelines
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Configure data pipelines like building blocks. Assemble, customize, and deploy with ease using a JSON-driven approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://mosaicsoft-data.github.io/mu-pipelines-doc/getting-started/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity px-6 py-6 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>
            <Link to="/docs">
            <Button variant="outline" className="px-6 py-6 text-lg">
              View Documentation
            </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="p-4 rounded-lg border bg-card shadow-lg">
            <div className="text-muted-foreground font-mono text-sm">pipeline.json</div>
            <div className="pipeline-animation-container">
              <div className="pipeline-component source-block">
                <div className="component-header">Source</div>
                <div className="component-body">
                  <pre className="text-xs md:text-xs">{` IngestCSV `}</pre>
                </div>
                <div className="data-particle-container">
                  {[...Array(3)].map((_, i) => (
                    <div key={`source-${i}`} className="data-particle" style={{animationDelay: `${i * 0.8}s`}}></div>
                  ))}
                </div>
              </div>
              
              <div className="flow-arrow">→</div>
              
              <div className="pipeline-component transform-block">
                <div className="component-header">Transform</div>
                <div className="component-body">
                  <pre className="text-xs md:text-xs">{` TransformSQL `}</pre>
                </div>
                <div className="data-particle-container">
                  {[...Array(3)].map((_, i) => (
                    <div key={`transform-${i}`} className="data-particle" style={{animationDelay: `${i * 0.8 + 0.4}s`}}></div>
                  ))}
                </div>
              </div>
              
              <div className="flow-arrow">→</div>
              
              <div className="pipeline-component destination-block">
                <div className="component-header">Destination</div>
                <div className="component-body">
                  <pre className="text-xs md:text-xs">{`DestinationIceberg`}</pre>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-lg bg-accent opacity-30 animate-float"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg bg-secondary opacity-30 staggered-float-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
