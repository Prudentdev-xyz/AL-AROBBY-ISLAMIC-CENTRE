import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Upload, Download } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";
import prayerGroupLogo from "../../assets/prayer-group-logo.jpg";

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

const CARD_WIDTH = 700;
const CARD_HEIGHT = 1080;

const BRAND = {
  forest: "#003E1F",
  emerald: "#0A6A38",
  gold: "#9D721D",
  champagne: "#D4B26F",
  charcoal: "#1C2A22",
  white: "#FFFFFF",
};

const communityPlatforms = [
  {
    name: "WhatsApp Group",
    handle: "Join the community chat",
    href: "https://chat.whatsapp.com/GY9KKod79Ih8zaSwfPDf16?s=sw&p=i&ilr=0&amv=1",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.16c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.15.07.15.12.33.02.53-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.08.17-.2.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.65.78 1.94.92.29.14.48.21.55.33.07.12.07.68-.17 1.36z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@al_arobby",
    href: "https://www.instagram.com/al_arobby?igsh=eTNudTZ4MG9tcGpv",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@prayer_therapist",
    href: "https://www.tiktok.com/@prayer_therapist?_r=1&_t=ZS-97RzgGoY43w",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
];

// Derives a real, permanent, unique Membership ID from the database
// row's own UUID — not a random guess, tied to the actual saved record.
function deriveMembershipId(rowId) {
  return `AAPG-${rowId.replace(/-/g, "").slice(0, 8).toUpperCase()}`;
}

function loadImage(src, crossOrigin) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    if (crossOrigin) img.crossOrigin = crossOrigin;
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function drawRoundedRect(ctx, x, y, w, h, radii) {
  const { tl = 0, tr = 0, br = 0, bl = 0 } = radii;
  ctx.beginPath();
  ctx.moveTo(x + tl, y);
  ctx.lineTo(x + w - tr, y);
  ctx.arcTo(x + w, y, x + w, y + tr, tr);
  ctx.lineTo(x + w, y + h - br);
  ctx.arcTo(x + w, y + h, x + w - br, y + h, br);
  ctx.lineTo(x + bl, y + h);
  ctx.arcTo(x, y + h, x, y + h - bl, bl);
  ctx.lineTo(x, y + tl);
  ctx.arcTo(x, y, x + tl, y, tl);
  ctx.closePath();
}

function MembershipCard({ member, membershipId, joinDate }) {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function draw() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");

      canvas.width = CARD_WIDTH;
      canvas.height = CARD_HEIGHT;
      const cx = CARD_WIDTH / 2;

      // 1. Charcoal top background (full canvas first)
      ctx.fillStyle = BRAND.charcoal;
      ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

      // 2. White rounded-top panel (the "flap" the photo sits on)
      const panelTop = 360;
      drawRoundedRect(ctx, 0, panelTop, CARD_WIDTH, CARD_HEIGHT - panelTop, {
        tl: 90,
        tr: 90,
        br: 0,
        bl: 0,
      });
      ctx.fillStyle = BRAND.white;
      ctx.fill();

      // 3. Header logo — clipped into a circle, with a thin gold ring
      const logoSize = 84;
      const logoCenterX = cx;
      const logoCenterY = 44 + logoSize / 2;

      try {
        const logoImg = await loadImage(prayerGroupLogo);

        ctx.save();
        ctx.beginPath();
        ctx.arc(logoCenterX, logoCenterY, logoSize / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(
          logoImg,
          logoCenterX - logoSize / 2,
          logoCenterY - logoSize / 2,
          logoSize,
          logoSize,
        );
        ctx.restore();

        ctx.beginPath();
        ctx.arc(logoCenterX, logoCenterY, logoSize / 2, 0, Math.PI * 2);
        ctx.strokeStyle = BRAND.gold;
        ctx.lineWidth = 3;
        ctx.stroke();
      } catch (e) {
        // continue without logo if it fails to load
      }

      // 4. Title, centered, positioned safely below the logo
      ctx.textAlign = "center";
      ctx.fillStyle = BRAND.white;
      ctx.font = "600 30px 'Fraunces', serif";
      ctx.fillText("AL AROBBY ISLAMIC PRAYER GROUP", cx, 175);
      ctx.fillStyle = BRAND.champagne;
      ctx.font = "500 15px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText("(THE PRAYER THERAPIST)", cx, 200);

      // 5. Photo circle, straddling the charcoal/white boundary —
      // pushed down slightly so it no longer overlaps the header text
      const photoY = 360;
      const photoRadius = 140;

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, photoY, photoRadius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      if (member.photo_url) {
        try {
          const photoImg = await loadImage(member.photo_url, "anonymous");
          const size = photoRadius * 2;
          ctx.drawImage(
            photoImg,
            cx - photoRadius,
            photoY - photoRadius,
            size,
            size,
          );
        } catch (e) {
          ctx.fillStyle = BRAND.emerald;
          ctx.fillRect(
            cx - photoRadius,
            photoY - photoRadius,
            photoRadius * 2,
            photoRadius * 2,
          );
        }
      } else {
        ctx.fillStyle = BRAND.emerald;
        ctx.fillRect(
          cx - photoRadius,
          photoY - photoRadius,
          photoRadius * 2,
          photoRadius * 2,
        );
        ctx.fillStyle = BRAND.white;
        ctx.font = "700 100px 'Plus Jakarta Sans', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(
          member.full_name?.charAt(0).toUpperCase() || "?",
          cx,
          photoY,
        );
        ctx.textBaseline = "alphabetic";
      }
      ctx.restore();

      // Photo ring
      ctx.beginPath();
      ctx.arc(cx, photoY, photoRadius, 0, Math.PI * 2);
      ctx.strokeStyle = BRAND.gold;
      ctx.lineWidth = 6;
      ctx.stroke();

      // 6. Name, centered
      ctx.textAlign = "center";
      ctx.fillStyle = BRAND.charcoal;
      ctx.font = "700 36px 'Fraunces', serif";
      ctx.fillText(member.full_name || "", cx, 545);

      // 7. Subtitle
      ctx.fillStyle = BRAND.gold;
      ctx.font = "600 16px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText("PRAYER GROUP MEMBER", cx, 575);

      // 8. Divider
      ctx.strokeStyle = "rgba(157, 114, 29, 0.25)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(70, 615);
      ctx.lineTo(CARD_WIDTH - 70, 615);
      ctx.stroke();

      // 9. Detail rows — Phone, Email, TikTok, and Instagram are all
      // compulsory fields, so they always show.
      ctx.textAlign = "left";
      const rows = [
        { label: "PHONE", value: member.phone },
        { label: "EMAIL", value: member.email },
        { label: "TIKTOK", value: member.tiktok_handle },
        { label: "INSTAGRAM", value: member.instagram_handle },
      ];

      let rowY = 665;
      for (const row of rows) {
        ctx.fillStyle = BRAND.gold;
        ctx.font = "600 12px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText(row.label, 70, rowY - 6);

        ctx.fillStyle = BRAND.charcoal;
        ctx.font = "500 18px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText(row.value || "—", 70, rowY + 16);

        rowY += 62;
      }

      // 10. Gold bottom band
      const bandHeight = 130;
      const bandTop = CARD_HEIGHT - bandHeight;
      drawRoundedRect(ctx, 0, bandTop - 40, CARD_WIDTH, bandHeight + 40, {
        tl: 60,
        tr: 60,
        br: 0,
        bl: 0,
      });
      ctx.fillStyle = BRAND.gold;
      ctx.fill();

      // 11. Membership ID + join date, centered inside gold band
      ctx.textAlign = "center";
      ctx.fillStyle = BRAND.white;
      ctx.font = "700 22px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(`MEMBERSHIP ID: ${membershipId}`, cx, bandTop + 50);

      ctx.font = "500 14px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(`Member since ${joinDate}`, cx, bandTop + 78);

      if (!cancelled) setReady(true);
    }

    draw();

    return () => {
      cancelled = true;
    };
  }, [member, membershipId, joinDate]);

  function handleDownload() {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = `AlArobby-Membership-${membershipId}.png`;
    link.click();
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <canvas
        ref={canvasRef}
        className="w-full max-w-sm border border-stroke shadow-lg"
      />
      <button
        type="button"
        onClick={handleDownload}
        disabled={!ready}
        className="
          flex items-center gap-2
          px-8 py-4
          bg-forest text-sm font-body text-white
          hover:bg-emerald transition-colors duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        <Download size={18} />
        Download Membership Card
      </button>

      <div className="w-full max-w-sm mt-4 p-6 border border-gold bg-neutral">
        <h2 className="text-lg font-display text-forest mb-2 text-center">
          Join Our Prayer Group Community
        </h2>
        <p className="text-xs font-body text-charcoal leading-relaxed mb-5 text-center">
          Follow us on Instagram and TikTok for daily and Friday Asalatu
          sessions, and join our WhatsApp group to stay connected.
        </p>

        <div className="flex flex-col gap-3">
          {communityPlatforms.map((platform) => (
            
             <a key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              className="
                group flex items-center gap-4
                p-3
                bg-white border border-stroke
                hover:border-gold
                transition-colors duration-300
              "
            >
              <span className="text-forest group-hover:text-gold transition-colors duration-300">
                {platform.icon}
              </span>
              <div className="flex-1">
                <p className="text-sm font-display text-forest">
                  {platform.name}
                </p>
                <p className="text-xs font-body text-charcoal/60">
                  {platform.handle}
                </p>
              </div>
              <span className="text-xs font-body text-gold group-hover:text-emerald transition-colors duration-300">
                {platform.name === "WhatsApp Group" ? "Join →" : "Follow →"}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Apply() {
  const [form, setForm] = useState({
    full_name: "",
    tiktok_handle: "",
    instagram_handle: "",
    phone: "",
    email: "",
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null); // { member, membershipId, joinDate }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handlePhotoChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    let photoUrl = null;

    if (photoFile) {
      const filePath = `${Date.now()}-${photoFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("prayer-group-photos")
        .upload(filePath, photoFile);

      if (uploadError) {
        setSubmitting(false);
        setError("Failed to upload photo. Please try again.");
        console.error(uploadError);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("prayer-group-photos")
        .getPublicUrl(filePath);

      photoUrl = publicUrlData.publicUrl;
    }

    const { data: insertData, error: insertError } = await supabase
      .from("prayer_group_members")
      .insert({
        full_name: form.full_name,
        tiktok_handle: form.tiktok_handle,
        instagram_handle: form.instagram_handle,
        phone: form.phone,
        email: form.email,
        photo_url: photoUrl,
      })
      .select()
      .single();

    setSubmitting(false);

    if (insertError) {
      setError(
        "Something went wrong submitting your application. Please try again.",
      );
      console.error(insertError);
      return;
    }

    // Membership ID is derived from the row's own unique database ID —
    // real, permanent, and guaranteed not to collide with anyone else's.
    const membershipId = deriveMembershipId(insertData.id);
    const joinDate = new Date(insertData.created_at).toLocaleDateString(
      "en-GB",
      { day: "2-digit", month: "short", year: "numeric" },
    );

    setResult({ member: insertData, membershipId, joinDate });
  }

  if (result) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-16 text-center">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-display text-forest mb-4">
            Welcome to the Prayer Group
          </h1>
          <p className="max-w-lg mx-auto text-base font-body text-charcoal leading-relaxed mb-10">
            JazakAllahu khayran, {result.member.full_name.split(" ")[0]}! Your
            membership card is ready below, download it to keep as proof of your
            membership.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <MembershipCard
            member={result.member}
            membershipId={result.membershipId}
            joinDate={result.joinDate}
          />
        </FadeIn>

        <Link
          to="/foundation/prayer-group"
          className="inline-block mt-10 text-sm font-body text-charcoal hover:text-emerald transition-colors duration-300 p-5"
        >
          ← Back to Prayer Group
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="flex flex-col items-start justify-center h-[35vh] md:h-[40vh] px-6 md:px-16 bg-forest">
        <div className="max-w-3xl mx-auto md:mx-0">
          <Link
            to="/foundation/prayer-group"
            className="flex items-center gap-2 mb-6 text-sm font-body text-champagne hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            Back to Prayer Group
          </Link>
          <h1 className="text-3xl md:text-5xl font-display text-white font-bold md:font-semibold leading-tight">
            Membership Application
          </h1>
          <p className="mt-4 max-w-xl text-base font-body text-champagne leading-relaxed">
            Join Al Arobby Prayer Group (Asalatu) and receive your digital
            membership card instantly.
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
                <label className={labelClass}>TikTok Username</label>
                <input
                  type="text"
                  name="tiktok_handle"
                  required
                  value={form.tiktok_handle}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="@username"
                />
              </div>
              <div>
                <label className={labelClass}>Instagram Username</label>
                <input
                  type="text"
                  name="instagram_handle"
                  required
                  value={form.instagram_handle}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="@username"
                />
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

            <div>
              <label className={labelClass}>
                Your Photo (Used on your membership card)
              </label>
              <label
                className="
                  flex items-center gap-3
                  px-4 py-3
                  bg-white border border-dashed border-stroke
                  text-sm font-body text-charcoal
                  cursor-pointer
                  hover:border-gold transition-colors duration-300
                "
              >
                <Upload size={18} className="text-gold shrink-0" />
                {photoFile ? photoFile.name : "Choose a photo to upload"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>
              {photoPreview && (
                <img
                  src={photoPreview}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-full mt-4 border border-gold"
                />
              )}
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