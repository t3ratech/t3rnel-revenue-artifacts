# Nebula Admin — Dashboard Template

A modern, responsive admin dashboard template built with Tailwind CSS. No build step required — open `index.html` in a browser and it works.

## Features

- **11 Pages** — Dashboard, Analytics, Tables, Forms, Users, Settings, Login, Signup, Forgot Password, Privacy, Terms
- **Dark / Light Mode** — Toggle with system preference detection and localStorage persistence
- **Responsive** — Mobile-first, collapsible sidebar, adaptive grid layouts
- **Charts** — Chart.js line, doughnut, bar, and sparkline charts
- **Data Tables** — Sortable, searchable, paginated tables with status badges
- **Forms** — Input variants, validation states, toggles, selects
- **Icons** — Lucide icon set (700+ icons)
- **Zero Build** — Tailwind CSS + Chart.js + Lucide via CDN. No Node.js, no npm, no bundler.

## Quick Start

```bash
# Open in browser
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

Or serve with any static server:

```bash
python3 -m http.server 8080
# Visit http://localhost:8080
```

## File Structure

```
admin-dashboard-template/
├── index.html              # Main dashboard
├── css/
│   └── style.css           # Custom styles (Tailwind @apply)
├── js/
│   ├── main.js             # Theme toggle, sidebar, dropdowns
│   └── charts.js           # Chart.js configurations
├── pages/
│   ├── analytics.html      # Analytics page with bar charts
│   ├── tables.html         # Data tables with pagination
│   ├── forms.html          # Form inputs and validation
│   ├── users.html          # User management cards
│   ├── settings.html       # Settings with toggles
│   └── login.html          # Split-panel login page
└── README.md
```

## Customization

### Colors

Edit the Tailwind config in each HTML file's `<script>` block:

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: { 500: '#6366f1', 600: '#4f46e5', /* ... */ },
        dark: { 900: '#0f172a', 950: '#020617', /* ... */ }
      }
    }
  }
}
```

### Adding Pages

Copy any existing page, update the sidebar active state, and add your content. All pages share the same layout shell.

## Browser Support

Chrome 90+, Firefox 88+, Safari 15+, Edge 90+

## License

MIT License — use in personal and commercial projects.

## Credits

- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS framework
- [Chart.js](https://www.chartjs.org) — Flexible charting library
- [Lucide](https://lucide.dev) — Beautiful & consistent icons
- [Inter](https://rsms.me/inter/) — Typeface by Rasmus Andersson
