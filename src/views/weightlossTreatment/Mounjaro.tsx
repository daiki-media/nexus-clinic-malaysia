"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Target,
  Heart,
  Activity,
  Droplets,
  Zap,
  Scale,
  TrendingDown,
  Award,
  ChevronRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Syringe,
  Brain,
  UtensilsCrossed,
  ArrowRight,
  Users,
  ShieldCheck,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const MounjaroLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "mounjaro");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-mounjaro1.webp",
      after: "/images/B&A-w/B&A-mounjaro1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-mounjaro2.webp",
      after: "/images/B&A-w/B&A-mounjaro2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-mounjaro3.webp",
      after: "/images/B&A-w/B&A-mounjaro3.webp",
    },
  ];
  return (
    <div className="min-h-screen bg-light font-inter">
      {/* Hero Section - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="relative overflow-hidden bg-cream py-20 px-4 md:px-8 lg:px-16"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-rose/20 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-wine/20 blur-3xl"></div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="max-w-7xl mx-auto relative z-10"
        >
          {/* Title exactly as in PDF */}
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-brown mt-6 font-georgia leading-tight">
            Mounjaro Weight Loss Treatment in Kuala Lumpur, Malaysia
            (Tirzepatide) | Nexus Clinic Kuala Lumpur
          </h1>

          {/* Hero section content exactly as in PDF */}
          <div className="mt-12 space-y-6">
            <p className="text-2xl text-brown font-georgia italic">
              Quiet the cravings. Reset your momentum.
            </p>
            <p className="text-brown text-lg">
              Mounjaro can help reduce appetite and "food noise" over time. Get
              a doctor-guided plan that fits your body and your lifestyle.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Trust Section - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-12"
          >
            Trust at{" "}
            <span className="text-wine">Nexus Clinic Kuala Lumpur</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Exact text from PDF */}
            <motion.div
              variants={fadeInUp}
              className="p-6 bg-cream/50 rounded-xl"
            >
              <ShieldCheck className="w-12 h-12 text-wine mb-4" />
              <p className="text-brown">
                Private, medical screening before you start
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 bg-cream/50 rounded-xl"
            >
              <Users className="w-12 h-12 text-wine mb-4" />
              <p className="text-brown">
                Doctor-supervised plan with regular check-ins
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 bg-cream/50 rounded-xl"
            >
              <Shield className="w-12 h-12 text-wine mb-4" />
              <p className="text-brown">
                Clear safety advice and realistic expectations
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 bg-cream/50 rounded-xl"
            >
              <Heart className="w-12 h-12 text-wine mb-4" />
              <p className="text-brown">
                Lifestyle support, not just an injection
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Answer Section - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-rose/5"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="p-8 bg-white rounded-2xl shadow-lg border border-cream"
          >
            <h2 className="text-2xl font-georgia text-wine mb-4">
              Quick answer for fast readers
            </h2>
            <p className="text-brown text-lg leading-relaxed">
              Mounjaro (tirzepatide) is a prescription injection taken once
              weekly. It works on two appetite and glucose pathways (GIP and
              GLP-1). It can support significant weight loss when used with
              healthier eating and activity. In clinical trials for obesity,
              tirzepatide helped many people lose a large percentage of body
              weight over about 72 weeks, but results vary and side effects can
              happen.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What is Mounjaro Section with Image - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl font-georgia text-brown mb-6">
                What is Mounjaro{" "}
                <span className="text-wine">(tirzepatide)?</span>
              </h2>
              <p className="text-brown text-lg mb-6">
                Mounjaro is the brand name for tirzepatide. It is a weekly
                injection that affects hormones linked to hunger, fullness, and
                blood sugar control.
              </p>
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-taupe/20">
                <p className="text-taupe">
                  <span className="font-bold text-wine">Important note:</span>{" "}
                  In the US, Mounjaro is approved for type 2 diabetes.
                  Tirzepatide is also approved for chronic weight management
                  under a different brand name in the US (Zepbound). In other
                  regions, product indications can differ. Always follow local
                  medical guidance.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              {/* Image placeholder - akan diganti dengan gambar actual */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/main/mounjaro.webp"
                  alt="Mounjaro injection pen"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Availability in Malaysia - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-georgia text-brown mb-6"
          >
            Is Mounjaro{" "}
            <span className="text-wine">available in Malaysia?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-brown text-lg mb-4">
            Mounjaro has been officially launched and discussed widely in
            Malaysia, and local medical channels have highlighted the need for
            safe, regulated access. Malaysia's regulator (NPRA) has also
            published safety communication related to GLP-1 medicines, including
            peri-procedure risks.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="p-6 bg-wine/5 rounded-xl border border-wine/20"
          >
            <p className="text-brown font-medium">
              If you are considering Mounjaro in Kuala Lumpur, the safest
              approach is simple: get it only through a licensed clinic, with
              proper screening and follow-up.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* How Mounjaro supports weight loss - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-12"
          >
            How Mounjaro supports <span className="text-wine">weight loss</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown text-lg mb-8">
            Mounjaro works by targeting two hormone receptors:
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <div className="p-6 bg-white rounded-xl">
                <h3 className="text-xl font-bold text-wine mb-2">GLP-1</h3>
                <p className="text-brown">
                  which helps reduce appetite and slows stomach emptying
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl">
                <h3 className="text-xl font-bold text-wine mb-2">GIP</h3>
                <p className="text-brown">
                  which also supports appetite and metabolic control
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-rose/10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-georgia text-brown mb-4">
                Together, these signals can help you:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  <span>Feel full sooner</span>
                </li>
                <li className="flex items-center gap-3 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  <span>Think about food less</span>
                </li>
                <li className="flex items-center gap-3 text-brown">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  <span>Stick to a calorie deficit more consistently</span>
                </li>
              </ul>
              <p className="mt-6 text-taupe italic">
                This is not about "willpower." Many people struggle because
                hunger signals are loud. Mounjaro aims to turn that volume down.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Who Mounjaro may be suitable for - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-8"
          >
            Who Mounjaro <span className="text-wine">may be suitable for</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown text-lg mb-6">
            Mounjaro is not meant for someone who wants to drop "just a few
            kilos" fast. It is usually considered when weight is affecting
            health, or when progress has stalled despite serious effort.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-brown text-lg mb-4">
            In weight-management approvals for tirzepatide, eligibility is
            commonly based on:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-8 mb-8"
          >
            <div className="p-6 bg-cream rounded-xl">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-brown">
                  <Target className="w-5 h-5 text-rose" />
                  BMI 30+, or
                </li>
                <li className="flex items-center gap-2 text-brown">
                  <Target className="w-5 h-5 text-rose" />
                  BMI 27+ with weight-related conditions
                </li>
              </ul>
            </div>

            <div className="p-6 bg-rose/5 rounded-xl">
              <h3 className="text-xl font-bold text-wine mb-4">
                A Nexus Clinic Kuala Lumpur consult should focus on your full
                picture:
              </h3>
              <ul className="space-y-2 text-brown">
                <li>• Weight history and past attempts</li>
                <li>• Blood pressure, lipids, glucose, insulin resistance</li>
                <li>• Sleep quality, stress eating, PCOS patterns, and more</li>
              </ul>
            </div>
          </motion.div>

          {/* Who should NOT use it */}
          <motion.div variants={fadeInUp} className="mt-12">
            <h3 className="text-2xl font-georgia text-brown mb-4">
              Who should NOT use it (or needs extra caution)
            </h3>
            <p className="text-wine font-semibold mb-4">This part matters.</p>

            <p className="text-brown mb-4">
              Tirzepatide medicines carry key warnings and contraindications,
              including:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-red-50 rounded-xl">
                <ul className="space-y-2 text-brown">
                  <li>
                    • Personal or family history of medullary thyroid carcinoma
                    (MTC)
                  </li>
                  <li>• MEN 2 (multiple endocrine neoplasia type 2)</li>
                </ul>
              </div>

              <div className="p-6 bg-amber-50 rounded-xl">
                <h4 className="font-bold text-wine mb-3">
                  Other situations where careful medical review is important:
                </h4>
                <ul className="space-y-2 text-brown">
                  <li>• Pregnancy or trying to conceive</li>
                  <li>
                    • Past pancreatitis, gallbladder disease, severe GI disease
                  </li>
                  <li>
                    • Use of insulin or certain diabetes medicines (risk of low
                    sugar)
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-wine font-semibold text-lg">
              Your plan should always be doctor-led. No shortcuts.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What results can you realistically expect? - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-8"
          >
            What results can you{" "}
            <span className="text-wine">realistically expect?</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown mb-4">
            People want a number, so here is the honest version.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-brown mb-6">
            In major obesity trials, tirzepatide produced substantial average
            weight loss over time, with higher doses generally leading to more
            loss across ~72 weeks.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-brown mb-4">
            But in real life, your result depends on:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            <div className="p-6 bg-white rounded-xl">
              <ul className="space-y-2 text-brown">
                <li>• Starting weight and insulin resistance</li>
                <li>• Food habits and protein intake</li>
                <li>• Sleep and stress levels</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-xl">
              <ul className="space-y-2 text-brown">
                <li>• Consistency with follow-ups</li>
                <li>• Side effects and dose tolerance</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-rose/10 p-6 rounded-xl">
            <h4 className="font-bold text-wine mb-3">
              A practical expectation many patients like:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose" />
                <span>Early appetite change in weeks</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose" />
                <span>Visible changes over 8 to 12 weeks</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose" />
                <span>Bigger shifts over 6 to 12 months</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* What the journey feels like - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-georgia text-brown mb-6"
          >
            What the journey feels like{" "}
            <span className="text-wine">
              (the part most clinics don't explain)
            </span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="space-y-4 text-brown text-lg"
          >
            <p>
              Week one is often subtle. You might just stop snacking mindlessly.
            </p>
            <p>Then you notice:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Smaller portions feel "enough"</li>
              <li>Cravings calm down</li>
              <li>Late-night eating gets easier to control</li>
            </ul>
            <p>
              Some weeks you lose more. Some weeks you stall. That is normal.
            </p>
            <p className="mt-6 p-6 bg-cream rounded-xl italic">
              At Nexus Clinic Kuala Lumpur, the goal is not fast weight loss.
              The goal is sustainable fat loss with better health markers.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Common side effects - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-8"
          >
            Common <span className="text-wine">side effects</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown mb-6">
            Most side effects are stomach-related, especially early on:
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft}>
              <div className="bg-white p-6 rounded-xl">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-brown">
                    <AlertCircle className="w-4 h-4 text-rose" />
                    Nausea
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <AlertCircle className="w-4 h-4 text-rose" />
                    Constipation or diarrhea
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <AlertCircle className="w-4 h-4 text-rose" />
                    Bloating, burping, reflux
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <AlertCircle className="w-4 h-4 text-rose" />
                    Reduced appetite (sometimes too strong)
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-wine mb-4">
                  Many people can reduce discomfort with:
                </h3>
                <ul className="space-y-2 text-brown">
                  <li>• Smaller meals</li>
                  <li>• Slower eating</li>
                  <li>• More water and fiber</li>
                  <li>• Higher protein early in the day</li>
                  <li>• Avoiding greasy foods at first</li>
                </ul>
                <p className="mt-6 text-wine font-medium">
                  If vomiting is severe, pain is strong, or symptoms feel scary,
                  do not "push through." Contact your clinician.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Safety note for surgery or sedation - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="p-8 border-2 border-wine/30 rounded-2xl"
          >
            <h2 className="text-2xl font-georgia text-wine mb-4">
              Safety note for surgery or sedation
            </h2>
            <p className="text-brown mb-4">
              GLP-1 medicines can slow stomach emptying. Regulators and labeling
              have highlighted pulmonary aspiration risk during general
              anesthesia or deep sedation.
            </p>
            <p className="text-brown font-medium mb-2">
              If you have a procedure coming up:
            </p>
            <ul className="list-disc pl-6 mt-2 text-brown mb-4">
              <li>Tell your doctor and anesthetist early</li>
              <li>Follow medical instructions on pausing or prep</li>
            </ul>
            <p className="text-wine font-semibold">
              This is one reason ongoing medical supervision matters.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Cost of Mounjaro in Malaysia - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-8"
          >
            Cost of Mounjaro in Malaysia{" "}
            <span className="text-wine">(what people really want to know)</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown mb-4">
            Prices vary by dose, supply, and clinic support level.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-brown mb-4">
            In Malaysia, publicly visible pricing examples show a wide range,
            such as:
          </motion.p>

          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-cream rounded-lg">
                <p className="text-taupe">Clinic promotions around</p>
                <p className="text-3xl font-bold text-wine">RM 1,150</p>
                <p className="text-sm text-brown">
                  (example listed for 2.5 mg)
                </p>
              </div>

              <div className="p-4 bg-cream rounded-lg">
                <p className="text-taupe">
                  Online clinic listings that can be higher depending on
                  strength and service
                </p>
              </div>
            </div>

            <p className="text-brown mb-4">
              Your total monthly cost can also include:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-brown mb-6">
              <li>Consultation and screening labs</li>
              <li>Follow-up visits</li>
              <li>Nutrition support</li>
              <li>Body composition tracking</li>
            </ul>

            <p className="text-wine font-semibold text-lg">
              At Nexus Clinic Kuala Lumpur, we recommend choosing a plan based
              on medical oversight and safety, not the cheapest pen.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mounjaro vs Ozempic vs Wegovy - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-4 text-center"
          >
            Mounjaro vs Ozempic vs{" "}
            <span className="text-wine">Wegovy (simple comparison)</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12"
          >
            People search this every day.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={scaleIn} className="p-6 bg-cream rounded-xl">
              <h3 className="text-xl font-bold text-wine mb-2">Ozempic</h3>
              <p className="text-taupe text-sm mb-3">(semaglutide)</p>
              <ul className="space-y-2 text-brown">
                <li>• GLP-1 only</li>
                <li>
                  • Often used for diabetes, sometimes off-label for weight loss
                </li>
              </ul>
            </motion.div>

            <motion.div variants={scaleIn} className="p-6 bg-cream rounded-xl">
              <h3 className="text-xl font-bold text-wine mb-2">Wegovy</h3>
              <p className="text-taupe text-sm mb-3">(semaglutide)</p>
              <ul className="space-y-2 text-brown">
                <li>• GLP-1 only</li>
                <li>
                  • Approved for chronic weight management in many regions
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 bg-rose/10 rounded-xl border-2 border-wine"
            >
              <h3 className="text-xl font-bold text-wine mb-2">
                Mounjaro / Tirzepatide
              </h3>
              <ul className="space-y-2 text-brown">
                <li>• Dual action (GIP + GLP-1)</li>
                <li>• Strong weight-loss outcomes in trials</li>
              </ul>
            </motion.div>
          </div>

          <motion.p variants={fadeInUp} className="mt-8 text-center text-brown">
            If you want a clear doctor-level comparison, Nexus Clinic has also
            published guidance comparing semaglutide and tirzepatide.
          </motion.p>
        </div>
      </motion.section>

      {/* Areas Mounjaro may help target - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-georgia text-brown mb-6"
          >
            Areas Mounjaro may <span className="text-wine">help target</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown mb-4">
            Mounjaro does not "spot reduce" fat. But many people notice changes
            first in:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 gap-4 mb-6"
          >
            <div className="p-4 bg-white rounded-lg text-center text-brown">
              <Sparkles className="w-5 h-5 text-rose mx-auto mb-2" />
              Waist and belly area
            </div>
            <div className="p-4 bg-white rounded-lg text-center text-brown">
              <Sparkles className="w-5 h-5 text-rose mx-auto mb-2" />
              Back and bra line
            </div>
            <div className="p-4 bg-white rounded-lg text-center text-brown">
              <Sparkles className="w-5 h-5 text-rose mx-auto mb-2" />
              Hips and thighs
            </div>
            <div className="p-4 bg-white rounded-lg text-center text-brown">
              <Sparkles className="w-5 h-5 text-rose mx-auto mb-2" />
              Face puffiness (from overall fat loss)
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-taupe">
            If you want body contour changes in specific zones, treatments like
            fat freezing may complement a medical weight plan. That choice
            should be personal and realistic.
          </motion.p>
        </div>
      </motion.section>

      {/* What top competitors in Malaysia are doing - SEMUA KATA LENGKAP */}
      {/* <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-4"
          >
            What top competitors in Malaysia are doing on Google
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown text-lg mb-6">
            (and how Nexus Clinic KL can stand out)
          </motion.p>

          <motion.p variants={fadeInUp} className="text-brown mb-6">
            When people search "Mounjaro Kuala Lumpur" or "Mounjaro Malaysia,"
            pages that often appear focus on:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-8 mb-8"
          >
            <div className="p-6 bg-cream rounded-xl">
              <ul className="space-y-3 text-brown">
                <li>• Doctor-prescribed, safe access messaging</li>
                <li>
                  • Educational comparisons (Ozempic vs Mounjaro style content)
                </li>
                <li>
                  • Strong women-focused or lifestyle-led branding (Mont Kiara
                  and KL positioning)
                </li>
                <li>• "Official launch in Malaysia" social proof posts</li>
              </ul>
            </div>

            <div className="p-6 bg-rose/5 rounded-xl">
              <h3 className="text-xl font-bold text-wine mb-4">
                How Nexus Clinic Kuala Lumpur can win SEO and trust
              </h3>
              <ul className="space-y-2 text-brown">
                <li>
                  • Be precise about approvals and brand names (Mounjaro vs
                  Zepbound)
                </li>
                <li>
                  • Publish transparent safety screening steps and red flags
                </li>
                <li>
                  • Add KL-local intent: Mont Kiara, Bangsar, KLCC, Damansara in
                  natural wording
                </li>
                <li>
                  • Build a strong FAQ section that matches People Also Ask
                  queries
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section> */}

      {/* FAQ Section - SEMUA PERTANYAAN DAN JAWABAN LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-12 text-center"
          >
            FAQs <span className="text-wine">(People Also Ask style)</span>
          </motion.h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <motion.details
              variants={fadeInUp}
              className="bg-white rounded-xl group"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-semibold text-brown">
                  Is Mounjaro approved for weight loss?
                </span>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                In the US, Mounjaro is approved for type 2 diabetes, while
                tirzepatide is approved for chronic weight management under the
                brand Zepbound. Local indications can differ by country, so your
                KL doctor should guide you.
              </div>
            </motion.details>

            {/* FAQ 2 */}
            <motion.details
              variants={fadeInUp}
              className="bg-white rounded-xl group"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-semibold text-brown">
                  How much weight can you lose on Mounjaro?
                </span>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                In obesity trials with tirzepatide, many people lost a
                meaningful percentage of body weight over about 72 weeks. Your
                result depends on dose tolerance, lifestyle, and health factors.
              </div>
            </motion.details>

            {/* FAQ 3 */}
            <motion.details
              variants={fadeInUp}
              className="bg-white rounded-xl group"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-semibold text-brown">
                  How fast does Mounjaro start working for weight loss?
                </span>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Many people notice appetite changes in the first few weeks.
                Visible body changes often take 8 to 12 weeks, and keep building
                with time and consistency.
              </div>
            </motion.details>

            {/* FAQ 4 */}
            <motion.details
              variants={fadeInUp}
              className="bg-white rounded-xl group"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-semibold text-brown">
                  Is Mounjaro better than Ozempic?
                </span>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                They work differently. Ozempic targets GLP-1 only, while
                tirzepatide targets both GIP and GLP-1. Some studies show
                stronger average weight loss with tirzepatide, but the "best"
                choice depends on your health and side effects.
              </div>
            </motion.details>

            {/* FAQ 5 */}
            <motion.details
              variants={fadeInUp}
              className="bg-white rounded-xl group"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-semibold text-brown">
                  What are the most common side effects?
                </span>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Most are stomach-related, like nausea, constipation, diarrhea,
                and reflux. Many improve as your body adjusts, especially with
                slower dose increases and better meal habits.
              </div>
            </motion.details>

            {/* FAQ 6 */}
            <motion.details
              variants={fadeInUp}
              className="bg-white rounded-xl group"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-semibold text-brown">
                  What happens when you stop Mounjaro?
                </span>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Many people regain some weight if lifestyle habits are not
                supported. That is why a long-term plan matters, including
                nutrition, activity, sleep, and follow-up.
              </div>
            </motion.details>

            {/* FAQ 7 */}
            <motion.details
              variants={fadeInUp}
              className="bg-white rounded-xl group"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-semibold text-brown">
                  Can Mounjaro cause hair loss?
                </span>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Hair shedding is not always from the medicine itself. It can
                happen during rapid weight loss or low protein intake. A doctor
                can help rule out iron or thyroid issues and adjust your plan.
              </div>
            </motion.details>

            {/* FAQ 8 */}
            <motion.details
              variants={fadeInUp}
              className="bg-white rounded-xl group"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-semibold text-brown">
                  Do you need to diet while on Mounjaro?
                </span>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Yes, but it should be realistic. The medication supports
                appetite control, but results are best with a steady calorie
                deficit, higher protein, and consistent movement.
              </div>
            </motion.details>

            {/* FAQ 9 */}
            <motion.details
              variants={fadeInUp}
              className="bg-white rounded-xl group"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-semibold text-brown">
                  Is Mounjaro safe?
                </span>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                It can be safe for the right patient with medical screening. It
                also has important warnings and contraindications, including
                thyroid tumor risk in animal studies and restrictions for people
                with MTC or MEN2.
              </div>
            </motion.details>

            {/* FAQ 10 */}
            <motion.details
              variants={fadeInUp}
              className="bg-white rounded-xl group"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-semibold text-brown">
                  Can I take Mounjaro if I have surgery planned?
                </span>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Tell your doctor and anesthetist. Labeling and regulators
                highlight aspiration risk during general anesthesia or deep
                sedation for GLP-1 medicines.
              </div>
            </motion.details>

            {/* FAQ 11 */}
            <motion.details
              variants={fadeInUp}
              className="bg-white rounded-xl group"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-semibold text-brown">
                  How much does Mounjaro cost in Malaysia?
                </span>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-taupe">
                Cost depends on dose and clinic support. Some Malaysia listings
                show around RM 1,150 for certain strengths, while other
                providers list higher ranges. Your total cost may include
                consults, labs, and follow-ups.
              </div>
            </motion.details>
          </div>
        </div>
      </motion.section>

      {/* Book a consult - SEMUA KATA LENGKAP */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown mb-6"
          >
            Book a consult at{" "}
            <span className="text-wine">Nexus Clinic Kuala Lumpur</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown text-lg mb-8">
            If you are considering a Mounjaro weight loss treatment in Kuala
            Lumpur, the safest first step is a proper medical consult. We will
            help you understand eligibility, expected results, side effects, and
            a plan you can actually follow.
          </motion.p>

          <motion.button
            variants={scaleIn}
            className="px-8 py-4 bg-wine text-white rounded-full font-semibold hover:bg-rose transition-colors inline-flex items-center gap-2"
          >
            Schedule Your Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default MounjaroLanding;
