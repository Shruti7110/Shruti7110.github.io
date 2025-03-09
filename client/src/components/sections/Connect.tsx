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

          <Card className="bg-[#f3dea4] border-[#E4E4E4]/10 shadow-lg shadow-[#18F0FF]/5">
            <CardContent className="p-6">
              <div className="prose max-w-none">
                <div className="flex flex-col gap-6">
                  <span className="text-lg text-black">
                    👩‍💻 Shruti Pawar
                  </span>
                  <span className="text-lg text-black">
                    📍 Bangalore and Pune, India
                  </span>
                  <span className="text-lg text-black">
                    📧 shrutipawar@gmail.com{" "}
                  </span>
                  <div className="flex items-center text-black">
                    <span className="mr-2">🔗</span>
                    <a href="https://www.linkedin.com/in/shruti-pawar711" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#18F0FF] no-underline">
                      www.linkedin.com/in/shruti-pawar711
                    </a>
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