import { motion } from "framer-motion";

interface FreelancerCardProps {
  name: string;
  title: string;
  rate: string;
  image: string;
  skills: string[];
}

export const FreelancerCard = ({ name, title, rate, image, skills }: FreelancerCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100"
    >
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600">{title}</p>
          <p className="text-primary font-medium">{rate}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-sm bg-accent text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};