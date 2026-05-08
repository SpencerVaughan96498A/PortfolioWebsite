import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

interface TimelineItem {
  id: string;
  type: 'work' | 'education' | 'achievement';
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const timelineItems: TimelineItem[] = [
  {
    id: 'mse-ai',
    type: 'education',
    title: 'Master of Software Engineering (Artificial Intelligence)',
    organization: 'The University of Melbourne',
    period: 'Jul 2026 - Jun 2029',
    description: 'Commencing part-time, after-hours study with a focus on Artificial Intelligence while pursuing full-time employment.',
    icon: <GraduationCap size={18} />,
  },
  {
    id: 'bsc-css',
    type: 'education',
    title: 'Bachelor of Science (Computing & Software Systems)',
    organization: 'The University of Melbourne',
    period: 'Jan 2021 - Dec 2025',
    description: 'Specialised in AI, Machine Learning, and Object-Oriented Software Development. Capstone project focused on full-stack web development using Agile/SCRUM methodologies.',
    icon: <GraduationCap size={18} />,
  },
  {
    id: 'emu5',
    type: 'work',
    title: 'President & Team Lead',
    organization: 'Robotics, Engineering & Competition Society (Team EMU5)',
    period: 'Feb 2021 - Dec 2024',
    description: 'Founded RECS & Team EMU5. Led a 40+ member interdisciplinary robotics team, managing six-figure budgets and steering the team to 3× University National Championships and 2x World Championship Awards.',
    icon: <Briefcase size={18} />,
  },
  {
    id: 'rec-foundation',
    type: 'work',
    title: 'Regional Support Specialist',
    organization: 'Robotics, Education & Competition Foundation',
    period: 'Jan 2023 - Present',
    description: 'Providing technical and logistical support at dozens of robotics competitions around Australia and abroad. Supporting schools in educating students in STEM and robotics through workshops, mentorship, and resource development.',
    icon: <Briefcase size={18} />,
  },
  {
    id: 'in2robotics',
    type: 'work',
    title: 'Secretary & Workshop Coordinator',
    organization: 'in2robotics',
    period: 'Jan 2021 - Present',
    description: 'Secretary for in2robotics, a charity focused on promoting robotics education. Coordinating workshop logistics, curriculum development, and volunteer management to inspire the next generation of engineers.',
    icon: <Briefcase size={18} />,
  },
  {
    id: 'hs-leadership',
    type: 'achievement',
    title: 'VEX Robotics Team Founder & Captain (High School)',
    organization: 'Team [Cu]riosity',
    period: '2015 - 2020',
    description: 'Started my own competition team, raised funding & built a team at my local high school. Won 2x Australian National Championships and represented Australia at the World Championships. Laid the groundwork for a thriving robotics program that continues to grow at the school.',
    icon: <Award size={18} />,
  },
];

export default function CareerTimeline() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <div className="relative border-l-2 border-black/5 ml-4 md:ml-8 space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Icon Circle */}
            <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border-2 border-accent flex items-center justify-center text-accent shadow-sm">
              {item.icon}
            </div>

            <div className="glass p-6 rounded-2xl border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  <p className="text-accent font-medium">{item.organization}</p>
                </div>
                <div className="flex items-center gap-1.5 text-primary/40 text-sm font-mono bg-black/5 px-3 py-1 rounded-full">
                  <Calendar size={14} />
                  {item.period}
                </div>
              </div>
              <p className="text-primary/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
