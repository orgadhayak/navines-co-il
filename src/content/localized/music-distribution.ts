import type { PublicLocale } from "@/i18n/locales";
import type { LocalizedArticleContent } from "./types";

export type LocalizedMusicContent = {
  locale: PublicLocale;
  service: {
    eyebrow: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    intro: string;
    workTitle: string;
    work: string[];
    valueTitle: string;
    value: string[];
    processTitle: string;
    process: { title: string; text: string }[];
    caseTitle: string;
    caseText: string;
    caseNote: string;
    profilesLabel: string;
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

export const localizedMusicContent: Record<PublicLocale, LocalizedMusicContent> = {
  de: {
    locale: "de",
    service: {
      eyebrow: "Musikvertrieb und Künstlerpräsenz",
      title: "Musik veröffentlichen und die digitale Künstlerpräsenz professionell aufbauen",
      metaTitle: "Musikvertrieb für Spotify, Apple Music und YouTube",
      metaDescription: "Unterstützung für Künstler bei Distributorwahl, Metadaten, Rechten, Spotify, Apple Music, YouTube, offiziellen Profilen, Releaseplanung und organischer Sichtbarkeit.",
      intro: "Ein fertiger Song ist noch kein sauberer Release. Wir helfen Künstlern, Audio, Artwork, Credits, Rechte, Künstlerprofile und Zeitplan zu ordnen, einen geeigneten Distributor zu bewerten und die Veröffentlichung über Spotify, Apple Music, YouTube Music, Amazon Music und weitere unterstützte Plattformen vorzubereiten.",
      workTitle: "Was wir praktisch begleiten",
      work: ["Katalog, Rechteinhaber, Versionen und vorhandene Profile erfassen", "Master, Artwork, Titel, Sprache, Credits und Release-Metadaten vorbereiten", "Distributoren nach Kosten, Provision, Auszahlung, Support und Plattformabdeckung vergleichen", "Künstlerprofile, offizielle Kanäle, Smart Links, Inhalte und verfügbare Analysen organisieren"],
      valueTitle: "Warum diese Vorbereitung wichtig ist",
      value: ["Konsistente Metadaten verringern das Risiko falscher oder doppelter Künstlerseiten.", "Ein realistischer Vorlauf schafft Zeit für Prüfung, Pitching und Release-Inhalte.", "Klare Rechte und Credits reduzieren spätere Konflikte und Korrekturen.", "Distribution macht Musik verfügbar; Reichweite, Playlists, Streams und Einnahmen sind nicht garantiert."],
      processTitle: "Vom Katalog zum veröffentlichten Release",
      process: [{ title: "Bestand prüfen", text: "Wir erfassen Songs, Rechte, Profile und offene Probleme." }, { title: "Release vorbereiten", text: "Audio, Artwork, Credits, Metadaten und Termin werden geordnet." }, { title: "Vertrieb einrichten", text: "Wir wählen einen passenden Weg und begleiten die Einreichung." }, { title: "Prüfen und entwickeln", text: "Nach dem Start prüfen wir Profile, Links, Inhalte und verfügbare Daten." }],
      caseTitle: "Das Raneno-Projekt als öffentliches Praxisbeispiel",
      caseText: "Navines verwaltet die digitale Präsenz des Raneno-Projekts. Der öffentliche Katalog ist auf Spotify, Apple Music, YouTube Music, YouTube und Shazam sichtbar und zeigt, wie Releases, Profile und Inhalte über mehrere Plattformen organisiert werden können.",
      caseNote: "Musik und Profile gehören dem Projekt und seinen Rechteinhabern. Das Beispiel ist keine Garantie für Streams, Einnahmen oder Playlist-Platzierungen.",
      profilesLabel: "Öffentliche Künstlerprofile",
      faqTitle: "Häufige Fragen",
      faqs: [{ question: "Veröffentlicht Navines direkt bei Spotify?", answer: "In der Regel gelangt Musik über einen digitalen Distributor zu Streamingdiensten. Wir bereiten den Release vor, helfen bei der Auswahl und begleiten Einreichung und Prüfung; Distributor und Plattform entscheiden über die tatsächliche Annahme." }, { question: "Können Streams oder Einnahmen garantiert werden?", answer: "Nein. Ein professioneller Prozess verbessert Ordnung und Sichtbarkeit, garantiert aber keine Streams, Playlists, Reichweite oder Einnahmen." }, { question: "Kann ein bestehender Katalog bereinigt werden?", answer: "Ja. Wir können Profile, Links, Credits, Metadaten und die nächste Release-Struktur prüfen und passende Korrekturwege identifizieren." }],
      ctaTitle: "Ist ein Song fertig oder braucht Ihr Katalog Ordnung?",
      ctaText: "Senden Sie uns kurz, was bereits vorhanden ist: Musik, Artwork, Künstlername, gewünschter Termin und bestehende Profile. Wir klären die nächsten Schritte.",
      ctaLabel: "Über WhatsApp sprechen",
      articleLabel: "Leitfaden zum Musikvertrieb",
      previewTitle: "Musikvertrieb und Künstlerprofile",
      previewText: "Releasevorbereitung, Distributorwahl, Metadaten, Rechte, offizielle Profile und organische Sichtbarkeit für Künstler.",
    },
    article: {
      locale: "de", slug: "music-distribution-for-artists", metaTitle: "Musik auf Spotify, Apple Music und YouTube veröffentlichen", metaDescription: "Praxisleitfaden für Künstler zu Distributorwahl, Master, Artwork, Metadaten, Rechten, Künstlerprofilen, Releaseplanung und Promotion.", title: "Wie Künstler Musik sauber auf Spotify, Apple Music und YouTube veröffentlichen", excerpt: "Gute Distribution beginnt vor dem Upload: mit Rechten, Metadaten, Profilen und einem realistischen Releaseplan.", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "Distribution und Promotion sind zwei Aufgaben", paragraphs: ["Ein Distributor liefert Musik und Metadaten an unterstützte Plattformen. Er baut jedoch nicht automatisch Marke, Community oder Nachfrage auf.", "Promotion verbindet den Release mit Inhalten, Suche, Social Media, Kooperationen und klaren Links."] }, { title: "Vor dem Upload", paragraphs: ["Master, Artwork, Titel, Version, Sprache, Credits, Rechte und Künstlerprofile sollten vor der Einreichung geprüft werden.", "Besonders wichtig sind schriftliche Absprachen zu Beteiligungen und die Klärung von Samples oder lizenzierten Bestandteilen."] }, { title: "Den Distributor passend wählen", paragraphs: ["Vergleichen Sie Gebühren, Provision, Auszahlung, Plattformen, Support, Content ID und den Ablauf eines späteren Wechsels.", "Es gibt nicht den besten Distributor für alle. Die richtige Wahl hängt von Katalog, Veröffentlichungsrhythmus und Arbeitsmodell ab."] }, { title: "Nach dem Release", paragraphs: ["Prüfen Sie Profilzuordnung, Credits, Artwork und Links. Beantragen Sie verfügbare Artist-Tools und planen Sie kontinuierliche Inhalte.", "Das Raneno-Projekt wird von Navines verwaltet und dient als öffentliches Praxisbeispiel, nicht als Ergebnisversprechen."] }], faqs: [{ question: "Wie früh sollte Musik eingereicht werden?", answer: "Die Frist hängt vom Distributor ab. Ein ausreichender Vorlauf ermöglicht Prüfung, Korrekturen und Releasevorbereitung." }, { question: "Kann man den Distributor wechseln?", answer: "Oft ja, aber Identifikatoren, Metadaten und Zeitplan müssen sorgfältig behandelt werden, um Dopplungen und Unterbrechungen zu vermeiden." }], cta: { title: "Einen Release professionell vorbereiten", text: "Teilen Sie uns mit, was fertig ist und welche Plattformen oder Profile bereits bestehen.", whatsappLabel: "WhatsApp schreiben", emailLabel: "E-Mail senden" },
    },
  },
  jp: {
    locale: "jp",
    service: {
      eyebrow: "音楽配信とアーティスト運用",
      title: "音楽配信と公式アーティストプレゼンスの構築支援",
      metaTitle: "Spotify・Apple Music・YouTube向け音楽配信支援",
      metaDescription: "アーティスト向けに、配信会社の選定、メタデータ、権利、公式プロフィール、リリース計画、オーガニックな発信を支援します。",
      intro: "完成した楽曲を正しく届けるには、音源だけでなく、アートワーク、クレジット、権利、アーティスト名、既存プロフィール、公開日を一つの流れで管理する必要があります。Spotify、Apple Music、YouTube Music、Amazon Musicなどへの配信準備と公開後の確認を支援します。",
      workTitle: "支援できる内容",
      work: ["カタログ、権利者、楽曲バージョン、既存プロフィールの整理", "マスター音源、ジャケット、表記、言語、クレジット、メタデータの準備", "料金、手数料、支払、サポート、配信先を比較したディストリビューター選定", "公式チャンネル、アーティストツール、スマートリンク、コンテンツ、分析の整理"],
      valueTitle: "準備が重要な理由",
      value: ["一貫した情報は、別アーティストへの誤配信や重複ページのリスクを減らします。", "余裕のあるスケジュールは、確認、修正、告知準備に役立ちます。", "権利とクレジットを先に整理すると、公開後の問題を減らせます。", "配信は公開を可能にしますが、再生数、収益、プレイリスト採用は保証できません。"],
      processTitle: "楽曲から公開まで",
      process: [{ title: "現状確認", text: "楽曲、権利、プロフィール、既存の問題を整理します。" }, { title: "配信準備", text: "音源、画像、クレジット、情報、公開日を整えます。" }, { title: "配信設定", text: "目的に合う方法を選び、入稿を支援します。" }, { title: "公開後の確認", text: "プロフィール、リンク、表示、利用可能なデータを確認します。" }],
      caseTitle: "公開事例：Raneno Project",
      caseText: "NavinesはRaneno Projectのデジタルプレゼンスを管理しています。Spotify、Apple Music、YouTube Music、YouTube、Shazamの公開プロフィールを、複数プラットフォーム運用の実例として紹介します。",
      caseNote: "音楽とプロフィールはプロジェクトおよび権利者に帰属します。再生数、収益、プレイリスト採用を保証する事例ではありません。",
      profilesLabel: "公開アーティストプロフィール",
      faqTitle: "よくある質問",
      faqs: [{ question: "Spotifyへ直接配信しますか？", answer: "通常はデジタルディストリビューターを通じて配信します。私たちは準備、選定、入稿、確認を支援しますが、受理条件は配信会社と各プラットフォームが決めます。" }, { question: "再生数や収益を保証できますか？", answer: "保証できません。プロセスと見え方は改善できますが、再生、収益、露出、プレイリスト採用は多くの要因に左右されます。" }, { question: "既存カタログも整理できますか？", answer: "はい。重複プロフィール、リンク、クレジット、メタデータ、次回リリースの進め方を確認できます。" }],
      ctaTitle: "公開予定の楽曲や整理したいカタログがありますか",
      ctaText: "楽曲、ジャケット、アーティスト名、希望日、既存プロフィールなど、現在の状態を短くお知らせください。",
      ctaLabel: "WhatsAppで相談",
      articleLabel: "音楽配信ガイドを読む",
      previewTitle: "音楽配信とアーティスト運用",
      previewText: "配信準備、ディストリビューター選定、権利、公式プロフィール、コンテンツ運用を一つの流れで支援します。",
    },
    article: { locale: "jp", slug: "music-distribution-for-artists", metaTitle: "Spotify・Apple Music・YouTubeへ音楽を配信する方法", metaDescription: "アーティスト向けに、音源、ジャケット、メタデータ、権利、配信会社、公式プロフィール、公開後の運用を解説します。", title: "Spotify、Apple Music、YouTubeへ音楽を正しく配信するための実務ガイド", excerpt: "音楽配信はアップロードだけではありません。権利、表記、プロフィール、公開計画を先に整えることが重要です。", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "配信と宣伝を分けて考える", paragraphs: ["配信会社は楽曲と情報を各サービスへ届けますが、ファンや需要を自動的に作るわけではありません。", "宣伝には、コンテンツ、検索、SNS、コミュニティ、分かりやすいリンクが必要です。"] }, { title: "入稿前に確認するもの", paragraphs: ["音源、画像、曲名、バージョン、言語、クレジット、権利、既存プロフィールを確認します。", "共同制作、サンプル、ライセンス素材は、公開前に合意と利用条件を整理する必要があります。"] }, { title: "配信会社を選ぶ", paragraphs: ["料金、手数料、支払、配信先、サポート、Content ID、移行条件を比較します。", "すべてのアーティストに共通する一社はなく、カタログと活動計画に合わせて選びます。"] }, { title: "公開後の運用", paragraphs: ["アーティストページ、クレジット、ジャケット、リンクを確認し、利用可能な公式ツールを申請します。", "Raneno ProjectはNavinesが管理する公開事例であり、成果保証ではありません。"] }], faqs: [{ question: "どのくらい前に入稿すべきですか？", answer: "必要期間は配信会社により異なります。確認と修正の時間を確保できる余裕ある計画が安全です。" }, { question: "配信会社を変更できますか？", answer: "可能な場合がありますが、識別子、メタデータ、公開時期を慎重に管理する必要があります。" }], cta: { title: "次のリリースを整理する", text: "現在の素材とプロフィールをお知らせください。必要な準備を確認します。", whatsappLabel: "WhatsAppで相談", emailLabel: "メールを送る" } },
  },
  ar: {
    locale: "ar",
    service: {
      eyebrow: "توزيع الموسيقى وإدارة حضور الفنان",
      title: "توزيع الموسيقى وبناء حضور رقمي رسمي للفنانين",
      metaTitle: "توزيع الموسيقى على Spotify وApple Music وYouTube",
      metaDescription: "خدمة للفنانين تشمل اختيار الموزع، البيانات الوصفية، الحقوق، الصفحات الرسمية، خطة الإصدار والتسويق العضوي للموسيقى.",
      intro: "الأغنية الجاهزة تحتاج إلى أكثر من رفع ملف. ننظم الصوت والغلاف والأسماء والاعتمادات والحقوق والصفحات الحالية وموعد الإصدار، ونساعد في تقييم موزع مناسب والاستعداد للنشر على Spotify وApple Music وYouTube Music وAmazon Music وغيرها من المنصات المدعومة.",
      workTitle: "ما الذي نساعد فيه عملياً",
      work: ["حصر الكتالوج وأصحاب الحقوق والنسخ والصفحات الموجودة", "إعداد ملف الصوت والغلاف والعناوين واللغة والاعتمادات والبيانات الوصفية", "مقارنة الموزعين حسب الرسوم والعمولة والدفع والدعم والتغطية", "تنظيم القنوات الرسمية وروابط الاستماع والمحتوى والبيانات المتاحة"],
      valueTitle: "لماذا يحتاج الإصدار إلى ترتيب",
      value: ["البيانات المتسقة تقلل خطر ظهور الأغنية تحت فنان آخر أو إنشاء صفحة مكررة.", "الوقت الكافي يسمح بالمراجعة والتصحيح وتجهيز محتوى الإطلاق.", "توضيح الحقوق والاعتمادات مبكراً يقلل النزاعات والتعديلات لاحقاً.", "التوزيع يجعل الموسيقى متاحة، لكنه لا يضمن الاستماع أو الدخل أو قوائم التشغيل."],
      processTitle: "من الكتالوج إلى الإصدار",
      process: [{ title: "مراجعة الوضع", text: "نراجع الأعمال والحقوق والصفحات والمشكلات الحالية." }, { title: "إعداد الإصدار", text: "ننظم الصوت والغلاف والاعتمادات والموعد والبيانات." }, { title: "اختيار مسار التوزيع", text: "نقارن الخيارات ونرافق عملية التقديم." }, { title: "المراجعة والتطوير", text: "نتحقق من الصفحات والروابط والمحتوى والبيانات بعد النشر." }],
      caseTitle: "مشروع رانينو كمثال عملي علني",
      caseText: "تدير نביא נס ישראל בע״מ الحضور الرقمي لمشروع رانينو. يظهر الكتالوج العام على Spotify وApple Music وYouTube Music وYouTube وShazam كمثال على تنظيم الإصدارات والصفحات والمحتوى بين المنصات.",
      caseNote: "الموسيقى والصفحات تعود إلى المشروع وأصحاب الحقوق. المثال لا يضمن الاستماع أو الدخل أو القبول في قوائم التشغيل.",
      profilesLabel: "صفحات الفنان العامة",
      faqTitle: "أسئلة شائعة",
      faqs: [{ question: "هل ترفعون الموسيقى مباشرة إلى Spotify؟", answer: "غالباً تصل الموسيقى عبر موزع رقمي. نساعد في التجهيز والاختيار والتقديم والمراجعة، بينما يحدد الموزع والمنصة شروط القبول الفعلية." }, { question: "هل تضمنون الاستماع أو الأرباح؟", answer: "لا. يمكن تحسين الترتيب والحضور والمحتوى، لكن لا يمكن ضمان الاستماع أو الدخل أو الانتشار أو قوائم التشغيل." }, { question: "هل يمكن ترتيب كتالوج موجود؟", answer: "نعم. يمكن مراجعة الصفحات المكررة والروابط والاعتمادات والبيانات وخطة الإصدار التالي." }],
      ctaTitle: "هل لديكم أغنية جاهزة أو كتالوج يحتاج إلى ترتيب؟",
      ctaText: "أرسلوا ما هو جاهز: الأغنية والغلاف واسم الفنان والموعد المطلوب والصفحات الحالية، وسنوضح الخطوات المناسبة.",
      ctaLabel: "تواصل عبر WhatsApp",
      articleLabel: "قراءة دليل توزيع الموسيقى",
      previewTitle: "توزيع الموسيقى وحضور الفنان",
      previewText: "إعداد الإصدار، اختيار الموزع، الحقوق، الصفحات الرسمية والمحتوى العضوي للفنانين.",
    },
    article: { locale: "ar", slug: "music-distribution-for-artists", metaTitle: "كيفية توزيع الموسيقى على Spotify وApple Music وYouTube", metaDescription: "دليل للفنانين حول الموزع والملف الصوتي والغلاف والبيانات والحقوق والصفحات الرسمية وخطة الإصدار.", title: "كيف توزع الموسيقى بشكل منظم على Spotify وApple Music وYouTube", excerpt: "التوزيع الجيد يبدأ قبل رفع الملف: بالحقوق والبيانات والصفحات وخطة إصدار واقعية.", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "التوزيع ليس هو التسويق", paragraphs: ["الموزع يرسل الموسيقى والبيانات إلى المنصات المدعومة، لكنه لا يبني الجمهور تلقائياً.", "التسويق يحتاج إلى محتوى وبحث وشبكات اجتماعية ومجتمع وروابط واضحة."] }, { title: "ما الذي يجهز قبل الرفع", paragraphs: ["راجعوا الصوت والغلاف والعنوان والنسخة واللغة والاعتمادات والحقوق والصفحات الحالية.", "يجب توثيق الاتفاقات بين المشاركين وفحص العينات والمواد المرخصة قبل النشر."] }, { title: "اختيار الموزع", paragraphs: ["قارنوا الرسوم والعمولة والدفع والمنصات والدعم وContent ID وشروط الانتقال.", "لا يوجد موزع واحد مناسب للجميع؛ القرار يعتمد على الكتالوج وخطة العمل."] }, { title: "بعد الإصدار", paragraphs: ["تحققوا من صفحة الفنان والاعتمادات والغلاف والروابط واطلبوا أدوات الفنان المتاحة.", "مشروع رانينو مثال عام تديره Navines، وليس وعداً بنتيجة تجارية."] }], faqs: [{ question: "متى يجب تقديم الأغنية؟", answer: "تختلف المدة حسب الموزع. اتركوا وقتاً للمراجعة والتصحيح وتجهيز الإطلاق." }, { question: "هل يمكن تغيير الموزع؟", answer: "يمكن أحياناً، لكن يجب إدارة المعرفات والبيانات والتوقيت بعناية لتقليل التكرار أو الانقطاع." }], cta: { title: "جهزوا الإصدار القادم", text: "أرسلوا ما لديكم الآن وسنراجع ما ينقص قبل التوزيع.", whatsappLabel: "تواصل عبر WhatsApp", emailLabel: "إرسال بريد" } },
  },
  hi: {
    locale: "hi",
    service: {
      eyebrow: "संगीत वितरण और कलाकार उपस्थिति",
      title: "संगीत वितरण और कलाकार की आधिकारिक डिजिटल पहचान बनाना",
      metaTitle: "Spotify, Apple Music और YouTube पर संगीत वितरण",
      metaDescription: "कलाकारों के लिए distributor चयन, metadata, rights, official profiles, release planning और organic promotion सहायता।",
      intro: "तैयार गाना केवल upload करने से व्यवस्थित release नहीं बनता। हम audio, artwork, credits, rights, artist name, मौजूदा profiles और release date को व्यवस्थित करते हैं, distributor विकल्प समझने और Spotify, Apple Music, YouTube Music, Amazon Music तथा समर्थित platforms के लिए तैयारी में मदद करते हैं।",
      workTitle: "हम किस काम में सहायता करते हैं",
      work: ["catalogue, rights holders, versions और मौजूदा profiles का audit", "master, artwork, titles, language, credits और metadata की तैयारी", "fees, commission, payouts, support और destinations के आधार पर distributor comparison", "official channels, artist tools, smart links, content और available analytics की व्यवस्था"],
      valueTitle: "सही तैयारी क्यों जरूरी है",
      value: ["सुसंगत metadata गलत या duplicate artist pages का जोखिम घटाता है।", "पर्याप्त समय review, correction और launch content के लिए जगह देता है।", "rights और credits पहले स्पष्ट करने से बाद की समस्याएँ कम होती हैं।", "Distribution उपलब्धता देता है; streams, income, playlists या reach की guarantee नहीं देता।"],
      processTitle: "Catalogue से release तक",
      process: [{ title: "स्थिति समझना", text: "Songs, rights, profiles और मौजूदा समस्याएँ map करते हैं।" }, { title: "Release तैयार करना", text: "Audio, artwork, credits, metadata और date व्यवस्थित करते हैं।" }, { title: "Distribution setup", text: "उपयुक्त रास्ता चुनकर submission में सहायता करते हैं।" }, { title: "Review और growth", text: "Release के बाद profiles, links, content और data देखते हैं।" }],
      caseTitle: "Raneno Project: सार्वजनिक उदाहरण",
      caseText: "Navines, Raneno Project की digital presence manage करती है। Spotify, Apple Music, YouTube Music, YouTube और Shazam पर उपलब्ध public catalogue multi-platform release management का व्यावहारिक उदाहरण है।",
      caseNote: "Music और profiles project व rights holders के हैं। यह streams, income या playlist placement की guarantee नहीं है।",
      profilesLabel: "सार्वजनिक artist profiles",
      faqTitle: "अक्सर पूछे जाने वाले सवाल",
      faqs: [{ question: "क्या Navines सीधे Spotify पर upload करती है?", answer: "आमतौर पर music digital distributor के जरिए platforms तक पहुँचता है। हम preparation, selection, submission और review में मदद करते हैं; acceptance के नियम distributor और platform तय करते हैं।" }, { question: "क्या streams या income की guarantee है?", answer: "नहीं। Process, visibility और content सुधारे जा सकते हैं, लेकिन streams, income, playlists या reach की guarantee नहीं दी जा सकती।" }, { question: "क्या existing catalogue ठीक किया जा सकता है?", answer: "हाँ। Duplicate profiles, links, credits, metadata और अगले release की structure की समीक्षा की जा सकती है।" }],
      ctaTitle: "गाना तैयार है या catalogue को व्यवस्थित करना है?",
      ctaText: "जो तैयार है उसकी जानकारी भेजें: song, artwork, artist name, target date और existing profiles। हम अगले कदम स्पष्ट करेंगे।",
      ctaLabel: "WhatsApp पर बात करें",
      articleLabel: "Music distribution guide पढ़ें",
      previewTitle: "संगीत वितरण और artist presence",
      previewText: "Release preparation, distributor selection, rights, official profiles और organic promotion सहायता।",
    },
    article: { locale: "hi", slug: "music-distribution-for-artists", metaTitle: "Spotify, Apple Music और YouTube पर music release कैसे करें", metaDescription: "Artists के लिए distributor, master, artwork, metadata, rights, official profiles और release planning guide।", title: "Spotify, Apple Music और YouTube पर संगीत सही तरीके से कैसे वितरित करें", excerpt: "अच्छा distribution upload से पहले शुरू होता है: rights, metadata, profiles और realistic release plan से।", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "Distribution और promotion अलग हैं", paragraphs: ["Distributor music और metadata को supported platforms तक पहुँचाता है, लेकिन audience अपने आप नहीं बनाता।", "Promotion के लिए content, search, social media, community और clear links चाहिए।"] }, { title: "Upload से पहले", paragraphs: ["Master, artwork, title, version, language, credits, rights और existing artist profiles जाँचें।", "Collaborators, samples और licensed material के agreements release से पहले स्पष्ट होने चाहिए।"] }, { title: "Distributor का चयन", paragraphs: ["Fees, commission, payouts, platforms, support, Content ID और migration rules की तुलना करें।", "हर artist के लिए एक ही विकल्प सही नहीं होता; catalogue और release rhythm के अनुसार चुनें।"] }, { title: "Release के बाद", paragraphs: ["Artist mapping, credits, artwork और links जाँचें तथा available artist tools claim करें।", "Raneno Project, Navines द्वारा managed public example है, परिणाम की guarantee नहीं।"] }], faqs: [{ question: "कितने समय पहले submit करना चाहिए?", answer: "समय distributor के अनुसार बदलता है। Review और corrections के लिए पर्याप्त समय रखें।" }, { question: "क्या distributor बदला जा सकता है?", answer: "कई मामलों में हाँ, लेकिन identifiers, metadata और timing सावधानी से manage करने चाहिए।" }], cta: { title: "अगला release व्यवस्थित करें", text: "अपनी तैयार सामग्री और existing profiles भेजें। हम missing steps समझने में मदद करेंगे।", whatsappLabel: "WhatsApp पर बात करें", emailLabel: "ईमेल भेजें" } },
  },
  fr: {
    locale: "fr",
    service: {
      eyebrow: "Distribution musicale et présence artiste",
      title: "Distribuer sa musique et construire une présence numérique d’artiste cohérente",
      metaTitle: "Distribution musicale Spotify, Apple Music et YouTube",
      metaDescription: "Accompagnement des artistes pour le choix du distributeur, les métadonnées, les droits, les profils officiels, le calendrier de sortie et la visibilité organique.",
      intro: "Un titre finalisé ne devient pas automatiquement une sortie bien organisée. Nous aidons à préparer l’audio, la pochette, les crédits, les droits, les profils existants et le calendrier, puis à évaluer un distributeur adapté pour Spotify, Apple Music, YouTube Music, Amazon Music et les autres plateformes prises en charge.",
      workTitle: "Ce que nous accompagnons",
      work: ["Audit du catalogue, des ayants droit, des versions et des profils existants", "Préparation du master, de la pochette, des titres, langues, crédits et métadonnées", "Comparaison des distributeurs selon coûts, commission, paiements, support et destinations", "Organisation des chaînes officielles, outils artistes, smart links, contenus et données disponibles"],
      valueTitle: "Pourquoi cette préparation compte",
      value: ["Des métadonnées cohérentes réduisent le risque de mauvais rattachement ou de page artiste en double.", "Un calendrier réaliste laisse le temps de vérifier, corriger et préparer les contenus.", "Des droits et crédits clairs limitent les litiges et corrections après publication.", "La distribution rend la musique disponible, sans garantir écoutes, revenus, portée ni playlist."],
      processTitle: "Du catalogue à la sortie",
      process: [{ title: "État des lieux", text: "Nous recensons titres, droits, profils et problèmes existants." }, { title: "Préparation", text: "Nous organisons audio, visuels, crédits, métadonnées et date." }, { title: "Distribution", text: "Nous comparons les options et accompagnons la soumission." }, { title: "Contrôle et développement", text: "Après sortie, nous vérifions profils, liens, contenus et données disponibles." }],
      caseTitle: "Le projet Raneno comme exemple public",
      caseText: "Navines gère la présence numérique du projet Raneno. Son catalogue public sur Spotify, Apple Music, YouTube Music, YouTube et Shazam illustre l’organisation de sorties, profils et contenus sur plusieurs plateformes.",
      caseNote: "La musique et les profils appartiennent au projet et à ses ayants droit. Cet exemple ne garantit ni écoutes, ni revenus, ni placement en playlist.",
      profilesLabel: "Profils artistes publics",
      faqTitle: "Questions fréquentes",
      faqs: [{ question: "Publiez-vous directement sur Spotify ?", answer: "La musique passe généralement par un distributeur numérique. Nous préparons, comparons, accompagnons la soumission et contrôlons le résultat, tandis que le distributeur et la plateforme fixent leurs conditions." }, { question: "Pouvez-vous garantir des écoutes ou des revenus ?", answer: "Non. Une démarche professionnelle améliore l’organisation et la visibilité, mais ne garantit ni écoutes, ni revenus, ni playlists, ni portée." }, { question: "Pouvez-vous remettre en ordre un catalogue existant ?", answer: "Oui. Nous pouvons examiner profils en double, liens, crédits, métadonnées et structure de la prochaine sortie." }],
      ctaTitle: "Un titre est prêt ou votre catalogue doit être remis en ordre ?",
      ctaText: "Envoyez-nous ce qui existe déjà : titre, pochette, nom d’artiste, date souhaitée et profils actuels.",
      ctaLabel: "Écrire sur WhatsApp",
      articleLabel: "Lire le guide de distribution",
      previewTitle: "Distribution musicale et présence artiste",
      previewText: "Préparation, choix du distributeur, droits, profils officiels et visibilité organique pour les artistes.",
    },
    article: { locale: "fr", slug: "music-distribution-for-artists", metaTitle: "Distribuer sa musique sur Spotify, Apple Music et YouTube", metaDescription: "Guide pour préparer un master, une pochette, les métadonnées, les droits, le distributeur, les profils artistes et le lancement.", title: "Comment distribuer sa musique correctement sur Spotify, Apple Music et YouTube", excerpt: "Une bonne distribution commence avant l’envoi : droits, métadonnées, profils et calendrier doivent être cohérents.", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "Distribution et promotion ne sont pas la même chose", paragraphs: ["Le distributeur livre la musique et les données aux plateformes prises en charge, sans créer automatiquement une audience.", "La promotion relie la sortie aux contenus, à la recherche, aux réseaux sociaux, à la communauté et à des liens clairs."] }, { title: "Avant la soumission", paragraphs: ["Vérifiez master, pochette, titre, version, langue, crédits, droits et profils existants.", "Les accords entre collaborateurs, samples et éléments sous licence doivent être clarifiés avant publication."] }, { title: "Choisir un distributeur", paragraphs: ["Comparez frais, commission, paiements, destinations, support, Content ID et conditions de migration.", "Le bon choix dépend du catalogue, du rythme de sortie et du modèle de travail de l’artiste."] }, { title: "Après la sortie", paragraphs: ["Contrôlez le rattachement artiste, les crédits, la pochette et les liens, puis demandez les outils artistes disponibles.", "Le projet Raneno est un exemple public géré par Navines, pas une promesse de résultat."] }], faqs: [{ question: "Combien de temps avant la sortie faut-il soumettre ?", answer: "Le délai dépend du distributeur. Prévoyez assez de temps pour vérifier, corriger et préparer le lancement." }, { question: "Peut-on changer de distributeur ?", answer: "Souvent oui, mais identifiants, métadonnées et calendrier doivent être gérés avec soin." }], cta: { title: "Préparer la prochaine sortie", text: "Présentez-nous les éléments disponibles et les profils existants afin d’identifier les étapes manquantes.", whatsappLabel: "Écrire sur WhatsApp", emailLabel: "Envoyer un email" } },
  },
  zh: {
    locale: "zh",
    service: {
      eyebrow: "音乐发行与艺人数字形象",
      title: "音乐发行与官方艺人数字形象管理",
      metaTitle: "面向 Spotify、Apple Music 与 YouTube 的音乐发行服务",
      metaDescription: "协助音乐人选择发行商、整理元数据与版权、建立官方艺人主页、规划发行并开展自然内容推广。",
      intro: "成品歌曲并不等于完整发行。我们协助整理音频、封面、署名、版权、艺人名称、已有主页和发布日期，并评估适合的数字发行渠道，为 Spotify、Apple Music、YouTube Music、Amazon Music 及发行商支持的平台做好准备。",
      workTitle: "我们可以协助的工作",
      work: ["梳理曲库、权利人、版本和已有艺人主页", "准备母带、封面、标题、语言、署名与发行元数据", "根据费用、分成、结算、支持和覆盖平台比较发行商", "整理官方频道、艺人工具、智能链接、内容与可用数据"],
      valueTitle: "为什么发行前的整理很重要",
      value: ["一致的元数据可降低歌曲进入错误艺人页或生成重复主页的风险。", "合理的提前量便于审核、修改和准备上线内容。", "提前明确版权与署名可减少上线后的争议与更正。", "发行让音乐上线，但不保证播放量、收入、曝光或歌单收录。"],
      processTitle: "从曲库到正式上线",
      process: [{ title: "现状梳理", text: "确认歌曲、版权、主页和现有问题。" }, { title: "发行准备", text: "整理音频、封面、署名、元数据和日期。" }, { title: "发行设置", text: "比较合适方案并协助提交。" }, { title: "上线检查", text: "核对主页、链接、内容和平台提供的数据。" }],
      caseTitle: "Raneno Project 公开案例",
      caseText: "Navines 负责 Raneno Project 的数字形象管理。该项目在 Spotify、Apple Music、YouTube Music、YouTube 与 Shazam 的公开内容展示了多平台发行、主页和内容的组织方式。",
      caseNote: "音乐与主页属于项目及相关权利人。本案例不保证播放量、收入或歌单收录。",
      profilesLabel: "公开艺人主页",
      faqTitle: "常见问题",
      faqs: [{ question: "Navines 会直接上传到 Spotify 吗？", answer: "音乐通常通过数字发行商进入流媒体平台。我们协助准备、比较、提交和核对，实际接收规则由发行商和平台决定。" }, { question: "能保证播放量或收入吗？", answer: "不能。专业流程可以改善整理和展示，但不能保证播放量、收入、曝光或歌单收录。" }, { question: "可以整理已经上线的曲库吗？", answer: "可以。我们可检查重复主页、链接、署名、元数据以及下一次发行的流程。" }],
      ctaTitle: "已有成品歌曲，或需要整理现有曲库？",
      ctaText: "请告诉我们现有素材：歌曲、封面、艺人名称、计划日期和已有主页，我们会梳理下一步。",
      ctaLabel: "通过 WhatsApp 联系",
      articleLabel: "阅读音乐发行指南",
      previewTitle: "音乐发行与艺人数字形象",
      previewText: "为音乐人提供发行准备、发行商选择、版权、官方主页和自然内容推广支持。",
    },
    article: { locale: "zh", slug: "music-distribution-for-artists", metaTitle: "如何在 Spotify、Apple Music 与 YouTube 发行音乐", metaDescription: "音乐人实用指南：母带、封面、元数据、版权、发行商、官方艺人主页与上线规划。", title: "如何规范地将音乐发行到 Spotify、Apple Music 与 YouTube", excerpt: "好的发行从上传前开始：先整理版权、元数据、艺人主页与可执行的上线计划。", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "发行不等于推广", paragraphs: ["发行商负责把音乐和元数据送到支持的平台，但不会自动建立受众。", "推广需要内容、搜索、社交媒体、社群和清晰的收听链接。"] }, { title: "提交前要准备什么", paragraphs: ["检查母带、封面、曲名、版本、语言、署名、版权和已有艺人主页。", "合作分成、采样和授权素材应在上线前书面确认。"] }, { title: "选择发行商", paragraphs: ["比较费用、分成、结算、平台覆盖、支持、Content ID 与迁移条件。", "没有适合所有艺人的唯一方案，应根据曲库和发行节奏选择。"] }, { title: "上线之后", paragraphs: ["核对艺人归属、署名、封面和链接，并申请可用的艺人工具。", "Raneno Project 是由 Navines 管理的公开案例，不代表结果承诺。"] }], faqs: [{ question: "应提前多久提交？", answer: "时间因发行商而异。应为审核、修改和上线准备预留足够时间。" }, { question: "可以更换发行商吗？", answer: "很多情况下可以，但需要谨慎管理标识符、元数据和时间安排。" }], cta: { title: "规划下一次发行", text: "请发送现有素材和主页信息，我们会帮助识别发行前缺少的环节。", whatsappLabel: "通过 WhatsApp 联系", emailLabel: "发送邮件" } },
  },
};
