import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <span className="text-[#18F0FF]">Hey,</span> I'm Shruti
          </h1>
          <p className="text-xl text-[#E4E4E4]/80 mb-8">
            An Electrical Engineer turned AI enthusiast. Why? After making
            circuits work, I figured it was time to let AI do the work for me.
            If laziness is the mother of invention, I’m basically an innovator.
          </p>
          <div className="flex gap-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-[#18F0FF] text-[#0A0F24] hover:bg-[#18F0FF]/90"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              onClick={() => scrollToSection("about")}
              variant="outline"
              className="border-[#18F0FF] text-[#18F0FF] hover:bg-[#18F0FF]/10"
            >
              About Me
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
