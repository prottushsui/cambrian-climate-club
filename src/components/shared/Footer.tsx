import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-emerald-700 to-green-800 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-full bg-white/20">
                <Leaf className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Cambrian Climate Club</span>
            </div>
            <p className="text-emerald-100 mb-4 max-w-md">
              Dedicated to promoting environmental awareness and sustainability initiatives 
              within our school community and beyond. Together, we're building a greener future.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-emerald-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-emerald-100 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-emerald-100 hover:text-white transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-emerald-100 hover:text-white transition-colors">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-200" />
                <span className="text-emerald-100">Cambrian School & College, Campus 2</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-200" />
                <span className="text-emerald-100">+880-1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-200" />
                <span className="text-emerald-100">info@cambrianclimateclub.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-emerald-100">
            © {new Date().getFullYear()} Cambrian Climate Club. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;