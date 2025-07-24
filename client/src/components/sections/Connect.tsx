import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Connect() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-[#18F0FF] drop-shadow-[0_0_3px_rgba(2,240,255,0.3)]">
            Reach Out - No Bots, Just Me!
          </h3>

          <Card className="bg-gradient-to-br from-[#0A0F24]/90 to-[#2B2E3B]/70 border-[#18F0FF]/30 shadow-2xl shadow-[#18F0FF]/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#18F0FF] to-[#00FF9F] rounded-full flex items-center justify-center">
                        <span className="text-2xl">👩‍💻</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#18F0FF] mb-1">Shruti Pawar</h4>
                        <p className="text-[#E4E4E4]/80">AI Engineer & Automation Specialist</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#FF157E] to-[#5D3FD3] rounded-full flex items-center justify-center">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#FF157E] mb-1">Location</h4>
                        <p className="text-[#E4E4E4]/80">Bangalore and Pune, India</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#FFCE45] to-[#FF157E] rounded-full flex items-center justify-center">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#FFCE45] mb-1">Email</h4>
                        <p className="text-[#E4E4E4]/80">shruti.pawar0713@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#5D3FD3] to-[#18F0FF] rounded-full flex items-center justify-center">
                        <span className="text-2xl">🔗</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#5D3FD3] mb-1">LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/shruti-pawar711" target="_blank" rel="noopener noreferrer" className="text-[#E4E4E4]/80 hover:text-[#18F0FF] transition-colors no-underline">
                          www.linkedin.com/in/shruti-pawar711
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}