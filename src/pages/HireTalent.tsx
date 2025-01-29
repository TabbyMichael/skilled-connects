import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/supabase';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

type Job = Database['public']['Tables']['jobs']['Row'];

export default function HireTalent() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [expertise, setExpertise] = useState('');
  const [loading, setLoading] = useState(false);
  const [jobForm, setJobForm] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    description: '',
    salary_range: '',
    skills_required: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleJobTypeChange = (value: string) => {
    setJobForm(prev => ({
      ...prev,
      type: value
    }));
  };

  const handlePostJob = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError) throw userError;

      const { error } = await supabase.from('jobs').insert({
        ...jobForm,
        posted_by: userData.user.id,
        status: 'active',
      });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Job posted successfully',
      });

      // Reset form
      setJobForm({
        title: '',
        company: '',
        location: '',
        type: '',
        description: '',
        salary_range: '',
        skills_required: [],
      });
    } catch (error) {
      console.error('Error posting job:', error);
      toast({
        title: 'Error',
        description: 'Failed to post job. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4">Hire Top Talent</h1>
          <p className="text-lg sm:text-xl text-muted-foreground">Connect with skilled professionals for your projects</p>
        </div>

        {/* Post a Job Section */}
        <Card className="mb-8 sm:mb-12">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Post a Job</CardTitle>
            <CardDescription>Reach thousands of qualified professionals</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePostJob} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Job Title</label>
                  <Input
                    name="title"
                    value={jobForm.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Senior Frontend Developer"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input
                    name="company"
                    value={jobForm.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Input
                    name="location"
                    value={jobForm.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Remote, New York, etc."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Job Type</label>
                  <Select value={jobForm.type} onValueChange={handleJobTypeChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Salary Range</label>
                  <Input
                    name="salary_range"
                    value={jobForm.salary_range}
                    onChange={handleInputChange}
                    placeholder="e.g. $80,000 - $100,000"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Job Description</label>
                <Textarea
                  name="description"
                  value={jobForm.description}
                  onChange={handleInputChange}
                  placeholder="Describe the role, requirements, and responsibilities"
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
                {loading ? 'Posting...' : 'Post Job'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}