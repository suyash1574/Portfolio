import React from 'react';
import { GraduationCap, Award, Target, Calendar } from 'lucide-react';
import { timeline } from '../data/portfolio';

export const Timeline: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'achievement':
        return Award;
      case 'goal':
        return Target;
      default:
        return Calendar;
    }
  };

  const getColorClasses = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-indigo-500 border-indigo-200';
      case 'achievement':
        return 'bg-green-500 border-green-200';
      case 'goal':
        return 'bg-orange-500 border-orange-200';
      default:
        return 'bg-gray-500 border-gray-200';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-orange-600 dark:from-white dark:to-orange-400 bg-clip-text text-transparent">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-indigo-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From engineering student to AI enthusiast to tech innovator — a timeline of growth, 
            learning, and technological progression.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-indigo-500 via-green-500 to-orange-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {timeline.map((event, index) => {
              const IconComponent = getIcon(event.type);
              const isLeft = index % 2 === 0;
              
              return (
                <div key={event.id} className={`flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                  <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-center lg:justify-start space-x-2 mb-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          event.type === 'education' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' :
                          event.type === 'achievement' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                          'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                        }`}>
                          {event.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 my-4 lg:my-0">
                    <div className={`w-16 h-16 rounded-full border-4 ${getColorClasses(event.type)} dark:border-gray-600 flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-indigo-600 rounded-2xl p-8 text-white">
            <Target className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Vision 2030</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              To push the boundaries of artificial intelligence and software innovation, leading breakthrough 
              technological solutions while fostering technical leadership and mentoring future innovators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};