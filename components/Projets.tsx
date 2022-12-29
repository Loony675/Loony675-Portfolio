import React from "react";

type Props = {};

function Projets({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projets
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20">
            <img
              src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
              alt="netflix devices"
            />
            <div className="space-y-10 px-0 md-px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]">
                  Projet {i + 1} sur {projects.length}:
                </span>{" "}
                Clône de Netflix
              </h4>
              <p className="text-lg text-center md:text-left">
                Un Netflix 2.0 avec la possibilité de créer un compte, se
                connecter et se déconnecter avec l'authentification Google (DB
                Firebase). La liste des films est récupérée via The Movie
                Database. Un système de paiement pour souscrire à un abonnement
                est opérationnel via Stripe.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB01]/10 left-0 h-[400px] -skew-y-12"></div>
    </div>
  );
}

export default Projets;
