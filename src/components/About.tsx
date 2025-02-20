
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="glass-card p-8">
            <p className="text-lg text-muted-foreground mb-6">
              Currently pursuing my MSc M2 in Data Science & Network Intelligence at Institut Polytechnique de Paris, France, 
              I am passionate about leveraging AI and Machine Learning to solve complex problems. With a Bachelor's degree in 
              Computer Science from the University of Malakand, Pakistan, I've developed a strong foundation in programming 
              and data analysis.
            </p>
            <p className="text-lg text-muted-foreground">
              My journey in the field of Data Science has been driven by a deep fascination with AI, Machine Learning, and 
              Data-Driven Solutions. I am actively working on projects that combine cutting-edge technology with practical 
              applications, aiming to make meaningful contributions to the field.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
