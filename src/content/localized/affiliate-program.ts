import type { LocalizedArticleContent } from "./types";
import type { PublicLocale } from "@/i18n/locales";

export type LocalizedAffiliateProgramContent = {
  locale: PublicLocale;
  service: {
    eyebrow: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    intro: string;
    capabilitiesTitle: string;
    capabilities: string[];
    valueTitle: string;
    value: string[];
    processTitle: string;
    process: { title: string; text: string }[];
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

export const localizedAffiliateProgramContent: Record<PublicLocale, LocalizedAffiliateProgramContent> = {
  de: {
    locale: "de",
    service: {
      eyebrow: "Partnerprogramm für bestehende Websites",
      title: "Individuelle Partnerprogramm-Plattform für Ihre bestehende Website",
      metaTitle: "Partnerprogramm für eine bestehende Website entwickeln",
      metaDescription: "Navines entwickelt individuelle Partnerprogramm-Plattformen für bestehende Websites und Shops: Partnerportal, persönliche Links, Attribution, Status, Berichte und klare Abläufe.",
      intro: "Ihre Website oder Ihr Shop existiert bereits. Wir ergänzen eine verlässliche Partnerprogramm-Schicht, mit der Content-Creator, Empfehlungen und Geschäftspartner persönliche Links, Materialien und einen klaren Status erhalten. Ihr Team erhält Regeln, Freigaben und nachvollziehbare Daten statt verstreuter Tabellen.",
      capabilitiesTitle: "Was die Plattform leisten kann",
      capabilities: ["Partnerportal mit Anmeldung, Freigabe und persönlichem Bereich", "Persönliche Links, Deep Links und Kampagnencodes für passende Seiten", "Status für registrierte, zu prüfende und bestätigte Empfehlungen", "Materialbibliothek mit aktuellen Texten, Links und Markenmaterial", "Berichte nach Partner, Kampagne oder Zielseite", "Integrationen mit Shop, Formularen, CRM oder API, sofern verfügbar und autorisiert"],
      valueTitle: "Warum das für beide Seiten besser funktioniert",
      value: ["Creator wissen, welchen Link sie verwenden und was der aktuelle Status bedeutet.", "Das Unternehmen kann Quellen, Regeln und manuelle Prüfungen an einem Ort verwalten.", "Ein klarer Prozess schafft mehr Vertrauen als lose Codes oder manuelle Absprachen.", "Die Plattform kann die Zusammenarbeit vereinfachen, garantiert aber weder Traffic noch Umsatz."],
      processTitle: "So starten wir",
      process: [{ title: "Programm definieren", text: "Partnerprofil, gewünschte Aktion, Regeln und Prüfpunkte werden zuerst gemeinsam festgelegt." }, { title: "Bestehende Systeme prüfen", text: "Wir prüfen Website, Shop, CRM und verfügbare Schnittstellen, bevor etwas verbunden wird." }, { title: "Partner-Erlebnis aufbauen", text: "Portal, Links, Inhalte und Status werden so gestaltet, dass sie ohne technisches Vorwissen nutzbar sind." }, { title: "Kontrolliert erweitern", text: "Wir beginnen mit einer kleinen Gruppe und erweitern erst nach realen Tests." }],
      faqTitle: "Häufige Fragen",
      faqs: [{ question: "Kann das an eine bestehende Website angebunden werden?", answer: "Ja. Wir prüfen WordPress, WooCommerce, Shopify, eine individuelle Website, CRM oder eine vorhandene API. Der genaue Umfang hängt von Plattform und Berechtigungen ab." }, { question: "Ist jeder Verkauf eindeutig zuordenbar?", answer: "Nicht in jedem Fall. Browser, Einwilligungen und Gerätewechsel können Attribution beeinflussen. Deshalb definieren wir klare Regeln und ermöglichen Prüfungen." }, { question: "Sichert die Plattform mehr Umsatz?", answer: "Nein. Sie kann Zusammenarbeit, Transparenz und operative Kontrolle verbessern. Ergebnisse hängen auch von Angebot, Zielgruppe und Aktivierung der Partner ab." }],
      ctaTitle: "Möchten Sie Empfehlungen in ein klares Partnerprogramm verwandeln?",
      ctaText: "Senden Sie uns kurz, auf welcher Plattform Ihre Website läuft und was Sie als Empfehlung messen möchten. Wir prüfen den passenden Einstieg.",
      ctaLabel: "Über WhatsApp sprechen",
      articleLabel: "Zum Leitfaden für Partnerprogramme",
      previewTitle: "Partnerprogramme für bestehende Websites",
      previewText: "Eine klare Plattform für Creator, Empfehlungen, Links, Status und kontrollierte Abläufe.",
    },
    article: {
      locale: "de", slug: "affiliate-program-platform", metaTitle: "Partnerprogramm für bestehende Websites aufbauen", metaDescription: "Wie Unternehmen ein verlässliches Partnerprogramm mit Portal, persönlichen Links, Attribution, Status und Kontrolle aufbauen.", title: "Partnerprogramm für eine bestehende Website: Links, Transparenz und ein klarer Ablauf", excerpt: "Ein gutes Partnerprogramm ist nicht nur ein Rabattcode. Es verbindet Creator, Links, Regeln, Status und eine faire operative Kontrolle.", publishedAt: "2026-08-10", updatedAt: "2026-08-10", author: "Navines", sections: [{ title: "Mehr als ein Link", paragraphs: ["Ein Partnerprogramm braucht einen klaren Weg vom Partner zur passenden Seite und zurück zu einem nachvollziehbaren Status.", "Ein persönlicher Link, verständliche Regeln und aktuelle Materialien reduzieren Rückfragen und manuelle Abstimmung."] }, { title: "Was Partner wirklich benötigen", paragraphs: ["Ein einfacher Bereich mit Links, Inhalten und Status gibt Creatorn Sicherheit und spart dem Team wiederkehrende Nachrichten.", "Das verbessert die Zusammenarbeit, garantiert aber keine Reichweite oder Verkäufe."] }, { title: "Attribution und Kontrolle", paragraphs: ["Regeln zu Zeitfenstern, Codes und Ausnahmen sollten vor dem Start klar sein. Gerätewechsel und Cookie-Einwilligungen können die Zuordnung beeinflussen.", "Prüfstatus und menschliche Kontrolle helfen, offene oder auffällige Fälle sauber zu behandeln."] }, { title: "Klein beginnen", paragraphs: ["Starten Sie mit einer kleinen Gruppe, einem klaren Ziel und einer Verbindung zu Ihrem bestehenden Shop oder CRM.", "Erweitern Sie erst, wenn Partner und Team den Prozess nachvollziehen können."] }], faqs: [{ question: "Brauche ich einen neuen Shop?", answer: "Nein. Zuerst prüfen wir die bestehende Plattform und die verfügbaren Integrationsmöglichkeiten." }, { question: "Kann ich Daten auswerten?", answer: "Ja, soweit die vorhandenen Systeme Daten und autorisierte Schnittstellen bereitstellen." }], cta: { title: "Partnerprogramm besprechen", text: "Sagen Sie uns kurz, was Ihre Partner empfehlen sollen und auf welcher Plattform Ihre Website läuft.", whatsappLabel: "WhatsApp schreiben", emailLabel: "E-Mail senden" },
    },
  },
  jp: {
    locale: "jp",
    service: {
      eyebrow: "既存サイト向けパートナープログラム",
      title: "既存サイトに合わせたパートナープログラム基盤の開発",
      metaTitle: "既存サイト向けパートナープログラムの開発",
      metaDescription: "Navines は既存のサイトやECに合わせ、パートナーポータル、個別リンク、計測、ステータス、レポートを備えた仕組みを設計・開発します。",
      intro: "すでにあるサイトやECを置き換えるのではなく、その上にパートナープログラムの仕組みをつくります。クリエイターや紹介パートナーは個別リンク、素材、状況を確認でき、運営側はルール、承認、紹介元を一つの流れで管理できます。",
      capabilitiesTitle: "構築できること",
      capabilities: ["申請、承認、個人ページを備えたパートナーポータル", "個別リンク、深いリンク、キャンペーンコード", "紹介や成果の登録・確認待ち・承認済みステータス", "最新の文章、リンク、ブランド素材を集めたライブラリ", "パートナー、キャンペーン、導線ごとのレポート", "権限とAPIの条件に応じたEC、フォーム、CRMとの連携"],
      valueTitle: "運営側とパートナー双方にとっての価値",
      value: ["パートナーは使うリンクと現在の状態を迷わず確認できます。", "運営側は紹介元、ルール、確認作業を整理できます。", "分散したコードや表よりも、透明性のある運用をつくれます。", "仕組みは協業を助けますが、アクセスや売上を保証するものではありません。"],
      processTitle: "進め方",
      process: [{ title: "ルールを整理", text: "対象パートナー、成果の定義、確認ポイントを最初に決めます。" }, { title: "既存環境を確認", text: "サイト、EC、CRM、利用可能なAPIを確認します。" }, { title: "使いやすい画面を設計", text: "専門知識がなくても使えるリンク、素材、ステータス画面をつくります。" }, { title: "小さく検証して拡張", text: "少人数から開始し、実際の運用を確認してから広げます。" }],
      faqTitle: "よくある質問",
      faqs: [{ question: "今あるサイトに追加できますか？", answer: "はい。WordPress、WooCommerce、Shopify、独自サイト、CRM、APIなどを確認し、条件に合う連携方法を検討します。" }, { question: "すべての成果を正確に判定できますか？", answer: "必ずしもできません。ブラウザ、同意、端末変更などにより計測に制限があります。明確なルールと確認手順が重要です。" }, { question: "売上は保証されますか？", answer: "いいえ。使いやすさや透明性を高める仕組みであり、成果は商品、発信、対象者、運用にも左右されます。" }],
      ctaTitle: "紹介を、信頼できるパートナープログラムに変えませんか。",
      ctaText: "現在のサイトの基盤と、何を紹介として扱いたいかを短く教えてください。適切な始め方を確認します。",
      ctaLabel: "WhatsAppで相談",
      articleLabel: "パートナープログラムの解説へ",
      previewTitle: "既存サイト向けパートナープログラム",
      previewText: "クリエイター、紹介リンク、ステータス、運用ルールを一つの仕組みにまとめます。",
    },
    article: {
      locale: "jp", slug: "affiliate-program-platform", metaTitle: "既存サイト向けパートナープログラムの作り方", metaDescription: "個別リンク、ステータス、素材、確認手順を備えたパートナープログラムを既存サイトに組み込む考え方。", title: "既存サイトのパートナープログラム: クリエイターが使いやすく、運営も管理しやすい仕組み", excerpt: "良いパートナープログラムは、リンクだけでなく、ルール、素材、ステータス、確認の流れまで設計します。", publishedAt: "2026-08-10", updatedAt: "2026-08-10", author: "Navines", sections: [{ title: "リンクの先にある運用", paragraphs: ["個別リンクは入口です。誰が何を紹介し、何を確認できるかまで整って初めて運用しやすくなります。", "パートナーが迷わない導線は、運営側の問い合わせも減らします。"] }, { title: "クリエイターに必要なもの", paragraphs: ["分かりやすいリンク、最新素材、短い説明、状態を確認する画面が基本になります。", "発信の成果は保証できませんが、参加しやすい環境はつくれます。"] }, { title: "計測には前提がある", paragraphs: ["Cookieの同意、端末変更、ブラウザの制限により、すべてを完全に追跡できるわけではありません。", "ルールを事前に明示し、必要に応じて人が確認することが大切です。"] }, { title: "最初は小さく", paragraphs: ["既存のECやCRMにつながる一つの導線から始め、実際の利用を確認します。", "確認できたものだけを段階的に広げます。"] }], faqs: [{ question: "新しいサイトは必要ですか？", answer: "必ずしも必要ではありません。既存環境の連携可能性を先に確認します。" }, { question: "データを会話形式で見られますか？", answer: "データと権限の条件が整えば、状況を分かりやすく確認する仕組みを検討できます。" }], cta: { title: "パートナープログラムを相談する", text: "紹介したいサービスと現在のサイト環境をお知らせください。", whatsappLabel: "WhatsAppで相談", emailLabel: "メールを送る" },
    },
  },
  ar: {
    locale: "ar",
    service: {
      eyebrow: "برنامج شركاء للموقع القائم",
      title: "بناء منصة برنامج شركاء مخصصة لموقعكم الحالي",
      metaTitle: "بناء برنامج شركاء لموقع قائم",
      metaDescription: "تبني Navines منصات برامج شركاء للمواقع والمتاجر القائمة: بوابة للشركاء، روابط شخصية، إسناد، حالات، تقارير وإدارة واضحة.",
      intro: "لا حاجة لاستبدال الموقع أو المتجر القائم. نضيف طبقة منظمة لبرنامج الشركاء، بحيث يحصل صناع المحتوى والشركاء على روابطهم وموادهم وحالة واضحة، ويحصل الفريق على قواعد وموافقات ومصادر إحالة في مسار واحد.",
      capabilitiesTitle: "ما الذي يمكن أن تتضمنه المنصة",
      capabilities: ["بوابة للشركاء مع طلب انضمام وموافقة ومساحة شخصية", "روابط شخصية وروابط عميقة ورموز حملات", "حالات للإحالات المسجلة وقيد المراجعة والمعتمدة", "مكتبة مواد تضم الروابط والنصوص والمواد المحدّثة", "تقارير حسب الشريك أو الحملة أو صفحة الهبوط", "ربط بالمتجر أو النماذج أو CRM أو API عند توفر الصلاحية والدعم"],
      valueTitle: "قيمة عملية للطرفين",
      value: ["يعرف الشريك أي رابط يستخدم وما معنى الحالة الظاهرة له.", "يستطيع الفريق تنظيم المصادر والقواعد والمراجعة في مكان واحد.", "العملية الواضحة تعطي ثقة أكبر من الأكواد والجداول المبعثرة.", "المنصة قد تسهّل التعاون، لكنها لا تضمن الزيارات أو المبيعات."],
      processTitle: "كيف نبدأ",
      process: [{ title: "تحديد البرنامج", text: "نحدد الشريك المناسب، وما الذي يعد إحالة، وما يحتاج مراجعة بشرية." }, { title: "فحص البيئة القائمة", text: "نفحص الموقع والمتجر وCRM والواجهات المتاحة قبل الربط." }, { title: "بناء تجربة الشريك", text: "نصمم الروابط والمواد والحالات لتكون بسيطة حتى لغير التقنيين." }, { title: "إطلاق محدود", text: "نبدأ بمجموعة صغيرة ونوسّع بعد اختبار الاستخدام الحقيقي." }],
      faqTitle: "أسئلة شائعة",
      faqs: [{ question: "هل يمكن ربطه بموقع قائم؟", answer: "نعم. نفحص WordPress أو WooCommerce أو Shopify أو موقعاً مخصصاً أو CRM أو API وفق البنية والصلاحيات." }, { question: "هل يمكن معرفة مصدر كل عملية بدقة كاملة؟", answer: "ليس دائماً. قد تؤثر الموافقات والمتصفح وتغيير الجهاز على الإسناد، لذلك نحدد قواعد واضحة ومراجعة عند الحاجة." }, { question: "هل يضمن البرنامج نتائج تجارية؟", answer: "لا. هو ينظم التعاون والشفافية، بينما تتأثر النتائج بالعرض والجمهور والمحتوى وطريقة التشغيل." }],
      ctaTitle: "هل تريدون تحويل التوصيات إلى برنامج شركاء منظم؟",
      ctaText: "أرسلوا لنا نوع الموقع وما الذي تريدون اعتباره إحالة، وسنراجع نقطة البداية المناسبة.",
      ctaLabel: "تحدثوا عبر WhatsApp",
      articleLabel: "دليل برنامج الشركاء",
      previewTitle: "برنامج شركاء للموقع القائم",
      previewText: "روابط وحالات ومواد وقواعد تشغيل واضحة للشركاء وصناع المحتوى.",
    },
    article: {
      locale: "ar", slug: "affiliate-program-platform", metaTitle: "كيف تبني برنامج شركاء موثوقاً لموقع قائم", metaDescription: "دليل عملي لبناء بوابة شركاء وروابط شخصية وإسناد وحالات ومراجعة لموقع أو متجر قائم.", title: "برنامج شركاء لموقع قائم: روابط واضحة وثقة وتشغيل منظم", excerpt: "برنامج الشركاء الجيد لا يقتصر على كود خصم؛ بل يربط الشركاء والروابط والقواعد والحالات في عملية مفهومة.", publishedAt: "2026-08-10", updatedAt: "2026-08-10", author: "Navines", sections: [{ title: "أكثر من رابط", paragraphs: ["الرابط الشخصي هو البداية فقط. يحتاج الشريك إلى مسار واضح ومواد محدثة وحالة يستطيع فهمها.", "هذا يقلل الرسائل المتكررة ويمنح الفريق رؤية أفضل للعملية."] }, { title: "ما يحتاجه صانع المحتوى", paragraphs: ["بوابة بسيطة تضم روابطه ومواده وحالة الإحالات تجعل العمل أكثر وضوحاً.", "لا تضمن هذه البيئة نتائج النشر، لكنها تقلل الاحتكاك في التعاون."] }, { title: "الإسناد والمراجعة", paragraphs: ["قد تتأثر المتابعة بالموافقة على ملفات الارتباط أو تغيير الجهاز. لذلك يجب تعريف القواعد والاستثناءات منذ البداية.", "الحالة قيد المراجعة والمراجعة البشرية تساعدان في التعامل مع الحالات غير الواضحة بصورة مسؤولة."] }, { title: "ابدؤوا بشكل محدود", paragraphs: ["ابدؤوا بشركاء قليلين ومسار واحد متصل بالموقع أو المتجر القائم.", "وسّعوا النظام بعد التأكد من أن جميع الأطراف تفهم الخطوات."] }], faqs: [{ question: "هل أحتاج إلى متجر جديد؟", answer: "لا. نبدأ بفحص التكامل الممكن مع الموقع أو المتجر القائم." }, { question: "هل يمكن تحليل البيانات؟", answer: "يمكن فحص ذلك وفق البيانات المتاحة والصلاحيات والواجهات المصرح بها." }], cta: { title: "ناقشوا برنامج الشركاء", text: "أخبرونا ما الذي يريد الشركاء الترويج له وعلى أي منصة يعمل موقعكم.", whatsappLabel: "تحدثوا عبر WhatsApp", emailLabel: "إرسال بريد" },
    },
  },
  hi: {
    locale: "hi",
    service: {
      eyebrow: "मौजूदा वेबसाइट के लिए पार्टनर प्रोग्राम",
      title: "आपकी मौजूदा वेबसाइट के लिए कस्टम पार्टनर प्रोग्राम प्लेटफ़ॉर्म",
      metaTitle: "मौजूदा वेबसाइट के लिए पार्टनर प्रोग्राम बनवाएँ",
      metaDescription: "Navines मौजूदा वेबसाइट और स्टोर के लिए कस्टम पार्टनर प्रोग्राम बनाता है: पार्टनर पोर्टल, निजी लिंक, एट्रिब्यूशन, स्टेटस, रिपोर्ट और स्पष्ट संचालन।",
      intro: "मौजूदा साइट या स्टोर बदलने की जरूरत नहीं। हम उसके ऊपर एक व्यवस्थित पार्टनर प्रोग्राम लेयर बनाते हैं, जहाँ क्रिएटर और रेफरल पार्टनर निजी लिंक, सामग्री और स्टेटस देख सकें, और आपकी टीम नियम, अनुमोदन और स्रोत एक जगह संभाल सके।",
      capabilitiesTitle: "प्लेटफ़ॉर्म में क्या हो सकता है",
      capabilities: ["आवेदन, अनुमोदन और निजी डैशबोर्ड वाला पार्टनर पोर्टल", "निजी लिंक, डीप लिंक और अभियान कोड", "पंजीकृत, समीक्षा में और स्वीकृत रेफरल के स्टेटस", "अपडेटेड टेक्स्ट, लिंक और ब्रांड सामग्री की लाइब्रेरी", "पार्टनर, अभियान और लैंडिंग पेज के आधार पर रिपोर्ट", "अनुमति और उपलब्ध API के अनुसार स्टोर, फॉर्म या CRM इंटीग्रेशन"],
      valueTitle: "दोनों पक्षों के लिए स्पष्टता",
      value: ["पार्टनर को सही लिंक और वर्तमान स्टेटस तुरंत मिलता है।", "टीम स्रोत, नियम और समीक्षा को एक स्थान पर संभाल सकती है।", "स्पष्ट प्रक्रिया बिखरे कूपन और स्प्रेडशीट से अधिक भरोसेमंद लगती है।", "यह सहयोग आसान कर सकती है, पर ट्रैफ़िक या बिक्री की गारंटी नहीं देती।"],
      processTitle: "काम की शुरुआत",
      process: [{ title: "कार्यक्रम तय करना", text: "तय करते हैं कि किसे पार्टनर बनना है, कौन सी कार्रवाई गिनी जाएगी और कहाँ मानवीय समीक्षा चाहिए।" }, { title: "मौजूदा सिस्टम की जांच", text: "वेबसाइट, स्टोर, CRM और उपलब्ध API को पहले समझते हैं।" }, { title: "सरल अनुभव बनाना", text: "लिंक, सामग्री और स्टेटस को गैर-तकनीकी उपयोगकर्ता के लिए भी आसान बनाया जाता है।" }, { title: "छोटे समूह से परीक्षण", text: "पहले सीमित पार्टनर समूह के साथ परीक्षण कर के फिर विस्तार करते हैं।" }],
      faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
      faqs: [{ question: "क्या यह मौजूदा वेबसाइट से जुड़ सकता है?", answer: "हाँ। WordPress, WooCommerce, Shopify, कस्टम साइट, CRM या उपलब्ध API की व्यवहार्यता और अनुमति पहले देखी जाती है।" }, { question: "क्या हर बिक्री का स्रोत पूरी तरह निश्चित होगा?", answer: "हर स्थिति में नहीं। ब्राउज़र, सहमति और डिवाइस बदलने से एट्रिब्यूशन प्रभावित हो सकता है, इसलिए स्पष्ट नियम और समीक्षा जरूरी हैं।" }, { question: "क्या इससे बिक्री की गारंटी है?", answer: "नहीं। यह संचालन और पारदर्शिता को बेहतर बनाता है; परिणाम ऑफ़र, दर्शक, सामग्री और सक्रियता पर भी निर्भर करते हैं।" }],
      ctaTitle: "क्या आप रेफरल को एक भरोसेमंद पार्टनर प्रोग्राम में बदलना चाहते हैं?",
      ctaText: "हमें बताइए कि आपकी साइट किस प्लेटफ़ॉर्म पर है और आप किस कार्रवाई को रेफरल मानना चाहते हैं। हम सही शुरुआती बिंदु देखेंगे।",
      ctaLabel: "WhatsApp पर बात करें",
      articleLabel: "पार्टनर प्रोग्राम गाइड पढ़ें",
      previewTitle: "मौजूदा वेबसाइट के लिए पार्टनर प्रोग्राम",
      previewText: "क्रिएटर्स, रेफरल लिंक, स्टेटस और संचालन नियमों के लिए स्पष्ट आधार।",
    },
    article: {
      locale: "hi", slug: "affiliate-program-platform", metaTitle: "मौजूदा वेबसाइट के लिए भरोसेमंद पार्टनर प्रोग्राम कैसे बनाएं", metaDescription: "पार्टनर पोर्टल, निजी लिंक, एट्रिब्यूशन, स्टेटस और नियंत्रण के साथ मौजूदा वेबसाइट पर पार्टनर प्रोग्राम बनाने की गाइड।", title: "मौजूदा वेबसाइट के लिए पार्टनर प्रोग्राम: लिंक, पारदर्शिता और व्यवस्थित संचालन", excerpt: "एक अच्छा पार्टनर प्रोग्राम सिर्फ कूपन कोड नहीं है; यह क्रिएटर, लिंक, नियम और स्टेटस को एक स्पष्ट प्रक्रिया में जोड़ता है।", publishedAt: "2026-08-10", updatedAt: "2026-08-10", author: "Navines", sections: [{ title: "सिर्फ लिंक से आगे", paragraphs: ["निजी लिंक शुरुआत है। पार्टनर को सही पेज, सामग्री और समझने योग्य स्टेटस चाहिए।", "यह संचालन को सरल बनाता है और बार-बार पूछे जाने वाले सवाल घटाता है।"] }, { title: "क्रिएटर को क्या चाहिए", paragraphs: ["सरल पोर्टल, सही लिंक और उपयोगी सामग्री उन्हें आत्मविश्वास से काम करने देते हैं।", "इससे परिणाम की गारंटी नहीं होती, लेकिन सहयोग में रुकावट कम हो सकती है।"] }, { title: "एट्रिब्यूशन में सीमाएँ", paragraphs: ["कुकी सहमति, ब्राउज़र और डिवाइस बदलने से हर घटना पूरी तरह ट्रैक नहीं होती।", "नियम पहले तय करें और अस्पष्ट मामलों के लिए मानवीय समीक्षा रखें।"] }, { title: "छोटे दायरे से शुरू करें", paragraphs: ["मौजूदा स्टोर या CRM से जुड़े एक स्पष्ट प्रवाह और छोटे पार्टनर समूह से शुरुआत करें।", "वास्तविक उपयोग देखकर ही अगला चरण जोड़ें।"] }], faqs: [{ question: "क्या नई वेबसाइट चाहिए?", answer: "नहीं। पहले मौजूदा प्लेटफ़ॉर्म पर संभव इंटीग्रेशन देखते हैं।" }, { question: "क्या डेटा को समझना आसान होगा?", answer: "उपलब्ध डेटा और अधिकृत एक्सेस के अनुसार सरल रिपोर्ट या प्रश्न-आधारित दृश्य की जाँच की जा सकती है।" }], cta: { title: "पार्टनर प्रोग्राम पर बात करें", text: "बताइए पार्टनर क्या प्रचार करेंगे और आपकी साइट कहाँ चलती है।", whatsappLabel: "WhatsApp पर बात करें", emailLabel: "ईमेल भेजें" },
    },
  },
  fr: {
    locale: "fr",
    service: {
      eyebrow: "Programme d’affiliation pour site existant",
      title: "Créer une plateforme d’affiliation sur votre site existant",
      metaTitle: "Créer un programme d’affiliation pour un site existant",
      metaDescription: "Navines conçoit des plateformes d’affiliation pour sites et boutiques existants : portail partenaires, liens personnels, attribution, statuts, rapports et gestion claire.",
      intro: "Votre site ou votre boutique existe déjà. Nous y ajoutons une couche d’affiliation fiable afin que créateurs, prescripteurs et partenaires disposent de liens personnels, de ressources et d’un statut clair. Votre équipe garde les règles, validations et sources de recommandation dans un même parcours.",
      capabilitiesTitle: "Ce que la plateforme peut intégrer",
      capabilities: ["Portail partenaire avec inscription, validation et espace personnel", "Liens personnels, liens profonds et codes de campagne", "Statuts pour recommandations enregistrées, à vérifier et validées", "Bibliothèque de contenus avec liens, messages et éléments de marque à jour", "Rapports par partenaire, campagne ou page de destination", "Connexions à la boutique, aux formulaires, au CRM ou à une API lorsque cela est autorisé"],
      valueTitle: "Une collaboration plus claire",
      value: ["Les créateurs savent quel lien utiliser et comprennent leur statut.", "L’équipe centralise les sources, règles et vérifications.", "Un processus transparent inspire davantage confiance que des codes et tableaux dispersés.", "La plateforme peut faciliter la collaboration, sans garantir trafic ni ventes."],
      processTitle: "Notre méthode",
      process: [{ title: "Définir le programme", text: "Nous clarifions les partenaires visés, l’action comptabilisée et les étapes de vérification." }, { title: "Vérifier l’existant", text: "Nous examinons le site, la boutique, le CRM et les API disponibles avant toute intégration." }, { title: "Créer l’expérience partenaire", text: "Liens, ressources et statuts sont conçus pour être simples, même sans compétence technique." }, { title: "Lancer progressivement", text: "Nous testons avec un groupe restreint avant d’élargir le programme." }],
      faqTitle: "Questions fréquentes",
      faqs: [{ question: "Peut-on l’ajouter à un site déjà en ligne ?", answer: "Oui. Nous vérifions WordPress, WooCommerce, Shopify, un site sur mesure, un CRM ou une API selon l’infrastructure et les droits disponibles." }, { question: "Chaque vente sera-t-elle attribuée avec certitude ?", answer: "Pas toujours. Le navigateur, le consentement et le changement d’appareil peuvent limiter l’attribution. Des règles claires et une vérification sont donc essentielles." }, { question: "Le programme garantit-il des résultats commerciaux ?", answer: "Non. Il améliore l’organisation et la transparence, tandis que les résultats dépendent aussi de l’offre, du public, du contenu et de l’animation." }],
      ctaTitle: "Vous voulez transformer les recommandations en programme partenaire structuré ?",
      ctaText: "Indiquez-nous la plateforme de votre site et l’action que vous souhaitez suivre. Nous étudierons le bon point de départ.",
      ctaLabel: "Écrire sur WhatsApp",
      articleLabel: "Lire le guide d’affiliation",
      previewTitle: "Programme d’affiliation pour site existant",
      previewText: "Un cadre clair pour créateurs, liens, statuts et règles de fonctionnement.",
    },
    article: {
      locale: "fr", slug: "affiliate-program-platform", metaTitle: "Comment créer un programme d’affiliation fiable sur un site existant", metaDescription: "Guide pour créer un programme d’affiliation avec portail partenaires, liens personnels, attribution, statuts et contrôle sur un site existant.", title: "Programme d’affiliation pour site existant : liens, confiance et fonctionnement clair", excerpt: "Un bon programme d’affiliation ne se limite pas à un code promotionnel : il relie partenaires, liens, règles, statuts et contrôle opérationnel.", publishedAt: "2026-08-10", updatedAt: "2026-08-10", author: "Navines", sections: [{ title: "Bien plus qu’un code", paragraphs: ["Un lien personnel est un point de départ. Les partenaires ont aussi besoin de règles lisibles, de ressources à jour et d’un statut compréhensible.", "Cette clarté réduit les échanges répétitifs et facilite la gestion quotidienne."] }, { title: "Ce dont les créateurs ont besoin", paragraphs: ["Un espace simple, des liens adaptés et des supports actualisés permettent de publier avec plus de confiance.", "Cela ne garantit pas de performance, mais rend la collaboration plus fluide."] }, { title: "Attribution et vérification", paragraphs: ["Consentement aux cookies, navigateur et changement d’appareil peuvent affecter la mesure. Les règles doivent être explicites dès le départ.", "Les statuts de vérification et le contrôle humain aident à traiter les cas ambigus de façon responsable."] }, { title: "Commencer à petite échelle", paragraphs: ["Un premier flux relié au site, à la boutique ou au CRM existant permet de tester le fonctionnement réel.", "On élargit ensuite uniquement ce qui est compris et validé par l’équipe et les partenaires."] }], faqs: [{ question: "Faut-il créer une nouvelle boutique ?", answer: "Non. Nous commençons par examiner les possibilités d’intégration de l’environnement existant." }, { question: "Les données peuvent-elles être analysées ?", answer: "Nous pouvons étudier une vue claire selon les données disponibles, les autorisations et les API." }], cta: { title: "Parlons de votre programme partenaire", text: "Dites-nous ce que vos partenaires doivent recommander et sur quelle plateforme fonctionne votre site.", whatsappLabel: "Écrire sur WhatsApp", emailLabel: "Envoyer un email" },
    },
  },
  zh: {
    locale: "zh",
    service: {
      eyebrow: "现有网站合作伙伴计划",
      title: "为现有网站打造定制合作伙伴计划平台",
      metaTitle: "为现有网站开发合作伙伴计划",
      metaDescription: "Navines 为现有网站和商城打造合作伙伴计划平台：伙伴门户、专属链接、归因、状态、报告与清晰的运营流程。",
      intro: "无需替换现有网站或商城。我们在其基础上建立清晰可靠的合作伙伴计划层，让内容创作者、推荐人和业务伙伴获得专属链接、素材与状态信息；团队则可在同一流程中管理规则、审批与推荐来源。",
      capabilitiesTitle: "平台可以包含什么",
      capabilities: ["包含申请、审批与个人空间的伙伴门户", "专属链接、深层链接与活动代码", "已登记、待核验和已确认推荐的状态", "集中管理的文案、链接与品牌素材库", "按伙伴、活动或落地页查看的报告", "在授权与 API 条件允许时连接商城、表单、CRM 或业务 API"],
      valueTitle: "让合作更清楚、更可信",
      value: ["伙伴知道该使用哪个链接，也能理解当前状态。", "团队可以在一处管理来源、规则与人工核验。", "清晰流程比零散优惠码和表格更能建立信任。", "该平台可提升协作效率，但不保证流量或销售结果。"],
      processTitle: "实施方式",
      process: [{ title: "定义计划", text: "先明确伙伴类型、计入的行为和需要人工核验的环节。" }, { title: "检查现有系统", text: "在连接前检查网站、商城、CRM 和可用 API。" }, { title: "构建伙伴体验", text: "链接、素材和状态设计为无需技术背景也能使用。" }, { title: "小范围验证", text: "先与小规模伙伴群体测试，再依据实际使用逐步扩展。" }],
      faqTitle: "常见问题",
      faqs: [{ question: "可以接入现有网站吗？", answer: "可以。我们会根据现有架构和权限评估 WordPress、WooCommerce、Shopify、定制网站、CRM 或 API。" }, { question: "每一笔销售都能准确归因吗？", answer: "不一定。浏览器、同意机制和设备变化都可能影响归因，因此需要清楚规则与核验流程。" }, { question: "能保证商业结果吗？", answer: "不能。平台改善的是协作、透明度和运营控制；结果还取决于产品、受众、内容和实际运营。" }],
      ctaTitle: "想把推荐变成一套可靠的合作伙伴计划吗？",
      ctaText: "告诉我们您的网站使用什么平台，以及希望将什么行为视为推荐。我们会评估合适的起步方式。",
      ctaLabel: "通过 WhatsApp 联系",
      articleLabel: "阅读合作伙伴计划指南",
      previewTitle: "面向现有网站的合作伙伴计划",
      previewText: "为创作者、推荐链接、状态与运营规则建立清晰基础。",
    },
    article: {
      locale: "zh", slug: "affiliate-program-platform", metaTitle: "如何为现有网站建立可靠的合作伙伴计划", metaDescription: "了解如何在现有网站或商城上建立包含伙伴门户、专属链接、归因、状态与人工核验的合作伙伴计划。", title: "现有网站的合作伙伴计划：链接、透明度与清晰运营", excerpt: "好的合作伙伴计划不只是折扣码；它将伙伴、链接、规则、状态和运营核验连接为清晰流程。", publishedAt: "2026-08-10", updatedAt: "2026-08-10", author: "Navines", sections: [{ title: "不只是一个链接", paragraphs: ["专属链接只是开始。伙伴还需要明确规则、最新素材和易理解的状态。", "清晰的流程可以减少重复沟通，让团队更容易管理。"] }, { title: "创作者真正需要什么", paragraphs: ["简单的伙伴空间、正确的链接和可用素材能帮助创作者更有信心地发布内容。", "这不会保证内容带来结果，但能减少协作中的摩擦。"] }, { title: "归因与核验", paragraphs: ["Cookie 同意、浏览器限制和更换设备都会影响归因，因此不应承诺每一次事件都能被完整追踪。", "预先写明规则，并为不明确的情况保留人工核验。"] }, { title: "从小范围开始", paragraphs: ["从一个与现有商城或 CRM 相连的路径和小规模伙伴群体开始。", "只有在团队和伙伴都理解流程后，再逐步扩展。"] }], faqs: [{ question: "需要新建网站吗？", answer: "不需要。我们先评估现有环境的连接可能性。" }, { question: "可以分析伙伴数据吗？", answer: "可以根据可用数据、授权和 API 条件评估清晰的报告或查询方式。" }], cta: { title: "讨论合作伙伴计划", text: "告诉我们伙伴要推广什么，以及您的网站运行在哪个平台。", whatsappLabel: "通过 WhatsApp 联系", emailLabel: "发送邮件" },
    },
  },
};
