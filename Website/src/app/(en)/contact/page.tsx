import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactUsSection";
import ContactTopics from "@/components/ContactTopics";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call Mama about drone service or send an enquiry about equipment, Pehelwan or a partnership.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const tractor = (await searchParams).interest === "tractor";

  return (
    <main className="contact-page">
      <section className="contact-page-hero">
        <div className="shell contact-page-hero-grid">
          <div className="contact-page-intro">
            <p className="eyebrow">Contact / Mama</p>
            <h1>Get to the<br /><em>right team.</em></h1>
            <p>Call for a time-sensitive service question. Use the form for equipment, Pehelwan and partnership enquiries.</p>
          </div>
          <div className="contact-direct" aria-label="Call Mama">
            <p className="eyebrow">Call us directly</p>
            <a href="tel:+919322418319">+91 93224 18319</a>
            <a href="tel:+919834512803">+91 98345 12803</a>
            <p>Phone is best when a working machine needs attention.</p>
          </div>
        </div>
      </section>

      <section className="contact-page-body">
        <div className="shell contact-page-grid">
          <div className="contact-page-details">
            <p className="eyebrow">Send an enquiry</p>
            <h2>Choose an enquiry topic.</h2>
            <p>Give the team your district, machine or project details so the right person can respond.</p>
          </div>
          <div className="contact-page-form">
            <div className="contact-form-heading"><span>Enquiry form</span><span>Mama Agricultural Robotics</span></div>
            <ContactTopics tractor={tractor} />
            <ContactForm language="en" compact />
          </div>
          <div className="contact-address">
            <p className="eyebrow">Our office</p>
            <address>STPI, T-17, Opp. Garware Stadium, MIDC, Chikalthana, Chhatrapati Sambhajinagar, Maharashtra</address>
          </div>
        </div>
      </section>
    </main>
  );
}
