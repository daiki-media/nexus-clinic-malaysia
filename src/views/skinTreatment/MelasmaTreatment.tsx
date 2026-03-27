"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Droplets,
  Shield,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Calendar,
  Clock,
  Thermometer,
  Heart,
  SunDim,
  Leaf,
  Gem,
  FileText,
  Award,
  Users,
  MapPin,
  AlertTriangle,
  Zap,
  Phone,
  MessageCircle,
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

const MelasmaLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "melasmaTreatment");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-melasma-treatment1.webp",
      after: "/images/B&A-skin/B&A-melasma-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-melasma-treatment2.webp",
      after: "/images/B&A-skin/B&A-melasma-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-melasma-treatment3.webp",
      after: "/images/B&A-skin/B&A-melasma-treatment3.webp",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-cream font-inter">
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-linear-to-b from-light to-cream overflow-hidden"
      >
        {/* Background Pattern - Soft Medical Aesthetic */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-linear-to-bl from-rose/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-wine/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Decorative Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-linear(to right, #8C4F58 1px, transparent 1px),
                               linear-linear(to bottom, #8C4F58 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
          }}
        ></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div variants={fadeInLeft} className="space-y-8">
              {/* Trust Strip - Top */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-4 bg-glass backdrop-blur-sm p-4 rounded-2xl border border-taupe/10"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-wine" />
                  <span className="text-xs text-brown">
                    Wisma UOA II, Jalan Pinang, KLCC
                  </span>
                </div>
                <div className="w-1 h-4 bg-taupe/20 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-wine" />
                  <span className="text-xs text-brown">Since 2001</span>
                </div>
                <div className="w-1 h-4 bg-taupe/20 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-wine" />
                  <span className="text-xs text-brown">Dermatology Led</span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-georgia font-bold leading-tight"
              >
                <span className="text-brown">Melasma doesn't need</span>
                <br />
                <span className="text-wine">to run your confidence</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe leading-relaxed max-w-lg"
              >
                At Nexus Clinic Kuala Lumpur, we treat melasma with calm, step
                by step plans that respect Asian skin and real life in Malaysia.
              </motion.p>

              {/* Key Message */}
              <motion.div
                variants={fadeInUp}
                className="bg-wine/5 p-6 rounded-2xl border border-wine/10"
              >
                <p className="text-brown font-medium">
                  No harsh "one shot fixes". Just the right mix of doctor guided
                  care, advanced tech, and prevention so results last longer.
                </p>
              </motion.div>

              {/* Trust Strip - Bottom / Easy Booking */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-wine" />
                  </div>
                  <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-wine" />
                  </div>
                  <span className="text-sm text-brown font-medium">
                    Call or WhatsApp — publicly listed on Nexus social profiles
                  </span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={fadeInUp} className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-wine text-light rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
                >
                  Book Your Consultation
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - The Emotional Story */}
            <motion.div variants={fadeInRight} className="space-y-8">
              {/* If you're here, you probably know the feeling */}
              <div className="bg-cream p-8 rounded-3xl border border-taupe/10 shadow-xl">
                <h2 className="text-2xl font-georgia font-bold text-brown mb-6">
                  If you're here, you probably know the feeling
                </h2>

                <div className="space-y-6">
                  <p className="text-taupe leading-relaxed">
                    You look in the mirror and the patches are the first thing
                    you see.
                  </p>

                  {/* Face Areas Illustration */}
                  <div className="flex justify-center gap-4 py-4">
                    {[
                      { area: "Cheeks", icon: <Heart className="w-4 h-4" /> },
                      {
                        area: "Upper lip",
                        icon: <AlertCircle className="w-4 h-4" />,
                      },
                      { area: "Forehead", icon: <Sun className="w-4 h-4" /> },
                    ].map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center text-wine mx-auto mb-2">
                          {item.icon}
                        </div>
                        <span className="text-xs text-brown">{item.area}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-taupe italic">Sometimes all three.</p>

                  {/* The Confusing Part */}
                  <div className="border-t border-taupe/10 pt-6">
                    <p className="text-taupe leading-relaxed">
                      And the confusing part? Some days it looks lighter, so you
                      think it's improving. Then a hot day in Kuala Lumpur, a
                      little sun, a new skincare product, or stress hits, and it
                      comes back darker.
                    </p>
                  </div>

                  {/* The Truth */}
                  <div className="bg-rose/5 p-6 rounded-xl border border-rose/10">
                    <p className="text-brown font-medium">
                      Melasma can be stubborn. It can also be managed. But only
                      when you treat it like a condition that reacts, not a
                      stain you can scrub away.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Trust Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-glass backdrop-blur-sm p-4 rounded-xl border border-taupe/10">
                  <div className="w-8 h-8 bg-wine/5 rounded-lg flex items-center justify-center text-wine mb-2">
                    <Award className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-brown font-medium">
                    Transparent Pricing
                  </p>
                  <p className="text-[10px] text-taupe">
                    Clear language for pigmentation services
                  </p>
                </div>
                <div className="bg-glass backdrop-blur-sm p-4 rounded-xl border border-taupe/10">
                  <div className="w-8 h-8 bg-wine/5 rounded-lg flex items-center justify-center text-wine mb-2">
                    <Users className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-brown font-medium">
                    Advanced Laser Options
                  </p>
                  <p className="text-[10px] text-taupe">
                    For melasma focused concerns
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-rose rounded-full blur-3xl"
        />
      </motion.section>

      {/* What is Melasma Section with Image */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-light"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown">
                What is <span className="text-wine">Melasma</span>?
              </h2>

              <div className="space-y-4 text-taupe leading-relaxed">
                <p className="text-lg">
                  Melasma is a type of pigmentation that appears as brown or
                  grey brown patches, usually on the face. It is common,
                  especially in women, and often linked with hormones and sun
                  exposure.
                </p>

                <div className="bg-cream p-6 rounded-2xl border border-taupe/10">
                  <h3 className="font-semibold text-brown mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-rose" />
                    Important thing to know:
                  </h3>
                  <p className="text-taupe">
                    melasma is not dangerous to your health. But it can feel
                    heavy emotionally, and it's completely valid to want
                    treatment.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/skin/melasma-treatment.webp"
                  alt="Melasma Consultation at Nexus Clinic KL"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 via-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-light">
                  <p className="text-sm font-medium bg-glass backdrop-blur-sm inline-block px-3 py-1 rounded-full">
                    Professional Assessment at Nexus Clinic KL
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why melasma is so common in Malaysia */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-linear-to-b from-cream to-light"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mb-6">
              Why melasma is so common in{" "}
              <span className="text-wine">Malaysia</span>
            </h2>
            <p className="text-lg text-taupe">
              Malaysia has year round strong UV levels and a hot, humid climate.
              That matters because melasma is triggered not only by sunlight,
              but also by heat and inflammation for many people.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Sun className="w-6 h-6" />,
                title: "Sun exposure",
                desc: "and tanning habits",
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Pregnancy related melasma",
                desc: "(sometimes called 'mask of pregnancy')",
              },
              {
                icon: <Droplets className="w-6 h-6" />,
                title: "Birth control pills",
                desc: "or hormone shifts",
              },
              {
                icon: <AlertTriangle className="w-6 h-6" />,
                title: "Using strong acids",
                desc: "or 'whitening' products that irritate your skin barrier",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Post inflammation",
                desc: "(after acne, waxing, or aggressive facials)",
              },
              {
                icon: <Thermometer className="w-6 h-6" />,
                title: "Heat triggers",
                desc: "common in KL climate",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-glass backdrop-blur-sm p-6 rounded-xl border border-taupe/20 hover:border-wine/30 transition-all"
              >
                <div className="w-12 h-12 bg-wine/10 rounded-lg flex items-center justify-center text-wine mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-brown mb-2">{item.title}</h3>
                <p className="text-sm text-taupe">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mt-6 font-medium"
          >
            Common triggers we see in KL include:
          </motion.p>
        </div>
      </motion.section>

      {/* Is it really melasma, or something else? */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-light"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mb-6">
              Is it really <span className="text-wine">melasma</span>, or
              something else?
            </h2>
            <p className="text-lg text-taupe">
              A lot of pigmentation gets called "melasma", but treatment depends
              on what it truly is.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-2xl border border-taupe/10"
            >
              <h3 className="text-xl font-georgia font-bold text-brown mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-wine" />
                Melasma often:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe">
                  <span className="text-wine mt-1">•</span>
                  Looks patchy and spread out (not tiny dots)
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="text-wine mt-1">•</span>
                  Appears on both sides of the face
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="text-wine mt-1">•</span>
                  Deepens with sun, heat, and hormonal changes
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-cream p-8 rounded-2xl border border-taupe/10"
            >
              <h3 className="text-xl font-georgia font-bold text-brown mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose" />
                It can look similar to:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe">
                  <span className="text-rose mt-1">•</span>
                  Sunspots (more spot like and defined)
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="text-rose mt-1">•</span>
                  Post inflammatory hyperpigmentation (after acne or irritation)
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="text-rose mt-1">•</span>
                  Freckles
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mt-8 italic text-lg"
          >
            This is why we start with assessment, not assumptions.
          </motion.p>
        </div>
      </motion.section>

      {/* Who melasma treatment is for */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-linear-to-b from-cream to-light"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mb-6">
              Who melasma treatment <span className="text-wine">is for</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="bg-wine/5 p-8 rounded-2xl border border-wine/20">
                <h3 className="text-xl font-georgia font-bold text-wine mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  You are usually a good candidate if:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-taupe">
                      You have facial patches that darken with sun or heat
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-taupe">
                      Your pigmentation keeps coming back even after skincare
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-taupe">
                      You want a plan that includes prevention, not only
                      procedures
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-taupe">
                      You have Asian skin that is prone to rebound pigmentation
                      and want careful settings
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-rose/5 p-8 rounded-2xl border border-rose/20">
                <h3 className="text-xl font-georgia font-bold text-rose mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  You may need to delay or adjust treatment if:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                    <span className="text-taupe">
                      You are pregnant or breastfeeding (many options are
                      limited, and we focus more on gentle care and sun
                      protection)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                    <span className="text-taupe">
                      Your skin is currently irritated, peeling, or over
                      exfoliated
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                    <span className="text-taupe">
                      You have active eczema or uncontrolled skin inflammation
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* The Nexus Clinic KL approach */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-light"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mb-6">
              The <span className="text-wine">Nexus Clinic KL</span> approach
            </h2>
            <p className="text-lg text-wine font-semibold italic">
              Most people don't fail treatment. They fail incomplete treatment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: "1",
                title: "Calm the triggers",
                desc: "(sun, heat, inflammation, irritation)",
              },
              {
                number: "2",
                title: "Lift and break down pigment safely",
                desc: "(laser, peel, or both depending on depth)",
              },
              {
                number: "3",
                title: "Stop the rebound",
                desc: "(maintenance and correct home care)",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="relative p-8 bg-cream rounded-2xl border border-taupe/10 hover:border-wine/30 transition-all group"
              >
                <div className="text-6xl font-georgia font-bold text-taupe/20 group-hover:text-wine/20 transition-colors mb-4">
                  {item.number}
                </div>
                <h3 className="text-xl font-georgia font-bold text-brown mb-3">
                  {item.title}
                </h3>
                <p className="text-taupe">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeInUp} className="text-center text-taupe mt-8">
            This "combination approach" is exactly what many top ranking clinics
            emphasise too, because it reflects how melasma behaves in real life.
          </motion.p>
        </div>
      </motion.section>

      {/* Melasma treatment options at Nexus Clinic Kuala Lumpur */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-linear-to-b from-cream to-light"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mb-6">
              Melasma treatment options at{" "}
              <span className="text-wine">Nexus Clinic Kuala Lumpur</span>
            </h2>
            <p className="text-lg text-taupe">
              Below are common options used for melasma and stubborn
              pigmentation concerns, based on Nexus Clinic's publicly described
              pigmentation services and melasma related content.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* 1) Advanced pigmentation lasers */}
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-2xl border border-taupe/10"
            >
              <div className="flex flex-wrap gap-4 items-start mb-4">
                <div className="w-12 h-12 bg-wine/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-wine" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-georgia font-bold text-brown mb-2">
                    1) Advanced pigmentation lasers (doctor guided)
                  </h3>
                  <p className="text-taupe mb-4">
                    Nexus publicly positions its pigmentation laser services
                    around fading stubborn pigmentation including melasma and
                    freckles, with an emphasis on transparent pricing language.
                  </p>
                  <p className="text-taupe mb-4">
                    Lasers can help by targeting pigment clusters so the body
                    can clear them over time. For melasma, settings matter. Too
                    aggressive can backfire, especially in Asian skin.
                  </p>
                  <div className="bg-cream p-4 rounded-xl">
                    <h4 className="font-semibold text-brown mb-2">
                      Who lasers suit most:
                    </h4>
                    <ul className="space-y-1 text-taupe">
                      <li>• Mixed pigmentation (melasma plus sunspots)</li>
                      <li>• People who need gradual, controlled brightening</li>
                      <li>
                        • People with deeper pigment that topicals alone cannot
                        shift
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2) Dermamelan depigmentation treatment */}
            <motion.div
              variants={fadeInRight}
              className="bg-light p-8 rounded-2xl border border-taupe/10"
            >
              <div className="flex flex-wrap gap-4 items-start mb-4">
                <div className="w-12 h-12 bg-rose/10 rounded-lg flex items-center justify-center">
                  <Gem className="w-6 h-6 text-rose" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-georgia font-bold text-brown mb-2">
                    2) Dermamelan depigmentation treatment (for stubborn
                    melasma)
                  </h3>
                  <p className="text-taupe mb-4">
                    Nexus Clinic highlights Dermamelan as a professional
                    depigmentation treatment designed to reduce pigmentation,
                    dark spots, and melasma by regulating melanin pathways.
                  </p>
                  <p className="text-taupe mb-4">
                    Think of it like a "reset" for pigment behaviour, not just
                    surface exfoliation. It is often paired with a home care
                    protocol for best control.
                  </p>
                  <div className="bg-cream p-4 rounded-xl">
                    <h4 className="font-semibold text-brown mb-2">
                      Who Dermamelan suits:
                    </h4>
                    <ul className="space-y-1 text-taupe">
                      <li>• Stubborn facial melasma</li>
                      <li>• Patchy tone that keeps returning</li>
                      <li>
                        • People who want a structured program with clinic step
                        plus home step
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3) Carefully chosen chemical peels */}
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-2xl border border-taupe/10"
            >
              <div className="flex flex-wrap gap-4 items-start mb-4">
                <div className="w-12 h-12 bg-brown/10 rounded-lg flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-brown" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-georgia font-bold text-brown mb-2">
                    3) Carefully chosen chemical peels (when surface pigment is
                    dominant)
                  </h3>
                  <p className="text-taupe mb-4">
                    Many KL clinics include chemical peels as part of melasma
                    care, especially for surface level pigmentation. Dr Chong
                    Clinic, for example, notes options like glycolic, salicylic,
                    or TCA peels, with the reminder that deeper melasma may
                    resist peels alone.
                  </p>
                  <p className="text-taupe">
                    At Nexus, peels are best used when your barrier is stable
                    and the peel choice fits your skin sensitivity.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 4) Topical treatment plan */}
            <motion.div
              variants={fadeInRight}
              className="bg-light p-8 rounded-2xl border border-taupe/10"
            >
              <div className="flex flex-wrap gap-4 items-start mb-4">
                <div className="w-12 h-12 bg-wine/10 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-wine" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-georgia font-bold text-brown mb-2">
                    4) Topical treatment plan (the quiet hero of melasma
                    control)
                  </h3>
                  <p className="text-taupe mb-4">
                    This is where many people rush, mix products, and end up
                    inflamed. Melasma hates inflammation.
                  </p>
                  <p className="text-taupe mb-4">
                    Dermatologists commonly use brightening agents and pigment
                    control topicals. Evidence based reviews also support
                    combination topical regimens as effective first line options
                    alongside sun protection.
                  </p>
                  <p className="text-taupe mb-3">
                    Depending on your skin and history, your plan may include
                    ingredients like:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cream border border-taupe/20 rounded-full text-xs text-taupe">
                      Azelaic acid
                    </span>
                    <span className="px-3 py-1 bg-cream border border-taupe/20 rounded-full text-xs text-taupe">
                      Retinoids
                    </span>
                    <span className="px-3 py-1 bg-cream border border-taupe/20 rounded-full text-xs text-taupe">
                      Tranexamic acid (topical, sometimes oral in selected cases
                      under medical supervision)
                    </span>
                    <span className="px-3 py-1 bg-cream border border-taupe/20 rounded-full text-xs text-taupe">
                      Other pigment regulators
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* What results can you realistically expect? */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-light"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mb-6">
              What results can you{" "}
              <span className="text-wine">realistically expect</span>?
            </h2>
            <p className="text-lg text-taupe italic">Let's keep it honest.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <p className="text-taupe leading-relaxed">
                Melasma often improves in stages, not overnight.
              </p>

              <p className="text-taupe leading-relaxed">
                It can fade within months for some people, especially with
                strict light protection, but relapse is common if triggers
                return.
              </p>

              <p className="text-taupe leading-relaxed">
                Dermal or deeper pigment is harder to "erase", so the goal
                becomes visible softening and long term control.
              </p>

              <div className="bg-cream p-6 rounded-xl border border-taupe/10">
                <h3 className="font-semibold text-brown mb-3">
                  A good result usually looks like:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-wine mt-1" />
                    <span className="text-taupe text-sm">
                      Patches soften and blend into your natural tone
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-wine mt-1" />
                    <span className="text-taupe text-sm">
                      Makeup sits better, and you stop colour correcting daily
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-wine mt-1" />
                    <span className="text-taupe text-sm">
                      Flare ups become smaller and easier to calm
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-cream p-6 rounded-xl">
                <h3 className="font-semibold text-brown mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-rose" />
                  How many sessions do you need?
                </h3>
                <p className="text-taupe text-sm mb-3">This depends on:</p>
                <ul className="space-y-1 text-sm text-taupe mb-3">
                  <li>• Depth (surface vs deeper pigment)</li>
                  <li>• How reactive your skin is</li>
                  <li>• How consistent you are with sun and heat protection</li>
                </ul>
                <p className="text-taupe text-sm italic">
                  Many people need multiple sessions. That is normal. It is also
                  exactly why "how many treatments do I need" is one of the most
                  common questions people ask before starting.
                </p>
              </div>

              <div className="bg-cream p-6 rounded-xl">
                <h3 className="font-semibold text-brown mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-rose" />
                  Downtime and side effects (what's normal, what's not)
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-taupe font-medium">
                    Common short term effects
                  </p>
                  <p className="text-xs text-taupe">
                    After lasers or peels, temporary reactions can include:
                  </p>
                  <ul className="text-xs text-taupe space-y-1">
                    <li>• Redness</li>
                    <li>• Mild swelling</li>
                    <li>• A sunburn like feeling for 24 to 48 hours</li>
                    <li>• Dryness or light flaking (more common with peels)</li>
                  </ul>
                  <p className="text-sm text-rose font-medium mt-3">
                    The big risk to respect: rebound pigmentation (PIH)
                  </p>
                  <p className="text-xs text-taupe">
                    If a laser is too aggressive, some skin types can darken
                    after treatment. This is why technique and settings matter.
                  </p>
                  <p className="text-xs text-wine mt-2">
                    At Nexus Clinic KL, the goal is controlled progress. Not
                    trauma.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pros and cons of treating melasma */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-linear-to-b from-cream to-light"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mb-6">
              Pros and cons of{" "}
              <span className="text-wine">treating melasma</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-green-50/50 p-8 rounded-2xl border border-green-200"
            >
              <h3 className="text-xl font-georgia font-bold text-green-700 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                Pros
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-taupe">
                    More even tone and brighter looking skin
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-taupe">Less need for heavy makeup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-taupe">
                    Better confidence in photos and daylight
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-taupe">
                    Controlled, long term management with the right plan
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-red-50/50 p-8 rounded-2xl border border-red-200"
            >
              <h3 className="text-xl font-georgia font-bold text-rose mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                Cons
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span className="text-taupe">
                    Requires consistency and patience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span className="text-taupe">
                    Results can relapse if triggers return
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span className="text-taupe">
                    Some treatments have downtime
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span className="text-taupe">
                    Wrong treatment choice can worsen pigmentation
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Areas we commonly treat for melasma in Kuala Lumpur */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-light"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mb-6">
              Areas we commonly treat for{" "}
              <span className="text-wine">melasma in Kuala Lumpur</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Cheeks",
              "Forehead",
              "Upper lip",
              "Nose and bridge area",
              "Jawline in some patterns",
              "Neck or other sun exposed areas depending on lifestyle",
            ].map((area, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="bg-cream p-4 rounded-xl text-center border border-taupe/10"
              >
                <p className="text-brown font-medium">{area}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeInUp} className="text-center text-taupe mt-4">
            It may also affect neck or other sun exposed areas depending on
            lifestyle.
          </motion.p>
        </div>
      </motion.section>

      {/* Melasma treatment cost in Malaysia */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-linear-to-b from-cream to-light"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mb-6">
              Melasma treatment cost in{" "}
              <span className="text-wine">Malaysia</span> (what to budget for)
            </h2>
            <p className="text-lg text-taupe">
              Costs vary widely based on technology, doctor time, and whether
              you're doing a program or single sessions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Consultation",
                desc: "and skin assessment",
              },
              {
                title: "Number of laser sessions",
                desc: "needed",
              },
              {
                title: "Depigmentation program",
                desc: "(like Dermamelan)",
              },
              {
                title: "Home care products",
                desc: "this is often where long term control is won",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="bg-light p-6 rounded-xl border border-taupe/10 text-center"
              >
                <FileText className="w-8 h-8 text-wine mx-auto mb-3" />
                <h3 className="font-semibold text-brown mb-2">{item.title}</h3>
                <p className="text-xs text-taupe">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeInUp} className="text-center text-taupe mt-6">
            Nexus Clinic has published content discussing pigmentation treatment
            pricing ranges for laser in Malaysia, starting from lower entry
            points and scaling based on needs.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mt-2 italic"
          >
            As a practical guide in KL, your total cost is usually shaped by:
          </motion.p>
        </div>
      </motion.section>

      {/* Laser vs peel vs creams */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-light"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mb-6">
              Laser vs peel vs creams{" "}
              <span className="text-wine">(simple comparison)</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Creams */}
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-xl"
            >
              <h3 className="text-xl font-georgia font-bold text-brown mb-4">
                Creams
              </h3>
              <p className="text-sm text-wine font-medium mb-2">Best for:</p>
              <p className="text-sm text-taupe mb-3">
                daily control, prevention, gradual improvement
              </p>
              <p className="text-sm text-rose font-medium mb-2">Limitations:</p>
              <p className="text-sm text-taupe">
                slow, needs consistency, irritation risk if misused
              </p>
            </motion.div>

            {/* Chemical peels */}
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-xl font-georgia font-bold text-brown mb-4">
                Chemical peels
              </h3>
              <p className="text-sm text-wine font-medium mb-2">Best for:</p>
              <p className="text-sm text-taupe mb-3">
                surface pigment, dull tone, mild melasma cases
              </p>
              <p className="text-sm text-rose font-medium mb-2">Limitations:</p>
              <p className="text-sm text-taupe">
                may not fully shift deeper pigment alone
              </p>
            </motion.div>

            {/* Lasers */}
            <motion.div
              variants={fadeInRight}
              className="bg-cream p-6 rounded-xl"
            >
              <h3 className="text-xl font-georgia font-bold text-brown mb-4">
                Lasers
              </h3>
              <p className="text-sm text-wine font-medium mb-2">Best for:</p>
              <p className="text-sm text-taupe mb-3">
                stubborn pigment clusters, mixed pigmentation
              </p>
              <p className="text-sm text-rose font-medium mb-2">Limitations:</p>
              <p className="text-sm text-taupe">
                needs careful settings to avoid rebound in reactive skin
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-wine font-semibold mt-8 text-lg"
          >
            Best answer for most people: combination, done carefully.
          </motion.p>
        </div>
      </motion.section>

      {/* Your melasma prevention routine in Malaysia */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-linear-to-b from-cream to-light"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mb-6">
              Your "melasma prevention" routine in{" "}
              <span className="text-wine">Malaysia</span>
            </h2>
            <p className="text-lg text-taupe italic">
              If you do one thing right, do this.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Sun className="w-8 h-8" />,
                title: "1) Daily sunscreen, even when indoors",
                desc: "Melasma is triggered by light. Dermatology sources highlight the importance of protection, and melasma may fade with good sunlight protection and trigger removal.",
              },
              {
                icon: <SunDim className="w-8 h-8" />,
                title: "2) Consider visible light protection",
                desc: "Visible light can worsen pigmentation for some people. Iron oxide is often discussed as a helpful add on to protect against visible light exposure.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "3) Keep your barrier calm",
                desc: "Over exfoliation is a common KL mistake. Your skin is not a floor. Don't 'scrub it clean'.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="bg-light p-6 rounded-xl border border-taupe/10"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center text-wine mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-brown mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-taupe text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why choose Nexus Clinic Kuala Lumpur for melasma */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-wine text-light"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-cream mb-6">
              Why choose{" "}
              <span className="text-cream/90">Nexus Clinic Kuala Lumpur</span>{" "}
              for melasma
            </h2>
            <p className="text-lg text-cream/90">
              Because melasma needs long game thinking.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Central KLCC location",
                desc: "Wisma UOA II, Jalan Pinang",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Established clinic listing",
                desc: "founded in 2001",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Melasma focused pigmentation services",
                desc: "Nexus publicly highlights melasma under pigmentation laser and depigmentation programs like Dermamelan",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="bg-glass backdrop-blur-sm p-6 rounded-xl text-center border border-cream/20"
              >
                <div className="w-16 h-16 bg-cream/10 rounded-full flex items-center justify-center text-wine mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-wine mb-2">{item.title}</h3>
                <p className="text-sm text-wine/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-cream/90 mt-8 italic"
          >
            Realistic approach: we aim to reduce pigment and reduce relapse
            risk, not chase aggressive "one session miracles"
          </motion.p>
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-light"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mb-6">
              FAQs{" "}
              <span className="text-wine">
                (real People Also Ask style questions)
              </span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What is the best treatment for melasma?",
                a: 'There is no single "best" option for everyone. Many dermatology sources and evidence reviews point to combination care, usually pairing strict sun protection with topical regimens, and adding procedures when needed. In KL, the best plan depends on pigment depth, skin sensitivity, and triggers like hormones and heat.',
              },
              {
                q: "Can melasma be cured permanently?",
                a: 'Most reputable medical sources describe melasma as manageable rather than permanently "cured". Relapses are common, especially if sun exposure or hormonal triggers continue. The goal is long term control: lighter patches, fewer flare ups, and a routine that keeps it calm.',
              },
              {
                q: "Does melasma go away on its own?",
                a: "Sometimes. Melasma may fade if the trigger is removed, for example after pregnancy or stopping a triggering medication, and it often improves with good light protection. But many cases persist for years, which is why treatment plans matter.",
              },
              {
                q: "What triggers melasma to get worse?",
                a: "Common triggers include sunlight, heat, hormonal changes (pregnancy, birth control), and skin irritation. In Malaysia, outdoor heat and daily UV exposure make prevention just as important as treatment.",
              },
              {
                q: "Is laser safe for melasma on Asian skin?",
                a: "It can be safe when the right laser and settings are chosen, and when the plan is gradual. Clinics also warn that aggressive lasers can worsen melasma or trigger rebound pigmentation if done incorrectly.",
              },
              {
                q: "How many sessions do I need for melasma treatment?",
                a: "It varies, and it is one of the most common decision questions people ask before starting. Depth, skin type, and how strict you are with sun protection all change the timeline.",
              },
              {
                q: "Can I do melasma treatment while pregnant?",
                a: "Many active treatments are limited during pregnancy. Some melasma fades after pregnancy, and dermatology sources note it can improve when the trigger ends. During pregnancy, the safest focus is usually gentle skincare and strong sun protection, then reassess after delivery.",
              },
              {
                q: "Does melasma come back after treatment?",
                a: "It can. Relapse is common if triggers return, especially UV exposure and hormones. This is why maintenance is part of the plan, not an afterthought.",
              },
              {
                q: "Is Dermamelan good for melasma?",
                a: "Dermamelan is designed as a depigmentation treatment that targets melasma and dark spots by regulating melanin production pathways. It is often used as a structured program, not a random peel.",
              },
              {
                q: "What is the fastest way to lighten melasma?",
                a: "Fast and safe are not always the same. Many clinics that rank well push combination care because melasma is complex. The fastest safe progress usually comes from pairing strict light protection with doctor guided topicals, plus procedures if your skin is ready.",
              },
              {
                q: "What sunscreen is best for melasma in Malaysia?",
                a: "Choose broad spectrum daily protection and reapply when outdoors. Some dermatology discussions also highlight visible light protection as helpful for melasma prone skin, including iron oxide in tinted products.",
              },
              {
                q: "How do I know if I have melasma or just sunspots?",
                a: "Melasma tends to be patchy, often symmetrical, and linked to hormones and sun. Sunspots are usually more defined spots. A clinical assessment can also evaluate pigment depth, which affects treatment choices.",
              },
            ].map((faq, idx) => (
              <motion.details
                key={idx}
                variants={fadeInUp}
                className="group bg-cream p-6 rounded-xl border border-taupe/10 open:bg-wine/5 transition-all"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-brown group-open:text-wine">
                    {faq.q}
                  </span>
                  <ChevronRight className="w-5 h-5 text-taupe group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-taupe text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Closing CTA */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-4 bg-linear-to-b from-wine to-rose text-light"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-georgia font-bold text-cream">
              If your melasma keeps coming back,
              <br />
              <span className="text-cream/90">don't blame yourself.</span>
            </h2>

            <p className="text-xl text-cream/90 max-w-2xl mx-auto">
              Most people were never given a full plan.
            </p>

            <p className="text-lg text-cream/80 max-w-2xl mx-auto">
              Book a consultation at Nexus Clinic Kuala Lumpur (KLCC) and let's
              map your pigment, calm your triggers, and build a routine you can
              actually keep up with.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-cream text-wine rounded-full font-semibold text-lg shadow-2xl hover:shadow-xl transition-all inline-flex items-center gap-3 group"
            >
              Book Consultation at KLCC
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <p className="text-sm text-cream/80">
              Nexus Clinic Kuala Lumpur • Wisma UOA II, Jalan Pinang • Since
              2001
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default MelasmaLanding;
