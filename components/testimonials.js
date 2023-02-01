import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-lg leading-normal ">
              Du premier contact jusqu'à la fin du projet, Sofiane a été très <Mark>à l'écoute</Mark>, je recommande ce professionnel auquel je ne manquerai pas de <Mark>faire à nouveau appel pour mes prochains projets</Mark>.
            </p>

            <Avatar
              image={userOneImg}
              name="Isabelle Beloeille"
              title="PDG de Tape-Tape"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-lg leading-normal ">
              Très satisfait du travail effectué par Designery, écoute, proposition, partage d'idées, compréhension des problématiques, <Mark>sérieux</Mark>, prise en main du site facilitée par les explications, <Mark>toujours présent</Mark> pour répondre à vos questions.
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Nfaniou"
              title="Lead Developer"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-lg leading-normal ">
              Prestataire particulièrement <Mark>sérieux et professionnel</Mark>! Sofiane a mis sa passion et ses compétences au service du développement de mon site internet et d'une <Mark>stratégie SEO optimale</Mark>! Toujours de bon conseil, il a su se montrer disponible, <Mark>réactif et à l'écoute</Mark>.
            </p>

            <Avatar
              image={userThreeImg}
              name="Julien Winn"
              title="Co-fondateur de Acme"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
