import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Portfolio, Calculator } from "lucide-react";

export const FindWorkSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Find Work</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/portfolio-builder" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center gap-2">
            <Portfolio className="h-4 w-4" />
            Portfolio Builder
          </Link>
        </li>
        <li>
          <Link to="/rate-calculator" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Rate Calculator
          </Link>
        </li>
      </ul>
      <Button variant="outline" className="w-full mt-4">
        Create Your Profile
      </Button>
    </div>
  );
};