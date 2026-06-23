"use client";

import { useState } from "react";
import { site } from "@/data/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      action={site.emailHref}
      className="grid gap-4 rounded-premium border border-white/10 bg-white/[0.045] p-5 shadow-premium"
      encType="text/plain"
      method="post"
      onSubmit={(event) => {
        const form = event.currentTarget;
        const honeypot = new FormData(form).get("website");
        if (honeypot) {
          event.preventDefault();
          return;
        }
        setSent(true);
        if (typeof window !== "undefined") {
          window.dataLayer?.push?.({ event: "contact_form_submit" });
        }
      }}
    >
      <label className="form-label">
        שם מלא
        <input className="form-field" minLength={2} name="name" required />
      </label>
      <label className="form-label">
        חברה
        <input className="form-field" name="company" />
      </label>
      <label className="form-label">
        טלפון
        <input className="form-field" inputMode="tel" name="phone" pattern="[0-9+\-\s]{7,}" required />
      </label>
      <label className="form-label">
        אימייל
        <input className="form-field" name="email" required type="email" />
      </label>
      <label className="form-label">
        מה אתם צריכים?
        <input className="form-field" minLength={3} name="need" required />
      </label>
      <label className="form-label">
        בחירת שירות
        <select className="form-field" name="service" required>
          <option value="">בחרו שירות</option>
          <option>אתר חדש</option>
          <option>שדרוג אתר קיים</option>
          <option>AI ואוטומציה</option>
          <option>חנות אונליין</option>
          <option>Amazon / eBay</option>
          <option>שיפור מהירות</option>
          <option>אבטחה / תקלה דחופה</option>
          <option>מערכת פנימית</option>
          <option>אחר</option>
        </select>
      </label>
      <label className="form-label">
        הודעה חופשית
        <textarea className="form-field min-h-32" minLength={10} name="message" required />
      </label>
      <label className="sr-only" aria-hidden="true">
        אתר
        <input autoComplete="off" name="website" tabIndex={-1} />
      </label>
      <label className="flex items-start gap-3 text-sm text-zinc-300">
        <input className="mt-1 accent-navred" name="consent" required type="checkbox" />
        אני מסכים/ה ש־NAVINES ישראל תיצור איתי קשר לגבי הפנייה.
      </label>
      <button className="btn-primary w-full" type="submit">
        שלחו ליד למייל
      </button>
      {sent && <p className="rounded-premium border border-navred/30 bg-navred/10 p-3 text-sm text-silver">תודה שפניתם ל־NAVINES ישראל. קיבלנו את הפרטים ונחזור אליכם בהקדם.</p>}
      <p className="text-xs leading-6 text-zinc-500">הטופס נשלח למייל {site.email} ומוכן לחיבור עתידי ל־CRM.</p>
    </form>
  );
}
