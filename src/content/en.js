// English copy for the site. fr.js holds the French version with the same
// structure: when you change a line here, change the matching line there.

export const site = {
  name: 'L&M Technology Solutions',
  legalName: 'L&M Technology Solutions LLC',
  email: 'info@lmtechsolutions.co',
  linkedin: 'https://www.linkedin.com/in/lindsey-m-2219abb0/',
  locations: 'Paris, France and United States',
}

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
]

export const hero = {
  headline: 'Build the right product, then ship it without surprises.',
  lede:
    "I'm Lindsey Martin, a product manager with 8+ years across product, QA and technical operations. I help companies plan their products, test them properly, support their customers and bring it all to market.",
  primaryCta: { label: 'Request an Intro Call', href: '#contact' },
  secondaryCta: { label: 'See Services', href: '#services' },
  // Labels for the layered illustration, top layer first
  layers: [
    { title: 'Product', text: 'Roadmaps and specs' },
    { title: 'Quality', text: 'Tested before launch' },
    { title: 'Solutions', text: 'Clients supported' },
  ],
}

export const services = {
  title: 'What I can help with',
  intro:
    'Bring me in for one area or across the whole product lifecycle. I work with startups and established companies, on a project basis or as an ongoing part of your team.',
  items: [
    {
      title: 'Product Strategy and Management',
      description:
        'Turning ideas and customer feedback into a clear plan your team can build, from first prototype to shipped feature.',
      bullets: ['Discovery and user research', 'Roadmaps, PRDs and prioritization', 'UX flows and design handoff'],
    },
    {
      title: 'Quality Assurance',
      description:
        '8 years in QA, from testing releases while running support to leading web quality engineering. I set up testing processes that catch problems before your users do.',
      bullets: ['QA strategy, test plans and bug lifecycle', 'Manual, exploratory and automated testing', 'Release coordination and regression suites'],
    },
    {
      title: 'Support Operations',
      description:
        'Setting up customer support that scales, so users get fast answers and your product team hears what is breaking.',
      bullets: ['Help centers and knowledge bases', 'Support teams, tiers and SLAs', 'Support reporting and feedback loops to product'],
    },
    {
      title: 'Go to Market and Fundraising',
      description:
        'Shaping how you explain your product to customers and investors, and planning how to reach them.',
      bullets: ['Positioning and messaging by audience', 'Investor narrative and pitch materials', 'Market and investor landscape research'],
    },
    {
      title: 'Web Development',
      description:
        'Fast, accessible websites and web apps, built in React with a full stack background.',
      bullets: ['Landing pages and company sites', 'Prototypes and MVPs', 'Multilingual sites for European markets'],
    },
  ],
}

export const stack = {
  title: 'Tools I work with',
  hint: 'Click a layer to bring it to the front.',
  showLayer: 'Show {layer} tools',
  layers: [
    {
      label: 'Product',
      tone: 'product',
      groups: [
        { label: 'Product and delivery', icon: 'board', tools: ['Jira', 'Confluence', 'ClickUp', 'Notion', 'Agile and Scrum'] },
        { label: 'Design and collaboration', icon: 'palette', tools: ['Figma', 'Miro', 'Slack', 'Loom'] },
        { label: 'Analytics', icon: 'chart', tools: ['Google Analytics', 'Google Search Console', 'SQL'] },
        { label: 'AI tools', icon: 'sparkle', tools: ['Claude', 'Perplexity', 'Gemini'] },
      ],
    },
    {
      label: 'Quality',
      tone: 'quality',
      groups: [
        { label: 'Testing', icon: 'checklist', tools: ['Cypress', 'Playwright', 'TestRail', 'BrowserStack', 'Datadog'] },
        { label: 'Mobile', icon: 'phone', tools: ['Xcode', 'Android Studio', 'Firebase'] },
      ],
    },
    {
      label: 'Solutions',
      tone: 'solutions',
      groups: [
        { label: 'Development', icon: 'code', tools: ['React', 'JavaScript', 'HTML and CSS', 'GitHub', 'AWS'] },
        { label: 'Support', icon: 'chat', tools: ['Zendesk', 'Zendesk Explore', 'Handlebars'] },
      ],
    },
  ],
}

export const work = {
  title: 'Selected Work',
  intro:
    'Product, research, client and quality work, with the skills each one used. Clients are described by industry to keep their details confidential.',
  filterLabel: 'Filter by type of work',
  filters: [
    { key: 'all', label: 'All' },
    { key: 'product', label: 'Product' },
    { key: 'strategy', label: 'Strategy' },
    { key: 'research', label: 'Research' },
    { key: 'client', label: 'Client Solutions' },
    { key: 'qa', label: 'QA' },
    { key: 'support', label: 'Support' },
  ],
  items: [
    {
      kind: 'product',
      art: 'installer',
      area: 'Product Management',
      sector: 'Proptech, Smart Building Access',
      metric: '0 to 1',
      metricLabel: 'New Installer App, from Prototype to Build Ready Spec',
      title: 'Launching a New App for Installers',
      problem: 'Contractors installing smart access hardware in new buildings had no guided way to install, pair and validate devices on site.',
      did: 'Mapped the installer journey, prototyped the flows, wrote the specs and handed off to design and engineering, then validated features on working branches before release.',
      skills: ['0 to 1 product', 'Prototyping', 'UX flows', 'Specs', 'Design handoff'],
    },
    {
      kind: 'product',
      art: 'platform',
      area: 'Product Management',
      sector: 'Proptech, SaaS and IoT',
      metric: '3 user groups',
      metricLabel: 'Residents, Building Managers and Installers',
      title: 'Shipping Features Across a Growing Platform',
      problem: 'A fast moving startup was building for three very different users at once, with no shared process for taking features from idea to release.',
      did: 'Wrote PRDs and took multiple features from concept to shipped, worked with engineering on an AI assisted build approach, and built the bug lifecycle and testing cycle into the product process.',
      skills: ['PRDs', 'Prioritization', 'AI assisted development', 'Cross functional delivery'],
    },
    {
      kind: 'strategy',
      art: 'space',
      area: 'Product Strategy and Go to Market',
      sector: 'Deep Tech, Space Software',
      metric: '3 streams',
      metricLabel: 'Of Revenue Framed Into One Model Ahead of a Seed Round',
      title: 'Repositioning a Technical Product for Its Market',
      problem: 'A spacecraft simulation platform was seen as a luxury for defense contractors, and its story was hard for buyers and investors to follow.',
      did: 'Reframed the product as a necessity for commercial space companies, built a competitive framework against legacy players, mapped a beachhead to expansion market path, and benchmarked 18 comparable seed rounds.',
      skills: ['Positioning', 'Competitive analysis', 'Business model', 'Market sizing', 'Messaging'],
    },
    {
      kind: 'research',
      art: 'research',
      area: 'User Research',
      sector: 'Consumer Technology',
      metric: 'Real users',
      metricLabel: 'Testing New Hardware and Software Before Launch',
      title: 'Running Usability Studies for New Products',
      problem: 'Design and engineering teams needed evidence of how real people used new input mechanisms before committing to hardware and software designs.',
      did: 'Facilitated usability sessions from one on one interviews to large groups, ran study protocols and surveys, and shared findings with design, engineering and product teams.',
      skills: ['Usability testing', 'User interviews', 'Surveys', 'Research synthesis'],
    },
    {
      kind: 'client',
      art: 'client',
      area: 'Client Solutions',
      sector: 'Digital Health',
      metric: 'One contact',
      metricLabel: 'Between Clients, Clinical Teams and Engineering',
      title: 'Turning Client Needs Into Product Fixes',
      problem: 'Enterprise clients and clinical staff needed one person who understood both their needs and the product, so issues did not get lost between teams.',
      did: 'Led implementation guidance, training and product consultation for clients, acted as the main technical escalation point, built client relationships at on site events, and turned feedback into requirements for product and engineering.',
      skills: ['Client onboarding', 'Stakeholder management', 'Requirements gathering', 'Training'],
    },
    {
      kind: 'qa',
      art: 'qa',
      area: 'Quality Assurance',
      sector: 'Digital Health',
      metric: '80%',
      metricLabel: 'Fewer Bugs Reaching Production at One of Them',
      title: 'Building and Leading QA at Three Digital Health Companies',
      problem: 'Each team needed reliable releases, and two of them had no formal testing process at all, so quality depended on ad hoc checks.',
      did: 'Set up and led QA: test strategy, Cypress and Playwright automation, Datadog monitoring, weekly bug bashes and an offshore regression team, all embedded in the product release cycle.',
      skills: ['Test strategy', 'Release management', 'Automation', 'Team leadership'],
    },
    {
      kind: 'support',
      art: 'support',
      area: 'Support Operations',
      sector: 'Digital Health',
      metric: 'Under 6h',
      metricLabel: 'Response Time on Support Tickets',
      title: 'Scaling Customer Support',
      problem: 'A growing health app needed support that kept up with patients, clients and clinical teams without slowing the product team down.',
      did: 'Built the help center and knowledge base, set up an offshore tier 1 and tier 2 team, and created reporting that fed ticket trends back to product.',
      skills: ['Help center', 'Team setup', 'SLAs', 'Feedback loops'],
    },
  ],
}

export const process = {
  title: 'How we work together',
  intro: 'Every engagement starts the same way, then takes the shape your team needs.',
  steps: [
    { title: 'Intro call', text: "We talk through where you are, what's blocking you and what success looks like." },
    { title: 'Find the right fit', text: 'A defined project, a few months embedded with your team, or ongoing part-time support. We agree on scope, timing and rates up front.' },
    { title: 'Work as part of your team', text: 'I join your tools and rituals, with regular check ins so there are no surprises.' },
    { title: 'Smooth wrap-up', text: 'When an engagement ends, your team already has the documentation and processes to keep things running.' },
  ],
  note: 'However we work, I document everything as I go, so your team is never stuck if I step away.',
}

// Illustrated journey between How we work together and About
export const journey = {
  label: 'The journey I cover',
  caption: 'From first idea to happy customers, one consultant across the whole journey.',
  steps: [
    { label: 'Discover', icon: 'bulb' },
    { label: 'Plan', icon: 'map' },
    { label: 'Test', icon: 'bug' },
    { label: 'Launch', icon: 'rocket' },
    { label: 'Support', icon: 'heart' },
  ],
}

export const about = {
  title: 'About',
  facts: [
    { label: 'Founder', value: 'Lindsey Martin' },
    { label: 'Experience', value: '8+ years across product, QA and technical operations' },
    { label: 'Industries', value: 'Digital health, proptech, deep tech, consumer technology' },
    {
      label: 'Education',
      value: [
        'MBA, HEC Paris',
        'Full-Stack Web Development Certificate, UC Berkeley Extension',
        'BA Psychology, University of San Francisco',
      ],
    },
    { label: 'Based in', value: 'Paris, formerly San Francisco' },
  ],
  paragraphs: [
    "I’m Lindsey, a product manager with eight years of experience in quality engineering, technical solutions, and support operations. I started in user research, running usability studies and working in university research labs while finishing my psychology degree.",
    "I moved into tech at a digital health company, where I built and ran support operations, tested every release, and then moved into technical solutions and led web quality engineering. Since then, I have built and led QA teams as a full-time employee and as a consultant, earned a full-stack web development certificate from UC Berkeley Extension, and completed my MBA at HEC Paris, where I advised a deep tech startup on its go-to-market strategy.",
    "Most recently, I led 0-to-1 product work at a proptech startup building smart access control for new buildings. I drove the product across three very different users: residents, building managers, and installers. I owned a new installer app end to end, from mapping the on-site journey and prototyping flows to writing PRDs, handing off to design and engineering, and shipping several additional features. I also partnered with engineering on an AI-assisted build approach and built testing into the product process from day one.",
    "Coming to product from QA and support shapes how I work. I write specs with the edge cases already in them. I understand what users actually complain about, and I plan releases with testing built in rather than bolted on.",
    "That path means I look at a product from every side: the user, the code, the release, and the business. I work best embedded with a team, and today I help companies on both sides of the Atlantic build products they can be confident in.",
  ],
}

export const contact = {
  title: "Let's talk about your project",
  text: "Tell me a little about what you're working on. I'll reply within two business days to set up a 30 minute call.",
  buttonLabel: 'Email Me',
  subject: 'Project inquiry',
}

// Contact form shown in a pop-up when visitors click the contact button
export const contactForm = {
  title: 'Tell me about your project',
  intro: "Share a few details and I'll get back to you within two business days.",
  fields: {
    name: 'Your name',
    email: 'Work email',
    company: 'Company name',
    website: 'Company website',
    message: 'What can I help with?',
  },
  placeholders: {
    website: 'https://',
    message: 'A few sentences on your product, where you are now and what you need help with.',
  },
  required: 'Required',
  optional: 'Optional',
  errors: {
    required: 'Please fill in this field.',
    nameShort: 'Please enter your full name.',
    email: 'Please enter a valid email address, like name@acme.com',
    website: 'Please enter a web address, like acme.com',
    messageShort: 'Please add a little more detail (at least {min} characters).',
    tooLong: 'Please keep this under {max} characters.',
    summary: 'Please fix the highlighted fields:',
  },
  charCount: '{count} / {max}',
  submit: 'Send Message',
  sending: 'Sending...',
  cancel: 'Cancel',
  close: 'Close',
  successTitle: 'Thank you!',
  successText: "Your message is on its way. I'll reply within two business days.",
  mailtoTitle: 'Almost done',
  mailtoText: 'Your email app should open with your message ready to go. Just press send.',
  failText: "Something went wrong sending your message. Please try again, or email me directly at",
  failOffline: "You appear to be offline. Check your internet connection and try again. Your message is still here.",
  failTimeout: "The message took too long to send. Please try again. Your message is still here.",
  failRateLimit: "Too many messages were sent in a short time. Please wait a minute and try again, or email me directly at",
  emailSubject: 'Project inquiry',
}

// Short labels used inside components
export const ui = {
  getInTouch: 'Get in Touch',
  home: 'home',
  mainNav: 'Main',
  language: 'Language',
  challenge: 'The challenge',
  whatIDid: 'What I did',
  skillsUsed: 'Skills used',
  projects: 'Projects',
  prevProject: 'Previous project',
  nextProject: 'Next project',
  slideOf: '{n} of {total}',
  goToProject: 'Show project {n}',
  linkedin: 'LinkedIn profile',
  illustration: 'An illustration of three stacked layers',
}

export const meta = {
  title: 'L&M Technology Solutions | Product, QA and Go to Market Consulting',
  description:
    'Product management, quality assurance and go to market consulting from Lindsey Martin. Based in Paris, working with teams in Europe and the US.',
}

// Legal pages, linked from the footer.
export const legal = {
  title: 'Legal Notice',
  updated: 'Last updated October 18, 2026',
  sections: [
    {
      heading: 'Publisher',
      list: [
        'Lindsey Martin EI (Entrepreneur individuel), trading as L&M Technology Solutions',
        'Status: micro-entrepreneur registered in France',
        'SIREN: 131 358 541',
        'Email: info@lmtechsolutions.co',
      ],
    },
    {
      heading: 'Publication director',
      body: ['Lindsey Martin'],
    },
    {
      heading: 'Hosting',
      list: [
        'GitHub, Inc. (GitHub Pages)',
        'https://github.com',
      ],
    },
    {
      heading: 'United States clients',
      body: [
        'Work for clients in the United States may be contracted through L&M Technology Solutions LLC, a United States limited liability company owned by Lindsey Martin.',
      ],
    },
    {
      heading: 'Intellectual property',
      body: [
        'The text, logo, illustrations and design of this website belong to L&M Technology Solutions. Please ask before reusing any of them. Brand names of tools mentioned on the site belong to their owners.',
      ],
    },
    {
      heading: 'Liability',
      body: [
        'I take care to keep the information on this website accurate and up to date, but it is provided for general information and may change. Links to other websites are provided for convenience, and I am not responsible for their content.',
      ],
    },
    {
      heading: 'Personal data',
      body: ['How the contact form handles your information is explained in the Privacy Policy.'],
      link: 'privacy',
    },
  ],
}

export const privacy = {
  title: 'Privacy Policy',
  updated: 'Last updated October 18, 2026',
  intro:
    'This policy explains what happens to the information you share through this website. In short: I only collect what you send me through the contact form, I use it to reply to you, and I never sell it or use it for advertising.',
  sections: [
    {
      heading: 'Who is responsible',
      body: [
        'Lindsey Martin EI, trading as L&M Technology Solutions (SIREN 131 358 541), is responsible for your personal data. You can reach me at info@lmtechsolutions.co.',
      ],
    },
    {
      heading: 'What I collect',
      body: ['When you send the contact form, I receive:'],
      list: [
        'your name and email address',
        'your company name and website',
        'your message',
        'the language you were viewing the site in',
      ],
      after: [
        'If you accept cookies, Google Analytics also records how you use the site: pages viewed, approximate location (country or city), device and browser type, and how you arrived. This is measured in aggregate and is not used to identify you.',
        'I do not ask for anything else, and the site has no accounts, newsletter or advertising.',
      ],
    },
    {
      heading: 'Why I use it',
      list: [
        'To reply to your enquiry and arrange a call. This is a step you ask for before a possible contract (GDPR article 6(1)(b)).',
        'To send you an automatic email confirming I received your message. This is in my legitimate interest of letting you know your message arrived (GDPR article 6(1)(f)).',
        'If we go on to work together, the information becomes part of our business records.',
        'To understand how visitors use the site and improve it, with Google Analytics. This only happens if you accept cookies (GDPR article 6(1)(a)), and you can withdraw your consent at any time.',
      ],
    },
    {
      heading: 'Who else handles it',
      body: ['A few services help run the site and the contact form. They only process your information to provide their service:'],
      list: [
        'Web3Forms (Web3Creative, India) receives the form and forwards it to my inbox. It keeps a copy of submissions for up to three years under its own terms.',
        'Google (Google Workspace) stores the emails I receive and sends the confirmation email. To prevent misuse, the confirmation service remembers your email address for 10 minutes.',
        'Google Analytics (Google Ireland Limited) measures site visits, only if you accept cookies. IP addresses are not stored.',
        'GitHub (GitHub Pages, United States) hosts the website. Like any web host, it processes your IP address to deliver the pages and keep them secure.',
      ],
      after: [
        'Some of these providers are outside the European Union. Those transfers are covered by the European Commission’s Standard Contractual Clauses or the EU-US Data Privacy Framework.',
      ],
    },
    {
      heading: 'How long I keep it',
      body: [
        'I keep enquiries for up to three years after our last contact, then delete them. If you become a client, the information is kept as long as the law requires for business and accounting records.',
        'Google Analytics data is kept for 14 months, and its cookies expire after 13 months at most.',
      ],
    },
    {
      heading: 'Cookies',
      body: [
        'The first time you visit, a banner asks whether you accept Google Analytics cookies (named _ga), which measure how visitors use the site. If you decline, none are set and Google Analytics is not loaded. You can change your choice at any time with the Cookie Settings link at the bottom of every page, and your choice is asked again after six months.',
        'The site also remembers your language and your cookie choice in your own browser. These settings are needed for the site to work as you asked, never leave your device, and can be cleared at any time in your browser settings. The fonts are served from this website, so no request is sent to Google Fonts.',
      ],
    },
    {
      heading: 'Your rights',
      body: [
        'You can ask to see, correct or delete your information, ask me to limit how it is used, object to its use, or receive a copy of it. Email info@lmtechsolutions.co and I will reply within one month.',
        'If you think your data has not been handled properly, you can file a complaint with the CNIL, the French data protection authority, at https://www.cnil.fr',
      ],
    },
    {
      heading: 'Changes',
      body: ['If this policy changes, the new version will be posted on this page with an updated date.'],
    },
  ],
}

// Footer links and labels for the legal pages
export const legalUi = {
  legal: 'Legal Notice',
  privacy: 'Privacy Policy',
  back: 'Back to Home',
  formNote: 'I only use your details to reply to you. See the',
}

// Cookie consent banner
export const cookieBanner = {
  label: 'Cookie consent',
  text: "I'd like to use Google Analytics cookies to see how visitors use this site. They're only set if you accept.",
  learnMore: 'Privacy Policy',
  accept: 'Accept',
  decline: 'Decline',
  settings: 'Cookie Settings',
}
