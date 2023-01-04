import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { MailOutlined } from "@ant-design/icons";

import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.8 }}
        className="flex flex-row items-center"
      >
        {/* Social icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/theo-loussot/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Loony675"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/daytonafrenchy/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.8 }}
        className="flex flex-row items-center text-grey-300 cursor-pointer "
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          url="#contactMe"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contactMe">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Me contacter
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
