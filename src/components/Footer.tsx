
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">μ</div>
              <span className="font-bold text-xl">Mu-Pipelines</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Simplifying data pipelines with a configuration-driven approach.
            </p>
          </div>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

            <div className="flex items-center space-x-2 mb-4">
            <span className="font-bold text-xl">Community</span>

            <div className="flex space-x-4">
              <a href="https://github.com/Mosaicsoft-data" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>

              <a href="https://join.slack.com/t/mosaicsoftworkspace/shared_invite/zt-2zhwg2g5w-pxfrQYkn4MHSHfwhsoOtpw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 122.8 122.8" aria-hidden="true">
                  <path d="M30.3 76.8c0 6.7-5.5 12.2-12.2 12.2S6 83.5 6 76.8s5.5-12.2 12.2-12.2h12.1v12.2zm6.1 0c0-6.7 5.5-12.2 12.2-12.2s12.2 5.5 12.2 12.2v30.4c0 6.7-5.5 12.2-12.2 12.2S36.4 113.9 36.4 107V76.8zM46.4 30.3c-6.7 0-12.2-5.5-12.2-12.2S39.7 6 46.4 6s12.2 5.5 12.2 12.2v12.1H46.4zm0 6.1c6.7 0 12.2 5.5 12.2 12.2s-5.5 12.2-12.2 12.2H16c-6.7 0-12.2-5.5-12.2-12.2s5.5-12.2 12.2-12.2h30.4zM92.5 46.4c0-6.7 5.5-12.2 12.2-12.2s12.2 5.5 12.2 12.2-5.5 12.2-12.2 12.2H92.5V46.4zm-6.1 0c0 6.7-5.5 12.2-12.2 12.2s-12.2-5.5-12.2-12.2V16c0-6.7 5.5-12.2 12.2-12.2s12.2 5.5 12.2 12.2v30.4zM76.4 92.5c6.7 0 12.2 5.5 12.2 12.2s-5.5 12.2-12.2 12.2-12.2-5.5-12.2-12.2v-12.1h12.2zm0-6.1c-6.7 0-12.2-5.5-12.2-12.2s5.5-12.2 12.2-12.2h30.4c6.7 0 12.2 5.5 12.2 12.2s-5.5 12.2-12.2 12.2H76.4z" />
                  </svg>
              </a>
            </div>
          </div>   
          </div>   
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
