import { Pool } from "pg";
import fs from "fs";
import path from "path";

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  project_type: string;
  budget?: string;
  timeline?: string;
  preferred_contact?: string;
  message: string;
  source: string;
  status: "new" | "contacted" | "qualified" | "closed" | "spam";
  created_at: string;
  updated_at: string;
}

let pool: Pool | null = null;

export function getDbPool(): Pool | null {
  if (!process.env.DATABASE_URL) {
    return null;
  }
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL.includes("localhost") ? false : { rejectUnauthorized: false },
    });
  }
  return pool;
}

const LOCAL_STORAGE_DIR = path.join(process.cwd(), "src", "data", "storage");
const LOCAL_STORAGE_FILE = path.join(LOCAL_STORAGE_DIR, "inquiries.json");

function ensureLocalStorageExists() {
  if (!fs.existsSync(LOCAL_STORAGE_DIR)) {
    fs.mkdirSync(LOCAL_STORAGE_DIR, { recursive: true });
  }
  if (!fs.existsSync(LOCAL_STORAGE_FILE)) {
    fs.writeFileSync(LOCAL_STORAGE_FILE, JSON.stringify([]), "utf-8");
  }
}

export async function initDatabase() {
  const db = getDbPool();
  if (db) {
    try {
      await db.query(`
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
      console.log("[DB] PostgreSQL contact_inquiries table initialized successfully.");
      return true;
    } catch (err) {
      console.error("[DB] Error initializing PostgreSQL table:", err);
      return false;
    }
  } else {
    ensureLocalStorageExists();
    return true;
  }
}

export async function saveInquiry(inquiry: Omit<ContactInquiry, "id" | "status" | "created_at" | "updated_at">): Promise<ContactInquiry> {
  const id = `inq_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const now = new Date().toISOString();

  const record: ContactInquiry = {
    ...inquiry,
    id,
    company: inquiry.company || "",
    phone: inquiry.phone || "",
    budget: inquiry.budget || "Not Specified",
    timeline: inquiry.timeline || "Flexible",
    preferred_contact: inquiry.preferred_contact || "Email",
    source: inquiry.source || "portfolio_contact_form",
    status: "new",
    created_at: now,
    updated_at: now,
  };

  const db = getDbPool();
  if (db) {
    await initDatabase();
    const query = `
      INSERT INTO contact_inquiries (
        id, name, email, company, phone, project_type, budget, timeline, preferred_contact, message, source, status, created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *;
    `;
    const values = [
      record.id,
      record.name,
      record.email,
      record.company,
      record.phone,
      record.project_type,
      record.budget,
      record.timeline,
      record.preferred_contact,
      record.message,
      record.source,
      record.status,
      record.created_at,
      record.updated_at,
    ];

    const result = await db.query(query, values);
    return result.rows[0];
  } else {
    // Local fallback persistence
    ensureLocalStorageExists();
    const data = fs.readFileSync(LOCAL_STORAGE_FILE, "utf-8");
    const inquiries: ContactInquiry[] = data ? JSON.parse(data) : [];
    inquiries.unshift(record);
    fs.writeFileSync(LOCAL_STORAGE_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
    console.log(`[LOCAL STORAGE] Inquiry stored locally with ID: ${id}`);
    return record;
  }
}

export async function getInquiries(statusFilter?: string): Promise<ContactInquiry[]> {
  const db = getDbPool();
  if (db) {
    await initDatabase();
    let query = "SELECT * FROM contact_inquiries ORDER BY created_at DESC;";
    let values: any[] = [];
    if (statusFilter && statusFilter !== "all") {
      query = "SELECT * FROM contact_inquiries WHERE status = $1 ORDER BY created_at DESC;";
      values = [statusFilter];
    }
    const result = await db.query(query, values);
    return result.rows;
  } else {
    ensureLocalStorageExists();
    const data = fs.readFileSync(LOCAL_STORAGE_FILE, "utf-8");
    const inquiries: ContactInquiry[] = data ? JSON.parse(data) : [];
    if (statusFilter && statusFilter !== "all") {
      return inquiries.filter((i) => i.status === statusFilter);
    }
    return inquiries;
  }
}

export async function updateInquiryStatus(id: string, status: ContactInquiry["status"]): Promise<boolean> {
  const db = getDbPool();
  const now = new Date().toISOString();
  if (db) {
    await initDatabase();
    const query = "UPDATE contact_inquiries SET status = $1, updated_at = $2 WHERE id = $3;";
    await db.query(query, [status, now, id]);
    return true;
  } else {
    ensureLocalStorageExists();
    const data = fs.readFileSync(LOCAL_STORAGE_FILE, "utf-8");
    const inquiries: ContactInquiry[] = data ? JSON.parse(data) : [];
    const idx = inquiries.findIndex((i) => i.id === id);
    if (idx !== -1) {
      inquiries[idx].status = status;
      inquiries[idx].updated_at = now;
      fs.writeFileSync(LOCAL_STORAGE_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
      return true;
    }
    return false;
  }
}
