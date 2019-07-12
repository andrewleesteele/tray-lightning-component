# tray-lightning-component

Lightweight container that can be used to display external data within Salesforce...powered by the Tray.io Platform.

## Steps

### Tray.io Configuration

1. Create a Tray.io workflow with a webhook trigger.
2. Save the Webhook Trigger

### Salesforce Configuration

1. Whitelist Tray.io Workflow URL for cross-origin resource sharing (CORS).
   - Go to Setup.
   - Search 'CORS' in the quick find panel.
   - Create 'New' Whitelisted Origin.
   - Enter the Tray.io Webhook URL and save.
2. Add Tray.io Workflow URL as a Content Security Policy Trusted Site.
   - Go to Setup
   - Search 'CSP Trusted Sites' in the quick find panel.
   - Create 'New' Trusted Site.
   - Set 'Trusted Site URL' is set to Tray.io Webhook URL and active is set to true.
3. Add a a custom domain name to your Salesforce URL (required to use custom Lightning Components).
   - Go to Setup.
   - Search My Domain.
   - Follow the instructions given and activate a custom domain.
4. Add Lightning Component Code to Salesforce Environment
   - Click the setup gear in top right and select 'Developer Console'.
   - Create Lightning Component
     - Select File>New>Lightning Component
       - Name TrayLC
       - Copy TrayLC.cmp into file.
       - Click Controller, Helper, and Style on the right bundle panel and copy corresponding code into each file.
     - Select File>New>Apex Class
       - Copy TrayLCController.apcx into file.
   - Save all files.
5. Add Lightning Component to Page Layout.
   - 
