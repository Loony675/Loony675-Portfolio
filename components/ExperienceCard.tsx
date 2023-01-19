import React from "react";
import { motion } from "framer-motion";
import { Experience} from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;

};

function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-h-20 object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt="image travail"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font)light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((tech,i) => (
          <img key={i}
          className="w-10  object-cover"
          src={urlFor(tech.image).url()}
          alt="logo javascript"
        />
          ))}

          

       
        </div>
        <p className="uppercase text-gray-300">{new Date(experience.dateStarted).toLocaleDateString("fr")} - {experience.isCurrentlyWorkingHere? "à aujourd'hui": new Date(experience.dateEnded).toLocaleDateString("fr")}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((point,i) => (
          <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
