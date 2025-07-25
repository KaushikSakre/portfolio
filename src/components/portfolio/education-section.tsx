import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Education } from "@/lib/portfolio-data";
import { GraduationCap } from "lucide-react";

type EducationSectionProps = {
  education: Education[];
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="scroll-mt-24">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Education</CardTitle>
        </CardHeader>
        <CardContent>
          {education.map((edu, index) => (
            <div key={index} className="flex items-start gap-4 [&:not(:last-child)]:mb-6">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <GraduationCap />
                </div>
                <div>
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    <p className="font-semibold text-muted-foreground">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.duration}</p>
                </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
