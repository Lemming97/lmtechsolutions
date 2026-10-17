# L&M Technology Solutions

Company website for L&M Technology Solutions, served at https://www.lmtechsolutions.co

Built with React and Vite. Every push to `main` builds the site and deploys it to GitHub Pages through `.github/workflows/deploy.yml`.

## Run it locally

```bash
npm install
npm run dev
```

Then open the address it prints (usually http://localhost:5173).

## Edit the content

All the text on the site lives in `src/content.js`. Change the words there and the page updates; the files in `src/components` only handle layout. Styles are in `src/index.css`.

## Project layout

```
public/          files copied as is (CNAME for the custom domain, favicon)
src/content.js   all site copy
src/components/  one component per section
src/index.css    styles
```
