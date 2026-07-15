import React, { memo } from 'react';
import { motion, Variants } from 'framer-motion';
import type { Member } from '../types/types';

interface MemberCardProps {
  member: Member;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15, mass: 1 },
  },
};

const MemberCard: React.FC<MemberCardProps> = memo(({ member }) => {
  return (
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
          className="w-full h-full object-contain" // Changed from object-cover to object-contain
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-center relative z-10 bg-white">
        <h3 className="text-xl font-semibold text-charcoal-900">
          {member.name}
        </h3>
        <p className="text-primary-700 font-semibold mt-1">
          {member.role} {member.term && `(${member.term})`}
        </p>
        <p className="text-charcoal-500 text-sm mt-2">{member.id}</p>
        <p className="text-charcoal-500 text-sm">
          {member.classInfo}, {member.campus}
        </p>
      </div>
    </motion.div>
  );
});

export default MemberCard;
