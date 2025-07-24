import { motion } from "framer-motion";
import SkillIcon from "@/components/SkillIcon";

const skills = [
  { name: "python", label: "Python" },
  { name: "mcp", label: "MCP" },
  { name: "crewai", label: "CrewAI" },
  { name: "openai", label: "OpenAI" },
  { name: "tensorflow", label: "TensorFlow" },
  { name: "opencv", label: "OpenCV" },
  { name: "yolo", label: "YOLO" },
  { name: "supabase", label: "Supabase" },
  { name: "javascript", label: "JavaScript" },
  { name: "matlab", label: "MATLAB" },
  { name: "github", label: "GitHub" },
  { name: "c programming", label: "C Programming" },
  { name: "altium", label: "Altium" },
] as const;

export default function Skills() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Hero Section with Image */}
          <div className="relative mb-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#18F0FF]/10 to-[#FF157E]/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-[#0A0F24]/80 to-[#2B2E3B]/40 rounded-3xl p-8 border border-[#18F0FF]/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h2 className="text-4xl font-bold mb-6 text-[#18F0FF]">
                    Tools & Technologies
                  </h2>
                  <p className="text-lg text-[#E4E4E4]/90 mb-8">
                    Leveraging cutting-edge AI and automation technologies to deliver intelligent, 
                    efficient solutions that transform how businesses operate.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "cursor", label: "Cursor" },
                      { name: "mcp", label: "MCP" },
                      { name: "git", label: "Git" },
                      { name: "crewai", label: "CrewAI" }
                    ].map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <SkillIcon name={skill.label} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Portfolio Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#18F0FF]/20 to-[#FF157E]/20 rounded-3xl blur-2xl"></div>
                    <img 
                      src="/src/assets/portfolio-hero.png" 
                      alt="Shruti Pawar - AI Engineer" 
                      className="relative rounded-3xl shadow-2xl max-w-sm w-full h-auto border border-[#18F0FF]/30"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Tech Arsenal */}
          <div className="bg-gradient-to-r from-[#5D3FD3]/10 to-[#18F0FF]/10 rounded-2xl p-8 border border-[#5D3FD3]/20 mb-8">
            <h3 className="text-3xl font-bold mb-6 text-[#5D3FD3] text-center">Complete Tech Arsenal</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <SkillIcon name={skill.label} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Expertise */}
          <div className="bg-gradient-to-r from-[#FF157E]/10 to-[#5D3FD3]/10 rounded-2xl p-8 border border-[#FF157E]/20">
            <h3 className="text-3xl font-bold mb-6 text-[#FF157E] text-center">Core Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00FF9F] rounded-full"></div>
                  <span className="text-[#E4E4E4]/90">RAG (Retrieval Augmented Generation)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#18F0FF] rounded-full"></div>
                  <span className="text-[#E4E4E4]/90">LLM Fine-tuning & Vector Databases</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FFCE45] rounded-full"></div>
                  <span className="text-[#E4E4E4]/90">Computer Vision & Image Processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF157E] rounded-full"></div>
                  <span className="text-[#E4E4E4]/90">Machine Learning & Predictive Maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#5D3FD3] rounded-full"></div>
                  <span className="text-[#E4E4E4]/90">Arduino & Embedded Systems Programming</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00FF9F] rounded-full"></div>
                  <span className="text-[#E4E4E4]/90">Digital Electronics & Circuit Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#18F0FF] rounded-full"></div>
                  <span className="text-[#E4E4E4]/90">Web Application Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FFCE45] rounded-full"></div>
                  <span className="text-[#E4E4E4]/90">API Integration & Automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF157E] rounded-full"></div>
                  <span className="text-[#E4E4E4]/90">Database Integration (Supabase)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#5D3FD3] rounded-full"></div>
                  <span className="text-[#E4E4E4]/90">IoT Solutions & Edge Computing</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}