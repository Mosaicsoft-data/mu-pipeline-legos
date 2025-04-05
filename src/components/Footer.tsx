import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Mu-Pipelines + Community */}
          <div>
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">μ</div>
              <span className="font-bold text-xl">Mu-Pipelines</span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-4">
              Simplifying data pipelines with a configuration-driven approach.
            </p>

            {/* Community heading */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold text-xl">Community</span>
            </div>

            {/* Icons */}
            <div className="flex space-x-4">
              {/* GitHub */}
              <a href="https://github.com/Mosaicsoft-data" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484..."></path>
                </svg>
              </a>

              {/* Slack */}
              <a href="https://join.slack.com/t/mosaicsoftworkspace/shared_invite/zt-2zhwg2g5w-pxfrQYkn4MHSHfwhsoOtpw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 122.8 122.8" aria-hidden="true">
                  <path d="M30.3 76.8c0 6.7-5.5 12.2..."></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Other columns can go here if needed */}
          {/* <div>Column 2</div> */}
          {/* <div>Column 3</div> */}
          {/* <div>Column 4</div> */}
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MosaicSoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
