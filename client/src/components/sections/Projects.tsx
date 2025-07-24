import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Star, Calendar, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "Motor Predictive Maintenance",
    repoUrl: "https://github.com/Shruti7110/motor-predictive-maintanence",
    description:
      "IoT-based predictive maintenance system using neural networks and Arduino for real-time motor health monitoring",
    technologies: ["TensorFlow Lite", "Arduino", "IoT", "Neural Networks"],
    category: "IoT/Embedded",
    featured: true,
  },
  {
    name: "Brain Tumor Detection",
    repoUrl: "https://github.com/Shruti7110/Brain-Tumor-Detection",
    description:
      "Computer vision system using YOLOv10 for real-time tumor detection in MRI scans",
    technologies: ["YOLO", "Computer Vision", "Gradio", "Transfer Learning"],
    category: "Computer Vision",
    featured: true,
  },
  {
    name: "Stock Picker Using MCP",
    repoUrl: "https://github.com/Shruti7110/Stock-Picker-Using-MCP",
    description:
      "AI-powered stock screener combining Brave Search, MCP Fetch, and FMP fundamentals to identify high-potential Indian equities with mail alerts",
    technologies: ["MCP", "Python", "Financial Analysis", "Automation", "AI"],
    category: "MCP",
    featured: false,
  },
  {
    name: "Personal AI Assistant",
    repoUrl: "https://github.com/Shruti7110/Personal-AI-Assistant",
    description:
      "Intelligent personal assistant leveraging advanced AI to automate daily tasks and provide personalized assistance",
    technologies: ["AI", "Automation", "Personal Productivity", "Python"],
    category: "AI/ML",
    featured: false,
  },
  {
    name: "PCB Crack Detection",
    repoUrl: "https://github.com/Shruti7110/PCB-Crack-Detection",
    description:
      "Industrial computer vision solution for automated PCB quality control",
    technologies: ["OpenCV", "Deep Learning", "Quality Control"],
    category: "Computer Vision",
    featured: false,
  },
  {
    name: "Event Planner RAG",
    repoUrl: "https://github.com/Shruti7110/Event-Planner-RAG",
    description:
      "AI-powered chatbot for event planning using RAG model with LangChain, OpenAI GPT, and ChromaDB",
    technologies: ["Python", "LangChain", "OpenAI", "ChromaDB"],
    category: "AI/ML",
    featured: false,
  },
  {
    name: "Cover Letter Maker",
    repoUrl: "https://github.com/Shruti7110/Cover-Letter-Maker",
    description:
      "AI orchestration framework that automates personalized cover letter creation using prompt engineering and context-aware generation",
    technologies: [
      "AI Orchestration",
      "GPT",
      "Prompt Engineering",
      "Automation",
    ],
    category: "Freelance Projects",
    featured: false,
  },
  {
    name: "Automated Product Manual Maker",
    repoUrl: "",
    description:
      "Consolidates DAP, SOP, HMI details, electrical design, and BOM from different teams into a unified product manual using company templates",
    technologies: ["Automation", "Document Generation", "Template Processing"],
    category: "Freelance Projects",
    featured: false,
  },
  {
    name: "Product BOM Merging Tool",
    repoUrl: "",
    description:
      "Merges multiple BOMs across assembly lines, identifies common parts, and generates consolidated purchasing lists for procurement teams",
    technologies: ["Excel Processing", "Data Analysis", "Automation"],
    category: "Freelance Projects",
    featured: false,
  },
  {
    name: "Project Tracking Website",
    repoUrl: "",
    description:
      "Web application to track projects within an organization with 2-factor verification, timeline viewer, email notifications for due dates, and on-time delivery rate tracking.",
    technologies: [
      "Web Development",
      "Authentication",
      "Email Integration",
      "Timeline Management",
    ],
    category: "Freelance Projects",
    featured: false,
  },
  {
    name: "French Learning Tool",
    repoUrl: "https://github.com/Shruti7110/french-learning-tool",
    description:
      "Interactive language learning application with AI-powered features",
    technologies: ["AI", "Education", "Interactive Learning"],
    category: "Education Tech",
    featured: false,
  },
];

const categories = [
  "All",
  "Freelance Projects",
  "AI/ML",
  "Computer Vision",
  "IoT/Embedded",
  "Education Tech",
  "Development Tools",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(
    null,
  );

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);
  const regularProjects = filteredProjects.filter(
    (project) => !project.featured,
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#18F0FF]">My Work</h2>
            <p className="text-lg text-[#E4E4E4]/80 max-w-2xl mx-auto">
              Explore my latest projects showcasing AI, Computer Vision, and IoT
              solutions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#18F0FF] text-[#0A0F24] shadow-lg shadow-[#18F0FF]/30"
                    : "bg-[#2B2E3B] text-[#E4E4E4] hover:bg-[#18F0FF]/10 hover:text-[#18F0FF]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Featured Projects */}
          {selectedCategory === "All" && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-[#FFCE45]">
                🌟 Featured Projects
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredProject(project.name)}
                    onHoverEnd={() => setHoveredProject(null)}
                  >
                    <Card className="bg-gradient-to-br from-[#0A0F24]/80 to-[#2B2E3B]/50 border-[#18F0FF]/20 hover:border-[#18F0FF]/60 shadow-xl hover:shadow-2xl hover:shadow-[#18F0FF]/20 transition-all duration-500 group overflow-hidden h-full">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-[#00FF9F] rounded-full animate-pulse"></div>
                            <Badge className="bg-[#FF157E]/10 text-[#FF157E] border-[#FF157E]/20">
                              Featured
                            </Badge>
                          </div>
                          <div className="flex gap-3">
                            {project.repoUrl ? (
                              <motion.a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#E4E4E4] hover:text-[#18F0FF] transition-colors"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                              >
                                <Github className="w-6 h-6" />
                              </motion.a>
                            ) : (
                              <Github className="w-6 h-6 text-[#E4E4E4]/30" />
                            )}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-[#18F0FF] mb-4 group-hover:text-[#FFCE45] transition-colors">
                          {project.name}
                        </h3>

                        <p className="text-[#E4E4E4]/90 mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-[#5D3FD3]/10 text-[#5D3FD3] hover:bg-[#5D3FD3]/20 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#FFCE45]/10 text-[#FFCE45] border-[#FFCE45]/20">
                            {project.category}
                          </Badge>
                          <motion.div
                            className="flex items-center text-[#18F0FF] text-sm"
                            animate={
                              hoveredProject === project.name
                                ? { x: 5 }
                                : { x: 0 }
                            }
                          >
                            <span className="mr-2">View Project</span>
                            <ExternalLink className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {(selectedCategory === "All"
              ? regularProjects
              : filteredProjects
            ).map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gradient-to-br from-[#0A0F24]/50 to-[#2B2E3B]/30 border-[#E4E4E4]/10 hover:border-[#18F0FF]/50 shadow-lg hover:shadow-xl hover:shadow-[#18F0FF]/10 transition-all duration-300 group overflow-hidden h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Code className="w-5 h-5 text-[#18F0FF]" />
                        <Badge className="bg-[#FFCE45]/10 text-[#FFCE45] border-[#FFCE45]/20 text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E4E4E4] hover:text-[#18F0FF] transform hover:scale-110 transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>

                    <h3 className="text-xl font-semibold text-[#5D3FD3] group-hover:text-[#18F0FF] mb-3 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-[#E4E4E4]/80 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-[#146C94]/10 text-[#146C94] text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-[#E4E4E4]/10 text-[#E4E4E4] text-xs"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
