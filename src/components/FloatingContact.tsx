import { site } from "@/data/site";

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 left-4 z-40 flex items-end gap-2">
      <a
        aria-label="שלחו וואטסאפ"
        className="group relative grid h-16 w-16 place-items-center rounded-full border border-emerald-200/40 bg-emerald-500 text-white shadow-[0_0_42px_rgba(16,185,129,0.55)] transition hover:scale-105 hover:bg-emerald-400"
        href={site.whatsappHref}
      >
        <span className="absolute inset-0 rounded-full bg-emerald-300/25 blur-md transition group-hover:bg-emerald-200/35" aria-hidden="true" />
        <svg aria-hidden="true" className="relative h-8 w-8 drop-shadow-[0_0_12px_rgba(255,255,255,0.75)]" fill="none" viewBox="0 0 32 32">
          <path d="M16.1 4.5c-6.2 0-11.2 4.8-11.2 10.8 0 2.1.7 4.1 1.8 5.8L5.4 27l6.1-1.6a11.7 11.7 0 0 0 4.6.9c6.2 0 11.2-4.8 11.2-10.8S22.3 4.5 16.1 4.5Z" fill="currentColor" />
          <path d="M21.7 18.7c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3Z" fill="#052e1b" />
        </svg>
      </a>
      <a className="rounded-full border border-white/10 bg-ink/90 px-4 py-3 text-sm font-black text-white shadow-premium backdrop-blur hover:bg-navred md:hidden" href={site.phoneHref}>
        טלפון
      </a>
    </div>
  );
}
