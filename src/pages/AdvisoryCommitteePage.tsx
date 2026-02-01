import React from 'react';
import { motion } from 'framer-motion';
import { advisoryCommittee } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import type { Advisor } from '../types/types';

const AdvisoryCard: React.FC<{ advisor: Advisor }> = ({ advisor }) => (
  <motion.div 
    className="card-hover overflow-hidden flex flex-col h-full"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {/* Image Section */}
    <div className="h-64 bg-gradient-to-b from-ocean/5 to-teal/5 overflow-hidden relative">
      <motion.img 
        src={advisor.imageUrl} 
        alt={advisor.name} 
        className="w-full h-full object-cover" 
        loading="lazy"
        whileHover={{ scale: 1.05 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent"></div>
    </div>

    {/* Content Section */}
    <div className="p-6 flex-grow flex flex-col justify-center text-center">
      <h3 className="text-xl font-bold text-ocean mb-2">{advisor.name}</h3>
      <p className="text-teal font-semibold text-sm">{advisor.role}</p>
    </div>
  </motion.div>
);

const AdvisoryCommitteePage: React.FC = () => {
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
            title="Advisory Committee"
            subtitle="Experienced mentors guiding our vision and fostering our growth."
          />
        </motion.div>
      </section>

      {/* Advisory Members Grid */}
      <section className="container-premium pb-24">
        <motion.div 
          className="grid-responsive"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {advisoryCommittee.map((advisor, idx) => (
            <motion.div
              key={advisor.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <AdvisoryCard advisor={advisor} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default AdvisoryCommitteePage;
