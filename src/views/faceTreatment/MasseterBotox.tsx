"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Whatsapp from "../../components/Whatsapp";
import {
  ChevronRight,
  Shield,
  Heart,
  Activity,
  AlertCircle,
  CheckCircle2,
  XCircle,
  MapPin,
  Sparkles,
  Brain,
  Bone,
  Layers,
  Sun,
  Award,
  Droplets,
  MessageCircle,
  Calendar,
  Star,
  Clock,
} from "lucide-react";

import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

// Complete FAQ data with all questions from content
const faqData = [
  {
    q: "How long does Botox last in Malaysia?",
    a: "Botox typically lasts 3 to 5 months for most patients in Malaysia. Jaw slimming Botox lasts 4 to 6 months. Hyperhidrosis Botox can last 6 to 12 months. First-time patients often find results last slightly shorter, around 2 to 3 months, as the muscle is not yet accustomed to the treatment. With regular maintenance, results often extend toward the longer end of the range over time.",
  },
  {
    q: "How much does Botox cost in Malaysia in 2026?",
    a: "Botox in Malaysia typically ranges from RM 588 to RM 800 per area for common treatments such as forehead lines, frown lines and crow's feet. Treatments involving multiple areas usually range from RM 1500 to RM 2160, while jaw slimming Botox typically ranges from RM 1500 to RM 2400 depending on the muscle strength and dosage required. Full face anti-wrinkle treatments can range from RM 1800 to RM 3000+. All pricing at Nexus Clinic KL is confirmed during consultation to ensure the most suitable treatment plan.",
  },
  {
    q: "Is Botox safe in Malaysia?",
    a: "Botox is one of the most extensively studied medical treatments in the world and has an excellent safety record when administered by a licensed medical doctor in a clinical setting. In Malaysia, Botox and other botulinum toxin products must be prescribed and administered by a doctor registered with the Ministry of Health. At Nexus Clinic KL, all treatments are performed by licensed aesthetic doctors following evidence-based protocols.",
  },
  {
    q: "What is the right age to start Botox in Malaysia?",
    a: "There is no fixed correct age. Patients in their mid to late 20s often start with preventive or baby Botox to delay the formation of permanent lines. Patients in their 30s typically address established dynamic lines. The right time to start is when the concern is visible and the patient is ready, not at a specific birthday. A consultation at Nexus Clinic KL helps determine whether Botox is the appropriate intervention based on your current skin and muscle condition.",
  },
  {
    q: "Does Botox look natural when used for reducing wrinkles?",
    a: "With the correct dose and technique, Botox produces a result that looks refreshed and natural rather than frozen or expressionless. The frozen look is caused by overdosing, particularly in the forehead. At Nexus Clinic KL, the approach is conservative: enough Botox to relax the target muscle and smooth the line, while preserving enough movement for natural expression. Touch-up appointments at two weeks ensure any minor adjustments are made before the result is finalised.",
  },
  {
    q: "Can Botox be combined with filler at the same appointment?",
    a: "Yes, combining Botox and filler in the same session is a common and efficient approach. Botox addresses dynamic lines caused by muscle movement. Filler addresses static concerns like volume loss, hollowing and structural correction. The two treatments work in complementary ways and treating both on the same day does not increase risk. Your doctor will plan the order and placement of each treatment at consultation.",
  },
  {
    q: "How painful is Botox?",
    a: "Most patients describe the sensation as a brief, very mild sting or pinch at each injection point. The needles used for Botox are extremely fine. No numbing cream is required for most areas, though it can be applied on request for sensitive patients or lip flip treatments. The full treatment for most areas takes under 10 minutes once started.",
  },
  {
    q: "Can Botox treat hyperhidrosis in Malaysia?",
    a: "Yes. Botox is one of the most effective treatments for hyperhidrosis, or excessive sweating, in Malaysia. It is injected into the skin of the underarms, palms or feet and works by blocking the nerve signals that activate sweat glands in the area. Results typically last 6 to 12 months, significantly longer than for facial Botox. The treatment is covered by some health insurance plans in Malaysia for medically diagnosed hyperhidrosis.",
  },
  {
    q: "Who should not get Botox?",
    a: "Botox is not suitable for patients who are pregnant or breastfeeding, have a known allergy to botulinum toxin or any of its ingredients, have a neuromuscular disorder such as myasthenia gravis or Lambert-Eaton syndrome, or have an active infection at the injection site. Patients taking certain medications including aminoglycoside antibiotics should inform their doctor before treatment as these can enhance the effect of botulinum toxin.",
  },
  {
    q: "What is the difference between Botox and dermal filler?",
    a: "Botox and dermal filler are completely different treatments that address different concerns. Botox relaxes muscles to smooth expression lines. It does not add volume. Dermal filler is an injectable gel that adds volume, restores lost structure and reshapes facial contours. Botox treats dynamic wrinkles caused by muscle movement. Filler treats static volume-related concerns. Many patients benefit from both treatments, and they are often combined in a single treatment session for a more complete facial rejuvenation result.",
  },
];

const MasseterBotoxPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "face/masseterBotox");

  
  return (
    <div className="min-h-screen bg-light font-inter overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="relative overflow-hidden bg-cream py-20 px-4 md:px-8 lg:px-16"
      >
        <div className="absolute top-20 right-20 w-64 h-64 bg-rose/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-wine/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-taupe/20">
                <Sparkles className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown font-medium">
                  Nexus Clinic Kuala Lumpur
                </span>
              </div>

              <h1 className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight">
                Top Botox Treatment in Malaysia for Natural,
                <span className="text-wine italic">
                  Refreshed Results Without the Frozen Look
                </span>
              </h1>

              <p className="text-xl text-taupe leading-relaxed">
                A forehead that looks tense before you even speak. Crow's feet that deepen every year. Frown lines that make you look more serious or tired than you feel. These are not personality traits. They are muscle habits. And they respond precisely to Botox.
              </p>

              <p className="text-brown/80 text-lg">
                Botox at Nexus Clinic Kuala Lumpur is about one outcome: a face that looks like yours, but rested, smoother and more relaxed. Not frozen. Not blank. Just you, without the tension that builds over years of expression. We have been delivering Botox treatment in Malaysia since 2001, and our approach has always been the same: precise dosing, honest consultation and results that hold up in real life, not just right after the appointment.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Free Consultation
                </motion.button>
                <Whatsapp message="Hi, I want to know more about your services" />
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-wine/20 to-rose/20 rounded-3xl transform rotate-3" />
              <div className="relative p-8 rounded-3xl shadow-2xl border border-taupe/20 backdrop-blur-sm bg-white/90">
                <h3 className="font-georgia text-2xl text-brown mb-6">
                  Botox Treatment at a Glance
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-taupe/20 pb-2">
                    <span className="text-brown font-medium">Treatment</span>
                    <span className="text-taupe text-sm text-right">Botulinum toxin type A injection for wrinkle relaxation, facial slimming and medical conditions</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-taupe/20 pb-2">
                    <span className="text-brown font-medium">Session Time</span>
                    <span className="text-taupe text-sm">10 to 20 minutes for most areas</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-taupe/20 pb-2">
                    <span className="text-brown font-medium">Downtime</span>
                    <span className="text-taupe text-sm">None. Patients return to normal activities immediately</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-taupe/20 pb-2">
                    <span className="text-brown font-medium">Results</span>
                    <span className="text-taupe text-sm">3 to 7 days. Full effect at 14 days</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-taupe/20 pb-2">
                    <span className="text-brown font-medium">Longevity</span>
                    <span className="text-taupe text-sm">3 to 6 months depending on treatment area</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-taupe/20 pb-2">
                    <span className="text-brown font-medium">Reversible</span>
                    <span className="text-taupe text-sm">Results fade naturally over time</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-taupe/20 pb-2">
                    <span className="text-brown font-medium">Anaesthesia</span>
                    <span className="text-taupe text-sm">None required. Fine needles used</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brown font-medium">Suitable For</span>
                    <span className="text-taupe text-sm text-right">Dynamic wrinkles, facial slimming, gummy smile, hyperhidrosis, neck bands, brow lift, preventive treatment</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How Botox Works Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="bg-linear-to-br from-cream to-light p-8 md:p-12 rounded-3xl border border-taupe/20"
          >
            <h2 className="font-georgia text-3xl text-brown mb-6">
              How Botox Relaxes Muscles and Smooths Expression Lines
            </h2>
            <p className="text-lg text-brown/80 leading-relaxed mb-4">
              Botox is the brand name for onabotulinumtoxinA, a purified form of botulinum toxin type A. When injected in precise, small doses, it temporarily blocks the nerve signals that tell a specific muscle to contract. The muscle relaxes. The skin above it smooths out. The lines that formed through years of that muscle moving reduce or disappear.
            </p>
            <p className="text-lg text-brown/80 leading-relaxed mb-4">
              The key word is temporary. Nerve signals slowly return over 3 to 6 months as the toxin is metabolised. This is what makes Botox one of the safest and most widely used cosmetic treatments in the world. If you do not like the result, it fades. If you love the result, you maintain it with a treatment every 3 to 5 months.
            </p>
            <p className="text-lg text-brown/80 leading-relaxed mb-4">
              Botox only treats dynamic wrinkles, meaning lines caused by muscle movement. Frown lines, forehead creases, crow's feet, and bunny lines on the nose all form because the same muscles contract in the same way thousands of times per day for years. Botox interrupts that cycle. Static wrinkles, meaning lines that are visible at rest due to collagen loss and skin thinning, require a different approach.
            </p>
            <p className="text-sm text-taupe italic mt-4">
              According to the International Society of Aesthetic Plastic Surgery 2024 Global Statistics Report, botulinum toxin injections ranked as the single most performed non-surgical cosmetic procedure worldwide for the seventh consecutive year, with Southeast Asia recording a 29% year-on-year growth in procedure volume among patients aged 25 to 45.
            </p>
            <div className="flex justify-center mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Your Botox Assessment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <div className="w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/face/Botox Treatment Area.png"
            alt="Botox Treatment Areas Diagram"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
          <p className="text-center text-taupe text-sm mt-4">
            Common Botox treatment areas: forehead lines, frown lines, crow's feet, and more
          </p>
        </div>
      </div>
      {/* Dynamic vs Static Wrinkles Table */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-4"
          >
            Dynamic Wrinkles Versus Static Wrinkles | Which Type Botox Treats
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-8">
            The most common misconception about Botox in Malaysia is that it treats all wrinkles. It does not. Understanding the difference between dynamic and static wrinkles helps you choose the right treatment and set realistic expectations before your appointment.
          </motion.p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead className="bg-wine/10">
                <tr>
                  <th className="p-4 text-left text-brown font-georgia">Wrinkle Type</th>
                  <th className="p-4 text-left text-brown font-georgia">What Causes It</th>
                  <th className="p-4 text-left text-brown font-georgia">Correct Treatment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe/10">
                <tr><td className="p-4 text-brown font-medium">Dynamic wrinkles</td><td className="p-4 text-taupe">Muscle movement. Visible when you smile, frown or squint</td><td className="p-4 text-taupe">Botox. Relaxes the muscle and prevents the skin from creasing</td></tr>
                <tr><td className="p-4 text-brown font-medium">Static wrinkles</td><td className="p-4 text-taupe">Collagen loss, volume depletion, gravity over time. Visible at rest</td><td className="p-4 text-taupe">Dermal filler, skin booster or laser. Botox alone will not fix these</td></tr>
                <tr><td className="p-4 text-brown font-medium">Mixed wrinkles</td><td className="p-4 text-taupe">Started as dynamic, now present at rest due to skin thinning</td><td className="p-4 text-taupe">Botox combined with filler or skin rejuvenation</td></tr>
                <tr><td className="p-4 text-brown font-medium">Forehead lines</td><td className="p-4 text-taupe">Frontalis muscle overactivity</td><td className="p-4 text-taupe">Botox. One of the most commonly treated areas in Malaysia</td></tr>
                <tr><td className="p-4 text-brown font-medium">Crow's feet</td><td className="p-4 text-taupe">Orbicularis oculi muscle contraction around the eye</td><td className="p-4 text-taupe">Botox. High patient satisfaction, very natural result</td></tr>
                <tr><td className="p-4 text-brown font-medium">Frown lines (11 lines)</td><td className="p-4 text-taupe">Corrugator and procerus muscle movement between brows</td><td className="p-4 text-taupe">Botox. Often the first area treated in Malaysia</td></tr>
                <tr><td className="p-4 text-brown font-medium">Gummy smile</td><td className="p-4 text-taupe">Overactive upper lip elevator muscle</td><td className="p-4 text-taupe">Botox. Small dose with significant visual impact</td></tr>
                <tr><td className="p-4 text-brown font-medium">Nasolabial folds</td><td className="p-4 text-taupe">Volume loss and skin descent over time</td><td className="p-4 text-taupe">Dermal filler. Botox does not address this concern</td></tr>
                <tr><td className="p-4 text-brown font-medium">Marionette lines</td><td className="p-4 text-taupe">Volume loss and soft tissue descent</td><td className="p-4 text-taupe">Dermal filler. Botox not effective here</td></tr>
                <tr><td className="p-4 text-brown font-medium">Deep static forehead lines</td><td className="p-4 text-taupe">Long-term collagen loss compounded by muscle activity</td><td className="p-4 text-taupe">Botox plus skin booster or filler for best combined result</td></tr>
              </tbody>
            </table>
          </div>

          <motion.p variants={fadeInUp} className="text-brown/80 mt-6">
            At Nexus Clinic KL, the doctor identifies which wrinkle type you have at consultation before recommending any treatment. Patients who book expecting Botox to fix volume-related concerns leave with a clearer understanding of which treatment actually addresses their concern and a plan that achieves the result they came in for.
          </motion.p>

          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Get the Right Treatment for Your Wrinkle Type
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Four Types of Botox Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-4"
          >
            Four Types of Botox Treatment Available at Nexus Clinic KL
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-8">
            Not all Botox is the same. The type of Botox technique used affects how natural the result looks, how expressive the face remains and what concerns the treatment addresses. Nexus Clinic KL offers all four approaches below, selected based on your concern, your age and your goals.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-cream p-6 rounded-2xl">
              <Activity className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">Standard Botox</h3>
              <p className="text-taupe text-sm mb-3">Full dose into targeted muscles. Relaxes movement significantly</p>
              <p className="text-brown/80 text-sm">Best for established forehead lines, deep frown lines, crow's feet</p>
              <p className="text-wine text-sm font-medium mt-3">3 to 5 months</p>
            </div>
            <div className="bg-cream p-6 rounded-2xl">
              <Sparkles className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">Baby Botox</h3>
              <p className="text-taupe text-sm mb-3">Lower dose, softer muscle relaxation, expression preserved</p>
              <p className="text-brown/80 text-sm">Best for first-timers, patients wanting subtle results, prejuvenation</p>
              <p className="text-wine text-sm font-medium mt-3">2 to 4 months</p>
            </div>
            <div className="bg-cream p-6 rounded-2xl">
              <Droplets className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">Mesobotox</h3>
              <p className="text-taupe text-sm mb-3">Highly diluted Botox injected into the skin surface, not deep muscle</p>
              <p className="text-brown/80 text-sm">Best for pore reduction, oil control, glass skin effect, fine surface lines</p>
              <p className="text-wine text-sm font-medium mt-3">2 to 4 months</p>
            </div>
            <div className="bg-cream p-6 rounded-2xl">
              <Shield className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">Preventive Botox</h3>
              <p className="text-taupe text-sm mb-3">Strategic low-dose treatment before lines form permanently</p>
              <p className="text-brown/80 text-sm">Best for patients in mid to late 20s or early 30s preventing line formation</p>
              <p className="text-wine text-sm font-medium mt-3">3 to 4 months</p>
            </div>
          </div>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-4">
            Baby Botox and preventive Botox have become the fastest-growing categories among patients aged 25 to 38 in Malaysia. The principle is the same as dental care. It is significantly easier to maintain a healthy baseline than to reverse years of unchecked muscle overactivity. A lower dose, started earlier, produces results that look naturally effortless because the skin has never been allowed to form deep, settled lines.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-brown/80">
            Mesobotox is a distinct technique where very diluted botulinum toxin is microinjected into the dermal layer of the skin rather than the muscle below. The effect is a refined skin texture, reduced pore size and controlled oil production with no visible reduction in facial movement. It is particularly popular among patients with oily or combination skin who want a glass skin result without any change to their expressions.
          </motion.p>

          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Find Out Which Botox Type Suits You
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Botox Treatment Areas - Detailed */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-8"
          >
            Botox Treatment Areas at Nexus Clinic Kuala Lumpur
          </motion.h2>

          <div className="space-y-8">
            <div><h3 className="font-georgia text-xl text-wine mb-2">Forehead Lines</h3><p className="text-brown/80">Horizontal lines across the forehead caused by the frontalis muscle lifting the brows. One of the most requested Botox treatment areas in Malaysia. Treated with a controlled dose that relaxes the muscle without dropping the brows.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Frown Lines and Glabellar Lines</h3><p className="text-brown/80">The vertical lines between the eyebrows, sometimes called the 11 lines or anger lines, caused by the corrugator and procerus muscles. One of the highest-impact areas because these lines make patients look permanently tired or frustrated.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Crow's Feet</h3><p className="text-brown/80">Fine lines that fan outward from the outer corners of the eyes during smiling and squinting. Treated with small, precise doses along the orbicularis oculi muscle. Results look very natural because the eye area retains full movement.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Brow Lift</h3><p className="text-brown/80">Strategic Botox placement depresses the muscles that pull the brows downward, allowing the brow elevator muscle to lift unopposed. Creates a subtle arch and opens the eye area without surgery. Typically 2 to 4 units per side.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Bunny Lines</h3><p className="text-brown/80">Diagonal lines across the upper nose bridge caused by the nasalis muscle scrunching. Often appear or worsen after forehead Botox when the nasalis compensates. Treated with small doses on either side of the nose.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Gummy Smile</h3><p className="text-brown/80">A gummy smile occurs when the upper lip elevator muscles pull the lip too far upward on smiling, exposing more gum than desired. A very small dose of Botox into the elevator muscles reduces the lift and creates a more balanced smile with immediate effect.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Jaw Slimming and Masseter Reduction</h3><p className="text-brown/80">Botox into the masseter muscles reduces their bulk over 4 to 6 weeks, slimming a wide or square lower face caused by muscle overdevelopment. Popular among women seeking a V-line result and men wanting to soften a heavy lower face. Results last 4 to 6 months.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Neck Bands and Platysmal Bands</h3><p className="text-brown/80">Vertical neck bands caused by the platysma muscle tightening with age. Botox relaxes the muscle, softening the bands and improving the neck-jaw profile. Sometimes called a Nefertiti lift when combined with jawline placement.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Hyperhidrosis</h3><p className="text-brown/80">Botox is highly effective for excessive sweating in the underarms, palms and feet. It blocks the nerve signals that activate sweat glands in the treated area. Results last 6 to 12 months, longer than any other Botox indication.</p></div>
            <div><h3 className="font-georgia text-xl text-wine mb-2">Lip Flip</h3><p className="text-brown/80">A small dose of Botox placed above the upper lip relaxes the orbicularis oris muscle, causing the upper lip to curl slightly outward. Creates the appearance of a fuller upper lip without adding filler volume.</p></div>
          </div>

          <div className="flex justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Your Treatment Area Assessment
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Botox Brands */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-4"
          >
            Botox Brands Available at Nexus Clinic KL | Not All Neuromodulators Are Identical
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-8">
            Botox is a brand name, not a generic term. Several botulinum toxin type A products are available in Malaysia and each has a slightly different molecular structure, unit dosing system and diffusion profile.
          </motion.p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-cream rounded-2xl overflow-hidden">
              <thead className="bg-wine/10">
                <tr><th className="p-4 text-left text-brown">Brand</th><th className="p-4 text-left text-brown">Manufacturer</th><th className="p-4 text-left text-brown">Unit System</th><th className="p-4 text-left text-brown">Diffusion</th><th className="p-4 text-left text-brown">Notes</th></tr>
              </thead>
              <tbody className="divide-y divide-taupe/10">
                <tr><td className="p-4 text-brown font-medium">Botox</td><td className="p-4 text-taupe">Allergan / AbbVie</td><td className="p-4 text-taupe">Allergan units</td><td className="p-4 text-taupe">Lower. More localised</td><td className="p-4 text-taupe">Most studied brand globally. Standard in Malaysia</td></tr>
                <tr><td className="p-4 text-brown font-medium">Dysport</td><td className="p-4 text-taupe">Ipsen</td><td className="p-4 text-taupe">Speywood units</td><td className="p-4 text-taupe">Slightly wider spread</td><td className="p-4 text-taupe">Often used for forehead and larger muscle groups</td></tr>
                <tr><td className="p-4 text-brown font-medium">Xeomin</td><td className="p-4 text-taupe">Merz</td><td className="p-4 text-taupe">Allergan-equivalent</td><td className="p-4 text-taupe">Similar to Botox</td><td className="p-4 text-taupe">Contains no complexing proteins. Lower immunogenicity</td></tr>
                <tr><td className="p-4 text-brown font-medium">Letybo</td><td className="p-4 text-taupe">Hugel (Korea)</td><td className="p-4 text-taupe">Allergan-equivalent</td><td className="p-4 text-taupe">Similar to Botox</td><td className="p-4 text-taupe">Fast-growing in Malaysia. Comparable safety profile</td></tr>
              </tbody>
            </table>
          </div>

          <motion.p variants={fadeInUp} className="text-brown/80 italic">
            Allergan/AbbVie Malaysia reported in 2023 that Botox remains the most prescribed neuromodulator brand in Malaysia for both cosmetic and medical indications. Dysport is the second most used, primarily for forehead and masseter treatments.
          </motion.p>

          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Ask About Botox Brands at Your Consultation
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* What Botox Cannot Fix */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            What Botox Cannot Fix | An Honest Guide
          </motion.h2>
          <div className="space-y-4">
            {[
              "Botox does not add volume. If the concern is hollow cheeks, thin lips, or under-eye hollowing, filler is the right treatment.",
              "Botox does not tighten loose skin. Sagging jowls or loose neck skin require HIFU or thread lift.",
              "Botox does not remove static wrinkles that are present at rest.",
              "Botox does not change bone structure. Jaw slimming reduces muscle bulk, not bone width.",
              "Botox does not last forever. Results fade in 3 to 6 months.",
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl flex items-start gap-3 shadow-sm">
                <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="text-brown">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Botox for Men */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Botox for Men in Malaysia | A Different Approach
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-brown/80 mb-6">
            Botox for male patients in Malaysia is growing at a faster rate than any other demographic. The goals are different and so is the technique.
          </motion.p>

          <div className="bg-cream p-6 rounded-xl space-y-3">
            <p className="text-brown">• Forehead treatment in men typically requires 15 to 25 units versus 8 to 15 units in women</p>
            <p className="text-brown">• Masseter Botox in men is approached conservatively to avoid over-feminising the lower face</p>
            <p className="text-brown">• Brow shaping for men avoids arch creation, instead maintaining a flat masculine brow position</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Male Botox Consultation
            </motion.button>
            <Whatsapp message="Hi, I want to know more about your services" />
          </div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Botox Cost in Malaysia | Transparent 2026 Pricing
          </motion.h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-2xl overflow-hidden">
              <thead className="bg-wine/10">
                <tr><th className="p-4 text-left text-brown">Treatment Area</th><th className="p-4 text-left text-brown">Price Range (2026)</th></tr>
              </thead>
              <tbody className="divide-y divide-taupe/10">
                <tr><td className="p-4 text-brown">Single area (forehead, frown lines, crow's feet)</td><td className="p-4 text-taupe">RM 588 to RM 800</td></tr>
                <tr><td className="p-4 text-brown">Multiple areas (2 to 3 areas)</td><td className="p-4 text-taupe">RM 1500 to RM 2160</td></tr>
                <tr><td className="p-4 text-brown">Jaw slimming (masseter)</td><td className="p-4 text-taupe">RM 1500 to RM 2400</td></tr>
                <tr><td className="p-4 text-brown">Full face anti-wrinkle plan</td><td className="p-4 text-taupe">RM 1800 to RM 3000+</td></tr>
              </tbody>
            </table>
          </div>

          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-3">What Affects the Pricing?</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-wine mt-1" /><span className="text-brown">Number of units required: Men generally need more units</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-wine mt-1" /><span className="text-brown">Brand used: Botox is priced slightly higher than Dysport</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-wine mt-1" /><span className="text-brown">Area complexity: Jaw slimming and hyperhidrosis require more units</span></li>
            </ul>
          </motion.div>

          <div className="flex flex-wrap gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Get Personalised Quote
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Side Effects and Aftercare */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Botox Side Effects and Aftercare
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">Common Temporary Effects</h3>
              <ul className="space-y-2 text-taupe">
                <li>• Mild redness, tenderness or swelling at injection sites</li>
                <li>• Small pinpoint bruising at needle entry points</li>
                <li>• Feeling of heaviness or tightness in the treated muscle</li>
                <li>• Mild headache immediately after treatment</li>
              </ul>
            </div>
            <div className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">Aftercare Instructions</h3>
              <ul className="space-y-2 text-taupe">
                <li>• Do not rub, press or massage the treated area for 4 hours</li>
                <li>• Stay upright for 4 hours. Avoid lying face-down</li>
                <li>• Skip intense exercise for 24 hours</li>
                <li>• Avoid saunas, steam rooms for 48 hours</li>
                <li>• Assess your full result at 14 days</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section - Using imported FAQ component */}
      <FAQ data={faqData} />

      {/* Final CTA */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-br from-wine to-rose"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-white mb-6"
          >
            Book Botox Treatment in Malaysia at Nexus Clinic Kuala Lumpur
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/90 text-lg mb-8">
            Natural-looking Botox results come from one thing: a doctor who understands what you actually need, doses accordingly and checks the result two weeks later. Nexus Clinic KL has been delivering Botox treatment in Malaysia since 2001.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-wine hover:bg-white/90 px-8 py-3 rounded-full font-medium shadow-lg flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Free Consultation
            </motion.button>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-white/70 text-sm mt-6">
            Limited slots available this week
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default MasseterBotoxPage;