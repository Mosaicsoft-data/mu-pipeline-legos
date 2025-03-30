
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Github, FileText, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Data Pipelines?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Get started with Mu-Pipelines today and transform how your team builds and manages data infrastructure.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity px-6 py-6 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="https://github.com/mosaicsoft/mu-pipelines" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="px-6 py-6 text-lg">
              <Github className="mr-2 h-5 w-5" />
              Star on GitHub
            </Button>
          </a>
          <Link to="/docs">
            <Button variant="outline" className="px-6 py-6 text-lg">
              <FileText className="mr-2 h-5 w-5" />
              Read the Docs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
