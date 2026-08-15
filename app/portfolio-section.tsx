import Image from "next/image";
import bondemandImage from "../public/Pics/bondemanden.png";
import migImage from "../public/Pics/mig.jpeg";
import sammenImage from "../public/Pics/sammen.jpg";

export default function PortfolioSection() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner">
        <p className="portfolio__label">PORTFOLIO / 01</p>

        <h2 className="portfolio__title">PORTEFØLJE</h2>

        <div className="portfolio__results" aria-label="Udvalgte resultater">
          <div className="portfolio__stat">
            <p className="portfolio__stat-number">
              2.000 <span aria-hidden="true">&rarr;</span> 50.000+
            </p>
            <p className="portfolio__stat-label">FØLGERE</p>
          </div>

          <div className="portfolio__stat">
            <p className="portfolio__stat-number">
              4M+
            </p>
            <p className="portfolio__stat-label">MÅNEDLIGE VISNINGER</p>
          </div>
        </div>

        <article className="portfolio__case">
          <a className="portfolio__media" href="#contact" aria-label="Se case: Den Glade Bondemand">
            <Image
              className="portfolio__media-image"
              src={bondemandImage}
              alt="Den Glade Bondemand med køer på marken"
              sizes="(max-width: 760px) 100vw, 65vw"
              placeholder="blur"
            />
          </a>

          <div className="portfolio__case-content">
            <p className="portfolio__case-label">CASE 01</p>
            <h3 className="portfolio__case-title">DEN GLADE BONDEMAND</h3>
            <p className="portfolio__case-type">SOCIAL MEDIA / SHORT-FORM VIDEO</p>

            <p className="portfolio__case-intro">
              Fra lokal landmand til et af de mest synlige landbrugsbrands på sociale medier.
            </p>
          </div>
        </article>

        <section className="case-story" aria-labelledby="case-story-label">
          <div className="case-story__layout">
            <div className="case-story__copy">
              <p className="case-story__label" id="case-story-label">
                ET HALVT ÅR / 2025–2026
              </p>

              <div className="case-story__body">
                <p>
                  På seks måneder var målet at gøre Den Glade Bondemand til mere end en gård med
                  en Facebook-side. Vi byggede et medieunivers omkring Keld, hverdagen på gården og
                  hans tilgang til regenerativt landbrug — fortalt gennem mennesker, dyr og de
                  historier, der allerede fandtes på gården.
                </p>
                <p>
                  Short-form video (Reels) blev omdrejningspunktet. Indholdet voksede profilen fra
                  omkring 2.000 til mere end 50.000 følgere og nåede omkring 4 millioner månedlige
                  visninger.
                </p>
                <p>
                  Projektet opnåede også opmærksomhed uden for egne kanaler med medieomtale,
                  artikler og TV-indslag. Vi blev inviteret til Go&apos; morgen Danmark. Samtidig
                  brugte vi rækkevidden til at sætte fokus på regenerativt landbrug og gøre emnet
                  forståeligt og interessant for et bredere publikum.
                </p>
                <p>
                  Resultatet var ikke bare flere visninger og følgere, men et publikum omkring
                  gården, dens mennesker og dens fortælling.
                </p>
                <a
                  className="case-story__link"
                  href="https://www.youtube.com/watch?v=4yeFmUUdr4o"
                  target="_blank"
                  rel="noreferrer"
                >
                  SE TV-INDSLAG <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <Image
              className="case-story__image"
              src={sammenImage}
              alt="Den Glade Bondemand på gården"
              sizes="(max-width: 760px) 100vw, 55vw"
              placeholder="blur"
            />
          </div>
        </section>

        <section className="about" aria-labelledby="about-title">
          <div className="about__visual">
            <div className="about__media">
              <Image
                className="about__image"
                src={migImage}
                alt="Christian Olsen"
                sizes="(max-width: 760px) 100vw, 48vw"
                placeholder="blur"
              />
            </div>
            <div className="about__meta" aria-label="Om Christian Olsen">
              <p>NORDJYLLAND / 29 ÅR</p>
              <p>VIDEO / SOCIAL / CONTENT</p>
            </div>
          </div>

          <div className="about__content">
            <p className="about__label">OM / 02</p>
            <h2 className="about__title" id="about-title">
              HVEM ER JEG?
            </h2>
            <div className="about__body">
              <p>
                Jeg hedder Christian Olsen, er 29 år og kommer fra Nordjylland. Jeg har arbejdet
                med video, sociale medier og internetkultur i mange år — både på mine egne
                projekter og for virksomheder.
              </p>
              <p>
                Jeg startede med musik og byggede min egen YouTube-kanal op til mere end 70.000
                abonnenter. I tre år levede jeg af at producere og sælge musik online. Det lærte
                mig tidligt, hvordan man fanger opmærksomhed, bygger et publikum og skaber noget,
                mennesker faktisk vender tilbage til.
              </p>
              <p>
                Siden har jeg arbejdet med marketing og sociale medier for virksomheder i
                musikbranchen, blandt andet Tracktion, og med digital marketing for
                ejendomsmæglere. Jeg har arbejdet med alt fra videooptagelse og redigering til
                annoncering, CRM og content-strategi.
              </p>
              <p>
                Ved siden af mit arbejde har jeg konstant eksperimenteret med content. Blandt
                andet byggede jeg en short-form kanal baseret på klip fra TV-formater, som opnåede
                millioner af visninger.
              </p>
              <p>
                I dag bruger jeg den erfaring til at hjælpe virksomheder med at fortælle deres
                historie gennem video — og få den ud til mennesker, der faktisk gider se den.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}