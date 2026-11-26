import { createFileRoute, Link } from "@tanstack/react-router";
import photo from "@/assets/jitesh-jaipuriyar.jpg.asset.json";
import { profile, stats, services, credentials, recognition } from "@/data/profile";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [ { title: "Captain Jitesh Jaipuriyar, AFNI — Maritime Strategic Advisor" }, { name: "description", content: "From Master Mariner to CEO and board member: 30 years leading commercial, fleet and ESG strategy in global shipping." }, { property: "og:title", content: "Captain Jitesh Jaipuriyar, AFNI — Maritime Strategic Advisor" }, { property: "og:description", content: "From Master Mariner to CEO and board member: 30 years leading commercial, fleet and ESG strategy in global shipping." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_auto] md:py-28">
          <div>
          <p className="eyebrow">Master Mariner · CEO · Board Member</p>
          <h1 className="mt-6 text-5xl leading-tight md:text-7xl">{profile.name}<span className="text-gold">, {profile.post}</span></h1>
          <p className="mt-8 max-w-2xl text-xl opacity-85">{profile.tagline}</p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gold">
            {credentials.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/advisory" className="rounded-sm bg-gold px-6 py-3 font-semibold text-accent-foreground hover:opacity-90">Advisory services</Link>
            <Link to="/resume" className="rounded-sm border border-gold px-6 py-3 text-gold hover:bg-gold hover:text-accent-foreground">View resume</Link>
          </div>
          </div>
          <div className="mx-auto w-64 md:w-80">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border-2 border-gold shadow-2xl">
              <img src={photo.url} alt="Captain Jitesh Jaipuriyar" className="h-full w-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-5xl text-primary">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="eyebrow">Perspective</p>
          <h2 className="mt-4 text-4xl text-primary">From the bridge to the boardroom.</h2>
        </div>
        <div className="space-y-5 text-lg text-muted-foreground">
          <p>Thirteen years at sea with Maersk and OMI, culminating in command of Aframax tankers, shaped how I see risk, people and assets.</p>
          <p>Since then I have founded and scaled shipping businesses in Dubai and Singapore, co-founded a maritime DeepTech company working with the IMO, and today direct commercial, compliance and ESG strategy for a dry bulk group.</p>
          <p>I now advise owners, boards and investors who want that combination of operational depth and commercial judgement.</p>
        </div>
      </section>
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">Recognition & thought leadership</p>
          <h2 className="mt-4 text-4xl text-primary">Trusted by regulators, ports and business schools.</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {recognition.map((r) => (
              <div key={r.title} className="border-l-2 border-gold pl-6">
                <h3 className="text-2xl text-primary">{r.title}</h3>
                <p className="mt-2 text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">How I help</p>
          <div className="mt-8 grid gap-px bg-border md:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <div key={s.title} className="bg-card p-8">
                <h3 className="text-2xl text-primary">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
          <Link to="/advisory" className="mt-8 inline-block text-primary underline decoration-gold underline-offset-4">All advisory services →</Link>
        </div>
      </section>
    </>
  );
}
