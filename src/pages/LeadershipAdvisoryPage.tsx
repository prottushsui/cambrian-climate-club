import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import { advisoryCommittee } from '@/data/content';
import { AdvisorCard } from '@/components/LeadershipCards';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const LeadershipAdvisoryPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Advisory Committee"
        subtitle="Experienced mentors providing guidance and oversight."
      />
      <section aria-labelledby="advisory-committee">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {advisoryCommittee.map((advisor) => (
            <AdvisorCard key={advisor.name} advisor={advisor} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default LeadershipAdvisoryPage;
