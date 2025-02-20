
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="glass-card p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Data Analyst Intern</h3>
              <p className="text-primary mb-2">CodeClause Pvt Ltd (Remote) | Oct 2023 – Apr 2024</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Managed missing values and standardized datasets for improved data quality</li>
                <li>Applied linear regression and hypothesis testing to extract meaningful insights</li>
                <li>Created interactive dashboards to assist in decision-making processes</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
