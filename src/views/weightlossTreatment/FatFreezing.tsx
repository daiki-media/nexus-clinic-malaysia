"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Award,
  Users,
  CheckCircle2,
  XCircle,
  ThermometerSnowflake,
  Shield,
  AlertCircle,
  Scale,
  Activity,
  Droplets,
  Heart,
  Smartphone,
  Target,
  Zap,
  Feather,
  Sparkles,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const FatFreezingLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "weightLoss/fatFreezing");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-fat-freezing1.webp",
      after: "/images/B&A-w/B&A-fat-freezing1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-fat-freezing2.webp",
      after: "/images/B&A-w/B&A-fat-freezing2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-fat-freezing3.webp",
      after: "/images/B&A-w/B&A-fat-freezing3.webp",
    },
  ];
  return (
    <div className="bg-light font-inter overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-cream to-light pt-20">
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-wine/10 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown mb-6 leading-tight"
            >
              Fat Freezing Weight Loss Treatment in Malaysia
              <span className="block text-wine mt-2">(Kuala Lumpur)</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-taupe mb-8 font-georgia italic"
            >
              Freeze stubborn fat. Shape your body. Feel good in your clothes
              again.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown/80 max-w-2xl mx-auto mb-8"
            >
              Some fat just refuses to move. You can eat clean, walk daily, and
              still see a lower belly pouch or love handles that stay. Fat
              freezing in Malaysia is popular for this exact reason. It targets
              those "last mile" fat areas without surgery.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown/80 max-w-2xl mx-auto mb-12"
            >
              At Nexus Clinic Kuala Lumpur, we plan fat freezing like a body
              contouring project. We map the area, pick the right applicator,
              and guide you through realistic results.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
            >
              <div className="bg-glass backdrop-blur-sm rounded-xl p-4 border border-cream">
                <Award className="w-6 h-6 text-wine mx-auto mb-2" />
                <p className="text-sm text-brown">
                  Doctor-led consultation and suitability screening
                </p>
              </div>
              <div className="bg-glass backdrop-blur-sm rounded-xl p-4 border border-cream">
                <Shield className="w-6 h-6 text-wine mx-auto mb-2" />
                <p className="text-sm text-brown">
                  FDA-cleared cryolipolysis technology (fat freezing)
                </p>
              </div>
              <div className="bg-glass backdrop-blur-sm rounded-xl p-4 border border-cream">
                <Users className="w-6 h-6 text-wine mx-auto mb-2" />
                <p className="text-sm text-brown">
                  Personalised plan for your body and budget
                </p>
              </div>
              <div className="bg-glass backdrop-blur-sm rounded-xl p-4 border border-cream">
                <Clock className="w-6 h-6 text-wine mx-auto mb-2" />
                <p className="text-sm text-brown">
                  Minimal downtime, gradual natural-looking results
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* First, a quick truth about "weight loss" Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8"
            >
              First, a quick truth about{" "}
              <span className="text-wine">"weight loss"</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <p className="text-brown/80 mb-4">
                People search "fat freezing weight loss treatment" because they
                want a slimmer look fast. Fair. But medically, fat freezing is
                mainly for fat reduction and body contouring, not scale weight
                loss. You may lose a little weight, but the real win is shape
                and fit. The FDA also describes cryolipolysis as a non-invasive
                method to reduce visible fat bulges, not a general weight-loss
                solution.
              </p>

              <div className="mt-6 space-y-4">
                <div className="bg-rose/5 rounded-xl p-4 border border-rose/20">
                  <p className="text-brown font-medium">
                    If your goal is "drop 10 to 15kg" — we usually combine
                    lifestyle support and other medical options.
                  </p>
                </div>
                <div className="bg-wine/5 rounded-xl p-4 border border-wine/20">
                  <p className="text-brown font-medium">
                    If your goal is "flatten this belly area" or "reduce love
                    handles," fat freezing can be a strong choice.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is fat freezing (cryolipolysis)? Section with Image */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brown mb-8">
                What is fat freezing{" "}
                <span className="text-wine">(cryolipolysis)?</span>
              </h2>

              <div className="space-y-4 text-brown/80">
                <p>
                  Fat freezing is also called cryolipolysis. It uses controlled
                  cold to target fat cells under the skin. The treatment area is
                  gently pulled into an applicator using suction, then cooled
                  for up to about an hour depending on the device and area. Fat
                  cells are more sensitive to cold than skin, so the aim is to
                  damage fat cells while keeping the skin safe.
                </p>
                <p>
                  Over the next weeks, your body gradually clears those treated
                  fat cells.
                </p>
              </div>

              <div className="mt-8 bg-wine/5 rounded-xl p-6 border border-wine/20">
                <h3 className="text-xl font-bold text-brown mb-3">
                  Does fat freezing actually work?
                </h3>
                <p className="text-brown/80 mb-4">
                  Yes, for the right person and the right fat type.
                </p>
                <p className="text-brown/80 mb-4">
                  Clinical research has reported around{" "}
                  <span className="font-bold text-wine">
                    20% to 25% reduction
                  </span>{" "}
                  in fat layer thickness in treated areas over time in studied
                  settings.
                </p>
                <p className="text-brown/80">Real-life results depend on:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-brown/80">
                  <li>How "pinchable" the fat is</li>
                  <li>Which area you treat</li>
                  <li>The device and applicator used</li>
                  <li>Your baseline lifestyle and weight stability</li>
                  <li>How many sessions you do</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/main/fat-freezing.webp"
                  alt="Fat freezing treatment procedure at Nexus Clinic Kuala Lumpur"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-georgia italic">
                    Fat freezing treatment at Nexus Clinic Kuala Lumpur
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What fat freezing can and cannot do Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              What fat freezing{" "}
              <span className="text-wine">can and cannot do</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                variants={fadeInLeft}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-wine mb-4 flex items-center">
                  <CheckCircle2 className="w-6 h-6 mr-2" />
                  It can help with:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Lower belly pouch that stays after dieting
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Love handles that don't tone up
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Inner thighs rubbing
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Back or bra bulge
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Upper arms
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Double chin in suitable cases
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-taupe mb-4 flex items-center">
                  <XCircle className="w-6 h-6 mr-2" />
                  It cannot:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    Replace exercise and diet
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    Treat obesity as a primary solution
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    Fix major loose skin by itself
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    Give "instant" results the next day
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fat freezing options you will see in Malaysia Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              Fat freezing options{" "}
              <span className="text-wine">you will see in Malaysia</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-center mb-8"
            >
              When you search fat freezing Kuala Lumpur or cryolipolysis
              Malaysia, you'll see different brands and devices marketed by
              clinics, such as:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-cream rounded-xl p-6 text-center border border-rose/20">
                <Sparkles className="w-8 h-8 text-wine mx-auto mb-3" />
                <p className="font-semibold text-brown text-lg">
                  CoolSculpting
                </p>
                <p className="text-sm text-taupe mt-2">
                  (a well-known cryolipolysis system)
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 text-center border border-rose/20">
                <Sparkles className="w-8 h-8 text-wine mx-auto mb-3" />
                <p className="font-semibold text-brown text-lg">Clatou</p>
                <p className="text-sm text-taupe mt-2">
                  (commonly offered across Malaysia)
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 text-center border border-rose/20">
                <Sparkles className="w-8 h-8 text-wine mx-auto mb-3" />
                <p className="font-semibold text-brown text-lg">CRISTAL Pro</p>
                <p className="text-sm text-taupe mt-2">
                  (another cryolipolysis device used by some KL clinics)
                </p>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-brown/80 mt-8 text-center font-georgia italic"
            >
              The device matters, but what matters more is patient selection,
              correct applicator choice, and treatment planning.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who is a good candidate for fat freezing? Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8"
            >
              Who is a <span className="text-wine">good candidate</span> for fat
              freezing?
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <p className="text-brown/80 mb-4">
                You are usually a good candidate if you:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start text-brown/80">
                  <CheckCircle2 className="w-5 h-5 text-wine mr-2 shrink-0 mt-0.5" />
                  Are near your target weight
                </li>
                <li className="flex items-start text-brown/80">
                  <CheckCircle2 className="w-5 h-5 text-wine mr-2 shrink-0 mt-0.5" />
                  Have localised pockets of pinchable fat
                </li>
                <li className="flex items-start text-brown/80">
                  <CheckCircle2 className="w-5 h-5 text-wine mr-2 shrink-0 mt-0.5" />
                  Want non-surgical contouring
                </li>
                <li className="flex items-start text-brown/80">
                  <CheckCircle2 className="w-5 h-5 text-wine mr-2 shrink-0 mt-0.5" />
                  Can keep your weight fairly stable after treatment
                </li>
              </ul>
              <p className="text-brown/80">
                Fat freezing is commonly described as best for small to moderate
                stubborn fat pockets, not as an obesity treatment.
              </p>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 mt-16"
            >
              Who should <span className="text-wine">avoid it</span> or get
              medical clearance first?
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <p className="text-brown/80 mb-4">
                Because this treatment uses cold, people with certain
                cold-sensitive medical conditions may not be suitable. Medical
                literature and clinical guidance often list conditions like
                cryoglobulinemia and other cold-related disorders as
                contraindications.
              </p>
              <p className="text-brown/80 mb-4">
                Also avoid treatment if you are pregnant, have active skin
                infection in the area, or have significant skin damage at the
                site.
              </p>
              <div className="bg-wine/10 rounded-xl p-4 border border-wine/20">
                <p className="text-brown font-medium">
                  At Nexus Clinic Kuala Lumpur, suitability screening is not a
                  formality. It's a safety step.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Areas fat freezing can treat Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              Areas fat freezing can treat{" "}
              <span className="text-wine">(most requested in KL)</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-center mb-8"
            >
              Here are common treatment zones patients ask for in Kuala Lumpur:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="bg-cream rounded-xl p-4 text-center border border-rose/20">
                <Target className="w-6 h-6 text-wine mx-auto mb-2" />
                <p className="text-brown">Abdomen (upper and lower belly)</p>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center border border-rose/20">
                <Target className="w-6 h-6 text-wine mx-auto mb-2" />
                <p className="text-brown">Flanks (love handles)</p>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center border border-rose/20">
                <Target className="w-6 h-6 text-wine mx-auto mb-2" />
                <p className="text-brown">Back and bra bulge</p>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center border border-rose/20">
                <Target className="w-6 h-6 text-wine mx-auto mb-2" />
                <p className="text-brown">Upper arms</p>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center border border-rose/20">
                <Target className="w-6 h-6 text-wine mx-auto mb-2" />
                <p className="text-brown">Inner and outer thighs</p>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center border border-rose/20">
                <Target className="w-6 h-6 text-wine mx-auto mb-2" />
                <p className="text-brown">Under-chin area in suitable cases</p>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-brown/80 mt-8 text-center text-sm"
            >
              FDA materials for CoolSculpting-type systems also list multiple
              approved body areas for cold-assisted fat reduction, including
              abdomen, flanks, thighs, submental area, and more.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Consultation and body mapping Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              <span className="text-wine">
                1) Consultation and body mapping
              </span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <p className="text-brown/80 mb-4">We talk about:</p>
              <ul className="space-y-2 text-brown/80 list-disc list-inside mb-4">
                <li>Your goal (shape, not just weight)</li>
                <li>Your lifestyle routine and timeline</li>
                <li>What areas bother you most</li>
                <li>What is realistic in one session versus multiple</li>
              </ul>
              <p className="text-brown/80">
                Then we mark and measure areas so treatment is targeted, not
                guesswork.
              </p>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center mt-16"
            >
              <span className="text-wine">2) Treatment day</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <ul className="space-y-2 text-brown/80 list-disc list-inside">
                <li>Applicator is placed on the target area</li>
                <li>You feel strong cold, pressure, and pulling at first</li>
                <li>Most people feel numbness after a few minutes</li>
                <li>
                  Treatment time is commonly up to about an hour per area,
                  depending on device and protocol
                </li>
              </ul>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center mt-16"
            >
              <span className="text-wine">3) After the session</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <p className="text-brown/80">
                You can usually return to normal activity the same day. Many
                clinics describe fat freezing as requiring little to no
                downtime.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What does fat freezing feel like? Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              What does{" "}
              <span className="text-wine">fat freezing feel like?</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-8"
            >
              <p className="text-brown/80 mb-4">Most people describe:</p>
              <ul className="space-y-4">
                <li className="flex items-center text-brown/80">
                  <ThermometerSnowflake className="w-5 h-5 text-wine mr-3" />
                  Cold and suction at the start
                </li>
                <li className="flex items-center text-brown/80">
                  <Feather className="w-5 h-5 text-wine mr-3" />
                  Numbness during the middle
                </li>
                <li className="flex items-center text-brown/80">
                  <Zap className="w-5 h-5 text-wine mr-3" />
                  Tingling or sensitivity afterward
                </li>
              </ul>
              <p className="mt-4 text-brown/80">
                It is not "pain-free," but it is usually tolerable. If you are
                anxious, tell the clinic. Comfort management is part of a good
                plan.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* When will you see results? Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              When will you <span className="text-wine">see results?</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <p className="text-brown/80 mb-4">
                Fat freezing is not instant. It is gradual.
              </p>
              <p className="text-brown/80 mb-6">
                Many clinics and guides describe visible changes starting around
                4 to 6 weeks, with fuller results around 8 to 12 weeks.
              </p>

              <div className="space-y-6">
                <p className="text-brown font-semibold">A simple timeline:</p>

                <div>
                  <p className="font-medium text-wine mb-2">
                    Week 2 to 4: early changes, subtle
                  </p>
                  <div className="h-2 bg-cream rounded-full">
                    <div
                      className="h-2 bg-rose rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-wine mb-2">
                    Week 6 to 8: more noticeable contour change
                  </p>
                  <div className="h-2 bg-cream rounded-full">
                    <div
                      className="h-2 bg-rose rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-wine mb-2">
                    Week 12: your "final" look for that session
                  </p>
                  <div className="h-2 bg-cream rounded-full">
                    <div
                      className="h-2 bg-rose rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Pros and cons of fat freezing Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              Pros and cons of <span className="text-wine">fat freezing</span>
              <span className="block text-sm text-taupe font-georgia mt-2">
                (honest list)
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                variants={fadeInLeft}
                className="bg-cream rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-wine mb-4 flex items-center">
                  <CheckCircle2 className="w-6 h-6 mr-2" />
                  Pros
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Non-surgical, no cuts
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Minimal downtime for most people
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Natural-looking fat reduction over time
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Targets stubborn areas that resist exercise
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-wine mr-2">•</span>
                    Treated fat cells are reduced long-term when weight is
                    stable
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-cream rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-taupe mb-4 flex items-center">
                  <XCircle className="w-6 h-6 mr-2" />
                  Cons
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    Results take time
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    You may need more than one session
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    It is not designed for major weight loss
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    It does not tighten very loose skin on its own
                  </li>
                  <li className="flex items-start text-brown/80">
                    <span className="text-taupe mr-2">•</span>
                    Rare risks exist, like paradoxical fat growth (explained
                    below)
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Side effects and safety Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              Side effects and <span className="text-wine">safety</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <p className="text-brown/80 mb-4">
                Common short-term side effects can include:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80">
                  Redness
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80">
                  Swelling
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80">
                  Bruising
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80">
                  Temporary numbness
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80">
                  Tingling
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80">
                  Sensitivity
                </div>
              </div>
              <p className="text-brown/80">
                These usually settle within days to a few weeks.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine/5 rounded-2xl p-8 border border-wine/20"
            >
              <h3 className="text-xl font-bold text-wine mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2" />
                Rare but important: Paradoxical Adipose Hyperplasia (PAH)
              </h3>
              <p className="text-brown/80 mb-4">
                PAH is a rare complication where the treated area can enlarge
                instead of shrink. A published medical report described PAH as
                rare with a very low incidence in that study context.
              </p>
              <p className="text-brown font-medium">
                This is why clinic standards matter. Proper screening, modern
                applicators, and informed consent are non-negotiable.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fat freezing cost in Kuala Lumpur and Malaysia Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              Fat freezing cost in{" "}
              <span className="text-wine">Kuala Lumpur and Malaysia</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <p className="text-brown/80 mb-4">Prices vary by:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80 text-sm">
                  Treatment area size
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80 text-sm">
                  Device type
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80 text-sm">
                  Number of cycles or applicators used
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80 text-sm">
                  Sessions needed
                </div>
                <div className="bg-cream rounded-lg p-3 text-center text-brown/80 text-sm">
                  Package structure
                </div>
              </div>

              <p className="text-brown/80 mb-4">
                <span className="font-bold text-wine">
                  What you will commonly see in Malaysia:
                </span>
              </p>

              <p className="text-brown/80 mb-3">
                Many sources cite RM2,000 to RM4,000 per session ranges for fat
                freezing in Malaysia.
              </p>

              <p className="text-brown/80 mb-3">
                Some KL clinic guides cite RM1,500 to RM3,000 per treatment area
                for a single session on average.
              </p>

              <p className="text-brown/80 mb-6">
                Some providers list starting prices such as RM2,800 onwards per
                session for specific systems.
              </p>

              <div className="bg-wine/10 rounded-xl p-6 border border-wine/20 mb-6">
                <p className="text-brown font-bold mb-2">
                  Nexus Clinic Kuala Lumpur pricing example:
                </p>
                <p className="text-brown/80">
                  Nexus Clinic also publishes example pricing such as RM2,500
                  per applicator for CoolSculpting on its site, which can help
                  set expectations before consultation.
                </p>
              </div>

              <p className="text-brown font-georgia italic text-center">
                Real talk: the cheapest option is not always the best value. One
                well-planned session can beat three poorly targeted sessions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fat freezing vs other slimming options in Malaysia Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              Fat freezing vs{" "}
              <span className="text-wine">other slimming options</span> in
              Malaysia
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-6">
              {/* vs Liposuction */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brown mb-3">
                  Fat freezing vs liposuction
                </h3>
                <div className="space-y-2 text-brown/80">
                  <p>
                    Fat freezing: non-surgical, gradual results, minimal
                    downtime
                  </p>
                  <p>
                    Liposuction: surgical, faster volume removal, more recovery
                    time
                  </p>
                </div>
                <p className="mt-4 text-sm text-brown/70">
                  If you want dramatic change quickly, surgery may be discussed.
                  If you want non-surgical contouring, fat freezing is the usual
                  pick.
                </p>
              </div>

              {/* vs Slimming injections */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brown mb-3">
                  Fat freezing vs "slimming injections" or medication
                </h3>
                <p className="text-brown/80">
                  Some clinics discuss appetite-control injections or medical
                  weight loss options alongside body contouring. These address
                  weight and appetite more than targeted fat pockets. Nexus
                  Clinic also mentions other fat loss options on its site, which
                  shows how clinics often position fat freezing as one tool in a
                  bigger strategy.
                </p>
              </div>

              {/* vs RF or HIFU */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brown mb-3">
                  Fat freezing vs RF or HIFU body tightening
                </h3>
                <div className="space-y-2 text-brown/80">
                  <p>
                    RF/HIFU: can support skin tightening and mild fat reduction
                  </p>
                  <p>
                    Fat freezing: stronger for targeted fat pocket reduction
                  </p>
                </div>
                <p className="mt-4 text-sm text-brown/70">
                  Often, the best plan is a smart combination based on your skin
                  quality.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How to keep results looking good Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              How to keep{" "}
              <span className="text-wine">results looking good</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-8"
            >
              <p className="text-brown/80 mb-6">
                Fat freezing reduces treated fat cells. But remaining fat cells
                can still expand if weight increases.
              </p>

              <h3 className="text-xl font-bold text-brown mb-4">
                Best habits after treatment:
              </h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <Scale className="w-5 h-5 text-wine mr-3" />
                  <span className="text-brown/80">Keep weight stable</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <Activity className="w-5 h-5 text-wine mr-3" />
                  <span className="text-brown/80">
                    Walk daily and stay active
                  </span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <Droplets className="w-5 h-5 text-wine mr-3" />
                  <span className="text-brown/80">Drink enough water</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <Heart className="w-5 h-5 text-wine mr-3" />
                  <span className="text-brown/80">
                    Prioritise protein and fibre
                  </span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <Smartphone className="w-5 h-5 text-wine mr-3" />
                  <span className="text-brown/80">
                    Sleep better than "just enough"
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* People Also Ask FAQs Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center"
            >
              People Also Ask <span className="text-wine">FAQs</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-center mb-8"
            >
              Below are FAQs aligned with the common "People also ask" patterns
              seen on clinic guides and consumer health pages about fat
              freezing, including session count, pain, downtime, permanence, and
              cost.
            </motion.p>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  Does fat freezing really work?
                </h3>
                <p className="text-brown/80">
                  Yes, it can work well for localised fat pockets. Studies
                  report measurable reductions in fat layer thickness in treated
                  areas, often around the 20% to 25% range in clinical settings.
                </p>
              </motion.div>

              {/* FAQ 2 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  Is fat freezing a weight loss treatment?
                </h3>
                <p className="text-brown/80">
                  Not in the traditional sense. It is mainly for reducing
                  visible fat bulges and improving shape. It can support a
                  slimmer look, but it is not designed to replace diet,
                  exercise, or medical weight loss plans.
                </p>
              </motion.div>

              {/* FAQ 3 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  How much does fat freezing cost in Malaysia?
                </h3>
                <p className="text-brown/80">
                  Commonly cited ranges are around RM2,000 to RM4,000 per
                  session, depending on the area and clinic. Some clinics cite
                  RM1,500 to RM3,000 per area per session as an average range.
                </p>
              </motion.div>

              {/* FAQ 4 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  How many sessions do I need?
                </h3>
                <p className="text-brown/80">
                  Many people see changes after 1 session, but 2 to 3 sessions
                  are often recommended depending on your fat thickness and
                  goals.
                </p>
              </motion.div>

              {/* FAQ 5 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  How long does one fat freezing session take?
                </h3>
                <p className="text-brown/80">
                  A session is commonly around 35 to 60 minutes per area, and
                  the FDA notes cooling can be up to an hour depending on the
                  area and device.
                </p>
              </motion.div>

              {/* FAQ 6 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  Is fat freezing painful?
                </h3>
                <p className="text-brown/80">
                  Most patients feel intense cold and suction at the start, then
                  numbness. Afterward, you may feel tingling or sensitivity for
                  a short time. Many clinics describe it as well tolerated.
                </p>
              </motion.div>

              {/* FAQ 7 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  Is there downtime after fat freezing?
                </h3>
                <p className="text-brown/80">
                  Usually no. Many people return to work and normal routines the
                  same day, although mild soreness or numbness can happen.
                </p>
              </motion.div>

              {/* FAQ 8 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  When will I see results?
                </h3>
                <p className="text-brown/80">
                  Expect gradual changes. Many clinics note visible results
                  around 4 to 12 weeks, with full improvement often seen around
                  2 to 3 months.
                </p>
              </motion.div>

              {/* FAQ 9 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  Are fat freezing results permanent?
                </h3>
                <p className="text-brown/80">
                  Treated fat cells are reduced long-term. But if you gain
                  weight, remaining fat cells can expand. Stable habits help
                  preserve results.
                </p>
              </motion.div>

              {/* FAQ 10 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  What are the side effects of fat freezing?
                </h3>
                <p className="text-brown/80">
                  Common short-term effects include redness, swelling, bruising,
                  and temporary numbness. These typically resolve.
                </p>
              </motion.div>

              {/* FAQ 11 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  What is the rare "fat freezing gone wrong" risk?
                </h3>
                <p className="text-brown/80">
                  A rare risk is paradoxical adipose hyperplasia (PAH), where
                  fat in the treated area enlarges instead of reducing. Medical
                  literature describes it as rare, but it is important to
                  discuss before treatment.
                </p>
              </motion.div>

              {/* FAQ 12 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  Who should not do fat freezing?
                </h3>
                <p className="text-brown/80">
                  People with cold-sensitive medical conditions may not be
                  suitable. Medical sources list contraindications such as
                  cryoglobulinemia and similar cold-related disorders. Always
                  disclose your medical history in consultation.
                </p>
              </motion.div>

              {/* FAQ 13 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  Can fat freezing remove belly fat?
                </h3>
                <p className="text-brown/80">
                  It can reduce pinchable fat in the abdomen area and improve
                  contour. It works best for stubborn pockets, not deep visceral
                  fat.
                </p>
              </motion.div>

              {/* FAQ 14 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  Can fat freezing tighten loose skin?
                </h3>
                <p className="text-brown/80">
                  Fat freezing mainly targets fat. If skin is loose, you may
                  need a tightening plan too, such as RF or HIFU, based on
                  doctor advice.
                </p>
              </motion.div>

              {/* FAQ 15 */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-brown mb-2">
                  What should I do after fat freezing to get better results?
                </h3>
                <p className="text-brown/80">
                  Stay hydrated, keep light activity, and avoid major weight
                  swings. Results build over weeks, so patience plus consistency
                  wins.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ready to slim a stubborn area in Kuala Lumpur? Section */}
      <section className="py-20 bg-linear-to-r from-wine to-rose text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to slim a stubborn area in Kuala Lumpur?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-white/90 mb-8 text-lg"
            >
              If you're tired of fighting the same pocket of fat, fat freezing
              may be your next smart move.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <p className="text-xl font-bold mb-6">
                At Nexus Clinic Kuala Lumpur, we focus on:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center justify-center">
                  <Shield className="w-5 h-5 mr-2" />
                  <span>Safe screening</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  <span>Clear expectations</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-5 h-5 mr-2" />
                  <span>Precise treatment planning</span>
                </div>
                <div className="flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  <span>Natural-looking contour results</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FatFreezingLanding;
