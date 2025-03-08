import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project } from "@shared/schema";

export default function Projects() {
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/github/projects"],
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-[#18F0FF]">Projects</h2>

          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-[200px] bg-[#E4E4E4]/5" />
              ))}
            </div>
          )}

          {error && (
            <div className="text-[#FF157E]">
              Failed to load projects. Please try again later.
            </div>
          )}

          {projects && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
