"use client";

import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Calendar,
  Mail,
  ChevronRight,
  Activity,
  Award,
  Heart,
  Target,
  CheckCircle2,
  AlertCircle,
  Zap,
  Sun,
  Minus,
  User,
  Layers,
  LineChart,
  Maximize2,
  Flame,
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
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const PRPLandingPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "hair/prpHair");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-prp-hair-treatment1.webp",
      after: "/images/B&A-hair/B&A-prp-hair-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-prp-hair-treatment2.webp",
      after: "/images/B&A-hair/B&A-prp-hair-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-prp-hair-treatment3.webp",
      after: "/images/B&A-hair/B&A-prp-hair-treatment3.webp",
    },
  ];

  const faqs = [];
  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-linear-to-b from-light to-cream"
      >
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-glass backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-block px-6 py-3 bg-rose/10 rounded-full text-rose font-inter text-sm tracking-wide mb-6">
              PRP Hair Treatment in Malaysia
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-5xl md:text-7xl text-brown mb-6 leading-tight"
          >
            Thinning hair?
            <br />
            <span className="text-wine">
              Let's wake up your follicles again.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-inter text-xl text-taupe max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Grow stronger hair with your own platelets at Nexus Clinic Kuala
            Lumpur
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="font-inter text-lg text-brown max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            PRP hair treatment uses your own blood platelets to support thicker
            growth. It is a doctor-guided option for early hair thinning in
            Kuala Lumpur.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-6 justify-center mb-16"
          >
            <button className="group bg-wine hover:bg-rose text-light px-8 py-4 rounded-full font-inter font-medium transition-all duration-300 flex items-center gap-2">
              Schedule Your Consultation
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-wine text-wine hover:bg-wine hover:text-light px-8 py-4 rounded-full font-inter font-medium transition-all duration-300">
              Learn More About PRP
            </button>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                icon: MapPin,
                text: "Central KL location (Wisma UOA II, Jalan Pinang)",
              },
              { icon: Calendar, text: "Established clinic (founded in 2001)" },
              {
                icon: Clock,
                text: "Consultations scheduled with Nexus doctors",
              },
              {
                icon: Mail,
                text: "Easy booking via contact form, phone, or email",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-glass backdrop-blur-sm rounded-2xl p-6 border border-cream"
              >
                <item.icon className="w-6 h-6 text-wine mb-3" />
                <p className="font-inter text-sm text-brown">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Answers */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-cream"
          >
            <h2 className="font-georgia text-2xl text-brown mb-8">
              Quick answers most people want first
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div variants={scaleIn} className="text-left">
                <h3 className="font-inter font-semibold text-wine mb-2">
                  Does PRP work for hair loss?
                </h3>
                <p className="font-inter text-sm text-taupe">
                  It can help many people with thinning hair, but results vary.
                </p>
              </motion.div>
              <motion.div variants={scaleIn} className="text-left">
                <h3 className="font-inter font-semibold text-wine mb-2">
                  When will I see results?
                </h3>
                <p className="font-inter text-sm text-taupe">
                  Many people notice less shedding first, then visible growth in
                  a few months.
                </p>
              </motion.div>
              <motion.div variants={scaleIn} className="text-left">
                <h3 className="font-inter font-semibold text-wine mb-2">
                  How many sessions?
                </h3>
                <p className="font-inter text-sm text-taupe">
                  A common plan is monthly sessions for 3 months, then boosters.
                </p>
              </motion.div>
              <motion.div variants={scaleIn} className="text-left">
                <h3 className="font-inter font-semibold text-wine mb-2">
                  Cost in Malaysia?
                </h3>
                <p className="font-inter text-sm text-taupe">
                  PRP sessions are often priced per session, and can vary by
                  clinic and add-ons.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Positioning Points Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="px-4 py-16 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <motion.div
              variants={scaleIn}
              className="bg-light rounded-2xl p-6 shadow-sm"
            >
              <Heart className="w-8 h-8 text-wine mb-3" />
              <p className="font-inter text-brown">
                They position PRP as "natural" because it uses your own blood
                components.
              </p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-light rounded-2xl p-6 shadow-sm"
            >
              <Target className="w-8 h-8 text-wine mb-3" />
              <p className="font-inter text-brown">
                They target early hair thinning more than full bald areas.
              </p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-light rounded-2xl p-6 shadow-sm"
            >
              <Layers className="w-8 h-8 text-wine mb-3" />
              <p className="font-inter text-brown">
                They show simple steps: blood draw, spin, inject.
              </p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-light rounded-2xl p-6 shadow-sm"
            >
              <Zap className="w-8 h-8 text-wine mb-3" />
              <p className="font-inter text-brown">
                They combine treatments like PRP plus microneedling or laser to
                boost results.
              </p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-light rounded-2xl p-6 shadow-sm"
            >
              <Clock className="w-8 h-8 text-wine mb-3" />
              <p className="font-inter text-brown">
                They set expectations: improvements often show after 3 to 6
                months, not overnight.
              </p>
            </motion.div>
          </div>
          <motion.p
            variants={fadeInUp}
            className="mt-8 font-inter text-brown text-center"
          >
            At Nexus Clinic Kuala Lumpur, the goal is the same: keep it medical,
            keep it clear, and build a plan that fits your hair pattern and
            lifestyle.
          </motion.p>
        </div>
      </motion.section>

      {/* What is PRP Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="relative px-4 py-24 bg-linear-to-b from-cream to-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
              What is PRP hair treatment?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <p className="font-inter text-lg text-taupe leading-relaxed">
                PRP means platelet-rich plasma. Platelets are tiny parts of your
                blood that carry growth factors. In PRP hair treatment, we take
                a small blood sample, concentrate the platelets, then inject
                that PRP into thinning areas of the scalp.
              </p>
              <p className="font-inter text-lg text-taupe leading-relaxed">
                Think of it as giving your scalp a targeted "signal" to support
                healthier follicles and a stronger growth phase. The science is
                still evolving, and results are not guaranteed, but many studies
                and reviews show PRP can improve hair density in androgenetic
                alopecia (male and female pattern hair loss).
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hair/prp-hair-treatment.webp"
                  alt="PRP Hair Treatment Procedure at Nexus Clinic Kuala Lumpur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-wine text-light p-6 rounded-2xl shadow-xl">
                <p className="font-georgia text-sm">Natural treatment</p>
                <p className="font-georgia text-2xl font-bold">
                  Using your own platelets
                </p>
              </div>
            </motion.div>
          </div>

          {/* How PRP may help */}
          <motion.div variants={fadeInUp} className="mt-16">
            <h3 className="font-georgia text-2xl text-brown mb-6">
              How PRP may help with hair growth (simple explanation)
            </h3>
            <p className="font-inter text-taupe mb-4">
              Hair grows in cycles. Some follicles stay in the growth phase
              longer. Some switch to shedding earlier.
            </p>
            <p className="font-inter text-taupe mb-4">
              PRP contains growth factors that may:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <motion.div
                variants={scaleIn}
                className="bg-glass backdrop-blur-sm rounded-xl p-6"
              >
                <p className="font-inter text-brown">
                  1 support the hair growth phase
                </p>
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="bg-glass backdrop-blur-sm rounded-xl p-6"
              >
                <p className="font-inter text-brown">
                  1 improve the environment around the follicle
                </p>
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="bg-glass backdrop-blur-sm rounded-xl p-6"
              >
                <p className="font-inter text-brown">
                  1 help weak follicles produce thicker strands over time
                </p>
              </motion.div>
            </div>
            <p className="font-inter text-taupe mt-6">
              This is why PRP is usually best for thinning hair, not a shiny
              bald scalp with no active follicles.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Who PRP hair treatment is for */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="px-4 py-24 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
              Who PRP hair treatment is for
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream rounded-3xl p-8"
            >
              <h3 className="font-georgia text-2xl text-wine mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                PRP hair treatment in Kuala Lumpur can be a good fit if you:
              </h3>
              <ul className="space-y-4">
                <motion.li
                  variants={fadeInUp}
                  className="flex items-start gap-3 font-inter text-brown"
                >
                  <span className="text-wine mt-1">•</span>
                  notice gradual thinning at the crown or part line
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  className="flex items-start gap-3 font-inter text-brown"
                >
                  <span className="text-wine mt-1">•</span>
                  see a widening hair part or weaker ponytail volume
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  className="flex items-start gap-3 font-inter text-brown"
                >
                  <span className="text-wine mt-1">•</span>
                  have early male or female pattern hair loss
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  className="flex items-start gap-3 font-inter text-brown"
                >
                  <span className="text-wine mt-1">•</span>
                  want a non-surgical hair restoration option
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  className="flex items-start gap-3 font-inter text-brown"
                >
                  <span className="text-wine mt-1">•</span>
                  want to support results after a hair transplant
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-rose/10 rounded-3xl p-8"
            >
              <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-rose" />
                Who may not be suitable (important)
              </h3>
              <p className="font-inter text-brown mb-4">
                PRP is not for everyone. A proper consultation matters.
              </p>
              <p className="font-inter text-brown mb-4">
                PRP may be unsuitable if you have:
              </p>
              <ul className="space-y-4">
                <motion.li
                  variants={fadeInUp}
                  className="flex items-start gap-3 font-inter text-brown"
                >
                  <span className="text-rose mt-1">•</span>
                  very low platelets or certain blood-related conditions
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  className="flex items-start gap-3 font-inter text-brown"
                >
                  <span className="text-rose mt-1">•</span>
                  active infection at the treatment area
                </motion.li>
                <motion.li
                  variants={fadeInUp}
                  className="flex items-start gap-3 font-inter text-brown"
                >
                  <span className="text-rose mt-1">•</span>
                  certain serious medical conditions where injections are not
                  advised
                </motion.li>
              </ul>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 font-inter text-taupe italic"
          >
            Many clinics also discuss PRP for postpartum shedding or stress
            shedding, but it is still important to identify the real cause first
            because some shedding patterns recover naturally with time and
            proper care.
          </motion.p>
        </div>
      </motion.section>

      {/* Procedure Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="px-4 py-24 bg-linear-to-b from-light to-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
              The PRP Procedure
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="bg-glass backdrop-blur-sm rounded-2xl p-6 border border-cream"
            >
              <span className="w-10 h-10 bg-wine text-light rounded-full flex items-center justify-center font-georgia text-xl mb-4">
                1
              </span>
              <h3 className="font-georgia text-lg text-brown mb-2">
                Scalp and hair assessment
              </h3>
              <p className="font-inter text-sm text-taupe">
                We look at your pattern, family history, lifestyle triggers, and
                scalp health. We also talk about goals. "Stop shedding" is a
                different goal than "fill a hairline."
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="bg-glass backdrop-blur-sm rounded-2xl p-6 border border-cream"
            >
              <span className="w-10 h-10 bg-wine text-light rounded-full flex items-center justify-center font-georgia text-xl mb-4">
                2
              </span>
              <h3 className="font-georgia text-lg text-brown mb-2">
                Blood draw
              </h3>
              <p className="font-inter text-sm text-taupe">
                A small amount of blood is taken from your arm, like a normal
                blood test.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="bg-glass backdrop-blur-sm rounded-2xl p-6 border border-cream"
            >
              <span className="w-10 h-10 bg-wine text-light rounded-full flex items-center justify-center font-georgia text-xl mb-4">
                3
              </span>
              <h3 className="font-georgia text-lg text-brown mb-2">
                Centrifuge preparation
              </h3>
              <p className="font-inter text-sm text-taupe">
                The blood is spun to separate layers and concentrate platelets.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="bg-glass backdrop-blur-sm rounded-2xl p-6 border border-cream"
            >
              <span className="w-10 h-10 bg-wine text-light rounded-full flex items-center justify-center font-georgia text-xl mb-4">
                4
              </span>
              <h3 className="font-georgia text-lg text-brown mb-2">
                Scalp numbing (if needed)
              </h3>
              <p className="font-inter text-sm text-taupe">
                Many clinics use local anaesthetic options to make the
                injections easier.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="bg-glass backdrop-blur-sm rounded-2xl p-6 border border-cream"
            >
              <span className="w-10 h-10 bg-wine text-light rounded-full flex items-center justify-center font-georgia text-xl mb-4">
                5
              </span>
              <h3 className="font-georgia text-lg text-brown mb-2">
                PRP scalp injections
              </h3>
              <p className="font-inter text-sm text-taupe">
                PRP is injected into thinning areas with small, controlled
                injections.
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 font-inter text-brown text-center"
          >
            Most sessions take around an hour, depending on the plan and any
            add-ons.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-white/50 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="font-georgia text-2xl text-brown mb-4">
              Does PRP hurt?
            </h3>
            <p className="font-inter text-taupe">
              It can feel like quick pinches or pressure across the scalp. Pain
              tolerance varies a lot. The good news is downtime is usually
              minimal, and most people return to normal activities the same day.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Results Timeline */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="px-4 py-24 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-4">
              PRP hair treatment results timeline (what to expect)
            </h2>
            <p className="font-inter text-wine text-xl">
              PRP is slow, because hair growth is slow.
            </p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="font-inter text-taupe text-center mb-12"
          >
            A realistic timeline often looks like this:
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <motion.div variants={scaleIn} className="bg-cream rounded-2xl p-6">
              <Clock className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-wine mb-2">
                Weeks 2 to 6
              </h3>
              <p className="font-inter text-brown">
                less shedding for some people
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream rounded-2xl p-6">
              <LineChart className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-wine mb-2">
                Month 2 to 3
              </h3>
              <p className="font-inter text-brown">
                early signs of improvement
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream rounded-2xl p-6">
              <Maximize2 className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-wine mb-2">
                Month 3 to 6
              </h3>
              <p className="font-inter text-brown">
                clearer changes in density and thickness
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream rounded-2xl p-6">
              <Award className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-wine mb-2">
                After 6 months
              </h3>
              <p className="font-inter text-brown">
                optimal results with maintenance
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="mt-12 font-inter text-taupe text-center"
          >
            Most studies report improvement after a few months, and outcomes
            depend on protocol, platelet concentration, and your underlying
            cause.
          </motion.p>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Sessions & Aftercare */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="px-4 py-24 bg-linear-to-b from-cream to-light"
      >
        <div className="max-w-7xl mx-auto">
          {/* Sessions */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
              How many PRP sessions do you need?
            </h2>
            <p className="font-inter text-taupe mb-4">
              There is no single perfect number. But there are common patterns.
            </p>
            <p className="font-inter text-taupe mb-4">A widely used plan is:</p>
            <div className="bg-cream rounded-xl p-6 mb-4">
              <ul className="space-y-2">
                <li className="font-inter text-brown">
                  • one session each month for 3 months
                </li>
                <li className="font-inter text-brown">
                  • then a booster every 6 months
                </li>
              </ul>
            </div>
            <p className="font-inter text-taupe">
              Some clinics recommend more initial sessions (like 4 to 6),
              especially when thinning is more active.
            </p>
          </motion.div>

          {/* Aftercare */}
          <motion.div variants={fadeInUp}>
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
              PRP hair treatment aftercare (simple rules)
            </h2>
            <p className="font-inter text-taupe mb-4">
              After your PRP session, the goal is to keep the scalp calm.
            </p>
            <p className="font-inter text-taupe mb-4">
              Common guidance includes:
            </p>
            <ul className="space-y-3 mb-4">
              <motion.li
                variants={fadeInUp}
                className="flex items-start gap-3 font-inter text-brown"
              >
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                avoid heavy sweating for a short period
              </motion.li>
              <motion.li
                variants={fadeInUp}
                className="flex items-start gap-3 font-inter text-brown"
              >
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                shampoo gently the next day (many clinics advise next morning)
              </motion.li>
              <motion.li
                variants={fadeInUp}
                className="flex items-start gap-3 font-inter text-brown"
              >
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                avoid anti-inflammatory meds like NSAIDs for a period if your
                doctor advises, because they may interfere with the intended
                effect
              </motion.li>
              <motion.li
                variants={fadeInUp}
                className="flex items-start gap-3 font-inter text-brown"
              >
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                stay hydrated and do not skip meals before treatment to avoid
                feeling lightheaded during the blood draw
              </motion.li>
            </ul>
            <p className="font-inter text-taupe">
              Your clinician will tailor advice to your health and routine.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Side Effects and Risks */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="px-4 py-24 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl text-brown text-center mb-8"
          >
            Side effects and risks
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-inter text-taupe text-center mb-4"
          >
            PRP uses your own blood, so allergy risk is low. Most side effects
            are local and temporary.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="font-inter text-taupe text-center mb-8"
          >
            You may notice:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-xl p-6 text-center"
            >
              <Flame className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="font-inter text-brown">scalp soreness</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-xl p-6 text-center"
            >
              <Activity className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="font-inter text-brown">mild swelling</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-xl p-6 text-center"
            >
              <Sun className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="font-inter text-brown">redness</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-xl p-6 text-center"
            >
              <Minus className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="font-inter text-brown">
                bruising at injection spots
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center font-inter text-taupe"
          >
            Infection risk is low when done properly, but no procedure is zero
            risk.
          </motion.p>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="px-4 py-24 bg-linear-to-b from-cream to-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl text-brown text-center mb-6"
          >
            PRP hair treatment cost in Malaysia (what affects the price)
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-inter text-taupe text-center mb-8"
          >
            PRP hair treatment price in Malaysia varies by:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div variants={scaleIn} className="bg-cream rounded-xl p-6">
              <MapPin className="w-6 h-6 text-wine mb-2" />
              <p className="font-inter text-brown">
                clinic location (KL is often higher)
              </p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-cream rounded-xl p-6">
              <User className="w-6 h-6 text-wine mb-2" />
              <p className="font-inter text-brown">
                doctor-led vs add-on packages
              </p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-cream rounded-xl p-6">
              <Award className="w-6 h-6 text-wine mb-2" />
              <p className="font-inter text-brown">
                PRP kit quality and preparation method
              </p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-cream rounded-xl p-6">
              <Zap className="w-6 h-6 text-wine mb-2" />
              <p className="font-inter text-brown">
                whether it includes microneedling, laser, or "hair booster"
                programs
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-wine/5 rounded-3xl p-8 text-center"
          >
            <p className="font-inter text-taupe mb-4">
              Some Malaysia clinic pages cite PRP session ranges roughly around
            </p>
            <p className="font-georgia text-4xl text-wine mb-2">
              RM800 to RM2,500
            </p>
            <p className="font-inter text-brown">
              per session, depending on the clinic and plan.
            </p>
            <p className="font-inter text-taupe mt-4">
              Cost guides also show PRP hair single-session pricing ranges and
              package ranges that vary with add-ons.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="px-4 py-24 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl text-brown text-center mb-12"
          >
            PRP vs other hair loss treatments (clear comparison)
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={scaleIn} className="bg-cream rounded-3xl p-8">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                PRP vs minoxidil
              </h3>
              <p className="font-inter text-taupe">
                Minoxidil is a daily topical or oral plan for many people. PRP
                is a clinic procedure done in sessions. Many experts view PRP as
                an add-on when simpler options are not enough.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream rounded-3xl p-8">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                PRP vs hair transplant
              </h3>
              <p className="font-inter text-taupe mb-2">
                PRP vs hair transplant- A transplant moves follicles from donor
                to thinning areas.
              </p>
              <p className="font-inter text-taupe mb-2">
                PRP supports existing follicles and may support transplant
                recovery.
              </p>
              <p className="font-inter text-taupe">
                A transplant can create density where PRP cannot, especially on
                bald zones.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream rounded-3xl p-8">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                PRP vs microneedling
              </h3>
              <p className="font-inter text-taupe">
                PRP vs microneedling- Microneedling is sometimes paired with PRP
                to enhance stimulation, and many clinics market this
                combination.
              </p>
            </motion.div>
          </div>

          {/* Target Areas */}
          <motion.div variants={fadeInUp} className="mt-12">
            <h3 className="font-georgia text-2xl text-brown mb-6">
              Areas PRP can target
            </h3>
            <p className="font-inter text-taupe mb-4">
              PRP for hair loss in KL is commonly used for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <motion.div
                variants={scaleIn}
                className="bg-cream rounded-xl p-4"
              >
                <p className="font-inter text-brown">crown thinning</p>
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="bg-cream rounded-xl p-4"
              >
                <p className="font-inter text-brown">mid-scalp thinning</p>
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="bg-cream rounded-xl p-4"
              >
                <p className="font-inter text-brown">
                  general diffuse thinning
                </p>
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="bg-cream rounded-xl p-4"
              >
                <p className="font-inter text-brown">
                  sometimes temples and hairline, depending on follicle presence
                </p>
              </motion.div>
            </div>
            <p className="font-inter text-taupe">
              If the area is fully bald, your clinician may discuss other
              options.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose PRP */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="px-4 py-24 bg-linear-to-b from-cream to-light"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl text-brown mb-8"
          >
            Why people choose PRP hair treatment in Kuala Lumpur
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-inter text-3xl text-wine mb-8"
          >
            Because it feels like a middle path.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              variants={scaleIn}
              className="bg-glass backdrop-blur-sm rounded-2xl p-6"
            >
              <p className="font-inter text-xl text-brown mb-2">
                Not ready for surgery.
              </p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-glass backdrop-blur-sm rounded-2xl p-6"
            >
              <p className="font-inter text-xl text-brown mb-2">
                Not happy with "just shampoo."
              </p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-glass backdrop-blur-sm rounded-2xl p-6"
            >
              <p className="font-inter text-xl text-brown mb-2">
                Want something medical, but still natural.
              </p>
            </motion.div>
          </div>

          <motion.p variants={fadeInUp} className="font-inter text-taupe">
            PRP is also popular because sessions are short, downtime is usually
            low, and it can fit into a working week.
          </motion.p>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="px-4 py-24 bg-light"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl text-brown text-center mb-4"
          >
            People Also Ask (PAA) style FAQs about PRP hair treatment
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-inter text-taupe text-center mb-12"
          >
            These FAQs are based on the same real questions patients commonly
            ask online and in clinic, including those found on major hair
            restoration education pages.
          </motion.p>

          <div className="space-y-6">
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Does PRP actually regrow hair?
              </h3>
              <p className="font-inter text-brown">
                For many people with thinning hair, it can help. Some see
                regrowth. Some mainly see less shedding. Some see little change.
                There are no guarantees, so a realistic plan matters.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                How successful is PRP for hair loss?
              </h3>
              <p className="font-inter text-brown">
                Success is hard to define because protocols vary. Many studies
                show improvement, but not everyone responds. Outcomes depend on
                your hair loss type, stage, and consistency.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                How many PRP sessions are needed for hair?
              </h3>
              <p className="font-inter text-brown">
                A common program is one session monthly for three months, then a
                booster every six months. Some people need more initial
                sessions.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                How long does PRP take to regrow hair?
              </h3>
              <p className="font-inter text-brown">
                Some people notice reduced shedding in 1 to 2 months. Visible
                growth can take up to six months. Hair changes are gradual.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                What happens if you stop PRP?
              </h3>
              <p className="font-inter text-brown">
                If PRP helped you keep or grow hair, stopping may lead to
                gradual loss again over time. Maintenance supports longer-term
                results.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Is PRP painful for the scalp?
              </h3>
              <p className="font-inter text-brown">
                It can be uncomfortable because it involves injections. Many
                clinics reduce discomfort with numbing options. Most people
                describe it as tolerable.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                What are the side effects of PRP for hair loss?
              </h3>
              <p className="font-inter text-brown">
                The most common effects are local pain, tenderness, and
                temporary swelling. Bruising can also happen. Serious issues are
                uncommon when done properly.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Who is not a good candidate for PRP?
              </h3>
              <p className="font-inter text-brown">
                People who are completely bald in the target area are less
                likely to benefit. Certain active skin conditions or serious
                health conditions may also rule it out.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Is PRP better than a hair transplant?
              </h3>
              <p className="font-inter text-brown">
                They do different jobs. A transplant creates new density by
                moving follicles. PRP supports existing follicles and can
                complement other treatments.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Is PRP permanent?
              </h3>
              <p className="font-inter text-brown">
                PRP is not usually a one-time fix. It often needs repeat
                sessions to maintain benefits.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Can I wash my hair after PRP?
              </h3>
              <p className="font-inter text-brown">
                Many providers recommend gentle shampoo the next morning, but
                follow your clinician's instructions for your scalp.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Can I exercise after PRP?
              </h3>
              <p className="font-inter text-brown">
                Light exercise is often fine the next day. Many clinics suggest
                waiting a few days for intense workouts.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                How much does PRP hair treatment cost in Malaysia?
              </h3>
              <p className="font-inter text-brown">
                Pricing varies by clinic and plan. Some Malaysia clinics cite
                PRP session ranges that can run from hundreds to a few thousand
                ringgit per session depending on inclusions. Packages may reduce
                per-session cost.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Booking Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="px-4 py-24 bg-linear-to-b from-cream to-light"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl text-brown mb-6"
          >
            Booking PRP hair treatment at Nexus Clinic Kuala Lumpur
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-inter text-lg text-taupe mb-8"
          >
            If you want a plan that fits your hair pattern, start with a
            consultation. You will get a scalp review, a realistic expectation,
            and a treatment roadmap.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-wine text-light rounded-3xl p-8"
          >
            <h3 className="font-georgia text-2xl mb-4">
              Nexus Clinic Kuala Lumpur (KLCC area)
            </h3>
            <p className="font-inter mb-2">
              LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala
              Lumpur
            </p>
            <p className="font-inter mb-2">
              Phone: +6016-921 5699 / +6016-702 5699
            </p>
            <p className="font-inter">Email: contact@nexus-clinic.com</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PRPLandingPage;
