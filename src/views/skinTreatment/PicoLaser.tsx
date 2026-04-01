"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Sun,
  Heart,
  Target,
  CheckCircle2,
  AlertCircle,
  Flame,
  Sparkle,
  Zap,
  Syringe,
  Camera,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const PicoLaserLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "skin/picoLaser");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-pico-laser1.webp",
      after: "/images/B&A-skin/B&A-pico-laser1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-pico-laser2.webp",
      after: "/images/B&A-skin/B&A-pico-laser2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-pico-laser3.webp",
      after: "/images/B&A-skin/B&A-pico-laser3.webp",
    },
  ];
  return (
    <div className="w-full overflow-hidden bg-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-linear-to-br from-cream via-light to-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8 py-20"
        >
          <div className="max-w-4xl">
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-medium">
                Nexus Clinic Kuala Lumpur
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-georgia text-brown mb-6 leading-tight"
            >
              Your "clear skin" moment
              <span className="block text-wine">starts here.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-taupe mb-8 max-w-2xl"
            >
              Not in perfect lighting, but in real life.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe mb-8 max-w-2xl"
            >
              Pico Laser is a modern, gentle laser option used to target
              stubborn pigmentation, post acne marks, dull tone, and early
              texture changes with minimal downtime. At Nexus Clinic Kuala
              Lumpur, we plan it like a medical treatment, not a one size fits
              all package.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-wine text-light rounded-full hover:bg-rose transition-colors duration-300 font-medium">
                Book Assessment
              </button>
              <button className="px-8 py-4 border-2 border-wine text-wine rounded-full hover:bg-wine/5 transition-colors duration-300 font-medium">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-light to-transparent" />
      </section>

      {/* Trust Badges Section - ALL WORDS INCLUDED */}
      <section className="py-16 bg-cream border-y border-taupe/20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-georgia text-brown text-center mb-8"
          >
            Trust at a glance (Nexus Clinic KL)
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-wine shrink-0" />
              <div>
                <h3 className="font-georgia text-lg text-brown mb-2">
                  MOH registered, doctor led clinic in Kuala Lumpur
                </h3>
                <p className="text-taupe">
                  Address: LG 10, Lower Ground Floor, Wisma UOA II, Jalan
                  Pinang, 50450 Kuala Lumpur
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start gap-4">
              <Target className="w-8 h-8 text-wine shrink-0" />
              <div>
                <h3 className="font-georgia text-lg text-brown mb-2">
                  Evidence based planning
                </h3>
                <p className="text-taupe">
                  with clear discussion of downtime, risks, and alternatives
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-wine shrink-0" />
              <div>
                <h3 className="font-georgia text-lg text-brown mb-2">
                  Medical Approach
                </h3>
                <p className="text-taupe">
                  Planned like a medical treatment, not one size fits all
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Reality Check Section - ALL WORDS INCLUDED */}
      <section className="py-24 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block p-4 bg-wine/10 rounded-full">
                <Sparkle className="w-8 h-8 text-wine" />
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown mb-8"
            >
              Quick reality check
              <span className="block text-2xl text-taupe mt-2">
                (because your skin is not a filter)
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe mb-6 leading-relaxed"
            >
              If you are dealing with pigment that keeps coming back, acne marks
              that refuse to fade, or a "why do I look tired" tone even after
              skincare, Pico Laser can be a smart next step. It is not magic. It
              is also not harsh when done correctly.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe bg-cream p-8 rounded-3xl"
            >
              And yes, in Malaysia's sun and humidity, pigmentation can be
              stubborn. Results come from the right settings, the right spacing
              between sessions, and the right aftercare.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* What is Pico Laser + Image Section - ALL WORDS INCLUDED */}
      <section className="py-24 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl font-georgia text-brown mb-6">
                What is Pico Laser, in simple words?
              </h2>
              <p className="text-taupe text-lg leading-relaxed mb-6">
                Pico Laser is a picosecond laser. "Picosecond" means the energy
                is delivered in ultra short bursts. The idea is to break pigment
                into tiny particles and stimulate skin remodeling while limiting
                excess heat spread.
              </p>
              <p className="text-taupe text-lg leading-relaxed">
                Nexus Clinic also describes Pico Laser as a non surgical way to
                improve concerns like acne scars, freckles, tattoos, and more,
                and notes it is used across skin types.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/skin/pico-laser.webp"
                  alt="Pico Laser Treatment at Nexus Clinic"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-wine/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Treatment Goals Section - ALL WORDS INCLUDED */}
      <section className="py-24 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-8"
          >
            What can Pico Laser treat?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12"
          >
            In Kuala Lumpur clinics, Pico Laser is commonly positioned for a mix
            of pigment, texture, and rejuvenation goals.
          </motion.p>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-georgia text-brown text-center mb-8"
          >
            Most common treatment goals in Malaysia
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Sunspots, freckles, uneven tone, and surface pigmentation",
              "Post acne marks (PIH) and dullness",
              "Enlarged pores and mild texture issues",
              "Acne scar appearance improvement (often best for mild to moderate textural change)",
              "Tattoo lightening or removal plans",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="p-4 bg-cream rounded-xl border border-taupe/20"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine mt-1 shrink-0" />
                  <p className="text-brown">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-taupe mt-8 italic border-l-4 border-wine pl-4"
          >
            One competitor (Da Vinci Clinic) lists acne scars, melasma, sun
            spots, uneven tone, rejuvenation, and tattoo removal as common Pico
            Laser uses, and highlights minimal downtime. That is consistent with
            how pico lasers are marketed clinically in KL.
          </motion.p>
        </motion.div>
      </section>

      {/* Malaysian Skin Tone Section - ALL WORDS INCLUDED */}
      <section className="py-24 bg-rose/5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-6"
            >
              Why Pico Laser is popular for Malaysian skin tones
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-taupe text-lg mb-6">
              Many Malaysians sit in medium to deeper skin tone ranges. Heat
              based treatments can sometimes trigger post inflammatory
              hyperpigmentation (PIH) if the settings are too aggressive or
              aftercare is poor.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-3xl border border-wine/20"
            >
              <p className="text-brown italic">
                "A clinical review on treating PIH in skin of colour notes that
                picosecond lasers are recognized as safe for darker skin tones
                because they can minimize unwanted heat damage."
              </p>
              <p className="text-taupe mt-4">
                This does not mean "zero risk." It means the technology can be
                used thoughtfully for the right patient, with the right plan.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Session Experience - ALL WORDS INCLUDED */}
      <section className="py-24 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl font-georgia text-brown mb-6">
                What a Pico Laser session feels like
              </h2>
              <p className="text-taupe text-lg mb-4">
                Most people describe it as quick snaps or a warm tingling. It is
                usually very tolerable.
              </p>
              <p className="text-taupe text-lg mb-4">
                A KL competitor page describes the sensation as mild snaps with
                no "heat or pain" and notes procedure time around 15 to 30
                minutes, with mild redness for a few hours.
              </p>
              <p className="text-taupe text-lg">
                If you are treating tattoos, discomfort can be stronger. The
                American Academy of Dermatology notes laser tattoo removal can
                feel uncomfortable or painful, and numbing options are commonly
                used.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-cream p-8 rounded-3xl"
            >
              <h3 className="text-xl font-georgia text-brown mb-4">
                Sensation Timeline:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-wine" />
                  <span className="text-brown">
                    Quick snaps or warm tingling
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-wine" />
                  <span className="text-brown">
                    Procedure time: 15-30 minutes
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Flame className="w-5 h-5 text-wine" />
                  <span className="text-brown">
                    Mild redness for a few hours
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Syringe className="w-5 h-5 text-wine" />
                  <span className="text-brown">
                    Numbing options for tattoo removal
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Nexus Clinic Approach - ALL WORDS INCLUDED */}
      <section className="py-24 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-4"
          >
            The Nexus Clinic approach
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12 italic"
          >
            (how we keep it safe and worth it)
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-center text-brown mb-12 max-w-3xl mx-auto"
          >
            Nexus Clinic positions itself as a medical aesthetic clinic with a
            doctor first, diagnosis driven approach and an emphasis on
            explaining outcomes, risks, downtime, and alternatives.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-center text-wine font-medium mb-12"
          >
            Here is how that translates into a Pico Laser plan:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={scaleIn}
              className="bg-light p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-georgia text-wine mb-4">
                1) Skin assessment first
              </h3>
              <p className="text-brown mb-3">We look at:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine mt-1 shrink-0" />
                  What type of pigmentation you have (surface, mixed, deeper)
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine mt-1 shrink-0" />
                  Whether you are dealing with melasma patterns
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine mt-1 shrink-0" />
                  Acne activity and inflammation level
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine mt-1 shrink-0" />
                  Past reaction history (PIH, sensitivity, allergies)
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-georgia text-wine mb-4">
                2) Patch testing when needed
              </h3>
              <p className="text-brown">
                If your skin is reactive, or you have a history of PIH, a patch
                test can be a smart safety step.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-georgia text-wine mb-4">
                3) A plan that mixes in skincare and sun strategy
              </h3>
              <p className="text-brown italic">
                Laser without aftercare is like gym without protein. You can do
                it, but you will not love the results.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Before Treatment - ALL WORDS INCLUDED */}
      <section className="py-24 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-16"
          >
            Before treatment: what to do (and what to stop)
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <h3 className="text-2xl font-georgia text-wine mb-6">
                In the 7 days before
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-wine mt-1 shrink-0" />
                  <span className="text-brown">
                    Avoid aggressive exfoliation, harsh acids, and strong
                    retinoids unless your doctor advises otherwise
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sun className="w-5 h-5 text-wine mt-1 shrink-0" />
                  <span className="text-brown">
                    Avoid tanning and heavy sun exposure
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-wine mt-1 shrink-0" />
                  <span className="text-brown">
                    Tell the clinic about any photosensitizing medication,
                    recent peels, or active breakouts
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <h3 className="text-2xl font-georgia text-wine mb-6">
                On the day
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine mt-1 shrink-0" />
                  <span className="text-brown">
                    Come with clean skin if possible
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-wine mt-1 shrink-0" />
                  <span className="text-brown">
                    Expect photos for progress tracking (this matters more than
                    memory)
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Aftercare Section - ALL WORDS INCLUDED */}
      <section className="py-24 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-8"
          >
            Aftercare that protects your results (especially in KL sun)
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            Your skin may look a bit red, slightly warm, or mildly puffy for a
            short time.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-light p-8 rounded-3xl mb-8"
          >
            <p className="text-brown">
              DermNet lists potential side effects of picosecond laser treatment
              including pain, redness, swelling, crusting, blistering, scarring,
              and post inflammatory pigment changes, especially if excessive
              settings are used.
            </p>
          </motion.div>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-georgia text-wine text-center mb-6"
          >
            Simple aftercare that works
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Be gentle for 48 hours",
              "Use sunscreen daily and reapply if you are outdoors",
              "Skip hot showers, sauna, and heavy workouts for at least 48 hours if you flush easily (heat can worsen irritation)",
              "Avoid picking any dry flakes or 'sandpaper' texture if it appears",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="flex items-start gap-3 p-4 bg-light rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-wine mt-1 shrink-0" />
                <span className="text-brown text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Style Section 1 - ALL WORDS INCLUDED */}
      <section className="py-24 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8 max-w-3xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="border-b border-taupe/20 pb-6">
              <h3 className="text-xl font-georgia text-brown mb-2">
                Can your face peel after Pico Laser?
              </h3>
              <p className="text-taupe">
                Yes, mild peeling can happen, especially when treating
                pigmentation. A competitor FAQ notes it can be part of the
                skin's natural healing process.
              </p>
            </div>

            <div className="border-b border-taupe/20 pb-6">
              <h3 className="text-xl font-georgia text-brown mb-2">
                Can you wash your face after Pico Laser?
              </h3>
              <p className="text-taupe">
                Yes, gently. That same competitor FAQ recommends gentle
                cleansing and lukewarm water.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* How Many Sessions - ALL WORDS INCLUDED */}
      <section className="py-24 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-8"
          >
            How many Pico Laser sessions do you need?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12"
          >
            This depends on the concern and how your skin responds.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-brown mb-6">
            In real KL market practice, clinics often package multiple sessions.
            For example, Dr Chong Clinic lists per session pricing and also a 5
            plus 1 session package, which reflects the reality that pigment and
            texture concerns usually need a series.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-brown mb-12">
            For PicoSure type protocols, some providers recommend a series of 3
            to 4 treatments, often spaced 2 to 4 weeks apart, and sometimes
            longer for darker skin types.
          </motion.p>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-georgia text-wine text-center mb-8"
          >
            A practical guide
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Surface pigment and glow goals: often 3 to 5 sessions",
              "Post acne marks: often 3 to 6 sessions",
              "Melasma: treat carefully, results vary, and maintenance is common",
              "Tattoos: more sessions are typical and depend on ink colour and depth",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="p-4 bg-light rounded-xl border border-taupe/20"
              >
                <p className="text-brown">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Downtime Section - ALL WORDS INCLUDED */}
      <section className="py-24 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-8"
          >
            Downtime: will you need to hide at home?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-2xl text-wine mb-8"
          >
            Most people do not.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12"
          >
            A KL competitor describes downtime as mild redness for a few hours
            and "no downtime" in general scheduling terms.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-brown text-center mb-4 font-medium"
          >
            Still, plan smart:
          </motion.p>

          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-wine mt-1 shrink-0" />
              <span className="text-brown">
                Do it when you do not have a big event the next day if your skin
                gets red easily
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Sun className="w-5 h-5 text-wine mt-1 shrink-0" />
              <span className="text-brown">
                If you are prone to PIH, you want to be extra strict with
                sunscreen
              </span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Pros and Cons - ALL WORDS INCLUDED */}
      <section className="py-24 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-16"
          >
            Pros and cons
            <span className="block text-xl text-taupe mt-2">
              (honest version)
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-3xl border border-green-200"
            >
              <h3 className="text-2xl font-georgia text-brown mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Pros
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe">
                  <span className="text-green-600">•</span>
                  Targets pigment with less reliance on heat spread, which can
                  be helpful for many skin tones
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="text-green-600">•</span>
                  Quick sessions and minimal disruption for busy schedules
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="text-green-600">•</span>
                  Can support overall tone and texture improvement over time
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-light p-8 rounded-3xl border border-rose/30"
            >
              <h3 className="text-2xl font-georgia text-brown mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-rose" />
                Cons
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe">
                  <span className="text-rose">•</span>
                  Not a one session miracle for most concerns
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="text-rose">•</span>
                  Melasma can recur and needs a long term plan
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="text-rose">•</span>
                  Wrong settings or poor aftercare can still trigger PIH
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="text-rose">•</span>
                  Deeper scars may need combination treatments (subcision, RF
                  microneedling, fractional resurfacing) rather than Pico alone
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Side Effects - ALL WORDS INCLUDED */}
      <section className="py-24 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-8"
          >
            Side effects and safety notes
            <span className="block text-xl text-taupe mt-2">
              (especially for pigmentation prone skin)
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12"
          >
            Most side effects are temporary. The key risks to understand:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
            {[
              "Temporary redness and swelling",
              "Temporary darkening of pigment before it clears",
              "PIH or hypopigmentation in some cases",
              "Rare blistering or scarring, usually linked to overly aggressive treatment settings",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="p-4 bg-cream rounded-xl"
              >
                <p className="text-brown">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-wine font-medium text-lg"
          >
            This is why provider skill matters as much as the device.
          </motion.p>
        </motion.div>
      </section>

      {/* Comparison Section - ALL WORDS INCLUDED */}
      <section className="py-24 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-4"
          >
            Pico Laser vs other treatments
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12 italic"
          >
            (how to choose)
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-center text-brown mb-12"
          >
            You do not need every laser. You need the right tool.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="bg-light p-6 rounded-2xl">
                <h3 className="text-xl font-georgia text-wine mb-2">
                  Pico Laser vs Q switched laser (especially for tattoos)
                </h3>
                <p className="text-taupe">
                  Nexus Clinic explains Pico Laser delivers ultra short pulses
                  that can shatter ink particles more efficiently than
                  traditional nanosecond lasers, with advantages like fewer
                  sessions and reduced heat damage.
                </p>
              </div>

              <div className="bg-light p-6 rounded-2xl">
                <h3 className="text-xl font-georgia text-wine mb-2">
                  Pico Laser vs IPL
                </h3>
                <p className="text-taupe">
                  IPL can help certain pigment and redness issues, but it is not
                  the same as a picosecond laser. If you are very prone to PIH,
                  your doctor may steer you toward safer settings and more
                  targeted options.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-light p-6 rounded-2xl">
                <h3 className="text-xl font-georgia text-wine mb-2">
                  Pico Laser vs chemical peels
                </h3>
                <p className="text-taupe">
                  Peels can be useful for surface pigmentation, but physical
                  treatments can also aggravate PIH by injuring the epidermis,
                  especially if not matched to your pigment type.
                </p>
              </div>

              <div className="bg-light p-6 rounded-2xl">
                <h3 className="text-xl font-georgia text-wine mb-2">
                  Pico Laser vs fractional CO2
                </h3>
                <p className="text-taupe">
                  CO2 is stronger for deep scars and major texture issues, but
                  downtime and risk profile are higher. Pico is often chosen
                  when you want improvement with less downtime.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Treatment Areas - ALL WORDS INCLUDED */}
      <section className="py-24 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-8"
          >
            Areas Pico Laser can treat
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12"
          >
            Common areas include:
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Full face (tone, pores, pigment)",
              "Cheeks (post acne marks, freckles)",
              "Upper lip (careful planning for melasma patterns)",
              "Neck and chest (sun damage)",
              "Hands (age spots)",
              "Back and shoulders (back acne marks and uneven tone)",
              "Tattoo areas (removal plan)",
            ].map((area, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="p-4 bg-cream rounded-xl text-center"
              >
                <p className="text-brown text-sm">{area}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Melasma Section - ALL WORDS INCLUDED */}
      <section className="py-24 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-8"
          >
            Pico Laser for pigmentation and melasma in Malaysia
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            If you are searching "pico laser Malaysia for melasma," here is the
            truth: melasma is complex. Hormones, sun, heat, and inflammation all
            play a role. Laser can help, but recurrence is common, so we plan it
            as part of a bigger strategy, not a standalone fix.
          </motion.p>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-georgia text-wine text-center mb-6"
          >
            A good plan often includes:
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Trigger control (sun and heat management)",
              "Medical grade topicals (doctor guided)",
              "Careful energy settings and spacing",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="p-6 bg-light rounded-2xl text-center"
              >
                <p className="text-brown">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Section - ALL WORDS INCLUDED */}
      <section className="py-24 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-4"
          >
            Cost of Pico Laser in Kuala Lumpur and Malaysia
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            Pricing varies by:
          </motion.p>

          <ul className="list-disc list-inside text-brown mb-8 max-w-2xl mx-auto space-y-2">
            <li>Device type and clinic level</li>
            <li>Treatment area size (spot vs full face)</li>
            <li>
              The concern (stubborn pigment and tattoos take more sessions)
            </li>
            <li>
              Whether your plan includes calming facials, masks, LED, or topical
              bundles
            </li>
          </ul>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-georgia text-wine text-center mb-6"
          >
            What competitors in KL publish (useful as a market reference)
          </motion.h3>

          <motion.p variants={fadeInUp} className="text-center text-brown mb-4">
            Dr Chong Clinic lists RM1,200 per session, a RM398 first trial, and
            a 5 plus 1 package at RM5,800 (normal RM7,200), subject to
            consultation and availability.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-center text-brown mb-8">
            Clique Clinic states price depends on skin concerns, area size, and
            number of sessions, and encourages consultation for personalised
            pricing.
          </motion.p>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-georgia text-wine text-center mb-6"
          >
            Best way to budget
          </motion.h3>

          <motion.p variants={fadeInUp} className="text-center text-brown mb-4">
            Assume you may need a series. Then decide if you prefer:
          </motion.p>

          <ul className="list-disc list-inside text-brown max-w-2xl mx-auto space-y-2">
            <li>Lower cost per session with more sessions</li>
            <li>Fewer sessions with higher tech and higher per session cost</li>
          </ul>

          <motion.p
            variants={fadeInUp}
            className="text-center text-wine font-medium mt-4"
          >
            Your doctor should help you make that tradeoff clearly.
          </motion.p>
        </motion.div>
      </section>

      {/* Competitor Scan - ALL WORDS INCLUDED */}
      <section className="py-24 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-4"
          >
            A quick competitor scan
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12"
          >
            (what top pages in KL emphasize)
          </motion.p>

          <motion.p variants={fadeInUp} className="text-center text-brown mb-8">
            When people search Pico Laser in Kuala Lumpur, several clinic pages
            commonly appear and they tend to highlight similar themes:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Clique Clinic (PicoSure): strong brand focus on PicoSure, plus FAQs on peeling, washing face after treatment, and pricing dependence on consultation.",
              "Da Vinci Clinic: emphasizes benefits like minimal discomfort, reduced downtime, and treatment time around 15 to 30 minutes, plus a broad list of concerns treated.",
              "Dr Chong Clinic: stands out by publishing specific pricing and multi session package structure.",
              "Kaiteki: highlights use of multiple laser platforms and positions Pico Laser for pigmentation and scars with minimal downtime.",
              "Clinic Cleo: highlights StarWalker PQX picosecond laser and frames it as photoacoustic and non thermal in approach.",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="p-6 bg-light rounded-2xl"
              >
                <p className="text-brown text-sm">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-georgia text-wine text-center mb-4"
          >
            How Nexus Clinic KL should differentiate
          </motion.h3>

          <motion.p variants={fadeInUp} className="text-center text-brown mb-4">
            Lead with medical planning, skin diagnosis, and safety protocols,
            especially for pigmentation prone skin. Nexus Clinic already
            positions itself as MOH registered, doctor led, and evidence based
            with clear discussion of risks and alternatives.
          </motion.p>
        </motion.div>
      </section>

      {/* Why Choose Nexus - ALL WORDS INCLUDED */}
      <section className="py-24 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-4"
          >
            Why choose Nexus Clinic Kuala Lumpur for Pico Laser?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-2xl text-wine mb-12 italic"
          >
            Because you want results you can keep, not just a glow that fades.
          </motion.p>

          <div className="space-y-4 max-w-2xl mx-auto mb-8">
            {[
              "MOH registered and compliant, doctor led care",
              "Evidence based planning and transparent expectations",
              "Convenient KL location at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="flex items-start gap-3 p-4 bg-cream rounded-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-wine shrink-0" />
                <span className="text-brown">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-brown italic"
          >
            If a treatment is not suitable, Nexus states they will explain why
            and discuss safer options. That is the mindset that protects your
            skin long term.
          </motion.p>
        </motion.div>
      </section>

      {/* People Also Ask - ALL WORDS INCLUDED */}
      <section className="py-24 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-12"
          >
            People Also Ask style FAQs
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What is Pico Laser treatment?",
                a: "Pico Laser uses ultra short bursts of laser energy to target pigment and support skin remodeling while limiting excess heat spread. It is commonly used for pigmentation concerns, post acne marks, texture, and tattoo removal plans.",
              },
              {
                q: "Is Pico Laser painful?",
                a: "Most people feel quick snaps or mild tingling. It is usually manageable. Tattoo removal can be more uncomfortable, and numbing options are often used.",
              },
              {
                q: "How many Pico Laser sessions do I need?",
                a: "Many people need a series, not one session. Some protocols recommend 3 to 4 sessions, and KL clinics often package multiple sessions depending on the concern. Your plan depends on pigment depth, skin type, and goals.",
              },
              {
                q: "How long is the downtime after Pico Laser?",
                a: "Downtime is usually minimal. Many people just have mild redness for a few hours. Some may get slight dryness or light peeling depending on what was treated.",
              },
              {
                q: "Does your face peel after Pico Laser?",
                a: "It can. Mild peeling is reported by some patients, especially when targeting pigmentation. It is part of the skin's natural renewal process.",
              },
              {
                q: "Can I wash my face after Pico Laser?",
                a: "Yes. Use a gentle cleanser and lukewarm water. Avoid harsh products for a few days unless your doctor advises otherwise.",
              },
              {
                q: "Is Pico Laser safe for darker or medium skin tones common in Malaysia?",
                a: "It can be, when performed correctly. A clinical review notes picosecond lasers are recognized as safe for darker skin tones due to minimizing unwanted heat damage. Risks like PIH still exist, so settings and aftercare matter a lot.",
              },
              {
                q: "How much does Pico Laser cost in Malaysia?",
                a: "It varies by clinic, device, and treatment area. Some KL clinics publish ranges or package structures. For example, Dr Chong Clinic lists RM1,200 per session and also a multi session package, while Clique notes pricing depends on concern, area, and sessions needed.",
              },
              {
                q: "Can Pico Laser remove melasma permanently?",
                a: "Melasma can improve, but recurrence is common because triggers like sun, heat, and hormones continue. Laser is usually one part of a longer plan that includes sun protection and topical treatment.",
              },
              {
                q: "Can Pico Laser remove tattoos completely?",
                a: "Laser tattoo removal is considered the preferred method over other removal options, but results depend on ink colour, depth, and your immune response. Multiple sessions are usually needed.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-light p-6 rounded-2xl border border-taupe/20"
              >
                <h3 className="text-lg font-medium text-brown mb-2">{faq.q}</h3>
                <p className="text-taupe">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA - ALL WORDS INCLUDED */}
      <section className="py-24 bg-wine relative overflow-hidden">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 md:px-8 relative z-10"
        >
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-georgia text-light mb-8">
              CTA (close)
            </h2>

            <p className="text-xl text-cream/90 mb-12">
              If you are looking for Pico Laser in Kuala Lumpur with a medical,
              skin first plan, book an assessment at Nexus Clinic Kuala Lumpur
              (Wisma UOA II, Jalan Pinang). Start with a proper diagnosis, then
              choose the right settings and schedule for your skin.
            </p>

            <button className="px-12 py-5 bg-light text-wine rounded-full hover:bg-cream transition-colors duration-300 font-medium text-lg">
              Book Your Assessment
            </button>

            <p className="text-cream/80 mt-8 text-sm">
              Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown/20 rounded-full blur-3xl" />
      </section>
    </div>
  );
};

export default PicoLaserLanding;
