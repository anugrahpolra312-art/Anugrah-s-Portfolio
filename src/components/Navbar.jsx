import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Education', id: 'education' },
  { name: 'Projects', id: 'projects' },
  { name: 'Blogs', id: 'blogs' },
  { name: 'Achievements', id: 'achievements' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = navLinks.map(l => l.id);
  const activeSection = useActiveSection(sectionIds, 100);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-bg-base/80 border-b border-white/5 py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

          <div
            className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Anugrah's Portfolio
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm font-medium transition-colors hover:text-white ${activeSection === link.id ? 'text-white' : 'text-text-secondary'
                  }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="px-5 py-2 text-sm border border-purple-500/50 text-purple-400 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              Resume ↓
            </button>
          </div>

          <div className="md:hidden">
            <button
              className="text-text-secondary hover:text-white transition-colors p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-bg-surface flex flex-col pt-24 px-6 md:hidden"
          >
            <button
              className="absolute top-6 right-6 text-text-secondary hover:text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>

            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-xl py-3 font-medium transition-colors ${activeSection === link.id ? 'text-purple-400' : 'text-text-secondary'
                    }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-8">
                <button className="w-full max-w-[200px] mx-auto py-3 border border-purple-500/50 text-purple-400 rounded-full transition-all hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 hover:text-white hover:border-transparent">
                  Resume ↓
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
