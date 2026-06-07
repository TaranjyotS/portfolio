import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: "5+", label: "Years Experience" },
  { value: "18+", label: "GitHub Repositories" },
  { value: "16", label: "Portfolio Projects" },
  { value: "4", label: "Certifications" },
];

const roles = ["AI Platform Engineer", "Backend Systems Builder", "GenAI Engineer", "Cloud-Native Developer", "MLOps Practitioner"];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-16 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-3 h-3 rounded-full bg-blue-400/40 animate-bounce" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-purple-400/40 animate-ping" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-purple-200 mb-7 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" /> Senior Software Engineer | AI Platform Engineer
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Hi, I&apos;m <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Taranjyot Singh</span>
          </h1>

          <div className="h-10 mb-8 overflow-hidden">
            <div className="animate-[roleSlide_12s_infinite]">
              {roles.map((role) => (
                <div key={role} className="h-10 text-2xl md:text-3xl font-semibold text-purple-200 flex items-center justify-center">
                  {role}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10" asChild>
              <a href="https://github.com/TaranjyotS" target="_blank" rel="noopener noreferrer"><Github className="mr-2 w-5 h-5" /> GitHub</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10" asChild>
              <a href="https://www.linkedin.com/in/taranjyot-singh/" target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 w-5 h-5" /> LinkedIn</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10" asChild>
              <a href="#contact"><Mail className="mr-2 w-5 h-5" /> Contact</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-5">
                <div className="text-3xl font-bold text-white">{metric.value}</div>
                <div className="text-sm text-slate-300 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>

          <a href="#about" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            Explore Portfolio <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
