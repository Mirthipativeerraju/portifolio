
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "veerrajumirthipati@gmail.com",
      action: () => window.open('mailto:veerrajumirthipati@gmail.com'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8247061835",
      action: () => window.open('tel:+918247061835'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Andhra Pradesh, India",
      action: () => {},
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-14 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-5">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto px-2">
            Let's discuss opportunities, projects, or just have a conversation about technology
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                Let's Connect
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or chat about the latest in web development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                  onClick={info.action}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-0">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r ${info.color} rounded-lg flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="font-semibold text-white text-sm sm:text-base">{info.label}</h4>
                        <p className="text-slate-300 text-xs sm:text-sm truncate">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4 sm:pt-6">
              <h4 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3">Find me on</h4>
              <div className="flex gap-2 sm:gap-3">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="glass-effect hover:scale-110 transition-all duration-300"
                  onClick={() => window.open('https://linkedin.com/in/veerraju-mirthipati-5a751a238', '_blank')}
                >
                  <span className="text-blue-400">in</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="glass-effect hover:scale-110 transition-all duration-300"
                >
                  <span className="text-slate-300">@</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="glass-effect hover:scale-110 transition-all duration-300"
                >
                  <span className="text-purple-400">💼</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 sm:mt-14 p-4 sm:p-6 md:p-8 glass-effect rounded-lg border border-white/10 mx-0 sm:mx-0">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Ready to work together?</h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-3 sm:mb-4">
            I'm currently open to new opportunities and interesting projects
          </p>
          <Button 
            size="default"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm"
            onClick={() => window.open('mailto:veerrajumirthipati@gmail.com')}
          >
            <Mail className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
