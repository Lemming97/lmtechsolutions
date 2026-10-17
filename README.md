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

## Project layout

```
public/          files copied as is (CNAME for the custom domain, favicon)
src/content/      site copy, one file per language
src/i18n.jsx      language switching
src/config.js     contact form setting
src/components/  one component per section
src/index.css    styles
```
