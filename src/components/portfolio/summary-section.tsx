
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SummarySectionProps = {
  summary: string;
};

export function SummarySection({ summary }: SummarySectionProps) {
  return (
    <section id="summary" className="scroll-mt-24">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">
            Professional Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed text-foreground">
            {summary}
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
