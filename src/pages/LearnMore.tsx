import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">How SkilledConnects Works</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your gateway to connecting with top tech talent and exciting opportunities
          </p>
        </motion.div>

        {/* For Clients Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">For Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Post Your Project</h3>
              <p className="text-muted-foreground">Describe your project needs and requirements in detail. It's free and only takes a few minutes.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Review Talent</h3>
              <p className="text-muted-foreground">Browse through our pool of pre-vetted tech professionals and their portfolios.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Hire & Collaborate</h3>
              <p className="text-muted-foreground">Select the best match for your project and start working together seamlessly.</p>
            </div>
          </div>
        </motion.section>

        {/* For Freelancers Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">For Freelancers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-muted-foreground">Showcase your skills, experience, and portfolio to stand out to potential clients.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Get Verified</h3>
              <p className="text-muted-foreground">Complete our verification process to demonstrate your expertise and reliability.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Start Working</h3>
              <p className="text-muted-foreground">Apply for projects that match your skills and start earning with flexible opportunities.</p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary-hover transition-all transform hover:scale-105"
            >
              Create Account
            </Link>
            <Link
              to="/browse-talent"
              className="px-8 py-3 rounded-lg bg-secondary text-black hover:bg-secondary-hover transition-all transform hover:scale-105"
            >
              Browse Talent
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}