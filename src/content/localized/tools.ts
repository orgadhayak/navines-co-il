import type { PublicLocale } from "@/i18n/locales";

export type BaseLocalToolId = "link" | "message" | "domain" | "email" | "campaign";
export type ExtendedLocalToolId = "bulk" | "first-aid" | "website" | "message-links" | "email-list" | "utm-builder" | "copy" | "qr" | "password-check" | "account-protection";
export type LocalToolId = BaseLocalToolId | ExtendedLocalToolId;

export const localToolIds: LocalToolId[] = ["link", "message", "domain", "email", "campaign", "bulk", "first-aid", "website", "message-links", "email-list", "utm-builder", "copy", "qr", "password-check", "account-protection"];

export type LocalizedTool = {
  title: string;
  summary: string;
  formTitle: string;
  fieldLabel: string;
  placeholder: string;
  submit: string;
  note: string;
  options?: { value: string; label: string; guidance: string }[];
  checklist?: string[];
};

export type LocalizedToolsCopy = {
  locale: PublicLocale;
  eyebrow: string;
  pageTitle: string;
  pageDescription: string;
  previewTitle: string;
  previewText: string;
  privacyNote: string;
  homeLabel: string;
  hebrewToolsLabel: string;
  externalToolsLabel: string;
  resultLabels: { empty: string; positive: string; caution: string; warning: string; body: string };
  resultDetails: { empty: string; invalid: string; checked: string };
  tools: Record<LocalToolId, LocalizedTool>;
};

type LocalizedToolsBaseCopy = Omit<LocalizedToolsCopy, "tools"> & {
  tools: Record<BaseLocalToolId, LocalizedTool>;
};

export const localizedToolsCopy: Record<PublicLocale, LocalizedToolsBaseCopy> = {
  de: {
    locale: "de",
    eyebrow: "Praktische Browser-Tools",
    pageTitle: "Kleine Prüfungen für klare digitale Entscheidungen",
    pageDescription: "Kostenlose lokale Prüfungen für Links, Nachrichten, Domains, E-Mail-Adressen und Kampagnen-Links. Ohne Registrierung und ohne die Eingabe an einen Server zu senden.",
    previewTitle: "Kleine Werkzeuge für klarere digitale Entscheidungen",
    previewText: "15 kurze Werkzeuge für Links, Nachrichten, Domains, E-Mails, Kampagnen und digitale Erste Hilfe. Sie laufen lokal im Browser und liefern Hinweise, keine Garantien.",
    privacyNote: "Die Prüfungen laufen im Browser. Geben Sie keine Passwörter, Codes oder vertraulichen Geschäftsdaten ein.",
    homeLabel: "Zur deutschen Startseite",
    hebrewToolsLabel: "Zu den hebräischen Tools",
    externalToolsLabel: "Weitere Link- und Vertrauensprüfungen auf CheckLink.ai",
    resultLabels: { empty: "Noch keine Prüfung", positive: "Keine auffälligen Grundsignale gefunden", caution: "Weitere Prüfung sinnvoll", warning: "Bitte anhalten und genauer prüfen", body: "Das Ergebnis ist nur eine lokale Strukturprüfung. Es bestätigt weder die Identität einer Person noch die Sicherheit einer Website oder Kampagne." },
    resultDetails: { empty: "Geben Sie einen Wert ein, um die lokale Prüfung zu starten.", invalid: "Der eingegebene Wert ist nicht vollständig genug für diese Prüfung.", checked: "Die lokale Prüfung ist abgeschlossen. Prüfen Sie die gefundene Struktur zusätzlich mit einer offiziellen Quelle." },
    tools: {
      link: { title: "Link vor dem Öffnen prüfen", summary: "HTTPS, Kurzlinks, Punycode und einfache Strukturmerkmale prüfen.", formTitle: "Prüfen Sie eine Adresse, bevor Sie sie öffnen oder teilen", fieldLabel: "Öffentliche Webadresse", placeholder: "https://example.com", submit: "Lokal prüfen", note: "Die Website wird nicht geöffnet und die Adresse nicht an einen externen Dienst gesendet." },
      message: { title: "Verdächtige Nachricht prüfen", summary: "Hinweise auf Dringlichkeit, Codes, Zahlungen, Links und Geheimhaltung erkennen.", formTitle: "Prüfen Sie eine Nachricht, bevor Sie reagieren", fieldLabel: "SMS, E-Mail oder WhatsApp-Nachricht", placeholder: "Fügen Sie eine Nachricht ohne persönliche Daten ein", submit: "Lokal analysieren", note: "Geben Sie keine Passwörter, Einmalcodes oder persönlichen Daten ein." },
      domain: { title: "Ähnliche Domains vergleichen", summary: "Eine bekannte Adresse mit einer erhaltenen Adresse vergleichen.", formTitle: "Vergleichen Sie eine bekannte und eine erhaltene Adresse", fieldLabel: "Bekannte Domain", placeholder: "navines.co.il", submit: "Lokal vergleichen", note: "Ähnlichkeit ist ein Hinweis für weitere Prüfung, kein Beweis für Identität." },
      email: { title: "E-Mail-Adresse prüfen", summary: "Struktur, Domain und ungewöhnliche Zeichen lokal prüfen.", formTitle: "Prüfen Sie eine E-Mail-Adresse vor dem Antworten", fieldLabel: "E-Mail-Adresse", placeholder: "name@example.com", submit: "Lokal prüfen", note: "Es wird keine E-Mail gesendet und kein Postfach kontaktiert." },
      campaign: { title: "Kampagnen-Link prüfen", summary: "UTM-Parameter auf klare und messbare Kennzeichnung prüfen.", formTitle: "Prüfen Sie einen Kampagnen-Link vor dem Versand", fieldLabel: "Link mit UTM-Parametern", placeholder: "https://example.com/?utm_source=...", submit: "Lokal prüfen", note: "Die Prüfung ersetzt keine Analytics-Auswertung und misst keine Kampagnenleistung." },
    },
  },
  jp: {
    locale: "jp",
    eyebrow: "実務に使えるブラウザツール",
    pageTitle: "クリックや共有の前に、短く確認するためのツール",
    pageDescription: "リンク、メッセージ、ドメイン、メールアドレス、キャンペーンURLをブラウザ内で確認できます。登録不要で、入力内容をサーバーへ送信しません。",
    previewTitle: "デジタル上の判断をわかりやすくする小さなツール",
    previewText: "リンク、メッセージ、ドメイン、メール、キャンペーン、デジタル初動に役立つ15の小さなツールです。結果は参考情報であり、保証ではありません。",
    privacyNote: "確認はブラウザ内で行います。パスワード、認証コード、機密情報は入力しないでください。",
    homeLabel: "日本語トップへ戻る",
    hebrewToolsLabel: "ヘブライ語ツールを見る",
    externalToolsLabel: "CheckLink.ai でさらに多くのリンクと信頼性チェックを見る",
    resultLabels: { empty: "まだ確認していません", positive: "基本的な注意サインは見つかりませんでした", caution: "追加確認をおすすめします", warning: "いったん止まって確認してください", body: "これは構造上の簡易チェックです。相手の身元、サイトの安全性、キャンペーンの成果を保証するものではありません。" },
    resultDetails: { empty: "値を入力すると、ブラウザ内で確認を始められます。", invalid: "入力内容がこの確認に必要な形式になっていません。", checked: "ブラウザ内の確認が完了しました。重要な判断の前に公式情報でも確認してください。" },
    tools: {
      link: { title: "開く前にリンクを確認", summary: "HTTPS、短縮URL、Punycodeなどを確認します。", formTitle: "開いたり共有したりする前にURLを確認", fieldLabel: "公開URL", placeholder: "https://example.com", submit: "ブラウザ内で確認", note: "サイトは開かず、URLも外部サービスへ送信しません。" },
      message: { title: "不審なメッセージを確認", summary: "急かす表現、コード、支払い、リンクなどのサインを確認します。", formTitle: "返信する前にメッセージを確認", fieldLabel: "SMS、メール、WhatsAppの本文", placeholder: "個人情報を除いて本文を貼り付けてください", submit: "ブラウザ内で分析", note: "パスワード、認証コード、個人情報は入力しないでください。" },
      domain: { title: "似たドメインを比較", summary: "知っているURLと受け取ったURLの表記を比較します。", formTitle: "知っているドメインと受け取ったドメインを比較", fieldLabel: "知っているドメイン", placeholder: "navines.co.il", submit: "ブラウザ内で比較", note: "似ていることは確認が必要なサインであり、本人性の証明ではありません。" },
      email: { title: "メールアドレスを確認", summary: "形式、ドメイン、気になる文字を確認します。", formTitle: "返信する前にメールアドレスを確認", fieldLabel: "メールアドレス", placeholder: "name@example.com", submit: "ブラウザ内で確認", note: "メールを送信せず、受信箱へ接続もしません。" },
      campaign: { title: "キャンペーンURLを確認", summary: "UTMパラメータが整理されているか確認します。", formTitle: "配信前にキャンペーンURLを確認", fieldLabel: "UTM付きURL", placeholder: "https://example.com/?utm_source=...", submit: "ブラウザ内で確認", note: "実際のアクセス解析や成果測定は行いません。" },
    },
  },
  ar: {
    locale: "ar",
    eyebrow: "أدوات عملية من المتصفح",
    pageTitle: "فحوص قصيرة تساعدكم على اتخاذ قرار رقمي أوضح",
    pageDescription: "فحوص محلية للروابط والرسائل والنطاقات وعناوين البريد وروابط الحملات، من دون تسجيل أو إرسال النص إلى خادم.",
    previewTitle: "أدوات صغيرة لقرارات رقمية أوضح",
    previewText: "15 أداة قصيرة للروابط والرسائل والنطاقات والبريد والحملات والإسعاف الرقمي. تعمل محلياً وتقدم إشارات للمراجعة لا ضمانات.",
    privacyNote: "تعمل الفحوص داخل المتصفح. لا تدخلوا كلمات مرور أو رموز تحقق أو معلومات تجارية حساسة.",
    homeLabel: "العودة إلى الصفحة العربية",
    hebrewToolsLabel: "الانتقال إلى الأدوات بالعبرية",
    externalToolsLabel: "فحوص إضافية للروابط والثقة على CheckLink.ai",
    resultLabels: { empty: "لم يتم إجراء فحص بعد", positive: "لم تظهر إشارات أساسية مقلقة", caution: "يُنصح بفحص إضافي", warning: "توقفوا وتحققوا قبل المتابعة", body: "هذه نتيجة لفحص بنية محلي فقط. لا تثبت هوية المرسل أو أمان الموقع أو نجاح الحملة." },
    resultDetails: { empty: "أدخلوا قيمة للبدء بالفحص المحلي داخل المتصفح.", invalid: "القيمة المدخلة غير مكتملة لهذا الفحص.", checked: "اكتمل الفحص المحلي. تحققوا أيضاً من المصدر الرسمي قبل اتخاذ قرار مهم." },
    tools: {
      link: { title: "فحص الرابط قبل فتحه", summary: "فحص HTTPS والروابط المختصرة وPunycode وبعض العلامات الأساسية.", formTitle: "افحصوا العنوان قبل فتحه أو مشاركته", fieldLabel: "عنوان ويب عام", placeholder: "https://example.com", submit: "فحص محلي", note: "لا يتم فتح الموقع ولا إرسال العنوان إلى خدمة خارجية." },
      message: { title: "فحص رسالة مشبوهة", summary: "التنبيه إلى الاستعجال والرموز والدفع والروابط وطلبات السرية.", formTitle: "افحصوا الرسالة قبل الرد عليها", fieldLabel: "رسالة SMS أو بريد أو WhatsApp", placeholder: "ألصقوا رسالة من دون معلومات شخصية", submit: "تحليل محلي", note: "لا تدخلوا كلمات المرور أو رموز الاستخدام لمرة واحدة أو البيانات الشخصية." },
      domain: { title: "مقارنة نطاقات متشابهة", summary: "مقارنة عنوان معروف بعنوان وصل إليكم لاكتشاف فروق الكتابة.", formTitle: "قارنوا بين نطاق معروف ونطاق وصل إليكم", fieldLabel: "النطاق المعروف", placeholder: "navines.co.il", submit: "مقارنة محلية", note: "التشابه علامة تستحق التحقق، وليس دليلاً على هوية الموقع." },
      email: { title: "فحص عنوان البريد", summary: "فحص البنية والنطاق وبعض الرموز غير المعتادة محلياً.", formTitle: "افحصوا عنوان البريد قبل الرد أو مشاركة المعلومات", fieldLabel: "عنوان البريد الإلكتروني", placeholder: "name@example.com", submit: "فحص محلي", note: "لا يتم إرسال بريد ولا الاتصال بصندوق الوارد." },
      campaign: { title: "فحص رابط حملة", summary: "فحص معاملات UTM للتأكد من أن الرابط قابل للقياس بوضوح.", formTitle: "افحصوا رابط الحملة قبل نشره", fieldLabel: "رابط يحتوي على UTM", placeholder: "https://example.com/?utm_source=...", submit: "فحص محلي", note: "لا يقيس هذا الفحص أداء الحملة ولا يستبدل أدوات التحليلات." },
    },
  },
  hi: {
    locale: "hi",
    eyebrow: "व्यावहारिक ब्राउज़र टूल्स",
    pageTitle: "क्लिक, जवाब या शेयर करने से पहले छोटी और उपयोगी जाँच",
    pageDescription: "लिंक, संदेश, डोमेन, ईमेल पते और कैंपेन लिंक की स्थानीय जाँच। रजिस्ट्रेशन की जरूरत नहीं और आपका इनपुट सर्वर पर नहीं भेजा जाता।",
    previewTitle: "बेहतर डिजिटल फैसलों के लिए छोटे उपयोगी टूल्स",
    previewText: "लिंक, संदेश, डोमेन, ईमेल, कैंपेन और डिजिटल प्राथमिक सहायता के लिए 15 छोटे टूल। ये ब्राउज़र में चलते हैं और संकेत देते हैं, गारंटी नहीं।",
    privacyNote: "जाँच ब्राउज़र में होती है। पासवर्ड, सत्यापन कोड या संवेदनशील व्यावसायिक जानकारी दर्ज न करें।",
    homeLabel: "हिंदी होमपेज पर जाएँ",
    hebrewToolsLabel: "हिब्रू टूल्स देखें",
    externalToolsLabel: "CheckLink.ai पर और लिंक व भरोसा जाँचें देखें",
    resultLabels: { empty: "अभी कोई जाँच नहीं हुई", positive: "बुनियादी चिंता के संकेत नहीं मिले", caution: "अतिरिक्त जाँच उचित है", warning: "रुककर आगे जाँच करें", body: "यह केवल स्थानीय संरचना जाँच है। यह प्रेषक की पहचान, वेबसाइट की सुरक्षा या कैंपेन के परिणाम की गारंटी नहीं देती।" },
    resultDetails: { empty: "स्थानीय जाँच शुरू करने के लिए कोई मान दर्ज करें।", invalid: "दिया गया मान इस जाँच के लिए पूरा नहीं है।", checked: "स्थानीय जाँच पूरी हुई। महत्वपूर्ण निर्णय से पहले आधिकारिक स्रोत से भी पुष्टि करें।" },
    tools: {
      link: { title: "खोलने से पहले लिंक जाँचें", summary: "HTTPS, शॉर्ट लिंक, Punycode और बुनियादी संरचना देखें।", formTitle: "लिंक खोलने या साझा करने से पहले जाँचें", fieldLabel: "सार्वजनिक वेब पता", placeholder: "https://example.com", submit: "स्थानीय जाँच", note: "वेबसाइट नहीं खोली जाएगी और पता किसी बाहरी सेवा को नहीं भेजा जाएगा।" },
      message: { title: "संदिग्ध संदेश जाँचें", summary: "जल्दबाजी, कोड, भुगतान, लिंक और गोपनीयता की मांग के संकेत देखें।", formTitle: "जवाब देने से पहले संदेश जाँचें", fieldLabel: "SMS, ईमेल या WhatsApp संदेश", placeholder: "व्यक्तिगत जानकारी हटाकर संदेश डालें", submit: "स्थानीय विश्लेषण", note: "पासवर्ड, वन-टाइम कोड या निजी जानकारी न डालें।" },
      domain: { title: "मिलते-जुलते डोमेन की तुलना", summary: "ज्ञात पते और मिले हुए पते में लिखावट के अंतर देखें।", formTitle: "ज्ञात और प्राप्त डोमेन की तुलना करें", fieldLabel: "ज्ञात डोमेन", placeholder: "navines.co.il", submit: "स्थानीय तुलना", note: "समानता आगे जाँच का संकेत है, पहचान का प्रमाण नहीं।" },
      email: { title: "ईमेल पता जाँचें", summary: "फ़ॉर्मेट, डोमेन और असामान्य अक्षरों की स्थानीय जाँच।", formTitle: "जवाब देने से पहले ईमेल पता जाँचें", fieldLabel: "ईमेल पता", placeholder: "name@example.com", submit: "स्थानीय जाँच", note: "कोई ईमेल नहीं भेजा जाता और मेलबॉक्स से कनेक्ट नहीं किया जाता।" },
      campaign: { title: "कैंपेन लिंक जाँचें", summary: "UTM पैरामीटर साफ और मापने योग्य हैं या नहीं देखें।", formTitle: "कैंपेन प्रकाशित करने से पहले लिंक जाँचें", fieldLabel: "UTM वाला लिंक", placeholder: "https://example.com/?utm_source=...", submit: "स्थानीय जाँच", note: "यह कैंपेन का प्रदर्शन नहीं मापता और Analytics का विकल्प नहीं है।" },
    },
  },
  fr: {
    locale: "fr",
    eyebrow: "Outils pratiques dans le navigateur",
    pageTitle: "De petites vérifications pour des décisions numériques plus claires",
    pageDescription: "Des vérifications locales pour les liens, messages, domaines, adresses e-mail et URLs de campagne. Sans inscription et sans envoyer votre saisie à un serveur.",
    previewTitle: "De petits outils pour des décisions numériques plus claires",
    previewText: "15 petits outils pour les liens, messages, domaines, e-mails, campagnes et premiers gestes numériques. Ils donnent des signaux, pas des garanties.",
    privacyNote: "Les vérifications restent dans le navigateur. N’entrez jamais de mots de passe, codes ou données professionnelles sensibles.",
    homeLabel: "Retour à l’accueil français",
    hebrewToolsLabel: "Voir les outils en hébreu",
    externalToolsLabel: "Davantage de vérifications de liens et de confiance sur CheckLink.ai",
    resultLabels: { empty: "Aucune vérification pour le moment", positive: "Aucun signal de base préoccupant", caution: "Une vérification complémentaire est recommandée", warning: "Arrêtez-vous et vérifiez avant de continuer", body: "Il s’agit d’une vérification locale de structure. Elle ne confirme ni l’identité d’un expéditeur, ni la sécurité d’un site, ni les résultats d’une campagne." },
    resultDetails: { empty: "Saisissez une valeur pour commencer la vérification locale.", invalid: "La valeur saisie n’est pas assez complète pour cette vérification.", checked: "La vérification locale est terminée. Pour une décision importante, confirmez aussi auprès d’une source officielle." },
    tools: {
      link: { title: "Vérifier un lien avant de l’ouvrir", summary: "Examiner HTTPS, les liens courts, le Punycode et la structure de l’adresse.", formTitle: "Vérifiez une adresse avant de l’ouvrir ou de la partager", fieldLabel: "Adresse web publique", placeholder: "https://example.com", submit: "Vérifier localement", note: "Le site ne sera pas ouvert et l’adresse ne sera pas envoyée à un service externe." },
      message: { title: "Vérifier un message suspect", summary: "Repérer urgence, codes, paiement, liens et demandes de confidentialité.", formTitle: "Vérifiez un message avant de répondre", fieldLabel: "SMS, e-mail ou message WhatsApp", placeholder: "Collez un message sans données personnelles", submit: "Analyser localement", note: "N’entrez pas de mots de passe, codes à usage unique ou informations personnelles." },
      domain: { title: "Comparer des domaines proches", summary: "Comparer une adresse connue avec une adresse reçue.", formTitle: "Comparez un domaine connu et un domaine reçu", fieldLabel: "Domaine connu", placeholder: "navines.co.il", submit: "Comparer localement", note: "La ressemblance est un signal à vérifier, pas une preuve d’identité." },
      email: { title: "Vérifier une adresse e-mail", summary: "Vérifier localement le format, le domaine et certains caractères inhabituels.", formTitle: "Vérifiez une adresse avant de répondre", fieldLabel: "Adresse e-mail", placeholder: "name@example.com", submit: "Vérifier localement", note: "Aucun e-mail n’est envoyé et aucune boîte n’est contactée." },
      campaign: { title: "Vérifier une URL de campagne", summary: "Contrôler les paramètres UTM pour une mesure plus claire.", formTitle: "Vérifiez une URL de campagne avant sa diffusion", fieldLabel: "URL avec paramètres UTM", placeholder: "https://example.com/?utm_source=...", submit: "Vérifier localement", note: "La vérification ne mesure pas la performance et ne remplace pas Analytics." },
    },
  },
  zh: {
    locale: "zh",
    eyebrow: "实用浏览器工具",
    pageTitle: "点击、回复或分享前，先做一次简短检查",
    pageDescription: "在浏览器中本地检查链接、消息、域名、邮箱地址和活动链接。无需注册，输入内容不会发送到服务器。",
    previewTitle: "帮助做出更清晰数字判断的小工具",
    previewText: "15项小工具可帮助检查链接、消息、域名、邮箱、活动链接和数字应急步骤。结果仅供参考，不构成保证。",
    privacyNote: "检查在浏览器内完成。请勿输入密码、验证码或敏感业务信息。",
    homeLabel: "返回中文首页",
    hebrewToolsLabel: "查看希伯来语工具",
    externalToolsLabel: "在 CheckLink.ai 查看更多链接与信任检查",
    resultLabels: { empty: "还没有进行检查", positive: "没有发现明显的基础风险信号", caution: "建议继续核实", warning: "请先停止并仔细确认", body: "这是本地结构检查，不代表发件人身份、网站安全或活动效果已经得到保证。" },
    resultDetails: { empty: "输入一个值即可开始本地检查。", invalid: "输入内容不够完整，无法完成这项检查。", checked: "本地检查已完成。重要决定前，请同时通过官方来源确认。" },
    tools: {
      link: { title: "打开前检查链接", summary: "检查 HTTPS、短链接、Punycode 和基础地址结构。", formTitle: "打开或分享前先检查地址", fieldLabel: "公开网址", placeholder: "https://example.com", submit: "本地检查", note: "不会打开网站，也不会把地址发送给外部服务。" },
      message: { title: "检查可疑消息", summary: "识别催促、验证码、付款、链接和保密要求等信号。", formTitle: "回复前先检查消息", fieldLabel: "短信、邮件或 WhatsApp 消息", placeholder: "请删除个人信息后粘贴消息", submit: "本地分析", note: "不要输入密码、一次性验证码或个人信息。" },
      domain: { title: "比较相似域名", summary: "比较熟悉的地址和收到的地址，查看拼写差异。", formTitle: "比较已知域名和收到的域名", fieldLabel: "已知域名", placeholder: "navines.co.il", submit: "本地比较", note: "相似只是需要进一步核实的信号，不是身份证明。" },
      email: { title: "检查邮箱地址", summary: "本地检查格式、域名和异常字符。", formTitle: "回复或分享信息前检查邮箱", fieldLabel: "邮箱地址", placeholder: "name@example.com", submit: "本地检查", note: "不会发送邮件，也不会连接邮箱。" },
      campaign: { title: "检查活动链接", summary: "检查 UTM 参数是否清晰，方便后续衡量来源。", formTitle: "发布前检查活动链接", fieldLabel: "包含 UTM 的链接", placeholder: "https://example.com/?utm_source=...", submit: "本地检查", note: "不会测量活动效果，也不能替代 Analytics。" },
    },
  },
};

const extendedLocalizedTools: Record<PublicLocale, Record<ExtendedLocalToolId, LocalizedTool>> = {
  de: {
    bulk: { title: "Mehrere Links prüfen", summary: "Bis zu zehn Webadressen lokal auf Grundsignale prüfen.", formTitle: "Mehrere Links in einem Durchgang prüfen", fieldLabel: "Ein Link pro Zeile", placeholder: "https://example.com", submit: "Liste lokal prüfen", note: "Die Links werden nicht geöffnet und nicht an einen externen Dienst gesendet." },
    "first-aid": { title: "Digitale Erste Hilfe", summary: "Ruhige erste Schritte nach einem verdächtigen digitalen Vorfall.", formTitle: "Wählen Sie die Situation aus", fieldLabel: "Was ist passiert?", placeholder: "", submit: "Erste Schritte anzeigen", note: "Bei einem geschäftlichen Konto, Zahlung oder vertraulichen Daten sollte zeitnah professionelle Hilfe eingeschaltet werden.", options: [{ value: "link", label: "Ich habe einen verdächtigen Link geöffnet", guidance: "Schließen Sie die Seite, geben Sie keine weiteren Daten ein und öffnen Sie den Dienst nur über seine offizielle Adresse." }, { value: "password", label: "Ich habe ein Passwort eingegeben", guidance: "Ändern Sie das Passwort über den offiziellen Zugang, prüfen Sie angemeldete Geräte und aktivieren Sie Zwei-Faktor-Authentifizierung." }, { value: "code", label: "Ich habe einen Bestätigungscode weitergegeben", guidance: "Prüfen Sie das Konto sofort über den offiziellen Zugang und beenden Sie unbekannte Sitzungen, wenn der Dienst dies erlaubt." }, { value: "payment", label: "Ich habe Zahlungsdaten weitergegeben", guidance: "Wenden Sie sich über eine offizielle Nummer an Ihre Bank oder Kartenstelle und bewahren Sie den Vorgang auf." }] },
    website: { title: "Website-Vertrauenscheck", summary: "Eine kurze Selbstprüfung vor einer Kampagne oder Veröffentlichung.", formTitle: "Prüfen Sie die Vertrauensgrundlagen der Website", fieldLabel: "Bereits vorhanden", placeholder: "", submit: "Checkliste auswerten", note: "Dies ist keine Sicherheits-, Rechts-, SEO- oder Accessibility-Prüfung.", checklist: ["Domain, Unternehmen und Kontaktweg sind klar erkennbar.", "Die wichtigsten Seiten und Links laufen über HTTPS.", "Leistung oder Produkt werden vor der Anfrage verständlich erklärt.", "Datenschutz und ein Kontaktweg sind leicht auffindbar.", "Kampagnenlinks werden vor dem Versand geprüft."] },
    "message-links": { title: "Links in einer Nachricht finden", summary: "Webadressen in einer Nachricht lokal erkennen und priorisieren.", formTitle: "Links aus einer Nachricht extrahieren", fieldLabel: "Allgemeine Nachricht", placeholder: "Nachricht ohne persönliche Daten einfügen", submit: "Links lokal finden", note: "Die Links werden weder geöffnet noch an einen Server gesendet." },
    "email-list": { title: "E-Mail-Liste prüfen", summary: "Format, Duplikate und einfache Auffälligkeiten vor Import oder Versand prüfen.", formTitle: "Eine E-Mail-Liste lokal bereinigen", fieldLabel: "Eine Adresse pro Zeile", placeholder: "name@example.com", submit: "Liste lokal prüfen", note: "Die Prüfung bestätigt weder Zustellung noch Zustimmung der Empfänger." },
    "utm-builder": { title: "Kampagnen-Link erstellen", summary: "Einen klar markierten UTM-Link vor der Veröffentlichung zusammenstellen.", formTitle: "UTM-Link im Browser erstellen", fieldLabel: "Zieladresse", placeholder: "https://example.com", submit: "Link lokal erstellen", note: "Prüfen Sie Ziel und Kennzeichnung vor der Veröffentlichung." },
    copy: { title: "Textklarheit prüfen", summary: "Länge und Struktur eines kurzen Textes lokal einschätzen.", formTitle: "Text auf Grundstruktur prüfen", fieldLabel: "Text für Seite, Nachricht oder Kampagne", placeholder: "Text ohne vertrauliche Daten einfügen", submit: "Text lokal prüfen", note: "Die Kennzahlen ersetzen keine redaktionelle oder rechtliche Prüfung." },
    qr: { title: "QR-Zieladresse prüfen", summary: "Eine neben einem QR-Code angezeigte Adresse vor dem Öffnen lokal prüfen.", formTitle: "Prüfen Sie eine QR-Zieladresse", fieldLabel: "Angezeigte Webadresse", placeholder: "https://example.com", submit: "Adresse lokal prüfen", note: "Das Tool liest keine Bilder oder QR-Codes und öffnet das Ziel nicht." },
    "password-check": { title: "Passwortstruktur prüfen", summary: "Eine Beispielstruktur lokal auf Länge und Zeichenvielfalt prüfen.", formTitle: "Prüfen Sie nur ein Passwort-Beispiel", fieldLabel: "Beispiel, kein aktives Passwort", placeholder: "Kein echtes Passwort eingeben", submit: "Struktur lokal prüfen", note: "Die Eingabe bleibt im Browser. Geben Sie nie ein aktives oder geheimes Passwort ein." },
    "account-protection": { title: "Kontoschutz-Checkliste", summary: "Grundlegende Schutzmaßnahmen für ein privates oder geschäftliches Konto ordnen.", formTitle: "Prüfen Sie die Grundlagen des Kontoschutzes", fieldLabel: "Bereits eingerichtet", placeholder: "", submit: "Checkliste auswerten", note: "Dies ist eine Selbstprüfung und keine Untersuchung eines realen Kontos.", checklist: ["Ein eindeutiges Passwort wird nicht für andere Konten wiederverwendet.", "Zwei-Faktor-Authentifizierung ist aktiviert.", "Wiederherstellungs-E-Mail und Telefonnummer sind aktuell.", "Angemeldete Geräte und Sitzungen werden regelmäßig geprüft.", "Keine Codes oder Zugangsdaten werden über unsichere Nachrichten geteilt."] },
  },
  jp: {
    bulk: { title: "複数リンクを確認", summary: "最大10件のURLをブラウザ内で簡易確認します。", formTitle: "複数のリンクをまとめて確認", fieldLabel: "1行に1つのリンク", placeholder: "https://example.com", submit: "ローカルで確認", note: "リンクを開いたり外部サービスへ送信したりしません。" },
    "first-aid": { title: "デジタル初動ガイド", summary: "不審な出来事の後に、落ち着いて最初の対応を整理します。", formTitle: "起きたことを選択してください", fieldLabel: "状況", placeholder: "", submit: "初動を表示", note: "業務アカウント、支払い、機密情報に関わる場合は早めに専門家へ相談してください。", options: [{ value: "link", label: "不審なリンクを開いた", guidance: "ページを閉じ、追加情報を入力せず、公式URLからサービスに入り直してください。" }, { value: "password", label: "パスワードを入力した", guidance: "公式画面からパスワードを変更し、ログイン中の端末を確認して二要素認証を有効にしてください。" }, { value: "code", label: "認証コードを伝えた", guidance: "公式画面からすぐにアカウントを確認し、可能なら不明なセッションを終了してください。" }, { value: "payment", label: "支払い情報を渡した", guidance: "公式の連絡先から銀行やカード会社へ連絡し、状況を記録してください。" }] },
    website: { title: "サイト信頼性チェック", summary: "公開やキャンペーン前に行う短い自己確認です。", formTitle: "サイトの信頼性の基本を確認", fieldLabel: "できている項目", placeholder: "", submit: "チェックリストを確認", note: "セキュリティ、法務、SEO、アクセシビリティの監査ではありません。", checklist: ["ドメイン、会社名、連絡先が明確です。", "重要なページとリンクでHTTPSが使われています。", "問い合わせ前にサービスや製品が分かりやすく説明されています。", "プライバシー情報と連絡先を見つけやすくしています。", "キャンペーンリンクを公開前に確認しています。"] },
    "message-links": { title: "メッセージ内のリンクを抽出", summary: "メッセージに含まれるURLをローカルで見つけます。", formTitle: "メッセージからリンクを確認", fieldLabel: "一般的なメッセージ", placeholder: "個人情報を除いたメッセージを貼り付け", submit: "ローカルでリンクを抽出", note: "リンクを開いたりサーバーへ送信したりしません。" },
    "email-list": { title: "メールアドレス一覧を確認", summary: "形式、重複、基本的な注意点をローカルで確認します。", formTitle: "メールアドレス一覧を整理", fieldLabel: "1行に1つのアドレス", placeholder: "name@example.com", submit: "ローカルで一覧を確認", note: "配信可否や受信者の同意を保証するものではありません。" },
    "utm-builder": { title: "キャンペーンURLを作成", summary: "公開前にUTM付きリンクを整理して作れます。", formTitle: "ブラウザ内でUTMリンクを作成", fieldLabel: "リンク先URL", placeholder: "https://example.com", submit: "ローカルでURLを作成", note: "公開前にリンク先とタグを確認してください。" },
    copy: { title: "文章の分かりやすさを確認", summary: "短い文章の長さと構成をローカルで確認します。", formTitle: "文章の基本構造を確認", fieldLabel: "ページ、メッセージ、キャンペーン用の文章", placeholder: "機密情報を含まない文章を貼り付け", submit: "ローカルで文章を確認", note: "編集や法務確認の代わりにはなりません。" },
    qr: { title: "QRコードのリンク先を確認", summary: "QRコードの近くに表示されたURLを開く前に確認します。", formTitle: "QRコードのリンク先URLを確認", fieldLabel: "表示されたURL", placeholder: "https://example.com", submit: "ローカルで確認", note: "画像やQRコード自体を読み取らず、リンク先も開きません。" },
    "password-check": { title: "パスワード構造を確認", summary: "例示用の文字列を使い、長さと文字の種類をローカルで確認します。", formTitle: "実際のパスワードではなく例を確認", fieldLabel: "例示用の文字列", placeholder: "実際のパスワードは入力しないでください", submit: "構造をローカルで確認", note: "入力はブラウザ内に留まります。実際のパスワードや秘密情報は入力しないでください。" },
    "account-protection": { title: "アカウント保護チェック", summary: "個人または業務アカウントの基本的な保護項目を整理します。", formTitle: "アカウント保護の基本を確認", fieldLabel: "設定済みの項目", placeholder: "", submit: "チェックリストを確認", note: "これは自己確認であり、実際のアカウント調査ではありません。", checklist: ["他のアカウントと使い回さない固有のパスワードを使っている。", "二要素認証を有効にしている。", "復旧用メールアドレスと電話番号が最新である。", "ログイン中の端末やセッションを定期的に確認している。", "コードや認証情報を安全でないメッセージで共有していない。"] },
  },
  ar: {
    bulk: { title: "فحص عدة روابط", summary: "فحص محلي سريع لما يصل إلى عشرة روابط.", formTitle: "فحص عدة روابط دفعة واحدة", fieldLabel: "رابط واحد في كل سطر", placeholder: "https://example.com", submit: "فحص محلي للقائمة", note: "لا يتم فتح الروابط أو إرسالها إلى خدمة خارجية." },
    "first-aid": { title: "إسعاف رقمي أولي", summary: "خطوات أولى هادئة بعد موقف رقمي مريب.", formTitle: "اختر ما حدث", fieldLabel: "ما الذي حدث؟", placeholder: "", submit: "عرض الخطوات الأولى", note: "عند وجود حساب عمل أو دفعة أو معلومات حساسة، يُفضّل طلب مساعدة مهنية بسرعة.", options: [{ value: "link", label: "فتحت رابطاً مريباً", guidance: "أغلق الصفحة ولا تدخل أي معلومات إضافية، ثم افتح الخدمة من عنوانها الرسمي الذي تعرفه." }, { value: "password", label: "أدخلت كلمة مرور", guidance: "غيّر كلمة المرور من المدخل الرسمي، وافحص الأجهزة المتصلة وفعّل المصادقة الثنائية." }, { value: "code", label: "شاركت رمز تحقق", guidance: "افحص الحساب فوراً عبر المدخل الرسمي وأنهِ الجلسات غير المعروفة إن أمكن." }, { value: "payment", label: "شاركت بيانات دفع", guidance: "تواصل مع البنك أو جهة البطاقة عبر رقم رسمي واحتفظ بتوثيق الواقعة." }] },
    website: { title: "قائمة ثقة للموقع", summary: "مراجعة ذاتية قصيرة قبل إطلاق حملة أو نشر صفحة.", formTitle: "راجع أساسيات الثقة في الموقع", fieldLabel: "متوفر حالياً", placeholder: "", submit: "مراجعة القائمة", note: "هذه ليست مراجعة أمنية أو قانونية أو SEO أو وصول رقمي.", checklist: ["النطاق واسم الشركة وطريقة التواصل واضحة.", "الصفحات والروابط المهمة تعمل عبر HTTPS.", "الخدمة أو المنتج واضح قبل طلب البيانات.", "سياسة الخصوصية وطريقة التواصل سهلة الوصول.", "روابط الحملات تُراجع قبل النشر."] },
    "message-links": { title: "استخراج الروابط من رسالة", summary: "تحديد عناوين الويب داخل رسالة محلياً.", formTitle: "استخرج روابط رسالة", fieldLabel: "رسالة عامة", placeholder: "ألصق رسالة من دون بيانات شخصية", submit: "استخراج محلي للروابط", note: "لا يتم فتح الروابط أو إرسال النص إلى خادم." },
    "email-list": { title: "فحص قائمة بريد إلكتروني", summary: "فحص الشكل والتكرارات والإشارات الأساسية قبل الاستيراد أو الإرسال.", formTitle: "تنظيف قائمة بريد إلكتروني محلياً", fieldLabel: "عنوان واحد في كل سطر", placeholder: "name@example.com", submit: "فحص القائمة محلياً", note: "لا يثبت الفحص قابلية التسليم أو موافقة المستلم." },
    "utm-builder": { title: "إنشاء رابط حملة", summary: "إنشاء رابط منظم بعلامات UTM قبل النشر.", formTitle: "إنشاء رابط UTM في المتصفح", fieldLabel: "عنوان الوجهة", placeholder: "https://example.com", submit: "إنشاء الرابط محلياً", note: "راجع الوجهة والوسوم قبل النشر." },
    copy: { title: "فحص وضوح النص", summary: "مؤشرات محلية لطول وبنية نص قصير.", formTitle: "فحص البنية الأساسية للنص", fieldLabel: "نص لصفحة أو رسالة أو حملة", placeholder: "ألصق نصاً من دون بيانات حساسة", submit: "فحص النص محلياً", note: "المؤشرات لا تغني عن التحرير أو المراجعة القانونية." },
    qr: { title: "فحص رابط QR", summary: "فحص العنوان الظاهر قرب رمز QR قبل فتحه.", formTitle: "افحصوا عنوان رابط QR", fieldLabel: "العنوان الظاهر", placeholder: "https://example.com", submit: "فحص محلي", note: "لا تقرأ هذه الأداة الصورة أو رمز QR نفسه ولا تفتح الوجهة." },
    "password-check": { title: "فحص بنية كلمة المرور", summary: "استخدموا مثالاً فقط لفحص الطول وتنوع الأحرف محلياً.", formTitle: "افحصوا مثالاً لا كلمة المرور الفعلية", fieldLabel: "مثال فقط", placeholder: "لا تدخلوا كلمة مرور فعلية", submit: "فحص البنية محلياً", note: "يبقى الإدخال داخل المتصفح. لا تدخلوا كلمة مرور نشطة أو سرية." },
    "account-protection": { title: "قائمة حماية الحساب", summary: "ترتيب خطوات الحماية الأساسية لحساب شخصي أو تجاري.", formTitle: "راجعوا أساسيات حماية الحساب", fieldLabel: "متوفر حالياً", placeholder: "", submit: "مراجعة القائمة", note: "هذه مراجعة ذاتية وليست فحصاً لحساب فعلي.", checklist: ["تستخدمون كلمة مرور فريدة غير معاد استخدامها.", "المصادقة الثنائية مفعلة.", "بريد الاسترداد ورقم الهاتف محدثان.", "تتم مراجعة الأجهزة والجلسات المتصلة بانتظام.", "لا تتم مشاركة رموز التحقق أو بيانات الدخول في رسائل غير آمنة."] },
  },
  hi: {
    bulk: { title: "कई लिंक जाँचें", summary: "अधिकतम दस URL का ब्राउज़र में स्थानीय प्रारंभिक परीक्षण।", formTitle: "कई लिंक एक साथ जाँचें", fieldLabel: "हर पंक्ति में एक लिंक", placeholder: "https://example.com", submit: "सूची स्थानीय रूप से जाँचें", note: "लिंक खोले या किसी बाहरी सेवा को भेजे नहीं जाते।" },
    "first-aid": { title: "डिजिटल प्राथमिक सहायता", summary: "संदिग्ध डिजिटल घटना के बाद शांत और व्यावहारिक शुरुआती कदम।", formTitle: "बताइए क्या हुआ", fieldLabel: "घटना", placeholder: "", submit: "शुरुआती कदम देखें", note: "व्यावसायिक खाते, भुगतान या संवेदनशील जानकारी के मामले में शीघ्र विशेषज्ञ सहायता लें।", options: [{ value: "link", label: "मैंने संदिग्ध लिंक खोला", guidance: "पेज बंद करें, कोई और जानकारी न भरें और सेवा को केवल उसके आधिकारिक पते से खोलें।" }, { value: "password", label: "मैंने पासवर्ड डाला", guidance: "आधिकारिक पेज से पासवर्ड बदलें, लॉग-इन डिवाइस देखें और दो-स्तरीय सत्यापन चालू करें।" }, { value: "code", label: "मैंने सत्यापन कोड साझा किया", guidance: "तुरंत आधिकारिक पेज से खाते की जाँच करें और संभव हो तो अनजान सत्र समाप्त करें।" }, { value: "payment", label: "मैंने भुगतान जानकारी दी", guidance: "आधिकारिक नंबर से बैंक या कार्ड प्रदाता से संपर्क करें और घटना का रिकॉर्ड रखें।" }] },
    website: { title: "वेबसाइट भरोसा चेकलिस्ट", summary: "कैंपेन या प्रकाशन से पहले एक छोटी स्व-जाँच।", formTitle: "वेबसाइट की भरोसे की बुनियाद जाँचें", fieldLabel: "पहले से उपलब्ध", placeholder: "", submit: "चेकलिस्ट देखें", note: "यह सुरक्षा, कानूनी, SEO या accessibility ऑडिट नहीं है।", checklist: ["डोमेन, व्यवसाय का नाम और संपर्क स्पष्ट हैं।", "महत्वपूर्ण पेज और लिंक HTTPS पर हैं।", "पूछताछ से पहले सेवा या उत्पाद स्पष्ट है।", "गोपनीयता जानकारी और संपर्क आसानी से मिलते हैं।", "कैंपेन लिंक भेजने से पहले जाँचे जाते हैं।"] },
    "message-links": { title: "संदेश से लिंक निकालें", summary: "संदेश में लिखे URL को स्थानीय रूप से पहचानें।", formTitle: "संदेश से लिंक खोजें", fieldLabel: "सामान्य संदेश", placeholder: "व्यक्तिगत जानकारी हटाकर संदेश चिपकाएँ", submit: "लिंक स्थानीय रूप से खोजें", note: "लिंक खोले नहीं जाते और टेक्स्ट सर्वर पर नहीं भेजा जाता।" },
    "email-list": { title: "ईमेल सूची जाँचें", summary: "फ़ॉर्मेट, डुप्लिकेट और बुनियादी संकेतों को स्थानीय रूप से जाँचें।", formTitle: "ईमेल सूची को स्थानीय रूप से व्यवस्थित करें", fieldLabel: "हर पंक्ति में एक पता", placeholder: "name@example.com", submit: "सूची स्थानीय रूप से जाँचें", note: "यह डिलीवरी या प्राप्तकर्ता की सहमति की पुष्टि नहीं करता।" },
    "utm-builder": { title: "कैंपेन लिंक बनाएँ", summary: "प्रकाशन से पहले स्पष्ट UTM टैग वाला लिंक बनाएँ।", formTitle: "ब्राउज़र में UTM लिंक बनाएँ", fieldLabel: "लक्ष्य URL", placeholder: "https://example.com", submit: "लिंक स्थानीय रूप से बनाएँ", note: "भेजने या प्रकाशित करने से पहले URL और टैग देखें।" },
    copy: { title: "टेक्स्ट स्पष्टता जाँचें", summary: "छोटे टेक्स्ट की लंबाई और संरचना के स्थानीय संकेत।", formTitle: "टेक्स्ट की बुनियादी संरचना जाँचें", fieldLabel: "पेज, संदेश या कैंपेन के लिए टेक्स्ट", placeholder: "संवेदनशील जानकारी के बिना टेक्स्ट चिपकाएँ", submit: "टेक्स्ट स्थानीय रूप से जाँचें", note: "ये संकेत संपादकीय या कानूनी समीक्षा का विकल्प नहीं हैं।" },
    qr: { title: "QR लिंक जाँचें", summary: "QR कोड के पास दिखे पते को खोलने से पहले स्थानीय रूप से जाँचें।", formTitle: "QR गंतव्य URL जाँचें", fieldLabel: "दिखाया गया URL", placeholder: "https://example.com", submit: "स्थानीय जाँच", note: "यह टूल चित्र या QR कोड नहीं पढ़ता और गंतव्य नहीं खोलता।" },
    "password-check": { title: "पासवर्ड संरचना जाँचें", summary: "केवल उदाहरण से लंबाई और अक्षर-विविधता की स्थानीय जाँच करें।", formTitle: "वास्तविक पासवर्ड नहीं, केवल उदाहरण जाँचें", fieldLabel: "केवल उदाहरण", placeholder: "वास्तविक पासवर्ड न डालें", submit: "संरचना स्थानीय रूप से जाँचें", note: "इनपुट ब्राउज़र में रहता है। सक्रिय या गोपनीय पासवर्ड कभी न डालें।" },
    "account-protection": { title: "खाता सुरक्षा चेकलिस्ट", summary: "व्यक्तिगत या व्यावसायिक खाते की बुनियादी सुरक्षा व्यवस्थित करें।", formTitle: "खाता सुरक्षा की बुनियाद जाँचें", fieldLabel: "पहले से उपलब्ध", placeholder: "", submit: "चेकलिस्ट जाँचें", note: "यह स्व-जाँच है, किसी वास्तविक खाते की जाँच नहीं।", checklist: ["एक विशिष्ट पासवर्ड उपयोग में है जो अन्य खातों में दोहराया नहीं गया है।", "दो-स्तरीय सत्यापन चालू है।", "रिकवरी ईमेल और फोन नंबर अद्यतन हैं।", "लॉग-इन डिवाइस और सत्र नियमित रूप से देखे जाते हैं।", "कोड या लॉगिन विवरण असुरक्षित संदेशों में साझा नहीं किए जाते।"] },
  },
  fr: {
    bulk: { title: "Vérifier plusieurs liens", summary: "Contrôler localement jusqu’à dix URLs en une fois.", formTitle: "Vérifiez plusieurs liens à la fois", fieldLabel: "Un lien par ligne", placeholder: "https://example.com", submit: "Vérifier la liste localement", note: "Les liens ne sont ni ouverts ni envoyés à un service externe." },
    "first-aid": { title: "Premiers gestes numériques", summary: "Des premières étapes calmes après un incident numérique suspect.", formTitle: "Choisissez ce qui s’est passé", fieldLabel: "Situation", placeholder: "", submit: "Afficher les premiers gestes", note: "Pour un compte professionnel, un paiement ou des données sensibles, demandez rapidement une aide spécialisée.", options: [{ value: "link", label: "J’ai ouvert un lien suspect", guidance: "Fermez la page, ne saisissez aucune information supplémentaire et ouvrez le service uniquement depuis son adresse officielle." }, { value: "password", label: "J’ai saisi un mot de passe", guidance: "Changez le mot de passe via l’accès officiel, vérifiez les appareils connectés et activez la double authentification." }, { value: "code", label: "J’ai transmis un code de vérification", guidance: "Vérifiez immédiatement le compte via l’accès officiel et fermez les sessions inconnues lorsque cela est possible." }, { value: "payment", label: "J’ai communiqué des données de paiement", guidance: "Contactez votre banque ou l’émetteur de la carte via un numéro officiel et conservez une trace de l’incident." }] },
    website: { title: "Checklist de confiance du site", summary: "Une courte auto-vérification avant une campagne ou une publication.", formTitle: "Vérifiez les bases de confiance du site", fieldLabel: "Déjà en place", placeholder: "", submit: "Examiner la checklist", note: "Ce n’est pas un audit de sécurité, juridique, SEO ou accessibilité.", checklist: ["Le domaine, l’entreprise et le contact sont clairs.", "Les pages et liens importants utilisent HTTPS.", "Le service ou le produit est expliqué avant toute demande.", "La confidentialité et un moyen de contact sont faciles à trouver.", "Les liens de campagne sont vérifiés avant publication."] },
    "message-links": { title: "Repérer les liens dans un message", summary: "Extraire localement les URLs présentes dans un message.", formTitle: "Repérez les liens d’un message", fieldLabel: "Message général", placeholder: "Collez un message sans donnée personnelle", submit: "Repérer les liens localement", note: "Les liens ne sont pas ouverts et le texte n’est pas envoyé à un serveur." },
    "email-list": { title: "Vérifier une liste d’e-mails", summary: "Contrôler localement format, doublons et signaux simples avant import ou envoi.", formTitle: "Nettoyez une liste d’e-mails localement", fieldLabel: "Une adresse par ligne", placeholder: "name@example.com", submit: "Vérifier la liste localement", note: "La vérification ne confirme ni la délivrabilité ni le consentement du destinataire." },
    "utm-builder": { title: "Créer un lien de campagne", summary: "Construire un lien UTM clair avant diffusion.", formTitle: "Créez un lien UTM dans le navigateur", fieldLabel: "URL de destination", placeholder: "https://example.com", submit: "Créer le lien localement", note: "Vérifiez la destination et les balises avant publication." },
    copy: { title: "Vérifier la clarté d’un texte", summary: "Des indicateurs locaux de longueur et de structure pour un texte court.", formTitle: "Vérifiez la structure de base d’un texte", fieldLabel: "Texte pour une page, un message ou une campagne", placeholder: "Collez un texte sans donnée sensible", submit: "Vérifier le texte localement", note: "Ces indicateurs ne remplacent ni une relecture éditoriale ni une validation juridique." },
    qr: { title: "Vérifier un lien QR", summary: "Contrôler l’adresse affichée près d’un QR code avant de l’ouvrir.", formTitle: "Vérifiez une URL issue d’un QR code", fieldLabel: "Adresse affichée", placeholder: "https://example.com", submit: "Vérifier localement", note: "L’outil ne lit ni image ni QR code et n’ouvre pas la destination." },
    "password-check": { title: "Vérifier la structure d’un mot de passe", summary: "Vérifier localement longueur et variété de caractères avec un exemple uniquement.", formTitle: "Vérifiez un exemple, pas un mot de passe réel", fieldLabel: "Exemple uniquement", placeholder: "N’entrez pas de mot de passe réel", submit: "Vérifier la structure localement", note: "La saisie reste dans le navigateur. N’entrez jamais un mot de passe actif ou confidentiel." },
    "account-protection": { title: "Checklist de protection du compte", summary: "Organiser les bases de protection d’un compte personnel ou professionnel.", formTitle: "Vérifiez les bases de protection du compte", fieldLabel: "Déjà en place", placeholder: "", submit: "Examiner la checklist", note: "Il s’agit d’une auto-vérification, pas d’un audit d’un compte réel.", checklist: ["Un mot de passe unique, non réutilisé, est en place.", "La double authentification est activée.", "L’e-mail et le téléphone de récupération sont à jour.", "Les appareils et sessions connectés sont vérifiés régulièrement.", "Aucun code ni identifiant n’est partagé par message non sécurisé."] },
  },
  zh: {
    bulk: { title: "批量检查链接", summary: "在浏览器内快速检查最多十个URL。", formTitle: "一次检查多个链接", fieldLabel: "每行一个链接", placeholder: "https://example.com", submit: "本地检查列表", note: "不会打开链接，也不会将链接发送给外部服务。" },
    "first-aid": { title: "数字应急指南", summary: "遇到可疑数字事件后，先整理冷静的处理步骤。", formTitle: "请选择发生的情况", fieldLabel: "发生了什么？", placeholder: "", submit: "查看初步步骤", note: "涉及业务账号、付款或敏感信息时，建议尽快寻求专业协助。", options: [{ value: "link", label: "我打开了可疑链接", guidance: "关闭页面，不要继续填写信息，并只通过您熟悉的官方网址重新打开服务。" }, { value: "password", label: "我输入了密码", guidance: "通过官方入口修改密码，检查已登录设备，并启用双重验证。" }, { value: "code", label: "我提供了验证码", guidance: "立即通过官方入口检查账号，并在可行时结束未知会话。" }, { value: "payment", label: "我提供了付款信息", guidance: "通过官方号码联系银行或发卡机构，并保留事件记录。" }] },
    website: { title: "网站信任清单", summary: "在发布页面或活动前进行简短自检。", formTitle: "检查网站的信任基础", fieldLabel: "已具备的项目", placeholder: "", submit: "查看清单", note: "这不是安全、法律、SEO或无障碍审计。", checklist: ["域名、企业名称和联系方式清晰。", "重要页面和链接使用HTTPS。", "在索取信息前清楚说明服务或产品。", "隐私信息和联系方式容易找到。", "活动链接会在发布前检查。"] },
    "message-links": { title: "提取消息中的链接", summary: "在浏览器内识别消息里出现的URL。", formTitle: "从消息中提取链接", fieldLabel: "一般消息", placeholder: "请粘贴不含个人信息的消息", submit: "本地提取链接", note: "不会打开链接，也不会将文本发送到服务器。" },
    "email-list": { title: "检查邮箱地址列表", summary: "在导入或发送前，本地检查格式、重复和基本提示。", formTitle: "本地整理邮箱地址列表", fieldLabel: "每行一个邮箱地址", placeholder: "name@example.com", submit: "本地检查列表", note: "此检查不确认邮箱可送达或收件人同意。" },
    "utm-builder": { title: "创建活动链接", summary: "发布前创建带有清晰UTM标记的链接。", formTitle: "在浏览器内创建UTM链接", fieldLabel: "目标URL", placeholder: "https://example.com", submit: "本地创建链接", note: "发布前请检查目标地址和标记。" },
    copy: { title: "检查文本清晰度", summary: "本地查看短文本的长度和结构提示。", formTitle: "检查文本的基础结构", fieldLabel: "用于页面、消息或活动的文本", placeholder: "请粘贴不含敏感信息的文本", submit: "本地检查文本", note: "这些提示不能替代编辑或法律审查。" },
    qr: { title: "检查二维码链接", summary: "打开前检查二维码旁显示的网址。", formTitle: "检查二维码目标网址", fieldLabel: "显示的网址", placeholder: "https://example.com", submit: "本地检查", note: "该工具不读取图片或二维码本身，也不会打开目标网站。" },
    "password-check": { title: "检查密码结构", summary: "仅使用示例字符串，本地检查长度和字符种类。", formTitle: "检查示例，不要输入真实密码", fieldLabel: "仅限示例", placeholder: "请勿输入真实密码", submit: "本地检查结构", note: "输入只保留在浏览器中。请勿输入正在使用的密码或机密信息。" },
    "account-protection": { title: "账户保护清单", summary: "整理个人或业务账户的基础保护措施。", formTitle: "检查账户保护基础", fieldLabel: "已具备的项目", placeholder: "", submit: "查看清单", note: "这是自查，不是对真实账户的调查。", checklist: ["使用未在其他账户重复使用的独特密码。", "已启用双重验证。", "恢复邮箱和电话号码保持最新。", "定期检查已登录设备和会话。", "不通过不安全的消息分享验证码或登录信息。"] },
  },
};

export function getLocalizedToolsCopy(locale: string) {
  const base = localizedToolsCopy[locale as PublicLocale];
  if (!base) return undefined;
  return { ...base, tools: { ...base.tools, ...extendedLocalizedTools[base.locale] } } as LocalizedToolsCopy;
}
