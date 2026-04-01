"use client";

import { motion } from "framer-motion";
import {
  Moon,
  Heart,
  Calendar,
  ChevronRight,
  MapPin,
  Phone,
  Award,
  Users,
  AlertCircle,
  CheckCircle,
  Activity,
  Wind,
  Droplet,
  ThermometerSun,
  Star,
  Cloud,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const HormonReplaceLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "regenerative/hormoneReplacement");

  const images = {
    heroWoman:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    consultation:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    clinic:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1191&q=80",
    hormones: "/images/regenerative/hormone-replacement.webp",
    wellness:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1220&q=80",
  };

  return (
    <div className="bg-cream min-h-screen font-inter">
      {/* Hero Section - Semua Kata dari PDF */}
      <section className="relative overflow-hidden bg-linear-to-b from-cream to-light pt-16 lg:pt-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h1 className="font-georgia text-4xl lg:text-5xl xl:text-6xl text-brown leading-tight">
                Hormone Replacement Therapy in Malaysia at Nexus Clinic Kuala
                Lumpur
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-rose font-medium">
                  Feel like yourself again, without guessing what your hormones
                  are doing.
                </p>

                <p className="text-lg text-taupe">
                  Menopause symptoms, low energy, poor sleep, brain fog, and low
                  libido can make daily life feel heavier than it should.
                </p>

                <p className="text-lg text-brown font-medium bg-wine/5 p-4 rounded-lg">
                  At Nexus Clinic Kuala Lumpur, we keep HRT simple, medical, and
                  personalised, so you get a plan you can actually trust.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative z-10 bg-glass backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <div>
                      <p className="font-georgia text-brown font-medium">
                        Doctor-guided, confidential care
                      </p>
                      <p className="text-taupe text-sm">
                        in the heart of Kuala Lumpur
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <div>
                      <p className="font-georgia text-brown font-medium">
                        Personalised hormone balancing for men and women
                      </p>
                      <p className="text-taupe text-sm">
                        (not a one-size-fits-all package)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <div>
                      <p className="font-georgia text-brown font-medium">
                        Central KL location near KLCC
                      </p>
                      <p className="text-taupe text-sm">
                        LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang,
                        50450 Kuala Lumpur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <div>
                      <p className="font-georgia text-brown font-medium">
                        Contact
                      </p>
                      <p className="text-taupe text-sm">
                        016-7025699 / 03-21635699
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <div>
                      <p className="font-georgia text-brown font-medium">
                        Clear follow-ups and safety monitoring
                      </p>
                      <p className="text-taupe text-sm">
                        because HRT should never be rushed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Is Hormone Replacement Therapy (HRT)? - Dengan Gambar */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl lg:text-4xl text-brown">
                What Is Hormone Replacement Therapy (HRT)?
              </h2>

              <div className="space-y-4 text-taupe leading-relaxed">
                <p>
                  Hormone Replacement Therapy (HRT) is a medical treatment that
                  replaces hormones that have dropped, most commonly during
                  menopause. For many women, that means replacing oestrogen, and
                  in women who still have a uterus, adding progestogen to
                  protect the womb lining.
                </p>
                <p>
                  In Malaysia, some clinics also use the term HRT more broadly
                  to describe hormone balancing for both women and men. Nexus
                  Clinic positions HRT as support for hormonal imbalance in both
                  genders, aimed at improving quality of life.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/regenerative/hormone-replacement.webp"
                  alt="Nexus Clinic Kuala Lumpur consultation room"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm">
                    Private consultation at Nexus Clinic Kuala Lumpur
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* The Symptoms That Make People Search for HRT in Kuala Lumpur */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="font-georgia text-3xl lg:text-4xl text-brown mb-8 text-center">
              The Symptoms That Make People Search for HRT in Kuala Lumpur
            </h2>

            <p className="text-taupe text-lg mb-6 text-center">
              A lot of patients do not walk in saying "I need hormones." They
              walk in saying:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-wine">
                <p className="text-brown italic">
                  "I wake up tired even after sleeping."
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-wine">
                <p className="text-brown italic">
                  "My mood feels off and I do not know why."
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-wine">
                <p className="text-brown italic">
                  "My hot flushes are embarrassing."
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-wine">
                <p className="text-brown italic">
                  "I feel dry, irritated, and intimacy hurts."
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-wine">
                <p className="text-brown italic">"My libido disappeared."</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-wine">
                <p className="text-brown italic">
                  "I keep gaining belly weight."
                </p>
              </div>
            </div>

            <p className="text-taupe bg-wine/5 p-4 rounded-lg">
              Hospitals in Malaysia describe common menopause symptoms such as
              hot flushes, night sweats, sleep disturbance, weight changes,
              reduced interest in sex or pain during intercourse, and urinary
              issues.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Who HRT Is For (and When It Makes Sense) */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl lg:text-4xl text-brown mb-8"
            >
              Who HRT Is For (and When It Makes Sense)
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="font-georgia text-xl text-wine mb-4">
                  HRT may be suitable if:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <span className="text-taupe">
                      Menopause symptoms are affecting your quality of life
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <span className="text-taupe">
                      You are in perimenopause or postmenopause and want relief
                      from moderate to severe symptoms
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <span className="text-taupe">
                      You have early or premature menopause, where raising
                      oestrogen levels can help protect bone health
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                    <span className="text-taupe">
                      You want a medically supervised plan with proper reviews
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="font-georgia text-xl text-wine mb-4">
                  HRT is not for everyone
                </h3>
                <p className="text-taupe mb-4">
                  Most reputable guidance advises avoiding or using extreme
                  caution with HRT if you have a history of breast or
                  endometrial cancer, blood clots, stroke, heart attack, liver
                  disease, or you are pregnant. Malaysian hospital pages list
                  similar contraindications.
                </p>
                <p className="text-brown font-medium bg-cream p-4 rounded-lg">
                  This is why a consult matters. It is not just about "starting
                  hormones." It is about starting the right plan safely.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Types of HRT (Simple Explanation) */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl lg:text-4xl text-brown mb-8"
            >
              Types of HRT (Simple Explanation)
            </motion.h2>

            <div className="space-y-6">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-wine"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  1) Oestrogen-only HRT
                </h3>
                <p className="text-taupe">
                  Usually recommended if you have had a hysterectomy (uterus
                  removed).
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-rose"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  2) Combined HRT (Oestrogen + Progestogen)
                </h3>
                <p className="text-taupe">
                  Used if you still have a uterus. Progestogen helps reduce the
                  risk of womb lining overgrowth and cancer risk linked to
                  oestrogen-only use.
                </p>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-taupe bg-wine/5 p-4 rounded-lg"
              >
                Gleneagles Malaysia summarises these as the two main approaches
                and explains the uterus-related difference clearly.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Ways to Take HRT (What Most Women Choose) */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl lg:text-4xl text-brown mb-4"
            >
              Ways to Take HRT (What Most Women Choose)
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-taupe mb-6">
              HRT can be taken in several forms, including tablets, patches,
              gels, sprays, and creams. Malaysian hospital pages also mention
              these routes.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-medium mb-4"
            >
              A practical way to think about it:
            </motion.p>

            <div className="space-y-4 mb-6">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <p className="text-taupe">
                  <span className="font-georgia text-brown">Systemic HRT</span>{" "}
                  (tablets, patch, gel) helps whole-body symptoms like hot
                  flushes, sleep, and mood
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <p className="text-taupe">
                  <span className="font-georgia text-brown">
                    Local vaginal oestrogen
                  </span>{" "}
                  can help vaginal dryness and bladder symptoms with minimal
                  systemic absorption, and some Malaysian women's health pages
                  discuss this option in that context
                </p>
              </motion.div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-medium bg-wine/5 p-4 rounded-lg"
            >
              Your doctor chooses based on symptoms, risk factors, lifestyle,
              and preference.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Benefits of HRT (What It Can Actually Help With) */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl lg:text-4xl text-brown mb-4"
            >
              Benefits of HRT (What It Can Actually Help With)
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-taupe mb-6">
              Major menopause societies and clinical resources consistently
              state that hormone therapy is the most effective option for:
            </motion.p>

            <motion.ul variants={fadeInUp} className="space-y-3 mb-8">
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <ThermometerSun className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-taupe">
                  Vasomotor symptoms — hot flushes and night sweats
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <Droplet className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-taupe">
                  Genitourinary syndrome of menopause like vaginal dryness and
                  discomfort
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <Activity className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-taupe">
                  It can also help prevent bone loss and fractures in suitable
                  patients.
                </span>
              </li>
            </motion.ul>

            <motion.div
              variants={fadeInUp}
              className="bg-wine/5 p-8 rounded-xl"
            >
              <p className="text-brown font-georgia text-xl mb-4">
                In plain words, HRT may help you:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <Moon className="w-4 h-4 text-rose" />
                  <span className="text-taupe">Sleep better</span>
                </li>
                <li className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-rose" />
                  <span className="text-taupe">
                    Feel calmer and less "wired" at night
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Wind className="w-4 h-4 text-rose" />
                  <span className="text-taupe">
                    Reduce hot flush intensity and frequency
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose" />
                  <span className="text-taupe">
                    Improve vaginal comfort and intimacy
                  </span>
                </li>
                <li className="flex items-center gap-2 col-span-2">
                  <Activity className="w-4 h-4 text-rose" />
                  <span className="text-taupe">
                    Support bones over time (especially important in early
                    menopause)
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Risks and Side Effects (Honest, Not Scary) */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl lg:text-4xl text-brown mb-8"
            >
              Risks and Side Effects (Honest, Not Scary)
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm mb-6"
            >
              <h3 className="font-georgia text-xl text-wine mb-4">
                Common side effects
              </h3>
              <p className="text-taupe">
                NHS and Malaysian hospital pages list side effects such as
                headache, breast tenderness, spotting or bleeding, mood changes,
                and fluid retention.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="font-georgia text-xl text-wine mb-4">
                Serious risks (usually small, but real)
              </h3>
              <p className="text-taupe mb-4">
                Depending on type, dose, route, and personal risk profile, HRT
                can be associated with:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-taupe">
                    A small increase in risk of blood clots and stroke in some
                    groups
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-taupe">
                    Breast cancer risk may increase with certain long-term
                    combined regimens, and risk differs by formulation and
                    duration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-taupe">
                    If you have a uterus and take oestrogen without progestogen,
                    risk to the womb lining rises, which is why combined therapy
                    matters
                  </span>
                </li>
              </ul>
              <p className="text-brown font-medium bg-cream p-4 rounded-lg">
                The key message from NHS-style patient guidance is that for many
                people the benefits outweigh the risks, especially when reviewed
                regularly and tailored to the patient.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* "Bioidentical" HRT in Malaysia (BHRT) - What You Should Know */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl lg:text-4xl text-brown mb-6"
            >
              "Bioidentical" HRT in Malaysia (BHRT) - What You Should Know
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-taupe mb-6">
              You will see "bioidentical hormones" promoted in Kuala Lumpur
              clinics. Some use BHRT as a label for hormones that match the
              body's hormone structure.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-wine"
            >
              <p className="text-brown font-medium mb-4">
                Two important clarifications:
              </p>
              <ol className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="bg-wine text-light w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 text-sm">
                    1
                  </span>
                  <span className="text-taupe">
                    Some body-identical hormones are available as regulated,
                    standard medicines.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-wine text-light w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 text-sm">
                    2
                  </span>
                  <span className="text-taupe">
                    Compounded bioidentical hormones may carry extra risk
                    because quality and dosing consistency can vary, and some
                    are not FDA-approved. Cleveland Clinic explains these
                    concerns, and the FDA has also raised safety flags around
                    certain compounded hormone pellets in adverse event reports.
                  </span>
                </li>
              </ol>
              <p className="text-brown">
                Nexus Clinic's HRT positioning mentions BHRT for men and women
                and quality-of-life support, so the safest approach is to ask
                directly what form is used, whether it is regulated, and how
                monitoring is done.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* HRT and Weight Gain (One of the Biggest Fears) */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl lg:text-4xl text-brown mb-6"
            >
              HRT and Weight Gain (One of the Biggest Fears)
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-taupe mb-4">
              Many women worry that HRT will cause weight gain.
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <p className="text-brown">
                NHS states there is little evidence that most types of HRT cause
                weight gain, and weight changes often happen during menopause
                regardless. Gleneagles Malaysia also addresses this directly and
                notes menopause itself affects weight, while lifestyle still
                matters most.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How Long Should You Stay on HRT? */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl lg:text-4xl text-brown mb-6"
            >
              How Long Should You Stay on HRT?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-taupe mb-4">
              There is no fixed "one-size" duration.
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <p className="text-brown">
                NHS guidance notes there's no fixed limit, with yearly reviews,
                and many people use HRT for 2 to 5 years for hot flushes,
                sometimes longer if benefits still outweigh risks. This is a
                decision you revisit, not a decision you "lock in forever."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What to Expect at Nexus Clinic Kuala Lumpur */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl lg:text-4xl text-brown text-center mb-4"
            >
              What to Expect at Nexus Clinic Kuala Lumpur
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-8"
            >
              A good HRT journey feels calm and structured.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <p className="text-brown font-medium mb-4">
                A typical plan looks like:
              </p>
              <ol className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="bg-rose text-light w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 text-sm">
                    1
                  </span>
                  <span className="text-taupe">
                    Private consultation (symptoms, goals, medical history,
                    family history)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-rose text-light w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 text-sm">
                    2
                  </span>
                  <span className="text-taupe">
                    Baseline checks if needed, especially when risk screening is
                    important
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-rose text-light w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 text-sm">
                    3
                  </span>
                  <span className="text-taupe">
                    A personalised recommendation: type of HRT, route, and a
                    realistic timeline
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-rose text-light w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 text-sm">
                    4
                  </span>
                  <span className="text-taupe">
                    Follow-up and monitoring: how you feel, side effects, and
                    whether adjustments are needed
                  </span>
                </li>
              </ol>
              <p className="text-brown bg-cream p-4 rounded-lg">
                Nexus Clinic's KL location and contact details are publicly
                listed across their site pages, which is helpful for patients
                who want an easy, central visit point in Kuala Lumpur.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Cost of HRT in Malaysia (What Influences Price) */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl lg:text-4xl text-brown text-center mb-4"
            >
              Cost of HRT in Malaysia (What Influences Price)
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-8"
            >
              HRT cost in Kuala Lumpur varies a lot because HRT is not one
              product. It is a plan.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <p className="text-brown font-medium mb-4">
                Your total cost depends on:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Consultation and follow-up frequency
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Lab work needed (not everyone needs the same panel)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Type and route of hormones (patch, gel, oral, local therapy)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Whether you are using regulated prescriptions or compounded
                    therapy
                  </span>
                </li>
              </ul>

              <div className="bg-cream p-6 rounded-lg mb-4">
                <p className="text-brown font-medium mb-3">
                  Examples from KL clinic pages and listings show wide
                  variation:
                </p>
                <ul className="space-y-2">
                  <li className="text-taupe">
                    • One clinic lists HRT costs in the range of RM300 to
                    RM1,300 depending on type and length.
                  </li>
                  <li className="text-taupe">
                    • Another clinic lists BHRT sessions from RM2,000 onwards.
                  </li>
                </ul>
              </div>

              <p className="text-brown font-medium">
                Use these as rough market signals. The best move is to ask for a
                clear breakdown so you understand what you are paying for.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Competitor Snapshot (What Top Results in Malaysia Emphasis) */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl lg:text-4xl text-brown text-center mb-6"
            >
              Competitor Snapshot (What Top Results in Malaysia Emphasis)
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-8"
            >
              When people search "hormone replacement therapy Malaysia" or "HRT
              Kuala Lumpur," several providers commonly appear:
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-wine">
                <p className="text-taupe">
                  <span className="font-georgia text-brown">
                    Pantai Hospitals:
                  </span>{" "}
                  focuses on menopause HRT, types (oestrogen-only vs combined),
                  symptoms, side effects and who should avoid it.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-wine">
                <p className="text-taupe">
                  <span className="font-georgia text-brown">
                    Gleneagles Malaysia:
                  </span>{" "}
                  similar hospital-style education with a strong FAQ section and
                  "two types of HRT" explanation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-wine">
                <p className="text-taupe">
                  <span className="font-georgia text-brown">
                    Medihope Clinic:
                  </span>{" "}
                  uses the term MHT and explains why progestin is needed when
                  the uterus is intact, plus baseline checks and risk-benefit
                  assessment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-wine">
                <p className="text-taupe">
                  <span className="font-georgia text-brown">
                    Private BHRT clinics:
                  </span>{" "}
                  tend to market "bioidentical" and anti-ageing benefits more
                  strongly.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine/10 p-8 rounded-xl"
            >
              <h3 className="font-georgia text-xl text-brown mb-4">
                How Nexus Clinic KL can stand out in content:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Keep the language simple and human
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Explain safety and monitoring clearly
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Make expectations realistic
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <span className="text-taupe">
                    Offer options, including non-hormonal support where
                    appropriate (so it feels patient-first, not sales-first)
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section - Semua 12 Pertanyaan */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl lg:text-4xl text-brown text-center mb-12"
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-4">
              {/* 1 */}
              <motion.details
                variants={fadeInUp}
                className="group bg-white rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-georgia text-brown font-medium">
                    1) What is HRT and why is it used?
                  </span>
                  <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-taupe">
                  HRT replaces declining hormones, mainly oestrogen and
                  sometimes progestogen, to ease menopause symptoms like hot
                  flushes, night sweats, mood changes, and vaginal dryness.
                </div>
              </motion.details>

              {/* 2 */}
              <motion.details
                variants={fadeInUp}
                className="group bg-white rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-georgia text-brown font-medium">
                    2) What are the two main types of HRT?
                  </span>
                  <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-taupe">
                  Oestrogen-only HRT is usually for women after hysterectomy.
                  Combined HRT is for women with a uterus to protect the womb
                  lining.
                </div>
              </motion.details>

              {/* 3 */}
              <motion.details
                variants={fadeInUp}
                className="group bg-white rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-georgia text-brown font-medium">
                    3) Is HRT safe?
                  </span>
                  <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-taupe">
                  For many women, especially under 60 or within around 10 years
                  of menopause, HRT can be safe when prescribed appropriately
                  and reviewed regularly. Risks vary by type and personal health
                  history.
                </div>
              </motion.details>

              {/* 4 */}
              <motion.details
                variants={fadeInUp}
                className="group bg-white rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-georgia text-brown font-medium">
                    4) Can HRT cause weight gain?
                  </span>
                  <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-taupe">
                  Most evidence and NHS guidance suggest HRT is not strongly
                  linked to weight gain. Menopause itself can affect weight and
                  fat distribution.
                </div>
              </motion.details>

              {/* 5 */}
              <motion.details
                variants={fadeInUp}
                className="group bg-white rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-georgia text-brown font-medium">
                    5) How soon does HRT start working?
                  </span>
                  <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-taupe">
                  Some people feel improvements in weeks, but timing varies
                  depending on symptoms and formulation.
                </div>
              </motion.details>

              {/* 6 */}
              <motion.details
                variants={fadeInUp}
                className="group bg-white rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-georgia text-brown font-medium">
                    6) How long can I take HRT?
                  </span>
                  <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-taupe">
                  There is no fixed limit for everyone. NHS guidance recommends
                  regular reviews, and many people take it for a few years,
                  sometimes longer if benefits outweigh risks.
                </div>
              </motion.details>

              {/* 7 */}
              <motion.details
                variants={fadeInUp}
                className="group bg-white rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-georgia text-brown font-medium">
                    7) Do I need progesterone with oestrogen?
                  </span>
                  <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-taupe">
                  If you still have your uterus, adding progestin/progestogen
                  helps reduce the risk of womb lining thickening linked to
                  oestrogen-only therapy.
                </div>
              </motion.details>

              {/* 8 */}
              <motion.details
                variants={fadeInUp}
                className="group bg-white rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-georgia text-brown font-medium">
                    8) What are the common side effects of HRT?
                  </span>
                  <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-taupe">
                  Headache, breast tenderness, mood changes, spotting or
                  bleeding, and fluid retention are listed side effects, and
                  they differ by person and HRT type.
                </div>
              </motion.details>

              {/* 9 */}
              <motion.details
                variants={fadeInUp}
                className="group bg-white rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-georgia text-brown font-medium">
                    9) Who should avoid HRT?
                  </span>
                  <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-taupe">
                  Women with certain histories such as breast or endometrial
                  cancer, blood clots, stroke, heart attack, liver disease, or
                  pregnancy are commonly listed as groups where HRT may be
                  contraindicated or needs specialist review.
                </div>
              </motion.details>

              {/* 10 */}
              <motion.details
                variants={fadeInUp}
                className="group bg-white rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-georgia text-brown font-medium">
                    10) What is BHRT and is it safer?
                  </span>
                  <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-taupe">
                  "Bioidentical" can mean different things. Some are regulated
                  products, while compounded versions may have extra risk due to
                  inconsistent dosing and limited evidence.
                </div>
              </motion.details>

              {/* 11 */}
              <motion.details
                variants={fadeInUp}
                className="group bg-white rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-georgia text-brown font-medium">
                    11) Are there non-hormonal options if I cannot take HRT?
                  </span>
                  <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-taupe">
                  Yes. Menopause societies discuss non-hormonal prescription
                  options for vasomotor symptoms, and treatment can be tailored
                  based on your risks and symptoms.
                </div>
              </motion.details>

              {/* 12 */}
              <motion.details
                variants={fadeInUp}
                className="group bg-white rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-georgia text-brown font-medium">
                    12) Where can I get HRT in Kuala Lumpur?
                  </span>
                  <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-taupe">
                  HRT is offered through hospitals and private clinics. Nexus
                  Clinic's KL address and phone contacts are publicly listed,
                  making it easy to enquire and book.
                </div>
              </motion.details>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section - Semua Kata */}
      <section className="py-20 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <p className="text-cream text-lg mb-4">
              If you're searching for hormone replacement therapy in Kuala
              Lumpur or HRT in Malaysia, start with a private consultation and a
              clear plan.
            </p>

            <div className="bg-wine backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <p className="text-light font-georgia text-2xl mb-4">
                Nexus Clinic Kuala Lumpur
              </p>
              <p className="text-cream/90 mb-2">
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>
              <p className="text-cream/90 mb-6">
                Phone: 016-7025699 / 03-21635699
              </p>

              <button className="bg-light text-wine px-8 py-4 rounded-lg hover:bg-cream transition-all duration-300 font-medium">
                Schedule Your Consultation
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HormonReplaceLanding;
