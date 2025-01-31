import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export const LegalSection = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <Shield className="h-4 w-4" />
        <span>Trusted by 10,000+ tech teams</span>
      </div>
      
      <ul className="flex flex-wrap gap-4 text-sm">
        <li>
          <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link to="/cookie-policy" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            Cookie Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};