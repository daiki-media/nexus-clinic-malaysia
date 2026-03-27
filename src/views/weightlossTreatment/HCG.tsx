"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  Shield,
  MapPin,
  CheckCircle2,
  HelpCircle,
  Award,
  ChevronRight,
  Flame,
  Droplets,
  Pill,
  Ban,
  Scale as ScaleIcon,
  Apple,
  Bone,
  ThumbsUp,
  ThumbsDown,
  ShieldAlert,
} from "lucide-react";

import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const HCGWeightLossLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "hcg");

  return (
    <div className="bg-light font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-rose/5 to-transparent" />
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-medium">
                The honest guide to what it is, what research says, and safer
                doctor monitored options at Nexus Clinic KL
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-georgia text-5xl md:text-6xl lg:text-7xl text-brown mb-6 leading-tight"
            >
              HCG Weight Loss Treatment
              <span className="block text-rose mt-2">
                in Kuala Lumpur, Malaysia
              </span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl md:text-3xl text-taupe font-light italic">
                Thinking about the HCG diet in Malaysia? Read this before you
                commit.
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown/80 max-w-2xl mx-auto mb-12"
            >
              If you have tried dieting and workouts but the scale barely moves,
              it is normal to feel frustrated. At Nexus Clinic Kuala Lumpur, we
              help you understand what is hype, what is evidence, and what is
              actually safe.
            </motion.p>

            {/* Trust section (quick proof points) */}
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-3 gap-6 mt-12"
            >
              <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-cream">
                <Shield className="w-8 h-8 text-wine mb-3" />
                <p className="text-brown font-medium">
                  Doctor-led weight loss consult with medical screening and
                  personalised plan
                </p>
              </div>
              <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-cream">
                <Award className="w-8 h-8 text-wine mb-3" />
                <p className="text-brown font-medium">
                  Safety-first approach with realistic targets and ongoing
                  follow up
                </p>
              </div>
              <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-cream">
                <MapPin className="w-8 h-8 text-wine mb-3" />
                <p className="text-brown font-medium">
                  Located in Kuala Lumpur with discreet, clinic-based care and
                  clear guidance
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* First, a quick truth (because you deserve it) */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInLeft} className="mb-8">
              <span className="text-wine font-medium flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                First, a quick truth (because you deserve it)
              </span>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <p className="text-lg text-brown mb-4">
                HCG is a real hormone with real medical uses. But most medical
                sources agree that HCG is not approved for weight loss and the
                classic "HCG diet" often involves a very low-calorie diet that
                can be risky.
              </p>
              <p className="text-brown/80 mb-4">
                So if you are searching "HCG weight loss Malaysia" or "HCG
                injection for slimming in KL", the key question is not "can it
                make me lose weight fast?" The better question is: is it safe,
                and will it last?
              </p>
              <p className="text-rose font-medium">
                This page explains it in plain language.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is HCG? Section with Image */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="font-georgia text-4xl text-brown mb-6">
                What is HCG?
              </h2>
              <p className="text-brown/80 mb-3">
                HCG stands for human chorionic gonadotropin. Your body makes it
                during pregnancy. Doctors also use lab-made HCG for specific
                medical reasons, mainly related to fertility and certain hormone
                conditions.
              </p>
              <div className="bg-rose/10 border-l-4 border-rose p-4 rounded">
                <p className="text-brown text-sm">
                  In Malaysia, the Ministry of Health formulary lists HCG
                  injections for fertility-related indications such as ovulation
                  induction and luteal support,{" "}
                  <span className="font-semibold text-rose">
                    not as a weight loss drug.
                  </span>
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative h-100 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/main/HCG-weight-loss-treatment.webp"
                alt="Medical consultation at Nexus Clinic Kuala Lumpur"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-georgia text-xl">Nexus Clinic KL</p>
                <p className="text-sm opacity-90">
                  Doctor-led medical weight management
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What people mean by "HCG weight loss" (and why it got popular) */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="font-georgia text-3xl text-brown mb-6">
                What people mean by "HCG weight loss" (and why it got popular)
              </h2>
              <p className="text-brown/80 mb-4">
                When people talk about the HCG weight loss program, they usually
                mean a plan that combines:
              </p>
              <div className="space-y-3 text-brown/80 mb-4">
                <p className="flex items-start gap-3">
                  <span className="text-rose font-bold">1.</span>
                  <span>HCG products (injections or "drops"), and</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-rose font-bold">2.</span>
                  <span>
                    a very low-calorie diet (often around 500 to 800 calories a
                    day in many versions).
                  </span>
                </p>
              </div>
              <p className="text-brown/80 mb-4">
                This idea has been around for decades. It became popular because
                it promised three things people really want:
              </p>
              <div className="grid grid-cols-3 gap-4 my-6">
                <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                  <Flame className="w-6 h-6 text-rose mx-auto mb-2" />
                  <p className="text-wine font-semibold">faster fat loss</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                  <Droplets className="w-6 h-6 text-rose mx-auto mb-2" />
                  <p className="text-wine font-semibold">less hunger</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                  <Bone className="w-6 h-6 text-rose mx-auto mb-2" />
                  <p className="text-wine font-semibold">
                    keeping muscle while losing weight
                  </p>
                </div>
              </div>
              <p className="italic text-rose font-medium">
                Sounds amazing. The problem is the evidence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Does HCG actually cause weight loss? */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 shadow-lg border border-taupe/10"
            >
              <h2 className="font-georgia text-3xl text-brown mb-4">
                Does HCG actually cause weight loss?
              </h2>
              <p className="text-brown/80 mb-4">
                Most high-quality reviews and medical sources say no.
              </p>
              <p className="text-brown/80 mb-4">
                Here is the simple reason: If you cut calories to extremely low
                levels, you will likely lose weight. But studies show HCG itself
                does not add meaningful weight loss beyond the calorie
                restriction.
              </p>
              <p className="text-brown/80">
                Major medical references also warn that the HCG diet is not safe
                and does not lead to long-term weight control.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why the "HCG diet" can feel like it works at first */}
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
              className="font-georgia text-3xl text-brown mb-6"
            >
              Why the "HCG diet" can feel like it works at first
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="space-y-4 text-brown/80 text-lg"
            >
              <p>Because the diet is often extreme.</p>
              <p>
                Many programs pair HCG with a very low-calorie plan. When
                calories drop that low, people often see fast scale changes
                early. But fast loss is not always fat loss, and fast plans can
                rebound hard.
              </p>
              <p>
                Also, when a plan feels strict and structured, it can improve
                short-term compliance. That structure is useful. The unsafe part
                is pushing the body too far, too fast.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Safety: the biggest concern with HCG weight loss programs */}
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
              className="font-georgia text-3xl text-brown mb-6 flex items-center gap-3"
            >
              <ShieldAlert className="text-rose w-8 h-8" />
              Safety: the biggest concern with HCG weight loss programs
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-brown/80 mb-6">
              Two risks usually show up together:
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10">
                <h3 className="font-bold text-wine text-xl mb-3 flex items-center gap-2">
                  <Pill className="w-5 h-5" />
                  1) The hormone problem
                </h3>
                <p className="text-brown/80">
                  Using hormones without a strong medical reason can cause
                  unpredictable effects. Even when HCG is used correctly for
                  approved indications, it has known side effects (and it is not
                  meant for slimming).
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10">
                <h3 className="font-bold text-wine text-xl mb-3 flex items-center gap-2">
                  <Apple className="w-5 h-5" />
                  2) The very low-calorie diet problem
                </h3>
                <p className="text-brown/80 mb-3">
                  The FDA has warned that "HCG diet" instructions tied to very
                  low-calorie diets increase risk for serious side effects.
                  These can include gallstones, electrolyte imbalance, and heart
                  rhythm problems.
                </p>
                <p className="text-brown/80">
                  Cleveland Clinic also highlights that extreme restriction can
                  lead to issues like fatigue, dehydration, headaches,
                  malnutrition, anemia, hypoglycemia, and more.
                </p>
              </div>

              <div className="mt-6 bg-rose/10 p-6 rounded-2xl border border-rose/30">
                <p className="text-brown font-medium">
                  If you already have a medical condition (thyroid issues,
                  diabetes, heart concerns, PCOS, anemia, or a history of eating
                  disorders), a crash-style plan can hit even harder.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* "Drops", "pellets", "sprays": what you should know */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6 flex items-center gap-2"
            >
              <Droplets className="text-rose w-7 h-7" />
              "Drops", "pellets", "sprays": what you should know
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="space-y-4 text-brown/80 bg-white p-8 rounded-3xl shadow-lg"
            >
              <p>
                Many "homeopathic HCG" products are marketed online. The FDA
                notes these products are sold as drops, pellets, and sprays, and
                they are not evaluated for safety or effectiveness for weight
                loss.
              </p>
              <p className="bg-rose/10 p-4 rounded-xl border-l-4 border-rose font-medium">
                If you are in Malaysia and considering anything bought online,
                be extra cautious. At minimum, ask a clinic doctor to review
                exactly what it is and where it comes from before you use it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who is NOT a good candidate for HCG-type weight loss plans? */}
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
              className="font-georgia text-3xl text-brown mb-6"
            >
              Who is NOT a good candidate for HCG-type weight loss plans?
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-3xl shadow-lg border border-taupe/10"
            >
              <p className="text-brown/80 mb-4">
                Even clinics that market HCG often list exclusions. In general,
                avoid HCG dieting approaches if you:
              </p>

              <ul className="space-y-4 text-brown/80 mb-6">
                <li className="flex items-start gap-3">
                  <Ban className="text-rose w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    are pregnant, trying to conceive, or breastfeeding
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Ban className="text-rose w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>have hormone-sensitive cancer risk or history</span>
                </li>
                <li className="flex items-start gap-3">
                  <Ban className="text-rose w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>have heart rhythm problems or clotting history</span>
                </li>
                <li className="flex items-start gap-3">
                  <Ban className="text-rose w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    have severe depression, active mental health instability, or
                    eating disorder history
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Ban className="text-rose w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>want a "quick fix" without follow up care</span>
                </li>
              </ul>

              <p className="text-rose font-medium italic border-t pt-4">
                If you feel desperate enough to try extreme restriction, take
                that as a sign to seek a safer medical plan with support.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How Nexus Clinic Kuala Lumpur can position HCG questions the right way */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-8 text-center"
            >
              How Nexus Clinic Kuala Lumpur can position HCG questions the right
              way
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown/80 mb-8 text-center"
            >
              At Nexus Clinic KL, you can keep this message clear:
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-4">
              <motion.div
                variants={fadeInRight}
                className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4 border-l-4 border-rose"
              >
                <div className="w-8 h-8 bg-rose rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <p className="text-brown">
                  We listen first. Why weight has not moved, and what you have
                  tried.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4 border-l-4 border-rose"
              >
                <div className="w-8 h-8 bg-rose rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <p className="text-brown">
                  We screen medically. Sleep, hormones, insulin resistance,
                  medications, lifestyle, stress.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4 border-l-4 border-rose"
              >
                <div className="w-8 h-8 bg-rose rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <p className="text-brown">
                  We explain the HCG controversy clearly. No hype.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4 border-l-4 border-rose"
              >
                <div className="w-8 h-8 bg-rose rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <p className="text-brown">
                  We offer safer, evidence-based plans that patients can
                  actually stick to.
                </p>
              </motion.div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-rose font-bold text-lg text-center"
            >
              This protects patients and builds long-term trust.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What to consider instead (safer, doctor monitored weight loss in KL) */}
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
              className="font-georgia text-3xl text-brown mb-8"
            >
              What to consider instead (safer, doctor monitored weight loss in
              KL)
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-brown/80 mb-6">
              If your goal is real fat loss and better health, a doctor
              monitored plan usually focuses on:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-white p-5 rounded-xl flex items-start gap-3 shadow-sm">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-brown">
                  realistic calorie deficit, not extreme starvation
                </span>
              </div>
              <div className="bg-white p-5 rounded-xl flex items-start gap-3 shadow-sm">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-brown">
                  protein and strength training to protect muscle
                </span>
              </div>
              <div className="bg-white p-5 rounded-xl flex items-start gap-3 shadow-sm">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-brown">sleep and stress support</span>
              </div>
              <div className="bg-white p-5 rounded-xl flex items-start gap-3 shadow-sm">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-brown">
                  medical options only when appropriate
                </span>
              </div>
              <div className="bg-white p-5 rounded-xl flex items-start gap-3 shadow-sm md:col-span-2">
                <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-brown">
                  follow up, because maintenance is where most people lose the
                  battle
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-rose/10 p-6 rounded-2xl border-2 border-rose/30"
            >
              <p className="text-brown text-center font-medium text-lg">
                A common safe pace is about{" "}
                <span className="text-rose font-bold">
                  0.5 to 1 kg per week
                </span>
                , not "a kilo a day".
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cost of HCG weight loss in Malaysia (what affects pricing) */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6"
            >
              Cost of HCG weight loss in Malaysia (what affects pricing)
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-3xl shadow-lg border border-taupe/10"
            >
              <p className="text-brown/80 mb-4">
                Prices vary a lot in Kuala Lumpur. Instead of comparing "cheap
                vs expensive", compare what is included:
              </p>

              <ul className="space-y-3 text-brown/80 mb-6">
                <li className="flex items-center gap-3">
                  <ChevronRight className="text-rose w-5 h-5" />
                  <span>doctor consult and screening</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="text-rose w-5 h-5" />
                  <span>body composition tracking (not just weight)</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="text-rose w-5 h-5" />
                  <span>safety monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="text-rose w-5 h-5" />
                  <span>nutrition support and behaviour coaching</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="text-rose w-5 h-5" />
                  <span>
                    what happens after the first month (maintenance plan)
                  </span>
                </li>
              </ul>

              <p className="text-rose font-medium border-t pt-4 italic">
                If a program pushes extreme restriction without proper follow
                up, the "cheap" option can become costly later.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQs (People Also Ask style) */}
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
              className="font-georgia text-3xl text-brown mb-12 text-center"
            >
              FAQs (People Also Ask style)
            </motion.h2>

            <motion.div variants={staggerContainer} className="space-y-4">
              {/* Is the HCG diet safe? */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-taupe/10"
              >
                <h3 className="text-wine font-semibold text-lg mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  Is the HCG diet safe?
                </h3>
                <p className="text-brown/80 pl-7">
                  Most major medical sources say the HCG diet is not safe,
                  mainly because it is usually tied to a very low-calorie diet
                  and unapproved weight loss claims.
                </p>
              </motion.div>

              {/* Does HCG help you lose weight without dieting? */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-taupe/10"
              >
                <h3 className="text-wine font-semibold text-lg mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  Does HCG help you lose weight without dieting?
                </h3>
                <p className="text-brown/80 pl-7">
                  There is no strong evidence that HCG causes weight loss by
                  itself. Most weight change comes from calorie restriction.
                </p>
              </motion.div>

              {/* Why do people lose weight on HCG programs? */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-taupe/10"
              >
                <h3 className="text-wine font-semibold text-lg mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  Why do people lose weight on HCG programs?
                </h3>
                <p className="text-brown/80 pl-7">
                  Because many programs cut calories extremely low. That can
                  cause fast scale changes, but it can also cause medical risks
                  and rebound weight regain.
                </p>
              </motion.div>

              {/* Are HCG drops or sprays real? */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-taupe/10"
              >
                <h3 className="text-wine font-semibold text-lg mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  Are HCG drops or sprays real?
                </h3>
                <p className="text-brown/80 pl-7">
                  Many "homeopathic HCG" products are sold as drops, pellets, or
                  sprays. The FDA warns these are unapproved for weight loss and
                  not evaluated for safety or effectiveness for that purpose.
                </p>
              </motion.div>

              {/* Is HCG approved for weight loss? */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-taupe/10"
              >
                <h3 className="text-wine font-semibold text-lg mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  Is HCG approved for weight loss?
                </h3>
                <p className="text-brown/80 pl-7">
                  The FDA states there are no FDA-approved HCG products for
                  weight loss. In Malaysia, HCG is listed for fertility-related
                  indications in the MOH formulary, not as a slimming drug.
                </p>
              </motion.div>

              {/* What are the risks of very low-calorie diets used with HCG? */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-taupe/10"
              >
                <h3 className="text-wine font-semibold text-lg mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  What are the risks of very low-calorie diets used with HCG?
                </h3>
                <p className="text-brown/80 pl-7">
                  Regulators warn VLCDs can raise risk of gallstones,
                  electrolyte imbalance, and heart rhythm issues, and should
                  only be used under proper medical supervision.
                </p>
              </motion.div>

              {/* How long does it take to see results? */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-taupe/10"
              >
                <h3 className="text-wine font-semibold text-lg mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  How long does it take to see results?
                </h3>
                <p className="text-brown/80 pl-7">
                  With any extreme calorie restriction, the scale can move
                  quickly early. But a safer medical target is steady loss over
                  time, often around 0.5 to 1 kg per week.
                </p>
              </motion.div>

              {/* Will the weight come back after an HCG diet? */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-taupe/10"
              >
                <h3 className="text-wine font-semibold text-lg mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  Will the weight come back after an HCG diet?
                </h3>
                <p className="text-brown/80 pl-7">
                  Rapid, restrictive plans often lead to regain if there is no
                  long-term food strategy and follow up. Cleveland Clinic
                  highlights that extreme approaches are not effective long
                  term.
                </p>
              </motion.div>

              {/* Who should avoid HCG-based weight loss approaches? */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-taupe/10"
              >
                <h3 className="text-wine font-semibold text-lg mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  Who should avoid HCG-based weight loss approaches?
                </h3>
                <p className="text-brown/80 pl-7">
                  People with hormone-sensitive cancer risks, pregnancy, major
                  heart risks, and those vulnerable to disordered eating should
                  avoid these approaches and seek a safer medical plan.
                </p>
              </motion.div>

              {/* Is HCG the same as fat freezing? */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-taupe/10"
              >
                <h3 className="text-wine font-semibold text-lg mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  Is HCG the same as fat freezing?
                </h3>
                <p className="text-brown/80 pl-7">
                  No. HCG dieting is a hormone plus diet concept. Fat freezing
                  (cryolipolysis) targets local fat pockets and is body
                  contouring, not a true weight loss solution.
                </p>
              </motion.div>

              {/* What is a safer alternative to HCG for weight loss in Kuala Lumpur? */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-taupe/10"
              >
                <h3 className="text-wine font-semibold text-lg mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  What is a safer alternative to HCG for weight loss in Kuala
                  Lumpur?
                </h3>
                <p className="text-brown/80 pl-7">
                  A doctor monitored weight loss program that screens your
                  health, sets realistic targets, supports nutrition and
                  activity, and uses medication only when appropriate is usually
                  safer and more sustainable.
                </p>
              </motion.div>

              {/* Can a clinic combine HCG with other medications like appetite suppressants? */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-taupe/10"
              >
                <h3 className="text-wine font-semibold text-lg mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  Can a clinic combine HCG with other medications like appetite
                  suppressants?
                </h3>
                <p className="text-brown/80 pl-7">
                  Some clinics mention combinations like Duromine and HCG in
                  "medical weight management" packages. If you are offered a
                  combo, ask about indication, side effects, monitoring, and
                  exit plan.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Closing section (CTA) */}
      <section className="py-24 bg-wine relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-cream rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cream rounded-full blur-3xl" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-white mb-6"
          >
            Ready for a Safer Path Forward?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            If you are considering HCG weight loss in Malaysia, do not guess
            your way through it. Book a consultation at Nexus Clinic Kuala
            Lumpur and let a doctor review your goals, your health, and your
            safest path forward.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-2xl text-cream font-georgia italic mb-10"
          >
            You will leave with a plan you can follow, not a quick fix you fear.
          </motion.p>

          <motion.button
            variants={scaleIn}
            className="bg-cream text-wine px-10 py-5 rounded-full font-bold text-lg hover:bg-rose hover:text-white transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Your Consultation Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default HCGWeightLossLanding;
