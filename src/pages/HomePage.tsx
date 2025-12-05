import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Leaf, Users, Award, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '@/components/shared/ProjectCard';
import { projects } from '@/data/content';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full inline-flex">
                <Leaf className="h-12 w-12 text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent"
            >
              Cambrian Climate Club
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Dedicated to promoting environmental awareness and sustainability initiatives 
              within our school community and beyond. Together, we're building a greener future.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-full">
                <Link to="/about">Learn More</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg rounded-full">
                <Link to="/projects">Our Projects</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-emerald-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "50+", label: "Active Members" },
              { icon: TreePine, value: "100+", label: "Trees Planted" },
              { icon: Award, value: "5", label: "Awards Won" },
              { icon: Leaf, value: "3", label: "Projects Active" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our ongoing initiatives that make a real impact on our environment and community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-full px-8">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              Be part of a community dedicated to creating a sustainable future. 
              Together, we can make a difference in protecting our environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                <Link to="/about">Get Involved</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;