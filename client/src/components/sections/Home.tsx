import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#18F0FF]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#FF157E]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-[#00FF9F]/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-[#FFCE45]/10 rounded-full blur-xl animate-pulse delay-3000"></div>
        
        {/* Floating Code Elements */}
        <motion.div
          className="absolute top-32 right-1/3 text-[#18F0FF]/20 text-sm font-mono"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {'<AI />'}
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/5 text-[#FF157E]/20 text-sm font-mono"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          {'def automate():'}
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-10 text-[#00FF9F]/20 text-sm font-mono"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        >
          {'// efficiency++'}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#18F0FF] drop-shadow-[0_0_10px_rgba(24,240,255,0.3)]">
                Hey,
              </span>{" "}
              I'm <span>Shruti</span>
              {/* Moving ball animation */}
              <span className="inline-block ml-5 relative">
                <div className="w-3 h-3 bg-[#00FF9F] rounded-full animate-bounce inline-block"></div>
              </span>
            </h1>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-xl text-[#E4E4E4]/90 leading-relaxed">
              I was an Electrical Engineer, but frankly, I got tired of doing
              all the work <br /> myself. So, I learned to build{" "}
              <span className="text-[#18F0FF] font-semibold">AI</span> that does
              it for me (and for you!).
            </p>

            <p className="text-lg text-[#E4E4E4]/80">
              If finding the smartest shortcut is an art, consider me your
              resident master. <br />
              <span className="text-[#FFCE45] font-medium">
                {" "}
                Welcome to the future of efficient business.
              </span>
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-[#FF157E] font-semibold">
                ✨ AI Engineer
              </span>
              <span className="text-[#E4E4E4]/50">•</span>
              <span className="text-[#5D3FD3] font-semibold">
                🚀 Automation Specialist
              </span>
              <span className="text-[#E4E4E4]/50">•</span>
              <span className="text-[#00FF9F] font-semibold">
                💡 Problem Solver
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-[#18F0FF] to-[#00FF9F] text-[#0A0F24] hover:shadow-lg hover:shadow-[#18F0FF]/25 font-semibold px-8 py-3 group"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("chatbot")}
                variant="outline"
                className="border-[#FF157E] text-[#FF157E] hover:bg-[#FF157E]/10 hover:border-[#FF157E] px-8 py-3 font-semibold group"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Ask My AI
              </Button>
            </motion.div>
          </div>
          </motion.div>
          
          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Logo/Profile Image */}
              <div className="w-64 h-64 bg-gradient-to-br from-[#18F0FF]/20 to-[#FF157E]/20 rounded-full flex items-center justify-center border border-[#18F0FF]/30">
                <img 
                  src="/logo.svg" 
                  alt="Shruti Pawar" 
                  className="w-48 h-48 rounded-full object-cover"
                />
              </div>
              
              {/* Orbiting Tech Icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-[#18F0FF]/10 rounded-full flex items-center justify-center border border-[#18F0FF]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-[#18F0FF] text-xl">🤖</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#FF157E]/10 rounded-full flex items-center justify-center border border-[#FF157E]/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-[#FF157E] text-xl">⚡</span>
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -left-8 w-10 h-10 bg-[#00FF9F]/10 rounded-full flex items-center justify-center border border-[#00FF9F]/30"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-[#00FF9F] text-lg">💡</span>
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -right-8 w-10 h-10 bg-[#FFCE45]/10 rounded-full flex items-center justify-center border border-[#FFCE45]/30"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <span className="text-[#FFCE45] text-lg">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
