import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">SkilledConnects</h3>
            <p className="text-sm text-gray-600">
              Connect with top tech talent and bring your projects to life.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Clients</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">How it Works</Link></li>
              <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Find Talent</Link></li>
              <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Post a Job</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Freelancers</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Find Work</Link></li>
              <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Create Profile</Link></li>
              <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} SkilledConnects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};