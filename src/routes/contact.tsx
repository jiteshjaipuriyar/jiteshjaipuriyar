import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/profile";
import { PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [ { title: "Contact — Captain Jitesh Jaipuriyar" }, { name: "description", content: "Get in touch about advisory engagements, board roles or speaking opportunities in maritime." }, { property: "og:title", content: "Contact — Captain Jitesh Jaipuriyar" }, { property: "og:description", content: "Get in touch about advisory engagements, board roles or speaking opportunities in maritime." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk." intro="For advisory engagements, board and non-executive roles, or speaking invitations." />
      <section className="mx-auto grid max-w-5xl gap-px bg-border px-0 py-0 md:my-20 md:grid-cols-3">
        {[
          ["Email", profile.email, `mailto:${profile.email}`],
          ["LinkedIn", "Connect on LinkedIn", profile.linkedin],
          ["Based in", profile.location, null],
        ].map(([k, v, href]) => (
          <div key={k} className="bg-card p-8">
            <p className="eyebrow">{k}</p>
            {href ? <a href={href} className="mt-3 block text-xl text-primary hover:underline">{v}</a> : <p className="mt-3 text-xl text-primary">{v}</p>}
          </div>
        ))}
      </section>
    </>
  );
}
