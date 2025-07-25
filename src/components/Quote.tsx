import React from 'react';
import { Quote as QuoteIcon, Bot as Lotus, Sparkles } from 'lucide-react';

export const Quote: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-indigo-600 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%22100%22%20height=%22100%22%20viewBox=%220%200%20100%20100%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22white%22%20fill-opacity=%220.1%22%3E%3Cpath%20d=%22M50%2015c19.33%200%2035%2015.67%2035%2035S69.33%2085%2050%2085%2015%2069.33%2015%2050s15.67-35%2035-35zm0%2010c-13.81%200-25%2011.19-25%2025s11.19%2025%2025%2025%2025-11.19%2025-25-11.19-25-25-25z%22/%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 animate-float">
          <Sparkles className="w-8 h-8 text-white/20" />
        </div>
        <div className="absolute top-40 right-32 animate-float-delayed">
          <Sparkles className="w-6 h-6 text-white/15" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float-slow">
          <Sparkles className="w-10 h-10 text-white/10" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Decorative Element */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-2xl border border-white/30">
                <Lotus className="w-12 h-12 text-white animate-pulse" />
              </div>
              <div className="absolute -inset-4 bg-white/10 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="relative mb-12">
            <div className="absolute -top-8 -left-8 opacity-30">
              <QuoteIcon className="w-20 h-20 text-white transform -rotate-12" />
            </div>
            
            <div className="space-y-8">
              {/* Sanskrit Quote */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <blockquote className="text-2xl md:text-4xl font-bold text-white mb-4 leading-relaxed">
                  "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत"
                </blockquote>
                <div className="text-white/80 text-lg font-medium italic">
                  — Katha Upanishad
                </div>
              </div>
              
              {/* English Translation */}
              <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl">
                <blockquote className="text-xl md:text-3xl font-semibold text-white leading-relaxed">
                  "Arise, awake, and stop not till the goal is reached."
                </blockquote>
                <div className="text-white/80 text-lg font-medium mt-4">
                  — As popularized by Swami Vivekananda
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 opacity-30">
              <QuoteIcon className="w-20 h-20 text-white transform rotate-12 scale-x-[-1]" />
            </div>
          </div>

          {/* Personal Reflection */}
          <div className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md rounded-3xl p-10 max-w-5xl mx-auto border border-white/30 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-0.5 bg-white/50 rounded-full"></div>
              <div className="mx-4 w-3 h-3 bg-white/70 rounded-full"></div>
              <div className="w-16 h-0.5 bg-white/50 rounded-full"></div>
            </div>
            
            <p className="text-white/95 text-lg md:text-xl leading-relaxed font-medium">
              This timeless wisdom from our ancient scriptures illuminates my path from engineering to public service. 
              Every algorithm I code, every Technical concept I master, every moment I spend in contemplation — 
              all are steps toward awakening my potential to serve humanity. The journey of 
              <span className="font-bold text-yellow-200"> dharma </span> 
              isn't just about personal achievement, but about rising to lift others as we ascend.
            </p>
            
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              <div className="text-yellow-200 font-semibold tracking-wider text-sm">
                SEVA PARAMO DHARMA
              </div>
              <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-3 mt-12">
            <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse delay-300"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-500"></div>
            <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse delay-700"></div>
            <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};