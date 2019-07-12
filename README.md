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
  - Search 'CSP Trusted Sites' 
