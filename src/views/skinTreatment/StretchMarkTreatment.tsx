"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Droplets,
  Zap,
  CheckCircle2,
  ArrowRight,
  Touchpad,
  Combine,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "@/src/components/FAQ";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const StretchMarkLanding = () => {
  const treatments = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Dermaroller and Microneedling for Stretch Marks",
      description:
        "Microneedling creates tiny controlled micro-injuries in the skin. As the skin heals, it produces collagen and elastin that can improve texture and scars. Mayo Clinic Health System explains this collagen induction process clearly. (mayoclinichealthsystem.org) Cleveland Clinic also lists microneedling among treatment options for stretch marks. (my.clevelandclinic.org)",
      bestFor: [
        "early to mid-stage stretch marks",
        "people who want low downtime",
        "areas like thighs, hips, buttocks, arms",
      ],
      bgColor: "bg-cream",
      borderColor: "border-rose",
      footer:
        "What it feels like: mild prickly sensation. Numbing cream can help. Typical sessions: often a series. Many clinics plan multiple sessions because collagen builds gradually.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Fractional CO2 Laser Stretch Mark Treatment",
      description:
        "Fractional CO2 laser is often used for scars and texture. It creates tiny columns of controlled “micro-treatment zones” in the skin, encouraging new collagen and resurfacing over time. Nexus Clinic lists Fractional CO2 Laser as a key stretch mark treatment in KL. (nexus-clinic.com) A Malaysia clinic resource also notes different lasers may be used for stretch marks, including fractional and CO2, with choice based on severity and skin type. (drjaneclinic.com)",
      bestFor: [
        "older white stretch marks that need stronger remodeling",
        "thicker texture changes",
        "people who can follow aftercare well (this is important)",
      ],
      bgColor: "bg-rose bg-opacity-10",
      borderColor: "border-wine",
      footer:
        "Downtime: usually more than microneedling. Expect redness and sensitivity for a few days, sometimes longer depending on settings. Skin tone note for Malaysia: Laser settings should be chosen carefully for medium to deeper skin tones to reduce the risk of post-inflammatory hyperpigmentation.",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Carboxytherapy for Stretch Marks",
      description:
        "Carboxytherapy uses controlled medical CO2 delivery to the skin. It is often positioned to support circulation and collagen stimulation for concerns like stretch marks and skin laxity. Nexus Clinic offers Carboxy Therapy in Malaysia and provides clinic contact details and service positioning online. (nexus-clinic.com)",
      bestFor: [
        "mild to moderate stretch marks",
        "patients who want an “add-on” to boost results with microneedling or laser",
        "areas like abdomen, thighs, buttocks",
      ],
      bgColor: "bg-taupe bg-opacity-10",
      borderColor: "border-brown",
      footer:
        "What it feels like: temporary pressure or tingling. Most people tolerate it well.",
    },
    {
      icon: <Touchpad className="w-6 h-6" />,
      title: "Topical Retinoids for New Stretch Marks (At-Home Support)",
      description:
        "If your stretch marks are new (less than a few months), topical tretinoin may improve appearance in some cases by supporting collagen rebuilding. Mayo Clinic notes tretinoin may help stretch marks that are less than a few months old, but it can irritate skin. (mayoclinic.org).",
      bgColor: "bg-taupe bg-opacity-10",
      borderColor: "border-brown",
      footer:
        "Important: tretinoin is not used in pregnancy, and your doctor should guide you if you are breastfeeding or planning pregnancy.",
    },
    {
      icon: <Combine className="w-6 h-6" />,
      title: "Combination Treatment (Often the Best Results)",
      description:
        "Many dermatology and aesthetic discussions note that combining treatments can improve outcomes for stretch marks, such as using microneedling-based technology and fractional lasers together. A peer-reviewed article discussing microfocused ultrasound and skin therapies notes better aesthetic results have been demonstrated when more than one therapy is used for stretch marks, including combining fractionated microneedle radiofrequency and fractional CO2 laser. (pmc.ncbi.nlm.nih.gov)",
      bgColor: "bg-taupe bg-opacity-10",
      borderColor: "border-brown",
      footer:
        "Even if you are not doing RF microneedling specifically, the lesson is the same: stretch marks often respond best to a layered plan, not a single one-off session.",
    },
  ];

  const areas = [
    "Perut & pinggang",
    "Paha (dalam & luar)",
    "Pinggul",
    "Bokong",
    "Payudara",
    "Lengan atas",
    "Punggung & bahu",
  ];

  const faqs = [
    {
      q: "Can stretch marks be removed completely?",
      a: "Stretch marks often fade, but they may not disappear completely. Treatment usually improves appearance and texture rather than fully erasing them. (mayoclinic.org)",
    },
    {
      q: "What is the best treatment for stretch marks in Malaysia?",
      a: "There is no single best treatment for everyone. Many clinics use microneedling, fractional CO2 laser, and combination plans. Nexus Clinic offers Fractional CO2 Laser, Carboxytherapy, and Dermaroller for stretch marks. (nexus-clinic.com)",
    },
    {
      q: "Is laser better than microneedling for stretch marks?",
      a: "Laser can be stronger for older white marks and texture, while microneedling is a lower-downtime collagen option. Many people do best when treatments are combined or planned in stages. (pmc.ncbi.nlm.nih.gov)",
    },
    {
      q: "Does tretinoin cream work for stretch marks?",
      a: "Tretinoin may improve the appearance of stretch marks that are less than a few months old, but it can irritate skin and is not suitable for everyone. (mayoclinic.org)",
    },
    {
      q: "How many sessions do I need to remove stretch marks?",
      a: "Most people need multiple sessions, especially for older marks. Your exact number depends on mark age, depth, and the treatment type used.",
    },
    {
      q: "Is stretch mark treatment painful?",
      a: "Many treatments are tolerable. Numbing cream is commonly used for microneedling and laser-based procedures. Discomfort varies by body area and sensitivity.",
    },
    {
      q: "How long is downtime after fractional CO2 laser?",
      a: "Downtime depends on settings and your skin response. Expect redness and sensitivity for several days, sometimes longer. Your clinic will guide recovery.",
    },
    {
      q: "Can stretch marks come back after treatment?",
      a: "Treated marks do not usually 'come back,' but new stretch marks can form if your skin stretches quickly again. Prevention and lifestyle habits still matter.",
    },
    {
      q: "Is stretch mark removal safe for darker skin in Malaysia?",
      a: "Yes, but settings must be chosen carefully because pigment change risk can be higher in medium to deeper skin tones. A good clinic plans conservatively and prioritises aftercare.",
    },
    {
      q: "Can I do stretch mark removal during pregnancy or breastfeeding?",
      a: "Some treatments may not be suitable during pregnancy or early breastfeeding. Nexus Clinic advises discussing safe options with your provider. (nexus-clinic.com)",
    },
    {
      q: "What areas can be treated?",
      a: "Common areas include abdomen, thighs, hips, buttocks, breasts, and arms. Mayo Clinic lists common body locations where stretch marks appear. (mayoclinic.org)",
    },
    {
      q: "How much does stretch mark removal cost in Kuala Lumpur?",
      a: "Public directory listings show starting prices from about RM286, and some clinics list stretch mark treatment starting from RM499. Exact cost depends on area size and number of sessions. (whatclinic.com)",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-stretch-mark1.webp",
      after: "/images/B&A-skin/B&A-stretch-mark1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-stretch-mark2.webp",
      after: "/images/B&A-skin/B&A-stretch-mark2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-stretch-mark3.webp",
      after: "/images/B&A-skin/B&A-stretch-mark3.webp",
    },
  ];

  return (
    <main className="min-h-screen bg-light font-[--font-inter] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-wine rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full filter blur-3xl"></div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-6 relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown">
                  Nexus Clinic Kuala Lumpur
                </span>
              </div>

              <h2 className="font-georgia text-5xl lg:text-5xl text-brown leading-tight">
                Stretch Mark Removal in Malaysia at
                <span className="text-wine block">
                  Nexus Clinic Kuala Lumpur
                </span>
              </h2>

              <p className="text-xl text-taupe leading-relaxed">
                Stretch marks are common. Feeling uncomfortable about them is
                common too. Let's fade them safely.
              </p>

              <p className="text-lg text-brown">
                Whether your stretch marks came from pregnancy, weight change,
                or gym gains, you deserve options that actually make sense. At
                Nexus Clinic Kuala Lumpur, we focus on realistic improvement,
                better texture, and a plan that suits your skin tone.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-wine text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all"
                >
                  Start Your Consultation <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-rose text-rose px-8 py-4 rounded-full font-semibold hover:bg-rose hover:text-white transition-all"
                >
                  View Treatment Options
                </motion.button>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="relative">
              <div className="bg-cream rounded-3xl p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-georgia text-xl text-brown mb-3">
                      Trusted Care in KL
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-taupe">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                        <span>
                          Central Kuala Lumpur clinic with private consults and
                          body skin treatments
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-taupe">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                        <span>
                          Targeted solutions: Fractional CO2 Laser,
                          Carboxytherapy, Dermaroller
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-taupe">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                        <span>
                          Honest expectations: fade and smooth with the right
                          approach (mayoclinic.org)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-wine text-white rounded-2xl p-6">
                    <p className="font-georgia text-lg mb-2">Visit Us Today</p>
                    <p className="text-sm opacity-90">
                      LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang,
                      50450 Kuala Lumpur
                    </p>
                    <p className="text-sm mt-2">📞 016-7025699 / 03-21635699</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Are Stretch Marks Section */}
      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-6"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                What Are Stretch Marks?
              </h2>
              <p className="text-lg text-taupe leading-relaxed">
                Stretch marks (also called striae) are lines that form when skin
                stretches or shrinks quickly. This rapid change can cause the
                deeper layer of skin to tear and heal in a different way. That
                is why stretch marks are a type of scar. (mayoclinic.org)
              </p>

              <div className="bg-cream rounded-2xl p-6">
                <h3 className="font-semibold text-brown mb-3">
                  They commonly appear on:
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Stomach and waist",
                    "Thighs and hips",
                    "Buttocks",
                    "Breasts",
                    "Upper arms",
                    "Lower back",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-taupe">
                      <span className="w-1.5 h-1.5 bg-wine rounded-full"></span>
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-taupe italic">
                  Stretch marks are not harmful. They are not dangerous. Many
                  people simply do not like how they look. Mayo Clinic notes
                  they often fade over time, but they may never disappear
                  completely. (mayoclinic.org)
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="bg-linear-to-br from-wine to-rose rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-6">
                  <img
                    src="/images/skin/stretch-mark.webp"
                    alt="Stretch marks visualization"
                    className="rounded-2xl w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* New vs Old Stretch Marks */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            New Stretch Marks vs Old Stretch Marks
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12 max-w-2xl mx-auto"
          >
            This is one of the most important things to understand.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-rose"
            >
              <h3 className="font-georgia text-2xl text-rose mb-3">
                New stretch marks (red or purple)
              </h3>
              <p className="text-taupe">
                These are often called striae rubra. They are newer and may
                respond faster to treatment because the skin is still actively
                changing.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-brown"
            >
              <h3 className="font-georgia text-2xl text-brown mb-3">
                Old stretch marks (white or silvery)
              </h3>
              <p className="text-taupe">
                These are often called striae alba. They are older and usually
                need more sessions because the scar is more established.
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center mt-8 text-brown font-medium"
          >
            Your treatment plan depends on which type you have, and where they
            are on your body.
          </motion.p>
        </motion.div>
      </section>

      {/* Why Stretch Marks Happen */}
      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-6"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6"
            >
              Why Stretch Marks Happen
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
            >
              {[
                "Pregnancy",
                "Weight gain or loss",
                "Puberty growth spurts",
                "Rapid muscle growth",
                "Family tendency",
                "Skin healing patterns",
              ].map((cause, i) => (
                <div key={i} className="bg-cream p-4 rounded-xl">
                  <p className="text-brown">{cause}</p>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeInUp} className="text-taupe italic">
              If your skin makes stretch marks easily, it does not mean you did
              something wrong. It means your skin heals in a certain way.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* What Removal Really Means */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-6"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-4"
            >
              Stretch Mark Removal: What "Removal" Really Means
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-wine mb-6">
              Let's keep it real.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-taupe mb-8">
              Most medical sources say stretch marks often fade, and treatment
              aims to improve texture and reduce visibility, not guarantee total
              erasing. (mayoclinic.org)
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="grid sm:grid-cols-2 gap-4 text-left"
            >
              {[
                "Smoother texture",
                "Better blending with surrounding skin",
                "Less obvious lines in daylight and photos",
                "Improved confidence in swimsuits, gym wear, and fitted clothes",
              ].map((goal, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-brown">{goal}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Stretch Mark Treatments in Malaysia
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12 max-w-2xl mx-auto"
          >
            Options That Actually Make Sense
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className={`rounded-2xl p-6 bg-cream border-l-4 ${treatment.borderColor} shadow-lg`}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-wine">
                  {treatment.icon}
                </div>
                <h3 className="font-georgia text-xl text-brown mb-3">
                  {treatment.title}
                </h3>
                <p className="text-taupe text-sm mb-4">
                  {treatment.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-brown">Best for:</p>
                  {treatment.bestFor &&
                    treatment.bestFor.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm text-taupe"
                      >
                        <span className="w-1 h-1 bg-wine rounded-full mt-2"></span>
                        {item}
                      </div>
                    ))}
                </div>
                <div className="space-y-2 mt-4">
                  <p className="text-sm text-taupe">{treatment.footer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-cream rounded-2xl p-6"
          >
            <h4 className="font-georgia text-xl text-brown mb-3">
              Additional Options:
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-wine mb-2">
                  Topical Retinoids for New Stretch Marks
                </h5>
                <p className="text-sm text-taupe">
                  If your stretch marks are new (less than a few months),
                  topical tretinoin may improve appearance in some cases by
                  supporting collagen rebuilding. (mayoclinic.org)
                </p>
                <p className="text-xs text-brown mt-2 italic">
                  Important: tretinoin is not used in pregnancy.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-wine mb-2">
                  Combination Treatment
                </h5>
                <p className="text-sm text-taupe">
                  Many dermatology discussions note that combining treatments
                  can improve outcomes. A peer-reviewed article discussing skin
                  therapies notes better aesthetic results have been
                  demonstrated when more than one therapy is used.
                  (pmc.ncbi.nlm.nih.gov)
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Common Treatment Areas */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Areas We Commonly Treat
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            Stretch mark removal in Kuala Lumpur is most commonly requested for:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {areas.map((area, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 text-center shadow-sm"
              >
                <p className="text-brown font-medium">{area}</p>
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeInUp} className="text-center mt-6 text-taupe">
            Your plan can be full-area or targeted. Many people start with one
            area, see improvement, then move to the next.
          </motion.p>
        </motion.div>
      </section>

      {/* Consultation Section */}
      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-6"
        >
          <div className="max-w-3xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-4"
            >
              What to Expect at Your Stretch Mark Consultation
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-8"
            >
              A good consult should feel simple and respectful.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4">
              {[
                "Step 1: We assess your stretch marks - new vs old, depth and texture, skin tone and sensitivity, area size",
                "Step 2: We choose your best-fit treatment - Fractional CO2 Laser, Carboxytherapy, or Dermaroller based on your marks and downtime preference",
                "Step 3: You get a clear plan - how many sessions, realistic results, aftercare rules, prevention tips",
              ].map((step, i) => (
                <div key={i} className="flex gap-4 bg-cream p-4 rounded-xl">
                  <div className="w-8 h-8 bg-wine text-white rounded-full flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-brown">{step}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Sessions & Downtime */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-6"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <h2 className="font-georgia text-3xl text-brown">
                How Many Sessions Do You Need?
              </h2>
              <p className="text-taupe">
                There is no one answer. It depends on:
              </p>
              <ul className="space-y-2">
                {[
                  "Whether marks are red or white",
                  "How wide and deep the lines are",
                  "Your age and collagen response",
                  "Your skin tone (treatment settings and recovery can differ)",
                  "Whether you choose combination therapy",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-brown">
                    <span className="w-1.5 h-1.5 bg-wine rounded-full mt-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-taupe italic">
                Many people see improvement after a few sessions, but best
                results typically build across a series because collagen takes
                time.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              <h2 className="font-georgia text-3xl text-brown">
                Downtime, Side Effects, and Safety
              </h2>
              <div className="bg-white rounded-xl p-4">
                <h3 className="font-semibold text-wine mb-2">
                  Microneedling / dermaroller
                </h3>
                <p className="text-sm text-taupe">
                  Redness for 1-2 days, mild swelling, temporary sensitivity
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h3 className="font-semibold text-wine mb-2">
                  Fractional CO2 laser
                </h3>
                <p className="text-sm text-taupe">
                  redness and warmth, dryness and flaking, risk of pigment
                  change if aftercare is not followed, downtime can be several
                  days or longer depending on intensity
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h3 className="font-semibold text-wine mb-2">Carboxytherapy</h3>
                <p className="text-sm text-taupe">
                  Temporary swelling or pressure, mild bruising in some cases
                </p>
              </div>
              <p className="text-taupe text-sm mt-4">
                Your provider should give aftercare instructions. Follow them
                strictly, especially sun protection.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Aftercare */}
      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-6"
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-4"
            >
              Aftercare That Protects Your Results
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-taupe mb-6">
              This is where results are won or lost.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-6 text-left space-y-3"
            >
              {[
                "Avoid tanning and strong sun exposure",
                "Keep the area moisturised",
                "Avoid harsh scrubs until fully healed",
                "Wear loose clothing on treated areas for a day or two",
                "Follow your clinic's instructions about exercise and shower timing",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  <span className="text-brown">{tip}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <p className="text-sm text-taupe my-4 text-center">
            Sun protection matters even on body areas, especially if you wear
            sleeveless tops or swimwear often.
          </p>
        </motion.div>
      </section>

      {/* Cost Section */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-6"
        >
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-4">
              Stretch Mark Removal Cost in Malaysia
            </h2>
            <p className="text-xl text-wine font-light mb-3">
              Kuala Lumpur Pricing Reality
            </p>
            <p className="text-taupe">
              Prices vary because stretch marks vary. Area size matters a lot.
            </p>
          </motion.div>

          {/* Pricing Cards - Real Public References */}
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
          >
            {/* Card 1 - Directory Listings */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-b-4 border-rose">
              <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mb-4">
                <span className="text-wine font-bold text-lg">1</span>
              </div>
              <p className="text-3xl font-georgia text-wine mb-2">RM286+</p>
              <p className="text-sm text-brown font-medium mb-3">
                Starting from Directory Listings
              </p>
              <p className="text-xs text-taupe leading-relaxed">
                Stretch mark removal in Kuala Lumpur with prices starting from
                RM286 (varies by clinic and treatment type). (whatclinic.com)
              </p>
            </div>

            {/* Card 2 - Premier Clinic */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-b-4 border-wine">
              <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mb-4">
                <span className="text-wine font-bold text-lg">2</span>
              </div>
              <p className="text-3xl font-georgia text-wine mb-2">RM499+</p>
              <p className="text-sm text-brown font-medium mb-3">
                Premier Clinic
              </p>
              <p className="text-xs text-taupe leading-relaxed">
                Stretch marks treatment pricing "starts from RM499," and
                references dermaroller in its services. (premier-clinic.com)
              </p>
            </div>

            {/* Card 3 - Microneedling Range */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-b-4 border-brown">
              <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mb-4">
                <span className="text-wine font-bold text-lg">3</span>
              </div>
              <p className="text-3xl font-georgia text-wine mb-2">
                RM300 - RM2,500
              </p>
              <p className="text-sm text-brown font-medium mb-3">
                Microneedling Sessions
              </p>
              <p className="text-xs text-taupe leading-relaxed">
                Malaysia microneedling pricing overview: sessions range widely,
                approximately RM300 to RM2,500 per session, depending on device
                and clinic. (cliqueclinic.com)
              </p>
            </div>
          </motion.div>

          {/* What Affects Cost The Most */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
              <h3 className="font-georgia text-2xl md:text-3xl text-brown mb-6 text-center">
                What affects cost the most
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center shrink-0">
                      <span className="text-wine font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-brown">Treatment type</p>
                      <p className="text-sm text-taupe">
                        Laser often costs more than microneedling
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center shrink-0">
                      <span className="text-wine font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-brown">
                        Size of the area
                      </p>
                      <p className="text-sm text-taupe">
                        Full abdomen vs small hip section
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center shrink-0">
                      <span className="text-wine font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-brown">
                        Number of sessions
                      </p>
                      <p className="text-sm text-taupe">
                        Multiple sessions often needed for optimal results
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center shrink-0">
                      <span className="text-wine font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-semibold text-brown">
                        Combine treatments
                      </p>
                      <p className="text-sm text-taupe">
                        Whether you choose combination therapy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center shrink-0">
                      <span className="text-wine font-bold">5</span>
                    </div>
                    <div>
                      <p className="font-semibold text-brown">
                        Aftercare products
                      </p>
                      <p className="text-sm text-taupe">
                        Sometimes optional, sometimes recommended
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Tip - Highlighted */}
              <div className="bg-wine rounded-xl p-6 text-center">
                <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-3">
                  <span className="text-wine text-sm font-semibold">
                    BEST TIP
                  </span>
                </div>
                <p className="text-white text-lg md:text-xl font-light">
                  Ask for an itemised plan with session count,
                  <span className="font-bold block mt-1">
                    not only "price per session"
                  </span>
                </p>
              </div>

              {/* Additional Context */}
              <p className="text-xs text-taupe text-center mt-6">
                *Prices are indicative and may vary based on individual
                assessment and current clinic promotions
              </p>
            </div>
          </motion.div>

          {/* Nexus Clinic Note */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 text-center max-w-2xl mx-auto"
          >
            <div className="bg-cream rounded-xl p-4 border border-rose border-opacity-30">
              <p className="text-brown text-sm">
                <span className="font-semibold">
                  Nexus Clinic Kuala Lumpur:
                </span>{" "}
                Contact us for a personalised treatment plan with transparent
                pricing based on your specific needs.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Competitor Snapshot */}
      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Competitor Snapshot
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            What Top Clinics in Malaysia Are Doing
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-cream rounded-xl p-6">
              <h3 className="font-georgia text-xl text-brown mb-3">
                Price-led positioning
              </h3>
              <p className="text-sm text-taupe">
                Some clinics publish "starting from" prices. Premier Clinic
                lists from RM499.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-6">
              <h3 className="font-georgia text-xl text-brown mb-3">
                Laser-first content
              </h3>
              <p className="text-sm text-taupe">
                Clinics explain different laser types for older marks.
                (drjaneclinic.com)
              </p>
            </div>
            <div className="bg-cream rounded-xl p-6">
              <h3 className="font-georgia text-xl text-brown mb-3">
                Directory platforms
              </h3>
              <p className="text-sm text-taupe">
                WhatClinic and ERUFU Care rank multiple KL providers.
                (whatclinic.com)
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 text-center max-w-2xl mx-auto"
          >
            <h3 className="font-georgia text-xl text-brown mb-3">
              How Nexus Clinic KL stands out
            </h3>
            <p className="text-taupe">
              Nexus Clinic already lists a focused stretch mark menu (Fractional
              CO2 Laser, Carboxytherapy, Dermaroller) and sets realistic
              expectations about reduction, not guaranteed total removal.
              (nexus-clinic.com)
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQ data={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-6 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-white mb-4"
          >
            Start Your Journey Today
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white opacity-90 mb-8 max-w-2xl mx-auto"
          >
            If you're searching for stretch mark removal in Malaysia or stretch
            marks treatment in Kuala Lumpur, start with a plan that's honest,
            safe, and built for your skin.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto"
          >
            <p className="text-wine font-georgia text-xl mb-2">
              Nexus Clinic Kuala Lumpur
            </p>
            <p className="text-wine text-sm mb-2">
              LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala
              Lumpur
            </p>
            <p className="text-wine text-lg">📞 016-7025699 / 03-21635699</p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default StretchMarkLanding;
