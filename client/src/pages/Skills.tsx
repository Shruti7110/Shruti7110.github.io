import { motion } from "framer-motion";
import SkillIcon from "@/components/SkillIcon";

const skills = [
  { name: "python", label: "Python" },
  { name: "javascript", label: "JavaScript" },
  { name: "react", label: "React" },
  { name: "langchain", label: "Langchain" },
  { name: "pytorch", label: "PyTorch" },
  { name: "openai", label: "OpenAI" },
  { name: "github", label: "GitHub" },
] as const;

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-[#18F0FF]">Skills</h2>

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
            <h3 className="text-2xl font-bold mb-6 text-[#FF157E]">
              Specialized in LLM Engineering
            </h3>
            <ul className="list-disc list-inside space-y-3 text-[#E4E4E4]/90">
              <li>RAG (Retrieval Augmented Generation)</li>
              <li>LoRA (Low-Rank Adaptation)</li>
              <li>AI Agents Development</li>
              <li>LLM Fine-tuning</li>
              <li>Prompt Engineering</li>
              <li>Vector Databases</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}