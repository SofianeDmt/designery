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
  desc: "De la conception web a l’intégration en passant par le design, nous essayons de combler un maximum de point clés pour la réussite de votre projet.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Solution E-commerce",
      desc: "Des solutions de E-commerce pour facilité les entreprises lors de la conception de leur boutique en ligne.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "UI / UX Design",
      desc: "Le design de vos logo et de votre image de marque (fyers, logo, publicité …)",
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
  title: "A toutes demandes nous avons la solution a apporté",
  desc: "Un bon site web passe avant tout par un une bonne élaboration du projet. Nous prenons le temps necessaire pour reunir toute les informations et vous proposer un rendu de qualité conforme a notre engagements.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Développement Web / Intégration",
      desc: "Du développement web pour du E-commerce ou un blog a de la simple intégration pour un site vitrine.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "UI/UX Design",
      desc: "Maquetter l’application, designer le logo, choisir la bonne palette de couleur, nos designer sont la pour vous aiguiller.",
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
