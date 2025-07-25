import { CertificationsSection } from "@/components/portfolio/certifications-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { PageHeader } from "@/components/portfolio/page-header";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { PublicationsSection } from "@/components/portfolio/publications-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { SummarySection } from "@/components/portfolio/summary-section";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader name={portfolioData.name} title={portfolioData.title} />
      <main className="container mx-auto flex flex-col gap-12 px-4 py-8 sm:gap-16 sm:px-6 lg:gap-24 lg:px-8 max-w-6xl">
        <SummarySection summary={portfolioData.summary} />
        <SkillsSection skills={portfolioData.skills} />
        <ExperienceSection experience={portfolioData.experience} />
        <ProjectsSection projects={portfolioData.projects} />
        <PublicationsSection publications={portfolioData.publications} />
        <EducationSection education={portfolioData.education} />
        <CertificationsSection certifications={portfolioData.certifications} />
      </main>
    </div>
  );
}
