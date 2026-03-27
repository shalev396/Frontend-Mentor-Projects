# Frontend Mentor Projects Portfolio

A static portfolio that lists [Frontend Mentor](https://www.frontendmentor.io/) challenges completed in this repository. The landing page is plain HTML, CSS, and JavaScript; individual challenges live in their own folders (some include separate Vite/React builds that are committed as static output for hosting).

## Live preview

After your first production deploy, add your CloudFront or custom domain URL here (same pattern as your other static sites on AWS).

Example: `https://your-subdomain.shalev396.com`

---

## What’s on the site

- **Landing page** — Profile sidebar (GitHub, LinkedIn), grid of project cards with preview images, difficulty level (Frontend Mentor scale), tech tags, short descriptions, and links to each challenge and its GitHub tree path.
- **Challenges** — Each card opens the built/static `index.html` for that project in-repo.

There is no client-side filtering or search on the portfolio page; the list is defined in `script.js`.

---

## Tech stack (landing page)

| Area        | Choice                                      |
| ----------- | ------------------------------------------- |
| Markup / UI | HTML, CSS, vanilla JavaScript               |
| Icons       | Font Awesome (CDN)                          |
| Hosting     | Static files (e.g. S3 + CloudFront)         |

---

## Projects in this repo

| Name | Level (FM) | Stack (tags) |
| ---- | ---------- | ------------ |
| Stats Preview Card Component | Newbie (1) | HTML, CSS |
| Recipe Page | Newbie (1) | HTML, CSS |
| Interactive Rating Component | Newbie (1) | HTML, CSS, JS |
| FAQ Accordion | Newbie (1) | HTML, CSS, JS |
| Order Summary Component | Newbie (1) | HTML, CSS |
| Product Preview Card Component | Newbie (1) | HTML, CSS |
| Testimonials Grid Section | Junior (2) | HTML, CSS |
| REST Countries API with color theme switcher | Advanced (4) | HTML, CSS, JS, API |

---

## Repository layout (high level)

- `index.html`, `styles.css`, `script.js` — Portfolio shell and project list data.
- `*-main/` / `*-master/` — One folder per Frontend Mentor challenge (static assets and entry HTML).

---

## Local preview

```bash
git clone https://github.com/shalev396/Frontend-Mentor-projects.git
cd Frontend-Mentor-projects
```

Open `index.html` in a browser, or serve the repo root with any static file server so asset paths resolve correctly.

**Order Summary** and **Product Preview Card** ship committed static build output at each project’s root (`index.html` + `assets/`). If you edit the React code under `Client/`, run `npm ci` and `npm run build` there and commit the updated output so production stays in sync.

---

## License

[MIT](LICENSE)
