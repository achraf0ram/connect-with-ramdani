import { Mail, MessageCircle, Github, Linkedin, Code, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import achrafProfile from "@/assets/achraf-profile.jpg";

const skills = [
  "React", "Laravel", "JavaScript", "HTML/CSS", "Bootstrap", "Tailwind CSS",
  "MySQL", "MongoDB", "Git/GitHub", "UML/Merise", "Python", "Visual Studio Code"
];

const experiences = [
  {
    title: "Stagiaire en Développement",
    company: "Institut Privé Marocain de Gestion",
    period: "Avril - Mai 2024",
    description: "Gestion des bases de données, correction des bugs et amélioration des performances"
  },
  {
    title: "Commercial",
    company: "Magasin",
    period: "2022 - 2025",
    description: "Service client et conseil produits"
  }
];

export const ProfileCard = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/212620740008?text=Salut, je veux poser une question", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:20ramdani02@gmail.com?subject=Question&body=Bonjour", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-bg p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Hero Profile Section */}
        <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="p-8 text-center">
            <div className="relative mx-auto w-32 h-32 mb-6">
              <img
                src={achrafProfile}
                alt="Achraf Ramdani - Développeur Full Stack"
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Code className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-2">Achraf Ramdani</h1>
            <p className="text-xl text-primary font-semibold mb-2">Développeur Full Stack</p>
            
            <div className="flex items-center justify-center gap-4 text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Casablanca, Maroc</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>23 ans</span>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              Développeur passionné par la programmation, spécialisé dans l'univers dynamique du développement 
              web, les technologies backend et frontend. Diplômé en Développement Digital avec une approche agile.
            </p>
          </div>
        </Card>

        {/* Skills Section */}
        <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-card">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              Compétences Techniques
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </Card>

        {/* Experience Section */}
        <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-card">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              Expériences Professionnelles
            </h2>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Contact Section */}
        <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-card">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Contactez Achraf Ramdani
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white h-14 text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                size="lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Contacter via WhatsApp
              </Button>
              
              <Button
                onClick={handleEmailClick}
                variant="secondary"
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                size="lg"
              >
                <Mail className="w-6 h-6 mr-3" />
                Envoyer un e-mail
              </Button>
            </div>

            <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-border">
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center text-muted-foreground">
          <p>© 2025 Achraf Ramdani - Développeur Full Stack | Casablanca, Maroc</p>
        </div>
      </div>
    </div>
  );
};