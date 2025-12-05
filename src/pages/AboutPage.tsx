import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Target, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
              <Leaf className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Cambrian Climate Club</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A student-led environmental and sustainability organization at Cambrian School & College, 
              dedicated to promoting environmental awareness and sustainability initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Cambrian Climate Club is dedicated to promoting environmental awareness and sustainability 
                initiatives within our school community and beyond. We believe that every small action 
                contributes to a larger impact in protecting our planet.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through education, community engagement, and hands-on environmental projects, we aim to 
                inspire and empower students to become environmental leaders and advocates for positive change.
              </p>
              <Button asChild className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-8">
                <Link to="/projects">Explore Our Work</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800"
                  alt="Forest"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To create a sustainable future through education, innovation, and community action.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Environmental Education",
                description: "Promoting awareness and understanding of environmental issues among students and the community."
              },
              {
                icon: Users,
                title: "Community Engagement",
                description: "Building partnerships and collaborations to create a stronger environmental movement."
              },
              {
                icon: Award,
                title: "Sustainable Impact",
                description: "Implementing projects that create lasting positive environmental change."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a recognized environmental organization.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-400 to-emerald-400 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: "2023",
                  title: "Club Founded",
                  description: "Club founded with 20+ dedicated students who shared a passion for environmental conservation."
                },
                {
                  year: "Early 2024",
                  title: "2nd Club Election",
                  description: "The 2nd club election was successfully held, bringing new leadership and fresh ideas."
                },
                {
                  year: "August 2024",
                  title: "Greening Initiative",
                  description: "Planted over 100 trees on the school rooftop, creating a green space for the community."
                },
                {
                  year: "2024",
                  title: "Awards Recognition",
                  description: "Won 5 medals (3 silver, 2 bronze) at the National Nature Conservation Association (NNCA) Olympiad."
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  <div className="md:w-5/12">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                      <div className="text-sm font-semibold text-emerald-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="md:w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Environmental Mission
            </h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              Be part of a community dedicated to creating a sustainable future. 
              Together, we can make a difference in protecting our environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                <Link to="/contact">Get Involved</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg">
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;