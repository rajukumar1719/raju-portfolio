import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ArrowUp,
  MapPin,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection({ onShowToast }) {
  const { personal } = portfolioData;
  const [copiedItem, setCopiedItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    if (onShowToast) {
      onShowToast(`Copied ${label} to clipboard!`);
    }
    setTimeout(() => {
      setCopiedItem(null);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast('Message simulated successfully! Raju Kumar will get back to you soon.');
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      
      {/* Background Section Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-cyan-500/10 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Banner Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>06 // INITIATE DIALOGUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Let's Build Something <span className="text-gradient">Impactful Together.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Currently open to Software Engineering, Full-Stack Developer, and Backend Engineering roles. Feel free to reach out directly via email, phone, or LinkedIn!
          </p>
        </div>

        {/* Contact Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contacts & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Information Card */}
            <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Direct Channels</h3>
                  <p className="text-xs font-mono text-slate-400">Prompt responses within 24h</p>
                </div>
              </div>

              {/* Emails List */}
              <div className="space-y-3">
                {personal.emails.map((email) => (
                  <div 
                    key={email.address}
                    className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-105 transition shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono text-slate-500">{email.label}</div>
                        <a 
                          href={`mailto:${email.address}`}
                          className="text-xs font-medium text-slate-200 hover:text-cyan-300 transition truncate block"
                        >
                          {email.address}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy(email.address, email.label)}
                      className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition shrink-0"
                      title="Copy email to clipboard"
                    >
                      {copiedItem === email.label ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}

                {/* Phone Card */}
                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 group-hover:scale-105 transition shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500">Phone (Direct / WhatsApp)</div>
                      <a 
                        href={`tel:${personal.phone}`}
                        className="text-xs font-medium text-slate-200 hover:text-emerald-300 transition"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personal.phone, 'Phone Number')}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition shrink-0"
                    title="Copy phone number"
                  >
                    {copiedItem === 'Phone Number' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Online Profiles & Repositories
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 text-xs text-slate-300 hover:text-white transition group"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                      <span>GitHub</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400" />
                  </a>

                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-indigo-500/30 hover:border-indigo-500 text-xs text-indigo-200 hover:text-white transition group"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-indigo-400" />
                      <span>LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-indigo-500/60 group-hover:text-indigo-400" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl">
              
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-800">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Send Direct Message</h3>
                  <p className="text-xs font-mono text-slate-400">Recruiter inquiry & opportunity outreach</p>
                </div>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-base">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Raju Kumar will review your note and respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-cyan-400 hover:underline font-mono pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs text-slate-100 placeholder-slate-600 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs text-slate-100 placeholder-slate-600 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject / Role Title
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineer Role @ TechCorp"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs text-slate-100 placeholder-slate-600 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Raju, we came across your portfolio and would love to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs text-slate-100 placeholder-slate-600 outline-none transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>Send Message to Raju</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Built with precision • Raju Kumar © 2026 • IIIT Bhopal</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </footer>

      </div>

    </section>
  );
}
