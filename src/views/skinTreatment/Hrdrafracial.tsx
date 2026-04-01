"use client";

// HydraFacialLandingPage.jsx
import { motion } from "framer-motion";
import {
  Droplets,
  Sparkles,
  Shield,
  Clock,
  Wind,
  CheckCircle2,
  Heart,
  MapPin,
  ChevronRight,
  Droplet,
  Eye,
  Feather,
  ThermometerSun,
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

const HydraFacialLandingPage = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "skin/hydrafacial");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-hydrafacial1.webp",
      after: "/images/B&A-skin/B&A-hydrafacial1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-hydrafacial2.webp",
      after: "/images/B&A-skin/B&A-hydrafacial2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-hydrafacial3.webp",
      after: "/images/B&A-skin/B&A-hydrafacial3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-wine/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h1 className="font-georgia text-4xl lg:text-5xl xl:text-6xl text-brown leading-tight">
                Your clean-skin reset in Kuala Lumpur,
                <span className="text-wine block">
                  without the "facial drama"
                </span>
              </h1>

              <p className="text-lg text-taupe leading-relaxed max-w-lg">
                Deep cleanse. Gentle suction. Fresh hydration. You walk out
                looking rested, not red. Made for Malaysia's heat, humidity, and
                city-life buildup that sits in your pores.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative z-10 bg-linear-to-br from-cream to-light p-8 rounded-3xl shadow-xl border border-white/50 backdrop-blur-sm">
                <h2 className="font-georgia text-2xl text-brown mb-6">
                  Trust Nexus Clinic Kuala Lumpur
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Shield,
                      text: "MOH-registered clinic and doctor-led planning",
                    },
                    {
                      icon: MapPin,
                      text: "Central KL location: Wisma UOA II, Jalan Pinang",
                    },
                    {
                      icon: Clock,
                      text: "Hydrafacial Deep Cleanse: downtime none, typically done monthly",
                    },
                    {
                      icon: Eye,
                      text: "Transparent starting price listed for Hydrafacial Deep Cleanse",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <item.icon className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-wine/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Introduction Section - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-cream/50">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
              If your skin could talk, it would ask for this
            </h2>
            <p className="text-lg text-taupe max-w-2xl mx-auto">
              Kuala Lumpur life is intense on skin. Heat. Sweat. Sunscreen.
              Air-conditioning. Daily commuting. Add makeup, and suddenly your
              pores feel "full" even when you cleanse properly.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-glass backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/50 shadow-lg"
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-georgia text-2xl text-wine mb-3">
                  A hydra facial is for that exact moment.
                </h3>
                <p className="text-brown leading-relaxed">
                  It's not a random pamper session. It's a practical reset that
                  cleans, clears, and hydrates in one go. Most people notice the
                  glow fast. The better part is how smooth your skin feels the
                  next day.
                </p>
              </div>

              <div>
                <h3 className="font-georgia text-2xl text-wine mb-3">
                  At Nexus Clinic Kuala Lumpur, we keep it simple.
                </h3>
                <p className="text-brown leading-relaxed">
                  We assess your skin, then choose a plan that matches your
                  sensitivity level, your breakouts, and your schedule. We do
                  not push what you don't need. That doctor-first approach is
                  part of how Nexus Clinic positions its care.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* What is HydraFacial Section with Image - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                What is a hydra facial{" "}
                <span className="text-wine">(HydraFacial-style treatment)</span>
              </h2>

              <p className="text-lg text-taupe leading-relaxed">
                A hydra facial is a non-invasive, multi-step facial that
                typically combines cleansing, exfoliation, gentle extraction
                (using suction), and hydration with skin serums. Many clinics
                describe it as a single session that covers several skin goals
                at once.
              </p>

              <div className="bg-cream p-6 rounded-2xl border-l-4 border-wine">
                <p className="text-brown italic">
                  "Think of it like this: A regular facial may feel relaxing. A
                  hydra facial feels relaxing and looks like you did something
                  'real' for your pores."
                </p>
              </div>

              <p className="text-brown">
                At Nexus Clinic KL, the listing describes it as gentle deep
                cleansing and hydration for all skin types, with no downtime and
                a monthly rhythm for maintenance.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              {/* Image Container - Single Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/skin/hydrafacial.webp"
                  alt="HydraFacial treatment at Nexus Clinic KL"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/20 to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-wine/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-rose/10 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Popular in Malaysia - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-cream/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-brown text-center mb-12"
          >
            Why it's popular in{" "}
            <span className="text-wine">Malaysia (especially KL)</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-lg text-brown">Because it fits real life.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-white/50">
                <Clock className="w-8 h-8 text-wine mb-3" />
                <p className="text-brown">You can do it during a busy week.</p>
              </div>
              <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-white/50">
                <ThermometerSun className="w-8 h-8 text-wine mb-3" />
                <p className="text-brown">
                  It works well when your face feels congested from humidity.
                </p>
              </div>
              <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-white/50">
                <Sparkles className="w-8 h-8 text-wine mb-3" />
                <p className="text-brown">
                  It can be a smart pre-event glow option because there's
                  typically no downtime.
                </p>
              </div>
              <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-white/50">
                <Heart className="w-8 h-8 text-wine mb-3" />
                <p className="text-brown">
                  And for many Malaysian skin tones, people worry about
                  irritation or marks after treatments.
                </p>
              </div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe bg-cream p-4 rounded-xl"
            >
              Nexus Clinic's own guidance notes that when performed properly at
              a reputable clinic, treatments like HydraFacial can be safe for
              darker skin types, while aggressive options should be chosen
              cautiously.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* What It Helps With - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-5xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-brown text-center mb-4"
          >
            What it helps with{" "}
            <span className="text-wine">(in plain words)</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            A hydra facial can be a great fit if you're dealing with:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              "Oily skin and visible blackheads",
              "Rough texture and dullness",
              "Dehydrated skin that still looks 'shiny'",
              "Enlarged-looking pores",
              "Uneven tone from daily sun exposure",
              "'Tired face' before a big event",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-cream p-4 rounded-xl flex items-start gap-3 border border-white/50"
              >
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={fadeInUp} className="text-center text-taupe mt-6">
            Many clinics position it for concerns like uneven tone, congestion,
            and dehydration, and highlight its step-by-step structure (cleanse,
            extract, hydrate).
          </motion.p>
        </motion.div>
      </section>

      {/* Treatment Steps - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-cream/50">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Cleanse + gentle exfoliation",
                icon: Droplets,
              },
              {
                step: "2",
                title: "Extraction using painless, gentle suction",
                icon: Wind,
              },
              {
                step: "3",
                title: "Hydration infusion with nourishing serums",
                icon: Droplet,
              },
              {
                step: "4",
                title: "Optional finishing steps depending on your skin goals",
                icon: Feather,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-white/50"
              >
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-wine" />
                </div>
                <div className="text-2xl font-bold text-wine/30 mb-2">
                  {item.step}.
                </div>
                <h3 className="font-georgia text-lg text-brown">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-8 space-y-4">
            <p className="text-brown text-center">
              You'll see this exact "cleanse, extract, hydrate" style breakdown
              across top-ranking clinic pages.
            </p>
            <p className="text-brown text-center bg-cream p-4 rounded-xl">
              What it feels like: cool, wet, and smooth. Not scratchy. Not
              painful. Many clinics specifically say it's generally comfortable.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Who It's For - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-5xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-brown text-center mb-12"
          >
            Who it's for{" "}
            <span className="text-wine">(and who should pause first)</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <h3 className="font-georgia text-2xl text-wine">Great for:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-wine">•</span>
                  Students, office professionals, and frequent travelers
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-wine">•</span>
                  People who wear makeup often
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-wine">•</span>
                  Men who want cleaner pores without a complicated routine
                  (HydraFacial is commonly marketed for both men and women)
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              <h3 className="font-georgia text-2xl text-rose">
                Pause and ask first if:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-rose">•</span>
                  You have an active skin infection, open wound, or cold sore
                  flare
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-rose">•</span>
                  Your skin is sunburnt
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-rose">•</span>
                  You recently did strong peels, lasers, or started strong
                  prescription products
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-center text-taupe italic"
          >
            A proper consultation matters because not every "glow treatment" is
            safe for every skin condition. Nexus Clinic's model is
            assessment-first, then plan.
          </motion.p>
        </motion.div>
      </section>

      {/* How Treatment Works - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-cream/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-brown text-center mb-8"
          >
            How the treatment works{" "}
            <span className="text-wine">(what happens in the room)</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            Different clinics describe steps slightly differently, but the usual
            flow looks like this:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-glass backdrop-blur-sm p-8 rounded-3xl border border-white/50"
          >
            <ol className="space-y-4">
              <li className="flex items-start gap-3 text-brown">
                <span className="w-6 h-6 bg-wine text-light rounded-full flex items-center justify-center shrink-0 mt-1">
                  1
                </span>
                Cleanse + gentle exfoliation
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="w-6 h-6 bg-wine text-light rounded-full flex items-center justify-center shrink-0 mt-1">
                  2
                </span>
                Extraction using painless, gentle suction
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="w-6 h-6 bg-wine text-light rounded-full flex items-center justify-center shrink-0 mt-1">
                  3
                </span>
                Hydration infusion with nourishing serums
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="w-6 h-6 bg-wine text-light rounded-full flex items-center justify-center shrink-0 mt-1">
                  4
                </span>
                Optional finishing steps depending on your skin goals
              </li>
            </ol>

            <p className="mt-6 text-brown italic">
              You'll see this exact "cleanse, extract, hydrate" style breakdown
              across top-ranking clinic pages.
            </p>

            <p className="mt-4 text-brown">
              What it feels like: cool, wet, and smooth. Not scratchy. Not
              painful. Many clinics specifically say it's generally comfortable.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Results Section - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-brown text-center mb-4"
          >
            What results can you expect{" "}
            <span className="text-wine">(and how long do they last)?</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-3xl">
            <p className="text-brown mb-4">You'll usually notice:</p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-brown">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                Cleaner-looking pores
              </li>
              <li className="flex items-start gap-2 text-brown">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                Softer texture
              </li>
              <li className="flex items-start gap-2 text-brown">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                Better hydration and glow
              </li>
            </ul>

            <p className="text-brown mb-4">
              A lot of people love how their skin looks immediately after.
              Editorial skincare sources also describe the "instant glow" effect
              and minimal downtime as a key reason it stays popular.
            </p>

            <div className="mt-4 p-4 bg-light rounded-xl">
              <p className="text-taupe">
                <span className="font-semibold text-brown">
                  How long it lasts:
                </span>{" "}
                it varies with skincare, sun exposure, and how oily your skin
                is. Many clinics recommend doing it monthly for maintenance.
                Nexus Clinic's hydrafacial listing also suggests a monthly
                cadence.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Pros & Cons - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-cream/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-5xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-brown text-center mb-12"
          >
            Pros and cons <span className="text-wine">(honest version)</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <h3 className="font-georgia text-2xl text-wine">Pros</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-wine">•</span>
                  No real downtime for most people
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-wine">•</span>
                  Good "first treatment" if you're nervous about stronger
                  procedures
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-wine">•</span>
                  Can be customized based on your main concern
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-wine">•</span>
                  Works nicely in Malaysia's climate where pores clog easily
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              <h3 className="font-georgia text-2xl text-rose">Cons</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-rose">•</span>
                  Results are not permanent, it's a maintenance-style treatment
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-rose">•</span>
                  If you want to treat deep acne scars or heavy pigmentation,
                  you may need other options too
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <span className="text-rose">•</span>
                  Some people may get temporary redness or mild sensitivity
                  afterward
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Side Effects & Safety - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-brown text-center mb-4"
          >
            Side effects and safety{" "}
            <span className="text-wine">(what's normal, what's not)</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="bg-glass backdrop-blur-sm p-8 rounded-3xl border border-white/50"
          >
            <p className="text-brown mb-4">Common and usually short-lived:</p>
            <ul className="list-disc pl-5 mb-6 text-brown space-y-1">
              <li>Mild redness</li>
              <li>Slight tingling</li>
              <li>Temporary sensitivity</li>
            </ul>

            <p className="text-brown mb-2">
              This is widely described as minimal for most people.
            </p>

            <p className="text-brown mb-4">Less common but possible:</p>
            <ul className="list-disc pl-5 mb-6 text-brown">
              <li>
                Mild puffiness or breakouts for a small number of people,
                especially if your skin is reactive or congested
              </li>
            </ul>

            <div className="mt-4 p-4 bg-cream rounded-xl">
              <p className="text-taupe">
                If you have very sensitive skin or you are prone to
                post-inflammatory pigmentation, the safest approach is careful
                settings and professional handling, not aggressive "stronger is
                better" logic.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-cream/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-brown text-center mb-4"
          >
            Hydra facial cost in{" "}
            <span className="text-wine">Malaysia (and Kuala Lumpur)</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            Hydra facial pricing in Malaysia varies based on clinic, brand
            device, boosters, and whether it's bundled.
          </motion.p>

          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-white/50">
              <p className="text-brown">
                Some KL/Malaysia clinics describe average HydraFacial ranges
                around RM600-RM800 per session (varies by type and add-ons).
              </p>
            </div>

            <div className="bg-wine/5 p-6 rounded-2xl border-2 border-wine">
              <p className="text-brown font-semibold">
                At Nexus Clinic Kuala Lumpur, the Hydrafacial Deep Cleanse is
                listed at RM350, with no downtime and a monthly rhythm.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-2xl">
              <p className="text-brown">
                If you're comparing prices, do this one thing: compare what's
                included. Some "cheap hydra facial" promos exclude boosters or
                use different machines. A consultation clarifies what you're
                actually booking.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Comparisons - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-5xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-brown text-center mb-12"
          >
            Hydra facial vs other treatments{" "}
            <span className="text-wine">(simple comparisons)</span>
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              variants={fadeInUp}
              className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-white/50"
            >
              <h3 className="font-georgia text-xl text-wine mb-2">
                Hydra facial vs classic facial
              </h3>
              <p className="text-brown">
                A classic facial may focus more on massage and surface
                cleansing. A hydra facial is built around device-based
                cleansing, suction extraction, and serum infusion.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-white/50"
            >
              <h3 className="font-georgia text-xl text-wine mb-2">
                Hydra facial vs microdermabrasion
              </h3>
              <p className="text-brown">
                HydraFacial brand materials emphasize Vortex-Fusion style
                cleansing and infusion and position it differently from
                microdermabrasion. In plain terms: microdermabrasion can feel
                "drier" and more abrasive, while hydra facial is often described
                as gentler because hydration happens during the process.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-white/50"
            >
              <h3 className="font-georgia text-xl text-wine mb-2">
                Hydra facial vs chemical peel
              </h3>
              <p className="text-brown">
                Peels can be powerful for tone, acne marks, and texture, but
                they can come with visible peeling and more downtime depending
                on strength. Nexus Clinic's content also positions peels as a
                separate category for issues like acne scars and pigmentation.
                Hydra facial is usually the calmer choice when you want glow
                without downtime.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 space-y-4">
            <h3 className="font-georgia text-2xl text-brown text-center">
              Areas you can treat
            </h3>
            <p className="text-brown text-center">
              Most people do the face. Some clinics also market neck and
              decolletage options, and even other areas depending on device tips
              and protocols.
            </p>
            <p className="text-taupe text-center">
              At Nexus Clinic KL, your doctor will guide what's suitable for
              your goals and skin condition.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Preparation - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-cream/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-brown text-center mb-4"
          >
            How to prepare{" "}
            <span className="text-wine">(so you get a better glow)</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            Here's a simple approach that aligns with widely shared prep advice:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-glass backdrop-blur-sm p-8 rounded-3xl border border-white/50"
          >
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine">•</span>
                Pause strong actives like retinoids and exfoliating acids a few
                days before if your skin is easily irritated
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine">•</span>
                Avoid heavy sun exposure right before your session
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine">•</span>
                Tell the doctor if you recently had injectables, lasers, or are
                using prescription acne meds
              </li>
            </ul>

            <p className="mt-6 text-taupe">
              If you're unsure, just bring photos of your skincare products or
              list them. It makes the consult easier.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Aftercare - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-brown text-center mb-4"
          >
            Aftercare{" "}
            <span className="text-wine">
              (easy rules for the next 24-48 hours)
            </span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="bg-glass backdrop-blur-sm p-8 rounded-3xl border border-white/50"
          >
            <p className="text-brown mb-4">Most aftercare is common sense:</p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-brown">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                Keep it gentle
              </li>
              <li className="flex items-start gap-2 text-brown">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                Avoid aggressive exfoliation right away
              </li>
              <li className="flex items-start gap-2 text-brown">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                Use sunscreen daily
              </li>
            </ul>

            <p className="text-taupe">
              Nexus Clinic also emphasizes simple daily care, including gentle
              cleansing, moisturiser, and SPF 50 as a basic routine in
              Malaysia's climate.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Nexus Clinic - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-cream/50">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-brown text-center mb-8"
          >
            Why Nexus Clinic Kuala Lumpur{" "}
            <span className="text-wine">for hydra facial</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="bg-glass backdrop-blur-sm p-8 rounded-3xl border border-white/50 space-y-4"
          >
            <p className="text-lg text-brown">
              Because it's not treated like a one-size service.
            </p>

            <p className="text-brown">
              Nexus Clinic positions itself as a medical aesthetic clinic, not a
              beauty salon, with doctor-led assessment, MOH-registered
              standards, and evidence-based planning.
            </p>

            <p className="text-brown">
              If you want the "clean glow" but you're worried about sensitivity,
              uneven tone, or getting irritated easily, that clinical planning
              matters.
            </p>

            <div className="mt-4 p-4 bg-cream rounded-xl">
              <p className="text-brown">
                <span className="font-semibold">Location and contact:</span>{" "}
                Nexus Clinic Kuala Lumpur is listed at LG 10, Lower Ground
                Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section - ALL QUESTIONS INCLUDED */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-3xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-brown text-center mb-4"
          >
            People Also Ask
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            (real FAQ themes users search)
          </motion.p>

          <div className="space-y-4">
            {[
              {
                q: "What is a HydraFacial treatment?",
                a: "It's a non-invasive facial that combines cleansing, exfoliation, extraction, and hydration in one session using a device and serums.",
              },
              {
                q: "Is HydraFacial suitable for all skin types?",
                a: "Many clinics say yes, including sensitive skin, because it can be adjusted to your skin needs. If you have an active skin issue, it's best to check first.",
              },
              {
                q: "Is HydraFacial painful?",
                a: "Most people describe it as comfortable, with gentle suction rather than squeezing.",
              },
              {
                q: "How long does a HydraFacial session take?",
                a: "A common clinic estimate is around 1 hour to 1.5 hours, depending on your plan and add-ons.",
              },
              {
                q: "Are there any side effects?",
                a: "Usually mild redness or tingling that settles quickly. Rarely, some people can experience temporary sensitivity or breakouts.",
              },
              {
                q: "How many sessions do I need?",
                a: "You can see improvement after one session, but many clinics recommend doing it monthly for ongoing results. Nexus Clinic's listing also aligns with a monthly schedule.",
              },
              {
                q: "Can HydraFacial help with oily skin and blackheads?",
                a: "Many clinics specifically market it for congestion because suction helps lift oil and debris from pores without squeezing.",
              },
              {
                q: "Is there downtime after HydraFacial?",
                a: "Most clinics describe no downtime and you can return to normal activities right away. Nexus Clinic also lists downtime as none for Hydrafacial Deep Cleanse.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-cream p-4 rounded-xl border border-white/50"
              >
                <h3 className="font-georgia text-lg text-brown mb-2">
                  {item.q}
                </h3>
                <p className="text-taupe">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section - ALL TEXT INCLUDED */}
      <section className="py-20 px-4 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-light mb-6"
          >
            CTA section (close)
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-cream/90 mb-8">
            If your skin feels clogged, dull, or just tired from KL heat, a
            Hydrafacial Deep Cleanse at Nexus Clinic Kuala Lumpur is a clean
            place to start. It's simple. It's gentle. It fits real schedules.
          </motion.p>

          <motion.button
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-light text-wine px-8 py-4 rounded-full font-medium text-lg inline-flex items-center gap-2 hover:bg-cream transition-colors"
          >
            Book Your Consultation
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default HydraFacialLandingPage;
