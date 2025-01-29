import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
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

export default function HireTalent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expertise, setExpertise] = useState('');

  // Mock talent data - will be replaced with real API data
  const talents = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Full Stack Developer',
      expertise: ['React', 'Node.js', 'TypeScript', 'AWS'],
      hourlyRate: '$85',
      rating: 4.9,
      completedProjects: 45,
      location: 'San Francisco, CA',
      availability: 'Full-time',
      bio: 'Full stack developer with 8+ years of experience in building scalable web applications...',
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'UI/UX Designer',
      expertise: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      hourlyRate: '$65',
      rating: 4.8,
      completedProjects: 38,
      location: 'Remote',
      availability: 'Contract',
      bio: 'Passionate designer focused on creating intuitive and beautiful user experiences...',
    },
  ];

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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Job Title</label>
                  <Input placeholder="e.g. Senior Frontend Developer" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input placeholder="Your company name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Input placeholder="e.g. Remote, New York, etc." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Job Type</label>
                  <Select>
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
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Job Description</label>
                <Textarea
                  placeholder="Describe the role, requirements, and responsibilities"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full sm:w-auto">Post Job</Button>
            </form>
          </CardContent>
        </Card>

        {/* Browse Talent Section */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-semibold">Browse Available Talent</h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Input
                placeholder="Search by skill or title"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-[250px]"
              />
              <Select value={expertise} onValueChange={setExpertise}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Expertise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="writing">Writing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {talents.map((talent) => (
              <Card key={talent.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">{talent.name}</h3>
                      <p className="text-muted-foreground">{talent.title}</p>
                    </div>
                    <Button variant="outline" className="w-full sm:w-auto">View Profile</Button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {talent.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="text-muted-foreground">💰 {talent.hourlyRate}/hour</div>
                    <div className="text-muted-foreground">⭐ {talent.rating} ({talent.completedProjects} projects)</div>
                    <div className="text-muted-foreground">📍 {talent.location}</div>
                    <div className="text-muted-foreground">🕒 {talent.availability}</div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">{talent.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}