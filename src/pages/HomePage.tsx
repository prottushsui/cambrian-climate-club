
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants, useInView } from 'framer-motion';
import { projects, currentMembers } from '@/data/content';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import { 
  fadeInUpVariants, 
  scaleInVariants, 
  slideInLeftVariants, 
  slideInRightVariants, 
  containerVariants, 
  itemVariants,
  statItemVariants 
} from '@/constants/animation';

const Counter: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView && count !== end) {
            let start = 0;
            const range = end - start;
            let current = start;
            const increment = end > start ? 1 : -1;
            const stepTime = Math.abs(Math.floor(duration / range));
            const timer = setInterval(() => {
                current += increment;
                setCount(current);
                if (current === end) {
                    clearInterval(timer);
                }
            }, stepTime > 0 ? stepTime : 1);
            return () => clearInterval(timer);
        }
    }, [isInView, end, count, duration]);

    return <span ref={ref}>{count}</span>;
};

const StatCard: React.FC<{ value: React.ReactNode; label: string }> = ({ value, label }) => (
    <motion.div 
        className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl text-center shadow-lg border border-white/20 apple-card glass-card"
        variants={statItemVariants}
        whileHover={{ 
            y: -10, 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" 
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        <p className="text-4xl font-bold text-blue-600">{value}</p>
        <p className="text-slate-600 mt-2 font-medium">{label}</p>
    </motion.div>
);

const HomePage: React.FC = () => {
  const heroTitle = "Cambrian Climate Club — Campus 2".split("—");
  const titleWords = heroTitle.map(part => part.trim().split(" "));

  return (
    <div className="bg-slate-50/60">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background Blobs */}
        <motion.div 
            className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-gradient-to-r from-blue-200/30 to-emerald-200/30 rounded-full opacity-50 filter blur-3xl"
            animate={{ 
                y: [0, 40, 0], 
                x: [0, 20, 0],
                scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
            className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full opacity-50 filter blur-3xl"
            animate={{ 
                y: [0, -50, 0], 
                x: [0, -30, 0],
                scale: [1, 1.2, 1] 
            }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
            className="absolute top-[20%] right-[10%] w-32 h-32 bg-gradient-to-r from-teal-200/40 to-cyan-200/40 rounded-full opacity-60 filter blur-2xl"
            animate={{ 
                y: [0, 20, 0], 
                scale: [1, 1.5, 1], 
                rotate: [0, 180, 360] 
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={slideInLeftVariants}
            >
                <motion.h1 
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight min-h-[144px] md:min-h-[192px] apple-title leading-tight"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {titleWords.map((part, partIndex) => (
                        <span key={partIndex} className={partIndex > 0 ? "block text-blue-700 mt-2" : "block"}>
                             {partIndex > 0 ? "— " : ""}
                             {part.map((word, wordIndex) => (
                                <span key={wordIndex} className="inline-block whitespace-nowrap mr-2 md:mr-4">
                                    {word.split("").map((char, charIndex) => (
                                        <motion.span 
                                            key={charIndex} 
                                            className="inline-block" 
                                            variants={scaleInVariants}
                                            style={{ display: 'inline-block' }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </span>
                    ))}
                </motion.h1>
                <motion.p 
                    className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                >
                    A student-led environmental initiative promoting sustainability, climate awareness, and community action since 2023.
                </motion.p>
                <motion.div 
                    className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                >
                    <Link to="/projects" className="w-full sm:w-auto block">
                        <motion.div 
                            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-center text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-blue-500/30 apple-button apple-button-primary transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 12px 30px rgba(0, 113, 227, 0.4)" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            Explore Projects
                        </motion.div>
                    </Link>
                    <Link to="/leadership" className="w-full sm:w-auto block">
                        <motion.div 
                            className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-center text-blue-600 font-semibold py-4 px-8 rounded-full shadow-lg border border-white/50 apple-button apple-button-secondary transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            Meet the Team
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>
            <motion.div 
                className="lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-6 h-[400px] md:h-[500px]"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div 
                    className="col-span-1 row-span-2 relative group overflow-hidden rounded-3xl"
                    variants={slideInRightVariants}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                     <motion.img 
                        src="https://images.weserv.nl/?url=i.imgur.com/h5rD6wS.jpeg" 
                        alt="Campus Cleanliness Drive" 
                        className="w-full h-full object-cover" 
                        loading="lazy"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300 rounded-3xl"></div>
                </motion.div>
                <motion.div 
                    className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl"
                    variants={slideInRightVariants}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    <motion.img 
                        src="https://images.weserv.nl/?url=i.imgur.com/9v1zG1N.jpeg" 
                        alt="Campus Greening Initiative" 
                        className="w-full h-full object-cover" 
                        loading="lazy"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent group-hover:from-black/10 transition-all duration-300 rounded-3xl"></div>
                </motion.div>
                <motion.div 
                    className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl"
                    variants={slideInRightVariants}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    <motion.img 
                        src="https://images.weserv.nl/?url=i.imgur.com/2s3Kz2T.jpeg" 
                        alt="Climate Action E-Magazine" 
                        className="w-full h-full object-cover" 
                        loading="lazy"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent group-hover:from-black/10 transition-all duration-300 rounded-3xl"></div>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Featured Initiatives Section */}
      <section className="container mx-auto px-4 py-24">
        <SectionHeader title="Featured Initiatives" subtitle="Our core projects making a tangible impact on our campus and community." />
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="apple-card glass-card rounded-3xl overflow-hidden shadow-xl border border-white/20"
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-60 object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600">Join us in our mission to create a sustainable campus environment through innovative projects and community engagement.</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 py-24">
        <div className="container mx-auto px-4">
            <SectionHeader title="Our Journey in Numbers" />
            <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mt-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <StatCard value="2023" label="Founded" />
                <StatCard value={<><Counter end={currentMembers.length} /></>} label="Active Members" />
                <StatCard value={<><Counter end={100} />+</>} label="Trees Planted" />
                <StatCard value={<><Counter end={7} />+</>} label="Awards Won" />
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
