import React from 'react';
import { motion } from 'framer-motion';

/**
 * Color Palette Demo Page - Showcases the posh climate-focused color palette
 * 
 * @component
 * @example
 * return (
 *   <ColorPaletteDemo />
 * )
 */
const ColorPaletteDemo: React.FC = () => {
  const colorGroups = [
    {
      name: 'Primary Colors',
      description: 'Deep Ocean Blue representing the depths of our planet\'s waters',
      colors: [
        { name: 'Deep Ocean Blue', hex: '#0F3D5C', var: 'primary-600', desc: 'Primary brand color' },
        { name: 'Ocean Blue Light', hex: '#2F7DA6', var: 'primary-500', desc: 'Lighter variant' },
        { name: 'Ocean Blue Dark', hex: '#061925', var: 'primary-900', desc: 'Darker variant' },
      ]
    },
    {
      name: 'Secondary Colors',
      description: 'Misty Teal reflecting the balance between land and sea',
      colors: [
        { name: 'Misty Teal', hex: '#4C8C8C', var: 'secondary-600', desc: 'Secondary brand color' },
        { name: 'Teal Light', hex: '#539E9E', var: 'secondary-500', desc: 'Lighter variant' },
        { name: 'Teal Dark', hex: '#1F3838', var: 'secondary-900', desc: 'Darker variant' },
      ]
    },
    {
      name: 'Accent Colors',
      description: 'Sunset Coral bringing warmth and energy to the palette',
      colors: [
        { name: 'Sunset Coral', hex: '#E68A7D', var: 'accent-600', desc: 'Accent color' },
        { name: 'Coral Light', hex: '#F3826F', var: 'accent-500', desc: 'Lighter variant' },
        { name: 'Coral Dark', hex: '#9B5448', var: 'accent-900', desc: 'Darker variant' },
      ]
    },
    {
      name: 'Background & Text',
      description: 'Neutral tones that provide excellent contrast and readability',
      colors: [
        { name: 'Sandstone Beige', hex: '#D9C7A0', var: 'background-500', desc: 'Warm background' },
        { name: 'Charcoal Grey', hex: '#2E2E2E', var: 'text-900', desc: 'Primary text' },
        { name: 'Cloud White', hex: '#F4F4F2', var: 'highlight-500', desc: 'Clean highlights' },
      ]
    }
  ];

  const uiElements = [
    {
      title: 'Premium Button',
      component: (
        <div className="flex flex-col space-y-4">
          <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-md">
            Primary Action
          </button>
          <button className="px-6 py-3 bg-secondary-600 text-white rounded-lg font-medium hover:bg-secondary-700 transition-colors shadow-md">
            Secondary Action
          </button>
          <button className="px-6 py-3 bg-accent-600 text-white rounded-lg font-medium hover:bg-accent-700 transition-colors shadow-md">
            Accent Action
          </button>
        </div>
      )
    },
    {
      title: 'Card Component',
      component: (
        <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-2">Climate Initiative</h3>
          <p className="text-muted-foreground mb-4">A sustainable project aimed at reducing carbon emissions</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-accent">Ongoing</span>
            <span className="text-sm font-medium">75% Complete</span>
          </div>
        </div>
      )
    },
    {
      title: 'Navigation Example',
      component: (
        <nav className="flex space-x-6 p-4 bg-background rounded-lg">
          <a href="#" className="text-primary font-medium">Home</a>
          <a href="#" className="text-foreground hover:text-primary">Projects</a>
          <a href="#" className="text-foreground hover:text-primary">About</a>
          <a href="#" className="text-foreground hover:text-primary">Contact</a>
        </nav>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background-50 dark:bg-background-950 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Posh Climate Color System
          </h1>
          <p className="text-xl text-text-600 max-w-3xl mx-auto">
            An elegant, climate-focused color palette designed for premium sustainability experiences
          </p>
        </motion.div>

        {/* Color Palette Grid */}
        <div className="space-y-16 mb-20">
          {colorGroups.map((group, groupIndex) => (
            <motion.div 
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-2">{group.name}</h2>
              <p className="text-text-600 mb-6">{group.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {group.colors.map((color, index) => (
                  <motion.div 
                    key={color.hex}
                    className="bg-card rounded-xl p-6 shadow-md border border-border"
                    whileHover={{ y: -5 }}
                  >
                    <div 
                      className="w-full h-24 rounded-lg mb-4 shadow-inner" 
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <h3 className="font-semibold text-foreground">{color.name}</h3>
                    <p className="text-sm text-muted-foreground">{color.desc}</p>
                    <div className="flex items-center justify-between mt-2">
                      <code className="text-xs bg-muted px-2 py-1 rounded">{color.hex}</code>
                      <code className="text-xs text-accent">{color.var}</code>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* UI Components Showcase */}
        <div className="space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">UI Component Examples</h2>
            <p className="text-text-600">
              How the color palette applies to various interface elements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {uiElements.map((element, index) => (
              <motion.div 
                key={element.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-lg border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{element.title}</h3>
                {element.component}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gradient Examples */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Premium Gradients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              className="h-32 rounded-xl shadow-lg flex items-center justify-center text-white font-bold"
              style={{ 
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              }}
            >
              Climate Gradient
            </div>
            <div 
              className="h-32 rounded-xl shadow-lg flex items-center justify-center text-white font-bold"
              style={{ 
                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              }}
            >
              Earth Gradient
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ColorPaletteDemo;