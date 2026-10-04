import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { contact, navigation, services } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="bg-accent px-4 py-2 text-center text-xs font-semibold text-accent-foreground sm:text-sm">
      Launch offer: 50% off your first 3 months for our first 10 clients. Only 10 spots. <Link to="/contact" className="ml-1 underline underline-offset-2">Claim it</Link>
    </div>
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="container-shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Link to="/" aria-label="Growthora home"><Brand /></Link>
        <nav className="hidden items-center justify-center gap-6 lg:flex" aria-label="Main navigation">
          {navigation.map(([label, to]) => <Link key={to} to={to} activeProps={{ className: "text-primary" }} inactiveProps={{ className: "text-muted-foreground" }} className="text-sm font-medium transition-colors hover:text-primary">{label}</Link>)}
        </nav>
        <Button asChild variant="gold" className="hidden lg:inline-flex"><Link to="/contact">Get Free Audit</Link></Button>
        <Button type="button" variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
        <div className="container-shell grid gap-1">{navigation.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-surface">{label}</Link>)}<Button asChild variant="gold" className="mt-3"><Link to="/contact" onClick={() => setOpen(false)}>Get Free Audit</Link></Button></div>
      </nav>}
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="bg-primary pb-24 pt-16 text-primary-foreground md:pb-10">
    <div className="container-shell grid gap-12 md:grid-cols-2 lg:grid-cols-4">
      <div><Brand inverted /><p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/70">More Visibility. More Customers. More Growth.</p><p className="mt-4 text-sm text-primary-foreground/70">Serving businesses across Canada.</p></div>
      <div><h3 className="text-sm font-bold">Quick links</h3><div className="mt-4 grid gap-3">{navigation.map(([label,to]) => <Link key={to} to={to} className="text-sm text-primary-foreground/70 hover:text-accent">{label}</Link>)}</div></div>
      <div><h3 className="text-sm font-bold">Services</h3><div className="mt-4 grid gap-3">{services.slice(0,5).map(s => <Link key={s.slug} to="/services" hash={s.slug} className="text-sm text-primary-foreground/70 hover:text-accent">{s.title}</Link>)}</div></div>
      <div><h3 className="text-sm font-bold">Contact</h3><div className="mt-4 grid gap-3 text-sm text-primary-foreground/70"><a href={`mailto:${contact.email}`} className="hover:text-accent">{contact.email}</a><a href={`tel:${contact.phone}`} className="hover:text-accent">{contact.phone}</a><p>{contact.location}</p></div><div className="mt-6 flex gap-4"><span aria-label="Facebook placeholder" className="grid h-8 w-8 place-items-center rounded-full border border-primary-foreground/25">f</span><span aria-label="Instagram placeholder" className="grid h-8 w-8 place-items-center rounded-full border border-primary-foreground/25">◎</span><span aria-label="LinkedIn placeholder" className="grid h-8 w-8 place-items-center rounded-full border border-primary-foreground/25">in</span></div></div>
    </div>
    <div className="container-shell mt-12 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Growthora. All rights reserved.</p><div className="flex gap-5"><Link to="/privacy" className="hover:text-accent">Privacy Policy</Link><Link to="/terms" className="hover:text-accent">Terms</Link></div></div>
  </footer>;
}

export function FloatingActions() {
  return <><a href={`https://wa.me/${contact.phone}`} target="_blank" rel="noreferrer" aria-label="Chat with Growthora on WhatsApp" className="fixed bottom-20 right-4 z-30 grid h-12 w-12 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-card transition-transform hover:-translate-y-1 md:bottom-6 md:right-6"><MessageCircle /></a><div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background p-3 md:hidden"><Button asChild variant="gold" className="w-full"><Link to="/contact">Claim My Free Audit</Link></Button></div></>;
}