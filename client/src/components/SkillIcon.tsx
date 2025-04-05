import { Card, CardContent } from "@/components/ui/card";
import { SiPython, SiJavascript, SiGithub, SiOpenai, SiC, SiTensorflow, SiOpencv } from "react-icons/si";
import { Database, Cpu, Camera } from "lucide-react"; // Using Camera icon for YOLO
import { cn } from "@/lib/utils";

const iconMap = {
  python: SiPython,
  javascript: SiJavascript,
  github: SiGithub,
  langchain: Database, // Using Lucide's Database icon as a replacement
  openai: SiOpenai,
  "C programming": SiC,
  tensorflow: SiTensorflow,
  altium: Cpu, // Using Lucide's Cpu icon for Altium
  opencv: SiOpencv,
  yolo: Camera, // Using Lucide's Camera icon for YOLO
} as const;

interface SkillIconProps {
  name: keyof typeof iconMap;
  label: string;
}

export default function SkillIcon({ name, label }: SkillIconProps) {
  const Icon = iconMap[name];

  return (
    <Card className="group hover:scale-105 transition-all duration-300
      bg-gradient-to-br from-[#0A0F24]/50 to-[#0A0F24]/80
      shadow-lg shadow-[#18F0FF]/5 hover:shadow-xl hover:shadow-[#18F0FF]/10
      border-[#E4E4E4]/10 hover:border-[#18F0FF]/50">
      <CardContent className="p-6 flex flex-col items-center gap-3">
        <Icon className={cn(
          "w-12 h-12 transition-colors duration-300",
          "text-[#E4E4E4]/80 group-hover:text-[#18F0FF]",
          "drop-shadow-[0_0_3px_rgba(24,240,255,0.3)]"
        )} />
        <span className="text-sm text-[#E4E4E4]/80 group-hover:text-[#18F0FF]
          group-hover:drop-shadow-[0_0_3px_rgba(24,240,255,0.3)]">
          {label}
        </span>
      </CardContent>
    </Card>
  );
}
