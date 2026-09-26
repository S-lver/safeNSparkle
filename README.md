# SafeNsparkle 🧽✨

The official website for **SafeNsparkle**, a professional cleaning service based in Polokwane, South Africa. Built as a lightweight, fully responsive static site with an editorial, magazine-inspired aesthetic.

[![Live Site](https://img.shields.io/badge/status-live-brightgreen)](https://github.com/S-lver/safeNSparkle)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📖 About

SafeNsparkle provides reliable, thorough, and affordable cleaning solutions for homes and businesses. This website serves as the brand's digital storefront, designed to build trust and convert visitors into customers via a direct WhatsApp call-to-action.

The design intentionally breaks away from generic corporate templates. It uses:
- An **asymmetric editorial layout** inspired by print magazines
- An **organic grain texture** to feel tactile rather than digital
- **Abstract morphing shapes** instead of stock photography
- **Conversational microcopy** that speaks directly to the customer's pain points

---

## ✨ Features

- **Cinematic Entrance:** A navy curtain-reveal preloader with a growing yellow accent line.
- **Sticky Navigation:** A frosted-glass header that stays fixed as the user scrolls, ensuring the phone number and CTA are always one tap away.
- **Staggered Hero Animation:** Elements slide up gracefully in sequence as the curtain lifts.
- **Editorial Services List:** An asymmetric, staggered list that guides the eye down the page instead of using a flat grid.
- **Circular Gallery:** An overlapping, asymmetric photo collage with hover effects that reveal a yellow border glow.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop viewports.
- **Zero Dependencies:** No build step, no framework, no `node_modules`. Just open and go.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic page structure |
| **Tailwind CSS (CDN)** | Utility-first styling and responsive layout |
| **Custom CSS** | Brand variables, animations, and grain texture |
| **Vanilla JavaScript** | Preloader logic and entrance orchestration |
| **Google Fonts** | `DM Serif Display` (headings) & `Inter` (body) |

---

## 📁 Project Structure
s
afeNSparkle/
│
├── index.html # Main HTML document
│
├── static/
│ ├── css/
│ │ └── style.css # Brand variables, animations, and custom styles
│ │
│ ├── js/
│ │ └── script.js # Preloader and entrance animations
│ │
│ └── images/
│ ├── logo.png # Brand logo (used in nav and favicon)
│ ├── post-construction.jpg
│ ├── office-cleaning.jpg
│ ├── deep-clean.jpg
│ └── window-cleaning.jpg
│
└── README.md

---

## 🚀 Getting Started (Local Development)

Because this is a static site, you can run it locally without any build tools.

### Option 1: VS Code Live Server (Recommended)
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code.
2. Right-click `index.html` in the file explorer.
3. Select **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500`.

### Option 2: Python Simple Server
If you have Python installed, run this in your terminal from the project root:

```bash
# For Python 3
python -m http.server 8000

Adding a New Service
Copy one of the existing service <div> blocks inside the #services section of index.html, then update:

The number (01., 02., etc.)

The service title

The sub-heading

The description paragraph

The staggered grid will automatically adjust.

Swapping Gallery Images
Drop your new image into static/images/.

Update the corresponding <img src="..."> path in index.html.

If the crop looks off, add object-top or object-bottom to the image's class list to control the focal point.

🌐 Deployment
This site can be deployed for free in under a minute using GitHub Pages:

Push your code to GitHub (see below).

Go to your repository on GitHub.

Navigate to Settings → Pages.

Under Source, select the main branch and / (root) folder.

Click Save.

Your site will be live at https://s-lver.github.io/safeNSparkle/ within a minute.

For a custom domain (e.g., safensparkle.co.za), add a CNAME file to the root with your domain name and configure your DNS provider.

📞 Contact
SafeNsparkle

📍 Polokwane, South Africa

📞 084 813 5581

💬 WhatsApp

📝 License
This project is proprietary to SafeNsparkle. All rights reserved.

Built with care in Polokwane. 🇿🇦

text

### How to add it to your repo:
Once you've saved the file, push it up to GitHub with:

```powershell
git add README.md
git commit -m "Add project README"
git push
