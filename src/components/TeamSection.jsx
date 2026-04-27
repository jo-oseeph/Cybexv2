import React from "react";
import { Linkedin, Facebook, Twitter } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Deborah Chebet",
      role: "CEO",
      image: "/images/team1.jpeg",
      bio: "Deborah drives Cybex's vision and strategy, with over a decade of experience leading technology companies across East Africa. She is passionate about using software to solve real-world business challenges.",
      socials: [
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
        { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
      ],
    },
    {
      id: 2,
      name: "John Maina",
      role: "Fulstack Dev",
      image: "/images/team2.jpeg",
      bio: "John is a fullstack developer who builds scalable web applications, handling both frontend and backend to deliver seamless, high-performance solutions.",
     socials: [
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
        {  icon: Facebook, href: "https://facebook.com", label: "Facebook" },
        { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
      ],
    },
    {
      id: 3,
      name: "Joseph Situma",
      role: "Fullstack Dev",
      image: "/images/team3.png",
      bio: "Joseph architects and builds robust web applications from database to deployment. He specialises in React, Node.js, and cloud infrastructure, turning complex requirements into clean, scalable code.",
      socials: [
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
        { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
      ],
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .team-header  { animation: fadeInUp 0.6s ease forwards; }
        .team-card-1  { animation: fadeInUp 0.6s ease 0.15s both; }
        .team-card-2  { animation: fadeInUp 0.6s ease 0.30s both; }
        .team-card-3  { animation: fadeInUp 0.6s ease 0.45s both; }
      `}</style>

      <section className="relative bg-dark py-16 sm:py-20 lg:py-28 overflow-hidden">

        {/* ── Background glow orbs ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-20" />
        </div>

        {/* ── Top border ── */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section header ── */}
          <div className="team-header text-center mb-14 lg:mb-20">
            {/* eyebrow */}
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary font-orbitron">
                Our People
              </span>
              <div className="h-px w-8 bg-primary" />
            </div>

            {/* main title — fully visible, no opacity:0 trap */}
            <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">Meet Our&nbsp;</span>
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #06b6d4 0%, #67e8f9 60%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  backgroundSize: "200% auto",
                }}
              >
                Team
              </span>
            </h2>

            {/* subtitle */}
            <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              The engineers, and leaders building software that moves businesses forward.
            </p>
          </div>

          {/* ── Team grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`team-card-${index + 1} group flex flex-col rounded-2xl border border-primary/20 hover:border-primary/50 bg-dark-light transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1`}
              >
             
                <div className="relative rounded-t-2xl overflow-hidden flex-shrink-0">
                  <div className="h-64 sm:h-72 bg-dark-lighter">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* bottom fade so content reads over image edge */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-light to-transparent" />

                  {/* Role badge — inside image wrapper so it doesn't escape the card */}
                  <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full shadow-lg shadow-primary/30">
                    <span className="text-xs font-bold uppercase tracking-widest text-dark font-orbitron whitespace-nowrap">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* ── Card body ── */}
                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  {/* Name */}
                  <h3 className="font-orbitron text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Divider */}
                  <div className="w-8 h-0.5 bg-primary/50 mb-3 group-hover:w-16 transition-all duration-300" />

                  {/* Bio */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1 mb-6">
                    {member.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex gap-3">
                    {member.socials.map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300"
                        >
                          <Icon className="w-4 h-4" strokeWidth={1.5} />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* bottom accent line */}
                <div className="h-px mx-6 mb-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </div>
            ))}
          </div>

        </div>

        {/* ── Bottom border ── */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>
    </>
  );
};

export default TeamSection;