import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-[#18F0FF]">About Me</h2>

          <Card className="bg-[#0A0F24]/50 border-[#E4E4E4]/10">
            <CardContent className="p-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-[#E4E4E4]/90">
                  I’m currently an Electrical Engineer who took a detour into the world of AI and never looked back. </p>
                <p className="text-lg leading-relaxed text-[#E4E4E4]/90 mt-4"> While my background is in Instrumentation and Controls, I quickly realized that my real passion lies in coding, AI, and large language models. </p>
                    <p className="text-lg leading-relaxed text-[#E4E4E4]/90 mt-4">                  After 1.5 years of hands-on experience, I made the decision to
                  fully transition into AI Engineering, blending my
                  multidisciplinary skill set with my newfound love for
                  intelligent systems. My goal? To bridge the gap between
                  hardware and AI, creating innovative solutions that push the
                  boundaries of technology.  </p>
                        <p className="text-lg leading-relaxed text-[#E4E4E4]/90 mt-4">With a mix of engineering
                  fundamentals and cutting-edge AI knowledge, I’m all about
                  leveraging my expertise to make a bigger impact—because the
                  best innovations happen when different fields collide. Let’s
                  build something smarter, together!
                </p>

                <p className="text-lg leading-relaxed text-[#E4E4E4]/90 mt-4">
                  With experience in RAG, LoRA, and AI Agents, I've worked on
                  various projects that demonstrate the practical applications
                  of these technologies in solving real-world problems. My work
                  also extends into Computer Vision, where I've developed solutions
                  for Brain Tumor Detection and PCB Crack Detection using advanced
                  techniques like YOLO and OpenCV.
                </p>

                <p className="text-lg leading-relaxed text-[#E4E4E4]/90 mt-4">
                  I'm passionate about staying up-to-date with the latest
                  developments in AI and contributing to the open-source
                  community through my GitHub projects.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
