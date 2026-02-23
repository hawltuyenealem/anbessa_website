# Anbessa Elite Tactical Textile Industries PLC – Website

Dynamic single-page website for **Anbessa Elite Tactical Textile Industries PLC**, manufacturer of elite military and tactical gear based in Bahir Dar Industrial Park, Ethiopia.

## Contents

- **Hero** – Headline “Manufacturer of Elite Military Gear”, tagline, and CTAs
- **About** – Company story, January 2023 agreement, USD 3M investment, 1,000+ jobs, Bahir Dar Industrial Park, and leadership (Aklilu Tadese, Leo Isaias, Lior Esayas)
- **Why Us** – Premium manufacturing, tailored to operational requirements, proudly made in Ethiopia; proprietary technology, enhanced combat survivability, custom tailored solutions
- **Products** – Tactical vests & plate carriers, Bags & packs, Apparel & uniforms
- **Contact** – Address (Bahirdar, Ethiopia), Manager (Lior Esayas), phone +251 952 456 459, email Lionteamtactical@gmail.com, and a contact form that opens the default mail client

## Design

- Brand colors: black, orange (`#e85d04`), white/gray
- Typography: Bebas Neue (headings), Inter (body)
- Responsive layout with mobile menu
- Scroll-triggered reveal animations and fixed header with scroll state

## How to view locally

1. Open `index.html` in a browser, or  
2. Run a local server, e.g. `npx serve .` or `python -m http.server 8000`, then visit the URL shown.

## Deploy to Vercel

1. **Push the project to Git**  
   If you haven’t already, create a repo on [GitHub](https://github.com), [GitLab](https://gitlab.com), or [Bitbucket](https://bitbucket.org), then push your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Sign in to Vercel**  
   Go to [vercel.com](https://vercel.com) and sign in with the same Git provider (GitHub, GitLab, or Bitbucket).

3. **Import the project**  
   - Click **Add New…** → **Project**.  
   - Select your repository (e.g. `YOUR_USERNAME/Anbessa`).  
   - Vercel will detect a static site (no build step).  
   - Leave **Build Command** and **Output Directory** empty (or use the defaults).  
   - Click **Deploy**.

4. **Done**  
   Vercel will build and give you a URL like `https://your-project.vercel.app`. You can add a custom domain in the project **Settings → Domains**.

## Assets

Place images (hero, product photos, etc.) in the `assets/` folder. See `assets/README.md` for suggested filenames and how to hook them into the hero and product sections.

## Sources

Company and agreement details from Fana Media / Ethiopian News Agency, 2Merkato, and Industrial Parks Development Corporation (IPDC) information on Bahir Dar Industrial Park.
