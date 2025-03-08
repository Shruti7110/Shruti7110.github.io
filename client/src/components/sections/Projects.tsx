import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    name: "Event Planner RAG",
    repoUrl: "https://github.com/Shruti7110/Event-Planner-RAG",
  },
  {
    name: "French Learning Tool",
    repoUrl: "https://github.com/Shruti7110/french-learning-tool",
  },
  {
    name: "Motor Predictive Maintenance",
    repoUrl: "https://github.com/Shruti7110/motor-predictive-maintanence",
  },
  {
    name: "Python Coding using Qwen",
    repoUrl: "https://github.com/Shruti7110/python-coding-using-Qwen",
  },
  {
    name: "Electrical Schematic RAG",
    repoUrl: "#",
    inProgress: true,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-[#18F0FF]">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <TooltipProvider key={project.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card 
                      className={`bg-gradient-to-br from-[#0A0F24]/50 to-[#0A0F24]/80
                        border-[#E4E4E4]/10 hover:border-[#18F0FF]/50 
                        shadow-lg shadow-[#18F0FF]/5 hover:shadow-xl hover:shadow-[#18F0FF]/10
                        transition-all duration-300 group overflow-hidden
                        ${project.inProgress ? 'opacity-75' : ''}`}
                    >
                      <CardContent className="p-6 relative">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold text-[#18F0FF] group-hover:text-[#18F0FF]
                            drop-shadow-[0_0_3px_rgba(24,240,255,0.3)]">
                            {project.name}
                          </h3>
                          {!project.inProgress && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#E4E4E4] hover:text-[#18F0FF] transform hover:scale-110 
                                transition-all hover:drop-shadow-[0_0_8px_rgba(24,240,255,0.5)]"
                            >
                              <Github className="w-6 h-6" />
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  {project.inProgress && (
                    <TooltipContent className="bg-[#FF157E]/10 border-[#FF157E]/20 text-[#FF157E]
                      shadow-lg shadow-[#FF157E]/5">
                      <p>Work in progress - Will reach deployment stage soon</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}