import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '../components/SocialIcons';
import { fadeUp, staggerContainer } from '../animations/variants';
import profileImg from '../assets/Anugrahpic.jpeg';

const HeroCard = () => (
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
    className="glass-card py-12 px-8 w-80 min-h-[460px] flex flex-col justify-center"
  >
    <div className="flex flex-col items-center gap-6">
      <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-purple-500/50 flex items-center justify-center select-none">
        <img
          src={profileImg}
          alt="Anugrah Polara"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <p className="font-heading font-bold text-white text-xl leading-tight">Anugrah Polara</p>
        <p className="text-sm text-text-secondary mt-1">1st year AI/ML Student</p>
      </div>

      <div className="w-full h-px bg-white/10" />

      <div className="flex flex-wrap gap-2 justify-center">
        {['C', 'C++', 'Python', 'React', 'Docker', 'Git|GitHub'].map((skill) => (
          <span key={skill} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-text-secondary">
            {skill}
          </span>
        ))}
      </div>

      <div className="w-full h-px bg-white/10" />

      <div className="flex items-center gap-2 text-green-400 text-sm">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Available for work
      </div>
    </div>
  </motion.div>
);

const Hero = () => {
  const socialLinks = [
    { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/anugrahpolra312-art' },
    { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/anugrah-polara-0b2862376?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { icon: Mail, label: 'Email', href: 'mailto:anugrahpolra312@gmail.com' },
  ];

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-base"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(600px circle, rgba(139,92,246,0.12), transparent)' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(500px circle, rgba(6,182,212,0.08), transparent)' }} />
        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#94a3b8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full py-28 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        {/* Left column */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col gap-6"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} className="w-fit">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to Internships &amp; Collaborations
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-heading font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
          >
            Anugrah Polara
          </motion.h1>

          {/* Typing role */}
          <motion.div variants={fadeUp} className="text-xl md:text-2xl font-medium min-h-[2em]">
            <span className="text-white">I'm a </span>
            <TypeAnimation
              sequence={[
                'Vibe Coder', 2000,
                'B.Tech CE(AI/ML) Student', 2000,
                'Hackathon Enthusiast', 2000,

              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-text-secondary text-lg max-w-[520px] leading-relaxed"
          >
            Passionate B.Tech Computer Engineering with specialization in AI/ML student focused on building modern, user-friendly and impactful digital experiences. Enthusiastic about UI/UX design, cloud technologies, hackathons and creating innovative tech solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="/Resume (1).pdf"
              download
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              <Download size={18} />
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-medium transition-all duration-200 hover:border-white/40 hover:bg-white/5"
            >
              View Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-text-secondary transition-all duration-200 hover:border-purple-500/50 hover:text-white hover:scale-105"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column — floating card */}
        <div className="hidden lg:flex flex-1 justify-center">
          <HeroCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
