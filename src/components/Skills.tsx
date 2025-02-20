
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Deep Learning", level: 90 },
      { name: "Natural Language Processing", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "Reinforcement Learning", level: 75 }
    ],
    icon: "🧠"
  },
  {
    title: "Data Engineering",
    skills: [
      { name: "ETL Pipelines", level: 85 },
      { name: "Data Warehousing", level: 80 },
      { name: "Stream Processing", level: 75 },
      { name: "Data Modeling", level: 85 }
    ],
    icon: "⚙️"
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 }
    ],
    icon: "💻"
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
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={category.skills}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                    >
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" width={100} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar
                        dataKey="level"
                        fill="url(#colorGradient)"
                        radius={[0, 4, 4, 0]}
                      />
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--primary)/0.5)" />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
