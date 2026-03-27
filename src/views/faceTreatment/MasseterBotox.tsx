"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Shield,
  Heart,
  Activity,
  AlertCircle,
  CheckCircle2,
  XCircle,
  MapPin,
  Sparkles,
  Brain,
  Bone,
  Layers,
  Sun,
  Award,
  Droplets,
} from "lucide-react";

import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const MasseterBotoxPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "masseterBotox");

  return (
    <div className="min-h-screen bg-light font-inter">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="relative overflow-hidden bg-cream py-20 px-4 md:px-8 lg:px-16"
      >
        <div className="absolute top-20 right-20 w-64 h-64 bg-rose/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-wine/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-taupe/20">
                <Sparkles className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown font-medium">
                  Nexus Clinic Kuala Lumpur
                </span>
              </div>

              <h1 className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight">
                Masseter Botox in
                <span className="block text-wine mt-2">
                  Kuala Lumpur, Malaysia
                </span>
              </h1>

              <p className="text-xl text-taupe leading-relaxed">
                A softer jawline. A quieter jaw. A more relaxed face.
              </p>

              <p className="text-brown/80 text-lg">
                Masseter Botox helps slim a square jaw caused by muscle bulk. It
                can also ease jaw tension from clenching and teeth grinding.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-wine/20 to-rose/20 rounded-3xl transform rotate-3" />
              <div className="relative p-8 rounded-3xl shadow-2xl border border-taupe/20 backdrop-blur-sm bg-white/90">
                <h3 className="font-georgia text-2xl text-brown mb-6">
                  Trust at a glance (Nexus Clinic KL)
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Doctor-led facial assessment and dosing plan
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Natural-looking contouring, not an "overdone" jaw
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Central KL location (Wisma UOA II, Jalan Pinang)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Botox and facial injectables are core services at Nexus
                      Clinic
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Summary Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="bg-linear-to-br from-cream to-light p-8 md:p-12 rounded-3xl border border-taupe/20"
          >
            <h2 className="font-georgia text-3xl text-brown mb-6">
              Quick summary: what Masseter Botox does
            </h2>
            <p className="text-lg text-brown/80 leading-relaxed mb-6">
              Masseter Botox is a treatment where botulinum toxin is injected
              into the masseter muscles, the strong chewing muscles at the sides
              of your jaw. When these muscles relax, two things can happen:
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl">
                <p className="text-brown">
                  1. Your jaw looks slimmer if the width came mainly from muscle
                  size.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl">
                <p className="text-brown">
                  2. Your jaw feels less tight if you clench, grind, or wake up
                  with soreness.
                </p>
              </div>
            </div>
            <p className="text-brown/80">
              This is a quick in-clinic treatment. It typically takes about 10
              to 15 minutes. Most people return to normal routines the same day.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-8"
          >
            Why your jaw looks "wide" (and why this matters)
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-6">
            A wide lower face is not always "fat." In KL, a lot of people have a
            strong jawline for one of these reasons:
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
              <Activity className="w-8 h-8 text-wine mb-3" />
              <p className="text-brown">
                Masseter hypertrophy (muscle bulk) from clenching or frequent
                chewing
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
              <Bone className="w-8 h-8 text-wine mb-3" />
              <p className="text-brown">
                Jaw bone structure (the mandibular angle is naturally prominent)
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
              <Layers className="w-8 h-8 text-wine mb-3" />
              <p className="text-brown">A mix of both</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
              <Sun className="w-8 h-8 text-wine mb-3" />
              <p className="text-brown">
                Lower face volume changes with age (skin laxity and shifting
                volume can change the look of the jawline)
              </p>
            </div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-brown/80 bg-white p-6 rounded-2xl"
          >
            Masseter Botox works best when muscle bulk is a major cause. If bone
            structure is the main reason, Botox may still soften the look, but
            the change can be more subtle. This is why a proper assessment
            matters.
          </motion.p>
        </div>
      </motion.section>

      {/* What Section with Image */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-8"
          >
            What Masseter Botox is best for
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-6">
            At Nexus Clinic Kuala Lumpur, masseter Botox is commonly chosen for:
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-cream/50 p-6 rounded-xl border-l-4 border-wine">
                <h3 className="font-georgia text-lg text-brown mb-2">
                  1) Jaw slimming for a square jaw
                </h3>
                <p className="text-taupe">
                  When the masseter muscle is overactive, it can make the lower
                  face look wider. Relaxing it can create a softer, more tapered
                  contour over time.
                </p>
              </div>

              <div className="bg-cream/50 p-6 rounded-xl border-l-4 border-wine">
                <h3 className="font-georgia text-lg text-brown mb-2">
                  2) Teeth grinding and jaw clenching
                </h3>
                <p className="text-taupe">
                  Botox can reduce the force of clenching or grinding by calming
                  the muscle. Many patients describe fewer "tight jaw" mornings
                  and less jaw fatigue.
                </p>
              </div>

              <div className="bg-cream/50 p-6 rounded-xl border-l-4 border-wine">
                <h3 className="font-georgia text-lg text-brown mb-2">
                  3) TMJ-related jaw tension (supportive option)
                </h3>
                <p className="text-taupe">
                  Some providers use Botox as a supportive treatment for jaw
                  pain and TMD symptoms by reducing muscle overwork. It can
                  help, but it may not fix the root cause for everyone.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-wine/20 to-rose/20 rounded-3xl transform -rotate-3" />
              <img
                src="/images/skin/acne-treatment.webp"
                alt="Professional facial assessment at Nexus Clinic"
                className="relative rounded-3xl shadow-2xl w-full h-125 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <p className="text-brown text-sm">
                  Doctor-led facial assessment at Nexus Clinic KL
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How it Works Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            How Masseter Botox works (simple explanation)
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-brown/80 text-lg leading-relaxed"
          >
            Botulinum toxin works by blocking nerve signals to the injected
            muscle. The muscle relaxes and cannot contract as strongly. When the
            masseter stops overworking, it can gradually reduce in size, which
            can slim the jawline.
          </motion.p>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            What results look like (and when you see them)
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-4">
            Masseter Botox is not a "one-night" change. It's gradual, and that
            is actually a good thing because it looks natural.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-cream p-6 rounded-xl mb-4"
          >
            <h3 className="font-georgia text-xl text-brown mb-3">
              Typical timeline
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-wine mt-1" />
                <span className="text-brown">
                  First changes in tension: within days to 2 weeks
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-wine mt-1" />
                <span className="text-brown">
                  Visible slimming: often starts 1 to 2 weeks, becomes clearer
                  at 4 to 6 weeks
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-wine mt-1" />
                <span className="text-brown">
                  How long it lasts: commonly around 3 to 6 months, depending on
                  muscle strength and metabolism
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-brown/80">
            If you are doing it mainly for facial contouring, photos help. Most
            people only notice the full difference when they compare before and
            after.
          </motion.p>
        </div>
      </motion.section>

      {/* Treatment Experience */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            What the treatment feels like
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-4">
            Most patients describe it as quick and manageable. You may feel
            small pinches and slight pressure. Some people choose numbing cream,
            especially if they are nervous, but many do not need it.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-brown/80">
            The most common "after" feeling is mild tenderness at the injection
            points for a short time.
          </motion.p>
        </div>
      </motion.section>

      {/* Units Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            How many units do you need?
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-4">
            Units depend on your masseter size, facial shape goals, and whether
            you want help for grinding.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-4">
            A common range reported by clinics is about 20 to 50 units per side,
            and some people need more or less based on muscle strength.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-brown/80">
            At Nexus Clinic KL, your plan should be based on your face, not a
            one-size template.
          </motion.p>
        </div>
      </motion.section>

      {/* Aftercare Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Aftercare (important for safety and results)
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-4">
            Good aftercare helps reduce bruising and lowers the risk of the
            product spreading into nearby muscles.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl mb-4"
          >
            <p className="text-brown font-medium mb-3">
              For the first 24 hours, it's usually advised to avoid:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-wine mt-1" />
                <span className="text-brown">
                  Rubbing or pressing the treated area
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-wine mt-1" />
                <span className="text-brown">Intense exercise</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-wine mt-1" />
                <span className="text-brown">
                  Actions that may increase spread risk (like heavy massaging)
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-brown/80">
            If you have a big event coming up, book early. Bruising is not
            common for everyone, but it can happen.
          </motion.p>
        </div>
      </motion.section>

      {/* Side Effects Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Side effects and risks (honest, not scary)
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-4">
            Most side effects are mild and temporary, such as:
          </motion.p>

          <motion.ul
            variants={fadeInUp}
            className="list-disc pl-6 mb-4 space-y-1 text-brown/80"
          >
            <li>Small bumps, redness, or swelling at injection sites</li>
            <li>Mild bruising</li>
            <li>Temporary jaw fatigue or chewing weakness</li>
            <li>Mild asymmetry if dosing is uneven</li>
          </motion.ul>

          <motion.div
            variants={fadeInUp}
            className="bg-rose/10 p-6 rounded-xl mb-4 border border-rose/30"
          >
            <p className="text-brown font-medium mb-2">Important note:</p>
            <p className="text-brown/80">
              masseter Botox requires precise placement. Done poorly, it can
              affect nearby muscles and change your smile or bite feel
              temporarily. This is why experience matters.
            </p>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-brown/80">
            Also, for some people who do Botox only to slim the face, there can
            be a risk of skin laxity or a "looser" look if the muscle reduces a
            lot and the skin does not tighten the same way. A careful plan can
            reduce this risk, and sometimes it is addressed with other
            treatments if needed.
          </motion.p>
        </div>
      </motion.section>

      {/* Who Should Avoid */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Who should avoid Masseter Botox
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-4">
            You may not be a good candidate if you:
          </motion.p>

          <motion.ul
            variants={fadeInUp}
            className="list-disc pl-6 mb-4 space-y-1 text-brown/80"
          >
            <li>Are pregnant or breastfeeding</li>
            <li>Have certain neuromuscular conditions</li>
            <li>Have known allergies to botulinum toxin products</li>
          </motion.ul>

          <motion.p variants={fadeInUp} className="text-brown/80">
            A medical consultation is the right place to discuss your history
            and safety.
          </motion.p>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Cost of Masseter Botox in Kuala Lumpur and Malaysia
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-4">
            Pricing depends on the brand used, units needed, and clinic
            expertise.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-cream p-6 rounded-xl mb-4"
          >
            <h3 className="font-georgia text-xl text-brown mb-3">
              Common KL and Malaysia price references
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-wine mt-1" />
                <span className="text-brown">
                  Many clinics price Botox by unit, often around RM30 to RM50
                  per unit
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-wine mt-1" />
                <span className="text-brown">
                  Masseter jaw slimming commonly requires higher units, so total
                  costs vary
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-wine mt-1" />
                <span className="text-brown">
                  Some Malaysia clinic references place masseter Botox around
                  RM1,200 to RM2,000 on average
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-wine mt-1" />
                <span className="text-brown">
                  Nexus Clinic's KL Botox materials list jaw slimming (masseter)
                  pricing in the RM1,500 to RM2,500 range
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-cream p-6 rounded-xl mb-4"
          >
            <h3 className="font-georgia text-xl text-brown mb-3">
              What changes the cost
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-wine mt-1" />
                <span className="text-brown">
                  Your muscle size (stronger muscle, higher units)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-wine mt-1" />
                <span className="text-brown">
                  Your goal (pain relief vs contouring vs both)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-wine mt-1" />
                <span className="text-brown">
                  Your desired look (subtle softening vs stronger V-shape
                  change)
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-rose/10 p-6 rounded-xl border border-rose/30"
          >
            <p className="text-brown flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
              <span>
                If you see "too cheap to be true" promos, be careful. Some
                clinics warn against unlicensed settings and suspiciously low
                prices.
              </span>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Comparisons Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Masseter Botox vs other face treatments (what's better for you?)
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl mb-4"
          >
            <h3 className="font-georgia text-xl text-brown mb-3">
              Masseter Botox vs Jawline Filler
            </h3>
            <ul className="space-y-2 mb-3">
              <li className="flex items-start gap-2">
                <span className="text-wine font-medium">•</span>
                <span className="text-brown">
                  Botox: relaxes muscle, reduces bulk over time
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wine font-medium">•</span>
                <span className="text-brown">
                  Filler: adds structure and definition instantly, useful for
                  jawline contour, asymmetry, or age-related volume loss
                </span>
              </li>
            </ul>
            <p className="text-brown/80">
              If your jaw looks wide mainly from muscle, Botox is usually the
              first choice. If your jaw looks undefined from volume loss or sag,
              filler may help more, or a combination may be best.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl mb-4"
          >
            <h3 className="font-georgia text-xl text-brown mb-3">
              Masseter Botox vs HIFU
            </h3>
            <ul className="space-y-2 mb-3">
              <li className="flex items-start gap-2">
                <span className="text-wine font-medium">•</span>
                <span className="text-brown">
                  Botox: changes muscle activity and bulk
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wine font-medium">•</span>
                <span className="text-brown">
                  HIFU: focuses on lifting and tightening skin layers
                </span>
              </li>
            </ul>
            <p className="text-brown/80">
              If the main issue is muscle bulk, HIFU alone will not "shrink" the
              masseter.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl mb-4"
          >
            <h3 className="font-georgia text-xl text-brown mb-3">
              Masseter Botox vs surgery
            </h3>
            <p className="text-brown/80 mb-2">
              Botox is non-surgical and temporary. Surgery is permanent and more
              invasive. Most people in KL choose Botox first because it is lower
              commitment and has minimal downtime.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl mb-4"
          >
            <h3 className="font-georgia text-xl text-brown mb-3">
              For teeth grinding: Botox vs night guard
            </h3>
            <p className="text-brown/80">
              A night guard protects teeth. Botox can reduce muscle force. Some
              people use both, depending on severity and dental advice.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl mb-4"
          >
            <h3 className="font-georgia text-xl text-brown mb-3">
              Combination options for a balanced V-shape
            </h3>
            <p className="text-brown/80 mb-2">
              A V-shape is not only about slimming the jaw. The chin and
              lower-face proportions matter too.
            </p>
            <p className="text-brown/80 mb-2">
              Some clinics commonly pair jaw Botox (masseter) with chin filler
              for better facial balance, especially when the chin is short or
              retruded.
            </p>
            <p className="text-brown/80">
              At Nexus Clinic Kuala Lumpur, the best plan should match your
              features. Not a trend.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Nexus Clinic */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-4"
          >
            Why Nexus Clinic Kuala Lumpur
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 text-lg mb-6">
            You are not just buying "units." You are trusting someone with your
            face.
          </motion.p>

          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl">
            <h3 className="font-georgia text-2xl text-brown mb-4">
              What to expect at Nexus Clinic KL
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown">
                  A personalised assessment: jaw muscle size, bite pattern,
                  symmetry
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown">
                  A plan that aims for a softer, balanced look
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown">
                  Clear advice on what Botox can do, and what it cannot
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown">
                  A clinic location in central Kuala Lumpur (Wisma UOA II, Jalan
                  Pinang)
                </span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-taupe/20">
              <p className="text-brown font-medium">
                Visit Nexus Clinic Kuala Lumpur
              </p>
              <p className="text-taupe">
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-8"
          >
            FAQs (People Also Ask style)
          </motion.h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                1) How long does masseter Botox last?
              </h3>
              <p className="text-taupe">
                Most people see results for about 3 to 6 months. Stronger
                muscles may wear off faster at first.
              </p>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                2) How soon will I see results from masseter Botox?
              </h3>
              <p className="text-taupe">
                Some people feel less tension within days. Visible jaw slimming
                usually becomes clearer around 4 to 6 weeks.
              </p>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                3) How many units of Botox do I need for masseter reduction?
              </h3>
              <p className="text-taupe">
                It depends on your muscle size and goals. Many clinics cite
                ranges like 20 to 50 units per side. Your doctor should decide
                after assessment.
              </p>
            </motion.div>

            {/* FAQ 4 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                4) How much does masseter Botox cost in Malaysia?
              </h3>
              <p className="text-taupe">
                Prices vary by units and clinic. Malaysia references commonly
                place masseter Botox around RM1,200 to RM2,000, while Nexus KL
                lists jaw slimming (masseter) around RM1,500 to RM2,500.
              </p>
            </motion.div>

            {/* FAQ 5 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                5) Does masseter Botox help teeth grinding (bruxism)?
              </h3>
              <p className="text-taupe">
                It can reduce the force of grinding and clenching by relaxing
                the masseter muscle. Some people feel fewer jaw tension symptoms
                after treatment.
              </p>
            </motion.div>

            {/* FAQ 6 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                6) Can Botox help TMJ pain?
              </h3>
              <p className="text-taupe">
                Botox may help some people by reducing muscle overwork, but it
                is usually considered a supportive option and results vary.
              </p>
            </motion.div>

            {/* FAQ 7 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                7) Does masseter Botox hurt?
              </h3>
              <p className="text-taupe">
                Most patients describe small pinches and mild pressure.
                Discomfort is usually brief.
              </p>
            </motion.div>

            {/* FAQ 8 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                8) Will I have trouble chewing after masseter Botox?
              </h3>
              <p className="text-taupe">
                Some people notice temporary chewing weakness or jaw fatigue,
                especially in the early phase. It typically settles as you
                adapt.
              </p>
            </motion.div>

            {/* FAQ 9 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                9) Will masseter Botox make my face sag?
              </h3>
              <p className="text-taupe">
                It can, in some cases, especially if the goal is aggressive
                cosmetic slimming and the skin has less elasticity. A careful
                plan and realistic goals reduce the risk.
              </p>
            </motion.div>

            {/* FAQ 10 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                10) Is masseter Botox permanent?
              </h3>
              <p className="text-taupe">
                No. Botox effects wear off as nerve signaling returns. Most
                people maintain results with repeat sessions.
              </p>
            </motion.div>

            {/* FAQ 11 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                11) What should I avoid after masseter Botox?
              </h3>
              <p className="text-taupe">
                Avoid rubbing the area and intense exercise for about 24 hours.
                This helps reduce the chance of product spread and bruising.
              </p>
            </motion.div>

            {/* FAQ 12 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                12) Is masseter Botox FDA-approved for jaw slimming?
              </h3>
              <p className="text-taupe">
                Masseter injections are commonly performed, but cosmetic jaw
                slimming is often discussed as an off-label use in US-focused
                guidance. In Malaysia, always choose a qualified medical
                provider and get a proper consultation.
              </p>
            </motion.div>

            {/* FAQ 13 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                13) Can men do masseter Botox?
              </h3>
              <p className="text-taupe">
                Yes. Men often request it for jaw tension, grinding, or to
                soften a bulky lower face. The dosing approach may differ based
                on muscle strength.
              </p>
            </motion.div>

            {/* FAQ 14 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                14) How often should I repeat masseter Botox?
              </h3>
              <p className="text-taupe">
                Many people repeat every 3 to 6 months, especially early on.
                Over time, some can extend intervals if the muscle reduces in
                activity and bulk.
              </p>
            </motion.div>

            {/* FAQ 15 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-2">
                15) Is masseter Botox better than jawline filler?
              </h3>
              <p className="text-taupe">
                They solve different problems. Botox reduces muscle bulk. Filler
                adds structure and definition. The best option depends on
                whether your concern is muscle, bone shape, or age-related
                volume loss.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-br from-wine to-rose"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-white mb-6"
          >
            Ready for a softer jawline and a calmer jaw?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/90 text-lg mb-8">
            If you want Masseter Botox in Kuala Lumpur, book a consultation at
            Nexus Clinic Kuala Lumpur to get a plan based on your face shape,
            muscle strength, and goals.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default MasseterBotoxPage;
