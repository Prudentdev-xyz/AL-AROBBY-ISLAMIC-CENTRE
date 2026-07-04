import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  ClipboardList,
  Wallet,
  GraduationCap,
  ArrowLeft,
  Users,
} from "lucide-react";
import { courses, sharedCourseInfo } from "../../data/courses";

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

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return <Navigate to="/madrasah" replace />;
  }

  return (
    <>
      {/* Hero */}
      <section
        className="
          flex flex-col items-start justify-center
          h-[40vh] md:h-[50vh]
          px-6 md:px-16
          bg-forest
        "
      >
        <div className="max-w-3xl mx-auto md:mx-0">
          <Link
            to="/madrasah"
            className="
              flex items-center gap-2
              mb-6
              text-sm font-body text-champagne
              hover:text-gold
              transition-colors duration-300
            "
          >
            <ArrowLeft size={16} />
            Back to Madrasah
          </Link>
          <h1 className="text-3xl md:text-5xl font-display text-white font-bold md:font-semibold leading-tight">
            {course.title}
          </h1>
          <p className="mt-4 max-w-xl text-base md:text-lg font-body text-champagne font-semibold font-medium leading-relaxed">
            {course.overview}
          </p>
        </div>
      </section>

      {/* Course description */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs font-body tracking-widest uppercase text-emerald mb-3">
            Course overview
          </p>
          <h2 className="text-3xl font-display text-forest mb-6">
            About this course
          </h2>
          <p className="text-base font-body leading-relaxed text-charcoal">
            {course.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-start gap-3 mt-10 p-6 bg-neutral border-l-4 border-emerald">
            <Users size={22} className="text-emerald shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-display text-forest mb-1">
                Who this course is for
              </p>
              <p className="text-sm font-body text-charcoal leading-relaxed">
                {course.whoItsFor}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Learning outcomes */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-display text-forest">
            Learning outcomes
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {course.outcomes.map((outcome, index) => (
            <FadeIn key={outcome} delay={0.1 * index}>
              <div className="flex items-start gap-3 p-6 border border-stroke">
                <CheckCircle2 size={22} className="text-emerald shrink-0" />
                <p className="text-sm font-body text-charcoal">{outcome}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Shared course info */}
      <section className="px-6 py-20 bg-neutral">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display text-forest">
              Course details
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-3 p-8 bg-white h-full">
                <div className="flex items-center gap-3">
                  <Clock size={22} className="text-gold" />
                  <h3 className="text-lg font-display text-forest">Duration</h3>
                </div>
                <p className="text-sm font-body text-charcoal leading-relaxed">
                  {sharedCourseInfo.duration}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col gap-3 p-8 bg-white h-full">
                <div className="flex items-center gap-3">
                  <Wallet size={22} className="text-gold" />
                  <h3 className="text-lg font-display text-forest">
                    Tuition fees
                  </h3>
                </div>
                <p className="text-sm font-body text-charcoal leading-relaxed">
                  {sharedCourseInfo.tuitionFees}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-3 p-8 bg-white h-full">
                <div className="flex items-center gap-3">
                  <ClipboardList size={22} className="text-gold" />
                  <h3 className="text-lg font-display text-forest">
                    Admission requirements
                  </h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {sharedCourseInfo.admissionRequirements.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-body text-charcoal"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex flex-col gap-3 p-8 bg-white h-full">
                <div className="flex items-center gap-3">
                  <GraduationCap size={22} className="text-gold" />
                  <h3 className="text-lg font-display text-forest">
                    Course instructor
                  </h3>
                </div>
                <p className="text-sm font-body text-charcoal leading-relaxed">
                  {sharedCourseInfo.instructorInfo}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Apply / Enrol CTA */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl font-display text-forest">
            Ready to begin your journey?
          </h2>
          <p className="mt-4 text-base font-body text-charcoal">
            Apply now to enrol in {course.title} and take the next step in
            deepening your Quranic and Islamic education.
          </p>
          <Link
            to={`/madrasah/apply?course=${encodeURIComponent(course.title)}`}
            className="
    inline-block mt-8 px-8 py-4
    bg-forest
    text-sm font-body text-white
    hover:bg-emerald
    transition-colors duration-300
  "
          >
            Apply / Enrol Now
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
