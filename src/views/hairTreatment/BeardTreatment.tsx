"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Flame,
  Leaf,
  Calendar,
  MapPin,
  Shield,
  Wind,
  Award,
  AlertTriangle,
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

export default function BeardLanding({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "beardTransplant");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-beard-transplant1.webp",
      after: "/images/B&A-hair/B&A-beard-transplant1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-beard-transplant2.webp",
      after: "/images/B&A-hair/B&A-beard-transplant2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-beard-transplant3.webp",
      after: "/images/B&A-hair/B&A-beard-transplant3.webp",
    },
  ];

  const faqs = [
    {
      q: "How can I grow a beard faster?",
      a: "No instant switch. Depends on genetics, hormones. Medical review helps choose between supportive treatments and transplant.",
    },
    {
      q: "Why is my beard patchy?",
      a: "Genetics, alopecia areata, scarring, skin inflammation. Diagnosis prevents wasted money.",
    },
    {
      q: "What is the best treatment for a patchy beard?",
      a: "Depends on cause. Alopecia areata: steroid injections. Missing follicles: transplant.",
    },
    {
      q: "Does PRP work for beard growth?",
      a: "Used in hair restoration, discussed for beard. Results vary, supportive for areas with follicles.",
    },
    {
      q: "Is minoxidil safe for beard growth?",
      a: "Commonly discussed but off-label. Can irritate. Use with clinician guidance. Store safely.",
    },
    {
      q: "Is a beard transplant permanent?",
      a: "Moves follicles to beard area. Once established, results are long-lasting.",
    },
    {
      q: "How long to see beard transplant results?",
      a: "Multi-month timeline before beard looks settled.",
    },
    {
      q: "How many grafts for beard transplant?",
      a: "500-1,000 for moustache/goatee, higher for jawline and cheeks.",
    },
    {
      q: "How much does beard transplant cost in Malaysia?",
      a: "RM 7,000-15,000 ranges. Starting from RM 3,000. Depends on graft count.",
    },
    {
      q: "Does a beard transplant look natural?",
      a: "Yes, when surgeon plans direction, angle, and density correctly.",
    },
    {
      q: "Can you transplant hair from scalp to beard?",
      a: "Yes. FUE or FUT from scalp, depending on surgeon judgment.",
    },
    {
      q: "What if my beard has dandruff and itching?",
      a: "Seborrheic dermatitis. Antifungal care, gentle cleansing, medical review if persists.",
    },
  ];
  return (
    <div className="min-h-screen bg-light font-inter">
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="relative overflow-hidden bg-linear-to-br from-cream via-light to-rose/5"
      >
        <div className="absolute inset-0 bg-glass backdrop-blur-3xl" />
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <h1 className="font-georgia text-4xl lg:text-6xl text-brown mb-6 leading-tight">
              Beard Treatment in Kuala Lumpur, Malaysia
            </h1>

            <p className="text-2xl lg:text-3xl text-taupe mb-8 font-georgia italic border-l-4 border-wine pl-6">
              Build a fuller beard, fix patchy areas, and calm beard skin at
              Nexus Clinic Kuala Lumpur
            </p>

            <div className="bg-wine/5 p-8 rounded-3xl border border-wine/10">
              <p className="text-xl text-brown mb-4 font-georgia leading-relaxed">
                A patchy beard can mess with your confidence. Let's fix it
                properly.
              </p>
              <p className="text-taupe leading-relaxed">
                From thin cheeks to uneven jawlines, beard concerns are common
                in Malaysia. At Nexus Clinic Kuala Lumpur, we focus on medical
                assessment first, then the right plan.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust at a glance Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="bg-brown/5 py-12 border-y border-taupe/20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-2xl text-brown mb-8 text-center"
          >
            Trust at a glance
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm"
            >
              <Calendar className="text-wine shrink-0 mt-1" size={24} />
              <p className="text-brown">
                Founded in 2001 and located in KL's Golden Triangle area.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm"
            >
              <MapPin className="text-wine shrink-0 mt-1" size={24} />
              <p className="text-brown">
                Clinic address: LG 10, Lower Ground Floor, Wisma UOA II, Jalan
                Pinang, 50450 Kuala Lumpur.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm"
            >
              <Shield className="text-wine shrink-0 mt-1" size={24} />
              <p className="text-brown">
                Hair transplant and hair restoration content and services are
                published by Nexus Clinic.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm"
            >
              <Award className="text-wine shrink-0 mt-1" size={24} />
              <p className="text-brown">
                Facial hair transplant is listed for Nexus Clinic on medical
                directories.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Answers */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl lg:text-4xl text-brown mb-12 text-center"
          >
            Quick answers people want first
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Can a patchy beard be treated?
              </h3>
              <p className="text-taupe">
                Yes, in many cases. The best option depends on the cause.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Is a beard transplant permanent?
              </h3>
              <p className="text-taupe">
                A beard transplant places hair follicles into beard areas, and
                results are typically described as long-lasting once growth
                settles.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Does PRP help beard growth?
              </h3>
              <p className="text-taupe">
                Some clinics offer PRP for facial hair, but results vary and the
                evidence is still evolving.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                How much does beard transplant cost in Malaysia?
              </h3>
              <p className="text-taupe">
                Public pricing ranges vary by clinic, grafts, and coverage area.
                Some Malaysia clinic pages cite ranges like RM 7,000- RM 15,000,
                while directories show starting prices from around RM 3,000.
              </p>
            </motion.div>
          </div>

          {/* Additional text from PDF */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 p-6 bg-cream rounded-2xl"
          >
            <p className="text-brown leading-relaxed">
              1. They push FUE beard transplant as the "main solution" for true
              gaps or scarring, because it moves follicles into the beard. 2.
              They use clear "use cases" like patchy cheeks, weak moustache,
              goatee gaps, and scar cover. 3. They talk about graft counts and
              pricing ranges to match expectations. 4. They add non-surgical
              boosters like PRP or scalp style PRP adapted for facial hair,
              often as an add-on or for early thinning. 5. They rely on FAQs
              because people search questions like "Is it permanent?" "Does it
              hurt?" "How long does it take?"
            </p>
            <p className="text-wine font-georgia mt-4 italic">
              At Nexus Clinic Kuala Lumpur, we take the same high-intent
              questions, but we answer them with a bigger focus on diagnosis.
              Because the "best beard treatment" is different for every face.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What Section with Image */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl lg:text-4xl text-brown mb-12"
          >
            What does "beard treatment" mean in real life?
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-taupe mb-8 text-lg">
            In clinic terms, beard treatment usually means one of these goals:
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Leaf className="text-wine" size={24} />
                  <h3 className="font-georgia text-xl text-brown">
                    1) Beard growth and beard thickening
                  </h3>
                </div>
                <p className="text-taupe">
                  You have hair, but it is light, thin, or uneven.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInLeft}
                className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="text-wine" size={24} />
                  <h3 className="font-georgia text-xl text-brown">
                    2) Patchy beard treatment
                  </h3>
                </div>
                <p className="text-taupe">
                  You have clear gaps, islands, or sections that never filled
                  in.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInLeft}
                className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Flame className="text-wine" size={24} />
                  <h3 className="font-georgia text-xl text-brown">
                    3) Beard hair loss treatment
                  </h3>
                </div>
                <p className="text-taupe">
                  You used to have hair, then it started falling out in patches.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInLeft}
                className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Wind className="text-wine" size={24} />
                  <h3 className="font-georgia text-xl text-brown">
                    4) Beard skin treatment
                  </h3>
                </div>
                <p className="text-taupe">
                  You have beard dandruff, itch, redness, ingrown hairs, or
                  bumps.
                </p>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="font-georgia italic text-brown text-lg mt-6"
              >
                A strong plan starts with one step: identify which one is your
                problem.
              </motion.p>
            </div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="rounded-3xl aspect-4/4 overflow-hidden shadow-2xl">
                <img
                  src="/images/hair/beard-transplant.webp"
                  alt="Beard consultation at Nexus Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Your Beard is Patchy Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl lg:text-4xl text-brown mb-12"
          >
            Why your beard is patchy or not growing (common causes)
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-xl text-wine mb-3">
                Genetics and hormones
              </h3>
              <p className="text-taupe">
                Some men naturally grow thicker beards. Some do not. Age also
                matters. Many beards fill in later than people expect.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-xl text-wine mb-3">
                Alopecia areata in the beard (alopecia barbae)
              </h3>
              <p className="text-taupe">
                This is an autoimmune condition that can cause round, patchy
                loss in the beard. Treatment often involves dermatologist-led
                options like corticosteroid injections or topical treatments.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-xl text-wine mb-3">
                Scars or burns
              </h3>
              <p className="text-taupe">
                If the skin has scar tissue, hair may not grow in that zone.
                This is where transplant is often discussed because the
                follicles are missing in that area.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-xl text-wine mb-3">
                Traction and grooming habits
              </h3>
              <p className="text-taupe">
                Aggressive picking, harsh shaving, or frequent friction can
                irritate the skin and worsen thinning for some people.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10 md:col-span-2"
            >
              <h3 className="font-georgia text-xl text-wine mb-3">
                Beard dandruff and inflammation
              </h3>
              <p className="text-taupe">
                Seborrheic dermatitis can be worse under moustaches and beards
                and may need targeted care like antifungal approaches.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Beard Assessment Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl lg:text-4xl text-brown mb-6"
          >
            Beard assessment at Nexus Clinic Kuala Lumpur (what we look for)
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-taupe mb-8 font-georgia italic"
          >
            A beard consult should not feel like a sales pitch. It should feel
            like someone finally understands what you are dealing with.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-brown mb-6">
            A good assessment usually includes:
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
                <CheckCircle2 className="text-wine shrink-0 mt-1" size={20} />
                <p className="text-brown">what your beard looked like before</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
                <CheckCircle2 className="text-wine shrink-0 mt-1" size={20} />
                <p className="text-brown">
                  how long the patchiness has been there
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
                <CheckCircle2 className="text-wine shrink-0 mt-1" size={20} />
                <p className="text-brown">
                  whether the skin is inflamed or itchy
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
                <CheckCircle2 className="text-wine shrink-0 mt-1" size={20} />
                <p className="text-brown">
                  whether you have sudden patchy loss (possible autoimmune)
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
                <CheckCircle2 className="text-wine shrink-0 mt-1" size={20} />
                <p className="text-brown">
                  whether you have scars, acne scars, or injury lines
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
                <CheckCircle2 className="text-wine shrink-0 mt-1" size={20} />
                <p className="text-brown">
                  your goal: subtle fill or a fuller defined beard line
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 p-6 bg-wine/10 rounded-xl text-brown border-l-4 border-wine text-lg"
          >
            If we suspect alopecia areata or another medical condition, we focus
            on diagnosis first. Because cosmetic boosters are not the same as
            medical treatment.
          </motion.p>
        </div>
      </motion.section>

      {/* Treatment Options Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl lg:text-4xl text-brown mb-12"
          >
            Beard treatment options in Malaysia (what actually helps)
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-2xl text-wine mb-4">
                Option 1: Medical treatment for beard hair loss (patches that
                appeared suddenly)
              </h3>
              <p className="text-taupe mb-4">
                If you have new patchy loss, this is often treated like alopecia
                areata. A common dermatologist approach for adults is
                corticosteroid injections into the patches, repeated every 4 to
                6 weeks if needed. Some people see regrowth within about 3
                months when it works.
              </p>
              <p className="text-rose font-medium flex items-center gap-2">
                <AlertTriangle size={18} />
                This is not something you should self-treat at home. It needs a
                proper medical review.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-2xl text-wine mb-4">
                Option 2: PRP beard treatment (for thinning or weak growth in
                areas with follicles)
              </h3>
              <p className="text-taupe mb-4">
                PRP means platelet-rich plasma. It uses a concentration of your
                own platelets and is injected into target areas. PRP is widely
                discussed for hair restoration, and some clinics adapt it for
                facial hair goals.
              </p>
              <p className="text-brown font-medium mb-2">
                What PRP is best for:
              </p>
              <ul className="list-disc list-inside text-taupe mb-4 space-y-1">
                <li>early thinning beard density</li>
                <li>weak growth where follicles exist</li>
                <li>as a support plan, not a miracle fix</li>
              </ul>
              <p className="text-brown font-medium mb-2">What PRP cannot do:</p>
              <ul className="list-disc list-inside text-taupe mb-4">
                <li>
                  create hair in a totally bald scar area with no follicles
                </li>
              </ul>
              <p className="text-taupe">
                If you are comparing clinics, ask how many sessions they suggest
                and how they track progress (photos, density checks). Many PRP
                plans are session-based over months, not a one-time visit.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-2xl text-wine mb-4">
                Option 3: Microneedling for beard area (supportive, not magic)
              </h3>
              <p className="text-taupe">
                Microneedling is often discussed for hair support because it can
                improve skin quality and may stimulate growth pathways. A
                well-cited clinical study shows microneedling improved outcomes
                when paired with minoxidil for scalp hair loss, which is why it
                appears in "beard roller" discussions too.
              </p>
              <p className="text-taupe mt-4">
                For the beard area, it should be done carefully. Face skin is
                sensitive. Hygiene matters a lot.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-2xl text-wine mb-4">
                Option 4: Minoxidil for beard growth (off-label, needs caution)
              </h3>
              <p className="text-taupe mb-4">
                Many men ask about minoxidil for beard growth. Here is the
                honest answer:
              </p>
              <p className="text-taupe mb-4">
                It is not licensed specifically for beard use in many places, so
                it is considered off-label. There is published medical
                discussion and clinical evidence for beard enhancement using
                topical minoxidil, but it should still be used with professional
                guidance due to irritation risk and variable response.
              </p>
              <div className="bg-rose/10 p-6 rounded-xl border-l-4 border-rose">
                <p className="text-brown font-medium mb-2">
                  Safety note that matters in real homes:
                </p>
                <p className="text-taupe">
                  In early 2026, U.S. regulators announced recalls of some hair
                  and beard growth serums containing minoxidil because they
                  lacked child-resistant packaging, creating a poisoning risk if
                  ingested by children. Store any minoxidil products safely and
                  follow clinician advice.
                </p>
              </div>
              <p className="text-taupe mt-4">
                At Nexus Clinic Kuala Lumpur, if you ask about minoxidil, you
                should expect a balanced discussion. Benefits, limits, and
                safety.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-2xl text-wine mb-4">
                Option 5: Beard transplant in Malaysia (FUE facial hair
                transplant)
              </h3>
              <p className="text-taupe mb-4">
                If you have long-term gaps, no follicles in the area, or scar
                zones, transplant is the option many clinics position as the
                most direct solution.
              </p>

              <h4 className="font-georgia text-xl text-brown mt-6 mb-3">
                What a beard transplant is
              </h4>
              <p className="text-taupe mb-4">
                A beard transplant moves hair follicles from a donor area (often
                the scalp) to beard areas to create or enhance facial hair
                density.
              </p>

              <h4 className="font-georgia text-xl text-brown mt-6 mb-3">
                FUE vs FUT for beard transplant
              </h4>
              <p className="text-taupe mb-4">
                The International Society of Hair Restoration Surgery (ISHRS)
                notes that if hairs are harvested from the beard itself, only
                FUE is acceptable. If scalp hairs are harvested, either FUE or
                FUT can be used, depending on surgeon judgment.
              </p>

              <h4 className="font-georgia text-xl text-brown mt-6 mb-3">
                Why design matters
              </h4>
              <p className="text-taupe">
                Beard hair direction and angle are everything. A peer-reviewed
                review on beard and moustache reconstruction describes
                harvesting grafts and placing them with planned direction and
                density to match facial zones.
              </p>
              <p className="text-taupe mt-4">
                So if you are choosing a clinic in Kuala Lumpur, do not only ask
                "how many grafts?" Ask "how will it look on my face?"
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Areas Beard Treatment Can Target */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl lg:text-4xl text-brown mb-8"
          >
            Areas beard treatment can target
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-taupe mb-8">
            Most beard treatment plans focus on one or more of these:
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "cheeks (patchy zones)",
              "jawline definition",
              "moustache fill",
              "goatee density",
              "sideburn connection",
              "scar cover, if suitable",
            ].map((area, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white px-6 py-4 rounded-xl text-brown border border-wine/20 shadow-sm text-center"
              >
                {area}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Pros and Cons Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl lg:text-4xl text-brown mb-12"
          >
            Pros and cons of common beard treatments
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* PRP Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-2xl text-wine mb-6">
                PRP for beard
              </h3>

              <div className="mb-6">
                <h4 className="font-georgia text-lg text-brown mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-wine" size={20} />
                  Pros
                </h4>
                <ul className="space-y-2 text-taupe">
                  <li>• uses your own platelets</li>
                  <li>• minimal downtime for many people</li>
                  <li>• can suit early thinning goals</li>
                </ul>
              </div>

              <div>
                <h4 className="font-georgia text-lg text-brown mb-3 flex items-center gap-2">
                  <AlertCircle className="text-rose" size={20} />
                  Cons
                </h4>
                <ul className="space-y-2 text-taupe">
                  <li>• results vary</li>
                  <li>• needs multiple sessions</li>
                  <li>• not ideal for totally hairless scar zones</li>
                </ul>
              </div>
            </motion.div>

            {/* Minoxidil Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-2xl text-wine mb-6">
                Minoxidil off-label
              </h3>

              <div className="mb-6">
                <h4 className="font-georgia text-lg text-brown mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-wine" size={20} />
                  Pros
                </h4>
                <ul className="space-y-2 text-taupe">
                  <li>• accessible and widely discussed</li>
                  <li>• some clinical support exists</li>
                </ul>
              </div>

              <div>
                <h4 className="font-georgia text-lg text-brown mb-3 flex items-center gap-2">
                  <AlertCircle className="text-rose" size={20} />
                  Cons
                </h4>
                <ul className="space-y-2 text-taupe">
                  <li>• can irritate facial skin</li>
                  <li>• off-label for beard use in many regions</li>
                  <li>• must be stored safely, especially around children</li>
                </ul>
              </div>
            </motion.div>

            {/* Beard Transplant Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-2xl text-wine mb-6">
                Beard transplant
              </h3>

              <div className="mb-6">
                <h4 className="font-georgia text-lg text-brown mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-wine" size={20} />
                  Pros
                </h4>
                <ul className="space-y-2 text-taupe">
                  <li>• builds density where follicles are missing</li>
                  <li>• long-lasting results after growth settles</li>
                </ul>
              </div>

              <div>
                <h4 className="font-georgia text-lg text-brown mb-3 flex items-center gap-2">
                  <AlertCircle className="text-rose" size={20} />
                  Cons
                </h4>
                <ul className="space-y-2 text-taupe">
                  <li>• higher cost</li>
                  <li>• healing period and patience required</li>
                  <li>• outcomes depend heavily on skill and design</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Side Effects Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl lg:text-4xl text-brown mb-8"
          >
            Beard treatment side effects (what to expect)
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-taupe mb-8">
            Side effects depend on the method.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <h3 className="font-georgia text-xl text-wine mb-3">
                PRP or injectable boosters
              </h3>
              <p className="text-taupe">
                Common temporary effects can include tenderness, mild swelling,
                or redness.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <h3 className="font-georgia text-xl text-wine mb-3">
                Microneedling
              </h3>
              <p className="text-taupe">
                You may have redness and sensitivity for a short time. Infection
                risk rises if hygiene is poor.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <h3 className="font-georgia text-xl text-wine mb-3">
                Beard transplant
              </h3>
              <p className="text-taupe">
                Expect redness, scabbing, and a healing phase. Growth takes
                time. This is normal in hair restoration timelines.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 p-6 bg-white rounded-2xl shadow-sm"
          >
            <h3 className="font-georgia text-xl text-wine mb-3">
              Beard dandruff and irritation treatments
            </h3>
            <p className="text-taupe">
              If you have beard dandruff, you may be dealing with seborrheic
              dermatitis, which can flare under beards. Treatments often focus
              on antifungal care and calming inflammation.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl lg:text-4xl text-brown mb-8"
          >
            Beard treatment cost in Malaysia (real ranges you will see online)
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-taupe mb-6">
            Pricing depends on coverage area, technique, and graft count.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-sm border border-taupe/10"
          >
            <p className="text-taupe mb-4">
              Here are public examples from Malaysia sources:
            </p>
            <ul className="space-y-4 text-brown">
              <li className="flex items-start gap-3">
                <span className="text-wine font-bold">•</span>
                <span>
                  Some Malaysia clinic pages cite beard transplant ranges like
                  RM 7,000- RM 15,000, often depending on complexity and area.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wine font-bold">•</span>
                <span>
                  A KL clinic blog cites per-graft pricing ranges and gives
                  examples like goatee or moustache density vs jawline and
                  cheeks with higher graft counts.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wine font-bold">•</span>
                <span>
                  Directories list beard transplant prices starting from around
                  RM 3,000, but final cost depends on your plan.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wine font-bold">•</span>
                <span>
                  Nexus Clinic is listed on a directory with facial hair
                  transplant pricing range shown as RM 5,000- RM 10,000. Treat
                  this as a guide and confirm during consultation.
                </span>
              </li>
            </ul>
            <p className="mt-6 text-rose font-medium text-lg border-t pt-6 border-taupe/20">
              If a clinic gives pricing without seeing your beard area, that is
              a red flag. Beard work is custom.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Beard Dandruff Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl lg:text-4xl text-brown mb-8"
          >
            Beard dandruff and beard skin problems (often ignored, but
            important)
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-sm border border-taupe/10"
          >
            <p className="text-taupe mb-6 text-lg">
              A beard can look patchy even when hair exists, simply because the
              skin is inflamed.
            </p>

            <p className="text-brown mb-4">
              If you have flakes, itch, and redness:
            </p>
            <ul className="list-disc list-inside text-taupe space-y-3 mb-6">
              <li>
                seborrheic dermatitis is a common cause, and it can be worse
                under beards and moustaches
              </li>
              <li>
                treatment often focuses on antifungal approaches and gentle
                care, sometimes with medical guidance
              </li>
            </ul>

            <p className="text-wine font-georgia italic text-lg">
              At Nexus Clinic Kuala Lumpur, this matters because beard
              confidence is not only hair density. It is also how clean and calm
              the beard area looks.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* How to Choose Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl lg:text-4xl text-brown mb-12"
          >
            How to choose the right beard treatment in Kuala Lumpur
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-taupe mb-8 text-lg">
            Use this simple logic:
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border-l-4 border-wine">
                <h3 className="font-georgia text-xl text-wine mb-2">
                  If you have sudden new patches
                </h3>
                <p className="text-taupe">
                  Think medical first. Rule out alopecia areata and treat it
                  properly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-wine">
                <h3 className="font-georgia text-xl text-wine mb-2">
                  If you have always had patchy cheeks
                </h3>
                <p className="text-taupe">
                  Think follicles. If follicles exist, some people try
                  supportive plans. If follicles are absent, transplant is the
                  direct option.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border-l-4 border-wine">
                <h3 className="font-georgia text-xl text-wine mb-2">
                  If your beard looks thin because the skin is irritated
                </h3>
                <p className="text-taupe">
                  Treat the skin. Beard dandruff and inflammation can make
                  everything look worse.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-wine">
                <h3 className="font-georgia text-xl text-wine mb-2">
                  If you want a sharp beard line or a denser look
                </h3>
                <p className="text-taupe">
                  Talk design. A natural direction and angle is what makes it
                  believable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl lg:text-4xl text-brown mb-12"
          >
            People Also Ask FAQs (real search intent FAQs for beard treatment)
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                How can I grow a beard faster?
              </h3>
              <p className="text-taupe text-sm">
                There is no instant switch. Beard growth depends on genetics,
                hormones, and follicle activity. If growth is patchy, a medical
                review helps you choose between supportive treatments and
                transplant options.
              </p>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                Why is my beard patchy?
              </h3>
              <p className="text-taupe text-sm">
                Common reasons include genetics, alopecia areata (autoimmune
                patches), scarring, and skin inflammation under the beard. A
                diagnosis prevents wasted money.
              </p>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                What is the best treatment for a patchy beard?
              </h3>
              <p className="text-taupe text-sm">
                It depends on cause. If it is alopecia areata, steroid
                injections are a common adult treatment option. If follicles are
                missing in an area, a beard transplant is a direct solution.
              </p>
            </motion.div>

            {/* FAQ 4 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                Does PRP work for beard growth?
              </h3>
              <p className="text-taupe text-sm">
                PRP is used in hair restoration and is also discussed for beard
                growth. Results vary, and it tends to be positioned as
                supportive for areas where follicles exist.
              </p>
            </motion.div>

            {/* FAQ 5 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                Is minoxidil safe for beard growth?
              </h3>
              <p className="text-taupe text-sm">
                Minoxidil is commonly discussed for beard growth, but it is
                often off-label for beard use. It can irritate facial skin and
                should be used with clinician guidance. Store it safely,
                especially around children.
              </p>
            </motion.div>

            {/* FAQ 6 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                Is a beard transplant permanent?
              </h3>
              <p className="text-taupe text-sm">
                A beard transplant moves follicles into the beard area. Once
                growth is established, results are typically described as
                long-lasting. The final look depends on planning and technique.
              </p>
            </motion.div>

            {/* FAQ 7 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                How long does it take to see beard transplant results?
              </h3>
              <p className="text-taupe text-sm">
                Growth takes time because follicles follow a cycle. Clinics
                often talk about a multi-month timeline before the beard looks
                "settled."
              </p>
            </motion.div>

            {/* FAQ 8 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                How many grafts do I need for a beard transplant?
              </h3>
              <p className="text-taupe text-sm">
                It depends on your face and goal. Some clinics estimate ranges
                like 500-1,000 grafts for moustache or goatee density and higher
                counts for jawline and cheeks.
              </p>
            </motion.div>

            {/* FAQ 9 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                How much does beard transplant cost in Malaysia?
              </h3>
              <p className="text-taupe text-sm">
                Public ranges vary widely. Some clinic pages cite RM 7,000- RM
                15,000, while directories list starting prices from around RM
                3,000. Your real price depends on graft count and coverage.
              </p>
            </motion.div>

            {/* FAQ 10 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                Does a beard transplant look natural?
              </h3>
              <p className="text-taupe text-sm">
                It can, when the surgeon plans the direction, angle, and density
                correctly. Beard reconstruction literature emphasizes careful
                placement to match facial zones.
              </p>
            </motion.div>

            {/* FAQ 11 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                Can you transplant hair from the scalp to the beard?
              </h3>
              <p className="text-taupe text-sm">
                Yes. Beard transplant commonly uses donor follicles from the
                scalp. ISHRS notes FUE or FUT can be used when harvesting from
                the scalp, depending on surgeon judgment.
              </p>
            </motion.div>

            {/* FAQ 12 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-taupe/10"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                What if my beard has dandruff and itching?
              </h3>
              <p className="text-taupe text-sm">
                Seborrheic dermatitis can be worse under beards. Treatment often
                involves antifungal care and gentle cleansing strategies, and
                sometimes medical review if it persists.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="bg-linear-to-r from-wine to-rose py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl lg:text-4xl text-white mb-6"
          >
            Book beard treatment consultation at Nexus Clinic Kuala Lumpur
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/90 text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            If you want a beard that looks even, natural, and confident, start
            with a proper assessment. We will help you understand the cause,
            then choose the right path, from skin care to beard growth plans or
            facial hair transplant discussions.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="text-white font-georgia bg-white/10 p-8 rounded-2xl backdrop-blur-sm max-w-2xl mx-auto"
          >
            <p className="text-2xl mb-2">Nexus Clinic Kuala Lumpur</p>
            <p className="text-sm opacity-90">
              LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala
              Lumpur, Malaysia
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
