"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  AlertCircle,
  Flower2,
  Shield,
  Eye,
  ChevronRight,
  Heart,
  MapPin,
  CheckCircle2,
  XCircle,
  Stethoscope,
  Pill,
  Ban,
  AlertTriangle,
  Zap,
  GraduationCap,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "@/src/components/FAQ";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const RosaceaTreatmentLanding = () => {
  const faqs = [
    {
      q: "Can rosacea be cured permanently?",
      a: "No, but treatment can control symptoms and prevent it from getting worse.",
    },
    {
      q: "What is the best treatment for rosacea?",
      a: "It depends on symptoms. Topicals like azelaic acid, metronidazole, or ivermectin are common for bumps. Laser or IPL can help persistent redness and visible blood vessels.",
    },
    {
      q: "What triggers rosacea flare-ups?",
      a: "Common triggers include sunlight, heat, stress, alcohol, spicy foods, and hot drinks.",
    },
    {
      q: "Is rosacea the same as acne?",
      a: "No. Rosacea can look like acne but often comes with flushing and sensitivity, and harsh acne products can worsen it.",
    },
    {
      q: "How long do rosacea creams take to work?",
      a: "Azelaic acid and metronidazole may take 2 to 6 weeks. Ivermectin may take longer, but results can last longer.",
    },
    {
      q: "Do antibiotics help rosacea?",
      a: "Yes, especially when there are bumps and inflammation. The NHS notes antibiotics may be used for 6 to 16 weeks.",
    },
    {
      q: "Does laser or IPL work for rosacea redness?",
      a: "It can. Mayo Clinic states laser can improve enlarged blood vessels and long-term redness.",
    },
    {
      q: "How many laser sessions do I need?",
      a: "It varies, but a Malaysian vascular laser provider describes gradual improvement over 3 to 5 sessions.",
    },
    {
      q: "Is rosacea contagious?",
      a: "No. The NHS states rosacea is not contagious.",
    },
    {
      q: "Can rosacea affect the eyes?",
      a: "Yes. Seek urgent assessment for eye pain, blurred vision, light sensitivity, or red gritty eye.",
    },
    {
      q: "Should I use steroid cream on rosacea?",
      a: "Usually no. PCDS advises avoiding steroid creams because they can make rosacea worse.",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-rosacea-treatment1.webp",
      after: "/images/B&A-skin/B&A-rosacea-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-rosacea-treatment2.webp",
      after: "/images/B&A-skin/B&A-rosacea-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-rosacea-treatment3.webp",
      after: "/images/B&A-skin/B&A-rosacea-treatment3.webp",
    },
  ];
  return (
    <div className="min-h-screen bg-cream font-inter overflow-hidden">
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-rose opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-taupe opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-glass backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-rose/20"
          >
            <Sparkles className="w-4 h-4 text-wine" />
            <span className="text-sm text-brown">
              Nexus Clinic Kuala Lumpur
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-georgia text-brown mb-6 leading-tight"
          >
            Calm the redness. Control the flare- ups. Feel confident in your
            skin again.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-taupe max-w-3xl mx-auto mb-12"
          >
            Rosacea can make your face look "hot" even when you feel fine. It
            can sting, flush, and flare without warning. At Nexus Clinic Kuala
            Lumpur, we build a practical plan that fits Malaysian weather, your
            skin type, and your daily routine.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button className="group bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all duration-300 flex items-center gap-2 text-lg shadow-lg hover:shadow-xl">
              Start Your Journey
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-wine text-wine px-8 py-4 rounded-full hover:bg-wine/5 transition-all duration-300 text-lg">
              Book Consultation
            </button>
          </motion.div>

          {/* Trust Section - SEMUA KATA DARI PDF */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          >
            <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-rose/20 text-left">
              <MapPin className="w-6 h-6 text-wine mb-3" />
              <h3 className="font-semibold text-brown mb-2">
                Central KL location
              </h3>
              <p className="text-sm text-taupe">
                Nexus Clinic Kuala Lumpur, LG 10, Lower Ground Floor, Wisma UOA
                II, Jalan Pinang, 50450 Kuala Lumpur. Mobile: 016-7025699 /
                03-21635699.
              </p>
            </div>
            <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-rose/20 text-left">
              <Heart className="w-6 h-6 text-wine mb-3" />
              <h3 className="font-semibold text-brown mb-2">
                Sensitive-skin approach
              </h3>
              <p className="text-sm text-taupe">
                gentle skincare, trigger control, and step-by-step treatment
              </p>
            </div>
            <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-rose/20 text-left">
              <Shield className="w-6 h-6 text-wine mb-3" />
              <h3 className="font-semibold text-brown mb-2">
                Advanced clinic options
              </h3>
              <p className="text-sm text-taupe">
                for redness like laser and light-based treatments when
                appropriate
              </p>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-sm text-taupe mt-6 bg-glass backdrop-blur-sm p-4 rounded-2xl inline-block mx-auto"
          >
            Clear expectations: rosacea can be controlled, but it often needs
            ongoing care because symptoms may return
          </motion.p>
        </div>
      </motion.section>

      {/* What Is Rosacea Section - SEMUA KATA DARI PDF */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-6">
                What Is Rosacea?
              </h2>
              <p className="text-lg text-taupe mb-4">
                Rosacea is a long- term inflammatory skin condition that usually
                affects the face. Many people notice persistent redness,
                flushing, visible small blood vessels, and sometimes acne- like
                bumps.
              </p>
              <p className="text-lg text-taupe mb-8">
                It is not caused by poor hygiene and it is not contagious.
              </p>

              <h3 className="text-2xl font-georgia text-brown mb-4">
                What rosacea can look like in real life
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-3 bg-wine rounded-full"></div>
                  <span className="text-taupe">
                    Redness across cheeks, nose, forehead, and chin
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-3 bg-wine rounded-full"></div>
                  <span className="text-taupe">
                    Flushing that comes and goes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-3 bg-wine rounded-full"></div>
                  <span className="text-taupe">
                    Small bumps or pus-filled spots that look like acne
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-3 bg-wine rounded-full"></div>
                  <span className="text-taupe">
                    Dry, sensitive skin that stings with normal products
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-3 bg-wine rounded-full"></div>
                  <span className="text-taupe">
                    Eye symptoms like sore eyelids or gritty eyes in some people
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-rose to-wine opacity-20 rounded-3xl blur-3xl"></div>
              <img
                src="/images/skin/rosacea-treatment.webp"
                alt="Rosacea skin condition showing redness across cheeks, nose, forehead, and chin"
                className="rounded-3xl shadow-2xl relative z-10 w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Rosacea vs Acne Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-6">
              Rosacea vs Acne: Why Many People Get the Wrong Treatment
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              variants={scaleIn}
              className="bg-white p-8 rounded-3xl shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose/20 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-rose" />
                </div>
                <h3 className="text-xl font-georgia text-brown">
                  Key Difference
                </h3>
              </div>
              <p className="text-taupe">
                Rosacea can look like acne, but they are not the same. Using
                harsh acne products can make rosacea worse because rosacea skin
                is often sensitive.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-8 rounded-3xl shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-wine/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-wine" />
                </div>
                <h3 className="text-xl font-georgia text-brown">NHS Warning</h3>
              </div>
              <p className="text-taupe">
                The NHS also notes rosacea can resemble other conditions like
                acne, dermatitis, and lupus, which is why proper diagnosis
                matters.
              </p>
            </motion.div>
          </div>

          {/* Common Rosacea Triggers in Malaysia */}
          <motion.div variants={fadeInUp} className="mt-16">
            <h2 className="text-4xl md:text-5xl font-georgia text-brown text-center mb-6">
              Common Rosacea Triggers in Malaysia
            </h2>
            <p className="text-lg text-taupe text-center max-w-3xl mx-auto mb-8">
              Rosacea triggers are personal, but some are very common,
              especially in a hot, humid country like Malaysia.
            </p>

            <div className="bg-cream p-8 rounded-3xl mb-8">
              <h3 className="text-xl font-georgia text-brown mb-4">
                The NHS lists common triggers like:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  "alcohol",
                  "spicy food",
                  "hot drinks",
                  "sunlight",
                  "hot or cold temperatures",
                  "exercise",
                  "stress",
                ].map((trigger, i) => (
                  <div
                    key={i}
                    className="bg-white p-3 rounded-xl text-center text-brown text-sm"
                  >
                    {trigger}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-georgia text-brown mb-4 mt-8">
                The American Academy of Dermatology also highlights triggers
                like:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["sunlight", "heat", "stress", "alcohol", "spicy foods"].map(
                  (trigger, i) => (
                    <div
                      key={i}
                      className="bg-white p-3 rounded-xl text-center text-brown text-sm"
                    >
                      {trigger}
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="bg-wine text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-georgia mb-4">
                KL reality check: what often sets people off
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Outdoor heat and humidity",
                  "Sun exposure (even short commutes)",
                  "Spicy meals and hot drinks",
                  "Gym sessions with intense cardio",
                  "Stress and poor sleep",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm opacity-90">
                A simple trigger diary (notes on food, weather, skincare,
                stress) helps a lot.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Diagnosis Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-6">
              Diagnosis: How Rosacea Is Confirmed
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-3xl"
            >
              <Stethoscope className="w-10 h-10 text-wine mb-4" />
              <p className="text-taupe mb-4">
                Diagnosis is usually clinical. A doctor examines your skin and
                asks about symptoms and triggers. Tests may be used to rule out
                look- alike conditions.
              </p>
              <div className="bg-white p-4 rounded-xl border border-rose/20">
                <p className="text-sm text-brown">
                  <span className="font-semibold">
                    Important for Malaysian skin tones:
                  </span>{" "}
                  Mayo Clinic notes some rosacea signs (like visible veins and
                  flushing) can be harder to see on brown or Black skin, so
                  doctors also pay attention to swelling, bumps, stinging, and
                  dryness.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-rose/10 p-8 rounded-3xl border border-rose/20"
            >
              <Eye className="w-10 h-10 text-wine mb-4" />
              <h3 className="text-2xl font-georgia text-brown mb-4">
                If your eyes are involved
              </h3>
              <p className="text-taupe mb-4">
                If you have eye pain, blurred vision, light sensitivity, or a
                red gritty eye, the NHS advises urgent assessment because
                keratitis can be serious.
              </p>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-sm text-wine font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  If your eyes are involved, seek urgent assessment
                </p>
              </div>
            </motion.div>
          </div>

          {/* Rosacea Treatment Plan */}
          <motion.div variants={fadeInUp} className="mt-16">
            <h2 className="text-4xl md:text-5xl font-georgia text-brown text-center mb-6">
              Rosacea Treatment in Malaysia: The Plan That Works Best
            </h2>
            <p className="text-lg text-taupe text-center max-w-3xl mx-auto mb-8">
              There is no "one product" that fixes rosacea forever. The best
              results usually come from combining:
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Flower2, title: "gentle daily care" },
                { icon: Shield, title: "trigger control" },
                { icon: Pill, title: "targeted medication (if needed)" },
                {
                  icon: Zap,
                  title:
                    "laser or light therapy for persistent redness or visible vessels (if needed)",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-cream p-6 rounded-2xl"
                >
                  <item.icon className="w-8 h-8 text-wine mb-3" />
                  <p className="text-brown text-sm">{item.title}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-wine font-semibold text-lg bg-wine/5 p-6 rounded-3xl">
              Rosacea cannot be cured, but treatment can control symptoms and
              prevent it from getting worse.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Step 1: Calm Your Skin Barrier */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-4">
              1: Calm Your Skin Barrier (This Is Non- Negotiable)
            </h2>
            <p className="text-xl text-wine italic">
              If your skin barrier is irritated, even the best medicine
              struggles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-8 rounded-3xl shadow-xl"
            >
              <h3 className="text-2xl font-georgia text-brown mb-6">
                What to do daily
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Use gentle skincare for sensitive skin
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Wear SPF 30+ daily (even on cloudy days)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Avoid rubbing, scrubbing, and "peeling" products when
                    flaring
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-8 rounded-3xl shadow-xl"
            >
              <h3 className="text-2xl font-georgia text-brown mb-6">
                What to avoid
              </h3>
              <div className="bg-rose/10 p-6 rounded-xl">
                <Ban className="w-8 h-8 text-wine mb-3" />
                <p className="text-taupe">
                  <span className="font-semibold text-brown">
                    The Primary Care Dermatology Society
                  </span>{" "}
                  warns to avoid steroid creams on the face for rosacea because
                  they can worsen it.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Step 2: Prescription Creams and Gels */}
          <motion.div variants={fadeInUp} className="mt-16">
            <h2 className="text-3xl md:text-4xl font-georgia text-brown mb-6">
              Step 2: Prescription Creams and Gels (Most Mild to Moderate Cases
              Start Here)
            </h2>

            <div className="bg-white p-8 rounded-3xl shadow-xl mb-8">
              <h3 className="text-xl font-georgia text-brown mb-4">
                For acne- like bumps (papules and pustules)
              </h3>
              <p className="text-taupe mb-4">
                Mayo Clinic lists common topical options:
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {["azelaic acid", "metronidazole", "ivermectin"].map(
                  (med, i) => (
                    <div
                      key={i}
                      className="bg-cream p-4 rounded-xl text-center"
                    >
                      <p className="text-brown font-medium">{med}</p>
                    </div>
                  ),
                )}
              </div>

              <div className="bg-wine/5 p-6 rounded-xl">
                <h4 className="font-semibold text-brown mb-2">
                  How fast do they work?
                </h4>
                <p className="text-taupe text-sm">
                  Mayo Clinic notes azelaic acid and metronidazole may take 2 to
                  6 weeks, and ivermectin may take longer, but results can last
                  longer than metronidazole in some cases.
                </p>
              </div>

              <div className="mt-6 p-4 bg-rose/10 rounded-xl">
                <p className="text-sm text-brown">
                  AAD also lists FDA- approved options for acne- like rosacea
                  breakouts, including ivermectin, metronidazole, azelaic acid,
                  and low- dose doxycycline for longer- term inflammatory
                  control.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* For persistent facial redness & Step 3 */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="bg-cream p-8 rounded-3xl mb-8">
              <h3 className="text-2xl font-georgia text-brown mb-4">
                For persistent facial redness
              </h3>
              <p className="text-taupe mb-4">
                Mayo Clinic lists brimonidine and oxymetazoline as topical
                options that reduce flushing by constricting blood vessels, with
                a temporary effect and possible rebound redness if overused.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-georgia text-brown mb-6">
              Step 3: Tablets (When Rosacea Is More Inflamed)
            </h2>
            <p className="text-lg text-taupe mb-8">
              If you have more severe bumps or inflammation, doctors may use
              oral medication.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-light p-6 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-wine mb-3" />
                <h4 className="font-semibold text-brown mb-2">The NHS notes</h4>
                <p className="text-sm text-taupe">
                  a GP may prescribe antibiotics for 6 to 16 weeks.
                </p>
              </div>
              <div className="bg-light p-6 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-wine mb-3" />
                <h4 className="font-semibold text-brown mb-2">
                  Mayo Clinic notes
                </h4>
                <p className="text-sm text-taupe">
                  doxycycline is commonly used for more serious rosacea with
                  bumps and pimples.
                </p>
              </div>
              <div className="bg-light p-6 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-wine mb-3" />
                <h4 className="font-semibold text-brown mb-2">AAD describes</h4>
                <p className="text-sm text-taupe">
                  low-dose doxycycline as an anti-inflammatory (non-antibiotic
                  dose) option that can be used long term for control in some
                  patients.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Laser and Light Treatments */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-6">
              Laser and Light Treatments for Rosacea in Kuala Lumpur
            </h2>
            <p className="text-lg text-taupe">
              If your main problem is long- lasting redness or visible blood
              vessels, skincare alone often feels too slow. This is where laser
              and IPL can help.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-3xl shadow-xl mb-8"
          >
            <p className="text-taupe mb-4">
              Mayo Clinic states laser treatment can improve enlarged blood
              vessels and long- term redness, but repeat treatments may be
              needed. It also lists possible side effects like redness,
              bruising, swelling, and pigment changes, especially in darker skin
              tones. AAD also shows clinical improvement after laser treatments
              for persistent redness and visible veins.
            </p>
          </motion.div>

          <h3 className="text-2xl font-georgia text-brown mb-6">
            Common clinic options you'll see in Malaysia
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h4 className="text-xl font-georgia text-brown mb-3">
                1) IPL (Intense Pulsed Light) for redness and rosacea
              </h4>
              <p className="text-sm text-taupe mb-4">
                IPL targets redness and broken capillaries using broad- spectrum
                light. Some KL clinics specifically market M22 IPL for rosacea
                and redness, and one KL provider lists pricing "from RM688 per
                session."
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h4 className="text-xl font-georgia text-brown mb-3">
                2) Vascular lasers (yellow laser, PDL-style, Nd:YAG-type
                systems)
              </h4>
              <p className="text-sm text-taupe mb-4">
                Vascular lasers target blood vessels more directly. A Malaysian
                clinic page describes vascular laser for rosacea and facial
                redness, typically with gradual improvement over 3 to 5 sessions
                and minimal downtime. Dual yellow laser pages in KL also
                position it for flushed cheeks and rosacea- related redness.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h4 className="text-xl font-georgia text-brown mb-3">
                3) Combination plans
              </h4>
              <p className="text-sm text-taupe">
                Many KL competitors promote combination care: medication to calm
                inflammation first, then laser or IPL to "clean up" persistent
                redness and vessels.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* What Does Treatment Feel Like & How Many Sessions */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-cream p-8 rounded-3xl">
                <h3 className="text-2xl font-georgia text-brown mb-4">
                  What Does a Rosacea Laser or IPL Session Feel Like?
                </h3>
                <p className="text-taupe">
                  Most people describe it as a warm snapping sensation, similar
                  to a rubber band flick, with mild redness after. Some vascular
                  laser providers describe redness fading within hours and
                  sessions lasting around 20 to 40 minutes.
                </p>
              </div>

              <div className="bg-wine text-white p-8 rounded-3xl">
                <h3 className="text-2xl font-georgia mb-4">
                  How Many Sessions Do You Need?
                </h3>
                <p className="mb-4">It depends on:</p>
                <ul className="space-y-2 text-sm">
                  <li>• how long you've had rosacea</li>
                  <li>• how intense the redness is</li>
                  <li>• whether you have visible vessels</li>
                  <li>• your skin tone and sensitivity</li>
                  <li>
                    • whether you are also treating bumps and inflammation
                  </li>
                </ul>
                <p className="mt-4 text-sm">
                  A vascular laser provider in Malaysia describes gradual
                  improvement over 3 to 5 sessions for redness and rosacea. Many
                  people also need maintenance over time because rosacea tends
                  to return.
                </p>
              </div>
            </div>

            {/* Nexus Clinic Section */}
            <div className="bg-cream p-8 rounded-3xl">
              <h2 className="text-3xl font-georgia text-brown mb-4">
                Rosacea Treatment at Nexus Clinic Kuala Lumpur: What Makes the
                Plan Feel Different
              </h2>
              <p className="text-taupe mb-6">
                We do not treat rosacea like a "one facial and done" problem.
              </p>

              <h3 className="text-xl font-georgia text-brown mb-4">
                What you can expect
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-taupe mb-6">
                <li>
                  A proper assessment (redness-only vs redness + bumps vs ocular
                  symptoms)
                </li>
                <li>
                  A skin-barrier reset plan with gentle products and sunscreen
                  habits
                </li>
                <li>
                  Medical treatment when needed (topical or oral) based on your
                  symptoms
                </li>
                <li>
                  Laser or IPL options when persistent redness or visible veins
                  are the main concern
                </li>
                <li>
                  Trigger strategy for Malaysia (heat, sun, spicy food, stress)
                </li>
              </ol>

              <div className="bg-white p-6 rounded-2xl">
                <p className="text-brown">
                  <span className="font-semibold">Visit us:</span> LG 10, Lower
                  Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur.
                  Mobile: 016- 7025699 / 03- 21635699.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-6">
              Cost of Rosacea Treatment in Malaysia (What to Budget)
            </h2>
            <p className="text-lg text-taupe mb-8">
              Prices vary based on clinic, device, and how many sessions you
              need.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <p className="text-taupe mb-2">
                    Directory listings show rosacea treatment in Kuala Lumpur
                  </p>
                  <p className="text-3xl font-georgia text-wine">
                    "from RM189"
                  </p>
                  <p className="text-sm text-brown">
                    (varies by clinic and method).
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <p className="text-taupe mb-2">
                    IPL services across Malaysia are listed
                  </p>
                  <p className="text-3xl font-georgia text-wine">
                    "from RM499"
                  </p>
                  <p className="text-sm text-brown">
                    on a directory page (varies by clinic).
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <p className="text-taupe mb-2">
                    A KL clinic page lists M22 IPL
                  </p>
                  <p className="text-3xl font-georgia text-wine">
                    "from RM688 per session."
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-georgia text-brown mb-6">
                  What usually drives cost
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-wine rounded-full"></div>
                    <span className="text-taupe">
                      Treatment type (topicals vs oral meds vs laser/PL)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-wine rounded-full"></div>
                    <span className="text-taupe">
                      How many areas are treated (cheeks only vs full face)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-wine rounded-full"></div>
                    <span className="text-taupe">
                      Number of sessions (often 3 to 5 for visible redness work)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-wine rounded-full"></div>
                    <span className="text-taupe">Need for maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ===== PAGES 8-10 ===== */}
      {/* Competitor Snapshot & FAQ */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Competitor Snapshot */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-georgia text-brown mb-6">
              Competitor Snapshot: What Top Rosacea Pages in KL Typically
              Promote
            </h2>
            <p className="text-taupe mb-4">
              When you search "rosacea treatment Kuala Lumpur," you'll see a few
              patterns:
            </p>
            <ul className="list-disc list-inside space-y-2 text-taupe mb-4">
              <li>
                Directory ranking pages listing many clinics and reviews, like
                Erufu Care (34 clinics listed for KL).
              </li>
              <li>
                Laser-first pages promoting vascular lasers or IPL for broken
                capillaries and facial redness.
              </li>
              <li>
                Dual yellow laser and "redness laser" pages highlighting
                vascular wavelength targeting.
              </li>
              <li>
                Combination plans that include prescriptions plus laser or
                light-based therapy.
              </li>
            </ul>
            <p className="text-wine font-semibold">
              How Nexus Clinic KL positions differently is simple: we start by
              calming inflammation and triggers, then add technology when it
              actually fits your rosacea type.
            </p>
          </motion.div>

          {/* FAQ Section - SEMUA DARI PAGES 8-10 */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-georgia text-brown mb-8 text-center">
              People Also Ask (PAA-Style) FAQs: Rosacea Treatment Malaysia
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "1) Can rosacea be cured permanently?",
                  a: "No. Rosacea cannot be cured, but treatment can control symptoms and reduce flare-ups.",
                },
                {
                  q: "2) What is the best treatment for rosacea?",
                  a: "It depends on symptoms. Topicals like azelaic acid, metronidazole, or ivermectin are common for bumps. Laser or IPL can help persistent redness and visible blood vessels.",
                },
                {
                  q: "3) What triggers rosacea flare-ups?",
                  a: "Common triggers include sunlight, heat, stress, alcohol, spicy foods, and hot drinks.",
                },
                {
                  q: "4) Is rosacea the same as acne?",
                  a: "No. Rosacea can look like acne but often comes with flushing and sensitivity, and harsh acne products can worsen it. The NHS also notes rosacea can mimic acne and dermatitis.",
                },
                {
                  q: "5) How long do rosacea creams take to work?",
                  a: "Mayo Clinic notes azelaic acid and metronidazole may take 2 to 6 weeks. Ivermectin may take longer, but results can last longer than metronidazole.",
                },
                {
                  q: "6) Do antibiotics help rosacea?",
                  a: "Yes, especially when there are bumps and inflammation. The NHS notes antibiotics may be used for 6 to 16 weeks, and doxycycline is a common option.",
                },
                {
                  q: "7) Does laser or IPL work for rosacea redness?",
                  a: "It can. Mayo Clinic states laser can improve enlarged blood vessels and long- term redness, and AAD shows improvement after laser therapy in clinical examples.",
                },
                {
                  q: "8) How many laser sessions do I need for rosacea?",
                  a: "It varies, but a Malaysian vascular laser provider describes gradual improvement over 3 to 5 sessions, and maintenance may be needed.",
                },
                {
                  q: "9) Is rosacea contagious?",
                  a: "No. The NHS states rosacea is not contagious.",
                },
                {
                  q: "10) Can rosacea affect the eyes?",
                  a: "Yes. The NHS lists sore eyelids, crusting, and eye irritation, and advises urgent assessment for eye pain, blurred vision, light sensitivity, or red gritty eye because keratitis can be serious.",
                },
                {
                  q: "11) Should I use steroid cream on rosacea?",
                  a: "Usually no. PCDS advises avoiding steroid creams because they can make rosacea worse.",
                },
                {
                  q: "12) How much does rosacea treatment cost in Kuala Lumpur?",
                  a: "Costs depend on treatment type. Directory listings show rosacea treatment 'from RM189' and IPL 'from RM499,' while some KL IPL providers list from RM688 per session.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-cream p-6 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-brown mb-2">{faq.q}</h3>
                  <p className="text-sm text-taupe">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-wine"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-georgia mb-6"
          >
            CTA (Website-ready)
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl mb-8">
            If you're searching for rosacea treatment in Kuala Lumpur or facial
            redness treatment in Malaysia, start with a plan that calms your
            skin first and targets the right trigger second.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 p-8 rounded-3xl"
          >
            <p className="text-lg font-semibold mb-2">
              Nexus Clinic Kuala Lumpur
            </p>
            <p>
              LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala
              Lumpur
            </p>
            <p className="mt-2">Mobile: 016- 7025699 / 03- 21635699</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default RosaceaTreatmentLanding;
