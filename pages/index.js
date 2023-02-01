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
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
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
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Trailer video"
        title="Presentation de projets">
          Du petit commerce au grand groupe, nous avons travaillé dans de multiples secteurs. Nous sommes fiers des projets que nous avons pu mener à bien et sommes honoré de vous les présentés.
      </SectionTitle>
      <Video />
        <Pricing/>
        <Container>
            <div className="flex flex-col justify-center">
                {/*          <div className="text-xl text-center text-gray-700 dark:text-white">
            Il m'ont <span className="text-indigo-600">dèja</span>{" "}
            fait confiance
          </div>*/}

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
