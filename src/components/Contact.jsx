import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-10 h-1 bg-slate-900 mt-2 rounded-xs"></div>
          <p className="text-slate-500 text-sm mt-2">
            Available for software engineering roles, hackathon teams, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-slate-100 text-slate-900 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Email Address</div>
                  <div className="text-sm font-semibold text-slate-900 break-all">{personalInfo.email}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-md transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center space-x-3">
                <div className="p-2 bg-slate-100 text-slate-700 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">Phone</div>
                  <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-xs font-semibold text-slate-900 hover:underline">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center space-x-3">
                <div className="p-2 bg-slate-100 text-slate-700 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">Location</div>
                  <div className="text-xs font-semibold text-slate-900">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:text-blue-600 flex items-center justify-center space-x-2 transition-colors text-xs font-semibold shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:text-slate-900 flex items-center justify-center space-x-2 transition-colors text-xs font-semibold shadow-xs"
              >
                <GithubIcon className="w-4 h-4 text-slate-900" />
                <span>GitHub Profile</span>
              </a>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs">
              <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg mb-4">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 text-center rounded-lg space-y-2">
                  <div className="font-bold text-emerald-800 text-base">
                    Message Sent Successfully!
                  </div>
                  <p className="text-slate-600 text-xs">
                    Thank you for reaching out. I will respond to your email as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 rounded-md px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 rounded-md px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Opportunity / Inquiry"
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 rounded-md px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 rounded-md px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
