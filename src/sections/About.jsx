import { Code2, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { staggerContainer, fadeUp } from '../animations/variants';

const skills = [
  'C', 'C++', 'Python', 'React',
  'Docker', 'Git|GitHub'
];

const traits = [
  { icon: Code2, title: 'Clean Code', sub: 'Readable, maintainable, scalable' },
  { icon: Zap, title: 'Fast Learner', sub: 'Adapts to new stacks quickly' },
  { icon: Users, title: 'Team Player', sub: 'Collaborative & communicative' },
];

const SectionTitle = ({ text }) => (
  <div className="flex items-center gap-4 mb-12">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-500/50" />
    <h2 className="font-heading font-semibold text-3xl text-white whitespace-nowrap">{text}</h2>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-500/50" />
  </div>
);

const About = () => (
  <div className="bg-bg-surface">
    <SectionWrapper id="about">
      <SectionTitle text="About Me" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Photo placeholder */}
        <motion.div
          className="relative flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="relative">
            <div className="w-72 h-80 rounded-2xl overflow-hidden ring-2 ring-purple-500/30">
              <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-cyan-900/30 flex items-center justify-center">
                <span className="text-8xl select-none">👨‍💻</span>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 text-sm font-medium text-green-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              💻 Open to Work
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeUp} className="font-heading font-semibold text-2xl text-white">
            Passionate Developer &amp; Problem Solver
          </motion.h3>

          <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed">
            I'm Anugrah Polra, a B.Tech Computer Engineering student passionate about creating modern digital experiences and solving real-world problems through technology. I enjoy working with UI/UX design, cloud technologies, Docker, GitHub, and innovative development tools to build clean, efficient and user-friendly solutions.
          </motion.p>

          <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed">
            My journey started with exploring programming fundamentals and gradually expanded into development, deployment and creative tech projects. Over timeI’ve actively participated in hackathons, technical communities and collaborative projects that strengthened both my technical and problem-solving abilities.
            When I’m not building projects or learning new technologies, you’ll find me exploring design ideas, contributing to creative initiatives, writing technical content or participating in innovation-driven challenges to continuously grow as a developer.
          </motion.p>

          {/* Trait cards */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3">
            {traits.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="glass-card p-4 flex flex-col gap-2 hover:-translate-y-1 transition-transform">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-400/20 flex items-center justify-center">
                  <Icon size={16} className="text-purple-400" />
                </div>
                <span className="text-white text-sm font-semibold">{title}</span>
                <span className="text-text-secondary text-xs">{sub}</span>
              </div>
            ))}
          </motion.div>

          {/* Skill badges */}
          <motion.div variants={staggerContainer} className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={fadeUp}
                className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-text-secondary cursor-default
                           hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-300 transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  </div>
);

export default About;
