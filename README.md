# Abdullah Hayat — Portfolio Website

A responsive, component-structured portfolio site. Same design and content as
the single-file version — reorganized into separate HTML partials, purpose-split
CSS files, and modular ES-module JavaScript, so it reads like a real project on GitHub.

## Folder structure
```
abdullah-portfolio/
├── index.html                 # shell — loads every partial + all stylesheets/scripts
├── partials/                  # one HTML file per section
│   ├── navbar.html
│   ├── hero.html
│   ├── about.html
│   ├── skills.html
│   ├── projects.html
│   ├── services.html
│   ├── testimonials.html
│   ├── contact.html
│   └── footer.html
├── css/
│   ├── variables.css          # design tokens (colors, radii, shadows, fonts)
│   ├── base.css                # reset + global typography
│   ├── buttons.css             # .btn component + variants
│   ├── utilities.css           # section headers, reveal animation, pills, tags
│   ├── navbar.css
│   ├── hero.css
│   ├── about.css
│   ├── skills.css
│   ├── projects.css
│   ├── services.css
│   ├── testimonials.css
│   ├── contact.css
│   ├── footer.css
│   ├── back-to-top.css
│   └── responsive.css          # media queries, loaded last so it wins the cascade
├── js/
│   ├── includeHTML.js          # fetches and injects each partial
│   ├── navbar.js                # scroll state, mobile menu, active-link tracking
│   ├── typing.js                # hero typing animation
│   ├── scrollReveal.js          # fade/slide-in on scroll
│   ├── skillBars.js             # animated skill progress bars
│   ├── contactForm.js           # contact form submit handling
│   ├── backToTop.js             # back-to-top button + CV download placeholder
│   ├── footerYear.js            # dynamic copyright year
│   └── main.js                  # entry point — imports and runs every module
├── assets/                     # put your CV, photo, favicon, etc. here
└── README.md
```

## Running it locally
Because sections are loaded at runtime with `fetch()`, this site needs to be
served over `http://`, not opened directly as a `file://` path (browsers block
`fetch` for local files). Two easy options:

**Option 1 — Python (built in on most systems):**
```bash
cd abdullah-portfolio
python -m http.server 5500
```
Then open `http://127.0.0.1:5500`.

**Option 2 — VS Code:**
Install the "Live Server" extension, right-click `index.html`, and choose
"Open with Live Server".

**Deploying to GitHub Pages** works out of the box — no server setup needed,
since GitHub Pages serves everything over `https://`.

## Things to personalize before publishing
1. **Photo** — the hero/about sections use an "AH" monogram circle
   (`.hero-avatar` / `.about-avatar` in `partials/hero.html` and
   `partials/about.html`). Swap in an `<img>` tag pointing to a photo in
   `/assets` if you'd like a real picture instead.
2. **CV** — add your CV PDF to `/assets`, update the `#downloadCv` link's
   `href` in `partials/hero.html`, then remove the placeholder alert inside
   `initDownloadCv()` in `js/backToTop.js`.
3. **Links** — swap the GitHub / LinkedIn / Fiverr URLs (search for
   `yourusername` / `yourprofile` across the `partials/` files) and the
   email/WhatsApp number in `partials/contact.html`.
4. **Contact form** — `js/contactForm.js` currently only shows a confirmation
   message client-side. To actually receive messages, connect it to a service
   like Formspree or EmailJS, or POST to your own backend inside that file.
5. **Projects** — update titles, descriptions, tags, and links in
   `partials/projects.html` as you build more.

## Why this structure
- **One file per section** makes each part of the page easy to find, edit, and
  review independently — useful both for you and for anyone looking at the
  repo on GitHub.
- **CSS split by purpose** (tokens, base, buttons, utilities, then one file per
  section, responsive last) keeps each file focused and easy to scan, and
  mirrors how larger production codebases organize styles.
- **JS split into small ES modules**, each with a single `init...()` function,
  keeps logic decoupled — `main.js` is the only file that wires everything
  together.

## Tech used
- HTML5 / CSS3 (custom properties, Grid/Flexbox)
- Vanilla JavaScript (ES modules, `fetch`, `IntersectionObserver`)
- Font Awesome (icons, via CDN) + Google Fonts (Poppins/Inter, via CDN)

No frameworks, no build step, no dependencies to install.
