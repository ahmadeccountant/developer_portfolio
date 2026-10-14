/**
 * Featured projects.
 *
 * To add a project, copy one object below and fill in the fields.
 *
 *  - image:   optional path to a real screenshot, e.g. "assets/images/my-app.png".
 *             When set it replaces the illustrated preview.
 *  - preview: optional inline SVG string used when there is no image.
 *  - alt:     describes the preview for screen readers.
 *  - notice:  optional short note displayed on the card (e.g. a disclaimer).
 *  - github / demo: absolute URLs. Both open in a new tab.
 */
window.PROJECTS = [
  {
    id: "nexora",
    title: "Nexora",
    kind: "Project management dashboard",
    description:
      "A responsive project management app with an overview dashboard, projects, tasks, " +
      "a drag-and-drop Kanban board, team and analytics pages, global search, theming, " +
      "CSV export and JSON backup/restore. Frontend-only demo: all data is fictional and " +
      "stored in the browser.",
    highlights: [
      "Kanban board with drag-and-drop and a keyboard-friendly “Move to” menu",
      "KPIs and charts calculated from the current data",
      "Light and dark themes, validated forms, responsive layouts"
    ],
    tags: ["HTML5", "CSS3", "JavaScript (ES modules)", "Chart.js", "LocalStorage"],
    github: "https://github.com/ahmadeccountant/Nexora",
    demo: "https://ahmadeccountant.github.io/Nexora/",
    demoLabel: "View Live Project",
    githubLabel: "View Source Code",
    image: "",
    alt: "Illustrated layout of the Nexora Kanban board with columns To Do, In Progress, In Review and Done. Not a real screenshot.",
    preview: `
<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="nx-g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#4c8dff"/><stop offset="1" stop-color="#8b6cff"/>
    </linearGradient>
  </defs>
  <rect width="480" height="300" fill="#0e1527"/>
  <rect x="0" y="0" width="480" height="28" fill="#111b33"/>
  <circle cx="16" cy="14" r="4" fill="#33406a"/><circle cx="30" cy="14" r="4" fill="#33406a"/><circle cx="44" cy="14" r="4" fill="#33406a"/>
  <rect x="0" y="28" width="86" height="272" fill="#0b1224"/>
  <rect x="14" y="44" width="58" height="10" rx="3" fill="url(#nx-g)"/>
  <rect x="14" y="70" width="48" height="6" rx="3" fill="#2a3760"/>
  <rect x="14" y="88" width="56" height="6" rx="3" fill="#2a3760"/>
  <rect x="14" y="106" width="40" height="6" rx="3" fill="#4c8dff" opacity=".7"/>
  <rect x="14" y="124" width="52" height="6" rx="3" fill="#2a3760"/>
  <rect x="14" y="142" width="44" height="6" rx="3" fill="#2a3760"/>
  <g font-family="system-ui, sans-serif" font-size="9" fill="#9aa6c4">
    <text x="100" y="52">To Do</text>
    <text x="198" y="52">In Progress</text>
    <text x="296" y="52">In Review</text>
    <text x="394" y="52">Done</text>
  </g>
  <g>
    <rect x="98" y="60" width="86" height="212" rx="6" fill="#121c36"/>
    <rect x="196" y="60" width="86" height="212" rx="6" fill="#121c36"/>
    <rect x="294" y="60" width="86" height="212" rx="6" fill="#121c36"/>
    <rect x="392" y="60" width="80" height="212" rx="6" fill="#121c36"/>
  </g>
  <g fill="#1b2848" stroke="#2a3a66">
    <rect x="104" y="68" width="74" height="42" rx="5"/>
    <rect x="104" y="118" width="74" height="34" rx="5"/>
    <rect x="104" y="160" width="74" height="42" rx="5"/>
    <rect x="202" y="68" width="74" height="50" rx="5"/>
    <rect x="202" y="126" width="74" height="34" rx="5"/>
    <rect x="300" y="68" width="74" height="42" rx="5"/>
    <rect x="398" y="68" width="68" height="34" rx="5"/>
    <rect x="398" y="110" width="68" height="42" rx="5"/>
    <rect x="398" y="160" width="68" height="34" rx="5"/>
  </g>
  <g fill="#3a4a7c">
    <rect x="110" y="76" width="50" height="5" rx="2"/><rect x="110" y="88" width="34" height="4" rx="2"/>
    <rect x="110" y="126" width="46" height="5" rx="2"/><rect x="110" y="138" width="28" height="4" rx="2"/>
    <rect x="110" y="168" width="52" height="5" rx="2"/><rect x="110" y="180" width="30" height="4" rx="2"/>
    <rect x="208" y="76" width="54" height="5" rx="2"/><rect x="208" y="88" width="38" height="4" rx="2"/>
    <rect x="208" y="134" width="44" height="5" rx="2"/>
    <rect x="306" y="76" width="48" height="5" rx="2"/><rect x="306" y="88" width="32" height="4" rx="2"/>
    <rect x="404" y="76" width="44" height="5" rx="2"/>
    <rect x="404" y="118" width="46" height="5" rx="2"/><rect x="404" y="130" width="30" height="4" rx="2"/>
    <rect x="404" y="168" width="40" height="5" rx="2"/>
  </g>
  <rect x="208" y="102" width="40" height="5" rx="2.5" fill="url(#nx-g)"/>
  <rect x="104" y="98" width="30" height="5" rx="2.5" fill="#4c8dff" opacity=".8"/>
</svg>`
  },
  {
    id: "stroke-risk",
    title: "Stroke Risk Prediction System",
    kind: "Machine-learning demonstration",
    description:
      "An educational machine-learning demonstration for stroke-risk prediction. A Streamlit web app " +
      "built with Python and scikit-learn that uses Logistic Regression, with SMOTE to " +
      "handle class imbalance in the training data.",
    highlights: [
      "Interactive web interface built with Streamlit",
      "Logistic Regression model trained with scikit-learn",
      "SMOTE resampling for imbalanced data"
    ],
    tags: ["Python", "Streamlit", "scikit-learn", "Logistic Regression", "SMOTE"],
    notice: "For educational demonstration only. Not intended for medical diagnosis.",
    github: "https://github.com/ahmadeccountant/Stroke-Prediction-System",
    demo: "https://stroke-prediction-system-u8igjznaiv8ctmik7pjrxj.streamlit.app/",
    demoLabel: "Try Live Demo",
    githubLabel: "View Source Code",
    image: "",
    alt: "Illustrated layout of an input form next to a risk-estimate gauge. Not a real screenshot and not real output.",
    preview: `
<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="sr-g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#4c8dff"/><stop offset="1" stop-color="#8b6cff"/>
    </linearGradient>
  </defs>
  <rect width="480" height="300" fill="#0e1527"/>
  <rect x="0" y="0" width="480" height="28" fill="#111b33"/>
  <circle cx="16" cy="14" r="4" fill="#33406a"/><circle cx="30" cy="14" r="4" fill="#33406a"/><circle cx="44" cy="14" r="4" fill="#33406a"/>
  <rect x="0" y="28" width="150" height="272" fill="#0b1224"/>
  <g fill="#2a3760">
    <rect x="16" y="52" width="60" height="6" rx="3"/>
    <rect x="16" y="64" width="118" height="16" rx="4" fill="#16213f" stroke="#2a3a66"/>
    <rect x="16" y="96" width="70" height="6" rx="3"/>
    <rect x="16" y="108" width="118" height="16" rx="4" fill="#16213f" stroke="#2a3a66"/>
    <rect x="16" y="140" width="54" height="6" rx="3"/>
    <rect x="16" y="156" width="118" height="4" rx="2"/>
    <rect x="16" y="156" width="64" height="4" rx="2" fill="#4c8dff"/>
    <circle cx="80" cy="158" r="6" fill="#8b6cff"/>
    <rect x="16" y="184" width="66" height="6" rx="3"/>
    <rect x="16" y="196" width="118" height="16" rx="4" fill="#16213f" stroke="#2a3a66"/>
  </g>
  <rect x="16" y="236" width="118" height="24" rx="6" fill="url(#sr-g)"/>
  <rect x="42" y="245" width="66" height="6" rx="3" fill="#0b1224" opacity=".6"/>
  <g transform="translate(315 150)">
    <path d="M -110 0 A 110 110 0 0 1 110 0" fill="none" stroke="#1b2848" stroke-width="22" stroke-linecap="round"/>
    <path d="M -110 0 A 110 110 0 0 1 110 0" fill="none" stroke="#2a3a66" stroke-width="2" stroke-dasharray="4 8" transform="scale(.78)"/>
  </g>
  <g font-family="system-ui, sans-serif" fill="#9aa6c4" font-size="11" text-anchor="middle">
    <text x="315" y="196">Risk estimate output</text>
  </g>
  <rect x="200" y="220" width="230" height="40" rx="8" fill="#121c36" stroke="#2a3a66"/>
  <g fill="#3a4a7c"><rect x="214" y="232" width="150" height="5" rx="2"/><rect x="214" y="244" width="100" height="5" rx="2"/></g>
</svg>`
  }
];
