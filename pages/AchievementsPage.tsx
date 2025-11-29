
import React from 'react';
import { motion } from 'framer-motion';
import { achievements, galleries } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import ImageGallery from '../components/ImageGallery';
import type { Achievement } from '../types';

const TimelineItem: React.FC<{ item: Achievement, index: number }> = ({ item, index }) => (
    <motion.li 
        className="mb-12 ms-6"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
    >
        <motion.div 
            className="absolute w-4 h-4 bg-white rounded-full mt-1.5 -start-2 border-4 border-primary-600 z-10 box-content"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.1, type: "spring" }}
            whileHover={{ scale: 1.5, borderColor: "#059669" }}
        />
        <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            <time className="mb-2 text-sm font-bold leading-none text-primary-600 block">{item.year}</time>
            <h3 className="text-lg font-medium text-gray-800">{item.description}</h3>
        </div>
    </motion.li>
);

const AchievementsPage: React.FC = () => {
  return (
    <div>
        <div className="container mx-auto px-4 py-20">
            <SectionHeader 
                title="Achievements & Milestones"
                subtitle="Celebrating our key accomplishments and progress since our founding."
            />

            <div className="max-w-2xl mx-auto relative">
                 {/* Timeline vertical line */}
                <motion.div 
                    className="absolute top-0 bottom-0 left-[23px] w-0.5 bg-slate-200 origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <ol className="relative ml-6">
                    {achievements.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </ol>
            </div>
        </div>

        <div className="bg-slate-50 border-t border-slate-200">
            <ImageGallery galleries={galleries} />
        </div>
    </div>
  );
};

export default AchievementsPage;
