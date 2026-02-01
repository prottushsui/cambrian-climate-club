
import React from 'react';
import SectionHeader from '../components/SectionHeader';

const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-sand-100">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="About Cambrian Climate Club"
          subtitle="Fostering a sustainable future, one initiative at a time."
        />

        <div className="bg-text-light p-8 rounded-lg border border-sand-300 shadow-md">
          <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
            <div className="md:col-span-1 flex justify-center">
              <img src="/images/Club logo.png" alt="Cambrian Climate Club Logo" className="h-32 w-auto object-contain"/>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-semibold text-primary-600">Our Story</h3>
              <p className="text-text-secondary leading-relaxed">
                Founded in 2023 by a passionate group of over 20 students, the Cambrian Climate Club at Campus 2 was born from a shared desire to make a tangible difference in our immediate environment. We believe that meaningful change starts locally, and our mission is to empower students to become proactive leaders in sustainability and climate action.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Core Activities & Focus Areas</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Sustainability Projects', 'Environmental Education', 'Tree Plantation Drives', 'Plastic-Free Campus Initiatives', 'Rooftop Gardening', 'Climate Conferences'].map((activity) => (
                <li key={activity} className="flex items-center p-4 bg-sand-50 rounded-lg border border-sand-200 hover:shadow-base transition-shadow">
                  <div className="bg-accent-100 p-2 rounded-full mr-3 text-accent-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-medium text-text-primary">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
