import { ThemeProvider } from "next-themes";
import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics";

const Index = () => {
  useEffect(() => { trackPageView(); }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <footer className="bg-slate-950/80 backdrop-blur-sm py-8 text-center border-t border-white/10">
          <div className="container mx-auto px-6">
            <p className="text-slate-400">© 2026 Taranjyot Singh</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
