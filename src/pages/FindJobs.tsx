import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function FindJobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  // Mock job data - will be replaced with real API data
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      description: 'We are looking for an experienced frontend developer...',
      postedDate: '2024-01-15',
    },
    {
      id: 2,
      title: 'UX Designer',
      company: 'Design Studio',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$70,000 - $90,000',
      description: 'Seeking a talented UX designer to join our team...',
      postedDate: '2024-01-14',
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Find Your Next Opportunity</h1>
          <p className="text-xl text-muted-foreground">Browse through thousands of job opportunities</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-card rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Select value={jobType} onValueChange={setJobType}>
                <SelectTrigger>
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
          <div className="mt-4 flex justify-end">
            <Button>Search Jobs</Button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-card rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                  <p className="text-muted-foreground mt-1">{job.company}</p>
                </div>
                <Button variant="outline">Apply Now</Button>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                <div>📍 {job.location}</div>
                <div>💼 {job.type}</div>
                <div>💰 {job.salary}</div>
                <div>📅 Posted {new Date(job.postedDate).toLocaleDateString()}</div>
              </div>
              <p className="mt-4 text-muted-foreground">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}