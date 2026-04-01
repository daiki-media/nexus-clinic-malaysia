"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Calendar,
  MapPin,
  ChevronRight,
  Star,
  Heart,
  Target,
  Droplets,
  Scissors,
  Wind,
  Leaf,
  Zap,
  Activity,
  Thermometer,
  AlertCircle,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import FAQ from "@/src/components/FAQ";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const FUEHairTransplant = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "hair/fueHairTransplant");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-fue-hair-transplant1.webp",
      after: "/images/B&A-hair/B&A-fue-hair-transplant1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-fue-hair-transplant2.webp",
      after: "/images/B&A-hair/B&A-fue-hair-transplant2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-fue-hair-transplant3.webp",
      after: "/images/B&A-hair/B&A-fue-hair-transplant3.webp",
    },
  ];

  const faqs = [
    {
      q: "How much does FUE hair transplant cost in Malaysia?",
      a: "Prices vary mainly by graft count and clinic. Many Malaysia guides show FUE often sitting in the mid thousands RM and going higher for larger sessions. Always ask what is included.",
    },
    {
      q: "Is FUE hair transplant painful?",
      a: "Local anaesthesia is used, so sharp pain is usually controlled. Afterward, it is common to feel tightness, soreness, and mild swelling for a few days.",
    },
    {
      q: "How long is recovery after FUE?",
      a: "Many people return to desk work within a few days, but visible healing can take one to two weeks. The grafts need protection early on.",
    },
    {
      q: "When can I wash my hair after FUE?",
      a: "Many guides suggest waiting at least 24 hours, and washing gently within 48 hours, using the method you are taught. Avoid strong water pressure.",
    },
    {
      q: "Why does transplanted hair shed after surgery?",
      a: "Shedding can happen weeks after treatment. It often reflects the hair cycle and 'shock' to follicles. New growth usually returns gradually.",
    },
    {
      q: "How long does an FUE hair transplant last?",
      a: "Transplanted follicles are usually taken from areas that resist typical pattern hair loss. Many experts describe this as long-lasting, but maintenance matters.",
    },
    {
      q: "Does FUE leave scars?",
      a: "Yes, but they are usually tiny scars rather than one long scar. The NHS notes scarring can occur, and FUE commonly creates very small scars.",
    },
    {
      q: "How many grafts do I need for my hairline?",
      a: "It depends on your hairline shape, donor density, and the look you want. Donor hair is limited and must be used wisely.",
    },
    {
      q: "Is FUE better than FUT?",
      a: "FUE is often chosen to avoid a strip scar and support flexible hairstyles. FUT can still be useful. Your best option depends on donor area, budget, and goals.",
    },
    {
      q: "Can an FUE hair transplant fail?",
      a: "FUE is considered established when performed by trained professionals, but results can drop with poor donor selection, poor graft handling, smoking, or weak aftercare.",
    },
    {
      q: "Is Malaysia a good place for FUE hair transplant?",
      a: "Malaysia, especially Kuala Lumpur, has many hair restoration clinics. Your outcome depends more on planning and standards than the country alone.",
    },
    {
      q: "What should I avoid after FUE?",
      a: "Sleep with your head elevated and avoid rubbing or strong pressure on the grafts early on. Follow the washing method exactly.",
    },
  ];

  return (
    <div className="min-h-screen bg-light font-inter">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="relative overflow-hidden bg-linear-to-br from-cream via-light to-rose/5"
      >
        <div className="absolute inset-0 bg-glass backdrop-blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-wine/10 text-wine px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                FUE Hair Transplant Kuala Lumpur
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-georgia text-brown mb-6 leading-tight"
            >
              Your new hairline should look like{" "}
              <span className="text-wine italic">it always belonged</span> to
              you
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-taupe mb-8 max-w-2xl"
            >
              If your hair is thinning, you may feel older overnight. With FUE
              hair transplant in Kuala Lumpur, you can rebuild a natural look,
              step by step.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="group bg-wine hover:bg-rose text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                Book Confidential Consultation
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-wine/30 text-brown hover:bg-cream px-8 py-4 rounded-full font-medium transition-all duration-300">
                View Gallery
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust At A Glance */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="bg-white py-16 border-y border-taupe/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="bg-wine/10 p-4 rounded-2xl">
                <Calendar className="w-6 h-6 text-wine" />
              </div>
              <div>
                <h3 className="font-georgia text-brown text-lg">
                  Founded 2001
                </h3>
                <p className="text-taupe">
                  Focus on confidential, professional care
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="bg-wine/10 p-4 rounded-2xl">
                <MapPin className="w-6 h-6 text-wine" />
              </div>
              <div>
                <h3 className="font-georgia text-brown text-lg">
                  Kuala Lumpur
                </h3>
                <p className="text-taupe">Wisma UOA II, Jalan Pinang</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="bg-wine/10 p-4 rounded-2xl">
                <Scissors className="w-6 h-6 text-wine" />
              </div>
              <div>
                <h3 className="font-georgia text-brown text-lg">
                  Hair Services
                </h3>
                <p className="text-taupe">
                  Transplant & loss treatment options
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Answers */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-cream/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-georgia text-brown mb-12 text-center"
          >
            Quick Answers{" "}
            <span className="text-wine">(People Want These First)</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-georgia text-brown text-lg mb-2">
                What is FUE?
              </h3>
              <p className="text-taupe">
                It removes follicular units one by one using tiny punches, then
                places them in thinning areas.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-georgia text-brown text-lg mb-2">
                Is it painful?
              </h3>
              <p className="text-taupe">
                Local anaesthesia is used. You may feel pressure, then mild
                soreness later.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-georgia text-brown text-lg mb-2">
                When will I see results?
              </h3>
              <p className="text-taupe">
                Most visible change builds over months. Full results around 9 to
                12 months or longer.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-georgia text-brown text-lg mb-2">
                Will there be scars?
              </h3>
              <p className="text-taupe">
                FUE usually leaves many very tiny scars, not a long strip scar.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why FUE with Image */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-georgia text-brown mb-6">
                Why FUE is the most searched hair transplant option in Malaysia
              </h2>
              <p className="text-taupe mb-6">
                People in Kuala Lumpur want results that look normal in real
                life. Not just in before and after photos.
              </p>
              <ul className="space-y-4">
                {[
                  "It avoids a long strip scar on the back of the head",
                  "Healing can be quicker for many patients",
                  "It suits hairline work and detail areas, like temples",
                  "Malaysia is known for strong medical services",
                  "Kuala Lumpur has many established clinics for careful comparison",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <span className="text-brown">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-tr from-wine/20 to-rose/20 rounded-3xl transform rotate-3" />
              <img
                src="/images/hair/fue-hair-transplant.webp"
                alt="FUE Hair Transplant Consultation"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-glass backdrop-blur-md px-4 py-2 rounded-full">
                <span className="text-brown text-sm font-medium">
                  FUE Procedure Consultation
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is FUE */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-cream/30"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-georgia text-brown mb-6"
          >
            What is an FUE hair transplant{" "}
            <span className="text-wine">(simple explanation)</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-taupe mb-8">
            FUE stands for follicular unit excision. It means your surgeon
            removes tiny natural hair groupings, usually 1 to 4 hairs.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-3xl">
              <div className="bg-wine/10 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-georgia text-brown mb-2">Donor Area</h3>
              <p className="text-taupe text-sm">
                Grafts from back of scalp where hair is thicker longer
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-white p-6 rounded-3xl">
              <div className="bg-wine/10 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-georgia text-brown mb-2">Graft Placement</h3>
              <p className="text-taupe text-sm">
                Placed into thinning or bald areas with precision
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-white p-6 rounded-3xl">
              <div className="bg-wine/10 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-georgia text-brown mb-2">Natural Growth</h3>
              <p className="text-taupe text-sm">
                Once healed, transplanted follicles keep growing hair
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Competitor Insights */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-georgia text-brown mb-12 text-center"
          >
            What top-ranking FUE pages in KL focus on
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "No Linear Scar",
                desc: "No strip scar, minimal downtime",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Cost Clarity",
                desc: "Per-graft pricing explained",
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Aftercare Guidance",
                desc: "Do's and don'ts for healing",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Natural Hairline",
                desc: "Direction, angles, long-term planning",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-cream p-6 rounded-3xl text-center group hover:bg-wine transition-colors duration-300"
              >
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-wine/20">
                  <div className="text-wine group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-georgia text-brown mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-taupe text-sm group-hover:text-cream transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mt-8 italic"
          >
            Marketing is everywhere. Your best filter is a clear plan, realistic
            density goals, and strong aftercare.
          </motion.p>
        </div>
      </motion.section>

      {/* Who is FUE For */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-linear-to-br from-cream to-rose/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-georgia text-brown mb-6">
                Who is FUE hair transplant for?
              </h2>
              <div className="space-y-4">
                {[
                  "Receding hairline",
                  "Temple recession",
                  "Crown thinning",
                  "Pattern hair loss that has stabilized",
                  "Scarring alopecia (stable)",
                  "Hair loss after trauma or surgery",
                  "Beard or eyebrow restoration",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-3 bg-white/50 p-3 rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="text-brown">{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.p variants={fadeInUp} className="mt-6 text-taupe">
                A key requirement is donor supply. If your donor area is weak,
                the plan must change.
              </motion.p>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <h2 className="text-3xl md:text-4xl font-georgia text-brown mb-6">
                Who should pause?
              </h2>
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <div className="space-y-4">
                  {[
                    "You are shedding heavily right now",
                    "Your scalp is inflamed or irritated",
                    "Your expectations are 'full teenage density' in one session",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.p variants={fadeInUp} className="mt-6 text-taupe">
                  Hair transplant is generally safe, but complications can
                  happen. Medical screening and good technique reduce risk.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FUE vs FUT vs DHI */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-georgia text-brown mb-12 text-center"
          >
            FUE vs FUT vs DHI{" "}
            <span className="text-wine">(Quick Comparison)</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "FUE",
                features: [
                  "Individual graft removal",
                  "Many very tiny scars, usually hard to notice",
                ],
              },
              {
                title: "FUT (strip)",
                features: [
                  "A strip is removed, then grafts are separated",
                  "Can leave a single larger scar",
                ],
              },
              {
                title: "DHI",
                features: [
                  "Often marketed for precise placement",
                  "Still needs proper extraction and planning",
                  "Aftercare rules still matter a lot",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-cream p-6 rounded-3xl"
              >
                <h3 className="text-2xl font-georgia text-wine mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-brown flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={fadeInUp} className="text-center text-taupe mt-8">
            In real life, the "best" option is the one that fits your scalp,
            donor, and goals.
          </motion.p>
        </div>
      </motion.section>

      {/* Procedure Steps */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-cream/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-georgia text-brown mb-12 text-center"
          >
            What happens during an FUE procedure{" "}
            <span className="text-wine">(step by step)</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Consultation",
                desc: "Scalp assessment and hairline design",
              },
              {
                icon: <Scissors className="w-6 h-6" />,
                title: "Donor Preparation",
                desc: "Trimming and local anaesthesia",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Extraction",
                desc: "Grafts removed one by one with micro punches",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Placement",
                desc: "Tiny openings made to follow natural direction",
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Home Care Plan",
                desc: "Washing instructions and activity limits",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Follow-up",
                desc: "Regular check-ins to monitor progress",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-wine/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-wine">{step.icon}</div>
                </div>
                <h3 className="font-georgia text-brown text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-taupe text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* How to Prepare */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-georgia text-brown mb-6">
                How to prepare for your FUE hair transplant
              </h2>
              <p className="text-taupe mb-8">
                A safe plan starts before procedure day.
              </p>
              <ul className="space-y-4">
                {[
                  "Share your medication list with the clinic",
                  "Ask about smoking, alcohol, and supplements",
                  "Plan 7 to 10 quiet days if possible",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3 bg-cream p-4 rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <span className="text-brown">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-linear-to-br from-wine to-rose p-8 rounded-3xl text-white"
            >
              <h3 className="text-2xl font-georgia mb-4">
                Preparation Checklist
              </h3>
              <div className="space-y-4">
                {[
                  "Stop blood thinners 2 weeks prior",
                  "No alcohol 3 days before",
                  "Arrange transportation",
                  "Wash hair night before",
                  "Wear button-down shirt",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Recovery Timeline */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-cream/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-georgia text-brown mb-12 text-center"
          >
            Recovery Timeline{" "}
            <span className="text-wine">(what most people actually feel)</span>
          </motion.h2>

          <motion.div variants={staggerContainer} className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-wine/20 hidden md:block" />

            {[
              {
                period: "First 3 days",
                desc: "A tight, sore scalp is common. Swelling can happen.",
                icon: <Thermometer className="w-5 h-5" />,
              },
              {
                period: "Days 4 to 10",
                desc: "Scabbing forms, then starts to fall. You must avoid picking.",
                icon: <Activity className="w-5 h-5" />,
              },
              {
                period: "Washing",
                desc: "Gentle washing after first day or two. Follow clinic instructions.",
                icon: <Droplets className="w-5 h-5" />,
              },
              {
                period: "Weeks 3 to 8",
                desc: "Shedding can happen. This is often part of the cycle.",
                icon: <Wind className="w-5 h-5" />,
              },
              {
                period: "Months 3 to 6",
                desc: "New growth starts. May look fine at first, then thickens.",
                icon: <Leaf className="w-5 h-5" />,
              },
              {
                period: "Months 9 to 12+",
                desc: "Most people see their main result in this window.",
                icon: <Star className="w-5 h-5" />,
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="relative pl-16 md:pl-24 mb-8"
              >
                <div className="absolute left-0 top-0 bg-wine text-white p-3 rounded-2xl">
                  {phase.icon}
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                  <h3 className="font-georgia text-brown text-lg mb-2">
                    {phase.period}
                  </h3>
                  <p className="text-taupe">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Side Effects */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-georgia text-brown mb-6">
                Side effects and risks{" "}
                <span className="text-wine">(honest and clear)</span>
              </h2>

              <div className="space-y-4">
                <h3 className="font-georgia text-lg text-brown">
                  Common short-term effects:
                </h3>
                {[
                  "Tight, achy scalp",
                  "Temporary scabbing",
                  "Tiny scars, especially in the donor area",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-3 bg-cream p-3 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5 text-wine" />
                    <span className="text-brown">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-rose/5 p-8 rounded-3xl"
            >
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Possible complications
              </h3>
              <p className="text-taupe mb-4">
                Infection and healing issues, although they are not common when
                care is proper.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-rose/20">
                <p className="text-brown">
                  <span className="font-bold text-wine">Important:</span> If
                  pain increases after improving, or you see pus or fever,
                  contact a clinician.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-linear-to-br from-cream to-rose/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-georgia text-brown mb-12 text-center"
          >
            FUE hair transplant cost in Kuala Lumpur and Malaysia
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="bg-white p-6 rounded-3xl">
                <h3 className="font-georgia text-lg text-wine mb-4">
                  Cost depends on:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Number of grafts",
                    "Clinic reputation and credentials",
                    "City overhead (KL can be higher)",
                    "Add-ons like PRP and medicines",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-brown"
                    >
                      <ChevronRight className="w-4 h-4 text-wine" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-3xl">
                <h3 className="font-georgia text-lg text-wine mb-4">
                  What you may see online:
                </h3>
                <ul className="space-y-3">
                  <li className="text-brown">
                    • FUE ranges around RM 6,500 to RM 15,000
                  </li>
                  <li className="text-brown">• RM 6 to RM 12 per graft</li>
                  <li className="text-brown">
                    • Starting from RM 5,000 style pricing
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-wine text-white p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-georgia mb-4">A useful rule:</h3>
              <p className="text-cream text-lg mb-6">
                Do not compare price without comparing what is included.
              </p>
              <p className="text-cream">
                Ask about doctor involvement, graft handling, and follow-up
                support.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Areas FUE Can Treat */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-georgia text-brown mb-12 text-center"
          >
            Areas FUE can treat{" "}
            <span className="text-wine">(common requests in KL)</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { area: "Hairline", desc: "framing the face" },
              { area: "Temples", desc: "softening recession" },
              { area: "Crown", desc: "reducing the visible 'spot'" },
              {
                area: "Top and mid-scalp",
                desc: "adding coverage where hair is thin",
              },
              { area: "Beard", desc: "selected cases" },
              { area: "Brows", desc: "selected cases" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-cream p-6 rounded-3xl text-center hover:bg-wine group transition-colors cursor-pointer"
              >
                <h3 className="font-georgia text-lg text-brown mb-2 group-hover:text-white transition-colors">
                  {item.area}
                </h3>
                <p className="text-taupe text-sm group-hover:text-cream transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Nexus Clinic Approach */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-cream/30"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-georgia text-brown mb-6"
          >
            How Nexus Clinic Kuala Lumpur approaches the experience
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-taupe mb-8">
            At Nexus Clinic Kuala Lumpur, the goal should be simple. Make the
            plan feel safe, private, and realistic.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            {[
              "A graft estimate range",
              "A hairline design explanation",
              "A downtime plan that fits your work life",
              "A maintenance plan for existing hair",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-4 rounded-2xl flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-wine" />
                <span className="text-brown text-left">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FAQ data={faqs} />

      {/* CTA Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-20 bg-linear-to-br from-wine to-rose text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-georgia mb-6"
          >
            Book a consultation at Nexus Clinic Kuala Lumpur
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-cream mb-8">
            If you want a natural hairline, start with a calm consult. Ask for a
            plan that matches your face, hair type, and future loss pattern.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl inline-block"
          >
            <p className="flex items-center gap-4 text-cream">
              <MapPin className="w-5 h-5" />
              Wisma UOA II, Jalan Pinang, Kuala Lumpur
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default FUEHairTransplant;
