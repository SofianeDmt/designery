import Head from "next/head";
import Hero, {AmazonLogo, MicrosoftLogo, NetflixLogo, SonyLogo, VerizonLogo} from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Pricing from "../components/pricing";
import Container from "../components/container";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Designery</title>
        <meta
          name="description"
          content="Designery est une agence de création de contenu digital orienter web"
        />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link rel="icon" type="image/x-icon" sizes="16x16 32x32" href="/favicon/favicon.ico"/>
              <link rel="apple-touch-icon" sizes="152x152" href="/favicon/favicon-152-precomposed.png"/>
                  <link rel="apple-touch-icon" sizes="144x144" href="/favicon/favicon-144-precomposed.png"/>
                      <link rel="apple-touch-icon" sizes="120x120" href="/favicon/favicon-120-precomposed.png"/>
                          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/favicon-114-precomposed.png"/>
                              <link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon-180-precomposed.png"/>
                                  <link rel="apple-touch-icon" sizes="72x72" href="/favicon/favicon-72-precomposed.png"/>
                                      <link rel="apple-touch-icon" sizes="57x57" href="/favicon/favicon-57.png"/>
                                          <link rel="icon" sizes="32x32" href="/favicon/favicon-32.png" />

      </Head>

      <Navbar />
      <Hero />
        <div className="mt-5">
        </div>
      <SectionTitle
        pretitle="Ce dont vous avez besoin"
        title="A toutes demandes nous avons la solution a apporté">
      </SectionTitle>
        <div className="mt-14">
        </div>
      <Benefits ClassName="" data={benefitOne} />
      <Benefits ClassName="mt-48 scale-125 ml-28" imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Trailer video"
        title="Comment ça marche">
          Du petit commerce au grand groupe, nous avons travaillé dans de multiples secteurs. Nous sommes fiers des projets que nous avons pu mener à bien et sommes honoré de vous les présentés.
      </SectionTitle>
      <Video />
        <Pricing/>
        <Container>
            <div className="flex flex-col justify-center">

                <div className="flex flex-wrap justify-center gap-5 -mt-10 md:justify-around">
                    <div className="pt-2 text-gray-400 dark:text-gray-400">
                        <AmazonLogo />
                    </div>
                    <div className="text-gray-400 dark:text-gray-400">
                        <VerizonLogo />
                    </div>
                    <div className="text-gray-400 dark:text-gray-400">
                        <MicrosoftLogo />
                    </div>
                    <div className="pt-1 text-gray-400 dark:text-gray-400">
                        <NetflixLogo />
                    </div>
                    <div className="pt-2 text-gray-400 dark:text-gray-400">
                        <SonyLogo />
                    </div>
                </div>
            </div>
        </Container>
        <div className="mt-14">
        </div>
      <SectionTitle
        pretitle="Ils parlent de nous"
        title="Les avis de nos clients">
        Les avis de nos clients sont les plus importants et nous permettent de nous améliorer et d'améliorer nos services.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Les questions fréquente">
        Vous aurez possiblement la réponses a votre question ci dessous.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
