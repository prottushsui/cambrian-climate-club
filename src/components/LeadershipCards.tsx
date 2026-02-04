import React from 'react';
import { motion } from 'framer-motion';
import type { ExecutiveMember, Advisor } from '@/types/types';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export const ExecutiveMemberCard: React.FC<{ member: ExecutiveMember }> = ({ member }) => (
  <motion.div
    className="bg-card rounded-2xl border border-sand-200 p-6 text-center shadow-subtle h-full flex flex-col items-center"
    variants={itemVariants}
    whileHover={{
      y: -5,
      scale: 1.02,
      boxShadow: '0 10px 25px -5px rgba(15, 61, 92, 0.15)',
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center mb-4 mx-auto border border-sand-200">
      <span className="text-lg font-semibold text-primary-600">ID</span>
    </div>
    <h3 className="text-lg font-bold text-text-primary">{member.name}</h3>
    <p className="text-text-secondary font-medium mt-1">{member.role}</p>
    <p className="text-sm text-text-tertiary mt-1 font-mono">{member.id}</p>
  </motion.div>
);

export const AdvisorCard: React.FC<{ advisor: Advisor }> = ({ advisor }) => (
  <motion.div
    className="bg-card rounded-2xl border border-sand-200 overflow-hidden text-center h-full flex flex-col shadow-subtle"
    variants={itemVariants}
    whileHover={{
      y: -5,
      scale: 1.02,
      boxShadow: '0 10px 25px -5px rgba(15, 61, 92, 0.15)',
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    <div className="h-48 bg-sand-100 overflow-hidden relative">
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
      <h3 className="text-lg font-bold text-text-primary">{advisor.name}</h3>
      <p className="text-text-secondary font-medium mt-1">{advisor.role}</p>
    </div>
  </motion.div>
);
