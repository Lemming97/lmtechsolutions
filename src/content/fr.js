// French copy for the site. Same structure as en.js: when you change a line
// there, change the matching line here.

export const site = {
  name: 'L&M Technology Solutions',
  legalName: 'L&M Technology Solutions LLC',
  email: 'info@lmtechsolutions.co',
  linkedin: 'https://www.linkedin.com/in/lindsey-m-2219abb0/',
  locations: 'Paris, France et États-Unis',
}

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#work' },
  { label: 'À propos', href: '#about' },
]

export const hero = {
  headline: 'Construire le bon produit, puis le lancer sans mauvaises surprises.',
  lede:
    "Je suis Lindsey Martin, product manager avec plus de 8 ans d'expérience en produit, QA et opérations techniques. J'aide les entreprises à planifier leurs produits, à les tester correctement, à accompagner leurs clients et à mettre le tout sur le marché.",
  primaryCta: { label: 'Réserver un Appel Découverte', href: '#contact' },
  secondaryCta: { label: 'Voir les Services', href: '#services' },
  // Labels for the layered illustration, top layer first
  layers: [
    { title: 'Produit', text: 'Roadmaps et spécifications' },
    { title: 'Qualité', text: 'Testé avant le lancement' },
    { title: 'Solutions', text: 'Clients accompagnés' },
  ],
}

export const services = {
  title: 'Comment je peux vous aider',
  intro:
    "Faites appel à moi pour un domaine précis ou pour tout le cycle de vie du produit. Je travaille avec des startups comme avec des entreprises établies, en mission ponctuelle ou en renfort régulier de votre équipe.",
  items: [
    {
      title: 'Stratégie et gestion de produit',
      description:
        "Transformer les idées et les retours clients en un plan clair que votre équipe peut construire, du premier prototype à la fonctionnalité livrée.",
      bullets: ['Discovery et recherche utilisateur', 'Roadmaps, PRD et priorisation', 'Parcours UX et passation au design'],
    },
    {
      title: 'Assurance qualité',
      description:
        "8 ans en QA, des tests de releases menés en parallèle du support jusqu'à la direction de la qualité web. Je mets en place des processus de test qui détectent les problèmes avant vos utilisateurs.",
      bullets: ['Stratégie QA, plans de test et cycle de vie des bugs', 'Tests manuels, exploratoires et automatisés', 'Coordination des releases et tests de régression'],
    },
    {
      title: 'Opérations support',
      description:
        "Mettre en place un support client qui suit votre croissance, pour que les utilisateurs obtiennent des réponses rapides et que votre équipe produit sache ce qui ne fonctionne pas.",
      bullets: ["Centres d'aide et bases de connaissances", 'Équipes support, niveaux et SLA', 'Reporting support et retours vers le produit'],
    },
    {
      title: 'Go-to-market et levée de fonds',
      description:
        "Définir la façon dont vous présentez votre produit aux clients et aux investisseurs, et planifier comment les atteindre.",
      bullets: ['Positionnement et messages par audience', 'Récit investisseurs et supports de pitch', 'Analyse du marché et des investisseurs'],
    },
    {
      title: 'Développement web',
      description:
        "Des sites et applications web rapides et accessibles, développés en React avec une formation full-stack.",
      bullets: ["Landing pages et sites d'entreprise", 'Prototypes et MVP', 'Sites multilingues pour les marchés européens'],
    },
  ],
}

export const stack = {
  title: 'Les outils que j’utilise',
  groups: [
    { label: 'Tests', tools: ['Cypress', 'Playwright', 'TestRail', 'BrowserStack', 'Datadog'] },
    { label: 'Mobile', tools: ['Xcode', 'Android Studio', 'Firebase'] },
    { label: 'Développement', tools: ['React', 'JavaScript', 'HTML et CSS', 'GitHub', 'AWS'] },
    { label: 'Support', tools: ['Zendesk', 'Zendesk Explore', 'Handlebars'] },
    {
      label: 'Produit et delivery',
      tools: ['Jira', 'Confluence', 'ClickUp', 'Notion', 'Agile et Scrum'],
    },
    { label: 'Design et collaboration', tools: ['Figma', 'Miro', 'Slack', 'Loom'] },
    { label: 'Analytics', tools: ['Google Analytics', 'Google Search Console', 'SQL'] },
    { label: 'Outils IA', tools: ['Claude', 'Perplexity', 'Gemini'] },
  ],
}

export const work = {
  title: 'Réalisations',
  intro:
    "Des missions produit, recherche, client et qualité, avec les compétences mobilisées pour chacune. Les clients sont décrits par secteur pour préserver leur confidentialité.",
  items: [
    {
      area: 'Product management',
      sector: 'Proptech, contrôle d’accès des bâtiments',
      metric: '0 à 1',
      metricLabel: 'Nouvelle application installateurs, du prototype aux specs prêtes à développer',
      title: 'Lancer une nouvelle application pour les installateurs',
      problem: "Les installateurs de matériel de contrôle d'accès dans les bâtiments neufs n'avaient aucun outil pour les guider dans l'installation, l'appairage et la validation des équipements sur site.",
      did: "J'ai cartographié le parcours installateur, prototypé les écrans, rédigé les spécifications et assuré la passation au design et à l'ingénierie, puis validé les fonctionnalités sur les branches de développement avant leur mise en production.",
      skills: ['Produit 0 à 1', 'Prototypage', 'Parcours UX', 'Spécifications', 'Passation au design'],
    },
    {
      area: 'Product management',
      sector: 'Proptech, SaaS et IoT',
      metric: '3 profils',
      metricLabel: "Résidents, gestionnaires d'immeubles et installateurs",
      title: 'Livrer des fonctionnalités sur une plateforme en croissance',
      problem: "Une startup en forte croissance développait pour trois utilisateurs très différents à la fois, sans processus commun pour faire passer une fonctionnalité de l'idée à la mise en production.",
      did: "J'ai rédigé des PRD et mené plusieurs fonctionnalités du concept à la livraison, travaillé avec l'ingénierie sur une approche de développement assistée par l'IA, et intégré le cycle de vie des bugs et le cycle de test au processus produit.",
      skills: ['PRD', 'Priorisation', 'Développement assisté par IA', 'Delivery transverse'],
    },
    {
      area: 'Stratégie produit et go-to-market',
      sector: 'Deep tech, logiciel spatial',
      metric: '3 sources',
      metricLabel: "De revenus réunies dans un seul modèle avant une levée seed",
      title: 'Repositionner un produit technique sur son marché',
      problem: "Une plateforme de simulation pour engins spatiaux était perçue comme un luxe réservé aux industriels de la défense, et son histoire était difficile à suivre pour les acheteurs comme pour les investisseurs.",
      did: "J'ai repositionné le produit comme une nécessité pour les entreprises du spatial commercial, construit une analyse concurrentielle face aux acteurs historiques, défini une trajectoire de marché du segment d'entrée à l'expansion, et comparé 18 levées seed similaires.",
      skills: ['Positionnement', 'Analyse concurrentielle', 'Modèle économique', 'Taille de marché', 'Messages'],
    },
    {
      area: 'Recherche utilisateur',
      sector: 'Technologie grand public',
      metric: 'Vrais utilisateurs',
      metricLabel: 'Des tests de nouveaux matériels et logiciels avant leur lancement',
      title: "Mener des études d'utilisabilité pour de nouveaux produits",
      problem: "Les équipes design et ingénierie avaient besoin de preuves sur la façon dont de vraies personnes utilisaient de nouveaux modes d'interaction avant de figer leurs choix matériels et logiciels.",
      did: "J'ai animé des sessions d'utilisabilité, des entretiens individuels aux groupes, appliqué les protocoles d'étude et les questionnaires, et partagé les résultats avec les équipes design, ingénierie et produit.",
      skills: ["Tests d'utilisabilité", 'Entretiens utilisateurs', 'Questionnaires', 'Synthèse de recherche'],
    },
    {
      area: 'Solutions client',
      sector: 'Santé numérique',
      metric: 'Un seul contact',
      metricLabel: 'Entre les clients, les équipes cliniques et l’ingénierie',
      title: 'Transformer les besoins clients en améliorations produit',
      problem: "Les clients grands comptes et le personnel clinique avaient besoin d'une personne qui comprenait à la fois leurs besoins et le produit, pour que rien ne se perde entre les équipes.",
      did: "J'ai mené l'accompagnement au déploiement, la formation et le conseil produit auprès des clients, servi de principal point d'escalade technique, développé la relation client lors d'événements sur site, et traduit les retours en besoins pour le produit et l'ingénierie.",
      skills: ['Onboarding client', 'Gestion des parties prenantes', 'Recueil des besoins', 'Formation'],
    },
    {
      area: 'Assurance qualité',
      sector: 'Santé numérique',
      metric: '80 %',
      metricLabel: "De bugs en moins en production dans l'une d'elles",
      title: 'Créer et diriger la QA dans trois entreprises de santé numérique',
      problem: "Chaque équipe avait besoin de releases fiables, et deux d'entre elles n'avaient aucun processus de test formel : la qualité reposait sur des vérifications ponctuelles.",
      did: "J'ai mis en place et dirigé la QA : stratégie de test, automatisation avec Cypress et Playwright, monitoring Datadog, bug bashes hebdomadaires et une équipe de régression offshore, le tout intégré au cycle de release produit.",
      skills: ['Stratégie de test', 'Gestion des releases', 'Automatisation', "Direction d'équipe"],
    },
    {
      area: 'Opérations support',
      sector: 'Santé numérique',
      metric: 'Moins de 6 h',
      metricLabel: 'De délai de réponse sur les tickets support',
      title: 'Faire grandir le support client',
      problem: "Une application de santé en croissance avait besoin d'un support capable de suivre les patients, les clients et les équipes cliniques sans ralentir l'équipe produit.",
      did: "J'ai créé le centre d'aide et la base de connaissances, mis en place une équipe offshore de niveaux 1 et 2, et construit un reporting qui faisait remonter les tendances des tickets au produit.",
      skills: ["Centre d'aide", "Création d'équipe", 'SLA', 'Boucles de feedback'],
    },
  ],
}

export const process = {
  title: 'Comment nous travaillons ensemble',
  intro: 'Chaque mission commence de la même façon, puis prend la forme dont votre équipe a besoin.',
  steps: [
    { title: 'Appel découverte', text: 'Nous faisons le point sur votre situation, ce qui vous bloque et ce que serait un succès.' },
    { title: 'Trouver le bon format', text: 'Un projet défini, quelques mois en immersion dans votre équipe, ou un accompagnement régulier à temps partiel. Nous fixons ensemble le périmètre, le calendrier et le tarif dès le départ.' },
    { title: 'Travailler au sein de votre équipe', text: 'Je rejoins vos outils et vos rituels, avec des points réguliers pour éviter toute surprise.' },
    { title: 'Une fin de mission en douceur', text: 'À la fin de la mission, votre équipe dispose déjà de la documentation et des processus pour assurer la suite.' },
  ],
  note: 'Quelle que soit la formule, je documente tout au fil de l’eau, pour que votre équipe ne soit jamais bloquée si je m’éloigne.',
}

export const about = {
  title: 'À propos',
  facts: [
    { label: 'Fondatrice', value: 'Lindsey Martin' },
    { label: 'Expérience', value: 'Plus de 8 ans en produit, QA et opérations techniques' },
    { label: 'Secteurs', value: 'Santé numérique, proptech, deep tech, technologie grand public' },
    {
      label: 'Formation',
      value: [
        'MBA, HEC Paris',
        'Certificat en développement web full-stack, UC Berkeley Extension',
        'Licence de psychologie, University of San Francisco',
      ],
    },
    { label: 'Basée à', value: 'Paris, auparavant San Francisco' },
  ],
  paragraphs: [
    "Je suis Lindsey, product manager avec huit ans d'expérience en ingénierie qualité, solutions techniques et opérations support. J'ai commencé par la recherche utilisateur, en menant des études d'utilisabilité et en travaillant dans des laboratoires de recherche universitaires pendant ma licence de psychologie.",
    "Je suis arrivée dans la tech au sein d'une entreprise de santé numérique, où j'ai créé et piloté les opérations support, testé chaque release, puis rejoint les solutions techniques avant de diriger l'ingénierie qualité web. Depuis, j'ai créé et dirigé des équipes QA, en tant que salariée et en tant que consultante, obtenu un certificat en développement web full-stack à UC Berkeley Extension, et terminé mon MBA à HEC Paris, où j'ai conseillé une startup deep tech sur sa stratégie go-to-market.",
    "Plus récemment, j'ai mené un projet produit de 0 à 1 dans une startup proptech qui développe un contrôle d'accès intelligent pour les bâtiments neufs. J'ai piloté le produit pour trois utilisateurs très différents : les résidents, les gestionnaires d'immeubles et les installateurs. J'ai porté de bout en bout une nouvelle application pour les installateurs, de la cartographie du parcours sur site et du prototypage des écrans à la rédaction des PRD, à la passation au design et à l'ingénierie, et à la livraison de plusieurs autres fonctionnalités. J'ai aussi travaillé avec l'ingénierie sur une approche de développement assistée par l'IA et intégré les tests au processus produit dès le premier jour.",
    "Venir au produit par la QA et le support façonne ma manière de travailler. J'écris des spécifications qui intègrent déjà les cas limites. Je sais ce dont les utilisateurs se plaignent vraiment, et je planifie des releases où les tests sont prévus dès le départ plutôt qu'ajoutés à la fin.",
    "Ce parcours me permet de voir un produit sous tous ses angles : l'utilisateur, le code, la release et le business. Je travaille au mieux en immersion avec une équipe, et j'aide aujourd'hui des entreprises des deux côtés de l'Atlantique à construire des produits en toute confiance.",
  ],
}

export const contact = {
  title: 'Parlons de votre projet',
  text: "Parlez-moi un peu de ce sur quoi vous travaillez. Je vous réponds sous deux jours ouvrés pour organiser un appel de 30 minutes.",
  buttonLabel: 'M’Écrire',
  subject: 'Demande de projet',
}

// Contact form shown in a pop-up when visitors click the contact button
export const contactForm = {
  title: 'Parlez-moi de votre projet',
  intro: 'Partagez quelques détails et je vous réponds sous deux jours ouvrés.',
  fields: {
    name: 'Votre nom',
    email: 'E-mail professionnel',
    company: "Nom de l'entreprise",
    website: "Site web de l'entreprise",
    message: 'Comment puis-je vous aider ?',
  },
  placeholders: {
    website: 'https://',
    message: 'Quelques phrases sur votre produit, où vous en êtes et ce dont vous avez besoin.',
  },
  required: 'Obligatoire',
  optional: 'Facultatif',
  errors: {
    required: 'Merci de remplir ce champ.',
    nameShort: 'Merci de saisir votre nom complet.',
    email: 'Merci de saisir une adresse e-mail valide, par exemple nom@acme.com',
    website: 'Merci de saisir une adresse web, par exemple acme.com',
    messageShort: 'Merci d’ajouter un peu plus de détails (au moins {min} caractères).',
    tooLong: 'Merci de rester sous {max} caractères.',
    summary: 'Merci de corriger les champs signalés :',
  },
  charCount: '{count} / {max}',
  submit: 'Envoyer le Message',
  sending: 'Envoi...',
  cancel: 'Annuler',
  close: 'Fermer',
  successTitle: 'Merci !',
  successText: 'Votre message est bien parti. Je vous réponds sous deux jours ouvrés.',
  mailtoTitle: 'Presque terminé',
  mailtoText: "Votre application e-mail devrait s'ouvrir avec votre message prêt à partir. Il ne reste plus qu'à l'envoyer.",
  failText: "Une erreur est survenue lors de l'envoi. Merci de réessayer, ou de m'écrire directement à",
  failOffline: "Vous semblez hors ligne. Vérifiez votre connexion internet et réessayez. Votre message est toujours là.",
  failTimeout: "L'envoi a pris trop de temps. Merci de réessayer. Votre message est toujours là.",
  failRateLimit: "Trop de messages ont été envoyés en peu de temps. Merci de patienter une minute et de réessayer, ou de m'écrire directement à",
  emailSubject: 'Demande de projet',
}

// Short labels used inside components
export const ui = {
  getInTouch: 'Me Contacter',
  home: 'accueil',
  mainNav: 'Principale',
  language: 'Langue',
  challenge: 'Le défi',
  whatIDid: 'Ce que j’ai fait',
  skillsUsed: 'Compétences mobilisées',
  linkedin: 'Profil LinkedIn',
  illustration: 'Une illustration de trois couches empilées',
}

export const meta = {
  title: 'L&M Technology Solutions | Conseil Produit, QA et Go-to-Market',
  description:
    'Conseil en product management, assurance qualité et go-to-market par Lindsey Martin. Basée à Paris, au service d’équipes en Europe et aux États-Unis.',
}

// Pages légales, liées depuis le pied de page.
export const legal = {
  title: 'Mentions Légales',
  updated: 'Dernière mise à jour le 18 octobre 2026',
  sections: [
    {
      heading: 'Éditeur du site',
      list: [
        'Lindsey Martin EI (Entrepreneur individuel), nom commercial L&M Technology Solutions',
        'Statut : micro-entrepreneur immatriculée en France',
        'SIREN : 131 358 541',
        'E-mail : info@lmtechsolutions.co',
      ],
    },
    {
      heading: 'Directrice de la publication',
      body: ['Lindsey Martin'],
    },
    {
      heading: 'Hébergement',
      list: [
        'GitHub, Inc. (GitHub Pages)',
        '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
        'Téléphone : +1 415 857 5430',
        'https://github.com',
      ],
    },
    {
      heading: 'Clients aux États-Unis',
      body: [
        'Les missions pour des clients basés aux États-Unis peuvent être contractées via L&M Technology Solutions LLC, société à responsabilité limitée américaine détenue par Lindsey Martin.',
      ],
    },
    {
      heading: 'Propriété intellectuelle',
      body: [
        'Les textes, le logo, les illustrations et le design de ce site appartiennent à L&M Technology Solutions. Merci de demander l’autorisation avant toute réutilisation. Les noms des outils cités sur le site appartiennent à leurs propriétaires respectifs.',
      ],
    },
    {
      heading: 'Responsabilité',
      body: [
        'Je veille à ce que les informations de ce site soient exactes et à jour, mais elles sont fournies à titre indicatif et peuvent évoluer. Les liens vers d’autres sites sont proposés pour votre confort, et je ne suis pas responsable de leur contenu.',
      ],
    },
    {
      heading: 'Données personnelles',
      body: ['Le traitement des informations envoyées via le formulaire de contact est expliqué dans la Politique de Confidentialité.'],
      link: 'privacy',
    },
  ],
}

export const privacy = {
  title: 'Politique de Confidentialité',
  updated: 'Dernière mise à jour le 18 octobre 2026',
  intro:
    'Cette politique explique ce que deviennent les informations que vous partagez sur ce site. En résumé : je ne collecte que ce que vous m’envoyez via le formulaire de contact, je l’utilise pour vous répondre, et je ne le vends jamais ni ne l’utilise à des fins publicitaires.',
  sections: [
    {
      heading: 'Responsable du traitement',
      body: [
        'Lindsey Martin EI, nom commercial L&M Technology Solutions (SIREN 131 358 541), est responsable de vos données personnelles. Vous pouvez me contacter à info@lmtechsolutions.co.',
      ],
    },
    {
      heading: 'Données collectées',
      body: ['Lorsque vous envoyez le formulaire de contact, je reçois :'],
      list: [
        'votre nom et votre adresse e-mail',
        'le nom et le site de votre entreprise',
        'votre message',
        'la langue dans laquelle vous consultiez le site',
      ],
      after: ['Je ne demande rien d’autre, et le site n’a ni compte utilisateur, ni newsletter, ni publicité.'],
    },
    {
      heading: 'Finalités et bases légales',
      list: [
        'Répondre à votre demande et organiser un appel. Il s’agit de mesures précontractuelles prises à votre demande (article 6.1.b du RGPD).',
        'Vous envoyer un e-mail automatique confirmant la bonne réception de votre message. Cela relève de mon intérêt légitime à vous informer que votre message est bien arrivé (article 6.1.f du RGPD).',
        'Si nous travaillons ensemble, ces informations font ensuite partie de mes dossiers professionnels.',
      ],
    },
    {
      heading: 'Destinataires et sous-traitants',
      body: ['Quelques services permettent le fonctionnement du site et du formulaire. Ils ne traitent vos informations que pour fournir leur service :'],
      list: [
        'Web3Forms (Web3Creative, Inde) reçoit le formulaire et le transmet à ma boîte e-mail. Il conserve une copie des envois jusqu’à trois ans selon ses propres conditions.',
        'Google (Google Workspace) stocke les e-mails que je reçois et envoie l’e-mail de confirmation. Pour éviter les abus, le service de confirmation garde votre adresse e-mail en mémoire pendant 10 minutes.',
        'GitHub (GitHub Pages, États-Unis) héberge le site. Comme tout hébergeur, il traite votre adresse IP pour afficher les pages et les sécuriser.',
      ],
      after: [
        'Certains de ces prestataires sont situés hors de l’Union européenne. Ces transferts sont encadrés par les clauses contractuelles types de la Commission européenne ou par le Data Privacy Framework UE États-Unis.',
      ],
    },
    {
      heading: 'Durée de conservation',
      body: [
        'Je conserve les demandes jusqu’à trois ans après notre dernier échange, puis je les supprime. Si vous devenez client, les informations sont conservées pendant la durée imposée par la loi pour les documents commerciaux et comptables.',
      ],
    },
    {
      heading: 'Cookies',
      body: [
        'Ce site n’utilise ni cookies ni outils de suivi. Il mémorise votre choix de langue dans votre propre navigateur pour que le site s’ouvre dans la même langue la prochaine fois. Ce réglage ne quitte jamais votre appareil, et vous pouvez l’effacer à tout moment dans les paramètres de votre navigateur. Les polices sont servies par ce site, aucune requête n’est donc envoyée à Google Fonts.',
      ],
    },
    {
      heading: 'Vos droits',
      body: [
        'Vous pouvez demander à accéder à vos informations, les corriger ou les supprimer, en limiter l’utilisation, vous opposer à leur traitement ou en recevoir une copie. Écrivez à info@lmtechsolutions.co et je vous répondrai sous un mois.',
        'Si vous estimez que vos données n’ont pas été traitées correctement, vous pouvez adresser une réclamation à la CNIL sur https://www.cnil.fr',
      ],
    },
    {
      heading: 'Modifications',
      body: ['Si cette politique change, la nouvelle version sera publiée sur cette page avec une date mise à jour.'],
    },
  ],
}

// Liens du pied de page et libellés des pages légales
export const legalUi = {
  legal: 'Mentions Légales',
  privacy: 'Politique de Confidentialité',
  back: 'Retour à l’Accueil',
  formNote: 'Vos informations servent uniquement à vous répondre. Voir la',
}
