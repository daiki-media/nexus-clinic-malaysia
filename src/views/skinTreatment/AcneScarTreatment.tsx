"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  Shield,
  Map,
  ChevronRight,
  Star,
  Calendar,
  Sun,
  Award,
  Heart,
  Target,
  Layers,
  Info,
  CheckCircle2,
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
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const AcneScarLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "acneScarTreatment");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-acne-scar-treatment1.webp",
      after: "/images/B&A-skin/B&A-acne-scar-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-acne-scar-treatment2.webp",
      after: "/images/B&A-skin/B&A-acne-scar-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-acne-scar-treatment3.webp",
      after: "/images/B&A-skin/B&A-acne-scar-treatment3.webp",
    },
  ];

  return (
    <div className="bg-light font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-linear-to-br from-cream via-light to-rose/10 overflow-hidden">
        <div className="absolute inset-0 bg-glass backdrop-blur-[2px]" />
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="container mx-auto px-4 md:px-8 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-semibold tracking-wide">
                Nexus Clinic Kuala Lumpur
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-georgia mb-6 leading-tight"
            >
              <span className="text-brown">Acne Scar Treatment</span>
              <br />
              <span className="text-wine">in Kuala Lumpur, Malaysia</span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-georgia text-rose mb-8"
            >
              Clearer skin is not a dream. It is a plan.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-taupe mb-8 max-w-3xl mx-auto"
            >
              Acne may be gone, but the scars can still steal your confidence.
              At Nexus Clinic Kuala Lumpur, we build a scar map for your face
              and match it with the right mix of treatments, so your skin looks
              smoother in real life, not just in photos.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-brown/80 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-cream max-w-2xl mx-auto"
            >
              You will know what we can improve, what will take time, and what
              is not worth doing.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Trust Strip */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-wine text-light"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div variants={scaleIn} className="flex items-center gap-4">
              <Shield className="w-8 h-8 text-cream shrink-0" />
              <div>
                <p className="font-semibold">
                  Established aesthetic clinic in Kuala Lumpur, founded in 2001.
                </p>
                <p className="text-sm text-cream/80">
                  Located at Wisma UOA II, Jalan Pinang, Kuala Lumpur.
                </p>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="flex items-center gap-4">
              <Star className="w-8 h-8 text-cream shrink-0" />
              <div>
                <p className="font-semibold">Doctor-guided scar plans</p>
                <p className="text-sm text-cream/80">
                  with treatments commonly used for acne scars like fractional
                  CO2 laser, subcision, dermaroller, peels, PRP, and more.
                </p>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="flex items-center gap-4">
              <Target className="w-8 h-8 text-cream shrink-0" />
              <div>
                <p className="font-semibold">Rated 4.7 stars</p>
                <p className="text-sm text-cream/80">
                  from 437+ reviewers on a Google review aggregator
                  (Trustindex).
                </p>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="flex items-center gap-4">
              <Heart className="w-8 h-8 text-cream shrink-0" />
              <div>
                <p className="font-semibold">Personalized Care</p>
                <p className="text-sm text-cream/80"> scar mapping approach</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Honest Note */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-cream"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-rose/10">
            <div className="flex items-start gap-4 mb-6">
              <Info className="w-6 h-6 text-wine shrink-0 mt-1" />
              <h2 className="text-3xl font-georgia text-brown">
                A quick, honest note before we start
              </h2>
            </div>
            <p className="text-lg text-taupe mb-4">
              There is no single "best acne scar treatment" for everyone. Acne
              scars come in different shapes, depths, and directions. Many
              people also have more than one scar type on the same cheek. That
              is why combination plans are often the fastest way to see
              meaningful change.
            </p>
            <p className="text-lg text-taupe bg-rose/5 p-4 rounded-xl border-l-4 border-rose">
              Also, if you still get active acne breakouts every week, we
              usually focus on calming that down first, otherwise new scars can
              keep forming.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Why Scars Are Stubborn */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-light"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl font-georgia text-brown mb-6">
                Why acne scars feel so stubborn
                <span className="block text-wine text-2xl mt-2">
                  (and why they are not your fault)
                </span>
              </h2>
              <p className="text-lg text-taupe mb-4">
                Acne scars are not just "marks on the surface." Many scars sit
                deeper because acne inflammation damages collagen below the
                skin. When healing happens unevenly, the surface can dip,
                tether, or look rough.
              </p>
              <p className="text-lg text-taupe mb-4">
                And yes, picking makes it worse. But even people who never pick
                can still scar, especially with cystic acne.
              </p>
              <p className="text-lg text-wine font-semibold">
                The good news is this: scars can be improved. The skin can
                rebuild collagen. It just needs the right trigger and enough
                time.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative h-125 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/skin/acne-scar-treatment.webp"
                alt="Acne scar consultation at Nexus Clinic showing scar mapping process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <p className="text-brown font-semibold">
                  Scar mapping in progress at Nexus Clinic Kuala Lumpur
                </p>
                <p className="text-sm text-taupe">
                  Doctor-guided scar assessment for combination treatment
                  planning
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Types of Acne Scars */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-4"
          >
            Types of acne scars
            <span className="block text-wine text-xl mt-2">(simple guide)</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12 max-w-2xl mx-auto"
          >
            Most facial acne scars fall into a few patterns:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-lg border border-rose/10"
            >
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-wine font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-brown mb-2">
                Ice pick scars
              </h3>
              <p className="text-taupe">
                Small, narrow, deep "holes." These are often the hardest to
                treat and usually need very targeted methods.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-lg border border-rose/10"
            >
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-wine font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-brown mb-2">
                Boxcar scars
              </h3>
              <p className="text-taupe">
                Wider dents with clearer edges, sometimes like old chickenpox
                marks.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-lg border border-rose/10"
            >
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-wine font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-brown mb-2">
                Rolling scars
              </h3>
              <p className="text-taupe">
                Soft wave-like dents. These often happen because bands of scar
                tissue pull the skin down.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-lg border border-rose/10"
            >
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-wine font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-brown mb-2">
                Raised scars (hypertrophic or keloid)
              </h3>
              <p className="text-taupe">
                More common on jawline, chest, shoulders, or back. These need a
                different approach than depressed scars.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-lg border border-rose/10 md:col-span-2"
            >
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-wine font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold text-brown mb-2">
                Post-acne marks (not true scars)
              </h3>
              <p className="text-taupe">
                Brown or red marks after acne are very common in Malaysia. They
                can look like scarring, but they are usually pigment or redness.
                They often respond well to pigment-friendly plans and strict sun
                protection.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Who It's For */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-12"
          >
            Who acne scar treatment is for
            <span className="block text-wine text-xl mt-2">
              (and who should wait)
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-brown mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-rose" />
                You are a good fit if:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  Your acne is mostly under control and the scars are the main
                  problem
                </li>
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  You feel your scars show more in certain lighting, selfies, or
                  video calls
                </li>
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  You want improvement, not "perfect glass skin"
                </li>
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  You can commit to a plan (usually multiple sessions)
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-cream p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-brown mb-4 flex items-center gap-2">
                <AlertCircle className="text-rose" />
                You may need to wait or adjust your plan if:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  You have active, inflamed acne that keeps flaring
                </li>
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  You are pregnant or breastfeeding (some procedures are
                  postponed)
                </li>
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  You have a history of severe keloids (we plan more carefully)
                </li>
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  You cannot avoid sun exposure at all (sun matters a lot after
                  resurfacing)
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Scar Mapping Approach */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-wine text-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-center mb-4"
          >
            Our approach at Nexus Clinic Kuala Lumpur
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-cream/80 mb-12 max-w-2xl mx-auto"
          >
            Scar Mapping Plan: A good acne scar plan should feel clear, not
            confusing.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              variants={scaleIn}
              className="text-center bg-cream/10 p-8 rounded-3xl backdrop-blur-sm"
            >
              <div className="w-20 h-20 bg-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="w-10 h-10 text-cream" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Step 1: We map your scars, not just your "skin type"
              </h3>
              <p className="text-cream/80 text-left">
                We look at:
                <br />• Scar types (ice pick, rolling, boxcar, mixed)
                <br />• Depth and tethering
                <br />• Skin sensitivity and pigment risk
                <br />• Lifestyle and downtime tolerance
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="text-center bg-cream/10 p-8 rounded-3xl backdrop-blur-sm"
            >
              <div className="w-20 h-20 bg-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-10 h-10 text-cream" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Step 2: We choose the right tools (often a combination)
              </h3>
              <p className="text-cream/80 text-left">
                A single modality can help, but many patients have mixed scars,
                so combining treatments is common in real practice.
                <br />
                <br />
                At Nexus Clinic Kuala Lumpur, acne scar care often includes
                options like fractional CO2 laser, dermaroller, skin peels, PRP,
                subcision, microdermabrasion, and LED photomodulation therapy
                depending on your needs.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="text-center bg-cream/10 p-8 rounded-3xl backdrop-blur-sm"
            >
              <div className="w-20 h-20 bg-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-cream" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Step 3: We set expectations you can actually live with
              </h3>
              <p className="text-cream/80 text-left">
                Some scars lift faster than others. Some need deeper work. We
                will talk about what "good progress" looks like for your face.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Treatments Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-4"
          >
            Acne scar treatments we use
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12"
          >
            (explained in easy words)
          </motion.p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Subcision */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-brown mb-2">
                1) Subcision (best for rolling scars and tethered dents)
              </h3>
              <p className="text-taupe mb-4">
                If a scar is pulled down by tight bands under the skin, lasers
                alone can struggle.
              </p>
              <div className="space-y-3 text-taupe">
                <p>
                  <span className="font-semibold text-brown">
                    What it does:
                  </span>{" "}
                  Subcision releases the fibrotic strands that tether scars,
                  allowing the skin to lift and stimulating collagen as it
                  heals.
                </p>
                <p>
                  <span className="font-semibold text-brown">Sessions:</span>{" "}
                  Many people need 1 to 3 sessions, depending on scar severity.
                </p>
                <p>
                  <span className="font-semibold text-brown">Time:</span> Around
                  30 to 60 minutes.
                </p>
                <p>
                  <span className="font-semibold text-brown">Downtime:</span>{" "}
                  Usually mild swelling or bruising for a few days, and you may
                  see improvement gradually over 2 to 3 months as collagen
                  rebuilds.
                </p>
                <p>
                  <span className="font-semibold text-brown">Feels like:</span>{" "}
                  With numbing, it is usually very tolerable, but you can expect
                  some soreness after.
                </p>
              </div>
            </motion.div>

            {/* Fractional CO2 Laser */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-brown mb-2">
                2) Fractional CO2 laser (best for texture, boxcar scars, and
                overall resurfacing)
              </h3>
              <p className="text-taupe mb-4">
                Fractional CO2 is one of the most common scar-resurfacing lasers
                used in Malaysia for acne scars. It creates tiny controlled
                "micro-zones" so the skin heals by building new collagen.
              </p>
              <p className="text-taupe mb-3">
                Clinics in Malaysia commonly describe fractional CO2 as
                targeting superficial and deeper layers and supporting collagen
                remodelling for scar improvement.
              </p>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold text-brown">
                    What it helps most:
                  </span>{" "}
                  Shallow boxcar scars, rough texture, pores and uneven tone
                  alongside scars (depending on settings)
                </p>
                <p>
                  <span className="font-semibold text-brown">Downtime:</span>{" "}
                  This varies by intensity. Some clinics describe mild redness
                  for a few days and healing over 1 to 2 weeks for CO2 laser.
                </p>
                <p>
                  <span className="font-semibold text-brown">
                    Pigment risk:
                  </span>{" "}
                  If you have a darker skin tone, there can be a higher risk of
                  pigmentation changes, so settings and aftercare matter a lot.
                </p>
              </div>
            </motion.div>

            {/* Microneedling */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-brown mb-2">
                3) Microneedling or dermaroller (best for gradual collagen
                building with lighter downtime)
              </h3>
              <p className="text-taupe mb-4">
                Microneedling creates controlled micro-injuries that encourage
                collagen production. It is often used for acne scarring and can
                also support product absorption during a plan.
              </p>
              <p>
                <span className="font-semibold text-brown">Good for:</span>
              </p>
              <ul className="list-disc pl-5 text-taupe space-y-1">
                <li>Mild to moderate scars</li>
                <li>People who want a steadier approach with less downtime</li>
                <li>Maintenance between stronger procedures</li>
              </ul>
            </motion.div>

            {/* Chemical Peels */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-brown mb-2">
                4) Chemical peels and microdermabrasion (best for marks,
                dullness, and surface smoothing)
              </h3>
              <p className="text-taupe mb-3">
                Not every patient needs aggressive laser immediately.
              </p>
              <p className="text-taupe mb-3">
                Chemical peels can support skin renewal and may help certain
                scar textures and post-acne marks.
              </p>
              <p className="text-taupe mb-3">
                Microdermabrasion is a form of deep exfoliation that can improve
                texture and brightness, often as part of a wider plan.
              </p>
              <p className="text-taupe">
                These are often great when your main concern is "my skin looks
                uneven," not deep dents.
              </p>
            </motion.div>

            {/* PRP */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-brown mb-2">
                5) PRP as an add-on (for healing support in some plans)
              </h3>
              <p className="text-taupe mb-3">
                PRP (platelet-rich plasma) is sometimes used alongside other
                treatments in scar programs. At Nexus Clinic Kuala Lumpur, PRP
                is listed among treatment options used in acne and scar care.
              </p>
              <p className="text-taupe">
                Think of PRP like a support tool. It is not usually the main
                scar treatment by itself.
              </p>
            </motion.div>

            {/* LED */}
            <motion.div
              variants={fadeInUp}
              className="bg-cream p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-brown mb-2">
                6) LED photomodulation therapy (helpful support, especially for
                calming skin)
              </h3>
              <p className="text-taupe">
                LED therapy is sometimes included to calm inflammation and
                support recovery as part of acne and scar care.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Pros and Cons */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-cream"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-12"
          >
            Pros and cons
            <span className="block text-wine text-xl">
              (realistic, not salesy)
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-brown mb-4 flex items-center gap-2">
                <Heart className="text-rose" />
                What patients usually love
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  Skin looks smoother in daily lighting
                </li>
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  Makeup sits better
                </li>
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  Confidence improves, especially in photos
                </li>
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  Texture feels less "bumpy" or "pitted"
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-brown mb-4 flex items-center gap-2">
                <Info className="text-rose" />
                What can be annoying (but normal)
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  It takes time. Collagen does not rebuild overnight.
                </li>
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  Downtime can be inconvenient if you choose resurfacing lasers.
                </li>
                <li className="flex gap-2 text-taupe">
                  <ChevronRight className="text-wine shrink-0 mt-1" size={16} />
                  You may need a combination plan for mixed scars.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Side Effects and Safety */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-8"
          >
            Side effects and safety
            <span className="block text-wine text-xl">
              (what you should know in Malaysia)
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-8 max-w-3xl mx-auto"
          >
            Most acne scar procedures are safe when performed by trained medical
            professionals, using proper settings and aftercare. Malaysia also
            has guidance around aesthetic medical practice and credentialing, so
            it is worth choosing a clinic that takes clinical governance
            seriously.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-cream p-8 rounded-3xl max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-bold text-brown mb-4">
              Common temporary side effects (depends on procedure):
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-taupe">
                <div className="w-2 h-2 bg-wine rounded-full" />
                Redness, swelling, warmth
              </div>
              <div className="flex items-center gap-2 text-taupe">
                <div className="w-2 h-2 bg-wine rounded-full" />
                Peeling or dryness after resurfacing
              </div>
              <div className="flex items-center gap-2 text-taupe">
                <div className="w-2 h-2 bg-wine rounded-full" />
                Mild bruising after subcision
              </div>
              <div className="flex items-center gap-2 text-taupe">
                <div className="w-2 h-2 bg-wine rounded-full" />
                Temporary darkening or lightening of skin (pigment shift risk
                can be higher in darker skin tones, especially after stronger
                resurfacing)
              </div>
            </div>
            <p className="mt-6 text-wine font-semibold text-lg">
              The best safety move you can make is simple: follow aftercare,
              avoid sun, and do not "over-treat" too fast.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Sessions and Results */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-wine text-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-center mb-6"
          >
            How many sessions do you need?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl mb-4 text-center max-w-3xl mx-auto text-cream/90"
          >
            (and how long until you see results?)
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg mb-12 text-center max-w-3xl mx-auto text-cream/80"
          >
            This depends on scar depth and scar type.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <motion.div
              variants={scaleIn}
              className="bg-cream/10 p-6 rounded-2xl text-center"
            >
              <Calendar className="w-10 h-10 mx-auto mb-4 text-cream" />
              <p className="text-lg text-cream/90">
                Some people notice changes within 1 to 2 weeks after fractional
                CO2, with continued improvement over months as collagen
                increases.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-cream/10 p-6 rounded-2xl text-center"
            >
              <Clock className="w-10 h-10 mx-auto mb-4 text-cream" />
              <p className="text-lg text-cream/90">
                With subcision, improvement can build gradually over 2 to 3
                months, and 1 to 3 sessions may be needed.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-cream/10 p-6 rounded-2xl text-center"
            >
              <Sparkles className="w-10 h-10 mx-auto mb-4 text-cream" />
              <p className="text-lg text-cream/90">
                Many fractional CO2 plans are described in the range of 3 to 5
                sessions spaced 4 to 6 weeks apart, depending on the case.
              </p>
            </motion.div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-12 text-center text-cream/90 text-xl italic"
          >
            If you want a clean, natural result, slow and steady usually wins.
          </motion.p>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-6"
          >
            Cost of acne scar treatment in Kuala Lumpur and Malaysia
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-8 max-w-3xl mx-auto"
          >
            Prices vary by:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-cream p-8 rounded-3xl max-w-3xl mx-auto"
          >
            <ul className="space-y-2 text-taupe mb-6">
              <li>
                • Scar severity and number of areas (cheeks only vs full face)
              </li>
              <li>• Treatment type (laser vs microneedling vs subcision)</li>
              <li>• Device used and doctor time</li>
              <li>• Number of sessions and package structure</li>
            </ul>

            <h3 className="text-xl font-bold text-brown mb-3">
              To give you real market context in Malaysia:
            </h3>
            <ul className="space-y-3 text-taupe">
              <li>
                Dr Chong Clinic lists a trial session at RM398, a single session
                at RM800, and a package example of 4 sessions plus 2
                complimentary sessions for RM3,200 (terms apply).
              </li>
              <li>
                Premier Clinic Malaysia lists subcision from RM800 onwards and
                fractional CO2 laser from RM1,800 per session (as published on
                their site).
              </li>
              <li className="mt-4 text-wine font-semibold">
                At Nexus Clinic Kuala Lumpur, your cost depends on your scar map
                and your chosen plan, especially if you need combination work
                (for example, subcision plus resurfacing). The best way to avoid
                overpaying is to avoid guessing and start with a proper
                assessment.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Laser vs Microneedling vs Subcision */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-8"
          >
            Laser vs microneedling vs subcision
            <span className="block text-wine text-xl">(which is better?)</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-12 max-w-2xl mx-auto"
          >
            People ask this all the time, and the honest answer is "better for
            what?"
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div variants={scaleIn} className="bg-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-brown mb-3">
                If your scars are tethered (rolling scars)
              </h3>
              <p className="text-taupe">
                Subcision is often the key step because it releases the pull
                under the skin.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-brown mb-3">
                If your issue is overall texture and shallow dents
              </h3>
              <p className="text-taupe">
                Fractional resurfacing can be powerful, but downtime and pigment
                risk need planning.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-brown mb-3">
                If you want gradual improvement with lighter downtime
              </h3>
              <p className="text-taupe">
                Microneedling can be a strong steady option, especially in
                combination plans.
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-wine font-semibold mt-8 text-xl"
          >
            In real life, many plans blend them.
          </motion.p>
        </div>
      </motion.section>

      {/* Areas We Can Treat */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-8"
          >
            Areas we can treat
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-8 max-w-2xl mx-auto"
          >
            Acne scars are not only on the cheeks. We commonly see scars on:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <div className="bg-cream p-4 rounded-xl text-center text-brown font-medium">
              Cheeks and temples
            </div>
            <div className="bg-cream p-4 rounded-xl text-center text-brown font-medium">
              Jawline and chin
            </div>
            <div className="bg-cream p-4 rounded-xl text-center text-brown font-medium">
              Forehead
            </div>
            <div className="bg-cream p-4 rounded-xl text-center text-brown font-medium">
              Nose area (pore texture)
            </div>
            <div className="bg-cream p-4 rounded-xl text-center text-brown font-medium">
              Neck (selected cases)
            </div>
            <div className="bg-cream p-4 rounded-xl text-center text-brown font-medium">
              Back and chest (raised scars need different planning)
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Aftercare */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-wine text-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-center mb-8"
          >
            Aftercare that protects your results
            <span className="block text-cream text-xl">(simple checklist)</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-cream/80 mb-12 max-w-2xl mx-auto"
          >
            Your aftercare is not "optional." It is part of the treatment.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              variants={scaleIn}
              className="bg-cream/10 p-6 rounded-2xl"
            >
              <Clock className="w-8 h-8 mb-4 text-cream" />
              <h3 className="text-xl font-bold mb-3">First 48 hours</h3>
              <ul className="space-y-2 text-cream/80">
                <li>• Keep it gentle. Cleanse softly.</li>
                <li>
                  • Avoid heat, sauna, and heavy workouts if you are swollen or
                  red.
                </li>
                <li>• Do not pick peeling skin.</li>
              </ul>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-cream/10 p-6 rounded-2xl"
            >
              <Sun className="w-8 h-8 mb-4 text-cream" />
              <h3 className="text-xl font-bold mb-3">First week</h3>
              <ul className="space-y-2 text-cream/80">
                <li>• Sunscreen daily, even if you "just go out for a bit."</li>
                <li>
                  • Pause harsh actives (retinoids, strong acids) unless your
                  doctor says otherwise.
                </li>
                <li>• Keep skin hydrated and protected.</li>
              </ul>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-cream/10 p-6 rounded-2xl"
            >
              <Calendar className="w-8 h-8 mb-4 text-cream" />
              <h3 className="text-xl font-bold mb-3">Between sessions</h3>
              <ul className="space-y-2 text-cream/80">
                <li>
                  • Do not rush. Your skin needs time to rebuild collagen.
                </li>
                <li>
                  • If acne returns, treat it early so scars do not keep
                  forming.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Nexus Clinic */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-light"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-8"
          >
            Why Nexus Clinic Kuala Lumpur
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mb-8 text-lg"
          >
            If you are searching for acne scar treatment in Kuala Lumpur or acne
            scar treatment in Malaysia, you are probably overwhelmed by options.
            Many clinics offer lasers. Many clinics offer microneedling. The
            difference is how well your plan is built.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-center text-wine font-semibold mb-6"
          >
            Here is what we focus on:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-cream p-8 rounded-3xl space-y-4"
          >
            <div className="flex items-start gap-3">
              <Award className="text-wine shrink-0 mt-1" />
              <p className="text-taupe">
                Scar mapping and combination planning, because mixed scars are
                common.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Award className="text-wine shrink-0 mt-1" />
              <p className="text-taupe">
                Aesthetic clinic with a long presence in KL, founded in 2001,
                located in the Golden Triangle area.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Award className="text-wine shrink-0 mt-1" />
              <p className="text-taupe">
                A broad toolkit, including common scar procedures like
                subcision, fractional CO2 laser, dermaroller, peels, PRP,
                microdermabrasion, and LED photomodulation therapy.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Award className="text-wine shrink-0 mt-1" />
              <p className="text-taupe">
                Easy access in Kuala Lumpur at Wisma UOA II, Jalan Pinang.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Competitor Analysis */}
      {/* <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-cream"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-georgia text-brown text-center mb-6"
          >
            Top competitors showing up on Google
            <span className="block text-wine text-lg">
              (quick review, and what we learned)
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            When we reviewed pages that commonly appear for searches like "acne
            scar treatment Kuala Lumpur" and "acne scar treatment Malaysia", a
            few patterns showed up.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-2xl mb-6"
          >
            <h3 className="font-bold text-brown mb-3">
              Competitors that frequently appear (examples)
            </h3>
            <ul className="list-disc pl-5 text-taupe space-y-1">
              <li>
                Erufu Care often ranks because it is a directory listing
                multiple clinics and patient reviews for acne scar treatments.
              </li>
              <li>
                Dr Chong Clinic ranks with clear explanations, pricing examples,
                side effects, and a structured FAQ.
              </li>
              <li>
                Sliq Clinic ranks with strong device-based positioning and FAQs
                around fractional lasers, downtime, and laser comparisons.
              </li>
              <li>
                Da Vinci Clinic ranks with a detailed CO2 laser page including
                downtime, healing time, and treatment duration.
              </li>
              <li>
                CLEO Clinic ranks with a clear breakdown of scar types and
                multiple treatment options including fractional CO2, peels,
                microdermabrasion, fillers, microneedling, and subcision.
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-2xl mb-6"
          >
            <h3 className="font-bold text-brown mb-3">
              What the best competitor pages do well
            </h3>
            <ul className="list-disc pl-5 text-taupe space-y-1">
              <li>They explain scar types in plain language</li>
              <li>They show realistic downtime and healing</li>
              <li>They include FAQs that match what people actually search</li>
              <li>
                Some show price anchors, which reduces anxiety before booking
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-rose/10 p-6 rounded-2xl border-l-4 border-rose"
          >
            <h3 className="font-bold text-brown mb-2">
              The gap we can win in Kuala Lumpur:
            </h3>
            <p className="text-taupe">
              Many pages describe treatments. Fewer pages help a reader choose a
              plan based on scar shape, downtime tolerance, and skin tone risk.
              That is exactly what we do with scar mapping and a combination
              roadmap.
            </p>
          </motion.div>
        </div>
      </motion.section> */}

      {/* FAQ Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="py-16 bg-light"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-12"
          >
            People Also Ask (FAQs)
          </motion.h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-brown mb-2">
                How many sessions of fractional CO2 laser are needed for acne
                scars?
              </h3>
              <p className="text-taupe">
                Many patients are guided toward 3 to 5 sessions, often spaced 4
                to 6 weeks apart, depending on scar depth and goals.
              </p>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-brown mb-2">
                How long does it take to see results after fractional CO2 laser?
              </h3>
              <p className="text-taupe">
                Some people notice improvement within 1 to 2 weeks, but bigger
                changes develop over 3 to 6 months as collagen builds.
              </p>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-brown mb-2">
                Is fractional CO2 laser safe for darker skin tones?
              </h3>
              <p className="text-taupe">
                It can be safe with proper assessment and customised settings,
                but pigment risk needs planning. Some clinics note that darker
                skin tones may have a higher risk of pigmentation changes and
                should consult a qualified doctor.
              </p>
            </motion.div>

            {/* FAQ 4 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-brown mb-2">
                What are the side effects of fractional CO2 laser for acne
                scars?
              </h3>
              <p className="text-taupe">
                Temporary redness, swelling, peeling or crusting, and sun
                sensitivity are commonly listed. Some clinics also mention a
                minimal risk of hyperpigmentation, especially in darker skin
                tones.
              </p>
            </motion.div>

            {/* FAQ 5 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-brown mb-2">
                How much does fractional CO2 laser cost in Malaysia?
              </h3>
              <p className="text-taupe">
                It varies by clinic and plan. One published example in Malaysia
                lists RM398 for a trial session, RM800 for a single session, and
                RM3,200 for a multi-session package (terms apply).
              </p>
            </motion.div>

            {/* FAQ 6 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-brown mb-2">
                What is fractional laser vs non-fractional laser?
              </h3>
              <p className="text-taupe">
                One KL clinic explains that fractional laser treats the skin in
                fractions, which supports faster healing and reduced side effect
                risk compared to older approaches.
              </p>
            </motion.div>

            {/* FAQ 7 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-brown mb-2">
                Does fractional laser cause long downtime?
              </h3>
              <p className="text-taupe">
                Some clinics describe around 5 to 7 days of downtime for certain
                newer fractional laser systems, while older conventional lasers
                may take longer. Your downtime depends on settings and skin
                response.
              </p>
            </motion.div>

            {/* FAQ 8 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-brown mb-2">
                What is the difference between picosecond fractional laser and
                fractional CO2 laser for acne scars?
              </h3>
              <p className="text-taupe">
                One clinic explains that fractional CO2 is an ablative laser
                with more peeling, while picosecond fractional laser tends to
                have shorter downtime and no peeling, and choices depend on
                lifestyle, skin type, and scar type.
              </p>
            </motion.div>

            {/* FAQ 9 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-brown mb-2">
                What is subcision and what scars is it for?
              </h3>
              <p className="text-taupe">
                Subcision is a minor procedure where a needle is used to release
                tethering strands under the skin, helping depressed scars lift
                and encouraging collagen formation during healing.
              </p>
            </motion.div>

            {/* FAQ 10 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-brown mb-2">
                How many subcision sessions do I need?
              </h3>
              <p className="text-taupe">
                Many people need 1 to 3 sessions, depending on the severity of
                the scars.
              </p>
            </motion.div>

            {/* FAQ 11 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-brown mb-2">
                How long does subcision take and what is the downtime?
              </h3>
              <p className="text-taupe">
                A published clinic guide describes 30 to 60 minutes and minimal
                downtime, with improvement often seen over 2 to 3 months as
                collagen forms.
              </p>
            </motion.div>

            {/* FAQ 12 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-brown mb-2">
                What is a realistic acne scar improvement goal?
              </h3>
              <p className="text-taupe">
                The most realistic goal is visible improvement in texture and
                depth. Many patients do not need "perfect," they want smoother
                skin in real lighting. Combination plans are often used for
                mixed scar types.
              </p>
            </motion.div>

            {/* FAQ 13 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-brown mb-2">
                What is the best acne scar treatment in Kuala Lumpur?
              </h3>
              <p className="text-taupe">
                The best treatment depends on your scar map. Rolling scars often
                respond better when tethering is addressed (often via
                subcision), while texture and boxcar scars may respond well to
                resurfacing or collagen-induction plans.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        className="py-20 bg-wine text-light"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-georgia mb-6">
            Ready for a scar map
            <span className="block text-cream">(not a guess)?</span>
          </h2>

          <p className="text-xl mb-8 max-w-3xl mx-auto text-cream/90">
            If you want acne scar treatment in Kuala Lumpur with a plan that
            matches your scar type, downtime comfort, and skin tone risk, start
            with a consultation at Nexus Clinic Kuala Lumpur.
          </p>

          <div className="inline-block bg-cream/20 backdrop-blur-sm px-8 py-4 rounded-full">
            <p className="text-lg font-semibold">
              Wisma UOA II, Jalan Pinang • Kuala Lumpur
            </p>
          </div>

          <p className="mt-4 text-cream/70">(Nexus Clinic Kuala Lumpur)</p>
        </div>
      </motion.section>
    </div>
  );
};

export default AcneScarLanding;
