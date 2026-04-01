"use client";

import { motion } from "framer-motion";
import { Shield, Award, UserCheck, BadgeCheck, ArrowRight } from "lucide-react";

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

const ExosomeLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "hair/exosomeHair");

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
      before: "/images/B&A-hair/B&A-exesome-hair-treatment1.webp",
      after: "/images/B&A-hair/B&A-exesome-hair-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-exesome-hair-treatment2.webp",
      after: "/images/B&A-hair/B&A-exesome-hair-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-exesome-hair-treatment3.webp",
      after: "/images/B&A-hair/B&A-exesome-hair-treatment3.webp",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-wine/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-glass backdrop-blur-sm px-4 py-2 rounded-full border border-taupe/20">
                <Shield className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown font-georgia">
                  MOH registered, doctor-led clinic in Kuala Lumpur
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-georgia text-5xl md:text-7xl font-bold text-brown mb-6 leading-tight"
            >
              Bring Back Thicker Hair
              <span className="block text-wine">Without Surgery</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-taupe mb-8 max-w-2xl mx-auto font-inter"
            >
              Exosome hair treatment supports your scalp and weak follicles with
              regenerative signals. It is a modern option for early thinning in
              Kuala Lumpur and across Malaysia.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left"
            >
              <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-taupe/20">
                <Award className="w-8 h-8 text-wine mb-3" />
                <p className="text-sm text-brown font-georgia">
                  MOH registered, doctor-led clinic in Kuala Lumpur
                </p>
              </div>
              <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-taupe/20">
                <UserCheck className="w-8 h-8 text-wine mb-3" />
                <p className="text-sm text-brown font-georgia">
                  Hair thinning is assessed as a medical issue, not just a
                  cosmetic one
                </p>
              </div>
              <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-taupe/20">
                <BadgeCheck className="w-8 h-8 text-wine mb-3" />
                <p className="text-sm text-brown font-georgia">
                  Clear advice on expected outcomes, downtime, and alternatives.
                  Options to combine with PRP and other hair loss treatments
                  when suitable
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* If hair loss is hurting your confidence */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl md:text-5xl font-bold text-brown mb-8 text-center"
            >
              If hair loss is hurting your confidence, you are not alone
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe font-inter leading-relaxed mb-4"
            >
              Hair loss is not just "vanity". It changes how you feel in photos.
              It changes how you style your hair. It can make you avoid bright
              lighting.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe font-inter leading-relaxed mb-4"
            >
              In KL, we see this every day. Stress, hormones, genetics, and
              scalp inflammation can all play a role. The good news is that many
              cases can be improved when follicles are still alive.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-wine font-georgia font-semibold"
            >
              That is where exosome hair treatment comes in.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* What is exosome hair treatment with image */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="font-georgia text-4xl font-bold text-brown mb-6">
                What is exosome hair treatment{" "}
                <span className="text-wine">(in simple words)</span>
              </h2>
              <p className="text-taupe font-inter text-lg leading-relaxed mb-4">
                Exosomes are tiny "message carriers" released by cells. They
                carry signals like proteins and genetic instructions that can
                influence how other cells behave.
              </p>
              <p className="text-taupe font-inter text-lg leading-relaxed mb-4">
                In hair restoration, exosome-based products are marketed to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-taupe font-inter text-lg">
                <li>support scalp repair and recovery</li>
                <li>reduce inflammation signals in the scalp</li>
                <li>encourage healthier follicle activity over time</li>
              </ul>
              <p className="text-rose font-inter text-sm italic border-l-4 border-rose pl-4 py-2 bg-rose/5">
                Important note: exosome therapies are still evolving. Evidence
                is growing, but regulation and product quality vary widely.
              </p>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hair/exesome-hair-treatment.webp"
                  alt="Scalp analysis and treatment"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Quick competitor scan */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl font-bold text-brown text-center mb-12"
            >
              A quick competitor scan (what top pages in Malaysia emphasize)
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-lg mb-8 text-center"
            >
              When you search "exosome hair loss injection Kuala Lumpur" you
              will notice the top-ranking clinic pages usually do a few things
              well:
            </motion.p>
            <motion.ol
              variants={fadeInUp}
              className="list-decimal pl-6 space-y-3 mb-6 text-brown font-inter text-lg"
            >
              <li>
                They keep it non-surgical and simple (fast sessions, minimal
                downtime)
              </li>
              <li>
                They describe exosomes as stem cell-derived cell messengers and
                highlight growth factors and repair signals
              </li>
              <li>
                They set a timeline like "results in 3 to 6 months" and mention
                combining with PRP
              </li>
              <li>
                Some show public pricing. One KL clinic page quotes from around
                RM 8,000 per session onwards (varies by case).
              </li>
            </motion.ol>
            <motion.p
              variants={fadeInUp}
              className="text-rose font-georgia text-lg italic bg-rose/5 p-6 rounded-xl"
            >
              At Nexus Clinic KL, we keep the same clarity, but we add something
              many pages skip: honest guidance on evidence, product quality, and
              what is realistic for your stage of hair loss.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Does it really work */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl font-bold text-brown text-center mb-8"
            >
              Does exosome hair treatment really work for hair loss?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-wine font-georgia text-center mb-8"
            >
              Research is promising, but it is not "magic".
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-xl border border-taupe/20 mb-4"
            >
              <p className="text-brown font-inter">
                A 2025 systematic review on exosomes and hair regeneration
                reported consistent improvements in measures like hair density
                and thickness across multiple clinical studies, while still
                noting this is an emerging field.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-xl border border-taupe/20 mb-6"
            >
              <p className="text-brown font-inter">
                Another 2025 review compared exosome therapy with PRP and
                minoxidil for androgenetic alopecia and discusses exosomes as an
                emerging option with patient-centered outcomes and safety
                considerations.
              </p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-rose font-georgia text-lg border-l-4 border-rose pl-4 py-2"
            >
              What this means in real life: If you have thinning hair,
              miniaturised follicles, or early pattern loss, you may see
              benefit. If the area is fully bald and shiny, results are usually
              limited.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Safety and regulation */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl font-bold text-brown text-center mb-4"
            >
              Safety and regulation{" "}
              <span className="text-wine">(please read this)</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-wine font-georgia text-center mb-8"
            >
              This matters more than marketing.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-6 rounded-xl mb-4"
            >
              <p className="text-brown font-inter">
                The U.S. FDA has warned there are no FDA-approved exosome
                products, and it cautions consumers about clinics selling
                unapproved regenerative medicine products, including exosomes.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-6 rounded-xl mb-4"
            >
              <p className="text-brown font-inter">
                The International Society for Extracellular Vesicles (ISEV) also
                provides patient safety information and highlights uncertainties
                and the importance of evidence and quality control.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-6 rounded-xl mb-8"
            >
              <p className="text-brown font-inter">
                A 2024 paper on regulation explains why injected exosome
                products often lack official approvals, including issues like
                variability, impurities, and unclear mechanisms, which makes
                quality control difficult.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-rose/10 p-6 rounded-xl border-2 border-rose/20"
            >
              <h3 className="font-georgia text-2xl font-bold text-brown mb-4">
                What you should do in Malaysia:
              </h3>
              <p className="text-brown font-inter text-lg">
                Choose a doctor-led clinic. Ask about product source and
                documentation. Avoid places that promise guaranteed regrowth or
                "permanent cure".
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who is exosome hair treatment for */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl font-bold text-brown text-center mb-12"
            >
              Who is exosome hair treatment for?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg mb-6"
            >
              Exosome therapy tends to suit people who:
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-6 space-y-2 mb-8 text-brown font-inter text-lg"
            >
              <li>notice widening part lines or crown thinning</li>
              <li>have early male pattern or female pattern hair loss</li>
              <li>
                have more shedding after stress, illness, or postpartum changes
              </li>
              <li>want a non-surgical option and can commit to follow-up</li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg mb-4"
            >
              It may not be ideal if you have:
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-6 space-y-2 mb-12 text-brown font-inter text-lg"
            >
              <li>active scalp infection or uncontrolled scalp dermatitis</li>
              <li>
                bleeding disorders or medication issues (your doctor will screen
                this)
              </li>
              <li>severe baldness where follicles are no longer active</li>
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <h3 className="font-georgia text-2xl font-bold text-brown mb-4">
                Areas we can target
              </h3>
              <p className="text-brown font-inter mb-4">
                Exosome hair treatment can be planned for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-brown font-inter text-lg">
                <li>hairline and temples</li>
                <li>crown and vertex</li>
                <li>diffuse thinning across the top</li>
                <li>general scalp health support</li>
              </ul>
              <p className="text-taupe font-inter mt-4">
                Your pattern matters. So does your diagnosis. That is why
                consultation is step one.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How it's done */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl font-bold text-brown text-center mb-8"
            >
              How exosome hair treatment is done (what to expect)
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg mb-4"
            >
              Most clinics deliver exosomes in one of two ways:
            </motion.p>

            <motion.ol
              variants={fadeInUp}
              className="list-decimal pl-6 space-y-2 mb-6 text-brown font-inter text-lg"
            >
              <li>Scalp micro-infusion or microneedling delivery</li>
              <li>Targeted scalp injections</li>
            </motion.ol>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg mb-6"
            >
              Top clinic pages in Malaysia commonly describe a process like:
              consult, scalp prep, delivery, then a regeneration period over
              months.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg mb-4"
            >
              A typical visit usually includes:
            </motion.p>

            <motion.ol
              variants={fadeInUp}
              className="list-decimal pl-6 space-y-2 mb-6 text-brown font-inter text-lg"
            >
              <li>scalp assessment and history review</li>
              <li>cleansing and optional numbing</li>
              <li>controlled delivery to thinning zones</li>
              <li>aftercare instructions (simple but important)</li>
            </motion.ol>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg"
            >
              Sessions are often around 60 to 90 minutes on many clinic
              protocols.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Results timeline */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl font-bold text-brown text-center mb-4"
            >
              Results timeline (what is realistic)
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg text-center mb-8"
            >
              Most people want to know, "When will I see hair growth?"
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg mb-6"
            >
              A common timeline shared by leading clinic pages is:
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-6 space-y-3 mb-6 text-brown font-inter text-lg"
            >
              <li>2 to 4 weeks: scalp feels healthier, shedding may reduce</li>
              <li>1 to 3 months: early thickening, improved density signals</li>
              <li>
                3 to 6 months: more visible improvement in coverage and
                thickness
              </li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-rose font-georgia italic"
            >
              Results vary. Hair biology is slow. That is normal.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Pros and cons */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl font-bold text-brown text-center mb-12"
            >
              Pros and cons (honest view)
            </motion.h2>

            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="font-georgia text-2xl font-bold text-green-600 mb-4">
                Benefits
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-brown font-inter text-lg">
                <li>non-surgical approach</li>
                <li>minimal downtime for most people</li>
                <li>
                  can be combined with PRP, medication, or device-based support
                </li>
                <li>
                  aims to improve scalp environment, not just cover the problem
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="font-georgia text-2xl font-bold text-rose mb-4">
                Downsides
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-brown font-inter text-lg">
                <li>product quality can vary, so clinic choice matters</li>
                <li>
                  it can be expensive (price depends on extent and protocol)
                </li>
                <li>evidence is growing, but not "settled science" yet</li>
                <li>not ideal for fully bald areas</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Side effects and downtime */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl font-bold text-brown text-center mb-8"
            >
              Side effects and downtime
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg mb-4"
            >
              Most reported side effects are mild and short-lived:
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-6 space-y-2 mb-6 text-brown font-inter text-lg"
            >
              <li>redness, swelling, tenderness</li>
              <li>small bumps at injection points</li>
              <li>mild headache or scalp tightness</li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg mb-2"
            >
              Rare risks (your doctor should discuss these):
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-6 space-y-2 mb-6 text-brown font-inter text-lg"
            >
              <li>infection if hygiene is poor</li>
              <li>allergic reactions depending on product additives</li>
              <li>flare of scalp inflammation in sensitive patients</li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-rose font-georgia italic"
            >
              This is why doctor-led assessment and clean protocol matter.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl font-bold text-brown text-center mb-12"
          >
            Exosome vs PRP vs mesotherapy vs transplant (simple comparison)
          </motion.h2>

          <motion.div variants={fadeInUp} className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-wine">
                  <th className="p-4 text-left text-light font-georgia">
                    Option
                  </th>
                  <th className="p-4 text-left text-light font-georgia">
                    Best for
                  </th>
                  <th className="p-4 text-left text-light font-georgia">
                    Downtime
                  </th>
                  <th className="p-4 text-left text-light font-georgia">
                    What it does
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe/20">
                <tr className="bg-cream/50">
                  <td className="p-4 text-brown font-inter">
                    Exosome hair treatment
                  </td>
                  <td className="p-4 text-brown font-inter">
                    early to moderate thinning
                  </td>
                  <td className="p-4 text-brown font-inter">low</td>
                  <td className="p-4 text-brown font-inter">
                    aims to support regeneration signals over time
                  </td>
                </tr>
                <tr className="bg-cream/50">
                  <td className="p-4 text-brown font-inter">PRP for hair</td>
                  <td className="p-4 text-brown font-inter">
                    shedding + thinning
                  </td>
                  <td className="p-4 text-brown font-inter">low</td>
                  <td className="p-4 text-brown font-inter">
                    uses your own platelets and growth factors
                  </td>
                </tr>
                <tr className="bg-cream/50">
                  <td className="p-4 text-brown font-inter">
                    Hair mesotherapy
                  </td>
                  <td className="p-4 text-brown font-inter">
                    scalp support + early thinning
                  </td>
                  <td className="p-4 text-brown font-inter">low</td>
                  <td className="p-4 text-brown font-inter">
                    nutrients and scalp stimulation
                  </td>
                </tr>
                <tr className="bg-cream/50">
                  <td className="p-4 text-brown font-inter">
                    Medication (minoxidil, others)
                  </td>
                  <td className="p-4 text-brown font-inter">
                    pattern loss support
                  </td>
                  <td className="p-4 text-brown font-inter">none</td>
                  <td className="p-4 text-brown font-inter">
                    helps maintain and stimulate follicles
                  </td>
                </tr>
                <tr className="bg-cream/50">
                  <td className="p-4 text-brown font-inter">Hair transplant</td>
                  <td className="p-4 text-brown font-inter">
                    advanced loss with donor hair
                  </td>
                  <td className="p-4 text-brown font-inter">higher</td>
                  <td className="p-4 text-brown font-inter">
                    moves follicles to bald areas
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-brown font-inter text-lg mt-6"
          >
            Exosomes are often positioned as a regenerative option, while
            transplants are for structure and coverage when hair is already
            gone.
          </motion.p>
        </motion.div>
      </section>

      {/* Cost */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl font-bold text-brown text-center mb-8"
            >
              Cost of exosome hair treatment in Kuala Lumpur and Malaysia
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg mb-4"
            >
              Pricing depends on:
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-6 space-y-2 mb-6 text-brown font-inter text-lg"
            >
              <li>how large the area is (hairline vs full top)</li>
              <li>how many sessions are planned</li>
              <li>the brand and quality of the exosome product</li>
              <li>whether you combine PRP, microneedling, or other steps</li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg mb-4"
            >
              Public pricing is not always listed. One KL clinic page states
              exosome hair loss therapy from RM 8,000 onwards per session,
              depending on treatment extent.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-rose font-georgia italic mb-6"
            >
              At Nexus Clinic KL, we recommend budgeting only after an
              assessment. You should pay for a plan, not a promise.
            </motion.p>

            <motion.h3
              variants={fadeInUp}
              className="font-georgia text-2xl font-bold text-brown mb-4"
            >
              How many sessions do you need?
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg"
            >
              Some clinic protocols describe one or two sessions, depending on
              severity, with improvements showing over months. Other protocols
              may recommend a series, then maintenance.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Nexus approach */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl font-bold text-brown text-center mb-8"
            >
              The Nexus Clinic KL approach (what makes the plan feel "human")
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-lg text-center mb-8"
            >
              We keep it simple and practical.
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="font-georgia text-2xl font-bold text-wine mb-2">
                Step 1: Diagnose first
              </h3>
              <p className="text-brown font-inter text-lg">
                Hair thinning can be genetic, hormonal, inflammatory, or mixed.
                We start with assessment so you do not waste money on the wrong
                method.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="font-georgia text-2xl font-bold text-wine mb-2">
                Step 2: Choose the right mix
              </h3>
              <p className="text-brown font-inter text-lg">
                Many people do better with a combined plan, not one single
                treatment. Nexus Clinic already supports multiple hair options
                like PRP and hair mesotherapy, which can complement regenerative
                strategies when suitable.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="font-georgia text-2xl font-bold text-wine mb-2">
                Step 3: Track changes over time
              </h3>
              <p className="text-brown font-inter text-lg">
                We set a realistic timeline. We adjust if needed. No pressure,
                no rushed upsell. That is part of being diagnosis-driven.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Aftercare */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl font-bold text-brown text-center mb-8"
            >
              Aftercare tips (small habits that protect your results)
            </motion.h2>

            <motion.h3
              variants={fadeInUp}
              className="font-georgia text-2xl font-bold text-rose mb-4"
            >
              For the first 24 to 48 hours:
            </motion.h3>

            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-6 space-y-2 mb-6 text-brown font-inter text-lg"
            >
              <li>avoid heavy sweating and intense workouts</li>
              <li>avoid sauna and very hot showers</li>
              <li>do not scratch the scalp</li>
              <li>follow washing instructions from your doctor</li>
            </motion.ul>

            <motion.h3
              variants={fadeInUp}
              className="font-georgia text-2xl font-bold text-rose mb-4"
            >
              For the next few weeks:
            </motion.h3>

            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-6 space-y-2 text-brown font-inter text-lg"
            >
              <li>keep stress lower where possible</li>
              <li>sleep well and support nutrition</li>
              <li>stay consistent if you are also using PRP or medication</li>
            </motion.ul>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl font-bold text-brown text-center mb-12"
          >
            FAQs (real "People Also Ask" style)
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl font-bold text-brown mb-2">
                Is exosome hair treatment safe?
              </h3>
              <p className="text-taupe font-inter">
                It can be safe when done in a medical setting with proper
                product quality and hygiene. But the field still has
                uncertainties, and quality varies by supplier.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl font-bold text-brown mb-2">
                Is exosome therapy FDA approved for hair loss?
              </h3>
              <p className="text-taupe font-inter">
                No. The FDA has stated there are no FDA-approved exosome
                products and has issued safety communications about unapproved
                exosome products.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl font-bold text-brown mb-2">
                How long does exosome hair treatment take to work?
              </h3>
              <p className="text-taupe font-inter">
                Many clinic protocols describe visible improvement over 3 to 6
                months, with earlier changes like reduced shedding sometimes
                appearing sooner.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl font-bold text-brown mb-2">
                How many sessions of exosome hair treatment do I need?
              </h3>
              <p className="text-taupe font-inter">
                Some Malaysia clinic protocols state one to two sessions may be
                used depending on hair loss severity, while others plan a
                series. Your doctor should tailor this.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl font-bold text-brown mb-2">
                Does exosome hair treatment work for male pattern baldness?
              </h3>
              <p className="text-taupe font-inter">
                It may help in androgenetic alopecia when follicles are still
                active, and research reviews report improvements in density and
                thickness across studies. Outcomes still vary by stage.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl font-bold text-brown mb-2">
                Is exosome hair treatment better than PRP?
              </h3>
              <p className="text-taupe font-inter">
                Not always. Some people respond well to PRP, some prefer
                exosomes, and many clinics combine approaches. Evidence is still
                developing, so the best choice depends on your diagnosis and
                scalp condition.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl font-bold text-brown mb-2">
                What are the side effects of exosome injections for hair?
              </h3>
              <p className="text-taupe font-inter">
                Common effects include mild redness, swelling, and tenderness at
                the scalp. Serious issues are uncommon but possible, especially
                if product quality or hygiene is poor.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl font-bold text-brown mb-2">
                Is there downtime after exosome hair treatment?
              </h3>
              <p className="text-taupe font-inter">
                Most clinics describe minimal downtime. Many people return to
                normal routines quickly, with basic aftercare for a day or two.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl font-bold text-brown mb-2">
                Can women do exosome hair treatment?
              </h3>
              <p className="text-taupe font-inter">
                Yes. Many protocols are marketed for both men and women with
                thinning hair or shedding, especially in early stages.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl font-bold text-brown mb-2">
                Can I combine exosome hair treatment with PRP or laser therapy?
              </h3>
              <p className="text-taupe font-inter">
                Yes, many clinics explicitly state it can be combined with PRP
                and other hair loss solutions for enhanced outcomes.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl">
              <h3 className="font-georgia text-xl font-bold text-brown mb-2">
                How much does exosome hair treatment cost in Kuala Lumpur?
              </h3>
              <p className="text-taupe font-inter">
                Pricing depends on coverage area and protocol. Some KL clinic
                pages publicly quote from around RM 8,000 per session onwards,
                but costs vary widely.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl md:text-5xl font-bold text-light mb-6"
            >
              Ready to talk to a doctor in KL?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-cream mb-8 font-inter"
            >
              If you want a plan that fits your hair loss stage, start with an
              assessment at Nexus Clinic Kuala Lumpur. We will explain what you
              actually need, what you can skip, and what results are realistic.
            </motion.p>

            <motion.button
              variants={fadeInUp}
              className="group bg-light text-wine px-8 py-4 rounded-full font-inter font-semibold hover:bg-cream transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg"
            >
              Start Your Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ExosomeLanding;
