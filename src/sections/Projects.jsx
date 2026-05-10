import { Code2, GitFork, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { staggerContainer, scaleIn } from '../animations/variants';

const SectionTitle = ({ text }) => (
  <div className="flex items-center gap-4 mb-12">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-500/50" />
    <h2 className="font-heading font-semibold text-3xl text-white whitespace-nowrap">{text}</h2>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-500/50" />
  </div>
);

const placeholderProjects = [
  { title: 'Project Alpha', desc: 'A full-stack AI-powered web application.', tags: ['React', 'Node.js', 'MongoDB'] },
  { title: 'Project Beta', desc: 'Cloud-native microservices architecture.', tags: ['Python', 'Docker', 'FastAPI'] },
  { title: 'Project Gamma', desc: 'Real-time data dashboard with live updates.', tags: ['TypeScript', 'Firebase', 'Tailwind'] },
];

const ProjectCard = ({ project }) => (
  <motion.div variants={scaleIn} className="glass-card overflow-hidden group hover:-translate-y-1">
    {/* Image placeholder */}
    <div className="h-48 bg-gradient-to-br from-purple-900/30 to-cyan-900/20 flex items-center justify-center group-hover:from-purple-900/50 group-hover:to-cyan-900/40 transition-all">
      <Code2 size={32} className="text-purple-500/40" />
    </div>

    <div className="p-5 flex flex-col gap-3">
      <h3 className="font-heading font-semibold text-lg text-white">{project.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{project.desc}</p>

      <div className="h-px bg-white/10" />

      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="px-2 py-0.5 text-xs bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full">
            {t}
          </span>
        ))}
      </div>

      <div className="h-px bg-white/10" />

      <div className="flex gap-4">
        <button className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-white transition-colors">
          <GitFork size={15} /> GitHub
        </button>
        <button className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-white transition-colors">
          <ExternalLink size={15} /> Live Demo
        </button>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <div className="bg-bg-surface">
    <SectionWrapper id="projects" aria-label="Projects">
      <SectionTitle text="Projects" />

      <div className="relative">
        {/* Grid (behind overlay) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-30 pointer-events-none select-none"
        >
          {placeholderProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>

        {/* Empty-state overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass-card p-8 text-center max-w-sm">
            <span className="text-4xl mb-3 block">⚡</span>
            <h3 className="font-heading font-semibold text-xl text-white mb-2">Projects loading soon...</h3>
            <p className="text-text-secondary text-sm">Exciting work is on the way. Check back shortly.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>
);

export default Projects;
