import React from 'react';
import { Github, FolderGit2, Users, ArrowUpRight } from 'lucide-react';

interface Repo {
  name: string;
  description: string;
  stars: string;
  tech: string;
  url: string;
}

const teamRepos: Repo[] = [
  {
    name: "Robotics-Team-2024-Main",
    description: "Full robot code for the 2024 competition season. Oversaw architecture and integration of 4 sub-teams.",
    stars: "12",
    tech: "Java / C++",
    url: "https://github.com"
  },
  {
    name: "Autonomous-Navigation-Core",
    description: "Core library for path planning and sensor fusion. Managed the development cycle and code reviews.",
    stars: "8",
    tech: "C++ / ROS",
    url: "https://github.com"
  },
  {
    name: "Scouting-App-v2",
    description: "Data collection and analysis tool used during competitions to strategize against opponents.",
    stars: "15",
    tech: "React Native / Firebase",
    url: "https://github.com"
  }
];

export default function TeamRepos() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {teamRepos.map((repo, i) => (
        <a 
          key={i} 
          href={repo.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group glass p-6 rounded-2xl hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-black/5 rounded-lg text-primary/60 group-hover:text-accent transition-colors">
                <FolderGit2 size={20} />
              </div>
              <ArrowUpRight size={16} className="text-primary/20 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <h4 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{repo.name}</h4>
            <p className="text-sm text-primary/60 leading-relaxed mb-4">
              {repo.description}
            </p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-black/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary/40">{repo.tech}</span>
            <div className="flex items-center gap-1 text-[10px] font-mono text-primary/40">
              <Github size={12} />
              {repo.stars}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
