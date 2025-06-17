import React from 'react';
import { skillCategories } from '../data/portfolio';

export const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-orange-600 dark:from-white dark:to-orange-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-indigo-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive blend of technical expertise, AI proficiency, and personal qualities 
            that drive success in both technology and leadership.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.category} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          categoryIndex === 0 
                            ? 'bg-gradient-to-r from-orange-500 to-orange-600' 
                            : categoryIndex === 1 
                            ? 'bg-gradient-to-r from-indigo-500 to-indigo-600'
                            : 'bg-gradient-to-r from-green-500 to-green-600'
                        }`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications/Achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Certifications & Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AWS Cloud Practitioner', org: 'Amazon Web Services', year: '2023' },
              { title: 'Machine Learning Specialization', org: 'Stanford University', year: '2022' },
              { title: 'Python for Data Science', org: 'IBM', year: '2022' },
              { title: 'Engineering Excellence Award', org: 'University', year: '2024' }
            ].map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{cert.org}</p>
                <p className="text-xs text-orange-600 dark:text-orange-400 font-medium mt-1">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};