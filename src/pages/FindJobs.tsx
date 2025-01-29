import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/supabase';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Job = Database['public']['Tables']['jobs']['Row'];

export default function FindJobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const jobsPerPage = 10;

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });

      if (searchQuery) {
        query = query.ilike('title', `%${searchQuery}%`);
      }
      if (location) {
        query = query.ilike('location', `%${location}%`);
      }
      if (jobType) {
        query = query.eq('type', jobType);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate total pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Get current jobs for pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchJobs();
  };

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4">Find Your Next Opportunity</h1>
          <p className="text-lg sm:text-xl text-muted-foreground">Browse through thousands of job opportunities</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-card rounded-lg shadow-lg p-3 sm:p-5 mb-5 sm:mb-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div>
              <Input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-9"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-9"
              />
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <Select value={jobType} onValueChange={setJobType}>
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-3 flex justify-center lg:justify-end">
            <Button onClick={handleSearch} className="w-full sm:w-auto px-6 h-9">
              Search Jobs
            </Button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-3 sm:space-y-5">
          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : currentJobs.length === 0 ? (
            <div className="text-center py-8">No jobs found</div>
          ) : (
            currentJobs.map((job) => (
              <div key={job.id} className="bg-card rounded-lg shadow p-3 sm:p-5 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-5">
                  <div className="w-full sm:w-auto">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">{job.title}</h3>
                    <p className="text-muted-foreground mt-1">{job.company}</p>
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto min-w-[120px]">
                    Apply Now
                  </Button>
                </div>
                <div className="mt-3 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">📍 {job.location}</div>
                  <div className="flex items-center gap-2">💼 {job.type}</div>
                  <div className="flex items-center gap-2">💰 {job.salary_range}</div>
                  <div className="flex items-center gap-2">📅 Posted {new Date(job.created_at).toLocaleDateString()}</div>
                </div>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground line-clamp-2 hover:line-clamp-none transition-all duration-200">
                  {job.description}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {!loading && jobs.length > 0 && (
          <div className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-2">
            <Button
              variant="outline"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-20 sm:w-24"
            >
              Previous
            </Button>
            <div className="flex flex-wrap justify-center gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNumber;
                if (totalPages <= 5) {
                  pageNumber = i + 1;
                } else if (currentPage <= 3) {
                  pageNumber = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNumber = totalPages - 4 + i;
                } else {
                  pageNumber = currentPage - 2 + i;
                }
                return (
                  <Button
                    key={pageNumber}
                    variant={currentPage === pageNumber ? "default" : "outline"}
                    onClick={() => paginate(pageNumber)}
                    className="w-8 sm:w-10 px-0"
                  >
                    {pageNumber}
                  </Button>
                );
              })}
            </div>
            <Button
              variant="outline"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-20 sm:w-24"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}