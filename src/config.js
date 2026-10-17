// Site settings that are the same in every language.

// Contact form submissions are sent through Web3Forms (https://web3forms.com),
// which emails them to the address set up in your Web3Forms account.
// This key is public by design, so it is safe to keep in the site code.
// Leave it empty and the form falls back to opening the visitor's email app.
export const WEB3FORMS_ACCESS_KEY = '06524fc4-11cf-4afb-837b-6c189301585d'
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

// After a message is sent, the visitor gets a branded confirmation email from a
// Google Apps Script running on your Google account (see apps-script/README.md).
// Paste the web app URL here once it's deployed. Leave it empty to skip the email.
export const CONFIRMATION_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxkVMgbTXygRXurn3_16EJ2t5pKRDSBRPp1jy7IfJhRbmefTnpw5ei82R0RNbd-zYJv/exec'
// Must match CONFIG.token in apps-script/Code.gs
export const CONFIRMATION_TOKEN = 'lm-confirm-7f3a9c'
