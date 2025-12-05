import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Calendar, Trophy } from 'lucide-react';
import { Achievement } from '@/types';

interface AchievementCardProps {
  achievement: Achievement;
  index?: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Trophy className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600">{achievement.year}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.description}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <BadgeCheck className="h-4 w-4 mr-1 text-green-500" />
            <span>Club Milestone</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;