# STAGEFRONT — Concert Ticketing

**UTS Pemrograman Web — ST084 | UNIVERSITAS AMIKOM YOGYAKARTA**  
Semester Genap Tahun Akademik 2025/2026

---

## Deskripsi

STAGEFRONT adalah platform ticketing konser berbasis web modern dengan tema dark neon. Dibangun menggunakan React + Vite dengan Tailwind CSS.

---

## Cara Menjalankan

```bash
# 1. Buat file project
npm create vite@latest my-project

# 2. Install dependencies
npm install
npm install tailwindcss @tailwindcss/vite
npm install @vitejs/plugin-react --save-dev

# 3. Jalankan dev server
npm run dev
```

---

## Struktur Project

```
concert-ticketing/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ConcertCard.jsx
│   │   └── SearchFilter.jsx 
│   │   └── HowItWorks.jsx
│   ├── data/
│   │   └── concerts.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ExplorePage.jsx  
│   │   └── ArtistsPage.jsx  
|   |   └── AboutPage.jsx
|   |   └── ContactPage.jsx
|   |   └── FAQPage.jsx
|   |   └── Refundpage.jsx
|   |   └── TermsPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Checklist Penilaian UTS

### 1. Komponen HTML & Semantic (20 poin)
- [x] `<header>` — Header.jsx dengan navigasi
- [x] `<main>` — App.jsx wraps semua halaman
- [x] `<footer>` — Footer.jsx
- [x] `<form>` dengan berbagai `<input type>`:
  - `type="text"` — Pencarian artis/venue
  - `type="search"` — Pencarian artis di halaman Artists
  - `type="date"` — Filter tanggal konser
  - `type="range"` — Filter harga maksimal
  - `type="checkbox"` — Filter konser tersedia
  - `<select>` — Filter genre & kota
- [x] Semantic tags: `<article>`, `<section>`, `<nav>`, `<aside>`

### 2. Framework CSS — Tailwind CSS (20 poin)
- [x] **Layout Responsif** — Mobile & Desktop (grid-cols-1 → grid-cols-4)
- [x] **Grid & Flexbox** — grid, flex, gap, justify, align
- [x] **Efek Visual**:
  - Hover transition pada tombol & kartu
  - Shadow/glow effect (box-shadow neon)
  - Scale transform on hover
  - Backdrop blur (glass effect)
  - Gradient backgrounds

### 3. React Logic & State Management (20 poin)
- [x] **useState**: 
  - `menuOpen`, `filtered`, `activeGenre`, `heroIndex` (HomePage)
  - `posts`, `loading`, `error`, `selectedPost` (ExplorePage)
  - `selectedArtist`, `view`, `searchQuery`, `isFollowing` (ArtistsPage)
- [x] **useEffect**:
  - Auto-rotate hero slider setiap 4 detik
  - Fetch data dari API saat halaman/artist dipilih
  - Cleanup interval pada unmount
- [x] **Conditional Rendering**:
  - Loading indicator saat fetch data
  - Error state dengan tombol retry
  - Empty state saat filter tidak ada hasil
  - Toggle detail panel artis

### 4. Data Integration — Axios (15 poin)
- [x] Fetch data dari **JSONPlaceholder API** (Public API)
- [x] Minimal 10 item ditampilkan (10 posts per page)
- [x] **Loading indicator** saat data sedang diambil (spinner animasi)
- [x] Error handling dengan pesan error yang jelas
- [x] Pagination untuk navigasi antar halaman data

---

## Tech Stack

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| React | 18.2 | UI Framework |
| Vite | 5.0 | Build Tool |
| Tailwind CSS | 3.3 | Styling |
| Axios | 1.6 | HTTP Client |
| React Router DOM | 6.20 | Routing |

---

## Desain

- **Tema**: Dark Neon / Cyberpunk
- **Warna Utama**: #FF2D78 (Neon Pink), #00F5FF (Neon Cyan), #FFE600 (Neon Yellow)
- **Font**: Black Han Sans (display), DM Sans (body), Space Mono (code)
- **Efek**: Glass morphism, neon glow, shimmer text, float animation

---

*Dibuat untuk UTS ST084 Pemrograman Web — Universitas Amikom Yogyakarta 2025/2026*
