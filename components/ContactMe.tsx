import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Inputs = {
  name: String;
  email: String;
  subject: String;
  message: String;
};

type Props = { pageInfo: PageInfo };

export default function ContactMe({pageInfo}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:theo.loussot@gmail.com?subject=${formData.subject}&body=Bonjour, je m'appelle ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className=" flex flex-col space-y-10 ">
        <h4 className="text-2xl font-semibold text-center">
          J'ai ce qu'il vous faut.
          <br />
          <span className="decoration-[#F7AB0A]/50 underline">
            Contactez-moi.
          </span>
        </h4>
        <div className="space-y-10 ml-5">
          <div className="flex items-center space-x-5 ">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex itemps-center space-x-5 ">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.email}</p>
          </div>
          <div className="flex itemps-center space-x-5 ">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.address}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Nom"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Objet"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}