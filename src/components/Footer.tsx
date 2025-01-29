import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { HowItWorksSection } from "./footer/HowItWorksSection";
import { FindTalentSection } from "./footer/FindTalentSection";
import { FindWorkSection } from "./footer/FindWorkSection";
import { ResourcesSection } from "./footer/ResourcesSection";
import { LegalSection } from "./footer/LegalSection";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">SkilledConnects</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Connect with top tech talent and bring your projects to life.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                aria-label="Visit our GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                aria-label="Visit our LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                aria-label="Visit our Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <HowItWorksSection />
          <FindTalentSection />
          <FindWorkSection />
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <ResourcesSection />
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <LegalSection />
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} SkilledConnects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};