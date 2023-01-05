import { MotionConfig, motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo
};

function Apropos({pageInfo}: Props) {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className="flex flex-col relative h-screen text-center md:text-left md:text-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[10px] text-gray-500 text-2xl">
        A propos
      </h3>
      <motion.img
        initial={{ x: -200, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        whileHover={{scale:1.1}}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt="photo à propos"
        className="mt-20 -mb-10 md:mb-10 flex-shrink-0 w-60 rounded-full object-cover md:rounded-lg md:w-[200px] xl:w-[500px] "
      />
      <div className="space-y-5 px-0 md:px-10">
        <motion.h4 whileHover={{scale:1.1}} className="text-center justify-center items-center text-4xl font-semibold mb-2">
          Un peu de contexte
        </motion.h4>
        <p className="text-sm -mb-10 ">
          {pageInfo.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default Apropos;
