
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="py-4 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">μ</div>
            <span className="font-bold text-xl">Mu-Pipelines</span>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/features" className="text-foreground/80 hover:text-foreground transition-colors">Features</Link>
          <Link to="/pipeline-builder" className="text-foreground/80 hover:text-foreground transition-colors">Pipeline Builder</Link>
          <Link to="/solution-kits" className="text-foreground/80 hover:text-foreground transition-colors">Solution Kits</Link>
          <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
          <Link to="/docs" className="text-foreground/80 hover:text-foreground transition-colors">Docs</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="https://github.com/mosaicsoft/mu-pipelines" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
          </a>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
