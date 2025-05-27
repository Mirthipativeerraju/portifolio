
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C", "Java", "Python"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["HTML", "CSS", "JavaScript"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["PHP", "Node.js"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Database Management",
      icon: "🗄️",
      skills: ["MySQL", "MongoDB"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Additional Skills",
      icon: "⚡",
      skills: ["Typing Speed (35 WPM)"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-5">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-4">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-14 md:mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-2 sm:pb-3 md:pb-4 px-4 sm:px-6 pt-4 sm:pt-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-white text-sm sm:text-base md:text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors duration-300 text-xs px-2 py-0.5 sm:px-2.5 sm:py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center mb-4 sm:mb-6 md:mb-8">Proficiency Levels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {[
              { skill: "JavaScript", level: 85 },
              { skill: "React/Node.js", level: 80 },
              { skill: "PHP/MySQL", level: 90 },
              { skill: "Python", level: 75 },
              { skill: "MongoDB", level: 70 },
              { skill: "Java", level: 85 }
            ].map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between text-white text-xs sm:text-sm md:text-base">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-blue-400">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-1.5 sm:h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
