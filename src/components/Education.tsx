
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold">MSc M2 in Data Science and Network Intelligence</h3>
              <p className="text-primary mb-2">Institut Polytechnique de Paris, France | Sep 2024 – Current</p>
              <p className="text-muted-foreground">
                Coursework: Data Science, Deep Learning, Blockchain, IoT, Distributed Networking, Business Modelling
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
              <p className="text-primary mb-2">University of Malakand, Pakistan | Aug 2019 – Sep 2023</p>
              <p className="text-muted-foreground">
                Coursework: Programming, Web Dev, Database Management, OS, Networking, AI, Mathematics & Statistics
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold">Higher Secondary School Diploma (Pre-Engineering)</h3>
              <p className="text-primary mb-2">Govt. Postgraduate Jahanzeb College, Pakistan | Aug 2017 – Jul 2019</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
