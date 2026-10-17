# Confirmation email (Google Apps Script)

When someone sends the contact form, Web3Forms emails the enquiry to info@lmtechsolutions.co. At the same time the site sends the visitor's details to the script in this folder, which emails them a branded confirmation in English or French, from your Google account. It's free and uses your normal Gmail sending limits.

`Code.gs` is the whole script. It doesn't run from GitHub; it lives in your Google account, so you copy it there once.

## Set it up (about 10 minutes)

1. Go to https://script.google.com signed in with your lmtechsolutions.co Google account and click **New project**. Name it "L&M Confirmation Email".
2. Delete what's in the editor, paste in everything from `Code.gs`, and click **Save**.
3. In the function menu at the top, pick **sendTestToMe** and click **Run**. Google asks for permission: click **Review permissions**, choose your account, then **Allow** (if you see "Google hasn't verified this app", click **Advanced** then **Go to L&M Confirmation Email**; it's your own script). Two test emails, English and French, arrive in your inbox.
4. Click **Deploy** > **New deployment**. Click the gear next to "Select type" and choose **Web app**. Set **Execute as: Me** and **Who has access: Anyone**, then click **Deploy**.
5. Copy the **Web app URL** (it ends in `/exec`) and paste it into `CONFIRMATION_SCRIPT_URL` in `src/config.js`.

## Send it from info@ instead of your own address

Replies always go to info@. To make the email also come *from* info@, add it in Gmail: **Settings** > **Accounts** > **Send mail as** > **Add another email address**, enter info@lmtechsolutions.co and confirm the verification email (it arrives through the group). The script picks it up automatically.

## Changing the email later

Edit the text in `TEXT` (English and French) or the layout in `buildHtml`, paste the new version into the Apps Script editor, then **Deploy** > **Manage deployments** > pencil icon > **Version: New version** > **Deploy**. The URL stays the same, so the site doesn't need to change.

## Safety limits

The web app URL is public, so the script only sends when the request carries the token that matches `CONFIRMATION_TOKEN` in `src/config.js`, sends at most one email to the same address every 10 minutes, and at most 100 a day. You can change these at the top of `Code.gs`.
