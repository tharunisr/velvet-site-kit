# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Salon template — customization guide

All salon-specific content lives in two places:

- `src/config/salonConfig.js` — name, logo initials, email, phone, WhatsApp number,
  address, opening hours, Google Maps embed/directions URLs, social links, stats.
- `src/data/` — `services.js`, `packages.js`, `testimonials.js`, `gallery.js`.

Images live in `src/assets/` and are imported by the data files.

### Enquiry emails (Formspree)

1. Create a form at formspree.io and set the salon owner's email as the recipient.
2. Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ENDPOINT` to the form URL.
3. The contact form reads it via `import.meta.env.VITE_FORMSPREE_ENDPOINT`.

### Design tokens

Colours, gradients, shadows, fonts and animations are defined once in `src/styles.css`.
