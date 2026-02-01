import React from 'react';
import { motion } from 'framer-motion';
import { achievements, galleries } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import ImageGallery from '../components/ImageGallery';
import type { Achievement } from '../types/types';

const TimelineItem: React.FC<{ item: Achievement; index: number }> = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.1 }}
    className="relative mb-8"
  >
    <div className="flex gap-6">
      {/* Timeline dot */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.1 }}
          className="w-6 h-6 bg-ocean rounded-full border-4 border-sand flex items-center justify-center z-10"
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-2 h-2 bg-cloud rounded-full"></div>
        </motion.div>
        {index < achievements.length - 1 && (
          <div className="w-1 h-16 bg-gradient-to-b from-ocean to-teal opacity-30 mt-2"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <motion.div
          className="card-hover p-6"
          whileHover={{ scale: 1.02 }}
        >
          <time className="text-sm font-bold text-ocean block mb-2">{item.year}</time>
          <h3 className="text-lg font-semibold text-charcoal">{item.description}</h3>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const AchievementsPage: React.FC = () => {
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
            title="Achievements & Milestones"
            subtitle="Celebrating our key accomplishments and the impact we've created together."
          />
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="container-premium pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {achievements.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white border-t border-sand/40 py-24">
        <ImageGallery galleries={galleries} />
      </section>
    </div>
  );
};

export default AchievementsPage;
