import Header from '@/components/header';
import Hero from '@/components/hero';
import Summary from '@/components/summary';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Achievements from '@/components/achievements';
import Testimonials from '@/components/testimonials';
import Services from '@/components/services';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Testimonials />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
