import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://res.cloudinary.com/dpe2tab7h/image/upload/v1672234634/kisspng-javascript-computer-icons-scalable-vector-graphics-list-of-javascript-enhancements-fandom-developers-5d145895da3992.0726245815616144858939_y69r6v.png"
        alt="logo javascript"
        className="rounded-full border border-gray-500 w-20 h-20 md:w-24 md:w-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 justify-center items-center transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:w-24 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
