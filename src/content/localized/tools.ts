import type { PublicLocale } from "@/i18n/locales";

export type LocalToolId = "link" | "message" | "domain" | "email" | "campaign";

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
  resultLabels: { empty: string; positive: string; caution: string; warning: string; body: string };
  resultDetails: { empty: string; invalid: string; checked: string };
  tools: Record<LocalToolId, {
    title: string;
    summary: string;
    formTitle: string;
    fieldLabel: string;
    placeholder: string;
    submit: string;
    note: string;
  }>;
};

export const localizedToolsCopy: Record<PublicLocale, LocalizedToolsCopy> = {
  de: {
    locale: "de",
    eyebrow: "Praktische Browser-Tools",
    pageTitle: "Kleine Prüfungen für klare digitale Entscheidungen",
    pageDescription: "Kostenlose lokale Prüfungen für Links, Nachrichten, Domains, E-Mail-Adressen und Kampagnen-Links. Ohne Registrierung und ohne die Eingabe an einen Server zu senden.",
    previewTitle: "Kleine Werkzeuge für klarere digitale Entscheidungen",
    previewText: "Fünf kurze Prüfungen für Links, Nachrichten, Domains, E-Mail-Adressen und Kampagnen-Links. Sie laufen lokal im Browser und liefern Hinweise, keine Garantien.",
    privacyNote: "Die Prüfungen laufen im Browser. Geben Sie keine Passwörter, Codes oder vertraulichen Geschäftsdaten ein.",
    homeLabel: "Zur deutschen Startseite",
    hebrewToolsLabel: "Zu den hebräischen Tools",
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
    previewText: "リンク、メッセージ、ドメイン、メールアドレス、キャンペーンURLを短時間で確認できます。結果は参考情報であり、保証ではありません。",
    privacyNote: "確認はブラウザ内で行います。パスワード、認証コード、機密情報は入力しないでください。",
    homeLabel: "日本語トップへ戻る",
    hebrewToolsLabel: "ヘブライ語ツールを見る",
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
    previewText: "خمس فحوص قصيرة للروابط والرسائل والنطاقات والبريد وروابط الحملات. تعمل محلياً وتقدم إشارات للمراجعة لا ضمانات.",
    privacyNote: "تعمل الفحوص داخل المتصفح. لا تدخلوا كلمات مرور أو رموز تحقق أو معلومات تجارية حساسة.",
    homeLabel: "العودة إلى الصفحة العربية",
    hebrewToolsLabel: "الانتقال إلى الأدوات بالعبرية",
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
    previewText: "लिंक, संदेश, डोमेन, ईमेल और कैंपेन लिंक की पाँच छोटी जाँच। ये ब्राउज़र में चलती हैं और संकेत देती हैं, गारंटी नहीं।",
    privacyNote: "जाँच ब्राउज़र में होती है। पासवर्ड, सत्यापन कोड या संवेदनशील व्यावसायिक जानकारी दर्ज न करें।",
    homeLabel: "हिंदी होमपेज पर जाएँ",
    hebrewToolsLabel: "हिब्रू टूल्स देखें",
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
    previewText: "Cinq vérifications rapides pour les liens, messages, domaines, e-mails et URLs de campagne. Elles donnent des signaux, pas des garanties.",
    privacyNote: "Les vérifications restent dans le navigateur. N’entrez jamais de mots de passe, codes ou données professionnelles sensibles.",
    homeLabel: "Retour à l’accueil français",
    hebrewToolsLabel: "Voir les outils en hébreu",
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
    previewText: "用五项简短检查了解链接、消息、域名、邮箱和活动链接中的基础信号。结果用于参考，不构成保证。",
    privacyNote: "检查在浏览器内完成。请勿输入密码、验证码或敏感业务信息。",
    homeLabel: "返回中文首页",
    hebrewToolsLabel: "查看希伯来语工具",
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

export function getLocalizedToolsCopy(locale: string) {
  return localizedToolsCopy[locale as PublicLocale];
}
