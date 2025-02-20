
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Bridging the Gap in Text-Based Emotion Detection",
    description: "Developed a multi-label emotion classification model for detecting emotions from text using Deep Learning and NLP tools.",
    duration: "2 Months",
    technologies: ["TensorFlow", "Keras", "PyTorch", "NLTK", "SpaCy"],
    demoLink: "https://www.linkedin.com/in/muhammadsohail951/",
    githubLink: "https://github.com/CallSohail"
  },
  {
    title: "Parkinson's Disease Progression Prediction",
    description: "Built an ML system to identify subtypes of Parkinson's disease and predict progression using advanced machine learning techniques.",
    duration: "4 Months",
    technologies: ["XGBoost", "LightGBM", "Pandas", "Scikit-learn", "Streamlit"],
    demoLink: "https://www.linkedin.com/in/muhammadsohail951/",
    githubLink: "https://github.com/CallSohail"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-primary mb-4">Duration: {project.duration}</p>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
