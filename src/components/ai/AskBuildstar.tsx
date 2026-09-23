import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, ArrowRight } from 'lucide-react';
import { AI_KNOWLEDGE_BASE, ChatMessage } from '../../data/aiRules';
import { BUILDSTAR_PRODUCTS } from '../../data/products';

interface AskBuildstarProps {
  isOpen: boolean;
  onClose: () => void;
  onVisualizeProduct: (productId: string) => void;
  onConsult: () => void;
}

export const AskBuildstar: React.FC<AskBuildstarProps> = ({
  isOpen,
  onClose,
  onVisualizeProduct
}) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      sender: 'ai',
      text: 'Hello! I am Buildstar AI. Ask me anything about wooden flooring, teak decking, WPC cladding, or Tata Steel fire security doors for your space.',
      timestamp: 'Just now'
    }
  ]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput('');

    setTimeout(() => {
      const lower = currentInput.toLowerCase();
      let matchedEntry = AI_KNOWLEDGE_BASE.find((kb) =>
        kb.keywords.some((kw) => lower.includes(kw))
      );

      let replyText =
        'Buildstar offers engineered hardwoods, solid teak decking, rigid SPC stone, and Tata fire security doors tailored for high-performance architectural spaces. Would you like a personalized recommendation?';
      let suggestedProducts: string[] = ['prod-eng-oak', 'prod-spc-stone'];

      if (matchedEntry) {
        replyText = matchedEntry.reply;
        suggestedProducts = matchedEntry.recommendedProductIds;
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedProducts
      };

      setMessages((prev) => [...prev, aiMsg]);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        />

        {/* SIDE DRAWER */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative z-10 flex h-full w-full max-w-lg flex-col justify-between border-l border-slate-200 bg-white p-6 shadow-2xl text-slate-900"
        >
          {/* DRAWER HEADER */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B38B38] text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-slate-900">Ask Buildstar AI</h3>
                <span className="text-[11px] font-semibold text-[#B38B38]">Grounded Material Consultant</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* CHAT MESSAGES BODY */}
          <div className="my-4 flex flex-1 flex-col gap-4 overflow-y-auto pr-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B38B38]/20 text-[#B38B38]">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#B38B38] font-semibold text-white shadow-sm'
                      : 'border border-slate-200 bg-slate-50 text-slate-800'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* SUGGESTED PRODUCTS LINKS */}
                  {msg.suggestedProducts && msg.suggestedProducts.length > 0 && (
                    <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3">
                      <span className="font-bold text-[#B38B38]">Recommended Materials:</span>
                      {msg.suggestedProducts.map((pId) => {
                        const product = BUILDSTAR_PRODUCTS.find((p) => p.id === pId);
                        if (!product) return null;
                        return (
                          <div
                            key={pId}
                            onClick={() => {
                              onClose();
                              onVisualizeProduct(pId);
                            }}
                            className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white p-2 text-[11px] hover:border-[#B38B38] shadow-sm"
                          >
                            <span className="font-semibold">{product.name} ({product.category})</span>
                            <ArrowRight className="h-3.5 w-3.5 text-[#B38B38]" />
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <span className="mt-2 block text-[9px] opacity-70">{msg.timestamp}</span>
                </div>
              </div>
            ))}
          </div>

          {/* INPUT FORM */}
          <form onSubmit={handleSend} className="border-t border-slate-200 pt-4">
            <div className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-slate-50 p-2 shadow-sm">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about flooring, decking, doors..."
                className="w-full bg-transparent px-3 py-2 text-xs font-medium text-slate-900 placeholder-slate-400 outline-none"
              />
              <button
                type="submit"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B38B38] text-white transition-transform active:scale-95 shadow-sm"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
