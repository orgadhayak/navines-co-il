import { type LocaleSlug } from "@/i18n/locales";
import { site } from "@/data/site";

const labels: Record<LocaleSlug, { whatsapp: string; phone: string }> = {
  he: { whatsapp: "WhatsApp", phone: "טלפון" },
  de: { whatsapp: "WhatsApp", phone: "Telefon" },
  jp: { whatsapp: "WhatsApp", phone: "電話" },
  ar: { whatsapp: "WhatsApp", phone: "هاتف" },
  hi: { whatsapp: "WhatsApp", phone: "फोन" },
  fr: { whatsapp: "WhatsApp", phone: "Téléphone" },
  zh: { whatsapp: "WhatsApp", phone: "电话" },
};

export function FloatingContact({ locale = "he" }: { locale?: LocaleSlug }) {
  const copy = labels[locale] || labels.he;
  const isRtl = locale === "he" || locale === "ar";

  return (
    <div
      className={`fixed z-40 flex items-end gap-2 ${isRtl ? "left-3 sm:left-4" : "right-3 flex-row-reverse sm:right-4"}`}
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 0.85rem)" }}
    >
      <a
        aria-label={copy.whatsapp}
        className="grid h-11 w-11 place-items-center rounded-lg border text-white shadow-sm transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-sky-300 sm:h-14 sm:w-14"
        href={site.whatsappHref}
        rel="noopener noreferrer"
        target="_blank"
        style={{ background: "#16A34A", borderColor: "#15803D" }}
      >
        <svg aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 32 32">
          <path d="M16.1 4.5c-6.2 0-11.2 4.8-11.2 10.8 0 2.1.7 4.1 1.8 5.8L5.4 27l6.1-1.6a11.7 11.7 0 0 0 4.6.9c6.2 0 11.2-4.8 11.2-10.8S22.3 4.5 16.1 4.5Z" fill="currentColor" />
          <path d="M21.7 18.7c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3Z" fill="#ffffff" opacity="0.9" />
        </svg>
      </a>
    </div>
  );
}
