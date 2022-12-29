import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="flex flex-col overflow-hidden relative h-screen text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[10px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm text-center">Passez votre souris sur les skills pour voir le niveau</h3>
    <div className="grid grid-cols-4 gap-5">
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
    </div>
    </motion.div>
  );
}

export default Skills;
