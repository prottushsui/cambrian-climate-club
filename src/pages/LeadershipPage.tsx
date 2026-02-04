import React from 'react';
import { Link } from 'react-router-dom';
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

const LeadershipPage: React.FC = () => {
  const specialRecognitionMember = leadershipTeam.find((member) => member.specialRecognition) as Member;

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Leadership"
        subtitle="Leadership (Current Members), Alumni, Advisory Committee, Special Recognition"
      />

      <section className="mb-16" aria-labelledby="leadership-sections">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { to: '/leadership/current', title: 'Leadership (Current Members)' },
            { to: '/leadership/alumni', title: 'Alumni' },
            { to: '/leadership/advisory', title: 'Advisory Committee' },
          ].map((section) => (
            <Link
              key={section.to}
              to={section.to}
              className="group rounded-2xl border border-sand-200 bg-card p-6 shadow-subtle transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-text-primary">{section.title}</h3>
                <span className="text-sm font-medium text-primary-600">View</span>
              </div>
            </Link>
          ))}
        </div>
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

export default LeadershipPage;
