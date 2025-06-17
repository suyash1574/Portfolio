import React, { useState } from 'react';
import { ExternalLink, Github, Star, ArrowRight, Zap, Users, Award } from 'lucide-react';
import { projects } from '../data/portfolio';
import { Card, CardContent, CardFooter } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const filters = [
    { id: 'all', label: 'All Projects', icon: Zap },
    { id: 'ai', label: 'AI & ML', icon: Star },
    { id: 'web', label: 'Web Apps', icon: Users },
    { id: 'featured', label: 'Featured', icon: Award }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 dark:from-gray-900 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-indigo-200 dark:from-orange-800 dark:to-indigo-800 rounded-full opacity-10 -translate-x-48 -translate-y-48 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 rounded-full opacity-10 translate-x-40 translate-y-40 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-indigo-100 dark:from-orange-900/30 dark:to-indigo-900/30 px-4 py-2 rounded-full mb-6 border border-orange-200 dark:border-orange-800/50">
            <Star className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-orange-600 dark:text-orange-400 font-medium text-sm">
              Innovation Portfolio
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-600 dark:from-white dark:to-orange-400 bg-clip-text text-transparent">
            Transforming Ideas into Reality
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-indigo-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative projects that blend cutting-edge AI, intuitive design, 
            and real-world problem solving to create meaningful impact.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-orange-500 to-indigo-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={project.id} className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-transparent hover:border-orange-200 dark:hover:border-orange-800/50">
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="warning" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                
                <CardContent className="pt-8 pb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-medium">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="default" className="text-xs">
                        +{project.techStack.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0 pb-8">
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                    View Project Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                More Innovations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Additional projects showcasing diverse technical skills and creative problem-solving approaches.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex h-full">
                    <div className="relative w-40 flex-shrink-0">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-l-xl group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 group-hover:to-black/40 transition-all duration-300"></div>
                    </div>
                    
                    <CardContent className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200">
                          {project.title}
                        </h4>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        {project.liveUrl && (
                          <Button variant="ghost" size="sm" className="p-2 hover:bg-orange-50 dark:hover:bg-orange-900/20">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="ghost" size="sm" className="p-2 hover:bg-orange-50 dark:hover:bg-orange-900/20">
                            <Github className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's work together to build innovative solutions that make a real difference in the world.
              </p>
              <Button variant="outline" size="lg" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-orange-600">
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};