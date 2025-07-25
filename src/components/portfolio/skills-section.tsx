import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type SkillCategory = {
  title: string;
  skills: string[];
};

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="space-y-6" id="skills">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
        <p className="text-muted-foreground">
          Comprehensive technical expertise across AI/ML, NLP, and software development
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((category, index) => (
          <Card key={index} className="h-fit">
            <CardHeader>
              <CardTitle className="text-xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}