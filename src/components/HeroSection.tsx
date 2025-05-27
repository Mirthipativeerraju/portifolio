
import React from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const { toast } = useToast();

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1biUKDgauDQRDBIDx3Nnai3Byt2RlGSR8/view?usp=drivesdk', '_blank');
    toast({
      title: "Resume Download",
      description: "Resume download would be implemented here",
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 mb-6 sm:mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-glow">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="https://i.ibb.co/LXsnvT7N/Veerraju.png" 
                  alt="Mirthipati Veerraju"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-10"></div>
          </div>

          {/* Name and Title */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Mirthipati{' '}
              <span className="gradient-text block sm:inline mt-1 sm:mt-0">Veerraju</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-200 font-medium">
              Full Stack Developer
              <span className="hidden sm:inline"> | </span>
              <span className="block sm:inline">MCA Student</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto px-2 sm:px-4">
              Crafting digital experiences with modern technologies and passionate about building scalable web applications
            </p>
          </div>

          {/* Location and Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base text-slate-300 px-4">
            <span className="flex items-center gap-2">
              📍 Andhra Pradesh, India
            </span>
            <span className="hidden sm:block">•</span>
            <span className="text-center break-all sm:break-normal">veerrajumirthipati@gmail.com</span>
            <span className="hidden sm:block">•</span>
            <span>+91 8247061835</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
            <Button 
              size="lg" 
              onClick={handleDownloadResume}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </Button>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon"
                className="glass-effect hover:scale-110 transition-all duration-300"
                onClick={() => window.open('mailto:veerrajumirthipati@gmail.com')}
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                className="glass-effect hover:scale-110 transition-all duration-300"
                onClick={() => window.open('https://linkedin.com/in/veerraju-mirthipati-5a751a238', '_blank')}
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                className="glass-effect hover:scale-110 transition-all duration-300"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
