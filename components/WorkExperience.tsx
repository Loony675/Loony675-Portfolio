import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experience: Experience[]
};

function WorkExperience({experience}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col overflow-hidden relative h-screen text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[10px] text-gray-500 text-2xl">
        Expérience
      </h3>
      <div className="w-full flex space-x-4 overflow-x-scroll overflow-y-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
       {experience.map(experience => (
        <ExperienceCard key={experience._id} experience={experience} />
       ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
