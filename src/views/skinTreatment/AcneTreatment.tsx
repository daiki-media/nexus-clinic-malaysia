"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import {
  Sparkles,
  Shield,
  CheckCircle2,
  XCircle,
  MapPin,
  Heart,
  ChevronRight,
  Sparkles as SparklesIcon,
  Shield as ShieldIcon,
} from "lucide-react";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

export default function AcneLandingPage({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "acneTreatment");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-acne-treatment1.webp",
      after: "/images/B&A-skin/B&A-acne-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-acne-treatment2.webp",
      after: "/images/B&A-skin/B&A-acne-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-acne-treatment3.webp",
      after: "/images/B&A-skin/B&A-acne-treatment3.webp",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-light">
      {/* Hero Section - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-cream to-light"
      >
        <div className="absolute inset-0 bg-[url('/images/clinic/interior.png')] bg-cover bg-center opacity-5" />

        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft} className="space-y-8">
              {/* Main Heading */}
              <h1 className="font-georgia text-5xl lg:text-6xl text-brown leading-tight">
                Acne Treatment in Kuala Lumpur That Finally Makes Sense for Your
                Skin
              </h1>

              {/* Supporting Lines - EXACT TEXT */}
              <div className="space-y-4">
                <p className="text-xl text-taupe font-inter flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-rose shrink-0 mt-1" />
                  <span>
                    Acne is not just "dirty pores". It is stress, hormones,
                    heat, habits, and the wrong routine all mixing together.
                  </span>
                </p>
                <p className="text-xl text-taupe font-inter flex items-start gap-3">
                  <Heart className="w-6 h-6 text-rose shrink-0 mt-1" />
                  <span>
                    At Nexus Clinic KL, your plan starts with a doctor-led
                    assessment, then we build a treatment path that fits your
                    acne type, your skin tone, and your lifestyle.
                  </span>
                </p>
              </div>

              {/* Trust Strip - EXACT TEXT */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                <motion.div
                  variants={scaleIn}
                  className="flex items-center gap-3 bg-glass backdrop-blur-sm p-4 rounded-xl border border-taupe/20"
                >
                  <Shield className="w-5 h-5 text-wine" />
                  <span className="text-sm font-inter text-brown">
                    MOH registered and compliant, doctor-led care
                  </span>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="flex items-center gap-3 bg-glass backdrop-blur-sm p-4 rounded-xl border border-taupe/20"
                >
                  <MapPin className="w-5 h-5 text-wine" />
                  <span className="text-sm font-inter text-brown">
                    KLCC location: Wisma UOA II, Jalan Pinang, Kuala Lumpur
                  </span>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  className="flex items-center gap-3 bg-glass backdrop-blur-sm p-4 rounded-xl border border-taupe/20"
                >
                  <CheckCircle2 className="w-5 h-5 text-wine" />
                  <span className="text-sm font-inter text-brown">
                    Assessment first, not a sales pitch
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Acne consultation at Nexus Clinic KL"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Understanding Acne Section - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="font-georgia text-4xl text-brown mb-6">
              Acne in Malaysia can feel nonstop. You are not imagining it.
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe font-inter"
            >
              Kuala Lumpur is hot. It is humid. You sweat on the way to lunch,
              you reapply sunscreen, you sit in aircon, then you step out again.
              Your skin gets confused.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown font-inter"
            >
              And acne is personal.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe font-inter"
            >
              Some people get small bumps that never fully go away. Some get
              painful cystic acne along the jawline. Others get back acne that
              flares every time they work out. Then there are the dark marks
              that stay long after the pimple is gone.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe font-inter"
            >
              If you are reading this, you probably tried something already.
              Maybe a cleanser that felt too harsh. Maybe a "miracle" serum that
              worked for two weeks, then stopped. Maybe a facial that left you
              red and tight, but the acne returned.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe font-inter"
            >
              At Nexus Clinic Kuala Lumpur, we keep it simple: identify what
              type of acne you have, what is triggering it, and what your skin
              can tolerate. Then we treat it with a plan you can actually
              follow.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* What Acne Really Is Section - ALL TEXT */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            What acne really is (in plain words)
          </motion.h2>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe font-inter mb-6"
            >
              Acne happens when pores get blocked with oil and dead skin. Then
              bacteria and inflammation can join the party. The result can be:
            </motion.p>

            <motion.ul variants={fadeInUp} className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-brown font-inter">
                <ChevronRight className="w-5 h-5 text-rose" />
                Blackheads and whiteheads
              </li>
              <li className="flex items-center gap-3 text-brown font-inter">
                <ChevronRight className="w-5 h-5 text-rose" />
                Red bumps
              </li>
              <li className="flex items-center gap-3 text-brown font-inter">
                <ChevronRight className="w-5 h-5 text-rose" />
                Pus-filled pimples
              </li>
              <li className="flex items-center gap-3 text-brown font-inter">
                <ChevronRight className="w-5 h-5 text-rose" />
                Deep painful lumps (nodules or cysts)
              </li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe font-inter mb-4"
            >
              You cannot "scrub" cystic acne away. You also cannot solve every
              acne problem with one facial.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe font-inter mb-4"
            >
              That is why proper acne treatment often combines:
            </motion.p>

            <motion.ul variants={fadeInUp} className="space-y-2 mb-4">
              <li className="flex items-center gap-3 text-brown font-inter">
                <ChevronRight className="w-5 h-5 text-wine" />
                The right active ingredients
              </li>
              <li className="flex items-center gap-3 text-brown font-inter">
                <ChevronRight className="w-5 h-5 text-wine" />
                The right level of medical support (when needed)
              </li>
              <li className="flex items-center gap-3 text-brown font-inter">
                <ChevronRight className="w-5 h-5 text-wine" />
                Patience and consistency
              </li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe font-inter bg-rose/10 p-4 rounded-lg"
            >
              NHS guidance is clear that many acne treatments take time, and it
              can take weeks before you see improvement.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Types of Acne Section - ALL TEXT */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-16"
          >
            Types of acne we commonly see in Kuala Lumpur
          </motion.h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* 1) Comedonal acne */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-2xl text-brown mb-3">
                1) Comedonal acne (clogged pores)
              </h3>
              <p className="text-taupe font-inter">
                This looks like tiny bumps, blackheads, and "texture" that never
                feels smooth. Often worse with heavy makeup, oily skincare, or
                humid days.
              </p>
            </motion.div>

            {/* 2) Inflammatory acne */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-2xl text-brown mb-3">
                2) Inflammatory acne (red, angry acne)
              </h3>
              <p className="text-taupe font-inter">
                Red, inflamed bumps that can be tender to touch. Often requires
                medical intervention.
              </p>
            </motion.div>

            {/* 3) Hormonal acne */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-2xl text-brown mb-3">
                3) Hormonal acne
              </h3>
              <p className="text-taupe font-inter">
                Often shows up around the jawline and chin, especially in
                adults. It can flare around cycles, stress, and sleep changes.
              </p>
            </motion.div>

            {/* 4) Body acne */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-2xl text-brown mb-3">
                4) Body acne (back, chest, shoulders)
              </h3>
              <p className="text-taupe font-inter">
                Sweat, friction, tight clothing, backpacks, and gym habits can
                all play a role.
              </p>
            </motion.div>

            {/* 5) Acne with marks */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-2xl text-brown mb-3">
                5) Acne with marks (PIH) and early scarring
              </h3>
              <p className="text-taupe font-inter">
                Even when the acne calms down, you may be left with dark marks.
                Treating acne early matters, because picking and ongoing
                inflammation increases the risk of marks and scars.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Who Acne Treatment Is For - ALL TEXT */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Who acne treatment is for (and when you should not "wait it out")
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <p className="text-brown font-inter">
                Acne treatment at a doctor-led clinic is helpful if:
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl flex items-start gap-3"
            >
              <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
              <p className="text-brown font-inter">
                You are tired of wasting money on products that do not match
                your skin
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <p className="text-brown font-inter">
                If you have severe inflammation or deep painful acne, it is
                worth seeing a qualified doctor rather than hoping it disappears
                on its own. Erufu's KL guide also highlights "condition
                recurrence" as one of the biggest concerns people raise.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <p className="text-brown font-inter">
                If you have severe inflammation or deep painful acne, it is
                worth seeing a qualified doctor rather than hoping it disappears
                on its own. Erufu's KL guide also highlights "condition
                recurrence" as one of the biggest concerns people raise.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What Happens at Nexus Clinic - ALL TEXT WITH IMAGE */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-16"
          >
            What happens at Nexus Clinic KL (what you can expect)
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="bg-cream p-6 rounded-xl">
                <h3 className="font-georgia text-xl text-brown mb-3">
                  1. A clear acne diagnosis
                </h3>
                <p className="text-taupe font-inter">
                  We look at your acne type, location (face vs body),
                  inflammation level, and whether there are patterns that
                  suggest hormones or irritation.
                </p>
              </div>

              <div className="bg-cream p-6 rounded-xl">
                <h3 className="font-georgia text-xl text-brown mb-3">
                  2. A routine you can stick to
                </h3>
                <p className="text-taupe font-inter">
                  Not a 9-step routine. Not 12 products. A realistic plan.
                </p>
              </div>

              <div className="bg-cream p-6 rounded-xl">
                <h3 className="font-georgia text-xl text-brown mb-3">
                  3. Treatments that match your goals
                </h3>
                <p className="text-taupe font-inter">
                  Some people want fewer breakouts fast. Others want fewer
                  marks. Some want to stop cystic flare-ups. We choose based on
                  your priorities and your skin tolerance.
                </p>
              </div>

              <div className="bg-rose/10 p-6 rounded-xl">
                <p className="text-brown font-georgia text-lg mb-4">
                  You should leave knowing:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-taupe font-inter">
                    <ChevronRight className="w-4 h-4 text-wine" />
                    What you likely have
                  </li>
                  <li className="flex items-center gap-2 text-taupe font-inter">
                    <ChevronRight className="w-4 h-4 text-wine" />
                    What is making it worse
                  </li>
                  <li className="flex items-center gap-2 text-taupe font-inter">
                    <ChevronRight className="w-4 h-4 text-wine" />
                    What the first 4 to 8 weeks will look like
                  </li>
                  <li className="flex items-center gap-2 text-taupe font-inter">
                    <ChevronRight className="w-4 h-4 text-wine" />
                    What to do if dryness or purging happens
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/main/doctor-monitored-malaysia.webp"
                  alt="Doctor consultation at Nexus Clinic KL"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Acne Treatment Options - ALL TEXT */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-16"
          >
            Acne treatment options in Malaysia (how we choose the right mix)
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* A) At-home acne care */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-brown mb-4">
                A) At-home acne care (the foundation)
              </h3>
              <p className="text-taupe font-inter mb-4">
                Most prescription and clinic treatments work better when your
                basic routine is steady.
              </p>

              <p className="text-brown font-inter mb-3">
                Common ingredients that doctors use include:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Benzoyl peroxide (helps reduce acne bacteria and unclog pores)
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Retinoids (help stop pores from blocking)
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Acid-based options (like salicylic acid for oil and clogged
                  pores)
                </li>
              </ul>

              <div className="bg-rose/10 p-4 rounded-lg">
                <p className="text-brown font-inter">
                  A key point many people miss: if you switch products every
                  week, your skin never adapts. NHS notes it can take around 6
                  weeks to notice improvement, and some treatments take 2 to 3
                  months to really start working.
                </p>
              </div>
            </motion.div>

            {/* B) Prescription acne treatment */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-brown mb-4">
                B) Prescription acne treatment (when skincare is not enough)
              </h3>
              <p className="text-taupe font-inter mb-4">
                Prescription acne medications work by reducing oil, swelling, or
                bacterial infection, and results can take 4 to 8 weeks for many
                prescription options.
              </p>

              <p className="text-brown font-inter mb-3">
                Doctors may use combinations like:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Topical treatment plus oral antibiotics for more severe acne
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Hormonal options for women when suitable (not for everyone)
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Isotretinoin for severe or stubborn acne under strict medical
                  monitoring
                </li>
              </ul>
            </motion.div>

            {/* C) Isotretinoin */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-brown mb-4">
                C) Isotretinoin (for severe, scarring, or stubborn acne)
              </h3>
              <p className="text-taupe font-inter mb-4">
                Isotretinoin is powerful, and it is not for casual use. It can
                be highly effective, but it requires medical oversight and it
                can come with dryness and other side effects.
              </p>

              <div className="bg-cream p-4 rounded-lg">
                <p className="text-brown font-inter">
                  Mayo Clinic notes improvement can continue after stopping
                  isotretinoin and may take up to 6 months, and also that acne
                  may seem to worsen early on for some people. (If you are
                  pregnant or planning pregnancy, this is a critical discussion
                  and must be handled under medical guidance.)
                </p>
              </div>
            </motion.div>

            {/* D) In-clinic treatments */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-brown mb-4">
                D) In-clinic treatments (to calm active acne and reduce
                recurrence)
              </h3>
              <p className="text-taupe font-inter mb-4">
                This is where many KL clinics compete, and where the right plan
                can make a big difference.
              </p>

              <p className="text-brown font-inter mb-3">
                Common clinic options in Kuala Lumpur include:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Chemical peels (helps unclog and reduce congestion)
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Microdermabrasion (selected cases, not for angry inflamed
                  acne)
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Light and laser-based treatments (often used to reduce
                  inflammation and support acne control)
                </li>
              </ul>

              <div className="bg-rose/10 p-4 rounded-lg mb-4">
                <p className="text-brown font-inter">
                  Competitor example: Da Vinci explicitly promotes acne laser
                  therapy and "yellow laser" for inflammation-focused acne
                  treatment in KL.
                </p>
              </div>

              <p className="text-brown font-inter mb-3">
                At Nexus Clinic KL, your best option depends on:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-taupe font-inter">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Your acne type (clogged vs inflamed vs cystic)
                </div>
                <div className="flex items-center gap-2 text-taupe font-inter">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Your skin sensitivity
                </div>
                <div className="flex items-center gap-2 text-taupe font-inter">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Your downtime tolerance
                </div>
                <div className="flex items-center gap-2 text-taupe font-inter">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Your budget
                </div>
                <div className="flex items-center gap-2 text-taupe font-inter">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Your history (what failed before)
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Areas We Treat - ALL TEXT */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-6"
          >
            Areas we treat
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe font-inter text-lg mb-8"
          >
            Acne is not only a face issue.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <motion.div
              variants={scaleIn}
              className="bg-cream p-4 rounded-xl text-center"
            >
              <p className="text-brown font-inter">Forehead and T-zone</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-cream p-4 rounded-xl text-center"
            >
              <p className="text-brown font-inter">Cheeks and jawline</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-cream p-4 rounded-xl text-center"
            >
              <p className="text-brown font-inter">Chin and neck area</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-cream p-4 rounded-xl text-center"
            >
              <p className="text-brown font-inter">Back and shoulders</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-cream p-4 rounded-xl text-center"
            >
              <p className="text-brown font-inter">Chest</p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe font-inter mt-8 max-w-2xl mx-auto"
          >
            If your acne is mostly on the body, your plan often needs small
            lifestyle tweaks too (shower timing, friction, sweat management),
            not just products.
          </motion.p>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Benefits and Limitations - ALL TEXT */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Benefits and real limitations (pros and cons)
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pros */}
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-8 rounded-xl"
            >
              <h3 className="font-georgia text-2xl text-wine mb-6">Pros</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown font-inter">
                    A structured plan that stops random trial and error
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown font-inter">
                    Better control of breakouts and inflammation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown font-inter">
                    Reduced chance of marks and scarring over time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown font-inter">
                    Guidance on what to stop doing (often the biggest win)
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Cons */}
            <motion.div
              variants={fadeInRight}
              className="bg-white p-8 rounded-xl"
            >
              <h3 className="font-georgia text-2xl text-rose mb-6">
                Cons and limitations
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown font-inter">
                    Acne rarely disappears overnight. Real change takes weeks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown font-inter">
                    Some treatments can cause early dryness, irritation, or
                    "purging"
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown font-inter">
                    You may need more than one approach (skincare plus procedure
                    plus lifestyle)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown font-inter">
                    Severe acne can require longer treatment and closer
                    monitoring
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Side Effects - ALL TEXT */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Side effects and downtime (what people worry about most)
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe font-inter mb-8"
          >
            Here is what is normal, and what is not.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Topical treatments */}
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4">
                With topical acne treatments
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Dryness, peeling, mild sting
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Temporary redness
                </li>
              </ul>
              <p className="text-sm text-taupe font-inter mt-4">
                NHS also notes skin irritation is a common side effect with
                benzoyl peroxide, and it is often better to start slow and build
                up.
              </p>
            </motion.div>

            {/* Prescription meds */}
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4">
                With prescription acne meds
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Oral antibiotics can have side effects, and are usually
                  combined with topical treatments for moderate to severe acne.
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Isotretinoin often causes dryness and needs careful
                  monitoring.
                </li>
              </ul>
            </motion.div>

            {/* In-clinic care */}
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-4">
                With peels, lasers, and in-clinic care
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Mild redness for a short period
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Temporary sensitivity
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter">
                  <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                  Aftercare matters a lot, especially sun protection
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-brown font-inter mt-8 max-w-2xl mx-auto"
          >
            We always explain expected downtime and aftercare before you commit,
            because "surprise peeling" is not a fun way to spend your week.
          </motion.p>
        </div>
      </motion.section>

      {/* How Long Treatment Takes - ALL TEXT */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-6"
          >
            How long does acne treatment take?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe font-inter max-w-3xl mx-auto mb-8"
          >
            This is one of the biggest "People Also Ask" topics, and the honest
            answer is: it depends, but there are reliable timelines.
          </motion.p>

          <div className="space-y-4 max-w-3xl mx-auto">
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <p className="text-brown font-inter">
                NHS guidance: you may notice improvement around 6 weeks, and
                some treatments take 2 to 3 months to start working well.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <p className="text-brown font-inter">
                Mayo Clinic: many prescription acne treatments can take 4 to 8
                weeks to show results.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <p className="text-brown font-inter">
                For benzoyl peroxide, NHS notes it can take about 4 weeks to
                start working and up to 2 to 4 months for full effect.
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-rose font-georgia text-xl mt-8"
          >
            If someone promises "clear skin in 3 days", be careful.
          </motion.p>
        </div>
      </motion.section>

      {/* Cost Section - ALL TEXT */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-6"
          >
            Acne treatment cost in Kuala Lumpur (realistic ranges)
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.p variants={fadeInUp} className="text-taupe font-inter">
              Prices vary a lot in KL because acne treatment can mean many
              things. A simple acne facial is not the same as a doctor-led plan
              with prescriptions and multi-session procedures.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-taupe font-inter">
              What we can say from local KL pricing data:
            </motion.p>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <p className="text-brown font-inter">
                - Erufu Care's KL guide highlights a wide market with many
                clinics and includes patient-shared amounts paid such as MYR 600
                for a first visit example, plus many clinic options and
                treatment types.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <p className="text-brown font-inter">
                - Many KL pages position acne laser and "medical facial" methods
                as part of treatment packages.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-rose/10 p-6 rounded-xl"
            >
              <p className="text-brown font-inter">
                At Nexus Clinic KL, the best way to avoid overpaying is simple:
                start with an assessment, get a staged plan (Phase 1: calm acne,
                Phase 2: reduce marks, Phase 3: maintain), and only add
                procedures when they make sense.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Comparisons Section - ALL TEXT */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Acne treatment comparisons (so you can choose confidently)
          </motion.h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Acne clinic vs beauty facial */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                Acne clinic vs beauty facial
              </h3>
              <p className="text-taupe font-inter">
                A facial can help with surface oil and temporary glow. It
                usually does not solve hormonal acne or cystic acne. Medical
                treatment targets the causes, not just the surface.
              </p>
            </motion.div>

            {/* Drugstore routine vs doctor-led plan */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                Drugstore routine vs doctor-led plan
              </h3>
              <p className="text-taupe font-inter">
                Drugstore options can help mild acne. But if you have recurring
                inflamed acne, you may need prescription combinations and a
                stronger strategy. NHS and Mayo both note these treatments take
                time and are often combined for moderate to severe cases.
              </p>
            </motion.div>

            {/* Laser-only approach vs combination approach */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                Laser-only approach vs combination approach
              </h3>
              <p className="text-taupe font-inter">
                Lasers can help, but acne is often best managed with a
                combination plan: home routine plus medical guidance plus
                selected procedures. Directory guides like Erufu list lasers and
                peels as options, but also emphasise choosing based on your
                condition and consultation.
              </p>
            </motion.div>
          </div>

          {/* Clearer Skin Plan */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-white p-8 rounded-xl max-w-3xl mx-auto"
          >
            <h3 className="font-georgia text-2xl text-brown mb-4">
              A simple "clearer skin" plan you can imagine
            </h3>
            <p className="text-brown font-inter mb-4">
              Here is a realistic flow we often use:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  1
                </div>
                <div>
                  <p className="font-bold text-brown">
                    Step 1: Calm the active acne
                  </p>
                  <p className="text-taupe font-inter">
                    Reduce inflammation, stop new breakouts, simplify routine.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  2
                </div>
                <div>
                  <p className="font-bold text-brown">
                    Step 2: Fade marks and protect the barrier
                  </p>
                  <p className="text-taupe font-inter">
                    Once active acne slows down, we address PIH and uneven tone
                    while keeping skin strong.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brown rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  3
                </div>
                <div>
                  <p className="font-bold text-brown">Step 3: Maintain</p>
                  <p className="text-taupe font-inter">
                    You do not need heavy products forever. You need the right
                    habits and a maintenance routine you can repeat.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section - ALL 10 QUESTIONS COMPLETE */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Question 1 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                1) What is the fastest way to get rid of pimples overnight?
              </h3>
              <p className="text-taupe font-inter">
                You usually cannot "cure" a pimple overnight, but you can make
                it look calmer by morning. Ice can reduce swelling, and spot
                treatments like benzoyl peroxide can help in some cases. If the
                pimple is deep and painful, do not squeeze it. That often leads
                to longer healing and marks.
              </p>
            </motion.div>

            {/* Question 2 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                2) Can diet affect pimples?
              </h3>
              <p className="text-taupe font-inter">
                Diet is not the only cause, but some people notice triggers.
                Niva Bupa notes high-glycemic foods and dairy may trigger
                breakouts in some people. If you suspect food triggers, keep it
                simple: track patterns for 2 to 3 weeks, not just one day.
              </p>
            </motion.div>

            {/* Question 3 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                3) How long does acne treatment take to work?
              </h3>
              <p className="text-taupe font-inter">
                Most treatments need time. NHS notes you may notice improvement
                in about 6 weeks, and many treatments take 2 to 3 months to
                start working well. Mayo also notes many prescription treatments
                take 4 to 8 weeks to show results.
              </p>
            </motion.div>

            {/* Question 4 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                4) Why is my acne getting worse before it gets better?
              </h3>
              <p className="text-taupe font-inter">
                Some active ingredients (especially retinoids) can cause a
                temporary flare early on as clogged pores clear. This does not
                mean the treatment is failing. It means you may need pacing,
                moisturiser support, and the right frequency.
              </p>
            </motion.div>

            {/* Question 5 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                5) What is the best treatment for acne?
              </h3>
              <p className="text-taupe font-inter">
                The "best" treatment depends on your acne type. NHS describes
                treatment choices based on severity, including topical
                combinations and oral antibiotics for more severe cases. For
                severe or stubborn acne, isotretinoin may be considered under
                medical supervision.
              </p>
            </motion.div>

            {/* Question 6 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                6) Does benzoyl peroxide actually work?
              </h3>
              <p className="text-taupe font-inter">
                It can, especially for mild to moderate acne when used
                consistently. NHS explains benzoyl peroxide attacks acne
                bacteria and helps unclog pores, and it works best with regular
                use.
              </p>
            </motion.div>

            {/* Question 7 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                7) How do I prevent dark marks after acne?
              </h3>
              <p className="text-taupe font-inter">
                The biggest prevention is reducing inflammation early and not
                picking. Marks fade faster when breakouts are controlled and
                sunscreen habits are consistent.
              </p>
            </motion.div>

            {/* Question 8 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                8) Can I treat acne and sensitive skin at the same time?
              </h3>
              <p className="text-taupe font-inter">
                Yes, but you need a gentler plan. Start slow, avoid harsh
                scrubs, and focus on barrier support while introducing actives
                gradually.
              </p>
            </motion.div>

            {/* Question 9 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                9) When should I see a doctor for acne?
              </h3>
              <p className="text-taupe font-inter">
                If acne is painful, leaving marks, recurring, or affecting
                confidence, do not wait. Directory guides for KL also show many
                people worry about recurrence and ineffective home remedies,
                which is often the sign you need a stronger plan.
              </p>
            </motion.div>

            {/* Question 10 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">
                10) Is acne laser treatment worth it?
              </h3>
              <p className="text-taupe font-inter">
                Laser can help certain acne types, especially when inflammation
                is a major issue, but it is usually best as part of a wider
                plan. Many KL competitors promote laser options as part of their
                acne method menu.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
