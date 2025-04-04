
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Footer from "./components/ Footer";
import Resume from "./components/Edu_Exp";
import Bar from "./components/Bar";

export default function page() {
  return (
    <>
      <div className=" min-h-screen bg-black">
        <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]">
          <div className=" max-w-7xl mx-auto ">
            <Navbar />
            <Hero />
            <Bar />
          </div>

          {/* <div className=" h-10 xl:h-32 ">

        </div> */}
          <div className=" max-w-7xl mx-auto mt-20 ">
            <Resume />
            <Skill />
            <Projects />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
