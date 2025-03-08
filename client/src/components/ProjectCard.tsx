import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Github } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-[#0A0F24]/50 border-[#E4E4E4]/10 hover:border-[#18F0FF]/50 transition-all duration-300 group">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-[#18F0FF]">{project.name}</span>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-[#FFCE45]" />
              {project.starCount}
            </span>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4E4E4] hover:text-[#18F0FF]"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[#E4E4E4]/80 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.topics.map((topic) => (
            <Badge
              key={topic}
              variant="secondary"
              className="bg-[#FF157E]/10 text-[#FF157E] hover:bg-[#FF157E]/20"
            >
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
