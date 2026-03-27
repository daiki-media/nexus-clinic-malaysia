"use client";

import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Target,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Users,
  Sparkles,
  DollarSign,
  Ban,
  Beer,
  Heart as HeartIcon,
  ChevronDown,
} from "lucide-react";
import FAQ from "../../components/FAQ";
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const DuromineLandingPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "duromine");
  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-duromine1.webp",
      after: "/images/B&A-w/B&A-duromine1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-duromine2.webp",
      after: "/images/B&A-w/B&A-duromine2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-duromine3.webp",
      after: "/images/B&A-w/B&A-duromine3.webp",
    },
  ];
  return (
    <div className="min-h-screen bg-cream font-inter">
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="relative overflow-hidden bg-linear-to-b from-cream to-light pt-20 pb-16 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-wine/10 text-wine px-4 py-2 rounded-full mb-6"
          >
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">
              Doctor Monitored at Nexus Clinic KL
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h1 className="font-georgia text-5xl lg:text-6xl text-brown leading-tight">
                Duromine Weight Loss Treatment in Kuala Lumpur, Malaysia
              </h1>

              <p className="text-2xl text-wine font-light">
                Quiet the cravings. Take back control. Lose weight with a
                doctor-led plan that fits real life.
              </p>

              <p className="text-lg text-taupe bg-rose/5 p-6 rounded-2xl border-l-4 border-rose">
                Not everyone struggles with weight because of "willpower."
                Sometimes hunger signals feel louder than your best intentions.
              </p>

              <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-white/50">
                <h2 className="font-georgia text-xl text-brown mb-4">
                  Trust at Nexus Clinic Kuala Lumpur
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Doctor monitored weight loss plans, not guesswork
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Prescription-only support when appropriate
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Ongoing check-ins to help you stay safe and consistent
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-8 rounded-3xl shadow-xl"
            >
              <h2 className="font-georgia text-3xl text-brown mb-6">
                Quick overview (for fast reading)
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="font-bold text-wine mb-1">What it is:</p>
                  <p className="text-brown">
                    Duromine is a prescription appetite suppressant. It contains
                    phentermine in a modified-release capsule.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-wine mb-1">
                    What it helps with:
                  </p>
                  <p className="text-brown">
                    Strong hunger, constant snacking, and "food noise,"
                    especially early in a plan.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-wine mb-1">How it works:</p>
                  <p className="text-brown">
                    It affects the appetite area of the brain and helps you feel
                    less hungry. Important: It is meant to be used with a
                    structured diet and activity plan, under medical
                    supervision.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is Duromine Section with Image */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <h2 className="font-georgia text-4xl text-brown">
                What is Duromine, in simple words?
              </h2>

              <p className="text-taupe text-lg">
                Duromine is a weight loss medicine that helps reduce appetite.
              </p>

              <p className="text-taupe">
                It contains phentermine, which is combined with a resin system
                that releases the medicine gradually through the day. That "slow
                release" is designed to support appetite control for longer
                hours.
              </p>

              <p className="text-rose font-medium bg-rose/5 p-4 rounded-xl border border-rose/20">
                This is not a fat-melting pill. It does not "target belly fat"
                overnight.
              </p>

              <p className="text-taupe">
                What it can do is help you eat less without feeling constantly
                hungry, which makes a calorie-controlled plan feel more doable.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/main/duromine.webp"
                  alt="Medical consultation at Nexus Clinic Kuala Lumpur"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Availability in Malaysia */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 bg-cream"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-3xl border border-wine/10"
          >
            <h2 className="font-georgia text-3xl text-brown mb-6">
              Is Duromine available in Malaysia?
            </h2>

            <div className="space-y-4 text-taupe">
              <p>
                Yes, Duromine appears on Malaysia's NPRA comparator product list
                with MAL registration numbers for 15mg and 30mg capsules.
              </p>

              <p>
                Phentermine is also listed in Malaysia's official poisons list,
                which is one reason it is handled with medical control.
              </p>

              <p className="text-wine font-medium bg-wine/5 p-4 rounded-xl">
                In plain terms: this is not an over-the-counter slimming
                product. It is a prescription medicine, and it should be used
                with proper screening and follow-up.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Who is Duromine usually for */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Who is Duromine usually for?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <Users className="w-10 h-10 text-wine mb-4" />
              <p className="text-brown">
                Have obesity, or are significantly overweight
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <Target className="w-10 h-10 text-wine mb-4" />
              <p className="text-brown">
                Have tried diet and activity changes but keep getting derailed
                by cravings
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <Clock className="w-10 h-10 text-wine mb-4" />
              <p className="text-brown">
                Need short-term appetite support to start losing weight safely
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-rose/5 p-6 rounded-2xl border border-rose/20"
          >
            <p className="text-taupe">
              Many clinics reference BMI-based suitability, often around BMI
              30+, or BMI 27+ with weight-related health conditions, as part of
              medical decision-making.
            </p>
            <p className="text-wine font-medium mt-4">
              At Nexus Clinic KL, the goal is not "skinny fast." The goal is a
              safe drop in weight with habits you can keep.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Who should NOT use Duromine */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-wine/5"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <AlertCircle className="w-12 h-12 text-rose mx-auto mb-4" />
            <h2 className="font-georgia text-4xl text-brown">
              Who should NOT use Duromine
            </h2>
            <p className="text-taupe text-lg mt-2 font-medium">
              (very important)
            </p>
            <p className="text-taupe mt-2">
              Duromine is not suitable for everyone.
            </p>
            <p className="text-taupe">
              Phentermine-type medicines are commonly avoided if you have:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Severe heart disease, rhythm problems, or a history of stroke",
              "Uncontrolled high blood pressure",
              "Hyperthyroidism",
              "Glaucoma",
              "Pregnancy or breastfeeding",
              "A history of drug misuse",
              "Recent use of MAOI medicines (dangerous interaction risk)",
            ].map((condition, i) => (
              <motion.div
                key={i}
                variants={fadeInLeft}
                className="flex items-start gap-3 bg-white p-4 rounded-xl"
              >
                <Ban className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                <p className="text-brown">{condition}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-8 space-y-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
              <Beer className="w-5 h-5 text-rose shrink-0 mt-0.5" />
              <p className="text-brown">
                Also, alcohol can increase certain nervous system side effects
                like dizziness and confusion, so it is commonly advised to avoid
                combining them.
              </p>
            </div>

            <p className="text-wine font-medium text-center text-lg">
              This is exactly why doctor screening matters.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* How Duromine works */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            How Duromine works
            <span className="block text-lg text-taupe font-normal mt-2">
              (without the textbook tone)
            </span>
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="space-y-6 text-taupe text-lg"
            >
              <p>Think of appetite like a volume knob.</p>
              <p>
                For some people, that knob feels stuck on high. You eat, but you
                still want more.
              </p>
              <p className="bg-rose/5 p-6 rounded-xl border-l-4 border-rose">
                Duromine helps lower that "hunger volume" by acting on brain
                signals tied to appetite and fullness.
              </p>
              <p>When appetite is calmer, these things become easier:</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4 mt-8"
            >
              {[
                "Saying no to random snacks",
                "Stopping at a normal portion",
                "Avoiding late-night overeating",
                "Staying consistent long enough to see results",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="flex items-start gap-2 bg-cream p-4 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <p className="text-brown">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Journey at Nexus Clinic */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-cream"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            What the Duromine journey looks like at Nexus Clinic Kuala Lumpur
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center text-lg mb-12"
          >
            A good program should feel structured, but not overwhelming.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-wine font-bold text-xl">1</span>
              </div>
              <h3 className="font-georgia text-xl text-brown mb-4">
                Medical assessment first
              </h3>
              <p className="text-taupe mb-3">
                We start with basics that matter:
              </p>
              <ul className="space-y-2 text-sm text-taupe">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-wine rounded-full mt-2"></div>
                  <span>Your weight history and past attempts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-wine rounded-full mt-2"></div>
                  <span>Your health conditions and medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-wine rounded-full mt-2"></div>
                  <span>Blood pressure and heart-related risk checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-wine rounded-full mt-2"></div>
                  <span>
                    Lifestyle pattern review, sleep, stress, work routine
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-rose font-medium">
                If Duromine is not appropriate, we will not push it.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-wine font-bold text-xl">2</span>
              </div>
              <h3 className="font-georgia text-xl text-brown mb-4">
                A plan you can actually follow
              </h3>
              <p className="text-taupe mb-3">
                You get a clear path, not vague advice.
              </p>
              <p className="text-taupe mb-3">That includes:</p>
              <ul className="space-y-2 text-sm text-taupe">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-wine rounded-full mt-2"></div>
                  <span>Simple nutrition targets</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-wine rounded-full mt-2"></div>
                  <span>A realistic activity plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-wine rounded-full mt-2"></div>
                  <span>Strategies for cravings, weekends, social meals</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-wine rounded-full mt-2"></div>
                  <span>Follow-up schedule so you are not doing it alone</span>
                </li>
              </ul>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-wine font-bold text-xl">3</span>
              </div>
              <h3 className="font-georgia text-xl text-brown mb-4">
                Monitoring and adjustments
              </h3>
              <p className="text-taupe mb-3">
                Duromine is typically used short term in many clinical settings,
                not as a forever solution.
              </p>
              <p className="text-taupe mb-3">
                Your doctor may adjust the plan based on:
              </p>
              <ul className="space-y-2 text-sm text-taupe">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-wine rounded-full mt-2"></div>
                  <span>Side effects</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-wine rounded-full mt-2"></div>
                  <span>Appetite response</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-wine rounded-full mt-2"></div>
                  <span>Sleep changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-wine rounded-full mt-2"></div>
                  <span>Blood pressure and pulse trends</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Results */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-8"
          >
            What results can you expect?
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center text-lg mb-4"
            >
              Results vary. Your body is your body.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center text-lg mb-8"
            >
              But many people notice:
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-4">
              {[
                "Appetite drops in the first days to week",
                "Cravings feel less aggressive",
                "Portion control becomes easier",
                "Weight starts trending down within a few weeks if the plan stays consistent",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="flex items-start gap-3 bg-cream p-4 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <p className="text-brown">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-rose/5 rounded-xl border border-rose/20"
            >
              <p className="text-taupe">
                A key point from patient guidance sources is that Duromine
                should sit inside a full weight management plan that includes
                diet and exercise.
              </p>
              <p className="text-wine font-medium mt-2">
                That is where long-term results come from.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pros and Cons */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-cream"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Pros and cons
            <span className="block text-lg text-taupe font-normal mt-2">
              (honest and clear)
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Benefits */}
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="font-georgia text-2xl text-wine mb-6">Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    Helps reduce hunger and cravings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    Can support early momentum when motivation is fragile
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    Simple to use within a doctor-led plan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">No procedures, no downtime</span>
                </li>
              </ul>
            </motion.div>

            {/* Downsides */}
            <motion.div
              variants={fadeInRight}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="font-georgia text-2xl text-rose mb-6">
                Downsides
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown">
                    Not suitable for everyone (medical screening is required)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown">Side effects can happen</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown">
                    It is not a permanent fix on its own
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown">
                    Misuse risk exists if used without supervision
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Side Effects */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Side effects: what people commonly feel
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center text-lg mb-2"
            >
              Some people feel fine. Others feel a bit "wired."
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center mb-8"
            >
              Commonly mentioned effects with phentermine-type medicines
              include:
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                "Dry mouth",
                "Trouble sleeping",
                "Faster heartbeat or palpitations",
                "Feeling restless or anxious",
                "Constipation or stomach discomfort",
              ].map((effect, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-cream p-4 rounded-xl text-center text-brown"
                >
                  {effect}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-rose/5 rounded-2xl border-l-4 border-rose"
            >
              <h3 className="font-georgia text-xl text-rose mb-2">
                Serious symptoms need urgent medical attention
              </h3>
              <p className="text-taupe mb-2">
                If you feel chest pain, severe shortness of breath, fainting, or
                severe racing heartbeat, seek urgent care.
              </p>
              <p className="text-brown">
                Rare but serious cardiovascular events have been reported with
                anorectic agents, which is why medical supervision is not
                optional.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-cream"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <DollarSign className="w-12 h-12 text-wine mx-auto mb-4" />
            <h2 className="font-georgia text-4xl text-brown">
              How much does Duromine cost in Kuala Lumpur?
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-3xl shadow-xl max-w-3xl mx-auto"
          >
            <p className="text-taupe mb-4">Pricing depends on:</p>
            <ul className="list-disc pl-5 space-y-2 text-brown mb-6">
              <li>Your consultation and monitoring plan</li>
              <li>The prescription decision (not everyone gets it)</li>
              <li>Duration of treatment</li>
              <li>Whether labs or follow-ups are needed</li>
            </ul>

            <p className="text-taupe mb-4">
              Some Malaysia clinic pages publicly quote ranges like RM300 to
              RM600 per month for medically supervised Duromine-style programs.
            </p>

            <p className="text-taupe mb-4">
              A Malaysia pharmacy listing also shows Duromine sold as a
              prescription-required product and tagged under Poison B, with
              pricing depending on pack size.
            </p>

            <p className="text-wine font-medium bg-wine/5 p-4 rounded-xl">
              At Nexus Clinic KL, the best way is to treat price as a plan-based
              quote, not a random number, because safety monitoring is part of
              the value.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Duromine vs Other Treatments
          </motion.h2>

          {/* vs Fat Freezing */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h3 className="font-georgia text-2xl text-brown mb-6">
              Duromine vs "fat freezing" and body contouring
            </h3>
            <p className="text-taupe mb-4">
              This is where many people get confused.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-cream p-6 rounded-2xl">
                <h4 className="font-bold text-wine mb-2">
                  Duromine (medical weight loss)
                </h4>
                <p className="text-brown">
                  Helps reduce appetite, supports overall weight reduction. Best
                  when the main issue is hunger and overeating patterns.
                </p>
              </div>
              <div className="bg-cream p-6 rounded-2xl">
                <h4 className="font-bold text-rose mb-2">
                  Fat freezing (cryolipolysis, body sculpting)
                </h4>
                <p className="text-brown">
                  Targets local fat pockets, not overall weight. Better for
                  people near a stable weight who want shaping.
                </p>
              </div>
            </div>
            <p className="text-taupe">
              If your weight is still fluctuating, medical weight loss usually
              comes first. Then body contouring can refine what remains.
            </p>
          </motion.div>

          {/* vs GLP-1 */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-georgia text-2xl text-brown mb-6">
              Duromine vs Ozempic, Wegovy, Mounjaro (quick comparison)
            </h3>
            <p className="text-taupe mb-4">These are different categories.</p>
            <p className="text-taupe mb-4">
              Duromine is a stimulant-type appetite suppressant (phentermine).
              GLP-1 medicines work through hormone pathways linked to appetite
              and blood sugar.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-cream p-4 rounded-xl">
                <p className="font-bold text-wine mb-2">Form:</p>
                <p className="text-brown">
                  Duromine is a capsule, many GLP-1s are injections
                </p>
              </div>
              <div className="bg-cream p-4 rounded-xl">
                <p className="font-bold text-wine mb-2">Use style:</p>
                <p className="text-brown">
                  Duromine is commonly short term, GLP-1s are often longer-term
                  plans
                </p>
              </div>
              <div className="bg-cream p-4 rounded-xl">
                <p className="font-bold text-wine mb-2">
                  Side effects profile:
                </p>
                <p className="text-brown">Different risks and tolerability</p>
              </div>
            </div>

            <p className="text-taupe bg-rose/5 p-6 rounded-xl">
              At Nexus Clinic KL, the "best" option is the one that matches:
              Your health profile, Your goals, Your risk level, Your ability to
              follow the plan consistently.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Competitor Analysis */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-cream"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            What top competitors in Malaysia are doing
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-taupe text-center mb-8">
            (and how Nexus can do it better)
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* What competitors do well */}
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-wine mb-4">
                What competitors do well
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    Clear structure with sections like "How it works,"
                    "Benefits," and FAQs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    They openly frame it as prescription-only and short term
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    Some publish price ranges, which helps users decide faster
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Where many pages feel weak or risky */}
            <motion.div
              variants={fadeInRight}
              className="bg-white p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-rose mb-4">
                Where many pages feel weak or risky
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown">
                    Some claims are messy or inaccurate, like mixing up medicine
                    regulation with "medical devices" approval language
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown">
                    Many pages do not explain Malaysia's controlled handling
                    clearly, even though phentermine is listed in the poisons
                    list
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown">
                    Safety details are often rushed, even though interaction
                    warnings (like MAOIs and alcohol) matter
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Nexus Differentiator */}
          <motion.div
            variants={fadeInUp}
            className="bg-wine text-white p-8 rounded-3xl"
          >
            <h3 className="font-georgia text-2xl mb-6">
              Nexus Clinic KL differentiator angle (strong SEO + trust)
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cream shrink-0 mt-1" />
                <span>Evidence-led explanation in simple words</span>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cream shrink-0 mt-1" />
                <span>Clear screening and monitoring steps</span>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cream shrink-0 mt-1" />
                <span>Transparent "who it is for and who it is not for"</span>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cream shrink-0 mt-1" />
                <span>
                  A real lifestyle support plan so results last beyond the
                  prescription
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            FAQs
            <span className="block text-lg text-taupe font-normal mt-2">
              (People Also Ask style)
            </span>
          </motion.h2>

          <div className="space-y-4 mt-12">
            {/* FAQ 1 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-cream rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium text-brown">
                  Is Duromine safe for weight loss?
                </h3>
                <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                It can be safe for the right person, when a doctor screens you
                properly and monitors you. It is not suitable for everyone,
                especially people with heart disease, uncontrolled high blood
                pressure, pregnancy, or recent MAOI use.
              </div>
            </motion.details>

            {/* FAQ 2 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-cream rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium text-brown">
                  Do I need a prescription for Duromine in Malaysia?
                </h3>
                <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Yes. Duromine is treated as prescription medicine in practice,
                and phentermine is listed in Malaysia's poisons list, which
                supports controlled access.
              </div>
            </motion.details>

            {/* FAQ 3 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-cream rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium text-brown">
                  How fast does Duromine start working?
                </h3>
                <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Many people feel appetite changes early, sometimes within the
                first days. Weight change usually depends on food intake and
                consistency over the next weeks.
              </div>
            </motion.details>

            {/* FAQ 4 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-cream rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium text-brown">
                  How much weight can I lose in one month on Duromine?
                </h3>
                <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                There is no single number that is "guaranteed." Your starting
                weight, food habits, sleep, and activity level all matter. The
                safest goal is steady progress you can maintain, not extreme
                drops.
              </div>
            </motion.details>

            {/* FAQ 5 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-cream rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium text-brown">
                  Is Duromine the same as phentermine?
                </h3>
                <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Duromine contains phentermine as a modified-release resin
                complex.
              </div>
            </motion.details>

            {/* FAQ 6 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-cream rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium text-brown">
                  Can Duromine cause heart problems?
                </h3>
                <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Serious heart-related effects are uncommon but possible, and
                rare serious cardiovascular events have been reported with
                anorectic agents. That is why screening and monitoring are
                essential.
              </div>
            </motion.details>

            {/* FAQ 7 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-cream rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium text-brown">
                  Does Duromine make you anxious or affect sleep?
                </h3>
                <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                It can. Some people feel restless or have insomnia because it is
                stimulant-like. If sleep gets worse, the plan may need
                adjustment by a doctor.
              </div>
            </motion.details>

            {/* FAQ 8 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-cream rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium text-brown">
                  Can I drink alcohol while taking Duromine?
                </h3>
                <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Alcohol can increase nervous system side effects like dizziness
                or confusion, so it is commonly advised to avoid combining them.
              </div>
            </motion.details>

            {/* FAQ 9 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-cream rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium text-brown">
                  What happens when you stop Duromine?
                </h3>
                <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Appetite may return, especially if habits were not built during
                the program. That is why a good clinic focuses on food
                structure, routine, and maintenance strategies while you are on
                the plan.
              </div>
            </motion.details>

            {/* FAQ 10 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-cream rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium text-brown">
                  Duromine vs Ozempic or Wegovy, which is better?
                </h3>
                <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                They are different tools. Duromine is phentermine-based appetite
                suppression. GLP-1 medicines work through hormone pathways.
                "Better" depends on your medical profile, risks, and what you
                can follow long term.
              </div>
            </motion.details>

            {/* FAQ 11 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-cream rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium text-brown">
                  Can I use Duromine if I have high blood pressure?
                </h3>
                <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Not always. Uncontrolled high blood pressure is a common reason
                to avoid phentermine-type medicines. Your doctor must assess
                this.
              </div>
            </motion.details>

            {/* FAQ 12 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-cream rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-medium text-brown">
                  Is Duromine approved and registered in Malaysia?
                </h3>
                <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Duromine appears with MAL numbers on NPRA comparator product
                lists, which supports its presence in Malaysia's regulated
                medicine environment.
              </div>
            </motion.details>
          </div>
        </div>
      </motion.section>

      {/* Final Word */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 bg-wine text-white"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 variants={fadeInUp} className="font-georgia text-4xl mb-8">
            Final word (from Nexus Clinic Kuala Lumpur)
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="space-y-6 text-cream text-lg"
          >
            <p>
              If your biggest battle is hunger, cravings, and constant snacking,
              a doctor monitored program can be a game-changer.
            </p>
            <p className="text-2xl font-light italic">
              Duromine is not for everyone.
            </p>
            <p>
              But for the right person, with the right monitoring, it can help
              you build momentum and finally feel in control again.
            </p>
          </motion.div>

          <motion.div variants={scaleIn} className="mt-10">
            <button className="bg-cream text-wine px-8 py-4 rounded-full font-medium hover:bg-rose hover:text-white transition-all duration-300 shadow-lg">
              Schedule Your Consultation
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default DuromineLandingPage;
