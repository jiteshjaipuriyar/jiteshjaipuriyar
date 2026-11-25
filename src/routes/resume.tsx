import { createFileRoute, Link } from "@tanstack/react-router";
import cv from "@/assets/cv.pdf.asset.json";
import { education, experience } from "@/data/profile";
import { PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/resume")({
  head: () => ({ meta: [ { title: "Resume — Captain Jitesh Jaipuriyar" }, { name: "description", content: "Download the CV of Captain Jitesh Jaipuriyar: career summary, education, skills and languages." }, { property: "og:title", content: "Resume — Captain Jitesh Jaipuriyar" }, { property: "og:description", content: "Download the CV of Captain Jitesh Jaipuriyar: career summary, education, skills and languages." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: Resume,
});

const skills = ["Business Strategy", "Commercial Governance", "Chartering & FFA Hedging", "Fleet Optimisation", "ESG & Decarbonisation", "Stakeholder Management", "Six Sigma", "Ship Acquisition & Newbuilds"];
const languages = ["English — Full professional", "Hindi — Native", "Spanish — Elementary", "Chinese — Elementary"];

function Resume() {
  return (
    <>
      <PageHeader eyebrow="Resume" title="Curriculum vitae" />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 border border-border bg-card p-8">
          <div><h2 className="text-3xl text-primary">Full CV (PDF)</h2><p className="text-muted-foreground">Complete career history, six pages.</p></div>
          <a href={cv.url} download className="rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Download CV</a>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="eyebrow">Roles at a glance</p>
            <ul className="mt-4 divide-y divide-border">
              {experience.map((r) => (
                <li key={r.company + r.period} className="flex justify-between gap-4 py-3">
                  <span><span className="font-semibold">{r.title}</span><br /><span className="text-muted-foreground">{r.company}</span></span>
                  <span className="shrink-0 text-sm text-muted-foreground">{r.period}</span>
                </li>
              ))}
            </ul>
            <Link to="/experience" className="mt-4 inline-block text-primary underline decoration-gold underline-offset-4">Detailed experience →</Link>
            <p className="eyebrow mt-12">Education & certifications</p>
            <ul className="mt-4 space-y-3">
              {education.map((e) => <li key={e.school}><span className="font-semibold">{e.school}</span><br /><span className="text-muted-foreground">{e.detail}</span></li>)}
            </ul>
          </div>
          <aside className="space-y-10">
            <div><p className="eyebrow">Expertise</p><ul className="mt-4 space-y-2">{skills.map((s) => <li key={s}>{s}</li>)}</ul></div>
            <div><p className="eyebrow">Languages</p><ul className="mt-4 space-y-2">{languages.map((s) => <li key={s}>{s}</li>)}</ul></div>
          </aside>
        </div>
      </section>
    </>
  );
}
