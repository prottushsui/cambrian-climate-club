
import React from 'react';
import { motion } from 'framer-motion';
import { leadershipTeam } from '../data/content';
import MemberCard from '../components/MemberCard';
import SectionHeader from '../components/SectionHeader';

const LeadershipPage: React.FC = () => {
  const specialRecognitionMember = leadershipTeam.find(m => m.specialRecognition);
  const otherMembers = leadershipTeam.filter(m => !m.specialRecognition);
  
  return (
    <div className="bg-cloud">
      {/* Header Section */}
      <section className="container-premium py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Our Leadership"
            subtitle="Dedicated students guiding our club's vision and creating lasting impact."
          />
        </motion.div>
      </section>

      {/* Leadership Team Grid */}
      <section className="container-premium pb-24">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {otherMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </section>

      {/* Special Recognition Section */}
      {specialRecognitionMember && (
        <section className="bg-white border-t border-sand/40 py-20">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-header mb-16 text-center"
            >
              <h2 className="section-title">Special Recognition</h2>
              <p className="section-subtitle">Honoring exceptional contributions to our club.</p>
            </motion.div>

            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <MemberCard member={specialRecognitionMember} featured />
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LeadershipPage;
