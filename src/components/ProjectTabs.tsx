import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code2, Layers } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Motion Profiling & Path Following',
    description: 'Developed a custom S-curve motion profiling library for holonomic drivetrains, implementing Pure Pursuit and Ramsete controllers for high-precision autonomous navigation.',
    tags: ['C++', 'Control Theory', 'WPILib', 'Eigen'],
    github: 'https://github.com',
    image: 'https://picsum.photos/seed/robotics-path/800/400',
  },
  {
    id: '2',
    title: 'PID Control Tuning Suite',
    description: 'A real-time telemetry and visualization tool for tuning multi-stage PID loops on brushless motor controllers, reducing oscillation by 40% in high-load scenarios.',
    tags: ['Java', 'NetworkTables', 'React', 'D3.js'],
    github: 'https://github.com',
    image: 'https://picsum.photos/seed/robotics-pid/800/400',
  },
  {
    id: '3',
    title: 'Computer Vision Target Tracking',
    description: 'Implemented a Raspberry Pi-based vision system using OpenCV to track field elements and calculate distance/angle offsets for automated scoring mechanisms.',
    tags: ['Python', 'OpenCV', 'TensorFlow Lite', 'MQTT'],
    github: 'https://github.com',
    image: 'https://picsum.photos/seed/robotics-vision/800/400',
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
              <Layers size={18} />
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
