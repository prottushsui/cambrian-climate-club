
import React, { memo } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  textColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = memo(({ title, subtitle, textColor = "text-primary-600" }) => {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${textColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
});

export default SectionHeader;
