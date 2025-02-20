
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Agent for Automated Data Analysis",
    description: "Built an intelligent agent using LangChain and OpenAI that autonomously analyzes datasets, generates insights, and creates visualization recommendations.",
    duration: "3 Months",
    technologies: ["LangChain", "OpenAI API", "Python", "Streamlit", "Pandas"],
    demoLink: "https://www.linkedin.com/in/muhammadsohail951/",
    githubLink: "https://github.com/CallSohail"
  },
  {
    title: "RAG-Enhanced Document Search Engine",
    description: "Developed a Retrieval-Augmented Generation system for intelligent document search and question answering using vector embeddings and LLMs.",
    duration: "4 Months",
    technologies: ["LlamaIndex", "OpenAI", "FastAPI", "PostgreSQL", "Redis"],
    demoLink: "https://www.linkedin.com/in/muhammadsohail951/",
    githubLink: "https://github.com/CallSohail"
  },
  {
    title: "LLM-Powered Code Assistant",
    description: "Created a specialized code assistant using fine-tuned LLMs to help developers with code generation, debugging, and optimization.",
    duration: "3 Months",
    technologies: ["PyTorch", "Transformers", "FastAPI", "Redis", "Docker"],
    demoLink: "https://www.linkedin.com/in/muhammadsohail951/",
    githubLink: "https://github.com/CallSohail"
  },
  {
    title: "Bridging the Gap in Text-Based Emotion Detection",
    description: "Developed a multi-label emotion classification model for detecting emotions from text using Deep Learning and NLP tools.",
    duration: "2 Months",
    technologies: ["TensorFlow", "Keras", "PyTorch", "NLTK", "SpaCy"],
    demoLink: "https://www.linkedin.com/in/muhammadsohail951/",
    githubLink: "https://github.com/CallSohail"
  },
  {
    title: "Autonomous Trading Bot with Reinforcement Learning",
    description: "Implemented a trading bot using Deep Reinforcement Learning to make autonomous trading decisions based on market data.",
    duration: "5 Months",
    technologies: ["PyTorch", "Stable-Baselines3", "pandas-ta", "FastAPI", "MongoDB"],
    demoLink: "https://www.linkedin.com/in/muhammadsohail951/",
    githubLink: "https://github.com/CallSohail"
  },
  {
    title: "Multi-Modal AI Content Generator",
    description: "Built a system that generates coordinated text, image, and audio content using multiple AI models and ensures content coherence.",
    duration: "4 Months",
    technologies: ["Stable Diffusion", "Whisper", "GPT-3", "FastAPI", "React"],
    demoLink: "https://www.linkedin.com/in/muhammadsohail951/",
    githubLink: "https://github.com/CallSohail"
  },
  {
    title: "Real-time Video Analysis System",
    description: "Developed a real-time video analysis system using computer vision and deep learning for object detection and activity recognition.",
    duration: "3 Months",
    technologies: ["OpenCV", "YOLO", "TensorFlow", "Redis", "FastAPI"],
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
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
