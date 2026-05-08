import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code2, Layers, ShieldCheck, Briefcase, LucideIcon, Construction } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
  icon: LucideIcon;
}

const projects: Project[] = [
  {
    id: 'shiny-dex',
    title: 'Shiny Living Dex Tracker',
    description: 'A comprehensive tracking tool for Pokémon enthusiasts to track their Shiny Living Pokédex Progress. Features a clean UI for tracking progress across different generations and forms, linked to mongoDB to store and manage user data.',
    tags: ['TypeScript', 'JavaScript', 'HTML/CSS', 'MongoDB', 'Vite', 'Node.js', 'Firebase Auth', 'Cloudflare', 'UI/UX'],
    github: 'https://github.com/SpencerVaughan96498A/ShinyLivingDexTracker',
    demo: 'https://spencervaughan96498a.github.io/ShinyLivingDexTracker/',
    image: "/assets/img/ShinyLivingDexTracker.png" ,
    icon: Code2,
  },
  {
    id: 'vex-lemon',
    title: 'VURC 2023-2024 Season',
    description: 'Documentation and repository for the 2023-2024 Vex U Robotics Competition season. Includes the 251-page Engineering Notebook documenting Mechanical, Electrical & Software work and providing information about the "Lemon" control system repository, visualisation in programming, path planning, and more.',
    tags: ['C++', 'Rust', 'Embedded Systems', 'Sensor Fusion', 'Control Systems', 'Motion Control', 'Path Planning', 'Hardware-Software Integration', 'Project Management', 'Technical Documentation', 'Visualisation'],
    github: 'https://github.com/EMU5-Robotics/lemon',
    demo: 'https://drive.google.com/file/d/1GU2v2WG3blK76SLil9Ia8pGkSQq2gRhi/view?usp=sharing',
    image: "/assets/img/ProjectLemon2.png",
    icon: Layers,
  },
  {
    id: 'coming-soon-1',
    title: 'TBC',
    description: 'New project currently in development. Stay tuned for updates on technical implementation and system architecture.',
    tags: ['Coming Soon'],
    image: 'https://picsum.photos/seed/placeholder-1/800/400',
    icon: Construction,
  },
  {
    id: 'coming-soon-2',
    title: 'TBC',
    description: 'New project currently in development. Stay tuned for updates on technical implementation and system architecture.',
    tags: ['Coming Soon'],
    image: 'https://picsum.photos/seed/placeholder-2/800/400',
    icon: Construction,
  },
];

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = React.useState(projects[0].id);

  const activeProject = projects.find(p => p.id === activeTab)!;

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Tabs List */}
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 md:w-64 shrink-0">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={`px-4 py-3 text-left rounded-lg transition-all duration-200 flex items-center gap-3 whitespace-nowrap ${
                activeTab === project.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'hover:bg-black/5 text-primary/60'
              }`}
            >
              <project.icon size={16} className="shrink-0" />
              <span className="font-medium">{project.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <img 
                src={activeProject.image} 
                alt={activeProject.title}
                className="w-full h-48 object-cover border-b border-black/5"
                referrerPolicy="no-referrer"
              />
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                  <div className="flex gap-3">
                    {activeProject.github && (
                      <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-black/5 rounded-full transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {activeProject.demo && (
                      <a href={activeProject.demo} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-black/5 rounded-full transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-primary/70 mb-6 leading-relaxed">
                  {activeProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black/5 rounded-full text-xs font-medium text-primary/60 flex items-center gap-1.5">
                      <Code2 size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
