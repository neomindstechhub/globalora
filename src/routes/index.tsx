import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Check, CircleHelp, Clock3, FileCheck2, Search, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HeroArt } from "@/components/hero-art";
import { LeadForm } from "@/components/lead-form";
import { SectionHeading } from "@/components/section-heading";
import { industries, services } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Growthora — Marketing for Local Businesses in Canada" },
    { name: "description", content: "SEO, ads, websites and social media that help Canadian local businesses earn more visibility, customers and growth." },
    { property: "og:title", content: "Growthora — Canada's Growth Partner for Local Businesses" },
    { property: "og:description", content: "Claim a free marketing audit and discover practical ways to grow your local business." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": ["Organization", "ProfessionalService"], name: "Growthora", email: "support@globalora.com", areaServed: "Canada", description: "Marketing agency helping local businesses grow through SEO, advertising, websites and social media." }) }] }),
  component: Home,
});

const faqs = [
  ["How does the free audit work?", "We review your current website, search visibility and marketing presence, then identify the clearest opportunities to improve."],
  ["What does the 50% offer include?", "Founding clients receive 50% off their first three months, plus a free audit, dedicated strategist and monthly reporting."],
  ["How long until I see results?", "Timelines depend on your starting point and channel. Paid campaigns can create demand quickly, while organic visibility typically compounds over time."],
  ["Do you work with businesses my size?", "Yes. Growthora is built specifically for local small businesses and creates plans around practical goals and budgets."],
  ["Do I sign a long contract?", "No contract is required to start. We earn your trust through clear work and reporting."],
  ["How do I get a quote?", "Start with the free audit. Once we understand your goals and needs, we’ll provide a custom quote with no obligation."],
];

function Home() {
  return <>
    <section className="overflow-hidden bg-background py-14 sm:py-20 lg:py-24"><div className="container-shell grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
      <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Canada-based. Local-business focused.</p><h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.04] text-primary sm:text-6xl lg:text-7xl">Canada’s Growth Partner for Local Businesses.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">SEO, ads, websites and social media that turn local searches into booked appointments, walk-ins and calls.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild variant="gold" size="lg"><Link to="/contact">Get My Free Audit <ArrowRight /></Link></Button><Button asChild variant="navyOutline" size="lg"><Link to="/services">See Our Services</Link></Button></div><p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="h-4 w-4 text-secondary" /> No contracts to start. Free audit. No obligation.</p></div><HeroArt />
    </div></section>

    <section className="bg-accent py-9"><div className="container-shell grid items-center gap-6 lg:grid-cols-[1fr_auto]"><div><h2 className="font-display text-2xl font-semibold text-accent-foreground sm:text-3xl">Launch Offer: 50% off for 3 months.</h2><p className="mt-1 text-sm text-accent-foreground/80">First 10 clients only. A practical head start for ambitious local businesses.</p><div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-accent-foreground">{["Free audit", "Dedicated strategist", "Monthly reporting"].map(x => <span className="flex items-center gap-2" key={x}><Check className="h-4 w-4" />{x}</span>)}</div></div><Button asChild variant="navy" size="lg"><Link to="/contact">Claim the Offer</Link></Button></div></section>

    <section className="py-16 sm:py-24"><div className="container-shell"><SectionHeading eyebrow="A clearer path forward" title="Good businesses should not stay invisible." center /><div className="mt-10 grid gap-5 md:grid-cols-3">{[[Search,"Invisible on Google?","We improve the signals that help nearby customers find and choose you."],[Target,"Paying for ads that don’t convert?","We connect targeting, creative and landing pages to real outcomes."],[Clock3,"No time for marketing?","We manage the work and keep you informed with clear monthly reporting."]].map(([Icon,title,body]) => { const I=Icon as typeof Search; return <article key={String(title)} className="rounded-lg border border-border bg-card p-7 shadow-card"><I className="h-7 w-7 text-secondary" /><h3 className="mt-5 font-display text-xl font-semibold text-primary">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(body)}</p></article>})}</div></div></section>

    <section className="bg-surface py-16 sm:py-24"><div className="container-shell"><SectionHeading eyebrow="What we do" title="Everything you need to grow locally." body="Focused marketing services, shaped around your goals—not a one-size-fits-all package." /><div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{services.slice(0,8).map(s => <article key={s.slug} className="bg-card p-6"><s.icon className="h-6 w-6 text-secondary" /><h3 className="mt-5 font-display text-lg font-semibold text-primary">{s.title}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{s.short}</p><Link to="/services" hash={s.slug} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn more <ArrowRight className="h-4 w-4" /></Link></article>)}</div></div></section>

    <section className="py-16 sm:py-24"><div className="container-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><SectionHeading eyebrow="Industries" title="Local expertise, applied to your business." body="The channels may change, but the goal is the same: help the right local customers choose you." /><div className="divide-y divide-border border-y border-border">{industries.map((x,i) => <Link to="/industries" hash={x.slug} key={x.slug} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-5 group"><span className="font-display text-xl text-accent">0{i+1}</span><div className="min-w-0"><h3 className="font-semibold text-primary">{x.title}</h3><p className="mt-1 text-sm text-muted-foreground">{x.outcome}</p></div><ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" /></Link>)}</div></div></section>

    <section className="bg-primary py-16 text-primary-foreground sm:py-24"><div className="container-shell"><SectionHeading eyebrow="How it works" title="Simple, transparent, focused on growth." center /><div className="mt-12 grid gap-8 md:grid-cols-3">{[[FileCheck2,"01","Free audit","We identify what is working, what is not and where the clearest opportunities sit."],[Sparkles,"02","Custom growth plan","You get a focused recommendation shaped around your goals, market and budget."],[BarChart3,"03","Execution & reporting","We do the work and report each month in plain language you can act on."]].map(([Icon,n,t,b]) => {const I=Icon as typeof Search; return <div key={String(n)} className="text-center"><I className="mx-auto h-8 w-8 text-accent"/><p className="mt-5 text-xs font-bold text-accent">STEP {String(n)}</p><h3 className="mt-2 font-display text-2xl font-semibold">{String(t)}</h3><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-primary-foreground/70">{String(b)}</p></div>})}</div></div></section>

    <section className="py-16 sm:py-24"><div className="container-shell"><SectionHeading eyebrow="Why Growthora" title="A partner built for local business." center /><div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2">{[[MapPinIcon,"Local-business focus"],[BarChart3,"Transparent monthly reporting"],[CircleHelp,"Custom quotes, no cookie-cutter packages"],[Users,"Senior-led strategy"]].map(([Icon,t]) => {const I=Icon as typeof Search; return <div key={String(t)} className="flex gap-4 border-b border-border pb-7"><I className="h-6 w-6 shrink-0 text-secondary"/><h3 className="font-display text-xl font-semibold text-primary">{String(t)}</h3></div>})}</div></div></section>

    <section className="bg-surface py-16 sm:py-24"><div className="container-shell grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Founding client program</p><h2 className="mt-3 font-display text-4xl font-semibold text-primary">Be one of our first case studies.</h2><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">Get priority support and 50% off your first three months. If we achieve meaningful results together, your business can be featured as a Growthora success story.</p></div><Button asChild variant="navyOutline" size="lg"><Link to="/results">Explore the Program</Link></Button></div></section>

    <section className="py-16 sm:py-24"><div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><SectionHeading eyebrow="Questions" title="Straight answers before you start." /><Accordion type="single" collapsible className="border-t border-border">{faqs.map(([q,a]) => <AccordionItem value={q} key={q}><AccordionTrigger className="text-left text-base text-primary">{q}</AccordionTrigger><AccordionContent className="leading-6 text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

    <section className="bg-primary py-16 text-primary-foreground sm:py-24"><div className="container-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Start with clarity</p><h2 className="mt-3 font-display text-4xl font-semibold">Claim your free marketing audit.</h2><p className="mt-4 leading-7 text-primary-foreground/70">Tell us about your business. We’ll review where you are today and reply within one business day.</p></div><div className="rounded-lg bg-background p-6 text-foreground shadow-hero sm:p-8"><LeadForm compact /></div></div></section>
  </>;
}

const MapPinIcon = Target;