# R. B. Patil Vidyalaya Website

Official website for **R. B. Patil Vidyalaya**, Sadoli Khalsa, Taluka Karvir, District Kolhapur, Maharashtra.

A fast, responsive school website that gives students, parents and visitors easy access to academics, facilities, events, admissions and contact information.

**Live Website:** https://r-b-patil-mahavidyalaya.vercel.app/

---

## About the Project

This is a client project built for a rural school in Kolhapur. The goal was to give the school a clean, professional online presence that works well on low-cost phones and slow mobile networks, since most visitors are parents browsing on their phones.

## Features

- **School Information:** about the school, vision and institutional details
- **Academics:** classes, curriculum and academic information
- **Facilities:** infrastructure and student facilities
- **Events and Activities:** school programs and highlights
- **Admissions:** admission information for parents
- **Contact:** address, phone and location details
- **Responsive Design:** works on mobile, tablet and desktop
- **SEO Ready:** proper page title and meta description for search engines

> Edit this list to match exactly what is live on the site (e.g. gallery, notice board, admission enquiry form, Google Maps, WhatsApp button, Marathi/English toggle).

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React | UI components |
| Vite | Build tool and dev server |
| JavaScript (ES6+) | Application logic |
| HTML5 / CSS3 | Structure and styling |
| Vercel | Hosting and deployment |
| Git / GitHub | Version control |

## Project Structure

```
├── public/
│   └── images/          # Static images
├── src/
│   ├── assets/          # Fonts, icons, media
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level sections
│   ├── App.jsx          # Root component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/aryan-7050/R.B.Patil-Mahavidyalaya.git

# Go into the project folder
cd R.B.Patil-Mahavidyalaya

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will open at the local URL shown in your terminal (usually `http://localhost:5173`).

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Deployment

The site is deployed on **Vercel**. Every push to the `main` branch triggers an automatic deployment.

To deploy elsewhere (Netlify, Cloudflare Pages, etc.):

1. Run `npm run build`
2. Publish the generated `dist/` folder

## Updating Content

Most school content (text, images, contact details) lives in `src/` and `public/images/`.

1. Edit the relevant file or replace the image
2. Test locally with `npm run dev`
3. Commit and push to `main`
4. Vercel redeploys automatically within a minute or two

## Roadmap

Possible future improvements:

- [ ] Admission enquiry form (email or WhatsApp)
- [ ] Photo gallery
- [ ] Notice board / news section
- [ ] Marathi / English language toggle
- [ ] Custom domain
- [ ] Simple admin panel for content updates

## Developer

**Aryan Patil**
Frontend and Full-Stack Developer
