import React from 'react';
import { motion } from 'framer-motion';
import {
  leadershipTeam,
  specialRecognition,
  currentMembers,
  alumniMembers,
  advisoryCommittee,
} from '../data/content';
import MemberCard from '../components/MemberCard';
import SectionHeader from '../components/SectionHeader';
import type {
  ExecutiveMember,
  Advisor,
  SpecialRecognitionMember,
} from '../types/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const ExecutiveMemberCard: React.FC<{ member: ExecutiveMember }> = ({
  member,
}) => (
  <motion.div
    className="editorial-card p-6 text-center h-full flex flex-col items-center"
    variants={itemVariants}
    whileHover={{
      y: -8,
      scale: 1.03,
      boxShadow:
        '0 18px 30px -8px rgba(0, 0, 0, 0.14), 0 12px 12px -10px rgba(0, 0, 0, 0.12)',
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    <div className="w-16 h-16 bg-sandstone-200 rounded-full flex items-center justify-center mb-4 mx-auto">
      <span className="text-lg font-bold text-charcoal-700">ID</span>
    </div>
    <h3 className="text-lg font-semibold text-charcoal-900">{member.name}</h3>
    <p className="text-charcoal-600 font-medium mt-1">{member.role}</p>
    <p className="text-sm text-charcoal-500 mt-1 font-mono">{member.id}</p>
  </motion.div>
);

const SpecialRecognitionCard: React.FC<{
  member: SpecialRecognitionMember;
}> = ({ member }) => (
  <motion.div
    className="editorial-card overflow-hidden text-center h-full flex flex-col transform-gpu"
    variants={itemVariants}
    whileHover={{
      y: -14,
      scale: 1.03,
      boxShadow:
        '0 30px 40px -8px rgb(0 0 0 / 0.16), 0 14px 12px -8px rgb(0 0 0 / 0.12)',
    }}
    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
  >
    <div className="relative h-64 bg-sandstone-100 overflow-hidden">
      <motion.img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-full object-contain"
        loading="lazy"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
      />
      <motion.div
        className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: 'spring' }}
      >
        {member.badge}
      </motion.div>
    </div>
    <div className="p-6 flex-grow flex flex-col justify-center relative z-10 bg-white">
      <h3 className="text-xl font-semibold text-charcoal-900">{member.name}</h3>
      <p className="text-primary-700 font-semibold mt-2">{member.title}</p>
      <p className="text-amber-600 text-sm font-bold uppercase tracking-wide mt-3">
        {member.badge}
      </p>
    </div>
  </motion.div>
);

const AdvisorCard: React.FC<{ advisor: Advisor }> = ({ advisor }) => (
  <motion.div
    className="editorial-card overflow-hidden text-center h-full flex flex-col"
    variants={itemVariants}
    whileHover={{
      y: -8,
      scale: 1.03,
      boxShadow:
        '0 18px 30px -8px rgba(0, 0, 0, 0.14), 0 12px 12px -10px rgba(0, 0, 0, 0.12)',
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    <div className="h-48 bg-sandstone-100 overflow-hidden relative">
      <img
        src={advisor.imageUrl}
        alt={advisor.name}
        className="w-full h-full object-contain"
        onError={e => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = '/images/default-avatar.png';
        }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-charcoal-900">
        {advisor.name}
      </h3>
      <p className="text-charcoal-600 font-medium mt-1">{advisor.role}</p>
    </div>
  </motion.div>
);

const CombinedLeadershipPage: React.FC = () => {
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
          viewport={{ once: true, margin: '-50px' }}
        >
          {leadershipTeam.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </section>

      {/* Special Recognition */}
      <section
        className="mb-16 border-t border-sandstone-200 pt-16"
        aria-labelledby="special-recognition"
      >
        <SectionHeader
          title="Special Recognition"
          subtitle="Individuals recognized for their exceptional contributions to the Cambrian Climate Club. This section is permanent and independent of executive committee positions."
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {specialRecognition.map(member => (
            <SpecialRecognitionCard
              key={`${member.name}-${member.badge}`}
              member={member}
            />
          ))}
        </motion.div>
      </section>

      {/* Executive Committee */}
      <section className="mb-16" aria-labelledby="executive-committee">
        <SectionHeader
          title="Executive Committee"
          subtitle="The active members implementing our initiatives."
        />

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-charcoal-900 mb-6 text-center">
              Current Executive Members
            </h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {currentMembers.map(member => (
                <ExecutiveMemberCard key={member.id} member={member} />
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-charcoal-900 mb-6 text-center">
              Alumni Executive Members
            </h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {alumniMembers.map(member => (
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
          viewport={{ once: true, margin: '-50px' }}
        >
          {advisoryCommittee.map(advisor => (
            <AdvisorCard key={advisor.name} advisor={advisor} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default CombinedLeadershipPage;
