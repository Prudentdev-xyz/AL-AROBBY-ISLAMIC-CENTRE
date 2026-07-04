````markdown
# Al Arobby Islamic Centre

Official website for Al Arobby Islamic Centre — an online Madrasah and Foundation offering authentic Islamic education, Qur'an studies, prayer group community, and humanitarian support.

## About

Al Arobby Islamic Centre serves the community through:

- **Madrasah** — Qur'an Reading (Qa'idah & Tajweed), Qur'an Memorization (Hifz), and Islamic Studies courses with structured admissions
- **Prayer Group** — Community prayer group membership and coordination
- **Foundation** — Humanitarian outreach, Ramadan feeding programmes, and charity initiatives
- **Mosque Development Project** — Ongoing Al Arobby Mosque construction, seeking donations and community support

## Features

- Course/prayer group application forms with Supabase-backed data storage
- Automated confirmation emails via Resend, including payment details for enrolment
- Admin dashboard for reviewing Madrasah and Prayer Group applications
- Charity/impact showcase with project updates and donation details
- Responsive, accessible design across all pages

## Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Backend/Database:** Supabase (Postgres + Row Level Security)
- **Email:** Resend API
- **Icons:** Lucide React
- **Routing:** React Router

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- A Supabase project (URL + anon key)
- A Resend account and API key

### Installation

```bash
git clone https://github.com/Prudentdev-xyz/AL-AROBBY-ISLAMIC-CENTRE.git
cd AL-AROBBY-ISLAMIC-CENTRE
npm install
```
````

### Environment Variables

Create a `.env` file in the project root with:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

### Running Locally

```bash
npm run dev
```

The app will be available at `https://al-arobby-islamic-centre.vercel.app`.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── pages/
│   ├── Madrasah/       # Course listings & application forms
│   ├── PrayerGroup/     # Prayer group membership
│   ├── Foundation/      # Humanitarian & outreach content
│   └── Charity/         # Mosque project & impact stories
├── admin/               # Admin dashboard for reviewing applications
├── lib/                 # Supabase client & shared utilities
└── data/                # Static content (courses, etc.)
```

## Contributing

This is a community-focused project. If you'd like to contribute or report an issue, please reach out via the contact details on the site or open an issue on this repository.

## Contact

- **WhatsApp:** +234 816 891 9665
- **Email:** alarobbyislamicacademy@gmail.com

## License

© 2026 Al Arobby Islamic Centre. All rights reserved.

```

```
