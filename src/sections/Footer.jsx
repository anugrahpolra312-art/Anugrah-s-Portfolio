import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '../components/SocialIcons';

const socialLinks = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/anugrah-polara-0b2862376?utm_source=share_via&utm_content=profile&utm_medium=member_android' },

  { icon: Mail, label: 'Email', href: 'anugrahpolra312@gmail.com' },
];

const Footer = () => (
  <footer className="bg-bg-base relative overflow-hidden" aria-label="Footer">
    {/* Subtle top fade from surface */}
    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg-surface to-transparent pointer-events-none" />

    <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 flex flex-col items-center gap-6 text-center">
      {/* Monogram */}
      <span className="text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
        AP
      </span>

      <p className="font-heading font-semibold text-xl text-white">Anugrah Polara</p>

      <p className="text-text-secondary italic text-sm">"Building one commit at a time."</p>

      {/* Social icons */}
      <div className="flex items-center gap-3">
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
      </div>

      <div className="w-full h-px bg-white/10" />

      <p className="text-text-muted text-sm">
        © 2026 Anugrah Polra. Designed &amp; built with ❤️ using React + Tailwind.
      </p>
    </div>
  </footer>
);

export default Footer;
