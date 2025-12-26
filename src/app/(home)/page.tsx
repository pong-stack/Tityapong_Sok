import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Footer from './components/ Footer';
import Resume from './components/Edu_Exp';

import GalleryComponent from './components/portfolio-gallery';

export default function page() {
  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto">
        <Navbar />
        <Hero />
        <GalleryComponent />
      </div>
      <div className="w-full mx-auto mt-20">
        <Resume / />

        <Skill />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}


