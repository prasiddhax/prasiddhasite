
import React, { useState } from 'react';
import { getCreativePrompt } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('Ask me for a creative project idea...');
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setIsLoading(true);
    const result = await getCreativePrompt(input);
    setResponse(result);
    setIsLoading(false);
    setInput('');
  };

  return (
    <div className={`fixed bottom-24 right-6 z-[100] transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4'}`}>
      {isOpen ? (
        <div className="w-72 md:w-80 bg-blue-900/90 border border-white/20 p-4 rounded-lg shadow-2xl backdrop-blur-md">
          <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-yellow-300">CREATIVE AI</span>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-300 transition-colors">✕</button>
          </div>
          <div className="text-xs mb-4 min-h-[60px] leading-relaxed italic opacity-90">
            {isLoading ? "Consulting the digital oracle..." : response}
          </div>
          <form onSubmit={handleAsk} className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Topic? (e.g. 'Ocean')"
              className="flex-1 bg-white/5 border border-white/10 rounded px-2 py-1 text-[10px] focus:outline-none focus:border-yellow-300/50"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-yellow-300 text-blue-900 text-[10px] font-bold px-3 py-1 rounded hover:bg-white transition-colors disabled:opacity-50"
            >
              ASK
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
        >
          <span className="text-blue-900 font-bold group-hover:animate-pulse">AI</span>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
