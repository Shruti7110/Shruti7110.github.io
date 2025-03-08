import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-[#18F0FF] drop-shadow-[0_0_3px_rgba(24,240,255,0.3)]">Resume</h2>

          <Card className="bg-gradient-to-br from-[#0A0F24]/50 to-[#0A0F24]/80 border-[#E4E4E4]/10 shadow-lg shadow-[#18F0FF]/5">
            <CardContent className="p-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-[#E4E4E4]/90 mb-6">
                  Download my resume to learn more about my experience in LLM Engineering,
                  AI Development, and technical skills.
                </p>

                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button 
                    className="bg-gradient-to-r from-[#18F0FF] to-[#FF157E] text-[#0A0F24] hover:shadow-lg hover:shadow-[#18F0FF]/20 transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}