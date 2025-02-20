
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "Java", "SQL (MySQL, PostgreSQL)"]
  },
  {
    title: "Machine Learning & AI",
    skills: ["Supervised & Unsupervised Learning", "Deep Learning", "Model Training", "Feature Engineering"]
  },
  {
    title: "Big Data & Cloud Computing",
    skills: ["Apache Hadoop", "Spark"]
  },
  {
    title: "Data Analysis & Visualization",
    skills: ["Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "Jupyter Notebooks", "VS Code", "Streamlit"]
  },
  {
    title: "Operating Systems",
    skills: ["Linux", "Unix", "Windows"]
  },
  {
    title: "Methodologies",
    skills: ["Agile", "A/B Testing"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover-translate"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
