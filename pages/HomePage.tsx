
import React, { useState, useEffect, useRef, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants, useInView } from 'framer-motion';
import { projects, currentMembers } from '../data/content';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';

// Variants definitions
const titleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: i * 0.1 },
    }),
};
  
const titleChildVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
};

const statItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
        opacity: 1, 
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 200, damping: 15 }
    }
};


const Counter: React.FC<{ end: number, duration?: number }> = memo(({ end, duration = 2000 }) => {
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
});


const StatCard: React.FC<{ value: React.ReactNode; label: string }> = memo(({ value, label }) => (
    <motion.div 
        className="bg-primary-50 p-6 rounded-2xl text-center shadow-lg border border-primary-100"
        variants={statItemVariants}
        whileHover={{ 
            y: -8, 
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
        }}
    >
        <p className="text-4xl font-bold text-primary-700">{value}</p>
        <p className="text-slate-600 mt-2 font-medium">{label}</p>
    </motion.div>
));

const imageContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20
    },
  },
};


const HomePage: React.FC = memo(() => {
  const heroTitle = "Cambrian Climate Club — Campus 2".split("—");
  const titleWords = heroTitle.map(part => part.trim().split(" "));

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary-50 overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background Blobs */}
        <motion.div 
            className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-200 rounded-full opacity-20 filter blur-3xl"
            animate={{ 
                y: [0, 40, 0], 
                x: [0, 20, 0],
                scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
            className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-emerald-300 rounded-full opacity-20 filter blur-3xl"
            animate={{ 
                y: [0, -50, 0], 
                x: [0, -30, 0],
                scale: [1, 1.2, 1] 
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
            className="absolute top-[20%] right-[10%] w-32 h-32 bg-teal-200 rounded-full opacity-30 filter blur-xl"
            animate={{ 
                y: [0, 20, 0], 
                scale: [1, 1.5, 1], 
                rotate: [0, 180, 360] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2 text-center lg:text-left">
                <motion.h1 
                    className="text-4xl md:text-6xl font-extrabold text-primary-900 tracking-tight min-h-[144px] md:min-h-[192px]"
                    variants={titleContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {titleWords.map((part, partIndex) => (
                        <span key={partIndex} className={partIndex > 0 ? "block text-primary-700 mt-2" : "block"}>
                             {partIndex > 0 ? "— " : ""}
                             {part.map((word, wordIndex) => (
                                <span key={wordIndex} className="inline-block whitespace-nowrap mr-2 md:mr-4">
                                    {word.split("").map((char, charIndex) => (
                                        <motion.span key={charIndex} className="inline-block" variants={titleChildVariants}>
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </span>
                    ))}
                </motion.h1>
                <motion.p 
                    className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                >
                    A student-led environmental initiative promoting sustainability, climate awareness, and community action since 2023.
                </motion.p>
                <motion.div 
                    className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                >
                    <Link to="/projects" className="w-full sm:w-auto block">
                        <motion.div 
                            className="w-full sm:w-auto bg-primary-600 text-center text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-primary-500/30"
                            whileHover={{ scale: 1.05, backgroundColor: "#047857", y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            Explore Projects
                        </motion.div>
                    </Link>
                    <Link to="/leadership" className="w-full sm:w-auto block">
                        <motion.div 
                            className="w-full sm:w-auto bg-white text-center text-primary-600 font-bold py-3 px-8 rounded-full shadow-md border-2 border-transparent hover:border-primary-100"
                            whileHover={{ scale: 1.05, backgroundColor: "#f8fafc", y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            Meet the Team
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
            <motion.div 
                className="lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 h-[400px] md:h-[500px]"
                variants={imageContainerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="col-span-1 row-span-2 relative group" variants={imageVariants}>
                     <motion.img 
                        src="https://images.weserv.nl/?url=i.imgur.com/h5rD6wS.jpeg" 
                        alt="Campus Cleanliness Drive" 
                        className="w-full h-full object-cover rounded-3xl shadow-2xl" 
                        loading="lazy"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-black/10 rounded-3xl group-hover:bg-transparent transition-colors duration-300"></div>
                </motion.div>
                <motion.div className="col-span-1 row-span-1 relative group" variants={imageVariants}>
                    <motion.img 
                        src="https://images.weserv.nl/?url=i.imgur.com/9v1zG1N.jpeg" 
                        alt="Campus Greening Initiative" 
                        className="w-full h-full object-cover rounded-3xl shadow-xl" 
                        loading="lazy"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
                <motion.div className="col-span-1 row-span-1 relative group" variants={imageVariants}>
                    <motion.img 
                        src="https://images.weserv.nl/?url=i.imgur.com/2s3Kz2T.jpeg" 
                        alt="Climate Action E-Magazine" 
                        className="w-full h-full object-cover rounded-3xl shadow-xl" 
                        loading="lazy"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Featured Initiatives Section */}
      <section className="container mx-auto px-4 py-24">
        <SectionHeader title="Featured Initiatives" subtitle="Our core projects making a tangible impact on our campus and community." />
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} isFeatured={true} />
          ))}
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="bg-gradient-to-br from-slate-50 to-primary-50 py-24">
        <div className="container mx-auto px-4">
            <SectionHeader title="Our Journey in Numbers" />
            <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
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
});

export default HomePage;
