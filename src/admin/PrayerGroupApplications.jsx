import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function PrayerGroupApplications() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMembers();
  }, []);

  async function fetchMembers() {
    setLoading(true);
    const { data, error } = await supabase
      .from("prayer_group_members")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setMembers(data);
    setLoading(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin/login");
  }

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4 border-b border-stroke pb-4">
        <div className="flex items-center gap-6">
          <Link
            to="/admin/madrasah-applications"
            className="text-sm font-body text-charcoal hover:text-emerald transition-colors duration-300"
          >
            Madrasah Applications
          </Link>
          <span className="text-sm font-body font-semibold text-forest border-b-2 border-gold pb-1">
            Prayer Group Members
          </span>
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
            Prayer Group Members
          </h1>
          <p className="text-sm font-body text-charcoal mt-1">
            {members.length} total members
          </p>
        </div>
      </div>

      {loading ? (
        <p className="text-sm font-body text-charcoal">Loading...</p>
      ) : members.length === 0 ? (
        <p className="text-sm font-body text-charcoal">No members yet.</p>
      ) : (
        <div className="overflow-x-auto border border-stroke">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="bg-neutral text-left">
                <th className="p-4 text-xs uppercase tracking-wide text-gold">
                  Photo
                </th>
                <th className="p-4 text-xs uppercase tracking-wide text-gold">
                  Name
                </th>
                <th className="p-4 text-xs uppercase tracking-wide text-gold">
                  Social
                </th>
                <th className="p-4 text-xs uppercase tracking-wide text-gold">
                  Contact
                </th>
                <th className="p-4 text-xs uppercase tracking-wide text-gold">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="border-t border-stroke">
                  <td className="p-4">
                    {member.photo_url ? (
                      <img
                        src={member.photo_url}
                        alt={member.full_name}
                        className="w-12 h-12 object-cover rounded-full border border-gold"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-emerald text-white flex items-center justify-center text-sm font-body">
                        {member.full_name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-charcoal">{member.full_name}</td>
                  <td className="p-4 text-charcoal text-xs">
                    <div>TikTok: {member.tiktok_handle}</div>
                    <div>IG: {member.instagram_handle}</div>
                  </td>
                  <td className="p-4 text-charcoal">
                    <div>{member.phone}</div>
                    <div className="text-xs text-charcoal/60">
                      {member.email}
                    </div>
                  </td>
                  <td className="p-4 text-charcoal text-xs">
                    {new Date(member.created_at).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
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
