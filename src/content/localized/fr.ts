import { localizedArticlePaths } from "@/i18n/locales";
import type { LocalizedPageContent } from "./types";

export const frContent: LocalizedPageContent = {
  landing: {
    locale: "fr",
    metaTitle: "NAVINES France | IA, automatisation et développement logiciel",
    metaDescription: "NAVINES est une entreprise israélienne de logiciel et d’IA qui conçoit des sites, systèmes, automatisations, outils de données et infrastructures numériques pour les entreprises.",
    hero: {
      eyebrow: "Logiciel, IA et infrastructure numérique depuis Israël",
      title: "Automatisation par l’IA et logiciels sur mesure pour des besoins métiers réels",
      text: "NAVINES aide les entreprises à transformer une idée, un problème opérationnel ou un processus répétitif en solution numérique utilisable : site, système interne, outil de données, automatisation, extension de navigateur ou support technique structuré.",
      primaryCta: "Écrire sur WhatsApp",
      secondaryCta: "Voir les services",
    },
    trust: "NAVINES travaille avec des entreprises, indépendants, équipes e-commerce et dirigeants qui veulent des solutions claires, maintenables et utiles, pas une démonstration artificielle autour de l’IA.",
    services: {
      title: "Ce que NAVINES construit",
      intro: "Nous relions stratégie, conception, développement, données et IA pour créer des outils qui répondent à un besoin concret.",
      items: [
        { title: "IA, automatisation et assistants", text: "Workflows intelligents, chatbots, tri des demandes, résumés, tâches automatiques et aide à la décision." },
        { title: "Sites, portails et systèmes métiers", text: "Sites d’entreprise, tableaux de bord, espaces clients et outils internes reliés à vos processus." },
        { title: "E-commerce et marketplaces", text: "Shopify, WooCommerce, solutions liées à Amazon, contenu produit, SEO et opérations de vente." },
        { title: "Données et TalkToData", text: "Rendre les ventes, commandes, stocks, emails et rapports plus faciles à interroger et comprendre." },
        { title: "Infrastructure, optimisation et support", text: "Performance, hébergement, DNS, email, sécurité, récupération et assistance quand un service critique bloque." },
        { title: "Risques numériques et vérification", text: "Aide lors de comptes compromis, analyse de plateformes et due diligence numérique avant achat ou partenariat." },
      ],
    },
    solutions: {
      title: "Pour quels besoins",
      items: [
        { title: "Dirigeants et responsables", text: "Quand le site, les données ou les opérations manquent de clarté et ralentissent les décisions." },
        { title: "Équipes e-commerce", text: "Quand produits, ventes, support, SEO et reporting doivent mieux fonctionner ensemble." },
        { title: "Freelances et agences", text: "Quand les leads, clients, tâches et rapports deviennent trop manuels." },
        { title: "Acheteurs et investisseurs", text: "Quand un site, une boutique, une marque ou un actif numérique doit être évalué avant une décision." },
      ],
    },
    process: {
      title: "Notre méthode",
      steps: [
        { title: "Comprendre", text: "Nous clarifions l’objectif, les systèmes existants, les risques et le premier levier utile." },
        { title: "Planifier", text: "Nous transformons le besoin en architecture simple, lisible et réaliste." },
        { title: "Construire et intégrer", text: "Nous développons la solution, relions les données, les API et les usages réels." },
        { title: "Améliorer", text: "Après lancement, nous vérifions performance, stabilité, expérience et possibilités d’évolution." },
      ],
    },
    why: {
      title: "Pourquoi NAVINES",
      paragraphs: [
        "Un projet numérique efficace ne se limite ni à l’interface ni au code. Il doit comprendre la logique métier, le parcours utilisateur, les données et les contraintes opérationnelles.",
        "NAVINES privilégie les solutions utiles, compactes et maintenables. Lorsque des outils existants suffisent, nous les connectons. Lorsqu’un outil sur mesure est nécessaire, nous construisons d’abord le noyau le plus utile.",
        "En tant qu’entreprise israélienne de logiciel et d’IA, NAVINES travaille avec une approche directe et internationale. Nous ne promettons pas de résultats garantis ; nous privilégions l’analyse, l’exécution sérieuse et l’amélioration continue.",
      ],
    },
    contact: {
      title: "Parlons de votre projet",
      text: "Décrivez brièvement le site, le système, les données ou le processus à améliorer. Nous vous aiderons à clarifier la prochaine étape.",
      whatsappLabel: "Ouvrir WhatsApp",
      emailLabel: "Envoyer un email",
      whatsappText: "Bonjour NAVINES, je souhaite discuter d’un projet d’IA, d’automatisation ou de logiciel sur mesure.",
      emailSubject: "Demande de projet pour NAVINES",
    },
    insight: {
      title: "Lire l’article",
      text: "L’article explique quand l’automatisation par l’IA et le logiciel sur mesure sont utiles, quels risques éviter et comment démarrer correctement.",
      href: localizedArticlePaths.fr,
      cta: "Lire l’article",
    },
  },
  article: {
    locale: "fr",
    slug: "automatisation-ia-developpement-logiciel",
    metaTitle: "Automatisation par l’IA et développement logiciel sur mesure pour les entreprises",
    metaDescription: "Guide pratique pour comprendre l’automatisation par l’IA, le développement logiciel sur mesure, les différences avec les outils standards et la bonne façon de démarrer.",
    title: "Automatisation par l’IA et développement logiciel sur mesure pour les entreprises",
    excerpt: "L’IA devient utile lorsqu’elle améliore un processus métier réel, avec des données fiables, des limites claires et une utilisation simple.",
    publishedAt: "2026-07-14",
    updatedAt: "2026-07-14",
    author: "NAVINES Team",
    sections: [
      { title: "Ce que signifie vraiment l’automatisation par l’IA", paragraphs: ["L’automatisation par l’IA ne consiste pas seulement à ajouter un chatbot. Elle consiste à relier des données, des règles métiers, du langage naturel et des actions concrètes. Elle peut classer des demandes, résumer des emails, préparer des tâches, comparer des informations ou aider une équipe à comprendre plus vite une situation.", "La valeur vient de la réduction du travail manuel, de la clarté des informations et de la rapidité de réaction. Le point de départ doit donc être le processus, pas la technologie."] },
      { title: "Quand le logiciel sur mesure devient nécessaire", paragraphs: ["Les outils standards sont utiles, mais ils imposent souvent leur propre manière de travailler. Lorsque les équipes multiplient les exports, les copier-coller et les contournements, il peut être plus efficace de construire une petite solution adaptée.", "Cette solution peut être un tableau de bord, une intégration API, une extension de navigateur, un portail client ou un outil de reporting. Le format dépend du besoin réel."] },
      { title: "Outil standard ou solution personnalisée", paragraphs: ["Un outil standard est pertinent lorsque le processus est commun. Une solution personnalisée devient pertinente lorsque les données sont dispersées, le flux est critique ou l’expérience de l’équipe doit être fortement simplifiée.", "NAVINES ne recommande pas automatiquement un développement complet. Nous cherchons le chemin le plus simple et le plus durable, parfois avec des outils existants bien connectés."] },
      { title: "Exemples de scénarios", paragraphs: ["Une équipe e-commerce doit comprendre les commandes, les stocks et les messages clients. Une société de services veut mieux transformer ses demandes en tâches. Un dirigeant veut lire un rapport clair sans ouvrir cinq tableaux différents.", "Dans ces cas, l’IA peut structurer l’information et accélérer la compréhension, mais elle doit rester contrôlée par une logique métier claire."] },
      { title: "Risques et erreurs fréquentes", paragraphs: ["La première erreur est de commencer par l’outil. La deuxième est de connecter des données sensibles sans réflexion sur les accès, la sécurité et les limites. Une réponse trop longue ou trop générale peut aussi rendre le système inutile au quotidien.", "Un bon projet définit les sources de données, les droits d’accès, les points de contrôle humain et les scénarios d’erreur."] },
      { title: "Comment démarrer correctement", paragraphs: ["Commencez par un processus limité : tri de demandes, résumé d’emails, rapport hebdomadaire, suivi de commandes ou analyse de données. Mesurez si cela fait gagner du temps ou améliore la qualité de décision.", "NAVINES aide à transformer ce besoin en plan technique, puis en solution testable avant d’étendre le périmètre."] },
      { title: "Travailler avec une entreprise israélienne de logiciel et d’IA", paragraphs: ["Les entreprises internationales recherchent des partenaires capables de comprendre rapidement le contexte, de construire proprement et de rester réalistes. L’exécution compte autant que l’idée.", "NAVINES combine développement logiciel, données, automatisation, e-commerce et support technique. Notre objectif est de construire des systèmes utilisables, pas de vendre une promesse abstraite."] },
    ],
    faqs: [
      { question: "L’IA est-elle utile pour toutes les entreprises ?", answer: "Non. Elle est utile lorsqu’un processus précis peut devenir plus rapide, plus clair ou mieux contrôlé." },
      { question: "Faut-il remplacer les outils existants ?", answer: "Pas forcément. Il est souvent préférable de connecter les outils existants avant de créer une nouvelle plateforme." },
      { question: "Peut-on commencer petit ?", answer: "Oui. Un premier outil ou une intégration ciblée est souvent le meilleur départ." },
      { question: "L’IA remplace-t-elle la décision humaine ?", answer: "Non. Elle aide à organiser l’information ; les décisions importantes doivent rester contrôlées par l’entreprise." },
    ],
    cta: {
      title: "Vous voulez savoir quoi automatiser en premier ?",
      text: "Envoyez une courte description de votre processus. NAVINES vous aidera à clarifier la bonne approche.",
      whatsappLabel: "Écrire sur WhatsApp",
      emailLabel: "Envoyer un email",
    },
  },
};
