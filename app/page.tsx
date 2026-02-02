import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import CustomCursor from "./components/ui/CustomCursor";
import { GithubCommitWidget, SystemResourcesWidget } from "./components/Widgets";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-purple-500/30">
      <CustomCursor />
      <Navbar />
      <Hero />

      {/* Quick Dashboard section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <GithubCommitWidget />
            </div>
            <div>
              <SystemResourcesWidget />
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
