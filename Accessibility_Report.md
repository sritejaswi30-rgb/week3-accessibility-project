# Accessibility Review — Accessible Insights

## Project overview

Accessible Insights is a small, responsive blog and information portal for articles about technology, education, the environment, and accessibility. This review covers the submitted HTML, CSS, and JavaScript and records practical accessibility improvements made for the final submission.

## Objective

Provide a complete static website that is understandable to beginners and easier to use with keyboard navigation, assistive technology, mobile layouts, and reduced-motion preferences.

## Technologies

- HTML5, CSS3, and vanilla JavaScript
- No framework, library, backend, database, build process, external API, or external font dependency

## Audit methodology and results

The source was reviewed against the requested WCAG 2.2 Level A/AA topics. The JavaScript was checked with Node.js syntax validation. The local environment was checked for Lighthouse, axe-core, pa11y, Playwright, and Puppeteer; those tools and packages were not available. Interactive browser or screen-reader testing was not performed in this environment.

Automated Lighthouse/WAVE testing could not be executed in the available development environment. Therefore, no automated score is claimed. The project received a source review against manual accessibility checks and WCAG-based criteria; this wording does not mean the interactions were exercised by a human in a browser.

The listed contrast pairs were calculated from the final CSS color values. For example, body text on white is approximately 14.81:1, white on the teal button is approximately 6.56:1, and the control border on the cream page is approximately 4.50:1. These calculations cover the listed color pairs only; they do not replace a full contrast and component audit.

### Manual keyboard testing status

Source review confirms native anchors and buttons are used and the JavaScript supplies the listed keyboard-compatible interactions. Actual browser operation with Tab, Shift+Tab, Enter, Space, and Escape remains on the pre-submission checklist because a browser automation or interactive test session was unavailable.

## Issues identified and fixes implemented

| Review finding | Change |
| --- | --- |
| Card elements set `display:flex`, which could override the browser’s hidden styling when filtered out | Added an explicit `[hidden]` rule so filtered cards and collapsed article text are removed from display and interaction |
| Article headings linked to collapsed content without expanding it | Replaced those nonfunctional links with plain headings; the named disclosure buttons control the inline article text |
| Light gray form and filter borders were too faint for reliable component boundaries | Darkened control borders and checked the control-border/page pair at approximately 4.50:1 |
| The mobile menu could only be closed by activating a navigation link or toggling it again, and closing on a link could leave focus in hidden content | Added Escape-to-close behavior and return focus to the menu button on Escape or link activation |
| Skip-link target was not explicitly programmatically focusable | Added `tabindex="-1"` to the main landmark so skip navigation can move focus there |
| Report/README described a remote Google font after the dependency had been removed | Updated documentation to accurately describe the self-contained project |

## Improvements by area

### Semantic HTML and relationships

The page has one descriptive `h1`, followed by section `h2` headings and article/filter `h3` headings. It uses header, navigation, main, sections, article elements, aside, footer, search form, labels, buttons, and `time`. The skip link targets the main landmark. Heading text is not used as a fake link.

### ARIA

ARIA is reserved for dynamic or named controls: navigation labels, the mobile menu’s controlled relationship and expanded state, pressed states on category buttons, the result status, and expanded state/controlled content for article disclosures. Native HTML supplies the remaining roles and names. There are no modal/dialog attributes.

### Keyboard navigation and focus

Native links and buttons support standard keyboard operation. The menu toggle exposes its state; Escape closes it and returns focus. Activating a mobile navigation link closes the menu and returns focus to the visible toggle. Search clear returns focus to the labeled search field. The skip link targets a programmatically focusable main landmark. `:focus-visible` uses a dark outline and a white outer ring to remain visible across light and dark sections. No sticky header obscures focused elements.

### Forms and status messages

Search has a persistent visible label and native search input. Results update as the query changes and on submit. A polite status message announces the count; a visible empty state explains when nothing matches. Clear resets the query and selected category.

### Screen-reader considerations

Landmarks and heading structure support navigation by region and heading. The result status announces dynamic counts. Article disclosure buttons expose expanded/collapsed state. Decorative symbols are hidden from assistive technology. There are no images, so there are no missing image alternatives.

### Color and text readability

Text and control colors were selected for contrast; representative ratios are recorded above. Controls have visible borders, and selection is conveyed using both a pressed state and visual styling. Text uses a system sans-serif stack and scalable sizes. The ratio calculations are not a claim that every visual state has been formally audited.

### Responsive accessibility and reduced motion

The article grid adapts across desktop, tablet, and mobile widths. At mobile widths, navigation becomes a button-controlled disclosure and search buttons wrap. The `prefers-reduced-motion` rule disables smooth scrolling and reduces transitions. Visual inspection across real devices and zoom levels remains recommended.

## WCAG 2.2 criteria considered

| Criterion | Implementation / review note |
| --- | --- |
| 1.1.1 Non-text Content | No informative images; decorative marks are hidden from assistive technology |
| 1.3.1 Info and Relationships | Semantic landmarks, headings, labels, articles, and native controls |
| 1.3.2 Meaningful Sequence | DOM order follows the visual and reading order |
| 1.4.3 Contrast (Minimum) | Representative text pairs calculated; a complete state-by-state analyzer review remains outstanding |
| 1.4.11 Non-text Contrast | Control borders were strengthened; verify all component states in a visual audit |
| 2.1.1 Keyboard / 2.1.2 No Keyboard Trap | Native interactive elements; menu has Escape close; no traps are intentionally created |
| 2.4.1 Bypass Blocks | Visible-on-focus skip link targets main content |
| 2.4.3 Focus Order | DOM order is the interaction order; verify in a live browser |
| 2.4.4 Link Purpose | Navigation, brand, CTA, and footer links have meaningful text; article headings are not misleading links |
| 2.4.6 Headings and Labels | Descriptive headings and visible search label |
| 2.4.7 Focus Visible | High visibility keyboard focus indicator |
| 2.4.11 Focus Not Obscured | No fixed overlay or sticky header covers focused controls |
| 3.3.1 Error Identification | Search is filtering, not a data submission form; empty results are explained visibly |
| 3.3.2 Labels or Instructions | Search label is explicit; buttons have descriptive text |
| 4.1.2 Name, Role, Value | Native controls and state attributes communicate names and expanded/pressed state |
| 4.1.3 Status Messages | Result count is exposed through a polite live status |

This review does not certify WCAG conformance. Automated checks, assistive-technology testing, and browser/device evaluation are still needed.

## Before and after

| Common first-draft risk | Final implementation |
| --- | --- |
| No efficient route past repeated navigation | Keyboard-visible skip link |
| Search field without a programmatic name | Persistent visible label |
| Filter state shown only by color | Native buttons with `aria-pressed` |
| Collapsed text exposed or filter-hidden cards still rendered | Correct disclosure state and explicit hidden display behavior |
| Barely visible form/filter boundaries | Darker control borders and measured representative contrast |
| Mobile menu with no keyboard dismissal | Escape closes and returns focus to toggle |

## Testing checklist

- [ ] Open `index.html` directly and check the browser console.
- [ ] With keyboard only, use Tab and Shift+Tab through all visible controls; confirm focus is visible.
- [ ] Activate search, Clear, filters, and article disclosures with Enter and Space.
- [ ] Type a matching and a nonmatching query; confirm count announcement and empty state.
- [ ] At mobile width, open the menu, move to a link, and test Escape and link activation.
- [ ] Check that focus returns to the menu toggle after Escape and after activating a navigation link.
- [ ] Test browser zoom, narrow viewport, and operating-system reduced-motion preference.
- [ ] Run Lighthouse Accessibility in Chrome and record actual browser/version, date, score, and findings.
- [ ] Run WAVE and a screen reader/browser pairing; record actual issues and follow-up fixes.

## Limitations

- No Lighthouse, WAVE, axe, browser automation, or screen-reader run was available; no automated score is claimed.
- Keyboard interactions were reviewed in source but not exercised in a live browser during this review.
- Manual verification recommended before final submission, especially keyboard operation, responsive rendering, and a screen-reader pass.
- Contrast calculations cover representative pairs and do not certify all states.
- Article copy is editorial sample content; search is local to the six included cards.
- Contact is routed through the project repository or internship submission portal; no personal email address is required.

## Conclusion

The reviewed project now has working disclosure semantics, explicit hidden-state styling, stronger control boundaries, and an Escape path for mobile navigation. It is suitable for a final student review, but automated auditing and live assistive-technology testing remain necessary before making any conformance claim.
