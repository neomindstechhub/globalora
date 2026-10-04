import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const fieldClass = "mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none transition-shadow focus:ring-2 focus:ring-ring";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); setError("");
    const form = new FormData(event.currentTarget);
    const payload = { name: String(form.get("name") || "").trim(), business_name: String(form.get("businessName") || "").trim(), email: String(form.get("email") || "").trim(), phone: String(form.get("phone") || "").trim(), business_type: String(form.get("businessType") || "").trim(), service_interest: String(form.get("service") || "").trim(), message: String(form.get("message") || "").trim() || null };
    if (!payload.name || !payload.business_name || !payload.email.includes("@") || payload.phone.length < 7 || !payload.business_type || !payload.service_interest) { setError("Please complete all required fields with valid details."); setStatus("error"); return; }
    const { error: dbError } = await supabase.from("leads").insert(payload);
    if (dbError) { setError("We couldn't send your request. Please email or WhatsApp us instead."); setStatus("error"); return; }
    event.currentTarget.reset(); setStatus("success");
  }
  if (status === "success") return <div className="rounded-lg border border-secondary/30 bg-secondary/10 p-8 text-center"><CheckCircle2 className="mx-auto h-10 w-10 text-secondary" /><h3 className="mt-4 font-display text-2xl font-semibold text-primary">Your audit request is in.</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Thank you. We’ll review your business and reply within one business day.</p></div>;
  return <form onSubmit={submit} noValidate className={compact ? "grid gap-4 sm:grid-cols-2" : "grid gap-5 sm:grid-cols-2"}>
    <label className="text-sm font-semibold text-foreground">Name *<input name="name" required minLength={2} autoComplete="name" className={fieldClass} /></label>
    <label className="text-sm font-semibold text-foreground">Business Name *<input name="businessName" required minLength={2} autoComplete="organization" className={fieldClass} /></label>
    <label className="text-sm font-semibold text-foreground">Email *<input name="email" type="email" required autoComplete="email" className={fieldClass} /></label>
    <label className="text-sm font-semibold text-foreground">Phone / WhatsApp *<input name="phone" type="tel" required minLength={7} autoComplete="tel" className={fieldClass} /></label>
    <label className="text-sm font-semibold text-foreground">Business Type *<select name="businessType" required defaultValue="" className={fieldClass}><option value="" disabled>Select your business</option><option>Dentist</option><option>Café or Restaurant</option><option>Gym or Studio</option><option>Plumber or Home Service</option><option>Salon or Clinic</option><option>Other Local Business</option></select></label>
    <label className="text-sm font-semibold text-foreground">Service Interested In *<select name="service" required defaultValue="" className={fieldClass}><option value="" disabled>Select a service</option><option>SEO & Local SEO</option><option>Google & Meta Ads</option><option>Website Development</option><option>Social Media</option><option>Brand & Content</option><option>Not Sure Yet</option></select></label>
    {!compact && <label className="text-sm font-semibold text-foreground sm:col-span-2">Message <textarea name="message" maxLength={2000} rows={4} className="mt-2 w-full rounded-md border border-input bg-background p-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" /></label>}
    {error && <p role="alert" className="text-sm text-destructive sm:col-span-2">{error}</p>}
    <div className="sm:col-span-2"><Button type="submit" variant="gold" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">{status === "sending" && <Loader2 className="animate-spin" />} Claim My Free Audit</Button><p className="mt-3 text-xs text-muted-foreground">No obligation. We reply within 1 business day.</p></div>
  </form>;
}