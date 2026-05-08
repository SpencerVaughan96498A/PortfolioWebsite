import React from 'react';
import { FileText, Terminal, Copy, Check, ExternalLink, Eye, Code } from 'lucide-react';

export interface ResumeViewerProps {
  content: string;
  url: string;
  pdfUrl?: string;
}

export default function ResumeViewer({ content, url, pdfUrl }: ResumeViewerProps) {
  const [copied, setCopied] = React.useState(false);
  const [viewMode, setViewMode] = React.useState<'preview' | 'source'>(pdfUrl ? 'preview' : 'source');

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full glass rounded-2xl overflow-hidden border-black/5 shadow-2xl">
      <div className="p-4 border-b border-black/5 bg-white/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-primary/60">
            <FileText size={18} />
          </div>
          <div>
            <h3 className="font-bold text-sm">Technical Resume</h3>
            <p className="text-[10px] text-primary/50 font-mono">
              {viewMode === 'preview' ? 'Compiled PDF' : 'SV-LaTeX-Resume-2026.tex'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex bg-black/5 p-1 rounded-xl mr-2">
            <button
              onClick={() => setViewMode('preview')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'preview' 
                  ? 'bg-white text-primary shadow-sm' 
                  : 'text-primary/40 hover:text-primary/60'
              }`}
            >
              <Eye size={14} />
              Preview
            </button>
            <button
              onClick={() => setViewMode('source')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'source' 
                  ? 'bg-white text-primary shadow-sm' 
                  : 'text-primary/40 hover:text-primary/60'
              }`}
            >
              <Code size={14} />
              Source
            </button>
          </div>

          <div className="h-6 w-px bg-black/5 mx-1" />

          {viewMode === 'source' && (
            <button 
              onClick={handleCopy}
              className="p-2 hover:bg-black/5 rounded-lg transition-colors text-primary/60"
              title="Copy LaTeX source"
            >
              {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
            </button>
          )}
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
      
      <div className="relative bg-slate-50/30">
        {viewMode === 'preview' ? (
          <div className="aspect-[1/1.414] w-full min-h-[600px] bg-slate-200/50 flex items-center justify-center">
            {pdfUrl ? (
              <iframe 
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-none"
                title="Resume PDF Preview"
              />
            ) : (
              <div className="text-center p-12">
                <FileText size={48} className="mx-auto text-primary/20 mb-4" />
                <p className="text-primary/60 font-medium">PDF Preview not available</p>
                <p className="text-xs text-primary/40 mt-2">Please ensure the PDF is synced to the assets folder.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="relative group">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="px-2 py-1 bg-black/80 text-white text-[10px] rounded font-mono">
                LaTeX
              </div>
            </div>
            <pre className="p-6 overflow-x-auto text-[13px] font-mono text-primary/70 leading-relaxed max-h-[800px] scrollbar-thin scrollbar-thumb-black/10">
              <code>{content || "Loading resume content..."}</code>
            </pre>
          </div>
        )}
      </div>

      <div className="p-4 bg-black/5 border-t border-black/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-primary/40" />
          <span className="text-[10px] text-primary/40 font-mono uppercase tracking-widest">
            {viewMode === 'preview' ? 'Rendered Document' : 'Raw Source Code'}
          </span>
        </div>
        <div className="text-[10px] text-primary/30 font-mono">
          Last Synced: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
