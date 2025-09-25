# The Nexus Gazette - HTML + CSS + JS Template

## Overview
This project is a **lightweight, responsive HTML + CSS + JavaScript template** designed for curated tech content, Linux & BSD insights, and open-source updates. It features a **two-column desktop layout** with a sidebar for navigation and pagination, while **adapting gracefully for mobile** screens with optimized font sizes, spacing, and layout.

The template is ideal for blogs, newsletters, or content-focused websites that need a clean and readable presentation.

## Features

- **Desktop Layout:** Two-column design with a sidebar for navigation and quick access to pages.
- **Responsive Design:** Automatically adjusts to mobile and tablet screens.
- **Typography:** Uses Playfair Display and Spectral fonts for readability.
- **Navigation:** Sidebar links and pagination for smooth browsing.
- **Dark Mode:** Optional dark/light mode toggle.
- **Interactive Elements:** Back-to-top button, collapsible sidebar, and dark mode icon changes.
- **Lightweight JS:** Minimal JavaScript for navigation, pagination, and UI toggles.
- **Blockquotes & Highlights:** Styled for emphasis while keeping content readable.

## Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/padiks/the-nexus-gazette-template.git
   ```

2. **Open the HTML file in a browser:**
   - Main file: `index.html`.
   - Additional pages: `page2.html`, `page3.html` (loaded via fetch).
   - CSS and JS files are included locally or via CDN.

3. **Customization:**
   - Modify content inside `contents/pageX.xml`.
   - Update `assets/style.css` for colors, fonts, and layout tweaks.
   - Update `assets/page.js` for custom behaviors or new interactive elements.

## File Structure

```
├── index.html          # Main HTML page
├── page2.html          # Second page
├── page3.html          # Third page
├── contents/           # XML files containing article content
│   ├── page1.xml
│   ├── page2.xml
│   └── page3.xml
├── assets/
│   ├── style.css       # Main stylesheet
│   ├── page.js         # Main JavaScript for navigation and interactivity
│   ├── navbar.html     # Sidebar navigation template
│   ├── pagination.html # Pagination template
│   └── sidebar-nav.html# Additional sidebar links
└── LICENSE             # FreeBSD 2-Clause License
```

## License
This template is released under the [FreeBSD 2-Clause License](LICENSE). You are free to modify it for personal or educational use, but please do not claim full ownership of the original design.

## Credits

- Created by **padiks** with guidance from **ChatGPT**.
- Fonts: **Playfair Display**, **Spectral**.
- JS libraries: **Bootstrap 5** (MIT), **Alpine.js** (MIT).
- Icons: **Bootstrap Icons** (MIT).

## Notes

- Fully compatible with modern browsers.
- Designed for clean, readable, and content-focused layout.
- Supports XML-based content loading via fetch.

## Contributing
This template is provided as a finished resource. No additional contributions are expected at this time.

---

*Enjoy your clean, responsive reading template for tech and open-source content!*
