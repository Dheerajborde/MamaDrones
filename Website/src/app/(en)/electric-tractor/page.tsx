import type { Metadata } from "next";
import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import TractorVideo from "@/components/TractorVideo";
import { assets } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Pehelwan Electric Tractor",
  description:
    "See Pehelwan's current electric tractor design for narrow crop rows, including dimensions and battery capacity from November 2026.",
  alternates: { canonical: "/electric-tractor" },
};

const designFigures = [
  {
    value: "3.1–3.2 ft",
    title: "Current width",
    description:
      "A narrow chassis is intended to move between crop rows with room to work.",
  },
  {
    value: "4 ft",
    title: "Target crop rows",
    description:
      "The team sized the vehicle around the row spacing it encountered in the field.",
  },
  {
    value: "10 kWh",
    title: "Current battery design",
    description:
      "Capacity in the November 2026 design. Operating time still needs field validation.",
  },
] as const;

const prototypeViews = [
  {
    src: "/pehelwan-road-view.webp",
    alt: "Pehelwan on a paved road",
    caption: "Paved road view",
  },
  {
    src: "/pehelwan-outdoor-close.webp",
    alt: "Closer view of Pehelwan outdoors",
    caption: "Closer view",
  },
] as const;

export default function ElectricTractorPage() {
  return (
    <main>
      <section className="tractor-page-hero">
        <div className="shell">
          <div className="tractor-top">
            <p className="eyebrow">Ground systems / Pehelwan</p>
          </div>
          <h1>An electric tractor<br /><em>for narrow rows.</em></h1>
          <p>
            Pehelwan is Mama’s compact electric ground vehicle. The team
            built it for work between crop rows, where a conventional tractor
            can need more space than the field allows.
          </p>
          <div className="tractor-price" role="note">
            <span>Target price</span>
            <strong>Below ₹4.5 lakh</strong>
            <small>Final customer price and availability are not confirmed.</small>
          </div>
          <figure className="prototype-visual">
            <EditorialImage
              src={assets.prototype}
              alt="Compact electric ground vehicle photographed outdoors"
              priority
              contain
            />
            <figcaption className="image-caption">
              Pehelwan / Production design may change
            </figcaption>
          </figure>
          <div className="tractor-page-footer">
            <Link className="button button-signal" href="/contact?interest=tractor">
              Register interest
            </Link>
          </div>
        </div>
      </section>

      <section className="tractor-video-section" aria-labelledby="tractor-video-title">
        <div className="shell">
          <p className="eyebrow">Pehelwan / Road test</p>
          <h2 id="tractor-video-title">See Pehelwan <em>in motion.</em></h2>
          <figure className="tractor-video-figure">
            <TractorVideo />
            <figcaption>Road test shown at half speed. Production design may change.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section tractor-story">
        <div className="shell tractor-story-grid">
          <div>
            <p className="eyebrow">The design problem</p>
            <h2>Make room for<br /><em>the work between rows.</em></h2>
          </div>
          <div>
            <p>
              A machine can have enough power and still be too wide for the
              job. The current Pehelwan chassis aims to work in tighter spaces
              without widening the crop row.
            </p>
            <p>
              Electric drive and navigation are part of the design. Final
              operating capability depends on testing and certification.
            </p>
            <Link className="text-link" href="/our-journey">
              Read our journey <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section prototype-gallery" aria-labelledby="prototype-gallery-title">
        <div className="shell">
          <div className="prototype-gallery-heading">
            <div>
              <p className="eyebrow">Pehelwan / Field images</p>
              <h2 id="prototype-gallery-title">See the<br /><em>current build.</em></h2>
            </div>
            <p>Road and outdoor photographs from the team’s work. The production design may change.</p>
          </div>
          <div className="prototype-gallery-grid">
            {prototypeViews.map((view) => (
              <figure key={view.src}>
                <EditorialImage src={view.src} alt={view.alt} contain />
                <figcaption>{view.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section tractor-focus">
        <div className="shell">
          <p className="eyebrow">Design reference / November 2026</p>
          <h2>Pehelwan<br /><em>by the numbers.</em></h2>
          <div className="focus-list">
            {designFigures.map((item) => (
              <article key={item.value}>
                <span>{item.value}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <p className="design-source">Company-reported design figures from November 2026. Final specifications may change.</p>
        </div>
      </section>

      <section className="section development-note">
        <div className="shell">
          <p className="eyebrow">Current status</p>
          <h2>What we can share today.</h2>
          <div className="note-columns">
            <p>
              Pehelwan is not available for purchase today. The price above
              is a target, not a confirmed offer. Certification and launch
              timing have not been announced.
            </p>
            <div>
              <p>
                Interested in Pehelwan updates or collaboration? Tell Mama
                what you would like to know through the existing contact channel.
              </p>
              <Link className="button button-dark" href="/contact?interest=tractor">
                Register interest
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
