import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const AboutPage: React.FC = () => {
  const activities = [
    'Sustainability Projects',
    'Environmental Education',
    'Tree Plantation Drives',
    'Plastic-Free Campus Initiatives',
    'Rooftop Gardening',
    'Climate Conferences'
  ];

  const values = [
    {
      icon: '🌍',
      title: 'Environmental Stewardship',
      description: 'We take responsibility for protecting our planet through direct action and advocacy.'
    },
    {
      icon: '👥',
      title: 'Community Engagement',
      description: 'Building collective strength through collaboration and shared commitment.'
    },
    {
      icon: '💡',
      title: 'Innovation & Learning',
      description: 'Embracing creative solutions and continuous growth in environmental awareness.'
    },
    {
      icon: '🤝',
      title: 'Accountability',
      description: 'Taking responsibility for our actions and their impact on future generations.'
    }
  ];

  return (
    <div className="bg-cloud">
      {/* Hero Section */}
      <section className="container-premium py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="About Cambrian Climate Club"
            subtitle="Empowering students to lead climate action and create sustainable change."
          />
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white border-t border-sand/40 py-20">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img 
                src="/images/Club logo.png" 
                alt="Cambrian Climate Club Logo" 
                className="h-56 w-auto object-contain drop-shadow-lg"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-ocean">Our Story</h2>
              <p className="text-text-muted leading-relaxed text-lg">
                Founded in 2023 by a passionate group of students, the Cambrian Climate Club represents a commitment to environmental leadership and sustainable change. Beginning with over 20 dedicated members, we've grown into a thriving organization that combines education, action, and advocacy.
              </p>
              <p className="text-text-muted leading-relaxed text-lg">
                We believe that meaningful environmental change begins locally. Through our initiatives on campus and engagement with the community, we're demonstrating that young people can be powerful agents of sustainability and climate awareness.
              </p>
              <div className="pt-4 flex gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-ocean">2023</p>
                  <p className="text-text-muted text-sm">Founded</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-ocean">37+</p>
                  <p className="text-text-muted text-sm">Members</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-ocean">∞</p>
                  <p className="text-text-muted text-sm">Impact</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Activities Section */}
      <section className="container-premium py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header mb-16"
        >
          <h2 className="section-title">Core Activities & Focus Areas</h2>
          <p className="section-subtitle">We drive change through diverse, impactful initiatives.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          viewport={{ once: true }}
        >
          {activities.map((activity, idx) => (
            <motion.div
              key={activity}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="card-hover p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-ocean/10">
                    <svg className="h-5 w-5 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-base font-semibold text-charcoal">{activity}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white border-t border-sand/40 py-20">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header mb-16 text-center"
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">Guiding principles that shape every decision we make.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="card-hover p-8 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-ocean mb-3">{value.title}</h3>
                <p className="text-text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container-premium py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card-hover p-8"
          >
            <h3 className="text-3xl font-bold text-ocean mb-6">Our Mission</h3>
            <p className="text-text-muted leading-relaxed">
              To empower students as leaders in environmental sustainability, fostering climate awareness, promoting ecological responsibility, and catalyzing positive change through education, innovation, and community action.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card-hover p-8 bg-white"
          >
            <h3 className="text-3xl font-bold text-ocean mb-6">Our Vision</h3>
            <p className="text-text-muted leading-relaxed">
              A sustainable campus and community where students lead transformative environmental action, creating a model of ecological responsibility for generations to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-ocean text-cloud py-20">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Movement</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Every action counts. Whether you're passionate about the environment or just beginning to explore sustainability, there's a place for you in our community.
            </p>
            <button className="bg-cloud text-ocean font-semibold px-8 py-4 rounded-lg hover:bg-sand transition-colors duration-300">
              Get Involved Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
