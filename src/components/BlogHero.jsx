import { motion } from "framer-motion";
import './bhero.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Insights & Articles
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Stay informed on the latest trends in technology and industry insights with our
          articles and resources.
        </motion.p>
      </div>
    </section>
  );
}