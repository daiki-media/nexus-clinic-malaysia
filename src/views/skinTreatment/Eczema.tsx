"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Car,
  CheckCircle,
  XCircle,
  Shield,
  MapPin,
  Target,
  Home as HomeIcon,
  ThermometerIcon,
  DropletIcon,
  WindIcon,
  ShowerHead,
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

const EczemaLandingPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "skin/eczema");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-eczema-treatment1.webp",
      after: "/images/B&A-skin/B&A-eczema-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-eczema-treatment2.webp",
      after: "/images/B&A-skin/B&A-eczema-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-eczema-treatment3.webp",
      after: "/images/B&A-skin/B&A-eczema-treatment3.webp",
    },
  ];
  return (
    <div className="bg-light font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-cream via-light to-cream">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-wine/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-wine/10 text-wine px-4 py-2 rounded-full font-inter text-sm tracking-wide">
                <Sparkles className="w-4 h-4" />
                HERO SECTION (Nexus Clinic Kuala Lumpur)
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-georgia text-brown mb-8 leading-tight"
            >
              Strong heading
              <span className="block text-3xl md:text-4xl text-rose mt-4 font-inter font-light">
                Eczema relief that feels real. Calm your skin, sleep better, and
                stop the flare cycle in Kuala Lumpur.
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-georgia text-brown mb-6"
            >
              Two supporting lines
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-taupe mb-12 max-w-2xl leading-relaxed"
            >
              When eczema flares, it is not "just a rash." It steals sleep,
              confidence, and comfort. At Nexus Clinic Kuala Lumpur, we keep
              your plan simple, doctor-led, and built for daily life in
              Malaysia.
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-georgia text-brown mb-4"
            >
              Trust section
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 gap-4 mt-4 p-8 bg-glass backdrop-blur-sm rounded-3xl border border-cream"
            >
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  MOH-registered, doctor-led clinic with a diagnosis-first
                  approach.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Located near KLCC: LG 10, Lower Ground Floor, Wisma UOA II,
                  Jalan Pinang, Kuala Lumpur.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Skin health focus: we start with assessment and trigger
                  mapping before we talk treatments.
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-georgia text-brown mt-12 mb-4"
            >
              Eczema Treatment in Malaysia (Kuala Lumpur)
            </motion.h2>

            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-georgia text-rose mt-8 mb-4"
            >
              A quick note before we start
            </motion.h3>
          </motion.div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 bg-rose/5 border-y border-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-taupe leading-relaxed mb-4"
            >
              Eczema can look mild, but it can feel intense. The itch can be
              loud. The redness can be embarrassing. The "Why is this happening
              again?" feeling can be exhausting.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-taupe leading-relaxed mb-4"
            >
              This page is for education and guidance. It is not a substitute
              for medical diagnosis. If your skin is infected, very painful,
              spreading fast, or you feel unwell, please get medical care
              quickly.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-2xl font-georgia text-brown mt-8"
            >
              Now, let's make eczema feel less confusing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is Eczema Section with Image */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInLeft}
                className="text-4xl font-georgia text-brown mb-6"
              >
                What is eczema, really?
              </motion.h2>
              <motion.p
                variants={fadeInLeft}
                className="text-lg text-taupe mb-4 leading-relaxed"
              >
                Eczema is a long-term skin condition that causes dry, itchy,
                inflamed skin. It often comes and goes in flares. You can be
                fine for weeks, then one trigger hits and your skin reacts.
              </motion.p>
              <motion.p
                variants={fadeInLeft}
                className="text-lg text-taupe mb-4 leading-relaxed"
              >
                The most common type is atopic dermatitis. But "eczema" is also
                used for other dermatitis types like contact dermatitis or
                seborrheic dermatitis (dandruff-like eczema).
              </motion.p>
              <motion.p
                variants={fadeInLeft}
                className="text-lg text-rose font-medium mb-8 leading-relaxed"
              >
                One important fact that eases anxiety for many people: eczema is
                not contagious. You cannot "catch" it from someone.
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="whileInView"
              variants={fadeInRight}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-wine/20 to-rose/20 rounded-3xl transform rotate-3"></div>
              <img
                src="/images/skin/eczema-treatment.webp"
                alt="Eczema skin condition visualization"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* KL Environment Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-6"
            >
              Why eczema feels worse in Kuala Lumpur
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-taupe mb-8">
              Malaysia's climate and lifestyle can be a perfect storm for
              eczema.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
              <p className="text-brown flex items-start gap-2">
                <ThermometerIcon className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span>
                  <span className="font-semibold">Heat + sweat:</span> sweat can
                  sting cracked skin and trigger itching.
                </span>
              </p>
              <p className="text-brown flex items-start gap-2">
                <DropletIcon className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span>
                  <span className="font-semibold">Humidity:</span> it can feel
                  like your skin is wet, but your barrier is still dry and
                  sensitive.
                </span>
              </p>
              <p className="text-brown flex items-start gap-2">
                <WindIcon className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span>
                  <span className="font-semibold">Air conditioning:</span> many
                  KL offices are cold and dry. The temperature swings can stress
                  your skin.
                </span>
              </p>
              <p className="text-brown flex items-start gap-2">
                <ShowerHead className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span>
                  <span className="font-semibold">Frequent showers:</span>{" "}
                  understandable in KL, but hot water and harsh cleansers strip
                  the barrier.
                </span>
              </p>
              <p className="text-brown flex items-start gap-2">
                <Car className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span>
                  <span className="font-semibold">
                    Traffic pollution and stress:
                  </span>{" "}
                  both can increase inflammation and scratching.
                </span>
              </p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-rose font-medium p-6 bg-white rounded-2xl"
            >
              If your eczema "behaves differently" in KL, you are not imagining
              it. Your environment matters.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-8"
            >
              Common eczema symptoms
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-8">
              Eczema does not look the same on everyone, but these are typical:
            </motion.p>

            <motion.ul variants={fadeInUp} className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine font-bold">•</span>
                Intense itching, often before you see a rash
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine font-bold">•</span>
                Dry, rough, flaky skin
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine font-bold">•</span>
                Red or darker patches (on deeper skin tones it can look brown,
                purple, or grey)
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine font-bold">•</span>
                Small bumps, oozing, or crusting during flares
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine font-bold">•</span>
                Thickened skin over time from repeated scratching
              </li>
            </motion.ul>

            <motion.p variants={fadeInUp} className="text-taupe italic">
              Atopic dermatitis often appears in skin folds like elbows, behind
              knees, neck, wrists, and ankles.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Types of Eczema */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-6"
            >
              Types of eczema we commonly see
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-8">
              You do not need to memorise this. You just need to know why
              diagnosis matters.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6 mb-6">
              <div className="bg-white p-6 rounded-2xl">
                <h3 className="text-2xl font-georgia text-brown mb-3">
                  Atopic dermatitis
                </h3>
                <p className="text-taupe">
                  Often linked to a sensitive skin barrier and immune response.
                  Can start in childhood or appear later.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl">
                <h3 className="text-2xl font-georgia text-brown mb-3">
                  Contact dermatitis
                </h3>
                <p className="text-taupe">
                  Your skin reacts to something it touched, like fragrance,
                  detergent, hair dye, nickel, or some skincare. This is common
                  in KL because products are everywhere.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl">
                <h3 className="text-2xl font-georgia text-brown mb-3">
                  Hand eczema
                </h3>
                <p className="text-taupe">
                  Frequent handwashing, sanitiser, and wet work can destroy the
                  barrier.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl">
                <h3 className="text-2xl font-georgia text-brown mb-3">
                  Seborrheic dermatitis
                </h3>
                <p className="text-taupe">
                  Scalp, eyebrows, sides of nose, chest. Looks like dandruff
                  with redness.
                </p>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-rose font-medium"
            >
              When the type is wrong, the treatment often fails. That is why
              assessment matters.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who Treatment Is For */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-6"
            >
              Who eczema treatment is for
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-8">
              If you are searching eczema treatment in Kuala Lumpur or eczema
              specialist Malaysia, you are probably dealing with one of these:
            </motion.p>

            <motion.ul variants={fadeInUp} className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine font-bold">•</span>
                itch that keeps returning
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine font-bold">•</span>
                Patches that come back in the same spots
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine font-bold">•</span>
                Skin that burns after showering
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine font-bold">•</span>
                Flares after stress, sweat, or certain products
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine font-bold">•</span>
                Redness and dryness on face, eyelids, neck, hands, or body folds
              </li>
              <li className="flex items-start gap-3 text-brown">
                <span className="text-wine font-bold">•</span>
                Fear of using creams because "what if steroids harm my skin?"
              </li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-rose font-medium p-6 bg-rose/5 rounded-2xl"
            >
              You are not being dramatic. Eczema can affect sleep and mental
              wellbeing, not just skin.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Triggers Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-6"
            >
              What causes eczema flares?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-4">
              There is no single cause, but there are common triggers. Mayo
              Clinic describes eczema as chronic, flare-prone, and influenced by
              multiple factors.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-medium mb-4"
            >
              Typical triggers include:
            </motion.p>

            <motion.ul variants={fadeInUp} className="space-y-2 mb-4">
              <li className="text-brown">Heat and sweating</li>
              <li className="text-brown">
                Harsh soaps and fragranced products
              </li>
              <li className="text-brown">Detergent residue in clothes</li>
              <li className="text-brown">Stress and poor sleep</li>
              <li className="text-brown">Dust mites, pet dander, pollen</li>
              <li className="text-brown">Rough fabrics like wool</li>
              <li className="text-brown">Skin infections</li>
              <li className="text-brown">
                Over-scrubbing, strong acids, or frequent peeling
              </li>
            </motion.ul>

            <motion.p variants={fadeInUp} className="text-taupe italic">
              Some people also have food-related triggers, but it is not as
              simple as "avoid all dairy." It needs careful evaluation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Nexus Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-2"
            >
              Nexus Clinic Kuala Lumpur approach
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-rose mb-8">
              (simple and human)
            </motion.p>

            <motion.p variants={fadeInUp} className="text-taupe mb-6">
              At Nexus Clinic, we are a doctor-led, diagnosis-driven clinic.
              That matters with eczema because eczema is not a one-product
              problem.
            </motion.p>

            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-georgia text-brown mt-8 mb-4"
            >
              Step 1: We identify what you are dealing with
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-taupe mb-4">
              Is it eczema, contact dermatitis, fungal rash, or something else
              that looks similar? Many rashes imitate eczema.
            </motion.p>

            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-georgia text-brown mt-8 mb-4"
            >
              Step 2: We calm the flare first
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-taupe mb-4">
              When skin is inflamed, "beauty treatments" are not the priority.
              Comfort is.
            </motion.p>

            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-georgia text-brown mt-8 mb-4"
            >
              Step 3: We build a routine you can actually do in Malaysia
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-taupe mb-4">
              Short steps. Clear product rules. Simple trigger control.
            </motion.p>

            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-georgia text-brown mt-8 mb-4"
            >
              Step 4: We plan maintenance
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-taupe mb-4">
              Eczema is often managed, not "cured forever." Mayo Clinic notes
              symptoms can return even after improvement.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-rose font-medium mt-6 p-4 bg-rose/5 rounded-xl"
            >
              If your eczema is severe, widespread, infected, or needs
              specialist systemic therapy, we will advise appropriate
              escalation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-12"
            >
              Treatment options (what actually works)
            </motion.h2>

            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-2xl font-georgia text-brown mb-4">
                1) Moisturisers and barrier repair (the foundation)
              </h3>
              <p className="text-taupe mb-4">
                Moisturising is not "extra." It is treatment.
              </p>
              <p className="text-taupe mb-4">
                Clinical guidelines strongly support moisturisers as a core part
                of atopic dermatitis care. The NHS also gives practical
                guidance, like spacing emollients and medicated creams so you do
                not dilute treatment.
              </p>
              <p className="text-brown font-medium mb-2">
                What this looks like in real life:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-taupe mb-4">
                <li>Moisturise every day, even when your skin looks calm.</li>
                <li>After showering, pat dry and moisturise quickly.</li>
                <li>Use fragrance-free products whenever possible.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-2xl font-georgia text-brown mb-4">
                2) Anti-inflammatory creams during flares
              </h3>
              <p className="text-taupe mb-4">
                When eczema is active, moisturiser alone may not be enough.
              </p>
              <p className="text-taupe mb-4">
                Topical corticosteroids are commonly used for flares. DermNet
                notes they are a mainstay and safe when used correctly, and that
                site choice and severity guide strength.
              </p>
              <p className="text-taupe mb-4">
                If steroids are not ideal for certain areas or long-term use,
                topical calcineurin inhibitors like tacrolimus or pimecrolimus
                can be used, especially for sensitive sites such as eyelids and
                skin folds.
              </p>
              <p className="text-rose font-medium">
                This is where doctor guidance makes a difference. Wrong
                strength, wrong area, wrong duration leads to frustration.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-2xl font-georgia text-brown mb-4">
                3) Itch control and sleep support
              </h3>
              <p className="text-taupe mb-4">
                Itch is not just annoying. It keeps you awake, and tired skin
                flares more easily.
              </p>
              <p className="text-brown font-medium mb-2">
                Your plan may include:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-taupe mb-4">
                <li>Cold compresses for acute itch</li>
                <li>Nail and habit strategies to reduce damage</li>
                <li>Night routine adjustments</li>
                <li>
                  Medications if clinically appropriate (your doctor decides)
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-2xl font-georgia text-brown mb-4">
                4) Infection control when needed
              </h3>
              <p className="text-taupe">
                Scratching creates micro-wounds. That opens the door to
                infection. If eczema starts oozing, crusting, or becomes
                suddenly painful, it may need medical treatment.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-2xl font-georgia text-brown mb-4">
                5) Phototherapy and advanced options (for moderate to severe
                cases)
              </h3>
              <p className="text-taupe mb-4">
                When eczema is persistent or widespread, dermatology clinics may
                use phototherapy or systemic treatments.
              </p>
              <p className="text-taupe mb-4">
                DermNet and Mayo Clinic both discuss escalation options like
                phototherapy and injectable biologic medicines such as dupilumab
                for harder-to-control disease.
              </p>
              <p className="text-taupe">
                Not everyone needs these. But it helps to know they exist,
                especially if you have suffered for years.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Pros and Cons */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-8"
            >
              Pros and cons of eczema treatments
            </motion.h2>

            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-2xl font-georgia text-green-700 mb-3">
                Pros
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span>Less itch, fewer sleepless nights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span>Reduced redness and flaking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span>Fewer flare-ups with a consistent routine</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span>Better confidence in public and at work</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <span>Less skin thickening and scarring over time</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-2xl font-georgia text-rose mb-3">Cons</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span>Needs consistency, not occasional effort</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span>Some treatments need monitoring and careful use</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span>
                    You may need to try a few options to find your match
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span>
                    Triggers in KL can still cause flares, even with good care
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-2xl text-center text-rose font-georgia mt-8"
            >
              The goal is not perfection. The goal is control.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-4"
            >
              Side effects and safety
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-rose mb-8">
              (important, but not scary)
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-2xl font-georgia text-brown mb-2">
                Moisturisers
              </h3>
              <p className="text-taupe mb-4">
                Usually very safe. If a product stings, it may contain irritants
                or your barrier is very broken. We adjust.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-2xl font-georgia text-brown mb-2">
                Steroid creams
              </h3>
              <p className="text-taupe mb-4">
                Safe when used correctly, but misuse can cause thinning or
                irritation, especially on face or skin folds. DermNet emphasises
                correct use and choosing the weakest effective option for the
                right site.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-2xl font-georgia text-brown mb-2">
                Calcineurin inhibitors
              </h3>
              <p className="text-taupe mb-4">
                Can cause a warm or tingling sensation at first in some people.
                Often improves.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-2xl font-georgia text-brown mb-2">
                Phototherapy and systemic medicines
              </h3>
              <p className="text-taupe">
                Require medical oversight and are usually handled by dermatology
                specialists depending on severity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-4"
            >
              Cost of eczema treatment in Malaysia (what to expect)
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-taupe mb-4">
              Eczema costs vary because eczema varies.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-taupe mb-4">
              Here is a realistic view of pricing signals in Malaysia:
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-rose italic mb-6 p-4 bg-rose/5 rounded-xl"
            >
              Community-reported first-visit eczema treatment costs can vary
              widely on local medical directories, from a few hundred ringgit
              upward depending on clinic type and medication plan.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-taupe mb-4">
              Some specialist dermatology clinics publicly list procedure
              charges such as phototherapy and other dermatology procedures with
              set ranges.
            </motion.p>

            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-georgia text-brown mt-8 mb-4"
            >
              What changes the cost most:
            </motion.h3>

            <motion.ul variants={fadeInUp} className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-wine font-bold">•</span>
                Severity and body area involved (face and hands often need more
                careful planning)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wine font-bold">•</span>
                Whether this is true eczema or allergic contact dermatitis (may
                require allergy testing)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wine font-bold">•</span>
                How often you flare and whether infection is involved
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wine font-bold">•</span>
                Whether you need escalation therapy through dermatology services
              </li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-rose font-medium p-4 bg-rose/5 rounded-xl"
            >
              If you want, Nexus Clinic can outline an estimated plan after
              assessment, so you know what you are paying for and why.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-8"
            >
              Eczema vs other common skin problems (quick comparisons)
            </motion.h2>

            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-2xl font-georgia text-brown mb-2">
                Eczema vs fungal infection
              </h3>
              <p className="text-taupe">
                Fungal rashes often have clearer borders and may worsen with
                steroid use if misdiagnosed. If you tried "eczema cream" and it
                got worse, you need reassessment.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-2xl font-georgia text-brown mb-2">
                Eczema vs psoriasis
              </h3>
              <p className="text-taupe">
                Psoriasis often has thicker plaques and different distribution.
                Treatment differs, so accurate diagnosis saves time.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-2xl font-georgia text-brown mb-2">
                Eczema vs hives
              </h3>
              <p className="text-taupe">
                Hives move around and come and go quickly. Eczema tends to stay
                and flare in the same zones.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Areas We Treat */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-4"
            >
              Areas we commonly treat (and why they need different plans)
            </motion.h2>

            <motion.ul variants={fadeInUp} className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-wine font-bold">•</span>
                Face and eyelids: needs gentle anti-inflammatory options and
                barrier support
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wine font-bold">•</span>
                Neck: often triggered by fragrance, hair products, sweat
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wine font-bold">•</span>
                Hands: common in KL due to sanitiser and wet work
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wine font-bold">•</span>
                Elbows, knees, body folds: classic flare zones
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wine font-bold">•</span>
                Scalp: may be seborrheic dermatitis and needs different care
              </li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-rose font-medium p-6 bg-rose/5 rounded-2xl"
            >
              One mistake many people make is treating every area with the same
              product, the same strength, the same frequency. Skin does not work
              that way.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Daily Routine */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-4"
            >
              A practical eczema routine for KL life (simple, not perfect)
            </motion.h2>

            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-georgia text-brown mt-6 mb-3"
            >
              Morning
            </motion.h3>
            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-6 space-y-1 text-taupe mb-4"
            >
              <li>Quick rinse or gentle cleanse</li>
              <li>Moisturiser</li>
              <li>Sunscreen if exposed (choose sensitive-skin friendly)</li>
            </motion.ul>

            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-georgia text-brown mt-6 mb-3"
            >
              Midday (if you sweat)
            </motion.h3>
            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-6 space-y-1 text-taupe mb-4"
            >
              <li>Rinse sweat if possible</li>
              <li>Reapply moisturiser if skin feels tight</li>
              <li>Avoid fragranced wipes</li>
            </motion.ul>

            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-georgia text-brown mt-6 mb-3"
            >
              Night
            </motion.h3>
            <motion.ul
              variants={fadeInUp}
              className="list-disc pl-6 space-y-1 text-taupe mb-4"
            >
              <li>Lukewarm shower</li>
              <li>Pat dry, moisturise</li>
              <li>Use medicated creams only where needed (and as advised)</li>
              <li>Keep nails short. Use cotton sleepwear.</li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-rose mt-6 p-4 bg-white rounded-xl"
            >
              The NHS also advises spacing emollients and other medicated creams
              by about 20 to 30 minutes so treatment works properly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-georgia text-brown mb-8"
            >
              Real People Also Ask style FAQs (Malaysia + KL intent)
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div>
                <h3 className="text-xl font-georgia text-brown mb-2">
                  1) Will eczema go away without treatment?
                </h3>
                <p className="text-taupe">
                  Some mild cases improve, but eczema often flares and returns.
                  Many clinics and medical sources emphasise management and
                  prevention of flare-ups rather than a guaranteed cure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-georgia text-brown mb-2">
                  2) Is eczema contagious?
                </h3>
                <p className="text-taupe">
                  No. Atopic dermatitis is not contagious. You cannot spread it
                  by touch.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-georgia text-brown mb-2">
                  3) Why is eczema worse at night?
                </h3>
                <p className="text-taupe">
                  Many people feel itch more at night due to routine changes,
                  body temperature shifts, and subconscious scratching. This is
                  also a commonly asked eczema FAQ on KL clinic pages.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-georgia text-brown mb-2">
                  4) What triggers eczema flare-ups in Malaysia?
                </h3>
                <p className="text-taupe">
                  Common triggers include heat, sweat, harsh soaps, stress, and
                  irritants like fragrance and detergent. Atopic dermatitis is
                  chronic and flare-prone, and triggers vary by person.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-georgia text-brown mb-2">
                  5) What is the best treatment for eczema in Kuala Lumpur?
                </h3>
                <p className="text-taupe">
                  There is no single "best." Evidence-based care usually starts
                  with moisturisers and flare control using topical
                  anti-inflammatory treatments, then escalation if needed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-georgia text-brown mb-2">
                  6) Are steroid creams safe for eczema?
                </h3>
                <p className="text-taupe">
                  They are widely used and can be safe and effective when used
                  correctly. The key is correct strength, correct area, and
                  correct duration under medical advice.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-georgia text-brown mb-2">
                  7) Can eczema be cured permanently?
                </h3>
                <p className="text-taupe">
                  Eczema is often long-term and may flare even after it
                  improves. The goal is control, longer calm periods, and fewer
                  flares.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-georgia text-brown mb-2">
                  8) What is the fastest way to calm eczema itching?
                </h3>
                <p className="text-taupe">
                  Fast relief usually comes from cooling the skin, restoring
                  moisture, and using doctor-recommended anti-inflammatory
                  treatment during a flare. If itching is severe or sleep is
                  affected, medical review helps.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-georgia text-brown mb-2">
                  9) Should I avoid certain foods if I have eczema?
                </h3>
                <p className="text-taupe">
                  Some people have food-related triggers, but many do not. If
                  you suspect food triggers, it is best to assess carefully
                  rather than cutting many foods at once.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-georgia text-brown mb-2">
                  10) When should I see a doctor for eczema?
                </h3>
                <p className="text-taupe">
                  See a doctor if eczema is spreading fast, oozing, crusting,
                  painful, affecting sleep, or not improving with basic care.
                  Moderate to severe eczema may need escalation options like
                  phototherapy or advanced medicines under specialist care.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-wine to-rose">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={scaleIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-georgia text-white mb-6">
              Call to action (Nexus Clinic Kuala Lumpur)
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              If your eczema is making your days uncomfortable or your nights
              miserable, do not keep guessing with random creams.
            </p>

            <div className="bg-glass backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <p className="text-2xl text-wine font-georgia mb-4">
                Visit Nexus Clinic Kuala Lumpur
              </p>
              <p className="text-wine/90 mb-2">
                Wisma UOA II, Jalan Pinang, near KLCC
              </p>
              <p className="text-wine/80">
                for a doctor-led skin assessment and a plan that fits real KL
                life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EczemaLandingPage;
