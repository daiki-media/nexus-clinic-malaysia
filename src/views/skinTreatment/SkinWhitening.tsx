"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Sun,
  Shield,
  Clock,
  MapPin,
  AlertCircle,
  CheckCircle,
  XCircle,
  Star,
  Zap,
  Wind,
  Activity,
  Heart,
  Calendar,
  Award,
  Users,
  Info,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const SkinWhiteningLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "skinWhitening");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-skin-whitening-treatment1.webp",
      after: "/images/B&A-skin/B&A-skin-whitening-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-skin-whitening-treatment2.webp",
      after: "/images/B&A-skin/B&A-skin-whitening-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-skin-whitening-treatment3.webp",
      after: "/images/B&A-skin/B&A-skin-whitening-treatment3.webp",
    },
  ];
  return (
    <div className="bg-light font-inter overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-rose/20 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-wine/10 blur-3xl"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <span className="inline-block px-4 py-2 bg-glass backdrop-blur-sm rounded-full text-brown text-sm border border-taupe/20">
                Nexus Clinic Kuala Lumpur
              </span>
              <h1 className="text-5xl md:text-7xl font-georgia text-brown leading-tight">
                Brighter skin,
                <br />
                <span className="text-wine">not a different you.</span>
              </h1>
              <p className="text-xl md:text-2xl text-taupe max-w-3xl mx-auto font-light">
                Real tone-correcting treatment in Kuala Lumpur.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
              <p className="text-brown/80 text-lg leading-relaxed">
                KL sun, heat, acne marks, and hormones can leave your skin
                looking uneven. At Nexus Clinic Kuala Lumpur, we build a
                personalised plan to fade stubborn pigmentation and bring back a
                clean, healthy glow.
              </p>
            </motion.div>

            {/* Trust section (quick bar) */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 p-8 bg-glass backdrop-blur-sm rounded-2xl border border-taupe/10"
            >
              <div className="flex items-start gap-3 text-left">
                <MapPin className="w-6 h-6 text-rose shrink-0 mt-1" />
                <p className="text-brown text-sm">
                  KLCC location: LG 10, Lower Ground Floor, Wisma UOA II, Jalan
                  Pinang, Kuala Lumpur
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <Award className="w-6 h-6 text-rose shrink-0 mt-1" />
                <p className="text-brown text-sm">
                  Established clinic (since 2001) with a wide range of advanced
                  aesthetic and laser treatments
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <Users className="w-6 h-6 text-rose shrink-0 mt-1" />
                <p className="text-brown text-sm">
                  Multiple evidence-based options: laser toning, chemical peels,
                  mesotherapy, and infusion support (when appropriate)
                </p>
              </div>
              <div className="flex items-start gap-3 text-left md:col-span-3 mt-2">
                <Shield className="w-6 h-6 text-rose shrink-0 mt-1" />
                <p className="text-brown text-sm">
                  Doctor-led, personalised protocols for different skin types
                  and sensitivities
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Truth Section - Skin Whitening Treatment in Malaysia */}
      <section className="py-20 px-4 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            <motion.div
              variants={fadeInLeft}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-6">
                Skin Whitening Treatment in Malaysia (Kuala Lumpur)
              </h2>
              <p className="text-xl text-wine font-light">
                First, a quick truth about "skin whitening"
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              <p className="text-brown text-lg col-span-2 mb-4">
                A lot of people search "skin whitening" when they really mean
                one of these:
              </p>
              {[
                "My skin looks dull and tired",
                "I have tan lines that won't fade",
                "My acne marks are darker than my real skin",
                "My melasma is back again",
                "My face and neck don't match",
              ].map((text, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-sm border border-taupe/10 flex items-start gap-3"
                >
                  <Sparkles className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <p className="text-brown">"{text}"</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-8 bg-white rounded-2xl shadow-lg border border-rose/20 max-w-4xl mx-auto"
            >
              <p className="text-brown text-lg leading-relaxed">
                So let's be clear and respectful: at Nexus Clinic Kuala Lumpur,
                the goal is brighter, clearer, more even-toned skin. We are not
                here to push a beauty standard. We are here to treat
                pigmentation, uneven tone, and dullness in a safe, medical way.
              </p>
              <p className="text-brown text-lg mt-6 font-medium">
                If you love your natural skin tone but want your skin to look
                fresher, smoother, and more "alive," you're in the right place.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Section with Image */}
      <section className="py-20 px-4 bg-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-georgia text-brown">
                What is a skin whitening treatment{" "}
                <span className="text-wine">(in a clinic setting)?</span>
              </h2>
              <p className="text-brown/90 text-lg leading-relaxed">
                In Malaysia, "skin whitening treatment" usually means a plan of
                treatments that reduce excess pigment (melanin) where it's
                uneven, while improving skin clarity and glow.
              </p>
              <p className="text-brown font-medium mt-2">This can include:</p>
              <ul className="space-y-4 mt-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <p className="text-brown">
                    Laser toning / laser lightening that targets pigment
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <p className="text-brown">
                    Chemical peels to lift dead skin and stubborn spots
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <p className="text-brown">
                    Mesotherapy / skin boosters for hydration and radiance
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <p className="text-brown">
                    Medical-grade skincare to control pigment formation
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <p className="text-brown">
                    Antioxidant and vitamin support in selected cases
                  </p>
                </li>
              </ul>
              <p className="text-brown/80 text-lg mt-6 italic border-l-4 border-rose pl-4">
                At Nexus Clinic, these options are combined based on your skin,
                your lifestyle, and your timeline.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative h-150 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/skin/skin-whitening-treatment.webp"
                alt="Professional skin consultation and treatment at Nexus Clinic Kuala Lumpur"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-glass backdrop-blur-md p-4 rounded-xl">
                <p className="text-brown font-medium text-sm">
                  Nexus Clinic Kuala Lumpur - Doctor-led aesthetic treatments
                  since 2001
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Skin Gets Darker Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown text-center"
            >
              Why skin gets darker or uneven{" "}
              <span className="text-wine">in Kuala Lumpur</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-brown/90 max-w-3xl mx-auto text-lg"
            >
              KL is beautiful, but your skin deals with a lot here. Sun, heat,
              humidity, traffic pollution, and stress all show up on your face.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-medium text-center text-xl"
            >
              Common reasons skin loses brightness include:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="p-6 bg-white rounded-xl shadow-sm border border-taupe/10 flex items-start gap-4">
                <Sun className="w-8 h-8 text-rose shrink-0" />
                <div>
                  <h3 className="font-georgia text-wine text-lg mb-1">
                    Sun damage
                  </h3>
                  <p className="text-brown/80">
                    UV pushes melanin production, creating patches and uneven
                    tone
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-taupe/10 flex items-start gap-4">
                <Clock className="w-8 h-8 text-rose shrink-0" />
                <div>
                  <h3 className="font-georgia text-wine text-lg mb-1">
                    Ageing
                  </h3>
                  <p className="text-brown/80">
                    slower cell turnover can make skin look dull and rough
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-taupe/10 flex items-start gap-4">
                <Activity className="w-8 h-8 text-rose shrink-0" />
                <div>
                  <h3 className="font-georgia text-wine text-lg mb-1">
                    Hormonal changes
                  </h3>
                  <p className="text-brown/80">
                    pregnancy and hormonal shifts can trigger melasma and facial
                    patches
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-taupe/10 flex items-start gap-4">
                <Wind className="w-8 h-8 text-rose shrink-0" />
                <div>
                  <h3 className="font-georgia text-wine text-lg mb-1">
                    Pollution and lifestyle
                  </h3>
                  <p className="text-brown/80">
                    stress, poor sleep, and inflammation affect clarity
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-taupe/10 flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-rose shrink-0" />
                <div>
                  <h3 className="font-georgia text-wine text-lg mb-1">
                    Post-acne marks
                  </h3>
                  <p className="text-brown/80">
                    after acne calms down, the "shadow" stays (post-inflammatory
                    hyperpigmentation)
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-taupe/10 flex items-start gap-4">
                <Zap className="w-8 h-8 text-rose shrink-0" />
                <div>
                  <h3 className="font-georgia text-wine text-lg mb-1">
                    Friction
                  </h3>
                  <p className="text-brown/80">
                    underarms, inner thighs, elbows, knees can darken from
                    rubbing
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="py-20 px-4 bg-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown text-center"
            >
              Who is this for?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown/90 text-center max-w-3xl mx-auto text-lg"
            >
              You may be a good fit for skin whitening or skin brightening
              treatment in Kuala Lumpur if you have:
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div variants={fadeInLeft} className="space-y-4">
                {[
                  "Uneven skin tone or dullness",
                  "Sunspots or age spots",
                  "Acne marks that stay brown or grey",
                  "Melasma (patchy pigmentation, often on cheeks or upper lip)",
                  "A tan that never fully fades",
                  "Dark areas on the body (underarms, elbows, knees, inner thighs)",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-taupe/10"
                  >
                    <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <p className="text-brown">{item}</p>
                  </div>
                ))}
                <p className="text-brown/80 mt-6 p-4 bg-rose/5 rounded-lg">
                  Nexus Clinic also uses laser technology that's commonly
                  positioned for concerns like uneven tone, hyperpigmentation,
                  melasma, acne scars, and sunspots.
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-4">
                <p className="text-brown font-medium mb-2">
                  You may need extra care (or delay treatment) if you have:
                </p>
                {[
                  "Active eczema, psoriasis flare, or skin infection",
                  "Recent sunburn or heavy tanning",
                  "Pregnancy (some treatments are avoided)",
                  "A history of keloid scarring",
                  "Very sensitive skin that reacts easily",
                  "Current use of strong retinoids without guidance",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-taupe/10"
                  >
                    <Info className="w-5 h-5 text-taupe shrink-0 mt-1" />
                    <p className="text-brown">{item}</p>
                  </div>
                ))}
                <p className="text-brown/80 mt-4 italic font-light">
                  A quick skin assessment helps avoid regret later.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nexus Clinic Approach */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown text-center"
            >
              Nexus Clinic approach:{" "}
              <span className="text-wine">
                we treat the cause, not just the colour
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-brown/90 max-w-3xl mx-auto text-lg"
            >
              Many clinics sell a "one treatment fits all" glow package. It
              sounds nice. It rarely lasts.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="text-brown text-xl mb-8">
                At Nexus Clinic Kuala Lumpur, we start with two questions:
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-rose/5 rounded-xl border border-rose/20">
                  <p className="text-brown text-lg">
                    <span className="font-bold text-wine text-xl">1.</span> What
                    type of pigment is this? (surface pigment, deeper pigment,
                    mixed)
                  </p>
                </div>
                <div className="p-6 bg-rose/5 rounded-xl border border-rose/20">
                  <p className="text-brown text-lg">
                    <span className="font-bold text-wine text-xl">2.</span> What
                    is triggering it? (sun, hormones, inflammation, friction,
                    wrong products)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-medium text-xl text-center mt-8"
            >
              Then we build a plan that can include:
            </motion.p>

            {/* 1) Laser toning and laser lightening */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg border border-taupe/10"
            >
              <h3 className="text-2xl font-georgia text-wine mb-4">
                1) Laser toning and laser lightening
              </h3>
              <p className="text-brown/90 mb-4">
                Laser treatments work by targeting excess pigment and helping
                the skin reset over time. Nexus Clinic highlights laser toning
                as a way to break down uneven pigmentation and support a natural
                glow.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-cream rounded-lg">
                  <p className="text-brown text-sm">
                    <span className="font-semibold">Best for:</span> sunspots,
                    stubborn marks, uneven tone, some melasma patterns
                  </p>
                </div>
                <div className="p-4 bg-cream rounded-lg">
                  <p className="text-brown text-sm">
                    <span className="font-semibold">What it feels like:</span>{" "}
                    mild snapping sensation, usually quick
                  </p>
                </div>
                <div className="p-4 bg-cream rounded-lg">
                  <p className="text-brown text-sm">
                    <span className="font-semibold">Downtime:</span> often
                    minimal, mild redness for a day
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2) Chemical peels (medical-grade) */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg border border-taupe/10"
            >
              <h3 className="text-2xl font-georgia text-wine mb-4">
                2) Chemical peels (medical-grade)
              </h3>
              <p className="text-brown/90 mb-4">
                Peels lift dead skin cells and help fade surface pigment. Nexus
                Clinic positions chemical peels as a brightening option that
                reveals smoother, clearer skin.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-cream rounded-lg">
                  <p className="text-brown text-sm">
                    <span className="font-semibold">Best for:</span> dullness,
                    surface pigmentation, acne marks
                  </p>
                </div>
                <div className="p-4 bg-cream rounded-lg">
                  <p className="text-brown text-sm">
                    <span className="font-semibold">Downtime:</span> depends on
                    peel strength, light flaking to a few days of peeling
                  </p>
                </div>
                <div className="p-4 bg-cream rounded-lg">
                  <p className="text-brown text-sm">
                    <span className="font-semibold">Tip:</span> peels work best
                    when paired with sunscreen discipline
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 3) Mesotherapy and skin boosters */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg border border-taupe/10"
            >
              <h3 className="text-2xl font-georgia text-wine mb-4">
                3) Mesotherapy and skin boosters
              </h3>
              <p className="text-brown/90 mb-4">
                Mesotherapy delivers skin-supporting ingredients for hydration
                and luminosity. Nexus Clinic lists mesotherapy as part of
                brightening solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-cream rounded-lg">
                  <p className="text-brown text-sm">
                    <span className="font-semibold">Best for:</span> dehydrated,
                    tired-looking skin, texture issues, "flat" tone
                  </p>
                </div>
                <div className="p-4 bg-cream rounded-lg">
                  <p className="text-brown text-sm">
                    <span className="font-semibold">Downtime:</span> tiny bumps
                    for a short time, possible mild bruising
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 4) Glutathione and vitamin infusions (only when appropriate) */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg border border-taupe/10"
            >
              <h3 className="text-2xl font-georgia text-wine mb-4">
                4) Glutathione and vitamin infusions (only when appropriate)
              </h3>
              <p className="text-brown/90 mb-2">
                Some clinics market this aggressively. We keep it grounded.
              </p>
              <p className="text-brown/90 mb-4">
                Nexus Clinic offers glutathione and vitamin infusions as part of
                brightening options. But globally, evidence is mixed and depends
                on form (topical, oral, IV), and safety data for IV use is still
                debated. Reviews note limited high-quality evidence for IV
                glutathione for cosmetic lightening, with unanswered questions
                on maintenance and long-term outcomes.
              </p>
              <div className="p-6 bg-rose/5 rounded-xl border border-rose/20 mt-4">
                <p className="text-brown font-medium">
                  Our stance: if you are considering infusions, ask about
                  ingredients, dosing, medical supervision, and what results are
                  realistic. Never do it in non-medical settings. Public safety
                  warnings have highlighted risks from unregulated IV drip use
                  in some countries.
                </p>
              </div>
            </motion.div>

            {/* 5) Medical-grade skincare (your results protector) */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg border border-taupe/10"
            >
              <h3 className="text-2xl font-georgia text-wine mb-4">
                5) Medical-grade skincare (your results protector)
              </h3>
              <p className="text-brown/90 mb-4">
                Clinic treatments can move the needle. Home care keeps it there.
              </p>
              <p className="text-brown/90 mb-4">
                A smart routine usually includes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-cream rounded-lg flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-rose mt-1 shrink-0" />
                  <p className="text-brown text-sm">Daily sunscreen</p>
                </div>
                <div className="p-4 bg-cream rounded-lg flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-rose mt-1 shrink-0" />
                  <p className="text-brown text-sm">
                    A pigment-control active (like vitamin C, niacinamide,
                    azelaic acid, tranexamic acid)
                  </p>
                </div>
                <div className="p-4 bg-cream rounded-lg flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-rose mt-1 shrink-0" />
                  <p className="text-brown text-sm">
                    Barrier support so your skin stays calm, not inflamed
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Pros and Cons */}
      <section className="py-20 px-4 bg-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown text-center"
            >
              Pros and cons <span className="text-wine">(real talk)</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-georgia text-wine mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6" /> Pros
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <p className="text-brown">
                      Can noticeably reduce dark spots and patchiness
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <p className="text-brown">
                      Helps makeup sit better because skin texture improves
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <p className="text-brown">
                      Confidence boost that feels natural, not artificial
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <p className="text-brown">
                      Works on face and many body areas when planned well
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <p className="text-brown">
                      Combination plans can be more effective than single
                      treatments
                    </p>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-georgia text-wine mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" /> Cons
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-taupe shrink-0 mt-1" />
                    <p className="text-brown">
                      Not "one session and done" for most people
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-taupe shrink-0 mt-1" />
                    <p className="text-brown">
                      Results depend heavily on sun exposure and aftercare
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-taupe shrink-0 mt-1" />
                    <p className="text-brown">
                      Some pigmentation (especially melasma) needs maintenance
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-taupe shrink-0 mt-1" />
                    <p className="text-brown">
                      Risk of irritation or rebound pigmentation if done too
                      aggressively
                    </p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Side effects and safety */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown text-center"
            >
              Side effects and safety{" "}
              <span className="text-wine">(what you should know)</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-brown/90 max-w-3xl mx-auto text-lg"
            >
              Most clinic-based brightening treatments are well tolerated when
              done properly, but side effects can happen.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-georgia text-wine mb-4">
                  Possible side effects include:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-wine font-bold">•</span>
                    <p className="text-brown/80">Redness and warmth</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-wine font-bold">•</span>
                    <p className="text-brown/80">Mild swelling</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-wine font-bold">•</span>
                    <p className="text-brown/80">
                      Temporary dryness or peeling
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-wine font-bold">•</span>
                    <p className="text-brown/80">Sensitivity to sunlight</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-wine font-bold">•</span>
                    <p className="text-brown/80">
                      Temporary darkening before fading (some pigment can
                      "surface")
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-wine font-bold">•</span>
                    <p className="text-brown/80">
                      Post-inflammatory hyperpigmentation (PIH), especially if
                      aftercare is ignored
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-georgia text-wine mb-4">
                  The biggest safety risk is NOT the laser
                </h3>
                <p className="text-brown/80 text-lg mb-4">
                  It's unregulated whitening products.
                </p>
                <p className="text-brown/80 mb-4">
                  Malaysia's health authorities have repeatedly warned about
                  cosmetics containing scheduled poisons like mercury, and the
                  harms can be serious. Mercury is prohibited in cosmetic
                  products and can be absorbed through skin, then accumulate in
                  the body. NPRA also provides consumer guidance to ensure
                  cosmetic products are properly notified and to verify
                  notification status.
                </p>
                <div className="p-4 bg-rose/5 rounded-lg border border-rose/20 mt-4">
                  <p className="text-wine font-bold text-lg">
                    If you want "whitening," please do not gamble with unknown
                    creams sold online.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-20 px-4 bg-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown text-center"
            >
              Cost of skin whitening treatment in Malaysia{" "}
              <span className="text-wine">(and what affects price)</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-brown/90 max-w-3xl mx-auto text-lg"
            >
              Prices vary based on:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-wine font-bold text-lg">•</span>
                    <p className="text-brown">
                      The area treated (face only vs face and neck vs body)
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wine font-bold text-lg">•</span>
                    <p className="text-brown">Pigment depth and severity</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wine font-bold text-lg">•</span>
                    <p className="text-brown">
                      The technology used (laser type, peel strength, boosters)
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wine font-bold text-lg">•</span>
                    <p className="text-brown">Number of sessions needed</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wine font-bold text-lg">•</span>
                    <p className="text-brown">
                      Whether you need a combination plan
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-georgia text-wine mb-4">
                  Nexus Clinic's published starting ranges for brightening
                  options in Malaysia include:
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-taupe/20">
                    <span className="text-brown font-medium">
                      Glutathione infusion
                    </span>
                    <span className="text-wine font-bold">
                      RM 250 to RM 600 per session
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-taupe/20">
                    <span className="text-brown font-medium">Laser toning</span>
                    <span className="text-wine font-bold">
                      RM 400 to RM 1,000 per session
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-taupe/20">
                    <span className="text-brown font-medium">
                      Chemical peel
                    </span>
                    <span className="text-wine font-bold">
                      RM 200 to RM 500 per session
                    </span>
                  </div>
                </div>
                <p className="text-brown/80 text-sm mt-6 italic">
                  A consultation helps you avoid paying for treatments you do
                  not need.
                </p>
              </div>
            </motion.div>

            {/* Laser vs peel vs infusion vs skincare (simple comparison) */}
            <motion.div variants={fadeInUp} className="mt-12">
              <h3 className="text-2xl font-georgia text-wine mb-6">
                Laser vs peel vs infusion vs skincare (simple comparison)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-wine font-semibold mb-2">
                    If your main issue is stubborn spots or patchy pigment
                  </p>
                  <p className="text-brown/80">
                    Laser toning often gives the clearest improvement because it
                    targets pigment more directly.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-wine font-semibold mb-2">
                    If your skin looks tired, rough, and dull
                  </p>
                  <p className="text-brown/80">
                    Chemical peels can brighten fast by removing dead skin and
                    improving texture.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-wine font-semibold mb-2">
                    If your skin is dehydrated and "flat"
                  </p>
                  <p className="text-brown/80">
                    Mesotherapy or boosters can add bounce and glow while you
                    work on pigment.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-wine font-semibold mb-2">
                    If you want support from within
                  </p>
                  <p className="text-brown/80">
                    Infusions can be considered with proper medical oversight,
                    but keep expectations realistic and safety first. Evidence
                    for IV glutathione cosmetic lightening is still not settled.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Areas we can treat */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown text-center"
            >
              Areas we can treat{" "}
              <span className="text-wine">(face and body)</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-brown/90 max-w-2xl mx-auto text-lg"
            >
              People often focus on the face, but uneven tone shows up
              everywhere.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-center text-brown font-medium"
            >
              Common treatment areas:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                "Face, neck, chest",
                "Hands and arms",
                "Back (especially post-acne marks)",
                "Underarms (friction and shaving irritation)",
                "Elbows and knees",
                "Inner thighs",
                "Bikini line (very gentle protocols only)",
              ].map((area, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg text-center shadow-md border border-taupe/10 hover:border-rose/30 transition-all"
                >
                  <p className="text-brown font-medium">{area}</p>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-center max-w-3xl mx-auto text-base bg-white p-6 rounded-xl shadow-lg"
            >
              The key is choosing the right intensity for the area. Underarms
              and intimate zones need extra caution because the skin is more
              sensitive.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What results can you expect */}
      <section className="py-20 px-4 bg-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown text-center"
            >
              What results can you expect{" "}
              <span className="text-wine">(and how soon)?</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-brown/90 text-lg"
            >
              This depends on what you are treating.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-wine font-georgia text-lg mb-3">
                  Dullness and mild tan
                </h4>
                <p className="text-brown/80">
                  some people notice a fresher glow after the first peel or
                  light laser toning
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-wine font-georgia text-lg mb-3">
                  Dark spots and acne marks
                </h4>
                <p className="text-brown/80">
                  typically improves over several sessions
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-wine font-georgia text-lg mb-3">Melasma</h4>
                <p className="text-brown/80">
                  improves, but often needs maintenance because triggers can
                  return (sun and hormones)
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border-l-4 border-rose"
            >
              <p className="text-brown/90 text-lg">
                Nexus Clinic also notes brightening longevity can be around 6 to
                12 months with proper maintenance, depending on lifestyle and
                care.
              </p>
              <p className="text-wine font-bold text-xl mt-6">
                If a clinic promises "permanent whitening," be careful. Skin is
                alive. It responds to sun, stress, and inflammation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How to keep results longer */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown text-center"
            >
              How to keep results longer{" "}
              <span className="text-wine">in Kuala Lumpur</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-brown/90 text-xl font-medium"
            >
              If you do nothing else, do this:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
                <div className="bg-rose/10 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-rose" />
                </div>
                <p className="text-brown font-medium">
                  1. Use sunscreen daily (even on cloudy days)
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
                <div className="bg-rose/10 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-rose" />
                </div>
                <p className="text-brown font-medium">
                  2. Avoid "mystery whitening" creams
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
                <div className="bg-rose/10 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-rose" />
                </div>
                <p className="text-brown font-medium">
                  3. Do not pick acne (it creates marks)
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
                <div className="bg-rose/10 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-rose" />
                </div>
                <p className="text-brown font-medium">
                  4. Treat pigmentation early before it becomes deep and
                  stubborn
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4 md:col-span-2 justify-center">
                <div className="bg-rose/10 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-rose" />
                </div>
                <p className="text-brown font-medium">
                  5. Maintain with light sessions if needed (especially for
                  melasma)
                </p>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-wine font-bold text-2xl mt-8"
            >
              Consistency beats intensity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Nexus Clinic */}
      <section className="py-20 px-4 bg-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown"
            >
              Why <span className="text-wine">Nexus Clinic Kuala Lumpur</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown/90 text-xl max-w-2xl mx-auto"
            >
              Because you want a plan that feels safe, clear, and personal.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg text-left hover:shadow-xl transition-all">
                <MapPin className="w-8 h-8 text-rose mb-4" />
                <p className="text-brown">
                  Convenient KLCC area location: Wisma UOA II, Jalan Pinang,
                  Kuala Lumpur
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-left hover:shadow-xl transition-all">
                <Calendar className="w-8 h-8 text-rose mb-4" />
                <p className="text-brown">
                  Established aesthetic clinic (founded in 2001)
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-left hover:shadow-xl transition-all">
                <Activity className="w-8 h-8 text-rose mb-4" />
                <p className="text-brown">
                  Multiple brightening pathways: laser toning, peels,
                  mesotherapy, and infusion support options
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-left hover:shadow-xl transition-all">
                <Heart className="w-8 h-8 text-rose mb-4" />
                <p className="text-brown">
                  Education-first approach: we focus on even tone, pigment
                  control, and long-term maintenance
                </p>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-brown/90 text-xl max-w-2xl mx-auto mt-8 italic"
            >
              If you're tired of guessing, this is where your skin journey
              becomes structured.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown text-center"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-brown/90 text-lg"
            >
              (People Also Ask style, Malaysia + KL intent)
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="max-w-4xl mx-auto space-y-4"
            >
              {/* FAQ 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-georgia text-wine mb-2">
                  1) What is the best skin whitening treatment in Malaysia?
                </h3>
                <p className="text-brown/80">
                  It depends on the cause. For stubborn pigmentation, laser
                  toning is often effective. For dullness and surface pigment,
                  chemical peels can work well. Many people get the best results
                  from a combination plan rather than one single treatment.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-georgia text-wine mb-2">
                  2) How much does skin whitening treatment cost in Kuala
                  Lumpur?
                </h3>
                <p className="text-brown/80">
                  At Nexus Clinic, published starting ranges include RM 200 to
                  RM 500 for chemical peels, RM 400 to RM 1,000 for laser
                  toning, and RM 250 to RM 600 for glutathione infusion
                  sessions. Final cost depends on your skin condition and the
                  number of sessions.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-georgia text-wine mb-2">
                  3) Is laser skin whitening safe for Asian skin tones?
                </h3>
                <p className="text-brown/80">
                  This is answered in consultation based on your skin type and
                  concerns. Our doctors assess carefully before recommending any
                  laser treatment.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-georgia text-wine mb-2">
                  4) How many sessions will I need to see results?
                </h3>
                <p className="text-brown/80">
                  Mild dullness may improve quickly, while dark spots and
                  melasma usually need multiple sessions. Your doctor will
                  estimate based on pigment depth and how reactive your skin is.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-georgia text-wine mb-2">
                  5) How long does skin brightening last?
                </h3>
                <p className="text-brown/80">
                  With good maintenance and daily sun protection, results can
                  last for months. Nexus Clinic notes an estimate of around 6 to
                  12 months with proper maintenance, depending on lifestyle and
                  triggers.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-georgia text-wine mb-2">
                  6) Do glutathione drips really whiten skin?
                </h3>
                <p className="text-brown/80">
                  Some people report brighter-looking skin, but results vary.
                  Scientific reviews show mixed evidence, especially for IV use,
                  and long-term safety and maintenance protocols are not fully
                  established. If you consider it, only do it under medical
                  supervision, and keep expectations realistic.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-georgia text-wine mb-2">
                  7) Are whitening injections or IV drips risky?
                </h3>
                <p className="text-brown/80">
                  They can be, especially if done outside a proper medical
                  setting. Public warnings in some countries have highlighted
                  serious adverse reactions linked to unregulated IV glutathione
                  drips. Always prioritise medical oversight and verified
                  sourcing.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-georgia text-wine mb-2">
                  8) Can chemical peels lighten darker skin safely?
                </h3>
                <p className="text-brown/80">
                  Yes, when the peel type and strength are chosen correctly for
                  your skin tone. Done too aggressively, peels can trigger
                  irritation and post-inflammatory pigmentation, so
                  personalisation matters.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-georgia text-wine mb-2">
                  9) Can I do skin whitening treatment if I have melasma?
                </h3>
                <p className="text-brown/80">
                  Yes, but melasma usually needs a careful plan and strong sun
                  protection. Treatments can improve patches, but maintenance is
                  often needed because triggers like UV and hormones can bring
                  it back.
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-georgia text-wine mb-2">
                  10) What should I avoid if I want to brighten my skin safely
                  in Malaysia?
                </h3>
                <p className="text-brown/80">
                  Avoid unverified "whitening" creams from unknown sellers.
                  Malaysia health authorities have warned about scheduled
                  poisons like mercury in cosmetics and the risks can be severe.
                  Check product notification status when buying skincare.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-wine relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-light"
            >
              If you're searching for skin whitening treatment in Kuala Lumpur
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-light/90 text-xl max-w-2xl mx-auto"
            >
              because your skin feels uneven, patchy, or dull, let's make it
              simple.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-6">
              <a
                href="#"
                className="inline-block px-10 py-5 bg-light text-wine rounded-full font-medium text-lg hover:bg-cream transition-colors duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Book a consultation at Nexus Clinic Kuala Lumpur
              </a>
              <p className="text-light/80 text-base mt-6">
                Wisma UOA II, Jalan Pinang, Kuala Lumpur
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SkinWhiteningLanding;
