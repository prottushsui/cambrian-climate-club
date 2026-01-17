
import React from 'react';
import { motion } from 'framer-motion';
import { leadershipTeam } from '../data/content';
import MemberCard from '../components/MemberCard';
import SectionHeader from '../components/SectionHeader';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const LeadershipPage: React.FC = () => {
  const specialRecognitionMember = leadershipTeam.find(m => m.specialRecognition);
  const otherMembers = leadershipTeam.filter(m => !m.specialRecognition); // Optional separation if needed, currently mapping all
  
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Our Leadership"
        subtitle="Meet the dedicated students guiding our club's vision and activities."
      />
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {leadershipTeam.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </motion.div>
      
      {specialRecognitionMember && (
        <div className="mt-20">
            <SectionHeader title="Special Recognition" />
            <motion.div 
                className="max-w-md mx-auto"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2, stiffness: 100 }}
            >
                 <MemberCard member={specialRecognitionMember} />
            </motion.div>
        </div>
      )}
    </div>
  );
};

export default LeadershipPage;
