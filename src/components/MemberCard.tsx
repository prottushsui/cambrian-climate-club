import { memo } from 'react';
import { motion, type Variants } from 'framer-motion';
import type { Member } from '../types/types';

interface MemberCardProps {
  member: Member;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15, mass: 1 },
  },
};

const MemberCard = memo(({ member }: MemberCardProps) => (
  <motion.article
    className="editorial-card overflow-hidden text-center h-full flex flex-col transform-gpu"
    variants={itemVariants}
    whileHover={{
      y: -8,
      scale: 1.015,
      boxShadow:
        '0 18px 30px -8px rgb(0 0 0 / 0.14), 0 10px 10px -8px rgb(0 0 0 / 0.1)',
    }}
    transition={{ type: 'spring', stiffness: 320, damping: 24 }}
  >
    <div className="relative h-64 bg-sandstone-100 overflow-hidden">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="p-6 flex-grow flex flex-col justify-center relative z-10 bg-white">
      <h3 className="text-xl font-semibold text-charcoal-900">{member.name}</h3>
      <p className="text-primary-700 font-semibold mt-1">
        {member.role} {member.term && `(${member.term})`}
      </p>
      <p className="text-charcoal-500 text-sm mt-2">{member.id}</p>
      {(member.classInfo || member.campus) && (
        <p className="text-charcoal-500 text-sm">
          {[member.classInfo, member.campus].filter(Boolean).join(', ')}
        </p>
      )}
    </div>
  </motion.article>
));

MemberCard.displayName = 'MemberCard';

export default MemberCard;
