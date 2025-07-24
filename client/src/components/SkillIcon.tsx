import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface SkillIconProps {
  name: string;
  logo?: string;
  className?: string;
}

export default function SkillIcon({ name, logo, className = "" }: SkillIconProps) {
  // Map skill names to logo URLs (white logos on black backgrounds)
  const skillLogos: Record<string, string> = {
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    mcp: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8dGV4dCB4PSIyNCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1DUDwvdGV4dD4KPC9zdmc+",
    crewai: "https://avatars.githubusercontent.com/u/170677839?s=200&v=4",
    pytorch: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    tensorflow: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    opencv: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
    yolo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8Y2lyY2xlIGN4PSIyNCIgY3k9IjE4IiByPSI0IiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjE2IiB5PSIyNCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjgiIHJ4PSIyIiBmaWxsPSIjRkZGRkZGIi8+Cjx0ZXh0IHg9IjI0IiB5PSIzOCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjgiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPllPTE88L3RleHQ+Cjwvc3ZnPg==",
    openai: "https://static.vecteezy.com/system/resources/previews/021/608/790/original/openai-logo-icon-free-png.png",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    cursor: "https://www.cursor.com/brand/icon.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    supabase: "https://supabase.com/brand-assets/supabase-logo-icon.png",
    arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
    raspberrypi: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg",
    matlab: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg",
    "c programming": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    altium: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNMTIgMThMMjQgMTJMMzYgMThMMjQgMjRMMTIgMThaIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0xMiAzMEwyNCAyNEwzNiAzMEwyNCAzNkwxMiAzMFoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  };

  const logoUrl = logo || skillLogos[name.toLowerCase()] || skillLogos[name] || `https://via.placeholder.com/48/18F0FF/FFFFFF?text=${name.charAt(0).toUpperCase()}`;
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex flex-col items-center p-6 bg-black/80 rounded-xl border border-[#E4E4E4]/10 hover:border-[#18F0FF]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#18F0FF]/20 ${className}`}
    >
      <div className="w-12 h-12 mb-3 flex items-center justify-center">
        <img 
          src={logoUrl} 
          alt={name} 
          className="w-full h-full object-contain drop-shadow-sm"
          onError={(e) => {
            // Try a different fallback approach
            const target = e.currentTarget;
            if (!target.dataset.fallbackTried) {
              target.dataset.fallbackTried = "true";
              // Try with a simple icon font approach
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=48&background=18F0FF&color=0A0F24&bold=true`;
            }
          }}
          onLoad={(e) => {
            // Remove any error styling if image loads successfully
            e.currentTarget.style.filter = "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))";
          }}
        />
      </div>
      <span className="text-[#E4E4E4] text-sm font-medium text-center">{name}</span>
    </motion.div>
  );
}