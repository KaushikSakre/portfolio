
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Project } from "@/lib/portfolio-data";
import { Expand, ExternalLink, Video } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex flex-col gap-4">
        <h2 className="font-headline text-3xl">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              {project.image && (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="relative h-48 w-full cursor-pointer group">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-contain"
                        data-ai-hint={project.aiHint}
                      />
                       <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Expand className="text-white h-8 w-8" />
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogPortal>
                    <DialogOverlay />
                    <DialogContent className="max-w-4xl p-0">
                      <div className="relative aspect-video">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </DialogContent>
                  </DialogPortal>
                </Dialog>
              )}
              <CardHeader>
                <CardTitle className="mb-2 font-headline text-xl">
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc pl-5 text-foreground leading-relaxed">
                  {project.description.split('\n').map((line, i) => (
                    line.trim() && <li key={i}>{line.trim()}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                {project.link && (
                  <Button asChild variant="link" className="p-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub <ExternalLink className="ml-2" />
                    </a>
                  </Button>
                )}
                {project.video && (
                  <Button asChild variant="link" className="p-0">
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo <Video className="ml-2" />
                  </a>
                </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
