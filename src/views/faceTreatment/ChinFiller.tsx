"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Star,
  CheckCircle,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "../../lib/animations";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#e8ddd5] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left bg-white hover:bg-[#fdf7f2] transition-colors"
      >
        <span className="font-semibold text-[#3d2b1f] text-sm sm:text-base leading-snug">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#8b2635] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 pt-2 text-[#6b4f3a] text-sm leading-relaxed border-t border-[#e8ddd5]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const ChinFillerLanding = () => {
  const faqs = [
    {
      q: "Does chin filler hurt?",
      a: "Most people feel pressure and mild discomfort. Numbing methods help. Many clinics describe it as manageable.",
    },
    {
      q: "How long does chin filler last?",
      a: "A common estimate is 12 to 24 months, depending on filler type and your metabolism.",
    },
    {
      q: "What is the downtime after chin filler?",
      a: "Most people return to normal activity quickly. Mild swelling or bruising may last a few days.",
    },
    {
      q: "Is chin filler safe?",
      a: "It is generally considered safe when performed by an experienced medical professional using approved products, but all injectables carry risks.",
    },
    {
      q: "How much does chin filler cost in Kuala Lumpur?",
      a: "It depends on the brand and syringe count. Nexus Clinic KL lists Juvederm per 1 cc pricing, with chin included across several products.",
    },
    {
      q: "How many cc do I need for chin filler?",
      a: "Many people are around 1 cc, but it depends on your profile and goals. A consultation is the right way to confirm.",
    },
    {
      q: "Will chin filler make my face look slimmer?",
      a: "It can make the lower face look more structured by improving projection and proportions. Some clinics describe this as a 'sharper' look rather than true fat loss.",
    },
    {
      q: "Can chin filler reduce a double chin?",
      a: "Chin filler does not remove fat. But it can improve the profile line in some people by adding projection, which may reduce the appearance in photos.",
    },
    {
      q: "When can I exercise after chin filler?",
      a: "A common safety guideline is to avoid strenuous exercise for about 24 hours to reduce swelling and bruising risk.",
    },
    {
      q: "What should I avoid after chin filler?",
      a: "Avoid heavy exercise, alcohol, and heat exposure like saunas for a short period after treatment, as commonly advised in filler aftercare guidance.",
    },
    {
      q: "Can chin filler be reversed?",
      a: "If a hyaluronic acid filler is used, it can be dissolved with hyaluronidase when medically appropriate.",
    },
    {
      q: "Will chin filler migrate?",
      a: "Migration risk depends on product choice, injection depth, and aftercare. Proper technique and not pressing the area early help.",
    },
    {
      q: "How soon will I see results?",
      a: "You see improvement right away. The look refines as swelling settles.",
    },
    {
      q: "How long does chin swelling last?",
      a: "Many people settle within days, but small swelling can take longer. Plan ahead if you have an event.",
    },
    {
      q: "Is chin filler better than jawline filler?",
      a: "They solve different problems. Chin filler improves projection and profile balance. Jawline filler improves side definition. Many people combine both for a smooth lower-face contour.",
    },
    {
      q: "Can men do chin filler in Kuala Lumpur?",
      a: "Yes. The plan is usually different, focusing on structure and balance rather than a narrow 'V' look.",
    },
    {
      q: "What filler does Nexus Clinic KL use for chin?",
      a: "Nexus Clinic KL lists Allergan (US) Juvederm fillers and includes chin in several product indications on its published price guide.",
    },
    {
      q: "How do I choose the best chin filler clinic in KL?",
      a: "Look for doctor-led assessment, authentic products, clear pricing, and realistic planning. Directory listings can help compare options, but your consultation matters most.",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
      after: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-pigmentation-treatment2.webp",
      after: "/images/B&A-skin/B&A-pigmentation-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-pigmentation-treatment3.webp",
      after: "/images/B&A-skin/B&A-pigmentation-treatment3.webp",
    },
  ];

  return (
    <div className="bg-light overflow-x-hidden font-sans">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-cream pt-14 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#8b2635]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8b2635] leading-tight tracking-tight">
                Best Chin Filler in Malaysia{" "}
                <span className="text-[#3d2b1f]">
                  Instant Results Without Surgery
                </span>{" "}
                at Nexus Clinic Kuala Lumpur
              </h1>
              <p className="text-[#6b4f3a] text-base mt-5 leading-relaxed">
                Trusted by thousands. Award-winning injectors and aesthetic
                doctors at Nexus Clinic KL deliver precise chin filler Kuala
                Lumpur results. Sharper profile, restored facial balance. No
                surgery. No downtime. Book today.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                <button className="bg-[#8b2635] hover:bg-[#a83040] transition-all text-white font-semibold px-6 py-3 rounded-full shadow-lg flex items-center justify-center gap-2 text-sm">
                  Book Your Free Chin Profile Assessment at Nexus Clinic KL{" "}
                  <ChevronRight size={16} />
                </button>
                <button className="border border-[#8b2635] text-[#8b2635] hover:bg-[#8b2635]/10 px-6 py-3 rounded-full font-medium transition text-sm text-center">
                  Speak to a Doctor About Your Chin Profile | Book a Free
                  Assessment
                </button>
              </div>
            </motion.div>
            <motion.div variants={scaleIn} className="hidden lg:block relative">
              <div className="bg-white/60 rounded-2xl shadow-lg p-4 backdrop-blur-sm border border-white/40">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Chin filler results at Nexus Clinic KL"
                  className="rounded-xl w-full object-cover shadow-md"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TREATMENT OVERVIEW ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3d2b1f]">
              Chin Dermal Filler in Malaysia for a Sharper, Defined Profile
            </h2>
            <div className="w-24 h-1 bg-[#8b2635] mx-auto mt-4 rounded-full" />
            <p className="text-[#6b4f3a] mt-5 max-w-3xl mx-auto text-base leading-relaxed">
              Your side profile is the one angle you cannot control. Group
              photos, video calls, mirrors at the wrong moment. A chin that sits
              too far back makes your nose look bigger, your jaw look softer,
              and your entire face look off. Skincare does not fix this.
              Exercise does not fix this. It is structural.
            </p>
            <p className="text-[#3d2b1f] mt-4 max-w-3xl mx-auto">
              Chin filler at Nexus Clinic Kuala Lumpur fixes it. One session, 20
              to 30 minutes, zero surgery. Our award-winning injectors and
              aesthetic doctors have performed over 5,000 facial filler
              procedures using technique built for Southeast Asian bone
              structure. The result looks like you. Just sharper.
            </p>
          </motion.div>

          {/* Overview Table */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#e8ddd5]"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-105">
                <thead className="bg-[#8b2635]/10">
                  <tr>
                    <th
                      colSpan={2}
                      className="px-5 py-4 text-base font-bold text-[#3d2b1f]"
                    >
                      Chin Filler Treatment Overview
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8ddd5] text-sm sm:text-base">
                  {[
                    [
                      "Treatment",
                      "Non-surgical chin augmentation using hyaluronic acid dermal filler",
                    ],
                    ["Session Time", "20 to 30 minutes"],
                    [
                      "Downtime may vary depending on the type of filler used.",
                      "Minimal. Most patients return to normal activities the same day",
                    ],
                    [
                      "Results",
                      "Visible immediately. Fully settled within 5 to 7 days",
                    ],
                    [
                      "Longevity",
                      "12 to 18 months on average. Radiesse can last up to 24 months",
                    ],
                    [
                      "Reversible",
                      "Yes. HA fillers are fully dissolvable with hyaluronidase",
                    ],
                    ["Anaesthesia", "Topical numbing cream only"],
                    [
                      "Suitable For",
                      "Recessed chin, flat side profile, age-related volume loss, asymmetry",
                    ],
                  ].map(([label, value]) => (
                    <tr key={label}>
                      <td className="px-5 py-4 font-semibold bg-cream/60 w-2/5 align-top text-[#3d2b1f]">
                        {label}
                      </td>
                      <td className="px-5 py-4 text-[#5a3e2b]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          <div className="text-center mt-7">
            <button className="text-[#8b2635] underline font-medium text-sm sm:text-base">
              Speak to a Doctor About Your Chin Profile | Book a Free Assessment
            </button>
          </div>
        </div>
      </section>

      {/* ── SIDE PROFILE PROBLEM ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3d2b1f]">
                The Side Profile Problem Most Patients Get Wrong
              </h2>
              <div className="h-1 w-20 bg-[#8b2635] my-5 rounded-full" />
              <p className="text-[#6b4f3a] leading-relaxed mb-4">
                Most patients arriving at Nexus Clinic KL thinking they need a
                nose job leave with a chin filler plan instead. This is not
                misdirection. It is proportion.
              </p>
              <p className="text-[#6b4f3a] leading-relaxed mb-4">
                When the chin sits too far back, the nose reads as large even if
                it is perfectly average. The jaw blurs into the neck. The lower
                face loses structure from every angle. Fixing the chin restores
                the proportion without touching the nose. Faster, cheaper, and
                with no recovery time.
              </p>
              <p className="text-[#3d2b1f]/80 mb-4">
                A significant portion of patients in Malaysia and Southeast Asia
                have genetic chin underprojection. The bone simply did not
                develop with enough forward position. Others see the change
                gradually from their mid-twenties as fat pads thin and bone
                density decreases. Either way, the concern is real and it has a
                clinical solution.
              </p>
              <p className="text-sm text-[#8b2635] font-semibold mt-2 italic">
                The International Society of Aesthetic Plastic Surgery (ISAPS)
                reported in 2024 that non-surgical chin and jawline augmentation
                saw a 34% increase in procedure volume across Southeast Asian
                markets over two years, making it one of the fastest-growing
                aesthetic categories in the region.
              </p>
              <p className="text-xs text-[#6b4f3a] mt-2">
                [Citation 1: ISAPS Global Statistics Report 2024]
              </p>
              <button className="mt-6 bg-[#8b2635]/10 text-[#8b2635] px-6 py-2 rounded-full flex items-center gap-1 text-sm font-medium">
                Book a Consultation | Find Out If Chin Filler Is Right for You{" "}
                <ChevronRight size={16} />
              </button>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Chin profile assessment at Nexus Clinic KL"
                  className="w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PATIENTS WHO BENEFIT ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3d2b1f]">
              Patients Who Benefit Most from Chin Filler in KL
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              "Fillers may help enhance the appearance of the chin. Side profile looks flat or recessed in photos and video calls",
              "Nose appears larger than expected because the chin does not balance it, affecting overall facial harmony.",
              "Jawline blurs into the neck from certain angles",
              "Double chin appearance caused by underprojection rather than excess weight",
              "Facial asymmetry stemming from the chin area",
              "Age-related lower face volume loss that softens definition over time",
              "Patients who want to trial the improvement before committing to surgery",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-[#e8ddd5] flex items-start gap-3"
              >
                <CheckCircle
                  size={20}
                  className="text-[#8b2635] shrink-0 mt-0.5"
                />
                <span className="text-[#3d2b1f]/80 text-sm">{text}</span>
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-8 text-center text-[#6b4f3a] text-sm sm:text-base">
            Many patients who book for chin filler have not connected their
            concern to their chin at all. They describe feeling that something
            is off but cannot explain it. The chin is often the answer.
          </p>
          <p className="mt-3 text-center text-[#6b4f3a] text-sm sm:text-base">
            Patients interested in full lower face improvement often combine
            chin filler with fillers that add volume for enhanced aesthetics.{" "}
            <a href="#" className="text-[#8b2635] underline">
              jawline filler in Malaysia
            </a>{" "}
            for a more complete result.
          </p>
          <div className="text-center mt-6">
            <button className="bg-[#8b2635] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#a83040] transition">
              Not Sure If You Are a Candidate | Book a Free Clinical Assessment
            </button>
          </div>
        </div>
      </section>

      {/* ── NEXUS CLINIC DIFFERENCE ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3d2b1f]">
                Nexus Clinic KL | Award-Winning Injectors for Chin Filler
              </h2>
              <div className="h-1 w-16 bg-[#8b2635] my-4 rounded-full" />
              <p className="mb-4 text-[#6b4f3a] text-sm sm:text-base">
                There are many aesthetic clinics in Kuala Lumpur. The filler
                brands across most of them are nearly identical. The experience
                of the hands placing those products is not.
              </p>
              <p className="font-bold text-[#3d2b1f] mt-4">
                What makes Nexus Clinic KL different:
              </p>
              <ul className="space-y-2 mt-2">
                {[
                  "Over 5,000 facial filler procedures completed by licensed aesthetic doctors",
                  "15 or more years of combined aesthetic medicine experience across the clinical team specializing in effective treatments.",
                  "Specialist training in Southeast Asian facial anatomy and injection technique",
                  "Award-winning practitioners recognised for safety, precision and natural outcomes",
                  "Anatomy-first approach: the right amount placed correctly always outperforms excess volume",
                  "Honest consultations: if chin filler is not the right solution, you will be told clearly before committing to any aesthetic treatments.",
                  "Full aftercare support and structured follow-up included as standard",
                  "MOH-approved products used for every treatment without exception",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <Sparkles
                      size={18}
                      className="text-[#8b2635] shrink-0 mt-0.5"
                    />
                    <span className="text-[#3d2b1f]/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm italic mt-3 text-[#6b4f3a]">
                Allergan/AbbVie Malaysia reported in 2023 that Juvederm Voluma
                remains the most prescribed chin and cheek filler brand in
                Malaysia. This reflects clinician confidence in its structural
                performance and patient preference for longevity.
              </p>
              <p className="text-xs text-[#6b4f3a] mt-1">
                [Citation 2: AbbVie Malaysia Aesthetic Market Summary Report,
                2023]
              </p>
              <p className="mt-3 text-[#6b4f3a] text-sm">
                Patients exploring full facial rejuvenation alongside chin
                filler often consider{" "}
                <a href="#" className="text-[#8b2635] underline">
                  cheek filler in Malaysia
                </a>{" "}
                and nose filler at Nexus Clinic KL.
              </p>
              <button className="mt-4 text-[#8b2635] underline text-sm font-medium">
                Book a Consultation | Speak to an Award-Winning Aesthetic Doctor
              </button>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#8b2635]">
                Filler Products Used for Chin Augmentation at Nexus Clinic
              </h3>
              <p className="text-sm text-[#6b4f3a] mt-2">
                All chin filler treatments at Nexus Clinic KL use MOH-approved
                hyaluronic acid dermal fillers from internationally recognised
                brands. HA is a substance your body already produces. It
                integrates naturally with tissue and carries a strong safety
                record backed by decades of clinical use.
              </p>
              <div className="space-y-5 mt-4">
                {[
                  {
                    name: "Juvederm Voluma",
                    desc: "High-density HA engineered for structural support and forward projection. The most prescribed chin filler brand in Malaysia. Results last 12 to 18 months.",
                  },
                  {
                    name: "Restylane Lyft",
                    desc: "Firm-consistency filler with strong lift and projection capacity. Frequently chosen for patients needing structural correction across both the chin and jawline.",
                  },
                  {
                    name: "Belotero Volume",
                    desc: "Softer HA that integrates naturally into tissue. Preferred for lighter corrections or patients having chin filler for the first time.",
                  },
                  {
                    name: "Radiesse",
                    desc: "Biostimulatory filler made from calcium hydroxylapatite. Adds immediate volume and stimulates collagen production over time. Results last 12 to 24 months. Not reversible with hyaluronidase so patient assessment is more thorough before use.",
                  },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="border-l-4 border-[#8b2635] pl-4"
                  >
                    <p className="font-bold text-[#3d2b1f]">{p.name}</p>
                    <p className="text-[#3d2b1f]/80 text-sm mt-0.5">{p.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[#6b4f3a] text-sm">
                The right product for your treatment is confirmed during your
                consultation based on your anatomy, the degree of correction
                needed, and the result you want to achieve.
              </p>
              <button className="mt-5 text-[#8b2635] underline text-sm font-medium">
                Find Out Which Filler Suits Your Chin | Book a Free Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3d2b1f]">
              The Chin Filler Procedure at Nexus Clinic KL
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                stage: "01",
                title: "Full Facial Assessment",
                desc: "Your doctor reviews your chin in the context of the entire lower face. Front view, 45-degree oblique, and direct side profile are all assessed. Proportions of the nose, lips and jawline all inform the treatment plan.",
              },
              {
                stage: "02",
                title: "Personalised Treatment Plan",
                desc: "Exact placement, volume and product are mapped for your anatomy. Whether the correction needed is forward projection, vertical lengthening, asymmetry correction or a combination, the plan is built around your face. Most patients need 0.5 to 1.5ml. You will know the full plan before anything begins.",
              },
              {
                stage: "03",
                title: "Numbing and Precise Injection",
                desc: "Topical numbing cream is applied before treatment begins. Filler is placed at carefully chosen anatomical points using fine needles or a cannula. The session takes 20 to 30 minutes from start to finish.",
              },
              {
                stage: "04",
                title: "Review and Aftercare",
                desc: "The result is reviewed immediately after treatment to ensure the desired appearance of the chin. Your doctor explains what to expect as the filler settles, provides aftercare instructions and confirms the follow-up process. The shape you see on the day refines slightly over 5 to 7 days, as the filler settles around the chin.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="bg-[#8b2635]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-[#8b2635] text-xs">
                    {item.stage}
                  </span>
                </div>
                <h3 className="font-bold text-base text-center text-[#3d2b1f]">
                  {item.title}
                </h3>
                <p className="text-[#6b4f3a] text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-[#8b2635] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#a83040] transition">
              Ready to Get Started | Book Your Chin Filler Appointment at Nexus
              Clinic KL to explore the latest chin filler prices.
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3d2b1f]">
                Chin Filler Results Patients at Nexus Clinic KL Experience
              </h2>
              <ul className="mt-5 space-y-2">
                {[
                  "A sharper, more defined side profile that holds up in every light and every photo",
                  "Better proportion between the nose, lips, chin and jawline",
                  "A lower face that reads as naturally structured without looking done",
                  "Reduced appearance of a double chin caused by underprojection",
                  "Correction of mild to moderate chin asymmetry",
                  "Increased confidence in photographs, video calls, and face-to-face settings may be achieved through harmonious chin filler enhancements.",
                  "Non-surgical result with no scarring, no stitches and no anaesthesia beyond numbing cream",
                  "Full reversibility for patients who prefer a non-permanent option",
                ].map((r) => (
                  <li key={r} className="flex gap-2">
                    <Star
                      size={18}
                      className="text-[#8b2635] shrink-0 mt-0.5"
                    />
                    <span className="text-[#3d2b1f]/80 text-sm">{r}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 bg-white p-4 rounded-lg text-sm text-[#3d2b1f]">
                96% of patients at Nexus Clinic KL report satisfaction with
                their result at the 3-month review. Most patients need just 1 to
                1.5ml for a result that reads as natural and balanced.
              </p>
              <button className="mt-4 text-[#8b2635] underline text-sm font-medium">
                See Results for Yourself | Book Your Consultation Today
              </button>

              <img
                src="/images/blog-f.png"
                alt="result chin filler"
                className="my-4 rounded-lg"
              />
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3d2b1f]">
                Chin Filler Compared to Chin Implant and Thread Lift
              </h2>
              <div className="overflow-x-auto mt-5">
                <table className="min-w-full bg-white rounded-xl shadow-lg text-sm">
                  <thead className="bg-[#3d2b1f] text-white">
                    <tr>
                      <th className="p-3 text-left">Aspect</th>
                      <th className="p-3 text-left">Chin Filler</th>
                      <th className="p-3 text-left">Chin Implant (Surgery)</th>
                      <th className="p-3 text-left">Thread Lift</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e8ddd5]">
                    {[
                      [
                        "Procedure",
                        "Non-surgical injection",
                        "Surgery under general anaesthesia",
                        "Non-surgical",
                      ],
                      [
                        "Downtime",
                        "Same day return to activities",
                        "1 to 2 weeks recovery",
                        "2 to 5 days",
                      ],
                      [
                        "Duration",
                        "12 to 18 months",
                        "Permanent",
                        "6 to 12 months",
                      ],
                      [
                        "Reversible",
                        "Yes (HA fillers)",
                        "No. Removal surgery required",
                        "Partially",
                      ],
                      [
                        "Anaesthesia",
                        "Topical numbing cream",
                        "General anaesthesia",
                        "Local anaesthesia is often used during aesthetic treatments to ensure comfort during filler injections.",
                      ],
                      [
                        "Scarring",
                        "None",
                        "Small incision scar",
                        "Minimal entry points",
                      ],
                      [
                        "Correction Level",
                        "Mild to moderate",
                        "Moderate to significant improvements in facial aesthetics may be achieved with chin filler.",
                        "Limited",
                      ],
                      [
                        "Cost in Malaysia (2026)",
                        "RM 1,500 to RM 3,500",
                        "RM 8,000 to RM 20,000+",
                        "RM 2,000 to RM 4,500",
                      ],
                      [
                        "Best For",
                        "First-timers, non-surgical preference",
                        "Patients wanting a permanent change",
                        "Soft tissue lifting only may not achieve the desired contour for facial harmony.",
                      ],
                    ].map(([aspect, ...vals]) => (
                      <tr
                        key={aspect}
                        className="hover:bg-cream/40 transition-colors"
                      >
                        <td className="p-3 font-semibold text-[#3d2b1f] align-top">
                          {aspect}
                        </td>
                        {vals.map((v, i) => (
                          <td key={i} className="p-3 text-[#5a3e2b] align-top">
                            {v}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3 text-center text-[#6b4f3a]">
                For patients comparing non-surgical options, our{" "}
                <a href="#" className="text-[#8b2635] underline">
                  dermal filler Malaysia
                </a>{" "}
                page covers the full range of HA filler treatments available at
                Nexus Clinic KL.
              </p>
              <p className="text-center mt-2 text-sm text-[#3d2b1f]">
                Compare your options in person at a clinic in Malaysia. | Book a
                No-Pressure Consultation to discuss the amount of filler used
                for your desired results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES & COST PRICING TABLE ──────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-light">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Advantages & Limitations */}
            <div>
              <h3 className="text-2xl font-bold text-[#8b2635]">
                Honest Advantages and Limitations of Chin Filler
              </h3>
              <h4 className="text-xl font-bold text-[#3d2b1f] mt-5">
                Advantages
              </h4>
              <ul className="mt-3 space-y-1.5 list-disc pl-5 text-[#6b4f3a] text-sm">
                <li>
                  No surgery, no stitches, no scarring and no general
                  anaesthesia required
                </li>
                <li>Visible improvement immediately after treatment</li>
                <li>
                  Fully reversible with hyaluronidase for all HA-based fillers
                </li>
                <li>
                  Temporary result lets you experience the improvement before
                  committing to anything permanent
                </li>
                <li>
                  Can be combined with jawline filler or lip filler for full
                  lower face rebalancing
                </li>
                <li>
                  Natural-looking results when the right volume and technique
                  are used, especially with chin filler Malaysia.
                </li>
                <li>
                  Minimal downtime with effective treatment options available.
                  Most patients return to work the same day
                </li>
              </ul>
              <h4 className="text-xl font-bold text-[#3d2b1f] mt-6">
                Limitations
              </h4>
              <ul className="list-disc pl-5 mt-2 text-[#6b4f3a] text-sm space-y-1.5">
                <li>
                  Results are not permanent. Top-up treatments typically needed
                  every 12 to 18 months
                </li>
                <li>
                  Injector experience matters significantly. Wrong technique or
                  excess volume produces an unnatural result
                </li>
                <li>
                  Not suitable for patients with severe skeletal
                  underdevelopment who may need surgical assessment
                </li>
                <li>
                  Radiesse is not dissolvable and requires more thorough patient
                  screening
                </li>
                <li>
                  Mild bruising or swelling may occasionally be visible for
                  several days
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#3d2b1f] mt-8">
                Chin Filler Aftercare Instructions
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm mt-3 bg-cream p-4 rounded-xl">
                {[
                  "✓ Avoid pressing, rubbing or massaging the chin area for at least 48 hours",
                  "✓ Avoid sleeping face-down for the first two nights",
                  "✓ Skip intense exercise for the first 24 hours",
                  "✓ Stay away from saunas, steam rooms and prolonged heat exposure for 48 hours",
                  "✓ Avoid alcohol for the first 24 hours to reduce bruising and swelling risk",
                  "✓ Do not book facial massages or skin treatments for at least two weeks after treatment",
                  "✓ Give the filler 5 to 7 days to fully settle before assessing the final result",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-[#5a3e2b] text-xs sm:text-sm list-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-[#6b4f3a]">
                Most patients see no visible signs of treatment within 24 to 48
                hours. The shape refines slightly over the first week as any
                mild swelling resolves.
              </p>
            </div>

            {/* PRICE TABLE */}
            <div>
              <h3 className="text-2xl font-bold text-[#3d2b1f]">
                Chin Filler Cost in Malaysia | Transparent 2026 Pricing
              </h3>
              <p className="bg-white p-4 rounded-lg mt-3 text-[#6b4f3a] text-sm">
                Chin filler in Malaysia costs between RM 1,500 and RM 3,500 per
                session in 2026. The range reflects real differences between
                patients rather than arbitrary pricing tiers.
              </p>

              {/* Pricing Table */}
              <div className="overflow-x-auto mt-5">
                <table className="w-full bg-white rounded-xl shadow-lg text-sm border border-[#e8ddd5] min-w-[320px]">
                  <thead>
                    <tr className="bg-[#8b2635] text-white">
                      <th className="px-4 py-3 text-left rounded-tl-xl">
                        Filler Brand / Type
                      </th>
                      <th className="px-4 py-3 text-left">Volume</th>
                      <th className="px-4 py-3 text-left rounded-tr-xl">
                        Est. Price (RM)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e8ddd5]">
                    {[
                      [
                        "Juvederm Voluma (Premium HA)",
                        "1 cc",
                        "RM 2,200 – RM 3,000",
                      ],
                      [
                        "Juvederm Voluma (Premium HA)",
                        "1.5 cc",
                        "RM 3,000 – RM 3,500",
                      ],
                      [
                        "Restylane Lyft (Premium HA)",
                        "1 cc",
                        "RM 2,000 – RM 2,800",
                      ],
                      ["Belotero Volume (HA)", "1 cc", "RM 1,500 – RM 2,200"],
                      [
                        "Radiesse (Biostimulator)",
                        "1.5 cc",
                        "RM 2,500 – RM 3,500",
                      ],
                      [
                        "Subtle / First-Timer Correction",
                        "0.5 cc",
                        "RM 1,500 – RM 2,000",
                      ],
                    ].map(([brand, vol, price], i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-cream/30" : "bg-white"}
                      >
                        <td className="px-4 py-3 text-[#3d2b1f] font-medium">
                          {brand}
                        </td>
                        <td className="px-4 py-3 text-[#5a3e2b]">{vol}</td>
                        <td className="px-4 py-3 font-semibold text-[#8b2635]">
                          {price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-[#3d2b1f]/5">
                      <td
                        colSpan={3}
                        className="px-4 py-3 text-xs text-[#6b4f3a] italic rounded-b-xl"
                      >
                        * Final pricing confirmed at consultation. Price depends
                        on filler brand, volume required and complexity.
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Cost factors */}
              <ul className="list-disc pl-5 mt-4 text-[#6b4f3a] text-sm space-y-1.5">
                <li>
                  Filler brand and grade: Premium brands such as Juvederm Voluma
                  and Restylane Lyft carry a higher cost. The difference
                  reflects longevity, consistency and clinical track record
                </li>
                <li>
                  Volume required: Subtle forward projection may need 0.5 to
                  1ml. More significant underprojection or asymmetry may require
                  1.5 to 2ml of filler injections for optimal results.
                </li>
                <li>
                  Complexity of correction: A single forward projection differs
                  from a combined treatment addressing projection, vertical
                  length and asymmetry
                </li>
                <li>
                  Combination treatments: Chin filler is often performed
                  alongside jawline or lip filler. Combined sessions are priced
                  accordingly, especially for fillers may be more
                  cost-effective.
                </li>
              </ul>
              <p className="mt-3 text-[#6b4f3a] text-sm">
                Your quote at Nexus Clinic KL is confirmed after consultation.
                You leave knowing exactly what is included before any commitment
                is made.
              </p>
              <button className="mt-4 text-[#8b2635] underline text-sm font-medium">
                Get Your Personalised Price | Book a Free Consultation at Nexus
                Clinic KL
              </button>
            </div>
          </div>
          <div className="my-4 bg-light!">
            <SectionBeforeAfter transformations={transformations} />
          </div>

          {/* Longevity & Side Effects */}
          <div className="mt-14">
            <h3 className="text-2xl font-bold text-center text-[#3d2b1f]">
              How Long Chin Filler Lasts in Malaysia
            </h3>
            <div className="max-w-3xl mx-auto space-y-3 mt-4 text-center text-[#6b4f3a] text-sm sm:text-base">
              <p>
                Chin filler results typically last 12 to 18 months in Malaysia.
                The exact duration depends on the filler brand used, the volume
                placed, your individual metabolism and lifestyle, as well as the
                benefits of chin filler.
              </p>
              <p>
                HA fillers are gradually broken down by the body over time. Most
                Nexus Clinic patients schedule a top-up around the 12-month mark
                to maintain their result before the filler fully metabolises.
                Maintenance volume required is usually less than the original
                treatment, making top-up sessions more cost-efficient.
              </p>
              <p>
                Radiesse may last up to 24 months in some patients and provides
                an additional benefit through collagen biostimulation. It is not
                reversible and requires careful patient selection.
              </p>
              <p>
                Patients who want to maintain overall skin quality alongside
                their filler often explore{" "}
                <a href="#" className="text-[#8b2635] underline">
                  skin booster treatment in Malaysia
                </a>{" "}
                at Nexus Clinic KL.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mt-10 text-[#3d2b1f]">
              Side Effects of Chin Filler | Temporary and Rare
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-5 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="font-bold text-[#8b2635]">
                  Common Temporary Effects
                </p>
                <ul className="list-disc pl-5 text-sm mt-2 text-[#6b4f3a] space-y-1">
                  <li>
                    Mild swelling at the injection site, typically resolving
                    within 2 to 4 days
                  </li>
                  <li>
                    Light bruising, uncommon but possible, usually fading within
                    5 to 7 days
                  </li>
                  <li>
                    Tenderness or sensitivity in the treated area for 24 to 48
                    hours
                  </li>
                  <li>
                    Mild redness immediately after treatment, settling within a
                    few hours
                  </li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="font-bold text-[#8b2635]">Rare Risks</p>
                <ul className="list-disc pl-5 text-sm mt-2 text-[#6b4f3a] space-y-1">
                  <li>
                    Lumpiness or irregular texture if filler is placed
                    incorrectly
                  </li>
                  <li>
                    Infection at the injection site, extremely rare when sterile
                    technique is used
                  </li>
                  <li>
                    Allergic reaction to filler material, very rare with HA
                    products
                  </li>
                  <li>
                    Vascular occlusion, a serious but rare complication
                    requiring an injector trained in complication management
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center mt-4 text-[#6b4f3a] text-sm max-w-3xl mx-auto">
              All chin filler at Nexus Clinic KL is performed by licensed
              medical doctors trained in advanced facial anatomy. MOH-approved
              products are used for every treatment. Your full medical history
              is reviewed at consultation before any treatment is confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#3d2b1f]">
            Frequently Asked Questions About Chin Filler in Malaysia
          </h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}

            {/* Extended FAQ from original */}
            {[
              {
                q: "How painful is chin filler in Malaysia? You may experience some discomfort during the procedure.",
                a: "Most patients describe the experience as light pressure rather than pain. Numbing cream is applied before treatment begins. The injection itself takes only a few minutes once the area is numb, allowing for quick aesthetic treatments. The majority of patients are surprised by how manageable the process is.",
              },
              {
                q: "How much does chin filler cost in Malaysia in 2026?",
                a: "Chin filler in Malaysia ranges from RM 1,500 to RM 3,500 per session in 2026. The final figure depends on the filler brand, volume required and complexity of the correction. Pricing is confirmed after your consultation at Nexus Clinic KL so you know exactly what is included before committing.",
              },
              {
                q: "How long do chin filler results last in Malaysia?",
                a: "Results typically last 12 to 18 months. Hyaluronic acid fillers are gradually metabolised by the body over time. Radiesse may last up to 24 months in some patients. Most Nexus Clinic patients schedule a maintenance top-up around the 12-month mark.",
              },
              {
                q: "Can chin filler results be reversed?",
                a: "Hyaluronic acid chin fillers are fully dissolvable with hyaluronidase. This is one of the most significant safety advantages of HA-based products and a key reason many first-time patients prefer them. If you are unhappy with the outcome, the filler used can be completely removed to restore the original contour.",
              },
              {
                q: "Will chin filler results look natural?",
                a: "With the right technique and appropriate volume, the result reads as structural definition rather than obvious augmentation. Overfilling is the most common cause of an unnatural result. The doctors at Nexus Clinic KL use a restrained, anatomy-first approach where the right amount always outperforms more volume placed carelessly.",
              },
              {
                q: "Can chin filler fix facial asymmetry?",
                a: "Mild to moderate chin asymmetry caused by genetics, injury, dental extractions or jaw correction can often be improved significantly with filler. The doctor assesses the degree and origin of the asymmetry at consultation and gives an honest picture of what is achievable without surgery. Severe structural asymmetry may require a surgical opinion.",
              },
              {
                q: "How quickly do results appear after chin filler treatments to reshape the chin contour?",
                a: "The improvement is visible immediately after treatment. Mild swelling in the first 24 to 48 hours may slightly soften the appearance of the crease before the filler settles around the chin. The final result is typically clear within 5 to 7 days after the filler used settles. Most patients see their best outcome within one week.",
              },
              {
                q: "Can chin filler be combined with other treatments?",
                a: "Chin filler is regularly combined with jawline filler, lip filler or nose filler as part of full lower face balancing. Treating the chin in isolation when surrounding areas also contribute to the imbalance produces a partial result. Your doctor will recommend whether a single-area or combined treatment better serves your specific concern. Patients who experience tear trough hollowing alongside a weak chin often benefit from addressing both in the same visit.",
              },
              {
                q: "Is chin filler safe in Malaysia?",
                a: "Chin filler is a safe, well-established treatment when performed by a licensed medical doctor using MOH-approved products in a proper clinical environment. The risks, including bruising, swelling and the rare risk of vascular complications, are directly related to injector skill and product quality. At Nexus Clinic KL, all treatments are performed by qualified doctors trained in facial anatomy and emergency complication management.",
              },
              {
                q: "Who is a good candidate for chin filler in KL?",
                a: "Chin filler works best for patients with a recessed or underprojected chin, age-related lower face volume loss, mild to moderate asymmetry, or those wanting a non-surgical option with minimal recovery. Patients with significant skeletal underdevelopment, active skin infections in the area, or those who are pregnant or breastfeeding are not suitable. A full medical assessment at consultation determines suitability for each individual.",
              },
            ].map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-light">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center bg-white p-8 sm:p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#3d2b1f]">
              Book Chin Filler Consultation at Nexus Clinic Kuala Lumpur Today
            </h3>
            <p className="text-[#6b4f3a] mt-4 text-sm sm:text-base leading-relaxed">
              One consultation is all it takes to understand exactly what chin
              filler can do for your profile and whether it is the right step
              for you. No pressure. No upselling. Just a clinical assessment, an
              honest plan, and transparent pricing confirmed before you commit
              to anything.
            </p>
            <p className="text-[#3d2b1f] mt-3 font-semibold text-sm sm:text-base">
              Over 5,000 procedures. Award-winning injectors specializing in
              chin filler in Selangor. Results that look like you at your best.
            </p>
            <button className="mt-6 bg-[#8b2635] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#a83040] transition text-sm sm:text-base">
              Book Your Free Consultation Now to learn about the benefits of
              chin filler. | Limited Slots Available This Week
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChinFillerLanding;
