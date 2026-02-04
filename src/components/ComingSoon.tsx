import React from 'react';
import SectionHeader from '@/components/SectionHeader';

interface ComingSoonProps {
  title: string;
  subtitle?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title, subtitle }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="max-w-3xl mx-auto rounded-3xl border border-sand-200 bg-card px-8 py-12 text-center shadow-subtle">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-sand-300 bg-sand-100 text-primary-600">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m0-8a4 4 0 014 4v2H8v-2a4 4 0 014-4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 10V8a5 5 0 0110 0v2" />
            <rect x="5" y="10" width="14" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-3xl font-semibold text-primary-600">Coming Soon</h3>
      </div>
    </div>
  );
};

export default ComingSoon;
