import Hero3D from "@/components/Hero3D";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero3D />
      <Skills />
      <Projects />

      <footer className="py-8 text-center text-zinc-500 border-t border-zinc-900 bg-black">
        <p>© {new Date().getFullYear()} Software Engineer. All rights reserved.</p>
      </footer>
    </main>
  );
}