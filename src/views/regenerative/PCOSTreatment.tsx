"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Droplets,
  Weight,
  Heart,
  ChevronRight,
  Sparkles,
  Moon,
  Sun,
  MapPin,
  Award,
  Phone,
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

const PCOSPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "regenerative/pcosTreatment");

  return (
    <div className="bg-light font-inter overflow-x-hidden">
      {/* Hero Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="relative min-h-screen flex items-center bg-linear-to-br from-cream via-light to-cream overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-georgia text-brown mb-6 leading-tight"
            >
              PCOS Treatment in Malaysia at{" "}
              <span className="text-wine block">Nexus Clinic Kuala Lumpur</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-taupe mb-8 max-w-3xl italic"
            >
              PCOS is not "just irregular periods." It affects your skin,
              weight, mood, and fertility. Let's treat the whole you.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown/80 mb-12 max-w-2xl"
            >
              If your cycles are unpredictable, your acne will not calm down, or
              your body feels like it is working against you, you are not being
              dramatic. At Nexus Clinic Kuala Lumpur, we build a realistic PCOS
              plan that fits your goals, your schedule, and your body.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-wine text-light px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-rose transition-all shadow-lg"
              >
                Start Your Journey <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 bg-glass backdrop-blur-sm border-y border-cream"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="bg-light p-6 rounded-2xl shadow-sm border border-cream"
            >
              <MapPin className="w-8 h-8 text-wine mb-4" />
              <p className="text-brown text-sm">
                Confidential, doctor-led consults in central Kuala Lumpur
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="bg-light p-6 rounded-2xl shadow-sm border border-cream"
            >
              <Sparkles className="w-8 h-8 text-wine mb-4" />
              <p className="text-brown text-sm">
                PCOS support that covers symptoms you feel daily, including
                weight and insulin resistance, acne, unwanted hair, and cycle
                tracking
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="bg-light p-6 rounded-2xl shadow-sm border border-cream"
            >
              <Award className="w-8 h-8 text-wine mb-4" />
              <p className="text-brown text-sm">
                Evidence-based approach, guided by the 2023 International PCOS
                Guideline (Rotterdam criteria and treatment pathways)
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="bg-light p-6 rounded-2xl shadow-sm border border-cream"
            >
              <Phone className="w-8 h-8 text-wine mb-4" />
              <p className="text-brown text-sm">
                Nexus Clinic Kuala Lumpur location (as listed online): LG 10,
                Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala
                Lumpur. Mobile: 016-7025699 / 03-21635699
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is PCOS Section with Image - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-6">
                What Is PCOS{" "}
                <span className="text-wine">(In Simple Words)</span>
              </h2>
              <p className="text-lg text-brown/80 mb-4 leading-relaxed">
                PCOS (Polycystic Ovary Syndrome) is a common hormone condition
                in women of reproductive age. It is linked to irregular
                ovulation, higher androgens (male-type hormones), and sometimes
                ovaries that look "polycystic" on ultrasound.
              </p>
              <p className="text-lg text-brown/80 leading-relaxed">
                Important detail: PCOS does not always mean you have true cysts.
                Many sources explain the ovaries may contain many small
                follicles, and "cysts" is often a confusing word for patients.
              </p>
              <p className="text-lg text-brown/80 mt-4 font-semibold">
                13% globally using Rotterdam criteria, and it may be higher in
                some regions including South East Asia.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-wine/10 rounded-3xl transform rotate-3" />
              <img
                src="/images/regenerative/pcos-treatment.webp"
                alt="PCOS Treatment"
                className="relative rounded-3xl shadow-xl w-full h-auto object-cover border-4 border-light"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Symptoms Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-georgia text-brown mb-4 text-center"
          >
            Signs and Symptoms That Make Women Search
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-wine mb-12 text-center"
          >
            "PCOS Treatment Kuala Lumpur"
          </motion.p>

          <div className="space-y-4 max-w-4xl mx-auto">
            <motion.p variants={fadeInUp} className="text-lg text-brown/80">
              PCOS can look different from one woman to another. Common symptoms
              include:
            </motion.p>

            <motion.ul variants={fadeInUp} className="space-y-3">
              <li className="flex items-start gap-3 text-brown">
                <div className="w-2 h-2 bg-wine rounded-full mt-2" />
                <span>
                  Irregular periods (late, missed, or very long cycles)
                </span>
              </li>
              <li className="flex items-start gap-3 text-brown">
                <div className="w-2 h-2 bg-wine rounded-full mt-2" />
                <span>Acne and oily skin</span>
              </li>
              <li className="flex items-start gap-3 text-brown">
                <div className="w-2 h-2 bg-wine rounded-full mt-2" />
                <span>Unwanted facial or body hair (hirsutism)</span>
              </li>
              <li className="flex items-start gap-3 text-brown">
                <div className="w-2 h-2 bg-wine rounded-full mt-2" />
                <span>Weight gain or difficulty losing weight</span>
              </li>
              <li className="flex items-start gap-3 text-brown">
                <div className="w-2 h-2 bg-wine rounded-full mt-2" />
                <span>Darkened skin patches (acanthosis nigricans)</span>
              </li>
              <li className="flex items-start gap-3 text-brown">
                <div className="w-2 h-2 bg-wine rounded-full mt-2" />
                <span>Sleep issues, sometimes sleep apnoea</span>
              </li>
              <li className="flex items-start gap-3 text-brown">
                <div className="w-2 h-2 bg-wine rounded-full mt-2" />
                <span>Fertility challenges</span>
              </li>
              <li className="flex items-start gap-3 text-brown">
                <div className="w-2 h-2 bg-wine rounded-full mt-2" />
                <span>
                  PCOS can also affect mental health. Some Malaysian hospital
                  education pages mention depression, anxiety, and even
                  disordered eating patterns in women with PCOS.
                </span>
              </li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-center text-lg text-wine mt-8 font-semibold"
            >
              If you read that and thought "That is me," you deserve care that
              takes it seriously.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Causes Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown mb-8 text-center"
          >
            What Causes PCOS?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-lg text-brown/80 mb-4 max-w-2xl mx-auto"
          >
            There is no single cause. PCOS is usually a mix of:
          </motion.p>

          <div className="space-y-4 max-w-3xl mx-auto mb-6">
            <motion.div
              variants={fadeInUp}
              className="bg-light p-6 rounded-xl border-l-4 border-wine"
            >
              <h3 className="text-xl font-semibold text-brown mb-2">
                Hormone imbalance
              </h3>
              <p className="text-brown/80">
                (often higher androgens and disrupted ovulation)
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-6 rounded-xl border-l-4 border-wine"
            >
              <h3 className="text-xl font-semibold text-brown mb-2">
                Insulin resistance
              </h3>
              <p className="text-brown/80">
                (your body needs more insulin to manage sugar, which can push
                hormone imbalance and weight gain)
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-6 rounded-xl border-l-4 border-wine"
            >
              <h3 className="text-xl font-semibold text-brown mb-2">
                Genetics
              </h3>
              <p className="text-brown/80">(PCOS often runs in families)</p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-lg text-wine mt-8 font-semibold"
          >
            This is why "one miracle supplement" rarely fixes PCOS. It needs a
            layered plan.
          </motion.p>
        </div>
      </motion.section>

      {/* Diagnosis Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown mb-8"
          >
            How PCOS Is Diagnosed{" "}
            <span className="text-wine">(So You Don't Get Misdiagnosed)</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-brown/80 mb-6 leading-relaxed"
          >
            The 2023 International PCOS Guideline recommends diagnosing PCOS
            using revised Rotterdam criteria. In adults, diagnosis generally
            requires two of three:
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-brown">
              <span className="text-wine font-bold">1.</span>
              <span>clinical or biochemical hyperandrogenism</span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <span className="text-wine font-bold">2.</span>
              <span>ovulatory dysfunction</span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <span className="text-wine font-bold">3.</span>
              <span>polycystic ovaries on ultrasound</span>
            </li>
          </motion.ul>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-6">
            The guideline also highlights excluding other causes like thyroid
            disease, high prolactin, and non-classic congenital adrenal
            hyperplasia (17-hydroxyprogesterone).
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-brown bg-cream p-8 rounded-xl border-l-4 border-wine"
          >
            A practical point that helps patients: if you have irregular cycles
            plus strong signs of androgen excess, you may not always need every
            test under the sun. The guideline focuses on accurate diagnosis
            while avoiding over-testing, especially in adolescents.
          </motion.p>
        </div>
      </motion.section>

      {/* Treatment Goal Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-wine text-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia mb-8"
          >
            PCOS Treatment in Malaysia: The Real Goal
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl mb-12 max-w-3xl">
            There is no "instant cure," but PCOS symptoms are treatable and many
            women feel much better with the right approach.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg mb-6">
            At Nexus Clinic Kuala Lumpur, we talk about PCOS treatment as a
            roadmap with 3 big targets:
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-cream rounded-full mt-2" />
              <span>1. Make your cycles safer and more predictable</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-cream rounded-full mt-2" />
              <span>2. Lower androgen effects like acne and unwanted hair</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-cream rounded-full mt-2" />
              <span>
                3. Improve metabolic health (insulin resistance, weight, energy,
                long-term risk)
              </span>
            </li>
          </motion.ul>

          <motion.p variants={fadeInUp} className="text-lg">
            And if pregnancy is your goal, the roadmap shifts to fertility
            support and ovulation.
          </motion.p>
        </div>
      </motion.section>

      {/* Lifestyle Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown mb-6"
          >
            Step 1: Lifestyle That Actually Helps{" "}
            <span className="text-wine">(Without Shame)</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            This is not about "just lose weight." It is about improving insulin
            sensitivity and reducing hormone chaos.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            Even small changes can help. NHS guidance notes that in overweight
            women, losing around 5% of body weight can lead to significant
            improvement in PCOS. Malaysian hospital pages also highlight regular
            exercise, a balanced diet, and weight management as core strategies.
          </motion.p>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-georgia text-brown mb-6"
          >
            Simple, realistic KL-friendly habits:
          </motion.h3>

          <motion.ul variants={fadeInUp} className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>Walk daily (start with 20 minutes)</span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Build muscle 2 to 3 times a week (home workouts count)
              </span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>Prioritise protein and fibre in meals</span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Reduce sugary drinks and frequent desserts (not forever, just
                less often)
              </span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Sleep earlier when possible (PCOS and poor sleep feed each
                other)
              </span>
            </li>
          </motion.ul>

          <motion.p
            variants={fadeInUp}
            className="text-center text-lg text-wine mt-8 font-semibold"
          >
            This is the base that makes medication work better, and makes
            symptoms return less often.
          </motion.p>
        </div>
      </motion.section>

      {/* Irregular Periods Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown mb-6"
          >
            Step 2: Treatments for Irregular Periods
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl text-wine mb-8">
            Many women want one thing first: "I just want my cycle to stop
            scaring me."
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            Common medical options include:
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Combined oral contraceptive pills to regulate periods and reduce
                androgen effects like hirsutism (commonly mentioned in Malaysian
                hospital guidance)
              </span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Other hormone options depending on your history and risk factors
                (your doctor decides)
              </span>
            </li>
          </motion.ul>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-brown/80 p-6 border-l-4 border-wine bg-cream/50"
          >
            Why this matters: long gaps without a period can increase risk of
            womb lining issues in some women. This is one reason doctors treat
            cycles, not just acne.
          </motion.p>
        </div>
      </motion.section>

      {/* Acne Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown mb-6"
          >
            Step 3: PCOS Acne Treatment{" "}
            <span className="text-wine">
              (Skin That Feels Like Yours Again)
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            Acne in PCOS is often driven by hormones, not "dirty skin." The 2023
            guideline notes acne alone is a weaker predictor than hirsutism, but
            it still matters in real life and can affect confidence.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            A good acne plan may include:
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>Hormonal regulation (when appropriate)</span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Medical-grade skincare guidance (simple, not 10 products)
              </span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                In-clinic support for acne scars or texture if that's your
                concern
              </span>
            </li>
          </motion.ul>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80">
            Nexus Clinic is known for aesthetic and laser treatments in Kuala
            Lumpur, so many women choose to manage both the medical and visible
            parts of PCOS in one journey.
          </motion.p>
        </div>
      </motion.section>

      {/* Unwanted Hair Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown mb-6"
          >
            Step 4: Unwanted Hair and Hair Thinning{" "}
            <span className="text-wine">(Hirsutism and PCOS)</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            Unwanted facial hair is one of the most emotionally heavy PCOS
            symptoms. The guideline even notes the psychosocial impact and
            encourages clinicians to take patient reporting seriously.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            Treatment options include:
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-4 mb-6">
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>Hormonal options (doctor-led)</span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Anti-androgens in selected patients, with strong contraception
                guidance. The guideline notes anti-androgens can be considered
                for hirsutism with effective contraception, and mentions
                spironolactone (often 25 to 100 mg/day) appears to have lower
                risks of adverse effects.
              </span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Laser and light hair reduction. The guideline states mechanical
                laser and light therapies should be considered for reducing
                facial hirsutism and improving quality of life, and that more
                sessions may be needed in PCOS.
              </span>
            </li>
          </motion.ul>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-brown/80 p-6 bg-cream rounded-xl"
          >
            This is where an aesthetic clinic can be genuinely helpful, as long
            as it is done by experienced professionals with proper counselling.
          </motion.p>
        </div>
      </motion.section>

      {/* Insulin Resistance Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown mb-6"
          >
            Step 5: Insulin Resistance and Weight Support in PCOS
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            Many women with PCOS feel like they eat less and still gain weight.
            Insulin resistance can be part of that story. Malaysian hospital
            guidance explicitly links PCOS risk factors with insulin resistance.
          </motion.p>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-georgia text-wine mb-4"
          >
            Metformin
          </motion.h3>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-6">
            The 2023 guideline notes metformin can be used in certain PCOS
            situations, including anovulatory infertility (with counselling that
            other ovulation agents may be more effective), and it highlights
            mild gastrointestinal side effects. It also notes metformin should
            be considered over inositol for hirsutism and central adiposity,
            with the trade-off of more GI side effects.
          </motion.p>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-georgia text-wine mb-4"
          >
            Modern weight-loss medications
          </motion.h3>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80">
            Some specialist clinics in Kuala Lumpur discuss GLP-1 medications in
            selected PCOS patients under medical care. This is not for everyone.
            It depends on your BMI, insulin resistance, and health history.
          </motion.p>
        </div>
      </motion.section>

      {/* Fertility Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown mb-6"
          >
            Step 6: PCOS and Fertility{" "}
            <span className="text-wine">(If You Want to Get Pregnant)</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            PCOS is one of the most common causes of infertility, but it is also
            treatable. Women's Health (US HHS) states many women with PCOS can
            still get pregnant, and treatment focuses on restoring ovulation.
          </motion.p>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-georgia text-wine mb-4"
          >
            Ovulation induction
          </motion.h3>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            The 2023 guideline summary states:
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Letrozole should be first-line pharmacological treatment for
                ovulation induction in infertile anovulatory women with PCOS
                (with no other infertility factors).
              </span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                It also outlines where clomiphene citrate and metformin may be
                used, and the need to counsel about multiple pregnancy risk with
                clomiphene.
              </span>
            </li>
          </motion.ul>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            If fertility is your goal, your plan may include:
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>Cycle tracking and timed intercourse guidance</span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>Ovulation medications (doctor-prescribed)</span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>Referral to fertility specialists if needed</span>
            </li>
          </motion.ul>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-brown/80 p-6 bg-cream rounded-xl"
          >
            Nexus Clinic publishes fertility-related content and discusses that
            fertility testing can reveal PCOS or hormone imbalance, which
            supports the idea of a structured work-up rather than guessing.
          </motion.p>
        </div>
      </motion.section>

      {/* Long-term Health Risks Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-wine text-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia mb-8"
          >
            PCOS Long-Term Health Risks{" "}
            <span className="text-cream">(Why Treating It Early Helps)</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl mb-4">
            PCOS is not only about periods and skin.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg mb-4">
            The guideline encourages awareness of long-term health, and many
            clinical sources link PCOS with higher risk of insulin resistance,
            type 2 diabetes, high blood pressure, and mental health concerns.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-2xl font-georgia mt-6">
            Treating PCOS early can reduce future stress, both medical and
            emotional.
          </motion.p>
        </div>
      </motion.section>

      {/* What Treatment Looks Like Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown mb-12"
          >
            What PCOS Treatment Looks Like at Nexus Clinic Kuala Lumpur
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-8">
            Think of your care in phases:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-light p-8 rounded-2xl shadow-sm border-l-4 border-wine mb-6"
          >
            <span className="text-wine font-semibold text-xl">
              Phase 1: Diagnosis and clarity
            </span>
            <p className="text-brown/80 mt-2">
              You bring symptoms. We confirm what's going on using
              guideline-based criteria and sensible testing.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-light p-8 rounded-2xl shadow-sm border-l-4 border-wine mb-6"
          >
            <span className="text-wine font-semibold text-xl">
              Phase 2: Build your plan around your main goal
            </span>
            <p className="text-brown/80 mt-2">
              Cycle control. Clearer skin. Hair reduction. Weight and insulin
              resistance. Fertility support.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-light p-8 rounded-2xl shadow-sm border-l-4 border-wine"
          >
            <span className="text-wine font-semibold text-xl">
              Phase 3: Track progress and adjust
            </span>
            <p className="text-brown/80 mt-2">
              PCOS changes over time. Your plan should too.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Cost Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown mb-6"
          >
            Cost of PCOS Treatment in Malaysia{" "}
            <span className="text-wine">(Realistic, Not Guessy)</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            PCOS costs vary because PCOS is not one treatment.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            What usually drives cost:
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>Consultation and follow-ups</span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Blood tests (hormones, glucose, lipids, thyroid, others if
                needed)
              </span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>Pelvic ultrasound when indicated</span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>Medications (varies widely)</span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Hair reduction or acne-scar treatments if you choose them
              </span>
            </li>
          </motion.ul>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            To give you a sense of market pricing in Malaysia, some providers
            publish package prices:
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-2 mb-6">
            <li className="text-brown">
              A KL provider lists a "Specialist PCOS Test and Ultrasound" from
              MYR 138 (package listing)
            </li>
            <li className="text-brown">
              MAHSA Specialist Hospital lists a PCOS screening O&G package at
              RM480
            </li>
            <li className="text-brown">
              Some hospital package pages list ultrasound abdomen and pelvis
              around RM285 as an add-on screening price
            </li>
          </motion.ul>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-brown bg-cream p-6 rounded-xl font-semibold"
          >
            Your exact cost depends on what you actually need, not what a
            package includes.
          </motion.p>
        </div>
      </motion.section>

      {/* Competitor Snapshot - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown mb-8"
          >
            Competitor Snapshot: What Top PCOS Pages in Malaysia Do{" "}
            <span className="text-wine">(And How We Improve It)</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-4">
            When you search "PCOS treatment Malaysia" or "PCOS treatment Kuala
            Lumpur," top pages often include:
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Pantai Hospitals: clear symptoms list, diagnosis approach (blood
                tests and ultrasound), and a reminder that PCOS cannot be cured
                but symptoms are treatable
              </span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Gleneagles: similar hospital-style structure and mentions OCPs
                for cycle regulation and hirsutism
              </span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Prince Court / private women's health clinics: patient-friendly
                education and encouragement to see an O&G specialist
              </span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                KL women specialist pages: practical weight-loss advice with
                metformin and GLP-1 discussions under specialist care
              </span>
            </li>
            <li className="flex items-start gap-3 text-brown">
              <div className="w-2 h-2 bg-wine rounded-full mt-2" />
              <span>
                Fertility centres: PCOS and fertility FAQs, usually focused on
                conception routes
              </span>
            </li>
          </motion.ul>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-georgia text-wine mb-4"
          >
            Where Nexus Clinic KL content can win:
          </motion.h3>

          <motion.ul
            variants={fadeInUp}
            className="space-y-3 bg-wine text-light p-8 rounded-2xl"
          >
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-cream rounded-full mt-2" />
              <span>More human language, less "textbook"</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-cream rounded-full mt-2" />
              <span>
                Clear symptom-based pathways (skin, hair, weight, fertility)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-cream rounded-full mt-2" />
              <span>
                Evidence-based choices (Rotterdam criteria, letrozole first-line
                for ovulation induction)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-cream rounded-full mt-2" />
              <span>
                Aesthetic support that is actually guideline-aligned (laser and
                light therapy for hirsutism)
              </span>
            </li>
          </motion.ul>
        </div>
      </motion.section>

      {/* FAQ Section - ALL 14 QUESTIONS AND ANSWERS INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                1) Can PCOS be cured permanently?
              </h3>
              <p className="text-brown/80">
                PCOS usually cannot be "cured," but symptoms can be treated and
                controlled long term.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                2) What is the best treatment for PCOS?
              </h3>
              <p className="text-brown/80">
                There is no single best treatment. The best plan depends on your
                goal: cycle control, acne and hair, weight and insulin
                resistance, or fertility. The international guideline recommends
                tailored care based on symptoms and life stage.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                3) Can I get pregnant if I have PCOS?
              </h3>
              <p className="text-brown/80">
                Yes. Many women with PCOS can get pregnant, sometimes naturally
                and sometimes with ovulation support.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                4) What is the first-line fertility medication for PCOS?
              </h3>
              <p className="text-brown/80">
                The 2023 International PCOS Guideline summary states letrozole
                should be first-line for ovulation induction in infertile
                anovulatory women with PCOS (with no other infertility factors).
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                5) How is PCOS diagnosed in adults?
              </h3>
              <p className="text-brown/80">
                Diagnosis uses revised Rotterdam criteria, usually requiring two
                of: hyperandrogenism, ovulatory dysfunction, or polycystic
                ovaries on ultrasound, while excluding other conditions like
                thyroid disease and high prolactin.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                6) Do I need an ultrasound to confirm PCOS?
              </h3>
              <p className="text-brown/80">
                Not always. The guideline notes diagnosis can often be made
                based on clinical features, and ultrasound or AMH may be used in
                adults depending on the diagnostic pathway.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                7) Why do I gain weight so easily with PCOS?
              </h3>
              <p className="text-brown/80">
                Insulin resistance is a common driver in PCOS. It can increase
                hunger, cravings, and fat storage, and can worsen hormone
                imbalance.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                8) How much weight loss helps PCOS symptoms?
              </h3>
              <p className="text-brown/80">
                Even modest changes can help. NHS guidance notes that around 5%
                weight loss can significantly improve PCOS symptoms in
                overweight women.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                9) Does metformin help PCOS?
              </h3>
              <p className="text-brown/80">
                Metformin may help in selected PCOS patients, especially where
                insulin resistance or anovulatory infertility is involved, and
                the guideline highlights counselling about GI side effects.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                10) Is inositol better than metformin for PCOS?
              </h3>
              <p className="text-brown/80">
                The guideline notes metformin should be considered over inositol
                for hirsutism and central adiposity, and encourages women using
                complementary therapies to tell their health professional.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                11) What is the best treatment for unwanted facial hair in PCOS?
              </h3>
              <p className="text-brown/80">
                Options include hormonal approaches and hair-reduction methods.
                The guideline specifically states laser and light therapies
                should be considered for facial hirsutism and quality of life,
                and more sessions may be needed in PCOS.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                12) Does PCOS cause acne?
              </h3>
              <p className="text-brown/80">
                Yes, acne is a common symptom in PCOS. Malaysian hospital pages
                list acne as a PCOS symptom, and the guideline recommends
                assessing acne as part of hyperandrogenism review.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                13) Should I worry about long-term health if I have PCOS?
              </h3>
              <p className="text-brown/80">
                PCOS is linked with metabolic risks and mental health concerns,
                so long-term monitoring and early lifestyle support matter.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-wine mb-2">
                14) Where can I get PCOS support in Kuala Lumpur?
              </h3>
              <p className="text-brown/80">
                Many women start at hospitals and O&G clinics for diagnosis. If
                your main concerns include weight, insulin resistance, acne, and
                unwanted hair, Nexus Clinic Kuala Lumpur is centrally located at
                Wisma UOA II, Jalan Pinang, with contact details listed online.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section - ALL TEXT INCLUDED */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 bg-wine text-light"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia mb-6"
          >
            Start Your Journey to Clarity
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            If you are searching for PCOS treatment in Kuala Lumpur or PCOS
            treatment in Malaysia, start with clarity. Not self-blame.
          </motion.p>

          <motion.button
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-light text-wine px-10 py-4 rounded-full font-semibold text-lg hover:bg-cream transition-all shadow-xl"
          >
            Book Your Consultation Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default PCOSPage;
