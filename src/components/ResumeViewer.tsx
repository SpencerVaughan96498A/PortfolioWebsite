import React from 'react';
import { FileText, Terminal, Copy, Check, ExternalLink } from 'lucide-react';

interface ResumeViewerProps {
  content: string;
  url: string;
}

export default function ResumeViewer({ content, url }: ResumeViewerProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full glass rounded-2xl overflow-hidden border-black/5">
      <div className="p-4 border-b border-black/5 bg-white/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-primary/60">
            <FileText size={18} />
          </div>
          <div>
            <h3 className="font-bold text-sm">Resume Source</h3>
            <p className="text-[10px] text-primary/50 font-mono">resume.tex</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleCopy}
            className="p-2 hover:bg-black/5 rounded-lg transition-colors text-primary/60"
            title="Copy LaTeX source"
          >
            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
          </button>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 hover:bg-black/5 rounded-lg transition-colors text-primary/60"
            title="View on GitHub"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="px-2 py-1 bg-black/80 text-white text-[10px] rounded font-mono">
            LaTeX
          </div>
        </div>
        <pre className="p-6 overflow-x-auto text-[13px] font-mono text-primary/70 leading-relaxed bg-slate-50/50 max-h-[500px] scrollbar-thin scrollbar-thumb-black/10">
          <code>{content || "Loading resume content..."}</code>
        </pre>
      </div>

      <div className="p-4 bg-black/5 border-t border-black/5 flex items-center gap-2">
        <Terminal size={14} className="text-primary/40" />
        <span className="text-[10px] text-primary/40 font-mono uppercase tracking-widest">
          Synced with Git Repository
        </span>
      </div>
    </div>
  );
}
