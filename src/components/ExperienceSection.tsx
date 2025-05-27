
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Award, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Franklin Tech Systems Pvt. Ltd.",
      role: "Full Stack Intern",
      period: "2023",
      location: "Remote",
      type: "Internship",
      description: "Worked on full-stack web development projects using modern technologies and frameworks",
      achievements: [
        "Developed responsive web applications",
        "Collaborated with senior developers",
        "Implemented RESTful APIs"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "IBM",
      role: "Cloud Computing Intern",
      period: "2022",
      location: "Virtual",
      type: "Internship",
      description: "Gained hands-on experience with cloud technologies and IBM Cloud platform",
      achievements: [
        "Learned cloud deployment strategies",
        "Worked with IBM Watson services",
        "Completed cloud certification modules"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "TCS",
      role: "Youth Employability Program",
      period: "2022",
      location: "Virtual",
      type: "Training Program",
      description: "Comprehensive training program focused on industry-ready skills and professional development",
      achievements: [
        "Enhanced programming skills",
        "Learned industry best practices",
        "Completed certification assessments"
      ],
      color: "from-green-500 to-blue-500"
    }
  ];

  const certifications = [
    {
      title: "MTA: Introduction to Programming using Java",
      issuer: "Microsoft",
      year: "2023",
      type: "Technical Certification"
    },
    {
      title: "NSP PG Scholarship",
      issuer: "Government of India",
      year: "2023",
      type: "Academic Achievement",
      description: "Top 5000 students nationwide"
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Professional journey through internships and significant accomplishments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Experience Timeline */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2">
              <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
              Professional Experience
            </h3>
            
            <div className="relative pl-2 sm:pl-6">
              {/* Timeline Line */}
              <div className="absolute left-0 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex gap-6 pb-8">
                  {/* Timeline Dot */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center z-10 shadow-lg`}>
                    <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  
                  {/* Experience Card */}
                  <Card className="flex-1 glass-effect border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-white text-base sm:text-lg">{exp.role}</CardTitle>
                        <Badge className={`bg-gradient-to-r ${exp.color} text-white w-fit text-xs sm:text-sm`}>
                          {exp.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-blue-300 font-medium text-sm sm:text-base">
                        {exp.company}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-slate-400 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 text-sm sm:text-base mb-3 sm:mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm sm:text-base">
                            <span className="text-green-400 mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-6 mt-10 sm:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2">
              <Award className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
              Certifications & Awards
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group"
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-white text-base sm:text-lg mb-1 sm:mb-2">
                          {cert.title}
                        </CardTitle>
                        <CardDescription className="text-blue-300 text-sm sm:text-base">
                          {cert.issuer} • {cert.year}
                        </CardDescription>
                        {cert.description && (
                          <p className="text-green-400 text-xs sm:text-sm mt-1 sm:mt-2 font-medium">
                            {cert.description}
                          </p>
                        )}
                      </div>
                      <Badge 
                        variant="outline" 
                        className="border-yellow-400/30 text-yellow-300 sm:ml-4 text-xs sm:text-sm w-fit"
                      >
                        {cert.type}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
