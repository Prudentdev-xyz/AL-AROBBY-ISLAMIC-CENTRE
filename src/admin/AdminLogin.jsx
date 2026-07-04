import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

const inputClass = `
  w-full px-4 py-3
  bg-white border border-stroke
  text-sm font-body text-charcoal
  focus:outline-none focus:border-gold
  transition-colors duration-300
`;

const labelClass =
  "text-xs font-body uppercase tracking-wide text-gold mb-2 block";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setSubmitting(false);

    if (signInError) {
      setError("Invalid email or password.");
      return;
    }

    navigate("/admin/madrasah-applications");
  }

  return (
    <section className="flex items-center justify-center min-h-screen px-6 bg-forest">
      <div className="w-full max-w-sm bg-white p-10">
        <h1 className="text-2xl font-display text-forest mb-1">Admin Login</h1>
        <p className="text-sm font-body text-charcoal mb-8">
          Al Arobby Academy &amp; Foundation
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className={labelClass}>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-sm font-body text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="
              mt-2 px-8 py-4
              bg-forest text-sm font-body text-white
              hover:bg-emerald transition-colors duration-300
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {submitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </section>
  );
}
