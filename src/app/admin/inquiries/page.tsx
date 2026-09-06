"use client";

import React, { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  Lock, 
  Clock, 
  Mail, 
  Phone, 
  Building, 
  ExternalLink, 
  RefreshCw,
  Eye,
  CheckCircle2
} from "lucide-react";
import type { ContactInquiry } from "@/lib/db";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

const STATUSES = ["all", "new", "contacted", "qualified", "closed", "spam"];

export default function AdminInquiriesPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null);

  const fetchInquiries = async (token: string, filter = "all") => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/inquiries?status=${filter}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }
      setInquiries(data.inquiries || []);
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_key", token);
    } catch (err: any) {
      setError(err.message);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_key");
    if (saved) {
      setPasscode(saved);
      fetchInquiries(saved, statusFilter);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchInquiries(passcode, statusFilter);
  };

  const handleStatusChange = async (id: string, newStatus: ContactInquiry["status"]) => {
    try {
      const token = sessionStorage.getItem("admin_key") || passcode;
      const res = await fetch("/api/admin/inquiries", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setInquiries(prev =>
          prev.map(inq => (inq.id === id ? { ...inq, status: newStatus } : inq))
        );
        if (selectedInquiry && selectedInquiry.id === id) {
          setSelectedInquiry(prev => prev ? { ...prev, status: newStatus } : null);
        }
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const filteredInquiries = inquiries.filter(inq => {
    const query = searchQuery.toLowerCase();
    return (
      inq.name.toLowerCase().includes(query) ||
      inq.email.toLowerCase().includes(query) ||
      inq.project_type.toLowerCase().includes(query) ||
      (inq.company && inq.company.toLowerCase().includes(query))
    );
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 bg-bg-primary">
        <div className="w-full max-w-md p-8 rounded-3xl bg-bg-card border border-border-subtle shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary mb-6">
            <Lock className="w-6 h-6" />
          </div>

          <h1 className="text-2xl font-bold text-text-primary tracking-tight mb-2">
            Inquiry Management
          </h1>
          <p className="text-xs text-text-secondary mb-6">
            Enter the authorized admin key to access client leads and project inquiries.
          </p>

          {error && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-text-muted uppercase mb-1">
                Admin Access Key
              </label>
              <input
                type="password"
                required
                value={passcode}
                onChange={e => setPasscode(e.target.value)}
                placeholder="Enter access key"
                className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary/60 text-sm text-text-primary focus:outline-none"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              variant="primary"
              className="w-full justify-center"
            >
              {loading ? "Authenticating..." : "Unlock Dashboard"}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-border-subtle gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
              <span className="text-xs font-mono uppercase text-accent-cyan tracking-wider">
                Production Lead Engine
              </span>
            </div>
            <h1 className="text-3xl font-bold text-text-primary tracking-tight">
              Client Inquiries & RFPs
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchInquiries(passcode, statusFilter)}
              className="p-2 rounded-xl bg-bg-card border border-border-subtle text-text-muted hover:text-text-primary transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem("admin_key");
                setIsAuthenticated(false);
              }}
              className="px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-colors text-xs font-mono"
            >
              Lock Dashboard
            </button>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by client name, email, company, or project type..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-bg-card border border-border-subtle text-xs text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {STATUSES.map(st => (
              <button
                key={st}
                onClick={() => {
                  setStatusFilter(st);
                  fetchInquiries(passcode, st);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  statusFilter === st
                    ? "bg-accent-primary text-white"
                    : "bg-bg-card text-text-muted hover:text-text-primary border border-border-subtle"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Table View */}
        <div className="rounded-2xl bg-bg-card border border-border-subtle overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-border-subtle bg-bg-elevated/50 font-mono uppercase text-text-muted text-[11px]">
                  <th className="py-3 px-4">Client</th>
                  <th className="py-3 px-4">Project Type</th>
                  <th className="py-3 px-4">Budget / Timeline</th>
                  <th className="py-3 px-4">Contact Via</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {filteredInquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-text-muted font-mono">
                      No inquiries match the active criteria.
                    </td>
                  </tr>
                ) : (
                  filteredInquiries.map(inq => (
                    <tr key={inq.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-text-primary">{inq.name}</div>
                        <div className="text-text-secondary">{inq.email}</div>
                        {inq.company && <div className="text-[10px] text-text-muted">{inq.company}</div>}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-medium text-text-primary">{inq.project_type}</span>
                      </td>
                      <td className="py-3.5 px-4 font-mono">
                        <div>{inq.budget || "N/A"}</div>
                        <div className="text-[10px] text-text-muted">{inq.timeline || "Flexible"}</div>
                      </td>
                      <td className="py-3.5 px-4 font-mono">
                        <span className="text-accent-cyan">{inq.preferred_contact}</span>
                        {inq.phone && <div className="text-[10px] text-text-muted">{inq.phone}</div>}
                      </td>
                      <td className="py-3.5 px-4 text-text-muted font-mono">
                        {new Date(inq.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-3.5 px-4">
                        <select
                          value={inq.status}
                          onChange={e => handleStatusChange(inq.id, e.target.value as any)}
                          className="bg-bg-elevated border border-border-subtle rounded px-2 py-1 text-[11px] font-mono text-text-primary focus:outline-none"
                        >
                          {STATUSES.filter(s => s !== "all").map(st => (
                            <option key={st} value={st}>
                              {st}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => setSelectedInquiry(inq)}
                          className="p-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-accent-cyan transition-colors"
                          title="View Full Brief"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Inspection Modal */}
        {selectedInquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-bg-card border border-border-subtle p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border-subtle">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{selectedInquiry.name}</h3>
                  <p className="text-xs text-accent-cyan font-mono">{selectedInquiry.email}</p>
                </div>
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="p-2 rounded-xl bg-white/[0.04] text-text-muted hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono mb-6">
                <div>
                  <span className="text-text-muted">Company: </span>
                  <span className="text-text-primary">{selectedInquiry.company || "None"}</span>
                </div>
                <div>
                  <span className="text-text-muted">Phone: </span>
                  <span className="text-text-primary">{selectedInquiry.phone || "None"}</span>
                </div>
                <div>
                  <span className="text-text-muted">Project: </span>
                  <span className="text-text-primary">{selectedInquiry.project_type}</span>
                </div>
                <div>
                  <span className="text-text-muted">Preferred: </span>
                  <span className="text-accent-success">{selectedInquiry.preferred_contact}</span>
                </div>
                <div>
                  <span className="text-text-muted">Budget: </span>
                  <span className="text-text-primary">{selectedInquiry.budget}</span>
                </div>
                <div>
                  <span className="text-text-muted">Timeline: </span>
                  <span className="text-text-primary">{selectedInquiry.timeline}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-bg-elevated border border-border-subtle mb-6">
                <div className="text-[10px] font-mono uppercase text-text-muted mb-2">Project Brief</div>
                <p className="text-sm text-text-primary whitespace-pre-wrap leading-relaxed">
                  {selectedInquiry.message}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                <a
                  href={`mailto:${selectedInquiry.email}?subject=Re:%20${encodeURIComponent(selectedInquiry.project_type)}%20Inquiry`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-accent-cyan hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Reply via Email</span>
                </a>
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="px-4 py-2 rounded-xl bg-white/[0.06] text-xs font-mono text-text-primary hover:bg-white/[0.1]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
