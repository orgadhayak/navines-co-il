import { site } from "@/data/site";

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 left-4 z-40 flex gap-2">
      <a className="rounded-premium border border-white/10 bg-ink/90 px-4 py-3 text-sm font-black text-white shadow-premium backdrop-blur hover:bg-navred" href={site.whatsappHref}>
        וואטסאפ
      </a>
      <a className="rounded-premium border border-white/10 bg-ink/90 px-4 py-3 text-sm font-black text-white shadow-premium backdrop-blur hover:bg-navred md:hidden" href={site.phoneHref}>
        טלפון
      </a>
    </div>
  );
}
