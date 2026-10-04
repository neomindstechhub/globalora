import logoAsset from "@/assets/growthora-logo.png.asset.json";

export function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <img src={logoAsset.url} alt="Growthora" className="h-11 w-11 shrink-0 rounded-full object-cover object-top" />
      <div className="min-w-0 leading-none">
        <span className={inverted ? "block text-lg font-bold text-primary-foreground" : "block text-lg font-bold text-primary"}>GROWTH<span className="text-accent">ORA</span></span>
        <span className={inverted ? "mt-1 block text-[9px] uppercase tracking-[0.18em] text-primary-foreground/70" : "mt-1 block text-[9px] uppercase tracking-[0.18em] text-muted-foreground"}>Global Marketing Agency</span>
      </div>
    </div>
  );
}