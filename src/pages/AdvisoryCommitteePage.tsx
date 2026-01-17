
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { advisoryCommittee } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import type { Advisor } from '../types/types';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const AdvisoryCard: React.FC<{ advisor: Advisor }> = ({ advisor }) => (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden text-center h-full flex flex-col"
      variants={itemVariants}
      whileHover={{ 
          y: -12,
          scale: 1.02,
          boxShadow: "0 25px 30px -5px rgb(0 0 0 / 0.15), 0 10px 10px -6px rgb(0 0 0 / 0.1)" 
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
        <div className="h-72 bg-slate-100 overflow-hidden relative">
            <motion.img 
                src={advisor.imageUrl} 
                alt={advisor.name} 
                className="w-full h-full object-contain" 
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
            />
        </div>
        <div className="p-8 flex-grow relative -mt-10 mx-4 mb-4 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-primary-900">{advisor.name}</h3>
            <p className="text-primary-600 font-semibold mt-2">{advisor.role}</p>
        </div>
    </motion.div>
);

const AdvisoryCommitteePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Advisory Committee"
        subtitle="The experienced mentors providing guidance and support to our club."
      />
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {advisoryCommittee.map((advisor) => (
          <AdvisoryCard key={advisor.name} advisor={advisor} />
        ))}
      </motion.div>
    </div>
  );
};

export default AdvisoryCommitteePage;
