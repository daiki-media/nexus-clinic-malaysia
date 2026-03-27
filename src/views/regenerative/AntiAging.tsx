"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Target,
  Sparkles,
  FileCheck,
  Droplets,
  Smartphone,
  Heart,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import { staggerContainer, fadeInUp } from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const AntiAgingLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "antiAging");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-regenerative/B&A-anti-aging-therapy1.webp",
      after: "/images/B&A-regenerative/B&A-anti-aging-therapy1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-regenerative/B&A-anti-aging-therapy2.webp",
      after: "/images/B&A-regenerative/B&A-anti-aging-therapy2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-regenerative/B&A-anti-aging-therapy3.webp",
      after: "/images/B&A-regenerative/B&A-anti-aging-therapy3.webp",
    },
  ];

  return (
    <div className="bg-light font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-cream via-light to-rose/10" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-rose/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-taupe/20 rounded-full blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="max-w-4xl">
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="bg-wine/10 text-wine px-4 py-2 rounded-full text-sm font-medium">
                Anti Aging Therapy in Malaysia at Nexus Clinic Kuala Lumpur
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-georgia text-5xl md:text-7xl text-brown mb-6 leading-tight"
            >
              Look refreshed, not "done."
              <span className="block text-rose text-3xl md:text-4xl mt-4">
                Anti aging should still look like you.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-taupe mb-8 max-w-2xl font-inter leading-relaxed"
            >
              Fine lines, sagging, dull skin, and tired-looking eyes build up
              quietly, then suddenly feel obvious in photos and mirrors. At
              Nexus Clinic Kuala Lumpur, anti aging therapy is a personalised
              plan, not a random menu of treatments.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="bg-glass backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/50 col-span-2"
            >
              <div className="flex items-start gap-4">
                <MapPin className="text-wine w-6 h-6 mt-1 shrink-0" />
                <div>
                  <h3 className="font-georgia text-xl text-brown mb-2">
                    Central Kuala Lumpur location (KLCC area)
                  </h3>
                  <p className="text-taupe">
                    LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                    Kuala Lumpur.
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <Phone className="text-rose w-4 h-4" />
                    <p className="text-rose font-medium">
                      016-702 5699 / 03-2163 5699
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-glass backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/50"
            >
              <Target className="text-wine w-8 h-8 mb-4" />
              <p className="text-taupe">
                Personalised anti aging programmes using non-surgical face lift
                techniques and collagen-stimulating treatments.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-glass backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/50"
            >
              <Sparkles className="text-wine w-8 h-8 mb-4" />
              <p className="text-taupe">
                Focus on non-surgical aesthetic procedures and advanced laser
                treatments (Nexus positioning).
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-glass backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/50 col-span-2"
            >
              <FileCheck className="text-wine w-8 h-8 mb-4" />
              <p className="text-taupe">
                Safety-first mindset: In Malaysia, aesthetic medical practice is
                governed by MOH guidance, including the Letter of Credentialing
                and Privileging (LCP) pathway for practitioners.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Section with Image */}
      <section className="py-20 bg-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeInUp}>
              <span className="text-wine font-medium mb-4 block">
                What "Anti Aging Therapy" Really Means
              </span>
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Simple, Honest Definition
              </h2>
              <p className="text-lg text-taupe mb-8">
                Anti aging therapy is not about "stopping time." It's about
                improving the things that make you look tired or older than you
                feel, such as:
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "fine lines and deeper wrinkles",
                  "loss of firmness (skin laxity)",
                  "volume loss in cheeks and under- eyes",
                  "uneven tone, sun spots, pigmentation",
                  "large pores, rough texture, acne marks",
                  "dullness and dryness",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="text-rose w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brown text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeInUp}
                className="p-6 bg-cream rounded-2xl"
              >
                <h3 className="font-georgia text-xl text-brown mb-4">
                  A good plan does two things:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-taupe">
                    <span className="w-2 h-2 bg-rose rounded-full mt-2" />
                    <span>
                      1. prevents fast ageing (mostly from UV and lifestyle),
                      and
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-taupe">
                    <span className="w-2 h-2 bg-rose rounded-full mt-2" />
                    <span>
                      2. repairs what has already changed (collagen, texture,
                      volume, and expression lines).
                    </span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative h-150 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/regenerative/anti-aging-therapy.webp"
                alt="Anti Aging Consultation at Nexus Clinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brown/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-light">
                <p className="font-georgia text-2xl mb-2">
                  Personalised Consultation
                </p>
                <p className="text-light/80">
                  Every journey begins with understanding you
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Malaysia Section */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-georgia text-4xl text-brown mb-6">
              Why Skin Ages Faster in Malaysia
            </h2>
            <p className="text-lg text-taupe">
              Malaysia's sun and heat are not gentle. UV exposure is a major
              driver of premature ageing, and daily sunscreen helps prevent
              wrinkles and age spots linked to unprotected UV exposure.
            </p>
          </div>

          <div className="text-center text-brown font-medium mb-8 text-lg">
            <p>In KL, many people also deal with:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: Droplets,
                title: "humidity and sweat",
                desc: "(clogged pores, congestion)",
              },
              {
                icon: Smartphone,
                title: "high screen time",
                desc: "(sleep disruption and dull skin)",
              },
              {
                icon: Heart,
                title: "stress",
                desc: "(tension lines and breakouts)",
              },
              {
                icon: Clock,
                title: "inconsistent routines",
                desc: "(skin can't 'settle')",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl shadow-lg"
              >
                <item.icon className="text-wine w-8 h-8 mb-4 mx-auto" />
                <h3 className="font-georgia text-lg text-brown mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-taupe text-sm text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-brown font-medium mt-8 text-lg"
          >
            So the best anti aging treatment in Malaysia is usually a mix of
            prevention + collagen support + targeted correction.
          </motion.p>
        </motion.div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-8"
            >
              Who Anti Aging Therapy Is For
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe mb-6 text-center"
            >
              You're a good candidate if you want to treat any of these:
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "forehead lines, frown lines, crow's feet",
                "under- eye hollows or tired eyes",
                "sagging around cheeks, jawline, or neck",
                "smile lines that are getting deeper",
                "uneven skin tone, pigmentation, sun damage",
                "enlarged pores, rough texture, acne scars",
                '"my face looks tired even when I\'m okay" feeling',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="text-rose w-5 h-5 mt-1 shrink-0" />
                  <span className="text-brown text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-rose/10 rounded-2xl border border-rose/20"
            >
              <p className="text-taupe">
                It's also for men. Male anti aging in Kuala Lumpur is growing
                fast because men often want subtle tightening, better skin
                texture, and a cleaner jawline without looking "treated."
              </p>
            </motion.div>

            {/* Nexus Clinic Approach */}
            <motion.div variants={fadeInUp} className="mt-12">
              <h3 className="font-georgia text-3xl text-brown text-center mb-8">
                The Nexus Clinic Approach: 3-Layer Anti Aging Plan
              </h3>
              <p className="text-taupe text-center mb-8">
                Instead of chasing one "best treatment," we build the plan in
                layers.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Layer 1: Protect */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="bg-wine/10 text-wine px-4 py-2 rounded-full text-sm">
                Layer 1
              </span>
              <h2 className="font-georgia text-4xl text-brown mt-4 mb-6">
                Protect (Stop new damage)
              </h2>
              <p className="text-taupe text-lg">
                This is the part people skip. It matters most.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-2xl shadow-lg mb-6"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                Daily sunscreen
              </h3>
              <p className="text-taupe mb-4">
                Sunscreen helps prevent premature ageing such as wrinkles and
                age spots caused by UV exposure.
              </p>
              <p className="text-rose font-medium">
                If you do one thing for anti aging, do this.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                Smart home skincare (simple, not 12 steps)
              </h3>
              <ul className="space-y-2 text-taupe mb-4">
                <li>• gentle cleanser</li>
                <li>• moisturiser that suits your skin type</li>
                <li>• sunscreen (morning)</li>
                <li>• retinoid or retinol (night, if suitable)</li>
              </ul>
              <p className="text-sm text-taupe">
                Topical tretinoin has evidence for improving photoaging changes
                over time in studies, including visible improvement in overall
                photodamage severity after months of use.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Layer 2: Stimulate */}
      <section className="py-20 bg-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="bg-wine/10 text-wine px-4 py-2 rounded-full text-sm">
                Layer 2
              </span>
              <h2 className="font-georgia text-4xl text-brown mt-4 mb-6">
                Stimulate (Boost collagen and skin quality)
              </h2>
              <p className="text-taupe text-lg">
                This is where you improve texture, firmness, and glow.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-8 rounded-2xl mb-6"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                RF microneedling (collagen induction with heat)
              </h3>
              <p className="text-taupe">
                Many top KL clinics highlight RF microneedling because it
                targets texture, pores, fine lines, and scars by stimulating
                collagen deeper in the dermis.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-8 rounded-2xl mb-6"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                Lasers (tone + texture + pigmentation)
              </h3>
              <p className="text-taupe">
                Clinics in KL commonly list options like fractional CO2 laser,
                pico laser, and other resurfacing technologies to target fine
                lines, pigmentation, and uneven texture.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-8 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                HIFU or ultrasound lifting (non-surgical lift)
              </h3>
              <p className="text-taupe">
                HIFU is widely positioned in Malaysia for lifting and
                tightening, with results often described as lasting around 12 to
                18 months for many people, depending on skin and lifestyle.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Layer 3: Reshape */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="bg-wine/10 text-wine px-4 py-2 rounded-full text-sm">
                Layer 3
              </span>
              <h2 className="font-georgia text-4xl text-brown mt-4 mb-6">
                Reshape (Fix lines and volume that skincare cannot)
              </h2>
              <p className="text-taupe text-lg">
                This is the "structure" layer.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-2xl shadow-lg mb-6"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                Wrinkle relaxers (Botox-type injections)
              </h3>
              <p className="text-taupe">
                These relax overactive muscles, so expression lines soften.
                Effects typically develop over about 2 weeks and often last
                around 3 to 4 months.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                Dermal fillers (volume and contour)
              </h3>
              <p className="text-taupe">
                Fillers are used to restore volume or shape in areas like
                cheeks, under- eyes, and smile lines. Hyaluronic acid fillers
                are traditionally described as lasting around 3 to 12 months,
                depending on product and area, though durability can vary.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Popular Areas */}
      <section className="py-20 bg-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Most Popular Areas to Treat (Face and Beyond)
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center mb-12"
          >
            Anti aging is not only "forehead lines." A good plan looks at your
            whole face balance.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-4">
                Upper face
              </h3>
              <ul className="space-y-2">
                <li className="text-taupe text-sm">• forehead lines</li>
                <li className="text-taupe text-sm">
                  • frown lines ("11" lines)
                </li>
                <li className="text-taupe text-sm">• crow's feet</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-4">Mid face</h3>
              <ul className="space-y-2">
                <li className="text-taupe text-sm">• under-eye hollows</li>
                <li className="text-taupe text-sm">
                  • cheek support (lifting effect)
                </li>
                <li className="text-taupe text-sm">• pores and texture</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-4">
                Lower face
              </h3>
              <ul className="space-y-2">
                <li className="text-taupe text-sm">• smile lines</li>
                <li className="text-taupe text-sm">
                  • marionette lines (corners of mouth)
                </li>
                <li className="text-taupe text-sm">• jawline definition</li>
                <li className="text-taupe text-sm">• chin balance</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-4">
                Neck and hands
              </h3>
              <ul className="space-y-2">
                <li className="text-taupe text-sm">
                  • neck lines and loose skin
                </li>
                <li className="text-taupe text-sm">• crepey skin on hands</li>
                <li className="text-taupe text-sm">
                  • pigmentation and sun spots
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Consultation Section */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-8"
          >
            What to Expect at Your Consultation in Kuala Lumpur
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center mb-12"
          >
            A proper anti aging consult should feel organised and calm:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              "1. You explain what bothers you (photos help).",
              "2. The doctor checks skin quality, facial structure, and movement lines.",
              "3. You get a plan that matches your budget, timeline, and comfort level.",
              "4. You understand downtime and aftercare before you commit.",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl shadow-lg"
              >
                <p className="text-brown">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-rose font-medium"
          >
            Nexus Clinic positions its anti aging service as personalised
            programmes with non- surgical face lift techniques and collagen-
            stimulating treatments, which fits this structured approach.
          </motion.p>
        </motion.div>
      </section>

      {/* Treatment Menu */}
      <section className="py-20 bg-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Treatment Menu (What's Commonly Used in KL, and How It Feels)
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center mb-12"
          >
            Below is a practical guide to what people actually choose in
            Malaysia, and why.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                1) Wrinkle Relaxers (Botox-type)
              </h3>
              <p className="text-taupe mb-2">
                Best for: forehead lines, frown lines, crow's feet
              </p>
              <p className="text-taupe">
                Downtime: usually low, maybe mild swelling or bruising
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                2) Fillers
              </h3>
              <p className="text-taupe mb-2">
                Best for: under- eyes, cheeks, smile lines, chin, jawline
                balance
              </p>
              <p className="text-taupe mb-2">
                Downtime: mild swelling or bruising possible
              </p>
              <p className="text-taupe mb-2">
                Longevity: commonly described as months, varies by area and
                product
              </p>
              <p className="text-rose">
                Feels like: you look less tired, features look "supported"
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                3) HIFU / Ultrasound Lifting
              </h3>
              <p className="text-taupe mb-2">
                Best for: mild to moderate sagging, jawline, cheeks, brows
              </p>
              <p className="text-taupe mb-2">
                Downtime: minimal for many people
              </p>
              <p className="text-taupe mb-2">
                Results: gradual tightening, often described to last 12-18
                months for many patients
              </p>
              <p className="text-rose">
                Feels like: warm or tingly pulses, then gradual lift over weeks
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                4) RF Microneedling
              </h3>
              <p className="text-taupe mb-2">
                Best for: pores, acne scars, fine lines, texture, firmness
              </p>
              <p className="text-taupe mb-2">
                Downtime: usually a few days of redness
              </p>
              <p className="text-taupe">
                Why it's popular: clinics position it as collagen stimulation
                with minimal downtime using medical- grade devices
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-2xl md:col-span-2"
            >
              <h3 className="font-georgia text-xl text-brown mb-3">
                5) Lasers (Pico, fractional CO2, others)
              </h3>
              <p className="text-taupe mb-2">
                Best for: pigmentation, sun damage, texture, scars
              </p>
              <p className="text-taupe mb-2">Downtime: depends on laser type</p>
              <p className="text-taupe">
                KL competitor trend: many leading clinics showcase laser options
                as key wrinkle and texture solutions
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Pros and Cons */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            Pros and Cons (So You Choose Smart)
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-2xl"
            >
              <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                <TrendingUp className="text-green-600" />
                Pros
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2 text-taupe">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                  non-surgical options available for most ageing concerns
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                  natural- looking results when done conservatively
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                  gradual improvement possible with collagen treatments
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                  flexible budgets (start small, build over time)
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-2xl"
            >
              <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                <AlertCircle className="text-rose" />
                Cons
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2 text-taupe">
                  <span className="w-2 h-2 bg-rose rounded-full mt-2" />
                  results are not permanent, maintenance is normal
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="w-2 h-2 bg-rose rounded-full mt-2" />
                  some treatments need multiple sessions
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="w-2 h-2 bg-rose rounded-full mt-2" />
                  there can be bruising, swelling, or downtime
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <span className="w-2 h-2 bg-rose rounded-full mt-2" />
                  choosing the wrong clinic or wrong plan can waste money
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Side Effects */}
      <section className="py-20 bg-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6"
            >
              Side Effects and Downtime (What's Normal)
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-taupe mb-8">
              Most anti aging treatments are low downtime, but you should still
              plan smart.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-cream p-8 rounded-2xl"
            >
              <p className="text-brown leading-relaxed">
                A KL competitor page summarises it well: injectables may cause
                minor bruising or swelling for a few days, and lasers can cause
                mild "sunburn-like" redness for hours or longer depending on
                intensity.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Cost Section */}
      <section className="py-20 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-4"
          >
            Cost of Anti Aging Therapy in Malaysia (Kuala Lumpur Price Reality)
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-taupe text-center mb-8">
            Prices vary by clinic location, product brand, doctor expertise, and
            how many areas you treat.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center mb-12"
          >
            Here are published "market range" examples from Malaysia clinic
            pages:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {[
              "HIFU: RM1,500 - RM4,000 (some clinics), and higher depending on device and area",
              "Ultherapy: RM4,000 - RM15,000",
              "Botox-type injections: RM500 - RM2,000 (depending on units)",
              "Dermal fillers: RM1,200 - RM3,500 per syringe",
              "RF microneedling: some clinics list RM2,800+ per session for certain RF microneedling options",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl shadow-lg"
              >
                <p className="text-brown">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-wine/10 p-8 rounded-2xl max-w-2xl mx-auto"
          >
            <h3 className="font-georgia text-xl text-brown mb-4 text-center">
              If you want a clean budget plan, ask the clinic to break it into:
            </h3>
            <ul className="space-y-3 text-brown text-center">
              <li>1. "today" (quick win)</li>
              <li>2. "next 3 months" (collagen plan)</li>
              <li>3. "maintenance" (how often you'll repeat)</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* How to Choose */}
      <section className="py-20 bg-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <div className="max-w-3xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-4"
            >
              How to Choose a Safe Anti Aging Clinic in Malaysia
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center mb-12"
            >
              This matters more than the machine name.
            </motion.p>

            <div className="space-y-6">
              <motion.div
                variants={fadeInUp}
                className="bg-cream p-6 rounded-xl"
              >
                <h3 className="font-georgia text-xl text-brown mb-2">
                  1) Check credentialing and medical oversight
                </h3>
                <p className="text-taupe">
                  Malaysia has MOH guidance for aesthetic medical practice,
                  including the LCP pathway and scope of practice.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream p-6 rounded-xl"
              >
                <h3 className="font-georgia text-xl text-brown mb-2">
                  2) Avoid "beauty salon injections"
                </h3>
                <p className="text-taupe">
                  If it involves needles or medical lasers, treat it like
                  medical care.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream p-6 rounded-xl"
              >
                <h3 className="font-georgia text-xl text-brown mb-2">
                  3) Ask what the plan is if you do not like the result
                </h3>
                <p className="text-taupe">
                  A good clinic will talk about reversibility, adjustment, and
                  follow- up.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown text-center mb-12"
          >
            People Also Ask (PAA-Style) FAQs: Anti Aging Therapy Malaysia
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is the best anti aging treatment in Malaysia?",
                a: "The best treatment varies by individual, but a combination of prevention, collagen stimulation, and targeted correction typically works best.",
              },
              {
                q: "When should I start anti aging treatments?",
                a: "Many clinics frame it as prevention first, then correction. Some people start in their late 20s or early 30s with skincare and gentle treatments, and add devices or injectables when signs become visible.",
              },
              {
                q: "Does sunscreen really prevent ageing?",
                a: "Yes. Sunscreen helps prevent premature skin ageing like wrinkles and age spots caused by UV exposure.",
              },
              {
                q: "How long does Botox last?",
                a: "Commonly about 3 to 4 months, with full effect developing over about 2 weeks.",
              },
              {
                q: "Will Botox make my face look frozen?",
                a: "It shouldn't when done conservatively and placed correctly. The goal is softer movement and smoother lines, not no expression.",
              },
              {
                q: "How long does HIFU last?",
                a: "Many Malaysia- based clinic resources describe HIFU results lasting around 12 to 18 months for many people, with maintenance depending on age and skin condition.",
              },
              {
                q: "Does HIFU hurt?",
                a: "Sensitivity varies. Many people describe it as warm or tingly with short bursts. Clinics often adjust settings for comfort.",
              },
              {
                q: "What is better: HIFU or RF microneedling?",
                a: "They do different jobs. HIFU targets deeper lifting and tightening. RF microneedling is strong for pores, texture, acne scars, and collagen remodeling.",
              },
              {
                q: "How many sessions do I need?",
                a: "It depends. HIFU may be 1 session with maintenance later, while RF microneedling and lasers often work best as a series.",
              },
              {
                q: "What are the side effects of anti aging treatments?",
                a: "Most are mild: redness, swelling, or bruising for a few days. Laser downtime depends on intensity.",
              },
              {
                q: "How much do anti aging treatments cost in Kuala Lumpur?",
                a: "Published ranges vary. Some Malaysia clinic pages list HIFU around RM1,500- RM4,000, Botox RM500- RM2,000, fillers RM1,200- RM3,500 per syringe, and Ultherapy RM4,000- RM15,000.",
              },
              {
                q: "How do I know a clinic is safe in Malaysia?",
                a: "Look for a registered medical practitioner and MOH- aligned credentialing. Malaysia's MOH guidance explains the LCP pathway for aesthetic medical practice.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-cream p-6 rounded-xl"
              >
                <h3 className="font-georgia text-lg text-brown mb-2">
                  {faq.q}
                </h3>
                <p className="text-taupe">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-wine to-rose text-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-6 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl mb-6"
          >
            Start Your Personalised Journey
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl mb-8 max-w-2xl mx-auto text-light/90"
          >
            If you're searching for anti aging therapy in Kuala Lumpur or anti
            aging treatment in Malaysia, start with a consult that builds a plan
            around your face, not a package around a machine.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <button className="bg-light text-wine px-12 py-4 rounded-full font-medium text-lg hover:bg-cream transition-all duration-300 shadow-2xl">
              Book Your Consultation
            </button>
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-8 text-light/80">
            Nexus Clinic Kuala Lumpur
            <br />
            LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala
            Lumpur
            <br />
            Phone: 016- 702 5699 / 03- 2163 5699
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default AntiAgingLanding;
