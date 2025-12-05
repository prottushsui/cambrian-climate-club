
import React from 'react';
import { motion } from 'framer-motion';
import { alumniMembers, currentMembers } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import type { ExecutiveMember } from '../types';

const MemberTable: React.FC<{ members: ExecutiveMember[], hasSerial?: boolean }> = ({ members, hasSerial = false }) => (
    <motion.div 
        className="overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
    >
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                    <tr>
                        {hasSerial && <th scope="col" className="px-6 py-4 font-bold text-primary-900">#</th>}
                        <th scope="col" className="px-6 py-4 font-bold text-primary-900">Name</th>
                        <th scope="col" className="px-6 py-4 font-bold text-primary-900">ID</th>
                        <th scope="col" className="px-6 py-4 font-bold text-primary-900">Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <motion.tr 
                            key={member.id || index} 
                            className="bg-white border-b hover:bg-primary-50/50 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 + 0.2 }}
                            whileHover={{ scale: 1.01, backgroundColor: "#ecfdf5", transition: { duration: 0.2 } }}
                        >
                            {hasSerial && <td className="px-6 py-4 font-medium text-gray-900">{member.serial}</td>}
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {member.name}
                            </th>
                            <td className="px-6 py-4 font-mono text-xs text-slate-500">{member.id}</td>
                            <td className="px-6 py-4 text-primary-700">{member.role}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    </motion.div>
);


const ExecutiveCommitteePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Executive Committee"
        subtitle="The driving force behind our club's day-to-day operations and initiatives."
      />

      <div className="space-y-20">
        <div>
            <motion.h3 
                className="text-2xl font-bold text-primary-800 mb-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Current Members ({currentMembers.length})
            </motion.h3>
            <MemberTable members={currentMembers} hasSerial={true} />
        </div>
        <div>
          <motion.h3 
            className="text-2xl font-bold text-primary-800 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Alumni Members
          </motion.h3>
          <MemberTable members={alumniMembers} />
        </div>
      </div>
    </div>
  );
};

export default ExecutiveCommitteePage;
