
import React, { memo } from 'react';
import { motion, Variants } from 'framer-motion';
import type { Member } from '../types';

interface MemberCardProps {
  member: Member;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, mass: 1 }
  }
};

const MemberCard: React.FC<MemberCardProps> = memo(({ member }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden text-center h-full flex flex-col transform-gpu"
      variants={itemVariants}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        boxShadow: "0 25px 30px -5px rgb(0 0 0 / 0.15), 0 10px 10px -6px rgb(0 0 0 / 0.1)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="relative h-64 bg-slate-100 overflow-hidden">
        <motion.img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        {member.specialRecognition && (
            <motion.div 
              className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full z-10 shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
                Special Recognition
            </motion.div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col justify-center relative z-10 bg-white">
        <h3 className="text-xl font-bold text-primary-900">{member.name}</h3>
        <p className="text-primary-700 font-semibold mt-1">{member.role} {member.term && `(${member.term})`}</p>
        <p className="text-slate-500 text-sm mt-2">{member.id}</p>
        <p className="text-slate-500 text-sm">{member.classInfo}, {member.campus}</p>
      </div>
    </motion.div>
  );
});

export default MemberCard;
