export function SectionHeading({ eyebrow, title, body, center = false }: { eyebrow?: string; title: string; body?: string; center?: boolean }) {
  return <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-secondary">{eyebrow}</p>}
    <h2 className="font-display text-3xl font-semibold leading-tight text-primary sm:text-4xl lg:text-5xl">{title}</h2>
    {body && <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{body}</p>}
  </div>;
}