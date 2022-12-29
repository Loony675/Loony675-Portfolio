import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Apropos from "../components/Apropos";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projets from "../components/Projets";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Portfolio de Théo Loussot</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <Apropos />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
 
      <section id='skills' className="snap-center">
        <Skills/>
      </section>
      <section id='projets' className="snap-center"> 
        <Projets/>
      </section>
    
      {/* Contact me */}
    </div>
  );
}
