import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-white/10" : "bg-slate-950/70 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">TS</span>
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-white font-semibold leading-tight">Taranjyot Singh</div>
              <div className="text-xs text-slate-300">AI Platform Engineer</div>
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <button key={item.label} onClick={() => scrollToSection(item.href)} className="text-slate-300 hover:text-purple-300 transition-colors duration-300 relative group font-medium">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300" title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button key={item.label} onClick={() => scrollToSection(item.href)} className="text-left text-slate-300 hover:text-purple-300 transition-colors duration-300 py-2 font-medium">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
