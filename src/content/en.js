// English copy for the site. fr.js holds the French version with the same
// structure: when you change a line here, change the matching line there.

export const site = {
  name: 'L&M Technology Solutions',
  legalName: 'L&M Technology Solutions LLC',
  email: 'contact@lmtechsolutions.co',
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
  primaryCta: { label: 'Book an Intro Call', href: '#contact' },
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
  groups: [
    { label: 'Testing', tools: ['Cypress', 'Playwright', 'TestRail', 'BrowserStack', 'Datadog'] },
    { label: 'Mobile', tools: ['Xcode', 'Android Studio', 'Firebase'] },
    { label: 'Development', tools: ['React', 'JavaScript', 'HTML and CSS', 'GitHub', 'AWS'] },
    { label: 'Support', tools: ['Zendesk', 'Zendesk Explore', 'Handlebars'] },
    {
      label: 'Product and delivery',
      tools: ['Jira', 'Confluence', 'ClickUp', 'Notion', 'Agile and Scrum'],
    },
    { label: 'Design and collaboration', tools: ['Figma', 'Miro', 'Slack', 'Loom'] },
    { label: 'Analytics', tools: ['Google Analytics', 'Google Search Console', 'SQL'] },
    { label: 'AI tools', tools: ['Claude', 'Perplexity', 'Gemini'] },
  ],
}

export const work = {
  title: 'Selected Work',
  intro:
    'Product, research, client and quality work, with the skills each one used. Clients are described by industry to keep their details confidential.',
  items: [
    {
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

// Short labels used inside components
export const ui = {
  getInTouch: 'Get in Touch',
  home: 'home',
  mainNav: 'Main',
  language: 'Language',
  challenge: 'The challenge',
  whatIDid: 'What I did',
  skillsUsed: 'Skills used',
  linkedin: 'LinkedIn profile',
  illustration: 'An illustration of three stacked layers',
}

export const meta = {
  title: 'L&M Technology Solutions',
  description:
    'Independent consulting in product management, quality assurance, support operations and go to market. Based in Paris, working with teams in Europe and the US.',
}
