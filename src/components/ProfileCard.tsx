import { Mail, MessageCircle, Github, Linkedin, Code, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profileAvatar from "@/assets/profile-avatar.jpg";

const skills = [
  "React", "TypeScript", "Node.js", "Python", "JavaScript", "MongoDB", 
  "Express.js", "Tailwind CSS", "Next.js", "Git", "Docker", "AWS"
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
                src={profileAvatar}
                alt="Ramdani - Développeur"
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Code className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-2">Ramdani</h1>
            <p className="text-xl text-primary font-semibold mb-2">Développeur Full Stack</p>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
              <MapPin className="w-4 h-4" />
              <span>Maroc</span>
            </div>
            
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionné par le développement web moderne, je crée des applications innovantes 
              avec les dernières technologies. Spécialisé en React, Node.js et solutions cloud.
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

        {/* Contact Section */}
        <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-card">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Comment souhaitez-vous me contacter ?
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
          <p>© 2025 Ramdani - Développeur Full Stack</p>
        </div>
      </div>
    </div>
  );
};