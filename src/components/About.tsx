import React from 'react';
import { BookOpen, Target, Heart, Zap, Award, Users, Lightbulb, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-indigo-50/50 dark:from-orange-900/10 dark:to-indigo-900/10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-200 to-indigo-200 dark:from-orange-800 dark:to-indigo-800 rounded-full opacity-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
              <div className="relative">
                <img
                  src="D:\Projects\0 build using Ai\project-bolt-sb1-7bbta3p3\project\src\components\hero.jpg"
                  alt="Suyash Zinjurke"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-white dark:border-gray-700"
                />
                {/* Overlay Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">Future Leader</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full opacity-20 animate-float-delayed"></div>
            <div className="absolute top-1/2 -left-12 w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-15 animate-float-slow"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-indigo-100 dark:from-orange-900/30 dark:to-indigo-900/30 px-4 py-2 rounded-full border border-orange-200 dark:border-orange-800/50">
                <Users className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-orange-600 dark:text-orange-400 font-medium text-sm">
                  Engineering Graduate • AI Enthusiast • Future Civil Servant
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-orange-600 dark:from-white dark:to-orange-400 bg-clip-text text-transparent leading-tight">
                Bridging Technology & Service
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-indigo-500 rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 space-y-6">
              <p className="text-lg leading-relaxed">
                My journey began with a simple question: <em>"How can technology serve humanity better?"</em> 
                This curiosity evolved into a passion for <span className="font-semibold text-orange-600 dark:text-orange-400">Artificial Intelligence</span> 
                and its transformative potential in solving real-world challenges.
              </p>
              
              <p className="text-lg leading-relaxed">
                As a Computer Science graduate, I've witnessed firsthand how AI can revolutionize industries. 
                But technology alone isn't enough. Guided by <span className="font-semibold text-orange-600 dark:text-orange-400">Dharmic principles</span> 
                and the philosophy of <em>"Seva Paramo Dharma"</em> (Service is the highest duty), I'm preparing 
                for the UPSC Civil Services to channel my technical expertise into meaningful public service.
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-indigo-50 dark:from-orange-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border border-orange-100 dark:border-orange-800/30">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 italic">
                  "Whether I'm developing AI models, studying constitutional frameworks, or reflecting on the 
                  Bhagavad Gita's teachings, my approach remains constant: excellence in service to something 
                  greater than myself."
                </p>
              </div>
            </div>

            {/* Enhanced Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="group p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl border border-orange-200 dark:border-orange-800/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Lifelong Learning</h3>
                    <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">Never stop growing</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-2xl border border-indigo-200 dark:border-indigo-800/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Purpose Driven</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Service before self</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl border border-green-200 dark:border-green-800/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Dharmic Values</h3>
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">Ancient wisdom</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl border border-purple-200 dark:border-purple-800/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Innovation</h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Future focused</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-gray-900 to-indigo-900 dark:from-gray-800 dark:to-indigo-800 text-white p-8 rounded-3xl shadow-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-orange-400" />
                <h3 className="text-2xl font-bold">My Mission</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                To become a bridge between cutting-edge technology and compassionate governance, 
                using AI and dharmic leadership to create a more equitable and prosperous India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};