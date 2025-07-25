import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Publication } from "@/lib/portfolio-data";
import { ExternalLink } from "lucide-react";

type PublicationsSectionProps = {
  publications: Publication[];
};

export function PublicationsSection({ publications }: PublicationsSectionProps) {
  return (
    <section id="publications" className="scroll-mt-24">
      <div className="flex flex-col gap-4">
        <h2 className="font-headline text-3xl">Publications & Research</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((publication, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  {publication.title}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  <span>{publication.journal}</span> &bull;{" "}
                  <span>{publication.date}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc space-y-2 pl-5 text-foreground leading-relaxed">
                  {publication.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {publication.link && (
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    View Registration <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
