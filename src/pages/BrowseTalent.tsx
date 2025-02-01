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
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock } from 'lucide-react';

type Talent = Database['public']['Tables']['profiles']['Row'];

export default function BrowseTalent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expertise, setExpertise] = useState('');
  const [loading, setLoading] = useState(true);
  const [talents, setTalents] = useState<Talent[]>([]);

  useEffect(() => {
    fetchTalents();
  }, []);

  const fetchTalents = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('profiles')
        .select('*')
        .eq('role', 'freelancer')
        .order('created_at', { ascending: false });

      if (searchQuery) {
        query = query.or(`name.ilike.%${searchQuery}%,skills.cs.{${searchQuery}}`);
      }
      if (expertise) {
        query = query.contains('expertise', [expertise]);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setTalents(data || []);
    } catch (error) {
      console.error('Error fetching talents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchTalents();
  };

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4">Browse Talent</h1>
          <p className="text-lg sm:text-xl text-muted-foreground">Find the perfect professional for your project</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-card rounded-lg shadow-lg p-4 sm:p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Input
                type="text"
                placeholder="Search by name or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Select value={expertise} onValueChange={setExpertise}>
                <SelectTrigger>
                  <SelectValue placeholder="Select expertise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend">Frontend Development</SelectItem>
                  <SelectItem value="backend">Backend Development</SelectItem>
                  <SelectItem value="fullstack">Full Stack Development</SelectItem>
                  <SelectItem value="mobile">Mobile Development</SelectItem>
                  <SelectItem value="ui/ux">UI/UX Design</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <Button onClick={handleSearch} className="w-full">
                Search Talents
              </Button>
            </div>
          </div>
        </div>

        {/* Talents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-12">Loading...</div>
          ) : talents.length === 0 ? (
            <div className="col-span-full text-center py-12">No talents found</div>
          ) : (
            talents.map((talent) => (
              <Card key={talent.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={talent.avatar_url || '/placeholder.svg'}
                          alt={talent.full_name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{talent.full_name}</h3>
                        <p className="text-sm text-muted-foreground">{talent.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">N/A</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {talent.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      ${talent.hourly_rate}/hr
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">{talent.bio}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {talent.skills?.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                    {(talent.skills?.length || 0) > 3 && (
                      <Badge variant="secondary">+{(talent.skills?.length || 0) - 3} more</Badge>
                    )}
                  </div>

                  <Button className="w-full mt-4" variant="outline">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}