import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, DollarSign, FileText } from "lucide-react";

export const FindTalentSection = () => {
  const handlePostJob = () => {
    window.location.href = '/hire';
  };
  return (
    <div className="space-y-4 w-full md:w-auto">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg md:text-xl">Find Talent</h3>
      <ul className="space-y-3 md:space-y-2">
        <li>
          <Link to="/browse-talent" className="text-sm md:text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center gap-2">
            <Search className="h-4 w-4 md:h-5 md:w-5" />
            Browse Talent
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="text-sm md:text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center gap-2">
            <DollarSign className="h-4 w-4 md:h-5 md:w-5" />
            Pricing Calculator
          </Link>
        </li>
        <li>
          <Link to="/templates" className="text-sm md:text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center gap-2">
            <FileText className="h-4 w-4 md:h-5 md:w-5" />
            Job Templates
          </Link>
        </li>
      </ul>
      <Button variant="outline" className="w-full mt-4 text-sm md:text-base py-2 md:py-3" onClick={handlePostJob}>
        Post a Job for Free
      </Button>
    </div>
  );
};