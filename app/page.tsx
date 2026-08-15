import Link from "next/link";
import PortfolioSection from "./portfolio-section";
import ReelStack from "./reel-stack";

export default function Home() {
  return (
    <>
      <main className="hero" id="top">
      <header className="hero__header" aria-label="Primary navigation">
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

      <div className="hero__composition">
        <section className="hero__showcase" aria-label="Udvalgte Reels">
          <ReelStack />
        </section>

        <section className="hero__message">
          <h1 className="hero__title">
            <span>VIDEOER DER GØR</span>
            <span className="hero__title-second">DIN FORRETNING SYNLIG.</span>
          </h1>
          <p className="hero__support">
            SHORT-FORM VIDEO DER SKABER SYNLIGHED,
            <br />
            FØLGERE OG KUNDER.
          </p>
        </section>
      </div>
      </main>
      <PortfolioSection />
    </>
  );
}
