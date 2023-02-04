import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/solutions.svg";
import benefitTwoImg from "../public/img/solutions2.svg";

const benefitOne = {
  title: "Ce que nous proposons",
  desc: "De la conception web à l’intégration en passant par le design, nous essayons de combler un maximum de points-clés pour la réussite de votre projet.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Solution E-commerce",
      desc: "Des solutions d'E-commerce pour faciliter les entreprises lors de la conception de leur boutique en ligne.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "UI / UX Design",
      desc: "Le design de vos logos et de votre image de marque (foyers, logo, publicité …).",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Site Web / Intégration",
      desc: "Site web simple / intégration pour toute entreprise voulant juste une présence sur le web.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "À toutes demandes nous avons la solution à apporter",
  desc: "Un bon site web passe avant tout par un une bonne élaboration du projet. Nous prenons le temps nécessaire pour réunir toutes les informations et vous proposer un rendu de qualité conforme à notre engagement.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Développement Web / Intégration",
      desc: "Du développement web pour du E-commerce ou un blog a de la simple intégration pour un site vitrine.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "UI/UX Design",
      desc: "Maquetter l’application, designer le logo, choisir la bonne palette de couleurs, nos designers sont là pour vous aiguiller.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Référencement SEO / SEA / SMO",
      desc: "Optimisation du référencement de votre site internet pour répondre aux nouvelles exigences de Google.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
