"use client";
import { motion } from "framer-motion";
import {
  Clock,
  Shield,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  XCircle,
  MapPin,
  Calendar,
  Award,
  Info,
  ChevronRight,
  Eye,
  PiggyBank,
  FileText,
  MessageCircle,
  Target,
  Activity,
  Droplet,
  Zap,
  AlertTriangle,
  ThumbsUp,
  HelpCircle,
  MapPinned,
  Building,
  Syringe,
  AlertOctagon,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";

interface underEyeFillerProps {
  locale: string;
}

export default function UnderEyeFiller({ locale }: underEyeFillerProps) {
  return (
    <div className="min-h-screen bg-light font-inter">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden bg-linear-to-br from-cream to-light py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-wine opacity-5 rounded-l-[100px] transform rotate-12"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center px-4 py-2 bg-wine bg-opacity-10 rounded-full"
              >
                <Sparkles className="w-4 h-4 text-light mr-2" />
                <span className="text-light font-medium text-sm">
                  Under Eye Filler in Kuala Lumpur, Malaysia | Nexus Clinic
                  Kuala Lumpur
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold font-georgia text-brown leading-tight">
                Stop looking tired{" "}
                <span className="text-wine">when you are not.</span>
              </h1>

              <p className="text-xl text-taupe leading-relaxed">
                Under eye filler smooths hollows that create shadows and "dark
                circles" in photos. At Nexus Clinic Kuala Lumpur, we aim for
                natural correction that still looks like you.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-wine to-rose rounded-3xl opacity-20 blur-3xl"></div>
              <img
                src="/images/skin/acne-treatment.webp"
                alt="Under eye filler treatment at Nexus Clinic"
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust Strip */}
      <motion.section
        className="py-12 px-4 bg-white border-y border-taupe border-opacity-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-3 p-4 bg-cream rounded-xl hover:bg-taupe hover:bg-opacity-10 transition-all"
            >
              <Calendar className="w-6 h-6 text-wine shrink-0" />
              <span className="text-sm text-brown">
                Established since 2001 (DoctorOnCall listing)
              </span>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-3 p-4 bg-cream rounded-xl hover:bg-taupe hover:bg-opacity-10 transition-all"
            >
              <MapPin className="w-6 h-6 text-wine shrink-0" />
              <span className="text-sm text-brown">
                Located at LG 10, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
                (Nexus Aesthetic site)
              </span>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-3 p-4 bg-cream rounded-xl hover:bg-taupe hover:bg-opacity-10 transition-all"
            >
              <MapPinned className="w-6 h-6 text-wine shrink-0" />
              <span className="text-sm text-brown">
                In KL's Golden Triangle area (DoctorOnCall listing)
              </span>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-3 p-4 bg-cream rounded-xl hover:bg-taupe hover:bg-opacity-10 transition-all"
            >
              <Building className="w-6 h-6 text-wine shrink-0" />
              <span className="text-sm text-brown">
                Aesthetic clinic offering non-surgical treatments and advanced
                laser services (DoctorOnCall listing)
              </span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Intro Section - A quick, real talk intro */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold font-georgia text-brown mb-4">
              A quick, real talk intro
            </h2>
            <p className="text-xl text-taupe">
              not all "dark circles" are the same
            </p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-brown mb-8 leading-relaxed"
          >
            Many people search under eye filler Malaysia because they look
            tired, even after good sleep. But the under-eye area can look dark
            for different reasons.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg font-medium text-wine mb-6"
          >
            Here are the most common ones:
          </motion.p>

          <div className="space-y-6">
            <motion.div
              variants={scaleIn}
              className="p-6 bg-cream rounded-2xl hover:shadow-xl transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl">
                  <Eye className="w-6 h-6 text-wine" />
                </div>
                <div>
                  <h3 className="font-bold text-brown mb-2">
                    1. Hollowing (shadowing)
                  </h3>
                  <p className="text-taupe">
                    A dip under the eye creates a shadow. This is where under
                    eye filler can help the most.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 bg-cream rounded-2xl hover:shadow-xl transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl">
                  <AlertCircle className="w-6 h-6 text-wine" />
                </div>
                <div>
                  <h3 className="font-bold text-brown mb-2">
                    2. Eye bags or swelling
                  </h3>
                  <p className="text-taupe">
                    If your issue is mainly a bulge or fluid retention, filler
                    may not be the best first option.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 bg-cream rounded-2xl hover:shadow-xl transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl">
                  <Droplet className="w-6 h-6 text-wine" />
                </div>
                <div>
                  <h3 className="font-bold text-brown mb-2">3. Pigmentation</h3>
                  <p className="text-taupe">
                    Some under-eye darkness is skin pigment. Filler does not
                    "erase" pigment. Many clinics recommend lasers, peels, or
                    other treatments for pigment-based dark circles. (Erufu Care
                    overview)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 bg-cream rounded-2xl hover:shadow-xl transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl">
                  <Activity className="w-6 h-6 text-wine" />
                </div>
                <div>
                  <h3 className="font-bold text-brown mb-2">
                    4. Thin skin with visible vessels
                  </h3>
                  <p className="text-taupe">
                    You can see bluish tones because the skin is thin. Sometimes
                    filler helps by improving contour, but it depends.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 p-6 bg-wine bg-opacity-5 rounded-2xl text-light border-l-4 border-wine font-medium"
          >
            At Nexus Clinic Kuala Lumpur, the goal is to identify your cause
            first. That way, the treatment actually matches the problem.
          </motion.p>
        </div>
      </motion.section>

      {/* What is Under Eye Filler */}
      <motion.section
        className="py-20 px-4 bg-cream"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-4xl font-bold font-georgia text-brown mb-6">
                What is under eye filler?
              </h2>
              <p className="text-lg text-brown leading-relaxed">
                Under eye filler is a dermal filler treatment used to improve
                the look of under-eye hollowness and the shadowing that comes
                with it. In medical terms, this is often described as improving
                infraorbital hollowing.
              </p>
              <p className="text-lg text-brown leading-relaxed">
                Most under-eye treatments use hyaluronic acid (HA) filler,
                because it can create soft-looking volume and is commonly used
                in facial contouring. Dermal fillers, in general, are used to
                add volume and improve facial contours.{" "}
                <span className="text-taupe">(Cleveland Clinic)</span>
              </p>

              <div className="p-6 bg-white rounded-2xl">
                <h3 className="font-bold text-brown mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-wine mr-2" />
                  Is under-eye filler "FDA approved"?
                </h3>
                <p className="text-brown mb-4">
                  It depends on the filler product and the exact indication.
                </p>
                <p className="text-brown mb-4">
                  The FDA has a specific approval for JUVEDERM VOLBELLA XC for
                  infraorbital hollowing in adults over 21. (FDA device page) At
                  the same time, the FDA also warns that injecting around the
                  eyes (periorbital area) is an unapproved use for many dermal
                  fillers, and approved indications vary by product. (FDA dermal
                  filler safety page)
                </p>
                <p className="text-rose font-medium">
                  So the right way to think about it is: under-eye filler is a
                  medical procedure, product choice matters, and technique
                  matters even more.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="relative">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Under eye filler procedure"
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </div>

              <div className="p-6 bg-white rounded-2xl">
                <h3 className="font-bold text-brown mb-4">
                  Tear trough filler vs under eye filler: what is the
                  difference?
                </h3>
                <p className="text-brown mb-3">
                  People use these terms interchangeably, but they are slightly
                  different.
                </p>
                <p className="text-brown">
                  Tear trough filler targets the groove that runs from the inner
                  corner of the eye downward (the tear trough). Under eye filler
                  is broader. It can include tear trough correction plus support
                  around the under-eye to cheek transition, depending on your
                  anatomy.
                </p>
                <p className="text-taupe mt-3">
                  Many clinics describe tear trough as the main hollow area, and
                  under-eye correction as a wider rejuvenation plan. (Dr Jane
                  Clinic page)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Who is under eye filler best for? */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold font-georgia text-brown mb-4">
              Who is under eye filler best for?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <div className="p-6 bg-green-50 rounded-2xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-brown mb-4 flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mr-2" />
                  You may be a good candidate if you have:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Under-eye hollows that create shadows
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      A "tired look" that shows up strongly in photos
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Mild under-eye lines caused by volume loss
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Good skin quality with minimal swelling tendency
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              <div className="p-6 bg-red-50 rounded-2xl border-2 border-red-200">
                <h3 className="text-xl font-bold text-brown mb-4 flex items-center">
                  <XCircle className="w-6 h-6 text-red-600 mr-2" />
                  You may not be the best candidate if you have:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Prominent eye bags or festoons (puffy swelling pockets)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Very thin skin where filler may show easily
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Strong pigmentation as the main issue (a combined plan is
                      often needed) (Erufu Care overview)
                    </span>
                  </li>
                </ul>
              </div>

              <motion.p
                variants={scaleIn}
                className="p-4 bg-cream rounded-xl text-taupe italic"
              >
                A proper assessment is important because under-eye filler should
                be conservative. This is one area where "more" does not mean
                "better."
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 p-8 bg-cream rounded-2xl"
          >
            <h3 className="text-2xl font-bold font-georgia text-brown mb-6">
              Areas that can be treated around the eyes
            </h3>
            <p className="text-brown mb-6">
              A good under-eye plan is not always "inject under the eye and
              done." Depending on your facial structure, your doctor may
              consider:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-white rounded-lg text-center text-brown font-medium shadow-sm">
                Tear trough hollow
              </div>
              <div className="p-4 bg-white rounded-lg text-center text-brown font-medium shadow-sm">
                Under-eye to cheek transition (lid-cheek junction)
              </div>
              <div className="p-4 bg-white rounded-lg text-center text-brown font-medium shadow-sm">
                Mid-cheek support (because cheeks hold up the under-eye
                visually)
              </div>
              <div className="p-4 bg-white rounded-lg text-center text-brown font-medium shadow-sm">
                Fine-tuning one side to restore symmetry
              </div>
            </div>
            <p className="text-center text-rose font-medium text-lg">
              The best result is subtle. You look rested, not different.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Treatment Experience - What the treatment feels like */}
      <motion.section
        className="py-20 px-4 bg-cream"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-4xl font-bold font-georgia text-brown mb-6">
                What the treatment feels like and how long it takes
              </h2>
              <p className="text-lg text-brown">
                Most under-eye filler sessions are quick, often done within a
                single visit. Many providers use numbing and gentle technique.
              </p>

              <p className="text-brown font-medium">
                What you can usually expect:
              </p>

              <div className="space-y-4">
                <motion.div
                  variants={fadeInUp}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl"
                >
                  <div className="p-3 bg-wine rounded-lg">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown">
                      Consultation first:
                    </h3>
                    <p className="text-taupe">
                      photos, facial assessment, goal-setting
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl"
                >
                  <div className="p-3 bg-wine rounded-lg">
                    <Syringe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown">Treatment:</h3>
                    <p className="text-taupe">small amounts placed carefully</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl"
                >
                  <div className="p-3 bg-wine rounded-lg">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown">Review advice:</h3>
                    <p className="text-taupe">
                      aftercare steps and what is normal versus not normal
                    </p>
                  </div>
                </motion.div>
              </div>

              <p className="text-taupe">
                Clinics commonly describe under-eye filler downtime as minimal,
                with possible mild swelling or bruising for a few days. (Dr Jane
                Clinic under-eye filler page)
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="p-6 bg-white rounded-2xl">
                <h3 className="text-2xl font-bold text-brown mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-wine mr-2" />
                  Results timeline: when you will look "normal" again
                </h3>
                <p className="text-brown mb-4">
                  Most people see improvement quickly, but the under-eye area is
                  sensitive, so it can look slightly swollen at first.
                </p>
                <p className="text-brown font-medium mb-4">
                  A realistic timeline:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start border-b border-cream pb-3">
                    <span className="font-bold text-wine w-28">Same day:</span>
                    <span className="text-brown">
                      visible improvement, possible puffiness
                    </span>
                  </div>
                  <div className="flex items-start border-b border-cream pb-3">
                    <span className="font-bold text-wine w-28">
                      Day 2 to 4:
                    </span>
                    <span className="text-brown">
                      swelling reduces for many people
                    </span>
                  </div>
                  <div className="flex items-start border-b border-cream pb-3">
                    <span className="font-bold text-wine w-28">
                      Around a week:
                    </span>
                    <span className="text-brown">
                      usually looks more settled
                    </span>
                  </div>
                  <div className="flex items-start border-b border-cream pb-3">
                    <span className="font-bold text-wine w-28">
                      A few weeks:
                    </span>
                    <span className="text-brown">
                      final refinement becomes clearer (your doctor will guide
                      you)
                    </span>
                  </div>
                </div>
                <p className="text-taupe mt-4">
                  Many clinics describe noticeable improvement immediately and
                  settling over the next few days. (Dr Jane Clinic under-eye
                  filler page)
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl">
                <h3 className="text-2xl font-bold text-brown mb-4">
                  How long does under eye filler last?
                </h3>
                <p className="text-brown mb-4">
                  Longevity varies with product, technique, and your metabolism.
                  In Malaysia clinic guides, you often see under-eye filler
                  lasting up to 12 months or around 9 to 12 months depending on
                  the case. (Dr Jane Clinic under-eye filler page; Sheen Clinic
                  tear trough guide)
                </p>
                <p className="text-rose font-medium">
                  If you want a long-lasting plan, the best approach is
                  maintenance at sensible intervals, not overfilling in one
                  sitting.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pros and Cons */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold font-georgia text-brown mb-4">
              Pros and cons (honest and simple)
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <div className="p-6 bg-green-50 rounded-2xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-brown mb-6 flex items-center">
                  <ThumbsUp className="w-6 h-6 text-green-600 mr-2" />
                  Pros
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Non-surgical improvement for hollows and shadowing
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Quick procedure, often minimal downtime (Dr Jane Clinic
                      under-eye filler page)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Can make you look more rested and less "drawn" in photos
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Dermal fillers are widely used for facial contour and
                      volume restoration (Cleveland Clinic)
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              <div className="p-6 bg-red-50 rounded-2xl border-2 border-red-200">
                <h3 className="text-2xl font-bold text-brown mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
                  Cons
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Not ideal if pigmentation is the main issue (Erufu Care
                      overview)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Risk of puffiness if overfilled
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-brown">Results are temporary</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-brown">
                      Under-eye work requires higher precision than many other
                      facial areas
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Side Effects and Risks */}
      <motion.section
        className="py-20 px-4 bg-cream"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold font-georgia text-brown mb-4">
              Side effects and risks you should know
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 mb-8"
          >
            <p className="text-brown mb-6">
              Most side effects are mild and temporary, such as swelling,
              redness, bruising, and tenderness. (Cleveland Clinic)
            </p>

            <h3 className="text-xl font-bold text-brown mb-4">
              Under-eye specific risks (more common concerns)
            </h3>
            <p className="text-brown mb-6">
              Moorfields (UK eye hospital group) highlights key risks for
              under-eye filler, including issues like discolouration and
              swelling, and explains why some patients may be better suited to
              surgical options. (Moorfields)
            </p>

            <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200 mb-6">
              <h4 className="text-xl font-bold text-brown mb-4 flex items-center">
                <AlertOctagon className="w-6 h-6 text-red-600 mr-2" />
                Rare but serious risks
              </h4>
              <p className="text-brown mb-4">
                This is important: fillers carry a small but real risk of
                serious complications, including vascular events that can affect
                vision.
              </p>
              <p className="text-brown">
                A professional guideline from the Royal Australian and New
                Zealand College of Ophthalmologists notes that fillers carry a
                small but definite risk of severe adverse effects including
                blindness, and stresses informed consent and urgency if symptoms
                occur. (RANZCO guideline PDF)
              </p>
            </div>

            <div className="p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
              <h4 className="text-xl font-bold text-brown mb-4 flex items-center">
                <Zap className="w-6 h-6 text-yellow-600 mr-2" />
                Get urgent medical help if you experience:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <span className="text-brown font-medium">
                    Severe worsening pain
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <span className="text-brown font-medium">
                    Skin turning pale, grey, or blotchy
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <span className="text-brown font-medium">
                    Any vision change, eye pain, drooping eyelid, severe
                    headache
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-rose font-bold text-lg">
                This is why choosing a reputable clinic in Kuala Lumpur matters
                more than chasing the lowest price.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold font-georgia text-brown mb-4">
              Under eye filler cost in Malaysia and Kuala Lumpur
            </h2>
            <p className="text-taupe">
              Prices vary based on clinic location, injector experience, and the
              brand used.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-cream rounded-2xl p-8 mb-8"
          >
            <p className="text-brown font-medium mb-6">
              Here are real Malaysia-based price references you will commonly
              see:
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 bg-white rounded-xl flex items-start space-x-3">
                <PiggyBank className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Tear trough (under-eye) filler often listed around RM 1,500 to
                  RM 2,200 per 1ml, with some cases needing 1 to 2 syringes.
                  (NextMed Clinic price guide)
                </span>
              </div>
              <div className="p-4 bg-white rounded-xl flex items-start space-x-3">
                <PiggyBank className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  KL dermal filler pricing is commonly cited around RM 1,800 to
                  RM 3,000 per syringe in clinic guides. (Dr Jane Clinic pricing
                  guide)
                </span>
              </div>
              <div className="p-4 bg-white rounded-xl flex items-start space-x-3">
                <PiggyBank className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown">
                  Some clinics cite tear trough starting around RM 1,800 to RM
                  2,500 depending on severity and product. (Sheen Clinic)
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-brown mb-4">
              What changes the total cost
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown">How deep your hollows are</span>
              </li>
              <li className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown">
                  Whether both sides need equal correction
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown">
                  Product type (some are designed to be softer for delicate
                  areas)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown">
                  Whether your plan includes cheek support or combination
                  treatments
                </span>
              </li>
            </ul>

            <p className="text-rose font-medium p-4 bg-white rounded-xl text-lg">
              At Nexus Clinic Kuala Lumpur, a proper assessment is the safest
              way to estimate total cost because under-eye correction should be
              customised, not guessed.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Under eye filler vs other treatments */}
      <motion.section
        className="py-20 px-4 bg-cream"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold font-georgia text-brown mb-4">
              Under eye filler vs other treatments
            </h2>
            <p className="text-taupe">(what to choose and why)</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={scaleIn}
              className="p-6 bg-white rounded-2xl hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-wine mb-3">
                Under eye filler vs eye cream
              </h3>
              <p className="text-brown">
                Eye creams can improve hydration and texture. They cannot
                rebuild lost volume in a hollow.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 bg-white rounded-2xl hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-wine mb-3">
                Under eye filler vs laser
              </h3>
              <p className="text-brown">
                Lasers can help pigment-related darkness and skin quality. They
                do not replace volume. Many patients with mixed concerns do best
                with a combined plan. (Erufu Care overview)
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 bg-white rounded-2xl hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-wine mb-3">
                Under eye filler vs PRP
              </h3>
              <p className="text-brown">
                PRP can help skin quality for some patients, but it does not
                create the same structural correction as filler.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 bg-white rounded-2xl hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-wine mb-3">
                Under eye filler vs surgery
              </h3>
              <p className="text-brown">
                If you have strong eye bags or significant skin laxity, surgery
                may be the better long-term option. Moorfields discusses why
                surgery might be more suitable in certain under-eye cases.
                (Moorfields)
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Competitor Analysis */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold font-georgia text-brown mb-4">
              What top competitors in Malaysia are doing, and what they often
              miss
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-cream rounded-2xl p-8 mb-8"
          >
            <p className="text-brown mb-6">
              When you search "under eye filler Kuala Lumpur" or "tear trough
              filler Malaysia," you commonly see a mix of:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown">
                  Clinic pages (for example, Dr Jane Clinic, Dr Chong Clinic,
                  Premier Clinic) (Dr Jane under-eye filler page; Dr Chong blog;
                  Premier Clinic filler page)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown">
                  Aggregators and directories that list clinics and reviews
                  (Erufu Care) (Erufu Care tear trough listing)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown">
                  Price guides that give broad ranges (like NextMed's pricing
                  article) (NextMed price guide)
                </span>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-green-50 rounded-xl">
                <h3 className="text-xl font-bold text-brown mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                  What they do well
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-2">
                    <ThumbsUp className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                    <span className="text-brown text-sm">
                      They explain who under-eye filler is for and what it can
                      improve (Dr Jane under-eye filler page)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ThumbsUp className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                    <span className="text-brown text-sm">
                      They reassure about minimal downtime and common side
                      effects (Dr Jane under-eye filler page)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ThumbsUp className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                    <span className="text-brown text-sm">
                      They publish pricing ranges that help users plan a budget
                      (Dr Jane pricing guide; NextMed price guide)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-red-50 rounded-xl">
                <h3 className="text-xl font-bold text-brown mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  What many pages still miss (real pain points people search)
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-2">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                    <span className="text-brown text-sm">
                      A clear explanation of shadow vs pigment and when filler
                      will not solve "dark circles" (Erufu Care overview)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                    <span className="text-brown text-sm">
                      A simple but serious safety section explaining warning
                      signs and urgency (RANZCO guideline PDF)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                    <span className="text-brown text-sm">
                      What causes "puffy filler" and why conservative dosing
                      matters
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                    <span className="text-brown text-sm">
                      A realistic healing timeline, not just "no downtime"
                      claims
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                    <span className="text-brown text-sm">
                      How to choose a provider beyond "best clinic" marketing
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-rose font-bold p-4 bg-white rounded-xl text-center text-lg">
              This is where Nexus Clinic Kuala Lumpur aims to be clearer: honest
              suitability, conservative planning, and patient confidence.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Nexus Clinic */}
      <motion.section
        className="py-20 px-4 bg-wine text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold font-georgia mb-12"
          >
            Why choose Nexus Clinic Kuala Lumpur for under eye filler
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg mb-12 text-cream max-w-3xl mx-auto"
          >
            If you are comparing clinics in Kuala Lumpur, here are practical
            reasons patients often care about:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={scaleIn}
              className="p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-wine" />
              </div>
              <h3 className="text-xl font-bold text-wine mb-2">
                Established clinic
              </h3>
              <p className="text-sm text-wine">
                Founded in 2001. (DoctorOnCall listing)
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-wine" />
              </div>
              <h3 className="text-xl text-wine font-bold mb-2">
                Central KL location
              </h3>
              <p className="text-sm text-wine">
                Wisma UOA II, Jalan Pinang, near KL's Golden Triangle. (Nexus
                Aesthetic site; DoctorOnCall listing)
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-wine" />
              </div>
              <h3 className="text-xl font-bold text-wine mb-2">
                Non-surgical aesthetics focus
              </h3>
              <p className="text-sm text-wine">
                Wide range of non-surgical and laser services, useful when
                under-eye concerns need combination treatment. (DoctorOnCall
                listing)
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold font-georgia text-brown text-center mb-4"
          >
            FAQs
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-taupe text-center mb-12"
          >
            (PAA-style questions people ask most)
          </motion.p>

          <div className="space-y-8">
            {/* About results and suitability */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-brown mb-4">
                About results and suitability
              </h3>
              <div className="space-y-4">
                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-light mr-2" />
                    1) Does under eye filler remove dark circles?
                  </h4>
                  <p className="text-taupe pl-7">
                    It can reduce the look of dark circles when the darkness is
                    mainly from shadowing due to hollows. If pigment is the main
                    cause, filler alone may not fix it and other treatments may
                    be needed. (Erufu Care overview)
                  </p>
                </div>

                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    2) How long does under eye filler last?
                  </h4>
                  <p className="text-taupe pl-7">
                    Many Malaysia clinic pages cite results lasting up to 12
                    months, with some people maintaining results longer
                    depending on the case. (Dr Jane under-eye filler page; Sheen
                    Clinic)
                  </p>
                </div>

                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    3) How many syringes do I need for under eye filler?
                  </h4>
                  <p className="text-taupe pl-7">
                    It depends on your hollow depth and facial support. Many
                    pricing guides suggest under-eye cases may need 1 to 2
                    syringes, but exact amounts should only be decided after a
                    face assessment. (NextMed price guide)
                  </p>
                </div>

                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    4) What age is best for under eye filler?
                  </h4>
                  <p className="text-taupe pl-7">
                    There is no single "best age." It depends on anatomy and the
                    cause of your under-eye concern. Some fillers also have
                    specific age indications, for example Volbella's FDA
                    approval is for adults over 21. (FDA device page)
                  </p>
                </div>

                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    5) Can under eye filler fix eye bags?
                  </h4>
                  <p className="text-taupe pl-7">
                    If the issue is a true bulge or fluid bag, filler may not be
                    ideal. Some people need other treatments or surgery.
                    (Moorfields)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Comfort and downtime */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-brown mb-4">
                Comfort and downtime
              </h3>
              <div className="space-y-4">
                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    6) Is under eye filler painful?
                  </h4>
                  <p className="text-taupe pl-7">
                    Most clinics use numbing and patients often describe it as
                    tolerable. The under-eye area can feel sensitive, but the
                    session is usually quick.
                  </p>
                </div>

                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    7) How long is the downtime after under eye filler?
                  </h4>
                  <p className="text-taupe pl-7">
                    Many clinics describe minimal downtime, with mild swelling
                    or bruising that settles within a few days. (Dr Jane
                    under-eye filler page)
                  </p>
                </div>

                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    8) Can I wear makeup after under eye filler?
                  </h4>
                  <p className="text-taupe pl-7">
                    Some clinics advise avoiding makeup for the first 24 hours
                    to reduce infection risk. (Dr Chong Clinic blog)
                  </p>
                </div>

                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    9) When can I exercise after under eye filler?
                  </h4>
                  <p className="text-taupe pl-7">
                    Many providers suggest avoiding strenuous exercise for about
                    24 hours, especially if you swell easily.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Safety */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-brown mb-4">Safety</h3>
              <div className="space-y-4">
                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    10) Is under eye filler safe?
                  </h4>
                  <p className="text-taupe pl-7">
                    Dermal fillers are commonly used, and most side effects are
                    mild like swelling and bruising. But serious complications
                    are possible, including vascular events. (Cleveland Clinic;
                    RANZCO guideline PDF)
                  </p>
                </div>

                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    11) What are the warning signs of a serious complication?
                  </h4>
                  <p className="text-taupe pl-7">
                    Severe pain, skin colour changes, or any vision symptoms
                    need urgent medical attention. Professional guidance
                    emphasises informed consent and urgency if symptoms occur.
                    (RANZCO guideline PDF)
                  </p>
                </div>

                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    12) Why can under eye filler look blue or grey?
                  </h4>
                  <p className="text-taupe pl-7">
                    A bluish tint can happen when filler sits too close to the
                    skin surface or due to swelling and light reflection.
                    Moorfields lists discolouration and swelling among key risks
                    to understand. (Moorfields)
                  </p>
                </div>

                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    13) Are all fillers approved to be used around the eyes?
                  </h4>
                  <p className="text-taupe pl-7">
                    No. FDA warnings note that injecting around the eyes is an
                    unapproved use for many dermal fillers, and approvals vary
                    by product. Some products do have infraorbital indications.
                    (FDA dermal filler safety page; FDA device page)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cost in Malaysia */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-brown mb-4">
                Cost in Malaysia
              </h3>
              <div className="space-y-4">
                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    14) How much does under eye filler cost in Kuala Lumpur?
                  </h4>
                  <p className="text-taupe pl-7">
                    Real clinic and price guide references commonly show ranges
                    such as RM 1,500 to RM 2,200 per 1ml for under-eye or RM
                    1,800 to RM 3,000 per syringe in KL, depending on clinic and
                    product. (NextMed price guide; Dr Jane pricing guide)
                  </p>
                </div>

                <div className="border border-cream rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-brown mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-wine mr-2" />
                    15) Why is under eye filler more expensive at some clinics?
                  </h4>
                  <p className="text-taupe pl-7">
                    Under-eye injections are a high-precision area. Price often
                    reflects injector experience, clinic standards, and product
                    selection.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 bg-cream"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={scaleIn}
          className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 shadow-2xl"
        >
          <h2 className="text-4xl font-bold font-georgia text-brown mb-6">
            Ready to look refreshed?
          </h2>
          <p className="text-xl text-taupe mb-8">
            Book your consultation at Nexus Clinic Kuala Lumpur today.
          </p>
          <button className="px-12 py-4 bg-wine text-white rounded-full font-medium text-lg hover:bg-rose transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Schedule Your Consultation
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
}
