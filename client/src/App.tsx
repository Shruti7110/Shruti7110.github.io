import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Resume from "@/components/sections/Resume";

function Layout() {
  return (
    <div className="min-h-screen bg-[#0A0F24] text-[#E4E4E4]">
      <Navigation />
      <main className="snap-y snap-mandatory">
        <section id="home" className="snap-start">
          <Home />
        </section>
        <section id="about" className="snap-start">
          <About />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="resume" className="snap-start">
          <Resume />
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;