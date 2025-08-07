import React from 'react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-world experience building production applications
          </p>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <Card className="bg-gradient-to-br from-card to-blue-50/50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl">Systems Engineer (Full Stack Java)</h3>
                  <p className="text-blue-600 font-medium">Infosys Limited</p>
                  <p className="text-sm text-muted-foreground">Feb 2025 - Present</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Developed a comprehensive healthcare management system with 
                role-based authentication and real-time appointment scheduling capabilities.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Improved scheduling efficiency by 85% through optimized database queries</li>
                  <li>• Implemented secure JWT-based authentication for 3 user roles</li>
                  <li>• Enhanced user experience with responsive Angular frontend</li>  
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {['Spring Boot', 'Angular', 'MySQL', 'Spring Security', 'JWT'].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}