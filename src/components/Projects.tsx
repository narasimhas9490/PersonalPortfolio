import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Shield, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function Projects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

    const skillProjects = [
    {
      title: "Tiger Personal Assistant",
      technology: "Spring Boot + Angular",
      image: "/tiger.png",
      description: "Personal progress tracker with LinkedIn auto posting, task management, real-time analytics, and notifications.",
      impact: "Decresed user login time by 50% using Oauth2.0",
      liveUrl: "https://tiger-pro.vercel.app",
      githubUrl: "https://github.com/narasimhas9490/tiger-backend",
      featured: true
    },
     {
      title: "Photon elearning portal",
      technology: "NodeJs + Bootstrap + JavaScript",
      image: "/photon.png",
      description: "E-learning platform designed for EAPCET exam preparation, featuring secure login, live tests, instant results, and user data caching for seamless performance.",
impact: "Enabled 50+ students to take live mock tests with instant results, reducing test load time by 40% through caching.",

      liveUrl: "https://photonelearning.vercel.app/",
      githubUrl: "https://github.com/narasimhas9490/Photon-eLearning-Portal"
    },
    {
      title: "Quick Rental",
      technology: "SpringBoot + Bootstrap",
      image: "/rental.png",
      description: "Online bike rental platform with features like user registration, bike listings, booking system, and rental history tracking.",
impact: "Reduced manual booking errors by 70% through automated rental management.",

      liveUrl: "https://quick-rentals.onrender.com/",
      githubUrl: "https://github.com/narasimhas9490/quick-rentals-backend"
    },
   
    {
      title: "LeeTube Chrome Extention.",
      technology: "JavaScript + Html + CSS",
      image: "/leetube.png",
     description: "Chrome extension that fetches and displays YouTube solution videos for LeetCode problems directly on the problem page, enhancing coding practice efficiency.",
      impact: "100+ Active Users.Reduced searching time to absolute 0%.",
      liveUrl: "https://microsoftedge.microsoft.com/addons/detail/leetube/pccgfnamgkmhbohiekhmadealliamihg",
      githubUrl: "https://github.com/narasimhas9490/LeeTube"
    }
   
  ];


  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
            Featured Work
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Projects That Matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real applications solving real problems with measurable impact.
          </p>
        </motion.div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillProjects
            
            .map((project, index) => (
              
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 relative"
              >
                {
                  project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-black text-white border-black">
                        Featured
                      </Badge>
                    </div>
                  )
                }
                {/* Image */}
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                      <span className="text-xs font-medium text-gray-700">{project.technology}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h4 className="font-semibold text-black mb-3">{project.title}</h4>
                  
                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Impact */}
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">{project.impact}</span>
                  </div>

                  
                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-black text-white hover:bg-gray-800 flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
         
      </div>
    </section>
  );
}