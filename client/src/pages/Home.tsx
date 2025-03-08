import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-[#18F0FF]">Hello,</span> I'm Shruti
          </h1>
          <p className="text-xl text-[#E4E4E4]/80 mb-8">
            LLM Engineer and AI Developer passionate about building innovative solutions
            with modern technologies.
          </p>
          <div className="flex gap-4">
            <Link href="/projects">
              <Button className="bg-[#18F0FF] text-[#0A0F24] hover:bg-[#18F0FF]/90">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-[#18F0FF] text-[#18F0FF] hover:bg-[#18F0FF]/10">
                About Me
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
