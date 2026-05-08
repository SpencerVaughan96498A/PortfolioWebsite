import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export default function CredentialBadge() {
  const credentialUrl = "https://badges.parchment.au/public/assertions/_jKnN9YFT9Gdch4SvvrG9A?identity__email=stvaughan@student.unimelb.edu.au";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative glass rounded-2xl p-6 border border-black/5 flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 bg-white rounded-xl shadow-inner flex items-center justify-center p-2 shrink-0 overflow-hidden">
          <img 
            src="https://badges.parchment.au/public/assertions/_jKnN9YFT9Gdch4SvvrG9A/image" 
            alt="People Leadership Badge" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded">Verified Credential</span>
            <ShieldCheck size={14} className="text-emerald-500" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">People Leadership</h3>
          <p className="text-sm text-primary/60 mb-4">
            University of Melbourne • Melbourne Plus
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a 
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <ExternalLink size={14} />
              Verify on Parchment
            </a>
          </div>
        </div>
        
        <div className="hidden lg:block w-px h-12 bg-black/5 mx-4"></div>
        
        <div className="hidden lg:flex flex-col items-end text-right">
          <div className="text-xs font-mono text-primary/40 mb-1">Issued By</div>
          <div className="text-sm font-bold text-primary">University of Melbourne</div>
        </div>
      </div>
    </motion.div>
  );
}
