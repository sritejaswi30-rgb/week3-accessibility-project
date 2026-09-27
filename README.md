# Accessible Insights — Blog & Information Portal

Accessible Insights is a standalone, responsive blog portal made for the Week 3 internship task, “Enhancing User Experience with Accessibility.” It uses HTML, CSS, and vanilla JavaScript and works by opening the HTML file directly.

## Features

- Six short articles across four topics
- Live text search and category filters
- Inline expand/collapse article content
- Responsive header navigation and article grid
- About section and footer navigation
- Contact guidance through the project repository or internship submission portal

## Accessibility features

- Semantic page landmarks and a visible-on-focus skip link
- One clear page heading and ordered section/article headings
- Persistent search label and polite result-count announcement
- Native keyboard-operable buttons and links
- Category pressed state and article expanded state
- Visible focus ring, including Escape-to-close mobile navigation
- Responsive layout and reduced-motion support
- No images, remote fonts, external APIs, or third-party libraries

## Open the project

Open `index.html` in a current desktop or mobile browser. No server, build process, or installation is required.

## Test keyboard navigation

1. Press Tab. The “Skip to main content” link should appear. Press Enter to use it.
2. Use Tab and Shift+Tab to move through links, search, category buttons, article buttons, and footer links. Check the visible focus ring.
3. Search for a word such as “design”; confirm the result count changes. Use Enter on Search and Space or Enter on Clear.
4. Activate a category and an article disclosure with Space or Enter. Confirm the result count and article open/closed state update.
5. At a mobile viewport (600 CSS pixels or narrower), open Menu, then press Escape. Focus should return to the menu button. Also activate a navigation link and confirm the menu closes with focus on the button.

## Run Lighthouse manually in Chrome

1. Open `index.html` in Chrome. If Lighthouse does not analyze the local file in your version, serve the folder with a local static server and open its local URL.
2. Open Chrome DevTools (`F12` or `Ctrl+Shift+I`) and select **Lighthouse**.
3. Select **Accessibility** and the **Navigation** mode, then run the audit.
4. Record the actual Chrome version, date, score, and each relevant finding in `Accessibility_Report.md`. Do not infer results from this README.
5. Consider running WAVE and testing with a screen reader as additional checks.

No automated result is included with this submission; see the report for the actual audit status and remaining checks.

## Important limitations

- Lighthouse/WAVE and browser automation were unavailable during this review; no automated score is claimed.
- Live keyboard, responsive-device, and screen-reader testing have not been performed. Manual verification is recommended before final submission.
- Contrast ratios recorded in the report cover representative color pairs only and do not establish complete conformance.

## File structure

```text
Week3_Accessibility_Project/
├── index.html
├── style.css
├── script.js
├── Accessibility_Report.md
└── README.md
```
