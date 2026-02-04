import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import { alumniMembers } from '@/data/content';
import { ExecutiveMemberCard } from '@/components/LeadershipCards';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const LeadershipAlumniPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Alumni"
        subtitle="Alumni Executive Members"
      />

      <section aria-labelledby="alumni-executive-members">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {alumniMembers.map((member) => (
            <ExecutiveMemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default LeadershipAlumniPage;
