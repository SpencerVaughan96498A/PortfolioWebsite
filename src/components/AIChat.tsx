import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Loader2, Sparkles, MessageCircle, X } from 'lucide-react';
import { askAboutResume } from '../services/chatService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AIChatProps {
  resumeContent: string;
}

export default function AIChat({ resumeContent }: AIChatProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    { role: 'model', text: "Hi! I've read the resume. Ask me anything about the user's experience, skills, or projects!" }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      
      const response = await askAboutResume(resumeContent, userMessage, history);
      setMessages(prev => [...prev, { role: 'model', text: response || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && (
          <div className="absolute right-full mr-4 px-3 py-1 bg-white text-primary text-xs font-bold rounded-lg shadow-lg border border-black/5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask me about the user
          </div>
        )}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[500px] flex flex-col glass rounded-2xl overflow-hidden shadow-2xl border-black/5 z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-black/5 bg-white/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Resume Assistant</h3>
                  <p className="text-[10px] text-primary/50 uppercase tracking-wider font-mono">AI-Powered</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-primary/40 hover:text-primary transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] ${
                      msg.role === 'user' ? 'bg-accent text-white' : 'bg-white border border-black/5 text-primary/60'
                    }`}>
                      {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-accent text-white rounded-tr-none' 
                        : 'bg-white border border-black/5 text-primary/80 rounded-tl-none shadow-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 items-center text-primary/40 text-[10px] font-mono ml-8">
                    <Loader2 size={12} className="animate-spin" />
                    Thinking...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-white/50 border-t border-black/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my skills..."
                className="flex-1 bg-white border border-black/10 rounded-xl px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-accent text-white p-2 rounded-xl hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-accent/20"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
