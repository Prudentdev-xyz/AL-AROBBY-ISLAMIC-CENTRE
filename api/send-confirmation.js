export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { full_name, email, course } = req.body;

  if (!full_name || !email || !course) {
    return res.status(400).json({ error: "Missing required fields" });
  }

 const courseDetails = {
  "Quran Reading (Qa'idah & Tajweed)": {
    summary:
      "This course takes you from the foundations of Qa'idah through the full rules of Tajweed, so you can recite the Qur'an with correct pronunciation, fluency, and confidence. Whether you're starting from zero or refining years of practice, you'll learn to read with proper Tarteel and a strong grasp of every letter and sound.",
  },
  "Quran Memorization (Hifz)": {
    summary:
      "This is a structured Hifz programme built around consistency and proper revision (Murajah), not rushed memorization. You'll follow a personalized memorization plan — whether for a few chapters or the entire Qur'an — with close guidance from your teacher to make sure what you memorize stays with you for life.",
  },
  "Islamic Studies": {
    summary:
      "This course covers Aqeedah, Fiqh, Hadith, and Seerah, giving you both sound Islamic knowledge and practical guidance for daily life. You'll build a firm understanding of your beliefs, learn the rulings that shape worship and everyday actions, study the Prophet's ﷺ life and teachings, and develop the Islamic manners (Akhlaq) that bring it all together.",
  },
};

  const detail =
    courseDetails[course]?.summary ||
    "Thank you for your interest in studying with us.";

  const firstName = full_name.split(" ")[0];

  const emailHtml = `
    <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
      <div style="background-color: #1b3a2f; padding: 32px 24px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Al Arobby Academy</h1>
        <p style="color: #d4af37; margin: 8px 0 0; font-size: 13px; letter-spacing: 1px;">FOR QUR'AN &amp; ISLAMIC STUDIES</p>
      </div>
      <div style="padding: 32px 24px;">
        <p style="font-size: 16px; line-height: 1.6;">Assalamu Alaikum, ${firstName},</p>
        <p style="font-size: 15px; line-height: 1.6;">
          JazakAllahu khayran for applying for <strong>${course}</strong>.
        </p>
        <p style="font-size: 15px; line-height: 1.6;">${detail}</p>

        <div style="background-color: #f5f0e6; border-left: 4px solid #d4af37; padding: 16px 20px; margin: 24px 0;">
          <p style="margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #b8860b;">Payment Details</p>

          <p style="margin: 16px 0 4px; font-size: 13px; font-weight: bold; color: #1b3a2f;">🇳🇬 NGN Account</p>
          <p style="margin: 2px 0; font-size: 14px;">Bank Name: Wema Bank</p>
          <p style="margin: 2px 0; font-size: 14px;">Account Name: Muhammed Adeniyi Adesina</p>
          <p style="margin: 2px 0; font-size: 14px;">Account Number: 7650714516</p>

          <p style="margin: 16px 0 4px; font-size: 13px; font-weight: bold; color: #1b3a2f;">🇪🇺 EU Account</p>
          <p style="margin: 2px 0; font-size: 14px;">Bank Name: Clear Junction Limited</p>
          <p style="margin: 2px 0; font-size: 14px;">Account Name: Muhammed Adeniyi Adesina</p>
          <p style="margin: 2px 0; font-size: 14px;">Account Number: 42824007</p>
          <p style="margin: 2px 0; font-size: 14px;">IBAN: GB40CLJU04130742824007</p>
          <p style="margin: 2px 0; font-size: 14px;">Swift Code: CLJUGB21XXX</p>
          <p style="margin: 2px 0; font-size: 14px;">Sort Code: 041307</p>
          <p style="margin: 2px 0; font-size: 13px; color: #555;">Clear Junction Limited, 4th Floor Imperial House, 15 Kingsway, London, WC2B 6UN</p>

          <p style="margin: 16px 0 4px; font-size: 13px; font-weight: bold; color: #1b3a2f;">🇬🇧 UK Account</p>
          <p style="margin: 2px 0; font-size: 14px;">Bank Name: Clear Junction Limited</p>
          <p style="margin: 2px 0; font-size: 14px;">Account Name: Muhammed Adeniyi Adesina</p>
          <p style="margin: 2px 0; font-size: 14px;">Account Number: 42824007</p>
          <p style="margin: 2px 0; font-size: 14px;">IBAN: GB40CLJU04130742824007</p>
          <p style="margin: 2px 0; font-size: 14px;">Swift Code: CLJUGB21XXX</p>
          <p style="margin: 2px 0; font-size: 14px;">Sort Code: 041307</p>

          <p style="margin: 16px 0 4px; font-size: 13px; font-weight: bold; color: #1b3a2f;">🇺🇸 US Account</p>
          <p style="margin: 2px 0; font-size: 14px;">Bank Name: Lead</p>
          <p style="margin: 2px 0; font-size: 14px;">Account Name: Muhammed Adeniyi Adesina</p>
          <p style="margin: 2px 0; font-size: 14px;">Account Number: 214838601173</p>
          <p style="margin: 2px 0; font-size: 14px;">Account Type: Checking</p>
          <p style="margin: 2px 0; font-size: 14px;">Wire Routing: 101019644</p>
          <p style="margin: 2px 0; font-size: 14px;">ACH Routing: 101019644</p>
          <p style="margin: 2px 0; font-size: 13px; color: #555;">Lead, 1801 Main St., Kansas City, MO 64108</p>
        </div>

        <p style="font-size: 15px; line-height: 1.6;">
          Once you've made payment, please send your proof of payment via WhatsApp
          to confirm your enrolment:
        </p>

        <div style="text-align: center; margin: 28px 0;">
          
            href="https://wa.me/2348168919665?text=${encodeURIComponent(
              `Assalamu Alaikum, I've made payment for ${course} at Al Arobby Academy. My name is ${full_name}. Here's my proof of payment.`
            )}"
            style="background-color: #1b3a2f; color: #f5e6c8; padding: 14px 28px; text-decoration: none; font-size: 14px; display: inline-block;"
          >
            Message Us on WhatsApp
          </a>
        </div>

        <p style="font-size: 13px; color: #666; line-height: 1.6; margin-top: 32px;">
          If you have any questions, feel free to reach out to us anytime.
        </p>
      </div>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Al Arobby Academy <onboarding@resend.dev>",
        to: email,
        subject: `Application Received — ${course}`,
        html: emailHtml,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend error:", data);
      return res.status(500).json({ error: "Failed to send email", details: data });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}