import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Apropos from "../components/Apropos";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projets from "../components/Projets";
import ContactMe from "../components/ContactMe";
import { HomeOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
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
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projets" className="snap-start">
        <Projets />
      </section>
      <section id="contactMe" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <Link href="#hero">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            className="flex items-center justify-center"
          >
            <HomeOutlined className="boutonHome" />
          </motion.div>
        </Link>
      </footer>
    </div>
  );
}
