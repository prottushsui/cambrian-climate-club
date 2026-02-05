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

const LeadershipSpecialRecognitionPage: React.FC = () => {
  const specialRecognitionMember = leadershipTeam.find((member) => member.specialRecognition) as Member;

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Special Recognition"
        subtitle="Lead Developer of the Website"
      />
      <section aria-labelledby="special-recognition">
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

export default LeadershipSpecialRecognitionPage;
