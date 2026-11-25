import { createFileRoute } from "@tanstack/react-router";
import { experience } from "@/data/profile";
import { PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/experience")({
  head: () => ({ meta: [ { title: "Experience — Captain Jitesh Jaipuriyar" }, { name: "description", content: "Three decades across Maersk, Tata, Emerald Maritime, Bostomar, Navozyme and Alphard Maritime." }, { property: "og:title", content: "Experience — Captain Jitesh Jaipuriyar" }, { property: "og:description", content: "Three decades across Maersk, Tata, Emerald Maritime, Bostomar, Navozyme and Alphard Maritime." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageHeader eyebrow="Career" title="Thirty years across sea, shore and boardroom." />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <ol className="border-l border-gold">
          {experience.map((r) => (
            <li key={r.company + r.period} className="relative pb-14 pl-10">
              <span className="absolute -left-[6px] top-2 h-3 w-3 rounded-full bg-gold" />
              <p className="eyebrow">{r.period} · {r.place}</p>
              <h2 className="mt-2 text-3xl text-primary">{r.company}</h2>
              <p className="mt-1 font-semibold">{r.title}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                {r.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
