import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone, MessageSquare, MapPin, Send, Sparkles } from 'lucide-react';
import canvasConfetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Bengaluru',
    projectType: 'Residential Apartment'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    canvasConfetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Buildstar! I would like to request a consultation and material sample box for my ${formData.projectType} in ${formData.city}. Name: ${formData.name || 'Client'}.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* MODAL DIALOG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/15 bg-[#0C0E14] p-8 shadow-2xl lg:p-10"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:border-[#C5A059] hover:text-[#C5A059]"
          >
            <X className="h-5 w-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="mt-6 font-display text-3xl font-extrabold text-white">Consultation Requested</h3>
              <p className="mt-3 text-sm text-slate-300">
                Thank you {formData.name || 'Valued Client'}! A Buildstar material specialist will contact you within 2 business hours.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-400">
                Showroom: No. 130/1, Ulsoor Road, Bengaluru, Karnataka 560042
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-8 rounded-full bg-[#C5A059] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                <Sparkles className="h-4 w-4" />
                <span>Buildstar Concierge</span>
              </div>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-white">
                Request a Consultation
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Doorstep sample box, technical site evaluation, and fast project estimate.
              </p>

              {/* MULTI-CHANNEL QUICK ACCESS */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/919886000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-3.5 text-xs font-bold text-emerald-400 transition-all hover:bg-emerald-500 hover:text-black"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Directly</span>
                </a>

                <a
                  href="tel:+918041234567"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 p-3.5 text-xs font-bold text-slate-200 transition-all hover:border-[#C5A059] hover:text-[#C5A059]"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Showroom</span>
                </a>
              </div>

              <div className="my-6 flex items-center gap-4 text-xs text-slate-500">
                <div className="h-px flex-1 bg-white/10" />
                <span>OR SUBMIT DETAILS</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* CONCISE FORM */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Sharma"
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">City</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-white/10 bg-[#12151B] px-3 py-3 text-xs text-white outline-none focus:border-[#C5A059]"
                    >
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Kochi">Kochi</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Pune">Pune</option>
                      <option value="Other">Other City</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-white/10 bg-[#12151B] px-3 py-3 text-xs text-white outline-none focus:border-[#C5A059]"
                    >
                      <option value="Residential Apartment">Residential Apartment</option>
                      <option value="Villa / Penthouse">Villa / Penthouse</option>
                      <option value="Commercial Office">Commercial Office</option>
                      <option value="Hotel / Hospitality">Hotel / Hospitality</option>
                      <option value="Outdoor Decking">Outdoor Decking</option>
                      <option value="Tata Fire Doors">Tata Fire Doors</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#C5A059] py-4 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white"
                >
                  <Send className="h-4 w-4" />
                  <span>Get Fast Estimate & Samples</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
