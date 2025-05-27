
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, GraduationCap, Code, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-5">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 animate-slide-in-right order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">
                I'm a passionate full stack developer currently pursuing MCA at Aditya Engineering College. 
                With hands-on experience in real-world projects and internships at{' '}
                <span className="text-blue-400 font-semibold">TCS</span>,{' '}
                <span className="text-blue-400 font-semibold">IBM</span>, and{' '}
                <span className="text-blue-400 font-semibold">Franklin Tech</span>, 
                I bring both academic excellence and practical expertise.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                My journey in technology is driven by curiosity and a desire to solve real-world problems 
                through innovative solutions. I enjoy working on projects that challenge me to learn new 
                technologies and push the boundaries of what's possible.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
              <div className="text-center p-3 sm:p-4 glass-effect rounded-lg">
                <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">3+</div>
                <div className="text-xs text-slate-400">Internships</div>
              </div>
              <div className="text-center p-3 sm:p-4 glass-effect rounded-lg">
                <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">10+</div>
                <div className="text-xs text-slate-400">Projects</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <Card className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <div>
                      <h3 className="font-semibold text-white text-xs sm:text-sm md:text-base">Education</h3>
                      <p className="text-slate-400 text-xs">MCA at Aditya Engineering College</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-base">Expertise</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">Full Stack Development</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-base">Goal</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">Building scalable solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
