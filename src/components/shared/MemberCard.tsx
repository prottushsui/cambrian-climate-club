import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, GraduationCap, Building2 } from 'lucide-react';
import { Member } from '@/types';

interface MemberCardProps {
  member: Member;
  index?: number;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
          {member.imageUrl ? (
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/300x300/059669/FFFFFF?text=Profile';
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <User className="h-16 w-16 text-gray-400" />
            </div>
          )}
        </div>
        {member.specialRecognition && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            <Award className="h-3 w-3" />
            <span>Special</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
        
        <div className="space-y-2">
          {member.term && (
            <div className="flex items-center text-sm text-gray-600">
              <GraduationCap className="h-4 w-4 mr-2 text-emerald-500" />
              <span>Term: {member.term}</span>
            </div>
          )}
          {member.classInfo && (
            <div className="flex items-center text-sm text-gray-600">
              <GraduationCap className="h-4 w-4 mr-2 text-emerald-500" />
              <span>Class: {member.classInfo}</span>
            </div>
          )}
          {member.campus && (
            <div className="flex items-center text-sm text-gray-600">
              <Building2 className="h-4 w-4 mr-2 text-emerald-500" />
              <span>Campus: {member.campus}</span>
            </div>
          )}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500 font-medium">{member.id}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;