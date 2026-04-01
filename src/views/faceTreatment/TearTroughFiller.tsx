"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  MapPin,
  Calendar,
  CheckCircle,
  Syringe,
  Clock,
  Heart,
  Shield,
  ArrowRight,
  AlertCircle,
  Activity,
  Zap,
  Eye,
  AlertTriangle,
  Droplet,
  TrendingUp,
  User,
  Sun,
  Wind,
  Droplets,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import Whatsapp from "../../components/Whatsapp";
import Image from "next/image";

interface TearTroughFillerProps {
  locale: string;
}

export default function TearTroughFiller({ locale }: TearTroughFillerProps) {
  const darkCircleTypes = [
    {
      type: "Hollow and Structural",
      cause: "Volume loss in the tear trough and orbital fat compartments. Cheek descent pulls support away from the lower eyelid.",
      appearance: "A sunken groove or hollow beneath the eye casting a dark shadow. Face looks tired regardless of sleep.",
      treatment: "Tear trough filler. This is the type filler was designed for",
    },
    {
      type: "Pigmented (Brown)",
      cause: "Excess melanin production in the under-eye skin. More common in South Asian, Malay and darker-complexion patients.",
      appearance: "Brown or tan discolouration. The skin is flat, not hollow. Shadow present even in bright light.",
      treatment: "Pico laser, skin booster, topical brightening agents. Filler does not reduce pigment",
    },
    {
      type: "Vascular (Blue/Purple)",
      cause: "Thin under-eye skin revealing blood vessels beneath. Worsened by dehydration, allergies, and poor sleep.",
      appearance: "Blue or purple tint, often worst when tired or after alcohol. Skin is flat or slightly sunken.",
      treatment: "Skin booster, Rejuran, NCTF to thicken skin quality. Filler may slightly help if hollow component present",
    },
    {
      type: "Puffy Fat Herniation",
      cause: "Weakened orbital septum allowing fat pads to bulge forward beneath the eye",
      appearance: "Physical puffiness or swelling, most noticeable in the morning. A visible bulge, not just a shadow.",
      treatment: "Agnes RF, surgical blepharoplasty. Filler can worsen puffiness by adding volume on top of a fat bag",
    },
  ];

  const fillerProducts = [
    {
      name: "Belotero Balance",
      description: "Very soft, low-hygroscopic HA filler specifically formulated for superficial and periorbital placement. Integrates smoothly with tissue without water-attracting swelling.",
      bestFor: "Excellent safety profile in periorbital zone",
    },
    {
      name: "Teosyal Redensity 2",
      description: "Dedicated tear trough filler containing hyaluronic acid combined with amino acids, vitamins and minerals. Designed specifically for the delicate periorbital zone.",
      bestFor: "Provides both volumising and skin quality improvement",
    },
    {
      name: "Juvederm Volbella",
      description: "Softest product in the Juvederm range. Used for tear trough when a very subtle, light correction is needed in patients with relatively thin skin.",
      bestFor: "Reduces risk of bluish Tyndall effect in extremely thin periorbital skin",
    },
  ];

  const pricingTiers = [
    { treatment: "Tear trough filler (under-eye correction)", volume: "0.5 to 1 ml", price: "RM 2,200 – RM 2,600" },
    { treatment: "Tear trough + facial balancing (e.g. cheek support)", volume: "Customised", price: "RM 3,000 – RM 5,000+" },
  ];

  const faqData = [
    { q: "Will tear trough filler remove my dark circles?", a: "It depends entirely on what is causing your dark circles. If your dark circles are caused by hollowness and shadow from a sunken tear trough, filler will significantly improve them. If they are caused by brown pigmentation from excess melanin, filler will not help. If they are caused by blue-purple vascular showing through thin skin, filler provides partial improvement at best. The doctor diagnoses your dark circle type at consultation before recommending treatment." },
    { q: "How long does tear trough filler last in Malaysia?", a: "Tear trough filler typically lasts 9 to 15 months. The under-eye area has very little muscle movement, which means the filler breaks down more slowly than in high-movement areas like the lips. Some patients report maintained improvement for over 12 months with soft products like Belotero. Individual metabolism and the product used affect longevity." },
    { q: "How much does tear trough filler cost in Malaysia in 2026?", a: "Tear trough filler at Nexus Clinic KL typically ranges from RM 2,200 to RM 2,600 per session depending on the product used and the level of correction required. Combined tear trough and midface treatments, such as cheek support, generally range from RM 3,000 to RM 5,000+ depending on the volume and areas treated. All pricing is confirmed after consultation to ensure safe and personalised treatment planning." },
    { q: "Is tear trough filler safe?", a: "When performed by a trained medical doctor with the correct product and technique in a proper clinical setting, tear trough filler has a strong safety record. The most common complications, the Tyndall effect and migration, are related to technique and product selection rather than the treatment itself. At Nexus Clinic KL, tear trough filler follows strict assessment criteria, product selection guidelines and cannula technique to minimise these risks." },
    { q: "How much filler is needed for the tear trough?", a: "Most patients need 0.3 to 0.8ml per side for natural-looking correction. This is one of the lowest-volume areas on the face and should stay that way. More than 1ml per side in a single tear trough session is rarely clinically appropriate and increases the risk of puffiness, Tyndall effect and migration." },
    { q: "Can tear trough filler be dissolved?", a: "Yes. HA tear trough filler is fully dissolvable with hyaluronidase. If you develop the Tyndall effect, puffiness, migration or are simply unhappy with the result, the filler can be partially or completely removed. This reversibility is particularly important in the under-eye area given the high visibility of complications. At Nexus Clinic KL, hyaluronidase is available at every filler appointment." },
    { q: "Should I get cheek filler or tear trough filler first?", a: "For many patients, cheek filler should come first. When the cheek has descended and is contributing to tear trough depth, filling the tear trough without addressing the midface support produces a less natural, less long-lasting result. The doctor assesses the relationship between your cheek position and tear trough depth at consultation and advises the optimal sequence." },
    { q: "How do I know if I am a suitable candidate for tear trough filler?", a: "The clearest sign that you are a suitable candidate is that your under-eye concern looks like a hollow groove or dark shadow rather than a puffy swelling. If you look tired but your under-eye is more sunken than puffy, filler is likely appropriate. If you have significant puffiness or eye bag fat protrusion, filler is not the right treatment. A proper clinical assessment at consultation confirms candidacy definitively." },
    { q: "What is the Tyndall effect and how is it prevented?", a: "The Tyndall effect is a bluish discolouration that occurs when filler is placed too superficially under the very thin under-eye skin. The HA gel scatters light through the skin surface and creates a visible blue tint. It is the most common complication of incorrectly performed tear trough filler. It is prevented by deep placement on the periosteum using a low-hygroscopic soft product via cannula technique. If it occurs, it is treated with hyaluronidase." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-light to-rose/15" />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-rose/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-wine" />
                <span className="text-sm font-inter text-wine font-medium">Under-Eye Rejuvenation</span>
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
              >
                Tear Trough Filler in Malaysia for{" "}
                <span className="text-wine">Brighter, Refreshed Under-Eyes That Look Rested</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-taupe font-inter leading-relaxed"
              >
                The under-eye area is where the face gives away how you feel before you say a word. 
                Dark hollows, heavy shadows, and a sunken groove create the impression of tiredness, stress, and age.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-brown font-inter"
              >
                Tear trough filler at Nexus Clinic Kuala Lumpur addresses the structural cause of that shadow: 
                the hollow groove that forms as orbital volume depletes and the cheek descends away from the lower eyelid. 
                Soft, precisely placed hyaluronic acid filler smooths the transition, reducing the shadow and restoring a brighter, more rested appearance.
              </motion.p>

              <motion.div className="bg-wine/5 p-4 rounded-xl border-l-4 border-wine">
                <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Important Clinical Note
                </p>
                <p className="text-taupe font-inter text-sm mt-1">
                  Not every dark circle or eye bag responds to filler. A proper diagnostic assessment before treatment protects your result and your investment.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInLeft} 
                className="flex flex-col sm:flex-row gap-4 items-center justify-start pt-2"
              >
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-wine text-light px-8 py-4 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Book Under-Eye Assessment
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <Whatsapp message="Hi, I'm interested in tear trough filler at Nexus Clinic KL. I'd like to book a consultation." variant="light" />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <Image
                  src="/images/face/Tear Trough Filler.png"
                  alt="Nexus Clinic Kuala Lumpur - Tear Trough Filler Treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream p-4 rounded-xl shadow-lg hidden md:block">
                <p className="font-inter font-bold text-brown">✨ Refreshed Look</p>
                <p className="font-inter text-sm text-taupe">Restored brightness • Natural results</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-12 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-taupe/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-wine" />
                </div>
                <h2 className="font-georgia text-2xl md:text-3xl text-brown">Trust at a glance</h2>
              </div>
              <div className="hidden sm:block w-px h-8 bg-taupe/20" />
              <p className="text-taupe font-inter text-sm">Nexus Clinic Kuala Lumpur — Excellence in Aesthetic Medicine</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 border-y border-taupe/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Established</p>
                  <p className="font-georgia text-brown font-bold text-lg">2001</p>
                  <p className="font-inter text-taupe text-xs">Over 20 years of excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Location</p>
                  <p className="font-georgia text-brown font-bold text-sm">Wisma UOA II, Jalan Pinang</p>
                  <p className="font-inter text-taupe text-xs">KLCC, 50450 Kuala Lumpur</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Opening Hours</p>
                  <p className="font-georgia text-brown font-bold text-sm">Monday - Saturday</p>
                  <p className="font-inter text-taupe text-xs">9:00am – 6:00pm | Closed Sundays & PH</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Cannula Technique</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Single entry point, minimised bruising</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Eye className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Tyndall Effect Prevention</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Deep placement, low-hygroscopic products</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Low-Volume Discipline</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">0.3-0.8ml per side for natural results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Treatment Overview Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Tear Trough Filler Treatment Overview</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Treatment", value: "Soft HA filler for under-eye hollows" },
              { icon: Clock, label: "Session Time", value: "20 to 30 minutes" },
              { icon: Heart, label: "Downtime", value: "Minimal, 3-7 days" },
              { icon: Zap, label: "Results", value: "Immediate, final at 7-14 days" },
            ].map((item, idx) => (
              <div key={idx} className="bg-light p-5 rounded-xl border border-taupe/10 shadow-sm">
                <item.icon className="w-8 h-8 text-wine mb-3" />
                <p className="font-inter text-sm text-taupe">{item.label}</p>
                <p className="font-georgia text-md text-brown font-semibold">{item.value}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 rounded-2xl p-6 border border-wine/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="font-inter text-sm text-taupe">Longevity</p>
                <p className="font-georgia text-brown font-semibold">9 to 15 months</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Reversible</p>
                <p className="font-georgia text-brown font-semibold">Yes. Fully dissolvable with hyaluronidase</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Volume Used</p>
                <p className="font-georgia text-brown font-semibold">0.3 to 0.8ml per side</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown">Hollow tear troughs, under-eye shadow from volume loss</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Under-Eye Concern | Free Assessment
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Four Types of Dark Circles Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Four Types of Dark Circles in Malaysia</h2>
            <p className="text-taupe font-inter">Only one responds well to filler</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Type</th>
                  <th className="p-4 text-left font-georgia">What Causes It</th>
                  <th className="p-4 text-left font-georgia">What It Looks Like</th>
                  <th className="p-4 text-left font-georgia">Best Treatment</th>
                 </tr>
              </thead>
              <tbody>
                {darkCircleTypes.map((type, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{type.type}</td>
                    <td className="p-4 text-taupe font-inter">{type.cause}</td>
                    <td className="p-4 text-taupe font-inter">{type.appearance}</td>
                    <td className="p-4 text-taupe font-inter">{type.treatment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              Many patients have a combination of more than one type. A proper diagnostic assessment before treatment is essential.
              At Nexus Clinic KL, the doctor assesses your under-eye type at consultation and gives you an honest picture of what filler will and will not improve.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get a Proper Under-Eye Diagnosis | Free Assessment
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Under-Eye Concerns in Malaysia Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                Under-Eye Concerns in Malaysia
              </h2>
              <p className="text-2xl text-wine font-georgia">Why local patients present differently</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-5 h-5 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown">Higher Melanin Levels</p>
                    <p className="text-taupe font-inter text-sm">Patients of Malay, Indian and Chinese descent have genetic predisposition to periorbital hyperpigmentation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Wind className="w-5 h-5 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown">Allergic Rhinitis & Allergic Shiners</p>
                    <p className="text-taupe font-inter text-sm">Nasal congestion causes venous congestion around the eyes, darkening the under-eye skin.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-5 h-5 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown">Early Midface Volume Loss</p>
                    <p className="text-taupe font-inter text-sm">Asian patients experience midface volume loss earlier than Western patients, deepening tear troughs.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-2xl border border-taupe/20">
              <h3 className="font-georgia text-xl text-brown mb-4">Why Cheek Filler Sometimes Needs to Come First</h3>
              <p className="text-taupe font-inter text-sm mb-4">
                The tear trough deepens in part because the cheek below it has descended. When the cheek drops, 
                the lid-cheek junction widens and support for the lower eyelid disappears.
              </p>
              <p className="text-taupe font-inter text-sm mb-4">
                Adding tear trough filler alone fills the hollow but does not address the structural reason the hollow formed. 
                The result lasts less time, requires more frequent top-ups and is less natural-looking.
              </p>
              <div className="bg-wine/5 p-3 rounded-lg">
                <p className="text-brown font-inter text-xs">
                  At Nexus Clinic KL, the doctor assesses the relationship between your cheek position and tear trough depth. 
                  Patients who need cheek support first are given a staged treatment recommendation.
                </p>
              </div>
              <button className="mt-4 text-wine font-inter font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Get the Right Treatment Sequence for Your Eyes
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tear Trough Demanding Area Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Tear Trough Filler</h2>
            <p className="text-wine font-georgia text-xl">The Most Technically Demanding Facial Filler Area</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="bg-cream p-5 rounded-xl border border-taupe/10">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-georgia text-lg text-brown mb-2">The Tyndall Effect</h3>
              <p className="text-taupe font-inter text-sm">If filler is placed too superficially, HA gel scatters light and creates a visible bluish tint under the skin. Prevented by deep placement with soft, low-hygroscopic products.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-cream p-5 rounded-xl border border-taupe/10">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-georgia text-lg text-brown mb-2">The Negative Vector Problem</h3>
              <p className="text-taupe font-inter text-sm">Patients with orbital rim behind the eyeball are poor candidates for tear trough filler. The doctor assesses orbital vector at consultation.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-cream p-5 rounded-xl border border-taupe/10">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Droplet className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-georgia text-lg text-brown mb-2">Low-Volume Discipline</h3>
              <p className="text-taupe font-inter text-sm">Most patients need only 0.3 to 0.8ml per side. More than 1ml per side increases risk of puffiness, Tyndall effect and migration.</p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Book with a Clinic That Understands Why This Treatment Is Different
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Filler Products Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Filler Products Used for Tear Trough Treatment</h2>
            <p className="text-taupe font-inter">At Nexus Clinic KL</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {fillerProducts.map((product, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/20 hover:shadow-lg transition-shadow">
                <h3 className="font-georgia text-xl text-brown mb-2">{product.name}</h3>
                <p className="text-taupe font-inter text-sm mb-3">{product.description}</p>
                <div className="mt-3 pt-3 border-t border-taupe/10">
                  <p className="text-wine font-inter text-xs font-semibold">✓ {product.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-taupe text-sm">
              According to the International Society of Aesthetic Plastic Surgery 2024 Global Statistics Report, 
              periorbital and under-eye rejuvenation treatments were the third most searched aesthetic concern among patients aged 25 to 40 in Southeast Asia.
            </p>
            <p className="text-taupe text-xs mt-1">[ISAPS Global Statistics Report 2024]</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Ask Which Product Is Right for Your Under-Eyes
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Procedure Steps Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Tear Trough Filler Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Under-Eye Diagnostic Assessment", desc: "Doctor assesses under-eye type, skin thickness, fat herniation, and whether cheek descent is contributing." },
              { step: "02", title: "Treatment Plan and Candidacy Confirmation", desc: "Product, volume and placement depth confirmed. Alternative treatments recommended if filler not appropriate." },
              { step: "03", title: "Numbing and Cannula Injection", desc: "Topical numbing applied. Blunt cannula deposits filler through a single entry point. 15-25 minutes." },
              { step: "04", title: "Immediate Review and Aftercare", desc: "Results reviewed from multiple angles. Full aftercare provided. Two-week follow-up scheduled." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="w-14 h-14 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-georgia text-lg text-brown mb-2 font-semibold">{item.title}</h3>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-10">
            <button className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2">
              Book Your Tear Trough Filler Appointment
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-taupe text-sm mt-3">Same-day results at Nexus Clinic KL</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Tear Trough Filler Price in Malaysia</h2>
            <p className="text-taupe font-inter">Transparent 2026 Pricing at Nexus Clinic KL</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-light rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Treatment</th>
                  <th className="p-4 text-left font-georgia">Typical Volume</th>
                  <th className="p-4 text-left font-georgia">Price Range (2026)</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, idx) => (
                  <tr key={idx} className="border-t border-taupe/10">
                    <td className="p-4 font-inter text-brown">{tier.treatment}</td>
                    <td className="p-4 font-inter text-taupe">{tier.volume}</td>
                    <td className="p-4 font-inter font-semibold text-wine">{tier.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-wine/5">
                  <td colSpan={3} className="p-4 text-taupe font-inter text-sm italic">
                    * All treatments are customised based on your under-eye condition. Final pricing confirmed during consultation.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-taupe text-sm">
              A published stepwise assessment framework from the journal Aesthetic Surgery (2024) found that 
              precise patient categorisation before treatment was the single most important predictor of tear trough filler satisfaction.
            </p>
            <p className="text-taupe text-xs mt-1">[Aesthetic Surgery Journal, PMC Stepwise Assessment Framework for Tear Trough, 2024]</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get Your Personalised Tear Trough Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Longevity Reality Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Tear Trough Filler Longevity Reality</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">What to expect and what influences your results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Factors Affecting Longevity Card */}
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-2xl border border-taupe/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown">Factors Affecting Longevity</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Filler brand and formulation: Soft, low-hygroscopic products designed for periorbital area",
                  "Individual metabolism: Faster metabolism breaks down filler more quickly",
                  "Lifestyle factors: UV exposure, sleep quality, and skincare routine",
                  "Initial volume: Conservative volumes provide natural results",
                  "Cheek support: Proper midface foundation extends tear trough result",
                ].map((factor, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-taupe font-inter text-sm">
                    <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  Most patients schedule maintenance top-ups between 12 and 15 months to maintain optimal results.
                </p>
              </div>
            </motion.div>

            {/* Longevity Range Card */}
            <motion.div
              variants={fadeInRight}
              className="bg-gradient-to-br from-wine to-rose p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-georgia text-2xl font-bold">Tear Trough Filler Longevity</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Minimum</span>
                    <span className="font-georgia text-2xl font-bold text-white">9 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Fast metabolism, first-time patients</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Average</span>
                    <span className="font-georgia text-2xl font-bold text-white">12 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "67%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Most patients with standard metabolism</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Maximum</span>
                    <span className="font-georgia text-2xl font-bold text-white">15+ months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "83%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Optimal product, good cheek support, ideal metabolism</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Results vary by product brand, individual metabolism, and cheek support.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-taupe font-inter text-sm">
              ✨ Regular maintenance every 12-15 months helps maintain your refreshed under-eye appearance
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Side Effects & Aftercare Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Side Effects and Aftercare</h2>
            <p className="text-taupe font-inter">What to expect after treatment</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Temporary Effects
              </h3>
              <ul className="space-y-2">
                {[
                  "Mild swelling in the under-eye area, resolving within 3 to 7 days",
                  "Bruising possible, fading within 5 to 10 days",
                  "Slight firmness or puffiness in the first few days",
                  "Temporary tightness or mild discomfort for 24-48 hours",
                ].map((effect, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-wine" />
                Risk of the Tyndall Effect
              </h3>
              <p className="text-taupe font-inter text-sm mb-3">
                If filler is placed too superficially, it can create a bluish tint visible through the skin. 
                This is prevented by deep placement with correct product and reversed with hyaluronidase if it occurs.
              </p>
              <h3 className="font-georgia text-lg text-brown mt-4 mb-2">Rare Risks</h3>
              <ul className="space-y-1">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <AlertCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Migration of filler away from original placement site</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <AlertCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Nodule formation or irregular contour</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <AlertCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Vascular occlusion, extremely rare but requires emergency management</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-4">Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Avoid pressing, rubbing, or touching the under-eye area for 48 hours",
                "Sleep elevated on an extra pillow for the first two nights",
                "Apply cool packs gently if swelling is uncomfortable",
                "Avoid alcohol for the first 24 hours",
                "Skip intense exercise for 24 to 48 hours",
                "Avoid facial massages near the eye area for two weeks",
                "Assess your final result at 14 days when all swelling has resolved",
              ].map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQ data={faqData} />
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-3xl md:text-5xl text-light">
              Book Tear Trough Filler in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Looking tired despite adequate rest is one of the most common complaints that brings patients to aesthetic clinics. 
              When the cause is structural hollowing, filler is the most effective solution available.
            </p>
            <p className="text-cream/90 font-inter">
              At Nexus Clinic KL, the assessment comes first. Every tear trough treatment starts with a diagnosis. 
              You leave knowing exactly what is causing your under-eye concern and whether filler is the right treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Under-Eye Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for tear trough filler at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors">Explore Cheek Filler</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">Explore Skin Boosters</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}