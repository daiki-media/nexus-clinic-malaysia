"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Droplets,
  Thermometer,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Target,
  Brain,
  Activity,
  ChevronRight,
  Salad,
  Phone,
  Search,
  Scale as ScaleIcon,
  Apple as AppleIcon,
  Stethoscope as StethoscopeIcon,
  Sparkles as SparklesIcon,
  FileText as FileTextIcon,
  Info as InfoIcon,
  AlertCircle as AlertCircleIcon,
  XCircle as XCircleIcon,
  HelpCircle as HelpCircleIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  Send as SendIcon,
  Heart as HeartIcon,
  Bookmark as BookmarkIcon,
  Users as UsersIcon,
  CreditCard as CreditCardIcon,
  Wallet as WalletIcon,
  Receipt as ReceiptIcon,
  ShoppingBag as ShoppingBagIcon,
  Package as PackageIcon,
  FileText as FileTextIcon2,
  Pill,
  Award,
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

const GLP1LandingPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "glp1");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-GLP1.webp",
      after: "/images/B&A-w/B&A-GLP1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-GLP2.webp",
      after: "/images/B&A-w/B&A-GLP2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-GLP3.webp",
      after: "/images/B&A-w/B&A-GLP3.webp",
    },
  ];
  return (
    <div className="bg-light font-inter overflow-x-hidden">
      {/* Hero Section - All content preserved exactly */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-cream via-light to-rose/10" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="inline-block">
                <motion.span
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  className="bg-wine/10 text-wine px-4 py-2 rounded-full text-sm font-medium"
                >
                  Nexus Clinic Kuala Lumpur
                </motion.span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brown leading-tight">
                Quiet the cravings,{" "}
                <span className="text-wine">not your lifestyle</span>
              </h1>

              <p className="text-xl text-taupe leading-relaxed max-w-xl">
                A doctor-monitored GLP-1 weight loss programme in Kuala Lumpur
                that helps you feel fuller, eat less, and lose weight steadily.
                Built around real medical screening, safe dosing, and habits you
                can keep.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-wine text-light px-8 py-4 rounded-full font-medium hover:bg-rose transition-colors shadow-lg hover:shadow-xl"
                >
                  Book Your Assessment
                </motion.button>
                <motion.button
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-wine text-wine px-8 py-4 rounded-full font-medium hover:bg-wine/5 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="bg-glass backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-serif text-brown mb-6">
                  Trust at Nexus Clinic Kuala Lumpur
                </h3>
                <ul className="space-y-4">
                  <motion.li
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Shield className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <span className="text-brown/80">
                      Doctor-led weight management with medical monitoring and
                      follow-ups
                    </span>
                  </motion.li>
                  <motion.li
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <Shield className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <span className="text-brown/80">
                      Genuine GLP-1 medicines used as part of a supervised
                      programme
                    </span>
                  </motion.li>
                  <motion.li
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <Shield className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <span className="text-brown/80">
                      Safety-first approach, including side effect support and
                      check-ins (not a one-time jab)
                    </span>
                  </motion.li>
                  <motion.li
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <Shield className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <span className="text-brown/80">
                      Evidence-based treatment options used in modern obesity
                      care
                    </span>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Context Section - All content preserved exactly */}
      {/* <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              A quick look at what's ranking in Malaysia right now (and what you
              should notice)
            </h2>
            <p className="text-xl text-taupe">
              When people search GLP-1 weight loss Malaysia, Wegovy Malaysia,
              Ozempic weight loss KL, or Mounjaro Malaysia, top pages commonly
              push a few angles:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.1 }}
              className="bg-light p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-rose/10"
            >
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-wine shrink-0 mt-1" />
                <p className="text-brown/80">
                  Medication menus and "options lists" (Ozempic, Wegovy,
                  Saxenda) with clinic assessment messaging
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              className="bg-light p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-rose/10"
            >
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-wine shrink-0 mt-1" />
                <p className="text-brown/80">
                  "Weight loss injection" education hubs that explain how GLP-1
                  works and who is eligible
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
              className="bg-light p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-rose/10"
            >
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-wine shrink-0 mt-1" />
                <p className="text-brown/80">
                  Authenticity and supply warnings (cold-chain, counterfeit
                  pens, batch verification)
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.4 }}
              className="bg-light p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-rose/10"
            >
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-wine shrink-0 mt-1" />
                <p className="text-brown/80">
                  Online consult plus delivery positioning for GLP-1 brands
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.5 }}
              className="bg-light p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-rose/10 md:col-span-2"
            >
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-wine shrink-0 mt-1" />
                <p className="text-brown/80">
                  Tirzepatide focused pages that highlight dual-hormone action
                  and bigger trial outcomes
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-rose/10 p-8 rounded-2xl border-l-4 border-wine"
          >
            <p className="text-lg text-brown font-medium">
              What that means for Nexus Clinic Kuala Lumpur content: the page
              that wins is not the one that "talks medicine". It is the one that
              makes people feel safe, guided, and supported weekly. That's
              exactly where a GLP-1 programme stands out when it is clearly
              structured as doctor-led care, not just an injection.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* What is GLP-1 Section - All content preserved exactly with image */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-brown">
                What is a GLP-1 weight loss programme?
              </h2>

              <div className="space-y-4 text-brown/80 text-lg leading-relaxed">
                <p>
                  A GLP-1 weight loss programme is a medically supervised plan
                  that may use GLP-1 based medication to help with appetite
                  control and weight management, plus lifestyle support so
                  results can last.
                </p>
                <p>
                  GLP-1 is a natural gut hormone. These medicines work on the
                  same pathway. They help your brain register fullness more
                  strongly, slow stomach emptying, and reduce hunger signals.
                </p>
                <p className="font-medium text-wine">
                  At Nexus Clinic Kuala Lumpur, the key idea is simple: you do
                  not "white-knuckle" your way through cravings. You work with
                  your doctor to reduce the noise around food, then build steady
                  habits while your appetite is calmer.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/main/GLP-programme.webp"
                  alt="Doctor consultation at Nexus Clinic Kuala Lumpur"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-brown to-transparent">
                  <p className="text-light font-medium">
                    Medical consultation at Nexus Clinic Kuala Lumpur
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GLP-1 vs Quick Fixes - All content preserved exactly */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              GLP-1 vs "quick fixes" you've probably tried
            </h2>
            <p className="text-xl text-taupe">
              Most people who book a consult have already done at least two of
              these:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.1 }}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <XCircle className="w-12 h-12 text-rose/60 mx-auto mb-4" />
              <p className="text-brown font-medium">
                Hard calorie cuts that rebound fast
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <XCircle className="w-12 h-12 text-rose/60 mx-auto mb-4" />
              <p className="text-brown font-medium">On- and- off gym bursts</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <XCircle className="w-12 h-12 text-rose/60 mx-auto mb-4" />
              <p className="text-brown font-medium">
                Skipping meals and "starting Monday"
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.4 }}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <XCircle className="w-12 h-12 text-rose/60 mx-auto mb-4" />
              <p className="text-brown font-medium">
                Supplements that barely move the scale
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-wine text-light p-8 rounded-2xl text-center"
          >
            <p className="text-xl mb-4">
              GLP-1 treatment is not magic. But it can change one big thing: how
              hard it feels to stay consistent.
            </p>
            <p className="text-lg opacity-90">
              In trials, people using semaglutide 2.4 mg with lifestyle support
              lost significantly more weight than placebo.
            </p>
            <p className="text-lg opacity-90 mt-2">
              Tirtzepatide trials show even larger average reductions at higher
              doses (still with medical supervision and lifestyle changes).
            </p>
          </motion.div>
        </div>
      </section>

      {/* How GLP-1 Works - All content preserved exactly */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
                How GLP-1 medicines help with weight loss (simple explanation)
              </h2>
              <p className="text-2xl text-wine font-serif mb-8">
                Think of it like turning down the volume on hunger.
              </p>

              <p className="text-lg text-brown/80 mb-6">GLP-1 medicines can:</p>

              <div className="space-y-4 mb-8">
                <motion.div
                  variants={fadeInRight}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 p-4 bg-cream rounded-xl"
                >
                  <CheckCircle2 className="w-6 h-6 text-wine shrink-0" />
                  <span className="text-brown text-lg">
                    Help you feel full sooner
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 p-4 bg-cream rounded-xl"
                >
                  <CheckCircle2 className="w-6 h-6 text-wine shrink-0" />
                  <span className="text-brown text-lg">
                    Keep you satisfied longer
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 p-4 bg-cream rounded-xl"
                >
                  <CheckCircle2 className="w-6 h-6 text-wine shrink-0" />
                  <span className="text-brown text-lg">
                    Reduce cravings and "snack thinking"
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 p-4 bg-cream rounded-xl"
                >
                  <CheckCircle2 className="w-6 h-6 text-wine shrink-0" />
                  <span className="text-brown text-lg">
                    Support better blood sugar control (important for some
                    people)
                  </span>
                </motion.div>
              </div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                className="mt-8 p-6 bg-rose/10 rounded-xl border border-rose/20"
              >
                <p className="text-brown/80">
                  <span className="font-medium text-wine">
                    The most common side effects are stomach-related, like
                    nausea, diarrhoea, vomiting, constipation.
                  </span>{" "}
                  Many are mild to moderate and improve as your body adjusts.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="bg-linear-to-br from-wine/10 to-rose/10 p-8 rounded-3xl">
                <Brain className="w-24 h-24 text-wine/30 mx-auto mb-6" />
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-brown font-medium">
                      Hunger Volume
                    </span>
                    <span className="text-2xl font-bold text-wine">
                      ↓ Significantly
                    </span>
                  </div>
                  <div className="h-3 bg-cream rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "35%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-wine rounded-full"
                    />
                  </div>
                  <p className="text-taupe text-sm">
                    With GLP-1 medication, hunger signals are reduced
                  </p>
                  <p className="text-brown/70 text-sm mt-4">
                    Think of it like turning down the volume on hunger.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who is a Good Fit - All content preserved exactly */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              Who is a good fit for a GLP-1 programme in Malaysia?
            </h2>
            <p className="text-xl text-taupe">A programme makes sense when:</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              variants={fadeInLeft}
              transition={{ delay: 0.1 }}
              className="bg-light p-6 rounded-xl shadow-md flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-wine" />
              </div>
              <p className="text-brown text-lg">
                You have tried diet and exercise but your weight keeps returning
              </p>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              transition={{ delay: 0.2 }}
              className="bg-light p-6 rounded-xl shadow-md flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-wine" />
              </div>
              <p className="text-brown text-lg">
                You feel strong cravings or constant hunger
              </p>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              transition={{ delay: 0.3 }}
              className="bg-light p-6 rounded-xl shadow-md flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-wine" />
              </div>
              <p className="text-brown text-lg">
                You want a medical plan with monitoring, not guesswork
              </p>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              transition={{ delay: 0.4 }}
              className="bg-light p-6 rounded-xl shadow-md flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-wine" />
              </div>
              <p className="text-brown text-lg">
                You have weight-related risks (like blood sugar issues, blood
                pressure, cholesterol, sleep problems)
              </p>
            </motion.div>
          </div>

          {/* BMI Guidance - All content preserved exactly */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            className="bg-wine text-light p-8 rounded-2xl mb-12"
          >
            <h3 className="text-2xl font-serif mb-6">
              BMI guidance that is commonly used in Malaysia
            </h3>
            <p className="mb-4">
              Malaysia's obesity guidance uses Asian BMI cut-offs:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-3xl font-bold mb-2">23.0 to 27.4</p>
                <p className="text-light/80">Overweight (pre-obesity)</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <p className="text-3xl font-bold mb-2">Above 27.5</p>
                <p className="text-light/80">Obesity</p>
              </div>
            </div>
            <p className="mt-4 text-light/80 text-sm">
              Pharmacotherapy is generally positioned as an add-on to lifestyle
              change, not a standalone solution.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-rose/10 p-8 rounded-2xl border-l-4 border-wine"
          >
            <p className="text-brown">
              <span className="font-semibold text-wine">
                Important: suitability is individual.
              </span>{" "}
              Your doctor should review your history, current meds, risks, and
              goals first.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Should Avoid - All content preserved exactly */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
                Who should avoid GLP-1 medicines or be extra careful?
              </h2>
              <p className="text-lg text-wine mb-8">This part matters.</p>

              <div className="space-y-6">
                <p className="text-brown/80">
                  Some GLP-1 medicines have key warnings and contraindications.
                  For example, semaglutide and tirzepatide labels include
                  warnings about thyroid C-cell tumours in animals and
                  contraindications related to medullary thyroid carcinoma (MTC)
                  or MEN 2.
                </p>

                <h3 className="text-xl font-serif text-brown mt-8 mb-4">
                  You should also tell your doctor if you:
                </h3>

                <motion.div
                  variants={fadeInRight}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-3 p-3 bg-cream rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    Are pregnant, trying to conceive, or breastfeeding
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-3 p-3 bg-cream rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    Have a history of pancreatitis or gallbladder disease
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-3 p-3 bg-cream rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    Have severe reflux or frequent vomiting
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3 p-3 bg-cream rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    Are taking other medications that affect blood sugar
                  </span>
                </motion.div>
              </div>

              <p className="mt-6 text-brown/80">
                A proper clinic programme handles this with screening,
                monitoring, and clear safety rules.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="bg-rose/10 p-8 rounded-2xl border-2 border-wine/20">
                <h3 className="text-2xl font-serif text-wine mb-6">
                  A Malaysia-specific safety note: surgery and sedation
                </h3>
                <div className="space-y-4 text-brown">
                  <p>
                    Malaysia's NPRA published an updated safety communication on
                    GLP-1 medicines and the risk of aspiration during general
                    anaesthesia or deep sedation, linked to delayed stomach
                    emptying.
                  </p>
                  <p className="font-medium bg-white p-4 rounded-lg">
                    If you have any procedure planned, tell your treating doctor
                    and anaesthetist that you are on GLP-1 medication. Do not
                    self-stop or self-adjust. Get clinical advice for your
                    situation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programme Details - All content preserved exactly */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              What's inside a doctor-monitored GLP-1 programme at Nexus Clinic
              Kuala Lumpur
            </h2>
            <p className="text-xl text-taupe">
              A good programme should feel like a clear path, not a confusing
              prescription.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Step 1 - Medical assessment */}
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-2xl font-serif text-wine">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-brown mb-4">
                    Medical assessment (the "why" behind your weight)
                  </h3>
                  <p className="text-brown/70 mb-4">Your doctor reviews:</p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-wine" />
                      <span className="text-brown/80">
                        Weight history and past attempts
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-wine" />
                      <span className="text-brown/80">
                        Hunger patterns and cravings
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-wine" />
                      <span className="text-brown/80">
                        Sleep, stress, and daily routine
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-wine" />
                      <span className="text-brown/80">
                        Health risks and current meds
                      </span>
                    </li>
                    <li className="flex items-center gap-2 md:col-span-2">
                      <CheckCircle2 className="w-4 h-4 text-wine" />
                      <span className="text-brown/80">
                        Baseline measurements (often weight, waist, BMI,
                        sometimes labs)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 2 - Picking the right medication plan */}
            <motion.div
              variants={fadeInRight}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-2xl font-serif text-wine">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-brown mb-4">
                    Picking the right medication plan
                  </h3>
                  <p className="text-brown/70 mb-4">
                    Not everyone needs the same option. Some people do better
                    with one pathway than another:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-2">
                      <Pill className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-brown/80">
                        Semaglutide has strong evidence in obesity treatment
                        trials
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Pill className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-brown/80">
                        Liraglutide 3.0 mg also has trial support, with smaller
                        average reductions than newer agents
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Pill className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-brown/80">
                        Tirzepatide (dual pathway) shows larger average results
                        in major trials
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-wine font-medium">
                    Your programme should focus on safe dose changes and
                    tolerability, not rushing.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 3 - Food strategy */}
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-2xl font-serif text-wine">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-brown mb-4">
                    Food strategy that feels doable in KL
                  </h3>
                  <p className="text-brown/70 mb-4">
                    You do not need "perfect eating". You need repeatable
                    eating.
                  </p>
                  <p className="mb-4">Most patients do best with:</p>
                  <ul className="grid md:grid-cols-2 gap-3 mb-4">
                    <li className="flex items-center gap-2">
                      <Salad className="w-4 h-4 text-wine" />
                      <span className="text-brown/80">
                        Protein at every main meal
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Salad className="w-4 h-4 text-wine" />
                      <span className="text-brown/80">
                        Fibre daily (vegetables, fruit, legumes)
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Salad className="w-4 h-4 text-wine" />
                      <span className="text-brown/80">
                        Smaller portions, slower pace
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Salad className="w-4 h-4 text-wine" />
                      <span className="text-brown/80">
                        Less greasy food early in the programme (helps nausea)
                      </span>
                    </li>
                  </ul>
                  <p className="bg-cream p-4 rounded-lg text-brown/80">
                    This works well with Malaysian food too. You can still enjoy
                    nasi campur, noodles, and mamak meals. The trick is portion,
                    protein, and timing.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 4 - Follow-ups and progress tracking */}
            <motion.div
              variants={fadeInRight}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-2xl font-serif text-wine">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-brown mb-4">
                    Follow-ups and progress tracking
                  </h3>
                  <p className="text-brown/70 mb-4">
                    A programme works because you are not alone between visits.
                    Adjustments happen based on:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 mb-4">
                    <li className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-wine" />
                      <span className="text-brown/80">Hunger control</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-wine" />
                      <span className="text-brown/80">Side effects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-wine" />
                      <span className="text-brown/80">
                        Weight trend and waist trend
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-wine" />
                      <span className="text-brown/80">
                        Energy, sleep, and digestion
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-wine font-medium">
                    This is how you reduce risk and protect your progress.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Realistic Results - All content preserved exactly */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              What results can you realistically expect?
            </h2>
            <p className="text-xl text-taupe">
              Most people want a straight answer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.1 }}
              className="bg-cream p-6 rounded-xl text-center shadow-md"
            >
              <Target className="w-12 h-12 text-wine mx-auto mb-4" />
              <h3 className="text-xl font-serif text-brown mb-2">
                Semaglutide 2.4 mg
              </h3>
              <p className="text-taupe">at 68 weeks in STEP 1</p>
              <p className="text-wine font-medium mt-2">
                Clinical trials show meaningful average weight loss
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              className="bg-cream p-6 rounded-xl text-center shadow-md"
            >
              <Target className="w-12 h-12 text-wine mx-auto mb-4" />
              <h3 className="text-xl font-serif text-brown mb-2">
                Tirzepatide
              </h3>
              <p className="text-taupe">
                at 72 weeks in SURMOUNT-1, with dose-dependent outcomes
              </p>
              <p className="text-wine font-medium mt-2">
                Clinical trials show meaningful average weight loss
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
              className="bg-cream p-6 rounded-xl text-center shadow-md"
            >
              <Target className="w-12 h-12 text-wine mx-auto mb-4" />
              <h3 className="text-xl font-serif text-brown mb-2">
                Liraglutide 3.0 mg
              </h3>
              <p className="text-taupe">at 56 weeks in trial data</p>
              <p className="text-wine font-medium mt-2">
                Clinical trials show meaningful average weight loss
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-wine text-light p-8 rounded-2xl"
          >
            <p className="text-lg mb-4">But your result depends on:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-light/80" />
                <span>Your starting weight and health</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-light/80" />
                <span>Dose tolerance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-light/80" />
                <span>Food routine and sleep</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-light/80" />
                <span>Consistency over months, not days</span>
              </div>
            </div>
            <p className="mt-4 text-light/80">
              In real life, many people notice changes first in appetite and
              portions. The scale follows after.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Side Effects - All content preserved exactly */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
                Common side effects (and how clinics help you manage them)
              </h2>
              <p className="text-lg text-brown/80 mb-8">
                Most side effects are digestive:
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <motion.div
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.1 }}
                  className="bg-light p-4 rounded-lg text-center shadow-sm"
                >
                  <Thermometer className="w-6 h-6 text-wine mx-auto mb-2" />
                  <span className="text-brown font-medium">Nausea</span>
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.2 }}
                  className="bg-light p-4 rounded-lg text-center shadow-sm"
                >
                  <Thermometer className="w-6 h-6 text-wine mx-auto mb-2" />
                  <span className="text-brown font-medium">Diarrhoea</span>
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.3 }}
                  className="bg-light p-4 rounded-lg text-center shadow-sm"
                >
                  <Thermometer className="w-6 h-6 text-wine mx-auto mb-2" />
                  <span className="text-brown font-medium">Vomiting</span>
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.4 }}
                  className="bg-light p-4 rounded-lg text-center shadow-sm"
                >
                  <Thermometer className="w-6 h-6 text-wine mx-auto mb-2" />
                  <span className="text-brown font-medium">Constipation</span>
                </motion.div>
              </div>

              <div className="bg-wine/5 p-6 rounded-xl">
                <h3 className="text-xl font-serif text-wine mb-4">
                  A doctor-monitored plan helps by:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="text-brown/80">
                      Starting low and increasing gradually
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="text-brown/80">
                      Coaching on meal size and food choices
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="text-brown/80">Checking hydration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="text-brown/80">Reviewing red flags</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="bg-rose/10 p-8 rounded-2xl border-2 border-wine/20">
                <h3 className="text-2xl font-serif text-wine mb-6">
                  When to get urgent medical advice
                </h3>
                <div className="space-y-4">
                  <p className="text-brown/80">
                    Seek medical help if you have severe abdominal pain,
                    persistent vomiting, dehydration symptoms, or anything that
                    feels serious.
                  </p>
                  <div className="bg-light p-4 rounded-lg border-l-4 border-wine">
                    <p className="font-medium text-wine">
                      Use the clinic's guidance, not social media dosing tips.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost Section - All content preserved exactly */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6 text-center">
              Cost of GLP-1 programmes in Malaysia (what affects pricing)
            </h2>

            <div className="bg-cream p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-brown/80 mb-6">
                Pricing varies a lot in Kuala Lumpur because it depends on:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Droplets className="w-5 h-5 text-wine" />
                  <span className="text-brown">Which medication is used</span>
                </li>
                <li className="flex items-center gap-3">
                  <Droplets className="w-5 h-5 text-wine" />
                  <span className="text-brown">
                    Dose level and how long you stay on it
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Droplets className="w-5 h-5 text-wine" />
                  <span className="text-brown">Consult frequency</span>
                </li>
                <li className="flex items-center gap-3">
                  <Droplets className="w-5 h-5 text-wine" />
                  <span className="text-brown">
                    Any lab tests or add-on coaching
                  </span>
                </li>
              </ul>
              <p className="text-brown/70">
                You will see some clinics advertise entry points (example: "as
                low as RM300/month") while others list higher pen pricing ranges
                for specific products.
              </p>
              <div className="mt-6 p-4 bg-wine/10 rounded-lg border border-wine/30">
                <p className="text-brown font-medium">
                  For Nexus Clinic Kuala Lumpur, the cleanest approach is: book
                  an assessment so pricing matches your plan, not a generic
                  estimate.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GLP-1 vs Fat Freezing - All content preserved exactly */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              GLP-1 programme vs fat freezing (CoolSculpting style) in Malaysia
            </h2>
            <p className="text-xl text-taupe">
              People mix these up, so let's make it clear.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-serif text-wine mb-4">
                GLP-1 programme
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown/80">
                    Helps with overall body weight and appetite
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown/80">
                    Works best when weight gain is driven by hunger and
                    consistency challenges
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown/80">
                    Changes eating patterns over time
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-light p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-serif text-brown mb-4">
                Fat freezing
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown/80">
                    Targets local fat pockets
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown/80">
                    Does not treat hunger, cravings, or overall weight drivers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown/80">
                    Often chosen for contouring after weight loss
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            className="bg-wine text-light p-8 rounded-2xl text-center"
          >
            <p className="text-xl mb-4">
              Many patients in Kuala Lumpur do both, but in the right order:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4 text-2xl font-serif">
              <span>1. Medical weight loss first</span>
              <ArrowRight className="w-6 h-6" />
              <span>2. Body contouring second</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Programme Matters - All content preserved exactly */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              Why a programme matters more than the brand name
            </h2>
            <p className="text-xl text-taupe">
              In Malaysia, many pages focus on "Wegovy vs Ozempic vs Mounjaro".
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.1 }}
              className="bg-cream p-4 rounded-lg text-center"
            >
              <Award className="w-8 h-8 text-wine mx-auto mb-2" />
              <p className="text-brown text-sm font-medium">
                Correct patient selection
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              className="bg-cream p-4 rounded-lg text-center"
            >
              <Award className="w-8 h-8 text-wine mx-auto mb-2" />
              <p className="text-brown text-sm font-medium">
                Safe dose changes
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
              className="bg-cream p-4 rounded-lg text-center"
            >
              <Award className="w-8 h-8 text-wine mx-auto mb-2" />
              <p className="text-brown text-sm font-medium">
                Side effect support
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.4 }}
              className="bg-cream p-4 rounded-lg text-center"
            >
              <Award className="w-8 h-8 text-wine mx-auto mb-2" />
              <p className="text-brown text-sm font-medium">
                Habit building while appetite is reduced
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.5 }}
              className="bg-cream p-4 rounded-lg text-center"
            >
              <Award className="w-8 h-8 text-wine mx-auto mb-2" />
              <p className="text-brown text-sm font-medium">
                Habit building while appetite is reduced
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-xl text-wine font-medium"
          >
            That is why a doctor-monitored weight loss programme is the real
            product, not the pen.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section - All content preserved exactly with complete answers */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
              FAQs (People Also Ask style)
            </h2>
            <p className="text-xl text-taupe">
              These are common questions people ask online before booking a
              GLP-1 consult.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <motion.details
              variants={fadeInUp}
              transition={{ delay: 0.05 }}
              className="group bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-brown pr-8">
                  1) How does a GLP-1 weight loss programme work?
                </h3>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-brown/70 leading-relaxed">
                A GLP-1 programme uses medication that mimics gut hormones
                involved in fullness. It can reduce appetite, slow stomach
                emptying, and help you eat less without constant hunger. It
                works best when paired with lifestyle support, follow-ups, and
                medical monitoring. That is why doctor-led programmes tend to be
                safer and more consistent than self-use.
              </div>
            </motion.details>

            {/* FAQ 2 */}
            <motion.details
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="group bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-brown pr-8">
                  2) How much weight can you lose on GLP-1 medicines?
                </h3>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-brown/70 leading-relaxed">
                It depends on the medication, dose, and how long you stay
                consistent. In clinical trials, semaglutide 2.4 mg showed
                significant average weight loss over 68 weeks. Tirzepatide
                trials showed larger average reductions at higher doses over 72
                weeks. Liraglutide 3.0 mg also has trial support, with smaller
                average reductions than newer agents.
              </div>
            </motion.details>

            {/* FAQ 3 */}
            <motion.details
              variants={fadeInUp}
              transition={{ delay: 0.15 }}
              className="group bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-brown pr-8">
                  3) How long does it take to see results?
                </h3>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-brown/70 leading-relaxed">
                Many people notice appetite changes within the first few weeks.
                Scale changes usually follow after that. It is normal for weight
                loss to be faster early, then slow down. Good programmes track
                more than weight, like waist size, energy, and eating patterns.
                Consistency over months matters more than quick weekly drops.
              </div>
            </motion.details>

            {/* FAQ 4 */}
            <motion.details
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="group bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-brown pr-8">
                  4) What are the most common side effects?
                </h3>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-brown/70 leading-relaxed">
                The most common are stomach-related: nausea, diarrhoea,
                vomiting, constipation. Many cases are mild to moderate and
                improve as your body adjusts. Clinics manage this by gradual
                dose increases and food strategies like smaller meals and less
                greasy food at the start.
              </div>
            </motion.details>

            {/* FAQ 5 */}
            <motion.details
              variants={fadeInUp}
              transition={{ delay: 0.25 }}
              className="group bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-brown pr-8">
                  5) Is GLP-1 safe for everyone?
                </h3>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-brown/70 leading-relaxed">
                No. Some people should not use it, and others need closer
                monitoring. Labels include important warnings and
                contraindications, including specific thyroid cancer related
                contraindications for semaglutide and tirzepatide products. This
                is exactly why you should start with a doctor assessment, not a
                shortcut.
              </div>
            </motion.details>

            {/* FAQ 6 */}
            <motion.details
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="group bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-brown pr-8">
                  6) Do I need to diet and exercise on a GLP-1 programme?
                </h3>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-brown/70 leading-relaxed">
                Yes, but it does not need to be extreme. GLP-1 medicines work
                best with sustainable nutrition and activity changes. Even a
                simple plan like higher protein meals, daily steps, and better
                sleep can improve results. Think "repeatable", not "perfect".
              </div>
            </motion.details>

            {/* FAQ 7 */}
            <motion.details
              variants={fadeInUp}
              transition={{ delay: 0.35 }}
              className="group bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-brown pr-8">
                  7) What happens if I stop GLP-1 medication?
                </h3>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-brown/70 leading-relaxed">
                Many people notice appetite returning after stopping, and weight
                regain can happen. That is why long-term planning matters. A
                good clinic uses the appetite-controlled phase to build habits,
                so you have a maintenance strategy even if you change treatment
                later. Do not stop suddenly without medical advice.
              </div>
            </motion.details>

            {/* FAQ 8 */}
            <motion.details
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="group bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-brown pr-8">
                  8) Can I do GLP-1 treatment in Malaysia if I'm worried about
                  fake pens?
                </h3>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-brown/70 leading-relaxed">
                Yes, but only through verified clinics with proper cold-chain
                storage and batch verification. Nexus Clinic uses genuine GLP-1
                medicines from regulated sources. Always verify your medication
                through proper channels and never purchase from unverified
                sources.
              </div>
            </motion.details>

            {/* FAQ 9 */}
            <motion.details
              variants={fadeInUp}
              transition={{ delay: 0.45 }}
              className="group bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-brown pr-8">
                  9) Do I need to tell my doctor before surgery or sedation?
                </h3>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-brown/70 leading-relaxed">
                Yes. Malaysia's NPRA has issued safety communications about
                GLP-1 medicines and aspiration risk during general anaesthesia
                or deep sedation. Tell your doctor and anaesthetist before any
                procedure. Do not self-adjust your dose.
              </div>
            </motion.details>

            {/* FAQ 10 */}
            <motion.details
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className="group bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-medium text-brown pr-8">
                  10) Is a GLP-1 programme the same as fat freezing?
                </h3>
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-brown/70 leading-relaxed">
                No. GLP-1 supports appetite control and overall weight loss. Fat
                freezing is a body contouring treatment for local fat pockets.
                Many people choose GLP-1 first to reduce overall fat, then
                consider contouring later if needed.
              </div>
            </motion.details>
          </div>
        </div>
      </section>

      {/* CTA Section - All content preserved exactly */}
      <section className="py-20 bg-wine relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/clinic/interior.png')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center text-light"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready-to-use CTA section (keep it human, not salesy)
            </h2>
            <p className="text-xl text-light/90 mb-8 leading-relaxed">
              If you feel like your appetite is running the show, a
              doctor-monitored GLP-1 weight loss programme in Kuala Lumpur can
              give you structure and support.
            </p>
            <p className="text-lg text-light/80 mb-12">
              Start with a proper assessment at Nexus Clinic Kuala Lumpur so
              your plan fits your body, your risks, and your lifestyle.
            </p>
            <motion.button
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-light text-wine px-12 py-4 rounded-full font-medium text-lg hover:bg-cream transition-colors shadow-xl"
            >
              Book Your Assessment Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Floating Consultation Button */}
      <motion.a
        href="#"
        className="fixed bottom-6 right-6 bg-wine text-light p-4 rounded-full shadow-xl hover:bg-rose transition-colors z-50 flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Phone className="w-5 h-5" />
        <span className="hidden md:inline">Book Consultation</span>
      </motion.a>
    </div>
  );
};

export default GLP1LandingPage;
