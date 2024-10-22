# Redirector
A dynamic redirect system for static websites. Using Vercel KV Database and SvelteKit

## How to use
1. Fork the repo
2. Go to https://vercel.com/
3. Click New > Project
4. Select the repo
5. Customize the installation how you want (I personally use `bun install` as the install command)
6. Click Create project
7. Wait for Vercel to deploy
8. Go to the Storage tab
9. Click on Create next to KV
10. Choose your DB name and region
11. In the Project Settings link your domains and subdomains
12. Set up your redirects

## How to setup your redirects
Go to your KV dashboard.
In the CLI window use the following commands:
SET [DOMAIN + PATH] [REDIRECT LINK] To create a new redirect (The domain dosent i include www., the port, the queries or the protocol. Example: example.com example.com/ example.com/lol)
GET [DOMAIN + PATH]:analytics To get the number of redirect hits

The app will automatically update in real time to your changes.
If you set a redirect for a domain without the final slash it will use it as a default for every redirect in the whole domain (not subdomains) that has not been created

## Troubleshoot
If the KV dosent connect to the app when you create it go to the deployments tab and in the 3 dots next to the deployment name click "Redeploy"

## To-Do
- Redirect Paths
- Delays
