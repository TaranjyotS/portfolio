import { Award, BookOpen, Calendar, FileText, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const education = [
  {
    degree: "Master of Engineering",
    field: "Quality Systems Engineering",
    institution: "Concordia University",
    location: "Montreal, QC, Canada",
    gpa: "3.3 / 4.3",
    achievement: "Graduate Engineering Program",
  },
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Guru Gobind Singh Indraprastha University",
    location: "Delhi, India",
    gpa: "7.8 / 9",
    achievement: "First Division with Distinction",
  },
];

const certifications = [
  { title: "AWS Cloud Technical Essentials", issuer: "Coursera", focus: "AWS Cloud" },
  { title: "Google AI Essentials", issuer: "Coursera", focus: "AI Foundations" },
  { title: "Artificial Intelligence Certification", issuer: "HPE / WAC Institute", focus: "AI" },
  { title: "Java / Android Development", issuer: "CMC Institute", focus: "Java & Android" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Education & Certifications</h2>
          <div className="w-24 h-1 skill-gradient mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formal engineering education supported by cloud, AI, and software development certifications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="education" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-12 p-1">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>

            <TabsContent value="education">
              <div className="grid md:grid-cols-2 gap-8">
                {education.map((item) => (
                  <Card key={item.degree} className="group hover-lift transition-all duration-300 bg-card/70 backdrop-blur-sm border border-border/50">
                    <CardHeader>
                      <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4"><BookOpen className="w-6 h-6" /></div>
                      <CardTitle className="text-2xl text-card-foreground group-hover:text-primary transition-colors">{item.degree}</CardTitle>
                      <p className="text-lg text-primary font-semibold">{item.field}</p>
                      <p className="text-muted-foreground">{item.institution}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-muted-foreground"><MapPin size={16} /> {item.location}</div>
                        <div className="flex items-center gap-2"><Award size={16} className="text-primary" /><span className="font-semibold text-card-foreground">GPA: {item.gpa}</span></div>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-600 border-green-400/30">{item.achievement}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certifications">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {certifications.map((cert) => (
                  <Card key={cert.title} className="group hover-lift transition-all duration-300 bg-card/70 backdrop-blur-sm border border-border/50 text-center">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-lg bg-primary/20 text-primary mx-auto mb-4 w-fit"><FileText className="w-6 h-6" /></div>
                      <h4 className="font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs">{cert.focus}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
