import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import MemberCard from '@/components/MemberCard';
import { leadershipTeam } from '@/data/content';
import type { Member } from '@/types/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const LeadershipCurrentPage: React.FC = () => {
  const specialRecognitionMember = leadershipTeam.find((member) => member.specialRecognition) as Member;
  const leadershipWithoutSpecial = leadershipTeam.filter((member) => !member.specialRecognition);

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Leadership (Current Members)"
        subtitle="Current Executive Members"
      />

      <section className="mb-16" aria-labelledby="core-leadership">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {leadershipWithoutSpecial.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </section>

      <section aria-labelledby="special-recognition">
        <SectionHeader title="Special Recognition" />
        <motion.div
          className="max-w-md mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <MemberCard member={specialRecognitionMember} />
        </motion.div>
      </section>
    </div>
  );
};

export default LeadershipCurrentPage;
