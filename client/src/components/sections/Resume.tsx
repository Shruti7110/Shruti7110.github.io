
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin } from "lucide-react";

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
          <h2 className="text-4xl font-bold mb-8 text-[#18F0FF] drop-shadow-[0_0_3px_rgba(24,240,255,0.3)]">Connect</h2>

          <Card className="bg-gradient-to-br from-[#0A0F24]/50 to-[#0A0F24]/80 border-[#E4E4E4]/10 shadow-lg shadow-[#18F0FF]/5">
            <CardContent className="p-6">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-semibold mb-6 text-[#00FF9F]">Contact Details</h3>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#5D3FD3] p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-[#E4E4E4]" />
                    </div>
                    <div>
                      <p className="text-[#FFCE45] font-medium">Name</p>
                      <p className="text-[#E4E4E4]">Shruti Pawar</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-[#146C94] p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-[#E4E4E4]" />
                    </div>
                    <div>
                      <p className="text-[#FFCE45] font-medium">Location</p>
                      <p className="text-[#E4E4E4]">Bangalore and Pune, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-[#FF3131] p-3 rounded-full">
                      <Mail className="h-5 w-5 text-[#E4E4E4]" />
                    </div>
                    <div>
                      <p className="text-[#FFCE45] font-medium">Email</p>
                      <a href="mailto:shruti.pawar0713@gmail.com" className="text-[#18F0FF] hover:text-[#00FF9F] transition-colors">
                        shruti.pawar0713@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-[#2B2E3B] p-3 rounded-full">
                      <Linkedin className="h-5 w-5 text-[#E4E4E4]" />
                    </div>
                    <div>
                      <p className="text-[#FFCE45] font-medium">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/shruti-pawar711" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#18F0FF] hover:text-[#00FF9F] transition-colors"
                      >
                        www.linkedin.com/in/shruti-pawar711
                      </a>
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
