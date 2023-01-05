import React from "react";
import BackgroundCircles from "./BackgroundCircles";

import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo
};

export default function ({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "#HelloWorld",
      "Hey !",
      "CodeMore",
      "Vous êtes un recruteur ?",
      "Installez-vous confortablement",
      "Plutôt café ou thé ?",
      `${pageInfo?.name} Portfolio`
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
        src={urlFor(pageInfo.heroImage).url()}
        alt="photo de profil"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          {pageInfo.role}
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
