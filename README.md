# L&M Technology Solutions

Company website for L&M Technology Solutions, served at https://lmtechsolutions.co

Built with React and Vite. Every push to `main` builds the site and deploys it to GitHub Pages through `.github/workflows/deploy.yml`.

## Run it locally

```bash
npm install
npm run dev
```

Then open the address it prints (usually http://localhost:5173).

## Edit the content

The site is in English and French. All the text lives in two files with the same structure:

- `src/content/en.js` for English
- `src/content/fr.js` for French

When you change a line in one, change the matching line in the other. The files in `src/components` only handle layout, and styles are in `src/index.css`.

Visitors see French if their browser is set to French, English otherwise, and can switch with the EN / FR toggle in the header (their choice is remembered). You can also link straight to a language with `?lang=fr` or `?lang=en`.

## Contact form

The "Email Me" button opens a contact form. Submissions are sent through [Web3Forms](https://web3forms.com), which emails them to the address set up in your Web3Forms account (info@lmtechsolutions.co). The access key lives in `src/config.js`; it is public by design, so it is safe in the site code. A hidden spam trap field filters out most bots.

If the key is ever removed, the form falls back to opening the visitor's email app with their message filled in.

Visitors also get a branded confirmation email in their language, sent from your Google account by a small Google Apps Script. Setup steps are in `apps-script/README.md`.

## Legal pages

The Legal Notice (`#legal-notice`) and Privacy Policy (`#privacy-policy`) are linked from the footer and from the contact form. Their text is in the `legal` and `privacy` sections of `src/content/en.js` and `fr.js`. Update the Privacy Policy if you add a new service that receives visitor data, such as analytics.

A cookie banner asks visitors to accept or decline on their first visit (and again after six months); the footer's Cookie Settings link reopens it. The choice is handled in `src/consent.js`. Anything that sets cookies must only load when `hasConsent()` is true. Google Analytics (`src/analytics.js`, ID in `src/config.js`) works this way: it loads only after Accept, and declining later stops it and removes its cookies.

Fonts are bundled with the site (through `@fontsource`) rather than loaded from Google Fonts, so visitors' browsers never contact Google.

## Copyright and trademarks

© 2026 Lindsey Martin. All rights reserved.

The L&M Technology Solutions name, logo and sparkle mark, the brand kit, the illustrations, the website text and design, and the source code in this repository are the property of Lindsey Martin, who operates L&M Technology Solutions. They may not be copied, reused, modified or distributed, in whole or in part, without prior written permission.

This repository is public only so the site can be hosted on GitHub Pages. It is not open source, and viewing or forking it grants no rights to its contents. See [LICENSE](LICENSE) for the full notice. The same terms appear on the website's [Legal Notice](https://lmtechsolutions.co/#legal-notice).

Third party packages and fonts keep their own licenses, and names of tools and companies mentioned on the site belong to their respective owners.

Permission requests: info@lmtechsolutions.co

## Project layout

```
public/          files copied as is (CNAME for the custom domain, favicon)
src/content/      site copy, one file per language
src/i18n.jsx      language switching
src/config.js     contact form and confirmation email settings
apps-script/     confirmation email script (runs in your Google account)
src/components/  one component per section
src/index.css    styles
```
