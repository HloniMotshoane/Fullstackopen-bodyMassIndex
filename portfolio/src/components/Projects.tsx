"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A high-performance e-commerce platform built with Next.js and Go.",
    tech: ["Next.js", "Go", "PostgreSQL"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Project Beta",
    description: "Real-time collaborative workspace using WebSockets and CRDTs.",
    tech: ["React", "Node.js", "Redis"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Project Gamma",
    description: "3D data visualization dashboard for machine learning models.",
    tech: ["Three.js", "Python", "WebGL"],
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-zinc-950 text-white px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Featured Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden group bg-zinc-900"
            >
              <div className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`} />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    <Code className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}