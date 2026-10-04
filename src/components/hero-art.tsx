export function HeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]" aria-label="Growth across Canada illustration" role="img">
      <div className="absolute inset-[9%] rounded-full border border-primary/15 bg-surface shadow-hero" />
      <svg viewBox="0 0 540 540" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="270" cy="265" r="155" fill="var(--color-primary)" opacity=".07" />
        <circle cx="270" cy="265" r="119" fill="none" stroke="var(--color-primary)" strokeWidth="2" opacity=".24" />
        <path d="M155 265h230M270 146c-38 34-57 74-57 119s19 85 57 119M270 146c38 34 57 74 57 119s-19 85-57 119" fill="none" stroke="var(--color-secondary)" strokeWidth="2" opacity=".45" />
        <path d="M157 217c55 24 173 24 226 0M157 313c55-24 173-24 226 0" fill="none" stroke="var(--color-primary)" strokeWidth="2" opacity=".25" />
        <path d="M228 157l25 17 25-7 20 17-6 30-26 17-29-8-14-31zM190 250l24-14 27 15-1 28-23 20-28-11zM300 279l36-14 31 18-6 42-35 30-26-20z" fill="var(--color-primary)" opacity=".85" />
        <path d="M138 354c58-4 108-20 149-48 46-31 77-71 94-119" fill="none" stroke="var(--color-accent)" strokeLinecap="round" strokeWidth="18" />
        <path d="M359 183l36-23-2 43" fill="none" stroke="var(--color-accent)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18" />
        <path d="M155 370c15-45 48-71 97-78-4 50-36 78-97 78z" fill="var(--color-secondary)" />
        <path d="M161 365c25-22 50-41 78-59" fill="none" stroke="var(--color-background)" strokeWidth="3" />
      </svg>
      <div className="absolute bottom-[3%] right-[2%] w-[35%] rounded-xl border border-border bg-background p-3 shadow-card sm:p-4">
        <div className="mb-3 h-1.5 w-9 rounded-full bg-border" />
        <div className="rounded-lg bg-surface p-3">
          <div className="mb-2 h-3 w-3 rounded-full bg-secondary" />
          <div className="h-2 w-4/5 rounded-full bg-primary/20" />
          <div className="mt-2 flex gap-1 text-accent" aria-label="Five stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        </div>
      </div>
    </div>
  );
}