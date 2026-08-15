import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import cameraImage from "../../public/Pics/dji kamera.png";
import droneImage from "../../public/Pics/drone.png";
import DroneVideo from "./drone-video";

export const metadata: Metadata = {
  title: "Services — MIN MARKETING",
  description: "Videooptagelse, redigering og droneproduktion til sociale medier.",
};

export default function ServicesPage() {
  return (
    <main className="services-page" id="top">
      <header className="hero__header services-page__header" aria-label="Primary navigation">
        <Link className="hero__brand" href="/" aria-label="MIN MARKETING home">
          MIN MARKETING
        </Link>
        <nav className="hero__nav" aria-label="Site navigation">
          <Link className="hero__nav-link" href="/services">
            SERVICES
          </Link>
          <Link className="hero__nav-link" href="/#portfolio">
            PORTFOLIO
          </Link>
          <Link className="hero__nav-cta" href="/kontakt">
            <span>KONTAKT</span>
            <span className="hero__nav-arrow" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </nav>
      </header>

      <div className="services-page__inner">
        <section className="production-intro" aria-label="Fra optagelse til færdigt indhold">
          <div className="production-visual">
            <figure className="production-visual__camera">
              <p className="services-kicker">01 / OPTAGELSE</p>
              <Image
                src={cameraImage}
                alt="DJI Osmo Pocket kamera"
                sizes="(max-width: 760px) 52vw, 22vw"
                placeholder="blur"
              />
            </figure>

            <figure className="production-visual__editing">
              <p className="services-kicker">02 / REDIGERING</p>
              <video
                className="production-visual__editing-video"
                src="/videos/adobevideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Redigering i Adobe Premiere Pro"
              />
            </figure>
          </div>

          <div className="production-intro__copy">
            <p className="services-kicker">MIN SERVICE</p>
            <p className="production-intro__body">
              Vil du gøre din forretning mere synlig på de sociale medier?
              <br />
              <br />
              Jeg står for hele produktionen — fra optagelse og idéudvikling til redigering og
              færdigt indhold til sociale medier.
            </p>
            <div className="production-intro__list" aria-label="Services">
              <p>OPTAGELSE</p>
              <p>REDIGERING</p>
              <p>SHORT-FORM</p>
              <p>DRONE</p>
            </div>
          </div>
        </section>

        <section className="drone-feature" aria-label="Drone showcase">
          <p className="services-kicker">DRONE / 4K AERIAL</p>
          <div className="drone-feature__layout">
            <div className="drone-feature__visual">
              <div className="drone-feature__video-frame">
                <DroneVideo />
              </div>
              <Image
                className="drone-feature__image"
                src={droneImage}
                alt="Drone brugt til luftoptagelser"
                sizes="(max-width: 760px) 36vw, 16vw"
                placeholder="blur"
              />
            </div>

            <div className="drone-feature__copy">
              <p className="services-kicker">DRONE</p>
              <h2 className="drone-feature__title">
                <span>PERSPEKTIV</span>
                <span>FRA OVEN.</span>
              </h2>
              <div className="drone-feature__body">
                <p>
                  Jeg tilbyder droneoptagelser i høj kvalitet til gårde, virksomheder, landskaber
                  og produktion.
                </p>
                <p>
                  Optagelserne kan bruges alene eller kombineres med almindelig video for at skabe
                  mere variation, skala og stemning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-cta" aria-labelledby="services-cta-title">
          <h2 className="services-cta__title" id="services-cta-title">
            <span>HAR DU EN HISTORIE</span>
            <span>DER SKAL FORTÆLLES?</span>
          </h2>
          <Link className="services-cta__link" href="/kontakt">
            LAD OS SNAKKE <span aria-hidden="true">&rarr;</span>
          </Link>
        </section>
      </div>
    </main>
  );
}