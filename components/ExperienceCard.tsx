import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full object-cover object-center"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/325/man-technologist_1f468-200d-1f4bb.png"
        alt="image travail"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font)light">Développeur Full Stack</h4>
        <p className="font-bold text-2xl mt-1">HABITAT 77</p>
        <div className="flex space-x-2 my-2">
          <img
            className="w-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt="logo javascript"
          />
          <img
            className="w-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt="logo javascript"
          />
          <img
            className="w-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt="logo javascript"
          />
        </div>
        <p className="uppercase text-gray-300">Début ... Fin</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Résumé</li>
          <li>Résumé</li>
          <li>Résumé</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
