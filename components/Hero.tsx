import React from "react";
import BackgroundCircles from "./BackgroundCircles";

import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

type Props = {};

export default function ({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "#HelloWorld",
      "Hey !",
      "CodeMore",
      "Vous êtes un recruteur ?",
      "Installez-vous confortablement",
      "Plutôt café ou thé ?",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
    deleteSpeed: 20,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://res.cloudinary.com/dpe2tab7h/image/upload/v1672145136/LA-CAPSULE_07-09-2022-387HD-min_bcatjg.jpg"
        alt="photo de profil"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Développeur Full Stack
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href='#about'>
            <button className="heroButton">A propos</button>
          </Link>
          <Link href='#experience'>
            <button className="heroButton">Expérience</button>
          </Link>
          <Link href='#skills'>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href='#projets'>
            <button className="heroButton">Projets</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
