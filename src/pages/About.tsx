import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, BookOpen, GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const researchAreas = [
    t('about.research.hydraulics'),
    t('about.research.hydrology'),
    t('about.research.ai'),
    t('about.research.modeling'),
    t('about.research.optimization'),
    t('about.research.prediction'),
    t('about.research.management'),
    t('about.research.sustainability')
  ];

  const teamMembers = [
    {
      name: t('about.team.coordinator.name'),
      role: t('about.team.coordinator.role'),
      description: t('about.team.coordinator.description'),
      initials: "JS"
    },
    {
      name: t('about.team.researcher1.name'),
      role: t('about.team.researcher1.role'),
      description: t('about.team.researcher1.description'),
      initials: "MS"
    },
    {
      name: t('about.team.researcher2.name'),
      role: t('about.team.researcher2.role'),
      description: t('about.team.researcher2.description'),
      initials: "PC"
    },
    {
      name: t('about.team.student1.name'),
      role: t('about.team.student1.role'),
      description: t('about.team.student1.description'),
      initials: "AO"
    },
    {
      name: t('about.team.student2.name'),
      role: t('about.team.student2.role'),
      description: t('about.team.student2.description'),
      initials: "CL"
    },
    {
      name: t('about.team.student3.name'),
      role: t('about.team.student3.role'),
      description: t('about.team.student3.description'),
      initials: "JF"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-primary-foreground/90">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{t('about.mission.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.mission.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{t('about.vision.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.vision.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Research Areas */}
          <Card className="shadow-elegant border-0 mb-16">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-primary">{t('about.research.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {researchAreas.map((area, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('about.team.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="shadow-elegant border-0 hover:shadow-lg transition-smooth">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">{t('about.stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">{t('about.stats.publications')}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">{t('about.stats.students')}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">{t('about.stats.years')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;