"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Award,
  BookOpen,
  Briefcase,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Lightbulb,
  User,
  Settings,
} from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "../ui/button";

type PortfolioSidebarProps = {
  children: React.ReactNode;
};

const navItems = [
  { href: "#summary", icon: User, label: "Summary", tooltip: "Summary" },
  { href: "#skills", icon: Settings, label: "Skills", tooltip: "Technical Skills" },
  { href: "#experience", icon: Briefcase, label: "Experience", tooltip: "Experience" },
  { href: "#projects", icon: Lightbulb, label: "Projects", tooltip: "Projects" },
  { href: "#publications", icon: BookOpen, label: "Publications", tooltip: "Publications" },
  { href: "#education", icon: GraduationCap, label: "Education", tooltip: "Education" },
  { href: "#certifications", icon: Award, label: "Certifications", tooltip: "Certifications" },
];

export function PortfolioSidebar({ children }: PortfolioSidebarProps) {
  const [activeItem, setActiveItem] = React.useState("#summary");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" } 
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Sidebar>
      <SidebarHeader>
        {children}
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                asChild
                isActive={activeItem === item.href}
                tooltip={item.tooltip}
              >
                <a href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="flex flex-col gap-2">
        <SidebarSeparator />
         <div className="flex justify-around p-2">
            <Button variant="ghost" size="icon" asChild>
                <a href={`mailto:${portfolioData.email}`} aria-label="Email">
                    <Mail />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github />
                </a>
            </Button>
         </div>

      </SidebarFooter>
    </Sidebar>
  );
}
