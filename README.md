# Home Art Creative
Home Art Creative adalah situs web untuk layanan desain kreatif, dekorasi, dan solusi seni berbasis di Surabaya, Indonesia. Dibangun menggunakan teknologi modern seperti React, Vite, TanStack Router, Tailwind CSS, dan Shadcn/UI, proyek ini menawarkan antarmuka yang responsif, dioptimalkan untuk SEO, dan mendukung fitur Progressive Web App (PWA) dengan favicon yang dihasilkan oleh RealFaviconGenerator.
Fitur

Halaman Utama: Menampilkan konten dinamis (termasuk lanyard 3D menggunakan @react-three/*).
Halaman About: Menyajikan kisah pencapaian dengan statistik dan gambar.
Halaman Contact: Menyediakan informasi kontak dan peta Google Maps tertanam.
SEO: Meta tag dioptimalkan untuk mesin pencari dan media sosial (Open Graph, Twitter).
Favicon: Ikon lintas platform (PNG, SVG, ICO, Apple Touch Icon) dengan Web Manifest.
Animasi: Transisi halus menggunakan framer-motion.
Format Kode: Menggunakan Prettier dengan plugin Tailwind CSS.

# Prasyarat
Sebelum memulai, pastikan Anda memiliki:

Node.js v18 atau lebih baru (unduh).
Bun v1.1 atau lebih baru (instruksi instalasi) - direkomendasikan sebagai package manager utama.
Git untuk mengkloning repositori.
Akses ke terminal (misalnya, Bash, PowerShell, atau Terminal macOS).
(Opsional) pnpm atau Yarn jika tidak menggunakan Bun atau npm.

# Struktur Direktori
```
└── 📁public
    └── 📁3d
        └── tag_texture.png
        └── tag.glb
    └── 📁about
        └── logo.png
    └── 📁brand
        └── logo.jpg
    └── 📁carousel
        └── 1000175671.jpg
        └── ikom unesa.jpg
    └── 📁clients
        └── HYPENAMIC.png
        └── ITS.png
        └── lmi.png
        └── MSIB.png
        └── TVRI.png
        └── UI.png
        └── WAKI.png
    └── 📁detail-service
        └── ikom-unesa.jpg
    └── 📁svgs
        └── 📁icons
            └── facebook.svg
            └── instagram.svg
    └── .DS_Store
    └── apple-touch-icon.png
    └── favicon-96x96.png
    └── favicon.ico
    └── favicon.svg
    └── site.webmanifest
    └── tag.glb
    └── web-app-manifest-192x192.png
    └── web-app-manifest-512x512.png
└── 📁src
    └── 📁assets
        └── react.svg
    └── 📁components
        └── 📁footer
            └── footer.tsx
        └── 📁global
            └── animation-container.tsx
            └── max-width-wrapper.tsx
        └── 📁magicui
        └── 📁miscellaneous
            └── console-logger.tsx
            └── scroll-to-anchor.tsx
        └── 📁navigation
            └── mobile-nav.tsx
            └── navbar.tsx
        └── 📁providers
            └── scroll-progress.bar-provide.tsx
            └── theme-provider.tsx
        └── 📁svgs
            └── whatsapp-icom.tsx
        └── 📁ui
            └── 📁aceternityui
                └── text-hover-effect.tsx
            └── 📁magicui
                └── animated-shiny-text.tsx
                └── box-reveal.tsx
                └── interactive-hover-button.tsx
                └── marquee.tsx
            └── 📁shadcn
                └── button.tsx
                └── carousel.tsx
                └── dialog.tsx
                └── dropdown-menu.tsx
                └── input.tsx
                └── navigation-menu.tsx
                └── separator.tsx
                └── textarea.tsx
    └── 📁constants
        └── footer-link.ts
        └── nav-links.ts
    └── 📁context
    └── 📁features
        └── 📁home
            └── 📁__components
                └── about-us.tsx
                └── band.tsx
                └── contact-us.tsx
                └── dialog-detail-service.tsx
                └── hero.tsx
                └── our-partner.tsx
                └── our-service.tsx
                └── testimonial-carousel.tsx
            └── 📁constants
                └── logo.ts
                └── service-detail.ts
                └── testimonials.ts
            └── 📁data
                └── parallax.ts
            └── index.tsx
    └── 📁hooks
        └── toggle-theme.tsx
    └── 📁layouts
        └── main-layout.tsx
    └── 📁lib
        └── cn.ts
    └── 📁routes
        └── __root.tsx
        └── index.tsx
    └── 📁styles
        └── global.css
    └── 📁types
        └── footer.ts
        └── tanstack-router-devtools.d.ts
    └── main.tsx
    └── routeTree.gen.ts
    └── vite.env.d.ts
```

# Instalasi
Ikuti langkah-langkah berikut untuk mengatur proyek di mesin lokal Anda.
1. Kloning Repositori
```bash
git clone https://github.com/AradheaRangga/HOMEART_CP.git
cd HOMEART_CP
```bash

2. Instal Dependensi
Pilih salah satu package manager berikut untuk menginstal dependensi.
Menggunakan Bun (Direkomendasikan)
bun install

Menggunakan npm
```bash
npm install
```

```bash
Menggunakan Yarn
yarn install
```

```bash
Menggunakan pnpm
pnpm install
```
