"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Star,
  Activity,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";

interface NoseThreadLiftProps {
  locale: string;
}

export default function NoseThreadLift({ locale }: NoseThreadLiftProps) {
  return (
    <div className="bg-light font-inter overflow-x-hidden">
      {/* Hero Section dengan semua teks dari PDF */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="absolute inset-0 bg-glass backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <motion.div variants={scaleIn} className="inline-block">
                <span
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "var(--color-rose)",
                    color: "white",
                  }}
                >
                  Nexus Clinic Kuala Lumpur
                </span>
              </motion.div>

              <h1
                className="text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: "var(--color-brown)" }}
              >
                Lift your nose shape without surgery, <br />
                <span style={{ color: "var(--color-wine)" }}>
                  and still look like you
                </span>
              </h1>

              <p className="text-xl" style={{ color: "var(--color-taupe)" }}>
                A higher bridge. A sharper tip. A cleaner side profile. Fast
                treatment, low downtime, and natural-looking refinement.
              </p>

              {/* Trust at a glance section dengan semua teks */}
              <div className="space-y-4 pt-4">
                <h2
                  className="text-2xl font-semibold"
                  style={{ color: "var(--color-wine)" }}
                >
                  Trust at a glance (Nexus Clinic KL)
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: "var(--color-rose)" }}
                    />
                    <span style={{ color: "var(--color-brown)" }}>
                      Doctor-led assessment and face mapping before threads
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: "var(--color-rose)" }}
                    />
                    <span style={{ color: "var(--color-brown)" }}>
                      Natural proportions for Asian nose profiles, not "copy
                      paste" results
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: "var(--color-rose)" }}
                    />
                    <span style={{ color: "var(--color-brown)" }}>
                      Central Kuala Lumpur location for easy access
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: "var(--color-rose)" }}
                    />
                    <span style={{ color: "var(--color-brown)" }}>
                      Transparent starting price guidance for Nose Thread Lift
                      is commonly listed as RM 1,500 to RM 3,000 on Nexus thread
                      lift information pages.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Nose Thread Lift at Nexus Clinic Kuala Lumpur"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is Nose Thread Lift Section dengan semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: "var(--color-brown)" }}
              >
                What is a{" "}
                <span style={{ color: "var(--color-wine)" }}>
                  Nose Thread Lift?
                </span>
              </h2>

              <p
                className="text-lg mb-4"
                style={{ color: "var(--color-taupe)" }}
              >
                A nose thread lift is a minimally invasive treatment that uses
                absorbable threads to improve the look of your nose bridge and
                tip.
              </p>

              <p
                className="text-lg mb-4 font-semibold"
                style={{ color: "var(--color-brown)" }}
              >
                It is often used for:
              </p>

              <ul className="space-y-3 mb-4">
                <li className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    a flatter bridge that looks low in photos
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    a tip that looks soft or slightly droopy
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    mild asymmetry
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    a profile that needs sharper definition
                  </span>
                </li>
              </ul>

              <p
                className="text-lg mb-4 italic"
                style={{ color: "var(--color-taupe)" }}
              >
                The threads act like a scaffold under the skin to support the
                new shape.
              </p>

              <p className="text-lg" style={{ color: "var(--color-brown)" }}>
                Many clinics in Malaysia use PDO threads, and some also use PCL
                threads.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Nose Thread Lift procedure explanation"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What Nose Threads Can Do - dengan semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: "var(--color-wine)" }}
              >
                <CheckCircle2 className="w-6 h-6" />
                What Nose Threads can do (realistic results)
              </h3>

              <p
                className="mb-4 font-semibold"
                style={{ color: "var(--color-brown)" }}
              >
                A nose thread lift can usually:
              </p>

              <ul className="space-y-3 mb-4">
                <li className="flex items-center gap-3">
                  <Star
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    create a more defined bridge line
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Star
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    give a slightly higher bridge appearance
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Star
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    help the tip look more lifted and projected
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Star
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    improve contour in side photos
                  </span>
                </li>
              </ul>

              <p
                className="text-sm italic"
                style={{ color: "var(--color-taupe)" }}
              >
                Beverly Wilshire describes the idea clearly: threads support and
                lift tissues, improving bridge definition and tip projection.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: "var(--color-cream)" }}
            >
              <h3
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: "var(--color-wine)" }}
              >
                <XCircle className="w-6 h-6" />
                What it cannot do
              </h3>

              <p
                className="mb-4 font-semibold"
                style={{ color: "var(--color-brown)" }}
              >
                Be honest with yourself here. Nose threads are not magic.
              </p>

              <p className="mb-4" style={{ color: "var(--color-brown)" }}>
                Threads cannot:
              </p>

              <ul className="space-y-3 mb-4">
                <li className="flex items-center gap-3">
                  <AlertCircle
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    make a very wide nose become narrow
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <AlertCircle
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    reduce bone width
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <AlertCircle
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    fix major structural issues like severe deviation
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <AlertCircle
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    replace surgical rhinoplasty results
                  </span>
                </li>
              </ul>

              <p
                className="text-sm italic"
                style={{ color: "var(--color-taupe)" }}
              >
                Clinic Cleo also notes it will not offer the same results as
                surgical rhinoplasty, but can be a good option for subtle
                refinement.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why people in Kuala Lumpur choose Nose Thread Lift - semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
        style={{ backgroundColor: "var(--color-brown)" }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-6 text-white"
          >
            Why people in Kuala Lumpur choose Nose Thread Lift
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl mb-8 text-white/90">
            Most people do not want a "new nose." They want their nose to look
            better in photos.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              '"My bridge disappears in bright light."',
              '"My tip looks round."',
              '"I want a sharper profile, but I am scared of surgery."',
              '"I want a quick procedure with less downtime."',
            ].map((quote, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 rounded-xl"
                style={{ backgroundColor: "var(--color-glass)" }}
              >
                <p className="text-white text-lg italic">{quote}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeInUp} className="text-white/90">
            Nose thread lift is popular because it is quick and minimally
            invasive. Beverly Wilshire describes it as fast with minimal
            downtime compared to surgery.
          </motion.p>
        </div>
      </motion.section>

      {/* Who is Nose Thread Lift for - semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <h2
                className="text-4xl font-bold mb-8"
                style={{ color: "var(--color-brown)" }}
              >
                Who is{" "}
                <span style={{ color: "var(--color-wine)" }}>
                  Nose Thread Lift
                </span>{" "}
                for?
              </h2>

              <p
                className="text-lg mb-4"
                style={{ color: "var(--color-brown)" }}
              >
                You may be a good candidate if:
              </p>

              <ul className="space-y-3 mb-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2
                    className="w-5 h-5"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    you want subtle improvement (not a dramatic change)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2
                    className="w-5 h-5"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    you have a low bridge and want more definition
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2
                    className="w-5 h-5"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    your tip drops slightly and you want it lifted
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2
                    className="w-5 h-5"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    you are not ready for rhinoplasty
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2
                    className="w-5 h-5"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    you want low downtime
                  </span>
                </li>
              </ul>

              <p
                className="text-sm italic mb-6"
                style={{ color: "var(--color-taupe)" }}
              >
                RJ Clinic also emphasizes treatment should be customized after
                doctor assessment, not one-size-fits-all.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-wine)" }}
              >
                Who should avoid or postpone
              </h3>

              <p className="mb-4" style={{ color: "var(--color-brown)" }}>
                You may need to delay if you have:
              </p>

              <ul className="space-y-3 mb-4">
                <li className="flex items-center gap-3">
                  <AlertCircle
                    className="w-5 h-5"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    active skin infection or severe acne on the nose area
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <AlertCircle
                    className="w-5 h-5"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    uncontrolled medical conditions
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <AlertCircle
                    className="w-5 h-5"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    unrealistic expectations of "surgical results"
                  </span>
                </li>
              </ul>

              <p
                className="font-semibold"
                style={{ color: "var(--color-wine)" }}
              >
                A doctor consultation is the safest way to confirm suitability.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Types of threads section - semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-8"
            style={{ color: "var(--color-brown)" }}
          >
            Types of threads used for{" "}
            <span style={{ color: "var(--color-wine)" }}>Nose Thread Lift</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-6"
            style={{ color: "var(--color-taupe)" }}
          >
            In Malaysia, clinics commonly mention:
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-6">
            <motion.div
              variants={fadeInLeft}
              className="p-6 rounded-xl bg-white shadow-lg"
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--color-wine)" }}
              >
                PDO threads
              </h3>
              <p className="text-sm" style={{ color: "var(--color-brown)" }}>
                (polydioxanone)
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="p-6 rounded-xl bg-white shadow-lg"
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--color-wine)" }}
              >
                PCL threads
              </h3>
              <p className="text-sm" style={{ color: "var(--color-brown)" }}>
                (polycaprolactone)
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto"
            style={{ color: "var(--color-brown)" }}
          >
            Simple way to understand it: PDO is widely used and absorbable. PCL
            is often described by clinics as lasting longer than some other
            options.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-center mt-4 font-semibold"
            style={{ color: "var(--color-wine)" }}
          >
            Your doctor decides based on your nose anatomy, safety, and desired
            outcome.
          </motion.p>
        </div>
      </motion.section>

      {/* How the procedure works - semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-8"
            style={{ color: "var(--color-brown)" }}
          >
            How the{" "}
            <span style={{ color: "var(--color-wine)" }}>Nose Thread Lift</span>{" "}
            procedure works
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-8"
            style={{ color: "var(--color-taupe)" }}
          >
            Most clinics describe a similar process:
          </motion.p>

          <div className="space-y-4 max-w-3xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--color-wine)" }}
              >
                1. Assessment and mapping
              </h3>
              <p style={{ color: "var(--color-brown)" }}>
                We check your bridge, tip, skin thickness, and nose structure.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--color-wine)" }}
              >
                2. Cleansing and local anaesthetic
              </h3>
              <p style={{ color: "var(--color-brown)" }}>
                Clinic Cleo mentions local anaesthetic and a fine needle
                approach.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--color-wine)" }}
              >
                3. Thread placement
              </h3>
              <p style={{ color: "var(--color-brown)" }}>
                Threads can be placed along the bridge and into the tip area
                depending on goals. Clinic Cleo describes horizontal placement
                in the bridge and vertical placement in the tip for scaffolding.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--color-wine)" }}
              >
                4. Shaping and review
              </h3>
              <p style={{ color: "var(--color-brown)" }}>
                The nose is gently adjusted to refine the contour.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 p-6 rounded-xl text-center"
            style={{ backgroundColor: "var(--color-cream)" }}
          >
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: "var(--color-wine)" }}
            >
              How long does it take?
            </h3>
            <p style={{ color: "var(--color-brown)" }}>
              Many clinics describe it as a quick treatment. Clinic Cleo notes
              around 20 to 30 minutes. Beverly Wilshire also states a typical
              range like 15 to 30 minutes.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* How many threads section - semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-6"
            style={{ color: "var(--color-brown)" }}
          >
            How many <span style={{ color: "var(--color-wine)" }}>threads</span>{" "}
            do you need?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-6"
            style={{ color: "var(--color-taupe)" }}
          >
            This depends on:
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
            <motion.div
              variants={fadeInLeft}
              className="p-4 text-center rounded-lg bg-white"
            >
              <p style={{ color: "var(--color-brown)" }}>
                how low your bridge is
              </p>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="p-4 text-center rounded-lg bg-white"
            >
              <p style={{ color: "var(--color-brown)" }}>
                how much tip support you need
              </p>
            </motion.div>
            <motion.div
              variants={fadeInLeft}
              className="p-4 text-center rounded-lg bg-white"
            >
              <p style={{ color: "var(--color-brown)" }}>your skin thickness</p>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="p-4 text-center rounded-lg bg-white"
            >
              <p style={{ color: "var(--color-brown)" }}>
                how much space your nose can safely accommodate
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center mb-4"
            style={{ color: "var(--color-brown)" }}
          >
            Clinic Cleo states an average of 4 to 8 threads per session. RJ
            Clinic also warns against "putting too many threads" and stresses
            assessment for enough space and clean conditions to reduce infection
            risk.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-center font-bold text-xl"
            style={{ color: "var(--color-wine)" }}
          >
            At Nexus Clinic KL, the goal should be safe improvement, not maximum
            threads.
          </motion.p>
        </div>
      </motion.section>

      {/* Results timeline - semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-8"
            style={{ color: "var(--color-brown)" }}
          >
            Results timeline:{" "}
            <span style={{ color: "var(--color-wine)" }}>
              what you see, and when you see it
            </span>
          </motion.h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--color-wine)" }}
              >
                Immediately after
              </h3>
              <p style={{ color: "var(--color-brown)" }}>
                You may see the bridge look sharper right away.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--color-wine)" }}
              >
                First 3 to 7 days
              </h3>
              <p style={{ color: "var(--color-brown)" }}>
                Swelling is common. Mild bruising can happen.
              </p>
              <p
                className="text-sm mt-2 italic"
                style={{ color: "var(--color-taupe)" }}
              >
                Beverly Wilshire mentions downtime can be minimal, around a few
                days, with minor swelling or bruising. Dr Soma's FAQ section
                also suggests most patients return to daily activities within 1
                to 2 days, though swelling can still be present.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--color-wine)" }}
              >
                Weeks 2 to 4
              </h3>
              <p style={{ color: "var(--color-brown)" }}>
                The nose looks more settled. The result looks more "yours."
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How long does it last - semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-6"
            style={{ color: "var(--color-brown)" }}
          >
            How long does{" "}
            <span style={{ color: "var(--color-wine)" }}>Nose Thread Lift</span>{" "}
            last?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-4"
            style={{ color: "var(--color-brown)" }}
          >
            Many Malaysia clinic pages commonly state results around 12 to 18
            months.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-4"
            style={{ color: "var(--color-brown)" }}
          >
            Some clinics describe longer ranges depending on thread type and
            individual factors. Clinic Cleo lists "results that last 18 to 24
            months" as a headline claim.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="font-semibold mb-3 text-center"
            style={{ color: "var(--color-wine)" }}
          >
            Real-life longevity depends on:
          </motion.p>

          <div className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "thread type",
              "your metabolism",
              "your lifestyle",
              "how strong your nose support is naturally",
              "whether you do a touch-up plan",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-3 text-center rounded-lg bg-white"
                style={{ color: "var(--color-brown)" }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Aftercare section - semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-8"
            style={{ color: "var(--color-brown)" }}
          >
            Nose Thread Lift{" "}
            <span style={{ color: "var(--color-wine)" }}>aftercare</span>{" "}
            (simple, realistic)
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-6"
            style={{ color: "var(--color-taupe)" }}
          >
            To protect your result:
          </motion.p>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              "Avoid pressing or squeezing your nose for the first week",
              "Avoid facials and strong nose massage for at least 2 weeks",
              "Sleep on your back if possible for a few nights",
              "Avoid heavy exercise for a short period if you swell easily",
              "Avoid glasses pressing hard on the bridge if advised by your doctor",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ backgroundColor: "var(--color-light)" }}
              >
                <Heart
                  className="w-5 h-5 mt-1 shrink-0"
                  style={{ color: "var(--color-rose)" }}
                />
                <span style={{ color: "var(--color-brown)" }}>{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-6 p-6 rounded-xl text-center"
            style={{ backgroundColor: "var(--color-wine)" }}
          >
            <p className="text-white font-semibold">
              If you feel increasing pain, strong redness, fever, or worsening
              swelling, contact a medical professional promptly.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Pros and Cons section - semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-8"
            style={{ color: "var(--color-brown)" }}
          >
            Pros and cons of{" "}
            <span style={{ color: "var(--color-wine)" }}>Nose Thread Lift</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="p-8 rounded-2xl bg-white shadow-lg"
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--color-wine)" }}
              >
                Pros
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-5 h-5 mt-1 shrink-0"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    Non-surgical refinement
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-5 h-5 mt-1 shrink-0"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    Quick procedure time
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-5 h-5 mt-1 shrink-0"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    Minimal downtime for many people
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-5 h-5 mt-1 shrink-0"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    Can enhance bridge and tip contour without general
                    anaesthesia
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="p-8 rounded-2xl bg-white shadow-lg"
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--color-wine)" }}
              >
                Cons
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <XCircle
                    className="w-5 h-5 mt-1 shrink-0"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    Results are not permanent
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle
                    className="w-5 h-5 mt-1 shrink-0"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    Not suitable for major reshaping
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle
                    className="w-5 h-5 mt-1 shrink-0"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    Swelling or bruising may occur
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle
                    className="w-5 h-5 mt-1 shrink-0"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    Over-threading can increase risk and does not always look
                    better, so planning matters
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Side effects and safety - semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-8"
            style={{ color: "var(--color-brown)" }}
          >
            Side effects and{" "}
            <span style={{ color: "var(--color-wine)" }}>safety</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <h3
                className="text-xl font-bold"
                style={{ color: "var(--color-wine)" }}
              >
                Common temporary effects:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Activity
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>swelling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Activity
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>bruising</span>
                </li>
                <li className="flex items-center gap-2">
                  <Activity
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    mild tenderness
                  </span>
                </li>
              </ul>
              <p
                className="text-sm italic"
                style={{ color: "var(--color-taupe)" }}
              >
                Beverly Wilshire describes mild bruising, swelling, and
                tenderness as expected and usually settling.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              <h3
                className="text-xl font-bold"
                style={{ color: "var(--color-wine)" }}
              >
                Safety depends on:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Shield
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    sterile conditions
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    correct anatomy and depth
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    correct number of threads
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    experienced medical practitioner
                  </span>
                </li>
              </ul>
              <p
                className="text-sm italic"
                style={{ color: "var(--color-taupe)" }}
              >
                RJ Clinic directly stresses clean conditions and avoiding too
                many threads to reduce infection risk.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cost section - semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-6"
            style={{ color: "var(--color-brown)" }}
          >
            Cost of Nose Thread Lift in Malaysia{" "}
            <span style={{ color: "var(--color-wine)" }}>
              (KL pricing expectations)
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-6"
            style={{ color: "var(--color-taupe)" }}
          >
            Prices vary based on:
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              "number of threads",
              "thread type",
              "clinic location",
              "doctor expertise",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-3 text-center rounded-lg bg-white"
                style={{ color: "var(--color-brown)" }}
              >
                {item}
              </motion.div>
            ))}
          </div>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-bold text-center mb-4"
            style={{ color: "var(--color-wine)" }}
          >
            Typical Malaysia ranges shown by clinics
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <motion.div
              variants={fadeInLeft}
              className="p-6 rounded-xl bg-white shadow-lg text-center"
            >
              <p
                className="font-semibold"
                style={{ color: "var(--color-brown)" }}
              >
                Beverly Wilshire
              </p>
              <p
                className="text-xl font-bold"
                style={{ color: "var(--color-wine)" }}
              >
                RM 2,000 to RM 5,000
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="p-6 rounded-xl bg-white shadow-lg text-center"
            >
              <p
                className="font-semibold"
                style={{ color: "var(--color-brown)" }}
              >
                RJ Clinic
              </p>
              <p
                className="text-xl font-bold"
                style={{ color: "var(--color-wine)" }}
              >
                RM 2,000 to RM 4,000 depending on number of threads
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="p-8 rounded-xl text-center max-w-2xl mx-auto"
            style={{ backgroundColor: "var(--color-wine)" }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Nexus Clinic Kuala Lumpur starting guidance
            </h3>
            <p className="text-3xl font-bold mb-4 text-white">
              RM 1,500 to RM 3,000
            </p>
            <p className="text-white/90">
              Nexus thread lift information commonly lists Nose Thread Lift
              starting price RM 1,500 to RM 3,000.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 p-6 rounded-xl"
            style={{ backgroundColor: "var(--color-light)" }}
          >
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "var(--color-wine)" }}
            >
              What changes your quote at Nexus Clinic KL
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight
                  className="w-4 h-4"
                  style={{ color: "var(--color-rose)" }}
                />
                <span style={{ color: "var(--color-brown)" }}>
                  Do you need bridge work, tip work, or both?
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight
                  className="w-4 h-4"
                  style={{ color: "var(--color-rose)" }}
                />
                <span style={{ color: "var(--color-brown)" }}>
                  How many threads are safe for your nose space?
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight
                  className="w-4 h-4"
                  style={{ color: "var(--color-rose)" }}
                />
                <span style={{ color: "var(--color-brown)" }}>
                  Do you need a combined plan (threads plus filler) for better
                  balance?
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison section - semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-8"
            style={{ color: "var(--color-brown)" }}
          >
            Nose Thread Lift{" "}
            <span style={{ color: "var(--color-wine)" }}>vs</span> Nose Filler{" "}
            <span style={{ color: "var(--color-wine)" }}>vs</span> Rhinoplasty
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--color-wine)" }}
              >
                Nose Thread Lift vs Nose Filler
              </h3>
              <p className="mb-4" style={{ color: "var(--color-brown)" }}>
                A simple way many clinics describe it:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <ArrowRight
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    Flat bridge can be improved with filler
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    Drooping tip is often better suited to threads
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    Overall refinement may need both
                  </span>
                </li>
              </ul>
              <p
                className="text-sm italic"
                style={{ color: "var(--color-taupe)" }}
              >
                Clinic Cleo also explains nose can be reshaped by hyaluronic
                acid filler too, and threads can be combined with fillers.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--color-wine)" }}
              >
                Nose Thread Lift vs Surgical Rhinoplasty
              </h3>
              <p className="mb-4" style={{ color: "var(--color-brown)" }}>
                Rhinoplasty is surgery. It can reshape bone and cartilage.
              </p>
              <p className="mb-4" style={{ color: "var(--color-brown)" }}>
                A Malaysia clinic comparison page states rhinoplasty can cost
                around RM 10,000 to RM 30,000, while nose thread lift is often
                RM 2,000 to RM 5,000 depending on threads and doctor expertise.
              </p>
              <p
                className="font-semibold"
                style={{ color: "var(--color-wine)" }}
              >
                Threads are often chosen when:
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    you want subtle enhancement
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    you want lower downtime
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-4 h-4"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <span style={{ color: "var(--color-brown)" }}>
                    you want a less invasive option
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why choose Nexus Clinic - semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-8"
            style={{ color: "var(--color-brown)" }}
          >
            Why choose{" "}
            <span style={{ color: "var(--color-wine)" }}>
              Nexus Clinic Kuala Lumpur
            </span>{" "}
            for Nose Thread Lift?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-center mb-6"
            style={{ color: "var(--color-taupe)" }}
          >
            Because this is not a "trend treatment." It is a face-balancing
            decision.
          </motion.p>

          <div className="max-w-3xl mx-auto space-y-4 mb-6">
            <motion.p
              variants={fadeInUp}
              className="p-4 rounded-lg bg-white"
              style={{ color: "var(--color-brown)" }}
            >
              At Nexus Clinic KL, the focus is:
            </motion.p>

            <motion.ul variants={fadeInUp} className="space-y-3">
              <li className="flex items-start gap-3 p-4 rounded-lg bg-white">
                <Star
                  className="w-5 h-5 mt-1 shrink-0"
                  style={{ color: "var(--color-rose)" }}
                />
                <span style={{ color: "var(--color-brown)" }}>
                  a doctor-led plan based on your nose and facial proportions
                </span>
              </li>
              <li className="flex items-start gap-3 p-4 rounded-lg bg-white">
                <Star
                  className="w-5 h-5 mt-1 shrink-0"
                  style={{ color: "var(--color-rose)" }}
                />
                <span style={{ color: "var(--color-brown)" }}>
                  safe thread count and safe technique
                </span>
              </li>
              <li className="flex items-start gap-3 p-4 rounded-lg bg-white">
                <Star
                  className="w-5 h-5 mt-1 shrink-0"
                  style={{ color: "var(--color-rose)" }}
                />
                <span style={{ color: "var(--color-brown)" }}>
                  natural improvement that looks good in real life, not only in
                  one photo angle
                </span>
              </li>
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="p-4 rounded-lg bg-white"
              style={{ color: "var(--color-brown)" }}
            >
              Nexus is also commonly listed in third-party directories with
              strong public review volume, which helps add trust when patients
              compare options.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section - semua 16 pertanyaan dan jawaban */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--color-brown)" }}
          >
            Frequently Asked{" "}
            <span style={{ color: "var(--color-wine)" }}>Questions</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* General Questions */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--color-wine)" }}
              >
                General Questions
              </h3>

              <div className="space-y-4">
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    1) What does a nose thread lift do?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    It enhances the nose bridge and tip using absorbable threads
                    to improve contour without surgery.
                  </p>
                </div>

                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    2) Is a nose thread lift safe?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    It can be safe when performed by a qualified medical
                    practitioner using regulated medical threads and sterile
                    technique.
                  </p>
                </div>

                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    3) Who is suitable for a nose thread lift?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    People who want subtle bridge or tip improvement without
                    surgery, and who have enough nose space for safe thread
                    placement.
                  </p>
                </div>

                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    4) Can anyone get nose threads?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    Not always. Some noses cannot safely take many threads, and
                    assessment is important to avoid complications.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Results and longevity */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--color-wine)" }}
              >
                Results and longevity
              </h3>

              <div className="space-y-4">
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    5) How long do nose thread lift results last?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    Many clinics state results usually last between 12 and 18
                    months.
                  </p>
                </div>

                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    6) Are the threads permanent?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    No. They are biodegradable and designed to be absorbed over
                    time.
                  </p>
                </div>

                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    7) When will I see the final result?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    You can see changes immediately, but the nose looks more
                    settled after swelling reduces, often over 2 to 4 weeks.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Procedure and recovery */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--color-wine)" }}
              >
                Procedure and recovery
              </h3>

              <div className="space-y-4">
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    8) Is the procedure painful?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    Discomfort is usually minimal because local anaesthesia is
                    used.
                  </p>
                </div>

                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    9) How long does the procedure take?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    Many clinics describe around 15 to 30 minutes or 20 to 30
                    minutes.
                  </p>
                </div>

                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    10) Is there downtime after a nose thread lift?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    Most patients return to daily activities quickly, sometimes
                    within 1 to 2 days, though mild swelling or bruising can
                    last a few days.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Threads, number, and cost */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--color-wine)" }}
              >
                Threads, number, and cost
              </h3>

              <div className="space-y-4">
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    11) How many threads are used for a nose thread lift?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    Some clinics state an average of 4 to 8 threads per session,
                    but it depends on your nose anatomy and goals.
                  </p>
                </div>

                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    12) How much does a nose thread lift cost in Malaysia?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    Common published ranges include RM 2,000 to RM 5,000,
                    depending on threads and clinic factors.
                  </p>
                </div>

                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    13) What is the nose thread lift price range some KL clinics
                    share?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    RJ Clinic states RM 2,000 to RM 4,000 depending on number of
                    threads.
                  </p>
                </div>

                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    14) What is Nexus Clinic KL starting price guidance for nose
                    thread lift?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    Nexus thread lift information commonly lists RM 1,500 to RM
                    3,000 as starting price guidance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Comparison questions */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-light)" }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--color-wine)" }}
              >
                Comparison questions
              </h3>

              <div className="space-y-4">
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    15) Is nose filler or nose thread lift better?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    Many clinics explain it depends on your goal. Filler often
                    helps a flat bridge, while threads are often used for a
                    drooping tip, and combination can refine overall shape.
                  </p>
                </div>

                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    16) Is nose thread lift better than rhinoplasty?
                  </p>
                  <p style={{ color: "var(--color-taupe)" }}>
                    Threads are less invasive and lower downtime, but they
                    cannot replace the structural changes possible with surgery.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA dengan semua teks */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20"
        style={{ backgroundColor: "var(--color-wine)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-6 text-white"
          >
            Want a KL-focused Nose Thread Lift plan that looks natural?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl mb-4 text-white/90 max-w-3xl mx-auto"
          >
            If you want a sharper bridge, a more lifted tip, and a refined
            profile without surgery, Nose Thread Lift at Nexus Clinic Kuala
            Lumpur can be a great option.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg mb-8 text-white/80 max-w-2xl mx-auto"
          >
            The most important step is a proper assessment so we choose the
            safest technique and the right number of threads for your nose.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}
