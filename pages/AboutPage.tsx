
import React from 'react';
import { motion, Variants } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
        duration: 0.5
      }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: { 
        opacity: 1, 
        x: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
};

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="About Cambrian Climate Club"
        subtitle="Fostering a sustainable future, one initiative at a time."
      />

      <motion.div 
        className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
      >
        <div className="grid md:grid-cols-3 gap-12 items-center">
            <motion.div 
                className="md:col-span-1 flex justify-center"
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.5, duration: 1.5, delay: 0.2 }}
                whileHover={{ rotate: 10, scale: 1.1 }}
            >
                <img src="https://images.weserv.nl/?url=i.imgur.com/RUb1nRX.png" alt="Club Logo" className="h-48 w-auto object-contain drop-shadow-lg"/>
            </motion.div>
            <div className="md:col-span-2 space-y-4">
                <motion.h3 
                    className="text-3xl font-bold text-primary-800"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Our Story
                </motion.h3>
                <motion.p 
                    className="text-slate-600 text-lg leading-relaxed"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Founded in 2023 by a passionate group of over 20 students, the Cambrian Climate Club at Campus 2 was born from a shared desire to make a tangible difference in our immediate environment. We believe that meaningful change starts locally, and our mission is to empower students to become proactive leaders in sustainability and climate action.
                </motion.p>
            </div>
        </div>

        <div className="mt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="text-2xl font-bold text-primary-800 mb-8 text-center">Core Activities & Focus Areas</h3>
            </motion.div>
            
            <motion.ul 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-slate-700"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {['Sustainability Projects', 'Climate Literacy Workshops', 'Environmental Education', 'Tree Plantation Drives', 'Plastic-Free Campus Initiatives', 'Rooftop Gardening', 'Community Workshops', 'Climate Conferences'].map((activity) => (
                    <motion.li 
                        key={activity} 
                        className="flex items-center p-4 bg-primary-50 rounded-xl border border-primary-100 hover:shadow-md transition-shadow"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, backgroundColor: "#ecfdf5", x: 5 }}
                    >
                        <motion.div 
                            className="bg-primary-100 p-2 rounded-full mr-4 text-primary-600"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </motion.div>
                        <span className="font-medium text-lg">{activity}</span>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
