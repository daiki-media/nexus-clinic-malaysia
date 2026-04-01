"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Droplets,
  Eye,
  Sparkles,
  Shield,
  Award,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info,
  Heart,
  Droplet,
  Zap,
  Layers,
  MapPin,
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

const DarkEyeCircleLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "skin/darkEyeCircle");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-dark-eye-treatment1.webp",
      after: "/images/B&A-skin/B&A-dark-eye-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-dark-eye-treatment2.webp",
      after: "/images/B&A-skin/B&A-dark-eye-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-dark-eye-treatment3.webp",
      after: "/images/B&A-skin/B&A-dark-eye-treatment3.webp",
    },
  ];
  return (
    <div className="w-full bg-light font-inter overflow-hidden">
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-linear-to-br from-cream via-light to-cream"
      >
        <div className="absolute inset-0 bg-glass backdrop-blur-3xl opacity-20" />

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-wine/10 text-wine px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Doctor-led aesthetic clinic in Kuala Lumpur with
              consultation-first planning
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-georgia text-brown mb-6 leading-tight"
          >
            Dark Eye Circle Treatment
            <span className="block text-wine text-3xl md:text-4xl mt-4">
              in Kuala Lumpur, Malaysia
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-taupe max-w-3xl mx-auto mb-12 font-inter"
          >
            Bright eyes again, without looking "done".
            <span className="block text-rose mt-2">
              Just rested, fresh, and like you.
            </span>
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-brown max-w-3xl mx-auto mb-12"
          >
            Dark eye circles are not always from lack of sleep. Sometimes it is
            genetics, pigmentation, hollowness, or eye bags creating shadows. At
            Nexus Clinic Kuala Lumpur, we treat the real cause first, then
            choose the safest option for your under-eye area.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button className="bg-wine text-light px-8 py-4 rounded-full font-medium hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
              Book Consultation <ChevronRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-wine text-wine px-8 py-4 rounded-full font-medium hover:bg-wine/5 transition-all duration-300">
              Learn More
            </button>
          </motion.div>

          {/* Trust at a glance */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 bg-glass backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-wine shrink-0" />
              <span className="text-brown font-medium text-left">
                Doctor-led aesthetic clinic in Kuala Lumpur with
                consultation-first planning
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Eye className="w-6 h-6 text-wine shrink-0" />
              <span className="text-brown font-medium text-left">
                Under-eye expertise including tear trough (under eye) filler
                options for hollows and shadowing
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-wine shrink-0" />
              <span className="text-brown font-medium text-left">
                Located at Wisma UOA II, Jalan Pinang, Kuala Lumpur
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Dark Circles Section */}
      <section className="px-4 py-24 bg-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-6">
                Why dark circles feel so frustrating
              </h2>
              <div className="space-y-6 text-taupe text-lg">
                <p>
                  You can sleep well and still look tired. You can use eye cream
                  for months and see no change.
                </p>
                <p className="text-brown font-medium">
                  That is because "dark circles" is not one problem. It is a
                  label people use for several different under-eye issues.
                </p>
                <p className="text-wine font-medium">
                  Once we identify what is actually happening under your eyes,
                  treatment becomes simpler. Also more effective.
                </p>
              </div>
            </div>

            {/* Single Image Section */}
            <motion.div
              variants={scaleIn}
              className="relative h-125 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/skin/dark-eye-circle-treatment.webp"
                alt="Under-eye assessment at Nexus Clinic KL showing detailed eye analysis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-light">
                <p className="text-lg font-georgia">
                  Professional under-eye assessment identifying pigment,
                  vessels, hollows, and bags at Nexus Clinic KL
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What are Dark Circles Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-24 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown text-center mb-8"
          >
            What are dark eye circles, really?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-taupe text-center max-w-4xl mx-auto mb-16"
          >
            Dark eye circles are a darker looking area under the lower eyelids.
            It can look brown, grey, blue, or purple depending on the cause and
            your skin tone. It is usually not a medical problem, but it can be a
            big confidence problem.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 1. Pigmented */}
            <motion.div
              variants={fadeInLeft}
              className="bg-light rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-rose/10 p-3 rounded-xl">
                  <Sun className="w-6 h-6 text-rose" />
                </div>
                <h3 className="text-2xl font-georgia text-brown">
                  1. Pigmented dark circles (brown)
                </h3>
              </div>
              <p className="text-taupe">
                Often from melasma-like pigment, post-inflammatory pigment, sun
                exposure, or rubbing (especially with allergies or eczema).
              </p>
            </motion.div>

            {/* 2. Vascular */}
            <motion.div
              variants={fadeInRight}
              className="bg-light rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-wine/10 p-3 rounded-xl">
                  <Droplets className="w-6 h-6 text-wine" />
                </div>
                <h3 className="text-2xl font-georgia text-brown">
                  2. Vascular dark circles (blue or purple)
                </h3>
              </div>
              <p className="text-taupe">
                Often from visible blood vessels or thin skin, sometimes worse
                with fatigue and dehydration.
              </p>
            </motion.div>

            {/* 3. Structural */}
            <motion.div
              variants={fadeInLeft}
              className="bg-light rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-taupe/10 p-3 rounded-xl">
                  <Layers className="w-6 h-6 text-taupe" />
                </div>
                <h3 className="text-2xl font-georgia text-brown">
                  3. Structural shadowing (hollows or tear trough)
                </h3>
              </div>
              <p className="text-taupe">
                The skin may not be "dark". The contour creates a shadow. This
                is common with genetics, aging, weight loss, and reduced cheek
                support.
              </p>
            </motion.div>

            {/* 4. Eye bags */}
            <motion.div
              variants={fadeInRight}
              className="bg-light rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brown/10 p-3 rounded-xl">
                  <Eye className="w-6 h-6 text-brown" />
                </div>
                <h3 className="text-2xl font-georgia text-brown">
                  4. Eye bags and puffiness
                </h3>
              </div>
              <p className="text-taupe">
                Swelling or fat pads create shadows beneath them. The "dark" is
                often a shadow effect, not pigment.
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-lg text-brown mb-12"
          >
            Many people have a mix of two or three types. That is why one
            product rarely solves everything.
          </motion.p>

          {/* Quick Self-Check */}
          <motion.div
            variants={fadeInUp}
            className="bg-light rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-georgia text-brown mb-6 flex items-center gap-2">
              <Info className="w-6 h-6 text-wine" />
              Quick self-check: what type do you likely have?
            </h3>
            <p className="text-taupe mb-6">
              This helps you understand what your doctor will look for.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-taupe">
              <div className="flex items-start gap-3">
                <span className="text-wine font-bold text-xl">•</span>
                <p>
                  If it looks brown and stays brown in every lighting, pigment
                  is likely part of it.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-wine font-bold text-xl">•</span>
                <p>
                  If it looks more blue or purple, vessels and thin skin may be
                  involved.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-wine font-bold text-xl">•</span>
                <p>
                  If it looks worse under overhead lights, hollows and shadowing
                  may be a major factor.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-wine font-bold text-xl">•</span>
                <p>
                  If you wake up puffy and it improves later, fluid retention
                  and eye bags may be involved.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-wine">
              A proper assessment matters because the under-eye is delicate.
              Nexus Clinic's tear trough page highlights that under-eye filler
              requires careful assessment, conservative dosing, and safety-first
              technique.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Causes Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-24 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown text-center mb-8"
          >
            What causes dark circles under the eyes?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-xl text-taupe mb-8"
          >
            There is no single cause. Common causes include:
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-xl p-4 text-center text-brown font-medium"
            >
              Genetics
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-xl p-4 text-center text-brown font-medium"
            >
              Fatigue
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-xl p-4 text-center text-brown font-medium"
            >
              Rubbing or scratching (often linked to allergies, dermatitis)
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-xl p-4 text-center text-brown font-medium"
            >
              Skin thinning with age
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-xl p-4 text-center text-brown font-medium"
            >
              Changes in skin colour from melasma
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-xl p-4 text-center text-brown font-medium"
            >
              Post-inflammatory pigmentation
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-cream rounded-xl p-4 text-center text-brown font-medium"
            >
              Sun exposure
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-rose/5 border border-rose/20 rounded-2xl p-6"
          >
            <p className="text-taupe">
              <span className="font-bold text-wine">Important:</span> If your
              dark circles come with persistent one-sided swelling, irritation,
              or sudden changes, it is worth discussing with a medical
              professional.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Treatment Options Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-24 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown text-center mb-4"
          >
            Dark eye circle treatment at Nexus Clinic Kuala Lumpur
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-xl text-taupe mb-12 max-w-3xl mx-auto"
          >
            At Nexus Clinic KL, we treat under-eye concerns with a "cause-first"
            approach. That means we do not push one trendy solution for
            everyone.
          </motion.p>

          {/* Step 1 */}
          <motion.div variants={fadeInLeft} className="mb-16">
            <h3 className="text-2xl font-georgia text-brown mb-6 flex items-center gap-3">
              <span className="bg-wine text-light w-10 h-10 rounded-full flex items-center justify-center text-lg">
                1
              </span>
              Step 1: Under-eye diagnosis and plan
            </h3>
            <p className="text-taupe mb-4">We assess:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-light rounded-xl p-4 text-brown flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-wine shrink-0" />
                <span>pigment vs vessels vs hollows vs bags</span>
              </div>
              <div className="bg-light rounded-xl p-4 text-brown flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-wine shrink-0" />
                <span>skin thickness</span>
              </div>
              <div className="bg-light rounded-xl p-4 text-brown flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-wine shrink-0" />
                <span>cheek support (midface volume)</span>
              </div>
              <div className="bg-light rounded-xl p-4 text-brown flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-wine shrink-0" />
                <span>allergy or rubbing history</span>
              </div>
              <div className="bg-light rounded-xl p-4 text-brown flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-wine shrink-0" />
                <span>your downtime comfort level</span>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={fadeInRight}>
            <h3 className="text-2xl font-georgia text-brown mb-6 flex items-center gap-3">
              <span className="bg-wine text-light w-10 h-10 rounded-full flex items-center justify-center text-lg">
                2
              </span>
              Step 2: Choose the right option (or combination)
            </h3>
            <p className="text-taupe mb-8">
              Here are the core options Nexus Clinic highlights across its
              services.
            </p>

            <div className="space-y-8">
              {/* Option 1 - Tear Trough Filler */}
              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-wine/10 p-4 rounded-xl">
                    <Droplet className="w-6 h-6 text-wine" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-georgia text-brown mb-3">
                      Option 1: Tear Trough Filler (Under Eye Filler) for
                      hollows and shadowing
                    </h4>
                    <p className="text-taupe mb-4">
                      If your "dark circles" are actually shadows from a hollow
                      tear trough, filler can be one of the most satisfying
                      fixes.
                    </p>
                    <p className="text-taupe mb-4">
                      Nexus Clinic explains that tear trough filler is designed
                      to soften the hollow groove between the lower eyelid and
                      upper cheek. When done correctly, it can reduce the tired
                      look caused by hollowness and shadowing.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-green-50 rounded-xl p-4">
                        <p className="font-bold text-brown mb-2 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />{" "}
                          Best for
                        </p>
                        <ul className="text-sm text-taupe space-y-1">
                          <li>• Sunken under-eyes</li>
                          <li>• Shadowing that looks like dark circles</li>
                          <li>
                            • Mild indentation when cheek support is reduced
                          </li>
                        </ul>
                      </div>
                      <div className="bg-rose/5 rounded-xl p-4">
                        <p className="font-bold text-brown mb-2 flex items-center gap-1">
                          <XCircle className="w-4 h-4 text-rose" /> Not ideal
                          for
                        </p>
                        <ul className="text-sm text-taupe space-y-1">
                          <li>• Prominent eye bags from fat prolapse</li>
                          <li>• Significant puffiness or fluid retention</li>
                          <li>• Dark circles caused mainly by pigmentation</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4">
                        <p className="font-bold text-brown mb-2">
                          What it feels like
                        </p>
                        <p className="text-sm text-taupe">
                          Quick. Precise. Usually mild discomfort.
                        </p>
                        <p className="font-bold text-brown mt-2">Downtime</p>
                        <p className="text-sm text-taupe">
                          Often minimal swelling early on. Some people bruise.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <p className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                        <AlertCircle className="w-5 h-5" />
                        Safety note (important)
                      </p>
                      <p className="text-sm text-amber-700">
                        Nexus Clinic states dermal fillers can carry serious
                        risks if injected into a blood vessel, including skin
                        injury and rare vision complications. That is why
                        correct patient selection and experienced injection
                        matter.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Option 2 - Ultraformer */}
              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-wine/10 p-4 rounded-xl">
                    <Zap className="w-6 h-6 text-wine" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-georgia text-brown mb-3">
                      Option 2: Ultraformer eye bag removal (HIFU-based
                      tightening)
                    </h4>
                    <p className="text-taupe mb-4">
                      If your under-eye looks puffy or "baggy", tightening and
                      lifting may help, especially when laxity contributes to
                      the tired look.
                    </p>
                    <p className="text-taupe mb-4">
                      Nexus Clinic describes Ultraformer eye bag and dark circle
                      removal as a non-surgical method using high intensity
                      ultrasound frequency, and calls it non-invasive and
                      extremely safe.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-green-50 rounded-xl p-4">
                        <p className="font-bold text-brown mb-2">Best for</p>
                        <ul className="text-sm text-taupe space-y-1">
                          <li>• Mild to moderate under-eye laxity</li>
                          <li>
                            • Some eye bag concerns where tightening helps
                          </li>
                          <li>• People who want a non-surgical option</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4">
                        <p className="font-bold text-brown mb-2">Downtime</p>
                        <p className="text-sm text-taupe">
                          Usually low. Some people have temporary redness or
                          tenderness.
                        </p>
                        <p className="font-bold text-brown mt-2">
                          What to expect
                        </p>
                        <p className="text-sm text-taupe">
                          Skin tightening results usually build over weeks as
                          collagen response develops.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Option 3 - PDRN */}
              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-wine/10 p-4 rounded-xl">
                    <Sparkles className="w-6 h-6 text-wine" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-georgia text-brown mb-3">
                      Option 3: PDRN Eye Rejuvenation injections
                    </h4>
                    <p className="text-taupe mb-4">
                      If your main issue is thin, crepey under-eye skin and
                      early fine lines, an injectable skin-repair approach may
                      be considered.
                    </p>
                    <p className="text-taupe mb-4">
                      Nexus Clinic states PDRN Eye Rejuvenation targets the
                      delicate under-eye area and helps reduce dark circles,
                      fine lines, and puffiness for a refreshed appearance.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-green-50 rounded-xl p-4">
                        <p className="font-bold text-brown mb-2">Best for</p>
                        <ul className="text-sm text-taupe space-y-1">
                          <li>• Crepey texture</li>
                          <li>• Fine lines</li>
                          <li>• Under-eye skin quality goals</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4">
                        <p className="font-bold text-brown mb-2">Downtime</p>
                        <p className="text-sm text-taupe">
                          Typically mild. Expect small injection bumps for a
                          short time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Option 4 - PRP */}
              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-wine/10 p-4 rounded-xl">
                    <Heart className="w-6 h-6 text-wine" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-georgia text-brown mb-3">
                      Option 4: PRP for under-eyes (natural rejuvenation
                      support)
                    </h4>
                    <p className="text-taupe mb-4">
                      PRP is often chosen by people who prefer a natural,
                      regenerative approach.
                    </p>
                    <p className="text-taupe mb-4">
                      Nexus Clinic notes PRP for under-eyes may support crepey
                      texture, tired look, and fine lines, and also states that
                      if dark circles are mostly genetic or structural
                      hollowness, they will discuss more suitable options.
                    </p>

                    <div className="bg-green-50 rounded-xl p-4">
                      <p className="font-bold text-brown mb-2">Best for</p>
                      <ul className="text-sm text-taupe space-y-1">
                        <li>• Texture and fine lines</li>
                        <li>• Mild under-eye dullness</li>
                        <li>• People who want gradual improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Option 5 - Carboxy */}
              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-wine/10 p-4 rounded-xl">
                    <Droplet className="w-6 h-6 text-wine" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-georgia text-brown mb-3">
                      Option 5: Carboxy therapy (CO2 infusion approach)
                    </h4>
                    <p className="text-taupe mb-2">
                      For some patients, carboxy therapy is considered as part
                      of an under-eye plan.
                    </p>
                    <p className="text-taupe">
                      Nexus Clinic states carboxytherapy is useful for several
                      skin conditions including dark under-eye circles.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Option 6 - Laser */}
              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-wine/10 p-4 rounded-xl">
                    <Sun className="w-6 h-6 text-wine" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-georgia text-brown mb-3">
                      Option 6: Laser options for specific types of dark circles
                    </h4>
                    <p className="text-taupe mb-4">
                      Laser is not "the answer" for every dark circle. But it
                      can help when pigment and skin quality are key drivers.
                    </p>
                    <p className="text-taupe mb-4">
                      Competitors in KL commonly highlight laser choices for
                      dark circles:
                    </p>
                    <ul className="text-taupe space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-wine">•</span> Kaiteki Clinic
                        lists Pro Yellow Laser and PicoSure as options for dark
                        circles, positioning them for pigmentation and collagen
                        support.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-wine">•</span> Dr Chong Clinic's
                        dark circles article mentions laser options including
                        Pico Laser and dual yellow light laser therapy for
                        discoloration and brightening the under-eye area.
                      </li>
                    </ul>
                    <p className="text-taupe">
                      At Nexus Clinic KL, lasers are also positioned across
                      pigmentation and rejuvenation services, so your doctor may
                      recommend a laser-based approach if your under-eye concern
                      is mainly pigment or tone.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Best Treatment Summary */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 bg-wine text-light rounded-3xl p-8"
          >
            <h3 className="text-3xl font-georgia mb-6">
              What treatment is "best" for dark circles?
            </h3>
            <p className="text-xl mb-6">It depends on the cause.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-xl mb-2">
                  • Hollows and shadowing:
                </p>
                <p className="mb-4">
                  tear trough filler often makes the biggest visible difference.
                </p>

                <p className="font-bold text-xl mb-2">
                  • Puffiness and laxity:
                </p>
                <p className="mb-4">
                  Ultraformer-style tightening may be considered.
                </p>
              </div>
              <div>
                <p className="font-bold text-xl mb-2">• Thin crepey skin:</p>
                <p className="mb-4">
                  PDRN or PRP can help improve skin quality over time.
                </p>

                <p className="font-bold text-xl mb-2">• Pigmentation:</p>
                <p>
                  laser and topical plans can help, but require strict sun
                  protection.
                </p>
              </div>
            </div>
            <p className="mt-6 text-2xl text-cream font-medium">
              The strongest results often come from combining 2 approaches. For
              example, cheek support plus tear trough refinement, followed by
              skin quality support.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Pros and Cons Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-24 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown text-center mb-4"
          >
            Pros and cons (honest version)
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              variants={fadeInLeft}
              className="bg-green-50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-georgia text-brown mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Pros
              </h3>
              <ul className="space-y-4 text-taupe">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">•</span>
                  <span>
                    Treatments can be tailored to the actual cause, not
                    guesswork.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">•</span>
                  <span>
                    Many options are non-surgical with minimal downtime.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">•</span>
                  <span>
                    Structural shadowing can improve dramatically with the right
                    filler strategy.
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-rose/5 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-georgia text-brown mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-rose" />
                Cons
              </h3>
              <ul className="space-y-4 text-taupe">
                <li className="flex items-start gap-3">
                  <span className="text-rose font-bold text-xl">•</span>
                  <span>
                    Dark circles often need a plan, not a single session.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose font-bold text-xl">•</span>
                  <span>
                    Pigmentation-based circles can return if sun and rubbing
                    triggers continue.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose font-bold text-xl">•</span>
                  <span>
                    Injectables carry risks, especially in the under-eye area,
                    so provider skill matters.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Side Effects */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-georgia text-brown mb-6">
              Side effects and safety
            </h3>
            <p className="text-taupe mb-4">
              Side effects depend on the treatment selected.
            </p>

            <div className="bg-cream rounded-2xl p-8 mb-6">
              <p className="font-bold text-brown text-xl mb-4">
                Common temporary effects:
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-light px-6 py-3 rounded-full text-taupe text-sm font-medium">
                  Redness or swelling
                </span>
                <span className="bg-light px-6 py-3 rounded-full text-taupe text-sm font-medium">
                  Mild bruising (especially with injectables)
                </span>
                <span className="bg-light px-6 py-3 rounded-full text-taupe text-sm font-medium">
                  Tenderness
                </span>
              </div>
            </div>

            <div className="border-l-4 border-wine bg-wine/5 p-8 rounded-r-2xl">
              <p className="font-bold text-wine text-xl mb-3">
                Important risk note for under-eye fillers
              </p>
              <p className="text-taupe text-lg">
                Nexus Clinic explicitly warns of serious risks if filler is
                injected into a blood vessel, including skin injury and rare
                vision complications. Choose a doctor-led clinic and a
                conservative technique.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-24 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown text-center mb-4"
          >
            Cost of dark eye circle treatment in Malaysia (KL guide)
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-xl text-taupe mb-12"
          >
            Cost varies based on what you actually need.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-light rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-georgia text-brown mb-6">
              Published price references from Nexus Clinic
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-3 border-b border-cream">
                <span className="text-taupe text-lg">
                  Nexus Clinic states dermal fillers start from
                </span>
                <span className="text-brown font-bold text-xl">
                  RM 1,200 per syringe
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-cream">
                <span className="text-taupe text-lg">
                  Nexus Clinic's 2026 guide references a filler cost range in
                  Malaysia of
                </span>
                <span className="text-brown font-bold text-xl">
                  RM 1,200 to RM 3,500 per syringe
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-cream">
                <span className="text-taupe text-lg">
                  Nexus Clinic also lists typical ranges on an anti-aging
                  pricing page:
                </span>
                <span className="text-brown font-bold text-xl">
                  Fillers RM 1,200 - RM 2,200 per syringe
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-cream">
                <span className="text-taupe text-lg">HIFU face lift</span>
                <span className="text-brown font-bold text-xl">
                  RM 1,500 - RM 3,500 per session
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-taupe text-lg">PRP therapy</span>
                <span className="text-brown font-bold text-xl">
                  RM 800 - RM 1,800 per session
                </span>
              </div>
            </div>

            <div className="bg-wine/5 p-8 rounded-xl">
              <h4 className="font-georgia text-brown text-2xl mb-4">
                What affects your final cost
              </h4>
              <ul className="grid md:grid-cols-2 gap-4 text-taupe text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-wine font-bold text-xl">•</span> Pigment
                  vs hollow vs eye bag combination
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-wine font-bold text-xl">•</span> How
                  many sessions are needed
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-wine font-bold text-xl">•</span> Whether
                  cheek support is included with tear trough work
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-wine font-bold text-xl">•</span> Product
                  choice and dose
                </li>
              </ul>
              <p className="mt-6 text-lg text-wine font-medium">
                A consultation saves money long-term because it prevents you
                from paying for the wrong treatment repeatedly.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Before Appointment */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-24 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown text-center mb-12"
          >
            Before your appointment (small things that matter)
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              variants={fadeInLeft}
              className="bg-light rounded-xl p-6 flex items-start gap-3 shadow-md"
            >
              <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-taupe text-lg">
                Bring a list of what you have tried (creams, supplements,
                facials, lasers)
              </span>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="bg-light rounded-xl p-6 flex items-start gap-3 shadow-md"
            >
              <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-taupe text-lg">
                Tell your doctor if you rub your eyes often or have allergies
              </span>
            </motion.div>
            <motion.div
              variants={fadeInLeft}
              className="bg-light rounded-xl p-6 flex items-start gap-3 shadow-md"
            >
              <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-taupe text-lg">
                Avoid strong actives around the eyes before the visit if you are
                irritated
              </span>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="bg-light rounded-xl p-6 flex items-start gap-3 shadow-md"
            >
              <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-taupe text-lg">
                Expect photos. They help track change realistically.
              </span>
            </motion.div>
          </div>

          {/* Aftercare */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-georgia text-brown mb-6">
              Aftercare basics (keep results looking clean)
            </h3>
            <p className="text-taupe text-lg mb-4">
              Your doctor will tailor this by treatment type. General guidance:
            </p>
            <div className="bg-light rounded-2xl p-8">
              <ul className="space-y-4 text-taupe text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-wine font-bold text-xl">•</span>
                  Cold compress can help reduce swelling and visible vessels
                  temporarily.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine font-bold text-xl">•</span>
                  Avoid rubbing the area. Rubbing can worsen pigment over time.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine font-bold text-xl">•</span>
                  Sun protection matters even under the eyes, especially if
                  pigment is involved.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-24 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia text-brown text-center mb-12"
          >
            People Also Ask FAQs
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-brown font-georgia font-bold text-lg mb-3 flex items-start gap-2">
                <span className="text-wine">Q:</span>
                What causes dark circles under the eyes?
              </h3>
              <p className="text-taupe flex items-start gap-2">
                <span className="text-wine font-bold">A:</span>
                Common causes include genetics, fatigue, rubbing or scratching,
                skin thinning with age, pigment changes like melasma or
                post-inflammatory hyperpigmentation, and sun exposure.
              </p>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-brown font-georgia font-bold text-lg mb-3 flex items-start gap-2">
                <span className="text-wine">Q:</span>
                How do I get rid of dark circles under my eyes?
              </h3>
              <p className="text-taupe flex items-start gap-2">
                <span className="text-wine font-bold">A:</span>
                It depends on the cause. Home methods like cold compresses and
                better sleep may help temporarily, while medical options can
                include chemical peels, lasers, and tissue fillers for hollows.
              </p>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-brown font-georgia font-bold text-lg mb-3 flex items-start gap-2">
                <span className="text-wine">Q:</span>
                Are dark circles under the eyes a sign of a health problem?
              </h3>
              <p className="text-taupe flex items-start gap-2">
                <span className="text-wine font-bold">A:</span>
                Often no. Cleveland Clinic notes dark circles usually are not a
                sign of a medical problem, though many people treat them for
                cosmetic reasons.
              </p>
            </motion.div>

            {/* FAQ 4 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-brown font-georgia font-bold text-lg mb-3 flex items-start gap-2">
                <span className="text-wine">Q:</span>
                Can lack of sleep cause dark circles?
              </h3>
              <p className="text-taupe flex items-start gap-2">
                <span className="text-wine font-bold">A:</span>
                Yes, fatigue is a known contributor and can make the under-eye
                area look darker or more hollow.
              </p>
            </motion.div>

            {/* FAQ 5 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-brown font-georgia font-bold text-lg mb-3 flex items-start gap-2">
                <span className="text-wine">Q:</span>
                Do allergies cause dark circles?
              </h3>
              <p className="text-taupe flex items-start gap-2">
                <span className="text-wine font-bold">A:</span>
                They can. A medical review notes infra-orbital dark circles are
                more common in allergic conditions, and rubbing habits can lead
                to post-inflammatory hyperpigmentation around the eyes.
              </p>
            </motion.div>

            {/* FAQ 6 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-brown font-georgia font-bold text-lg mb-3 flex items-start gap-2">
                <span className="text-wine">Q:</span>
                Does tear trough filler remove dark circles?
              </h3>
              <p className="text-taupe flex items-start gap-2">
                <span className="text-wine font-bold">A:</span>
                It can reduce the "dark" look when the problem is shadowing from
                hollowness. Nexus Clinic also explains filler does not remove
                pigmentation and is not ideal when pigmentation is the main
                cause.
              </p>
            </motion.div>

            {/* FAQ 7 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-brown font-georgia font-bold text-lg mb-3 flex items-start gap-2">
                <span className="text-wine">Q:</span>
                What is the best treatment for under-eye hollows in Kuala
                Lumpur?
              </h3>
              <p className="text-taupe flex items-start gap-2">
                <span className="text-wine font-bold">A:</span>
                For many people with structural hollows, under-eye filler (tear
                trough filler) is a common approach because it smooths the
                eyelid-to-cheek transition and softens shadowing.
              </p>
            </motion.div>

            {/* FAQ 8 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-brown font-georgia font-bold text-lg mb-3 flex items-start gap-2">
                <span className="text-wine">Q:</span>
                What treatments help dark circles caused by pigmentation?
              </h3>
              <p className="text-taupe flex items-start gap-2">
                <span className="text-wine font-bold">A:</span>
                Options can include topical brightening strategies and selected
                laser approaches, depending on skin type and pigment depth.
                Competitor clinics commonly mention Pico Laser and yellow light
                lasers for discoloration and brightening.
              </p>
            </motion.div>

            {/* FAQ 9 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-brown font-georgia font-bold text-lg mb-3 flex items-start gap-2">
                <span className="text-wine">Q:</span>
                How much does dark eye circle treatment cost in Malaysia?
              </h3>
              <p className="text-taupe flex items-start gap-2">
                <span className="text-wine font-bold">A:</span>
                It depends on the treatment. Nexus Clinic states dermal fillers
                start from RM 1,200 per syringe, and also publishes typical
                ranges for fillers, HIFU, and PRP on its pricing pages.
              </p>
            </motion.div>

            {/* FAQ 10 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-brown font-georgia font-bold text-lg mb-3 flex items-start gap-2">
                <span className="text-wine">Q:</span>
                Can dark circles be removed permanently?
              </h3>
              <p className="text-taupe flex items-start gap-2">
                <span className="text-wine font-bold">A:</span>
                Sometimes you can significantly improve them, but "permanent"
                depends on the cause. Healthline notes dark circles can be
                linked to fatigue or aging and discusses both home remedies and
                professional treatments, with results varying by individual
                factors.
              </p>
            </motion.div>

            {/* FAQ 11 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-brown font-georgia font-bold text-lg mb-3 flex items-start gap-2">
                <span className="text-wine">Q:</span>
                What's the fastest way to reduce dark circles before an event?
              </h3>
              <p className="text-taupe flex items-start gap-2">
                <span className="text-wine font-bold">A:</span>A cold compress
                can temporarily shrink visible vessels and reduce swelling
                appearance. Makeup camouflage can also help.
              </p>
            </motion.div>

            {/* FAQ 12 */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-brown font-georgia font-bold text-lg mb-3 flex items-start gap-2">
                <span className="text-wine">Q:</span>
                When should I see a doctor about dark circles?
              </h3>
              <p className="text-taupe flex items-start gap-2">
                <span className="text-wine font-bold">A:</span>
                If there is sudden onset, one-sided swelling, pain, irritation,
                or other worrying changes, it is sensible to get a medical
                opinion.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-24 bg-wine"
      >
        <motion.div
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center text-light"
        >
          <h2 className="text-4xl md:text-5xl font-georgia mb-6">
            CTA (Nexus Clinic Kuala Lumpur)
          </h2>
          <p className="text-xl text-cream mb-12 leading-relaxed">
            If you want your eyes to look rested in real life, not only in
            selfies, start with a diagnosis-led consultation at Nexus Clinic
            Kuala Lumpur. We will identify whether your dark circles are
            pigment, vessels, hollows, or eye bags, then build a plan that fits
            your skin and your comfort level.
          </p>
          <button className="bg-light text-wine px-12 py-4 rounded-full font-medium text-lg hover:bg-cream transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Schedule Your Consultation Today
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default DarkEyeCircleLanding;
