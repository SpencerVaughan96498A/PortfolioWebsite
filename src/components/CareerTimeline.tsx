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
    id: '1',
    type: 'work',
    title: 'Lead Robotics Engineer',
    organization: 'Team Alpha Robotics',
    period: '2022 - Present',
    description: 'Led a team of 15 engineers to design and build a competitive robot for the FRC season. Managed the architecture of the control system and autonomous navigation.',
    icon: <Briefcase size={18} />,
  },
  {
    id: '2',
    type: 'achievement',
    title: 'First Place - National Robotics Competition',
    organization: 'Robotics League',
    period: '2023',
    description: 'Achieved first place in the national robotics competition for the most efficient path-following algorithm.',
    icon: <Award size={18} />,
  },
  {
    id: '3',
    type: 'education',
    title: 'B.S. in Mechanical Engineering',
    organization: 'University of Technology',
    period: '2018 - 2022',
    description: 'Specialized in robotics and control systems. Graduated with honors.',
    icon: <GraduationCap size={18} />,
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
