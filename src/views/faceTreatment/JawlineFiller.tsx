"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Syringe,
  Clock,
  Shield,
  Heart,
  Sparkles,
  ChevronRight,
  Droplets,
  Activity,
  MapPin,
  HelpCircle,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const JawlineFillerLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "jawlineFiller");

  return (
    <div className="w-full overflow-hidden bg-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-cream/50 to-light z-0" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <h1 className="font-georgia text-5xl lg:text-6xl leading-tight text-brown">
                Jawline Filler in{" "}
                <span className="text-wine block">
                  Kuala Lumpur, Malaysia (Nexus Clinic KL)
                </span>
              </h1>

              <p className="text-xl text-taupe leading-relaxed">
                A sharper jawline, without surgery, and without looking "done."
                Subtle definition or a stronger angle, we tailor it to your
                face, not a trend. Doctor-led planning, authentic products, and
                a result that still looks like you.
              </p>

              <div className="bg-glass backdrop-blur-sm border border-cream rounded-2xl p-6 space-y-4">
                <h2 className="font-georgia text-brown text-lg">
                  Trust at a glance (Nexus Clinic Kuala Lumpur)
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-sm text-brown/80">
                      Authentic premium dermal fillers (including Allergan
                      Juvederm options)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-sm text-brown/80">
                      Transparent per-syringe pricing, so you can plan
                      confidently
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-sm text-brown/80">
                      Specialist medical injectors, doctor-led assessment
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-sm text-brown/80">
                      Established aesthetic clinic, founded in 2001
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative h-150 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/skin/acne-treatment.webp"
                alt="Jawline contouring result"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brown/20 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Jawline Definition Matters */}
      <section className="py-20 px-4 bg-cream/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-8"
          >
            Why jawline definition matters{" "}
            <span className="text-rose">more than you think</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="prose prose-lg max-w-none space-y-4"
          >
            <p className="text-brown/80 leading-relaxed">
              A well-defined jawline does not just "look sharp." It balances the
              whole lower face. It can make cheeks look lifted, soften early
              jowls, and give your profile more structure in photos.
            </p>
            <p className="text-brown/80 leading-relaxed">
              In Kuala Lumpur, we see one common pattern. People do not want a
              dramatic change. They want a cleaner line from ear to chin, a more
              confident side profile, and a face that looks less tired.
            </p>
            <p className="text-wine font-semibold text-xl">
              Jawline filler is one of the fastest ways to do that, when it is
              done with proper planning and the right product choice.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* What is Jawline Filler */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                What is <span className="text-wine">jawline filler?</span>
              </h2>

              <div className="space-y-4 text-brown/80 leading-relaxed">
                <p>
                  Jawline filler is a non-surgical injectable treatment that
                  adds structure along the jaw, usually using hyaluronic acid
                  (HA) dermal fillers. HA is widely used in dermal fillers and
                  is gradually absorbed by the body over time.
                </p>
                <p>
                  Think of it like subtle sculpting. Small amounts are placed
                  along specific points to create a smoother jawline, support
                  the jaw angle, and reduce the look of sagging around the lower
                  face.
                </p>
                <p className="bg-rose/10 p-4 rounded-xl border border-rose/20">
                  At Nexus Clinic KL, the focus is facial harmony. We plan your
                  jawline with your chin, cheeks, and natural face shape in
                  mind, not a one-size template.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative h-125 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/skin/acne-treatment.webp"
                alt="Jawline filler procedure"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Jawline Filler Can Help With */}
      <section className="py-20 px-4 bg-cream/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            What jawline filler can help with{" "}
            <span className="text-wine">(and what it cannot)</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-wine" />
                Jawline filler can help with
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-brown/80">
                  <ChevronRight className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  Soft or weak jawline definition
                </li>
                <li className="flex items-start gap-3 text-brown/80">
                  <ChevronRight className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  Mild jowls and "pre-jowl" hollowing near the chin
                </li>
                <li className="flex items-start gap-3 text-brown/80">
                  <ChevronRight className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  A jawline that looks uneven on one side
                </li>
                <li className="flex items-start gap-3 text-brown/80">
                  <ChevronRight className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  A less defined jaw angle (common in photos)
                </li>
                <li className="flex items-start gap-3 text-brown/80">
                  <ChevronRight className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  Enhancing a more structured lower face for men and women
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-rose" />
                Jawline filler cannot fully fix
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-brown/80">
                  <ChevronRight className="w-5 h-5 text-taupe shrink-0 mt-0.5" />
                  Significant loose skin (you may need tightening treatments
                  like HIFU or threads)
                </li>
                <li className="flex items-start gap-3 text-brown/80">
                  <ChevronRight className="w-5 h-5 text-taupe shrink-0 mt-0.5" />
                  A heavy lower face caused mainly by muscle bulk (masseter
                  Botox may be better)
                </li>
                <li className="flex items-start gap-3 text-brown/80">
                  <ChevronRight className="w-5 h-5 text-taupe shrink-0 mt-0.5" />
                  A double chin caused mainly by fat (fat reduction options may
                  be needed)
                </li>
              </ul>
              <p className="mt-6 text-sm italic text-taupe">
                The best results often come from choosing the correct tool, or
                combining treatments in a staged plan.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who is a Good Candidate */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Who is a good candidate{" "}
            <span className="text-wine">for jawline filler in KL?</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="bg-linear-to-br from-wine/5 to-rose/5 rounded-3xl p-8 border border-wine/10"
          >
            <p className="text-brown/80 mb-4">
              Jawline filler is usually a good option if:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown/80 text-sm">
                  You want visible definition but still natural results
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown/80 text-sm">
                  Your jawline lacks structure, especially from the front or
                  side
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown/80 text-sm">
                  You are noticing early sagging along the lower face
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown/80 text-sm">
                  You want a more masculine jawline shape or a sharper V-line
                  look
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl sm:col-span-2">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown/80 text-sm">
                  You want a non-surgical option with minimal downtime
                </span>
              </div>
            </div>
            <p className="mt-6 text-brown/70 text-sm border-t border-wine/10 pt-4">
              You may need extra care, or you may be advised to postpone, if you
              are pregnant, breastfeeding, have an active skin infection, or
              have certain medical conditions. Your doctor will guide you during
              consultation.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Areas We Can Treat */}
      <section className="py-20 px-4 bg-cream/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Areas we can treat for{" "}
            <span className="text-wine">jawline contouring</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-brown/80 mb-8"
          >
            Jawline contouring is not one injection point. It is a "map."
          </motion.p>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-lg border border-cream"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                Jaw angle (near the ear)
              </h3>
              <p className="text-taupe text-sm">
                for a stronger corner and cleaner line
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-lg border border-cream"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                Jaw body (along the mandible)
              </h3>
              <p className="text-taupe text-sm">to connect the line smoothly</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-lg border border-cream"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                Pre-jowl area
              </h3>
              <p className="text-taupe text-sm">
                to reduce the shadow or dip beside the chin
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-lg border border-cream"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                Chin support (when needed)
              </h3>
              <p className="text-taupe text-sm">
                jawline definition often looks better with balanced chin
                projection
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 p-6 bg-wine/5 rounded-xl border border-wine/20"
          >
            <p className="text-brown/80">
              This is why online pricing "per treatment" can be misleading.
              Jawline shaping often needs more product than smaller areas like
              lips.
            </p>
            <p className="text-rose font-semibold mt-2">
              Nexus Clinic's own pricing guide notes that jawline shaping can
              require multiple syringes for balanced definition.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Fillers Used */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            What fillers are typically used for{" "}
            <span className="text-wine">jawline definition?</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-brown/80 text-lg">
              Jawline is a structural area. It usually needs a firmer filler
              that can hold shape.
            </p>

            <div className="bg-linear-to-r from-wine/5 to-rose/5 p-8 rounded-2xl">
              <p className="text-brown/90 leading-relaxed">
                At Nexus Clinic KL, the Juvederm price guide includes options
                that are commonly used for lower-face structure such as Juvederm
                Volux and Juvederm Volift, priced per 1 cc syringe.
              </p>
              <p className="text-taupe mt-4 text-sm italic">
                HA fillers can differ in how they are formulated and
                crosslinked, which affects properties like firmness and
                longevity.
              </p>
              <p className="text-wine font-semibold mt-2">
                That is one reason product choice matters as much as technique.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 bg-cream/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            What to expect at{" "}
            <span className="text-wine">Nexus Clinic Kuala Lumpur</span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-lg relative"
            >
              <span className="absolute -top-3 -left-3 w-8 h-8 bg-wine text-white rounded-full flex items-center justify-center font-bold">
                1
              </span>
              <h3 className="font-georgia text-lg text-brown mt-4 mb-3">
                Consultation and facial assessment
              </h3>
              <p className="text-taupe text-sm">
                We look at your face at rest and in motion. We talk about what
                you see in the mirror, what bothers you in photos, and what
                "natural" means to you.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-lg relative"
            >
              <span className="absolute -top-3 -left-3 w-8 h-8 bg-wine text-white rounded-full flex items-center justify-center font-bold">
                2
              </span>
              <h3 className="font-georgia text-lg text-brown mt-4 mb-3">
                Face mapping and treatment plan
              </h3>
              <p className="text-taupe text-sm">
                We map key jawline points and decide: Which areas need
                structure, How much volume is likely needed, Whether chin
                support will improve the jawline outcome.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-lg relative"
            >
              <span className="absolute -top-3 -left-3 w-8 h-8 bg-wine text-white rounded-full flex items-center justify-center font-bold">
                3
              </span>
              <h3 className="font-georgia text-lg text-brown mt-4 mb-3">
                The treatment session
              </h3>
              <p className="text-taupe text-sm">
                Cleansing and prep, Numbing (if appropriate), Precise injection
                using a plan designed for your face, Quick review and aftercare
                guidance.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-lg relative"
            >
              <span className="absolute -top-3 -left-3 w-8 h-8 bg-wine text-white rounded-full flex items-center justify-center font-bold">
                4
              </span>
              <h3 className="font-georgia text-lg text-brown mt-4 mb-3">
                Review and refinement (if needed)
              </h3>
              <p className="text-taupe text-sm">
                Some patients love the immediate result. Others prefer small
                staged sessions. A gradual approach can look very natural.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pain, Downtime, Aftercare */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-8 h-8 text-wine" />
                <h2 className="font-georgia text-2xl text-brown">
                  Does jawline filler hurt?
                </h2>
              </div>
              <p className="text-brown/80">
                Most people describe it as pressure or brief pinches. Many
                fillers include lidocaine, and numbing can be used to improve
                comfort.
              </p>
              <p className="text-sm text-taupe">
                If pain control is a worry for you, tell us during consultation.
                We plan around it.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-wine" />
                <h2 className="font-georgia text-2xl text-brown">
                  Downtime and healing timeline
                </h2>
              </div>
              <p className="text-brown/80">
                You can usually return to normal routine quickly, but expect:
              </p>
              <ul className="list-disc list-inside text-brown/70 space-y-1">
                <li>Mild swelling for a few days</li>
                <li>Possible bruising (varies by person)</li>
                <li>Tenderness when pressed</li>
              </ul>
              <p className="text-sm text-taupe">
                You will often see improvement immediately. The filler then
                settles and integrates over 1 to 2 weeks.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-wine" />
                <h2 className="font-georgia text-2xl text-brown">
                  Aftercare that protects your result
                </h2>
              </div>
              <p className="text-brown/80">
                Good aftercare reduces swelling and helps your jawline settle
                smoothly.
              </p>
              <div className="bg-rose/5 p-4 rounded-lg">
                <p className="text-sm font-semibold text-rose mb-2">
                  The American Society of Plastic Surgeons advises:
                </p>
                <ul className="text-sm text-brown/70 space-y-1">
                  <li>• Avoid strenuous exercise for 24 hours</li>
                  <li>
                    • Avoid excessive heat (like saunas) for 24 to 48 hours
                  </li>
                  <li>
                    • Avoid alcohol and blood-thinning medications around
                    treatment, when medically appropriate
                  </li>
                </ul>
              </div>
              <div className="mt-4 text-sm text-brown/70 space-y-1">
                <p>
                  • Do not press or massage the jawline unless your doctor tells
                  you to
                </p>
                <p>
                  • Sleep slightly elevated the first night if you swell easily
                </p>
                <p>
                  • Contact the clinic if anything feels unusual, especially
                  increasing pain or skin color changes
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Longevity and Syringes */}
      <section className="py-20 px-4 bg-cream/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl text-brown">
                How long does jawline filler last?
              </h2>
              <p className="text-brown/80">
                Jawline fillers gradually break down over time. Cleveland Clinic
                notes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>
                    HA fillers often last six to 12 months, and sometimes up to
                    two years
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>CaHA fillers can last up to 12 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>
                    Some longer-term options exist, depending on product type
                  </span>
                </li>
              </ul>
              <p className="text-sm text-taupe">
                Longevity depends on your metabolism, the product used, and how
                much structure is needed. Structural areas like the jaw can hold
                results longer than high-movement areas like lips.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <h2 className="font-georgia text-3xl text-brown">
                How many syringes do you need for jawline filler?
              </h2>
              <p className="text-brown/80">
                There is no single number that fits everyone. Jawline usually
                needs more product because it is a longer area and it is about
                structure.
              </p>
              <div className="bg-white p-6 rounded-xl space-y-3">
                <li className="flex items-start gap-2 list-none">
                  <Syringe className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>
                    Nexus Clinic's guide notes jawline shaping may require
                    multiple syringes.
                  </span>
                </li>
                <li className="flex items-start gap-2 list-none">
                  <Syringe className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>
                    A Malaysia-based price guide estimates jawline filler often
                    uses 2 to 4 syringes, with total cost depending on how much
                    definition you want.
                  </span>
                </li>
                <li className="flex items-start gap-2 list-none">
                  <Syringe className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>
                    International clinical guidance commonly lands in the same
                    range for jawline contouring.
                  </span>
                </li>
              </div>
              <p className="text-sm text-taupe">
                If your goal is subtle definition, you may need less. If you
                want a stronger jaw angle and a clearer line from ear to chin,
                you may need more.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Jawline filler cost in Kuala Lumpur, Malaysia{" "}
            <span className="text-wine">(transparent planning)</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="bg-linear-to-br from-wine to-rose text-white p-8 rounded-2xl"
          >
            <p className="mb-6">
              At Nexus Clinic KL, pricing is listed per 1 cc syringe. Current
              guide pricing includes, for example:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                <h3 className="font-semibold text-lg">Juvederm Volux</h3>
                <p className="text-2xl font-bold">Regular RM 3000</p>
                <p className="text-sm opacity-90">Promo RM 2500 (per 1 cc)</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                <h3 className="font-semibold text-lg">Juvederm Volift</h3>
                <p className="text-2xl font-bold">Regular RM 3000</p>
                <p className="text-sm opacity-90">Promo RM 2500 (per 1 cc)</p>
              </div>
            </div>

            <p className="text-sm opacity-90">
              Because jawline often needs multiple syringes, total budget
              depends on your plan. A consultation lets us estimate the likely
              range and discuss staged options if you prefer a gradual change.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Comparisons */}
      <section className="py-20 px-4 bg-cream/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Jawline filler vs{" "}
            <span className="text-wine">other jawline treatments</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-6 rounded-xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                Jawline filler vs Masseter Botox
              </h3>
              <p className="text-sm text-taupe mb-3">
                Filler adds structure and definition. Masseter Botox can slim
                the jaw if the muscle is bulky
              </p>
              <p className="text-xs text-brown/70">
                If your lower face looks wide mainly from muscle, Botox may make
                a bigger difference. If your jawline looks soft or lacks
                bone-like definition, filler is often the better tool.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                Jawline filler vs HIFU or skin tightening
              </h3>
              <p className="text-sm text-taupe mb-3">
                Filler shapes and supports. HIFU and tightening improve skin
                laxity
              </p>
              <p className="text-xs text-brown/70">
                If early jowls are your main concern, tightening plus filler can
                be a powerful combo.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-6 rounded-xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                Jawline filler vs Threads
              </h3>
              <p className="text-sm text-taupe mb-3">
                Threads lift. Filler builds structure.
              </p>
              <p className="text-xs text-brown/70">
                Some faces need lift first, others need shape first. We decide
                based on your anatomy.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Side Effects and Safety */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Side effects and <span className="text-wine">safety</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-brown/80">
              Most side effects are temporary and mild:
            </p>

            <div className="flex flex-wrap gap-2">
              {["Swelling", "Bruising", "Redness", "Tenderness"].map(
                (item, i) => (
                  <span
                    key={i}
                    className="bg-cream px-4 py-2 rounded-full text-brown text-sm border border-rose/20"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            <p className="text-brown/80">
              More serious complications are rare but possible. Cleveland Clinic
              notes complications can include infection, allergic reactions, and
              vascular occlusion, where filler blocks a blood vessel and can
              cause tissue damage, and in very rare cases, vision problems.
            </p>

            <div className="bg-wine/5 p-6 rounded-xl border-l-4 border-wine">
              <p className="font-semibold text-wine mb-2">Important:</p>
              <p className="text-brown/80">
                This is why jawline filler should be done by trained medical
                professionals with proper anatomical knowledge, sterile
                technique, and safe product selection.
              </p>
              <p className="text-rose font-semibold mt-4">
                If you ever experience severe pain, skin whitening, spreading
                discoloration, or vision symptoms after any filler treatment,
                seek urgent medical care.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Competitor Snapshot */}
      {/* <section className="py-20 px-4 bg-cream/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Competitor snapshot{" "}
            <span className="text-wine">
              (what's ranking on Google, and what's missing)
            </span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl">
            <p className="text-brown/80 mb-6">
              When people search "jawline filler Kuala Lumpur" or "jawline
              contouring Malaysia," Google often surfaces a mix of:
            </p>

            <ul className="list-disc list-inside space-y-2 text-brown/70 mb-8">
              <li>
                Clinic pages that talk about dermal fillers and show
                before-after galleries (example: Dr K & Associates includes
                jawline as a contouring area and lists brands).
              </li>
              <li>
                Price-guide articles that estimate syringes and totals (example:
                NextMed shares jawline 2 to 4 syringes and estimated totals).
              </li>
              <li>
                Directory and review platforms (example: Erufu lists many KL
                clinics for dermal fillers and explains basic filler use).
              </li>
            </ul>

            <h3 className="font-georgia text-xl text-brown mb-4">
              Common gaps we see on many ranking pages:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 p-3 bg-rose/5 rounded-lg">
                <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                <span className="text-sm text-brown/80">
                  Not enough "real-life" guidance: people want to know what it
                  feels like, how swelling looks day-by-day, and what is normal.
                </span>
              </div>
              <div className="flex items-start gap-2 p-3 bg-rose/5 rounded-lg">
                <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                <span className="text-sm text-brown/80">
                  Weak expectation setting: not explaining who needs tightening
                  vs filler vs Botox.
                </span>
              </div>
              <div className="flex items-start gap-2 p-3 bg-rose/5 rounded-lg">
                <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                <span className="text-sm text-brown/80">
                  Pricing without clarity: listing "starting from" prices, but
                  not explaining syringe planning for jawline.
                </span>
              </div>
              <div className="flex items-start gap-2 p-3 bg-rose/5 rounded-lg">
                <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                <span className="text-sm text-brown/80">
                  Safety discussion feels too light: not enough detail on
                  product authenticity and red flags.
                </span>
              </div>
              <div className="flex items-start gap-2 p-3 bg-rose/5 rounded-lg sm:col-span-2">
                <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                <span className="text-sm text-brown/80">
                  Male jawline goals are under-served: many men search for
                  jawline definition but do not see content written for them.
                </span>
              </div>
            </div>
            <p className="mt-6 text-sm italic text-taupe">
              This page is built to answer those missing questions directly,
              while keeping the tone simple and human.
            </p>
          </motion.div>
        </motion.div>
      </section> */}

      {/* Why Choose Nexus */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Why choose{" "}
            <span className="text-wine">Nexus Clinic Kuala Lumpur</span> for
            jawline filler?
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="bg-linear-to-br from-wine/5 to-rose/5 p-8 rounded-3xl"
          >
            <p className="text-xl text-brown mb-8 italic">
              Because you are not buying "1 syringe." You are trusting someone
              to shape your face.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                <span className="text-brown/80">
                  Doctor-led planning and facial mapping
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                <span className="text-brown/80">
                  Authentic products and transparent per-syringe pricing
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                <span className="text-brown/80">
                  A long-standing clinic reputation (founded in 2001)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                <span className="text-brown/80">
                  A result that looks refined, not obvious
                </span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/50 rounded-lg">
              <p className="text-brown/70 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-wine" />
                Clinic location (for Kuala Lumpur searches and convenience):
                Nexus Clinic Kuala Lumpur, LG 10, Lower Ground Floor, Wisma UOA
                II, Jalan Pinang, 50450 Kuala Lumpur.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-cream/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Frequently asked <span className="text-wine">questions</span>
          </motion.h2>

          <div className="space-y-8">
            {/* Results and Longevity */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-wine" />
                Results and longevity
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-brown">
                    1) How long does jawline filler last?
                  </p>
                  <p className="text-brown/70 text-sm">
                    Most people see results for 6 to 12 months, and sometimes
                    longer depending on the product and your metabolism.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    2) Will I look bigger or swollen?
                  </p>
                  <p className="text-brown/70 text-sm">
                    Right after treatment, mild swelling is common. The final
                    look usually appears after the filler settles over 1 to 2
                    weeks.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    3) Is jawline filler permanent?
                  </p>
                  <p className="text-brown/70 text-sm">
                    No. Most jawline fillers are temporary and gradually break
                    down over time.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    4) Can jawline filler look natural?
                  </p>
                  <p className="text-brown/70 text-sm">
                    Yes, if the plan matches your face and the volume is
                    appropriate. Natural results are about balance, not maximum
                    sharpness.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    5) What age is best for jawline filler?
                  </p>
                  <p className="text-brown/70 text-sm">
                    There is no perfect age. Some do it in their 20s for
                    structure, others in their 30s to 50s for early jowls and
                    definition.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pain, Downtime, Aftercare FAQ */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-wine" />
                Pain, downtime, and aftercare
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-brown">
                    6) Does jawline filler hurt?
                  </p>
                  <p className="text-brown/70 text-sm">
                    It is usually mild to moderate discomfort. Many products
                    include lidocaine, and numbing can be used.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    7) Can I exercise after jawline filler?
                  </p>
                  <p className="text-brown/70 text-sm">
                    It is best to avoid strenuous exercise for 24 hours to
                    reduce bruising and swelling.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    8) Can I go sauna or steam room after filler?
                  </p>
                  <p className="text-brown/70 text-sm">
                    Avoid excessive heat for 24 to 48 hours, as it may worsen
                    swelling.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    9) What should I avoid after jawline filler?
                  </p>
                  <p className="text-brown/70 text-sm">
                    Avoid heavy workouts, heat exposure, and alcohol for a short
                    period. Follow your doctor's instructions.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    10) When can I sleep on my side?
                  </p>
                  <p className="text-brown/70 text-sm">
                    The first night, try not to press the treated side. After
                    that, most people can sleep normally, unless your doctor
                    advises otherwise.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Syringes and Cost */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-wine" />
                Syringes and cost in KL
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-brown">
                    11) How many ml or syringes do I need for jawline filler?
                  </p>
                  <p className="text-brown/70 text-sm">
                    Jawline commonly needs multiple syringes. Many guides
                    estimate 2 to 4 syringes depending on definition goals.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    12) How much is jawline filler in Kuala Lumpur?
                  </p>
                  <p className="text-brown/70 text-sm">
                    It depends on filler type and number of syringes. Nexus
                    Clinic KL lists prices per 1 cc syringe, with options like
                    Juvederm Volux and Volift.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    13) Why does jawline filler cost more than lip filler?
                  </p>
                  <p className="text-brown/70 text-sm">
                    Jawline is a larger structural area and often needs more
                    product for balanced results.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    14) Can I do it gradually to manage budget?
                  </p>
                  <p className="text-brown/70 text-sm">
                    Yes. Staged treatment is common and can look very natural.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Safety and Risks */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Safety and risks
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-brown">
                    15) Is jawline filler safe?
                  </p>
                  <p className="text-brown/70 text-sm">
                    When done by trained medical professionals using authentic
                    products, it is generally safe. Like any medical procedure,
                    risks exist.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    16) What are the risks of jawline filler?
                  </p>
                  <p className="text-brown/70 text-sm">
                    Common: swelling, bruising. Rare but serious: vascular
                    occlusion, infection, and other complications.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    17) Can jawline filler be dissolved?
                  </p>
                  <p className="text-brown/70 text-sm">
                    If it is hyaluronic acid filler, it can often be dissolved
                    using hyaluronidase. Many Malaysia clinic guides note HA is
                    reversible.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    18) What are red flags after filler?
                  </p>
                  <p className="text-brown/70 text-sm">
                    Severe pain, skin turning pale or dusky, spreading
                    discoloration, or vision symptoms need urgent medical
                    attention.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    19) Can men do jawline filler in Malaysia?
                  </p>
                  <p className="text-brown/70 text-sm">
                    Yes. Many men use it to build stronger lower-face structure
                    and jaw angles.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brown">
                    20) What is better for a sharper jawline, filler or Botox?
                  </p>
                  <p className="text-brown/70 text-sm">
                    If you need structure, filler is better. If jaw width is
                    mainly muscle, masseter Botox may help more. A consult
                    decides the right route.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-wine to-rose text-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.h2 variants={fadeInUp} className="font-georgia text-4xl mb-6">
            Ready to plan your jawline,{" "}
            <span className="text-cream">the right way?</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg mb-8 text-white/90">
            If you want a sharper jawline that still looks like you, start with
            a doctor-led consultation at Nexus Clinic Kuala Lumpur. We will
            assess your face, recommend the right filler type, estimate the
            number of syringes, and explain the full cost plan before anything
            begins.
          </motion.p>

          <motion.div
            variants={scaleIn}
            className="inline-flex gap-4 flex-wrap justify-center"
          >
            <button className="bg-white text-wine px-8 py-4 rounded-full font-semibold hover:bg-cream transition-all transform hover:scale-105 shadow-lg">
              Book Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105">
              Download Price Guide
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Floating element */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="bg-wine text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-rose transition-colors"
        >
          <HelpCircle className="w-6 h-6" />
        </motion.div>
      </div>
    </div>
  );
};

export default JawlineFillerLanding;
