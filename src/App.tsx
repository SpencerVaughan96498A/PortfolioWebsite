import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, Sparkles, Code2, Briefcase, User as UserIcon, Users } from 'lucide-react';
import ProjectTabs from './components/ProjectTabs';
import AIChat from './components/AIChat';
import ResumeViewer from './components/ResumeViewer';
import TeamRepos from './components/TeamRepos';
import CareerTimeline from './components/CareerTimeline';
import { fetchResumeFromGit } from './services/resumeService';

const DEFAULT_RESUME_URL = "https://github.com/SpencerVaughan96498A/Resume-2026/blob/main/SV-LaTeX-Resume-2026.tex";

export default function App() {
  const [resumeContent, setResumeContent] = React.useState<string>("");
  const [resumeUrl, setResumeUrl] = React.useState(DEFAULT_RESUME_URL);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const loadResume = async () => {
      const content = await fetchResumeFromGit(resumeUrl);
      setResumeContent(content);
      setIsLoaded(true);
    };
    loadResume();
  }, [resumeUrl]);

  return (
    <div className="min-h-screen bg-bg selection:bg-accent/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">P</div>
            <span className="font-bold tracking-tight">ProFolio AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary/60">
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#career" className="hover:text-primary transition-colors">Career</a>
            <a href="#resume" className="hover:text-primary transition-colors">Resume</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-all shadow-lg shadow-black/10">
              Contact Me
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-6 uppercase tracking-widest">
              <Sparkles size={14} />
              Robotics Engineer & Team Lead
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-primary">
              Engineering <br />
              <span className="text-accent italic serif">Precision Motion.</span>
            </h1>
            <p className="text-lg text-primary/60 max-w-xl mb-10 leading-relaxed">
              Specializing in control theory, motion profiling, and autonomous systems for competitive robotics. 
              Leading high-performance teams to build complex hardware-software integrations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl shadow-black/10">
                View Systems
              </a>
              <a href="#ai-assistant" className="bg-white border border-black/10 text-primary px-8 py-4 rounded-2xl font-bold hover:bg-black/5 transition-colors">
                Ask AI Assistant
              </a>
            </div>
          </motion.div>

          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10">
              <img 
                src="https://picsum.photos/seed/roboticist/800/800" 
                alt="Corporate Headshot" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 flex flex-col gap-2 z-20">
              <div className="bg-white p-3 rounded-xl shadow-lg border border-black/5">
                <Code2 size={20} className="text-accent" />
              </div>
              <div className="bg-white p-3 rounded-xl shadow-lg border border-black/5">
                <Briefcase size={20} className="text-primary/60" />
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Stats / Quick Info */}
      <section className="py-12 border-y border-black/5 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Robots Built', value: '12', icon: Briefcase },
            { label: 'Lines of Control Code', value: '50k+', icon: Code2 },
            { label: 'Team Members Led', value: '45', icon: UserIcon },
            { label: 'Competition Awards', value: '8', icon: Sparkles },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-primary/40 mb-3">
                <stat.icon size={20} />
              </div>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-primary/40 uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Systems</h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>
          <ProjectTabs />
        </div>
      </section>

      {/* Career Timeline Section */}
      <section id="career" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Career Journey</h2>
            <p className="text-primary/60 max-w-2xl mx-auto leading-relaxed">
              A timeline of my professional experience, education, and key milestones in the robotics industry.
            </p>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full mt-4"></div>
          </div>
          <CareerTimeline />
        </div>
      </section>

      {/* Team Leadership Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Users className="text-accent" />
                Team Leadership & Oversight
              </h2>
              <p className="text-primary/60 leading-relaxed">
                As a Team Lead, I oversaw the technical development and project management of these core repositories. 
                While I didn't write every line of code, I managed the architecture, code reviews, and cross-team integration.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold">3+ Years</div>
                <div className="text-[10px] text-primary/40 uppercase tracking-widest">Leadership Exp.</div>
              </div>
            </div>
          </div>
          <TeamRepos />
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-12 items-start">
            {/* Resume Viewer */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Technical Resume</h2>
                <button className="flex items-center gap-2 text-sm font-bold text-accent hover:underline">
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
              <p className="text-primary/60">
                My resume is maintained in LaTeX and synced directly from GitHub. 
                This ensures all technical details are always up-to-date.
              </p>
              <ResumeViewer content={resumeContent} url={resumeUrl} />
            </div>
          </div>
        </div>
      </section>

      {/* Floating AI Assistant */}
      <AIChat resumeContent={resumeContent} />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">P</div>
            <span className="font-bold tracking-tight">ProFolio AI</span>
          </div>
          <div className="flex gap-6 text-primary/40">
            <a href="#" className="hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-sm text-primary/40 font-mono">
            &copy; {new Date().getFullYear()} ProFolio AI. Built with Gemini 3.1.
          </p>
        </div>
      </footer>
    </div>
  );
}
