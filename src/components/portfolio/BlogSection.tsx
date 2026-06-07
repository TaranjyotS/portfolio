import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const notes = [
  { title: "Designing Production-Style AI Platforms", description: "Notes on turning GenAI prototypes into usable backend systems with APIs, auth, evaluation, and deployment workflows.", tags: ["GenAI", "Backend", "System Design"] },
  { title: "CI/CD and DevSecOps for Portfolio Projects", description: "How automated tests, linting, security checks, Docker, and deployment pipelines make personal projects look production-minded.", tags: ["CI/CD", "DevSecOps", "Docker"] },
  { title: "Building Recruiter-Friendly Engineering Repositories", description: "A repeatable README and documentation system for making projects scannable without losing technical depth.", tags: ["GitHub", "Documentation", "Portfolio"] },
];

const BlogSection = () => (
  <section id="notes" className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Engineering Notes</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Short technical notes and project writeups planned for the portfolio.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {notes.map((note) => (
          <Card key={note.title} className="bg-card border-border hover-lift transition-smooth">
            <CardHeader><div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4"><FileText className="w-6 h-6" /></div><CardTitle>{note.title}</CardTitle></CardHeader>
            <CardContent><p className="text-muted-foreground mb-5 leading-relaxed">{note.description}</p><div className="flex flex-wrap gap-2">{note.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}</div></CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
