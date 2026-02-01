import React from 'react';
import { motion } from 'framer-motion';
import { alumniMembers, currentMembers } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import type { ExecutiveMember } from '../types/types';

const MemberTable: React.FC<{ members: ExecutiveMember[]; hasSerial?: boolean }> = ({ members, hasSerial = false }) => (
  <motion.div 
    className="overflow-hidden card-hover"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-ocean text-cloud font-bold border-b border-sand/40">
          <tr>
            {hasSerial && <th scope="col" className="px-6 py-4">#</th>}
            <th scope="col" className="px-6 py-4">Name</th>
            <th scope="col" className="px-6 py-4">ID</th>
            <th scope="col" className="px-6 py-4">Role</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <motion.tr 
              key={member.id || index} 
              className="border-b border-sand/20 hover:bg-sand/10 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              {hasSerial && <td className="px-6 py-4 font-semibold text-charcoal">{member.serial}</td>}
              <th scope="row" className="px-6 py-4 font-semibold text-charcoal">
                {member.name}
              </th>
              <td className="px-6 py-4 font-mono text-xs text-text-muted">{member.id}</td>
              <td className="px-6 py-4 text-ocean font-semibold">{member.role}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

const ExecutiveCommitteePage: React.FC = () => {
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
            title="Executive Committee"
            subtitle="The dedicated members driving our club's vision and initiatives forward."
          />
        </motion.div>
      </section>

      {/* Current Members Section */}
      <section className="container-premium py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-ocean mb-2">Current Members</h2>
          <p className="text-text-muted">Active leadership team ({currentMembers.length} members)</p>
        </motion.div>
        <MemberTable members={currentMembers} hasSerial={true} />
      </section>

      {/* Alumni Section */}
      <section className="bg-white border-t border-sand/40 py-20">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-ocean mb-2">Alumni Members</h2>
            <p className="text-text-muted">Honoring those who shaped our club</p>
          </motion.div>
          <MemberTable members={alumniMembers} />
        </div>
      </section>
    </div>
  );
};

export default ExecutiveCommitteePage;
