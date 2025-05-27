
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, Code } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "SmartRecruiter",
      description: "A comprehensive full-stack hiring platform with advanced features",
      shortDesc: "Full-stack hiring platform with resume upload and job tracking",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Multer", "Nodemailer"],
      features: [
        "Resume upload and management system",
        "Automated email notifications",
        "Real-time job tracking dashboard",
        "Candidate filtering and search",
        "Interview scheduling system",
        "Admin panel for recruiters"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      title: "Game Zone",
      description: "Sports complex booking system with dual user interfaces",
      shortDesc: "Booking system for sports complexes with user and admin modules",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "User registration and authentication",
        "Real-time slot booking system",
        "Payment integration",
        "Admin dashboard for management",
        "Booking history and analytics",
        "Mobile-responsive design"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600",
      color: "from-green-500 to-blue-500",
      liveDemoLink: "https://teamgamezone.infy.uk/index.php"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Showcasing real-world applications built with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`}></div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <Badge className="bg-black/50 text-white border-white/20">
                    {project.technologies[0]}
                  </Badge>
                </div>
              </div>

              <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-4">
                <CardTitle className="text-white flex items-center gap-2 text-lg sm:text-xl">
                  <Code className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-300 text-sm sm:text-base">
                  {project.shortDesc}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="border-blue-400/30 text-blue-300 hover:bg-blue-400/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="border-slate-400/30 text-slate-400">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-3 sm:pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1 border-blue-400/30 text-blue-300 hover:bg-blue-400/10 text-sm sm:text-base">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="glass-effect border-white/20 text-white max-w-2xl max-h-[80vh] overflow-y-auto p-4 sm:p-6">
                      <DialogHeader>
                        <DialogTitle className="text-2xl gradient-text">{project.title}</DialogTitle>
                        <DialogDescription className="text-slate-300">
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {/* Project Image in Modal */}
                        <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40`}></div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-300">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge 
                                key={tech}
                                className="bg-blue-500/20 text-blue-300 border-blue-400/30"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-300">Key Features</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-slate-300">
                                <span className="text-green-400 mt-1">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                          <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-sm sm:text-base">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                          <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10 text-sm sm:text-base">
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-purple-400/30 text-purple-300 hover:bg-purple-400/10 h-10 w-full sm:h-10 sm:w-10"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sm:hidden ml-2">View Code</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects Button 
        <div className="text-center mt-10 sm:mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="glass-effect border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-2 text-sm sm:text-base"
          >
            View More Projects
          </Button>
        </div>*/}
      </div>
    </section>
  );
};

export default ProjectsSection;
