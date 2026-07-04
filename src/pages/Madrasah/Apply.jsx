import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";
import { courses } from "../../data/courses";

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

const inputClass = `
  w-full px-4 py-3
  bg-white border border-stroke
  text-sm font-body text-charcoal
  focus:outline-none focus:border-gold
  transition-colors duration-300
`;

const labelClass =
  "text-xs font-body uppercase tracking-wide text-gold mb-2 block";

export default function Apply() {
  const [searchParams] = useSearchParams();
  const preselectedCourse = searchParams.get("course") || "";

  const [form, setForm] = useState({
    full_name: "",
    age: "",
    city: "",
    country: "",
    course: preselectedCourse,
    preferred_days: "",
    preferred_time: "",
    phone: "",
    email: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (preselectedCourse) {
      setForm((prev) => ({ ...prev, course: preselectedCourse }));
    }
  }, [preselectedCourse]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const { error: insertError } = await supabase
      .from("madrasah_admissions")
      .insert({
        full_name: form.full_name,
        age: parseInt(form.age, 10),
        city: form.city,
        country: form.country,
        course: form.course,
        preferred_days: form.preferred_days,
        preferred_time: form.preferred_time,
        phone: form.phone,
        email: form.email,
        status: "pending",
      });

    if (insertError) {
      setSubmitting(false);
      setError(
        "Something went wrong submitting your application. Please try again.",
      );
      console.error(insertError);
      return;
    }

    // Fire the confirmation email (non-blocking — don't fail the whole
    // form if the email fails, since the application is already saved)
    try {
      const res = await fetch("/api/send-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.full_name,
          email: form.email,
          course: form.course,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        console.error("Email API responded with error:", errData);
      }
    } catch (emailError) {
      console.error("Email failed to send:", emailError);
    }

    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <FadeIn>
          <CheckCircle2 size={48} className="text-emerald mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-display text-forest">
            Application Received
          </h1>
          <p className="mt-4 max-w-lg mx-auto text-base font-body text-charcoal leading-relaxed">
            JazakAllahu khayran, {form.full_name.split(" ")[0]}! Thank you for
            applying for <span className="text-emerald">{form.course}</span>. A
            confirmation email with payment details is on its way to{" "}
            {form.email}. Once you've made payment, send your proof to us on
            WhatsApp to complete your enrolment.
          </p>

          <a
            href={`https://wa.me/2348168919665?text=${encodeURIComponent(
              `Assalamu Alaikum, I just applied for ${form.course} at Al Arobby Academy. My name is ${form.full_name}. I'll send payment proof here.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="
              inline-block mt-8 px-8 py-4
              bg-forest text-sm font-body text-white
              hover:bg-emerald transition-colors duration-300
            "
          >
            Message Us on WhatsApp
          </a>
          <div>
            <Link
              to="/madrasah"
              className="inline-block mt-6 text-sm font-body text-charcoal hover:text-emerald transition-colors duration-300"
            >
              ← Back to Madrasah
            </Link>
          </div>
        </FadeIn>
      </section>
    );
  }

  return (
    <>
      <section className="flex flex-col items-start justify-center h-[35vh] md:h-[40vh] px-6 md:px-16 bg-forest">
        <div className="max-w-3xl mx-auto md:mx-0">
          <Link
            to="/madrasah"
            className="flex items-center gap-2 mb-6 text-sm font-body text-champagne hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            Back to Madrasah
          </Link>
          <h1 className="text-3xl md:text-5xl font-display text-white font-bold md:font-semibold leading-tight">
            Admission Application
          </h1>
          <p className="mt-4 max-w-xl text-base font-body text-champagne font-semibold md:font-normal leading-relaxed">
            Fill in your details below to apply for a course at Al Arobby
            Academy for Qur'an & Islamic Studies.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 max-w-2xl mx-auto">
        <FadeIn>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                name="full_name"
                required
                value={form.full_name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Age</label>
                <input
                  type="number"
                  name="age"
                  required
                  min="1"
                  value={form.age}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your age"
                />
              </div>
              <div>
                <label className={labelClass}>Course</label>
                <select
                  name="course"
                  required
                  value={form.course}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a course</option>
                  {courses.map((c) => (
                    <option key={c.slug} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>City</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={form.city}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your city"
                />
              </div>
              <div>
                <label className={labelClass}>Country</label>
                <input
                  type="text"
                  name="country"
                  required
                  value={form.country}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your country"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Preferred Class Days</label>
                <select
                  name="preferred_days"
                  required
                  value={form.preferred_days}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select an option</option>
                  <option value="Weekdays">Weekdays</option>
                  <option value="Weekends">Weekends</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Preferred Class Time</label>
                <select
                  name="preferred_time"
                  required
                  value={form.preferred_time}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select an option</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+234..."
                />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {error && <p className="text-sm font-body text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="
                mt-4 px-8 py-4
                bg-forest text-sm font-body text-white
                hover:bg-emerald transition-colors duration-300
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </FadeIn>
      </section>
    </>
  );
}
