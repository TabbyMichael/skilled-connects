import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FreelancerCard } from "@/components/FreelancerCard";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Code, Smartphone, Layout, Server, Database, Shield } from "lucide-react";

const featuredFreelancers = [
  {
    name: "Sarah Chen",
    title: "Full Stack Developer",
    rate: "$95/hr",
    image: "/placeholder.svg",
    skills: ["React", "Node.js", "TypeScript"],
  },
  {
    name: "David Kim",
    title: "UI/UX Designer",
    rate: "$85/hr",
    image: "/placeholder.svg",
    skills: ["Figma", "User Research", "Prototyping"],
  },
  {
    name: "Maria Garcia",
    title: "DevOps Engineer",
    rate: "$105/hr",
    image: "/placeholder.svg",
    skills: ["AWS", "Docker", "Kubernetes"],
  },
];

const benefits = [
  {
    title: "Verified Professionals",
    description: "All freelancers are pre-vetted and skill-tested",
  },
  {
    title: "Secure Payments",
    description: "Protected payments and milestone-based releases",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for any concerns",
  },
];

const categories = [
  { name: "Web Development", icon: Code },
  { name: "Mobile Development", icon: Smartphone },
  { name: "UI/UX Design", icon: Layout },
  { name: "DevOps & Cloud", icon: Server },
  { name: "Data Science", icon: Database },
  { name: "Cybersecurity", icon: Shield },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Featured Talent</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Work with our most sought-after professionals who consistently deliver exceptional results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFreelancers.map((freelancer, index) => (
            <motion.div
              key={freelancer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FreelancerCard {...freelancer} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We provide the best platform for connecting with top tech talent
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore opportunities in various tech domains
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="outline"
                  className="w-full h-full min-h-[100px] text-lg font-medium hover:bg-accent flex flex-col gap-3 items-center justify-center"
                >
                  <Icon className="h-6 w-6" />
                  {category.name}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground mb-8">
              Join thousands of businesses and freelancers who trust our platform
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-primary hover:text-primary-hover"
            >
              Sign Up Now
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
