import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Copy, Mail } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Bespoke Joinery',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [details, setDetails] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email.';
    }
    if (!phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (phone.trim().length < 6) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!details.trim()) {
      errs.details = 'Please describe your project.';
    } else if (details.trim().length < 15) {
      errs.details = 'Please provide a little more detail (min 15 chars).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSuccess(true);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Free Quote Request: ${service} - ${fullName}`);
    const body = encodeURIComponent(
      `Hello Marjoribanks Joinery,\n\nI would like to request a free quote:\n\n` +
        `Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Project: ${service}\n\n` +
        `Details:\n${details}\n\n` +
        `Area: Edinburgh & Central Belt\n`
    );
    return `mailto:MJoinery20@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopy = () => {
    const text = `Quote Request for Marjoribanks Joinery\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nDetails: ${details}`;
    navigator.clipboard.writeText(text);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setDetails('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#1C1B22] rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-10 text-white my-8">
        
        {/* Top Header */}
        <div className="px-6 py-5 bg-[#0B0B0F] border-b border-white/10 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold font-serif text-white">
              Request a Free Quote
            </h3>
            <p className="text-xs text-[#E8C477]">
              Marjoribanks Joinery • Edinburgh & Central Belt
            </p>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1 uppercase tracking-wider">
                  Full Name <span className="text-[#A437B8]">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 bg-[#0B0B0F] border border-white/15 focus:border-[#A437B8] rounded-lg text-white text-sm focus:outline-none"
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1 uppercase tracking-wider">
                    Email Address <span className="text-[#A437B8]">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@domain.com"
                    className="w-full px-3.5 py-2.5 bg-[#0B0B0F] border border-white/15 focus:border-[#A437B8] rounded-lg text-white text-sm focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1 uppercase tracking-wider">
                    Phone Number <span className="text-[#A437B8]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 07123 456789"
                    className="w-full px-3.5 py-2.5 bg-[#0B0B0F] border border-white/15 focus:border-[#A437B8] rounded-lg text-white text-sm focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1 uppercase tracking-wider">
                  Type of Project <span className="text-[#A437B8]">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0B0B0F] border border-white/15 focus:border-[#A437B8] rounded-lg text-white text-sm focus:outline-none"
                >
                  <option value="Bespoke Joinery">Bespoke Joinery</option>
                  <option value="Fitted Storage & Wardrobes">Fitted Storage & Wardrobes</option>
                  <option value="Kitchen Joinery">Kitchen Joinery</option>
                  <option value="Interior Woodwork">Interior Woodwork</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="Custom Woodworking Projects">Custom Woodworking Projects</option>
                  <option value="Other / General Enquiry">Other / General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/90 mb-1 uppercase tracking-wider">
                  Project Details <span className="text-[#A437B8]">*</span>
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Tell us what you'd like made or fitted, estimated dimensions, and preferred materials..."
                  className="w-full px-3.5 py-2.5 bg-[#0B0B0F] border border-white/15 focus:border-[#A437B8] rounded-lg text-white text-sm focus:outline-none"
                />
                {errors.details && (
                  <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.details}</span>
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#7B2CBF] to-[#A437B8] hover:from-[#6A24A6] hover:to-[#932EAA] rounded-lg shadow-md transition-all border border-[#E8C477]/30"
                >
                  <Send className="w-4 h-4 text-[#E8C477]" />
                  <span>Submit Quote Request</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#A437B8]/20 border border-[#A437B8]/40 flex items-center justify-center text-[#E8C477] mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold font-serif text-white">
                Ready to Send!
              </h4>
              <p className="text-xs text-white/70 max-w-sm mx-auto">
                Your enquiry for <span className="text-[#E8C477] font-semibold">{service}</span> has been formatted. Choose how you would like to transmit it to <span className="text-white underline">MJoinery20@gmail.com</span>:
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={getMailtoUrl()}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#7B2CBF] to-[#A437B8] rounded-lg shadow transition-all border border-[#E8C477]/30"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E8C477]" />
                  <span>Open in Mail Client</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 rounded-lg border border-white/10 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5 text-[#A437B8]" />
                  <span>{copiedBrief ? 'Copied!' : 'Copy Summary'}</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-white/50 hover:text-white underline"
                >
                  Done / Close
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
