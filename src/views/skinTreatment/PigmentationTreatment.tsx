"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Sparkles,
  CheckCircle2,
  XCircle,
  MapPin,
  Award,
  ChevronRight,
  Heart,
  Thermometer,
  Flower2,
  Layers,
  Target,
  AlertTriangle,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const PigmentationLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "pigmentationTreatment");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
      after: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-pigmentation-treatment2.webp",
      after: "/images/B&A-skin/B&A-pigmentation-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-pigmentation-treatment3.webp",
      after: "/images/B&A-skin/B&A-pigmentation-treatment3.webp",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/clinic/interior.png')" }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20 }}
        />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-georgia text-5xl md:text-7xl text-brown mb-6 leading-tight"
            >
              Stop chasing "brightening."
              <br />
              <span className="text-wine">Start treating the cause</span>
              <br />
              of your dark spots.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-taupe text-lg md:text-xl mb-12 max-w-2xl mx-auto font-inter"
            >
              Pigmentation is frustrating because it keeps changing with sun,
              stress, and hormones. At Nexus Clinic Kuala Lumpur, we build a
              personalised plan that targets your pigment type, not just your
              skin tone.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter mb-8"
            >
              You will know what is realistic, what needs consistency, and what
              will keep coming back if you skip aftercare.
            </motion.p>
          </motion.div>
        </div>

        {/* Trust Strip */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="absolute bottom-0 left-0 right-0 bg-glass backdrop-blur-md border-t border-cream py-4"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-brown font-inter">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose" />
                <span>
                  Established in 2001 and based in the heart of KL's Golden
                  Triangle.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose" />
                <span>
                  Clinic location: LG 10, Lower Ground Floor, Wisma UOA II,
                  Jalan Pinang, 50450 Kuala Lumpur.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose" />
                <span>
                  Pigmentation care can include laser therapy, chemical peels,
                  and topical treatments, depending on your skin and pigment
                  pattern.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-rose" />
                <span>
                  Advanced options include MedLite C6 ND:YAG laser and
                  pigment-focused approaches like pico laser and Dermamelan
                  (when suitable).
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Malaysia Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-8 text-center"
            >
              If you live in Malaysia, here is why pigmentation feels extra
              stubborn
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-lg mb-6 text-center"
            >
              Pigmentation does not just show up. It builds. You notice it one
              day in harsh lighting, then it starts "sticking" in photos.
              Foundation looks patchy. Your skin tone feels uneven even when
              your skin is otherwise healthy.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-lg mb-8 text-center"
            >
              In Malaysia, a few things make pigment flare-ups common:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { icon: Sun, text: "Sun exposure (even short daily exposure)" },
                { icon: Heart, text: "Hormonal shifts" },
                {
                  icon: Thermometer,
                  text: "Skin inflammation (acne, irritation, aggressive skincare)",
                },
                { icon: Flower2, text: "Genetics and ageing" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-light rounded-2xl p-6 text-center shadow-lg"
                >
                  <item.icon className="w-8 h-8 text-rose mx-auto mb-3" />
                  <p className="text-brown font-inter text-sm">{item.text}</p>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter mt-6 text-center"
            >
              These causes are commonly discussed by Malaysian skin resources
              too, especially sun exposure and hormones.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Section with Single Image */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
            >
              <h2 className="font-georgia text-4xl text-brown mb-6">
                What pigmentation actually is (in simple words)
              </h2>
              <p className="text-taupe font-inter text-lg mb-4">
                Pigmentation happens when your skin produces extra melanin (the
                pigment that gives skin its colour). Sometimes the pigment is on
                the surface. Sometimes it sits deeper. That depth matters,
                because it changes what will work best.
              </p>
              <p className="text-brown font-inter">
                That is why one person improves fast with a peel, while another
                needs lasers and long-term maintenance.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/skin/pigmentation-treatment.webp"
                  alt="Skin pigmentation analysis at Nexus Clinic Kuala Lumpur"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Pigmentation */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-4 text-center"
            >
              Types of pigmentation we commonly see in Kuala Lumpur
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-8"
            >
              Not all "dark spots" are the same. Most patients have more than
              one type.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="bg-light rounded-2xl p-8 shadow-lg">
                <h3 className="font-georgia text-xl text-brown mb-3">
                  Melasma (patchy, hormonal pigment)
                </h3>
                <p className="text-taupe font-inter mb-3">
                  Usually looks like brown or greyish patches on cheeks,
                  forehead, or upper lip. It often comes and goes, and it can be
                  triggered by sun and hormones. Many clinics highlight that
                  melasma is persistent and needs careful planning.
                </p>
              </div>

              <div className="bg-light rounded-2xl p-8 shadow-lg">
                <h3 className="font-georgia text-xl text-brown mb-3">
                  Sunspots and age spots
                </h3>
                <p className="text-taupe font-inter mb-3">
                  More common as we age or after years of UV exposure. They can
                  appear as small, defined brown spots.
                </p>
              </div>

              <div className="bg-light rounded-2xl p-8 shadow-lg">
                <h3 className="font-georgia text-xl text-brown mb-3">
                  Freckles
                </h3>
                <p className="text-taupe font-inter mb-3">
                  Often genetic and more visible after sun exposure. They can be
                  treated, but they may return if you do not protect from sun.
                </p>
              </div>

              <div className="bg-light rounded-2xl p-8 shadow-lg">
                <h3 className="font-georgia text-xl text-brown mb-3">
                  Post-inflammatory hyperpigmentation (PIH)
                </h3>
                <p className="text-taupe font-inter mb-3">
                  Dark marks after acne, rash, scratching, or harsh products.
                  PIH is very common in Asian skin and can worsen if skin is
                  irritated again.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 bg-wine/10 border border-wine/20 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-wine shrink-0 mt-1" />
                <p className="text-brown font-inter">
                  <span className="font-bold">
                    "Is it pigmentation or something else?"
                  </span>{" "}
                  If a spot is changing fast, bleeding, ulcerating, or looks
                  very different from other spots, do not treat it like cosmetic
                  pigmentation. Get it assessed medically first.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-12 text-center"
            >
              Who pigmentation treatment is for (and who should pause)
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-cream rounded-2xl p-8"
              >
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-wine" />
                  You are likely a good fit if:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-brown font-inter">
                    <ChevronRight className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <span>
                      You have dark spots, melasma patches, uneven tone, or
                      stubborn marks that do not fade
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-brown font-inter">
                    <ChevronRight className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <span>Your pigment gets worse after sun exposure</span>
                  </li>
                  <li className="flex items-start gap-3 text-brown font-inter">
                    <ChevronRight className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <span>
                      You want a plan that balances results with skin safety
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-cream rounded-2xl p-8"
              >
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <XCircle className="text-wine" />
                  You may need to pause or adjust if:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-brown font-inter">
                    <ChevronRight className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <span>
                      Your skin is actively inflamed (eczema flare, severe acne,
                      irritated barrier)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-brown font-inter">
                    <ChevronRight className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <span>
                      You are pregnant or breastfeeding (many pigment treatments
                      are postponed)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-brown font-inter">
                    <ChevronRight className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <span>
                      You are using strong prescriptions without guidance (we
                      may time treatments around them)
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Treatment Philosophy */}
      <section className="py-24 bg-wine text-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl mb-12"
          >
            Our Treatment Philosophy
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8"
          >
            <div className="text-center">
              <div className="text-5xl font-georgia mb-4 opacity-50">01</div>
              <h3 className="text-2xl font-georgia mb-2">Break down</h3>
              <p className="text-cream/80 font-inter">
                existing pigment safely
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-georgia mb-4 opacity-50">02</div>
              <h3 className="text-2xl font-georgia mb-2">Stop</h3>
              <p className="text-cream/80 font-inter">
                pigment from re-forming with medical-grade homecare and
                lifestyle steps
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-georgia mb-4 opacity-50">03</div>
              <h3 className="text-2xl font-georgia mb-2">Maintain</h3>
              <p className="text-cream/80 font-inter">
                results so you do not bounce back after your last session
              </p>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-cream/90 font-inter max-w-3xl mx-auto"
          >
            Nexus Clinic also publishes guidance for Asian skin tones when
            comparing lasers and chemical peels, which matters in Malaysia
            because pigment risk and sensitivity can be different in Asian skin.
          </motion.p>
        </motion.div>
      </section>

      {/* Treatments Available */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-4 text-center"
            >
              Pigmentation treatments available at Nexus Clinic Kuala Lumpur
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-8"
            >
              (and what they are best for)
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6">
              {/* 1) Pigmentation lasers */}
              <div className="bg-cream rounded-2xl p-8 shadow-lg">
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  1) Pigmentation lasers (target pigment clusters)
                </h3>
                <p className="text-taupe font-inter mb-3">
                  Laser is often chosen when spots are stubborn, deeper, or
                  well-defined.
                </p>
                <p className="text-taupe font-inter mb-3">
                  Nexus Clinic's pigmentation services include laser therapy as
                  one of the core options.
                </p>

                <div className="mt-4 p-4 bg-light rounded-xl">
                  <h4 className="font-georgia text-xl text-brown mb-2">
                    MedLite C6 ND:YAG laser
                  </h4>
                  <p className="text-taupe font-inter mb-2">
                    This is a non-ablative laser commonly used for pigmentation
                    issues. Nexus Clinic highlights MedLite C6 ND:YAG as a tool
                    used for treating various pigmentation concerns.
                  </p>
                  <p className="font-bold text-brown mt-2">Best for:</p>
                  <ul className="list-disc pl-5 text-taupe font-inter">
                    <li>
                      Dark spots and uneven tone concerns where ND:YAG settings
                      are suitable
                    </li>
                    <li>
                      Patients who want pigment targeting with controlled
                      downtime
                    </li>
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-light rounded-xl">
                  <h4 className="font-georgia text-xl text-brown mb-2">
                    Pico laser for pigmentation
                  </h4>
                  <p className="text-taupe font-inter mb-2">
                    Pico lasers use ultra-short pulses. Many Malaysian clinics
                    position pico laser as a modern option for pigment, with
                    lower heat impact compared to older systems.
                  </p>
                  <p className="text-taupe font-inter mb-2">
                    Nexus Clinic also features pico laser as an advanced
                    solution for pigmentation and skin concerns.
                  </p>
                  <p className="font-bold text-brown mt-2">Best for (often):</p>
                  <ul className="list-disc pl-5 text-taupe font-inter">
                    <li>Freckles, sunspots, certain pigment clusters</li>
                    <li>
                      Patients who want minimal downtime and gradual brightening
                    </li>
                  </ul>
                  <p className="text-taupe font-inter mt-2 text-sm">
                    Also, Malaysian sources describe pico laser as using very
                    short pulses to break down melanin particles, with a focus
                    on suitability for Asian skin when used correctly.
                  </p>
                </div>
              </div>

              {/* 2) Chemical peels */}
              <div className="bg-cream rounded-2xl p-8 shadow-lg">
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  2) Chemical peels (surface refresh and tone improvement)
                </h3>
                <p className="text-taupe font-inter mb-3">
                  Peels can help if your pigment is more superficial, or if your
                  main issue is dullness plus uneven tone.
                </p>
                <p className="text-taupe font-inter mb-3">
                  Nexus Clinic lists chemical peels as one of the advanced
                  options for pigmentation and age spots.
                </p>
                <p className="font-bold text-brown mt-2">Best for:</p>
                <ul className="list-disc pl-5 text-taupe font-inter">
                  <li>Post-acne marks that sit more on the surface</li>
                  <li>Dull skin with mild pigmentation</li>
                  <li>
                    People who want a simpler step before moving to devices
                  </li>
                </ul>
              </div>

              {/* 3) Topical treatments */}
              <div className="bg-cream rounded-2xl p-8 shadow-lg">
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  3) Topical pigmentation treatments (the "keep it from coming
                  back" step)
                </h3>
                <p className="text-taupe font-inter mb-3">
                  Topical treatments matter. They reduce pigment production and
                  support maintenance. Nexus Clinic includes topical treatments
                  as part of pigmentation care.
                </p>
                <p className="text-wine font-bold mt-4">
                  This is where a lot of people fail. They spend money on a few
                  sessions, then go back to random skincare. Pigment returns.
                  They think the treatment "did not work." It did, but
                  maintenance was missing.
                </p>
              </div>

              {/* 4) Dermamelan */}
              <div className="bg-cream rounded-2xl p-8 shadow-lg">
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  4) Dermamelan depigmentation program
                </h3>
                <p className="text-taupe font-inter mb-3">
                  Dermamelan is a professional depigmentation treatment designed
                  to reduce pigmentation and dark spots, and it is featured by
                  Nexus Clinic as a pigmentation option in Malaysia.
                </p>
                <p className="font-bold text-brown mt-2">Best for:</p>
                <ul className="list-disc pl-5 text-taupe font-inter">
                  <li>
                    Stubborn pigmentation and melasma-type patterns in suitable
                    candidates
                  </li>
                  <li>
                    Patients who can follow a structured homecare program
                    carefully
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Laser vs Peel */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6 text-center"
            >
              Laser vs chemical peel in Malaysia: which one should you choose?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-4"
            >
              This is one of the most common questions in KL.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-8"
            >
              Nexus Clinic has an in-depth guide comparing pigmentation laser
              and chemical peel for Asian skin tones, including benefits,
              downtime, risks, and cost considerations.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-8 shadow-lg"
            >
              <p className="text-brown font-inter mb-4 font-bold">
                A practical way to think about it:
              </p>
              <ul className="space-y-4 text-brown font-inter">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span>
                    Laser is often better for defined spots or deeper pigment,
                    when properly selected and performed.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span>
                    Peels can be great for surface pigment, dullness, and tone,
                    especially if your barrier is sensitive.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span>
                    Many patients do best with a combination plan, not a single
                    method.
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-8 text-center"
            >
              What results can you expect (the honest version)
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-lg mb-6 text-center"
            >
              Pigmentation usually improves in layers.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter mb-4"
            >
              You may see:
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-3 mb-6">
              <p className="text-taupe font-inter">
                • Faster brightening in the first few weeks if pigment is
                superficial
              </p>
              <p className="text-taupe font-inter">
                • Gradual improvement over months for deeper pigment or melasma
                patterns
              </p>
              <p className="text-taupe font-inter">
                • Best long-term results when you treat and maintain together
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine/10 border border-wine/20 rounded-2xl p-6"
            >
              <p className="text-brown font-inter">
                Melasma, in particular, can be long-term. One Malaysian clinic
                notes melasma may fade slightly, but it often persists without
                professional treatment, and it needs careful management.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Downtime & Side Effects */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
            >
              <h2 className="font-georgia text-3xl text-brown mb-6">
                Downtime: what it feels like in real life
              </h2>
              <p className="text-taupe font-inter mb-4">
                Downtime depends on treatment intensity and your skin response.
              </p>
              <p className="text-brown font-inter mb-3">
                You might experience:
              </p>
              <ul className="space-y-2 text-taupe font-inter">
                <li>• Mild redness and warmth</li>
                <li>• Temporary darkening of spots before they fade</li>
                <li>
                  • Light flaking or dryness if a peel or depigmentation program
                  is used
                </li>
              </ul>
              <p className="text-brown font-inter mt-4">
                If you have events coming up, we plan around them. Pigmentation
                treatment is not just medical, it is lifestyle timing too.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
            >
              <h2 className="font-georgia text-3xl text-brown mb-6">
                Side effects and risks (and how we reduce them)
              </h2>
              <p className="text-taupe font-inter mb-4">
                Most side effects are temporary, but pigmentation treatments
                need respect, especially for Asian skin.
              </p>
              <p className="text-brown font-inter mb-3">
                Common possibilities:
              </p>
              <ul className="space-y-2 text-taupe font-inter mb-4">
                <li>• Redness, swelling, sensitivity</li>
                <li>• Temporary dryness and flaking</li>
                <li>
                  • Post-inflammatory hyperpigmentation (PIH) if skin is
                  irritated or over-treated
                </li>
              </ul>
              <p className="text-taupe font-inter mb-4">
                Clinics often highlight that using suitable settings and proper
                care helps reduce pigment rebound and post-treatment
                hyperpigmentation risk.
              </p>
              <div className="mt-4 p-4 bg-wine/10 rounded-xl">
                <p className="text-brown font-inter font-semibold">
                  Your safest decision is simple: do not chase aggressive
                  settings because you want faster results. Pigmentation loves
                  inflammation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-4 text-center"
            >
              Areas we can treat
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-8"
            >
              Pigmentation is not only on the cheeks.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter mb-4"
            >
              Common treatment areas include:
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {[
                "Forehead",
                "Cheeks",
                "Upper lip",
                "Nose and side of face",
                "Chin and jawline",
                "Neck (selected cases)",
                "Hands (sunspots and age spots)",
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-cream p-3 rounded-lg text-brown font-inter text-center"
                >
                  {area}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6 text-center"
            >
              Cost of pigmentation treatment in Kuala Lumpur and Malaysia
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-4"
            >
              Pricing varies because pigmentation varies.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter mb-3"
            >
              Your cost depends on:
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-5 text-taupe font-inter mb-6"
            >
              <li>Pigment type (melasma vs sunspots vs PIH)</li>
              <li>Depth and coverage area</li>
              <li>
                Technology used (laser type, peel type, depigmentation program)
              </li>
              <li>Number of sessions needed</li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter mb-4"
            >
              To give you real market context in Malaysia, some clinics publicly
              share price ranges:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-6 shadow-lg mb-4"
            >
              <p className="text-brown font-inter">
                One KL clinic lists laser pigmentation costs around RM500 to
                RM1,000, depending on sessions and area size.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-6 shadow-lg mb-4"
            >
              <p className="text-brown font-inter">
                A Malaysia clinic blog lists pigmentation removal pico laser
                estimates around RM400 to RM900 per session (varies by clinic
                and device).
              </p>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-taupe font-inter">
              Treat these as general benchmarks, not fixed pricing. The right
              plan is the one that works for your pigment and does not trigger
              rebound.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Competitor Analysis Section */}
      {/* <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6 text-center"
            >
              Top competitors ranking on Google
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-6"
            >
              (what they do well, and where Nexus can win)
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter mb-4"
            >
              When reviewing pages that commonly appear for searches like
              "pigmentation treatment Kuala Lumpur", "hyperpigmentation
              treatment KL", and "melasma treatment Malaysia," a few competitors
              show up frequently.
            </motion.p>

            <motion.h3
              variants={fadeInUp}
              className="font-georgia text-2xl text-brown mb-3"
            >
              Competitors that commonly appear in KL and Malaysia searches
            </motion.h3>

            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-5 text-taupe font-inter mb-6"
            >
              <li>
                Erufu Care ranks strongly because it aggregates clinics,
                reviews, and "best clinics" lists for hyperpigmentation and
                melasma in Kuala Lumpur.
              </li>
              <li>
                Dr Chong Clinic ranks with educational blog content and
                FAQ-style answers for hyperpigmentation and melasma.
              </li>
              <li>
                Sliq Clinic ranks with a clinic page focused on pigment
                treatment, strong authority signals (MOH registration,
                LCP-certified doctors), and a clear list of devices and
                approach.
              </li>
              <li>
                Da Vinci Clinic ranks with pigment removal positioning around
                pico laser and strong service-page SEO.
              </li>
              <li>
                Clique Clinic ranks for melasma with a "multimodality" approach
                narrative and device-based positioning.
              </li>
            </motion.ul>

            <motion.h3
              variants={fadeInUp}
              className="font-georgia text-2xl text-brown mb-3"
            >
              What top-ranking competitor pages do well
            </motion.h3>

            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-5 text-taupe font-inter mb-6"
            >
              <li>
                They speak directly to the fear: "Will it get worse?" "Is it
                safe?"
              </li>
              <li>
                They name the problem clearly: melasma, freckles, sunspots, PIH
              </li>
              <li>
                They lean into combinations: laser plus skincare plus
                maintenance
              </li>
              <li>They provide price anchors or ranges to reduce hesitation</li>
              <li>
                They publish lots of FAQs, which helps capture People Also Ask
                traffic
              </li>
            </motion.ul>

            <motion.h3
              variants={fadeInUp}
              className="font-georgia text-2xl text-brown mb-3"
            >
              How this page helps Nexus Clinic Kuala Lumpur compete
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter mb-3"
            >
              Nexus already has strong building blocks:
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-5 text-taupe font-inter mb-6"
            >
              <li>A KL location advantage with clear address signals</li>
              <li>Long-standing clinic credibility since 2001</li>
              <li>
                Multiple pigmentation solutions including lasers, peels,
                topicals, Dermamelan, and pico laser content
              </li>
              <li>
                Educational content that is actually relevant to Asian skin
                tones
              </li>
            </motion.ul>

            <motion.p variants={fadeInUp} className="text-brown font-inter">
              What will push rankings further is consistent, patient-focused
              copy, strong internal linking, clear FAQs, and visible local
              intent signals.
            </motion.p>
          </motion.div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-8 text-center"
            >
              People Also Ask style FAQs (Malaysia and Kuala Lumpur)
            </motion.h2>

            <div className="space-y-6">
              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-xl p-6"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  What causes pigmentation on the face?
                </h3>
                <p className="text-taupe font-inter">
                  Pigmentation can come from sun exposure, hormonal changes,
                  genetics, ageing, and skin injury or inflammation. In
                  Malaysia, sun exposure and inflammation from acne or
                  irritation are common triggers. The key is identifying your
                  pigment pattern first, because melasma behaves differently
                  from sunspots or post-acne marks. Once we know the trigger,
                  treatment becomes easier to choose and safer to plan.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-xl p-6"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  Can pigmentation be removed permanently?
                </h3>
                <p className="text-taupe font-inter">
                  Some pigmentation can fade for a long time, but "permanent" is
                  tricky, especially if the trigger is still present. Many
                  clinics note that relying only on topical products can be
                  limiting, while treatments like laser and chemical peels can
                  improve the chance of longer-lasting results. Maintenance is
                  the difference-maker. Without sun protection and the right
                  homecare, pigment can return.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-xl p-6"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  What is the best treatment for pigmentation in Malaysia?
                </h3>
                <p className="text-taupe font-inter">
                  It depends on the type and depth of pigment. Malaysian clinics
                  commonly discuss options like pico laser, Q-switched laser,
                  IPL, and chemical peels for hyperpigmentation concerns. A plan
                  is "best" when it improves pigment without triggering rebound
                  or irritation, especially for Asian skin tones. That is why
                  assessment matters before choosing a device.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-xl p-6"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  Is laser treatment safe for melasma?
                </h3>
                <p className="text-taupe font-inter">
                  Laser can be safe when performed by trained doctors using
                  appropriate technology and settings, but melasma needs extra
                  care. Some clinics specifically note that aggressive laser
                  approaches can worsen pigmentation if not used carefully. If
                  your melasma is hormonal and reactive, the plan often includes
                  strict sun protection and maintenance, not only laser
                  sessions.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-xl p-6"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  Can melasma go away on its own?
                </h3>
                <p className="text-taupe font-inter">
                  Melasma may fade slightly over time in some cases, especially
                  if it was triggered by pregnancy, but many people find it
                  persists without treatment. The more sun exposure and heat
                  exposure you get, the more it tends to linger. A proper
                  melasma plan usually focuses on control and long-term
                  management, not a quick "one time" fix.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-xl p-6"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  Are pigmentation treatments safe?
                </h3>
                <p className="text-taupe font-inter">
                  Most pigmentation treatments are safe when performed by
                  experienced medical professionals using suitable techniques
                  for your skin type. Clinics commonly emphasise tailored
                  treatment selection and appropriate aftercare to reduce
                  unwanted side effects. The biggest risk usually comes from
                  over-treating or mixing too many harsh steps at the same time.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-xl p-6"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  How many sessions will I need for pigmentation removal?
                </h3>
                <p className="text-taupe font-inter">
                  There is no single number. Some people see visible improvement
                  after a few sessions, while deeper or recurring pigment
                  patterns take more time. Many KL clinics mention that multiple
                  sessions are typical for pico laser style pigment programs,
                  often in a multi-session plan depending on severity. Your
                  lifestyle also matters. Sun exposure can slow progress.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-xl p-6"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  How much does pigmentation laser treatment cost in Kuala
                  Lumpur?
                </h3>
                <p className="text-taupe font-inter">
                  Costs vary by clinic, device, and area size. Some KL clinics
                  list laser pigmentation costs around RM500 to RM1,000
                  depending on sessions and treatment area, while other Malaysia
                  price guides estimate pico laser pigment sessions around RM400
                  to RM900. Treat these as ranges only. A proper quote depends
                  on your pigment map.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-xl p-6"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  What are the most popular treatments for hyperpigmentation in
                  Kuala Lumpur?
                </h3>
                <p className="text-taupe font-inter">
                  Commonly mentioned options include Q-switched lasers, pico
                  lasers, IPL, and customised chemical peels. The "popular"
                  option is not always the best for you. For example, melasma
                  may need a more cautious approach than sunspots. That is why
                  doctors usually assess pigment type before recommending a
                  device.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-xl p-6"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  What is the difference between melasma and hyperpigmentation?
                </h3>
                <p className="text-taupe font-inter">
                  Hyperpigmentation is a broad term for darkening of skin.
                  Melasma is a specific type that often appears as patches and
                  is commonly linked with hormonal triggers and sun sensitivity.
                  Many educational resources explain that different pigment
                  conditions need different strategies, and that is why
                  diagnosis matters before treatment.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-xl p-6"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  Is pico laser good for pigmentation?
                </h3>
                <p className="text-taupe font-inter">
                  Many Malaysian clinics describe pico laser as effective for
                  pigment concerns because it uses ultra-short pulses to break
                  down melanin particles, often with minimal downtime when used
                  appropriately. That said, your pigment type still matters. A
                  good outcome comes from matching the right laser approach to
                  your pigment pattern and your skin tone.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-xl p-6"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  What should I do after pigmentation treatment?
                </h3>
                <p className="text-taupe font-inter">
                  Aftercare is not optional. Keep your routine gentle, avoid
                  heat and harsh actives for the first few days, and commit to
                  daily sunscreen. Many clinics include post-treatment care
                  guidance as part of safe pigmentation management, especially
                  to reduce rebound pigment or irritation. If you treat pigment
                  but keep getting UV exposure without protection, results will
                  not hold.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Nexus */}
      <section className="py-24 bg-wine text-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl mb-8 text-center"
          >
            Why choose Nexus Clinic Kuala Lumpur for pigmentation?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl mb-8 text-center max-w-2xl mx-auto"
          >
            Because you do not just want lighter spots. You want stable skin
            that stays calm.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center"
          >
            <div>
              <Award className="w-12 h-12 mx-auto mb-4 text-rose" />
              <p className="font-inter">
                A long-established clinic in KL, founded in 2001
              </p>
            </div>
            <div>
              <MapPin className="w-12 h-12 mx-auto mb-4 text-rose" />
              <p className="font-inter">
                Easy KL access at Wisma UOA II, Jalan Pinang
              </p>
            </div>
            <div>
              <Layers className="w-12 h-12 mx-auto mb-4 text-rose" />
              <p className="font-inter">
                Multiple pigmentation pathways, not one "signature laser" for
                everyone
              </p>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-center mt-8 text-cream/90 font-inter"
          >
            Practical education for Asian skin tones, including when to choose
            laser vs peel
          </motion.p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 text-center max-w-3xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-6"
          >
            Ready to start treating the cause?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-taupe font-inter text-lg mb-8"
          >
            You will know what is realistic, what needs consistency, and what
            will keep coming back if you skip aftercare.
          </motion.p>
          <motion.button
            variants={scaleIn}
            className="bg-wine text-light px-12 py-4 rounded-full font-inter text-lg hover:bg-rose transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Book Your Consultation
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default PigmentationLanding;
