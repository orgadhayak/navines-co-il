import type { PublicLocale } from "@/i18n/locales";
import type { LocalizedArticleContent } from "./types";

export type LocalizedFinancialReviewContent = {
  locale: PublicLocale;
  service: {
    eyebrow: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    intro: string;
    scopeTitle: string;
    scope: string[];
    processTitle: string;
    process: { title: string; text: string }[];
    safeguardsTitle: string;
    safeguards: string[];
    faqTitle: string;
    faqs: { question: string; answer: string }[];
    ctaTitle: string;
    ctaText: string;
    ctaLabel: string;
    articleLabel: string;
    previewTitle: string;
    previewText: string;
  };
  article: LocalizedArticleContent;
};

export const localizedFinancialReviewContent: Record<PublicLocale, LocalizedFinancialReviewContent> = {
  de: {
    locale: "de",
    service: {
      eyebrow: "Prüfung von Zahlungen und möglichen Erstattungen",
      title: "Zahlungen, Belastungen und mögliche Erstattungen strukturiert prüfen",
      metaTitle: "Zahlungen und mögliche Erstattungen strukturiert prüfen",
      metaDescription: "Navines unterstützt bei der nachvollziehbaren Prüfung von Belastungen, Zahlungen, Gutschriften und möglichen Erstattungen auf Basis autorisierter Unterlagen und Daten.",
      intro: "Wenn eine Belastung, eine Gutschrift oder ein Betrag nicht zusammenpasst, ist eine saubere Prüfung hilfreicher als eine Vermutung. Navines ordnet autorisiert bereitgestellte Unterlagen, vergleicht Daten und bereitet nachvollziehbare Fragen und Nachweise vor. Eine Erstattung oder ein Ergebnis wird nicht zugesagt.",
      scopeTitle: "Wobei eine Prüfung helfen kann",
      scope: ["Doppelte oder unklare Belastungen, fehlende Gutschriften und wiederkehrende Abonnements", "Abgleich von Rechnungen, Bestellungen, Zahlungsdienstleister-Exporten und autorisierten Kontoauszügen", "Gebühren, Währungen, Versand- oder Marktplatzdaten bei internationaler Tätigkeit", "Unterlagen zu Händlern, Versicherungen, öffentlichen Stellen, Banken über autorisierte Dokumente und digitalen Diensten", "Amazon-, Walmart- oder andere Plattformberichte, soweit der Kunde sie rechtmäßig bereitstellt"],
      processTitle: "Ein klarer, kontrollierter Ablauf",
      process: [{ title: "Kostenloses Erstgespräch", text: "Wir klären kurz, was nicht stimmig wirkt und welche Unterlagen vorhanden sind." }, { title: "Quellen und Grenzen festlegen", text: "Wir arbeiten nur mit Informationen, die der Kunde rechtmäßig freigibt." }, { title: "Abgleichen", text: "Beträge, Daten, Referenzen, Bedingungen und Gutschriften werden nachvollziehbar verglichen." }, { title: "Nächsten Schritt vorbereiten", text: "Sie erhalten eine geordnete Übersicht, offene Fragen und bei Bedarf eine sachliche Grundlage für die Kontaktaufnahme." }],
      safeguardsTitle: "Wichtige Grenzen und Sicherheit",
      safeguards: ["Keine Passwörter, Einmalcodes, vollständigen Kartendaten oder unbefugten Kontozugänge.", "Keine Garantie, dass Geld gefunden, eine Forderung akzeptiert oder eine Erstattung bewilligt wird.", "Keine Rechts-, Steuer-, Buchhaltungs- oder Anlageberatung. Bei Bedarf gehören qualifizierte Fachleute in den Prozess.", "Keine unzutreffenden Forderungen oder Druckmittel. Die Kommunikation bleibt sachlich, dokumentiert und rechtmäßig."],
      faqTitle: "Häufige Fragen",
      faqs: [{ question: "Greifen Sie auf mein Bankkonto zu?", answer: "Nein. Wir verwenden nur Unterlagen oder Exporte, die Sie berechtigt bereitstellen. Zugangsdaten und Codes werden nicht benötigt." }, { question: "Kann eine Erstattung garantiert werden?", answer: "Nein. Wir helfen bei der Prüfung und Dokumentation. Die Entscheidung liegt beim jeweiligen Unternehmen, der Bank, der Behörde oder Plattform." }, { question: "Ist das Rechts- oder Steuerberatung?", answer: "Nein. Der Service ergänzt die Dokumentation und Datenprüfung, ersetzt aber keine rechtliche, steuerliche oder finanzielle Beratung." }],
      ctaTitle: "Möchten Sie zuerst klären, ob eine Prüfung sinnvoll ist?",
      ctaText: "Senden Sie uns kurz, bei welchem Anbieter oder Vorgang etwas nicht zusammenpasst. Das erste Eignungsgespräch ist kostenlos und ohne Zugangsdaten.",
      ctaLabel: "Über WhatsApp sprechen",
      articleLabel: "Zum Leitfaden für Zahlungen und Erstattungen",
      previewTitle: "Zahlungen und mögliche Erstattungen prüfen",
      previewText: "Unterlagen, Zahlungen und Abweichungen geordnet prüfen, bevor Sie eine fundierte Anfrage stellen.",
    },
    article: {
      locale: "de", slug: "payment-discrepancy-review", metaTitle: "Zahlungen und mögliche Erstattungen prüfen", metaDescription: "Wie Sie Belastungen, Zahlungen und mögliche Erstattungen mit Unterlagen, Abgleichen und einer klaren Anfrage prüfen.", title: "Zahlungen, Belastungen und mögliche Erstattungen prüfen, ohne zu raten", excerpt: "Ein unklarer Betrag ist kein Beweis für einen Anspruch. Mit einer ruhigen Prüfung von Dokumenten, Referenzen und Bedingungen lässt sich jedoch klären, welche Frage wirklich gestellt werden sollte.", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "Mit Fakten beginnen", paragraphs: ["Sammeln Sie Rechnung, Bestellung, Zahlungsreferenz, Datum, Betrag, Währung und die relevanten Bedingungen. Ein Screenshot allein erklärt selten den gesamten Vorgang.", "Notieren Sie, was genau nicht zusammenpasst: eine doppelte Belastung, eine fehlende Gutschrift, eine Gebühr oder ein Unterschied zwischen zwei Systemen."] }, { title: "Daten vergleichen, nicht vermuten", paragraphs: ["Vergleichen Sie die gleichen Vorgänge in den autorisiert vorliegenden Quellen. Dazu können Händlerunterlagen, Zahlungsanbieter-Exporte, Marktplatzberichte oder von Ihnen bereitgestellte Kontoauszüge gehören.", "Bei internationaler Tätigkeit sollten Währung, Wechselkursdatum, Versand, Gebühren und Teilgutschriften getrennt betrachtet werden."] }, { title: "Eine präzise Anfrage vorbereiten", paragraphs: ["Eine gute Anfrage nennt den Vorgang, den beobachteten Unterschied, die Referenz und die beigefügten Nachweise. Sie verlangt keine Antwort, die Sie nicht belegen können.", "Die zuständige Stelle entscheidet über jede Korrektur oder Erstattung. Dokumentation erleichtert die Prüfung, ersetzt aber keine Entscheidung des Anbieters."] }, { title: "Grenzen respektieren", paragraphs: ["Teilen Sie keine Passwörter, Einmalcodes oder vollständigen Kartendaten. Für Bankthemen arbeiten Sie mit autorisierten Unterlagen und wenden sich bei Verdacht auf Betrug direkt an Ihre Bank.", "Bei Rechts-, Steuer-, Versicherungs- oder Finanzfragen holen Sie zusätzlich fachlichen Rat ein."] }], faqs: [{ question: "Reicht ein Kontoauszug aus?", answer: "Er ist ein wichtiger Ausgangspunkt, wird aber meist zusammen mit Rechnung, Bestellung, Bedingungen oder Kommunikation besser verständlich." }, { question: "Kann ich auch internationale Plattformen prüfen?", answer: "Ja, wenn Sie die Berichte und Unterlagen rechtmäßig bereitstellen. Das Ergebnis und die Regeln bleiben bei der jeweiligen Plattform." }], cta: { title: "Eine Abweichung geordnet prüfen", text: "Sagen Sie uns kurz, worum es geht. Wir klären im kostenlosen Erstgespräch, ob eine strukturierte Prüfung sinnvoll ist.", whatsappLabel: "WhatsApp schreiben", emailLabel: "E-Mail senden" },
    },
  },
  jp: {
    locale: "jp",
    service: {
      eyebrow: "請求・支払い・返金可能性の整理",
      title: "請求、支払い、返金の可能性を根拠とともに確認する",
      metaTitle: "請求・支払い・返金可能性の確認支援",
      metaDescription: "Navines は、権限に基づいて提供された資料とデータを用い、請求、支払い、返金やクレジットの不一致を整理して確認します。",
      intro: "請求額や返金、入金の記録が一致しないとき、推測ではなく事実を整理することが重要です。Navines は、お客様が正当に共有した資料を比較し、確認すべき点と次の問い合わせの材料を整理します。返金や結果を保証するものではありません。",
      scopeTitle: "確認できる対象の例",
      scope: ["二重請求、不明な請求、反映されない返金や継続課金", "請求書、注文、決済事業者のエクスポート、権限のある口座明細の照合", "海外取引における通貨、手数料、配送、マーケットプレイスのレポート", "保険、公共サービス、銀行はお客様が権限を持つ書類を通じて確認", "Amazon、Walmart などのレポートは正当に提供された範囲で確認"],
      processTitle: "進め方",
      process: [{ title: "無料の初回確認", text: "何が合わないのか、どの資料があるのかを短く整理します。" }, { title: "権限と資料を確認", text: "お客様が共有を許可した資料だけを扱います。" }, { title: "照合と整理", text: "金額、日付、参照番号、通貨、条件、クレジットを比較します。" }, { title: "次の行動を準備", text: "事実、質問、添付資料を整理し、適切な窓口へ問い合わせるための土台をつくります。" }],
      safeguardsTitle: "大切な前提",
      safeguards: ["パスワード、ワンタイムコード、カード番号全体、無断アクセスは求めません。", "返金、訂正、資金発見を保証しません。判断は各事業者・機関・プラットフォームにあります。", "法律、税務、会計、投資の助言ではありません。必要に応じて資格を持つ専門家に相談します。", "虚偽の請求や不当な圧力は行いません。根拠のある、適法な連絡を重視します。"],
      faqTitle: "よくある質問",
      faqs: [{ question: "銀行口座に入りますか？", answer: "いいえ。お客様が権限を持って提供する明細やエクスポートだけを使用し、ログイン情報やコードは扱いません。" }, { question: "返金は必ず受けられますか？", answer: "いいえ。私たちは確認と整理を支援します。返金や訂正の判断は各組織が行います。" }, { question: "法務や会計の助言ですか？", answer: "いいえ。資料とデータの整理を補助するサービスであり、専門家の助言に代わるものではありません。" }],
      ctaTitle: "確認が必要か、まず相談したいですか？",
      ctaText: "どの取引や請求が合わないのかを短くお知らせください。初回の適性確認は無料で、ログイン情報は不要です。",
      ctaLabel: "WhatsAppで相談する",
      articleLabel: "確認の進め方を読む",
      previewTitle: "請求と返金可能性の確認",
      previewText: "資料と取引の差異を整理し、根拠のある次の問い合わせにつなげます。",
    },
    article: {
      locale: "jp", slug: "payment-discrepancy-review", metaTitle: "請求・支払い・返金可能性を確認する方法", metaDescription: "請求、支払い、クレジット、返金の差異を、資料と照合して整理するための実践ガイド。", title: "請求や支払いに差異があるとき、推測せずに確認する方法", excerpt: "不明な請求や反映されない返金は、まず記録をそろえて比較することで、問い合わせるべき内容が明確になります。", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "最初にそろえるもの", paragraphs: ["請求書、注文、日付、金額、通貨、参照番号、利用条件を集めます。何が合わないのかを一文で書ける状態にします。", "口座明細だけで判断せず、関連する注文や連絡内容と照合します。"] }, { title: "同じ取引を複数の記録で見る", paragraphs: ["正当に利用できる決済レポート、販売プラットフォームのレポート、請求書、明細を比較します。", "海外取引では、通貨、手数料、配送、分割返金を分けて確認すると誤解を減らせます。"] }, { title: "問い合わせは事実から", paragraphs: ["日時、金額、参照番号、差異、添付資料を簡潔に示します。証明できない要求はしません。", "訂正や返金を認めるかどうかは、相手方の規約と確認結果に委ねられます。"] }, { title: "安全と専門家の役割", paragraphs: ["パスワード、認証コード、カード情報を第三者に渡さないでください。銀行に関する不正の疑いは、銀行の正式窓口にも直ちに連絡してください。", "法律、税務、保険、会計の判断は、必要に応じて専門家と進めます。"] }], faqs: [{ question: "口座明細だけで確認できますか？", answer: "出発点にはなりますが、請求書、注文、規約と合わせると状況を正確に把握しやすくなります。" }, { question: "海外のサービスも対象ですか？", answer: "お客様が正当に提供できる資料がある場合に検討できます。各サービス側の判断や規約は変わりません。" }], cta: { title: "差異を整理して確認する", text: "何が合わないのかを短くお知らせください。無料の初回確認で、整理して進める価値があるかを確認します。", whatsappLabel: "WhatsAppで相談", emailLabel: "メールを送る" },
    },
  },
  ar: {
    locale: "ar",
    service: {
      eyebrow: "مراجعة الرسوم والمدفوعات واحتمالات الاسترداد",
      title: "مراجعة الرسوم والمدفوعات واحتمالات الاسترداد بصورة منظمة",
      metaTitle: "مراجعة الرسوم والمدفوعات واحتمالات الاسترداد",
      metaDescription: "تساعد Navines في تنظيم ومراجعة الرسوم والمدفوعات والرصيد الدائن واحتمالات الاسترداد بالاعتماد على مستندات وبيانات مصرح بها.",
      intro: "عندما لا يتطابق رسم أو دفعة أو رصيد دائن، لا يكفي التخمين. نساعد في ترتيب المستندات التي يحق للعميل تقديمها، ومقارنة البيانات، وبناء أسئلة وأدلة واضحة لخطوة لاحقة. لا نعد باسترداد أو نتيجة محددة.",
      scopeTitle: "أمثلة على ما يمكن مراجعته",
      scope: ["رسوم مكررة أو غير واضحة، أرصدة لم تظهر، واشتراكات متكررة", "مطابقة الفواتير والطلبات وملفات مزودي الدفع وكشوف الحساب المصرح بها", "عملات ورسوم وشحن وتقارير منصات في نشاط دولي", "وثائق تخص مورّدين أو تأمين أو خدمات عامة أو بنوك، ضمن ما يملك العميل صلاحية مشاركته", "تقارير Amazon وWalmart وغيرها عندما يوفرها العميل بصورة قانونية"],
      processTitle: "خطوات واضحة",
      process: [{ title: "مكالمة ملاءمة مجانية", text: "نفهم باختصار ما الذي لا يتطابق وما هي المستندات المتاحة." }, { title: "تحديد الصلاحيات", text: "نعمل فقط بالمعلومات التي يحق للعميل مشاركتها." }, { title: "المقارنة والتنظيم", text: "نقارن المبالغ والتواريخ والمراجع والعملات والشروط والأرصدة." }, { title: "تحضير الخطوة التالية", text: "ننظم الوقائع والأسئلة والمرفقات لتكون المراسلة مع الجهة المعنية دقيقة وواضحة." }],
      safeguardsTitle: "حدود مهمة",
      safeguards: ["لا نطلب كلمات مرور أو رموز تحقق أو بيانات بطاقات كاملة أو وصولاً غير مصرح به.", "لا نضمن العثور على أموال أو قبول طلب أو استرداد مبلغ.", "الخدمة ليست استشارة قانونية أو محاسبية أو ضريبية أو مالية، ولا تحل محل المختصين.", "لا نستخدم ادعاءات غير صحيحة أو ضغطاً غير قانوني؛ نعتمد على التوثيق والتواصل المشروع."],
      faqTitle: "أسئلة شائعة",
      faqs: [{ question: "هل تدخلون إلى حسابي البنكي؟", answer: "لا. نستخدم فقط مستندات أو صادرات بيانات يشاركها العميل بصلاحية، ولا نطلب بيانات دخول أو رموز تحقق." }, { question: "هل تضمنون استرداد المال؟", answer: "لا. نساعد في المراجعة والتوثيق، والقرار يبقى لدى الشركة أو البنك أو الجهة أو المنصة المعنية." }, { question: "هل هذه استشارة قانونية أو مالية؟", answer: "لا. هي طبقة إضافية لتنظيم البيانات والمستندات، وعند الحاجة ينبغي إشراك مختص مناسب." }],
      ctaTitle: "هل تريدون معرفة إن كانت المراجعة مناسبة؟",
      ctaText: "أرسلوا لنا باختصار اسم الجهة أو العملية التي لا تتطابق. مكالمة الملاءمة الأولى مجانية ولا تحتاج إلى معلومات دخول.",
      ctaLabel: "تواصل عبر WhatsApp",
      articleLabel: "اقرأوا دليل المراجعة",
      previewTitle: "مراجعة الرسوم والمدفوعات",
      previewText: "تنظيم المستندات والفروقات قبل تقديم استفسار مبني على أدلة.",
    },
    article: {
      locale: "ar", slug: "payment-discrepancy-review", metaTitle: "كيف تراجع الرسوم والمدفوعات واحتمالات الاسترداد", metaDescription: "دليل منظم لمراجعة الرسوم والمدفوعات والأرصدة واحتمالات الاسترداد عبر المستندات والمطابقة وتواصل قائم على أدلة.", title: "عندما لا تتطابق الرسوم أو المدفوعات: كيف تراجعها من دون تخمين", excerpt: "الرسم غير الواضح أو الرصيد الذي لم يظهر لا يثبت وحده حقاً في استرداد، لكنه يستحق مراجعة هادئة للمستندات والشروط والمراجع.", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "ابدأوا بالوثائق", paragraphs: ["اجمعوا الفاتورة والطلب وتاريخ العملية والمبلغ والعملة والمرجع والشروط ذات الصلة. حددوا بجملة واحدة ما الذي لا يتطابق.", "كشف الحساب مهم، لكنه أوضح عند مقارنته بالفاتورة أو الطلب أو المراسلات."] }, { title: "طابقوا نفس العملية", paragraphs: ["قارنوا العملية نفسها في التقارير التي يحق لكم استخدامها: فاتورة، مزود دفع، منصة بيع، أو كشف حساب قدمتموه بإذن.", "في العمليات الدولية افصلوا العملة والرسوم والشحن وأي استرداد جزئي قبل الاستنتاج."] }, { title: "اكتبوا استفساراً دقيقاً", paragraphs: ["اذكروا التاريخ والمبلغ والمرجع والفارق والمرفقات. لا تقدموا مطالبة لا يمكن إثباتها.", "الجهة المعنية هي التي تقرر أي تصحيح أو استرداد وفق شروطها وفحصها."] }, { title: "احموا المعلومات وأشركوا المختصين", paragraphs: ["لا تشاركوا كلمة مرور أو رمز تحقق أو بيانات بطاقة كاملة. عند الشك باحتيال مصرفي تواصلوا أيضاً مع القناة الرسمية للبنك.", "في المسائل القانونية أو الضريبية أو التأمينية أو المحاسبية، استشيروا مختصاً مناسباً."] }], faqs: [{ question: "هل يكفي كشف الحساب؟", answer: "هو بداية مفيدة، لكنه يصبح أوضح مع الفواتير والطلبات والشروط أو المراسلات ذات الصلة." }, { question: "هل يمكن مراجعة منصات خارجية؟", answer: "يمكن ذلك عندما تقدمون تقارير ومستندات بصورة مصرح بها؛ أما القرار وشروط المنصة فتبقى لديها." }], cta: { title: "نظموا الفارق قبل مراسلته", text: "أخبرونا باختصار بما لا يتطابق. نتحقق في مكالمة أولى مجانية مما إذا كانت المراجعة المنظمة مناسبة.", whatsappLabel: "تواصل عبر WhatsApp", emailLabel: "إرسال بريد" },
    },
  },
  hi: {
    locale: "hi",
    service: {
      eyebrow: "भुगतान, शुल्क और संभावित रिफंड की समीक्षा",
      title: "भुगतान, शुल्क और संभावित रिफंड की व्यवस्थित जांच",
      metaTitle: "भुगतान, शुल्क और संभावित रिफंड की जांच",
      metaDescription: "Navines अधिकृत दस्तावेज़ों और डेटा के आधार पर शुल्क, भुगतान, क्रेडिट और संभावित रिफंड की व्यवस्थित समीक्षा में सहायता करता है।",
      intro: "जब शुल्क, भुगतान या क्रेडिट का रिकॉर्ड मेल नहीं खाता, तो अनुमान लगाने के बजाय तथ्यों को व्यवस्थित करना बेहतर है। Navines ग्राहक द्वारा वैध रूप से साझा किए गए दस्तावेज़ों की तुलना कर सकता है और सही प्रश्न व अगले कदम तैयार करने में मदद करता है। रिफंड या किसी परिणाम की गारंटी नहीं दी जाती।",
      scopeTitle: "किन मामलों में समीक्षा उपयोगी हो सकती है",
      scope: ["डुप्लिकेट या अस्पष्ट शुल्क, न दिखने वाला क्रेडिट, और आवर्ती सदस्यताएँ", "इनवॉइस, ऑर्डर, पेमेंट प्रोवाइडर एक्सपोर्ट और अधिकृत बैंक स्टेटमेंट का मिलान", "अंतरराष्ट्रीय गतिविधि में मुद्रा, शुल्क, शिपिंग और मार्केटप्लेस रिपोर्ट", "बीमा, सार्वजनिक सेवाओं, बैंकों और आपूर्तिकर्ताओं से संबंधित ऐसे दस्तावेज़ जिन्हें ग्राहक साझा करने के लिए अधिकृत है", "Amazon, Walmart या अन्य प्लेटफ़ॉर्म के रिपोर्ट, यदि ग्राहक उन्हें कानूनी रूप से प्रदान करता है"],
      processTitle: "कैसे आगे बढ़ते हैं",
      process: [{ title: "निःशुल्क प्रारंभिक बातचीत", text: "हम समझते हैं कि कौन-सा रिकॉर्ड मेल नहीं खा रहा और कौन-से दस्तावेज़ उपलब्ध हैं।" }, { title: "अनुमति और स्रोत तय करना", text: "केवल वही जानकारी ली जाती है जिसे ग्राहक साझा करने के लिए अधिकृत है।" }, { title: "तुलना और संगठन", text: "राशि, तारीख, संदर्भ, मुद्रा, शर्तें और क्रेडिट को एक ही क्रम में देखा जाता है।" }, { title: "अगला कदम तैयार करना", text: "तथ्य, प्रश्न और सहायक दस्तावेज़ व्यवस्थित किए जाते हैं ताकि सही संस्था से स्पष्ट रूप से संपर्क किया जा सके।" }],
      safeguardsTitle: "महत्वपूर्ण सीमाएँ",
      safeguards: ["पासवर्ड, OTP, पूरे कार्ड विवरण या अनधिकृत खाते की पहुंच नहीं मांगी जाती।", "पैसा मिलने, रिफंड मंजूर होने या किसी दावे के सफल होने की गारंटी नहीं है।", "यह कानूनी, कर, लेखा या वित्तीय सलाह नहीं है; आवश्यकता हो तो योग्य पेशेवर को शामिल करें।", "गलत दावा या गैरकानूनी दबाव नहीं बनाया जाता; काम तथ्यों और वैध संवाद पर आधारित है।"],
      faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
      faqs: [{ question: "क्या आप मेरे बैंक खाते में लॉग इन करते हैं?", answer: "नहीं। हम केवल ऐसे स्टेटमेंट या एक्सपोर्ट देखते हैं जिन्हें ग्राहक अधिकृत रूप से साझा करता है। लॉगिन या OTP की आवश्यकता नहीं होती।" }, { question: "क्या रिफंड की गारंटी है?", answer: "नहीं। हम समीक्षा और दस्तावेज़ीकरण में सहायता करते हैं। निर्णय संबंधित कंपनी, बैंक, संस्था या प्लेटफ़ॉर्म का होता है।" }, { question: "क्या यह कानूनी या वित्तीय सलाह है?", answer: "नहीं। यह डेटा और दस्तावेज़ संगठन की अतिरिक्त परत है, और योग्य सलाहकार की जगह नहीं लेती।" }],
      ctaTitle: "क्या पहले जानना चाहते हैं कि समीक्षा उपयोगी होगी?",
      ctaText: "हमें संक्षेप में बताएं कि किस प्रदाता या लेन-देन में अंतर है। प्रारंभिक बातचीत निःशुल्क है और इसमें लॉगिन जानकारी की जरूरत नहीं है।",
      ctaLabel: "WhatsApp पर बात करें",
      articleLabel: "समीक्षा गाइड पढ़ें",
      previewTitle: "भुगतान और संभावित रिफंड की समीक्षा",
      previewText: "दस्तावेज़ और अंतर को व्यवस्थित करके प्रमाण आधारित अगला कदम तैयार करें।",
    },
    article: {
      locale: "hi", slug: "payment-discrepancy-review", metaTitle: "भुगतान, शुल्क और संभावित रिफंड की जांच कैसे करें", metaDescription: "दस्तावेज़, मिलान और स्पष्ट संवाद के साथ भुगतान, शुल्क, क्रेडिट और संभावित रिफंड की जांच का व्यावहारिक मार्गदर्शक।", title: "जब भुगतान या शुल्क मेल न खाए: अनुमान के बिना जांच कैसे करें", excerpt: "अस्पष्ट शुल्क या न दिखने वाला क्रेडिट अपने आप में रिफंड का प्रमाण नहीं है, लेकिन दस्तावेज़ों और शर्तों की शांत समीक्षा से सही सवाल सामने आता है।", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "पहले तथ्य इकट्ठा करें", paragraphs: ["इनवॉइस, ऑर्डर, तारीख, राशि, मुद्रा, संदर्भ संख्या और संबंधित शर्तें एक जगह रखें। एक वाक्य में लिखें कि असल अंतर क्या है।", "केवल बैंक स्टेटमेंट पर निर्भर न रहें; उसे ऑर्डर, इनवॉइस या संवाद के साथ मिलाएं।"] }, { title: "एक ही लेन-देन को अलग स्रोतों में मिलाएं", paragraphs: ["वैध रूप से उपलब्ध पेमेंट रिपोर्ट, बिक्री प्लेटफ़ॉर्म रिपोर्ट, इनवॉइस और ग्राहक द्वारा दिए गए स्टेटमेंट की तुलना करें।", "अंतरराष्ट्रीय लेन-देन में मुद्रा, शुल्क, शिपिंग और आंशिक रिफंड को अलग-अलग देखें।"] }, { title: "तथ्य आधारित अनुरोध लिखें", paragraphs: ["तारीख, राशि, संदर्भ, अंतर और सहायक दस्तावेज़ स्पष्ट लिखें। ऐसा दावा न करें जिसे प्रमाणित नहीं कर सकते।", "किसी भी सुधार या रिफंड का निर्णय संबंधित संस्था की शर्तों और जांच पर निर्भर करता है।"] }, { title: "जानकारी सुरक्षित रखें", paragraphs: ["पासवर्ड, OTP या पूरे कार्ड विवरण कभी साझा न करें। बैंक धोखाधड़ी का संदेह हो तो बैंक के आधिकारिक चैनल से तुरंत संपर्क करें।", "कानूनी, कर, बीमा या लेखा संबंधी निर्णयों के लिए योग्य पेशेवर से सलाह लें।"] }], faqs: [{ question: "क्या बैंक स्टेटमेंट पर्याप्त है?", answer: "यह अच्छी शुरुआत है, लेकिन इनवॉइस, ऑर्डर और शर्तों के साथ मिलाने पर तस्वीर अधिक स्पष्ट होती है।" }, { question: "क्या विदेशी प्लेटफ़ॉर्म की समीक्षा हो सकती है?", answer: "यदि आप रिपोर्ट और दस्तावेज़ अधिकृत रूप से दे सकते हैं तो समीक्षा की जा सकती है; नियम और निर्णय प्लेटफ़ॉर्म के पास रहते हैं।" }], cta: { title: "अंतर को व्यवस्थित करके जांचें", text: "हमें संक्षेप में बताएं कि क्या मेल नहीं खा रहा। निःशुल्क प्रारंभिक बातचीत में हम देखेंगे कि संरचित समीक्षा उचित है या नहीं।", whatsappLabel: "WhatsApp पर लिखें", emailLabel: "ईमेल भेजें" },
    },
  },
  fr: {
    locale: "fr",
    service: {
      eyebrow: "Vérification de paiements et de remboursements possibles",
      title: "Vérifier paiements, débits et remboursements possibles avec méthode",
      metaTitle: "Vérification des paiements et remboursements possibles",
      metaDescription: "Navines aide à examiner des débits, paiements, avoirs et remboursements potentiels à partir de documents et de données autorisés.",
      intro: "Lorsqu’un débit, un paiement ou un avoir ne correspond pas, il vaut mieux vérifier les faits que deviner. Navines organise les documents que le client est autorisé à partager, compare les données et prépare les questions et preuves utiles. Aucun remboursement ni résultat n’est garanti.",
      scopeTitle: "Situations pouvant faire l’objet d’une vérification",
      scope: ["Débits en double ou peu clairs, avoirs absents et abonnements récurrents", "Rapprochement de factures, commandes, exports de paiement et relevés autorisés", "Devises, frais, expédition et rapports de marketplace pour une activité internationale", "Documents liés à des fournisseurs, assurances, services publics ou banques, dans le périmètre autorisé par le client", "Rapports Amazon, Walmart et autres plateformes lorsque le client les fournit légalement"],
      processTitle: "Une démarche claire",
      process: [{ title: "Échange initial gratuit", text: "Nous clarifions brièvement l’écart observé et les documents disponibles." }, { title: "Sources et autorisations", text: "Nous travaillons uniquement avec les informations que le client peut partager légitimement." }, { title: "Rapprochement", text: "Montants, dates, références, devises, conditions et avoirs sont comparés de façon traçable." }, { title: "Préparation de la suite", text: "Nous organisons les faits, questions et pièces utiles pour une demande claire auprès du bon interlocuteur." }],
      safeguardsTitle: "Limites et sécurité",
      safeguards: ["Nous ne demandons ni mot de passe, ni code à usage unique, ni numéro de carte complet, ni accès non autorisé.", "Nous ne garantissons pas qu’un montant sera retrouvé, qu’une demande sera acceptée ou qu’un remboursement sera accordé.", "Ce service ne constitue pas un conseil juridique, comptable, fiscal ou financier et ne remplace pas un professionnel compétent.", "Aucune demande inexacte ni pression illégitime: la démarche reste factuelle, documentée et licite."],
      faqTitle: "Questions fréquentes",
      faqs: [{ question: "Accédez-vous à mon compte bancaire ?", answer: "Non. Nous utilisons uniquement les relevés ou exports que le client peut fournir de façon autorisée. Aucun identifiant ni code n’est demandé." }, { question: "Le remboursement est-il garanti ?", answer: "Non. Nous aidons à examiner et documenter l’écart. La décision appartient à l’entreprise, à la banque, à l’organisme ou à la plateforme concernée." }, { question: "Est-ce du conseil juridique ou financier ?", answer: "Non. Le service ajoute une couche d’organisation des données et des pièces; un professionnel qualifié doit intervenir lorsque nécessaire." }],
      ctaTitle: "Vous voulez savoir si une vérification est pertinente ?",
      ctaText: "Indiquez-nous simplement quel fournisseur ou quelle opération ne correspond pas. Le premier échange d’adéquation est gratuit et ne nécessite aucun identifiant.",
      ctaLabel: "Parler sur WhatsApp",
      articleLabel: "Lire le guide de vérification",
      previewTitle: "Vérifier paiements et remboursements possibles",
      previewText: "Organiser les documents et les écarts avant de formuler une demande étayée.",
    },
    article: {
      locale: "fr", slug: "payment-discrepancy-review", metaTitle: "Vérifier paiements, débits et remboursements possibles", metaDescription: "Guide pratique pour examiner débits, paiements, avoirs et remboursements possibles à l’aide de documents, de rapprochements et d’une demande claire.", title: "Débits ou paiements incohérents : les vérifier sans se fier aux suppositions", excerpt: "Un débit peu clair ou un avoir absent ne prouve pas à lui seul un droit au remboursement. Une vérification calme des pièces, références et conditions permet toutefois de poser la bonne question.", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "Commencer par les éléments vérifiables", paragraphs: ["Réunissez facture, commande, date, montant, devise, référence et conditions applicables. Formulez en une phrase ce qui ne correspond pas.", "Un relevé bancaire est utile, mais il gagne à être comparé à la facture, à la commande ou aux échanges concernés."] }, { title: "Rapprocher la même opération", paragraphs: ["Comparez l’opération dans les sources auxquelles vous avez légitimement accès : facture, prestataire de paiement, marketplace ou relevé fourni par vos soins.", "Pour l’international, distinguez devise, frais, livraison et remboursements partiels avant toute conclusion."] }, { title: "Préparer une demande factuelle", paragraphs: ["Indiquez la date, le montant, la référence, l’écart et les justificatifs. Ne formulez pas une demande que vous ne pouvez pas étayer.", "La correction ou le remboursement dépendra des règles et de l’examen de l’organisme concerné."] }, { title: "Protéger les informations", paragraphs: ["Ne communiquez jamais mot de passe, code de vérification ou numéro de carte complet. En cas de suspicion de fraude bancaire, contactez aussi le canal officiel de votre banque.", "Pour les questions juridiques, fiscales, assurantielles ou comptables, faites intervenir le professionnel approprié."] }], faqs: [{ question: "Un relevé bancaire suffit-il ?", answer: "C’est un bon point de départ, mais la facture, la commande et les conditions rendent l’analyse plus fiable." }, { question: "Peut-on examiner des plateformes internationales ?", answer: "Oui, si vous fournissez les rapports et documents de manière autorisée. Les règles et la décision restent celles de la plateforme." }], cta: { title: "Organiser l’écart avant de le signaler", text: "Décrivez-nous brièvement ce qui ne correspond pas. Nous verrons lors d’un premier échange gratuit si une vérification structurée est pertinente.", whatsappLabel: "Écrire sur WhatsApp", emailLabel: "Envoyer un email" },
    },
  },
  zh: {
    locale: "zh",
    service: {
      eyebrow: "付款、扣款与可能退款的核查",
      title: "有依据地核查付款、扣款与可能的退款",
      metaTitle: "付款、扣款与可能退款的核查服务",
      metaDescription: "Navines 基于客户获授权提供的文件和数据，协助梳理并核查扣款、付款、贷项与可能的退款。",
      intro: "当扣款、付款或贷项记录对不上时，猜测并不能解决问题。Navines 可整理客户有权提供的材料、比对数据，并准备清晰的问题与证据。我们不承诺退款，也不保证任何结果。",
      scopeTitle: "可核查的情形示例",
      scope: ["重复或不清晰的扣款、未显示的贷项、持续订阅", "核对发票、订单、支付服务商导出文件及经授权的银行对账单", "跨境业务中的货币、费用、物流和平台报告", "客户有权提供的供应商、保险、公共服务或银行相关文件", "客户合法提供的 Amazon、Walmart 等平台报告"],
      processTitle: "清晰的工作流程",
      process: [{ title: "免费初步沟通", text: "简要了解哪里不一致、目前有哪些文件。" }, { title: "确认资料与授权范围", text: "只处理客户有权分享的信息。" }, { title: "比对与整理", text: "比较金额、日期、参考编号、货币、条款与贷项。" }, { title: "准备下一步", text: "整理事实、问题和附件，为向合适机构提出清晰请求做好准备。" }],
      safeguardsTitle: "重要边界与安全原则",
      safeguards: ["不索要密码、一次性验证码、完整银行卡信息或未经授权的账户访问。", "不保证找到资金、请求获批或获得退款。", "本服务不是法律、会计、税务或金融建议，必要时应咨询合格专业人士。", "不提出虚假主张，也不施加非法压力；沟通应基于事实、记录和合法程序。"],
      faqTitle: "常见问题",
      faqs: [{ question: "你们会登录我的银行账户吗？", answer: "不会。我们只使用客户有权提供的对账单或导出数据，不需要登录凭据或验证码。" }, { question: "能保证退款吗？", answer: "不能。我们协助核查和整理证据，是否更正或退款由相关公司、银行、机构或平台决定。" }, { question: "这是法律或财务建议吗？", answer: "不是。这是一层数据与文件整理支持，不能替代合格专业人士的意见。" }],
      ctaTitle: "想先确认是否值得做一次核查？",
      ctaText: "请简要说明哪家服务商或哪笔交易对不上。首次适配沟通免费，且不需要任何登录信息。",
      ctaLabel: "通过 WhatsApp 沟通",
      articleLabel: "阅读核查指南",
      previewTitle: "核查付款与可能退款",
      previewText: "先整理文件和差异，再提出有依据的询问。",
    },
    article: {
      locale: "zh", slug: "payment-discrepancy-review", metaTitle: "如何核查付款、扣款与可能退款", metaDescription: "通过文件、对账和清晰沟通核查付款、扣款、贷项与可能退款的实用指南。", title: "付款或扣款对不上时：如何不靠猜测进行核查", excerpt: "不明扣款或未显示的贷项本身并不等于一定可以退款，但冷静核对文件、参考编号和条款能帮助你提出真正需要问的问题。", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "先收集可验证的事实", paragraphs: ["把发票、订单、日期、金额、货币、参考编号和适用条款放在一起，并用一句话说明到底哪里不一致。", "银行对账单很重要，但最好和订单、发票或相关沟通记录一起核对。"] }, { title: "比对同一笔交易", paragraphs: ["在你有权使用的来源中比对同一笔交易，例如发票、支付服务商、销售平台报告或你提供的对账单。", "跨境交易应分别查看货币、费用、物流和部分退款，避免过早下结论。"] }, { title: "准备基于事实的请求", paragraphs: ["清楚列出日期、金额、参考编号、差异和支持文件，不提出无法证明的要求。", "是否更正或退款，取决于相关机构的规则和核查结果。"] }, { title: "保护信息并适时求助专业人士", paragraphs: ["不要分享密码、验证码或完整银行卡信息。如怀疑银行欺诈，也应立即联系银行的官方渠道。", "遇到法律、税务、保险或会计问题，请咨询相应专业人士。"] }], faqs: [{ question: "只看银行对账单够吗？", answer: "它是很好的起点，但与发票、订单和条款一起看，情况会更清楚。" }, { question: "可以核查海外平台吗？", answer: "如果你能合法提供报告和文件，可以评估；但平台的规则和决定仍由平台作出。" }], cta: { title: "先整理差异，再进行核查", text: "简要告诉我们哪里对不上。我们会在免费初步沟通中判断是否适合做结构化核查。", whatsappLabel: "通过 WhatsApp 联系", emailLabel: "发送邮件" },
    },
  },
};
