import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users2, Code2, Trophy, Building2 } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const stats = [
  { id: 1, label: 'Active Freelancers', value: '5000+', icon: Users2 },
  { id: 2, label: 'Projects Completed', value: '10000+', icon: Code2 },
  { id: 3, label: 'Success Rate', value: '95%', icon: Trophy },
  { id: 4, label: 'Client Companies', value: '2000+', icon: Building2 },
];

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO & Founder',
    bio: 'Tech entrepreneur with 15+ years of experience in building digital platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Head of Operations',
    bio: 'Former tech recruiter turned operations expert, passionate about connecting talent.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Full-stack developer and system architect with a focus on scalable solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&fit=crop'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Community Manager',
    bio: 'Community building expert focused on creating meaningful connections.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop'
  }
];

export default function About() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({ ...stat, value: '0' })));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedStats(stats);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-foreground"
            >
              Connecting Talent with Opportunity
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              SkilledConnects is revolutionizing how businesses find and collaborate with tech talent.
              Our mission is to create meaningful connections that drive innovation and success.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {animatedStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                  className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of experts is dedicated to transforming the way businesses and talent connect.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: member.id * 0.1 }}
                className="bg-card rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}