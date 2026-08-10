import type { PublicLocale } from "@/i18n/locales";
import type { LocalizedArticleContent } from "./types";

export type LocalizedRobloxContent = {
  locale: PublicLocale;
  service: {
    eyebrow: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    intro: string;
    buildTitle: string;
    build: string[];
    valueTitle: string;
    value: string[];
    processTitle: string;
    process: { title: string; text: string }[];
    gameTitle: string;
    gameText: string;
    gameLabel: string;
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

export const localizedRobloxContent: Record<PublicLocale, LocalizedRobloxContent> = {
  de: {
    locale: "de",
    service: {
      eyebrow: "Roblox-Erlebnisse für Marken",
      title: "Roblox-Spiele und interaktive Markenwelten entwickeln",
      metaTitle: "Roblox-Spiele und Markenwelten entwickeln lassen",
      metaDescription: "Navines plant, entwickelt und verbessert Roblox-Erlebnisse für Marken: Konzept, Gameplay, visuelle Identität, UI, Performance, Launch und Weiterentwicklung.",
      intro: "Eine Marke kann auf Roblox mehr sein als eine Anzeige: ein Ort, den Menschen betreten, erkunden und gemeinsam erleben. Wir verbinden Konzept, Gameplay, Gestaltung und Entwicklung zu einer verständlichen Markenwelt. Vor dem Start prüfen wir Zielgruppe, Nutzen und Umfang, denn nicht jede Marke braucht sofort ein vollständiges Spiel.",
      buildTitle: "Was wir entwickeln und verbessern",
      build: ["Neue Roblox-Spiele, Markenwelten und digitale Eventräume", "Missionen, Spielschleifen, Menüs, Onboarding und Spielerführung", "Visuelle Identität, virtuelle Umgebungen und natürliche Markenmomente", "Optimierung bestehender Erlebnisse für Bedienbarkeit, Performance und Wiederkehr"],
      valueTitle: "Warum Roblox für eine Marke relevant sein kann",
      value: ["Menschen begegnen der Marke durch Handlung und Entdeckung statt nur durch eine Botschaft.", "Eine gute Welt kann Storytelling, Community, Produkteinführungen und wiederkehrende Inhalte verbinden.", "Das Format kann jüngere und neue Zielgruppen erreichen, wenn Idee und Kommunikation verantwortungsvoll gestaltet sind.", "Reichweite, Viralität und wirtschaftliche Ergebnisse werden nicht garantiert; sie hängen auch von Qualität, Distribution und laufender Pflege ab."],
      processTitle: "Von der Idee zur spielbaren Welt",
      process: [{ title: "Eignung prüfen", text: "Wir klären Zielgruppe, Markenziel und ob Roblox der passende Kanal ist." }, { title: "Spielidee definieren", text: "Wir entwickeln eine klare Handlung, Aufgaben und einen verständlichen Grund zum Wiederkommen." }, { title: "Bauen und testen", text: "Wir setzen die Welt in Roblox Studio um und prüfen mobile Geräte, Desktop, Performance und Nutzerführung." }, { title: "Gestuft veröffentlichen", text: "Wir starten kontrolliert, sammeln Rückmeldungen und planen Updates anhand realer Nutzung." }],
      gameTitle: "NAVINES WORLD selbst ausprobieren",
      gameText: "NAVINES WORLD ist unsere kleine Roblox-Umgebung zum Testen von Ideen und zum Lernen auf der Plattform. Sie ist ein praktisches Beispiel, kein behaupteter viraler Erfolg.",
      gameLabel: "NAVINES WORLD auf Roblox öffnen",
      faqTitle: "Häufige Fragen",
      faqs: [{ question: "Kann Navines ein Roblox-Spiel von Grund auf entwickeln?", answer: "Ja. Der Umfang kann Konzept, Welt, Gameplay, UI, Entwicklung, Tests und Launch umfassen und wird nach der ersten Analyse festgelegt." }, { question: "Kann ein bestehendes Spiel verbessert werden?", answer: "Ja. Wir können Onboarding, Ablauf, UI, Performance, Markenwirkung und mögliche Gründe für eine Rückkehr prüfen und priorisieren." }, { question: "Garantiert ein Roblox-Spiel Reichweite?", answer: "Nein. Eine starke Erfahrung kann einen neuen Markenkanal schaffen, garantiert aber keine Spielerzahlen, Viralität oder Verkäufe." }],
      ctaTitle: "Soll Ihre Marke zu einer spielbaren Welt werden?",
      ctaText: "Senden Sie uns kurz Ihre Marke, Zielgruppe und Spielidee. Wir prüfen, ob ein kleines Erlebnis, ein Event oder eine umfassendere Roblox-Welt sinnvoll ist.",
      ctaLabel: "Über WhatsApp sprechen",
      articleLabel: "Den Roblox-Leitfaden lesen",
      previewTitle: "Roblox-Spiele und Markenwelten",
      previewText: "Konzept, Gameplay, Design, Entwicklung und Weiterentwicklung für Marken, Creator und Communities.",
    },
    article: {
      locale: "de", slug: "roblox-brand-experiences", metaTitle: "Roblox-Markenerlebnis: von der Idee zur spielbaren Welt", metaDescription: "Wie Marken ein Roblox-Spiel sinnvoll planen: Zielgruppe, Gameplay, Design, Entwicklung, Launch, Community und verantwortungsvolle Weiterentwicklung.", title: "Warum Marken Roblox-Welten bauen und wie daraus ein echtes Spielerlebnis wird", excerpt: "Eine Roblox-Welt funktioniert nicht als lange Anzeige. Sie braucht eine verständliche Spielidee, einen natürlichen Platz für die Marke und einen Grund, warum Menschen spielen und wiederkommen.", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "Interaktion statt Unterbrechung", paragraphs: ["Klassische Werbung unterbricht. Eine gute Spielwelt lädt Menschen ein, selbst aktiv zu werden und die Markenidee durch Handlung zu verstehen.", "Das ist besonders interessant für Marken, die Community, Storytelling oder eine neue Produkteinführung erlebbar machen möchten."] }, { title: "Das Spiel muss zuerst als Spiel funktionieren", paragraphs: ["Missionen, Orientierung, Feedback und ein klarer Einstieg sind wichtiger als dekorative Logos. Die Marke sollte Teil der Welt sein, nicht das Hindernis zwischen Spieler und Erlebnis.", "Nicht jede Idee braucht ein großes Projekt. Ein kleiner, gut getesteter Einstieg kann sinnvoller sein als eine umfangreiche Welt ohne klares Ziel."] }, { title: "Veröffentlichung ist der Anfang", paragraphs: ["Nach dem Launch braucht ein Erlebnis Beobachtung, Fehlerbehebung, Inhalte und möglicherweise Events oder Updates. Entscheidungen sollten auf verfügbaren Nutzungsdaten und echtem Feedback beruhen.", "Traffic oder Viralität lassen sich nicht garantieren. Qualität, Distribution, Community und kontinuierliche Pflege beeinflussen das Ergebnis."] }, { title: "NAVINES WORLD als Lernumgebung", paragraphs: ["NAVINES WORLD wurde von uns als kleiner Roblox-Raum gebaut, um Ideen zu testen und die Plattform aus Spielersicht kennenzulernen.", "Wir zeigen ihn als praktisches Beispiel unserer Arbeit, nicht als Beleg für garantierte Reichweite oder kommerziellen Erfolg."] }], faqs: [{ question: "Ist Roblox nur für große Marken?", answer: "Nein. Auch Creator, Communities und kleinere Unternehmen können mit einem begrenzten Konzept starten, wenn Zielgruppe und Zweck klar sind." }, { question: "Kann ein vorhandenes Erlebnis weiterentwickelt werden?", answer: "Ja. Häufig beginnt die Arbeit mit einer Analyse von Einstieg, Gameplay, UI, Performance und Markenwirkung." }], cta: { title: "Eine Roblox-Idee besprechen", text: "Beschreiben Sie Marke, Zielgruppe und die gewünschte Handlung im Spiel. Wir helfen, einen realistischen ersten Umfang zu definieren.", whatsappLabel: "WhatsApp schreiben", emailLabel: "E-Mail senden" },
    },
  },
  jp: {
    locale: "jp",
    service: {
      eyebrow: "ブランド向けRoblox体験",
      title: "Robloxゲームとインタラクティブなブランド世界の開発",
      metaTitle: "ブランド向けRobloxゲーム・体験開発",
      metaDescription: "Navinesは、企画、ゲーム性、ビジュアル、UI、性能、公開、改善まで、ブランド向けRoblox体験を設計・開発します。",
      intro: "Robloxでは、ブランドを広告として見せるだけでなく、ユーザーが入り、探索し、体験できる世界として表現できます。私たちは企画、ゲーム性、デザイン、開発を一つの流れにまとめます。すべてのブランドに大規模ゲームが必要とは限らないため、対象ユーザーと目的を確認してから適切な規模を決めます。",
      buildTitle: "開発・改善できる内容",
      build: ["新規Robloxゲーム、ブランド世界、デジタルイベント空間", "ミッション、ゲームループ、メニュー、導入体験、プレイヤー導線", "ブランドに合う仮想環境、ビジュアル、自然なブランド接点", "既存ゲームのUI、性能、理解しやすさ、再訪体験の改善"],
      valueTitle: "ブランドにRobloxが役立つ理由",
      value: ["メッセージを見るだけでなく、操作や探索を通してブランドに触れられます。", "物語、コミュニティ、商品発表、継続コンテンツを一つの世界にまとめられます。", "責任ある設計により、新しい世代やコミュニティとの接点をつくれる可能性があります。", "アクセス数、話題化、売上は保証できず、品質、配信、運用、更新にも左右されます。"],
      processTitle: "企画から公開まで",
      process: [{ title: "適合性を確認", text: "対象ユーザー、ブランド目標、Robloxを選ぶ理由を整理します。" }, { title: "ゲームの核を設計", text: "分かりやすい行動、ミッション、再訪する理由を定義します。" }, { title: "開発と検証", text: "Roblox Studioで構築し、モバイル、PC、性能、導線を確認します。" }, { title: "段階的に公開", text: "小さく公開し、実際の反応をもとに修正と更新を進めます。" }],
      gameTitle: "NAVINES WORLDを体験",
      gameText: "NAVINES WORLDは、私たちがアイデア検証とプラットフォーム理解のために制作した小さなRoblox空間です。バイラル実績としてではなく、実践例として紹介しています。",
      gameLabel: "RobloxでNAVINES WORLDを開く",
      faqTitle: "よくある質問",
      faqs: [{ question: "ゼロからRobloxゲームを作れますか？", answer: "はい。企画、世界設計、ゲーム性、UI、開発、テスト、公開まで、必要な範囲を整理して進めます。" }, { question: "既存ゲームの改善もできますか？", answer: "はい。導入、ゲーム進行、UI、性能、ブランド表現、再訪の理由を確認し、改善の優先順位を決めます。" }, { question: "ゲームを作れば必ず人が集まりますか？", answer: "保証はできません。良い体験は新しい接点になりますが、利用者数や話題化は企画、品質、告知、更新などにも左右されます。" }],
      ctaTitle: "ブランドを遊べる世界にしませんか",
      ctaText: "ブランド、対象ユーザー、考えているゲームの内容を短くお知らせください。小さな体験、イベント、継続型の世界のどれが適切か確認します。",
      ctaLabel: "WhatsAppで相談",
      articleLabel: "Robloxガイドを読む",
      previewTitle: "Robloxゲームとブランド体験",
      previewText: "ブランド、クリエイター、コミュニティのための企画、ゲーム性、デザイン、開発、改善。",
    },
    article: {
      locale: "jp", slug: "roblox-brand-experiences", metaTitle: "Robloxブランド体験を企画・開発する方法", metaDescription: "ブランド向けRobloxゲームの企画、対象ユーザー、ゲーム性、デザイン、開発、公開、コミュニティ運用を分かりやすく解説します。", title: "ブランドがRoblox世界をつくる理由と、遊べる体験にする方法", excerpt: "Robloxのブランド世界は、長い広告ではありません。分かりやすい遊び、自然なブランド表現、また戻りたくなる理由が必要です。", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "広告を見る体験から参加する体験へ", paragraphs: ["ゲーム世界では、ユーザーが自分で動き、探索し、ブランドの考え方を体験できます。", "物語、コミュニティ、イベント、商品発表を一つのデジタル空間につなげられる点が特徴です。"] }, { title: "まずゲームとして成立させる", paragraphs: ["ロゴを増やすよりも、導入、目的、操作、フィードバックを分かりやすくすることが重要です。ブランドはゲームを邪魔せず、世界の一部として存在する必要があります。", "大きく始める必要はありません。明確な小さな体験を公開し、検証して広げる方法もあります。"] }, { title: "公開後の改善", paragraphs: ["公開後は不具合、離脱、反応、更新内容を確認し、利用可能なデータとフィードバックで改善します。", "アクセス数や話題化は保証できません。品質、告知、コミュニティ、継続的な運用が影響します。"] }, { title: "NAVINES WORLDから学ぶ", paragraphs: ["NAVINES WORLDは、私たちがRobloxを内側から理解し、アイデアを試すために制作した小さな空間です。", "商業的な成功を証明するものではなく、実践と学習の例として公開しています。"] }], faqs: [{ question: "大企業向けだけのサービスですか？", answer: "いいえ。目的と対象ユーザーが明確であれば、クリエイター、コミュニティ、小規模ブランドも限定的な体験から始められます。" }, { question: "既存のRobloxゲームを改善できますか？", answer: "はい。導入、ゲーム性、UI、性能、ブランド表現を確認して改善計画を作れます。" }], cta: { title: "Robloxのアイデアを相談", text: "ブランド、対象ユーザー、ゲーム内で実現したい行動をお知らせください。現実的な最初の範囲を整理します。", whatsappLabel: "WhatsAppで相談", emailLabel: "メールを送る" },
    },
  },
  ar: {
    locale: "ar",
    service: {
      eyebrow: "تجارب Roblox للعلامات التجارية",
      title: "تطوير ألعاب Roblox وعوالم تفاعلية للعلامات التجارية",
      metaTitle: "تطوير ألعاب Roblox وتجارب العلامات التجارية",
      metaDescription: "تخطط Navines وتطور وتحسن تجارب Roblox للعلامات التجارية، من الفكرة وأسلوب اللعب والهوية إلى الأداء والإطلاق والتحديثات.",
      intro: "يمكن للعلامة التجارية في Roblox أن تصبح مكاناً يدخله المستخدم ويستكشفه، لا مجرد إعلان يراه. نجمع بين الفكرة وأسلوب اللعب والتصميم والتطوير لبناء تجربة مفهومة ومناسبة للجمهور. ونبدأ دائماً بفحص الهدف والجمهور والحجم المناسب، لأن المشروع الكامل ليس الخيار الصحيح لكل علامة.",
      buildTitle: "ما الذي يمكننا بناؤه أو تحسينه",
      build: ["ألعاب Roblox جديدة وعوالم علامات تجارية ومساحات فعاليات رقمية", "مهام ودورات لعب وقوائم وتجربة دخول واضحة للاعب الجديد", "بيئات افتراضية وهوية بصرية وحضور طبيعي للعلامة داخل اللعبة", "تحسين ألعاب قائمة من حيث الواجهة والأداء والوضوح وأسباب العودة"],
      valueTitle: "لماذا قد تكون Roblox قناة مهمة للعلامة",
      value: ["يتعرف المستخدم على العلامة من خلال الفعل والاستكشاف بدلاً من مشاهدة رسالة فقط.", "يمكن جمع القصة والمجتمع وإطلاق المنتجات والمحتوى المتجدد في عالم واحد.", "قد تفتح التجربة المصممة بمسؤولية باباً إلى أجيال ومجتمعات جديدة.", "لا نضمن عدد اللاعبين أو الانتشار أو المبيعات، فالنتيجة تتأثر بالجودة والتوزيع والتحديث المستمر."],
      processTitle: "من الفكرة إلى عالم قابل للعب",
      process: [{ title: "فحص الملاءمة", text: "نحدد الجمهور وهدف العلامة وما إذا كانت Roblox هي القناة المناسبة." }, { title: "تصميم جوهر اللعبة", text: "نبني فعلاً واضحاً ومهاماً وسبباً مفهوماً للعودة." }, { title: "التطوير والاختبار", text: "نطور في Roblox Studio ونختبر الهاتف والحاسوب والأداء ومسار اللاعب." }, { title: "إطلاق تدريجي", text: "نبدأ بنطاق محدود، نجمع الملاحظات ونخطط للتحسينات وفق الاستخدام الحقيقي." }],
      gameTitle: "جرّبوا NAVINES WORLD",
      gameText: "NAVINES WORLD مساحة صغيرة بنيناها لاختبار الأفكار وفهم المنصة من الداخل. نعرضها كمثال عملي للتعلم، وليس كادعاء لنجاح فيروسي.",
      gameLabel: "فتح NAVINES WORLD على Roblox",
      faqTitle: "أسئلة شائعة",
      faqs: [{ question: "هل يمكن بناء لعبة Roblox من الصفر؟", answer: "نعم. يمكن أن يشمل العمل الفكرة والعالم وأسلوب اللعب والواجهة والتطوير والاختبارات والإطلاق، ويحدد النطاق بعد الفحص الأولي." }, { question: "هل يمكن تحسين لعبة موجودة؟", answer: "نعم. نفحص الدخول إلى اللعبة والتدفق والواجهة والأداء والهوية وأسباب العودة ثم نرتب أولويات التحسين." }, { question: "هل تضمن اللعبة انتشار العلامة؟", answer: "لا. يمكن للتجربة الجيدة أن تفتح قناة جديدة، لكنها لا تضمن اللاعبين أو الانتشار أو النتائج التجارية." }],
      ctaTitle: "هل تريدون تحويل العلامة إلى عالم يمكن اللعب داخله؟",
      ctaText: "أرسلوا وصفاً قصيراً للعلامة والجمهور وفكرة اللعبة. سنفحص هل الأنسب تجربة صغيرة أو فعالية أو عالم Roblox أوسع.",
      ctaLabel: "تواصل عبر WhatsApp",
      articleLabel: "قراءة دليل Roblox",
      previewTitle: "ألعاب Roblox وعوالم العلامات",
      previewText: "فكرة وأسلوب لعب وتصميم وتطوير وتحسين للعلامات والمبدعين والمجتمعات.",
    },
    article: {
      locale: "ar", slug: "roblox-brand-experiences", metaTitle: "كيف تبني العلامة التجارية تجربة Roblox حقيقية", metaDescription: "دليل لتخطيط لعبة Roblox للعلامة التجارية: الجمهور وأسلوب اللعب والتصميم والتطوير والإطلاق والمجتمع والتحسين المسؤول.", title: "لماذا تبني العلامات عوالم Roblox وكيف تتحول الفكرة إلى تجربة قابلة للعب", excerpt: "عالم العلامة في Roblox ليس إعلاناً طويلاً. يحتاج إلى لعب مفهوم وحضور طبيعي للعلامة وسبب يجعل المستخدم يرغب في العودة.", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "من مشاهدة الإعلان إلى المشاركة", paragraphs: ["تسمح اللعبة للمستخدم بأن يتحرك ويستكشف ويفهم فكرة العلامة من خلال التجربة.", "يمكن للعالم أن يجمع القصة والمجتمع والفعاليات وإطلاق المنتجات في مساحة رقمية واحدة."] }, { title: "اللعبة أولاً", paragraphs: ["الدخول الواضح والهدف والحركة والتغذية الراجعة أهم من كثرة الشعارات. يجب أن تكون العلامة جزءاً طبيعياً من العالم.", "ليس ضرورياً أن يبدأ المشروع بحجم كبير؛ تجربة صغيرة وواضحة يمكن اختبارها وتوسيعها لاحقاً."] }, { title: "الإطلاق هو البداية", paragraphs: ["بعد النشر نراجع الأعطال والتفاعل والملاحظات ونحدد محتوى وتحديثات مناسبة وفق البيانات المتاحة.", "لا يمكن ضمان الانتشار أو عدد اللاعبين، لأن الجودة والترويج والمجتمع والاستمرارية تؤثر جميعها في النتيجة."] }, { title: "NAVINES WORLD كتجربة عملية", paragraphs: ["بنينا NAVINES WORLD كمساحة صغيرة لاختبار أفكار وفهم تجربة Roblox من منظور اللاعب.", "نقدمها كمثال على التعلم والعمل داخل المنصة، لا كدليل على نجاح تجاري مضمون."] }], faqs: [{ question: "هل الخدمة للعلامات الكبيرة فقط؟", answer: "لا. يمكن للمبدعين والمجتمعات والعلامات الصغيرة البدء بتجربة محدودة عندما يكون الهدف والجمهور واضحين." }, { question: "هل يمكن تطوير لعبة قائمة؟", answer: "نعم. يمكن البدء بتحليل الدخول وأسلوب اللعب والواجهة والأداء وحضور العلامة." }], cta: { title: "ناقشوا فكرة Roblox معنا", text: "اشرحوا العلامة والجمهور وما الذي تريدون أن يفعله اللاعب داخل العالم، وسنساعد في تحديد بداية واقعية.", whatsappLabel: "تواصل عبر WhatsApp", emailLabel: "إرسال بريد إلكتروني" },
    },
  },
  hi: {
    locale: "hi",
    service: {
      eyebrow: "ब्रांड के लिए Roblox अनुभव",
      title: "Roblox गेम और इंटरैक्टिव ब्रांड दुनिया का विकास",
      metaTitle: "ब्रांड के लिए Roblox गेम और अनुभव विकास",
      metaDescription: "Navines ब्रांड के लिए Roblox अनुभव की योजना, विकास और सुधार करता है: कॉन्सेप्ट, गेमप्ले, विजुअल पहचान, UI, प्रदर्शन, लॉन्च और अपडेट।",
      intro: "Roblox पर ब्रांड केवल दिखने वाला विज्ञापन नहीं रहता; वह ऐसी दुनिया बन सकता है जिसमें लोग प्रवेश करें, खोजें और भाग लें। हम विचार, गेमप्ले, डिज़ाइन और विकास को एक स्पष्ट अनुभव में जोड़ते हैं। हर ब्रांड को पूरा गेम नहीं चाहिए, इसलिए पहले दर्शक, उद्देश्य और सही दायरा तय किया जाता है।",
      buildTitle: "हम क्या बना और सुधार सकते हैं",
      build: ["नए Roblox गेम, ब्रांड दुनिया और डिजिटल इवेंट स्पेस", "मिशन, गेम लूप, मेनू, onboarding और स्पष्ट खिलाड़ी यात्रा", "वर्चुअल वातावरण, विजुअल पहचान और स्वाभाविक ब्रांड उपस्थिति", "मौजूदा गेम में UI, प्रदर्शन, समझ और दोबारा आने के कारणों का सुधार"],
      valueTitle: "Roblox ब्रांड के लिए क्यों उपयोगी हो सकता है",
      value: ["लोग केवल संदेश देखने के बजाय काम और खोज के जरिए ब्रांड को समझते हैं।", "कहानी, समुदाय, उत्पाद लॉन्च और नियमित सामग्री एक दुनिया में जुड़ सकती है।", "जिम्मेदार डिज़ाइन नए और युवा दर्शकों से संबंध बनाने का अवसर दे सकता है।", "खिलाड़ियों की संख्या, वायरल पहुंच या बिक्री की गारंटी नहीं होती; परिणाम गुणवत्ता, वितरण और लगातार सुधार पर भी निर्भर हैं।"],
      processTitle: "विचार से खेलने योग्य दुनिया तक",
      process: [{ title: "उपयुक्तता जाँच", text: "हम दर्शक, ब्रांड लक्ष्य और Roblox को चुनने का कारण स्पष्ट करते हैं।" }, { title: "मुख्य गेमप्ले", text: "एक सरल गतिविधि, मिशन और वापस आने का स्पष्ट कारण तैयार करते हैं।" }, { title: "निर्माण और परीक्षण", text: "Roblox Studio में बनाकर मोबाइल, डेस्कटॉप, प्रदर्शन और खिलाड़ी यात्रा जाँचते हैं।" }, { title: "चरणबद्ध लॉन्च", text: "सीमित दायरे से शुरू करके प्रतिक्रिया और वास्तविक उपयोग के अनुसार सुधार करते हैं।" }],
      gameTitle: "NAVINES WORLD खेलें",
      gameText: "NAVINES WORLD हमारी छोटी Roblox दुनिया है, जिसे हमने विचार जाँचने और प्लेटफ़ॉर्म को अंदर से समझने के लिए बनाया। यह व्यावहारिक उदाहरण है, वायरल सफलता का दावा नहीं।",
      gameLabel: "Roblox पर NAVINES WORLD खोलें",
      faqTitle: "अक्सर पूछे जाने वाले सवाल",
      faqs: [{ question: "क्या Navines शुरू से Roblox गेम बना सकता है?", answer: "हाँ। काम में विचार, दुनिया, गेमप्ले, UI, विकास, परीक्षण और लॉन्च शामिल हो सकते हैं। सही दायरा शुरुआती जाँच के बाद तय होता है।" }, { question: "क्या मौजूदा गेम सुधारा जा सकता है?", answer: "हाँ। onboarding, प्रवाह, UI, प्रदर्शन, ब्रांड अनुभव और लौटने के कारणों की समीक्षा की जा सकती है।" }, { question: "क्या Roblox गेम पहुंच की गारंटी देता है?", answer: "नहीं। अच्छा अनुभव नया ब्रांड चैनल बना सकता है, लेकिन खिलाड़ी, वायरल पहुंच या व्यावसायिक परिणाम की गारंटी नहीं देता।" }],
      ctaTitle: "अपने ब्रांड को खेलने योग्य दुनिया बनाना चाहते हैं?",
      ctaText: "ब्रांड, दर्शक और गेम के विचार का छोटा विवरण भेजें। हम देखेंगे कि छोटा अनुभव, इवेंट या बड़ा Roblox संसार क्या अधिक सही है।",
      ctaLabel: "WhatsApp पर बात करें",
      articleLabel: "Roblox गाइड पढ़ें",
      previewTitle: "Roblox गेम और ब्रांड अनुभव",
      previewText: "ब्रांड, creators और communities के लिए विचार, गेमप्ले, डिज़ाइन, विकास और सुधार।",
    },
    article: {
      locale: "hi", slug: "roblox-brand-experiences", metaTitle: "ब्रांड के लिए Roblox गेम कैसे बनाया जाता है", metaDescription: "Roblox ब्रांड गेम की योजना समझें: दर्शक, गेमप्ले, डिज़ाइन, विकास, लॉन्च, समुदाय और जिम्मेदार सुधार।", title: "ब्रांड Roblox दुनिया क्यों बनाते हैं और विचार को वास्तविक गेम अनुभव कैसे बनाएं", excerpt: "Roblox की ब्रांड दुनिया लंबा विज्ञापन नहीं है। उसे स्पष्ट खेल, स्वाभाविक ब्रांड भूमिका और दोबारा आने का कारण चाहिए।", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "देखने से भाग लेने तक", paragraphs: ["गेम दुनिया में उपयोगकर्ता खुद चलता, खोजता और अनुभव के जरिए ब्रांड की कहानी समझता है।", "यह कहानी, समुदाय, इवेंट और उत्पाद लॉन्च को एक डिजिटल स्थान में जोड़ सकता है।"] }, { title: "पहले एक अच्छा गेम", paragraphs: ["स्पष्ट शुरुआत, लक्ष्य, नियंत्रण और प्रतिक्रिया लोगो की संख्या से अधिक महत्वपूर्ण हैं। ब्रांड को खेल का स्वाभाविक भाग होना चाहिए।", "हर परियोजना को बड़े पैमाने से शुरू करने की जरूरत नहीं। छोटा और स्पष्ट अनुभव जाँचने के बाद बढ़ाया जा सकता है।"] }, { title: "लॉन्च के बाद काम जारी रहता है", paragraphs: ["प्रकाशन के बाद bugs, उपयोग, feedback और updates पर ध्यान देना पड़ता है। उपलब्ध डेटा के आधार पर सुधार तय होते हैं।", "खिलाड़ी या वायरल पहुंच की गारंटी नहीं दी जा सकती; गुणवत्ता, प्रचार, समुदाय और निरंतर देखभाल परिणाम को प्रभावित करते हैं।"] }, { title: "NAVINES WORLD से सीख", paragraphs: ["NAVINES WORLD को हमने Roblox के भीतर विचार जाँचने और खिलाड़ी अनुभव समझने के लिए बनाया।", "यह एक व्यावहारिक सीखने का उदाहरण है, गारंटीकृत व्यावसायिक सफलता का प्रमाण नहीं।"] }], faqs: [{ question: "क्या यह केवल बड़े ब्रांड के लिए है?", answer: "नहीं। स्पष्ट दर्शक और उद्देश्य होने पर creators, communities और छोटे ब्रांड सीमित अनुभव से शुरू कर सकते हैं।" }, { question: "क्या मौजूदा Roblox गेम बेहतर किया जा सकता है?", answer: "हाँ। शुरुआत, गेमप्ले, UI, प्रदर्शन और ब्रांड अनुभव का विश्लेषण किया जा सकता है।" }], cta: { title: "Roblox विचार पर बात करें", text: "ब्रांड, दर्शक और गेम में उपयोगकर्ता से करवाना चाही जाने वाली गतिविधि बताएं। हम एक व्यावहारिक शुरुआती दायरा तय करने में मदद करेंगे।", whatsappLabel: "WhatsApp पर बात करें", emailLabel: "ईमेल भेजें" },
    },
  },
  fr: {
    locale: "fr",
    service: {
      eyebrow: "Expériences Roblox pour les marques",
      title: "Développement de jeux Roblox et d’univers de marque interactifs",
      metaTitle: "Développement de jeux Roblox pour les marques",
      metaDescription: "Navines conçoit, développe et améliore des expériences Roblox de marque : concept, gameplay, identité visuelle, UI, performance, lancement et évolution.",
      intro: "Sur Roblox, une marque peut devenir un lieu à explorer plutôt qu’une publicité à regarder. Nous réunissons concept, gameplay, design et développement dans une expérience cohérente. Toutes les marques n’ont pas besoin d’un jeu complet : nous commençons donc par valider le public, l’objectif et le bon niveau d’investissement.",
      buildTitle: "Ce que nous pouvons créer ou améliorer",
      build: ["Jeux Roblox, univers de marque et espaces événementiels numériques", "Missions, boucles de jeu, menus, onboarding et parcours joueur", "Environnements virtuels, identité visuelle et présence naturelle de la marque", "Amélioration d’expériences existantes : UI, performance, clarté et retour des joueurs"],
      valueTitle: "Pourquoi Roblox peut compter pour une marque",
      value: ["Le public découvre la marque par l’action et l’exploration, et pas seulement par un message.", "Un même univers peut relier storytelling, communauté, lancement et contenu récurrent.", "Une conception responsable peut créer un contact pertinent avec de nouvelles générations et communautés.", "Nous ne garantissons ni trafic, ni viralité, ni résultat commercial ; la qualité, la distribution et le suivi comptent aussi."],
      processTitle: "De l’idée à un univers jouable",
      process: [{ title: "Valider la pertinence", text: "Nous précisons le public, l’objectif de marque et la raison d’utiliser Roblox." }, { title: "Concevoir le cœur du jeu", text: "Nous définissons une action simple, des missions et une raison claire de revenir." }, { title: "Développer et tester", text: "Nous construisons dans Roblox Studio et testons mobile, ordinateur, performance et parcours." }, { title: "Lancer progressivement", text: "Nous commençons avec un périmètre contrôlé, puis améliorons selon les retours réels." }],
      gameTitle: "Découvrir NAVINES WORLD",
      gameText: "NAVINES WORLD est un petit espace Roblox que nous avons créé pour tester des idées et comprendre la plateforme de l’intérieur. Nous le présentons comme un exemple pratique, pas comme un succès viral revendiqué.",
      gameLabel: "Ouvrir NAVINES WORLD sur Roblox",
      faqTitle: "Questions fréquentes",
      faqs: [{ question: "Navines peut-elle créer un jeu Roblox de zéro ?", answer: "Oui. Le projet peut couvrir le concept, l’univers, le gameplay, l’interface, le développement, les tests et le lancement, selon le périmètre défini." }, { question: "Pouvez-vous améliorer un jeu existant ?", answer: "Oui. Nous pouvons analyser l’onboarding, le parcours, l’UI, la performance, la présence de marque et les raisons de revenir." }, { question: "Un jeu Roblox garantit-il de la visibilité ?", answer: "Non. Une bonne expérience peut ouvrir un nouveau canal de marque, sans garantir le nombre de joueurs, la viralité ou les ventes." }],
      ctaTitle: "Et si votre marque devenait un univers jouable ?",
      ctaText: "Envoyez-nous une courte présentation de la marque, du public et de l’idée. Nous vérifierons si un petit espace, un événement ou un univers plus large est pertinent.",
      ctaLabel: "Écrire sur WhatsApp",
      articleLabel: "Lire le guide Roblox",
      previewTitle: "Jeux Roblox et univers de marque",
      previewText: "Concept, gameplay, design, développement et évolution pour marques, créateurs et communautés.",
    },
    article: {
      locale: "fr", slug: "roblox-brand-experiences", metaTitle: "Créer une expérience Roblox pour une marque", metaDescription: "Comment préparer un jeu Roblox de marque : public, gameplay, design, développement, lancement, communauté et amélioration responsable.", title: "Pourquoi les marques créent des univers Roblox et comment transformer une idée en expérience jouable", excerpt: "Un univers Roblox de marque ne doit pas ressembler à une longue publicité. Il lui faut un jeu clair, une présence naturelle de la marque et une bonne raison de revenir.", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "Passer du message à la participation", paragraphs: ["Dans un univers interactif, l’utilisateur agit, explore et comprend la marque par l’expérience.", "Le format peut réunir histoire, communauté, événement et lancement de produit dans un même espace numérique."] }, { title: "Le jeu doit fonctionner avant la publicité", paragraphs: ["Un démarrage clair, un objectif, des contrôles et du feedback comptent davantage qu’une accumulation de logos. La marque doit appartenir au monde, pas interrompre le joueur.", "Un petit périmètre bien testé peut être plus pertinent qu’un grand univers sans objectif précis."] }, { title: "Le lancement n’est qu’un début", paragraphs: ["Après publication, il faut observer les problèmes, les retours et l’usage, puis organiser les mises à jour selon les données disponibles.", "Le trafic et la viralité ne sont jamais garantis. La qualité, la promotion, la communauté et la maintenance influencent le résultat."] }, { title: "NAVINES WORLD comme terrain d’apprentissage", paragraphs: ["Nous avons construit NAVINES WORLD comme un petit espace pour tester des idées et découvrir Roblox du point de vue du joueur.", "Il s’agit d’un exemple pratique de notre démarche, pas d’une preuve de réussite commerciale garantie."] }], faqs: [{ question: "Ce service est-il réservé aux grandes marques ?", answer: "Non. Une communauté, un créateur ou une petite marque peut commencer avec une expérience ciblée si le public et l’objectif sont clairs." }, { question: "Peut-on reprendre une expérience existante ?", answer: "Oui. Le travail peut commencer par un audit de l’entrée, du gameplay, de l’UI, de la performance et de l’identité." }], cta: { title: "Discuter d’une idée Roblox", text: "Présentez la marque, le public et l’action que le joueur devrait accomplir. Nous vous aiderons à définir un premier périmètre réaliste.", whatsappLabel: "Écrire sur WhatsApp", emailLabel: "Envoyer un email" },
    },
  },
  zh: {
    locale: "zh",
    service: {
      eyebrow: "品牌 Roblox 互动体验",
      title: "Roblox 游戏与互动品牌世界开发",
      metaTitle: "品牌 Roblox 游戏与互动体验开发",
      metaDescription: "Navines 为品牌规划、开发和改进 Roblox 体验，包括创意、玩法、视觉、UI、性能、发布与持续更新。",
      intro: "在 Roblox 中，品牌可以不只是一条被观看的广告，而是一个可以进入、探索和互动的世界。我们把创意、玩法、设计与开发组合成清晰的体验。并非每个品牌都需要完整的大型游戏，因此我们会先确认受众、目标和合适的项目范围。",
      buildTitle: "我们可以开发或改进什么",
      build: ["全新 Roblox 游戏、品牌世界与数字活动空间", "任务、核心循环、菜单、新手引导与玩家路径", "虚拟环境、视觉识别和自然的品牌触点", "改进现有体验的 UI、性能、清晰度和回访理由"],
      valueTitle: "Roblox 为什么可能适合品牌",
      value: ["用户通过行动与探索理解品牌，而不只是看到一条信息。", "同一个世界可以承载故事、社区、产品发布和持续内容。", "负责任的设计可能帮助品牌接触新一代用户和新的社区。", "我们不保证流量、病毒式传播或商业结果；质量、分发和持续维护同样重要。"],
      processTitle: "从想法到可玩的世界",
      process: [{ title: "确认适配性", text: "明确受众、品牌目标以及选择 Roblox 的理由。" }, { title: "设计核心玩法", text: "定义简单清晰的行动、任务和再次进入的理由。" }, { title: "开发与测试", text: "使用 Roblox Studio 构建，并测试移动端、桌面端、性能与玩家路径。" }, { title: "分阶段发布", text: "先以可控范围上线，再根据真实反馈和使用情况改进。" }],
      gameTitle: "体验 NAVINES WORLD",
      gameText: "NAVINES WORLD 是我们为测试创意并从内部理解平台而制作的小型 Roblox 空间。它是实践示例，不是对病毒式成功的宣称。",
      gameLabel: "在 Roblox 打开 NAVINES WORLD",
      faqTitle: "常见问题",
      faqs: [{ question: "Navines 可以从零开发 Roblox 游戏吗？", answer: "可以。项目可包括创意、世界、玩法、UI、开发、测试和发布，具体范围会在前期评估后确定。" }, { question: "可以改进已有游戏吗？", answer: "可以。我们可以检查新手引导、流程、UI、性能、品牌表达和回访理由，并确定改进优先级。" }, { question: "Roblox 游戏能保证曝光吗？", answer: "不能。优质体验可能成为新的品牌渠道，但不能保证玩家数量、病毒式传播或销售结果。" }],
      ctaTitle: "想把品牌变成一个可以玩的世界吗？",
      ctaText: "请简要介绍品牌、受众和游戏想法。我们会判断更适合小型体验、数字活动还是更完整的 Roblox 世界。",
      ctaLabel: "通过 WhatsApp 联系",
      articleLabel: "阅读 Roblox 指南",
      previewTitle: "Roblox 游戏与品牌世界",
      previewText: "面向品牌、创作者和社区的创意、玩法、设计、开发与持续改进。",
    },
    article: {
      locale: "zh", slug: "roblox-brand-experiences", metaTitle: "如何为品牌打造 Roblox 互动体验", metaDescription: "了解品牌 Roblox 游戏的规划方法：受众、玩法、设计、开发、发布、社区与负责任的持续改进。", title: "品牌为什么要构建 Roblox 世界，以及如何把创意变成真正的游戏体验", excerpt: "品牌 Roblox 世界不应该是一段很长的广告。它需要清晰的玩法、自然的品牌角色，以及让用户愿意再次进入的理由。", publishedAt: "2026-08-11", updatedAt: "2026-08-11", author: "Navines", sections: [{ title: "从观看信息到参与体验", paragraphs: ["在互动世界中，用户可以行动、探索，并通过体验理解品牌。", "这种形式可以把故事、社区、活动和产品发布连接在一个数字空间中。"] }, { title: "首先要成为一个好玩的体验", paragraphs: ["清晰的开始、目标、操作和反馈，比堆放品牌标志更重要。品牌应该自然地属于这个世界。", "项目不一定要从大型世界开始。一个小而明确的体验经过测试后再扩展，通常更加稳妥。"] }, { title: "发布只是开始", paragraphs: ["上线后仍需观察问题、反馈和使用情况，并根据可用数据安排更新。", "流量和病毒式传播无法保证；质量、推广、社区和持续维护都会影响结果。"] }, { title: "从 NAVINES WORLD 学习", paragraphs: ["我们制作 NAVINES WORLD，是为了测试想法并从玩家角度理解 Roblox。", "它是一个实践与学习示例，不是对商业成功或流量的保证。"] }], faqs: [{ question: "这项服务只适合大品牌吗？", answer: "不是。只要受众和目标清晰，创作者、社区和小型品牌也可以从有限范围的体验开始。" }, { question: "可以继续开发已有的 Roblox 游戏吗？", answer: "可以。工作可以从新手引导、玩法、UI、性能和品牌表达的检查开始。" }], cta: { title: "讨论您的 Roblox 创意", text: "告诉我们品牌、受众和希望玩家在游戏中完成的行动，我们会帮助确定现实的第一阶段。", whatsappLabel: "通过 WhatsApp 联系", emailLabel: "发送邮件" },
    },
  },
};
