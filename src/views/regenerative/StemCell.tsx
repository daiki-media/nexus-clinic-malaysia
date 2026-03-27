"use client";

import { motion } from "framer-motion";
import {
  Shield,
  AlertCircle,
  MapPin,
  ChevronRight,
  Droplets,
  Microscope,
  AlertTriangle,
  Sparkles,
  Target,
  FileCheck,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const StemCellLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "stemCell");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-regenerative/B&A-stem-cell-therapy1.webp",
      after: "/images/B&A-regenerative/B&A-stem-cell-therapy1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-regenerative/B&A-stem-cell-therapy2.webp",
      after: "/images/B&A-regenerative/B&A-stem-cell-therapy2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-regenerative/B&A-stem-cell-therapy3.webp",
      after: "/images/B&A-regenerative/B&A-stem-cell-therapy3.webp",
    },
  ];

  const faqs = [
    {
      q: "What is stem cell therapy?",
      a: "A treatment that uses stem cells, or cells derived from them, to repair or replace damaged cells or tissues.",
    },
    {
      q: "What conditions are stem cell treatments proven for?",
      a: "Blood and immune disorders, loss of bone marrow function via blood stem cell transplantation (most established).",
    },
    {
      q: "Is stem cell therapy approved in Malaysia?",
      a: "MOH notes hematopoietic and cord blood stem cell transplantation are most established; other uses are experimental.",
    },
    {
      q: "Why do some clinics offer stem cells for many diseases?",
      a: "ISSCR warns that unproven interventions are widely commercialised without sufficient evidence.",
    },
    {
      q: "Is stem cell therapy safe?",
      a: "No medical treatment is risk-free. Long-term safety can be uncertain; follow-up is important.",
    },
    {
      q: "What are the side effects or risks?",
      a: "Infection, immune reactions, unknown long-term effects. FDA reports serious harms from unapproved products.",
    },
    {
      q: "How many sessions do I need?",
      a: "Depends on condition and protocol. Be cautious if someone promises a fixed number for everyone.",
    },
    {
      q: "How long does it take to see results?",
      a: "Timelines vary. A good clinic defines measurable goals and follow-up points.",
    },
    {
      q: "How much does stem cell therapy cost in Kuala Lumpur?",
      a: "Some clinics start around RM6,000+. Higher ranges for complexity. Always request itemised quote.",
    },
    {
      q: "Where do the stem cells come from?",
      a: "Common sources: cord tissue (Wharton's Jelly), adipose tissue, bone marrow.",
    },
    {
      q: "What should I ask a clinic before I book?",
      a: "Ask for scientific evidence, ethics oversight, regulatory compliance. Be cautious of testimonial-based claims.",
    },
    {
      q: "Are exosome treatments the same as stem cell therapy?",
      a: "No. FDA includes exosomes among unapproved regenerative products broadly marketed.",
    },
  ];
  return (
    <div className="bg-light font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-cream via-light to-rose/10" />

        <div className="absolute top-20 right-0 w-96 h-96 bg-wine/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 relative z-10"
        >
          <div className="max-w-4xl">
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-glass backdrop-blur-sm rounded-full text-brown border border-taupe/20">
                <Shield className="w-4 h-4 text-wine" />
                Nexus Clinic Kuala Lumpur
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-georgia text-brown mb-6 leading-tight"
            >
              Stem Cell Therapy in Malaysia
              <span className="block text-wine mt-2">
                at Nexus Clinic Kuala Lumpur
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-taupe mb-8 leading-relaxed"
            >
              When your body feels "stuck," regenerative care can feel like
              hope. It should also feel safe.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-glass backdrop-blur-sm border border-cream rounded-2xl p-6 md:p-8 max-w-2xl"
            >
              <p className="text-brown/80 text-lg leading-relaxed">
                Stem cell therapy is one of the most searched treatments in
                Kuala Lumpur right now. But the smartest first step is not
                booking a package. It is understanding what's proven, what's
                still experimental, and what a responsible clinic should do
                before treating you.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trust Section - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-georgia text-brown mb-4">
              Trust Section
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="bg-white rounded-2xl p-6 shadow-lg border border-cream"
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-wine shrink-0 mt-1" />
                <div>
                  <h3 className="font-georgia text-brown text-xl mb-2">
                    Central Kuala Lumpur location
                  </h3>
                  <p className="text-taupe mb-3">
                    (KLCC area) Nexus Clinic Kuala Lumpur, LG 10, Lower Ground
                    Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur.
                    Mobile: 016-7025699 / 03-21635699
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white rounded-2xl p-6 shadow-lg border border-cream"
            >
              <div className="flex items-start gap-4">
                <FileCheck className="w-6 h-6 text-wine shrink-0 mt-1" />
                <div>
                  <h3 className="font-georgia text-brown text-xl mb-2">
                    Patient-first and private consultations
                  </h3>
                  <p className="text-taupe mb-3">
                    Safety and compliance mindset: Malaysia's MOH guideline
                    notes that hematopoietic and cord blood stem cell transplant
                    are the most established forms of stem cell therapy, while
                    many other stem cell applications are considered
                    experimental and require proper oversight.
                  </p>
                  <p className="text-taupe">
                    Nexus Clinic states MOH-aligned procedures in its
                    disease-specific stem cell content (example: Parkinson's
                    page).
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Section - with image - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl font-georgia text-brown mb-6">
                What Is Stem Cell Therapy (Simple Explanation)
              </h2>
              <div className="prose prose-lg text-taupe">
                <p className="text-lg leading-relaxed">
                  Stem cells are special cells that can self-renew and can
                  mature into other cell types. Stem cell therapy is any
                  treatment that uses stem cells, or cells derived from them, to
                  repair or replace damaged cells or tissues.
                </p>
                <p className="text-lg leading-relaxed mt-4 font-medium text-brown">
                  That sounds powerful, and it can be. But it is also why stem
                  cell treatment needs stricter rules than most "wellness"
                  services.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-wine/20 to-rose/20 rounded-3xl blur-2xl" />
              <img
                src="/images/regenerative/stem-cell-therapy.webp"
                alt="Stem cell therapy microscopic view"
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Most Important Truth - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <motion.div
            variants={scaleIn}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-rose/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-wine" />
              <h2 className="text-3xl font-georgia text-brown">
                The Most Important Truth
              </h2>
            </div>
            <p className="text-xl text-wine mb-6 font-medium">
              (Before You Spend Money)
            </p>

            <p className="text-brown text-lg mb-4 font-medium">
              Not all "stem cell therapy" is the same.
            </p>

            <div className="space-y-4 text-taupe">
              <p>
                The International Society for Stem Cell Research (ISSCR) makes
                this very clear: proven stem cell treatments are still limited,
                mainly to blood and immune disorders treated via blood stem cell
                transplantation. Many other uses are still experimental and may
                not be proven safe or effective.
              </p>

              <p className="font-medium text-brown">
                Malaysia's Ministry of Health guideline also states:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Hematopoietic stem cell and cord blood transplant are the most
                  established forms of therapy
                </li>
                <li>
                  Other stem cells (including embryonic and somatic) are
                  considered experimental
                </li>
                <li>
                  Animal cell therapies (xenotransplantation) are prohibited
                </li>
              </ul>

              <p className="bg-rose/5 p-4 rounded-xl italic">
                So when clinics market stem cells for many unrelated diseases,
                your best move is to ask: "Is this an established indication, or
                experimental care that should be inside a regulated clinical
                pathway?"
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Types of Stem Cells - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-4"
          >
            Types of Stem Cells You'll Hear About in Malaysia
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12"
          >
            Here are the terms clinics use, explained in normal language:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-wine/10 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-georgia text-xl text-brown mb-3">
                1) Hematopoietic Stem Cells (HSCs)
              </h3>
              <p className="text-taupe">
                These are "blood-forming" stem cells used in bone marrow or
                blood stem cell transplantation. This is the best-established
                form of stem cell therapy globally and is referenced as
                established by both ISSCR and Malaysian guidance.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-rose/10 rounded-lg flex items-center justify-center mb-4">
                <Microscope className="w-6 h-6 text-rose" />
              </div>
              <h3 className="font-georgia text-xl text-brown mb-3">
                2) Mesenchymal Stem Cells (MSCs)
              </h3>
              <p className="text-taupe">
                These are often discussed in regenerative medicine for
                inflammation and tissue repair. Many KL providers focus on MSC
                therapy and frequently mention sources like umbilical cord
                Wharton's Jelly. Important: MSC use for many conditions is still
                an evolving area, and the ISSCR warns against routine commercial
                use of unproven stem cell interventions.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-taupe/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-taupe" />
              </div>
              <h3 className="font-georgia text-xl text-brown mb-3">
                3) Embryonic stem cells and iPS cells
              </h3>
              <p className="text-taupe">
                These exist in scientific research and some clinical trials
                globally, but they are not "routine clinic services." Malaysia's
                guideline treats embryonic stem cell therapy as experimental.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Cell Sources - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-8"
          >
            Where Do the Cells Come From?
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <p className="text-taupe mb-6">
              Different clinics may use different sources. Common sources
              mentioned by Malaysian providers include:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-rose/5 p-4 rounded-lg text-center">
                <p className="font-medium text-brown">Umbilical cord</p>
                <p className="text-sm text-taupe">(Wharton's Jelly)</p>
              </div>
              <div className="bg-rose/5 p-4 rounded-lg text-center">
                <p className="font-medium text-brown">Adipose</p>
                <p className="text-sm text-taupe">(fat tissue)</p>
              </div>
              <div className="bg-rose/5 p-4 rounded-lg text-center">
                <p className="font-medium text-brown">
                  Bone marrow or cord blood
                </p>
                <p className="text-sm text-taupe">
                  (especially for established blood-related transplants)
                </p>
              </div>
            </div>

            <p className="text-brown font-medium mb-3">
              A responsible provider should be transparent about:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-taupe">
              <li>the source</li>
              <li>how the cells are processed</li>
              <li>quality controls</li>
              <li>what regulations or ethics oversight apply</li>
            </ul>
            <p className="mt-4 text-taupe">
              Malaysia's guideline highlights quality and regulatory
              expectations, including oversight and standards for labs and
              imported products.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Proven For Section - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown text-center mb-8"
            >
              What Stem Cell Therapy Is Proven For (Today)
            </motion.h2>

            <motion.div
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 shadow-lg border border-green-200"
            >
              <p className="text-taupe mb-4">
                If we keep it honest and evidence-led, proven applications are
                still a short list.
              </p>
              <p className="text-brown">
                ISSCR states the best-established stem cell treatments are blood
                and immune disorders and loss of bone marrow function, treated
                with blood stem cell transplantation. Malaysia's guideline
                aligns by presenting hematopoietic and cord blood stem cell
                transplantation as the most established.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Being Studied For - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown text-center mb-4"
            >
              What Stem Cell Therapy Is Being Studied For
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-rose text-xl mb-8"
            >
              (High Interest, Mixed Evidence)
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center mb-8"
            >
              This is where most online search happens: joints, autoimmune,
              neuro, metabolic health, "anti-aging."
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 shadow-lg border border-rose/30"
            >
              <p className="text-taupe mb-4">
                Many KL providers market MSC-based therapies for a wide range of
                concerns:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-taupe mb-4">
                <li>
                  MRC Clinic lists areas like diabetes, neurological conditions,
                  and skin health
                </li>
                <li>
                  Cell & Co highlights applications such as heart and kidney
                  disease on its site
                </li>
                <li>
                  Some clinics describe pricing by source and delivery method
                  (IV vs local injection)
                </li>
              </ul>

              <p className="font-medium text-brown mt-6 mb-2">
                Here's the careful way to interpret this:
              </p>
              <p className="text-taupe">
                Here's the careful way to interpret this:These are areas of
                active research and clinical interest, but not all claims are
                equally proven. The ISSCR specifically warns that unproven stem
                cell interventions are widely marketed without sufficient
                evidence and should be limited to well-regulated trials or
                tightly governed medical innovation.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Nexus Clinic Approach - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <motion.div
            variants={scaleIn}
            className="bg-wine/5 rounded-3xl p-8 md:p-12 border border-wine/20"
          >
            <h2 className="text-3xl font-georgia text-brown mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-wine" />
              How Nexus Clinic Approaches Stem Cell Therapy (Patient-Safe
              Mindset)
            </h2>

            <p className="text-taupe mb-4">
              Because "stem cell therapy" is a broad term, Nexus Clinic's goal
              should be to keep your journey structured.
            </p>

            <p className="text-taupe mb-6">
              Nexus Clinic publishes disease-specific stem cell content and
              states MOH-aligned procedures (example shown on its Parkinson's
              stem cell page).
            </p>

            <h3 className="font-georgia text-xl text-brown mb-4">
              A responsible patient pathway typically includes:
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-white text-sm shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium text-brown">
                    Consultation and medical screening
                  </p>
                  <p className="text-taupe">
                    We start with what you feel, what you've tried, and what
                    your diagnosis actually is. Then we check whether
                    regenerative therapy is even reasonable for your case.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-white text-sm shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium text-brown">
                    Clear classification of your case
                  </p>
                  <div className="mt-2 space-y-1 text-taupe">
                    <p>• Established indication</p>
                    <p>• Investigational or experimental pathway</p>
                    <p>
                      • Not suitable, and you should be redirected to standard
                      care
                    </p>
                  </div>
                  <p className="text-taupe mt-2">
                    This is critical because Malaysia's guideline treats many
                    non-HSCT uses as experimental.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-white text-sm shrink-0">
                  3
                </div>
                <div>
                  <p className="font-medium text-brown">
                    Informed consent that is actually informed
                  </p>
                  <p className="text-taupe">
                    ISSCR explains consent should clearly state the treatment is
                    unproven when it is experimental, and it should explain
                    risks, alternatives, and follow-up expectations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-white text-sm shrink-0">
                  4
                </div>
                <div>
                  <p className="font-medium text-brown">
                    Delivery method and monitoring
                  </p>
                  <p className="text-taupe">
                    Clinics often use IV infusion or local injection depending
                    on the goal. You should also have a follow-up plan, because
                    long-term safety is part of the question.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Benefits People Hope For - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-georgia text-brown text-center mb-4"
          >
            Benefits People Hope For
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe text-lg mb-4"
          >
            (And How to Think About Outcomes)
          </motion.p>

          <motion.p variants={fadeInUp} className="text-center text-brown mb-8">
            Most people search "stem cell therapy Malaysia" because they want:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
          >
            {[
              "less pain",
              "better movement",
              "better energy",
              "improved function",
              "slower progression of a chronic condition",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg text-center text-brown text-sm shadow-md"
              >
                {benefit}
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeInUp} className="text-taupe mb-3">
            These are understandable goals.
          </motion.p>

          <motion.div
            variants={scaleIn}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <p className="text-brown font-medium mb-3">
              The safest way to set expectations is:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-taupe">
              <li>
                look for measurable outcomes (pain score, walking distance,
                blood markers where relevant)
              </li>
              <li>set a realistic timeline</li>
              <li>plan for follow-up, not "one shot and done"</li>
            </ul>
            <p className="mt-4 text-rose italic">
              Be cautious with promises that sound too perfect. ISSCR warns that
              testimonials can be misleading, especially when proper clinical
              research is missing.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Risks Section - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <motion.div
            variants={scaleIn}
            className="bg-white rounded-3xl p-8 md:p-12 border border-rose/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-rose" />
              <h2 className="text-3xl font-georgia text-brown">
                Risks, Side Effects, and Why Safety Matters
              </h2>
            </div>

            <p className="text-lg text-brown mb-4">
              Stem cells are not vitamins. They are living materials. That
              brings real risk.
            </p>

            <p className="text-taupe mb-6">
              FDA warns there is broad marketing of unapproved regenerative
              medicine products and reports of serious harms like infections,
              tumor formation, and blindness from unapproved products. ISSCR
              also stresses long-term safety is often unknown and careful
              monitoring is important.
            </p>

            <h3 className="font-georgia text-xl text-brown mb-3">
              Possible risks (varies by product and route)
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 list-disc pl-6 text-taupe">
              <li>Infection</li>
              <li>Immune reactions</li>
              <li>Fever and inflammatory reactions</li>
              <li>Clotting risk (in some contexts)</li>
              <li>Unknown long-term effects</li>
              <li>Financial harm from repeated unproven sessions</li>
            </ul>

            <p className="mt-6 text-brown font-medium text-lg">
              This is why we push one principle: clarity first, treatment
              second.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Cost Section - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-georgia text-brown mb-4">
              Cost of Stem Cell Therapy in Malaysia
            </h2>
            <p className="text-taupe text-xl">(Realistic Range)</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p variants={fadeInUp} className="text-taupe">
              Pricing varies widely in Kuala Lumpur depending on:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-5 gap-3"
            >
              {[
                "cell source",
                "lab processing",
                "number of cells",
                "delivery route (IV vs local injection)",
                "condition and number of sessions",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-lg text-center text-brown text-sm shadow"
                >
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <p className="text-taupe mb-3">
                Examples from Malaysian clinic-style pages:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-taupe">
                <li>
                  Sheen Clinic notes a session can cost RM6,000 or more,
                  depending on source and IV vs local injection
                </li>
                <li>
                  Some medical travel sites and local blogs quote much higher
                  ranges, especially for complex conditions (often tens of
                  thousands of ringgit)
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-rose/5 p-6 rounded-xl"
            >
              <p className="text-brown font-medium">
                Best practice: ask for an itemised quote that separates consult,
                screening, lab processing, delivery, and follow-ups. If a clinic
                will not itemise, that is a red flag.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Comparison Section - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-5xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-georgia text-brown text-center mb-12"
          >
            Stem Cells vs PRP vs Exosomes (Quick Comparison)
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              variants={scaleIn}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                PRP (Platelet Rich Plasma)
              </h3>
              <p className="text-taupe">
                PRP uses your own blood platelets to support healing signals. It
                is commonly used in aesthetic and hair contexts. It is not "stem
                cells."
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white rounded-2xl p-6 shadow-lg border border-rose/30"
            >
              <h3 className="font-georgia text-xl text-rose mb-3">Exosomes</h3>
              <p className="text-taupe">
                Exosomes are often marketed as regenerative, but the FDA
                includes exosomes in its warning list of widely marketed
                unapproved regenerative products. If a clinic sells exosome
                therapy as guaranteed, ask for regulatory clarity and evidence.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white rounded-2xl p-6 shadow-lg border border-wine/30"
            >
              <h3 className="font-georgia text-xl text-wine mb-3">
                Stem cells
              </h3>
              <p className="text-taupe">
                Stem cells are more complex and need stronger oversight and
                better proof, especially outside established transplant
                indications.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Competitor Analysis - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-georgia text-brown text-center mb-8"
          >
            How Nexus Clinic KL content should outperform competitors
          </motion.h2>

          <motion.div
            variants={scaleIn}
            className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
          >
            <div>
              <p className="text-brown font-medium mb-2">
                1. Umbilical cord Wharton's Jelly MSC positioning + quality
                claims
              </p>
              <p className="text-taupe">
                MRC Clinic highlights Wharton's Jelly source and mentions
                standards such as cGMP and ISO compliance.
              </p>
            </div>

            <div>
              <p className="text-brown font-medium mb-2">
                2. Wide-condition marketing (heart, kidney, neuro, skin)
              </p>
              <p className="text-taupe">
                Cell & Co promotes MSC therapy with sections on heart and kidney
                diseases.
              </p>
            </div>

            <div>
              <p className="text-brown font-medium mb-2">
                3. Price anchoring by session and delivery method
              </p>
              <p className="text-taupe">
                Sheen Clinic states pricing depends on source and whether IV or
                local injection is used.
              </p>
            </div>

            <div>
              <p className="text-brown font-medium mb-2">
                4. Medical tourism framing
              </p>
              <p className="text-taupe">
                Some competitors position Kuala Lumpur as a regenerative
                medicine destination.
              </p>
            </div>

            <div className="border-t border-cream pt-6 mt-6">
              <p className="text-brown font-medium mb-3">
                How Nexus Clinic KL content should outperform competitors:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Be clearer about what is established vs experimental in
                    Malaysia
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Put patient safety and informed consent upfront, not at the
                    bottom
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Avoid "treats everything" language, because ISSCR warns
                    against that pattern
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-12"
          >
            FAQs (People Also Ask Style)
          </motion.h2>

          <div className="space-y-4">
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                1) What is stem cell therapy?
              </h3>
              <p className="text-taupe">
                A treatment that uses stem cells, or cells derived from them, to
                repair or replace damaged cells or tissues.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                2) What conditions are stem cell treatments proven for?
              </h3>
              <p className="text-taupe">
                Blood and immune disorders and loss of bone marrow function,
                treated with blood stem cell transplantation, as established by
                ISSCR and Malaysia's MOH.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                3) Is stem cell therapy approved in Malaysia?
              </h3>
              <p className="text-taupe">
                Malaysia's MOH guideline notes hematopoietic and cord blood stem
                cell transplantation are the most established forms, while many
                other stem cell uses are considered experimental and require
                ethics oversight.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                4) Why do some clinics offer stem cells for many diseases?
              </h3>
              <p className="text-taupe">
                Many clinics market broad applications, but ISSCR warns that
                unproven interventions are widely commercialised without
                sufficient evidence and should be limited to regulated trials or
                tightly governed medical innovation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                5) Is stem cell therapy safe?
              </h3>
              <p className="text-taupe">
                No medical treatment is risk-free. ISSCR stresses long-term
                safety can be uncertain and follow-up is important.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                6) What are the side effects or risks?
              </h3>
              <p className="text-taupe">
                Risks can include infection, immune reactions, and unknown
                long-term effects. The FDA reports serious harms from unapproved
                regenerative products, including infections, tumor formation,
                and blindness.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                7) How many sessions do I need?
              </h3>
              <p className="text-taupe">
                It depends on the condition, route, and protocol. Be cautious if
                someone promises a fixed number for everyone. ISSCR flags "one
                cell for many diseases" style marketing as a warning sign.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                8) How long does it take to see results?
              </h3>
              <p className="text-taupe">
                Timelines vary and depend on what outcome you measure. A good
                clinic will define measurable goals and follow-up points rather
                than promising "instant change."
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                9) How much does stem cell therapy cost in Kuala Lumpur?
              </h3>
              <p className="text-taupe">
                Some Malaysia clinic pages state sessions can start around
                RM6,000+, while other providers quote much higher ranges
                depending on complexity. Always request an itemised quote.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                10) Where do the stem cells come from?
              </h3>
              <p className="text-taupe">
                Common sources include cord tissue (Wharton's Jelly) and adipose
                tissue, depending on the provider and protocol.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                11) What should I ask a clinic before I book?
              </h3>
              <p className="text-taupe">
                ISSCR suggests asking for scientific evidence, ethics oversight
                (IRB), and regulatory compliance, and being cautious of claims
                based mainly on testimonials.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="font-georgia text-lg text-brown mb-2">
                12) Are exosome treatments the same as stem cell therapy?
              </h3>
              <p className="text-taupe">
                No. The FDA includes exosomes among unapproved regenerative
                products that are broadly marketed without approval.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section - ALL CONTENT INCLUDED */}
      <section className="py-20 bg-wine relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] opacity-10 mix-blend-overlay" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 relative z-10"
        >
          <motion.div
            variants={scaleIn}
            className="max-w-3xl mx-auto text-center bg-wine backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-georgia text-white mb-6">
              CTA (Website-ready)
            </h2>

            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              If you're searching for stem cell therapy in Malaysia or
              regenerative medicine in Kuala Lumpur, start with a private
              consult focused on your diagnosis, your risks, and what is
              realistically achievable.
            </p>

            <div className="space-y-4">
              <p className="text-white font-georgia text-xl">
                Nexus Clinic Kuala Lumpur
              </p>
              <p className="text-white/80">
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>
              <p className="text-white text-lg">
                Mobile: 016-7025699 / 03-21635699
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default StemCellLanding;
