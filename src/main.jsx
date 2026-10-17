import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './i18n.jsx'
// Fonts are bundled with the site instead of loaded from Google Fonts,
// so visitors' browsers never contact Google (see the Privacy Policy).
import '@fontsource/schibsted-grotesk/latin-400.css'
import '@fontsource/schibsted-grotesk/latin-500.css'
import '@fontsource/schibsted-grotesk/latin-600.css'
import '@fontsource/schibsted-grotesk/latin-700.css'
import '@fontsource/schibsted-grotesk/latin-800.css'
import '@fontsource/sora/latin-300.css'
import '@fontsource/sora/latin-600.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
