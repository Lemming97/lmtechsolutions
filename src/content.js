// All the words on the site live here. Edit this file to change the copy;
// the components in src/components only handle layout.

export const site = {
  name: 'L&M Technology Solutions',
  legalName: 'L&M Technology Solutions LLC',
  email: 'contact@lmtechsolutions.co',
  locations: 'Paris, France and United States',
}

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'How I work', href: '#process' },
  { label: 'About', href: '#about' },
]

export const hero = {
  headline: 'Software that works the first time your customers use it.',
  lede:
    'I help companies plan, build, test and launch digital products. Quality assurance, product management, web development and go to market support, from one consultant who has done all four.',
  primaryCta: { label: 'Book a free intro call', href: '#contact' },
  secondaryCta: { label: 'See services', href: '#services' },
  testRun: {
    file: 'launch-readiness.test',
    target: 'your product',
    checks: [
      { label: 'requirements are clear', time: '0.4s' },
      { label: 'roadmap agreed with the team', time: '0.7s' },
      { label: 'app built and deployed', time: '1.2s' },
      { label: 'bugs caught before users find them', time: '0.9s' },
      { label: 'launch plan and first customers', time: '0.6s' },
    ],
  },
}

export const services = {
  title: 'What I can help with',
  intro:
    'Bring me in for one area or across the whole product lifecycle. I work with startups and established companies, on a project basis or as an ongoing part of your team.',
  items: [
    {
      title: 'Quality assurance',
      description: 'Testing processes that catch problems early, so releases stop feeling risky.',
      bullets: ['QA strategy and test plans', 'Manual and exploratory testing', 'Release checklists and bug triage'],
    },
    {
      title: 'Product management',
      description: 'Turning ideas and customer feedback into a clear plan your team can build.',
      bullets: ['Product discovery and user research', 'Roadmaps, specs and prioritization', 'Sprint planning and delivery'],
    },
    {
      title: 'Web app development',
      description: 'Websites and web applications built to be fast, accessible and easy to maintain.',
      bullets: ['Landing pages and company sites', 'Prototypes and MVPs', 'Multilingual sites for European markets'],
    },
    {
      title: 'Business development',
      description: 'Getting your product in front of the right people and building early momentum.',
      bullets: ['Go to market planning', 'Outreach and partnership development', 'Sales process setup for early teams'],
    },
  ],
}

export const process = {
  title: 'How a project runs',
  intro: 'Every engagement follows the same simple shape, whether it lasts two weeks or six months.',
  steps: [
    { title: 'Intro call', text: 'We talk through where you are, what is blocking you and what success looks like.' },
    { title: 'Proposal', text: 'You get a written scope, timeline and price before any work starts.' },
    { title: 'Build and test', text: 'I do the work with regular check ins, so there are no surprises at the end.' },
    { title: 'Handover', text: 'Your team gets the documentation and processes to keep things running.' },
  ],
}

export const about = {
  title: 'About',
  facts: [
    { label: 'Founder', value: 'Lindsey Martin' },
    { label: 'Education', value: 'MBA, HEC Paris' },
    { label: 'Based in', value: 'Paris, formerly San Francisco' },
    { label: 'Works with', value: 'Teams in Europe and the US' },
  ],
  paragraphs: [
    "I'm Lindsey, the founder of L&M Technology Solutions. My career has moved between QA leadership and product management at early stage tech companies, which taught me that most product problems start long before the first bug report.",
    'I studied psychology before moving into tech, and it still shapes how I work: I start with how real people will use what you\'re building, then work backwards to the plan, the code and the tests.',
    'After years in San Francisco I moved to Paris and completed my MBA at HEC. Today I help companies on both sides of the Atlantic build products they can be confident in.',
  ],
}

export const contact = {
  title: "Let's talk about your project",
  text: "Tell me a little about what you're working on. I'll reply within two business days to set up a free 30 minute call.",
  buttonLabel: 'Email me',
  subject: 'Project inquiry',
}
