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
    transition: { staggerChildren: 0.08 },
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

const ExecutiveMemberCard = ({ member }: { member: ExecutiveMember }) => (
  <motion.article
    className="editorial-card p-6 text-center h-full flex flex-col items-center"
    variants={itemVariants}
    whileHover={{
      y: -6,
      scale: 1.015,
      boxShadow:
        '0 16px 28px -8px rgb(0 0 0 / 0.12), 0 10px 10px -10px rgb(0 0 0 / 0.1)',
    }}
    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
  >
    <div
      aria-hidden="true"
      className="w-16 h-16 bg-sandstone-200 rounded-full flex items-center justify-center mb-4 mx-auto"
    >
      <span className="text-lg font-bold text-charcoal-700">ID</span>
    </div>
    <h3 className="text-lg font-semibold text-charcoal-900">{member.name}</h3>
    <p className="text-charcoal-600 font-medium mt-1">{member.role}</p>
    <p className="text-sm text-charcoal-500 mt-1 font-mono">{member.id}</p>
  </motion.article>
);

const SpecialRecognitionCard = ({
  member,
}: {
  member: SpecialRecognitionMember;
}) => (
  <motion.article
    className="editorial-card overflow-hidden text-center h-full flex flex-col transform-gpu"
    variants={itemVariants}
    whileHover={{
      y: -8,
      scale: 1.015,
      boxShadow:
        '0 20px 32px -8px rgb(0 0 0 / 0.14), 0 12px 12px -10px rgb(0 0 0 / 0.1)',
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
  >
    <div className="relative h-64 bg-sandstone-100 overflow-hidden">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-full object-contain"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
        {member.badge}
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col justify-center relative z-10 bg-white">
      <h3 className="text-xl font-semibold text-charcoal-900">{member.name}</h3>
      <p className="text-primary-700 font-semibold mt-2">{member.title}</p>
    </div>
  </motion.article>
);

const AdvisorCard = ({ advisor }: { advisor: Advisor }) => (
  <motion.article
    className="editorial-card overflow-hidden text-center h-full flex flex-col"
    variants={itemVariants}
    whileHover={{
      y: -6,
      scale: 1.015,
      boxShadow:
        '0 16px 28px -8px rgb(0 0 0 / 0.12), 0 10px 10px -10px rgb(0 0 0 / 0.1)',
    }}
    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
  >
    <div className="h-48 bg-sandstone-100 overflow-hidden relative">
      <img
        src={advisor.imageUrl}
        alt={advisor.name}
        className="w-full h-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-charcoal-900">
        {advisor.name}
      </h3>
      <p className="text-charcoal-600 font-medium mt-1">{advisor.role}</p>
    </div>
  </motion.article>
);

const CombinedLeadershipPage = () => (
  <div className="container mx-auto px-4 py-16">
    <SectionHeader
      title="Our Leadership Structure"
      subtitle="Meet the dedicated individuals driving our mission forward."
    />

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
          <MemberCard key={`${member.id}-${member.name}`} member={member} />
        ))}
      </motion.div>
    </section>

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
            {currentMembers.map((member, index) => (
              <ExecutiveMemberCard
                key={`${member.id}-${member.name}-${member.serial ?? index}`}
                member={member}
              />
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
            {alumniMembers.map((member, index) => (
              <ExecutiveMemberCard
                key={`${member.id}-${member.name}-${index}`}
                member={member}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>

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
          <AdvisorCard
            key={`${advisor.name}-${advisor.role}`}
            advisor={advisor}
          />
        ))}
      </motion.div>
    </section>
  </div>
);

export default CombinedLeadershipPage;
