"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  Clock,
  Shield,
  Heart,
  AlertCircle,
  XCircle,
  MapPin,
  Phone,
  Users,
  Wind,
  Scissors,
  Zap,
  Check,
  Minus,
  HelpCircle,
  FileText,
  Droplet as DropletIcon,
  Scissors as ScissorsIcon,
  Flame,
  Zap as ZapIcon,
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

const HairMesotherapyLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "hairMesotherapy");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-mesotherapy-hair-loss1.webp",
      after: "/images/B&A-hair/B&A-mesotherapy-hair-loss1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-mesotherapy-hair-loss2.webp",
      after: "/images/B&A-hair/B&A-mesotherapy-hair-loss2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-mesotherapy-hair-loss3.webp",
      after: "/images/B&A-hair/B&A-mesotherapy-hair-loss3.webp",
    },
  ];

  return (
    <main className="bg-light font-inter overflow-hidden">
      {/* Hero Section - Page 1 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-cream to-light">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-wine/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-glass backdrop-blur-sm rounded-full text-wine font-semibold text-sm border border-wine/20">
                Nexus Clinic Kuala Lumpur
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-georgia text-brown mb-6 leading-tight"
            >
              Hair Mesotherapy
              <span className="block text-wine">in Kuala Lumpur, Malaysia</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-taupe mb-4 max-w-2xl mx-auto"
            >
              Feed your follicles again. Bring back thicker-looking hair.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown/80 mb-8 max-w-3xl mx-auto"
            >
              Hair thinning can feel personal, fast. Hair mesotherapy is a
              simple, doctor-guided way to support regrowth.
            </motion.p>

            {/* Trust Badges - From Page 1 */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            >
              <div className="flex items-center gap-3 p-4 bg-glass backdrop-blur-sm rounded-xl border border-taupe/20">
                <Shield className="w-8 h-8 text-wine shrink-0" />
                <p className="text-sm text-left text-brown">
                  MOH registered and compliant. Doctor-led care.
                </p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-glass backdrop-blur-sm rounded-xl border border-taupe/20">
                <MapPin className="w-8 h-8 text-wine shrink-0" />
                <p className="text-sm text-left text-brown">
                  Central Kuala Lumpur location (Wisma UOA II, Jalan Pinang).
                </p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-glass backdrop-blur-sm rounded-xl border border-taupe/20">
                <Scissors className="w-8 h-8 text-wine shrink-0" />
                <p className="text-sm text-left text-brown">
                  Non-surgical hair restoration options, including PRP and hair
                  mesotherapy.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Answer Section - Page 1 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-georgia text-brown mb-4">
              Quick answer (for fast readers)
            </h2>
            <p className="text-lg text-taupe leading-relaxed">
              Hair mesotherapy uses tiny scalp injections of a nutrient
              "cocktail" to support hair follicles. At Nexus Clinic, a common
              plan is 4-6 sessions, then maintenance every 1-3 months, based on
              your hair loss pattern and goals. Most people see changes
              gradually, often over weeks to a few months. In Kuala Lumpur,
              scalp mesotherapy can cost roughly RM 600-RM 2,000 per session,
              depending on the clinic and plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Hair Loss Feels Frustrating - Pages 1-2 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              Why hair loss feels so frustrating
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-6">
              Hair loss rarely happens for one reason. It is often a mix of
              genetics, hormones, stress, diet, scalp health, and styling
              habits.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              You might notice:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            >
              <div className="flex items-start gap-3 p-3 bg-cream rounded-lg">
                <Minus className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">A widening part line</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-cream rounded-lg">
                <Minus className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">Thinner crown coverage</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-cream rounded-lg">
                <Minus className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">Receding temples or hairline</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-cream rounded-lg">
                <Minus className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  More hair on the pillow or in the shower
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-cream rounded-lg md:col-span-2">
                <Minus className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  A scalp that feels itchy, oily, or inflamed
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown font-semibold"
            >
              The hardest part is uncertainty. Is it temporary shedding, or
              pattern hair loss? This is why a proper scalp assessment matters.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is Hair Mesotherapy - Page 2 with Image */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInLeft}
                className="text-3xl md:text-4xl font-georgia text-brown mb-6"
              >
                What is hair mesotherapy for hair loss?
              </motion.h2>

              <motion.p
                variants={fadeInRight}
                className="text-lg text-taupe mb-4"
              >
                Hair mesotherapy is a minimally invasive treatment. It involves
                injecting a tailored mix of nutrients into the scalp to nourish
                follicles and support healthier growth.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
                In clinical terms, mesotherapy involves injecting therapeutic
                agents into the skin at a shallow depth, often around 2-4 mm.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-lg text-taupe">
                At Nexus Clinic, hair mesotherapy is positioned as a
                non-surgical option for people dealing with thinning hair, hair
                loss, or scalp concerns like alopecia.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-wine/20 to-rose/20 rounded-3xl transform rotate-3"></div>
              <img
                src="/images/hair/mesotherapy-hair-loss.webp"
                alt="Hair mesotherapy treatment at Nexus Clinic Kuala Lumpur"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-glass backdrop-blur-md p-4 rounded-xl">
                <p className="text-brown font-semibold text-sm">
                  Micro-injections at 2-4mm depth delivering nutrient cocktail
                  to hair follicles
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Does Scalp Mesotherapy Work - Pages 2-3 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              How does scalp mesotherapy work?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-6">
              Think of it as targeted scalp support.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              Hair mesotherapy may help by:
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Droplets className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Delivering nutrients closer to the follicles
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Wind className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Supporting scalp circulation and follicle environment
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Flame className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Helping reduce scalp inflammation in some cases
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Sparkles className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Improving hair quality and thickness over time
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 bg-rose/10 border border-rose/20 rounded-xl"
            >
              <p className="text-brown">
                <span className="font-semibold">Important note:</span> research
                is still growing. Some studies show promising results, but
                protocols vary widely. A systematic review notes mesotherapy is
                used in alopecia, but it is not FDA-approved, and local
                reactions can happen. So we keep expectations realistic and
                plans personalised.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Competitor Review - Page 3 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              What top Kuala Lumpur clinics usually highlight (competitor
              review)
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-6">
              When you look at leading KL and Malaysia pages for hair
              mesotherapy, you will see the same themes repeated:
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4 mb-6">
              <div className="p-5 bg-light rounded-xl border-l-4 border-wine">
                <h3 className="font-semibold text-brown mb-2">
                  1. "Vitamin cocktail" messaging
                </h3>
                <p className="text-taupe">
                  Many clinics describe a blend of vitamins, minerals, amino
                  acids, and nutrients injected into the scalp.
                </p>
              </div>

              <div className="p-5 bg-light rounded-xl border-l-4 border-wine">
                <h3 className="font-semibold text-brown mb-2">
                  2. A session-based plan, not a one-time fix
                </h3>
                <p className="text-taupe">
                  A common recommendation is multiple sessions, often around 4
                  sessions or more, then maintenance.
                </p>
              </div>

              <div className="p-5 bg-light rounded-xl border-l-4 border-wine">
                <h3 className="font-semibold text-brown mb-2">
                  3. Minimal downtime
                </h3>
                <p className="text-taupe">
                  Many clinics advise simple aftercare like avoiding shampoo for
                  about 24 hours.
                </p>
              </div>

              <div className="p-5 bg-light rounded-xl border-l-4 border-wine">
                <h3 className="font-semibold text-brown mb-2">
                  4. Price ranges vary a lot in KL
                </h3>
                <p className="text-taupe">
                  Some KL guides list scalp mesotherapy around RM 600-RM 2,000
                  per session.
                </p>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown font-semibold"
            >
              At Nexus Clinic Kuala Lumpur, we follow the same core truth, but
              with a stronger emphasis on doctor-led planning and suitability
              checks.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who Is Hair Mesotherapy Best For - Pages 3-4 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              Who is hair mesotherapy best for?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-6">
              Hair mesotherapy in Malaysia is commonly chosen by people who:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            >
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Check className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Have early to moderate thinning
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Check className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">Want a non-surgical approach</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Check className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Are seeing more shedding than usual
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Check className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Want to improve overall hair quality and scalp condition
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg md:col-span-2">
                <Check className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Have a family history of hair loss and want prevention support
                </span>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg text-taupe">
              It can also support people combining treatments, like PRP or
              medical hair loss plans, depending on diagnosis.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who Should Avoid It - Page 4 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              Who should avoid it, or get medical clearance first?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              Not everyone is a good candidate.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              You should tell your doctor if you have:
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-4 bg-light rounded-lg border-l-4 border-rose">
                <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                <span className="text-brown">
                  Scalp infection, active inflammation, or open wounds
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-light rounded-lg border-l-4 border-rose">
                <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                <span className="text-brown">
                  A history of allergy to injectable ingredients
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-light rounded-lg border-l-4 border-rose">
                <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                <span className="text-brown">
                  Bleeding disorders or you are on blood thinners
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-light rounded-lg border-l-4 border-rose">
                <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                <span className="text-brown">
                  Uncontrolled diabetes or major medical conditions
                </span>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              Some clinics specifically warn that anticoagulants and certain
              health issues may not be suitable for mesotherapy.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown font-semibold"
            >
              At Nexus Clinic KL, your plan should start with assessment, not
              assumptions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Happens During Treatment - Pages 4-5 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              What happens during hair mesotherapy at Nexus Clinic KL?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-6">
              A typical visit is simple.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wine rounded-full flex items-center justify-center text-light font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown mb-2">
                    Scalp and hair assessment
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wine rounded-full flex items-center justify-center text-light font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown mb-2">
                    Comfort steps
                  </h3>
                  <p className="text-taupe">
                    A local anaesthetic or numbing approach may be used. Nexus
                    notes discomfort is usually minimal and tolerable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wine rounded-full flex items-center justify-center text-light font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown mb-2">
                    Micro-injections across targeted areas
                  </h3>
                  <p className="text-taupe">
                    Small injections are placed across thinning zones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wine rounded-full flex items-center justify-center text-light font-bold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown mb-2">
                    Aftercare guidance
                  </h3>
                  <p className="text-taupe">
                    You will receive simple do and don't instructions.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How Many Sessions - Page 5 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              How many sessions do you need?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              There is no single number for everyone.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              Nexus Clinic's general guidance:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-6 rounded-xl mb-4"
            >
              <p className="text-xl text-brown mb-2">
                Initial series: often 4-6 sessions
              </p>
              <p className="text-xl text-brown">
                Maintenance: every 1-3 months
              </p>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg text-taupe">
              This depends on whether your hair loss is:
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-4 space-y-2">
              <div className="flex items-center gap-3 p-3 bg-light rounded-lg">
                <Minus className="w-4 h-4 text-wine" />
                <span className="text-brown">Mostly shedding</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-light rounded-lg">
                <Minus className="w-4 h-4 text-wine" />
                <span className="text-brown">Mostly pattern thinning</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-light rounded-lg">
                <Minus className="w-4 h-4 text-wine" />
                <span className="text-brown">
                  Mixed with scalp irritation or inflammation
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* When Will You See Results - Pages 5-6 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              When will you see results?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-6">
              Hair growth moves slowly. That is normal.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-cream rounded-lg">
                <span className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-light font-bold">
                  1
                </span>
                <span className="text-brown">Less shedding</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-cream rounded-lg">
                <span className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-light font-bold">
                  2
                </span>
                <span className="text-brown">
                  Better texture and thickness feel
                </span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-cream rounded-lg">
                <span className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-light font-bold">
                  3
                </span>
                <span className="text-brown">
                  Denser look in photos and styling
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Benefits - Page 6 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              Benefits of hair mesotherapy
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              People often choose it because it can:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-start gap-3 p-4 bg-light rounded-lg">
                <Heart className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Support healthier scalp environment
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-light rounded-lg">
                <Sparkles className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Improve hair quality and thickness gradually
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-light rounded-lg">
                <Clock className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Fit into a busy KL schedule (no surgery, short sessions)
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-light rounded-lg">
                <Zap className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Combine well with PRP or medical plans when needed
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Downsides and Limitations - Pages 6-7 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              Downsides and limitations (honest talk)
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-6">
              Hair mesotherapy is not magic.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              Possible limitations:
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg border-l-4 border-rose">
                <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                <span className="text-brown">
                  It needs consistency (sessions matter)
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg border-l-4 border-rose">
                <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                <span className="text-brown">
                  It works best when follicles are still active
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg border-l-4 border-rose">
                <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                <span className="text-brown">
                  It may not fix fully bald, shiny areas
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg border-l-4 border-rose">
                <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                <span className="text-brown">
                  Results vary by genetics, hormones, and scalp health
                </span>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg text-taupe">
              Also, medical literature notes mesotherapy for alopecia has mixed
              evidence, and local side effects can occur.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Side Effects and Safety - Page 7 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              Side effects and safety
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              Most side effects are mild and short.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              Nexus lists possible effects like:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6"
            >
              <div className="p-3 bg-light rounded-lg text-brown">Redness</div>
              <div className="p-3 bg-light rounded-lg text-brown">Swelling</div>
              <div className="p-3 bg-light rounded-lg text-brown">
                Tenderness at injection sites
              </div>
              <div className="p-3 bg-light rounded-lg text-brown">
                These typically settle within a few days.
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              Like any injection-based procedure, risks can include infection or
              allergic reaction. Nexus also highlights this, and stresses
              choosing a reputable provider.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-taupe">
              A clinical review also notes possible local reactions such as
              pain, itching, edema, hematoma, folliculitis, and rare
              inflammatory complications.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown font-semibold mt-4"
            >
              This is why sterile technique and medical oversight matter.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Aftercare - Page 7 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              Aftercare: what to do and avoid
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              Keep it easy for the first day.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              Common guidance includes:
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-3 mb-4">
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Check className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Avoid shampoo or chemical products for about 24 hours
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Check className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Skip saunas and very hot showers for 24 hours
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Check className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Avoid heavy sweating for the rest of the day
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Check className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Do not scratch injection sites
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Check className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Follow any clinic-specific scalp products plan
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cost - Page 8 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              Cost of hair mesotherapy in Kuala Lumpur and Malaysia
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              Prices vary based on:
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-2 mb-4">
              <div className="flex items-start gap-3 p-3 bg-light rounded-lg">
                <Minus className="w-4 h-4 text-wine shrink-0 mt-1" />
                <span className="text-brown">Clinic location in KL</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-light rounded-lg">
                <Minus className="w-4 h-4 text-wine shrink-0 mt-1" />
                <span className="text-brown">Ingredients used</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-light rounded-lg">
                <Minus className="w-4 h-4 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Number of sessions in your package
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-light rounded-lg">
                <Minus className="w-4 h-4 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Whether you combine with PRP or medications
                </span>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              A Kuala Lumpur clinic guide lists scalp mesotherapy around RM
              600-RM 2,000 per session. Another KL listing mentions mesotherapy
              pricing can start around RM 750 and up, depending on the plan.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown font-semibold"
            >
              At Nexus Clinic Kuala Lumpur, the most accurate pricing comes
              after assessment, because your plan should match your cause of
              hair loss.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hair Mesotherapy vs PRP vs Other Treatments - Page 8 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              Hair mesotherapy vs PRP vs other hair loss treatments
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              Here is a simple comparison.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6 mb-6">
              <div className="p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-semibold text-brown mb-3">
                  Mesotherapy vs PRP
                </h3>
                <p className="text-taupe mb-2">
                  Mesotherapy: nutrients or active agents injected into the
                  scalp
                </p>
                <p className="text-taupe mb-2">
                  PRP: uses your own platelet-rich plasma and growth factors,
                  injected into the scalp
                </p>
                <p className="text-taupe">
                  Some reviews discuss both as multi-session injection
                  approaches and note research quality varies.
                </p>
              </div>

              <div className="p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-semibold text-brown mb-3">
                  Mesotherapy vs Minoxidil
                </h3>
                <p className="text-taupe mb-2">
                  Minoxidil: widely used topical treatment; FDA-approved for
                  female pattern hair loss in published dermatology literature
                </p>
                <p className="text-taupe">
                  Mesotherapy: aims for local delivery, but evidence and
                  protocols vary, and it is not FDA-approved for alopecia
                </p>
              </div>

              <div className="p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-semibold text-brown mb-3">
                  Mesotherapy vs hair transplant
                </h3>
                <p className="text-taupe">
                  If you have large bald areas, a transplant may be the better
                  option. Mesotherapy is often for thinning and early loss, not
                  full restoration.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Areas We Can Target - Page 9 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              Areas we can target
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              Hair mesotherapy can be planned around your pattern, such as:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
            >
              <div className="p-4 bg-light rounded-lg text-brown">
                Hairline thinning
              </div>
              <div className="p-4 bg-light rounded-lg text-brown">
                Temple recession
              </div>
              <div className="p-4 bg-light rounded-lg text-brown">
                Crown thinning
              </div>
              <div className="p-4 bg-light rounded-lg text-brown">
                Diffuse thinning across the scalp
              </div>
              <div className="p-4 bg-light rounded-lg md:col-span-2 text-brown">
                Overall scalp quality support
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown font-semibold"
            >
              Your plan should match what your scalp is actually doing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Nexus Clinic - Pages 9-10 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-6"
            >
              Why choose Nexus Clinic Kuala Lumpur for hair mesotherapy?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-6">
              Because hair loss is not just cosmetic. It is medical and
              personal.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              At Nexus Clinic KL, you get:
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Shield className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  MOH registered and compliant clinic, with doctor-led care
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <FileText className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Evidence-based planning, including risks and alternatives
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <Users className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Hair restoration options like PRP and mesotherapy under one
                  roof
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <MapPin className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Central KL location at Wisma UOA II, Jalan Pinang
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-wine text-light rounded-xl"
            >
              <p className="text-xl mb-2">Visit Nexus Clinic Kuala Lumpur</p>
              <p className="mb-2">
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> 016-702 5699 / 03-2163 5699
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Pages 10-12 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-brown mb-8"
            >
              FAQs (People Also Ask style)
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-8">
              These are the questions people most commonly search before
              booking.
            </motion.p>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-brown mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-wine" /> Does hair
                  mesotherapy really work for hair loss?
                </h3>
                <p className="text-taupe">
                  It can help, especially for early thinning. It delivers
                  nutrients directly to the scalp and may support follicle
                  function. Results are usually gradual. Many people notice
                  changes within weeks to a few months, but most need multiple
                  sessions. Evidence in studies is mixed because formulas and
                  techniques differ. A clinical review notes promising outcomes
                  in some trials, but also highlights limitations and
                  variability.
                </p>
              </motion.div>

              {/* FAQ 2 */}
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-brown mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-wine" /> How many hair
                  mesotherapy sessions do I need?
                </h3>
                <p className="text-taupe">
                  Most plans start with a short series. Nexus Clinic notes an
                  initial series of around 4-6 sessions, followed by maintenance
                  every 1-3 months depending on your case. If hair loss is
                  active, you may need more structured follow-ups. If it is
                  stable, maintenance can be less frequent.
                </p>
              </motion.div>

              {/* FAQ 3 */}
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-brown mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-wine" /> Is hair
                  mesotherapy painful?
                </h3>
                <p className="text-taupe">
                  Most people describe it as mild pinching or pressure. Nexus
                  Clinic notes discomfort is typically minimal because a local
                  anaesthetic is applied, and the procedure is usually
                  tolerable. If you are sensitive, tell the doctor so comfort
                  steps can be adjusted.
                </p>
              </motion.div>

              {/* FAQ 4 */}
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-brown mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-wine" /> What are the side
                  effects of scalp mesotherapy?
                </h3>
                <p className="text-taupe">
                  Most side effects are mild, like redness, swelling, or
                  tenderness at injection sites. These usually settle within a
                  few days. Like any injection procedure, there is a small risk
                  of infection or allergic reaction. Medical literature also
                  lists possible local reactions such as pain, itching, edema,
                  or folliculitis, and rare inflammatory issues.
                </p>
              </motion.div>

              {/* FAQ 5 */}
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-brown mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-wine" /> How long does it
                  take to see results?
                </h3>
                <p className="text-taupe">
                  Expect gradual change, not overnight growth. Nexus Clinic
                  states you may notice better quality and thickness within
                  weeks to a few months, and results often need multiple
                  sessions. Some clinics also note results may take around 2–3
                  months to become noticeable.
                </p>
              </motion.div>

              {/* FAQ 6 */}
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-brown mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-wine" /> Can I wash my
                  hair after mesotherapy?
                </h3>
                <p className="text-taupe">
                  Many clinics advise waiting about 24 hours before shampooing.
                  This helps keep the scalp calm and reduces irritation. Your
                  doctor will also advise on products to use or avoid,
                  especially if your scalp is sensitive.
                </p>
              </motion.div>

              {/* FAQ 7 */}
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-brown mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-wine" /> Is hair
                  mesotherapy safe in Malaysia?
                </h3>
                <p className="text-taupe">
                  When done by qualified medical professionals in a reputable
                  clinic, it is generally considered safe. Nexus Clinic also
                  notes safety depends on proper administration and choosing a
                  licensed provider. Still, like any procedure, there are risks
                  such as infection or allergy.
                </p>
              </motion.div>

              {/* FAQ 8 */}
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-brown mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-wine" /> Who is a good
                  candidate for hair mesotherapy?
                </h3>
                <p className="text-taupe">
                  Nexus Clinic notes it can suit people with hair thinning, hair
                  loss, or scalp conditions like alopecia, and it can also be
                  used as a preventive measure for those with a family history.
                  It is usually best when follicles are still alive and
                  producing hair, even if thinner.
                </p>
              </motion.div>

              {/* FAQ 9 */}
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-brown mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-wine" /> Is mesotherapy
                  better than PRP for hair?
                </h3>
                <p className="text-taupe">
                  It depends on your scalp and your goal. PRP uses your own
                  platelet-rich plasma and is often chosen for regenerative
                  support. Mesotherapy focuses on delivering nutrients or
                  actives into the scalp. Some people do best with a combined
                  plan, guided by diagnosis.
                </p>
              </motion.div>

              {/* FAQ 10 */}
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-brown mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-wine" /> How much does
                  scalp mesotherapy cost in Kuala Lumpur?
                </h3>
                <p className="text-taupe">
                  Costs vary by clinic and session plan. One KL guide lists
                  scalp mesotherapy around RM 600-RM 2,000 per session. Other KL
                  listings suggest pricing may start around RM 750 and up
                  depending on package and needs. The best estimate comes after
                  an assessment.
                </p>
              </motion.div>

              {/* FAQ 11 */}
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-brown mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-wine" /> Is mesotherapy
                  approved for hair loss?
                </h3>
                <p className="text-taupe">
                  Mesotherapy is used in many clinics for hair loss, but medical
                  literature notes it is not FDA-approved for alopecia, and
                  research results vary. That does not mean it cannot help. It
                  means you should choose it with informed expectations and
                  proper medical oversight.
                </p>
              </motion.div>

              {/* FAQ 12 */}
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-brown mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-wine" /> Can hair
                  mesotherapy help with dandruff or scalp issues?
                </h3>
                <p className="text-taupe">
                  Some clinic explanations mention improved scalp health and
                  circulation, which can support a healthier scalp environment.
                  If dandruff is driven by dermatitis or inflammation, you may
                  need a targeted scalp treatment plan as well.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Page 12 */}
      <section className="py-20 bg-wine">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-georgia text-light mb-6"
          >
            Ready to treat hair loss in Kuala Lumpur?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-cream mb-8 max-w-3xl mx-auto"
          >
            If you are searching for hair mesotherapy in Malaysia, the first
            step is a proper assessment. At Nexus Clinic Kuala Lumpur, you get
            doctor-led planning, clear expectations, and a treatment plan that
            fits your scalp and your lifestyle.
          </motion.p>

          <motion.button
            variants={scaleIn}
            className="px-10 py-5 bg-light text-wine rounded-full font-semibold text-lg hover:bg-cream transition-colors duration-300 shadow-2xl"
          >
            Book Your Assessment Today
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default HairMesotherapyLanding;
