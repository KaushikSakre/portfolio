import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Certification } from "@/lib/portfolio-data";
import { Award, ExternalLink } from "lucide-react";

type CertificationsSectionProps = {
  certifications: Certification[];
};

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  if (certifications.length === 0) {
    return null;
  }
  
  return (
    <section id="certifications" className="scroll-mt-24">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">
            Certifications & Awards
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-start gap-4">
               <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Award />
                </div>
                <div className="flex-grow">
                    <h3 className="text-lg font-bold">{cert.name}</h3>
                    <p className="font-semibold text-muted-foreground">{cert.authority}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <ExternalLink />
                  </a>
                )}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
