import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-[#18F0FF]">About Me</h2>
          
          <Card className="bg-[#0A0F24]/50 border-[#E4E4E4]/10">
            <CardContent className="p-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-[#E4E4E4]/90">
                  I am an LLM Engineer with expertise in building and deploying AI applications.
                  My focus is on developing innovative solutions using cutting-edge technologies
                  in the field of artificial intelligence and machine learning.
                </p>
                
                <p className="text-lg leading-relaxed text-[#E4E4E4]/90 mt-4">
                  With experience in RAG, LoRA, and AI Agents, I've worked on various projects
                  that demonstrate the practical applications of these technologies in solving
                  real-world problems.
                </p>

                <p className="text-lg leading-relaxed text-[#E4E4E4]/90 mt-4">
                  I'm passionate about staying up-to-date with the latest developments in AI
                  and contributing to the open-source community through my GitHub projects.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
