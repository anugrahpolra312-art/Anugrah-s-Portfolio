import { FileText } from 'lucide-react';
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

const placeholderBlogs = [
  { tag: 'Web Dev', title: 'Building Scalable REST APIs with Node.js', excerpt: 'An in-depth look at designing robust and scalable APIs using Express and MongoDB...', },
  { tag: 'AI', title: 'Getting Started with LangChain in Python', excerpt: 'A practical guide to building LLM-powered applications using the LangChain framework...', },
  { tag: 'Tutorial', title: 'Docker for Beginners: Containerise Your App', excerpt: 'Step-by-step walkthrough on containerising a full-stack web application with Docker...', },
  { tag: 'Hackathon', title: 'Lessons from My First Hackathon', excerpt: 'What I learned about shipping fast, teamwork, and product thinking at my first 24-hour hackathon...', },
];

const BlogCard = ({ blog }) => (
  <motion.div variants={scaleIn} className="glass-card overflow-hidden group hover:-translate-y-1 flex flex-col">
    {/* Thumbnail */}
    <div className="h-40 bg-gradient-to-br from-cyan-900/30 to-purple-900/20 flex items-center justify-center group-hover:from-cyan-900/50 group-hover:to-purple-900/40 transition-all">
      <FileText size={28} className="text-cyan-500/40" />
    </div>

    <div className="p-5 flex flex-col gap-3 flex-1">
      <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 w-fit">
        {blog.tag}
      </span>
      <h3 className="font-heading font-semibold text-lg text-white leading-snug">{blog.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed flex-1">{blog.excerpt}</p>

      <div className="h-px bg-white/10" />

      <div className="flex items-center justify-between">
        <span className="text-xs text-text-muted flex items-center gap-1">📅 Coming Soon</span>
        <button className="group/btn flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors">
          Read
          <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
        </button>
      </div>
    </div>
  </motion.div>
);

const Blogs = () => (
  <SectionWrapper id="blogs" aria-label="Blogs">
    <SectionTitle text="Blogs" />

    <div className="relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-30 pointer-events-none select-none"
      >
        {placeholderBlogs.map((b) => (
          <BlogCard key={b.title} blog={b} />
        ))}
      </motion.div>

      {/* Empty state */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="glass-card p-8 text-center max-w-sm">
          <span className="text-4xl mb-3 block">✍️</span>
          <h3 className="font-heading font-semibold text-xl text-white mb-2">Blogs &amp; technical writings coming soon.</h3>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Blogs;
