# Ahmad — Developer Portfolio

A responsive, dark-navy portfolio for a PHP Laravel developer and ERP specialist. Plain HTML5, CSS3 and JavaScript with Bootstrap 5.3.3 (from a pinned CDN). No build step, no backend: it runs on GitHub Pages as-is.

## Folder structure

```
index.html            page structure and static content
.nojekyll             tells GitHub Pages to serve files as-is
css/styles.css        design tokens and all custom styles
js/config.js          contact-form (Formspree) settings
js/projects.js        project data; add new projects here
js/main.js            project cards, reveal, scroll-spy, mobile menu, form logic
assets/favicon.svg
assets/og-image.jpg   1200×630 social-sharing image
assets/images/        optimized portrait (480/720 px, WebP + JPG)
```

## 1. Contact form (Formspree) — setup required

The form is **not connected until you add a Formspree form ID**. Until then it validates the fields, then clearly tells the visitor that the message was **not sent**, and a setup note is shown under the form.

1. Create a free account at <https://formspree.io> and create a new form (use `ahmadasadeccountant@gmail.com` as the receiving address).
2. Copy the form ID from the endpoint `https://formspree.io/f/<FORM_ID>`.
3. In `js/config.js`, replace `YOUR_FORM_ID` with that ID.
4. Deploy, send yourself a test message, and confirm it arrives. (Formspree asks you to confirm your email the first time.)

Behavior once configured: required-field and email-format validation, a "Sending…" state with the button disabled (no duplicate submissions), a success message only after Formspree confirms, a clear error on failure with everything the visitor typed preserved, and accessible live status messages. A hidden honeypot field filters basic bots. No secrets are stored in the site; a Formspree form ID is public by design.

## 2. Add or edit projects (js/projects.js)

Copy an object in the `PROJECTS` array and change `title`, `kind`, `description`, `highlights`, `tags`, `github`, `demo` and the optional button labels and `notice`. Cards render automatically and are numbered in order. Laravel and ERP projects can be added the same way.

The two current cards use **illustrated previews** (labelled "Illustrated preview" on the card), not real screenshots. To use real screenshots, save them in `assets/images/` (about 1280×800) and set `image: "assets/images/your-file.png"`; the label disappears automatically.

## 3. Personal details

Name, title, email, GitHub and Upwork links are written directly in `index.html`. Search for `ahmadasadeccountant@gmail.com` or `upwork.com/freelancers` to change them everywhere.

## 4. SEO and social-sharing URLs

`index.html` (canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD image) assumes the site will live at **`https://ahmadeccountant.github.io/`**. If you deploy to a different address (for example `https://ahmadeccountant.github.io/portfolio/`), update those URLs.

## 5. Preview locally

```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

An internet connection is needed for Bootstrap and Google Fonts (system-font fallbacks are defined).

## 6. Deploy to GitHub Pages

Your Nexora project already lives at `ahmadeccountant.github.io/Nexora/`, so the portfolio can be the **user site**:

1. Create a repository named exactly `ahmadeccountant.github.io`.
2. Upload the contents of this folder so `index.html` is at the repository root (include the hidden `.nojekyll` file).
3. Open **Settings → Pages**, set **Source** to **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute or two the site is live at `https://ahmadeccountant.github.io/`.

Using any other repository name works too (all paths are relative); then follow section 4.

## 7. Test checklist after deploying

- Open the live URL on a phone and a desktop; scroll the whole page and check nothing is clipped or scrolls sideways.
- Click every nav link and the mobile menu; click **Hire Me**, **GitHub**, **Upwork** and **Email** links.
- Click **View Live Project / Try Live Demo / View Source Code** on both cards. (The Streamlit demo may need a moment to wake up if the app was idle.)
- Submit the contact form with empty fields, with a bad email, and with valid data; confirm the message reaches your inbox.
- Paste the URL into a social-share preview tool to check the preview image.

## Content notes

- Project descriptions come from the public READMEs and live demos of the two projects.
- The Stroke Risk Prediction card carries the disclaimer: "For educational demonstration only. Not intended for medical diagnosis."
- The site contains no testimonials, client claims, metrics, years of experience, certifications or skill percentages.
- Your photo is used as supplied, only cropped to a 4:5 portrait and resized. No filters or retouching.
