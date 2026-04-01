"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  UserCheck,
  Calendar,
  MapPin,
  AlertCircle,
  Scissors,
  Droplets,
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

const HairTransplantLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "hair/hairTransplant");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-hair-transplant1.webp",
      after: "/images/B&A-hair/B&A-hair-transplant1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-hair-transplant2.webp",
      after: "/images/B&A-hair/B&A-hair-transplant2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-hair-transplant3.webp",
      after: "/images/B&A-hair/B&A-hair-transplant3.webp",
    },
  ];

  const quickAnswers = [
    {
      question: "Is hair transplant permanent?",
      answer:
        "In many cases, yes, because donor hair is usually more resistant to hair loss.",
    },
    {
      question: "Is it painful?",
      answer:
        "Most people feel pressure, not sharp pain, because local anaesthesia is used.",
    },
    {
      question: "How long until results look 'done'?",
      answer: "Full results often take 12 to 18 months.",
    },
    {
      question: "How much does it cost in Malaysia?",
      answer:
        "Many clinics quote anywhere from about RM 5,500 to RM 30,000, depending on grafts and method.",
    },
  ];

  const methods = [
    {
      name: "FUE (Follicular Unit Extraction)",
      description:
        "FUE removes follicles one by one, then places them where needed. It tends to leave tiny dot scars that are hard to notice.",
      pros: [
        "No long strip scar",
        "Faster healing for many people",
        "Works well for hairline and crown",
      ],
    },
    {
      name: "FUT (Follicular Unit Transplant)",
      description:
        "FUT removes a thin strip from the donor area, then separates grafts. It can leave a linear scar, which matters if you wear very short hair.",
      pros: [
        "Can be useful when many grafts are needed",
        "May suit certain donor types and budgets",
      ],
    },
    {
      name: "DHI (Direct Hair Implantation)",
      description:
        "DHI is a placement style using an implanter tool in some clinics. Some clinics market it as no cuts and no stitches.",
    },
  ];

  const treatableAreas = [
    "Hairline: for shape, framing, and a younger look",
    "Temples: to soften the 'corner recession'",
    "Crown: for thinning that shows in photos",
    "Beard and moustache: for patchy facial hair (case by case)",
    "Eyebrows: less common, but possible in selected cases",
  ];

  const recoveryTimeline = [
    {
      period: "Days 1 to 7",
      description:
        "Scalp feels tight or sore. Swelling can happen. You learn gentle washing steps.",
    },
    {
      period: "Days 8 to 14",
      description:
        "Scabs fall off gradually. Grafts become more secure over about two weeks.",
    },
    {
      period: "Weeks 3 to 8",
      description:
        "Many people see shedding (shock loss). This can be scary, but it is often temporary.",
    },
    {
      period: "Months 3 to 6",
      description:
        "New growth begins to show. Texture can look fine at first, then thickens.",
    },
    {
      period: "Months 9 to 18",
      description:
        "Density improves. Hair looks more natural and blendable. Full results commonly show around 12 to 18 months.",
    },
  ];

  const pros = [
    "Uses your own hair, so it looks real",
    "Can improve hairline shape and coverage",
    "Often long-lasting when planned well",
  ];

  const cons = [
    "Results take time",
    "You may still lose native hair around the transplant",
    "Some people need a second procedure later",
    "Not everyone has enough donor supply for 'full density everywhere'",
  ];

  const risks = [
    "Tight, achy scalp",
    "Swelling",
    "Temporary scabbing",
    "Small scars (tiny with FUE, more visible with FUT)",
    "Less common risks include infection or delayed healing",
  ];

  const whenToCallClinic = [
    "Increasing pain after initial improvement",
    "Pus, strong smell, or spreading redness",
    "Fever, or feeling unwell",
  ];

  const faqs = [
    {
      q: "How much does a hair transplant cost in Malaysia?",
      a: "Most clinics price based on grafts and method. Published ranges often start around the mid thousands in RM and can go much higher for larger sessions. Some KL providers list about RM 5,500 to RM 15,000 for many FUE cases, while others show ranges up to RM 30,000. A proper quote should follow an in-person assessment.",
    },
    {
      q: "Is a hair transplant painful?",
      a: "During the procedure, local anaesthesia is used, so sharp pain is not expected. You may still feel pressure or movement. After the procedure, the scalp can feel tight, achy, and swollen for a few days. Your clinic can guide safe pain relief and aftercare.",
    },
    {
      q: "How long does it take to recover from a hair transplant?",
      a: "Many people return to desk work within a few days, but visible healing takes longer. Clinics often advise avoiding heavy exercise for one to two weeks. Grafts tend to become more stable after about two weeks, so that early period matters a lot.",
    },
    {
      q: "When will I see full results?",
      a: "Hair transplant results are slow by design. You may see early growth by month three to six, then gradual thickening. Many guides for Malaysia timelines note full results often appear around 12 to 18 months.",
    },
    {
      q: "Is shedding after a hair transplant normal?",
      a: "Yes, shedding can happen and it often worries people. It is commonly linked to shock loss, where hair shafts shed while follicles rest before growing again. If shedding feels extreme or you see signs of infection, check with your clinic promptly.",
    },
    {
      q: "Is a hair transplant permanent?",
      a: "Transplanted follicles are usually taken from areas less affected by typical pattern hair loss. That is why results can be long-lasting. Still, native hair around the transplant can continue thinning, so some people need ongoing maintenance.",
    },
    {
      q: "How many grafts do I need?",
      a: "Graft count depends on your hair loss pattern, your donor density, and how dense you want the result to look. Some clinics provide sample ranges like 1,000, 2,000, or 3,000 plus graft plans, but only an assessment can confirm what is realistic for you.",
    },
    {
      q: "What is better, FUE or FUT?",
      a: "FUE is popular because it avoids a long strip scar and healing is often easier. FUT can be useful for some cases that need many grafts. The better option is the one that fits your donor area, hairstyle preference, and long-term plan.",
    },
    {
      q: "What side effects should I expect?",
      a: "Common short-term effects include swelling, tightness, and scabbing. Scarring can occur, but it varies by method and individual healing. Like any procedure, there is also a risk of infection, so hygiene and aftercare matter.",
    },
    {
      q: "Can a hair transplant fail?",
      a: "Most grafts survive when the plan is good and aftercare is followed, but outcomes can vary. Risk factors include poor donor selection, smoking, uncontrolled health issues, and poor post-op care. Your clinic should screen for these risks before treatment.",
    },
    {
      q: "Can women get a hair transplant in Malaysia?",
      a: "Yes, women can get hair transplants in Malaysia. The approach may differ from men's treatments, as female pattern hair loss often involves diffuse thinning rather than distinct bald areas. A thorough assessment is needed to determine if you're a suitable candidate.",
    },
  ];

  return (
    <main className="bg-cream min-h-screen font-inter">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative overflow-hidden bg-linear-to-br from-cream to-light pt-20 pb-16 px-4"
      >
        <div className="absolute inset-0 bg-glass backdrop-blur-[2px]"></div>
        <motion.div
          variants={staggerContainer}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h1 className="font-georgia text-5xl md:text-6xl lg:text-7xl text-brown mb-6">
              Hair Transplant in Kuala Lumpur, Malaysia:
              <span className="block text-wine text-4xl md:text-5xl lg:text-6xl mt-4">
                A Realistic Guide for Better Hair Days
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-rose font-light italic max-w-4xl mx-auto">
              "A hair transplant is not just hair. It is confidence, restored."
            </p>
            <p className="text-taupe text-xl mt-6">
              If your hairline keeps moving back, you are not alone. At Nexus
              Clinic Kuala Lumpur, we help you plan results that look natural.
            </p>
          </motion.div>

          {/* Trust at a glance */}
          <motion.div
            variants={scaleIn}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-cream">
              <MapPin className="text-wine mb-4" size={32} />
              <h3 className="font-georgia text-brown text-xl mb-2">
                Prime Location
              </h3>
              <p className="text-taupe">
                Clinic in the heart of Kuala Lumpur (Jalan Pinang, near KLCC)
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-cream">
              <Calendar className="text-wine mb-4" size={32} />
              <h3 className="font-georgia text-brown text-xl mb-2">
                Established Since 2001
              </h3>
              <p className="text-taupe">
                Two decades of aesthetic excellence and trusted care
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-cream">
              <UserCheck className="text-wine mb-4" size={32} />
              <h3 className="font-georgia text-brown text-xl mb-2">
                Doctor-Led Consultations
              </h3>
              <p className="text-taupe">
                Private, clear treatment planning with experienced doctors
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Quick Answers */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-light"
      >
        <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-12 text-center"
          >
            Quick Answers People Want First
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {quickAnswers.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-wine"
              >
                <h3 className="font-georgia text-brown text-xl mb-3">
                  {item.question}
                </h3>
                <p className="text-taupe">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Why Hair Loss Feels Personal */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-cream"
      >
        <motion.div
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-8"
          >
            Why Hair Loss Feels So Personal
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-taupe text-lg leading-relaxed"
          >
            Hair loss is not just a mirror problem. It shows up in photos. It
            shows up under bright office lights. It can change how you feel
            walking into a room.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-taupe text-lg leading-relaxed mt-4"
          >
            Some people notice a slow thinning. Others see a sudden "M" shape
            hairline, or a widening part line. The sooner you understand the
            cause, the better your options.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* What is a Hair Transplant */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-light"
      >
        <motion.div variants={staggerContainer} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="font-georgia text-4xl text-brown mb-6">
                What is a Hair Transplant, in Simple Words?
              </h2>
              <p className="text-taupe text-lg leading-relaxed mb-4">
                A hair transplant moves your own hair follicles from a fuller
                area to a thinner area. Most donor hair comes from the back or
                sides of your scalp.
              </p>
              <p className="text-taupe text-lg leading-relaxed">
                The goal is not "maximum hair." The goal is a natural hairline,
                good coverage, and a plan that ages well.
              </p>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hair/hair-transplant.webp"
                  alt="Hair transplant consultation and planning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-wine text-white p-4 rounded-lg">
                <p className="font-semibold">Natural Results</p>
                <p className="text-sm">That age well with you</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Hair Transplant Methods */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-cream"
      >
        <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-12 text-center"
          >
            Hair Transplant Methods in Malaysia (FUE vs FUT vs DHI)
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {methods.map((method, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Scissors className="text-wine mb-4" size={40} />
                <h3 className="font-georgia text-brown text-2xl mb-4">
                  {method.name}
                </h3>
                <p className="text-taupe mb-4">{method.description}</p>
                {method.pros && (
                  <ul className="space-y-2">
                    {method.pros.map((pro, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-taupe"
                      >
                        <CheckCircle2
                          className="text-wine shrink-0 mt-1"
                          size={18}
                        />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mt-8 italic"
          >
            In real life, the "best" method depends on your hair loss pattern,
            donor strength, and goals. Technique matters, but planning matters
            more.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Who is Hair Transplant For */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-light"
      >
        <motion.div variants={staggerContainer} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <h2 className="font-georgia text-4xl text-brown mb-6">
                Who is Hair Transplant For?
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <h3 className="font-georgia text-brown text-xl mb-4">
                  Good candidates have:
                </h3>
                <ul className="space-y-3">
                  {[
                    "You have a stable hair loss pattern",
                    "Your donor area is strong",
                    "You want a long-term solution, not a short-term cover-up",
                    "You understand results take time",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-taupe">
                      <CheckCircle2
                        className="text-wine shrink-0 mt-1"
                        size={18}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-georgia text-brown text-xl mb-4">
                  Common reasons in KL:
                </h3>
                <ul className="space-y-2 text-taupe">
                  <li>• Receding hairline</li>
                  <li>• Crown thinning</li>
                  <li>• Diffuse thinning that has a clear weak zone</li>
                  <li>
                    • Facial hair gaps, like beard or brows (in selected cases)
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <div className="bg-rose bg-opacity-10 p-8 rounded-2xl border border-rose">
                <h2 className="font-georgia text-3xl text-brown mb-6">
                  Who Should Wait or Choose Another Treatment First?
                </h2>
                <ul className="space-y-4">
                  {[
                    "Hair loss is still very fast",
                    "You have active scalp inflammation",
                    "Donor hair is weak",
                    "You expect instant density in a few weeks",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-light">
                      <AlertCircle
                        className="text-light shrink-0 mt-1"
                        size={18}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-light mt-6">
                  In these cases, you may do better starting with non-surgical
                  options first (like PRP, medications, or laser), then re-check
                  your progress.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Areas We Can Treat */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-cream"
      >
        <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-12 text-center"
          >
            Areas We Can Treat (Not Just the Scalp)
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            Hair restoration is not one-size-fits-all. Many patients ask about
            specific zones:
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {treatableAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-4 rounded-lg shadow border-l-4 border-wine"
              >
                <p className="text-brown">{area}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Patient Journey */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-light"
      >
        <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-12 text-center"
          >
            What Happens at Nexus Clinic Kuala Lumpur
          </motion.h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: 1,
                title: "Consultation and Scalp Check",
                desc: "We talk about your hair loss story. We check your donor area, density, and scalp health. We also discuss your lifestyle, job, and downtime needs.",
              },
              {
                step: 2,
                title: "Hairline Design",
                desc: "A good hairline should fit your age and features. Overly low hairlines can look unnatural later.",
              },
              {
                step: 3,
                title: "Graft Estimate and Plan",
                desc: "Most clinics price by graft count or session. You should leave knowing what you are paying for.",
              },
              {
                step: 4,
                title: "Procedure Day",
                desc: "Hair transplant is usually done with local anaesthesia. You may feel pressure, and some pulling sensation. Many patients bring music or podcasts.",
              },
              {
                step: 5,
                title: "Aftercare and Follow-ups",
                desc: "Aftercare is where results are protected. You will get washing guidance and activity limits.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="w-10 h-10 bg-wine text-cream rounded-full flex items-center justify-center font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-georgia text-brown text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-taupe text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Recovery Timeline */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-cream"
      >
        <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-12 text-center"
          >
            Recovery Timeline (What You Will Actually See)
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            The first days can look intense. That is normal. Tiny scabs,
            redness, and mild swelling are common.
          </motion.p>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-wine opacity-30"></div>
            {recoveryTimeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="relative pl-16 pb-8"
              >
                <div className="absolute left-4 w-8 h-8 bg-wine rounded-full flex items-center justify-center text-cream text-sm font-bold">
                  {index + 1}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-georgia text-brown text-xl mb-2">
                    {item.period}
                  </h3>
                  <p className="text-taupe">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Pros and Cons */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-light"
      >
        <motion.div variants={staggerContainer} className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-12 text-center"
          >
            Pros and Cons (Honest View)
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-wine mb-6 flex items-center gap-2">
                <CheckCircle2 /> Benefits
              </h3>
              <ul className="space-y-3">
                {pros.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe">
                    <CheckCircle2
                      className="text-wine shrink-0 mt-1"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-rose mb-6 flex items-center gap-2">
                <AlertCircle /> Limitations
              </h3>
              <ul className="space-y-3">
                {cons.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe">
                    <AlertCircle
                      className="text-rose shrink-0 mt-1"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mt-8 italic"
          >
            A good clinic will say this clearly, before you commit.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Side Effects and Risks */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-cream"
      >
        <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-8 text-center"
          >
            Side Effects and Risks You Should Know
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            Hair transplant is generally safe, but it is still a procedure.
            Common short-term effects can include:
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="font-georgia text-brown text-xl mb-4">
                Common Short-term Effects
              </h3>
              <ul className="space-y-2">
                {risks.map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe">
                    <span className="text-wine">•</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="bg-rose bg-opacity-10 p-6 rounded-xl border border-rose"
            >
              <h3 className="font-georgia text-brown text-xl mb-4">
                Call Your Clinic If You Notice
              </h3>
              <ul className="space-y-2">
                {whenToCallClinic.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-light">
                    <AlertCircle
                      className="text-light shrink-0 mt-1"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-light"
      >
        <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-8 text-center"
          >
            Hair Transplant Cost in Malaysia and Kuala Lumpur
          </motion.h2>
          <motion.div
            variants={scaleIn}
            className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto"
          >
            <p className="text-taupe mb-6">
              Costs depend on grafts, method, and the clinic's team. In
              Malaysia, many published price ranges sit around:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3 text-brown">
                <span className="w-3 h-3 bg-wine rounded-full"></span>
                RM 5,500 to RM 15,000 for many FUE cases, with higher costs for
                larger sessions
              </li>
              <li className="flex items-center gap-3 text-brown">
                <span className="w-3 h-3 bg-wine rounded-full"></span>
                Some clinics also show broader ranges, like RM 5,000 to RM
                30,000
              </li>
            </ul>
            <p className="text-taupe mb-4">
              Some clinics price per graft, such as:
            </p>
            <p className="text-brown font-semibold mb-6">
              FUE around RM 6 to RM 12 per graft, with DHI often higher
            </p>
            <div className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-brown text-xl mb-3">
                A fair quote should explain what is included:
              </h3>
              <ul className="space-y-2 text-taupe">
                <li>• Consultation and planning</li>
                <li>• Procedure time and team support</li>
                <li>• Aftercare visits and post-op instructions</li>
                <li>• Any add-ons like PRP (if recommended)</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Treatment Comparison */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-cream"
      >
        <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-12 text-center"
          >
            Hair Transplant vs PRP vs Medications
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-wine mb-4">
                Choose Transplant When:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe">
                  <CheckCircle2 className="text-wine shrink-0 mt-1" size={18} />
                  <span>There is clear thinning or bald area</span>
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <CheckCircle2 className="text-wine shrink-0 mt-1" size={18} />
                  <span>You want hair where hair is already gone</span>
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <CheckCircle2 className="text-wine shrink-0 mt-1" size={18} />
                  <span>Donor supply is strong</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-rose mb-4">
                Choose PRP or Medications When:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe">
                  <Droplets className="text-rose shrink-0 mt-1" size={18} />
                  <span>Hair is thinning but still present</span>
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <Droplets className="text-rose shrink-0 mt-1" size={18} />
                  <span>You want to slow shedding and support growth</span>
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <Droplets className="text-rose shrink-0 mt-1" size={18} />
                  <span>You are not ready for a procedure</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-lg col-span-full md:col-span-1"
            >
              <p className="text-taupe text-center italic">
                Many people combine treatments for better long-term maintenance.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* How to Choose Right Clinic */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-light"
      >
        <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-8 text-center"
          >
            How to Choose the Right Hair Transplant Clinic in KL
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            When you search "hair transplant Kuala Lumpur," you will see clinics
            highlight:
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="font-georgia text-brown text-xl mb-4">
                What clinics highlight:
              </h3>
              <ul className="space-y-2 text-taupe">
                <li>• Technique branding and graft survival claims</li>
                <li>• Price ranges and package style quotes</li>
                <li>• Aftercare rules and recovery guidance</li>
              </ul>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="bg-cream bg-opacity-10 p-6 rounded-xl border border-cream"
            >
              <h3 className="font-georgia text-brown text-xl mb-4">
                Simple checklist that matters more:
              </h3>
              <ul className="space-y-2 text-taupe">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-wine shrink-0 mt-1" size={18} />
                  <span>Clear, realistic planning (not only big promises)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-wine shrink-0 mt-1" size={18} />
                  <span>Before and after photos that match your hair type</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-wine shrink-0 mt-1" size={18} />
                  <span>Transparent pricing and what it includes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-wine shrink-0 mt-1" size={18} />
                  <span>Post-op support you can actually reach</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* FAQ Section */}
      <FAQ data={faqs} />

      {/* Final Note */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-wine text-cream"
      >
        <motion.div
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="font-georgia text-4xl mb-6">
            A Final Note
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl mb-8 leading-relaxed"
          >
            A hair transplant can be life-changing, but only when it is planned
            well. If you want a natural hairline and a realistic timeline, start
            with a proper assessment.
          </motion.p>
          <motion.div
            variants={scaleIn}
            className="bg-cream text-brown p-8 rounded-2xl inline-block"
          >
            <p className="text-lg">
              Nexus Clinic Kuala Lumpur is located near KLCC at Jalan Pinang.
              This page is general information and does not replace medical
              advice.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default HairTransplantLanding;
