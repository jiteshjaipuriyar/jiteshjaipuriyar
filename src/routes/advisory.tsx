import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/profile";
import { PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/advisory")({
  head: () => ({ meta: [ { title: "Advisory — Captain Jitesh Jaipuriyar" }, { name: "description", content: "Board, commercial, fleet, ESG, arbitration and venture advisory for shipowners, operators and maritime investors." }, { property: "og:title", content: "Advisory — Captain Jitesh Jaipuriyar" }, { property: "og:description", content: "Board, commercial, fleet, ESG, arbitration and venture advisory for shipowners, operators and maritime investors." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: Advisory,
});

const steps = [
  ["Conversation", "A confidential call to understand your fleet, market position and the decision in front of you."],
  ["Diagnosis", "A focused review of commercial, technical and governance data, with clear findings."],
  ["Engagement", "Retained advisory, a defined project, or a board seat — structured around your needs."],
];

function Advisory() {
  return (
    <>
      <PageHeader eyebrow="Advisory" title="Seasoned counsel for consequential maritime decisions."
        intro="I work with shipowners, operators, boards and investors who value a Master Mariner's operational instinct combined with founder-level commercial experience." />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="bg-card p-8">
              <p className="font-serif text-3xl text-gold">0{i + 1}</p>
              <h2 className="mt-3 text-2xl text-primary">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <p className="eyebrow">Disputes &amp; arbitration</p>
        <h2 className="mt-4 text-4xl text-primary">Pragmatic resolution of charter party and commercial disputes.</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="border-l-2 border-gold pl-6">
            <h3 className="text-2xl text-primary">Arbitration &amp; dispute resolution</h3>
            <p className="mt-2 text-muted-foreground">Expertise in resolving charter party and commercial shipping disputes in a pragmatic manner.</p>
          </div>
          <div className="border-l-2 border-gold pl-6">
            <h3 className="text-2xl text-primary">Expert witness</h3>
            <p className="mt-2 text-muted-foreground">Expert witness in an Indian arbitration in a tribunal consisting of Supreme Court judges.</p>
          </div>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow">How we work</p>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {steps.map(([t, d]) => (
              <div key={t}><h3 className="text-2xl text-primary">{t}</h3><p className="mt-2 text-muted-foreground">{d}</p></div>
            ))}
          </div>
          <Link to="/contact" className="mt-12 inline-block rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Arrange a conversation</Link>
        </div>
      </section>
    </>
  );
}
