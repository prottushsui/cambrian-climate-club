import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from './ui/OptimizedImage';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative bg-sand-100 overflow-hidden min-h-screen flex items-center"
      aria-labelledby="hero-heading"
    >

      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 z-10 w-full">
        {/* Content Section */}
        <div className="lg:w-1/2">
          <h1 
            id="hero-heading"
            className="text-5xl md:text-6xl font-bold text-primary-600 mb-4 leading-tight"
          >
            Cambrian Climate Club
          </h1>
          <p className="text-lg text-text-secondary mb-6 leading-relaxed max-w-2xl">
            A student-led initiative promoting sustainability, climate awareness, and community action since 2023.
          </p>
          
          {/* Mission Statement */}
          <div className="mb-8 p-6 bg-primary-600 text-text-light rounded-lg">
            <p className="text-base font-medium leading-relaxed">
              <strong>Mission:</strong> Empowering students to become proactive leaders in sustainability and climate action through hands-on projects and community engagement.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/projects">
              <button className="w-full sm:w-auto bg-primary-600 text-text-light font-semibold py-3 px-6 rounded-md hover:bg-primary-700 transition-colors">
                Explore Projects
              </button>
            </Link>
            <Link to="/leadership">
              <button className="w-full sm:w-auto bg-sand-200 text-primary-600 font-semibold py-3 px-6 rounded-md hover:bg-sand-300 transition-colors">
                Meet the Team
              </button>
            </Link>
          </div>
        </div>

        {/* Image Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4 h-96">
          <div className="col-span-1 row-span-2 overflow-hidden rounded-lg">
            <OptimizedImage 
              src="/images/Campus Cleanliness Drive.jpg" 
              alt="Campus Cleanliness Drive" 
              className="w-full h-full object-cover" 
              placeholder="/images/homepagepicture1.jpg"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
            <OptimizedImage 
              src="/images/Campus Greening Initiative.jpg" 
              alt="Campus Greening Initiative" 
              className="w-full h-full object-cover" 
              placeholder="/images/homepagepicture2.jpg"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
            <OptimizedImage 
              src="/images/homepagepicture3.jpg" 
              alt="Climate Action" 
              className="w-full h-full object-cover" 
              placeholder="/images/homepagepicture3.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
