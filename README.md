# Navya Golash — Portfolio

A React portfolio website with elegant animations and professional design.

---

## 📁 Folder Structure

```
navya-portfolio/
├── public/
│   └── index.html          ← HTML entry point
├── src/
│   ├── components/
│   │   ├── Navbar.js       ← Fixed top navigation
│   │   ├── Navbar.css
│   │   ├── Hero.js         ← Landing section with typewriter
│   │   ├── Hero.css
│   │   ├── About.js        ← Bio + stat cards
│   │   ├── About.css
│   │   ├── Skills.js       ← Animated skill bars
│   │   ├── Skills.css
│   │   ├── Projects.js     ← Project list
│   │   ├── Projects.css
│   │   ├── Experience.js   ← Work timeline
│   │   ├── Experience.css
│   │   ├── Contact.js      ← Contact links
│   │   ├── Contact.css
│   │   ├── Footer.js       ← Footer
│   │   └── Footer.css
│   ├── hooks/
│   │   ├── useReveal.js    ← Scroll-reveal animation hook
│   │   └── useTyped.js     ← Typewriter effect hook
│   ├── styles/
│   │   └── global.css      ← CSS variables, resets, shared styles
│   ├── App.js              ← Root component (assembles all sections)
│   └── index.js            ← React entry point
├── package.json
└── README.md
```

---

## 🚀 How to Open in VS Code & Run

### Step 1 — Extract the ZIP
Unzip `navya-portfolio.zip` anywhere on your computer (e.g. Desktop).

### Step 2 — Open in VS Code
```
File → Open Folder → select the navya-portfolio folder
```
Or right-click the folder → **Open with VS Code**

### Step 3 — Open the Terminal in VS Code
```
Terminal → New Terminal  (or Ctrl + ` )
```

### Step 4 — Install dependencies
```bash
npm install
```

### Step 5 — Start the development server
```bash
npm start
```

Your browser will open automatically at **http://localhost:3000** 🎉

---

## ✏️ How to Customise

| What to change        | File to edit                          |
|-----------------------|---------------------------------------|
| Your name / tagline   | `src/components/Hero.js`              |
| Bio text              | `src/components/About.js`             |
| Skills & percentages  | `src/components/Skills.js`            |
| Projects              | `src/components/Projects.js`          |
| Work experience       | `src/components/Experience.js`        |
| Email / social links  | `src/components/Contact.js`           |
| Colors / fonts        | `src/styles/global.css`               |

---

## 🛠 Built With

- React 18
- Plain CSS (no extra libraries needed)
- Custom hooks (`useReveal`, `useTyped`)
- IntersectionObserver API for scroll animations
