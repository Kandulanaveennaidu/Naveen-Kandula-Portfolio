# Naveen Kandula — Premium Freelance Portfolio & Client Lead System

A production-grade personal portfolio, freelance business website, and client lead generation engine engineered for **Naveen Kandula** (Full Stack Developer & AI Integration Engineer).

Built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and a **PostgreSQL** persistence engine.

---

## 🚀 Live Positioning

> "I build modern web applications, full-stack systems, and AI-powered products from idea to production."

- **Positioning**: Full Stack Developer & AI Integration Engineer
- **Experience**: 4+ years of professional full-stack development
- **Primary Email**: [kandulanaveennaidu017@gmail.com](mailto:kandulanaveennaidu017@gmail.com)
- **WhatsApp**: [+91 9705627977](https://wa.me/919705627977)
- **LinkedIn**: [linkedin.com/in/kandulanaveen1](https://www.linkedin.com/in/kandulanaveen1/)
- **GitHub**: [github.com/Kandulanaveennaidu](https://github.com/Kandulanaveennaidu)

---

## 🎯 Architecture & Pages

| Route | Purpose | Features |
|---|---|---|
| `/` | Main Conversion Hub | Hero with interactive system graph, capability strip, about, services, tech stack, project gallery, AI engineering pipeline, 5-step process, trust propositions, engagement models, and lead capture. |
| `/about` | Professional Story & Philosophy | Product-minded engineering story, lifecycle ribbon, operating principles, and verified direct channels. |
| `/services` | Freelance Services | 6 core service offerings with deliverables, tech stacks, and engagement formats. |
| `/projects` | Case Studies & Evidence | Filterable project showcase with problem, solution, architecture, and metrics. |
| `/projects/[slug]` | Deep-Dive Case Studies | Dedicated case studies (`ai-document-intelligence`, `cloud-inventory-ops`, `enterprise-crm-engine`, `intelligent-support-copilot`). |
| `/contact` | Client Lead Engine | Real inquiry submission form, profile image personality panel, and verified direct channels. |
| `/admin/inquiries` | Protected Lead Dashboard | Passcode-protected CRM to inspect, search, filter, and manage inquiries (`new`, `contacted`, `qualified`, `closed`, `spam`). |
| `/api/contact` | Inquiries API Endpoint | Rate-limited, sanitized, honeypot-protected endpoint saving to PostgreSQL and dispatching email notifications. |
| `/api/admin/inquiries`| Admin Management Endpoint | Protected endpoint for fetching inquiries and updating statuses. |

---

## ⚡ Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> [!NOTE]
> The contact form automatically falls back to local storage (`src/data/storage/inquiries.json`) when `DATABASE_URL` is not provided, allowing you to test lead submissions offline immediately!

---

## 🔐 Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Configure your production services:
- `DATABASE_URL`: Neon / Supabase PostgreSQL connection string
- `RESEND_API_KEY`: Transactional email API key (optional; notifications log to console in development)
- `ADMIN_ACCESS_KEY`: Secret passcode to unlock `/admin/inquiries` (defaults to `naveen_admin_secure_2026`)
- `NEXT_PUBLIC_SITE_URL`: `https://naveenkandula.dev`

---

## 📦 Production Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for full instructions on setting up:
1. GitHub repository (`Kandulanaveennaidu/naveen-kandula-portfolio`)
2. Free managed PostgreSQL on Neon
3. Free transactional email on Resend
4. Zero-cost deployment on Vercel
5. Custom domain configuration (`naveenkandula.dev`)

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS with custom design tokens
- **Motion & Interactions**: Framer Motion & CSS keyframes
- **Icons**: Lucide React
- **Database**: PostgreSQL (`pg` pool) with automated schema migrations
- **Email Delivery**: Resend API / Nodemailer SMTP
- **SEO**: OpenGraph, Twitter Cards, Schema.org Person JSON-LD, Sitemap XML, Robots.txt
