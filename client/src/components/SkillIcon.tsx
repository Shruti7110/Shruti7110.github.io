import { motion } from "framer-motion";
import SkillIcon from "@/components/SkillIcon";

const skills = [
  { name: "python", label: "Python" },
  { name: "langchain", label: "Langchain" },
  { name: "openai", label: "OpenAI" },
  { name: "github", label: "GitHub" },
  { name: "tensorflow", label: "TensorFlow" },
  { name: "opencv", label: "OpenCV" },
  { name: "yolo", label: "YOLO" },
  { name: "C programming", label: "C Programming" },
  { name: "altium", label: "Altium" },
] as const;

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-[#18F0FF]">Tools & Tech I Use</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <SkillIcon name={skill.name} label={skill.label} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-1xl font-bold mb-6 text-[#FF157E]">
              Specialized in LLM Engineering
            </h3>
            <ul className="list-disc list-inside space-y-3 text-[#E4E4E4]/90">
              <li>RAG (Retrieval Augmented Generation)</li>
              <li>LLM Fine-tuning</li>
              <li>Prompt Engineering</li>
              <li>Vector Databases</li>
              
              </ul>
              <br></br>
              <h3 className="text-1xl font-bold mb-6 text-[#FF157E]">
                Skillsets developed oustide of LLM Engineering
              </h3>
            
            <ul className="list-disc list-inside space-y-3 text-[#E4E4E4]/90">
              <li>Computer Vision Engineering</li>
              <li>Machine Learning & Predictive Maintenance</li>
              <li>Arduino Programming</li>
              <li>Embedded Systems</li>              
              <li>Digital Electronics</li>
              <li>Web Application Development and API Integration</li>
              <li>Decent competancy with STM32 programming</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
