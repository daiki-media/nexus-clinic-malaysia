"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  Heart,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Droplets,
  Calendar,
  Award,
  MapPin,
  ArrowRight,
  Star,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";

interface NoseFillerProps {
  locale: string;
}

export default function NoseFiller({ locale }: NoseFillerProps) {
  return (
    <div className="min-h-screen bg-light font-['Inter']">
      {/* Hero Section - SEMUA KATA ADA */}
      <section className="relative overflow-hidden bg-linear-to-b from-cream to-light">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 mix-blend-overlay"></div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 py-20 lg:py-28"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <motion.div variants={fadeInUp} className="inline-block">
                <span className="bg-wine text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide">
                  Non-Surgical Rhinoplasty
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl lg:text-6xl font-bold text-brown font-['Georgia'] leading-tight"
              >
                A softer bump, a cleaner bridge,
                <span className="text-wine block">
                  a more balanced profile.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-taupe leading-relaxed"
              >
                Without surgery. Nose filler is a quick, non-surgical way to
                refine your nose shape in minutes. You stay you. Just more
                polished from the side and the front.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book Your Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-wine text-wine px-8 py-4 rounded-full font-medium hover:bg-wine hover:text-white transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Elegant profile view showing nose filler results"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trust at a glance - SEMUA KATA ADA */}
      <section className="py-16 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-bold text-brown mb-8 text-center"
          >
            Trust at a glance (Nexus Clinic KL)
          </motion.h2>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-cream p-8 rounded-2xl text-center group cursor-pointer"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-wine" />
              </div>
              <p className="text-brown font-medium">
                Established aesthetic clinic in Kuala Lumpur (founded in 2001)
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-cream p-8 rounded-2xl text-center group cursor-pointer"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-wine" />
              </div>
              <p className="text-brown font-medium">
                Located at LG 10, Wisma UOA II, Jalan Pinang, KL (near KL city
                centre)
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-cream p-8 rounded-2xl text-center group cursor-pointer"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-wine" />
              </div>
              <p className="text-brown font-medium">
                Non-surgical aesthetic focus with consultation-led planning and
                follow-up care
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* What is nose filler - SEMUA KATA ADA */}
      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInRight} className="order-2 lg:order-1">
              <img
                src="/images/skin/acne-treatment.webp"
                alt="Nose filler procedure demonstration"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="order-1 lg:order-2 space-y-6"
            >
              <h2 className="text-4xl font-bold text-brown font-['Georgia']">
                What is nose filler{" "}
                <span className="text-wine">
                  (also called a "liquid nose job")
                </span>
              </h2>

              <p className="text-lg text-taupe leading-relaxed">
                Nose filler is a non-surgical procedure where a clinician
                injects dermal filler (commonly hyaluronic acid) to reshape the
                look of the nose.
              </p>

              <p className="text-lg font-semibold text-brown">
                Most people use it to:
              </p>

              <div className="bg-cream p-6 rounded-2xl">
                <ul className="space-y-4">
                  {[
                    "Build a higher-looking bridge",
                    "Smooth a small bump",
                    "Improve minor asymmetry",
                    "Give the tip a subtle lift or support (for the right nose shape)",
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine" />
                      <span className="text-brown">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What nose filler cannot do - SEMUA KATA ADA */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-brown font-['Georgia'] mb-6">
              What nose filler cannot do
            </h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-brown text-center mb-8"
          >
            Nose filler is best for small, external shape refinements. It does
            not change bone or cartilage. And if your goal is "make my nose
            smaller", filler usually cannot deliver that (it adds volume).
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe text-center italic mb-8"
          >
            It also does not fix breathing issues.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <XCircle className="w-8 h-8" />,
                title: "Cannot change bone or cartilage",
                desc: "It only works with soft tissue",
              },
              {
                icon: <XCircle className="w-8 h-8" />,
                title: "Cannot fix breathing issues",
                desc: "Functional problems need surgical solutions",
              },
              {
                icon: <XCircle className="w-8 h-8" />,
                title: "Cannot make nose smaller",
                desc: "It adds volume, it doesn't reduce size",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl text-center shadow-lg"
              >
                <div className="text-wine mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-brown mb-2">
                  {item.title}
                </h3>
                <p className="text-taupe">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Who nose filler is for - SEMUA KATA ADA */}
      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h2 className="text-4xl font-bold text-brown font-['Georgia']">
                Who nose filler is for
              </h2>
              <p className="text-lg text-taupe">(common KL patient goals)</p>

              <p className="text-lg text-brown">
                You may love nose filler if you:
              </p>

              <ul className="space-y-4">
                {[
                  "Feel your bridge looks flat in photos, especially side angles",
                  "Want a smoother line from forehead to tip",
                  "Want a 'cleaner' profile but do not want surgery",
                  "Have an event coming up and want minimal downtime",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 bg-cream p-4 rounded-xl"
                  >
                    <Star className="w-5 h-5 text-wine mt-1" />
                    <span className="text-brown">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="bg-linear-to-r from-wine to-rose p-6 rounded-2xl text-white">
                <p className="text-lg font-medium">
                  It can also suit first-timers who want a reversible option,
                  because many HA fillers can be dissolved by a clinician when
                  appropriate.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-8">
              <h2 className="text-4xl font-bold text-brown font-['Georgia'] mb-6">
                Who should avoid or delay nose filler
              </h2>

              <p className="text-lg text-brown">
                A proper consult matters. In general, you may need to delay if
                you:
              </p>

              <ul className="space-y-4">
                {[
                  "Are pregnant or breastfeeding (common clinic safety approach)",
                  "Have an active skin infection around the nose",
                  "Have a history of severe allergy reactions",
                  "Want major size reduction or functional breathing changes (surgery may fit better)",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 bg-cream p-4 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5 text-wine mt-1" />
                    <span className="text-brown">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Areas of the nose that can be treated - SEMUA KATA ADA */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-brown font-['Georgia'] mb-6">
              Areas of the nose that can be treated
            </h2>
            <p className="text-lg text-taupe">
              A skilled injector can sculpt different "micro zones," such as:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                zone: "Radix/upper bridge",
                desc: "helps the bridge look more defined",
              },
              {
                zone: "Dorsum/bridge line",
                desc: "smooths a small bump or improves profile flow",
              },
              {
                zone: "Tip support",
                desc: "subtle lift, better tip shape (case dependent)",
              },
              {
                zone: "Asymmetry correction",
                desc: "small refinements for balance",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl text-center shadow-md"
              >
                <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-brown mb-2">
                  {item.zone}
                </h3>
                <p className="text-sm text-taupe">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-brown mt-8 text-lg font-medium"
          >
            The goal is not a "copy-paste nose." It is harmony with your face.
          </motion.p>
        </motion.div>
      </section>

      {/* What to expect at Nexus Clinic - SEMUA KATA ADA */}
      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-4xl font-bold text-brown font-['Georgia']">
                What to expect at Nexus Clinic Kuala Lumpur
              </h2>

              <p className="text-lg text-taupe">
                A good nose filler treatment should feel organised, calm, and
                medical.
              </p>

              <div className="space-y-4">
                {[
                  "Consultation and facial assessment (front, side, smiling, talking)",
                  "Goal setting: 'higher bridge', 'softer bump', 'sharper profile', or 'more symmetry'",
                  "Treatment planning: product choice and conservative dosing",
                  "Numbing (if needed), then precise injections",
                  "Immediate review and aftercare guidance",
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-wine rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                      {idx + 1}
                    </div>
                    <span className="text-brown flex-1">{step}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-cream p-6 rounded-2xl mt-6">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-wine" />
                </div>
                <p className="text-brown">
                  Nexus Clinic is located in Kuala Lumpur at Wisma UOA II, Jalan
                  Pinang, which makes it convenient for many KLCC and
                  city-centre visitors.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <img
                src="/images/skin/acne-treatment.webp"
                alt="Nexus Clinic Kuala Lumpur"
                className="rounded-3xl shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Benefits of nose filler - SEMUA KATA ADA */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-brown font-['Georgia'] mb-6">
              Benefits of nose filler
            </h2>
            <p className="text-xl text-taupe">
              (why people choose it over surgery)
            </p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-brown text-center mb-12"
          >
            People choose nose filler because it is:
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Fast",
                desc: "often done in one visit (many sources describe it as a short appointment)",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Minimal downtime",
                desc: "compared with surgery",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Customisable",
                desc: "small changes, step by step",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Temporary",
                desc: "helpful if you want to 'try a look' before committing to rhinoplasty",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl text-center shadow-lg"
              >
                <div className="text-wine mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-brown mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-taupe">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How long does nose filler last - SEMUA KATA ADA */}
      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-4xl font-bold text-brown font-['Georgia']">
                How long does nose filler last?
              </h2>

              <p className="text-lg text-taupe">
                Results vary by filler type, your metabolism, and how much
                product is used. Many medical and clinic references commonly
                cite roughly 6 to 18 months, with an average around about a year
                for many patients.
              </p>

              <p className="text-lg font-semibold text-brown">
                A simple way to think about it:
              </p>

              <div className="bg-cream p-6 rounded-2xl">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-wine font-bold">•</span>
                    <span className="text-brown">
                      First timer: often needs a touch-up around the 9 to 12
                      month mark
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wine font-bold">•</span>
                    <span className="text-brown">
                      Repeat patients: may find it lasts longer with maintenance
                      (varies person to person)
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-linear-to-br from-wine to-rose p-8 rounded-3xl text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Duration Range</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Minimum</span>
                    <span>6 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Average</span>
                    <span>12 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Maximum</span>
                    <span>18 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Side effects and risks - SEMUA KATA ADA */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-brown font-['Georgia'] mb-6">
              Side effects and risks
            </h2>
            <p className="text-xl text-taupe">(honest, not scary)</p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-brown text-center mb-8"
          >
            Most people experience mild, short-term effects:
          </motion.p>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-brown mb-4">
                Common effects:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-wine">•</span>
                  <span className="text-brown">
                    Swelling, tenderness, redness
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-wine">•</span>
                  <span className="text-brown">Small bruises</span>
                </li>
              </ul>
              <p className="text-taupe text-sm mt-4">
                These are common with dermal fillers generally.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-brown mb-4">
                Less common issues:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-wine">•</span>
                  <span className="text-brown">
                    Small lumps or unevenness (often settles, sometimes needs
                    review)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-wine">•</span>
                  <span className="text-brown">
                    Blue tint (Tyndall effect) if HA filler sits too close to
                    the skin surface (treatable)
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-6 rounded-2xl border-2 border-wine"
            >
              <h3 className="text-xl font-bold text-wine mb-4">
                Rare but serious complications:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-wine">•</span>
                  <span className="text-brown">
                    Vascular occlusion (filler blocking a blood vessel), which
                    can lead to skin injury if not treated quickly
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-wine">•</span>
                  <span className="text-brown">
                    Vision problems or blindness have been reported after facial
                    filler injections, and the nose is considered a higher-risk
                    area in published case reviews
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Warning signs - SEMUA KATA ADA */}
      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-4xl font-bold text-brown font-['Georgia']">
                Warning signs you should never ignore
              </h2>

              <p className="text-lg text-taupe">
                Contact your clinic urgently if you notice:
              </p>

              <ul className="space-y-4">
                {[
                  "Severe pain that feels wrong",
                  "Skin turning white, grey, or blotchy",
                  "Increasing swelling with colour change",
                  "Any visual symptoms at all (this is an emergency)",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 bg-red-50 p-4 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
                    <span className="text-brown font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="bg-cream p-6 rounded-2xl">
                <p className="text-brown">
                  Clinics that do injectables seriously keep protocols and
                  appropriate reversal tools for HA fillers (hyaluronidase) as
                  part of safety planning.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-linear-to-br from-wine to-rose p-8 rounded-3xl text-white h-fit"
            >
              <h3 className="text-2xl font-bold mb-4">Emergency Protocol</h3>
              <p className="text-white/90 mb-6">
                Our clinic maintains strict safety protocols and has
                hyaluronidase available for emergencies.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Immediate assessment available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>24/7 emergency contact</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Aftercare and downtime - SEMUA KATA ADA */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-brown font-['Georgia'] mb-6">
              Aftercare and downtime
            </h2>
            <p className="text-xl text-taupe">(simple, practical)</p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg font-semibold text-brown mb-4"
          >
            For the first 24 to 48 hours:
          </motion.p>

          <motion.ul
            variants={fadeInUp}
            className="list-disc pl-6 mb-8 space-y-2 text-brown"
          >
            <li>Avoid heavy exercise and high heat (sauna, steam room)</li>
            <li>Avoid alcohol if you bruise easily</li>
            <li>
              Do not massage or press the nose unless your clinician tells you
              to
            </li>
          </motion.ul>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-bold text-wine mb-3">Sleeping</h3>
              <p className="text-brown">
                Try to sleep on your back for a few nights. It helps prevent
                pressure and shifting early on.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-bold text-wine mb-3">Glasses</h3>
              <p className="text-brown">
                Many aftercare guides recommend avoiding glasses that rest on
                the bridge for about a week (sometimes longer depending on
                placement) because pressure can affect early settling.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-bold text-wine mb-3">
                When will I look "normal"?
              </h3>
              <ul className="space-y-2 text-brown">
                <li>Day 1 to 3: mild swelling is common</li>
                <li>Day 7: most people feel presentable</li>
                <li>Week 2: results usually look more settled (varies)</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Nose filler cost - SEMUA KATA ADA */}
      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-4xl font-bold text-brown font-['Georgia']">
                Nose filler cost in Malaysia and Kuala Lumpur
              </h2>
              <p className="text-lg text-taupe">(what affects price)</p>

              <p className="text-brown">
                There is no single fixed fee across Malaysia. Pricing usually
                depends on:
              </p>

              <ul className="space-y-3">
                {[
                  "Brand and type of filler used",
                  "Amount (often priced per 1 cc syringe)",
                  "Injector experience and case complexity",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Droplets className="w-5 h-5 text-wine mt-1" />
                    <span className="text-brown">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-cream p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-brown mb-4">
                  Real-world reference points you may see in Malaysia
                </h3>
                <ul className="space-y-3">
                  <li className="text-brown">
                    Some clinics cite Juvederm ranges around RM 2,200 to RM
                    2,800 per syringe (varies by clinic and product type).
                  </li>
                  <li className="text-brown">
                    Nexus Clinic publishes a dermal filler price list format
                    with Allergan US Juvederm and pricing per 1 cc syringe
                    (specific product prices vary by listing).
                  </li>
                </ul>
              </div>

              <div className="bg-linear-to-r from-wine to-rose p-6 rounded-2xl text-white">
                <p className="font-medium">
                  Best approach: do a consultation, decide on a conservative
                  plan, then confirm cost based on the exact product and volume
                  you need.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-brown p-8 rounded-3xl text-white h-fit"
            >
              <h3 className="text-2xl font-bold mb-6">Price Range</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <span>Juvederm (per syringe)</span>
                  <span className="text-2xl font-bold">RM 2,200 - 2,800</span>
                </div>
                <p className="text-sm text-white/80">
                  *Prices vary by clinic and product type
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Comparison table - SEMUA KATA ADA */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-brown font-['Georgia'] mb-6">
              Nose filler vs Nose thread lift vs Surgical rhinoplasty
            </h2>
            <p className="text-lg text-taupe">
              Here's a simple comparison to help you choose:
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden">
              <thead className="bg-wine text-white">
                <tr>
                  <th className="p-4 text-left">Option</th>
                  <th className="p-4 text-left">Best for</th>
                  <th className="p-4 text-left">Downtime</th>
                  <th className="p-4 text-left">Reversibility</th>
                  <th className="p-4 text-left">Typical vibe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream">
                <tr className="hover:bg-cream/50 transition-colors">
                  <td className="p-4 font-bold text-brown">Nose filler</td>
                  <td className="p-4 text-taupe">
                    Small shape refinements, bridge smoothing
                  </td>
                  <td className="p-4 text-taupe">Low</td>
                  <td className="p-4 text-taupe">Often reversible for HA</td>
                  <td className="p-4 text-taupe">"Quick polish"</td>
                </tr>
                <tr className="hover:bg-cream/50 transition-colors">
                  <td className="p-4 font-bold text-brown">Nose thread lift</td>
                  <td className="p-4 text-taupe">
                    Mild lift and structure support in selected cases
                  </td>
                  <td className="p-4 text-taupe">Low to moderate</td>
                  <td className="p-4 text-taupe">
                    Not the same as dissolving HA
                  </td>
                  <td className="p-4 text-taupe">"Lift-focused"</td>
                </tr>
                <tr className="hover:bg-cream/50 transition-colors">
                  <td className="p-4 font-bold text-brown">
                    Surgical rhinoplasty
                  </td>
                  <td className="p-4 text-taupe">
                    Major reshaping, structural changes
                  </td>
                  <td className="p-4 text-taupe">Higher</td>
                  <td className="p-4 text-taupe">Permanent</td>
                  <td className="p-4 text-taupe">"Big change"</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-center text-brown mt-6">
            Nexus Clinic also offers nose thread lift as a separate option,
            which is useful when lift is the main goal rather than contouring.
          </motion.p>
        </motion.div>
      </section>

      {/* DIY fillers warning - SEMUA KATA ADA */}
      <section className="py-12 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <AlertCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              A very important safety note about DIY fillers
            </h3>
            <p className="text-lg text-white/90">
              If you have seen "at-home filler pens" online, avoid them.
              Regulators and safety guidance warn about serious complications
              like infection, scarring, vascular occlusion, and even blindness
              or stroke when fillers are used outside proper medical practice.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto">
            {/* Section tag */}
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <span className="bg-cream text-wine px-5 py-2 rounded-full text-sm font-medium tracking-wider inline-block">
                THE COMPLETE PICTURE
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-bold text-brown font-['Georgia'] text-center leading-tight mb-8"
            >
              Why results look better when the
              <span className="text-wine block">
                whole profile is considered
              </span>
            </motion.h2>

            {/* Content card */}
            <motion.div
              variants={fadeInUp}
              className="bg-linear-to-br from-cream to-white p-8 md:p-10 rounded-3xl shadow-lg border border-taupe/10"
            >
              {/* Key quote */}
              <div className="mb-8 text-center">
                <p className="text-xl md:text-2xl text-brown font-['Georgia'] italic leading-relaxed">
                  "A nose does not sit alone. The nose, chin, and jawline create
                  your profile line."
                </p>
              </div>

              {/* Balance statement */}
              <div className="mb-10 text-center">
                <p className="text-lg text-taupe mb-3">
                  Sometimes you do not need "more nose."
                </p>
                <p className="text-3xl md:text-4xl font-bold text-wine font-['Georgia']">
                  You need balance.
                </p>
              </div>

              {/* Treatment pairings */}
              <div className="mb-10">
                <p className="text-lg text-brown text-center mb-6">
                  That is why many KL patients ask about pairing nose filler
                  with:
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  {/* Chin enhancement */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="bg-white px-6 py-4 rounded-full shadow-md flex items-center gap-3 border border-taupe/20"
                  >
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="font-medium text-brown">
                      Chin enhancement
                    </span>
                  </motion.div>

                  {/* Jawline definition */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="bg-white px-6 py-4 rounded-full shadow-md flex items-center gap-3 border border-taupe/20"
                  >
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="font-medium text-brown">
                      Jawline definition
                    </span>
                  </motion.div>

                  {/* Skin boosters */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="bg-white px-6 py-4 rounded-full shadow-md flex items-center gap-3 border border-taupe/20"
                  >
                    <Sparkles className="w-5 h-5 text-wine" />
                    <span className="font-medium text-brown">
                      Skin boosters for glow and texture
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Philosophy line */}
              <motion.div
                variants={fadeInUp}
                className="text-center pt-6 border-t border-taupe/20"
              >
                <p className="text-xl text-brown font-['Georgia'] italic">
                  "A good plan keeps the changes subtle and believable."
                </p>
                <p className="text-sm text-taupe mt-3">
                  — Nexus Clinic Philosophy
                </p>
              </motion.div>

              {/* Subtle CTA */}
              <motion.div variants={fadeInUp} className="text-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 text-wine font-medium hover:text-rose transition-colors"
                >
                  <span>Discover your balance</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section - SEMUA PERTANYAAN DAN JAWABAN ADA */}
      <section className="py-20 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-brown font-['Georgia'] mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Question 1 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brown mb-2">
                1) How much does nose filler cost in Kuala Lumpur?
              </h3>
              <p className="text-taupe">
                Most clinics price by filler brand and how many cc you need.
                Some Malaysia-based references put Juvederm ranges around RM
                2,200 to RM 2,800 per syringe, but it varies by product type and
                clinic.
              </p>
            </motion.div>

            {/* Question 2 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brown mb-2">
                2) How long does a non-surgical nose job last?
              </h3>
              <p className="text-taupe">
                Many references commonly state results can last roughly 6 months
                up to 2 years, with many patients returning around the 12-month
                mark for maintenance.
              </p>
            </motion.div>

            {/* Question 3 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brown mb-2">
                3) Does nose filler hurt?
              </h3>
              <p className="text-taupe">
                Most patients experience minimal discomfort. The procedure
                includes numbing options for comfort.
              </p>
            </motion.div>

            {/* Question 4 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brown mb-2">
                4) Can nose filler make my nose smaller?
              </h3>
              <p className="text-taupe">
                Usually no. Filler adds volume, so it is best for smoothing a
                bump, improving symmetry, or building a higher-looking bridge.
                It cannot truly reduce size or narrow the nose.
              </p>
            </motion.div>

            {/* Question 5 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brown mb-2">
                5) Is nose filler safer than surgery?
              </h3>
              <p className="text-taupe">
                They are different. Nose filler has lower downtime, but it is
                still a medical procedure with rare serious risks like vascular
                occlusion and vision complications. You should choose a
                qualified injector and a clinic with a clear emergency protocol.
              </p>
            </motion.div>

            {/* Question 6 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brown mb-2">
                6) What are the side effects of nose filler?
              </h3>
              <p className="text-taupe">
                Common effects include swelling, redness, tenderness, and
                sometimes bruising. Less commonly, lumps or a bluish tint
                (Tyndall effect) can happen if filler is too superficial.
              </p>
            </motion.div>

            {/* Question 7 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brown mb-2">
                7) What is the Tyndall effect and can it be fixed?
              </h3>
              <p className="text-taupe">
                The Tyndall effect is a bluish hue that can appear when
                hyaluronic acid filler sits too close to the skin surface. It is
                a known complication and is often treatable.
              </p>
            </motion.div>

            {/* Question 8 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brown mb-2">
                8) Can I wear glasses after nose filler?
              </h3>
              <p className="text-taupe">
                Most aftercare guidance recommends avoiding glasses resting on
                the bridge for about a week because pressure can affect early
                settling. Your clinician can advise based on your injection
                points.
              </p>
            </motion.div>

            {/* Question 9 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brown mb-2">
                9) How soon can I exercise after nose filler?
              </h3>
              <p className="text-taupe">
                Many aftercare guides advise waiting 24 to 48 hours before
                intense exercise. Heat and heavy exertion can worsen swelling or
                bruising early on.
              </p>
            </motion.div>

            {/* Question 10 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brown mb-2">
                10) Is nose filler reversible?
              </h3>
              <p className="text-taupe">
                If hyaluronic acid filler is used, clinicians may use
                hyaluronidase in specific situations (for example, complications
                or correction). This should be managed by professionals.
              </p>
            </motion.div>

            {/* Question 11 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brown mb-2">
                11) What are red flags after nose filler?
              </h3>
              <p className="text-taupe">
                Severe pain, unusual whitening or blotchy colour changes,
                worsening swelling with colour change, or any vision symptoms
                are urgent warning signs. Seek immediate medical advice.
              </p>
            </motion.div>

            {/* Question 12 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brown mb-2">
                12) How do I choose the best clinic for nose filler in Kuala
                Lumpur?
              </h3>
              <p className="text-taupe">
                Look for medical credentials, a consultation-first approach,
                transparent product information, and a clinic that acknowledges
                rare risks and has a protocol for vascular events. High-ranking
                KL directories also encourage checking doctor qualifications and
                verified reviews.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA - SEMUA KATA ADA */}
      <section className="py-20 bg-linear-to-r from-wine to-rose">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-['Georgia'] mb-6">
              Ready to turn "I hate my side profile" into "this feels like me"?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              If you want nose filler in Kuala Lumpur, Malaysia, Nexus Clinic KL
              can assess your nose shape, explain what is realistic, and
              recommend the safest plan for your face and goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-wine px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 group"
            >
              Book Your Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <p className="text-white/80 mt-6">
              Nexus Clinic is located at LG 10, Wisma UOA II, Jalan Pinang,
              Kuala Lumpur
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
