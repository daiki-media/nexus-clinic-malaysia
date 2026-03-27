"use client";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Award,
  AlertTriangle,
} from "lucide-react";

interface TearTroughFillerProps {
  locale: string;
}

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";

export default function TearTroughFiller({ locale }: TearTroughFillerProps) {
  return (
    <div className="min-h-screen bg-light font-['Inter',sans-serif]">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="relative overflow-hidden bg-linear-to-b from-cream to-light py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl  text-brown mb-4 font-georgia">
              Tear Trough Filler in Kuala Lumpur, Malaysia
              <span className="block text-wine text-2xl md:text-3xl mt-2">
                (Under Eye Filler)
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-taupe max-w-3xl mx-auto italic">
              Look rested again, even on your busiest weeks.
            </p>
          </motion.div>

          <motion.div variants={scaleIn} className="text-center mb-12">
            <p className="text-lg text-brown max-w-2xl mx-auto">
              Tear trough filler softens under-eye hollows so your face looks
              fresher, not "done." At Nexus Clinic Kuala Lumpur, we focus on
              natural correction that still looks like you.
            </p>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-taupe/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-wine" />
                <span className="text-brown">
                  Established aesthetic clinic since 2001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-wine" />
                <span className="text-brown">
                  Located near KLCC at Wisma UOA II, Jalan Pinang
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-wine" />
                <span className="text-brown">
                  Open Mon-Sat (clinic hours may vary by day)
                </span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-rose font-medium">
                Doctor-led care and patient-first service focus
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Understanding Dark Circles Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl md:text-4xl  text-brown mb-6 font-georgia">
                If your "dark circles" are really shadows, filler can help
              </h2>
              <p className="text-brown mb-4 leading-relaxed">
                A lot of people in Kuala Lumpur search for "dark circles
                treatment" but what they actually see is shadowing from a hollow
                under-eye area. When light hits that dip, it makes you look
                tired even after sleep. That is exactly what tear trough filler
                is designed to improve.
              </p>
              <p className="text-brown leading-relaxed bg-cream p-4 rounded-lg">
                <span className="font-semibold text-wine">Important:</span> If
                your darkness is mostly pigmentation (brown or bluish tone),
                filler may not be the only answer. In those cases, doctors often
                combine approaches like pigment laser or skin boosters based on
                what's causing the problem.
              </p>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Under eye anatomy showing hollows and shadows"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-rose text-white p-3 rounded-lg shadow-lg">
                <p className="text-sm font-medium">
                  Understanding your under-eye structure
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is Tear Trough Filler */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl  text-brown mb-4 font-georgia">
              What is tear trough filler?
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-brown text-lg leading-relaxed">
              Tear trough filler (also called under eye filler) is a small
              amount of dermal filler placed in the under-eye hollow to smooth
              the lid-to-cheek transition. Most clinics use hyaluronic acid (HA)
              filler for this area because it can look soft and is reversible in
              many cases.
            </p>
            <p className="text-brown mt-4 text-sm italic">
              Dermal fillers are medical devices used to add volume and improve
              facial contours. Results and how long they last depend on the
              product, your anatomy, and the injection area.
            </p>
          </motion.div>

          {/* What concerns it improves */}
          <motion.div variants={fadeInUp} className="mt-12">
            <h3 className="text-2xl  text-wine mb-6 text-center font-georgia">
              What concerns can it improve?
            </h3>
            <p className="text-center text-brown mb-6">
              Tear trough filler can help when your under-eye concerns are
              mainly structural:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                "Under-eye hollowness or 'sunken' look",
                "Dark circles caused by shadows (not pure pigment)",
                "A tired look in photos, especially under office lighting",
                "A harsh under-eye to cheek transition",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInLeft}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-brown">{item}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-brown mt-4">
              Clinics commonly describe it as a non-surgical way to brighten the
              eye area and restore a fresher look.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Who is it best for */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl  text-brown mb-8 text-center font-georgia"
          >
            Who is it best for?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-wine mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> You may be a good fit if
                you:
              </h3>
              <ul className="space-y-3">
                {[
                  "Have mild to moderate hollowness",
                  "Want a subtle change (not a dramatic makeover)",
                  "Want minimal downtime and a quick, office-based treatment",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-brown">
                    <span className="text-rose">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-cream p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-wine mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> You may not be the best fit
                if you have:
              </h3>
              <ul className="space-y-3">
                {[
                  "Significant eye bags, very loose skin, or 'festoons' (swelling pockets)",
                  "Very thin under-eye skin where filler is more likely to show",
                  "Active infection, uncontrolled inflammation, or certain medical conditions that make injectables risky",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-brown">
                    <span className="text-rose">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-brown mt-6 italic"
          >
            A proper assessment matters here, because under-eye filler is one of
            those treatments where "a little too much" can look puffy.
          </motion.p>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl  text-brown mb-4 text-center font-georgia"
          >
            Tear trough filler results: what it looks like in real life
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-brown mb-8 max-w-2xl mx-auto"
          >
            The best results usually look like this: your face still looks
            natural, but people stop asking, "Are you tired?"
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto"
          >
            <p className="text-brown mb-3">
              Many people notice improvement immediately, but the filler often
              settles over the next few days. Mild swelling or bruising can
              happen and usually eases within days.
            </p>
            <p className=" font-medium text-wine">
              How long does tear trough filler last? A common range you'll see
              from clinics is around 9-12 months, sometimes longer depending on
              the product and individual metabolism.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Treatment Experience */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl  text-brown mb-8 text-center font-georgia"
          >
            The treatment experience at Nexus Clinic Kuala Lumpur
          </motion.h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-wine mb-3">
                1) Consultation and facial assessment
              </h3>
              <p className="text-brown mb-2">We look at:</p>
              <ul className="list-disc list-inside text-brown space-y-1">
                <li>Whether the darkness is shadow, pigment, or both</li>
                <li>Cheek support (sometimes the cheek needs support first)</li>
                <li>Skin thickness and swelling tendency</li>
                <li>Your "natural baseline" so we don't overfill</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-cream p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-wine mb-3">
                2) Numbing and injection
              </h3>
              <p className="text-brown">
                Detailed information about the numbing process and injection
                technique will be discussed during your consultation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-wine mb-3">
                3) Aftercare plan
              </h3>
              <p className="text-brown">
                You'll get simple instructions to reduce swelling and bruising.
                Most people return to normal routines fast, but you should plan
                your appointment away from major events if you bruise easily.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pros and Cons */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl  text-brown mb-8 text-center font-georgia"
          >
            Pros and cons (honest overview)
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-wine mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Pros
              </h3>
              <ul className="space-y-2">
                {[
                  "Fast, non-surgical improvement",
                  "Minimal downtime for many patients",
                  "Can soften a 'tired' look without changing your identity",
                  "HA fillers are widely used and can be adjusted in many cases",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-rose shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-wine mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Cons
              </h3>
              <ul className="space-y-2">
                {[
                  "Not ideal for every type of dark circle (pigment-only cases may need other treatments)",
                  "Risk of puffiness if overfilled",
                  "Results are temporary, so maintenance is usually needed",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-brown">
                    <span className="text-rose text-lg">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Safety Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl  text-brown mb-4 text-center font-georgia"
          >
            Side effects and safety: what you should know
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-brown mb-8">
            Most side effects are mild and short term: redness, swelling,
            tenderness, and bruising.
          </motion.p>

          <motion.div
            variants={scaleIn}
            className="bg-cream p-6 rounded-xl max-w-4xl mx-auto mb-8"
          >
            <h3 className="text-xl font-semibold text-wine mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Rare but serious risks
              (important)
            </h3>
            <p className="text-brown mb-4">
              Dermal fillers can rarely cause vascular occlusion, meaning blood
              flow is blocked. This can lead to skin injury, and in very rare
              cases, blindness.
            </p>
            <p className="text-brown italic">
              A major ophthalmology guideline notes filler-related blindness is
              extremely rare but possible, and early recognition and treatment
              matter, especially with HA fillers.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-wine text-white p-6 rounded-xl max-w-4xl mx-auto mb-8"
          >
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" /> Warning signs after filler
              that need urgent medical help:
            </h3>
            <ul className="space-y-2">
              <li>• Severe or worsening pain</li>
              <li>• Skin turning pale, grey, or blotchy</li>
              <li>
                • Vision changes, eye pain, drooping eyelid, severe headache
              </li>
            </ul>
            <p className="mt-4 font-bold">
              If anything feels "not normal," treat it as urgent.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-cream p-6 rounded-xl max-w-4xl mx-auto"
          >
            <p className="text-brown mb-3">
              Also worth knowing: In the US, the FDA lists some facial areas
              (including the area around the eyes) as not approved injection
              sites for dermal fillers, so under-eye treatment is considered
              off-label there.
            </p>
            <p className="text-brown">
              In practice, experienced medical injectors still perform tear
              trough correction based on training, anatomy knowledge, and
              careful technique, but it reinforces why you should choose a
              reputable clinic and not chase the cheapest deal.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl  text-brown mb-4 text-center font-georgia"
          >
            How much does tear trough filler cost in Kuala Lumpur and Malaysia?
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-brown mb-8">
            Prices vary by clinic location, doctor experience, product brand,
            and how much filler you need.
          </motion.p>

          <motion.div
            variants={scaleIn}
            className="bg-white p-6 rounded-xl max-w-4xl mx-auto mb-8"
          >
            <p className="text-brown mb-4">
              Here are real-world Malaysia ranges seen on local clinic pricing
              references:
            </p>
            <ul className="space-y-2 text-brown">
              <li>
                • RM 1,800 to RM 3,000 per syringe is a common Kuala Lumpur
                range cited by clinics.
              </li>
              <li>
                • Some clinics quote under-eye tear trough pricing around RM
                1,800 to RM 2,500 depending on severity and product.
              </li>
              <li>
                • Other Malaysia pricing tables show under-eye ranges starting
                roughly RM 1,300+ in some settings.
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-wine mb-3">
              What usually changes the price
            </h3>
            <ul className="space-y-2 text-brown">
              <li>
                • Depth of the hollow and whether both sides need equal
                correction
              </li>
              <li>
                • Product choice (some are designed to be softer for delicate
                areas)
              </li>
              <li>
                • Whether cheek support or skin treatments are recommended
                alongside filler
              </li>
              <li>• Whether you need a review visit or touch-up plan</li>
            </ul>
            <p className="mt-4 text-brown italic">
              At Nexus Clinic Kuala Lumpur, the best way to get an accurate
              figure is an in-person assessment, because under-eye work should
              be planned, not guessed.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl  text-brown mb-8 text-center font-georgia"
          >
            Tear trough filler vs other under-eye treatments
          </motion.h2>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                title: "Tear trough filler vs eye cream",
                content:
                  "Creams can help hydration and fine texture, but they cannot rebuild volume in a hollow.",
              },
              {
                title: "Tear trough filler vs laser",
                content:
                  "Laser can help pigment and skin quality, but it will not 'fill' a depression. Many patients do better with a combined plan when pigmentation is also present.",
              },
              {
                title: "Tear trough filler vs skin booster",
                content:
                  "Skin boosters are great for glow and hydration, but they are not the same as structural support. Some clinics combine both depending on your skin and goals.",
              },
              {
                title: "Tear trough filler vs surgery (blepharoplasty)",
                content:
                  "If you have prominent eye bags or significant laxity, surgery may be the more appropriate option. Filler is best when the main issue is hollowing and shadowing, not heavy bags.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="bg-cream p-5 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-wine mb-2">
                  {item.title}
                </h3>
                <p className="text-brown">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Competitor Analysis */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl  text-brown mb-8 text-center font-georgia"
          >
            What top competitors in Malaysia are doing, and what they often miss
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-wine mb-3">
                What they do well:
              </h3>
              <ul className="space-y-2 text-brown">
                <li>
                  • They explain what tear trough filler is and who it's for
                </li>
                <li>• They mention typical longevity (around 9-12 months)</li>
                <li>• They publish price guidance that helps users budget</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-wine mb-3">
                What many still miss:
              </h3>
              <ul className="space-y-2 text-brown">
                <li>
                  • Clear explanation of shadow vs pigment and when filler will
                  not fix "dark circles"
                </li>
                <li>
                  • A simple safety section that explains warning signs and why
                  injector skill matters
                </li>
                <li>
                  • A realistic downtime timeline (what you look like Day 1 to
                  Day 7)
                </li>
                <li>
                  "How to avoid puffiness" explained in a patient-friendly way
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-brown mt-6 font-medium"
          >
            This is exactly where Nexus Clinic Kuala Lumpur positions the
            experience: clarity, conservative planning, and natural results.
          </motion.p>
        </div>
      </motion.section>

      {/* Aftercare Tips */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl  text-brown mb-4 text-center font-georgia"
          >
            Aftercare tips (to reduce swelling and bruising)
          </motion.h2>

          <motion.div
            variants={scaleIn}
            className="bg-cream p-6 rounded-xl max-w-3xl mx-auto"
          >
            <p className="text-brown mb-3">
              These are common, practical guidelines many clinics give after
              filler:
            </p>
            <ul className="space-y-2 text-brown">
              <li>• Avoid heavy exercise for 24 hours</li>
              <li>• Avoid alcohol for 24 hours if you bruise easily</li>
              <li>• Keep the area clean and avoid rubbing</li>
              <li>• Use a cold compress if advised</li>
              <li className="font-semibold text-wine">
                • If you have unusual pain, skin colour changes, or vision
                symptoms, seek urgent care
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl  text-brown mb-8 text-center font-georgia"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Results and Suitability */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-wine mb-4">
                Results and suitability
              </h3>
              <div className="space-y-4">
                {[
                  {
                    q: "Does tear trough filler remove dark circles?",
                    a: "It can, but only when dark circles are mainly caused by shadowing from volume loss. If the darkness is mostly pigment, you may need other treatments like laser, skincare, or a combination plan. Many Malaysia clinic guides explain this shadow-versus-pigment difference because it affects results.",
                  },
                  {
                    q: "How long does tear trough filler last?",
                    a: "Many clinics quote around 9-12 months as a typical range, though some people last longer and some need earlier maintenance. Lifestyle, metabolism, and product choice all matter.",
                  },
                  {
                    q: "How many ml do I need for under eye filler?",
                    a: "It depends on your hollow depth and facial structure. Under-eye correction is usually done conservatively, and your doctor may recommend supporting the cheek area instead of adding too much under the eye. A consultation is the safest way to plan this.",
                  },
                  {
                    q: "When will I see the final result?",
                    a: "You may see improvement immediately, but mild swelling can hide the final look for a few days. Most people feel the filler 'settles' within the first week.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-taupe/20 last:border-0 pb-4 last:pb-0"
                  >
                    <p className="font-semibold text-brown">{faq.q}</p>
                    <p className="text-brown mt-1">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Comfort, downtime, and aftercare */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-wine mb-4">
                Comfort, downtime, and aftercare
              </h3>
              <div className="space-y-4">
                {[
                  {
                    q: "Is under eye filler painful?",
                    a: "Discomfort is usually mild. Clinics often use numbing and gentle technique, and many patients describe it as tolerable rather than painful.",
                  },
                  {
                    q: "Is there downtime after tear trough filler?",
                    a: "Downtime is usually minimal, but mild swelling or bruising can happen and typically resolves within days. If you bruise easily, plan your appointment away from big events.",
                  },
                  {
                    q: "Can I wear makeup after under eye filler?",
                    a: "Many providers recommend waiting a short period to avoid irritation and reduce infection risk. Your doctor will give you specific timing based on your skin and injection sites.",
                  },
                  {
                    q: "Why do some people look puffy after tear trough filler?",
                    a: "Puffiness can happen when the area is overfilled, when the product choice is not ideal for that skin type, or when swelling is retained. This is why conservative planning is so important for under-eye treatments.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-taupe/20 last:border-0 pb-4 last:pb-0"
                  >
                    <p className="font-semibold text-brown">{faq.q}</p>
                    <p className="text-brown mt-1">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cost and value */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-wine mb-4">
                Cost and value in Malaysia
              </h3>
              <div className="space-y-4">
                {[
                  {
                    q: "How much does tear trough filler cost in Kuala Lumpur?",
                    a: "You will commonly see ranges like RM 1,800 to RM 3,000 per syringe in KL pricing guides, with some clinics listing tear trough packages around RM 1,800 to RM 2,500 depending on severity and product.",
                  },
                  {
                    q: "Why is under eye filler more expensive at some clinics?",
                    a: "Price often reflects doctor experience, product quality, clinic standards, and the complexity of the case. Under-eye work is a precision area, so cost should be weighed against safety and outcomes.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-taupe/20 last:border-0 pb-4 last:pb-0"
                  >
                    <p className="font-semibold text-brown">{faq.q}</p>
                    <p className="text-brown mt-1">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Safety FAQs */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-wine mb-4">Safety</h3>
              <div className="space-y-4">
                {[
                  {
                    q: "Is tear trough filler safe?",
                    a: "For most patients, side effects are mild like swelling and bruising. But fillers can rarely cause serious complications such as vascular occlusion, and very rarely blindness. That is why injector training and emergency readiness matter.",
                  },
                  {
                    q: "What are the warning signs of a serious complication?",
                    a: "Severe pain, skin colour changes (pale, grey, blotchy), or any vision symptoms should be treated as urgent. Ophthalmology guidance stresses early recognition and treatment, especially with HA fillers.",
                  },
                  {
                    q: "Can under eye filler be dissolved?",
                    a: "Many tear trough treatments use HA filler, which can often be adjusted or dissolved by a medical professional using an enzyme, if clinically appropriate. This is one reason HA fillers are commonly chosen for delicate areas.",
                  },
                  {
                    q: "Is tear trough filler FDA approved?",
                    a: "The FDA explains dermal fillers are approved for certain facial uses, but it also notes some areas like the periorbital region (around the eyes) are not approved injection sites in the US. This highlights why your provider's medical judgement, anatomy knowledge, and careful technique are crucial.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-taupe/20 last:border-0 pb-4 last:pb-0"
                  >
                    <p className="font-semibold text-brown">{faq.q}</p>
                    <p className="text-brown mt-1">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl  text-brown mb-4 font-georgia"
          >
            Book your consultation at Nexus Clinic Kuala Lumpur
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="bg-cream p-6 rounded-xl max-w-2xl mx-auto"
          >
            <p className="text-brown mb-2">
              Address: LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang,
              50450 Kuala Lumpur
            </p>
            <p className="text-brown mb-2">
              Hours: Mon-Sat (hours may vary by day)
            </p>
            <p className="font-semibold text-wine">
              Contact: 03-21635699 / 016-7025699
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
