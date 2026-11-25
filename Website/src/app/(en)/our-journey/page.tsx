import type { Metadata } from "next";
import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import { assets } from "@/lib/site-data";
import "../../journey.css";

export const metadata: Metadata = {
  title: "Our Journey",
  description: "Follow Mama from drone spraying in 2023 through a ten-day farmer field trip in 2024 and the work behind Pehelwan.",
  alternates: { canonical: "/our-journey" },
};

const chapters = [
  {
    number: "01",
    year: "Roots",
    label: "Farming roots",
    title: "The problem was close to home.",
    copy: "Founder Dheeraj Borde grew up in a farming family. He chose to work on problems he knew firsthand.",
  },
  {
    number: "02",
    year: "2023",
    label: "September 2023",
    title: "Drone spraying began.",
    copy: "The team put agricultural drones to work and learned what customers needed after each flight.",
  },
  {
    number: "03",
    year: "2024",
    label: "April 2024",
    title: "Ten days on the road.",
    copy: "A trip from Pune to Yavatmal took the team into farmers’ fields to hear where equipment fell short.",
  },
  {
    number: "04",
    year: "2026",
    label: "Service network",
    title: "The service network grew.",
    copy: "Sales, training and repair grew alongside spraying as more farmers began using Mama drones.",
  },
  {
    number: "05",
    year: "Now",
    label: "Pehelwan",
    title: "Pehelwan enters the picture.",
    copy: "The team built a compact electric ground vehicle around the space available between crop rows.",
  },
] as const;

export default function JourneyPage() {
  return (
    <main className="story-page">
      <section className="story-hero">
        <div className="shell">
          <p className="eyebrow">MAMA / Our journey</p>
          <h1>From spraying <span>to Pehelwan.</span></h1>
          <figure className="story-hero-figure">
            <EditorialImage src={assets.communityDrone} alt="People gathered outdoors around a Mama agricultural drone" priority />
            <figcaption>People and agricultural drone technology in the field</figcaption>
          </figure>
          <div className="story-hero-bottom">
            <p>How a drone service business became a ground-vehicle project.</p>
            <div className="story-hero-actions">
              <Link className="button button-signal" href="/contact">Work with us</Link>
              <Link className="story-secondary-link" href="#story-timeline">Explore our journey</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="story-purpose">
        <div className="shell">
          <div className="story-purpose-header">
            <div><p className="eyebrow">What changed</p><h2>Service changed <em>the product brief.</em></h2></div>
            <p>Spraying jobs showed the cost of lost time. A delayed operation, missing part or distant repair can stop work.</p>
          </div>
          <div className="story-principles">
            <article className="story-principle"><span>Distribution</span><h3>Earn the relationship.</h3><p>Drone service introduced the team to farmers before ground machinery was on the drawing board.</p></article>
            <article className="story-principle"><span>Service</span><h3>Stay within reach.</h3><p>Training and repair have to be available after the equipment leaves the shop.</p></article>
            <article className="story-principle"><span>Engineering</span><h3>Fit the row.</h3><p>A machine for crop rows has a different brief from one built for open fields.</p></article>
          </div>
        </div>
      </section>

      <section className="story-timeline" id="story-timeline">
        <div className="shell story-timeline-grid">
          <div className="story-timeline-head">
            <p className="eyebrow">Our journey</p>
            <h2>Year by year, <em>closer to the field.</em></h2>
            <p>Milestones from the company’s November 2026 account.</p>
          </div>
          <ol className="story-steps">
            {chapters.map((chapter) => (
              <li className="story-step" key={chapter.number}>
                <div className="story-step-marker"><span className="story-step-number">{chapter.number} / 05</span><span className="story-step-year">{chapter.year}</span></div>
                <div className="story-step-content"><p className="story-step-label">{chapter.label}</p><h3>{chapter.title}</h3><p>{chapter.copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="story-people">
        <div className="shell story-people-grid">
          <div className="story-people-copy">
            <p className="eyebrow">People behind the work</p>
            <h2>Questions from <em>the field.</em></h2>
            <p>The team asked growers about access between rows, equipment downtime and the help available near their farms. Those answers now inform the ground vehicle.</p>
            <Link className="story-secondary-link" href="/contact">Get in touch</Link>
          </div>
          <figure><EditorialImage src={assets.farmDroneGroup} alt="Mama team and farmers standing with an agricultural drone" /><figcaption>With the people behind the work</figcaption></figure>
        </div>
      </section>

      <section className="story-next">
        <div className="shell story-next-grid">
          <div className="story-next-mark" aria-hidden="true"><span>2023</span><i /> <span>2026</span><strong>Drone service → Pehelwan</strong></div>
          <div>
            <p className="eyebrow">The next chapter</p>
            <h2>See the <em>machine.</em></h2>
            <p>Explore Pehelwan’s current design dimensions, battery approach and availability notes on its own page.</p>
            <p className="story-development-note">Final specifications and commercial availability are not confirmed.</p>
            <Link className="button button-signal" href="/electric-tractor">Explore Pehelwan</Link>
          </div>
        </div>
      </section>

      <section className="story-invite">
        <div className="shell">
          <p className="eyebrow">Continue the conversation</p>
          <h2>Bring us a problem <em>from your farm.</em></h2>
          <Link className="button button-signal" href="/contact">Contact Mama</Link>
        </div>
      </section>
    </main>
  );
}
