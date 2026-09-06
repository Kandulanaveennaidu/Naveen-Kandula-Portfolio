const { Pool } = require('pg');

const fs = require('fs');
const path = require('path');

let databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  const envPath = path.join(__dirname, '..', '..', '.env.local');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('DATABASE_URL=')) {
        databaseUrl = trimmed.slice('DATABASE_URL='.length).trim();
        if ((databaseUrl.startsWith('"') && databaseUrl.endsWith('"')) || (databaseUrl.startsWith("'") && databaseUrl.endsWith("'"))) {
          databaseUrl = databaseUrl.slice(1, -1);
        }
        break;
      }
    }
  }
}

const connStr = (databaseUrl || "").replace(/([?&])channel_binding=[^&]*(&?)/, (match, p1, p2) => {
  return p1 === "?" && p2 ? "?" : "";
});

const pool = new Pool({
  connectionString: connStr,
  ssl: { rejectUnauthorized: false }
});

async function main() {
  console.log('[NEON] Connecting to live database...');
  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_inquiries (
      id VARCHAR(64) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      company VARCHAR(255),
      phone VARCHAR(100),
      project_type VARCHAR(100) NOT NULL,
      budget VARCHAR(100),
      timeline VARCHAR(100),
      preferred_contact VARCHAR(50) DEFAULT 'Email',
      message TEXT NOT NULL,
      source VARCHAR(100) DEFAULT 'website',
      status VARCHAR(50) DEFAULT 'new',
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_inquiries_status ON contact_inquiries(status);
    CREATE INDEX IF NOT EXISTS idx_inquiries_created ON contact_inquiries(created_at DESC);
  `);
  console.log('[NEON] SUCCESS: contact_inquiries table initialized on live Neon PostgreSQL!');

  const res = await pool.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public';");
  console.log('[NEON] Public tables:', res.rows.map(r => r.table_name));
  await pool.end();
}

main().catch(err => {
  console.error('[NEON ERROR]', err);
  process.exit(1);
});
