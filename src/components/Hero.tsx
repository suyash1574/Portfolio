import React from 'react';
import { Download, Mail, ArrowRight, Sparkles, Code, Brain, Target } from 'lucide-react';
import { Button } from './ui/Button';
import resumePdf from '../components/resume.pdf'; // adjust path accordingly


export const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23f97316%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 animate-pulse"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg opacity-20">
            <Code className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="absolute top-32 right-20 animate-float-delayed">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg opacity-20">
            <Brain className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-32 left-32 animate-float-slow">
          <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg opacity-20">
            <Target className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-indigo-100 dark:from-orange-900/30 dark:to-indigo-900/30 px-6 py-3 rounded-full mb-8 border border-orange-200 dark:border-orange-800/50 animate-fade-in-up shadow-lg backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-400 animate-spin-slow" />
            <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm tracking-wide">
              AI Innovator • Future Civil Servant • Tech Visionary
            </span>
          </div>

          {/* Main Headline with Staggered Animation */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight animate-fade-in-up">
              <span className="block bg-gradient-to-r from-gray-900 via-orange-600 to-indigo-600 dark:from-white dark:via-orange-400 dark:to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
                Engineering Logic.
              </span>
              {/* <span className="block text-orange-600 dark:text-orange-400 animate-fade-in-up delay-300">
                Dharma Soul.
              </span> */}
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent animate-fade-in-up delay-500">
                AI Vision.
              </span>
            </h1>
          </div>

          {/* Enhanced Subtitle */}
          <div className="space-y-4 mb-12 animate-fade-in-up delay-700">
            <p className="text-xl md:text-3xl text-gray-700 dark:text-gray-200 font-light leading-relaxed max-w-5xl mx-auto">
              I'm <span className="font-bold text-orange-600 dark:text-orange-400 relative">
                Suyash Zinjurke
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-indigo-500 animate-expand"></div>
              </span> — 
              transforming ideas into intelligent solutions while preparing to serve the nation.
            </p>
            
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-orange-100 dark:border-orange-800/30 shadow-xl">
              <p className="text-lg text-gray-600 dark:text-gray-300 italic font-medium">
                "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत" 
                <br />
                <span className="text-base text-gray-500 dark:text-gray-400 not-italic">
                  "Arise, awake, and stop not till the goal is reached." - Swami Vivekananda
                </span>
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16 animate-fade-in-up delay-1000">
            <a href={resumePdf} download="Suyash-Zinjurke-Resume.pdf">
              <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <Download className="w-5 h-5 mr-2 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
              </Button>
            </a>

            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto group"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Let's Connect
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-4 gap-8 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-1200">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">AI Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Beginner</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2025</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">UPSC Target</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-blue-400 mb-2">2 Times</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">AFCAT Cleared</div>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="animate-bounce-slow">
            <button
              onClick={() => scrollToSection('#about')}
              className="group text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 transform hover:scale-110"
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Discover More
                </span>
                <ArrowRight className="w-8 h-8 rotate-90 group-hover:translate-y-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};