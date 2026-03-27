"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  MapPin,
  ChevronRight,
  CheckCircle2,
  XCircle,
  FileText,
  ArrowRight,
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

export default function DoctorMonitoredLanding({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "doctorMonitored");

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-cream to-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 py-16 md:py-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h1 className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight">
                Doctor Monitored Weight Loss Treatment in Malaysia
                <span className="block text-wine text-2xl md:text-3xl mt-2">
                  (Kuala Lumpur)
                </span>
              </h1>

              <p className="text-lg md:text-xl text-taupe font-inter leading-relaxed">
                Lose weight with a plan that's built around your body, not
                guesswork.
              </p>

              <p className="text-brown/80 font-inter">
                Doctor monitored weight loss at Nexus Clinic Kuala Lumpur
                combines medical checks, realistic habits, and safe options
                (when you qualify). You get structure, support, and regular
                follow ups so progress feels clearer and less stressful.
              </p>

              {/* Trust Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="bg-glass backdrop-blur-sm rounded-2xl p-4 border border-white/50">
                    <Shield className="w-6 h-6 text-wine mx-auto mb-2" />
                    <div className="font-inter font-medium text-brown text-sm">
                      Doctor supervised approach
                    </div>
                    <div className="text-taupe text-xs">not DIY shortcuts</div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="text-center">
                  <div className="bg-glass backdrop-blur-sm rounded-2xl p-4 border border-white/50">
                    <FileText className="w-6 h-6 text-wine mx-auto mb-2" />
                    <div className="font-inter font-medium text-brown text-sm">
                      Personalised plan
                    </div>
                    <div className="text-taupe text-xs">
                      based on your health profile
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="text-center">
                  <div className="bg-glass backdrop-blur-sm rounded-2xl p-4 border border-white/50">
                    <Activity className="w-6 h-6 text-wine mx-auto mb-2" />
                    <div className="font-inter font-medium text-brown text-sm">
                      Ongoing monitoring
                    </div>
                    <div className="text-taupe text-xs">and adjustments</div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="text-center">
                  <div className="bg-glass backdrop-blur-sm rounded-2xl p-4 border border-white/50">
                    <MapPin className="w-6 h-6 text-wine mx-auto mb-2" />
                    <div className="font-inter font-medium text-brown text-sm">
                      Kuala Lumpur clinic location
                    </div>
                    <div className="text-taupe text-xs">Jalan Pinang, KL</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative z-10 bg-linear-to-br from-wine/10 to-rose/10 rounded-3xl p-8 backdrop-blur-sm">
                <img
                  src="/images/main/doctor-monitored-malaysia.webp"
                  alt="Doctor consultation at Nexus Clinic Kuala Lumpur"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-glass backdrop-blur-md rounded-2xl p-4 border border-white/50">
                  <p className="font-inter text-sm text-brown">
                    Medical supervision with
                  </p>
                  <p className="font-georgia text-wine font-bold">
                    Asian BMI cutoffs
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Section */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                What "doctor monitored weight loss" really means
              </h2>

              <div className="prose prose-lg text-brown/80">
                <p className="font-inter">
                  Doctor monitored weight loss is not a crash diet, detox, or a
                  one time injection.
                </p>

                <p className="font-inter">
                  It is a medically supervised plan where a doctor checks your
                  health risks, tracks your progress, and adjusts the strategy
                  as your body responds. In Malaysia, clinical guidelines
                  support screening with BMI and waist circumference, and using
                  Asian BMI cut offs (overweight starts at BMI 23; obesity at
                  BMI 27.5 and above).
                </p>

                <p className="font-inter">
                  At Nexus Clinic Kuala Lumpur, the goal is simple: help you
                  lose fat safely, protect your health, and make the results
                  easier to maintain. The clinic's weight loss menu includes
                  options like Ozempic, Wegovy, Saxenda, Duromine, and more,
                  with professional doctor supervision.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-cream rounded-3xl p-8">
                <h3 className="font-georgia text-2xl text-wine mb-4">
                  Why many people in Kuala Lumpur choose medical help for weight
                  loss
                </h3>
                <p className="font-inter text-brown/80 leading-relaxed">
                  If you live in KL, you already know the routine. Long
                  workdays. Late dinners. Grab food. Stress. Poor sleep. Then
                  the scale moves up even when you "try harder." Weight gain is
                  not always just about willpower. Hormones, insulin resistance,
                  medications, stress, and sleep can push appetite and cravings
                  higher. Many clinics in Kuala Lumpur now address weight loss
                  as a health issue, not a motivation issue.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who Section */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-12 text-center">
            Who is doctor monitored weight loss for?
          </h2>

          <p className="font-inter text-brown/80 mb-6 text-center">
            This treatment is usually for adults who want controlled fat loss
            with medical oversight, especially if they have health risks.
          </p>

          <p className="font-inter font-medium text-brown mb-4">
            You may be a good candidate if:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                <p className="font-inter text-brown">
                  Your BMI is 27.5 or above (Asian cut off for obesity)
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                <p className="font-inter text-brown">
                  Your BMI is 23 or above and you have rising risks like high
                  blood pressure, cholesterol, or prediabetes
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                <p className="font-inter text-brown">
                  You have intense hunger, cravings, or repeated "weight regain"
                  cycles
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                <p className="font-inter text-brown">
                  You suspect PCOS, thyroid issues, or insulin resistance may be
                  affecting your weight
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-6 shadow-lg md:col-span-2"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                <p className="font-inter text-brown">
                  You want weight loss that protects energy, mood, and long term
                  health
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 p-6 bg-rose/10 rounded-2xl text-center font-inter text-brown"
          >
            If your BMI is lower but you have stubborn pockets of fat, a body
            contouring option may make more sense than a medical weight plan.
            Some clinics in Malaysia guide patients this way too.
          </motion.p>
        </motion.div>
      </section>

      {/* Step by Step Section */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
            What happens at Nexus Clinic Kuala Lumpur
            <span className="block text-wine text-xl mt-2">step by step</span>
          </h2>

          <div className="space-y-8 mt-12">
            {/* Step 1 */}
            <motion.div
              variants={fadeInLeft}
              className="bg-cream rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-wine text-light w-12 h-12 rounded-full flex items-center justify-center font-georgia text-xl font-bold shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    Step 1: A real consultation, not a generic plan
                  </h3>
                  <p className="font-inter text-brown/80 leading-relaxed">
                    You talk through your weight history, past diet attempts,
                    appetite patterns, sleep, stress, and daily routine. The
                    goal is to find the blockers, not blame you.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={fadeInLeft}
              className="bg-cream rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-wine text-light w-12 h-12 rounded-full flex items-center justify-center font-georgia text-xl font-bold shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    Step 2: Measurements that matter
                  </h3>
                  <p className="font-inter text-brown/80 leading-relaxed">
                    Your doctor checks weight, BMI, and waist. This matches
                    Malaysia's clinical guidance that supports routine screening
                    using BMI and waist circumference.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={fadeInLeft}
              className="bg-cream rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-wine text-light w-12 h-12 rounded-full flex items-center justify-center font-georgia text-xl font-bold shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    Step 3: Risk check and lab tests (when needed)
                  </h3>
                  <p className="font-inter text-brown/80 leading-relaxed">
                    Many medically guided programs include lab testing if
                    required, especially before medication support. Common
                    checks can include sugar markers, lipids, liver and kidney
                    markers, and thyroid indicators (based on your situation).
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              variants={fadeInLeft}
              className="bg-cream rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-wine text-light w-12 h-12 rounded-full flex items-center justify-center font-georgia text-xl font-bold shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    Step 4: Your plan is built from "levers"
                  </h3>
                  <p className="font-inter text-brown/80 leading-relaxed">
                    A good doctor monitored plan usually includes a mix of: Food
                    strategy you can repeat (not perfection) Movement targets
                    that fit your schedule Sleep and stress support If you
                    qualify, prescription support to reduce appetite or improve
                    metabolic control
                  </p>
                  <p className="font-inter text-sm text-taupe mt-2">
                    Clinics that rank well in Malaysia commonly combine medical
                    supervision with lifestyle guidance and follow ups.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              variants={fadeInLeft}
              className="bg-cream rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-wine text-light w-12 h-12 rounded-full flex items-center justify-center font-georgia text-xl font-bold shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    Step 5: Follow ups and adjustments
                  </h3>
                  <p className="font-inter text-brown/80 leading-relaxed">
                    This is the difference maker. Instead of guessing, you
                    review progress, side effects, hunger levels, and plateaus.
                    Then your plan is adjusted.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Treatment Options Section */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
            Treatment options inside a doctor monitored weight loss plan
          </h2>

          <p className="font-inter text-brown/80 mb-8 text-lg">
            Not everyone needs medication. But when it is appropriate, it can
            make the first phase easier.
          </p>

          <div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-3xl p-8"
            >
              <h3 className="font-georgia text-xl text-wine mb-3">
                1) Lifestyle based medical weight management
              </h3>
              <p className="font-inter text-brown/70">
                This is the foundation. Think calories, protein, fibre, and
                daily activity, but in a realistic KL lifestyle way.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-3xl p-8"
            >
              <h3 className="font-georgia text-xl text-wine mb-3">
                2) Prescription support (only if suitable)
              </h3>
              <p className="font-inter text-brown/70 mb-4">
                Top KL clinics commonly list options like:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li className="font-inter text-brown/70">
                  GLP-1 medications (example: semaglutide, liraglutide)
                </li>
                <li className="font-inter text-brown/70">
                  Dual GIP/GLP-1 options (example: tirzepatide)
                </li>
                <li className="font-inter text-brown/70">
                  Appetite suppressants and other doctor prescribed tools
                </li>
              </ul>
              <p className="font-inter text-brown/70 mb-3">
                Some clinics publish comparisons of popular options, including
                typical weight loss potential ranges and common side effects.
              </p>
              <p className="font-inter text-sm text-taupe italic">
                Important: These medicines require a medical assessment and
                prescription. They are not "quick fixes."
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-3xl p-8"
            >
              <h3 className="font-georgia text-xl text-wine mb-3">
                3) Body contouring add ons (for shape, not "scale weight")
              </h3>
              <p className="font-inter text-brown/70">
                If your goal is waist shaping or stubborn pockets (lower belly,
                flanks, thighs), non surgical body contouring can complement
                weight loss. Nexus Clinic also offers fat freezing and body
                contouring services as part of its broader fat and weight loss
                menu.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
            What results can you expect (and how fast)?
          </h2>

          <p className="font-inter text-brown/80 mb-8 text-lg">
            Most people want one thing: "Tell me when I'll see it."
          </p>

          <div className="space-y-6 max-w-4xl">
            <motion.p variants={fadeInUp} className="font-inter text-brown/80">
              Here's the honest answer. Weight loss is usually gradual, and
              clinics often state that results can begin within weeks and
              improve over months with consistency.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-wine/5 rounded-2xl p-6"
            >
              <p className="font-inter text-brown">
                If you are using GLP-1 based support and lifestyle changes,
                clinical trials for once weekly semaglutide (with lifestyle
                intervention) have shown average weight loss around{" "}
                <span className="font-bold text-wine text-2xl">14.9%</span> at
                68 weeks (results vary by person).
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-3">
              <p className="font-inter font-medium text-brown">
                In real life, your outcome depends on:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-brown/70">
                  <ChevronRight className="w-4 h-4 text-wine" />
                  <span className="font-inter">
                    Your starting weight and waist
                  </span>
                </li>
                <li className="flex items-center gap-2 text-brown/70">
                  <ChevronRight className="w-4 h-4 text-wine" />
                  <span className="font-inter">Sleep and stress</span>
                </li>
                <li className="flex items-center gap-2 text-brown/70">
                  <ChevronRight className="w-4 h-4 text-wine" />
                  <span className="font-inter">Food consistency</span>
                </li>
                <li className="flex items-center gap-2 text-brown/70">
                  <ChevronRight className="w-4 h-4 text-wine" />
                  <span className="font-inter">
                    Medication tolerance (if used)
                  </span>
                </li>
                <li className="flex items-center gap-2 text-brown/70">
                  <ChevronRight className="w-4 h-4 text-wine" />
                  <span className="font-inter">Follow up quality</span>
                </li>
              </ul>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="font-inter text-brown bg-rose/10 p-4 rounded-xl"
            >
              A good doctor monitored plan aims for steady progress you can
              keep.
            </motion.p>
          </div>

          {/* Pros and Cons */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-cream rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <h3 className="font-georgia text-2xl text-brown">Benefits</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="font-inter text-brown/70">
                    Safer approach with medical screening and monitoring
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="font-inter text-brown/70">
                    Personalised plan, not generic meal rules
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="font-inter text-brown/70">
                    Better support through plateaus (this is where most people
                    quit)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="font-inter text-brown/70">
                    Options beyond diet alone, if you qualify
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-cream rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="font-georgia text-2xl text-brown">Downsides</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="font-inter text-brown/70">
                    It costs more than DIY dieting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="font-inter text-brown/70">
                    It requires check ins and follow through
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="font-inter text-brown/70">
                    Some people get side effects (especially with appetite and
                    gut related meds)
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
              Side effects and safety notes (especially if medication is
              involved)
            </h2>

            <div className="bg-light rounded-3xl p-8 shadow-lg space-y-4">
              <p className="font-inter text-brown/80">
                Common side effects in medical weight loss programs depend on
                what you use. With GLP-1 and similar medicines, many people
                report stomach related symptoms like nausea, constipation, or
                diarrhoea.
              </p>

              <div className="bg-rose/10 border-l-4 border-rose p-6 rounded-r-2xl">
                <p className="font-inter text-brown/80">
                  <span className="font-bold text-wine">
                    A Malaysia specific safety point:
                  </span>{" "}
                  the National Pharmaceutical Regulatory Agency (NPRA) has
                  published an updated safety alert about GLP-1 medicines
                  (including semaglutide and tirzepatide) and the risk of
                  aspiration and aspiration pneumonia during general anaesthesia
                  or deep sedation. This matters if you have surgery or
                  procedures planned. Always tell your doctor and your
                  anaesthetist what you are taking.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Cost Section */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
            Cost of doctor monitored weight loss in Kuala Lumpur and Malaysia
          </h2>

          <div className="max-w-3xl space-y-4">
            <motion.p variants={fadeInUp} className="font-inter text-brown/80">
              Prices vary because programs are not identical.
            </motion.p>

            <motion.p variants={fadeInUp} className="font-inter text-brown/80">
              Your total cost usually depends on:
            </motion.p>

            <motion.ul variants={fadeInUp} className="list-disc pl-6 space-y-2">
              <li className="font-inter text-brown/70">
                Consultation and follow up frequency
              </li>
              <li className="font-inter text-brown/70">
                Lab tests (if needed)
              </li>
              <li className="font-inter text-brown/70">
                Whether prescription support is suitable
              </li>
              <li className="font-inter text-brown/70">
                Program length (4 weeks vs 12 weeks vs longer)
              </li>
            </motion.ul>

            <motion.p variants={fadeInUp} className="font-inter text-brown/80">
              Some clinics in Malaysia market doctor monitored programs with
              daily pricing style packages, depending on what's included.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="font-inter text-brown font-medium bg-rose/10 p-4 rounded-xl"
            >
              Best practice: publish "starting from" pricing ranges on the page,
              then confirm final cost after assessment. That matches how most KL
              clinics position their programs.
            </motion.p>
          </div>

          {/* Comparison */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-georgia text-xl text-wine mb-3">
                Doctor monitored weight loss
              </h3>
              <p className="font-inter text-sm text-brown/70">
                Best for overall fat loss, appetite control, metabolic health,
                and long term maintenance. Works across the whole body.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-georgia text-xl text-wine mb-3">
                Fat freezing and body contouring
              </h3>
              <p className="font-inter text-sm text-brown/70">
                Best for stubborn pockets and shaping, not for large weight
                loss. Great when your weight is stable but the shape bothers
                you.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-georgia text-xl text-wine mb-3">
                Bariatric surgery
              </h3>
              <p className="font-inter text-sm text-brown/70">
                Best for severe obesity and complex health risks, under
                specialist care. Not a cosmetic choice. It is medical and
                serious.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Nexus Section */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-8 text-center">
            Why Nexus Clinic Kuala Lumpur
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <motion.p variants={fadeInUp} className="font-inter text-brown/80">
              Here is the message your page should communicate clearly:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-6"
            >
              <p className="font-inter text-brown">
                A doctor monitored program, not an influencer plan
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-6"
            >
              <p className="font-inter text-brown">
                Clear steps from assessment to maintenance
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-6"
            >
              <p className="font-inter text-brown">
                Multiple evidence based options under supervision (not one
                single "miracle" method)
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-6"
            >
              <p className="font-inter text-brown">
                A KL location that's easy to reach (Jalan Pinang area)
              </p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="font-inter text-wine font-medium mt-6"
            >
              Add a simple call to action: Book a consultation at Nexus Clinic
              Kuala Lumpur.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-12 text-center">
            FAQs (People also ask)
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* FAQ 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-wine mb-2">
                1) What is doctor monitored weight loss?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                It is a medically supervised plan where a doctor checks your
                health risks, tracks progress, and adjusts your plan over time.
                It often includes BMI and waist checks, and may include lab
                tests when needed.
              </p>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-wine mb-2">
                2) Who qualifies for medical weight loss in Malaysia?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                Many clinics use BMI and health risks to guide suitability.
                Malaysia's obesity guidelines use Asian BMI cut offs, with
                overweight starting at 23 and obesity at 27.5.
              </p>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-wine mb-2">
                3) Do I need blood tests before starting?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                Based on your health profile, your doctor may recommend lab
                tests to check sugar markers, lipids, liver and kidney markers,
                and thyroid indicators.
              </p>
            </motion.div>

            {/* FAQ 4 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-wine mb-2">
                4) Are weight loss injections safe?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                When prescribed and monitored by a doctor, clinics describe them
                as safe and tailored to your health needs. Never self source or
                self dose.
              </p>
            </motion.div>

            {/* FAQ 5 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-wine mb-2">
                5) How soon will I see weight loss results?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                Many people notice appetite changes first. Clinics often
                describe weight loss as gradual, starting within weeks and
                improving over months with consistency.
              </p>
            </motion.div>

            {/* FAQ 6 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-wine mb-2">
                6) Will I regain weight after stopping medication?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                Weight regain can happen if lifestyle habits do not change. This
                is why doctor monitored programs focus on maintenance, not just
                the first month.
              </p>
            </motion.div>

            {/* FAQ 7 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-wine mb-2">
                7) What is the difference between Ozempic, Wegovy, Saxenda, and
                Mounjaro?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                They are different medicines with different dosing schedules and
                typical effects. Some clinics publish comparison tables covering
                frequency, active ingredient, and common side effects.
              </p>
            </motion.div>

            {/* FAQ 8 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-wine mb-2">
                8) Can I do doctor monitored weight loss without injections?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                Yes. Many programs start with lifestyle and health checks.
                Medication support is only used when medically appropriate.
              </p>
            </motion.div>

            {/* FAQ 9 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-wine mb-2">
                9) Is doctor supervised weight loss only for obese people?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                Not always. In Asian populations, risk can rise at lower BMI
                levels, which is why overweight screening starts at BMI 23 in
                Malaysia guidelines.
              </p>
            </motion.div>

            {/* FAQ 10 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-wine mb-2">
                10) What if I have high blood pressure or diabetes?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                That is exactly why medical supervision helps. Clinics often
                list metabolic risks as reasons to seek medical guidance. Your
                doctor tailors the plan to your conditions.
              </p>
            </motion.div>

            {/* FAQ 11 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-wine mb-2">
                11) Can I take GLP-1 medicines if I have surgery planned?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                Tell your doctor and your anaesthetist. Malaysia's NPRA has
                published safety information on aspiration risk during general
                anaesthesia or deep sedation for GLP-1 medicines (including
                semaglutide and tirzepatide).
              </p>
            </motion.div>

            {/* FAQ 12 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-wine mb-2">
                12) How much does doctor monitored weight loss cost in Kuala
                Lumpur?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                It depends on consultation frequency, lab tests, and whether
                prescription support is suitable. Most clinics confirm pricing
                after assessment.
              </p>
            </motion.div>

            {/* FAQ 13 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6"
            >
              <h3 className="font-georgia text-wine mb-2">
                13) Is fat freezing the same as medical weight loss?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                No. Fat freezing is mainly for stubborn fat pockets and body
                shape. Medical weight loss targets overall fat and health
                outcomes.
              </p>
            </motion.div>

            {/* FAQ 14 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6 md:col-span-2"
            >
              <h3 className="font-georgia text-wine mb-2">
                14) How do I book doctor monitored weight loss at Nexus Clinic
                Kuala Lumpur?
              </h3>
              <p className="font-inter text-brown/70 text-sm">
                You can book a consultation and start with a medical assessment,
                then your doctor builds a plan based on your goals and health
                profile. Nexus Clinic Kuala Lumpur address and contact details
                are listed on their site.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-light mb-6"
          >
            Ready for a weight loss plan that's monitored, realistic, and safe?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-light/90 font-inter text-lg mb-8 max-w-2xl mx-auto"
          >
            Book a consultation with Nexus Clinic Kuala Lumpur. Start with a
            proper assessment, then follow a plan designed for your body and
            lifestyle.
          </motion.p>

          <motion.button
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-light text-wine px-10 py-5 rounded-full font-inter font-medium hover:bg-cream transition-all shadow-xl inline-flex items-center gap-2"
          >
            Book a Consultation at Nexus Clinic Kuala Lumpur
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
