import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import MemberCard from '@/components/MemberCard';
import { leadershipTeam } from '@/data/content';

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
  const specialRecognitionMember = leadershipTeam.find((member) => member.specialRecognition);
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

        {specialRecognitionMember && (
          <div className="mt-12">
            <SectionHeader title="Special Recognition" />
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.2, stiffness: 100 }}
            >
              <MemberCard member={specialRecognitionMember} />
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
};

export default LeadershipCurrentPage;
