"use client";

import { motion } from "framer-motion";
import {
  Shield,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Droplets,
  Zap,
  Calendar,
  Award,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  FileText,
  Leaf,
  Layers,
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

const HairLossTreatment = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "hair/hairLoss");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-hair-loss-treatment1.webp",
      after: "/images/B&A-hair/B&A-hair-loss-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-hair-loss-treatment2.webp",
      after: "/images/B&A-hair/B&A-hair-loss-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-hair-loss-treatment3.webp",
      after: "/images/B&A-hair/B&A-hair-loss-treatment3.webp",
    },
  ];

  // Quick stats data
  const trustStats = [
    { icon: <Calendar className="w-5 h-5" />, text: "Founded in 2001" },
    { icon: <MapPin className="w-5 h-5" />, text: "KL's Golden Triangle" },
    { icon: <Award className="w-5 h-5" />, text: "MOH-licensed doctors" },
  ];

  // Quick answers data
  const quickAnswers = [
    {
      q: "Can hair loss be treated?",
      a: "Yes. Many types can be slowed, improved, or managed, depending on the cause.",
    },
    {
      q: "What works best for genetic hair loss?",
      a: "First-line options often include minoxidil and, for many men, finasteride under medical advice.",
    },
    {
      q: "When do results show?",
      a: "Most treatments need at least 3 to 6 months of consistency before visible change.",
    },
    {
      q: "Do clinic treatments help?",
      a: "Options like PRP, laser, and transplant can help selected patients when matched to the right hair loss type.",
    },
  ];

  // Hair loss types data
  const hairLossTypes = [
    {
      title: "Pattern hair loss",
      desc: "Male and female pattern hair loss - the most common type, typically gradual and genetic.",
    },
    {
      title: "Telogen effluvium",
      desc: "Stress shedding triggered by high stress, fever, illness, major weight loss, childbirth, or low nutrients.",
    },
    {
      title: "Alopecia areata",
      desc: "Patchy hair loss appearing as round patches. Can be self-limited but needs proper diagnosis.",
    },
    {
      title: "Traction hair loss",
      desc: "Caused by tight hairstyles pulling hair over time. Edges and temples often suffer first.",
    },
    {
      title: "Scarring hair loss",
      desc: "Requires early specialist care. The goal is to stop damage quickly.",
    },
  ];

  // Treatment options data
  const treatmentOptions = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Minoxidil",
      desc: "A core option for many people with early pattern hair loss. Requires months of consistent use.",
      details: [
        "Need months of consistent use",
        "Must continue to keep benefits",
        "May cause scalp irritation",
        "Early shedding can happen",
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Finasteride",
      desc: "Mainly for men, prescription only. Requires real counseling and follow-up.",
      details: [
        "Sexual side effects possible",
        "Rare mood changes reported",
        "Medical supervision required",
        "Not a casual supplement",
      ],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "PRP Hair Treatment",
      desc: "Uses your own platelet-rich plasma injected into the scalp. Widely marketed in Malaysia.",
      details: [
        "Best for early thinning",
        "Helps crown thinning",
        "Post-partum thinning (after review)",
        "3-4 sessions, then maintenance",
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Low-level Laser Therapy",
      desc: "Light-based therapy as part of hair loss programs. Positioned as supportive, not magic.",
      details: [
        "Supportive treatment",
        "Best combined with core plan",
        "Non-invasive",
        "Regular sessions needed",
      ],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Hair Fillers & Mesotherapy",
      desc: "Scalp injectables and boosters used as add-ons for selected patients.",
      details: [
        "Add-on treatments",
        "Must match your hair loss type",
        "Clinic-based procedure",
        "Results vary by case",
      ],
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Advanced Options",
      desc: "Regenerative options like stem cell or exosomes. Evolving areas of treatment.",
      details: [
        "Ask about evidence",
        "Check safety and downtime",
        "Realistic expectations",
        "No pressure consultation",
      ],
    },
  ];

  // Timeline data
  const timeline = [
    {
      month: "Month 1",
      desc: "Feel hopeful, then impatient. Some notice less shedding first.",
    },
    {
      month: "Months 2-3",
      desc: "May see small improvements. Photos help, daily mirror checks can lie.",
    },
    {
      month: "Months 3-6",
      desc: "Real change becomes visible if the plan suits you.",
    },
    {
      month: "Month 9+",
      desc: "Results look more settled, especially with transplant or combined programs.",
    },
  ];

  // FAQ data
  const faqs = [
    {
      q: "Can hair loss be reversed naturally?",
      a: "Sometimes. If hair loss is linked to a temporary trigger like stress or mild nutrient issues, it may improve. Genetic pattern loss usually needs medical treatment for real change.",
    },
    {
      q: "What is the most effective hair loss treatment?",
      a: "It depends on the cause. For pattern hair loss, common first-line options include minoxidil and, for many men, finasteride with medical guidance.",
    },
    {
      q: "How long does it take to see results from hair loss treatment?",
      a: "Many clinics and medical sources note it can take 3 to 6 months to see visible change, sometimes longer.",
    },
    {
      q: "Is PRP good for hair loss?",
      a: "PRP is widely used for thinning hair and early-stage loss in many clinics. Protocols vary, and results vary, so assessment matters.",
    },
    {
      q: "How many PRP sessions do I need?",
      a: "Many clinic FAQs commonly recommend 3 to 4 sessions spaced 4 to 6 weeks apart, then maintenance.",
    },
    {
      q: "What are PRP side effects for hair?",
      a: "Most reported effects are temporary, like tenderness, redness, or swelling at injection points.",
    },
    {
      q: "Is finasteride safe for hair loss?",
      a: "Finasteride is used for male pattern hair loss but can have sexual and mood-related side effects. Regulators have also issued reminders about psychiatric risks. Discuss risks properly before starting.",
    },
    {
      q: "Does minoxidil regrow hair?",
      a: "It can help early hair loss and may slow loss or support regrowth, but it will not restore an entire head of hair. It needs consistent use for months.",
    },
    {
      q: "What happens if I stop minoxidil?",
      a: "Benefits often fade after stopping, which is why it is usually a long-term plan if it works for you.",
    },
    {
      q: "What causes hair loss in women?",
      a: "Common causes include female pattern hair loss, stress shedding, nutritional issues, and hormonal factors. A proper diagnosis avoids wasted time.",
    },
    {
      q: "Can stress cause hair loss?",
      a: "Yes. Stress is listed as a risk factor for hair loss and can trigger shedding patterns in some people.",
    },
    {
      q: "When do I need a hair transplant?",
      a: "When follicles are no longer active in an area, a transplant may be considered. Many Malaysia sources cite typical transplant cost ranges around RM 6,000 to RM 15,000 depending on grafts.",
    },
    {
      q: "How much does hair loss treatment cost in Malaysia?",
      a: "PRP session pricing is commonly listed in the hundreds to a few thousand RM per session. Transplant costs are usually higher and depend on grafts. The right number depends on your plan.",
    },
  ];

  return (
    <div className="min-h-screen bg-light font-inter">
      {/* Hero Section - SEMUA KATA dari Page 1 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="relative overflow-hidden bg-linear-to-br from-cream via-light to-rose/5"
      >
        <div className="absolute inset-0 bg-glass backdrop-blur-3xl" />
        <div className="container relative px-4 py-20 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="space-y-8"
            >
              <h1 className="font-georgia text-5xl lg:text-5xl leading-tight text-brown">
                Hair Loss Treatment in Kuala Lumpur, Malaysia
              </h1>

              <p className="text-xl text-rose font-georgia">
                Real solutions for thinning hair at Nexus Clinic Kuala Lumpur
              </p>

              <div className="space-y-4">
                <h2 className="font-georgia text-2xl text-brown">
                  Your hair is not "just hair." It is how you show up.
                </h2>
                <p className="text-lg text-taupe leading-relaxed">
                  If your hair is thinning, we get it. It can feel personal. At
                  Nexus Clinic Kuala Lumpur, we build a plan that fits your hair
                  type, your lifestyle, and your goals.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 space-y-3">
                <h3 className="font-georgia text-xl text-brown">
                  Trust at a glance
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-taupe">
                    <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>
                      Founded in 2001 and based in KL's Golden Triangle area.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-taupe">
                    <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>
                      Clinic address: LG 10, Lower Ground Floor, Wisma UOA II,
                      Jalan Pinang, Kuala Lumpur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-taupe">
                    <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>
                      Direct contact: phone numbers and email listed by Nexus
                      Clinic.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { x: 50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-linear-to-tr from-wine/20 to-rose/20 rounded-3xl" />
                <img
                  src="/images/hair/hair-loss-treatment.webp"
                  alt="Hair loss consultation at Nexus Clinic Kuala Lumpur"
                  className="relative z-10 object-cover w-full h-full rounded-3xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Quick Answers Section - dari Page 1 */}
          <motion.div
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h3 className="font-georgia text-2xl text-brown mb-6 text-center">
              Quick answers (so you do not have to scroll forever)
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-white rounded-xl">
                <p className="text-brown font-medium mb-2">
                  Can hair loss be treated?
                </p>
                <p className="text-taupe text-sm">
                  Yes. Many types can be slowed, improved, or managed, depending
                  on the cause.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl">
                <p className="text-brown font-medium mb-2">
                  What works best for genetic hair loss?
                </p>
                <p className="text-taupe text-sm">
                  First-line options often include minoxidil and, for many men,
                  finasteride under medical advice.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl">
                <p className="text-brown font-medium mb-2">
                  When do results show?
                </p>
                <p className="text-taupe text-sm">
                  Most treatments need at least 3 to 6 months of consistency
                  before visible change.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl">
                <p className="text-brown font-medium mb-2">
                  Do clinic treatments help?
                </p>
                <p className="text-taupe text-sm">
                  Options like PRP, laser, and transplant can help selected
                  patients when matched to the right hair loss type.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 2 Content - SEMUA KATA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-white"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-taupe mb-4">
              1. They list a "menu" of solutions (medications, PRP, laser,
              transplant).
            </p>
            <p className="text-taupe mb-4">
              2. They push early action (treat thinning early, not when it is
              fully bald).
            </p>
            <p className="text-taupe mb-4">
              3. They promise a timeline (usually "a few months," sometimes
              longer).
            </p>
            <p className="text-taupe mb-4">
              4. They use FAQs to answer real search questions (cost, results,
              side effects, sessions).
            </p>
            <p className="text-taupe mb-4">
              5. They highlight credibility (MOH-licensed doctors, reviews,
              verified listings).
            </p>
            <p className="text-wine font-medium mt-6">
              That is useful, but it also hides the real point. Your best
              treatment depends on your hair loss type. Not the trend.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto mt-12"
          >
            <h2 className="font-georgia text-3xl text-brown mb-4">
              Hair loss in Malaysia: why it happens (in plain words)
            </h2>
            <p className="text-taupe mb-4">
              Hair loss is not one single condition. It is a symptom with many
              causes.
            </p>
            <p className="text-taupe mb-4">
              Some people lose hair slowly over years. Some people shed suddenly
              after stress, illness, weight loss, or low iron. Some people get
              patchy hair loss that comes and goes.
            </p>
            <p className="text-wine font-georgia text-xl mt-6">
              The right treatment starts with one question: What type of hair
              loss is this?
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 2-3: Common Types of Hair Loss */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-cream"
      >
        <div className="container px-4 mx-auto flex flex-col justify-center items-center">
          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="font-georgia text-3xl text-brown mb-8"
          >
            Common types of hair loss we see in clinic
          </motion.h2>

          <div className="space-y-6 max-w-4xl">
            <motion.div
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="p-6 bg-white rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-2">
                1) Pattern hair loss (male and female pattern)
              </h3>
              <p className="text-taupe">
                Pattern hair loss (male and female pattern) - the most common
                type of hair loss, typically gradual and genetic.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="p-6 bg-white rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-2">
                2) Telogen effluvium (stress shedding)
              </h3>
              <p className="text-taupe mb-3">
                Hair sheds more than usual, often after:
              </p>
              <ul className="list-disc pl-6 text-taupe space-y-1">
                <li>high stress</li>
                <li>fever or illness</li>
                <li>major weight loss</li>
                <li>childbirth</li>
                <li>low nutrients</li>
              </ul>
              <p className="text-taupe mt-3">
                This type can improve when the trigger is addressed.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="p-6 bg-white rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-2">
                3) Alopecia areata (patchy hair loss)
              </h3>
              <p className="text-taupe">
                This often appears as round patches of loss. It can be
                self-limited, but needs proper diagnosis.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="p-6 bg-white rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-2">
                4) Traction hair loss
              </h3>
              <p className="text-taupe">
                Hair is pulled over time by tight hairstyles. Edges and temples
                often suffer first.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="p-6 bg-white rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-2">
                5) Scarring hair loss
              </h3>
              <p className="text-taupe">
                This needs early specialist care. The goal is to stop damage
                fast.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Page 3-4: Assessment Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-white"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-georgia text-3xl text-brown mb-4">
              How we assess hair loss at Nexus Clinic Kuala Lumpur
            </h2>
            <p className="text-taupe text-lg mb-6">
              A good consult is not a sales talk. It is a clear check of what is
              happening.
            </p>
            <p className="text-brown font-medium mb-4">
              A typical assessment includes:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-cream rounded-xl">
                <p className="text-taupe">
                  1) Daily foundations (simple, but important)
                </p>
                <p className="text-taupe mt-2">
                  These do not replace medical treatment, but they support
                  results.
                </p>
                <ul className="list-disc pl-6 mt-2 text-taupe">
                  <li>Gentle scalp hygiene</li>
                  <li>Avoid tight hairstyles and harsh pulling</li>
                  <li>Sleep and stress care</li>
                  <li>Protein and iron support (if low)</li>
                </ul>
                <p className="text-wine mt-2">
                  If hair loss is sudden, this foundation matters even more.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 4-5: Minoxidil Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-cream"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-georgia text-3xl text-brown mb-4">
              2) Minoxidil (a core option for many people)
            </h2>
            <p className="text-taupe mb-4">
              Minoxidil is widely used for early pattern hair loss. Dermatology
              guidance notes it can help early loss, but it does not regrow a
              full head of hair.
            </p>

            <h3 className="font-georgia text-xl text-brown mb-3">
              What to expect:
            </h3>
            <ul className="list-disc pl-6 mb-4 text-taupe">
              <li>You need months of consistent use</li>
              <li>
                If it helps, you usually need to continue to keep benefits
              </li>
            </ul>

            <h3 className="font-georgia text-xl text-brown mb-3">
              Common issues:
            </h3>
            <ul className="list-disc pl-6 text-taupe">
              <li>scalp irritation (some people)</li>
              <li>shedding early on can happen</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 5: Finasteride Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-white"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-georgia text-3xl text-brown mb-4">
              3) Finasteride (mainly for men, prescription)
            </h2>
            <p className="text-taupe mb-4">
              Finasteride is commonly prescribed for male pattern hair loss
              under medical supervision.
            </p>

            <h3 className="font-georgia text-xl text-brown mb-3">
              What patients should know:
            </h3>
            <ul className="list-disc pl-6 mb-4 text-taupe">
              <li>Side effects can include sexual side effects</li>
              <li>
                Rare mood changes and serious warnings have been highlighted by
                regulators
              </li>
            </ul>

            <p className="text-wine font-medium">
              This is why we do not treat it like a casual supplement. It needs
              real counselling and follow-up.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 5-6: PRP Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-cream"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-georgia text-3xl text-brown mb-4">
              4) PRP hair treatment (clinic-based support for thinning)
            </h2>
            <p className="text-taupe mb-4">
              PRP uses your own platelet-rich plasma, injected into the scalp.
              It is widely marketed in Malaysia for thinning hair.
            </p>

            <h3 className="font-georgia text-xl text-brown mb-3">
              Who may benefit most:
            </h3>
            <ul className="list-disc pl-6 mb-4 text-taupe">
              <li>early thinning</li>
              <li>crown thinning</li>
              <li>post-partum thinning (after medical review)</li>
              <li>as support after transplant (selected cases)</li>
            </ul>

            <p className="text-taupe">
              3 to 4 sessions spaced 4 to 6 weeks apart, then maintenance
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 6: LLLT Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-white"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-georgia text-3xl text-brown mb-4">
              5) Low-level laser therapy (LLLT) and photomodulation
            </h2>
            <p className="text-taupe mb-4">
              Many KL clinics list laser or light-based therapy as part of hair
              loss programs. These are usually positioned as supportive, not
              magic.
            </p>
            <p className="text-taupe">
              They may help some people, especially when combined with a core
              plan.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 6: Hair Fillers Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-cream"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-georgia text-3xl text-brown mb-4">
              6) Hair fillers, mesotherapy, and scalp injectables
            </h2>
            <p className="text-taupe mb-4">
              Some clinics in KL offer "hair fillers" or scalp boosters. These
              can be used as add-ons for selected patients.
            </p>
            <p className="text-wine font-medium">
              The key is not the label. The key is whether your hair loss type
              fits that approach.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 6: Advanced Options Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-white"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-georgia text-3xl text-brown mb-4">
              7) Advanced options you may see in Malaysia (stem cell, exosomes)
            </h2>
            <p className="text-taupe mb-4">
              You will see more clinics in KL listing regenerative options like
              stem cell or exosomes. These are evolving areas.
            </p>

            <h3 className="font-georgia text-xl text-brown mb-3">
              If you are considering them, ask:
            </h3>
            <ul className="list-disc pl-6 mb-4 text-taupe">
              <li>What evidence supports it for my diagnosis?</li>
              <li>What is the safety and downtime?</li>
              <li>What results are realistic for my stage?</li>
            </ul>

            <p className="text-wine">
              A good clinic will answer without pressure.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 7: Hair Transplant Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-cream"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-georgia text-3xl text-brown mb-4">
              8) Hair transplant for advanced loss (when hair is gone)
            </h2>
            <p className="text-taupe mb-4">
              If follicles are no longer active in an area, topical solutions
              may not fill it. That is when transplant becomes a serious option.
            </p>
            <p className="text-taupe mb-4">
              Many Malaysia cost guides commonly show hair transplant ranges
              around:
            </p>
            <p className="text-2xl text-wine font-georgia mb-2">
              - RM 6,000 to RM 15,000 (often depending on grafts and method)
            </p>
            <p className="text-taupe mb-4">
              Transplant is not always "one and done."
            </p>
            <p className="text-taupe">
              You may still need maintenance for native hair.
            </p>
            <p className="text-taupe mt-2">
              You may still need maintenance for native hair.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 7: Timeline Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-white"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-georgia text-3xl text-brown mb-4">
              What does hair loss treatment feel like over time?
            </h2>
            <p className="text-taupe mb-6">
              Here is the honest timeline most people experience:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-cream rounded-xl">
                <h3 className="font-georgia text-xl text-brown mb-2">
                  Month 1
                </h3>
                <p className="text-taupe">
                  You feel hopeful, then impatient. Some people notice less
                  shedding first.
                </p>
              </div>
              <div className="p-4 bg-cream rounded-xl">
                <h3 className="font-georgia text-xl text-brown mb-2">
                  Months 2 to 3
                </h3>
                <p className="text-taupe">
                  You may see small improvements. Photos help, because daily
                  mirror checks can lie.
                </p>
              </div>
              <div className="p-4 bg-cream rounded-xl">
                <h3 className="font-georgia text-xl text-brown mb-2">
                  Months 3 to 6
                </h3>
                <p className="text-taupe">
                  This is where many people notice real change, if the plan
                  suits them.
                </p>
              </div>
              <div className="p-4 bg-cream rounded-xl">
                <h3 className="font-georgia text-xl text-brown mb-2">
                  Month 9 onwards
                </h3>
                <p className="text-taupe">
                  Results look more "settled," especially with transplant or
                  combined programs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Page 8: Cost Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-cream"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-georgia text-3xl text-brown mb-4">
              Hair loss treatment cost in Malaysia (realistic ranges)
            </h2>
            <p className="text-taupe mb-4">
              Costs vary by clinic, method, and severity. But these public
              ranges give a helpful baseline:
            </p>

            <div className="space-y-4 mb-6">
              <p className="text-taupe">
                PRP sessions: some Malaysia clinic sources cite around RM 800 to
                RM 2,500 per session.
              </p>
              <p className="text-taupe">
                Hair transplant: many Malaysia guides cite RM 6,000 to RM 15,000
                depending on grafts.
              </p>
              <p className="text-taupe">
                Medication plans: cost varies by product, dose, and follow- up
                needs (best confirmed after assessment).
              </p>
            </div>

            <h3 className="font-georgia text-xl text-brown mb-3">
              A good quote should explain:
            </h3>
            <ul className="list-disc pl-6 text-taupe">
              <li>what is included (sessions, aftercare, reviews)</li>
              <li>what results are realistic</li>
              <li>what maintenance looks like</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 8-9: Matching Guide Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-white"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-georgia text-3xl text-brown mb-4">
              Which treatment is best for you? (simple matching guide)
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-cream rounded-2xl">
                <h3 className="font-georgia text-xl text-brown mb-3">
                  If you are in early thinning
                </h3>
                <p className="text-taupe mb-2">
                  Start with scalp assessment, then consider:
                </p>
                <ul className="list-disc pl-6 text-taupe">
                  <li>minoxidil</li>
                  <li>PRP</li>
                  <li>supportive laser or injectables (if suitable)</li>
                </ul>
              </div>

              <div className="p-6 bg-cream rounded-2xl">
                <h3 className="font-georgia text-xl text-brown mb-3">
                  If you are losing hair fast (shedding)
                </h3>
                <p className="text-taupe mb-2">Rule out triggers first:</p>
                <p className="text-taupe">
                  illness, stress, nutrition, medications
                </p>
              </div>

              <div className="p-6 bg-cream rounded-2xl">
                <h3 className="font-georgia text-xl text-brown mb-3">
                  If your crown is thin and widening
                </h3>
                <p className="text-taupe mb-2">Combination plans are common:</p>
                <p className="text-taupe">
                  medication plus PRP plus supportive therapy
                </p>
              </div>

              <div className="p-6 bg-cream rounded-2xl">
                <h3 className="font-georgia text-xl text-brown mb-3">
                  If the area is bald and smooth
                </h3>
                <p className="text-taupe">
                  Discuss transplant options and long- term maintenance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 9: How to Choose Clinic Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-cream"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-georgia text-3xl text-brown mb-4">
              How to choose a hair loss clinic in Kuala Lumpur
            </h2>
            <p className="text-taupe mb-6">
              Use this checklist when you compare clinics:
            </p>

            <ul className="list-disc pl-6 text-taupe space-y-2">
              <li>Doctor-led diagnosis, not just a package sale</li>
              <li>A clear explanation of your hair loss type</li>
              <li>Before and after results that match your hair type</li>
              <li>Real aftercare plan and follow-ups</li>
              <li>Transparent pricing</li>
            </ul>

            <p className="text-taupe mt-4">
              If you use directories, look for clinics that are listed as
              licensed and verified by medical listing networks.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Pages 10-11: FAQ Section - SEMUA PERTANYAAN */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-white"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-georgia text-3xl text-brown mb-8 text-center">
              People Also Ask (PAA-style FAQs) about hair loss treatment in
              Malaysia
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-cream rounded-xl">
                <p className="text-brown font-medium mb-2">
                  Can hair loss be reversed naturally?
                </p>
                <p className="text-taupe">
                  Sometimes. If hair loss is linked to a temporary trigger like
                  stress or mild nutrient issues, it may improve. Genetic
                  pattern loss usually needs medical treatment for real change.
                </p>
              </div>

              <div className="p-4 bg-cream rounded-xl">
                <p className="text-brown font-medium mb-2">
                  What is the most effective hair loss treatment?
                </p>
                <p className="text-taupe">
                  It depends on the cause. For pattern hair loss, common
                  first-line options include minoxidil and, for many men,
                  finasteride with medical guidance.
                </p>
              </div>

              <div className="p-4 bg-cream rounded-xl">
                <p className="text-brown font-medium mb-2">
                  How long does it take to see results from hair loss treatment?
                </p>
                <p className="text-taupe">
                  Many clinics and medical sources note it can take 3 to 6
                  months to see visible change, sometimes longer.
                </p>
              </div>

              <div className="p-4 bg-cream rounded-xl">
                <p className="text-brown font-medium mb-2">
                  Is PRP good for hair loss?
                </p>
                <p className="text-taupe">
                  PRP is widely used for thinning hair and early-stage loss in
                  many clinics. Protocols vary, and results vary, so assessment
                  matters.
                </p>
              </div>

              <div className="p-4 bg-cream rounded-xl">
                <p className="text-brown font-medium mb-2">
                  How many PRP sessions do I need?
                </p>
                <p className="text-taupe">
                  Many clinic FAQs commonly recommend 3 to 4 sessions spaced 4
                  to 6 weeks apart, then maintenance.
                </p>
              </div>

              <div className="p-4 bg-cream rounded-xl">
                <p className="text-brown font-medium mb-2">
                  What are PRP side effects for hair?
                </p>
                <p className="text-taupe">
                  Most reported effects are temporary, like tenderness, redness,
                  or swelling at injection points.
                </p>
              </div>

              <div className="p-4 bg-cream rounded-xl">
                <p className="text-brown font-medium mb-2">
                  Is finasteride safe for hair loss?
                </p>
                <p className="text-taupe">
                  Finasteride is used for male pattern hair loss but can have
                  sexual and mood-related side effects. Regulators have also
                  issued reminders about psychiatric risks. Discuss risks
                  properly before starting.
                </p>
              </div>

              <div className="p-4 bg-cream rounded-xl">
                <p className="text-brown font-medium mb-2">
                  Does minoxidil regrow hair?
                </p>
                <p className="text-taupe">
                  It can help early hair loss and may slow loss or support
                  regrowth, but it will not restore an entire head of hair. It
                  needs consistent use for months.
                </p>
              </div>

              <div className="p-4 bg-cream rounded-xl">
                <p className="text-brown font-medium mb-2">
                  What happens if I stop minoxidil?
                </p>
                <p className="text-taupe">
                  Benefits often fade after stopping, which is why it is usually
                  a long-term plan if it works for you.
                </p>
              </div>

              <div className="p-4 bg-cream rounded-xl">
                <p className="text-brown font-medium mb-2">
                  What causes hair loss in women?
                </p>
                <p className="text-taupe">
                  Common causes include female pattern hair loss, stress
                  shedding, nutritional issues, and hormonal factors. A proper
                  diagnosis avoids wasted time.
                </p>
              </div>

              <div className="p-4 bg-cream rounded-xl">
                <p className="text-brown font-medium mb-2">
                  Can stress cause hair loss?
                </p>
                <p className="text-taupe">
                  Yes. Stress is listed as a risk factor for hair loss and can
                  trigger shedding patterns in some people.
                </p>
              </div>

              <div className="p-4 bg-cream rounded-xl">
                <p className="text-brown font-medium mb-2">
                  When do I need a hair transplant?
                </p>
                <p className="text-taupe">
                  When follicles are no longer active in an area, a transplant
                  may be considered. Many Malaysia sources cite typical
                  transplant cost ranges around RM 6,000 to RM 15,000 depending
                  on grafts.
                </p>
              </div>

              <div className="p-4 bg-cream rounded-xl">
                <p className="text-brown font-medium mb-2">
                  How much does hair loss treatment cost in Malaysia?
                </p>
                <p className="text-taupe">
                  PRP session pricing is commonly listed in the hundreds to a
                  few thousand RM per session. Transplant costs are usually
                  higher and depend on grafts. The right number depends on your
                  plan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 11: CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="py-16 bg-linear-to-br from-wine to-rose text-white"
      >
        <div className="container px-4 mx-auto text-center">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-georgia text-3xl mb-4">
              Book a hair loss assessment at Nexus Clinic Kuala Lumpur
            </h2>
            <p className="text-lg mb-6 opacity-90">
              If you are tired of guessing, start with a real assessment. We
              will match your hair loss type to the right plan, then track
              progress properly.
            </p>

            <div className="space-y-2 mb-6">
              <p className="font-georgia text-xl">Nexus Clinic Kuala Lumpur</p>
              <p>
                Address: LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang,
                Kuala Lumpur
              </p>
              <p>Contact details listed by Nexus Clinic (phone and email)</p>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href="tel:+60312345678"
                className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
              <a
                href="mailto:info@nexusclinic.my"
                className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 12: SEO Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="py-8 bg-cream hidden"
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center text-taupe">
            <p className="text-sm">SEO extras (optional, website-ready)</p>
            <p className="text-sm mt-2">
              Meta title: Hair Loss Treatment in Kuala Lumpur, Malaysia | Nexus
              Clinic KL
            </p>
            <p className="text-sm">
              Meta description: Struggling with hair thinning or hair fall?
              Explore medical hair loss treatment in Kuala Lumpur at Nexus
              Clinic KL, from PRP to medications and transplant support.
            </p>
            <p className="text-sm mt-1">
              Suggested URL: /hair-loss-treatment-kuala-lumpur/
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HairLossTreatment;
