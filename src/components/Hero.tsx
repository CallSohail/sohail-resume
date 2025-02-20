
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500">
            Muhammad Sohail
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Building the Future with AI | Transforming Data into Intelligence | Innovating through Machine Learning
          </p>
          <a
            href="#projects"
            className="inline-block bg-primary/90 hover:bg-primary text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
