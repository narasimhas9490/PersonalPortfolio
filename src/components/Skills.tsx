import React from 'react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

export default function Skills() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const skillProjects = [
    {
      title: "E-commerce Backend API",
      technology: "Spring Boot",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center",
      description: "RESTful API with JWT authentication, payment integration, and order management system.",
      impact: "Handles 1000+ concurrent users",
      liveUrl: "https://api-demo.example.com",
      githubUrl: "https://github.com/username/springboot-api",
      featured: true
    },
    {
      title: "Real-time Analytics Dashboard",
      technology: "Angular",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      description: "Interactive dashboard with charts, real-time data updates, and responsive design.",
      impact: "Reduced data analysis time by 70%",
      liveUrl: "https://dashboard-demo.example.com",
      githubUrl: "https://github.com/username/angular-dashboard"
    },
    {
      title: "Task Management App",
      technology: "React",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      description: "Modern task manager with drag-and-drop, real-time collaboration, and notifications.",
      impact: "Improved team productivity by 45%",
      liveUrl: "https://taskapp-demo.example.com",
      githubUrl: "https://github.com/username/react-taskapp"
    },
    {
      title: "Inventory Management System",
      technology: "Java",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center",
      description: "Desktop application for inventory tracking with barcode scanning and reporting.",
      impact: "Reduced inventory errors by 85%",
      liveUrl: "#",
      githubUrl: "https://github.com/username/java-inventory"
    },
    {
      title: "Portfolio Website",
      technology: "TypeScript + React",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center",
      description: "Responsive portfolio with smooth animations, contact forms, and SEO optimization.",
      impact: "98% performance score",
      liveUrl: "https://portfolio-demo.example.com",
      githubUrl: "https://github.com/username/portfolio"
    },
    {
      title: "Interactive Web Components",
      technology: "JavaScript + HTML + CSS",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop&crop=center",
      description: "Reusable web components with vanilla JavaScript, modern CSS, and accessibility features.",
      impact: "100% accessibility compliance",
      liveUrl: "https://components-demo.example.com",
      githubUrl: "https://github.com/username/web-components"
    }
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <Badge className="mb-4 bg-gray-100 text-gray-800 border-gray-200">
            Technical Skills
          </Badge>
          <h2 className="mb-4">Skills</h2>
         
        </motion.div>


        {/* Technologies Summary */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <h4 className="font-semibold text-black mb-4">Core Technologies</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {['Spring Boot', 'Angular', 'React','MySQL', 'Java', 'TypeScript', 'JavaScript', 'HTML', 'CSS'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full font-medium text-gray-700 hover:border-gray-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
          
      </div>
      
    </section>
  );
}