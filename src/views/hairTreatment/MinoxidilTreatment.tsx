"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Clock,
  Shield,
  MapPin,
  Droplets,
  AlertCircle,
  CheckCircle2,
  HeartPulse,
  Home,
  Users,
  Scissors,
  Pill,
  Syringe,
  Info,
  Heart,
  Ban,
  Flame,
  Pill as PillIcon,
  Target,
  Layers,
  Repeat,
  TrendingUp,
  Divide,
  Camera,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "../../lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const MinoxidilLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "minoxidil");

  const quickAnswers = [
    { question: t("quickAnswers.q1"), answer: t("quickAnswers.a1") },
    { question: t("quickAnswers.q2"), answer: t("quickAnswers.a2") },
    { question: t("quickAnswers.q3"), answer: t("quickAnswers.a3") },
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: t("benefits.b1Title"),
      desc: t("benefits.b1Desc"),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("benefits.b2Title"),
      desc: t("benefits.b2Desc"),
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t("benefits.b3Title"),
      desc: t("benefits.b3Desc"),
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t("benefits.b4Title"),
      desc: t("benefits.b4Desc"),
    },
  ];

  const steps = [
    {
      number: "01",
      title: t("journey.s1Title"),
      desc: t("journey.s1Desc"),
    },
    {
      number: "02",
      title: t("journey.s2Title"),
      desc: t("journey.s2Desc"),
    },
    {
      number: "03",
      title: t("journey.s3Title"),
      desc: t("journey.s3Desc"),
    },
  ];

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-minoxidil-treatment1.webp",
      after: "/images/B&A-hair/B&A-minoxidil-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-minoxidil-treatment2.webp",
      after: "/images/B&A-hair/B&A-minoxidil-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-minoxidil-treatment3.webp",
      after: "/images/B&A-hair/B&A-minoxidil-treatment3.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-light font-[(--font-inter)]">
      {/* Hero Section */}
      <section className="relative bg-cream overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 py-20 md:py-28"
        >
          <div className="max-w-4xl">
            <motion.div variants={fadeInUp} className="mb-2">
              <span className="text-wine font-medium tracking-wide">
                Nexus Clinic Kuala Lumpur
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-georgia text-5xl md:text-6xl lg:text-7xl text-brown mb-6 leading-tight"
            >
              Keep your hair longer.
              <br />
              <span className="text-rose">Thicken weak zones again.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-taupe max-w-2xl mb-8"
            >
              Minoxidil is one of the most trusted hair loss treatments
              worldwide. Used early, it can slow thinning and support regrowth
              over time.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            >
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-wine mt-1 shrink-0" />
                <div>
                  <p className="text-brown font-medium">
                    MOH registered and compliant, doctor-led care at Nexus
                    Clinic Kuala Lumpur.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-wine mt-1 shrink-0" />
                <div>
                  <p className="text-brown font-medium">
                    Treatment plans start with a real assessment, not a sales
                    pitch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-wine mt-1 shrink-0" />
                <div>
                  <p className="text-brown font-medium">
                    Central KL location at Wisma UOA II, Jalan Pinang (Kuala
                    Lumpur).
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative element */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose/5 rounded-full blur-3xl" />
      </section>

      {/* Quick Answers Section */}
      <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-10 text-center"
          >
            Quick answers people want first
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="bg-wine/10 p-3 rounded-full">
                  <Info className="w-6 h-6 text-wine" />
                </div>
                <div>
                  <h3 className="font-georgia text-lg text-brown mb-2">
                    What does minoxidil do?
                  </h3>
                  <p className="text-taupe">
                    It helps slow hair loss and may regrow some hair, mainly in
                    early pattern hair loss.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="bg-wine/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-wine" />
                </div>
                <div>
                  <h3 className="font-georgia text-lg text-brown mb-2">
                    How long until results?
                  </h3>
                  <p className="text-taupe">
                    Many people need at least 4-6 months, and often longer, to
                    judge results.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="bg-wine/10 p-3 rounded-full">
                  <Repeat className="w-6 h-6 text-wine" />
                </div>
                <div>
                  <h3 className="font-georgia text-lg text-brown mb-2">
                    Will it work forever?
                  </h3>
                  <p className="text-taupe">
                    It works only while you keep using it. Stopping usually
                    leads to hair loss again within months.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="bg-wine/10 p-3 rounded-full">
                  <Flame className="w-6 h-6 text-wine" />
                </div>
                <div>
                  <h3 className="font-georgia text-lg text-brown mb-2">
                    Is shedding normal at the start?
                  </h3>
                  <p className="text-taupe">
                    Some shedding can happen early, often in the first couple of
                    weeks.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What is Minoxidil Section with Image */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="font-georgia text-4xl text-brown mb-6">
                What is minoxidil (simple explanation)
              </h2>
              <p className="text-taupe text-lg leading-relaxed mb-4">
                Minoxidil started as an oral medicine for high blood pressure.
                Later, doctors noticed it could stimulate hair growth. Today, it
                is mostly used as a topical treatment for pattern hair loss in
                men and women.
              </p>
              <p className="text-taupe text-lg leading-relaxed">
                Minoxidil does not "cure" hair loss. It supports hair follicles
                so they stay in the growth phase longer. That is why consistency
                matters.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hair/minoxidil-treatment.webp"
                  alt="Hair consultation at Nexus Clinic Kuala Lumpur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-wine/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who is minoxidil treatment for? Section */}
      <section className="py-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-12 text-center"
          >
            Who is minoxidil treatment for?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center mb-12 max-w-2xl mx-auto"
          >
            Minoxidil treatment in Malaysia is usually considered for:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-wine" />
                <h3 className="font-georgia text-xl text-brown">
                  Men with male pattern hair loss
                </h3>
              </div>
              <p className="text-taupe">
                If you are seeing temple recession or crown thinning, minoxidil
                can help early loss.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-cream p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-wine" />
                <h3 className="font-georgia text-xl text-brown">
                  Women with female pattern hair loss
                </h3>
              </div>
              <p className="text-taupe">
                The American Academy of Dermatology notes minoxidil is
                FDA-approved for women, and products with 2% or 5% minoxidil are
                approved for female pattern hair loss.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-wine" />
                <h3 className="font-georgia text-xl text-brown">
                  People with early thinning (not complete baldness)
                </h3>
              </div>
              <p className="text-taupe">
                Minoxidil is more helpful when follicles are still alive but
                getting weaker.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-cream p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-6 h-6 text-wine" />
                <h3 className="font-georgia text-xl text-brown">
                  People using a wider plan
                </h3>
              </div>
              <p className="text-taupe">
                Minoxidil is often combined with clinic treatments like PRP,
                mesotherapy, or medical options, depending on your diagnosis.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who should be careful, or avoid minoxidil? Section */}
      <section className="py-20 bg-rose/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-4 text-center"
          >
            Who should be careful, or avoid minoxidil?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center mb-12 max-w-2xl mx-auto"
          >
            Minoxidil is not for everyone.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <HeartPulse className="w-8 h-8 text-wine mb-4" />
              <h3 className="font-georgia text-lg text-brown mb-2">
                Pregnancy and breastfeeding
              </h3>
              <p className="text-taupe text-sm">
                Some NHS hospital leaflets state there is no evidence confirming
                safety during conception attempts, pregnancy, or breastfeeding,
                so they do not suggest it in these groups.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <Flame className="w-8 h-8 text-wine mb-4" />
              <h3 className="font-georgia text-lg text-brown mb-2">
                If your scalp is very inflamed or infected
              </h3>
              <p className="text-taupe text-sm">
                If your scalp is red, painful, or has infection, you need
                treatment for that first.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <Ban className="w-8 h-8 text-wine mb-4" />
              <h3 className="font-georgia text-lg text-brown mb-2">
                If you have scarring hair loss
              </h3>
              <p className="text-taupe text-sm">
                For some scarring alopecias, minoxidil alone is not enough to
                stop progression. The AAD notes minoxidil alone cannot prevent
                further hair loss in CCAA.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <HeartPulse className="w-8 h-8 text-wine mb-4" />
              <h3 className="font-georgia text-lg text-brown mb-2">
                If you have heart or blood pressure issues (especially oral
                minoxidil)
              </h3>
              <p className="text-taupe text-sm">
                Oral minoxidil can affect blood pressure and heart rate. It must
                be doctor-guided.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Types of minoxidil used in hair loss treatment */}
      <section className="py-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-12 text-center"
          >
            Types of minoxidil used in hair loss treatment
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-2xl"
            >
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Topical minoxidil (most common)
              </h3>
              <p className="text-taupe mb-2">Comes as solution or foam.</p>
              <p className="text-taupe mb-2">
                Typical use guidance (varies by product):
              </p>
              <div className="space-y-2 text-taupe">
                <p>• Men often use 5% once or twice daily</p>
                <p>
                  • Women often use 2% solution twice daily or 5% foam once
                  daily
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-cream p-8 rounded-2xl"
            >
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Oral minoxidil (low dose, off-label in many places)
              </h3>
              <p className="text-taupe">
                Some clinics prescribe low-dose oral minoxidil when topical is
                not tolerated or adherence is poor. It can have systemic side
                effects, so it needs medical screening and monitoring.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How to use topical minoxidil correctly */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-6 text-center"
          >
            How to use topical minoxidil correctly (and get better results)
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center mb-12 max-w-2xl mx-auto"
          >
            This is where most people fail. Not because minoxidil "doesn't
            work". Because they use it in a way that makes results harder.
          </motion.p>

          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <h3 className="font-georgia text-xl text-brown mb-4">
                Step-by-step
              </h3>
              <ol className="space-y-3 text-taupe list-decimal pl-5">
                <li>Start with a dry scalp.</li>
                <li>Apply the recommended amount to thinning areas.</li>
                <li>Wash hands after.</li>
                <li>Let it dry before styling products.</li>
                <li>Keep it away from your face, pillowcases, and pets.</li>
              </ol>
              <p className="mt-6 text-taupe italic">
                Mayo Clinic notes hair growth, if it happens, usually occurs
                after several months and lasts only as long as you keep using
                it.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Common mistakes that reduce results */}
      <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-8 text-center"
          >
            Common mistakes that reduce results
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            <motion.div
              variants={scaleIn}
              className="bg-rose/5 p-4 rounded-xl border border-rose/10"
            >
              <AlertCircle className="w-5 h-5 text-rose mb-2" />
              <p className="text-brown text-sm">Applying to hair, not scalp</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-rose/5 p-4 rounded-xl border border-rose/10"
            >
              <AlertCircle className="w-5 h-5 text-rose mb-2" />
              <p className="text-brown text-sm">
                Using less than recommended, then expecting "fast results"
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-rose/5 p-4 rounded-xl border border-rose/10"
            >
              <AlertCircle className="w-5 h-5 text-rose mb-2" />
              <p className="text-brown text-sm">
                Stopping after 4 weeks because shedding started
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-rose/5 p-4 rounded-xl border border-rose/10"
            >
              <AlertCircle className="w-5 h-5 text-rose mb-2" />
              <p className="text-brown text-sm">
                Using it on many body areas (can trigger unwanted hair growth)
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* The minoxidil shedding phase */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6 text-center"
            >
              The minoxidil shedding phase (what it is and why it happens)
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-rose text-xl mb-8 text-center"
            >
              This is the moment most people panic.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <p className="text-taupe mb-4">
                Mayo Clinic notes hair loss may continue for about 2 weeks after
                starting minoxidil. Other consumer clinical guides also describe
                early shedding during the first weeks.
              </p>

              <p className="text-brown font-medium mb-2">What's happening:</p>
              <p className="text-taupe mb-6">
                Minoxidil can shift weak hairs out sooner, so stronger growth
                can come later. This phase is usually temporary.
              </p>

              <p className="text-brown font-medium mb-2">What to do:</p>
              <ul className="space-y-2 text-taupe">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-wine mt-1 shrink-0" />
                  <span>
                    Stay consistent (unless you have severe side effects)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-wine mt-1 shrink-0" />
                  <span>Take progress photos monthly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-wine mt-1 shrink-0" />
                  <span>
                    Review technique and dosage with a doctor if unsure
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How long does minoxidil take to work? */}
      <section className="py-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-6 text-center"
          >
            How long does minoxidil take to work?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center mb-12 max-w-2xl mx-auto"
          >
            A realistic timeline helps you stick with it.
          </motion.p>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-2">
                First 2-8 weeks:
              </h3>
              <p className="text-taupe">possible shedding, scalp adjustment</p>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-2">
                2-4 months:
              </h3>
              <p className="text-taupe">early signs in some people</p>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-2">
                6 months:
              </h3>
              <p className="text-taupe">
                Mayo Clinic notes it can take at least six months to prevent
                further loss and start regrowth, and it may take longer to judge
                effectiveness
              </p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mt-8 italic"
            >
              If it works for you, you usually need to keep using it to maintain
              benefits.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Benefits of minoxidil treatment */}
      <section className="py-16 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-8 text-center"
          >
            Benefits of minoxidil treatment
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center max-w-2xl mx-auto mb-8"
          >
            When used early and consistently, minoxidil may:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl text-center shadow-sm"
            >
              <CheckCircle2 className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown">slow down thinning</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl text-center shadow-sm"
            >
              <CheckCircle2 className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown">improve density in some areas</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl text-center shadow-sm"
            >
              <CheckCircle2 className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown">help you keep hair you still have</p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mt-8 text-sm"
          >
            Mayo Clinic also highlights it may help regrow hair or slow the rate
            of hair loss, but you need ongoing use to keep benefits.
          </motion.p>
        </motion.div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Side effects of minoxidil (honest list) */}
      <section className="py-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-6 text-center"
          >
            Side effects of minoxidil (honest list)
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center mb-12 max-w-2xl mx-auto"
          >
            Most side effects are manageable, but you should know them upfront.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-4">
                Common topical side effects
              </h3>
              <ul className="space-y-2 text-taupe">
                <li>• scalp irritation or itching</li>
                <li>
                  • unwanted hair growth on nearby face or hands if it spreads
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-4">
                Less common but important
              </h3>
              <p className="text-taupe">
                If you notice dizziness, chest symptoms, swelling, or
                palpitations, stop and seek medical advice, especially if using
                oral minoxidil. NHS sources list systemic effects like fluid
                retention, palpitations, and dizziness as possible side effects
                for minoxidil (not everyone gets these).
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Minoxidil safety at home */}
      <section className="py-16 bg-rose/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={scaleIn}
              className="inline-block p-4 bg-white rounded-full mb-6 mx-auto"
            >
              <Home className="w-8 h-8 text-wine" />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-4 text-center"
            >
              Minoxidil safety at home (especially if you have pets)
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-rose text-lg mb-6 text-center"
            >
              This is a big one people miss.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-taupe mb-8 text-center"
            >
              Medical literature highlights topical minoxidil can be highly
              toxic to pets, especially cats, and even small exposure can be
              serious.
            </motion.p>

            <motion.h3
              variants={fadeInUp}
              className="font-georgia text-xl text-brown mb-4"
            >
              Simple safety habits:
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <motion.div
                variants={scaleIn}
                className="bg-white p-4 rounded-xl"
              >
                <p className="text-brown text-sm">wash hands after every use</p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white p-4 rounded-xl"
              >
                <p className="text-brown text-sm">
                  let scalp dry fully before touching pets
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white p-4 rounded-xl"
              >
                <p className="text-brown text-sm">keep bottles locked away</p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white p-4 rounded-xl"
              >
                <p className="text-brown text-sm">
                  change pillowcases often if you apply at night
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Minoxidil cost in Malaysia */}
      <section className="py-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-6 text-center"
          >
            Minoxidil cost in Malaysia (realistic ranges)
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-taupe text-center mb-8">
            Costs change by brand, concentration, and where you buy.
          </motion.p>

          <motion.div
            variants={scaleIn}
            className="max-w-2xl mx-auto bg-cream p-8 rounded-2xl"
          >
            <p className="text-taupe mb-4">Examples seen in Malaysia:</p>

            <div className="space-y-3 text-brown">
              <p>
                • Online pharmacy listings show minoxidil products around RM 178
                for an 80ml 5% lotion (example listing).
              </p>
              <p>
                • Some Malaysia hair clinic blogs list typical ranges like RM
                50-RM 120 for 2% solution, RM 70-RM 180 for 5% solution, and RM
                100-RM 250 for 5% foam.
              </p>
              <p>
                • Some clinic pages present minoxidil as part of packages, with
                pricing ranges depending on plan.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl">
              <p className="text-wine">
                At Nexus Clinic Kuala Lumpur, we focus on total plan cost, not
                just the bottle price, because the right diagnosis can save you
                months of wasted spending.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Minoxidil vs other hair loss treatments */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-12 text-center"
          >
            Minoxidil vs other hair loss treatments (simple comparison)
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="w-5 h-5 text-wine" />
                <h3 className="font-georgia text-lg text-brown">
                  Minoxidil vs PRP
                </h3>
              </div>
              <p className="text-taupe text-sm">
                Minoxidil is daily home treatment. PRP is in-clinic and often
                done in sessions. Many people combine them, especially for
                faster support in early thinning.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-white p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Syringe className="w-5 h-5 text-wine" />
                <h3 className="font-georgia text-lg text-brown">
                  Minoxidil vs mesotherapy
                </h3>
              </div>
              <p className="text-taupe text-sm">
                Mesotherapy focuses on scalp nutrient delivery. Minoxidil is a
                proven first-line option for many pattern hair loss cases.
                Combination depends on the scalp condition and stage.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-white p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Pill className="w-5 h-5 text-wine" />
                <h3 className="font-georgia text-lg text-brown">
                  Minoxidil vs finasteride (men)
                </h3>
              </div>
              <p className="text-taupe text-sm">
                Finasteride targets DHT and is prescription-based. Many clinics
                pair it with minoxidil for male pattern hair loss.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-white p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Scissors className="w-5 h-5 text-wine" />
                <h3 className="font-georgia text-lg text-brown">
                  Minoxidil vs hair transplant
                </h3>
              </div>
              <p className="text-taupe text-sm">
                Minoxidil supports existing follicles. Transplant replaces
                missing follicles. If an area is fully bald, transplant may be
                the more direct option.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What a minoxidil plan looks like at Nexus Clinic Kuala Lumpur */}
      <section className="py-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-6 text-center"
          >
            What a minoxidil plan looks like at Nexus Clinic Kuala Lumpur
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center mb-12"
          >
            We keep it clear and realistic.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <div className="text-3xl mb-4">
                <Divide />
              </div>
              <h3 className="font-georgia text-lg text-brown mb-2">
                1) Diagnosis first
              </h3>
              <p className="text-taupe text-sm">
                Not all hair loss is the same. Pattern hair loss, stress
                shedding, scalp inflammation, and scarring loss need different
                approaches.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <div className="text-3xl mb-4">
                <Pill />
              </div>
              <h3 className="font-georgia text-lg text-brown mb-2">
                2) Correct product and routine
              </h3>
              <p className="text-taupe text-sm">
                Foam vs solution. Once daily vs twice daily. Sensitive scalp vs
                oily scalp. We match the plan to your lifestyle so you actually
                stick to it.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <div className="text-3xl mb-4">
                <Scissors />
              </div>
              <h3 className="font-georgia text-lg text-brown mb-2">
                3) Combine only if it makes sense
              </h3>
              <p className="text-taupe text-sm">
                Some people need only minoxidil. Others benefit from PRP or
                other in-clinic support based on severity.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <div className="text-3xl mb-4">
                <Camera />
              </div>
              <h3 className="font-georgia text-lg text-brown mb-2">
                4) Track progress properly
              </h3>
              <p className="text-taupe text-sm">
                Monthly photos. Same lighting. Same angles. This keeps the plan
                honest.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* People Also Ask FAQs */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-12 text-center"
          >
            People Also Ask FAQs (real search intent)
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-white rounded-xl p-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-brown font-medium">
                Does minoxidil work for hair regrowth?
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-taupe text-sm leading-relaxed">
                Minoxidil can help slow hair loss and support regrowth,
                especially in early pattern hair loss. The AAD notes it can help
                early hair loss, but it cannot regrow an entire head of hair.
                Mayo Clinic also notes it may take at least six months to see
                meaningful changes and you need ongoing use to keep results.
              </p>
            </motion.details>

            {/* FAQ 2 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-white rounded-xl p-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-brown font-medium">
                How long do I need to use minoxidil before I see results?
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-taupe text-sm leading-relaxed">
                Many people need several months. Mayo Clinic advises that if
                regrowth happens, it usually appears after several months of
                consistent use, and you should evaluate results around 4-6
                months or longer. If you stop too early, you may miss the real
                benefit window.
              </p>
            </motion.details>

            {/* FAQ 3 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-white rounded-xl p-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-brown font-medium">
                Is it normal to shed hair after starting minoxidil?
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-taupe text-sm leading-relaxed">
                Yes, it can be normal. Mayo Clinic notes hair loss may continue
                for about 2 weeks after starting. Other clinical guides also
                describe early shedding in the first weeks. This is often
                temporary and linked to hair cycle shifts.
              </p>
            </motion.details>

            {/* FAQ 4 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-white rounded-xl p-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-brown font-medium">
                What happens if I stop using minoxidil?
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-taupe text-sm leading-relaxed">
                You usually lose the benefits over time. Mayo Clinic notes hair
                loss will begin again within a few months after stopping. The
                AAD also explains that when you stop, you gradually shed more
                and lose the thickness minoxidil helped maintain.
              </p>
            </motion.details>

            {/* FAQ 5 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-white rounded-xl p-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-brown font-medium">
                Can women use minoxidil in Malaysia?
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-taupe text-sm leading-relaxed">
                Yes, many women use it for female pattern hair loss. The AAD
                notes minoxidil is FDA-approved for women, with 2% and 5%
                options approved for female pattern hair loss. Product choice
                and dosing should match your scalp sensitivity and goals.
              </p>
            </motion.details>

            {/* FAQ 6 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-white rounded-xl p-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-brown font-medium">
                Which is better, minoxidil foam or solution?
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-taupe text-sm leading-relaxed">
                It depends on your scalp and routine. Some people prefer foam
                because it can feel less messy. The key is consistent scalp
                application as directed. At Nexus Clinic KL, we help you choose
                what you can realistically use long term.
              </p>
            </motion.details>

            {/* FAQ 7 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-white rounded-xl p-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-brown font-medium">
                Can minoxidil cause unwanted facial hair?
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-taupe text-sm leading-relaxed">
                It can, especially if it spreads to nearby skin or drips. Mayo
                Clinic lists unwanted hair growth on adjacent skin as a possible
                side effect. Clean application, careful drying, and hand-washing
                reduce this risk.
              </p>
            </motion.details>

            {/* FAQ 8 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-white rounded-xl p-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-brown font-medium">
                Is oral minoxidil safe for hair loss?
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-taupe text-sm leading-relaxed">
                Low-dose oral minoxidil is used by some clinicians, but it can
                affect blood pressure and heart rate. NHS leaflets list possible
                side effects like fluid retention, palpitations, dizziness, and
                more. This is why it should be prescribed and monitored by a
                doctor.
              </p>
            </motion.details>

            {/* FAQ 9 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-white rounded-xl p-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-brown font-medium">
                Can I use minoxidil if I am trying to conceive, pregnant, or
                breastfeeding?
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-taupe text-sm leading-relaxed">
                Many hospital guidance leaflets state there is no evidence
                confirming safety in these groups and recommend avoiding it. If
                this applies to you, speak to a doctor for safer alternatives.
              </p>
            </motion.details>

            {/* FAQ 10 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-white rounded-xl p-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-brown font-medium">
                How much does minoxidil cost in Malaysia?
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-taupe text-sm leading-relaxed">
                It varies by brand and type. Malaysia sources show ranges like
                RM 70-RM 180 for 5% solution and RM 100-RM 250 for 5% foam, and
                some online pharmacy listings show around RM 178 for a 5%
                lotion. Prices change, so we guide based on your plan and
                budget.
              </p>
            </motion.details>

            {/* FAQ 11 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-white rounded-xl p-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-brown font-medium">
                Can minoxidil help scarring alopecia?
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-taupe text-sm leading-relaxed">
                Usually not on its own. The AAD notes that for some scarring
                conditions like CCCA, minoxidil alone cannot prevent further
                hair loss and prescription anti-inflammatory treatment is
                needed. This is why diagnosis matters before you invest time and
                money.
              </p>
            </motion.details>

            {/* FAQ 12 */}
            <motion.details
              variants={fadeInUp}
              className="group bg-white rounded-xl p-4 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-brown font-medium">
                Is minoxidil dangerous to pets?
                <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-taupe text-sm leading-relaxed">
                It can be. Research highlights topical minoxidil can be highly
                toxic to pets, especially cats, even with small exposure. If you
                have pets that sleep on your pillow or lick your hair, ask your
                doctor about safer routines and strict precautions.
              </p>
            </motion.details>
          </div>
        </motion.div>
      </section>

      {/* Ready to start Section */}
      <section className="py-20 bg-wine">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-white mb-6"
          >
            Ready to start minoxidil treatment in KL the right way?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-cream text-lg mb-8 max-w-2xl mx-auto"
          >
            If you're searching for minoxidil treatment in Malaysia, start with
            a proper hair and scalp assessment at Nexus Clinic Kuala Lumpur.
            We'll confirm the cause, recommend the right strength and routine,
            and tell you what results are realistic for your stage.
          </motion.p>

          <motion.button
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-wine px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors"
          >
            Book your assessment
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default MinoxidilLanding;
