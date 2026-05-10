import { GraduationCap, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { fadeUp } from '../animations/variants';

const SectionTitle = ({ text }) => (
  <div className="flex items-center gap-4 mb-16">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-500/50" />
    <h2 className="font-heading font-semibold text-3xl text-white whitespace-nowrap">{text}</h2>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-500/50" />
  </div>
);

const timelineData = [
  {
    year: '2025–Present',
    icon: GraduationCap,
    degree: 'B.Tech Computer Engineering with specialization in AI/ML.',
    institution: 'Silver Oak University.',
    coursework: ['C language', 'OOPs in C++', 'AEM-II', 'BEEE', 'Dynamic Communication'],
  },
  {
    year: '2021–2023',
    icon: BookOpen,
    degree: 'Class XII — Higher Secondary',
    institution: 'Smt. S.H. Gajera Higher Secondary School, Amreli.',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Computer Science'],
  },
];

const TimelineCard = ({ item, index }) => (
  <motion.div
    className="relative flex gap-8"
    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    {/* Left: timeline line + node */}
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-400/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
        <item.icon size={18} className="text-purple-400" />
      </div>
      {index < timelineData.length - 1 && (
        <div className="w-0.5 flex-1 bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent mt-2" style={{ minHeight: '60px' }} />
      )}
    </div>

    {/* Right: card */}
    <div className="glass-card p-6 mb-8 flex-1 border-l-2 border-purple-500">
      {/* Year badge */}
      <span className="inline-block mb-3 px-3 py-0.5 text-xs font-mono bg-purple-500/20 border border-purple-500/40 text-purple-300 rounded-full">
        {item.year}
      </span>

      <h3 className="font-heading font-semibold text-xl text-white mb-1">{item.degree}</h3>
      <p className="text-text-secondary text-sm mb-4">{item.institution}</p>

      <div className="w-full h-px bg-white/10 mb-4" />

      <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Relevant Coursework</p>
      <div className="flex flex-wrap gap-2">
        {item.coursework.map((c) => (
          <span key={c} className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded-full text-text-secondary">
            {c}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Education = () => (
  <SectionWrapper id="education" aria-label="Education">
    <SectionTitle text="Education" />
    <div className="max-w-2xl mx-auto">
      {timelineData.map((item, index) => (
        <TimelineCard key={item.degree} item={item} index={index} />
      ))}
    </div>
  </SectionWrapper>
);

export default Education;
