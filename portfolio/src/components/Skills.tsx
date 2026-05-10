"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, Cloud, Cpu } from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: Layout, desc: "React, Next.js, Three.js, Tailwind" },
  { name: "Backend Engineering", icon: Terminal, desc: "Node.js, Express, Python, Go" },
  { name: "Database Design", icon: Database, desc: "PostgreSQL, MongoDB, Redis" },
  { name: "Cloud Architecture", icon: Cloud, desc: "AWS, Docker, Kubernetes" },
  { name: "System Design", icon: Cpu, desc: "Scalable Architecture, Microservices" },
  { name: "API Development", icon: Code2, desc: "REST, GraphQL, tRPC" },
];

export default function Skills() {
  return (
    <section className="py-24 bg-black text-white px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">My Arsenal</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500 transition-colors group"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="text-zinc-400">{skill.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}