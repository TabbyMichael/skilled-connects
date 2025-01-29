import { Link } from "react-router-dom";
import { BookOpen, HelpCircle, Building2, Mail } from "lucide-react";

export const ResourcesSection = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">Resources</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/blog" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Blog
            </Link>
          </li>
          <li>
            <Link to="/faq" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">Company</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};