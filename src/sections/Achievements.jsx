import { Trophy, Award, Code, Cpu, BookOpen, Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { staggerContainer, scaleIn } from '../animations/variants';

const SectionTitle = ({ text }) => (
  <div className="flex items-center gap-4 mb-12">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-500/50" />
    <h2 className="font-heading font-semibold text-3xl text-white whitespace-nowrap">{text}</h2>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-500/50" />
  </div>
);

const stats = [
  { value: 5, label: 'Hackathons', sub: 'Participated' },
  { value: 2, label: 'Certifications', sub: 'Earned' },
  { value: 3, label: 'Open Source', sub: 'Projects' },
];

const achievements = [
  { icon: Trophy, title: 'Hackathon Participant', desc: 'Competed in 5+ national hackathons, building impactful prototypes.', tag: 'Competition' },
  { icon: Award, title: 'Technical Certifications', desc: 'Earned 2+ certifications in Concept of computer and c programing language.', tag: 'Certification' },
  { icon: Cpu, title: 'PromptWars Challenge', desc: 'Participated in AI prompt engineering competitions, ranking in top percentiles.', tag: 'AI Challenge' },
  { icon: BookOpen, title: 'IEEE Member & Activities', desc: 'Active IEEE student member, participating in technical events and workshops.', tag: 'Community' },

];

const tagColors = {
  Competition: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
  Certification: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
  'Open Source': 'bg-green-500/10 border-green-500/20 text-green-300',
  'AI Challenge': 'bg-amber-500/10 border-amber-500/20 text-amber-300',
  Community: 'bg-pink-500/10 border-pink-500/20 text-pink-300',
};

function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const StatCounter = ({ value, label, sub, started }) => {
  const count = useCountUp(value, 1500, started);
  return (
    <div className="text-center">
      <p className="font-heading font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
        {count}+
      </p>
      <p className="font-semibold text-white mt-1">{label}</p>
      <p className="text-text-secondary text-sm">{sub}</p>
    </div>
  );
};

const AchievementCard = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      transition={{ delay: index * 0.08 }}
      className="glass-card p-6 group hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 border ${hovered
        ? 'bg-gradient-to-br from-purple-500 to-cyan-400 border-transparent'
        : 'bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-purple-500/20'
        }`}>
        <item.icon size={28} className={hovered ? 'text-white' : 'text-purple-400'} />
      </div>
      <h3 className="font-heading font-semibold text-lg text-white mb-1">{item.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.desc}</p>
      <span className={`text-xs px-2 py-0.5 rounded-full border ${tagColors[item.tag] ?? 'bg-white/5 border-white/10 text-text-secondary'}`}>
        {item.tag}
      </span>
    </motion.div>
  );
};

const Achievements = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <SectionWrapper id="achievements" aria-label="Achievements">
      <SectionTitle text="Achievements" />

      {/* Stat counters */}
      <div ref={statsRef} className="grid grid-cols-3 gap-8 mb-16 glass-card py-10">
        {stats.map((s) => (
          <StatCounter key={s.label} {...s} started={statsInView} />
        ))}
      </div>

      {/* Achievement cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {achievements.map((item, i) => (
          <AchievementCard key={item.title} item={item} index={i} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Achievements;
