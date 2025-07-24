import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import AboutDialog from "@/components/sections/About";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "chatbot", label: "Ask AI" },
    { id: "reviews", label: "Reviews" },
    { id: "connect", label: "Connect" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0A0F24]/90 backdrop-blur-sm z-50 border-b border-[#E4E4E4]/10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <button 
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-[#18F0FF] text-xl font-bold hover:scale-105 transition-transform"
          >
            <img src="/logo.svg" alt="Shruti Pawar" className="w-8 h-8" />
            Portfolio
          </button>

          <div className="flex gap-6">
            {navItems.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "text-[#E4E4E4] hover:text-[#18F0FF] transition-colors",
                  activeSection === link.id && "text-[#18F0FF]"
                )}
              >
                {link.label}
              </button>
            ))}
            <AboutDialog />
          </div>
        </div>
      </div>
    </nav>
  );
}