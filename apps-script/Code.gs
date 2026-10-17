/**
 * L&M Technology Solutions: contact form confirmation email
 *
 * The website sends each contact form submission here (alongside Web3Forms,
 * which still emails the enquiry to info@). This script emails the visitor a
 * branded confirmation in English or French, sent from your Google account.
 *
 * Setup steps are in apps-script/README.md.
 */

const CONFIG = {
  // Must match CONFIRMATION_TOKEN in src/config.js on the website
  token: 'lm-confirm-7f3a9c',
  // Sent "from" this address if it is set up under Gmail > Settings > Accounts > Send mail as.
  // Otherwise the email comes from your own address, and replies still go to replyTo.
  fromAlias: 'info@lmtechsolutions.co',
  replyTo: 'info@lmtechsolutions.co',
  senderName: 'L&M Technology Solutions',
  // Safety limits so the script can't be used to flood inboxes
  maxPerDay: 100,
  minutesBetweenEmailsToSameAddress: 10,
  site: 'https://lmtechsolutions.co',
  linkedin: 'https://www.linkedin.com/in/lindsey-m-2219abb0/',
}

const TEXT = {
  en: {
    subject: 'Message received | L&M Technology Solutions',
    heading: 'Message received.',
    thanks: (name) => `Thanks, ${name}. I'll reply within two business days.`,
    replyLabel: 'Reply within',
    replyValue: '2 days',
    callLabel: 'Intro call',
    callValue: '30 min',
    companyLabel: 'Company',
    yourMessage: 'Your message',
    meantime: 'In the meantime, you can see recent projects on the website.',
    button: 'See Selected Work',
    workUrl: '/?lang=en#work',
    place: 'Paris, France and United States',
    footer: "You're receiving this because you contacted L&M Technology Solutions at lmtechsolutions.co.",
  },
  fr: {
    subject: 'Message reçu | L&M Technology Solutions',
    heading: 'Message reçu.',
    thanks: (name) => `Merci, ${name}. Je vous réponds sous deux jours ouvrés.`,
    replyLabel: 'Réponse sous',
    replyValue: '2 jours',
    callLabel: 'Appel découverte',
    callValue: '30 min',
    companyLabel: 'Entreprise',
    yourMessage: 'Votre message',
    meantime: 'En attendant, vous pouvez découvrir mes projets récents sur le site.',
    button: 'Voir les Réalisations',
    workUrl: '/?lang=fr#work',
    place: 'Paris, France et États-Unis',
    footer: 'Vous recevez cet e-mail car vous avez contacté L&M Technology Solutions sur lmtechsolutions.co.',
  },
}

const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}')
    if (data.token !== CONFIG.token) return reply({ ok: false, error: 'unauthorized' })

    const email = String(data.email || '').trim().toLowerCase()
    if (!EMAIL_RE.test(email) || email.length > 254) return reply({ ok: false, error: 'email' })

    const lang = data.lang === 'fr' ? 'fr' : 'en'
    const name = clip(data.name, 100)
    const company = clip(data.company, 120)
    const message = clip(data.message, 600)

    const blocked = checkLimits(email)
    if (blocked) return reply({ ok: false, error: blocked })

    sendConfirmation({ email, lang, name, company, message })
    return reply({ ok: true })
  } catch (err) {
    console.error(err)
    return reply({ ok: false, error: 'server' })
  }
}

// Visiting the web app URL in a browser just confirms it is running
function doGet() {
  return reply({ ok: true, service: 'L&M confirmation email' })
}

function sendConfirmation({ email, lang, name, company, message }) {
  const t = TEXT[lang]
  const firstName = (name.split(/\s+/)[0] || name).trim()
  const options = {
    name: CONFIG.senderName,
    replyTo: CONFIG.replyTo,
    htmlBody: buildHtml(t, { firstName, company, message }),
  }
  if (hasFromAlias()) options.from = CONFIG.fromAlias
  GmailApp.sendEmail(email, t.subject, buildText(t, { firstName, company, message }), options)
}

// True when info@ is set up under Gmail > Settings > Accounts > Send mail as
function hasFromAlias() {
  const wanted = CONFIG.fromAlias.toLowerCase()
  return GmailApp.getAliases().some((a) => a.toLowerCase() === wanted)
}

function checkLimits(email) {
  const lock = LockService.getScriptLock()
  lock.waitLock(5000)
  try {
    const cache = CacheService.getScriptCache()
    const key = 'sent:' + email
    if (cache.get(key)) return 'too_soon'

    const props = PropertiesService.getScriptProperties()
    const today = Utilities.formatDate(new Date(), 'Europe/Paris', 'yyyy-MM-dd')
    const countKey = 'count:' + today
    const count = Number(props.getProperty(countKey) || 0)
    if (count >= CONFIG.maxPerDay) return 'daily_limit'

    props.setProperty(countKey, String(count + 1))
    cache.put(key, '1', CONFIG.minutesBetweenEmailsToSameAddress * 60)
    return ''
  } finally {
    lock.releaseLock()
  }
}

function buildHtml(t, { firstName, company, message }) {
  const font = "font-family:'Helvetica Neue',Helvetica,Arial,sans-serif"
  const fact = (label, value, color, last) =>
    `<td valign="top" class="fact" style="padding:16px 14px;width:33%;${last ? '' : 'border-right:1px solid #DCDAEE;'}${font}">` +
    `<div style="font-size:12px;color:#5E5B7D">${label}</div>` +
    `<div class="fv" style="font-size:19px;line-height:1.25;font-weight:800;color:${color};word-break:normal;overflow-wrap:break-word">${value}</div></td>`

  return `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only">
<style>@media (max-width:480px){.px{padding-left:22px!important;padding-right:22px!important}.fv{font-size:17px!important}}</style></head>
<body style="margin:0;padding:0;background:#F5F5FB">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5FB"><tr><td align="center" style="padding:28px 12px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;${font}">
<tr><td class="px" style="background:#1E1B4B;padding:28px 36px 38px">
<img src="${CONFIG.site}/brand/lm-logo-on-dark.png" width="220" height="35" alt="L&amp;M Technology Solutions" style="display:block;border:0;width:220px;height:auto">
<img src="${CONFIG.site}/brand/sparkle-mint.png" width="34" height="34" alt="" style="display:block;border:0;margin-top:32px">
<h1 style="margin:14px 0 8px;${font};font-size:32px;line-height:1.1;color:#ffffff;letter-spacing:-0.8px">${esc(t.heading)}</h1>
<p style="margin:0;${font};font-size:16px;line-height:1.55;color:#D2CFEA">${esc(t.thanks(firstName))}</p>
</td></tr>
<tr><td class="px" style="padding:30px 36px 6px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5FB;border-radius:12px"><tr>
${fact(esc(t.replyLabel), esc(t.replyValue), '#4338A8')}
${fact(esc(t.callLabel), esc(t.callValue), '#4338A8')}
${fact(esc(t.companyLabel), esc(company), '#1E9C70', true)}
</tr></table>
<p style="margin:26px 0 10px;${font};font-size:13px;font-weight:700;color:#1E1B4B">${esc(t.yourMessage)}</p>
<div style="border-left:3px solid #1E9C70;padding:4px 0 4px 16px;${font};font-size:15px;line-height:1.6;color:#1E1B4B">${esc(message).replace(/\n/g, '<br>')}</div>
<p style="margin:26px 0 0;${font};font-size:15px;line-height:1.6;color:#5E5B7D">${esc(t.meantime)}</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:16px 0 26px"><tr><td style="background:#4338A8;border-radius:6px">
<a href="${CONFIG.site}${t.workUrl}" style="display:inline-block;padding:12px 20px;${font};color:#ffffff;font-weight:700;font-size:15px;text-decoration:none">${esc(t.button)}</a>
</td></tr></table>
<p style="margin:0;${font};color:#1E1B4B;font-size:15px">Lindsey Martin</p>
<p style="margin:2px 0 30px;${font};color:#5E5B7D;font-size:13px">L&amp;M Technology Solutions | ${esc(t.place)}</p>
</td></tr>
<tr><td class="px" style="padding:22px 36px 28px;border-top:1px solid #DCDAEE">
<p style="margin:0;${font};font-size:12px;color:#5E5B7D;line-height:1.6">${esc(t.footer)}<br>
<a href="${CONFIG.site}" style="color:#4338A8">lmtechsolutions.co</a> | <a href="${CONFIG.linkedin}" style="color:#4338A8">LinkedIn</a> | <a href="mailto:${CONFIG.replyTo}" style="color:#4338A8">${CONFIG.replyTo}</a></p>
</td></tr>
</table>
</td></tr></table>
</body></html>`
}

function buildText(t, { firstName, company, message }) {
  return [
    t.heading,
    t.thanks(firstName),
    '',
    `${t.replyLabel}: ${t.replyValue}`,
    `${t.callLabel}: ${t.callValue}`,
    `${t.companyLabel}: ${company}`,
    '',
    `${t.yourMessage}:`,
    message,
    '',
    t.meantime,
    CONFIG.site + t.workUrl,
    '',
    'Lindsey Martin',
    `L&M Technology Solutions | ${t.place}`,
    '',
    t.footer,
  ].join('\n')
}

function clip(value, max) {
  const text = String(value || '').trim()
  return text.length > max ? text.slice(0, max).trim() + '…' : text
}

function esc(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}

// Run this from the editor to see which address visitors' emails come from.
// The result shows in the Execution log at the bottom of the screen.
function checkSetup() {
  const aliases = GmailApp.getAliases()
  console.log('Send mail as addresses Gmail gives this script: ' + (aliases.length ? aliases.join(', ') : 'none'))
  console.log(
    hasFromAlias()
      ? 'Good: confirmations are sent from ' + CONFIG.fromAlias
      : CONFIG.fromAlias + ' is not set up yet, so confirmations come from ' + Session.getEffectiveUser().getEmail(),
  )
}

// Run this once from the editor: it asks for Gmail permission and sends both
// versions to you so you can see what visitors receive.
function sendTestToMe() {
  const me = Session.getActiveUser().getEmail()
  const sample = {
    name: 'Jane Doe',
    company: 'Acme',
    message: 'We need help setting up QA before our product launch next quarter.',
  }
  sendConfirmation({ email: me, lang: 'en', ...sample })
  sendConfirmation({ email: me, lang: 'fr', ...sample })
}
