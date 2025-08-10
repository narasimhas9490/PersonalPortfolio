import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Calendar, MapPin, Code, Zap, ExternalLink, Linkedin, Mail, Github, FolderOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface HeroProps {
  onScheduleClick: () => void;
}

export default function Hero({ onScheduleClick }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Status Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800">Available for Hire</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-sm text-gray-600">Andhra Pradesh, India</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-gray-100 to-green-600">
  Sri Lakshmi Narasimha
</h1>


            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Full-Stack Java Developer
            </h2>
          </motion.div>
          
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into scalable digital solutions with{' '}
              <span className="text-black font-semibold">modern technologies</span> and{' '}
              <span className="text-black font-semibold">proven expertise</span>.
            </p>
            
            {/* Experience Stats */}
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">6+ Months Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Competative Programmer</span>
              </div>
            </div>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              onClick={onScheduleClick}
              className="inline-flex items-center gap-2 bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Schedule Interview
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <Button
              variant="outline"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors"
              onClick={() => window.open('https://github.com/narasimhas9490/PersonalPortfolio/blob/main/public/SettipalliSriLakshmiNarasimha.pdf', '_blank')}
            >
             
              <FolderOpen className="w-4 h-4"  />
              View Resume
            </Button>
          </motion.div>
          <div className="flex items-center space-x-4 justify-center">
            <a
              href="https://github.com/narasimhas9490"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/narasimhas9490"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:narasimhas9490@gmail.com"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
             <a
              href="https://leetcode.com/u/narasimhas9490/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <img src='/leetcode.svg' alt='leetcode' className="w-5 h-5" />
            </a>
          </div>

          {/* Recent Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-8"
          >
            <p className="text-sm text-gray-500 mb-3">Recent Achievement</p>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg max-w-2xl mx-auto">
              <p className="text-sm text-blue-900 leading-relaxed">
                <a href='https://tiger-pro.vercel.app' target='_blank' className="font-semibold inline-flex items-center text-green-400">Tiger <ExternalLink className="w-4 h-4" /> </a> successfully <span className="font-semibold">serving 20+ users</span> to react their targets and using {' '}
                <span className="font-semibold">LinkedIn Auto Posting</span> - Try it now!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}