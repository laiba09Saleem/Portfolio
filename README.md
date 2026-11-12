<div align="center">

# 🌟 Laiba Saleem — Software Engineering Portfolio

**Production-Grade Personal Portfolio & Interactive Technical Showcase**

[![Live Demo](https://img.shields.io/badge/Live_Portfolio-ais--pre--r76iegihkd2ymktwqscupc-2563EB?style=for-the-badge&logo=google-cloud&logoColor=white)](https://ais-pre-r76iegihkd2ymktwqscupc-242274331946.asia-southeast1.run.app)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5.8-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

<p align="center">
  <a href="https://ais-pre-r76iegihkd2ymktwqscupc-242274331946.asia-southeast1.run.app"><strong>🌐 Explore Live Portfolio »</strong></a>
  <br />
  <a href="#-featured-engineering-projects">View Projects</a> ·
  <a href="#-key-features">Key Features</a> ·
  <a href="#-quick-start">Quick Start</a> ·
  <a href="#-contact--connect">Get in Touch</a>
</p>

---

</div>

## 📌 Live Demo URL

The portfolio is deployed and accessible at:
> **🔗 [https://ais-pre-r76iegihkd2ymktwqscupc-242274331946.asia-southeast1.run.app](https://ais-pre-r76iegihkd2ymktwqscupc-242274331946.asia-southeast1.run.app)**

---

## 👩‍💻 About Laiba Saleem

I am a Computer Science graduate from the **University of the Punjab** and a **Software Engineer** based in Lahore, Pakistan, specializing in **Python, FastAPI, Django, React, TypeScript, and AI/ML solution architectures**.

This portfolio is engineered specifically for **technical recruiters, CTOs, engineering managers, and international clients** to demonstrate hands-on software development experience, clean architecture, and practical engineering rigor.

---

## 🚀 Key Features

### 1. Minimal & Premium Editorial Design
- Designed according to strict UI/UX standards: clean typographic hierarchy, generous whitespace, zero visual clutter, and restrained cobalt/blue accents (`#2563EB`).
- **Zero-Pill Metadata Discipline**: Clean, unboxed metadata typography with subtle typographic separators (`·`).

### 2. Full Dual-Theme Engine (Light & Dark)
- **Light Mode**: Crisp warm off-white canvas with dark charcoal text and subtle borders.
- **Dark Mode**: Deep charcoal (`#090D16`) with high-contrast legibility and optical weight compensation.
- **Persistence**: Remembers user preference across sessions via `localStorage` with initial system preference (`prefers-color-scheme`) auto-detection.
- Fully compatible with Tailwind CSS v4 custom variant architecture.

### 3. Real ATS-Standard Vector CV PDF Generator & Preview
- Real, in-browser programmatic vector PDF generation (`Laiba_Saleem_CV.pdf`) powered by `jspdf`.
- Formatted ATS preview modal with print and download functionality.
- Contains verified career details, GPA, technical skills, coursework, and certifications.

### 4. Featured Project Showcase with Real Artifacts
- **NETSOL Chatbot (Laiba Chatbot)**: Full-Stack conversational assistant built with FastAPI, React, LangChain, vector stores, and Supabase. Features live demo link, GitHub repository, and an interactive high-resolution screenshot gallery.
- **OptiCare**: Telemedicine & virtual hospital platform featuring real-time patient vitals telemetry and computer vision wound assessment.
- **AgriVision – AI Plant Disease Detection**: AI leaf diagnostic web app powered by Gemini 2.5 Flash and Supabase Edge Functions.
- **Student Performance Analyzer**: End-to-end Python data analysis and EDA with statistical distributions and correlation visualizations.

### 5. Verified Credentials & Experience Letters Viewer
- Interactive credential verification cards detailing corporate training at **NAVTTC x NETSOL NIAI**, and experience letters from **NETSOL Technologies**, **MatchVet**, and **Rising Tech Solutions**.
- Modal verification drawer with authenticated criteria and verification notices.

### 6. Strict Privacy & Zero-Vulnerability Standards
- Complete privacy protection: personal phone numbers and postal codes are strictly omitted.
- Verified corporate portrait permanently and immutably embedded (zero client-side upload vulnerabilities).
- One-click copy email button with feedback and direct `mailto:` handler.

### 7. Search Engine Optimization & Social Sharing
- Complete OpenGraph (`og:image`, `og:title`, `og:description`) and Twitter card integration with rich link previews.
- Schema.org JSON-LD `Person` metadata embedded in the document head.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript 5.8, Vite 8 |
| **Styling & Design** | Tailwind CSS v4, Plus Jakarta Sans, JetBrains Mono |
| **Icons & Motion** | Lucide React, CSS Transitions & Keyframes |
| **PDF Generation** | jsPDF (Vector ATS-Compliant Document Engine) |
| **Deployment** | Vercel, Google Cloud Run, Vite Static Hosting |

---

## 📂 Project Architecture

```
├── public/
│   ├── assets/aistudio/pic_8b42eec1.jpeg    # Official candidate portrait
│   └── laiba_saleem.jpeg                    # Root-served profile photo
├── src/
│   ├── assets/images/
│   │   ├── chatbot1.png                     # NETSOL Chatbot screenshot 1
│   │   ├── chatbot2.png                     # NETSOL Chatbot screenshot 2
│   │   ├── laiba_saleem.jpeg                # High-res profile image
│   │   ├── opticare_healthcare_vitals_*.jpg # OptiCare telemetry visual
│   │   ├── agrivision_plant_disease_*.jpg   # AgriVision AI leaf visual
│   │   └── student_performance_data_*.jpg   # Data analysis dashboard visual
│   ├── components/
│   │   ├── Navbar.tsx                       # Sticky 3-zone header & mobile menu
│   │   ├── Hero.tsx                         # Executive hero with verified frame
│   │   ├── About.tsx                        # Narrative bio & engineering pillars
│   │   ├── Experience.tsx                   # Vertical career journey timeline
│   │   ├── Skills.tsx                       # Categorized skills (no fake progress bars)
│   │   ├── Projects.tsx                     # Editorial project cards & category filter
│   │   ├── ProjectModal.tsx                 # Detailed engineering specs modal
│   │   ├── ScreenshotModal.tsx              # Interactive screenshot lightbox
│   │   ├── Education.tsx                    # Academic credentials & coursework
│   │   ├── Certifications.tsx               # Verified document cards
│   │   ├── CertificateModal.tsx             # Credential verification modal
│   │   ├── Contact.tsx                      # Privacy-first contact card & socials
│   │   ├── Footer.tsx                       # Clean footer with dynamic year
│   │   └── CVModal.tsx                      # ATS resume preview & PDF trigger
│   ├── data/
│   │   └── portfolioData.ts                 # Single source of truth for portfolio data
│   ├── types/
│   │   └── portfolio.ts                     # Strict TypeScript interfaces
│   ├── utils/
│   │   └── generateCV.ts                    # Vector PDF generator
│   ├── App.tsx                              # Root layout & theme provider
│   ├── index.css                            # Global Tailwind v4 styles & dark variant
│   └── main.tsx                             # Application entry point
├── index.html                               # SEO metadata & JSON-LD structured data
├── package.json                             # Dependencies and scripts
└── tsconfig.json                            # TypeScript configuration
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18.x or later)
- npm or yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/laiba09Saleem/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 🚢 Deployment

The portfolio is designed for instant zero-configuration deployment on **Vercel**, **Netlify**, or **Cloud Run**:

### Deploy on Vercel
1. Push this repository to your GitHub account (`github.com/laiba09Saleem`).
2. Import the repository in [Vercel](https://vercel.com).
3. The build command (`npm run build`) and output directory (`dist`) are automatically detected.
4. Click **Deploy**.

---

## 📬 Contact & Connect

- **Email:** [laibasaleem068@gmail.com](mailto:laibasaleem068@gmail.com)
- **LinkedIn:** [linkedin.com/in/laiba-saleem-4b8541248](https://pk.linkedin.com/in/laiba-saleem-4b8541248)
- **GitHub:** [github.com/laiba09Saleem](https://github.com/laiba09Saleem)
- **YouTube:** [youtube.com/@linesera_solutions](https://youtube.com/@linesera_solutions?si=ufKFPXcSoXrpe2jb)
- **Location:** Lahore, Pakistan

---

<div align="center">
  <sub>Designed & Developed by <strong>Laiba Saleem</strong> · Built with React, TypeScript & Tailwind CSS.</sub>
</div>
