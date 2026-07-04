import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function MadrasahApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchApplications();
  }, []);

  async function fetchApplications() {
    setLoading(true);
    const { data, error } = await supabase
      .from("madrasah_admissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setApplications(data);
    setLoading(false);
  }

  async function toggleStatus(id, currentStatus) {
    const newStatus = currentStatus === "pending" ? "paid" : "pending";
    const { error } = await supabase
      .from("madrasah_admissions")
      .update({ status: newStatus })
      .eq("id", id);

    if (!error) {
      setApplications((prev) =>
        prev.map((app) =>
          app.id === id ? { ...app, status: newStatus } : app,
        ),
      );
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin/login");
  }

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4 border-b border-stroke pb-4">
        <div className="flex items-center gap-6">
          <span className="text-sm font-body font-semibold text-forest border-b-2 border-gold pb-1">
            Madrasah Applications
          </span>
          <Link
            to="/admin/prayer-group-applications"
            className="text-sm font-body text-charcoal hover:text-emerald transition-colors duration-300"
          >
            Prayer Group Members
          </Link>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm font-body text-charcoal hover:text-emerald transition-colors duration-300"
        >
          Log out
        </button>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-display text-forest">
            Madrasah Applications
          </h1>
          <p className="text-sm font-body text-charcoal mt-1">
            {applications.length} total applications
          </p>
        </div>
      </div>

      {loading ? (
        <p className="text-sm font-body text-charcoal">Loading...</p>
      ) : applications.length === 0 ? (
        <p className="text-sm font-body text-charcoal">No applications yet.</p>
      ) : (
        <div className="overflow-x-auto border border-stroke">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="bg-neutral text-left">
                <th className="p-4 text-xs uppercase tracking-wide text-gold">
                  Name
                </th>
                <th className="p-4 text-xs uppercase tracking-wide text-gold">
                  Course
                </th>
                <th className="p-4 text-xs uppercase tracking-wide text-gold">
                  Contact
                </th>
                <th className="p-4 text-xs uppercase tracking-wide text-gold">
                  Days / Time
                </th>
                <th className="p-4 text-xs uppercase tracking-wide text-gold">
                  Applied
                </th>
                <th className="p-4 text-xs uppercase tracking-wide text-gold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-t border-stroke">
                  <td className="p-4 text-charcoal">
                    {app.full_name}
                    <div className="text-xs text-charcoal/60">
                      {app.age} yrs · {app.city}, {app.country}
                    </div>
                  </td>
                  <td className="p-4 text-charcoal">{app.course}</td>
                  <td className="p-4 text-charcoal">
                    <div>{app.phone}</div>
                    <div className="text-xs text-charcoal/60">{app.email}</div>
                  </td>
                  <td className="p-4 text-charcoal">
                    {app.preferred_days} · {app.preferred_time}
                  </td>
                  <td className="p-4 text-charcoal text-xs">
                    {new Date(app.created_at).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => toggleStatus(app.id, app.status)}
                      className={`
                        px-3 py-1.5 text-xs font-body
                        ${
                          app.status === "paid"
                            ? "bg-emerald text-white"
                            : "bg-gold/20 text-gold"
                        }
                        hover:opacity-80 transition-opacity duration-300
                      `}
                    >
                      {app.status === "paid" ? "✓ Paid" : "Pending"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
