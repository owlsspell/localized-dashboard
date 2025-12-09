# Localized & Filtered API Data Dashboard

A minimal Next.js dashboard demonstrating:

- Internationalized routing (`/en` and `/fr`)
- REST API data fetching from JSONPlaceholder
- Client-side search and pagination
- Loading and error states
- Responsive UI with Tailwind CSS

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/owlsspell/localized-dashboard.git
cd localized-dashboard
npm install
npm run dev
```

## 🌐 Language Switching

This dashboard supports internationalized routing with Next.js App Router.

- Navigate to `/en` for the English version
- Navigate to `/fr` for the French version

All static texts (titles, placeholders, buttons) are loaded from a locale dictionary (`i18n.ts`) based on the `[locale]` route segment.

Example:

- [http://localhost:3000/en](http://localhost:3000/en) → English dashboard
- [http://localhost:3000/fr](http://localhost:3000/fr) → French dashboard
