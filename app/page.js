import Stats from './components/Stats';
import About from './components/About';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import FAQ from './components/FAQ';

export default function Home() {
  return (
    <>
    <Welcome />
    <Hero />
    <Tools />
    <Portfolio />
    <About />
    <Services />
    <FAQ />
    <Stats />
    <Contact />
    </>
  );
}
