import React from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User, MapPin, Heart, Award } from "lucide-react";

export default function About() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-gradient-to-r from-[#5D3FD3]/20 to-[#FF157E]/20 border-[#5D3FD3]/30 text-[#E4E4E4] hover:bg-[#5D3FD3]/30 hover:border-[#5D3FD3]/50"
        >
          <User className="mr-2 w-4 h-4" />
          About Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[80vh] bg-[#0A0F24]/95 border-[#18F0FF]/20 text-[#E4E4E4] backdrop-blur-sm overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#18F0FF] mb-4">About Shruti</DialogTitle>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#00FF9F] mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-[#00FF9F] mb-2">Background</h3>
              <p className="text-[#E4E4E4]/90 leading-relaxed">
                I'm an engineer with a passion for AI and automation, based in India. As a freelancer, 
                I specialize in creating intelligent solutions that bridge the gap between complex 
                technology and real-world applications.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-[#FF157E] mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-[#FF157E] mb-2">Passions & Interests</h3>
              <p className="text-[#E4E4E4]/90 leading-relaxed">
                I'm a big foodie who loves exploring different cuisines and cultures. This curiosity 
                extends to my work, where I enjoy discovering new technologies and finding innovative 
                ways to solve complex problems.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-[#FFCE45] mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-[#FFCE45] mb-2">Professional Journey</h3>
              <p className="text-[#E4E4E4]/90 leading-relaxed mb-4">
                While initially working as an Electrical Engineer for nearly 2 years, I actively pursued stretch projects within that role, 
                alongside dedicating significant personal time to advanced online courses, YouTube tutorials, and independent projects. 
                This self-driven immersion allowed me to deeply cultivate my skills in Artificial Intelligence and make a strategic transition 
                to a career focused entirely on cutting-edge AI solutions.
              </p>
              <p className="text-[#E4E4E4]/90 leading-relaxed mb-4">
                Now, as a freelancer, I specialize in crafting intelligent systems that don't just bridge gaps—they obliterate them. 
                My unique blend of foundational engineering discipline and a profound passion for coding, AI, and automation gives me 
                an unparalleled edge. I don't just deliver solutions; I partner with you, digging deep to understand your vision, 
                and then architecting bespoke AI systems that propel your business forward.
              </p>
              <p className="text-[#E4E4E4]/90 leading-relaxed">
                <strong className="text-[#18F0FF]">My Expertise in Action: Delivering Tangible Impact</strong><br />
                <span className="text-[#00FF9F] font-semibold">∴ Automation Redefined:</span> I engineer automated tools that obliterate repetitive tasks and unlock unprecedented levels of operational efficiency.<br />
                <span className="block pl-6 text-[#E4E4E4]/80">• Proven Impact: Developed an Automated Manual Generator that revolutionizes documentation creation, and a BOM Analyzer & Optimizer that automates critical, complex sourcing processes.</span><br />
                <span className="text-[#FF157E] font-semibold">∴ Intelligent Systems, Custom Built:</span> From sophisticated Large Language Model (LLM) agents to powerful Computer Vision applications, I custom-build AI that gets results.<br />
                <span className="block pl-6 text-[#E4E4E4]/80">• Proven Impact: Created AI-powered Workflow Assistants that seamlessly automate customer queries and streamline backend operations. Pioneered Medical & Industrial Image Analysis solutions (e.g., Brain Tumor Detection, PCB Crack Detection) leveraging state-of-the-art techniques like RAG, LoRA, YOLO, and OpenCV.</span><br />
                <span className="text-[#5D3FD3] font-semibold">∴ Strategic Collaboration, Breakthrough Solutions:</span> My approach is a true partnership. I translate your most ambitious conceptual needs into practical, high-impact AI deployments, ensuring every solution is meticulously aligned with your strategic objectives.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#18F0FF]/10 to-[#00FF9F]/10 rounded-lg p-4 border border-[#18F0FF]/20">
            <p className="text-[#E4E4E4]/90 italic text-center">
              "I believe in creating technology that not only solves problems but also makes 
              life easier and more efficient for businesses and individuals alike."
            </p>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}