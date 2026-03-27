"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Scissors,
  Droplet,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  MapPin,
  Clock,
  Users,
  ThermometerSnowflake,
  Layers,
} from "lucide-react";
import FAQ from "../../components/FAQ";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";

export default function KeloidLandingPage() {
  const faqs = [
    {
      q: "Can keloids go away naturally?",
      a: "They can sometimes soften, but Mayo Clinic notes keloids can last for years and can recur.",
    },
    {
      q: "What is the best treatment for keloid scars?",
      a: "There is no single best option. AAD notes combination treatment often works best, commonly using injections, silicone, cryotherapy, and sometimes surgery with aftercare.",
    },
    {
      q: "Do keloid injections work?",
      a: "Steroid injections are widely used and can reduce thickness and symptoms, but response varies and repeat sessions are usually needed.",
    },
    {
      q: "How many steroid injections do I need for a keloid?",
      a: "Mayo Clinic notes you may need monthly injections for up to six months to see flattening.",
    },
    {
      q: "Do keloid injections hurt?",
      a: "They can sting or feel tight pressure, especially in sensitive areas, but the session is quick.",
    },
    {
      q: "Can laser remove keloids permanently?",
      a: "Laser can help with redness and texture, but keloids can recur. Lasers are often used as part of a combination plan.",
    },
    {
      q: "Is cryotherapy safe for dark skin in Malaysia?",
      a: "It can work, but hypopigmentation is a known risk, and studies note this can be persistent in darker Fitzpatrick skin types.",
    },
    {
      q: "What are the side effects of steroid injections for keloids?",
      a: "Possible side effects include skin thinning (atrophy), colour changes, and visible small vessels in the area.",
    },
    {
      q: "Do keloids come back after surgery?",
      a: "They can. Keloids have high recurrence risk, which is why surgery is usually combined with other therapies and strict aftercare.",
    },
    {
      q: "Are keloids dangerous or cancerous?",
      a: "Mayo Clinic states keloids are not cancerous.",
    },
    {
      q: "What is the fastest way to flatten a keloid?",
      a: "Steroid injections are commonly used early to flatten and reduce symptoms, sometimes paired with cryotherapy to improve results.",
    },
    {
      q: "Can keloids form after ear piercing?",
      a: "Yes. Ear lobes are a common keloid site, and treatment often includes injections every 4 to 6 weeks and sometimes pressure earrings.",
    },
    {
      q: "Is silicone gel really effective for keloids?",
      a: "AAD notes silicone gel sheets may help flatten keloids and can also be used to prevent keloid formation after injury.",
    },
  ];
  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-keloid-treatment1.webp",
      after: "/images/B&A-skin/B&A-keloid-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-keloid-treatment2.webp",
      after: "/images/B&A-skin/B&A-keloid-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-keloid-treatment3.webp",
      after: "/images/B&A-skin/B&A-keloid-treatment3.webp",
    },
  ];
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative min-h-screen flex items-center overflow-hidden bg-cream"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-rose"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-wine"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-georgia text-brown">
                That raised, itchy scar is not "just a scar." It might be a
                keloid, and it can be treated.
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed text-taupe">
                Keloids can grow beyond the original wound, feel tight or
                painful, and keep coming back if treated the wrong way. At Nexus
                Clinic Kuala Lumpur, we focus on the safest plan for your skin
                type, your scar location, and your goals.
              </p>
              <motion.div variants={scaleIn} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-lg text-white font-semibold transition-all hover:shadow-lg bg-wine">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg bg-glass text-brown border border-rose">
                  Learn More
                </button>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/main/doctor-monitored-malaysia.webp"
                  alt="Keloid consultation at Nexus Clinic"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-glass backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-wine" />
                    <span className="font-medium text-brown">
                      LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang,
                      50450 Kuala Lumpur
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust Section - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Card 1 */}
            <motion.div
              variants={scaleIn}
              className="p-6 rounded-xl bg-glass border border-cream hover:shadow-xl transition-all"
            >
              <div className="mb-4 text-wine">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brown">
                Central Kuala Lumpur location (easy access)
              </h3>
              <p className="text-sm text-taupe">
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={scaleIn}
              className="p-6 rounded-xl bg-glass border border-cream hover:shadow-xl transition-all"
            >
              <div className="mb-4 text-wine">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brown">
                Private consults and step-by-step scar plans
              </h3>
              <p className="text-sm text-taupe">not a one-size menu</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={scaleIn}
              className="p-6 rounded-xl bg-glass border border-cream hover:shadow-xl transition-all"
            >
              <div className="mb-4 text-wine">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brown">
                Combination treatments when needed
              </h3>
              <p className="text-sm text-taupe">
                because keloids often respond best to a layered approach.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={scaleIn}
              className="p-6 rounded-xl bg-glass border border-cream hover:shadow-xl transition-all"
            >
              <div className="mb-4 text-wine">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brown">
                Clear expectations about recurrence
              </h3>
              <p className="text-sm text-taupe">
                since keloids can last for years and can return even after
                treatment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* What Is a Keloid Section - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-georgia text-brown">
                What Is a Keloid?
              </h2>
              <p className="text-lg leading-relaxed text-taupe">
                A keloid is a raised scar that grows beyond the edges of the
                original wound. It can appear months, or even years, after skin
                injury. It can look shiny, feel firm or rubbery, and may itch or
                hurt.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-brown">
                  Keloid vs hypertrophic scar (quick difference)
                </h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-light">
                    <span className="font-semibold text-rose">
                      Hypertrophic scar:
                    </span>
                    <span className="text-taupe">
                      {" "}
                      raised but stays within the original wound border and may
                      improve over time.
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-light">
                    <span className="font-semibold text-wine">Keloid:</span>
                    <span className="text-taupe">
                      {" "}
                      spreads outside the wound border and tends to persist or
                      keep growing.
                    </span>
                  </div>
                </div>
                <p className="text-sm italic text-taupe">
                  Also, keloids are not cancerous.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/images/skin/keloid-treatment.webp"
                alt="Keloid example"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/images/clinic/hypertrophic-scar-example.png"
                alt="Hypertrophic scar example"
                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Do Keloids Happen - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-georgia text-brown">
                Why Do Keloids Happen?
              </h2>
              <p className="text-lg leading-relaxed text-taupe">
                Keloids happen when your body produces too much collagen during
                healing. Some people's skin is simply more prone to this
                over-repair response.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-brown">
                  Common triggers
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <motion.div
                    variants={scaleIn}
                    className="flex items-center gap-2 p-3 rounded-lg bg-cream"
                  >
                    <CheckCircle2 className="w-4 h-4 text-rose" />
                    <span className="text-sm text-brown">Acne scars</span>
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    className="flex items-center gap-2 p-3 rounded-lg bg-cream"
                  >
                    <CheckCircle2 className="w-4 h-4 text-rose" />
                    <span className="text-sm text-brown">Cuts and burns</span>
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    className="flex items-center gap-2 p-3 rounded-lg bg-cream"
                  >
                    <CheckCircle2 className="w-4 h-4 text-rose" />
                    <span className="text-sm text-brown">
                      Surgery scars (C-section, appendix, etc.)
                    </span>
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    className="flex items-center gap-2 p-3 rounded-lg bg-cream"
                  >
                    <CheckCircle2 className="w-4 h-4 text-rose" />
                    <span className="text-sm text-brown">
                      Piercings (especially ear keloids)
                    </span>
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    className="flex items-center gap-2 p-3 rounded-lg bg-cream col-span-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-rose" />
                    <span className="text-sm text-brown">
                      Vaccination scars (for example, BCG scar thickening in
                      some people)
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              {/* Where Keloids Commonly Appear */}
              <div className="p-8 rounded-2xl bg-cream">
                <h3 className="text-xl font-semibold mb-4 text-brown">
                  Where Keloids Commonly Appear
                </h3>
                <p className="mb-4 text-taupe">
                  Mayo Clinic notes keloids often show up on earlobes,
                  shoulders, cheeks, and the middle chest. In Malaysia, we also
                  see many keloids on the jawline (from acne), upper back, and
                  arms.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "earlobes",
                    "shoulders",
                    "cheeks",
                    "middle chest",
                    "jawline (from acne)",
                    "upper back",
                    "arms",
                  ].map((location, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-wine text-white"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              {/* Signs Your Scar Is Turning Into a Keloid */}
              <div className="p-8 rounded-2xl bg-cream">
                <h3 className="text-xl font-semibold mb-4 text-brown">
                  Signs Your Scar Is Turning Into a Keloid
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 mt-0.5 shrink-0 text-wine" />
                    <span className="text-taupe">
                      It keeps growing past the original injury line
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 mt-0.5 shrink-0 text-wine" />
                    <span className="text-taupe">
                      It feels itchy, sore, tight, or "pulling"
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 mt-0.5 shrink-0 text-wine" />
                    <span className="text-taupe">
                      It becomes raised and shiny
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 mt-0.5 shrink-0 text-wine" />
                    <span className="text-taupe">
                      It changes colour (pink, red, purple, brown), depending on
                      your skin tone
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* When Should You Treat - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-6 font-georgia text-brown"
            >
              When Should You Treat a Keloid?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-taupe">
              Treat it when:
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              variants={scaleIn}
              className="p-6 rounded-xl bg-glass backdrop-blur-sm text-center"
            >
              <p className="font-medium text-brown">it is growing</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="p-6 rounded-xl bg-glass backdrop-blur-sm text-center"
            >
              <p className="font-medium text-brown">it is painful or itchy</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="p-6 rounded-xl bg-glass backdrop-blur-sm text-center"
            >
              <p className="font-medium text-brown">
                it affects confidence (visible areas like face, chest, neck)
              </p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="p-6 rounded-xl bg-glass backdrop-blur-sm text-center"
            >
              <p className="font-medium text-brown">
                it limits movement (for example, near joints)
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-lg italic text-rose"
          >
            Early treatment usually gives a smoother, easier result than waiting
            until it becomes thick and hard.
          </motion.p>
        </div>
      </motion.section>

      {/* Keloid Treatment Options - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-georgia text-brown">
              Keloid Treatment Options in Malaysia
            </h2>
            <p className="text-lg text-taupe">(What Actually Works)</p>
          </motion.div>

          {/* 1) Keloid Injections */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 p-8 rounded-2xl bg-cream"
          >
            <div className="flex items-center gap-4 mb-4">
              <Droplet className="w-10 h-10 text-wine" />
              <h3 className="text-2xl font-semibold text-brown">
                1) Keloid Injections (Steroid injections)
              </h3>
            </div>
            <p className="text-taupe mb-4">
              This is one of the most common first-line treatments.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-brown mb-2">How it helps:</h4>
                <p className="text-taupe">
                  Steroids (often triamcinolone) reduce inflammation and slow
                  collagen overgrowth so the keloid can soften and flatten over
                  time.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-brown mb-2">How often:</h4>
                <p className="text-taupe">
                  Many protocols use injections every 4 to 6 weeks, and you may
                  need several sessions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-brown mb-2">
                  What it feels like:
                </h4>
                <p className="text-taupe">
                  A quick injection with some pressure. Most patients describe
                  it as uncomfortable but tolerable.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-brown mb-2">
                  Possible side effects:
                </h4>
                <p className="text-taupe">
                  skin thinning, spider veins, and changes in skin colour (hypo
                  or hyperpigmentation).
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2) Silicone gel or silicone sheets */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 p-8 rounded-2xl bg-cream"
          >
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-10 h-10 text-wine" />
              <h3 className="text-2xl font-semibold text-brown">
                2) Silicone gel or silicone sheets (home support that matters)
              </h3>
            </div>
            <p className="text-taupe mb-4">
              Silicone sheets can help flatten keloids and are often used:
            </p>
            <ul className="list-disc pl-6 mb-4 text-taupe">
              <li>on early scars to reduce keloid risk</li>
              <li>after in-clinic procedures to reduce recurrence</li>
            </ul>
            <p className="text-taupe">
              It works best when you use it consistently for weeks to months. It
              is simple, but many people quit too early.
            </p>
          </motion.div>

          {/* 3) Cryotherapy */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 p-8 rounded-2xl bg-cream"
          >
            <div className="flex items-center gap-4 mb-4">
              <ThermometerSnowflake className="w-10 h-10 text-wine" />
              <h3 className="text-2xl font-semibold text-brown">
                3) Cryotherapy (freezing)
              </h3>
            </div>
            <p className="text-taupe mb-4">
              Cryotherapy uses liquid nitrogen to freeze scar tissue.
            </p>
            <p className="text-taupe mb-4">
              Mayo Clinic notes small keloids may be reduced by cryotherapy, but
              repeat sessions can be needed, and hypopigmentation is a possible
              side effect.
            </p>
            <p className="text-taupe mb-4">
              For deeper or stubborn keloids, "intralesional cryotherapy" has
              shown volume reduction and symptom relief in studies, but
              persistent hypopigmentation can be an issue, especially in darker
              Fitzpatrick skin types (4-6).
            </p>
            <p className="text-taupe font-medium">
              Best use in real life: often combined with injections, because
              combination approaches can work better than one method alone.
            </p>
          </motion.div>

          {/* 4) Laser treatment */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 p-8 rounded-2xl bg-cream"
          >
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="w-10 h-10 text-wine" />
              <h3 className="text-2xl font-semibold text-brown">
                4) Laser treatment (for redness, texture, thick scars)
              </h3>
            </div>
            <p className="text-taupe mb-4">
              Lasers do not "erase" a keloid instantly. They are usually used
              to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-taupe">
              <li>reduce redness</li>
              <li>smooth texture</li>
              <li>support flattening when combined with injections</li>
            </ul>
            <p className="text-taupe">
              Some case reports and clinic protocols discuss combining
              fractional CO2 laser with steroid injections for difficult
              keloids.
            </p>
          </motion.div>

          {/* 5) Surgery (excision) */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 p-8 rounded-2xl bg-cream"
          >
            <div className="flex items-center gap-4 mb-4">
              <Scissors className="w-10 h-10 text-wine" />
              <h3 className="text-2xl font-semibold text-brown">
                5) Surgery (excision) with strict aftercare
              </h3>
            </div>
            <p className="text-taupe mb-4">
              Surgery can remove bulky keloids, but surgery alone often triggers
              regrowth. That is why doctors usually combine it with other
              treatments such as steroids, cryotherapy, pressure therapy, or
              radiotherapy in selected cases.
            </p>
            <p className="text-taupe mb-4">
              A 2025 follow-up report still found recurrence can happen even
              with surgery plus radiotherapy, which shows how stubborn keloids
              can be.
            </p>
            <p className="text-taupe mb-2">
              So in Malaysia, surgery is usually considered when:
            </p>
            <ul className="list-disc pl-6 mb-4 text-taupe">
              <li>the keloid is large</li>
              <li>it is painful</li>
              <li>it keeps growing despite injections</li>
              <li>it affects movement</li>
              <li>...and the clinic can commit to the aftercare plan.</li>
            </ul>
          </motion.div>

          {/* 6) Pressure therapy */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 p-8 rounded-2xl bg-cream"
          >
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-10 h-10 text-wine" />
              <h3 className="text-2xl font-semibold text-brown">
                6) Pressure therapy (especially for ear keloids)
              </h3>
            </div>
            <p className="text-taupe mb-4">
              Pressure earrings are often recommended for ear keloids. The
              American Academy of Dermatology notes pressure devices can work,
              but they must be worn 12 to 20 hours a day for months, and can be
              uncomfortable.
            </p>
            <p className="text-taupe">
              This is why many people do best with a plan that matches real
              life, not perfect life.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What Results Can You Expect - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-georgia text-brown">
                What Results Can You Expect?
              </h2>
              <p className="text-lg italic text-rose">
                Let's be honest and practical.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-brown">
                  The goal is usually:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="text-taupe">flatter scar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="text-taupe">softer texture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="text-taupe">less itch and pain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="text-taupe">less redness</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="text-taupe">lower chance of regrowth</span>
                  </li>
                </ul>

                <p className="mt-6 p-4 rounded-lg italic bg-light text-brown">
                  Not every keloid becomes "invisible." But many keloids become
                  far less noticeable and far less annoying.
                </p>

                <p className="font-medium text-wine">
                  Also, keloids can recur even after successful treatment, so
                  long-term maintenance matters.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <img
                src="/images/clinic/keloid-result.png"
                alt="Keloid treatment results"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 p-4 rounded-lg bg-glass backdrop-blur-sm">
                <p className="text-sm font-semibold text-brown">
                  Before • After
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* A Simple Best Plan Approach - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-georgia text-brown">
              A Simple "Best Plan" Approach
            </h2>
            <p className="text-lg text-taupe">
              At Nexus Clinic Kuala Lumpur, the most realistic approach is to
              treat keloids like a project:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              variants={scaleIn}
              className="relative p-8 rounded-xl bg-cream"
            >
              <div className="absolute -top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-wine">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2 text-brown">
                Step 1: Diagnose properly
              </h3>
              <p className="text-taupe">
                We confirm whether it is a keloid or hypertrophic scar, then
                measure thickness, redness, symptoms, and location.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={scaleIn}
              className="relative p-8 rounded-xl bg-cream"
            >
              <div className="absolute -top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-wine">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2 text-brown">
                Step 2: Choose the right combination
              </h3>
              <p className="text-taupe">
                AAD notes combination approaches often work best and includes
                options like steroid injections, cryotherapy, silicone sheets,
                pressure therapy, and surgery with follow-up cryotherapy.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={scaleIn}
              className="relative p-8 rounded-xl bg-cream"
            >
              <div className="absolute -top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-wine">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-2 text-brown">
                Step 3: Protect your results
              </h3>
              <p className="text-taupe">
                Silicone, pressure, scar care, and follow-ups are how you keep
                it from coming back.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Keloid Treatment Cost - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-georgia text-brown">
                Keloid Treatment Cost in Malaysia (Kuala Lumpur)
              </h2>
              <p className="text-taupe">
                Costs depend on size, location, and how many sessions you need.
              </p>
              <p className="text-sm italic text-rose">
                Here are published ranges from KL and Malaysia clinics to help
                set expectations:
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              <motion.div
                variants={scaleIn}
                className="flex justify-between items-center p-4 rounded-lg bg-light"
              >
                <span className="font-medium text-brown">
                  Keloid steroid injections:
                </span>
                <span className="text-lg font-semibold text-wine">
                  often around RM150 to RM500 per session
                </span>
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="flex justify-between items-center p-4 rounded-lg bg-light"
              >
                <span className="font-medium text-brown">Laser treatment:</span>
                <span className="text-lg font-semibold text-wine">
                  often around RM500 to RM1,500 per session (varies by laser
                  type and area)
                </span>
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="flex justify-between items-center p-4 rounded-lg bg-light"
              >
                <span className="font-medium text-brown">Cryotherapy:</span>
                <span className="text-lg font-semibold text-wine">
                  some clinics list around RM250 to RM500 per session
                </span>
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="flex justify-between items-center p-4 rounded-lg bg-light"
              >
                <span className="font-medium text-brown">
                  Surgical excision:
                </span>
                <span className="text-lg font-semibold text-wine">
                  often RM1,000+ depending on complexity, plus aftercare
                  sessions
                </span>
              </motion.div>

              <p className="mt-4 text-sm italic text-taupe">
                A good clinic will quote based on your scar size and expected
                number of sessions, not just a single "price from" number.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Competitor Review - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-georgia text-brown">
              Competitor Review
            </h2>
            <p className="text-lg text-taupe">
              What Top Clinics in Malaysia Are Doing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="text-lg font-semibold mb-2 text-brown">
                1) Price-led pages
              </h3>
              <p className="text-taupe">
                Some clinics publish price ranges per treatment, which helps
                users budget quickly.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="text-lg font-semibold mb-2 text-brown">
                2) Injection-first messaging
              </h3>
              <p className="text-taupe">
                Some clinics publish price ranges per treatment, which helps
                users budget quickly.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="text-lg font-semibold mb-2 text-brown">
                3) Laser and combination packages
              </h3>
              <p className="text-taupe">
                Several clinics highlight laser plus injection combinations to
                improve both thickness and redness.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="text-lg font-semibold mb-2 text-brown">
                4) Directory and review platforms
              </h3>
              <p className="text-taupe">
                ERUFU Care ranks clinics and shows patient reviews and service
                mentions for keloid removal in Kuala Lumpur.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-wine">
            <h3 className="text-2xl font-bold mb-4 text-white">
              How Nexus Clinic KL should stand out
            </h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  More education about recurrence and prevention, so you do not
                  waste money repeating the wrong approach.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  Better guidance for Malaysian skin tones, especially pigment
                  risk with cryotherapy and steroid injections.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  A clear plan: flatten, calm symptoms, then improve texture,
                  then prevent return.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Keloid Prevention Tips - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <img
                src="/images/clinic/keloid-example.png"
                alt="Keloid prevention"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-georgia text-brown">
                Keloid Prevention Tips
              </h2>
              <p className="text-lg italic text-rose">
                (After Acne, Surgery, Piercing)
              </p>
              <p className="text-taupe">
                You cannot fully control keloids if your skin is prone, but you
                can reduce risk:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 mt-0.5 shrink-0 text-wine" />
                  <span className="text-brown">
                    Treat acne early to reduce deep inflammation scars
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 mt-0.5 shrink-0 text-wine" />
                  <span className="text-brown">
                    Avoid unnecessary piercings if you already have keloid
                    history
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 mt-0.5 shrink-0 text-wine" />
                  <span className="text-brown">
                    Use silicone gel or sheets after injury when advised
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 mt-0.5 shrink-0 text-wine" />
                  <span className="text-brown">
                    Do not pick scabs or squeeze pimples
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 mt-0.5 shrink-0 text-wine" />
                  <span className="text-brown">
                    Protect healing wounds from friction and sun (sun can darken
                    scars)
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section - ALL 14 QUESTIONS INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-light"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-georgia text-brown">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* FAQ 1 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                1) Can keloids go away naturally?
              </h3>
              <p className="text-sm text-taupe">
                They can sometimes soften, but Mayo Clinic notes keloids can
                last for years and can recur.
              </p>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                2) What is the best treatment for keloid scars?
              </h3>
              <p className="text-sm text-taupe">
                There is no single best option. AAD notes combination treatment
                often works best, commonly using injections, silicone,
                cryotherapy, and sometimes surgery with aftercare.
              </p>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                3) Do keloid injections work?
              </h3>
              <p className="text-sm text-taupe">
                Steroid injections are widely used and can reduce thickness and
                symptoms, but response varies and repeat sessions are usually
                needed.
              </p>
            </motion.div>

            {/* FAQ 4 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                4) How many steroid injections do I need for a keloid?
              </h3>
              <p className="text-sm text-taupe">
                Mayo Clinic notes you may need monthly injections for up to six
                months to see flattening.
              </p>
            </motion.div>

            {/* FAQ 5 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                5) Do keloid injections hurt?
              </h3>
              <p className="text-sm text-taupe">
                They can sting or feel tight pressure, especially in sensitive
                areas, but the session is quick. (Your clinician can guide pain
                control options.)
              </p>
            </motion.div>

            {/* FAQ 6 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                6) Can laser remove keloids permanently?
              </h3>
              <p className="text-sm text-taupe">
                Laser can help with redness and texture, but keloids can recur.
                Lasers are often used as part of a combination plan, not as a
                one-step cure.
              </p>
            </motion.div>

            {/* FAQ 7 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                7) Is cryotherapy safe for dark skin in Malaysia?
              </h3>
              <p className="text-sm text-taupe">
                It can work, but hypopigmentation is a known risk, and studies
                note this can be persistent in darker Fitzpatrick skin types.
              </p>
            </motion.div>

            {/* FAQ 8 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                8) What are the side effects of steroid injections for keloids?
              </h3>
              <p className="text-sm text-taupe">
                Possible side effects include skin thinning (atrophy), colour
                changes, and visible small vessels in the area.
              </p>
            </motion.div>

            {/* FAQ 9 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                9) Do keloids come back after surgery?
              </h3>
              <p className="text-sm text-taupe">
                They can. Keloids have high recurrence risk, which is why
                surgery is usually combined with other therapies and strict
                aftercare.
              </p>
            </motion.div>

            {/* FAQ 10 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                10) How much does keloid removal cost in Kuala Lumpur?
              </h3>
              <p className="text-sm text-taupe">
                Published clinic ranges commonly show steroid injections around
                RM150 to RM500 per session and laser around RM500 to RM1,500 per
                session, depending on scar size and method.
              </p>
            </motion.div>

            {/* FAQ 11 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                11) Are keloids dangerous or cancerous?
              </h3>
              <p className="text-sm text-taupe">
                Mayo Clinic states keloids are not cancerous.
              </p>
            </motion.div>

            {/* FAQ 12 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                12) What is the fastest way to flatten a keloid?
              </h3>
              <p className="text-sm text-taupe">
                Steroid injections are commonly used early to flatten and reduce
                symptoms, sometimes paired with cryotherapy to improve results.
              </p>
            </motion.div>

            {/* FAQ 13 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                13) Can keloids form after ear piercing?
              </h3>
              <p className="text-sm text-taupe">
                Yes. Ear lobes are a common keloid site, and treatment often
                includes injections every 4 to 6 weeks and sometimes pressure
                earrings.
              </p>
            </motion.div>

            {/* FAQ 14 */}
            <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-cream">
              <h3 className="font-semibold mb-2 text-brown">
                14) Is silicone gel really effective for keloids?
              </h3>
              <p className="text-sm text-taupe">
                AAD notes silicone gel sheets may help flatten keloids and can
                also be used to prevent keloid formation after injury.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA - ALL TEXT INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-wine"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-white"
          >
            <p className="text-lg mb-8 text-white/90">
              If you're searching for keloid treatment in Malaysia or keloid
              removal in Kuala Lumpur, start with a proper assessment and a plan
              that matches your scar and your skin type.
            </p>

            <motion.div variants={scaleIn} className="space-y-4">
              <p className="font-semibold text-xl">Nexus Clinic Kuala Lumpur</p>
              <p className="flex items-center justify-center gap-2 text-white/90">
                <MapPin className="w-5 h-5" />
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-12 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-2xl bg-white text-wine"
              >
                Schedule Your Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
