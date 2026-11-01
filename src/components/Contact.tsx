import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: initialService || 'Bespoke Joinery',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const projectTypes = [
    'Bespoke Joinery',
    'Carpentry',
    'Fitted Storage & Wardrobes',
    'Kitchen Joinery',
    'Interior Woodwork',
    'Custom Woodworking Projects',
    'Other / General Enquiry',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone Number is required for project quotes.';
    } else if (formData.phone.trim().length < 6) {
      errs.phone = 'Please enter a valid phone number.';
    }

    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please provide brief details about your project.';
    } else if (formData.projectDetails.trim().length < 15) {
      errs.projectDetails = 'Please describe your requirements in a little more detail (min. 15 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Free Quote Request: ${formData.projectType} - ${formData.fullName}`
    );
    const body = encodeURIComponent(
      `Hello Marjoribanks Joinery,\n\nI would like to request a free quote for a joinery project.\n\n` +
        `Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Project Type: ${formData.projectType}\n\n` +
        `Project Details & Requirements:\n${formData.projectDetails}\n\n` +
        `Location: Edinburgh / Central Belt\n`
    );
    return `mailto:MJoinery20@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('MJoinery20@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyBrief = () => {
    const text = `Quote Request for Marjoribanks Joinery\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject: ${formData.projectType}\nDetails: ${formData.projectDetails}`;
    navigator.clipboard.writeText(text);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: 'Bespoke Joinery',
      projectDetails: '',
    });
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#0B0B0F] text-white relative border-b border-white/10"
    >
      {/* Background ambient accents */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#7B2CBF]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 w-80 h-80 bg-[#E8C477]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#E8C477] uppercase mb-3">
            <span>Direct Enquiries & Estimates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-serif">
            Let's Talk About Your Project
          </h2>
          <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Looking for a joiner in Edinburgh or the Central Belt? Get in touch to discuss your requirements and request a free quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-[#1C1B22] p-8 rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white font-serif mb-3">
                Get In Touch Directly
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Whether you have architectural drawings ready or want to discuss ideas for custom storage, we are here to help.
              </p>

              {/* Verified Contact Details per prompt */}
              <div className="space-y-5">
                
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#A437B8]/20 text-[#A437B8] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">
                        Email Address
                      </p>
                      <a
                        href="mailto:MJoinery20@gmail.com"
                        className="text-sm font-semibold text-white hover:text-[#E8C477] transition-colors"
                      >
                        MJoinery20@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:MJoinery20@gmail.com"
                      className="px-3 py-1.5 text-xs font-medium text-white bg-[#A437B8] hover:bg-[#7B2CBF] rounded-md transition-colors whitespace-nowrap"
                    >
                      Email Us
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      className="p-1.5 text-white/60 hover:text-white rounded hover:bg-white/10 transition-colors"
                      aria-label="Copy email"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {copiedEmail && (
                  <p className="text-xs text-[#E8C477] flex items-center gap-1.5 -mt-3">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Email address copied to clipboard</span>
                  </p>
                )}

                {/* Location / Area */}
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E8C477]/15 text-[#E8C477] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">
                      Service Coverage Area
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Edinburgh & the Central Belt
                    </p>
                    <p className="text-xs text-white/60 mt-0.5">
                      Scotland, United Kingdom
                    </p>
                  </div>
                </div>

                {/* Turnaround Commitment */}
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#A437B8]/20 text-[#A437B8] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">
                      Prompt Communication
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Clear & Reliable Quotes
                    </p>
                    <p className="text-xs text-white/60 mt-0.5">
                      Free consultation and quotation tailored to your scope
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Channels per prompt */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <p className="text-xs font-semibold text-[#E8C477] uppercase tracking-wider mb-3">
                  Follow Our Woodworking & Updates
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.instagram.com/marjoribanks.joinery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-[#E8C477] transition-colors">
                        Instagram
                      </p>
                      <p className="text-[11px] text-white/60">@marjoribanks.joinery</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-white" />
                  </a>

                  <a
                    href="https://www.tiktok.com/@marjoribanks.joinery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-[#E8C477] transition-colors">
                        TikTok
                      </p>
                      <p className="text-[11px] text-white/60">@marjoribanks.joinery</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-white" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1C1B22] p-8 lg:p-10 rounded-2xl border border-white/10 shadow-2xl relative">
              
              {!submitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white font-serif mb-2">
                      Request a Free Quote
                    </h3>
                    <p className="text-sm text-white/70">
                      Fill in your project details below. We review every enquiry personally.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-white/90 mb-1.5 uppercase tracking-wider">
                        Full Name <span className="text-[#A437B8]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Alastair Campbell"
                        className={`w-full px-4 py-3 bg-[#0B0B0F] border rounded-lg text-white placeholder-white/30 text-sm focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-white/15 focus:border-[#A437B8]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-white/90 mb-1.5 uppercase tracking-wider">
                          Email Address <span className="text-[#A437B8]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="your.email@example.co.uk"
                          className={`w-full px-4 py-3 bg-[#0B0B0F] border rounded-lg text-white placeholder-white/30 text-sm focus:outline-none transition-colors ${
                            errors.email
                              ? 'border-rose-500 focus:border-rose-400'
                              : 'border-white/15 focus:border-[#A437B8]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-white/90 mb-1.5 uppercase tracking-wider">
                          Phone Number <span className="text-[#A437B8]">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="e.g. 07123 456789"
                          className={`w-full px-4 py-3 bg-[#0B0B0F] border rounded-lg text-white placeholder-white/30 text-sm focus:outline-none transition-colors ${
                            errors.phone
                              ? 'border-rose-500 focus:border-rose-400'
                              : 'border-white/15 focus:border-[#A437B8]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Type of Project */}
                    <div>
                      <label className="block text-xs font-semibold text-white/90 mb-1.5 uppercase tracking-wider">
                        Type of Project <span className="text-[#A437B8]">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#0B0B0F] border border-white/15 focus:border-[#A437B8] rounded-lg text-white text-sm focus:outline-none transition-colors"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#1C1B22] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-xs font-semibold text-white/90 mb-1.5 uppercase tracking-wider">
                        Project Details <span className="text-[#A437B8]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.projectDetails}
                        onChange={(e) =>
                          setFormData({ ...formData, projectDetails: e.target.value })
                        }
                        placeholder="Tell us about the room, approximate dimensions, materials preferred (e.g. natural oak, painted finish), and target timeline..."
                        className={`w-full px-4 py-3 bg-[#0B0B0F] border rounded-lg text-white placeholder-white/30 text-sm focus:outline-none transition-colors ${
                          errors.projectDetails
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-white/15 focus:border-[#A437B8]'
                        }`}
                      />
                      {errors.projectDetails && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.projectDetails}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#7B2CBF] to-[#A437B8] hover:from-[#6A24A6] hover:to-[#932EAA] rounded-lg shadow-lg shadow-[#7B2CBF]/30 hover:shadow-[#A437B8]/40 transition-all duration-200 active:scale-95 border border-[#E8C477]/30 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#E8C477]" />
                      <span>Request a Free Quote</span>
                    </button>

                    <p className="text-[11px] text-white/50 text-center">
                      Quality workmanship • Competitive prices • Serving Edinburgh & Central Belt
                    </p>
                  </form>
                </>
              ) : (
                /* Submission Confirmation State (Honest & Connected) */
                <div className="py-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#A437B8]/20 border border-[#A437B8]/40 flex items-center justify-center text-[#E8C477] mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white font-serif mb-2">
                    Quote Request Prepared!
                  </h3>
                  
                  <p className="text-sm text-white/75 max-w-md mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Your enquiry for <span className="font-semibold text-[#E8C477]">{formData.projectType}</span> is ready to transmit directly to <span className="text-white underline">MJoinery20@gmail.com</span>.
                  </p>

                  {/* Summary Card */}
                  <div className="w-full bg-[#0B0B0F] p-5 rounded-xl border border-white/10 text-left mb-6 space-y-2 text-xs">
                    <p className="text-[#E8C477] font-semibold uppercase tracking-wider text-[10px]">
                      Project Summary
                    </p>
                    <p><span className="text-white/50">Contact:</span> {formData.fullName} ({formData.phone})</p>
                    <p><span className="text-white/50">Email:</span> {formData.email}</p>
                    <p><span className="text-white/50">Service:</span> {formData.projectType}</p>
                    <p className="text-white/70 italic bg-white/5 p-3 rounded mt-2 border border-white/5">
                      "{formData.projectDetails}"
                    </p>
                  </div>

                  {/* Direct Action Options */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full mb-4">
                    <a
                      href={getMailtoUrl()}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#7B2CBF] to-[#A437B8] rounded-lg shadow-md hover:shadow-lg transition-all border border-[#E8C477]/30"
                    >
                      <Mail className="w-4 h-4 text-[#E8C477]" />
                      <span>Send via Email Client</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 rounded-lg border border-white/10 transition-colors"
                    >
                      <Copy className="w-4 h-4 text-[#A437B8]" />
                      <span>{copiedBrief ? 'Copied to Clipboard!' : 'Copy Quote Brief'}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs text-white/50 hover:text-white underline transition-colors mt-2"
                  >
                    Submit another enquiry
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
