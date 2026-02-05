import React from 'react';
import { motion } from 'framer-motion';
import { leadershipTeam, currentMembers, alumniMembers, advisoryCommittee } from '../data/content';
import MemberCard from '../components/MemberCard';
import SectionHeader from '../components/SectionHeader';
import type { Member, ExecutiveMember, Advisor } from '../types/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const ExecutiveMemberCard: React.FC<{ member: ExecutiveMember }> = ({ member }) => (
  <motion.div 
    className="editorial-card p-6 text-center h-full flex flex-col items-center"
    variants={itemVariants}
    whileHover={{ 
      y: -5,
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -6px rgba(0, 0, 0, 0.1)" 
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="w-16 h-16 bg-sandstone-200 rounded-full flex items-center justify-center mb-4 mx-auto">
      <span className="text-lg font-bold text-charcoal-700">ID</span>
    </div>
    <h3 className="text-lg font-semibold text-charcoal-900">{member.name}</h3>
    <p className="text-charcoal-600 font-medium mt-1">{member.role}</p>
    <p className="text-sm text-charcoal-500 mt-1 font-mono">{member.id}</p>
  </motion.div>
);

const AdvisorCard: React.FC<{ advisor: Advisor }> = ({ advisor }) => (
  <motion.div 
    className="editorial-card overflow-hidden text-center h-full flex flex-col"
    variants={itemVariants}
    whileHover={{ 
      y: -5,
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -6px rgba(0, 0, 0, 0.1)" 
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="h-48 bg-sandstone-100 overflow-hidden relative">
      <img 
        src={advisor.imageUrl} 
        alt={advisor.name} 
        className="w-full h-full object-contain" 
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = '/images/default-avatar.png';
        }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-charcoal-900">{advisor.name}</h3>
      <p className="text-charcoal-600 font-medium mt-1">{advisor.role}</p>
    </div>
  </motion.div>
);

const CombinedLeadershipPage: React.FC = () => {
  const specialRecognitionMember = leadershipTeam.find(m => m.specialRecognition);
  const leadershipWithoutSpecial = leadershipTeam.filter(m => !m.specialRecognition);

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Our Leadership Structure"
        subtitle="Meet the dedicated individuals driving our mission forward."
      />

      {/* Core Leadership */}
      <section className="mb-16" aria-labelledby="core-leadership">
        <SectionHeader 
          title="Core Leadership Team" 
          subtitle="The executive team responsible for strategic direction and operations." 
        />
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
              transition={{ type: "spring", delay: 0.2, stiffness: 100 }}
            >
              <MemberCard member={specialRecognitionMember} />
            </motion.div>
          </div>
        )}
      </section>

      {/* Executive Committee */}
      <section className="mb-16" aria-labelledby="executive-committee">
        <SectionHeader 
          title="Executive Committee" 
          subtitle="The active members implementing our initiatives." 
        />
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-charcoal-900 mb-6 text-center">Current Executive Members</h3>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {currentMembers.map((member) => (
                <ExecutiveMemberCard key={member.id} member={member} />
              ))}
            </motion.div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-charcoal-900 mb-6 text-center">Alumni Executive Members</h3>
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
          </div>
        </div>
      </section>

      {/* Advisory Committee */}
      <section aria-labelledby="advisory-committee">
        <SectionHeader 
          title="Advisory Committee" 
          subtitle="Experienced mentors providing guidance and oversight." 
        />
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

export default CombinedLeadershipPage;
