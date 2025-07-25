import { Project, SkillCategory, TimelineEvent, BlogPost } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Resume Website Builder',
    description: 'AI-powered tool to create professional resume websites instantly',
    longDescription: 'Built with React and integrated with GPT API to help users create professional resume websites. Features template selection, real-time editing, and deployment capabilities.',
    techStack: ['React', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '2',
    title: 'AI Interview Bot',
    description: 'Intelligent interview preparation assistant with real-time feedback',
    longDescription: 'Developed an AI-powered interview bot that conducts mock interviews, provides real-time feedback, and helps candidates improve their performance through natural language processing.',
    techStack: ['Python', 'FastAPI', 'OpenAI API', 'Speech Recognition', 'React'],
    imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '3',
    title: 'AI Image Generator',
    description: 'Creative image generation tool using advanced AI models',
    longDescription: 'Built a user-friendly interface for AI image generation using DALL-E and Stable Diffusion APIs. Features prompt optimization, style transfer, and batch generation.',
    techStack: ['Next.js', 'DALL-E API', 'Stable Diffusion', 'AWS S3', 'Prisma'],
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '4',
    title: 'Metro Dashboard',
    description: 'Real-time analytics dashboard for urban transportation',
    longDescription: 'Comprehensive dashboard for monitoring metro system performance, passenger flow, and operational metrics. Built for scalability and real-time data processing.',
    techStack: ['React', 'D3.js', 'Power BI', 'Python', 'PostgreSQL'],
    imageUrl: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Technical Skills',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Machine Learning', level: 85 },
      { name: 'Power BI', level: 80 },
      { name: 'React/TypeScript', level: 30 },
      { name: 'Data Analysis', level: 88 }
    ]
  },
  {
    category: 'AI Tools',
    skills: [
      { name: 'OpenAI API', level: 92 },
      { name: 'LangChain', level: 50 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Hugging Face', level: 70 },
      { name: 'Prompt Engineering', level: 95 }
    ]
  },
  {
    category: 'Personal Skills',
    skills: [
      { name: 'Leadership', level: 85 },
      { name: 'Discipline', level: 95 },
      { name: 'Strategic Thinking', level: 90 },
      { name: 'Public Speaking', level: 80 },
      { name: 'Time Management', level: 90 }
    ]
  }
];

export const timeline: TimelineEvent[] = [
  {
    id: '1',
    year: '2022',
    title: 'Higher Secondary Education',
    description: 'Completed 12th grade with focus on Science and Mathematics',
    type: 'education'
  },
  {
    id: '2',
    year: '2022',
    title: 'Started Engineering',
    description: 'Began Bachelor of Engineering with specialization in Computer Science',
    type: 'education'
  },
  {
    id: '3',
    year: '2023',
    title: 'AI & ML Discovery',
    description: 'Discovered passion for Artificial Intelligence and Machine Learning',
    type: 'achievement'
  },
  {
    id: '4',
    year: '2024',
    title: 'First AI Project',
    description: 'Built first machine learning project - Predictive Analytics Dashboard',
    type: 'achievement'
  },
  {
    id: '5',
    year: '2024',
    title: 'Advanced AI Research',
    description: 'Started research in advanced AI applications and deep learning',
    type: 'achievement'
  },
  {
    id: '6',
    year: '2026',
    title: 'Engineering Graduation',
    description: 'Completed Bachelor of Engineering with distinction',
    type: 'education'
  },

];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'GenAI: The Future of Software Development',
    excerpt: 'How generative AI is revolutionizing the way we build software',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI',
    imageUrl: 'https://images.pexels.com/photos/1904769/pexels-photo-1904769.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Agentic AI: Building Autonomous Systems',
    excerpt: 'Exploring the development of self-directed AI agents and their applications',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'AI',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Balancing Technology and Spirituality',
    excerpt: 'Finding harmony between modern innovation and ancient wisdom',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Spirituality',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];