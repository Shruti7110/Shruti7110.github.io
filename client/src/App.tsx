import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ChatBot from "@/components/sections/ChatBot";
import Reviews from "@/components/sections/Reviews";
import Connect from "@/components/sections/Connect";
import { useEffect } from "react";
import "./index.css";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gradient-to-br from-[#0A0F24] via-[#1A1F3A] to-[#0A0F24]">
    <Navigation />
    <main className="relative">{children}</main>
  </div>
);

function App() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <section id="home">
            <Home />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="chatbot">
            <ChatBot />
          </section>
          <section id="reviews">
            <Reviews />
          </section>
          <section id="connect">
            <Connect />
          </section>
        </Layout>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;