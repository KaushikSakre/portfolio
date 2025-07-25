import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

type PageHeaderProps = {
  name: string;
  title: string;
};

export function PageHeader({ name, title }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex-1">
          <h1 className="font-headline text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            {name}
          </h1>
          <p className="text-sm text-muted-foreground sm:text-base lg:text-lg mt-1">
            {title}
          </p>
        </div>
        
        {/* Contact buttons always visible */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild className="hidden sm:flex">
            <a href={`mailto:${portfolioData.email}`}>
              <Mail className="h-4 w-4 mr-2" />
              Email
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="hidden sm:flex">
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="hidden sm:flex">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          
          {/* Mobile icons only */}
          <Button variant="ghost" size="sm" asChild className="sm:hidden">
            <a href={`mailto:${portfolioData.email}`} aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild className="sm:hidden">
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild className="sm:hidden">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
