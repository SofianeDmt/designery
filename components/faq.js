import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Qu'est ce que le SEO?",
    answer: "SEO, ce terme défini l'ensemble des techniques mises en œuvre pour améliorer la position d'un site web sur les pages de résultats des moteurs de recherche. On l'appelle aussi référencement naturel.",
  },
  {
    question: "Est-il possible d'héberger soi même sont site internet?",
    answer: "Oui, il est possible de passer commande chez notre agence et d'héberger soit même le projet. Nous livrons le projet prêt a l'emploi dans nos packs, pourquoi ne pas en profiter? ..",
  },
  {
    question: "Qui êtes-vous? ",
    answer:
      "Je m'appelle Sofiane Demette, je suis originaire du nord de la France et passionné par l'informatique et la culture du jeu vidéo depuis mon plus jeune âge. J'ai toujours eu cette passion, qui, à l'époque, n'était pas mon métier, et quand l'opportunité a était présente je me suis lancer dans des etudes pour avoir un diplôme et être certifié par l'état.",
  },
  {
    question: "Quel est le délais de livraison d'un projet en général?",
    answer:
      "Le délai moyen de livraison d'un projet varie énormément selon la demande et l'ampleur du travail mais pour un site vitrine où un petit CMS simple, il faut compter 1 semaine de délai.",
  },
  {
    question: "Peut on avoir plusieurs site web?",
    answer:
        "Oui, il est possible d'avoir plusieurs sites web sur le même serveur et il est également possible d'avoir plusieurs sous-domaines (ex: www.monsite.com -> www.test.monsite.com). Cela permet de fragmenter son site internet tout en payant un seul nom de domaine.",
  },
];
