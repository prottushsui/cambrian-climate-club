import { motion } from 'framer-motion';

const ClimateChroniclesPage = () => (
  <div className="container mx-auto px-4 py-24 min-h-[70vh] flex items-center justify-center">
    <motion.section
      className="max-w-3xl w-full text-center"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-primary-700 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
        Climate Chronicles
      </p>
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-charcoal-900">
        Something worth reading is taking shape.
      </h1>
      <p className="mt-6 text-lg md:text-xl text-charcoal-600 leading-relaxed">
        Prottush is working on this page right now.
        <br />
        Please be patient — it’ll be ready soon.
      </p>
      <motion.div
        className="mt-10 mx-auto h-1 w-20 rounded-full bg-coral-500"
        animate={{ width: [48, 80, 48] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.section>
  </div>
);

export default ClimateChroniclesPage;
