export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <section className="border-b border-border bg-surface py-16 sm:py-24">
    <div className="container-shell text-center">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-secondary">{eyebrow}</p>
      <h1 className="mx-auto max-w-4xl font-display text-4xl font-semibold leading-[1.1] text-primary sm:text-6xl">{title}</h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{body}</p>
    </div>
  </section>;
}