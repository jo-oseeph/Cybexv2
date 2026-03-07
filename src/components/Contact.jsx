import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, User, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 700 000 000',
    href: 'tel:+254717378758',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@cybextech.co.ke',
    href: 'mailto:info@cybextech.co.ke',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: null,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@cybextech.co.ke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(6,182,212,1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,1)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page heading */}
          <div
            className="mb-12 lg:mb-16"
            style={{ animation: 'fadeInUp 0.5s ease forwards', opacity: 0 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light">
                Get In Touch
              </span>
            </div>
            <h1 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug">
              Let's{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(90deg, #06b6d4, #67e8f9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Start a Conversation.
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* ── Left: Contact Info ── */}
            <div
              className="lg:col-span-2 space-y-6"
              style={{ animation: 'fadeInLeft 0.6s ease forwards', animationDelay: '0.1s', opacity: 0 }}
            >
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                Have a project in mind? Reach out, we'd love to hear from you and help your business grow online.
              </p>

              <div className="space-y-4 pt-2">
                {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-4 rounded-xl border border-primary bg-dark-light/30 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                    style={{
                      animation: 'fadeInLeft 0.5s ease forwards',
                      animationDelay: `${0.2 + i * 0.1}s`,
                      opacity: 0,
                    }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary-light" strokeWidth={1.5} />
                    </div>

                    {/* Text */}
                    <div className="space-y-0.5">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-white text-sm sm:text-base font-medium hover:text-primary-light transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm sm:text-base font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div
              className="lg:col-span-3"
              style={{ animation: 'fadeInRight 0.6s ease forwards', animationDelay: '0.2s', opacity: 0 }}
            >
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  borderTop: '2px solid rgba(6, 182, 212, 0.5)',
                  borderLeft: '1px solid rgba(6, 182, 212, 0.2)',
                  borderRight: '1px solid rgba(6, 182, 212, 0.2)',
                  borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <h2 className="font-orbitron text-lg sm:text-xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Full Name */}
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-primary-light transition-colors duration-200" strokeWidth={1.5} />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full bg-dark/60 border border-primary/15 focus:border-primary/60 rounded-xl pl-11 pr-4 py-3.5 text-black placeholder-gray-500 text-sm outline-none transition-all duration-300 focus:bg-primary/5"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-primary-light transition-colors duration-200" strokeWidth={1.5} />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="w-full bg-dark/60 border border-primary/15 focus:border-primary/60 rounded-xl pl-11 pr-4 py-3.5 text-black placeholder-gray-500 text-sm outline-none transition-all duration-300 focus:bg-primary/5"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-primary-light transition-colors duration-200" strokeWidth={1.5} />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-dark/60 border border-primary/15 focus:border-primary/60 rounded-xl pl-11 pr-4 py-3.5 text-black placeholder-gray-500 text-sm outline-none transition-all duration-300 focus:bg-primary/5"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-500 group-focus-within:text-primary-light transition-colors duration-200" strokeWidth={1.5} />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      rows={5}
                      className="w-full bg-dark/60 border border-primary/15 focus:border-primary/60 rounded-xl pl-11 pr-4 py-3.5 text-black placeholder-gray-500 text-sm outline-none transition-all duration-300 focus:bg-primary/5 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-widest border border-primary text-primary-light bg-primary/10 hover:bg-primary/25 hover:shadow-[0_0_24px_rgba(6,182,212,0.25)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={1.5} />
                    <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  {/* Feedback */}
                  {status === 'success' && (
                    <p className="text-center text-sm text-primary-light font-medium pt-1">
                      ✓ Message sent! We'll get back to you shortly.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-center text-sm text-red-400 font-medium pt-1">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-24px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(24px); }
            to   { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Contact;