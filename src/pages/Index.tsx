import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FreelancerCard } from "@/components/FreelancerCard";
import { motion } from "framer-motion";

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
    </div>
  );
};

export default Index;