import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import christianImage from "../../public/Pics/mig2.jpg";

export const metadata: Metadata = {
  title: "Kontakt — MIN MARKETING",
  description: "Kontakt Christian Olsen om video og content til sociale medier.",
};

export default function ContactPage() {
  return (
    <main className="contact-page" id="top">
      <header className="hero__header contact-page__header" aria-label="Primary navigation">
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

      <section className="contact-page__inner" aria-labelledby="contact-title">
        <div className="contact-page__media">
          <Image
            className="contact-page__image"
            src={christianImage}
            alt="Christian Olsen"
            sizes="(max-width: 760px) 100vw, 46vw"
            placeholder="blur"
            priority
          />
        </div>

        <div className="contact-page__content">
          <h1 className="contact-page__title" id="contact-title">
            HAR DU ET PROJEKT I TANKERNE?
          </h1>
          <p className="contact-page__intro">
            Ring eller skriv — så tager vi en uforpligtende snak.
          </p>

          <address className="contact-page__details">
            <p>Christian Olsen</p>
            <p>
              TLF: <a href="tel:+4560492050">60492050</a>
            </p>
            <p>
              <a href="mailto:prodjody@gmail.com">prodjody@gmail.com</a>
            </p>
          </address>
        </div>
      </section>
    </main>
  );
}