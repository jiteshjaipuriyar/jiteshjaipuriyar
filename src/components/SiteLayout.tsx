import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { profile } from "@/data/profile";

const nav = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/advisory", label: "Advisory" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border bg-background/90 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <Link to="/" className="font-serif text-xl text-primary">Capt. Jitesh Jaipuriyar</Link>
          <nav className="flex flex-wrap gap-5 text-sm">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
                className="text-muted-foreground hover:text-primary [&.active]:text-primary [&.active]:font-semibold">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 py-10 text-sm">
          <p>© {new Date().getFullYear()} {profile.name}, {profile.post} · {profile.location}</p>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-gold hover:underline">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg opacity-80">{intro}</p>}
      </div>
    </section>
  );
}
