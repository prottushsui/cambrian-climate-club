
import React, { memo } from 'react';
import { motion, Variants } from 'framer-motion';
import type { Member } from '../types/types';

interface MemberCardProps {
  member: Member;
  featured?: boolean;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const MemberCard: React.FC<MemberCardProps> = memo(({ member, featured = false }) => {
  return (
    <motion.div 
      className={`card-hover rounded-2xl overflow-hidden text-center h-full flex flex-col ${featured ? 'max-w-md mx-auto' : ''}`}
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image Section */}
      <div className="relative h-72 bg-gradient-to-b from-ocean/5 to-teal/5 overflow-hidden">
        <motion.img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
        
        {member.specialRecognition && (
          <motion.div 
            className="absolute top-4 right-4 bg-coral text-cloud text-xs font-bold px-4 py-2 rounded-full z-10 shadow-md"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            Special Recognition
          </motion.div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col justify-center">
        <h3 className="text-lg font-bold text-ocean mb-1">{member.name}</h3>
        <p className="text-teal font-semibold text-sm mb-3">{member.role}</p>
        {member.term && <p className="text-text-muted text-xs mb-2">{member.term}</p>}
        <p className="text-text-muted text-xs">{member.id}</p>
        <p className="text-text-muted text-xs">{member.classInfo} • {member.campus}</p>
      </div>
    </motion.div>
  );
});

MemberCard.displayName = 'MemberCard';

export default MemberCard;
