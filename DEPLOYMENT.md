# Deployment & Production Setup Guide

Complete step-by-step instructions to deploy Naveen Kandula's portfolio website on free-tier production infrastructure.

---

## 🏗️ Architecture Overview

- **Frontend & Serverless API**: Next.js App Router deployed on **Vercel** (Free Hobby Tier).
- **Relational Database**: Managed PostgreSQL on **Neon** (Free Tier: 0.5 GB storage, instant branching) or **Supabase**.
- **Transactional Email**: **Resend** (Free Tier: 3,000 emails/month, 100/day) or SMTP.
- **Custom Domain**: `naveenkandula.dev` with automatic SSL on Vercel.

---

## Step 1: Push Code to GitHub

The target repository is `Kandulanaveennaidu/naveen-kandula-portfolio`.

```bash
# 1. Initialize git (if not already done)
git init
git branch -M main

# 2. Stage all files (secrets in .env are safely ignored)
git add .
git commit -m "feat: complete production portfolio and client lead engine"

# 3. Add GitHub remote
git remote add origin https://github.com/Kandulanaveennaidu/naveen-kandula-portfolio.git

# 4. Push to main branch
git push -u origin main
```

---

## Step 2: Set Up Free PostgreSQL Database (Neon)

1. Go to [neon.tech](https://neon.tech) and create a free account.
2. Click **Create Project**, name it `naveen-portfolio-db`.
3. In your Neon dashboard, copy the **Connection String** (choose Node.js/Postgres):
   ```
   postgresql://username:password@ep-sample-pooler.region.neon.tech/neondb?sslmode=require
   ```
4. *Note: You do NOT need to manually run SQL migrations!* The application automatically runs `CREATE TABLE IF NOT EXISTS contact_inquiries ...` on its first request.

---

## Step 3: Set Up Free Transactional Email (Resend)

1. Go to [resend.com](https://resend.com) and create a free account.
2. Under **API Keys**, click **Create API Key**, name it `Portfolio Inquiries`.
3. Copy the key starting with `re_...`.
4. Your inquiries will automatically route to:
   `kandulanaveennaidu017@gmail.com`

---

## Step 4: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account (`Kandulanaveennaidu`).
2. Click **Add New** → **Project**.
3. Select `naveen-kandula-portfolio` and click **Import**.
4. In the **Environment Variables** section, add the following:

| Variable Name | Example Value | Description |
|---|---|---|
| `DATABASE_URL` | `postgresql://user:pass@ep-...neon.tech/neondb?sslmode=require` | Your Neon connection string |
| `RESEND_API_KEY` | `re_123456789...` | Your Resend API key |
| `CONTACT_NOTIFICATION_EMAIL` | `kandulanaveennaidu017@gmail.com` | Notification inbox |
| `ADMIN_ACCESS_KEY` | `your_secret_passcode` | Passcode to unlock `/admin/inquiries` |
| `NEXT_PUBLIC_SITE_URL` | `https://naveenkandula.dev` | Canonical site URL |

5. Click **Deploy**. Vercel will build and launch the site within ~60 seconds.

---

## Step 5: Custom Domain Setup (`naveenkandula.dev`)

1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Type `naveenkandula.dev` and click **Add**.
3. Also add `www.naveenkandula.dev`.
4. In your domain registrar (e.g. Namecheap, GoDaddy, Cloudflare), set up the following DNS records:

| Type | Name / Host | Value / Destination | TTL |
|---|---|---|---|
| **A** | `@` (root) | `76.76.21.21` | Automatic / 300 |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic / 300 |

5. Vercel will automatically provision a free Let's Encrypt SSL certificate once DNS resolves (typically 5–30 minutes).

---

## Step 6: Managing Leads via Admin Dashboard

Once deployed, view and manage client inquiries at:
`https://naveenkandula.dev/admin/inquiries`

- Unlock the dashboard using the `ADMIN_ACCESS_KEY` you configured.
- Search leads, filter by status (`new`, `contacted`, `qualified`, `closed`, `spam`), and inspect full briefs.
- The route is protected and marked `noindex` to prevent search engine indexing.

---

## Step 7: Local Development Verification

To run locally with hot-reloading:

```bash
npm run dev
```

Visit `http://localhost:3000`. Even without `DATABASE_URL` set, the contact form safely persists submissions locally to `src/data/storage/inquiries.json` so you can test end-to-end without database setup!
