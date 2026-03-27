"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Sparkles,
  Clock,
  Shield,
  Heart,
  ChevronRight,
  Star,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Droplet,
  Leaf,
  Activity,
  Droplet as DropletIcon,
  Zap as ZapIcon,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
interface SkinBoosterProps {
  locale: string;
}

export default function SkinBooster({ locale }: SkinBoosterProps) {
  return (
    <div className="w-full bg-light font-[--font-inter] overflow-hidden">
      {/* Hero Section - With ALL text from page 1 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="relative min-h-[90vh] flex items-center bg-linear-to-br from-cream to-white"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-taupe) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl">
            {/* Nexus Clinic Kuala Lumpur - exactly as in doc */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-rose/20"
            >
              <Sparkles className="w-4 h-4 text-wine" />
              <span className="text-sm text-brown">
                Nexus Clinic Kuala Lumpur
              </span>
            </motion.div>

            {/* Hero text - EXACT match */}
            <motion.h1
              variants={fadeInUp}
              className="font-georgia text-5xl md:text-7xl text-brown mb-6 leading-tight"
            >
              Skin Booster in Kuala Lumpur, Malaysia
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-wine font-semibold mb-4"
            >
              Hydration that shows, glow that feels, and skin that looks rested
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe mb-8 max-w-2xl"
            >
              Skin Boosters support deep hydration and smoother texture. You get
              a fresher look without changing your facial shape.
            </motion.p>

            {/* Trust at a glance - ALL bullet points from page 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-rose/20 mb-8"
            >
              <h2 className="text-lg font-semibold text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Trust at a glance (Nexus Clinic KL)
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-wine mt-2" />
                  <span className="text-sm text-brown">
                    Doctor-led consultation and skin assessment before
                    injections
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-wine mt-2" />
                  <span className="text-sm text-brown">
                    KL Golden Triangle location: LG 10, Wisma UOA II, Jalan
                    Pinang, 50450 Kuala Lumpur
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-wine mt-2" />
                  <span className="text-sm text-brown">
                    Skin booster positioning focused on hydration and skin
                    quality, not "extra volume"
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-wine mt-2" />
                  <span className="text-sm text-brown">
                    Options under the Nexus umbrella include HA-based skin
                    boosters and popular regeneratives like Rejuran and Profhilo
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all transform hover:scale-105 flex items-center gap-2 text-lg">
                Book Your Consultation
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is a Skin Booster - ALL text from page 2 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="font-georgia text-4xl text-brown mb-6">
                What is a <span className="text-wine">Skin Booster?</span>
              </h2>

              <p className="text-lg text-taupe mb-4 leading-relaxed">
                A skin booster is an injectable treatment designed to improve
                skin hydration and overall skin quality.
              </p>

              <p className="text-lg text-taupe mb-4 leading-relaxed">
                At Nexus Clinic, the skin booster concept is described as
                hyaluronic acid micro-injections that hydrate from within,
                unlike creams that sit on the surface.
              </p>

              <div className="bg-white p-6 rounded-xl border-l-4 border-wine">
                <p className="text-brown text-lg italic">
                  <span className="font-bold not-italic">
                    Think of it like this:
                  </span>{" "}
                  Skincare is your daily maintenance. A skin booster is a
                  hydration and repair push directly where your skin needs it.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute -inset-4 bg-rose/10 rounded-3xl blur-2xl" />
              <img
                src="/images/skin/acne-treatment.webp"
                alt="Skin Booster Treatment at Nexus Clinic"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </motion.div>
          </div>

          {/* HA Skin Booster micro-injections - from page 3 */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-white p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-wine mb-2">
              1) HA Skin Booster micro-injections (hydration focused)
            </h3>
            <p className="text-brown">
              This is the classic "microdroplet hydration" style described on
              Nexus Clinic's Skin Booster page. Best for: dry, dull skin and
              fine dehydration lines.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What Skin Boosters help with - ALL text from page 3 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            What Skin Boosters help with{" "}
            <span className="text-wine">(real-life concerns)</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            People in Kuala Lumpur usually come in with one of these feelings:
          </motion.p>

          {/* Real-life concerns - EXACT quotes */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {[
              "My skin looks tired even after sleeping.",
              "My makeup sits weird and looks patchy.",
              "My pores look bigger when I'm dehydrated.",
              "I want glass-skin glow, but not a puffy filler look.",
            ].map((quote, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="bg-cream p-6 rounded-xl italic text-brown relative"
              >
                <span className="text-4xl text-rose absolute top-2 left-2">
                  "
                </span>
                <span className="relative z-10 pl-4">{quote}</span>
                <span className="text-4xl text-rose absolute bottom-2 right-2">
                  "
                </span>
              </motion.div>
            ))}
          </div>

          {/* What skin boosters support - EXACT list */}
          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-brown mb-4 text-center">
              Skin boosters are commonly used to support:
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-cream p-4 rounded-lg">
                <Droplets className="w-5 h-5 text-wine" />
                <span className="text-brown">deep hydration and glow</span>
              </div>
              <div className="flex items-center gap-3 bg-cream p-4 rounded-lg">
                <Sparkles className="w-5 h-5 text-wine" />
                <span className="text-brown">
                  smoother texture and more bounce over time
                </span>
              </div>
              <div className="flex items-center gap-3 bg-cream p-4 rounded-lg">
                <Activity className="w-5 h-5 text-wine" />
                <span className="text-brown">
                  fine lines that look worse when your skin is dry
                </span>
              </div>
              <div className="flex items-center gap-3 bg-cream p-4 rounded-lg">
                <Heart className="w-5 h-5 text-wine" />
                <span className="text-brown">
                  acne marks or early scarring support, depending on product
                  choice
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Types of Skin Boosters - ALL text from pages 3-4 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Types of Skin Boosters you'll hear about in Malaysia{" "}
            <span className="text-wine">(simple guide)</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12"
          >
            "Skin booster" is a category. In Malaysia, people often mean one of
            these:
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Type 1 - HA Skin Booster */}
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="bg-wine text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brown mb-2">
                1) HA Skin Booster micro-injections (hydration focused)
              </h3>
              <p className="text-rose text-sm mb-2">
                This is the classic "microdroplet hydration" style described on
                Nexus Clinic's Skin Booster page.
              </p>
              <p className="text-taupe text-sm">
                <span className="font-semibold">Best for:</span> dry, dull skin
                and fine dehydration lines.
              </p>
            </motion.div>

            {/* Type 2 - Profhilo */}
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="bg-wine text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brown mb-2">
                2) Profhilo (bio-remodelling HA)
              </h3>
              <p className="text-taupe text-sm mt-2">
                Bio-remodelling HA for skin firmness and elasticity.
              </p>
            </motion.div>

            {/* Type 3 - Rejuran */}
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="bg-wine text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brown mb-2">
                3) Rejuran (polynucleotide skin rejuvenation)
              </h3>
              <p className="text-rose text-sm mb-2">
                Nexus describes Rejuran as containing polynucleotide (PN) and
                being used for skin texture, elasticity, hydration, fine lines,
                and acne scars.
              </p>
              <p className="text-taupe text-sm">
                <span className="font-semibold">Best for:</span> repair-focused
                glow, pores, texture, acne marks.
              </p>
            </motion.div>

            {/* Type 4 - HydroDeluxe */}
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="bg-wine text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Droplet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brown mb-2">
                4) HydroDeluxe (HA-based glow booster)
              </h3>
              <p className="text-rose text-sm mb-2">
                Nexus presents HydroDeluxe as an injectable skin booster
                approach aimed at hydration and rejuvenation, with discussion of
                results lasting months and maintenance.
              </p>
              <p className="text-taupe text-sm">
                <span className="font-semibold">Best for:</span> dehydrated,
                dull skin and "camera glow".
              </p>
            </motion.div>

            {/* Type 5 - Karisma Collagen */}
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="bg-wine text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brown mb-2">
                5) Collagen skin boosters like Karisma
              </h3>
              <p className="text-rose text-sm mb-2">
                Nexus describes Karisma Collagen Skin Booster with collagen and
                HA, and provides session guidance and price tiers on the page.
              </p>
              <p className="text-taupe text-sm">
                <span className="font-semibold">Best for:</span> firmness,
                wrinkles, elasticity, hydration.
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center mt-8 text-brown font-medium"
          >
            At Nexus Clinic KL, your doctor will recommend the right option
            after a skin assessment.
          </motion.p>
        </div>
      </motion.section>

      {/* Who is Skin Booster for - ALL text from pages 4-5 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Who is <span className="text-wine">Skin Booster</span> for?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Good fit */}
            <motion.div
              variants={fadeInLeft}
              className="bg-green-50 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                You are a good fit if:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-green-500">•</span>
                  your skin looks dull, dehydrated, or rough
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-green-500">•</span>
                  you want glow and hydration without changing face shape
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-green-500">•</span>
                  you want smoother texture and better bounce over time
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-green-500">•</span>
                  you have early lines, enlarged pores, or acne marks and want
                  skin quality improvement
                </li>
              </ul>
            </motion.div>

            {/* Who should avoid */}
            <motion.div
              variants={fadeInRight}
              className="bg-orange-50 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-orange-700 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Who should avoid or postpone
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-orange-500">●</span>
                  active infection, inflamed acne flare, or cold sore in the
                  area
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-orange-500">●</span>
                  pregnancy or breastfeeding (ask your doctor)
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-orange-500">●</span>
                  severe allergy history or uncontrolled medical issues
                </li>
              </ul>
              <p className="mt-4 text-sm text-taupe">
                A proper medical consultation is essential, especially because
                "skin booster" can mean different products.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Treatment Flow - ALL text from pages 5-6 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            What happens during a Skin Booster treatment{" "}
            <span className="text-wine">at Nexus Clinic KL?</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            Most sessions follow a simple flow:
          </motion.p>

          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {[
              {
                step: 1,
                title: "Consultation and skin assessment",
                desc: "Nexus describes consultation and assessment as part of treatment planning for injections like Rejuran and Skin Booster.",
              },
              {
                step: 2,
                title: "Numbing for comfort",
                desc: "Nexus describes numbing as part of the process for Rejuran injections.",
              },
              {
                step: 3,
                title: "Micro-injections",
                desc: "The product is placed in small points across the face or targeted areas, depending on your plan.",
              },
              {
                step: 4,
                title: "Aftercare instructions",
                desc: "Nexus provides aftercare guidance across booster content and blog posts.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-white p-4 rounded-xl text-center"
              >
                <div className="bg-wine text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                  {item.step}
                </div>
                <h3 className="font-semibold text-brown text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-taupe">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeInUp} className="text-center text-brown">
            Many KL clinics describe skin booster sessions around 30 to 45
            minutes, including numbing time. Nexus also lists booster-style
            procedures like Karisma at 20 to 30 minutes in its overview.
          </motion.p>
        </div>
      </motion.section>

      {/* Results Timeline - ALL text from pages 6-7 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Results timeline:{" "}
            <span className="text-wine">what you'll notice, and when</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12"
          >
            This is what most patients actually want to know.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* First 24-48 hours */}
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-wine mb-3">
                First 24 to 48 hours
              </h3>
              <p className="text-brown mb-2">You may have:</p>
              <ul className="list-disc list-inside text-taupe space-y-1">
                <li>small bumps at injection points</li>
                <li>mild redness or swelling</li>
              </ul>
              <p className="text-sm text-taupe mt-3">
                These short-term effects are commonly described by Malaysian
                clinic resources.
              </p>
            </motion.div>

            {/* 1 to 2 weeks */}
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-wine mb-3">
                1 to 2 weeks
              </h3>
              <p className="text-brown mb-2">
                Nexus notes that many patients notice improvement in about 1 to
                2 weeks on its Skin Booster and Karisma pages.
              </p>
              <p className="text-brown mb-2">Your skin often looks:</p>
              <ul className="list-disc list-inside text-taupe space-y-1">
                <li>more hydrated</li>
                <li>more "plump" in a healthy way</li>
                <li>smoother under makeup</li>
              </ul>
            </motion.div>

            {/* 3 to 6 weeks */}
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-wine mb-3">
                3 to 6 weeks
              </h3>
              <p className="text-taupe">
                Texture improvements become clearer, especially with
                regenerative options and a proper course plan.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sessions and Longevity - ALL text from page 7 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* How many sessions */}
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-brown mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-wine" />
                How many sessions do you need?
              </h3>
              <p className="text-taupe mb-4">
                Most clinics recommend a course.
              </p>
              <div className="space-y-3">
                <p className="text-brown">
                  <span className="font-semibold">
                    Examples from Malaysia clinic sources:
                  </span>
                </p>
                <p className="text-taupe pl-4">
                  Dr K Clinic recommends three sessions with a 14 to 21-day
                  interval, then maintenance every 6 to 9 months.
                </p>
                <p className="text-taupe pl-4">
                  Nexus Rejuran page suggests 3 to 4 sessions, spaced 3 to 4
                  weeks apart.
                </p>
              </div>
              <p className="mt-4 text-wine font-medium">
                At Nexus Clinic KL, your doctor will tailor the plan to your
                skin goals and budget.
              </p>
            </motion.div>

            {/* How long they last */}
            <motion.div
              variants={fadeInRight}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-brown mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-wine" />
                How long do Skin Boosters last?
              </h3>
              <p className="text-taupe mb-4">
                Most KL and Malaysia sources commonly state 6 to 12 months
                depending on product, skin condition, and maintenance.
              </p>
              <p className="text-taupe">
                Nexus HydroDeluxe content also discusses results commonly
                lasting six to nine months, with maintenance to sustain results.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pros and Cons - ALL text from pages 7-8 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Pros and cons{" "}
            <span className="text-wine">(honest, not salesy)</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pros */}
            <motion.div
              variants={fadeInLeft}
              className="bg-green-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Pros
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  improves hydration and glow without changing facial structure
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  supports smoother texture and healthier-looking skin over time
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  minimal downtime for most people
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  flexible, can be combined with lasers and other rejuvenation
                  treatments
                </li>
              </ul>
            </motion.div>

            {/* Cons */}
            <motion.div
              variants={fadeInRight}
              className="bg-orange-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-orange-700 mb-4">
                Cons
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-brown">
                  <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                  results are not permanent
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                  you may need multiple sessions for best results
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                  mild redness, swelling, bruising can happen
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                  not a replacement for surgical lifting if your main issue is
                  significant sagging
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Side effects and safety - ALL text from page 8 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Side effects <span className="text-wine">and safety</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-brown mb-4">
                Most people experience mild, temporary effects:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "redness",
                  "swelling",
                  "bruising",
                  "small bumps at injection points",
                ].map((effect, i) => (
                  <div
                    key={i}
                    className="bg-cream p-3 rounded-lg text-center text-brown"
                  >
                    {effect}
                  </div>
                ))}
              </div>
              <p className="text-sm text-taupe mt-4">
                These are commonly listed in clinic FAQs and aftercare guides.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-brown mb-4">
                Safety depends on:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-brown">
                  <Shield className="w-5 h-5 text-wine shrink-0" />
                  proper medical assessment
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <Shield className="w-5 h-5 text-wine shrink-0" />
                  authentic product
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <Shield className="w-5 h-5 text-wine shrink-0" />
                  sterile technique
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <Shield className="w-5 h-5 text-wine shrink-0" />
                  correct depth and placement
                </li>
              </ul>
              <p className="mt-4 text-wine font-medium">
                This is why doctor-led clinics matter.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cost Section - ALL text from page 9 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Cost of Skin Booster in Malaysia{" "}
            <span className="text-wine">
              (Kuala Lumpur pricing expectations)
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            Skin booster cost varies by:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            {[
              "product type (basic HA vs Profhilo vs Rejuran vs collagen boosters)",
              "dosage and number of sessions",
              "clinic location and doctor experience",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-cream p-4 rounded-lg text-center text-brown text-sm"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-brown mb-4">
                Common price ranges you'll see in Malaysia
              </h3>
              <ul className="space-y-3">
                <li className="text-brown">
                  <span className="font-semibold">•</span> Many KL sources cite
                  RM 1,000 to RM 3,500 per session depending on brand and
                  volume.
                </li>
                <li className="text-brown">
                  <span className="font-semibold">•</span> One Malaysia price
                  guide lists examples such as Rejuran RM 1,200 to RM 2,500 and
                  Juvelook RM 1,500 to RM 2,800.
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-wine text-white p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4">
                Nexus Clinic example pricing (Karisma Collagen Skin Booster)
              </h3>
              <p className="mb-4">
                Nexus publishes a tiered price list on its Karisma page:
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>1 syringe (2cc)</span>
                  <span className="font-bold">RM 3000</span>
                </div>
                <div className="flex justify-between">
                  <span>2 syringes (4cc)</span>
                  <span className="font-bold">RM 6000</span>
                </div>
                <div className="flex justify-between">
                  <span>3 syringes (6cc)</span>
                  <span className="font-bold">RM 9000</span>
                </div>
              </div>
              <p className="mt-6 text-white/80 text-sm">
                If you want an exact quote, you need a consult because the
                "right" plan depends on your skin and goals.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skin Booster vs Others - ALL text from pages 9-10 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Skin Booster vs{" "}
            <span className="text-wine">other popular treatments</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* vs Dermal Filler */}
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-brown mb-3">
                Skin Booster vs Dermal Filler
              </h3>
              <p className="text-taupe mb-2">
                Filler adds volume and shapes contours.
              </p>
              <p className="text-taupe mb-2">
                Skin boosters focus on hydration, glow, elasticity, and skin
                quality.
              </p>
              <p className="text-sm text-wine mt-2">
                Nexus Skin Booster page explains this difference clearly:
                boosters improve hydration and elasticity without changing
                facial structure.
              </p>
            </motion.div>

            {/* vs Botox */}
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-brown mb-3">
                Skin Booster vs Botox
              </h3>
              <p className="text-taupe mb-2">
                Botox relaxes muscle to soften expression lines.
              </p>
              <p className="text-taupe mb-2">
                Skin boosters improve skin quality and hydration.
              </p>
              <p className="text-sm text-wine mt-2">
                Nexus also explains Profhilo is not Botox and does not "freeze"
                muscles, focusing instead on skin remodeling.
              </p>
            </motion.div>

            {/* vs Laser or Microneedling */}
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-brown mb-3">
                Skin Booster vs Laser or Microneedling
              </h3>
              <p className="text-taupe">
                Lasers and microneedling target pigment, scars, pores, and
                collagen stimulation. Skin boosters support hydration and skin
                condition, and many clinics combine them for better overall
                results.
              </p>
            </motion.div>
          </div>

          {/* Areas that can be treated */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-white p-8 rounded-2xl max-w-2xl mx-auto text-center"
          >
            <h3 className="text-xl font-semibold text-brown mb-4">
              Areas that can be treated
            </h3>
            <p className="text-taupe mb-4">
              Most patients treat the face, but boosters can also be used on:
            </p>
            <div className="flex justify-center gap-6">
              <span className="px-4 py-2 bg-cream rounded-full text-brown">
                neck
              </span>
              <span className="px-4 py-2 bg-cream rounded-full text-brown">
                hands
              </span>
              <span className="px-4 py-2 bg-cream rounded-full text-brown">
                decolletage (upper chest)
              </span>
            </div>
            <p className="text-sm text-taupe mt-4">
              Nexus lists these areas for boosters like Skin Booster and
              Karisma.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Aftercare - ALL text from page 11 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Aftercare:{" "}
            <span className="text-wine">how to protect your glow</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12"
          >
            Here is a simple checklist used across clinic guidance:
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* First 24 hours */}
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-wine mb-4">
                For the first 24 hours
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  Avoid makeup if possible.
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  Avoid heavy sweating and intense workouts.
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  Do not rub or massage injection points.
                </li>
              </ul>
            </motion.div>

            {/* For 48 hours */}
            <motion.div
              variants={fadeInRight}
              className="bg-cream p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-wine mb-4">
                For 48 hours
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  Skip harsh skincare actsives if your skin feels sensitive.
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  Use sunscreen daily.
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.p variants={fadeInUp} className="text-center text-taupe mt-8">
            Nexus publishes aftercare-style guidance for boosters and related
            treatments to help maximize results.
          </motion.p>
        </div>
      </motion.section>

      {/* Why Nexus Clinic Kuala Lumpur - ALL text from page 11 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Why <span className="text-wine">Nexus Clinic Kuala Lumpur?</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown mb-8 text-center italic"
            >
              If you want skin that looks better in real life, not just in a
              filtered selfie, you need a plan that fits your skin.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl space-y-4"
            >
              <p className="text-brown">At Nexus Clinic KL:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Skin boosters are positioned as hydration and skin quality
                    improvement, not "face changing" volume.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Nexus offers popular options like Rejuran and Profhilo and
                    explains what they do, which helps set realistic
                    expectations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    You get a KL location that's easy to reach: LG 10, Wisma UOA
                    II, Jalan Pinang, 50450 Kuala Lumpur.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section - ALL 16 questions and answers from pages 12-14 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Frequently Asked <span className="text-wine">Questions</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Question 1-8 */}
            {[
              {
                q: "1) What is a skin booster?",
                a: "A skin booster is an injectable treatment that improves hydration and skin quality, often using hyaluronic acid micro-injections into the dermis.",
              },
              {
                q: "2) What does a skin booster do for your face?",
                a: "It supports deep hydration, smoother texture, and a healthier glow, without adding 'filler volume'.",
              },
              {
                q: "3) Is a skin booster the same as a dermal filler?",
                a: "No. Fillers add volume and shape. Skin boosters focus on hydration and elasticity without changing facial structure.",
              },
              {
                q: "4) How long do skin boosters last?",
                a: "Many clinics state results commonly last 6 to 12 months, depending on product, skin condition, and maintenance.",
              },
              {
                q: "5) When will I see results after a skin booster?",
                a: "Nexus notes many people notice changes in 1 to 2 weeks, with continued improvement after.",
              },
              {
                q: "6) How many sessions do I need?",
                a: "Many providers recommend a course, often 3 sessions, then maintenance every few months.",
              },
              {
                q: "7) Do skin boosters hurt?",
                a: "Most clinics use numbing cream, and people usually feel mild discomfort rather than strong pain.",
              },
              {
                q: "8) Is there downtime after skin booster injections?",
                a: "Most people have mild redness, swelling, or small bumps that settle within a few days.",
              },
              {
                q: "9) Can I wear makeup after a skin booster?",
                a: "Some clinics advise avoiding makeup for at least 24 hours to let the skin calm.",
              },
              {
                q: "10) Are skin boosters safe?",
                a: "They are generally considered safe when performed by trained medical professionals using sterile technique and authentic products. Mild redness and swelling are common short-term effects.",
              },
              {
                q: "11) What are the side effects of skin boosters?",
                a: "Common effects include redness, swelling, bruising, and small bumps at injection points. They usually resolve in days.",
              },
              {
                q: "12) How much do skin boosters cost in Malaysia?",
                a: "Many KL sources commonly cite RM 1,000 to RM 3,500 per session, depending on product and dosage.",
              },
              {
                q: "13) Why do prices vary so much?",
                a: "Product type (basic HA vs Profhilo vs Rejuran vs collagen boosters), dosage, number of sessions, and doctor experience all affect cost.",
              },
              {
                q: "14) Is Profhilo a skin booster?",
                a: "Nexus positions Profhilo as a skin bio-remodelling injectable with pure hyaluronic acid that hydrates and supports firmness, and it is not a traditional filler.",
              },
              {
                q: "15) What is Rejuran, and why is it popular in Malaysia?",
                a: "Nexus describes Rejuran as a PN-based skin rejuvenation treatment used to improve texture, elasticity, hydration, fine lines, pores, and acne scars.",
              },
              {
                q: "16) Can I combine skin boosters with laser or microneedling?",
                a: "Yes, many clinics state boosters can pair well with other rejuvenation treatments for enhanced results, but your doctor should plan the timing.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="bg-cream p-6 rounded-xl hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-brown mb-2">{faq.q}</h3>
                <p className="text-taupe text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA - ALL text from page 14 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 bg-linear-to-r from-wine to-rose text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl mb-6"
          >
            Ready for a glow that looks{" "}
            <span className="italic">natural, not overdone?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
          >
            If your main goal is hydration, smoother texture, and a rested look,
            a Skin Booster in Kuala Lumpur at Nexus Clinic is a strong option.
            Start with a consult so your doctor can choose the right booster
            type and session plan for your skin.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <button className="bg-white text-wine px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all">
              Book Your Consultation
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
