import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Experience } from "@/lib/portfolio-data";
import { ExternalLink } from "lucide-react";

type ExperienceSectionProps = {
  experience: Experience[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="scroll-mt-24">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative border-l-2 border-primary/20 pl-6">
            {experience.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-background bg-primary"></div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      {item.role}
                    </h3>
                    <p className="text-lg font-semibold">{item.company}</p>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                    {item.certificateLink && (
                       <Button asChild variant="secondary" size="sm">
                       <a
                         href={item.certificateLink}
                         target="_blank"
                         rel="noopener noreferrer"
                       >
                         View Certificate <ExternalLink className="ml-2" />
                       </a>
                     </Button>
                    )}
                  </div>
                </div>
                
                <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
