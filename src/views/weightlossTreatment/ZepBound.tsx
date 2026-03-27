"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Coffee,
  FileText,
  Info,
  Shield,
  Users,
  AlertTriangle,
  Calendar,
  DollarSign,
  AlertOctagon,
  Droplets,
  Utensils,
  Bed,
  Dumbbell,
  MapPin,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const ZepboundLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "zepbound");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-zepbound1.webp",
      after: "/images/B&A-w/B&A-zepbound1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-zepbound2.webp",
      after: "/images/B&A-w/B&A-zepbound2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-zepbound3.webp",
      after: "/images/B&A-w/B&A-zepbound3.webp",
    },
  ];
  return (
    <div className="bg-light font-inter">
      {/* Hero Section - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative min-h-screen bg-linear-to-b from-cream to-light overflow-hidden"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-wine/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 pt-20 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h1 className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight">
                Zepbound Weight Loss Treatment in Malaysia
                <span className="text-wine block mt-2">(Kuala Lumpur)</span>
              </h1>

              <p className="text-xl md:text-2xl text-taupe leading-relaxed">
                Stuck at the same weight, even when you "do everything right"?
                Let's change the story.
              </p>

              <p className="text-lg text-brown/80 leading-relaxed">
                At Nexus Clinic Kuala Lumpur, our doctor-monitored weight loss
                programme is designed to help you feel real appetite control,
                steady progress, and a plan you can actually live with.
              </p>

              <p className="text-rose font-semibold text-lg">
                You do not need perfection. You need a safer system that fits
                your body and lifestyle.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="bg-glass backdrop-blur-sm p-8 rounded-2xl border border-cream shadow-2xl">
                <h2 className="font-georgia text-2xl text-brown mb-6">
                  Trust section (quick proof points)
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-wine/10 p-3 rounded-full">
                      <Shield className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown">
                        Doctor-led assessment before any prescription
                      </h3>
                      <p className="text-taupe">
                        Safety-first monitoring and clear follow-ups
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-wine/10 p-3 rounded-full">
                      <Activity className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown">
                        Evidence-based treatment options
                      </h3>
                      <p className="text-taupe">
                        including GLP-1 and dual-hormone medicines
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-wine/10 p-3 rounded-full">
                      <Users className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown">
                        Personal guidance
                      </h3>
                      <p className="text-taupe">
                        for food habits, cravings, and realistic activity
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-cream">
                    <p className="text-taupe flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-rose" />
                      Located in Kuala Lumpur, Malaysia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is Zepbound Section - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h2 className="font-georgia text-4xl text-brown">
                What is Zepbound, and why is everyone talking about it?
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-taupe leading-relaxed">
                  Zepbound is the brand name for tirzepatide used for chronic
                  weight management. It is a prescription injection taken once
                  weekly, alongside a reduced-calorie diet and increased
                  physical activity.
                </p>

                <div className="bg-cream p-6 rounded-xl border-l-4 border-wine">
                  <p className="text-brown font-medium text-lg">
                    Here is the key point in simple words. Zepbound works on
                    hunger signals and helps you feel full sooner, so eating
                    less feels more natural, not like a daily fight.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-8">
              <img
                src="/images/main/zepbound.webp"
                alt="Zepbound treatment explanation at Nexus Clinic Kuala Lumpur"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />

              <div className="bg-cream p-8 rounded-2xl">
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  Zepbound vs Mounjaro (important Malaysia note)
                </h3>
                <p className="text-taupe mb-4">
                  Many people get confused here, so let's keep it clear.
                </p>
                <p className="text-taupe mb-4">
                  Zepbound and Mounjaro contain the same active ingredient:
                  tirzepatide.
                </p>
                <p className="text-taupe mb-4">
                  They are marketed for different uses in different places
                  (weight management vs type 2 diabetes).
                </p>
                <p className="text-taupe mb-4">
                  In Malaysia, clinics may talk about "tirzepatide programmes"
                  more often than the US brand name "Zepbound." Malaysia's
                  regulator (NPRA) lists tirzepatide among GLP-1 related
                  products registered with the Drug Control Authority, and also
                  references local package inserts for medicines like Mounjaro
                  (tirzepatide).
                </p>
                <p className="text-taupe font-medium">
                  At Nexus Clinic Kuala Lumpur, your doctor will confirm what is
                  appropriate, what is available through proper channels, and
                  what fits your health profile before anything starts.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How Zepbound works - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            How Zepbound works (in human language)
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            Your body has hormones that influence hunger, fullness, and blood
            sugar control. Zepbound activates receptors for GLP-1 and GIP, two
            gut hormones, to reduce appetite and food intake.
          </p>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-brown font-medium text-lg">
              What you may notice in real life:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-taupe text-lg">
                <CheckCircle2 className="w-6 h-6 text-wine" />
                You feel satisfied with smaller portions
              </li>
              <li className="flex items-center gap-3 text-taupe text-lg">
                <CheckCircle2 className="w-6 h-6 text-wine" />
                You snack less "just because"
              </li>
              <li className="flex items-center gap-3 text-taupe text-lg">
                <CheckCircle2 className="w-6 h-6 text-wine" />
                Cravings calm down
              </li>
              <li className="flex items-center gap-3 text-taupe text-lg">
                <CheckCircle2 className="w-6 h-6 text-wine" />
                Eating becomes more normal again
              </li>
            </ul>
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto bg-wine/5 p-8 rounded-2xl"
          >
            <p className="text-rose font-semibold text-xl">
              This is not about willpower. It is about changing the signals that
              were pushing you to overeat.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Candidate Section - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h2 className="font-georgia text-4xl text-brown">
                Who can be a candidate for Zepbound-style medical weight loss?
              </h2>

              <p className="text-lg text-taupe">
                A doctor will decide if it is suitable, but FDA approval for
                Zepbound weight management is for adults with:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-cream p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                  <span className="text-brown">BMI 30 or higher, or</span>
                </li>
                <li className="flex items-start gap-3 bg-cream p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    BMI 27 or higher with at least one weight-related condition
                    (example: high blood pressure, type 2 diabetes, or high
                    cholesterol)
                  </span>
                </li>
              </ul>

              <p className="text-taupe">
                Even if you fit a BMI range, a medical review matters. Some
                people should not use tirzepatide medicines due to risks and
                contraindications.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-8">
              <div className="bg-rose/5 p-8 rounded-2xl border border-rose/20">
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <AlertOctagon className="w-6 h-6 text-rose" />
                  Who should NOT use Zepbound (and who needs extra caution)
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-brown mb-3">
                      You should not use Zepbound if:
                    </p>
                    <p className="font-semibold text-brown mb-3">
                      You should not use Zepbound if:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        You or your family have a history of medullary thyroid
                        carcinoma (MTC)
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        You have MEN2 (Multiple Endocrine Neoplasia syndrome
                        type 2)
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        You had a serious allergic reaction to tirzepatide
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-brown mb-3">
                      You also need careful medical guidance if you have a
                      history of:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Pancreatitis
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Gallbladder disease
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Kidney issues (especially if vomiting or dehydration
                        happens)
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Significant gastrointestinal problems
                      </li>
                    </ul>
                  </div>

                  <div className="bg-wine/10 p-4 rounded-lg">
                    <p className="text-brown font-medium">
                      A proper clinic does not "sell injections." A proper
                      clinic checks risk, monitors you, and adjusts safely.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Results Section - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            What results can you realistically expect?
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            People often ask, "How much weight will I lose?" Clinical results
            vary by dose, duration, and individual health. In published expert
            summaries of trial data, some patients lost substantial weight over
            longer treatment periods, and weight loss in later trials averaged
            around 26% over 88 weeks in one report.
          </p>

          <p className="text-center text-brown font-medium text-lg mb-8">
            What matters more for most people is the pattern:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl shadow-md"
            >
              <Calendar className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                Weeks 1-4:
              </h3>
              <p className="text-taupe">appetite shifts, early adjustment</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl shadow-md"
            >
              <Calendar className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                Weeks 5-12:
              </h3>
              <p className="text-taupe">steady loss becomes more visible</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl shadow-md"
            >
              <Calendar className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                Months 3-6:
              </h3>
              <p className="text-taupe">
                habits feel easier, clothing changes, better control
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl shadow-md"
            >
              <Calendar className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                Long-term:
              </h3>
              <p className="text-taupe">
                maintenance planning becomes the real win
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto bg-wine/5 p-8 rounded-xl"
          >
            <p className="text-brown text-xl">
              At Nexus Clinic Kuala Lumpur, the goal is not "fast." The goal is
              safe, steady, and maintainable.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Programme Section - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-16">
            What a doctor-monitored programme at Nexus Clinic Kuala Lumpur can
            look like
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            Every patient is different, but here is what a structured journey
            typically includes.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                1) First consult: your real story matters
              </h3>
              <p className="text-taupe">
                Not just your weight. Your sleep, stress, cravings, past diets,
                medications, and medical history.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                2) Eligibility and safety checks
              </h3>
              <p className="text-taupe mb-4">A doctor may review:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  BMI and waist measures
                </li>
                <li className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Blood pressure
                </li>
                <li className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Relevant labs (based on your history)
                </li>
                <li className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Current medications and contraindications
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                3) A plan that fits Malaysian life
              </h3>
              <p className="text-taupe">
                Because your life includes real meals and real schedules. Family
                dinners. Work stress. Late nights. Nasi campur. Grab food.
                Weekend events.
              </p>
              <p className="text-taupe mt-4">
                The plan should work in the real world, not only on paper.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                4) Ongoing monitoring
              </h3>
              <p className="text-taupe">
                This is where many people succeed. Follow-ups help manage side
                effects, appetite changes, plateaus, and motivation dips.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Side Effects Section - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            Side effects: what's common, what's serious
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            Most people worry about side effects, and they should. You deserve
            clear answers.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="bg-light p-8 rounded-2xl shadow-lg">
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <Info className="w-6 h-6 text-wine" />
                  Common side effects reported
                </h3>

                <p className="text-taupe mb-4">
                  The Zepbound FAQ lists common effects such as: nausea,
                  diarrhea, vomiting, constipation, abdominal pain, indigestion,
                  injection site reactions, fatigue, and heartburn (among
                  others).
                </p>
                <p className="text-taupe">
                  Side effects often show up most during dose increases, then
                  reduce over time for many people.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-light p-8 rounded-2xl shadow-lg">
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-rose" />
                  Serious risks you must know
                </h3>

                <p className="text-taupe mb-4">
                  Zepbound information warns about serious risks including
                  thyroid tumors, pancreatitis, gallbladder problems, kidney
                  issues from dehydration, serious allergic reactions,
                  hypoglycemia (especially with certain diabetes meds), mood
                  changes, and more.
                </p>
                <p className="font-semibold text-wine">
                  This is exactly why doctor monitoring is not optional. It is
                  the point.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 max-w-4xl mx-auto bg-rose/5 p-8 rounded-2xl border border-rose/20"
          >
            <h3 className="font-georgia text-2xl text-brown mb-6">
              A very important safety note for surgery or sedation
            </h3>

            <p className="text-taupe mb-4">
              Malaysia's NPRA has reviewed safety concerns around GLP-1
              medicines (including semaglutide and tirzepatide) and the
              potential risk of aspiration during general anaesthesia or deep
              sedation, linked to delayed gastric emptying.
            </p>

            <p className="text-taupe mb-4">
              If you are on a GLP-1 or tirzepatide programme and you are
              scheduled for a procedure, tell your doctor and your anaesthesia
              team early. NPRA advises healthcare professionals to consider this
              risk and manage it with patient-specific planning.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Cost Section - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            Cost of Zepbound weight loss treatment in Kuala Lumpur, Malaysia
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-8">
            People want a number, but the honest answer is: cost depends on the
            programme and the dose plan, plus whether lab work and follow-ups
            are included.
          </p>

          <p className="text-center text-brown font-medium mb-8">
            Your total cost can change based on:
          </p>

          <div className="max-w-3xl mx-auto bg-cream p-8 rounded-2xl mb-8">
            <ul className="space-y-4">
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                The medicine brand and supply route used legally by the clinic
              </li>
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                Your dose level over time
              </li>
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                Frequency of monitoring and follow-ups
              </li>
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                Whether labs are needed
              </li>
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                Whether you are combining with nutrition coaching or other
                treatments
              </li>
            </ul>
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto bg-wine/5 p-8 rounded-2xl"
          >
            <p className="text-brown text-lg font-medium mb-2">
              Best practice:
            </p>
            <p className="text-taupe">
              ask for a clear breakdown (consultation fees, medicine cost,
              monitoring, and what happens if you need adjustments).
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison Section - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-16">
            Zepbound vs Wegovy vs Ozempic vs Mounjaro (simple comparison)
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Zepbound vs Mounjaro
              </h3>
              <p className="text-taupe">
                Same active ingredient (tirzepatide). Different branding and
                approvals depending on market and indication.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Zepbound vs Wegovy / Ozempic
              </h3>
              <ul className="space-y-3 text-taupe">
                <li>
                  • Wegovy and Ozempic are semaglutide-based medicines (GLP-1).
                </li>
                <li>• Zepbound is tirzepatide (GIP + GLP-1).</li>
              </ul>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe max-w-3xl mx-auto mt-8"
          >
            Some reports note higher average weight loss in certain tirzepatide
            trials than semaglutide reports, but your best option still depends
            on your health history, side effect tolerance, and doctor guidance.
          </motion.p>
        </div>
      </motion.section>

      {/* Fat Freezing Clarification - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-cream p-8 rounded-2xl">
            <h3 className="font-georgia text-2xl text-brown mb-4">
              "Is this the same as fat freezing?"
            </h3>
            <p className="text-taupe mb-4">
              No. And this is important for expectations.
            </p>
            <p className="text-taupe mb-4">
              Fat freezing (cryolipolysis) targets a specific pocket of fat in a
              specific area. It can help reshape. It does not typically change
              appetite or overall weight patterns.
            </p>
            <p className="text-taupe mb-4">
              Zepbound-style medical weight loss is about appetite regulation,
              fullness, and metabolic support. It can reduce overall body
              weight, which may change multiple areas.
            </p>
            <p className="text-taupe mb-4">
              Some people do both, but the right order matters. Usually, medical
              weight loss first, contouring later.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Better Results Section - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            How to get better results (without turning your life upside down)
          </h2>

          <p className="text-center text-taupe max-w-2xl mx-auto mb-12">
            Zepbound is not magic, but it can make the basics finally feel
            doable.
          </p>

          <p className="text-brown font-medium text-lg mb-6">
            Simple habits that matter:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Utensils className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Protein at each meal to stay full
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Droplets className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Water and electrolytes if nausea or constipation hits
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Coffee className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Smaller meals when appetite changes
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Dumbbell className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Light movement (even walking) to protect muscle and mood
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Bed className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Sleep because hunger hormones worsen when sleep is poor
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-rose font-semibold text-xl mt-8"
          >
            And please do not crash diet. You want fat loss, not burnout.
          </motion.p>
        </div>
      </motion.section>

      {/* FAQs Section - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-4">
            FAQs (People Also Ask style)
          </h2>
          <p className="text-center text-taupe mb-12">
            These are common "People Also Ask" questions patients search before
            booking.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* FAQ 1 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                What is Zepbound and how does it help with weight loss?
              </h3>
              <p className="text-taupe text-sm">
                Zepbound is tirzepatide, a prescription injection approved for
                chronic weight management in adults who meet certain BMI
                criteria. It works by activating GLP-1 and GIP hormone receptors
                to reduce appetite and food intake, alongside diet and physical
                activity.
              </p>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                Is Zepbound the same as Mounjaro?
              </h3>
              <p className="text-taupe text-sm">
                They contain the same active ingredient, tirzepatide. They are
                marketed and approved for different uses depending on the
                product and country.
              </p>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                How long does it take to see results on Zepbound?
              </h3>
              <p className="text-taupe text-sm">
                Many people notice appetite changes early, but visible weight
                loss is usually more obvious over weeks to months. Longer trials
                show larger total loss over extended use, such as reports of
                significant average loss over 88 weeks in later trial summaries.
              </p>
            </motion.div>

            {/* FAQ 4 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                What are the most common side effects of Zepbound?
              </h3>
              <p className="text-taupe text-sm">
                Commonly reported side effects include nausea, diarrhea,
                vomiting, constipation, abdominal pain, indigestion, injection
                site reactions, fatigue, and heartburn.
              </p>
            </motion.div>

            {/* FAQ 5 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                Can Zepbound cause serious side effects?
              </h3>
              <p className="text-taupe text-sm">
                Yes. Warnings include thyroid tumor risk (including thyroid
                cancer), pancreatitis, gallbladder problems, dehydration leading
                to kidney issues, serious allergic reactions, hypoglycemia, mood
                changes, and more.
              </p>
            </motion.div>

            {/* FAQ 6 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                Who should not take Zepbound?
              </h3>
              <p className="text-taupe text-sm">
                People with a personal or family history of medullary thyroid
                carcinoma (MTC), those with MEN2, or those with a serious
                allergic reaction to tirzepatide should not use it.
              </p>
            </motion.div>

            {/* FAQ 7 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                What happens if I stop taking Zepbound?
              </h3>
              <p className="text-taupe text-sm">
                Do not stop without speaking to your doctor. Official guidance
                stresses discussing any stop with your doctor first. Many people
                regain weight after stopping weight loss medicines, so a
                maintenance plan matters.
              </p>
            </motion.div>

            {/* FAQ 8 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                Is Zepbound safe before surgery or sedation?
              </h3>
              <p className="text-taupe text-sm">
                GLP-1 medicines (including tirzepatide) can delay gastric
                emptying, which may increase aspiration risk during anaesthesia
                or deep sedation. Malaysia's NPRA has issued safety updates for
                this risk and advises careful perioperative planning.
              </p>
            </motion.div>

            {/* FAQ 9 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                How is Zepbound taken?
              </h3>
              <p className="text-taupe text-sm">
                Zepbound is administered once weekly by injection under the
                skin. Dosing is increased gradually over time under medical
                supervision. In a clinic programme, you will be taught proper
                use and monitoring.
              </p>
            </motion.div>

            {/* FAQ 10 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                Is Zepbound available in Malaysia and Kuala Lumpur?
              </h3>
              <p className="text-taupe text-sm">
                Malaysia's NPRA lists tirzepatide among registered GLP-1 related
                products in Malaysia and references local package inserts for
                tirzepatide products. Availability and branding can vary, so
                your clinic will confirm the exact prescribed product and legal
                supply pathway during consultation.
              </p>
            </motion.div>

            {/* FAQ 11 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                How much does Zepbound cost in Malaysia?
              </h3>
              <p className="text-taupe text-sm">
                Costs vary based on dose, clinic monitoring, and whether labs
                and follow-ups are included. The best step is to request a clear
                cost breakdown during your Nexus Clinic Kuala Lumpur
                consultation.
              </p>
            </motion.div>

            {/* FAQ 12 */}
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                Which is better, Zepbound or Wegovy?
              </h3>
              <p className="text-taupe text-sm">
                They work differently (tirzepatide acts on GIP and GLP-1;
                semaglutide is GLP-1). Some trial summaries report higher
                average weight loss with tirzepatide in certain studies, but
                "better" depends on your health profile and side effect
                tolerance.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Competitor Snapshot - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-16">
            Competitor snapshot (what ranks in KL, and how Nexus should
            position)
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-xl shadow-lg"
            >
              <p className="text-taupe leading-relaxed">
                1. They lead with "doctor-supervised" and "personalised care."
                Examples include Femma Clinic and Dr. K & Associates
                highlighting doctor-led programmes and tailored guidance.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-xl shadow-lg"
            >
              <p className="text-taupe leading-relaxed">
                2. They clearly name the medicine class and set expectations.
                Alainn Clinic explains tirzepatide as a dual GIP and GLP-1
                approach and positions it as medically supervised weight loss
                support.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-xl shadow-lg"
            >
              <p className="text-taupe leading-relaxed">
                3. They publish supporting education content, not just a sales
                page. PULSE Clinic publishes broader GLP-1 education content and
                positions multiple locations (KL, Damansara, Penang).
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Differentiation Section - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            How Nexus Clinic Kuala Lumpur can stand out (clear differentiation
            ideas)
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            To compete cleanly, your page should emphasise:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-xl flex items-start gap-3"
            >
              <Shield className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Safety-first screening and who it is NOT for
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-xl flex items-start gap-3"
            >
              <Activity className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Monitoring and side-effect management plan
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-xl flex items-start gap-3"
            >
              <FileText className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Clear "what happens in your first visit" flow
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-xl flex items-start gap-3"
            >
              <Users className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                A practical Malaysia lifestyle approach (food habits, work
                schedules, social eating)
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-xl flex items-start gap-3 md:col-span-2 max-w-2xl mx-auto"
            >
              <Calendar className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Transparent expectations on timeline and maintenance
              </span>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mt-12 max-w-3xl mx-auto"
          >
            These points match what people are searching for, and what
            top-ranking pages are trying to communicate.
          </motion.p>
        </div>
      </motion.section>

      {/* CTA Section - Semua kata lengkap */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-wine"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-light mb-8"
          >
            Ready to talk to a doctor at Nexus Clinic Kuala Lumpur?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-cream text-xl max-w-3xl mx-auto mb-12"
          >
            If you are tired of yo-yo dieting and you want a medically guided
            plan that feels realistic, book a consultation at Nexus Clinic Kuala
            Lumpur.
          </motion.p>

          <motion.button
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-light text-wine px-12 py-4 rounded-full font-semibold text-lg hover:bg-cream transition-colors shadow-xl"
          >
            Book Consultation at Nexus Clinic Kuala Lumpur
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ZepboundLanding;
