import React from 'react';
import { Github, BookOpen, Users, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface LeadershipItem {
  title: string;
  description: string;
  role: string;
  link: string;
  icon: React.ReactNode;
  tags: string[];
}

const leadershipItems: LeadershipItem[] = [
  {
    title: "EMU5 Robotics Organization",
    description: "Founding President and Team Lead of the University of Melbourne's premier robotics society. Led 40+ members across interdisciplinary teams to 3 consecutive National Championships.",
    role: "Founding President & Team Lead",
    link: "https://github.com/EMU5-Robotics",
    icon: <Github size={20} />,
    tags: ["Leadership", "Project Management", "Robotics"]
  },
  {
    title: "2023-2024 Engineering Notebook",
    description: "A 251-page comprehensive master notebook documenting the entire engineering design process, problem-solving approaches, and competition progress. Heavily authored and overseen as Team Lead.",
    role: "Lead Author & Overseer",
    link: "https://drive.google.com/file/d/1GU2v2WG3blK76SLil9Ia8pGkSQq2gRhi/view?usp=sharing",
    icon: <BookOpen size={20} />,
    tags: ["Documentation", "Systems Thinking", "Design Process"]
  },
  {
    title: "Project 'Lemon' Overseer",
    description: "Managed the overall direction and cross-team communication for the 2023-2024 competition code. Ensured software team leads were aligned with mechanical and electrical requirements.",
    role: "Project Manager / Overseer",
    link: "https://github.com/EMU5-Robotics/lemon",
    icon: <ShieldCheck size={20} />,
    tags: ["C++", "Project Management", "Integration"]
  }
];

export default function TeamRepos() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {leadershipItems.map((item, i) => (
        <a 
          key={i} 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group glass p-6 rounded-2xl hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-black/5 rounded-lg text-primary/60 group-hover:text-accent transition-colors">
                {item.icon}
              </div>
              <ArrowUpRight size={16} className="text-primary/20 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div className="mb-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-bold">{item.role}</span>
            </div>
            <h4 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
            <p className="text-sm text-primary/60 leading-relaxed mb-4">
              {item.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
            {item.tags.map(tag => (
              <span key={tag} className="text-[9px] font-mono uppercase tracking-wider text-primary/40 bg-black/5 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
