import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FileText, UserPlus, Briefcase } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100">How It Works</h3>
      
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">For Clients</h4>
        <ul className="space-y-2">
          <li>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/signup" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    Sign Up
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Create your account in less than 2 minutes</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/post-job" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Post a Job
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Post a job in 5 minutes</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/hire" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 inline-flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Hire Talent
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Find and hire top tech talent</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        </ul>
      </div>
    </div>
  );
};