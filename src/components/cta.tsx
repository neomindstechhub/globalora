import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function ClosingCta({ title = "Ready to make your marketing work harder?", body = "Claim your free audit and see where your clearest growth opportunities are." }: { title?: string; body?: string }) {
  return <section className="bg-primary py-16 text-primary-foreground sm:py-20">
    <div className="container-shell flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
      <div className="max-w-2xl"><h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2><p className="mt-3 text-primary-foreground/75">{body}</p></div>
      <Button asChild variant="gold" size="lg"><Link to="/contact">Get My Free Audit <ArrowRight /></Link></Button>
    </div>
  </section>;
}