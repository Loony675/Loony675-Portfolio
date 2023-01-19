import React from "react";
import { motion } from "framer-motion";
import { Projet } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projets: Projet[];
};

function Projets({ projets }: Props) {
  const projects = [1, 2, 3, 4, 5];
    
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen relative flex  flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projets
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        {projets.map((projet, i) => (
          
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(projet?.image).url()}
              alt="netflix devices"
              className="max-h-40"
            />
            <div className="space-y-5 px-0 md-px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]">
                  Projet {i + 1} sur {projets.length}:
                </span>{" "}
                {projet.title}
              </h4>
              <div className="flex items-center justify-center space-x-2">
                {projet.technologies.map((tech) => (
                  <img
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    className="h-8 w-8 object-contain"
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {projet.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB01]/10 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projets;
