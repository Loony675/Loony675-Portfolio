import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Apropos from "../components/Apropos";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projets from "../components/Projets";
import ContactMe from "../components/ContactMe";
import { HomeOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Skill, Projet, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchProjet } from "../utils/fetchProjets";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projets: Projet[];
  socials: Social[];
};

export default function Home({pageInfo, experience, skills, projets, socials}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
      <Head>
        <title>Portfolio de Théo Loussot</title> 
      </Head>
      <Header socials = {socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo = {pageInfo}/>
      </section>
      <section id="about" className="snap-center">
        <Apropos pageInfo = {pageInfo}/>
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experience = {experience}/>
      </section>
      <section id="skills" className="snap-start">
        <Skills skills ={skills} />
      </section>
      <section id="projets" className="snap-start">
        <Projets projets = {projets}/>
      </section>
      <section id="contactMe" className="snap-start">
        <ContactMe pageInfo = {pageInfo} />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projets: Projet[] = await fetchProjet();
  const socials: Social[] = await fetchSocial();
  return {
    props: {
      pageInfo,
      experience,
      skills,
      projets,
      socials,
    },
    revalidate:10,
  };
};
