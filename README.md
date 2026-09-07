# Restaurant Website 🍽️

A multi-page restaurant website built with vanilla HTML, CSS, and JavaScript — featuring a homepage with an image slider, a menu ("תפריט"), a buffet page, a self-service ordering flow, a "our story" page, and a login/entry screen.

## Structure

```
Restaurant---JS/
├── html/    # Page markup
├── css/     # Per-page stylesheets
├── js/      # Page interactivity (sliders, cart/self-service logic, login)
└── pics/    # Images and video assets
```

Key pages (under `html/`):

- `index.html` — homepage with image slider (`js/index.js`)
- `enter.html` — entry/login screen (`js/login.js`)
- `tafrit.html` — menu (`js/tafrit.js`)
- `bufe.html` — buffet page (`js/bufe.js`)
- `selfProduct.html` — self-service ordering (`js/selfProduct.js`, `js/Self-adjustment.js`)
- `sal.html` / `sal1.html` — shopping cart / order summary (`js/sal.js`, `js/yesal.js`)
- `ourStory.html` — about/story page
- `aunak.html` — additional page

## Getting Started

This is a static front-end site with no build tools or backend — all logic runs in the browser via vanilla JS (DOM manipulation, `sessionStorage`/local state for cart handling).

1. Clone the repository.
2. Open `html/index.html` directly in a browser, or serve the folder locally:

```bash
npx serve .
```

## Tech Stack

- HTML5, CSS3, vanilla JavaScript (no framework, no backend)

## Suggested Improvements

See the improvement notes shared alongside this README for ideas on structure, naming, and cleanup.
