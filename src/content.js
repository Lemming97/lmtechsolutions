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
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
]

export const hero = {
  headline: 'Build the right product, then ship it without surprises.',
  lede:
    "I'm Lindsey Martin, a product manager with 8 years of QA and support operations experience across health tech, proptech and deep tech. I help companies plan their products, test them properly, support their customers and bring it all to market.",
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
      title: 'Product strategy and management',
      description:
        'Turning ideas and customer feedback into a clear plan your team can build, from first prototype to shipped feature.',
      bullets: ['Discovery and user research', 'Roadmaps, PRDs and prioritization', 'UX flows and design handoff'],
    },
    {
      title: 'Quality assurance',
      description:
        '8 years in QA, from testing releases while running support to leading web quality engineering. I set up testing processes that catch problems before your users do.',
      bullets: ['QA strategy, test plans and bug lifecycle', 'Manual, exploratory and automated testing', 'Release coordination and regression suites'],
    },
    {
      title: 'Support operations',
      description:
        'Setting up customer support that scales, so users get fast answers and your product team hears what is breaking.',
      bullets: ['Help centers and knowledge bases', 'Support teams, tiers and SLAs', 'Support reporting and feedback loops to product'],
    },
    {
      title: 'Go to market and fundraising',
      description:
        'Shaping how you explain your product to customers and investors, and planning how to reach them.',
      bullets: ['Positioning and messaging by audience', 'Investor narrative and pitch materials', 'Market and investor landscape research'],
    },
    {
      title: 'Web development',
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
  title: 'Recent work',
  intro:
    'Results from recent product, QA, support and go to market projects. Clients are described by industry to keep their details confidential.',
  items: [
    {
      area: 'Quality assurance',
      sector: 'Digital health',
      metric: '80%',
      metricLabel: 'fewer bugs reaching production',
      title: 'Building a web QA function from scratch',
      problem: 'No formal testing team existed, and bugs regularly made it into releases used by patients and clinical teams.',
      did: 'Set up test planning, Cypress automation, Datadog monitoring and weekly bug bashes, and recruited and trained an offshore regression team.',
    },
    {
      area: 'Product management',
      sector: 'Proptech, smart building access',
      metric: '0 to 1',
      metricLabel: 'new installer app, prototype to shipped spec',
      title: 'Launching a new app for installers',
      problem: 'Contractors installing smart access hardware in new buildings had no guided way to install, pair and validate devices on site.',
      did: 'Owned the product end to end, from prototyping and UX flows to PRDs and design handoff, and formalized the bug lifecycle and testing cycle for the company.',
    },
    {
      area: 'Go to market',
      sector: 'Deep tech, space software',
      metric: '25+',
      metricLabel: 'investors mapped ahead of a seed round',
      title: 'Repositioning a startup for investors',
      problem: 'A highly technical spacecraft simulation platform was hard for non technical investors and buyers to understand.',
      did: 'Reframed the story around category creation, wrote messaging for investor, enterprise and technical audiences, and benchmarked 18 comparable seed rounds.',
    },
    {
      area: 'Quality assurance',
      sector: 'Health tech',
      metric: 'From zero',
      metricLabel: 'to a full testing life cycle in Playwright',
      title: 'Standing up QA for a growing product',
      problem: 'The product had no testing process at all, and releases depended on whoever had time to check them.',
      did: 'Built and led a QA team, introduced Playwright, and embedded a full testing life cycle into the product and engineering pipeline.',
    },
    {
      area: 'Support operations',
      sector: 'Digital health',
      metric: 'Under 6h',
      metricLabel: 'response time on support tickets',
      title: 'Scaling customer support',
      problem: 'A growing health app needed support that kept up with patients, clients and clinical teams without slowing the product team down.',
      did: 'Built the help center and knowledge base, set up an offshore tier 1 and tier 2 team, and created reporting that fed ticket trends back to product.',
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
    { label: 'Experience', value: '8 years in QA and support operations' },
    { label: 'Industries', value: 'Health tech, proptech, deep tech' },
    { label: 'Education', value: 'MBA, HEC Paris. BA Psychology' },
    { label: 'Based in', value: 'Paris, formerly San Francisco' },
  ],
  paragraphs: [
    'I started in user research, running usability studies and working in university research labs while finishing my psychology degree. I moved into tech at a digital health company, where I built and ran support operations while testing every release, then moved into technical solutions and lead web quality engineering.',
    'Since then I have led QA as a consultant, earned a full stack web development certificate from UC Berkeley Extension, completed my MBA at HEC Paris, and led 0 to 1 product work at a proptech startup.',
    'That path means I look at a product from every side: the user, the code, the release and the business. Today I help companies on both sides of the Atlantic build products they can be confident in.',
  ],
}

export const contact = {
  title: "Let's talk about your project",
  text: "Tell me a little about what you're working on. I'll reply within two business days to set up a free 30 minute call.",
  buttonLabel: 'Email me',
  subject: 'Project inquiry',
}
